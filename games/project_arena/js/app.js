// ============================================================
// Descrição geral: inicialização geral do Project Arena V2.0,
// incluindo preparação local, conexão da equipe à Arena Cloud
// e escuta da pontuação pelo painel do árbitro.
// Data de criação: 02/07/2026
// Versão: 2.0.1
// Copyright: Clayton Silva
// ============================================================

let canceladorEscutaEquipesCloud = null;

document.addEventListener("DOMContentLoaded", async () => {

    prepararSessaoSeNecessario();

    configurarPainelArbitro();
    configurarPainelEquipe();

    atualizarPainelEquipe();
    atualizarTelaMissaoEquipe();
    atualizarRanking();
    atualizarHistoricoNaTela();
    atualizarProgressoMissao();

    configurarEscutaEquipesCloudSePossivel();

    if (typeof configurarEscutaHistoricoCloudSePossivel === "function") {
        configurarEscutaHistoricoCloudSePossivel();
    }

    setInterval(() => {
        atualizarPainelEquipe();
        atualizarTelaMissaoEquipe();
        atualizarRanking();
        atualizarHistoricoNaTela();

        if (typeof configurarEscutaHistoricoCloudSePossivel === "function") {
            configurarEscutaHistoricoCloudSePossivel();
        }

        if (typeof atualizarRankingCloudNaTelaSePossivel === "function") {
            atualizarRankingCloudNaTelaSePossivel();
        }

    }, 1000);
});

// ------------------------------------------------------------
// PAINEL DO ÁRBITRO
// ------------------------------------------------------------

function configurarPainelArbitro() {
    const btnIniciar = document.getElementById("btnIniciar");
    const btnLiberar = document.getElementById("btnLiberar");
    const btnEncerrar = document.getElementById("btnEncerrar");
    const btnFinalizar = document.getElementById("btnFinalizar");
    const btnReiniciar = document.getElementById("btnReiniciar");

    if (btnIniciar) {
        btnIniciar.addEventListener("click", iniciarSessao);
    }

    if (btnLiberar) {
        btnLiberar.addEventListener("click", liberarMissao);
    }

    if (btnEncerrar) {
        btnEncerrar.addEventListener("click", encerrarMissao);
    }

    if (btnFinalizar) {
        btnFinalizar.addEventListener("click", finalizarSessao);
    }

    if (btnReiniciar) {
        btnReiniciar.addEventListener("click", reiniciarTudo);
    }
}

// ------------------------------------------------------------
// PAINEL DA EQUIPE
// ------------------------------------------------------------

function configurarPainelEquipe() {
    const btnEntrarSessao = document.getElementById("btnEntrarSessao");
    const btnResponder = document.getElementById("btnResponder");
    const equipeSelecionada = document.getElementById("equipeSelecionada");

    if (btnEntrarSessao) {
        btnEntrarSessao.addEventListener("click", entrarSessaoEquipe);
    }

    if (btnResponder) {
        btnResponder.addEventListener("click", responderMissao);
    }

    if (equipeSelecionada) {
        equipeSelecionada.addEventListener("change", () => {
            selecionarEquipe(equipeSelecionada.value);
            atualizarTelaMissaoEquipe();
        });

        selecionarEquipe(equipeSelecionada.value);
    }

    const parametros = new URLSearchParams(window.location.search);
    const idSessaoUrl = parametros.get("sessao");

    if (idSessaoUrl) {
        const campoCodigo = document.getElementById("codigoSessao");

        if (campoCodigo) {
            campoCodigo.value = idSessaoUrl;
        }

        conectarEquipeNaSessao(idSessaoUrl);
    }
}

// ------------------------------------------------------------
// ENTRADA DA EQUIPE NA SESSÃO
// ------------------------------------------------------------

function entrarSessaoEquipe() {
    const campoCodigo = document.getElementById("codigoSessao");

    if (!campoCodigo) {
        return;
    }

    const codigo = campoCodigo.value.trim();

    if (!codigo) {
        alert("Informe o código da sessão.");
        return;
    }

    conectarEquipeNaSessao(codigo);
}

async function conectarEquipeNaSessao(idSessao) {
    try {
        localStorage.setItem("idSessaoCloud", idSessao);
        localStorage.setItem("modoCloud", "sim");

        const status = document.getElementById("statusEquipe");

        if (status) {
            status.textContent = "Conectando à sessão...";
        }

        const arenaCloud = await import("./arena-cloud.js");

        arenaCloud.escutarSessao(idSessao, sessao => {
            if (!sessao) {
                if (status) {
                    status.textContent = "Sessão não encontrada.";
                }

                return;
            }

            aplicarSessaoCloudNaEquipe(sessao);

            if (typeof configurarEscutaHistoricoCloudSePossivel === "function") {
                configurarEscutaHistoricoCloudSePossivel();
            }
        });

    } catch (erro) {
        console.warn("Não foi possível conectar à sessão.", erro);

        const status = document.getElementById("statusEquipe");

        if (status) {
            status.textContent = "Erro ao conectar à sessão.";
        }
    }
}

// ------------------------------------------------------------
// APLICAÇÃO DOS DADOS DA SESSÃO CLOUD NA EQUIPE
// ------------------------------------------------------------

function aplicarSessaoCloudNaEquipe(sessao) {
    if (sessao.missoesSessao) {
        localStorage.setItem(
            "missoesSessao",
            JSON.stringify(sessao.missoesSessao)
        );
    }

    if (sessao.indiceMissaoAtual !== undefined) {
        localStorage.setItem(
            "indiceMissaoAtual",
            String(sessao.indiceMissaoAtual)
        );
    }

    if (sessao.missaoLiberada !== undefined) {
        localStorage.setItem(
            "missaoLiberada",
            sessao.missaoLiberada
        );
    }

    if (sessao.equipes) {
        aplicarEquipesCloudNoEstadoLocal(sessao.equipes);
    }

    atualizarPainelEquipe();
    atualizarTelaMissaoEquipe();
    atualizarProgressoMissao();

    const status = document.getElementById("statusEquipe");

    if (status) {
        if (localStorage.getItem("missaoLiberada") === "sim") {
            status.textContent = "Missão liberada pelo árbitro.";
        } else {
            status.textContent = "Conectado. Aguardando liberação da missão.";
        }
    }
}

// ------------------------------------------------------------
// ESCUTA DA PONTUAÇÃO NO PAINEL DO ÁRBITRO
// ------------------------------------------------------------

async function configurarEscutaEquipesCloudSePossivel() {
    try {
        const idSessao = localStorage.getItem("idSessaoCloud");

        if (!idSessao) {
            return;
        }

        if (canceladorEscutaEquipesCloud) {
            canceladorEscutaEquipesCloud();
            canceladorEscutaEquipesCloud = null;
        }

        const firebaseService = await import("./firebase-service.js");

        canceladorEscutaEquipesCloud = firebaseService.escutarDados(
            `sessoes/${idSessao}/equipes`,
            equipesCloud => {
                if (!equipesCloud) {
                    return;
                }

                aplicarEquipesCloudNoEstadoLocal(equipesCloud);
                atualizarRanking();
                atualizarPainelEquipe();
            }
        );

    } catch (erro) {
        console.warn("Não foi possível escutar equipes na nuvem.", erro);
    }
}

function aplicarEquipesCloudNoEstadoLocal(equipesCloud) {
    const listaBase = obterEquipes();

    const novaLista = listaBase.map(equipeLocal => {
        const equipeCloud = equipesCloud[equipeLocal.id];

        if (!equipeCloud) {
            return equipeLocal;
        }

        return {
            ...equipeLocal,
            nome: equipeCloud.nome || equipeLocal.nome,
            pontos: equipeCloud.pontos || 0,
            xp: equipeCloud.xp || 0,
            nivel: equipeCloud.nivel || "Estagiário"
        };
    });

    salvarEquipes(novaLista);
}

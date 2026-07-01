// ============================================================
// Descrição geral: inicialização geral do Project Arena V2.0,
// incluindo preparação local e conexão da equipe à Arena Cloud.
// Data de criação: 30/06/2026
// Versão: 2.0
// Copyright: Clayton Silva
// ============================================================

document.addEventListener("DOMContentLoaded", async () => {

    prepararSessaoSeNecessario();

    configurarPainelArbitro();
    configurarPainelEquipe();

    atualizarPainelEquipe();
    atualizarTelaMissaoEquipe();
    atualizarRanking();
    atualizarHistoricoNaTela();
    atualizarProgressoMissao();

    setInterval(() => {
        atualizarPainelEquipe();
        atualizarTelaMissaoEquipe();
        atualizarRanking();
        atualizarHistoricoNaTela();

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
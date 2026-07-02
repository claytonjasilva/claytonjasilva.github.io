// ============================================================
// Descrição geral: funções de histórico e relatórios do Project Arena V2.0,
// com persistência local, sincronização em nuvem e consolidação
// correta do relatório final do árbitro.
// Data de criação: 02/07/2026
// Versão: 2.0.5
// Copyright: Clayton Silva
// ============================================================

let canceladorEscutaHistoricoCloud = null;
let idSessaoHistoricoEscutado = null;

// ------------------------------------------------------------
// UTILITÁRIOS
// ------------------------------------------------------------

function converterObjetoFirebaseParaLista(dados) {
    if (!dados) {
        return [];
    }

    if (Array.isArray(dados)) {
        return dados.filter(Boolean);
    }

    return Object.keys(dados).map(chave => ({
        idRegistro: chave,
        ...dados[chave]
    }));
}

function textoNormalizado(valor) {
    return String(valor || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function obterIdEquipeDoRegistro(registro) {
    const idDireto = textoNormalizado(registro.equipeId || registro.idEquipe);

    if (idDireto) {
        return idDireto;
    }

    const equipeTexto = textoNormalizado(registro.equipe || registro.nomeEquipe);

    if (equipeTexto.includes("alpha")) return "alpha";
    if (equipeTexto.includes("beta")) return "beta";
    if (equipeTexto.includes("gama") || equipeTexto.includes("gamma")) return "gama";

    return equipeTexto;
}

function obterAcertoDoRegistro(registro) {
    if (registro.acertou === true || registro.correta === true || registro.resultado === true) {
        return true;
    }

    if (registro.acertou === false || registro.correta === false || registro.resultado === false) {
        return false;
    }

    const valor = textoNormalizado(
        registro.acertou ?? registro.correta ?? registro.resultado ?? registro.status ?? ""
    );

    if (["true", "sim", "s", "1", "acertou", "acerto", "correta", "correto", "certo"].includes(valor)) {
        return true;
    }

    if (["false", "nao", "n", "0", "errou", "erro", "incorreta", "incorreto", "errado"].includes(valor)) {
        return false;
    }

    return false;
}

function normalizarRegistroHistorico(registro) {
    const acertou = obterAcertoDoRegistro(registro);

    return {
        ...registro,
        equipeId: obterIdEquipeDoRegistro(registro),
        acertou,
        pontos: Number(registro.pontos || 0),
        xp: Number(registro.xp || 0)
    };
}

function chaveRegistroHistorico(registro) {
    return [
        registro.idRegistro || "",
        registro.missaoId || registro.missao || "",
        registro.equipeId || registro.equipe || "",
        registro.resposta || "",
        registro.dataHora || ""
    ].join("|");
}

function removerDuplicidadesHistorico(historico) {
    const mapa = new Map();

    historico.forEach(item => {
        const registro = normalizarRegistroHistorico(item);
        const chave = chaveRegistroHistorico(registro);

        if (!mapa.has(chave)) {
            mapa.set(chave, registro);
        }
    });

    return Array.from(mapa.values());
}

// ------------------------------------------------------------
// HISTÓRICO LOCAL
// ------------------------------------------------------------

function obterHistorico() {
    const historico = JSON.parse(localStorage.getItem("historicoRespostas")) || [];
    return removerDuplicidadesHistorico(historico);
}

function salvarHistorico(historico) {
    localStorage.setItem(
        "historicoRespostas",
        JSON.stringify(removerDuplicidadesHistorico(historico))
    );
}

async function registrarHistorico(registro) {
    const registroCompleto = normalizarRegistroHistorico({
        ...registro,
        dataHora: registro.dataHora || new Date().toLocaleString("pt-BR")
    });

    const historico = obterHistorico();
    historico.push(registroCompleto);
    salvarHistorico(historico);

    await registrarHistoricoCloudSePossivel(registroCompleto);
}

// ------------------------------------------------------------
// HISTÓRICO NA NUVEM
// ------------------------------------------------------------

async function registrarHistoricoCloudSePossivel(registro) {
    try {
        const idSessao = localStorage.getItem("idSessaoCloud");

        if (!idSessao) {
            return;
        }

        const firebaseService = await import("./firebase-service.js");
        const registroNormalizado = normalizarRegistroHistorico(registro);

        await firebaseService.criarRegistro(
            `sessoes/${idSessao}/historicoRespostas`,
            {
                missao: registroNormalizado.missao || "",
                missaoId: registroNormalizado.missaoId || "",
                equipe: registroNormalizado.equipe || registroNormalizado.equipeId || "",
                equipeId: registroNormalizado.equipeId || "",
                resposta: registroNormalizado.resposta || "",
                correta: registroNormalizado.correta ?? registroNormalizado.acertou,
                acertou: registroNormalizado.acertou,
                pontos: Number(registroNormalizado.pontos || 0),
                xp: Number(registroNormalizado.xp || 0),
                dataHora: registroNormalizado.dataHora || new Date().toLocaleString("pt-BR")
            }
        );

    } catch (erro) {
        console.warn("Não foi possível registrar histórico na nuvem.", erro);
    }
}

async function configurarEscutaHistoricoCloudSePossivel() {
    try {
        const idSessao = localStorage.getItem("idSessaoCloud");

        if (!idSessao) {
            return;
        }

        if (idSessaoHistoricoEscutado === idSessao && canceladorEscutaHistoricoCloud) {
            return;
        }

        if (canceladorEscutaHistoricoCloud) {
            canceladorEscutaHistoricoCloud();
            canceladorEscutaHistoricoCloud = null;
        }

        const firebaseService = await import("./firebase-service.js");

        idSessaoHistoricoEscutado = idSessao;

        canceladorEscutaHistoricoCloud = firebaseService.escutarDados(
            `sessoes/${idSessao}/historicoRespostas`,
            historicoCloud => {
                const historicoLocal = obterHistorico();
                const historicoNuvem = converterObjetoFirebaseParaLista(historicoCloud);
                const historicoConsolidado = removerDuplicidadesHistorico([
                    ...historicoLocal,
                    ...historicoNuvem
                ]);

                salvarHistorico(historicoConsolidado);
                atualizarHistoricoNaTela();
            }
        );

    } catch (erro) {
        console.warn("Não foi possível escutar histórico na nuvem.", erro);
    }
}

// ------------------------------------------------------------
// TABELA DE HISTÓRICO
// ------------------------------------------------------------

function gerarTabelaHistorico() {
    const historico = obterHistorico();

    if (historico.length === 0) {
        return "<p>Nenhuma resposta registrada.</p>";
    }

    let html = `
        <table>
            <tr>
                <td>Missão</td>
                <td>Equipe</td>
                <td>Resposta</td>
                <td>Resultado</td>
                <td>Pontos</td>
                <td>Data/Hora</td>
            </tr>
    `;

    historico.forEach(item => {
        const registro = normalizarRegistroHistorico(item);

        html += `
            <tr>
                <td>${registro.missao || registro.missaoId || "-"}</td>
                <td>${registro.equipe || registro.equipeId || "-"}</td>
                <td>${registro.resposta || "-"}</td>
                <td>${registro.acertou ? "Acertou" : "Errou"}</td>
                <td>${registro.pontos || 0}</td>
                <td>${registro.dataHora || "-"}</td>
            </tr>
        `;
    });

    html += "</table>";
    return html;
}

// ------------------------------------------------------------
// RESUMO FINAL
// ------------------------------------------------------------

function calcularResumoFinal() {
    const listaEquipes = JSON.parse(localStorage.getItem("estadoEquipes")) || [];
    const historico = obterHistorico();

    if (listaEquipes.length === 0) {
        return [];
    }

    return listaEquipes
        .map(equipe => {
            const idEquipe = textoNormalizado(equipe.id);

            const respostasEquipe = historico.filter(item => {
                const registro = normalizarRegistroHistorico(item);
                return registro.equipeId === idEquipe;
            });

            const respostas = respostasEquipe.length;
            const acertos = respostasEquipe.filter(item => normalizarRegistroHistorico(item).acertou === true).length;
            const erros = respostas - acertos;

            const percentual = respostas > 0
                ? Math.round((acertos / respostas) * 100)
                : 0;

            return {
                ...equipe,
                respostas,
                acertos,
                erros,
                percentual
            };
        })
        .sort((a, b) => {
            if ((b.pontos || 0) !== (a.pontos || 0)) {
                return (b.pontos || 0) - (a.pontos || 0);
            }

            return (b.percentual || 0) - (a.percentual || 0);
        });
}

async function gerarRelatorioFinal() {
    await configurarEscutaHistoricoCloudSePossivel();

    const relatorio = document.getElementById("relatorioFinal");

    if (!relatorio) {
        return;
    }

    const resumo = calcularResumoFinal();

    if (resumo.length === 0) {
        relatorio.innerHTML = "<p>Nenhum dado disponível.</p>";
        return;
    }

    const vencedora = resumo[0];

    let html = `
        <h3>🏆 Equipe vencedora: ${vencedora.nome}</h3>

        <p><strong>Pontos:</strong> ${vencedora.pontos || 0}</p>
        <p><strong>XP:</strong> ${vencedora.xp || 0}</p>
        <p><strong>Nível:</strong> ${vencedora.nivel || "Estagiário"}</p>

        <hr>

        <h3>Resumo das equipes</h3>

        <table>
            <tr>
                <td>Equipe</td>
                <td>Pontos</td>
                <td>XP</td>
                <td>Respostas</td>
                <td>Acertos</td>
                <td>Erros</td>
                <td>Aproveitamento</td>
                <td>Nível</td>
            </tr>
    `;

    resumo.forEach(equipe => {
        html += `
            <tr>
                <td>${equipe.nome}</td>
                <td>${equipe.pontos || 0}</td>
                <td>${equipe.xp || 0}</td>
                <td>${equipe.respostas}</td>
                <td>${equipe.acertos}</td>
                <td>${equipe.erros}</td>
                <td>${equipe.percentual}%</td>
                <td>${equipe.nivel || "Estagiário"}</td>
            </tr>
        `;
    });

    html += "</table>";

    relatorio.innerHTML = html;
}

// ------------------------------------------------------------
// ATUALIZAÇÃO DA TELA
// ------------------------------------------------------------

function atualizarHistoricoNaTela() {
    const historicoArbitro = document.getElementById("historico");
    const historicoEquipe = document.getElementById("historicoEquipe");

    const tabela = gerarTabelaHistorico();

    if (historicoArbitro) {
        historicoArbitro.innerHTML = tabela;
    }

    if (historicoEquipe) {
        historicoEquipe.innerHTML = tabela;
    }
}

// ------------------------------------------------------------
// EXPORTAÇÃO DO RELATÓRIO
// ------------------------------------------------------------

function gerarObjetoRelatorioFinal() {
    return {
        projeto: "Project Arena",
        versao: "2.0",
        modoCloud: localStorage.getItem("modoCloud") || "nao",
        idSessaoCloud: localStorage.getItem("idSessaoCloud") || null,
        dataGeracao: new Date().toLocaleString("pt-BR"),
        resumoEquipes: calcularResumoFinal(),
        historico: obterHistorico()
    };
}

function exportarRelatorioJSON() {
    const relatorio = gerarObjetoRelatorioFinal();

    const conteudo = JSON.stringify(relatorio, null, 4);
    const blob = new Blob([conteudo], { type: "application/json" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "relatorio_project_arena.json";

    link.click();

    URL.revokeObjectURL(link.href);
}

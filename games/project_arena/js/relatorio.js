// ============================================================
// Descrição geral: funções de histórico e relatórios do Project Arena V2.0
// Data de criação: 30/06/2026
// Versão: 2.0
// Copyright: Clayton Silva
// ============================================================

// ------------------------------------------------------------
// HISTÓRICO
// ------------------------------------------------------------

function obterHistorico() {
    return JSON.parse(localStorage.getItem("historicoRespostas")) || [];
}

function salvarHistorico(historico) {
    localStorage.setItem("historicoRespostas", JSON.stringify(historico));
}

function registrarHistorico(registro) {
    const historico = obterHistorico();

    historico.push({
        ...registro,
        dataHora: new Date().toLocaleString("pt-BR")
    });

    salvarHistorico(historico);
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
        html += `
            <tr>
                <td>${item.missao || item.missaoId}</td>
                <td>${item.equipe || item.equipeId}</td>
                <td>${item.resposta}</td>
                <td>${item.acertou ? "Acertou" : "Errou"}</td>
                <td>${item.pontos || 0}</td>
                <td>${item.dataHora || "-"}</td>
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
    const equipes = JSON.parse(localStorage.getItem("estadoEquipes")) || [];
    const historico = obterHistorico();

    if (equipes.length === 0) {
        return [];
    }

    return equipes
        .map(equipe => {
            const respostasEquipe = historico.filter(item => item.equipeId === equipe.id);

            const respostas = respostasEquipe.length;
            const acertos = respostasEquipe.filter(item => item.acertou === true).length;
            const erros = respostasEquipe.filter(item => item.acertou === false).length;

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
        .sort((a, b) => b.pontos - a.pontos);
}

function gerarRelatorioFinal() {
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
        <p><strong>Nível:</strong> ${vencedora.nivel || 1}</p>

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
                <td>${equipe.nivel || 1}</td>
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
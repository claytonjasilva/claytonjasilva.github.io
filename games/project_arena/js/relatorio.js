// ============================================================
// Descrição geral: funções de relatório do Project Arena V1.2
// Data de criação: 29/06/2026
// Versão: 1.2
// Copyright: Clayton Silva
// ============================================================

function obterHistorico() {
    return JSON.parse(localStorage.getItem("historicoRespostas")) || [];
}

function salvarHistorico(historico) {
    localStorage.setItem("historicoRespostas", JSON.stringify(historico));
}

function registrarHistorico(registro) {
    const historico = obterHistorico();
    historico.push(registro);
    salvarHistorico(historico);
}

function gerarTabelaHistorico() {
    const historico = obterHistorico();

    if (historico.length === 0) {
        return "Nenhuma resposta registrada.";
    }

    let html = "<table>";
    html += "<tr><td>Missão</td><td>Equipe</td><td>Resposta</td><td>Resultado</td><td>Pontos</td></tr>";

    historico.forEach(item => {
        html += `
            <tr>
                <td>${item.missao}</td>
                <td>${item.equipe}</td>
                <td>${item.resposta}</td>
                <td>${item.acertou ? "Acertou" : "Errou"}</td>
                <td>${item.pontos}</td>
            </tr>
        `;
    });

    html += "</table>";
    return html;
}

function calcularResumoFinal() {
    const lista = JSON.parse(localStorage.getItem("estadoEquipes")) || [];

    if (lista.length === 0) {
        return [];
    }

    return lista
        .map(eq => {
            const historico = obterHistorico().filter(item => item.equipeId === eq.id);
            const respostas = historico.length;
            const acertos = historico.filter(item => item.acertou).length;
            const percentual = respostas > 0 ? Math.round((acertos / respostas) * 100) : 0;

            return {
                ...eq,
                respostas,
                acertos,
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
        relatorio.innerHTML = "Nenhum dado disponível.";
        return;
    }

    const vencedora = resumo[0];

    let html = `
        <h3>🏆 Equipe vencedora: ${vencedora.nome}</h3>
        <p><strong>Pontos:</strong> ${vencedora.pontos}</p>
        <p><strong>XP:</strong> ${vencedora.xp}</p>
        <p><strong>Nível:</strong> ${vencedora.nivel}</p>
        <hr>
        <h3>Resumo das equipes</h3>
        <table>
            <tr>
                <td>Equipe</td>
                <td>Pontos</td>
                <td>XP</td>
                <td>Acertos</td>
                <td>Aproveitamento</td>
                <td>Nível</td>
            </tr>
    `;

    resumo.forEach(eq => {
        html += `
            <tr>
                <td>${eq.nome}</td>
                <td>${eq.pontos}</td>
                <td>${eq.xp}</td>
                <td>${eq.acertos}/${eq.respostas}</td>
                <td>${eq.percentual}%</td>
                <td>${eq.nivel}</td>
            </tr>
        `;
    });

    html += "</table>";

    relatorio.innerHTML = html;
}

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
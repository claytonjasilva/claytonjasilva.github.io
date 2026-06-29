// ============================================================
// Descrição geral: funções de controle da sessão
// Data de criação: 29/06/2026
// Versão: 1.2
// Copyright: Clayton Silva
// ============================================================

function iniciarSessao() {
    localStorage.clear();

    localStorage.setItem("estadoEquipes", JSON.stringify(equipes));
    localStorage.setItem("missaoLiberada", "nao");
    localStorage.setItem("historicoRespostas", JSON.stringify([]));

    sortearMissoes(10);

    const status = document.getElementById("statusSessao");
    if (status) {
        status.textContent = "Sessão iniciada";
    }

    atualizarProgressoMissao();
    atualizarRanking();
    atualizarHistoricoNaTela();

    const relatorio = document.getElementById("relatorioFinal");
    if (relatorio) {
        relatorio.innerHTML = "A sessão ainda não foi finalizada.";
    }

    const area = document.getElementById("desafio");
    if (area) {
        area.innerHTML = "Sessão iniciada. Libere a primeira missão.";
    }

    zerarCronometro();
}

function finalizarSessao() {
    localStorage.setItem("missaoLiberada", "nao");
    pararCronometro();

    const status = document.getElementById("statusSessao");
    if (status) {
        status.textContent = "Sessão finalizada";
    }

    gerarRelatorioFinal();
    atualizarRanking();
    atualizarHistoricoNaTela();
}

function reiniciarTudo() {
    localStorage.clear();

    const status = document.getElementById("statusSessao");
    if (status) {
        status.textContent = "Aguardando início";
    }

    const area = document.getElementById("desafio");
    if (area) {
        area.innerHTML = "Nenhuma missão liberada.";
    }

    const ranking = document.getElementById("ranking");
    if (ranking) {
        ranking.innerHTML = "";
    }

    const historico = document.getElementById("historico");
    if (historico) {
        historico.innerHTML = "Nenhuma resposta registrada.";
    }

    const relatorio = document.getElementById("relatorioFinal");
    if (relatorio) {
        relatorio.innerHTML = "A sessão ainda não foi finalizada.";
    }

    zerarCronometro();
    atualizarProgressoMissao();
}

function prepararSessaoSeNecessario() {
    if (!localStorage.getItem("estadoEquipes")) {
        localStorage.setItem("estadoEquipes", JSON.stringify(equipes));
    }

    if (!localStorage.getItem("historicoRespostas")) {
        localStorage.setItem("historicoRespostas", JSON.stringify([]));
    }

    if (!localStorage.getItem("missaoLiberada")) {
        localStorage.setItem("missaoLiberada", "nao");
    }

    if (!localStorage.getItem("missoesSessao")) {
        sortearMissoes(10);
    }

    atualizarProgressoMissao();
    atualizarRanking();
    atualizarHistoricoNaTela();
}
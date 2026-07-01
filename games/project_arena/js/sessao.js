// ============================================================
// Descrição geral: funções de controle da sessão, mantendo a
// lógica local da V1.2 e acrescentando integração com
// a Arena Cloud / Firebase.
// Data de criação: 30/06/2026
// Versão: 2.0
// Copyright: Clayton Silva
// ============================================================

// ------------------------------------------------------------
// CRIAÇÃO DA SESSÃO NA NUVEM
// ------------------------------------------------------------

async function criarSessaoCloudSePossivel() {
    try {
        const arenaCloud = await import("./arena-cloud.js");

        const idSessao = await arenaCloud.criarSessao({
            nome: "Sessão Project Arena - Gestão de Projetos"
        });

        localStorage.setItem("idSessaoCloud", idSessao);
        localStorage.setItem("modoCloud", "sim");

        return idSessao;

    } catch (erro) {
        console.warn("Modo cloud indisponível. Sessão mantida localmente.", erro);
        localStorage.setItem("modoCloud", "nao");
        return null;
    }
}

// ------------------------------------------------------------
// ENCERRAMENTO DA SESSÃO NA NUVEM
// ------------------------------------------------------------

async function encerrarSessaoCloudSePossivel() {
    try {
        const idSessao = localStorage.getItem("idSessaoCloud");

        if (!idSessao) {
            return;
        }

        const arenaCloud = await import("./arena-cloud.js");

        await arenaCloud.encerrarSessao(idSessao);

    } catch (erro) {
        console.warn("Não foi possível encerrar a sessão na nuvem.", erro);
    }
}

// ------------------------------------------------------------
// INÍCIO DA SESSÃO
// ------------------------------------------------------------

async function iniciarSessao() {
    localStorage.clear();

    localStorage.setItem("estadoEquipes", JSON.stringify(equipes));
    localStorage.setItem("missaoLiberada", "nao");
    localStorage.setItem("historicoRespostas", JSON.stringify([]));

    await criarSessaoCloudSePossivel();

    if (localStorage.getItem("modoCloud") === "sim") {
        await registrarEquipesCloudSePossivel();
    }

    sortearMissoes(10);

    const status = document.getElementById("statusSessao");

    if (status) {
        const modoCloud = localStorage.getItem("modoCloud");

        if (modoCloud === "sim") {
            status.textContent = "Sessão iniciada em nuvem";
        } else {
            status.textContent = "Sessão iniciada em modo local";
        }
    }

    const codigoSessao = document.getElementById("codigoSessao");

    if (codigoSessao) {
        codigoSessao.textContent =
            localStorage.getItem("idSessaoCloud") || "Modo local";
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

// ------------------------------------------------------------
// FINALIZAÇÃO DA SESSÃO
// ------------------------------------------------------------

async function finalizarSessao() {
    localStorage.setItem("missaoLiberada", "nao");
    pararCronometro();

    await encerrarSessaoCloudSePossivel();

    const status = document.getElementById("statusSessao");

    if (status) {
        status.textContent = "Sessão finalizada";
    }

    gerarRelatorioFinal();
    atualizarRanking();
    atualizarHistoricoNaTela();
}

// ------------------------------------------------------------
// REINÍCIO GERAL
// ------------------------------------------------------------

function reiniciarTudo() {
    localStorage.clear();

    const status = document.getElementById("statusSessao");

    if (status) {
        status.textContent = "Aguardando início";
    }

    const codigoSessao = document.getElementById("codigoSessao");

    if (codigoSessao) {
        codigoSessao.textContent = "GP-TESTE";
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

// ------------------------------------------------------------
// PREPARAÇÃO DA SESSÃO
// ------------------------------------------------------------

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
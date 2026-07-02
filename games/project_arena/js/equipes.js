// ============================================================
// Descrição geral: definição, controle e atualização das equipes
// do Project Arena V2.0, com suporte local e integração estável
// com Arena Cloud / Firebase.
// Data de criação: 02/07/2026
// Versão: 2.0.1
// Copyright: Clayton Silva
// ============================================================

const equipes = [
    {
        id: "alpha",
        nome: "Equipe Alpha",
        pontos: 0,
        xp: 0,
        nivel: "Estagiário"
    },
    {
        id: "beta",
        nome: "Equipe Beta",
        pontos: 0,
        xp: 0,
        nivel: "Estagiário"
    },
    {
        id: "gama",
        nome: "Equipe Gama",
        pontos: 0,
        xp: 0,
        nivel: "Estagiário"
    }
];

// ------------------------------------------------------------
// ESTADO DAS EQUIPES
// ------------------------------------------------------------

function obterEquipes() {
    return JSON.parse(localStorage.getItem("estadoEquipes")) || equipes;
}

function salvarEquipes(listaEquipes) {
    localStorage.setItem("estadoEquipes", JSON.stringify(listaEquipes));
}

function inicializarEquipes() {
    const estadoAtual = JSON.parse(localStorage.getItem("estadoEquipes"));

    if (!estadoAtual || estadoAtual.length === 0) {
        salvarEquipes(equipes);
    }
}

// ------------------------------------------------------------
// SELEÇÃO DA EQUIPE
// ------------------------------------------------------------

function selecionarEquipe(equipeId) {
    localStorage.setItem("equipeSelecionada", equipeId);
    atualizarPainelEquipe();
}

function obterEquipeSelecionada() {
    const equipeId = localStorage.getItem("equipeSelecionada");
    const listaEquipes = obterEquipes();

    return listaEquipes.find(equipe => equipe.id === equipeId) || null;
}

// ------------------------------------------------------------
// NÍVEL DA EQUIPE
// ------------------------------------------------------------

function calcularNivelEquipe(xp) {
    if (xp >= 1000) {
        return "Mestre";
    }

    if (xp >= 700) {
        return "Especialista";
    }

    if (xp >= 400) {
        return "Analista";
    }

    if (xp >= 200) {
        return "Júnior";
    }

    return "Estagiário";
}

// ------------------------------------------------------------
// ATUALIZAÇÃO DA EQUIPE
// ------------------------------------------------------------

function atualizarEquipe(equipeId, pontosGanhos, xpGanho) {
    const listaEquipes = obterEquipes();

    const novaLista = listaEquipes.map(equipe => {
        if (equipe.id !== equipeId) {
            return equipe;
        }

        const novosPontos = (equipe.pontos || 0) + pontosGanhos;
        const novoXp = (equipe.xp || 0) + xpGanho;

        return {
            ...equipe,
            pontos: novosPontos,
            xp: novoXp,
            nivel: calcularNivelEquipe(novoXp)
        };
    });

    salvarEquipes(novaLista);
    atualizarEquipeCloudSePossivel(equipeId);
}

// ------------------------------------------------------------
// PAINEL DA EQUIPE
// ------------------------------------------------------------

function atualizarPainelEquipe() {
    const equipe = obterEquipeSelecionada();

    const nome = document.getElementById("nomeEquipe");
    const pontos = document.getElementById("pontosEquipe");
    const xp = document.getElementById("xpEquipe");
    const nivel = document.getElementById("nivelEquipe");

    if (!equipe) {
        if (nome) nome.textContent = "Nenhuma equipe selecionada";
        if (pontos) pontos.textContent = "0";
        if (xp) xp.textContent = "0";
        if (nivel) nivel.textContent = "-";
        return;
    }

    if (nome) nome.textContent = equipe.nome;
    if (pontos) pontos.textContent = equipe.pontos || 0;
    if (xp) xp.textContent = equipe.xp || 0;
    if (nivel) nivel.textContent = equipe.nivel || "Estagiário";
}

// ------------------------------------------------------------
// RESET DAS EQUIPES
// ------------------------------------------------------------

function resetarEquipes() {
    salvarEquipes(equipes);
    localStorage.removeItem("equipeSelecionada");
    atualizarPainelEquipe();
}

// ------------------------------------------------------------
// INTEGRAÇÃO COM ARENA CLOUD
// ------------------------------------------------------------

async function registrarEquipesCloudSePossivel() {
    try {
        const idSessao = localStorage.getItem("idSessaoCloud");

        if (!idSessao) {
            return;
        }

        const firebaseService = await import("./firebase-service.js");
        const listaEquipes = obterEquipes();

        for (const equipe of listaEquipes) {
            await firebaseService.salvarDados(
                `sessoes/${idSessao}/equipes/${equipe.id}`,
                {
                    id: equipe.id,
                    nome: equipe.nome,
                    pontos: equipe.pontos || 0,
                    xp: equipe.xp || 0,
                    nivel: equipe.nivel || "Estagiário"
                }
            );
        }

    } catch (erro) {
        console.warn("Não foi possível registrar equipes na nuvem.", erro);
    }
}

async function atualizarEquipeCloudSePossivel(equipeId) {
    try {
        const idSessao = localStorage.getItem("idSessaoCloud");

        if (!idSessao) {
            return;
        }

        const equipe = obterEquipes().find(item => item.id === equipeId);

        if (!equipe) {
            return;
        }

        const firebaseService = await import("./firebase-service.js");

        await firebaseService.atualizarDados(
            `sessoes/${idSessao}/equipes/${equipeId}`,
            {
                id: equipe.id,
                nome: equipe.nome,
                pontos: equipe.pontos || 0,
                xp: equipe.xp || 0,
                nivel: equipe.nivel || "Estagiário"
            }
        );

    } catch (erro) {
        console.warn("Não foi possível atualizar equipe na nuvem.", erro);
    }
}

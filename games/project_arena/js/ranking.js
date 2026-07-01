// ============================================================
// Descrição geral: funções de ranking, conquistas e sincronização
// da pontuação das equipes do Project Arena V2.0.
// Data de criação: 30/06/2026
// Versão: 2.0
// Copyright: Clayton Silva
// ============================================================

// ------------------------------------------------------------
// SINCRONIZAÇÃO DO RANKING COM A NUVEM
// ------------------------------------------------------------

async function sincronizarRankingCloudSePossivel(listaEquipes) {
    try {
        const idSessao = localStorage.getItem("idSessaoCloud");
        const mapaEquipesCloud = JSON.parse(localStorage.getItem("mapaEquipesCloud")) || {};

        if (!idSessao) {
            return;
        }

        const arenaCloud = await import("./arena-cloud.js");

        for (const equipe of listaEquipes) {
            const idEquipeCloud = mapaEquipesCloud[equipe.id];

            if (!idEquipeCloud) {
                continue;
            }

            await arenaCloud.atualizarPontuacao(
                idSessao,
                idEquipeCloud,
                equipe.nome,
                equipe.pontos || 0
            );
        }

    } catch (erro) {
        console.warn("Não foi possível sincronizar o ranking na nuvem.", erro);
    }
}

// ------------------------------------------------------------
// RANKING
// ------------------------------------------------------------

function obterRanking() {
    return obterEquipes()
        .slice()
        .sort((a, b) => (b.pontos || 0) - (a.pontos || 0));
}

function atualizarRanking() {
    const ranking = document.getElementById("ranking");

    if (!ranking) {
        return;
    }

    const lista = obterRanking();

    let html = `
        <table>
            <tr>
                <td>Posição</td>
                <td>Equipe</td>
                <td>Pontos</td>
                <td>XP</td>
                <td>Nível</td>
            </tr>
    `;

    lista.forEach((equipe, indice) => {
        html += `
            <tr>
                <td>${indice + 1}º</td>
                <td>${equipe.nome}</td>
                <td>${equipe.pontos || 0}</td>
                <td>${equipe.xp || 0}</td>
                <td>${equipe.nivel || "Estagiário"}</td>
            </tr>
        `;
    });

    html += "</table>";

    ranking.innerHTML = html;

    sincronizarRankingCloudSePossivel(lista);
}

// ------------------------------------------------------------
// CONQUISTAS
// ------------------------------------------------------------

function gerarConquistas(equipe) {
    if (!equipe) {
        return "Nenhuma equipe selecionada.";
    }

    let medalhas = "";

    if ((equipe.xp || 0) >= 100) {
        medalhas += `<span class="medalha">🥉 Primeira evolução</span>`;
    }

    if ((equipe.xp || 0) >= 250) {
        medalhas += `<span class="medalha">🥈 Coordenador em formação</span>`;
    }

    if ((equipe.xp || 0) >= 400) {
        medalhas += `<span class="medalha">🥇 Gerente de Projetos</span>`;
    }

    if ((equipe.xp || 0) >= 600) {
        medalhas += `<span class="medalha">🏆 Diretor de Projetos</span>`;
    }

    return medalhas || "Nenhuma conquista obtida.";
}

function atualizarConquistasEquipe() {
    const equipe = obterEquipeSelecionada();
    const conquistas = document.getElementById("conquistas");

    if (!conquistas) {
        return;
    }

    conquistas.innerHTML = gerarConquistas(equipe);
}
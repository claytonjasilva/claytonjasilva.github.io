// ============================================================
// Descrição geral: funções de ranking e evolução das equipes
// Data de criação: 29/06/2026
// Versão: 1.2
// Copyright: Clayton Silva
// ============================================================

function obterEquipes() {
    return JSON.parse(localStorage.getItem("estadoEquipes")) || equipes;
}

function salvarEquipes(lista) {
    localStorage.setItem("estadoEquipes", JSON.stringify(lista));
}

function calcularNivel(xp) {
    if (xp >= 600) return "Diretor de Projetos";
    if (xp >= 400) return "Gerente de Projetos";
    if (xp >= 250) return "Coordenador";
    if (xp >= 100) return "Analista";
    return "Estagiário";
}

function atualizarEquipe(equipeId, pontosGanhos, xpGanho) {
    const lista = obterEquipes();
    const equipe = lista.find(eq => eq.id === equipeId);

    if (!equipe) return;

    equipe.pontos += pontosGanhos;
    equipe.xp += xpGanho;
    equipe.nivel = calcularNivel(equipe.xp);

    salvarEquipes(lista);
}

function atualizarRanking() {
    const ranking = document.getElementById("ranking");

    if (!ranking) return;

    const lista = obterEquipes().sort((a, b) => b.pontos - a.pontos);

    let html = "<table>";
    html += "<tr><td>Equipe</td><td>Pontos</td><td>XP</td><td>Nível</td></tr>";

    lista.forEach(eq => {
        html += `
            <tr>
                <td>${eq.nome}</td>
                <td>${eq.pontos}</td>
                <td>${eq.xp}</td>
                <td>${eq.nivel}</td>
            </tr>
        `;
    });

    html += "</table>";

    ranking.innerHTML = html;
}

function obterEquipeSelecionada() {
    const select = document.getElementById("equipeSelecionada");

    if (!select) return null;

    const lista = obterEquipes();
    return lista.find(eq => eq.id === select.value);
}

function atualizarPainelEquipe() {
    const equipe = obterEquipeSelecionada();

    if (!equipe) return;

    const pontos = document.getElementById("pontos");
    const xp = document.getElementById("xp");
    const nivel = document.getElementById("nivel");
    const conquistas = document.getElementById("conquistas");

    if (pontos) pontos.textContent = equipe.pontos;
    if (xp) xp.textContent = equipe.xp;
    if (nivel) nivel.textContent = equipe.nivel;

    if (conquistas) {
        conquistas.innerHTML = gerarConquistas(equipe);
    }
}

function gerarConquistas(equipe) {
    let medalhas = "";

    if (equipe.xp >= 100) {
        medalhas += `<span class="medalha">🥉 Primeira evolução</span>`;
    }

    if (equipe.xp >= 250) {
        medalhas += `<span class="medalha">🥈 Coordenador em formação</span>`;
    }

    if (equipe.xp >= 400) {
        medalhas += `<span class="medalha">🥇 Gerente de Projetos</span>`;
    }

    if (equipe.xp >= 600) {
        medalhas += `<span class="medalha">🏆 Diretor de Projetos</span>`;
    }

    return medalhas || "Nenhuma conquista obtida.";
}
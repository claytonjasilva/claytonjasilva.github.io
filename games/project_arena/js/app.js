// ============================================================
// Descrição geral: lógica principal do Project Arena V1.1
// Data de criação: 29/06/2026
// Versão: 1.1
// Copyright: Clayton Silva
// ============================================================

let rodadaAtual = Number(localStorage.getItem("rodadaAtual")) || 0;

function iniciarSessaoSeNecessario() {
    if (!localStorage.getItem("estadoEquipes")) {
        localStorage.setItem("estadoEquipes", JSON.stringify(equipes));
    }

    if (!localStorage.getItem("desafioLiberado")) {
        localStorage.setItem("desafioLiberado", "nao");
    }

    if (!localStorage.getItem("rodadaAtual")) {
        localStorage.setItem("rodadaAtual", "0");
    }
}

function obterEquipes() {
    return JSON.parse(localStorage.getItem("estadoEquipes")) || equipes;
}

function salvarEquipes(lista) {
    localStorage.setItem("estadoEquipes", JSON.stringify(lista));
}

function calcularNivel(xp) {
    if (xp >= 400) return "Gerente de Projetos";
    if (xp >= 250) return "Coordenador";
    if (xp >= 100) return "Analista";
    return "Estagiário";
}

function obterDesafioAtual() {
    rodadaAtual = Number(localStorage.getItem("rodadaAtual")) || 0;
    return desafios[rodadaAtual];
}

function montarHtmlDesafio(desafio) {
    return `
        <h3>${desafio.titulo}</h3>
        <p>${desafio.enunciado}</p>
        <p><strong>A)</strong> ${desafio.alternativas.A}</p>
        <p><strong>B)</strong> ${desafio.alternativas.B}</p>
        <p><strong>C)</strong> ${desafio.alternativas.C}</p>
        <p><strong>D)</strong> ${desafio.alternativas.D}</p>
    `;
}

function atualizarBarraProgresso() {
    const barra = document.getElementById("barraProgresso");
    const rodada = document.getElementById("rodadaAtual");

    const percentual = ((rodadaAtual + 1) / desafios.length) * 100;

    if (barra) barra.style.width = percentual + "%";
    if (rodada) rodada.textContent = rodadaAtual + 1;
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

function liberarDesafio() {
    const desafio = obterDesafioAtual();

    localStorage.setItem("desafioLiberado", "sim");

    const area = document.getElementById("desafio");
    if (area) area.innerHTML = montarHtmlDesafio(desafio);

    atualizarBarraProgresso();
    atualizarRanking();
}

function encerrarRodada() {
    localStorage.setItem("desafioLiberado", "nao");

    rodadaAtual++;

    if (rodadaAtual >= desafios.length) {
        rodadaAtual = desafios.length - 1;
        alert("Todas as rodadas foram concluídas.");
    }

    localStorage.setItem("rodadaAtual", String(rodadaAtual));

    const area = document.getElementById("desafio");
    if (area) area.innerHTML = "Rodada encerrada. Libere o próximo desafio.";

    atualizarBarraProgresso();
    atualizarRanking();
}

function reiniciarSessao() {
    localStorage.clear();
    rodadaAtual = 0;
    iniciarSessaoSeNecessario();

    const area = document.getElementById("desafio");
    if (area) area.innerHTML = "Sessão reiniciada. Nenhum desafio liberado.";

    atualizarBarraProgresso();
    atualizarRanking();
}

function enviarResposta() {
    const liberado = localStorage.getItem("desafioLiberado");

    if (liberado !== "sim") {
        alert("O árbitro ainda não liberou o desafio.");
        return;
    }

    const equipeId = document.getElementById("equipeSelecionada").value;
    const respostaMarcada = document.querySelector('input[name="resp"]:checked');

    if (!respostaMarcada) {
        alert("Selecione uma alternativa.");
        return;
    }

    const desafio = obterDesafioAtual();
    const resposta = respostaMarcada.value;
    const resultado = document.getElementById("resultado");

    const lista = obterEquipes();
    const equipe = lista.find(eq => eq.id === equipeId);

    if (resposta === desafio.correta) {
        equipe.pontos += desafio.pontos;
        equipe.xp += desafio.xp;
        resultado.innerHTML = `<strong>Resposta correta.</strong><br>${desafio.feedbackCorreto}`;
    } else {
        resultado.innerHTML = `<strong>Resposta incorreta.</strong><br>Resposta correta: <strong>${desafio.correta}</strong>.<br>${desafio.feedbackErro}`;
    }

    equipe.nivel = calcularNivel(equipe.xp);
    salvarEquipes(lista);

    atualizarPainelEquipe();
}

function atualizarPainelEquipe() {
    const equipeSelect = document.getElementById("equipeSelecionada");
    if (!equipeSelect) return;

    const equipeId = equipeSelect.value;
    const lista = obterEquipes();
    const equipe = lista.find(eq => eq.id === equipeId);

    const pontos = document.getElementById("pontos");
    const xp = document.getElementById("xp");
    const nivel = document.getElementById("nivel");
    const status = document.getElementById("statusEquipe");
    const area = document.getElementById("desafio");

    if (pontos) pontos.textContent = equipe.pontos;
    if (xp) xp.textContent = equipe.xp;
    if (nivel) nivel.textContent = equipe.nivel;

    if (localStorage.getItem("desafioLiberado") === "sim") {
        if (status) status.textContent = "Desafio liberado.";
        if (area) area.innerHTML = montarHtmlDesafio(obterDesafioAtual());
    } else {
        if (status) status.textContent = "Aguardando desafio...";
        if (area) area.innerHTML = "O desafio ainda não foi liberado pelo árbitro.";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    iniciarSessaoSeNecessario();

    const btnLiberar = document.getElementById("btnLiberar");
    const btnEncerrar = document.getElementById("btnEncerrar");
    const btnReiniciar = document.getElementById("btnReiniciar");
    const btnEnviar = document.getElementById("btnEnviar");
    const equipeSelect = document.getElementById("equipeSelecionada");

    if (btnLiberar) btnLiberar.addEventListener("click", liberarDesafio);
    if (btnEncerrar) btnEncerrar.addEventListener("click", encerrarRodada);
    if (btnReiniciar) btnReiniciar.addEventListener("click", reiniciarSessao);
    if (btnEnviar) btnEnviar.addEventListener("click", enviarResposta);
    if (equipeSelect) equipeSelect.addEventListener("change", atualizarPainelEquipe);

    atualizarBarraProgresso();
    atualizarRanking();
    atualizarPainelEquipe();

    setInterval(function () {
        atualizarRanking();
        atualizarPainelEquipe();
    }, 1000);
});
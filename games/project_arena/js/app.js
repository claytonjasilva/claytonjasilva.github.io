// ============================================================
// Descrição geral: lógica principal do Project Arena V1.0
// Data de criação: 29/06/2026
// Versão: 1.0
// Copyright: Clayton Silva
// ============================================================

let desafioAtual = 0;
let pontos = 0;
let xp = 0;

// Carrega o desafio atual na tela
function carregarDesafio() {
    const areaDesafio = document.getElementById("desafio");

    if (!areaDesafio || typeof desafios === "undefined") {
        return;
    }

    const desafio = desafios[desafioAtual];

    areaDesafio.innerHTML = `
        <h3>${desafio.titulo}</h3>
        <p>${desafio.enunciado}</p>
        <p><strong>A)</strong> ${desafio.alternativas.A}</p>
        <p><strong>B)</strong> ${desafio.alternativas.B}</p>
        <p><strong>C)</strong> ${desafio.alternativas.C}</p>
        <p><strong>D)</strong> ${desafio.alternativas.D}</p>
    `;
}

// Libera desafio no painel do árbitro
function liberarDesafio() {
    localStorage.setItem("desafioLiberado", "sim");
    localStorage.setItem("desafioAtual", desafioAtual);

    carregarDesafio();

    const status = document.getElementById("statusEquipe");
    if (status) {
        status.textContent = "Desafio liberado";
    }
}

// Encerrar rodada
function encerrarRodada() {
    localStorage.setItem("desafioLiberado", "nao");

    desafioAtual++;

    if (desafioAtual >= desafios.length) {
        desafioAtual = 0;
    }

    localStorage.setItem("desafioAtual", desafioAtual);

    const areaDesafio = document.getElementById("desafio");
    if (areaDesafio) {
        areaDesafio.innerHTML = "Rodada encerrada. Libere o próximo desafio.";
    }
}

// Reinicia sessão
function reiniciarSessao() {
    desafioAtual = 0;
    pontos = 0;
    xp = 0;

    localStorage.clear();

    atualizarPontuacao();

    const areaDesafio = document.getElementById("desafio");
    if (areaDesafio) {
        areaDesafio.innerHTML = "Sessão reiniciada. Nenhum desafio liberado.";
    }
}

// Envia resposta da equipe
function enviarResposta() {
    const liberado = localStorage.getItem("desafioLiberado");

    if (liberado !== "sim") {
        alert("O desafio ainda não foi liberado pelo árbitro.");
        return;
    }

    const desafioIndex = Number(localStorage.getItem("desafioAtual")) || 0;
    const desafio = desafios[desafioIndex];

    const respostaSelecionada = document.querySelector('input[name="resp"]:checked');

    if (!respostaSelecionada) {
        alert("Selecione uma alternativa.");
        return;
    }

    const resposta = respostaSelecionada.value;
    const resultado = document.getElementById("resultado");

    if (resposta === desafio.correta) {
        pontos += desafio.pontos;
        xp += desafio.xp;

        resultado.innerHTML = `
            <strong>Resposta correta.</strong><br>
            ${desafio.feedbackCorreto}
        `;
    } else {
        resultado.innerHTML = `
            <strong>Resposta incorreta.</strong><br>
            Resposta correta: <strong>${desafio.correta}</strong>.<br>
            ${desafio.feedbackErro}
        `;
    }

    localStorage.setItem("pontosEquipe", pontos);
    localStorage.setItem("xpEquipe", xp);
    localStorage.setItem("statusEquipe", "Respondido");

    atualizarPontuacao();
}

// Atualiza pontuação na tela
function atualizarPontuacao() {
    const pontosTela = document.getElementById("pontos");
    const pontuacaoTela = document.getElementById("pontuacao");
    const xpTela = document.getElementById("xp");
    const nivelTela = document.getElementById("nivel");

    pontos = Number(localStorage.getItem("pontosEquipe")) || pontos;
    xp = Number(localStorage.getItem("xpEquipe")) || xp;

    if (pontosTela) {
        pontosTela.textContent = pontos;
    }

    if (pontuacaoTela) {
        pontuacaoTela.textContent = pontos;
    }

    if (xpTela) {
        xpTela.textContent = xp;
    }

    if (nivelTela) {
        nivelTela.textContent = calcularNivel(xp);
    }
}

// Calcula o nível da equipe
function calcularNivel(xpAtual) {
    if (xpAtual >= 400) {
        return "Gerente de Projetos";
    }

    if (xpAtual >= 250) {
        return "Coordenador";
    }

    if (xpAtual >= 100) {
        return "Analista";
    }

    return "Estagiário";
}

// Atualiza tela da equipe conforme estado salvo
function atualizarTelaEquipe() {
    const areaDesafio = document.getElementById("desafio");
    const status = document.getElementById("statusEquipe");

    if (!areaDesafio || !status) {
        return;
    }

    const liberado = localStorage.getItem("desafioLiberado");

    if (liberado === "sim") {
        desafioAtual = Number(localStorage.getItem("desafioAtual")) || 0;
        carregarDesafio();
        status.textContent = "Desafio liberado pelo árbitro.";
    } else {
        areaDesafio.innerHTML = "O desafio ainda não foi liberado pelo árbitro.";
        status.textContent = "Aguardando liberação do desafio...";
    }

    atualizarPontuacao();
}

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
    const btnLiberar = document.getElementById("btnLiberar");
    const btnEncerrar = document.getElementById("btnEncerrar");
    const btnReiniciar = document.getElementById("btnReiniciar");
    const btnEnviar = document.getElementById("btnEnviar");

    if (btnLiberar) {
        btnLiberar.addEventListener("click", liberarDesafio);
    }

    if (btnEncerrar) {
        btnEncerrar.addEventListener("click", encerrarRodada);
    }

    if (btnReiniciar) {
        btnReiniciar.addEventListener("click", reiniciarSessao);
    }

    if (btnEnviar) {
        btnEnviar.addEventListener("click", enviarResposta);
        atualizarTelaEquipe();
        setInterval(atualizarTelaEquipe, 1000);
    }

    atualizarPontuacao();
});
// ============================================================
// Descrição geral: funções de controle das missões
// Data de criação: 29/06/2026
// Versão: 1.2
// Copyright: Clayton Silva
// ============================================================

function sortearMissoes(quantidade) {
    const copia = [...desafios];

    copia.sort(() => Math.random() - 0.5);

    const selecionadas = copia.slice(0, quantidade);

    localStorage.setItem("missoesSessao", JSON.stringify(selecionadas));
    localStorage.setItem("indiceMissaoAtual", "0");

    return selecionadas;
}

function obterMissoesSessao() {
    return JSON.parse(localStorage.getItem("missoesSessao")) || [];
}

function obterMissaoAtual() {
    const missoes = obterMissoesSessao();
    const indice = Number(localStorage.getItem("indiceMissaoAtual")) || 0;

    return missoes[indice];
}

function equipeJaRespondeu(equipeId, missaoId) {
    const historico = obterHistorico();

    return historico.some(item =>
        item.equipeId === equipeId &&
        item.missaoId === missaoId
    );
}

function montarHtmlMissao(missao) {
    if (!missao) {
        return "Nenhuma missão disponível.";
    }

    return `
        <h3>${missao.titulo}</h3>
        <p>
            <strong>Tema:</strong> ${missao.tema} |
            <strong>Dificuldade:</strong> ${missao.dificuldade} |
            <strong>Tempo:</strong> ${missao.tempo}s
        </p>
        <p>${missao.enunciado}</p>
        <p><strong>A)</strong> ${missao.alternativas.A}</p>
        <p><strong>B)</strong> ${missao.alternativas.B}</p>
        <p><strong>C)</strong> ${missao.alternativas.C}</p>
        <p><strong>D)</strong> ${missao.alternativas.D}</p>
    `;
}

function mostrarMissaoAtual() {
    const area = document.getElementById("desafio");
    const missao = obterMissaoAtual();

    if (area) {
        area.innerHTML = montarHtmlMissao(missao);
    }
}

function liberarMissao() {
    const missao = obterMissaoAtual();

    if (!missao) {
        alert("Nenhuma missão disponível. Inicie uma sessão.");
        return;
    }

    localStorage.setItem("missaoLiberada", "sim");

    const status = document.getElementById("statusSessao");
    if (status) {
        status.textContent = "Missão liberada";
    }

    mostrarMissaoAtual();
    iniciarCronometro(missao.tempo);
}

function encerrarMissao() {
    localStorage.setItem("missaoLiberada", "nao");
    pararCronometro();

    let indice = Number(localStorage.getItem("indiceMissaoAtual")) || 0;
    const missoes = obterMissoesSessao();

    if (indice < missoes.length - 1) {
        indice++;
        localStorage.setItem("indiceMissaoAtual", String(indice));
    } else {
        alert("Última missão concluída. Finalize a sessão para gerar o relatório.");
    }

    atualizarProgressoMissao();

    const area = document.getElementById("desafio");
    if (area) {
        area.innerHTML = "Missão encerrada. Libere a próxima missão.";
    }
}

function responderMissao() {
    const liberada = localStorage.getItem("missaoLiberada");

    if (liberada !== "sim") {
        alert("A missão ainda não foi liberada pelo árbitro.");
        return;
    }

    const equipe = obterEquipeSelecionada();

    if (!equipe) {
        alert("Selecione uma equipe.");
        return;
    }

    const respostaMarcada = document.querySelector('input[name="resp"]:checked');

    if (!respostaMarcada) {
        alert("Selecione uma alternativa.");
        return;
    }

    const missao = obterMissaoAtual();

    if (!missao) {
        alert("Nenhuma missão disponível.");
        return;
    }

    if (equipeJaRespondeu(equipe.id, missao.id)) {
        alert("Esta equipe já respondeu esta missão.");
        return;
    }

    const resposta = respostaMarcada.value;
    const acertou = resposta === missao.correta;

    const pontosGanhos = acertou ? missao.pontos : 0;
    const xpGanho = acertou ? missao.xp : 30;

    atualizarEquipe(equipe.id, pontosGanhos, xpGanho);

    registrarHistorico({
        missao: missao.titulo,
        missaoId: missao.id,
        equipe: equipe.nome,
        equipeId: equipe.id,
        resposta: resposta,
        correta: missao.correta,
        acertou: acertou,
        pontos: pontosGanhos,
        xp: xpGanho,
        dataHora: new Date().toLocaleString()
    });

    const resultado = document.getElementById("resultado");

    if (resultado) {
        if (acertou) {
            resultado.className = "resposta-correta";
            resultado.innerHTML = `
                <strong>Missão concluída.</strong><br>
                +${pontosGanhos} pontos | +${xpGanho} XP<br>
                ${missao.feedbackCorreto}
            `;
        } else {
            resultado.className = "resposta-erro";
            resultado.innerHTML = `
                <strong>Missão não concluída.</strong><br>
                Resposta correta: <strong>${missao.correta}</strong>.<br>
                +${xpGanho} XP de participação<br>
                ${missao.feedbackErro}
            `;
        }
    }

    atualizarPainelEquipe();
    atualizarRanking();
    atualizarHistoricoNaTela();

    document.querySelectorAll('input[name="resp"]').forEach(input => {
        input.checked = false;
    });

    const status = document.getElementById("statusEquipe");

    if (status) {
        status.textContent = "Missão respondida.";
    }
}

function atualizarTelaMissaoEquipe() {
    const area = document.getElementById("desafio");
    const status = document.getElementById("statusEquipe");

    if (!area || !status) return;

    if (localStorage.getItem("missaoLiberada") === "sim") {
        area.innerHTML = montarHtmlMissao(obterMissaoAtual());
        status.textContent = "Missão liberada pelo árbitro.";
    } else {
        area.innerHTML = "Aguardando missão...";
        status.textContent = "Aguardando liberação da missão.";
    }
}

function atualizarProgressoMissao() {
    const missoes = obterMissoesSessao();
    const indice = Number(localStorage.getItem("indiceMissaoAtual")) || 0;

    const atual = document.getElementById("missaoAtual");
    const total = document.getElementById("totalMissoes");
    const barra = document.getElementById("barraProgresso");

    if (atual) {
        atual.textContent = Math.min(indice + 1, missoes.length || 10);
    }

    if (total) {
        total.textContent = missoes.length || 10;
    }

    if (barra) {
        const percentual = missoes.length > 0
            ? ((indice + 1) / missoes.length) * 100
            : 0;

        barra.style.width = percentual + "%";
    }
}
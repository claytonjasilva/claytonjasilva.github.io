// ============================================================
// Descrição geral: funções de controle das missões, mantendo a
// lógica local da V1.2 e acrescentando sincronização com
// Arena Cloud / Firebase.
// Data de criação: 30/06/2026
// Versão: 2.0
// Copyright: Clayton Silva
// ============================================================

// ------------------------------------------------------------
// CARREGAMENTO DA ARENA CLOUD
// ------------------------------------------------------------

async function carregarArenaCloudMissoes() {
    try {
        return await import("./arena-cloud.js");
    } catch (erro) {
        console.warn("Arena Cloud não disponível para missões.", erro);
        return null;
    }
}

// ------------------------------------------------------------
// BANCO DE DESAFIOS
// ------------------------------------------------------------

function obterBancoDeDesafios() {
    if (typeof bancoDesafios !== "undefined" && bancoDesafios.desafios) {
        return bancoDesafios.desafios;
    }

    if (typeof desafios !== "undefined") {
        return desafios;
    }

    return [];
}

// ------------------------------------------------------------
// SINCRONIZAÇÃO COM A NUVEM
// ------------------------------------------------------------

async function sincronizarMissoesCloudSePossivel(missoes, indice = 0, liberada = "nao") {
    try {
        const idSessao = localStorage.getItem("idSessaoCloud");

        if (!idSessao) {
            return;
        }

        const arenaCloud = await carregarArenaCloudMissoes();

        if (!arenaCloud) {
            return;
        }

        for (const missao of missoes) {
            await arenaCloud.salvarMissao(missao.id, missao);
        }

        await arenaCloud.atualizarSessao(idSessao, {
            indiceMissaoAtual: indice,
            missaoLiberada: liberada,
            missaoAtual: missoes[indice] ? missoes[indice].id : null,
            totalMissoes: missoes.length
        });

    } catch (erro) {
        console.warn("Não foi possível sincronizar missões na nuvem.", erro);
    }
}

// ------------------------------------------------------------
// SORTEIO E CONTROLE DAS MISSÕES
// ------------------------------------------------------------

function sortearMissoes(quantidade) {
    const banco = obterBancoDeDesafios();
    const copia = [...banco];

    copia.sort(() => Math.random() - 0.5);

    const selecionadas = copia.slice(0, quantidade);

    localStorage.setItem("missoesSessao", JSON.stringify(selecionadas));
    localStorage.setItem("indiceMissaoAtual", "0");
    localStorage.setItem("missaoLiberada", "nao");

    sincronizarMissoesCloudSePossivel(selecionadas, 0, "nao");

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

// ------------------------------------------------------------
// HTML DA MISSÃO
// ------------------------------------------------------------

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

// ------------------------------------------------------------
// LIBERAÇÃO E ENCERRAMENTO DA MISSÃO
// ------------------------------------------------------------

async function liberarMissao() {
    const missao = obterMissaoAtual();

    if (!missao) {
        alert("Nenhuma missão disponível. Inicie uma sessão.");
        return;
    }

    localStorage.setItem("missaoLiberada", "sim");

    const missoes = obterMissoesSessao();
    const indice = Number(localStorage.getItem("indiceMissaoAtual")) || 0;

    await sincronizarMissoesCloudSePossivel(missoes, indice, "sim");

    const status = document.getElementById("statusSessao");

    if (status) {
        status.textContent = "Missão liberada";
    }

    const resultado = document.getElementById("resultado");

    if (resultado) {
        resultado.className = "";
        resultado.innerHTML = "";
    }

    const botaoResponder = document.getElementById("btnResponder");

    if (botaoResponder) {
        botaoResponder.disabled = false;
    }

    mostrarMissaoAtual();
    iniciarCronometro(missao.tempo);
}

async function encerrarMissao() {
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

    await sincronizarMissoesCloudSePossivel(missoes, indice, "nao");

    atualizarProgressoMissao();

    const area = document.getElementById("desafio");

    if (area) {
        area.innerHTML = "Missão encerrada. Libere a próxima missão.";
    }

    const botaoResponder = document.getElementById("btnResponder");

    if (botaoResponder) {
        botaoResponder.disabled = true;
    }
}

// ------------------------------------------------------------
// RESPOSTA DA MISSÃO
// ------------------------------------------------------------

async function responderMissao() {
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
        xp: xpGanho
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

    const botaoResponder = document.getElementById("btnResponder");

    if (botaoResponder) {
        botaoResponder.disabled = true;
    }

    const status = document.getElementById("statusEquipe");

    if (status) {
        status.textContent = "Missão respondida.";
    }
}

// ------------------------------------------------------------
// TELA DA EQUIPE
// ------------------------------------------------------------

function atualizarTelaMissaoEquipe() {
    const area = document.getElementById("desafio");
    const status = document.getElementById("statusEquipe");

    if (!area || !status) {
        return;
    }

    if (localStorage.getItem("missaoLiberada") === "sim") {
        area.innerHTML = montarHtmlMissao(obterMissaoAtual());
        status.textContent = "Missão liberada pelo árbitro.";
    } else {
        area.innerHTML = "Aguardando missão...";
        status.textContent = "Aguardando liberação da missão.";
    }
}

// ------------------------------------------------------------
// PROGRESSO DA MISSÃO
// ------------------------------------------------------------

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
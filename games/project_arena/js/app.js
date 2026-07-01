// ============================================================
// Descrição geral: inicialização geral do Project Arena V2.0,
// incluindo preparação local e escuta básica da Arena Cloud.
// Data de criação: 30/06/2026
// Versão: 2.0
// Copyright: Clayton Silva
// ============================================================

document.addEventListener("DOMContentLoaded", async () => {

    prepararSessaoSeNecessario();

    const btnResponder = document.getElementById("btnResponder");

    if (btnResponder) {
        btnResponder.addEventListener("click", responderMissao);
    }

    const equipeSelecionada = document.getElementById("equipeSelecionada");

    if (equipeSelecionada) {
        equipeSelecionada.addEventListener("change", () => {
            selecionarEquipe(equipeSelecionada.value);
            atualizarTelaMissaoEquipe();
        });

        selecionarEquipe(equipeSelecionada.value);
    }

    atualizarPainelEquipe();
    atualizarTelaMissaoEquipe();
    atualizarRanking();
    atualizarHistoricoNaTela();
    atualizarProgressoMissao();

    iniciarEscutaCloudEquipeSePossivel();

    setInterval(() => {
        atualizarPainelEquipe();
        atualizarTelaMissaoEquipe();
        atualizarRanking();
        atualizarHistoricoNaTela();
    }, 1000);
});

async function iniciarEscutaCloudEquipeSePossivel() {
    const paginaEquipe = !!document.getElementById("statusEquipe");

    if (!paginaEquipe) {
        return;
    }

    const parametros = new URLSearchParams(window.location.search);
    const idSessaoUrl = parametros.get("sessao");

    if (idSessaoUrl) {
        localStorage.setItem("idSessaoCloud", idSessaoUrl);
        localStorage.setItem("modoCloud", "sim");
    }

    const idSessao = localStorage.getItem("idSessaoCloud");

    if (!idSessao) {
        return;
    }

    try {
        const arenaCloud = await import("./arena-cloud.js");

        arenaCloud.escutarSessao(idSessao, sessao => {
            if (!sessao) {
                return;
            }

            if (sessao.missoesSessao) {
                localStorage.setItem(
                    "missoesSessao",
                    JSON.stringify(sessao.missoesSessao)
                );
            }

            if (sessao.indiceMissaoAtual !== undefined) {
                localStorage.setItem(
                    "indiceMissaoAtual",
                    String(sessao.indiceMissaoAtual)
                );
            }

            if (sessao.missaoLiberada !== undefined) {
                localStorage.setItem(
                    "missaoLiberada",
                    sessao.missaoLiberada
                );
            }

            atualizarTelaMissaoEquipe();
            atualizarProgressoMissao();

            const status = document.getElementById("statusEquipe");

            if (status) {
                status.textContent =
                    localStorage.getItem("missaoLiberada") === "sim"
                        ? "Missão liberada pelo árbitro."
                        : "Aguardando liberação da missão.";
            }
        });

    } catch (erro) {
        console.warn("Não foi possível iniciar escuta da Arena Cloud.", erro);
    }
}
// ============================================================
// Descrição geral: inicialização do Project Arena
// Data de criação: 29/06/2026
// Versão: 1.2
// Copyright: Clayton Silva
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    //----------------------------------------------------------
    // Prepara a sessão
    //----------------------------------------------------------

    prepararSessaoSeNecessario();

    //----------------------------------------------------------
    // Painel do Árbitro
    //----------------------------------------------------------

    const btnIniciar = document.getElementById("btnIniciar");

    if (btnIniciar) {
        btnIniciar.addEventListener("click", iniciarSessao);
    }

    const btnLiberar = document.getElementById("btnLiberar");

    if (btnLiberar) {
        btnLiberar.addEventListener("click", liberarMissao);
    }

    const btnEncerrar = document.getElementById("btnEncerrar");

    if (btnEncerrar) {
        btnEncerrar.addEventListener("click", encerrarMissao);
    }

    const btnFinalizar = document.getElementById("btnFinalizar");

    if (btnFinalizar) {
        btnFinalizar.addEventListener("click", finalizarSessao);
    }

    const btnReiniciar = document.getElementById("btnReiniciar");

    if (btnReiniciar) {
        btnReiniciar.addEventListener("click", reiniciarTudo);
    }

    //----------------------------------------------------------
    // Painel da Equipe
    //----------------------------------------------------------

    const btnEnviar = document.getElementById("btnEnviar");

    if (btnEnviar) {
        btnEnviar.addEventListener("click", responderMissao);
    }

    const equipeSelecionada = document.getElementById("equipeSelecionada");

    if (equipeSelecionada) {

        equipeSelecionada.addEventListener("change", () => {

            atualizarPainelEquipe();

            atualizarTelaMissaoEquipe();

        });

    }

    //----------------------------------------------------------
    // Atualização inicial
    //----------------------------------------------------------

    atualizarPainelEquipe();

    atualizarTelaMissaoEquipe();

    atualizarRanking();

    atualizarHistoricoNaTela();

    atualizarProgressoMissao();

    //----------------------------------------------------------
    // Atualização automática
    //----------------------------------------------------------

    setInterval(() => {

        atualizarPainelEquipe();

        atualizarTelaMissaoEquipe();

        atualizarRanking();

        atualizarHistoricoNaTela();

    }, 1000);

});
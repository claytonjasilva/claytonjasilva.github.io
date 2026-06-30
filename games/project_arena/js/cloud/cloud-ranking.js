/******************************************************************************
 * Projeto.......: Project Arena
 * Arquivo.......: cloud-ranking.js
 * Descrição.....: Serviços de nuvem para gerenciamento do ranking do
 *                 Project Arena.
 *
 * Data..........: 30/06/2026
 * Versão........: 2.0.0
 * Copyright.....: Clayton J. A. Silva
 ******************************************************************************/

import {
    salvarDados,
    carregarDados,
    removerDados
} from "../firebase-service.js";

/* ============================================================================
   Atualização da pontuação de uma equipe
   ========================================================================== */

async function atualizarPontuacao(idSessao, idEquipe, nomeEquipe, pontuacao) {

    await salvarDados(`ranking/${idSessao}/${idEquipe}`, {
        nome: nomeEquipe,
        pontuacao: pontuacao,
        dataAtualizacao: new Date().toISOString()
    });
}

/* ============================================================================
   Consulta do ranking de uma sessão
   ========================================================================== */

async function obterRanking(idSessao) {

    return await carregarDados(`ranking/${idSessao}`);
}

/* ============================================================================
   Remoção de uma equipe do ranking
   ========================================================================== */

async function removerRankingEquipe(idSessao, idEquipe) {

    await removerDados(`ranking/${idSessao}/${idEquipe}`);
}

/* ============================================================================
   Limpeza completa do ranking de uma sessão
   ========================================================================== */

async function limparRankingSessao(idSessao) {

    await removerDados(`ranking/${idSessao}`);
}

/* ============================================================================
   Exportação
   ========================================================================== */

export {
    atualizarPontuacao,
    obterRanking,
    removerRankingEquipe,
    limparRankingSessao
};
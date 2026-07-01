/******************************************************************************
 * Projeto.......: Project Arena
 * Arquivo.......: arena-cloud.js
 * Descrição.....: Fachada da camada Arena Cloud. Centraliza o acesso aos
 *                 módulos especializados de nuvem do Project Arena.
 *
 * Data..........: 30/06/2026
 * Versão........: 2.0
 * Copyright.....: Clayton J. A. Silva
 ******************************************************************************/

import {
    criarSessao,
    obterSessao,
    atualizarSessao,
    encerrarSessao,
    escutarSessao
} from "./cloud/cloud-sessoes.js";

import {
    criarEquipe,
    obterEquipe,
    listarEquipes,
    atualizarEquipe,
    removerEquipe
} from "./cloud/cloud-equipes.js";

import {
    salvarMissao,
    obterMissao,
    listarMissoes,
    atualizarMissao,
    removerMissao
} from "./cloud/cloud-missoes.js";

import {
    criarDesafio,
    obterDesafio,
    listarDesafios,
    atualizarDesafio,
    registrarResposta,
    encerrarDesafio,
    removerDesafio
} from "./cloud/cloud-desafios.js";

import {
    atualizarPontuacao,
    obterRanking,
    removerRankingEquipe,
    limparRankingSessao
} from "./cloud/cloud-ranking.js";

/* ============================================================================
   TESTE INTEGRADO DA CAMADA ARENA CLOUD
   ========================================================================== */

async function testarArenaCloud() {
    const idSessao = await criarSessao({
        nome: "Sessão de teste Arena Cloud"
    });

    const idEquipe = await criarEquipe(idSessao, {
        nome: "Equipe Alpha"
    });

    await atualizarPontuacao(
        idSessao,
        idEquipe,
        "Equipe Alpha",
        100
    );

    const sessao = await obterSessao(idSessao);
    const equipes = await listarEquipes(idSessao);
    const ranking = await obterRanking(idSessao);

    return {
        idSessao,
        idEquipe,
        sessao,
        equipes,
        ranking
    };
}

/* ============================================================================
   EXPORTAÇÃO PÚBLICA DA ARENA CLOUD
   ========================================================================== */

export {
    criarSessao,
    obterSessao,
    atualizarSessao,
    encerrarSessao,
    escutarSessao,

    criarEquipe,
    obterEquipe,
    listarEquipes,
    atualizarEquipe,
    removerEquipe,

    salvarMissao,
    obterMissao,
    listarMissoes,
    atualizarMissao,
    removerMissao,

    criarDesafio,
    obterDesafio,
    listarDesafios,
    atualizarDesafio,
    registrarResposta,
    encerrarDesafio,
    removerDesafio,

    atualizarPontuacao,
    obterRanking,
    removerRankingEquipe,
    limparRankingSessao,

    testarArenaCloud
};
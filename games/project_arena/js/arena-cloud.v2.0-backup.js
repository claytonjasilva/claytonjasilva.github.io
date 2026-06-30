/******************************************************************************
 * Projeto.......: Project Arena
 * Arquivo.......: arena-cloud.v2.0-backup.js
 * Descrição.....: Snapshot da primeira implementação funcional da camada
 *                 Arena Cloud.
 *
 * Esta versão foi validada com sucesso utilizando o arquivo:
 *
 *      dev/teste-arena-cloud.html
 *
 * Validações realizadas:
 *
 *   ✓ Criação de sessão
 *   ✓ Consulta de sessão
 *   ✓ Criação de equipe
 *   ✓ Consulta de equipe
 *   ✓ Atualização do ranking
 *   ✓ Consulta do ranking
 *   ✓ Comunicação com Firebase Realtime Database
 *
 * Objetivo:
 *   Servir como ponto de restauração antes da modularização da camada
 *   Arena Cloud em múltiplos arquivos especializados.
 *
 * Data..........: 30/06/2026
 * Versão........: 2.0.0
 * Copyright.....: Clayton J. A. Silva
 ******************************************************************************/

/*
===============================================================================

IMPORTANTE

Este arquivo NÃO deve sofrer manutenção.

Caso seja necessário restaurar a arquitetura original da Arena Cloud,
basta substituir:

    arena-cloud.js

por este arquivo.

===============================================================================
*/

/* ============================================================================
   A PARTIR DESTE PONTO O CONTEÚDO É EXATAMENTE O MESMO DO
   arena-cloud.js VALIDADO.
   ========================================================================== */

   /******************************************************************************
 * Projeto.......: Project Arena
 * Arquivo.......: arena-cloud.js
 * Descrição.....: Camada de domínio para integração do Project Arena com
 *                 o Firebase Realtime Database.
 *
 * Data..........: 30/06/2026
 * Versão........: 2.0.0
 * Copyright.....: Clayton J. A. Silva
 ******************************************************************************/

import {
    salvarDados,
    carregarDados,
    atualizarDados,
    removerDados,
    criarRegistro
} from "./firebase-service.js";

/* ============================================================================
   Sessões
   ========================================================================== */

async function criarSessao(dadosSessao) {

    const dados = {
        nome: dadosSessao.nome || "Sessão sem nome",
        status: "ativa",
        dataCriacao: new Date().toISOString(),
        dataEncerramento: null
    };

    const idSessao = await criarRegistro("sessoes", dados);

    return idSessao;
}

async function obterSessao(idSessao) {

    return await carregarDados(`sessoes/${idSessao}`);
}

async function atualizarSessao(idSessao, dadosAtualizados) {

    await atualizarDados(`sessoes/${idSessao}`, dadosAtualizados);
}

async function encerrarSessao(idSessao) {

    await atualizarDados(`sessoes/${idSessao}`, {
        status: "encerrada",
        dataEncerramento: new Date().toISOString()
    });
}

/* ============================================================================
   Equipes
   ========================================================================== */

async function criarEquipe(idSessao, dadosEquipe) {

    const dados = {
        nome: dadosEquipe.nome || "Equipe sem nome",
        pontuacao: 0,
        sessaoId: idSessao,
        dataCriacao: new Date().toISOString()
    };

    const idEquipe = await criarRegistro(`equipes/${idSessao}`, dados);

    return idEquipe;
}

async function obterEquipe(idSessao, idEquipe) {

    return await carregarDados(`equipes/${idSessao}/${idEquipe}`);
}

async function listarEquipes(idSessao) {

    return await carregarDados(`equipes/${idSessao}`);
}

async function atualizarEquipe(idSessao, idEquipe, dadosAtualizados) {

    await atualizarDados(`equipes/${idSessao}/${idEquipe}`, dadosAtualizados);
}

/* ============================================================================
   Missões
   ========================================================================== */

async function salvarMissao(idMissao, dadosMissao) {

    await salvarDados(`missoes/${idMissao}`, {
        ...dadosMissao,
        dataAtualizacao: new Date().toISOString()
    });
}

async function obterMissao(idMissao) {

    return await carregarDados(`missoes/${idMissao}`);
}

async function listarMissoes() {

    return await carregarDados("missoes");
}

/* ============================================================================
   Ranking
   ========================================================================== */

async function atualizarPontuacao(idSessao, idEquipe, nomeEquipe, pontuacao) {

    await salvarDados(`ranking/${idSessao}/${idEquipe}`, {
        nome: nomeEquipe,
        pontuacao: pontuacao,
        dataAtualizacao: new Date().toISOString()
    });
}

async function obterRanking(idSessao) {

    return await carregarDados(`ranking/${idSessao}`);
}

/* ============================================================================
   Teste da camada Arena Cloud
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
   Exportação
   ========================================================================== */

export {
    criarSessao,
    obterSessao,
    atualizarSessao,
    encerrarSessao,

    criarEquipe,
    obterEquipe,
    listarEquipes,
    atualizarEquipe,

    salvarMissao,
    obterMissao,
    listarMissoes,

    atualizarPontuacao,
    obterRanking,

    testarArenaCloud
};
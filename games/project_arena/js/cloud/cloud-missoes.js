/******************************************************************************
 * Projeto.......: Project Arena
 * Arquivo.......: cloud-missoes.js
 * Descrição.....: Serviços de nuvem para gerenciamento de missões do
 *                 Project Arena.
 *
 * Data..........: 30/06/2026
 * Versão........: 2.0.0
 * Copyright.....: Clayton J. A. Silva
 ******************************************************************************/

import {
    salvarDados,
    carregarDados,
    atualizarDados,
    removerDados
} from "../firebase-service.js";

/* ============================================================================
   Cadastro ou substituição de missão
   ========================================================================== */

async function salvarMissao(idMissao, dadosMissao) {

    await salvarDados(`missoes/${idMissao}`, {
        ...dadosMissao,
        id: idMissao,
        dataAtualizacao: new Date().toISOString()
    });
}

/* ============================================================================
   Consulta de missão
   ========================================================================== */

async function obterMissao(idMissao) {

    return await carregarDados(`missoes/${idMissao}`);
}

/* ============================================================================
   Listagem de missões
   ========================================================================== */

async function listarMissoes() {

    return await carregarDados("missoes");
}

/* ============================================================================
   Atualização parcial de missão
   ========================================================================== */

async function atualizarMissao(idMissao, dadosAtualizados) {

    await atualizarDados(`missoes/${idMissao}`, {
        ...dadosAtualizados,
        dataAtualizacao: new Date().toISOString()
    });
}

/* ============================================================================
   Remoção de missão
   ========================================================================== */

async function removerMissao(idMissao) {

    await removerDados(`missoes/${idMissao}`);
}

/* ============================================================================
   Exportação
   ========================================================================== */

export {
    salvarMissao,
    obterMissao,
    listarMissoes,
    atualizarMissao,
    removerMissao
};
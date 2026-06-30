/******************************************************************************
 * Projeto.......: Project Arena
 * Arquivo.......: cloud-sessoes.js
 * Descrição.....: Serviços de nuvem para gerenciamento de sessões do
 *                 Project Arena.
 *
 * Data..........: 30/06/2026
 * Versão........: 2.0.0
 * Copyright.....: Clayton J. A. Silva
 ******************************************************************************/

import {
    carregarDados,
    atualizarDados,
    criarRegistro
} from "../firebase-service.js";

/* ============================================================================
   Criação de sessão
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

/* ============================================================================
   Consulta de sessão
   ========================================================================== */

async function obterSessao(idSessao) {

    return await carregarDados(`sessoes/${idSessao}`);
}

/* ============================================================================
   Atualização de sessão
   ========================================================================== */

async function atualizarSessao(idSessao, dadosAtualizados) {

    await atualizarDados(`sessoes/${idSessao}`, {
        ...dadosAtualizados,
        dataAtualizacao: new Date().toISOString()
    });
}

/* ============================================================================
   Encerramento de sessão
   ========================================================================== */

async function encerrarSessao(idSessao) {

    await atualizarDados(`sessoes/${idSessao}`, {
        status: "encerrada",
        dataEncerramento: new Date().toISOString()
    });
}

/* ============================================================================
   Exportação
   ========================================================================== */

export {
    criarSessao,
    obterSessao,
    atualizarSessao,
    encerrarSessao
};
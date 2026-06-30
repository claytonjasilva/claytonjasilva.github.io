/******************************************************************************
 * Projeto.......: Project Arena
 * Arquivo.......: cloud-equipes.js
 * Descrição.....: Serviços de nuvem para gerenciamento de equipes do
 *                 Project Arena.
 *
 * Data..........: 30/06/2026
 * Versão........: 2.0.0
 * Copyright.....: Clayton J. A. Silva
 ******************************************************************************/

import {
    carregarDados,
    atualizarDados,
    removerDados,
    criarRegistro
} from "../firebase-service.js";

/* ============================================================================
   Criação de equipe
   ========================================================================== */

async function criarEquipe(idSessao, dadosEquipe) {

    const dados = {
        nome: dadosEquipe.nome || "Equipe sem nome",
        pontuacao: 0,
        sessaoId: idSessao,
        dataCriacao: new Date().toISOString(),
        dataAtualizacao: new Date().toISOString()
    };

    const idEquipe = await criarRegistro(`equipes/${idSessao}`, dados);

    return idEquipe;
}

/* ============================================================================
   Consulta de equipe
   ========================================================================== */

async function obterEquipe(idSessao, idEquipe) {

    return await carregarDados(`equipes/${idSessao}/${idEquipe}`);
}

/* ============================================================================
   Listagem de equipes da sessão
   ========================================================================== */

async function listarEquipes(idSessao) {

    return await carregarDados(`equipes/${idSessao}`);
}

/* ============================================================================
   Atualização de equipe
   ========================================================================== */

async function atualizarEquipe(idSessao, idEquipe, dadosAtualizados) {

    await atualizarDados(`equipes/${idSessao}/${idEquipe}`, {
        ...dadosAtualizados,
        dataAtualizacao: new Date().toISOString()
    });
}

/* ============================================================================
   Remoção de equipe
   ========================================================================== */

async function removerEquipe(idSessao, idEquipe) {

    await removerDados(`equipes/${idSessao}/${idEquipe}`);
}

/* ============================================================================
   Exportação
   ========================================================================== */

export {
    criarEquipe,
    obterEquipe,
    listarEquipes,
    atualizarEquipe,
    removerEquipe
};
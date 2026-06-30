/******************************************************************************
 * Projeto.......: Project Arena
 * Arquivo.......: cloud-desafios.js
 * Descrição.....: Serviços de nuvem para gerenciamento dos desafios do
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
    removerDados,
    criarRegistro

} from "../firebase-service.js";

/* ============================================================================
   Criação de desafio
   ========================================================================== */

async function criarDesafio(idMissao, dadosDesafio){

    const dados={

        titulo:dadosDesafio.titulo || "Novo desafio",

        descricao:dadosDesafio.descricao || "",

        estado:"pendente",

        resposta:null,

        dataCriacao:new Date().toISOString(),

        dataAtualizacao:new Date().toISOString()

    };

    return await criarRegistro(

        `desafios/${idMissao}`,

        dados

    );

}

/* ============================================================================
   Consulta de desafio
   ========================================================================== */

async function obterDesafio(idMissao,idDesafio){

    return await carregarDados(

        `desafios/${idMissao}/${idDesafio}`

    );

}

/* ============================================================================
   Lista de desafios de uma missão
   ========================================================================== */

async function listarDesafios(idMissao){

    return await carregarDados(

        `desafios/${idMissao}`

    );

}

/* ============================================================================
   Atualização de desafio
   ========================================================================== */

async function atualizarDesafio(

    idMissao,

    idDesafio,

    dadosAtualizados

){

    await atualizarDados(

        `desafios/${idMissao}/${idDesafio}`,

        {

            ...dadosAtualizados,

            dataAtualizacao:new Date().toISOString()

        }

    );

}

/* ============================================================================
   Registro de resposta
   ========================================================================== */

async function registrarResposta(

    idMissao,

    idDesafio,

    resposta

){

    await atualizarDados(

        `desafios/${idMissao}/${idDesafio}`,

        {

            resposta:resposta,

            estado:"respondido",

            dataResposta:new Date().toISOString(),

            dataAtualizacao:new Date().toISOString()

        }

    );

}

/* ============================================================================
   Encerramento do desafio
   ========================================================================== */

async function encerrarDesafio(

    idMissao,

    idDesafio

){

    await atualizarDados(

        `desafios/${idMissao}/${idDesafio}`,

        {

            estado:"encerrado",

            dataEncerramento:new Date().toISOString()

        }

    );

}

/* ============================================================================
   Remoção do desafio
   ========================================================================== */

async function removerDesafio(

    idMissao,

    idDesafio

){

    await removerDados(

        `desafios/${idMissao}/${idDesafio}`

    );

}

/* ============================================================================
   Exportação
   ========================================================================== */

export{

    criarDesafio,

    obterDesafio,

    listarDesafios,

    atualizarDesafio,

    registrarResposta,

    encerrarDesafio,

    removerDesafio

};
/******************************************************************************
 * Projeto.......: Project Arena
 * Arquivo.......: firebase-service.js
 * Descrição.....: Serviços de acesso ao Firebase Realtime Database.
 *
 * Data..........: 02/07/2026
 * Versão........: 2.0.1
 * Copyright.....: Clayton Silva
 ******************************************************************************/

import { database } from "./firebase-config.js";

import {
    ref,
    set,
    get,
    update,
    remove,
    push,
    onValue
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";

const BASE_PATH = "project_arena";

function normalizarCaminho(caminho) {
    return String(caminho || "").replace(/^\/+|\/+$/g, "");
}

function caminhoFirebase(caminho) {
    return ref(database, `${BASE_PATH}/${normalizarCaminho(caminho)}`);
}

async function salvarDados(caminho, dados) {
    await set(caminhoFirebase(caminho), dados);
}

async function carregarDados(caminho) {
    const snapshot = await get(caminhoFirebase(caminho));

    if (snapshot.exists()) {
        return snapshot.val();
    }

    return null;
}

async function atualizarDados(caminho, dados) {
    await update(caminhoFirebase(caminho), dados);
}

async function removerDados(caminho) {
    await remove(caminhoFirebase(caminho));
}

async function criarRegistro(caminho, dados) {
    const novoRegistro = push(caminhoFirebase(caminho));

    await set(novoRegistro, {
        id: novoRegistro.key,
        ...dados
    });

    return novoRegistro.key;
}

function escutarDados(caminho, callback) {
    const referencia = caminhoFirebase(caminho);

    return onValue(referencia, snapshot => {
        if (!snapshot.exists()) {
            callback(null);
            return;
        }

        callback(snapshot.val());
    });
}

export {
    salvarDados,
    carregarDados,
    atualizarDados,
    removerDados,
    criarRegistro,
    escutarDados
};

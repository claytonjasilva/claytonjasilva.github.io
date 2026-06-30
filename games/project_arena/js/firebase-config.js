/******************************************************************************
 * Projeto.......: Project Arena
 * Arquivo.......: firebase-config.js
 * Descrição.....: Configuração e inicialização do Firebase.
 *
 * Data..........: 30/06/2026
 * Versão........: 2.0.1
 ******************************************************************************/

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyD6-ecWpwBCndHvnDIx9NM-F4emxRCxFhA",
    authDomain: "project-arena-36eca.firebaseapp.com",
    databaseURL: "https://project-arena-36eca-default-rtdb.firebaseio.com",
    projectId: "project-arena-36eca",
    storageBucket: "project-arena-36eca.firebasestorage.app",
    messagingSenderId: "1043559257444",
    appId: "1:1043559257444:web:caf2c9b4dcb1ea12f55671"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { app, database };
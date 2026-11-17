/*
  Descrição: Armazenamento local das viagens, linhas de base e anexos.
  Data de criação: 17/11/2026
  Versão: 1.0
  Copyright: Clayton Silva
*/

const DATABASE_NAME = 'viagem-de-moto';
const DATABASE_VERSION = 1;
const STORE_NAME = 'dados';
const PROJECTS_KEY = 'projetos';

const database = new Promise((resolve, reject) => {
  const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

  request.onupgradeneeded = () => {
    const db = request.result;

    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME);
    }
  };

  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error);
});

// Retorna os projetos salvos ou undefined no primeiro acesso.
export async function read() {
  const db = await database;

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(PROJECTS_KEY);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    transaction.onabort = () => {
      reject(transaction.error || new Error('A leitura foi cancelada.'));
    };
  });
}

// Executa a leitura e a atualização na mesma transação.
// O callback recebe o estado atual e devolve o novo estado de forma síncrona.
export async function change(callback) {
  const db = await database;

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(PROJECTS_KEY);

    let nextState;
    let failure;

    request.onsuccess = () => {
      try {
        nextState = callback(request.result);
        store.put(nextState, PROJECTS_KEY);
      } catch (error) {
        failure = error;
        transaction.abort();
      }
    };

    // A gravação só é confirmada quando a transação inteira termina.
    transaction.oncomplete = () => resolve(nextState);
    transaction.onabort = () => {
      reject(failure || transaction.error || new Error('A gravação foi cancelada.'));
    };
  });
}
// ============================================================
// Descrição geral: <descrição específica do arquivo>
// Data de criação: 29/06/2026
// Versão: 1.2
// Copyright: Clayton Silva
// ============================================================

let intervaloCronometro = null;
let tempoRestante = 0;

function iniciarCronometro(segundos) {
    pararCronometro();

    tempoRestante = segundos;
    atualizarTelaCronometro();

    intervaloCronometro = setInterval(function () {
        tempoRestante--;

        atualizarTelaCronometro();

        if (tempoRestante <= 0) {
            pararCronometro();
            localStorage.setItem("missaoLiberada", "nao");

            const status = document.getElementById("statusSessao");
            if (status) {
                status.textContent = "Tempo encerrado";
            }

            alert("Tempo da missão encerrado.");
        }
    }, 1000);
}

function pararCronometro() {
    if (intervaloCronometro) {
        clearInterval(intervaloCronometro);
        intervaloCronometro = null;
    }
}

function zerarCronometro() {
    pararCronometro();
    tempoRestante = 0;
    atualizarTelaCronometro();
}

function atualizarTelaCronometro() {
    const cronometro = document.getElementById("cronometro");

    if (!cronometro) return;

    if (tempoRestante <= 0) {
        cronometro.textContent = "--";
        return;
    }

    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;

    cronometro.textContent =
        String(minutos).padStart(2, "0") + ":" +
        String(segundos).padStart(2, "0");
}
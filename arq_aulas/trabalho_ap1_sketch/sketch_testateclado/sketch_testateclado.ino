/*
===========================================================
Descrição geral: teste de teclado de membrana 4x4 utilizando
a biblioteca Keypad.h, abstraindo a varredura elétrica.
Data de criação: 01/04/2026
Versão: 2.0
Copywrite: Clayton J A Silva
===========================================================
*/

#include <Keypad.h>

// =======================================================
// CONFIGURAÇÕES DO TECLADO
// =======================================================

#define NUM_LINHAS   4
#define NUM_COLUNAS  4

// Mapa lógico das teclas
char mapaTeclas[NUM_LINHAS][NUM_COLUNAS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};

// =======================================================
// MAPEAMENTO DE PINOS (AJUSTADO AO SEU CASO)
// =======================================================

// Linhas: 31, 33, 35, 37
byte pinosLinhas[NUM_LINHAS]   = {31, 33, 35, 37};

// Colunas: 39, 41, 43, 45
byte pinosColunas[NUM_COLUNAS] = {39, 41, 43, 45};

// =======================================================
// OBJETO TECLADO
// =======================================================

Keypad teclado = Keypad(
  makeKeymap(mapaTeclas),
  pinosLinhas,
  pinosColunas,
  NUM_LINHAS,
  NUM_COLUNAS
);

// =======================================================
// PROTÓTIPOS
// =======================================================

void inicializarSistema();
char lerTeclado();
void processarTecla(char tecla);

// =======================================================
// SETUP
// =======================================================

void setup() {
  inicializarSistema();
}

// =======================================================
// LOOP
// =======================================================

void loop() {
  char tecla = lerTeclado();

  if (tecla) {
    processarTecla(tecla);
  }
}

// =======================================================
// FUNÇÕES
// =======================================================

// Inicialização geral
void inicializarSistema() {
  Serial.begin(9600);
  Serial.println("========================================");
  Serial.println("Teste teclado 4x4 com Keypad.h");
  Serial.println("Camada eletrica abstraida");
  Serial.println("========================================");
}

// Leitura do teclado
char lerTeclado() {
  return teclado.getKey();
}

// Processamento da tecla
void processarTecla(char tecla) {
  Serial.print("Tecla pressionada: ");
  Serial.println(tecla);
}
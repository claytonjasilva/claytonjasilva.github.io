/*
===========================================================
Descrição geral: leitura de sequências via teclado 4x4
usando Keypad.h. Sequência delimitada por '#'.
Data de criação: 01/04/2026
Versão: 3.0
Copywrite: Clayton J A Silva
===========================================================
*/

#include <Keypad.h>

// =======================================================
// CONFIGURAÇÕES
// =======================================================

#define NUM_LINHAS   4
#define NUM_COLUNAS  4

char mapaTeclas[NUM_LINHAS][NUM_COLUNAS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};

byte pinosLinhas[NUM_LINHAS]   = {31, 33, 35, 37};
byte pinosColunas[NUM_COLUNAS] = {39, 41, 43, 45};

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
String lerSequenciaTeclado();

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

  String sequencia = lerSequenciaTeclado();

  if (sequencia.length() > 0) {
    Serial.print("Sequencia recebida: ");
    Serial.println(sequencia);
  }
}

// =======================================================
// FUNÇÕES
// =======================================================

void inicializarSistema() {
  Serial.begin(9600);
  Serial.println("========================================");
  Serial.println("Entrada de sequencias via teclado (#...#)");
  Serial.println("========================================");
}

char lerTeclado() {
  return teclado.getKey();
}

// -------------------------------------------------------
// Função: lerSequenciaTeclado
// Descrição:
//   - Aguarda '#' para iniciar
//   - Lê caracteres até novo '#'
//   - Retorna a sequência (sem os delimitadores)
// Exemplo:
//   Entrada: #12#
//   Saída: "12"
// -------------------------------------------------------

String lerSequenciaTeclado() {

  static bool capturando = false;
  static String buffer = "";

  char tecla = lerTeclado();

  if (tecla) {

    // Início ou fim da sequência
    if (tecla == '#') {

      if (!capturando) {
        // Início
        capturando = true;
        buffer = "";
      } else {
        // Fim
        capturando = false;
        return buffer;
      }

    } else if (capturando) {
      // Armazena caracteres válidos
      buffer += tecla;
    }
  }

  return ""; // nenhuma sequência completa ainda
}
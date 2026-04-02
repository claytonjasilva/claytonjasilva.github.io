/*
===========================================================
Descrição geral: leitura de sequências via teclado 4x4 e
conversão de opcode em mnemônico.
Data de criação: 02/04/2026
Versão: 4.0
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

bool stringEhNumero(String texto);
bool instrucaoExigeOperando(byte opcode);
String obterMneMonico(byte opcode, String operando);
void processarEntradaTeclado();

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
  processarEntradaTeclado();
}

// =======================================================
// FUNÇÕES BÁSICAS
// =======================================================

void inicializarSistema() {
  Serial.begin(9600);
  Serial.println("========================================");
  Serial.println("Entrada de instrucoes via teclado (#...#)");
  Serial.println("Exemplo: #3# #12#  -> ADDK 12");
  Serial.println("========================================");
}

char lerTeclado() {
  return teclado.getKey();
}

// -------------------------------------------------------
// Aguarda sequências delimitadas por '#'
// Exemplo:
//   #12#  -> retorna "12"
// -------------------------------------------------------
String lerSequenciaTeclado() {
  static bool capturando = false;
  static String buffer = "";

  char tecla = lerTeclado();

  if (tecla) {
    if (tecla == '#') {
      if (!capturando) {
        capturando = true;
        buffer = "";
      } else {
        capturando = false;
        return buffer;
      }
    } else if (capturando) {
      buffer += tecla;
    }
  }

  return "";
}

// =======================================================
// FUNÇÕES DE APOIO
// =======================================================

// -------------------------------------------------------
// Verifica se uma string contém apenas dígitos numéricos
// -------------------------------------------------------
bool stringEhNumero(String texto) {
  int i;

  if (texto.length() == 0) {
    return false;
  }

  for (i = 0; i < texto.length(); i++) {
    if (!isDigit(texto[i])) {
      return false;
    }
  }

  return true;
}

// -------------------------------------------------------
// Informa se a instrução exige operando
//
// Assumido com base na descrição da tabela:
// 2  -> LOADK
// 3  -> ADDK
// 4  -> SUBK
// 5  -> CMPK
// 6  -> LEDON
// 7  -> LEDOFF
// 13 -> STORE
// 14 -> LOADM
//
// As demais foram tratadas como sem operando.
// -------------------------------------------------------
bool instrucaoExigeOperando(byte opcode) {
  switch (opcode) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 13:
    case 14:
      return true;

    default:
      return false;
  }
}

// -------------------------------------------------------
// Converte opcode + operando em mnemônico
// Se a instrução exigir operando, retorna "MNEMONICO X"
// Caso contrário, retorna apenas "MNEMONICO"
// -------------------------------------------------------
String obterMneMonico(byte opcode, String operando) {
  String mnemonicoBase = "";

  switch (opcode) {
    case 0:  mnemonicoBase = "NOP";    break;
    case 1:  mnemonicoBase = "READ";   break;
    case 2:  mnemonicoBase = "LOADK";  break;
    case 3:  mnemonicoBase = "ADDK";   break;
    case 4:  mnemonicoBase = "SUBK";   break;
    case 5:  mnemonicoBase = "CMPK";   break;
    case 6:  mnemonicoBase = "LEDON";  break;
    case 7:  mnemonicoBase = "LEDOFF"; break;
    case 8:  mnemonicoBase = "BUZON";  break;
    case 9:  mnemonicoBase = "BUZOFF"; break;
    case 10: mnemonicoBase = "DISP";   break;
    case 11: mnemonicoBase = "ALERT";  break;
    case 12: mnemonicoBase = "BINC";   break;
    case 13: mnemonicoBase = "STORE";  break;
    case 14: mnemonicoBase = "LOADM";  break;
    case 15: mnemonicoBase = "HALT";   break;
    default: return "ERRO: OPCODE INVALIDO";
  }

  if (instrucaoExigeOperando(opcode)) {
    return mnemonicoBase + " " + operando;
  }

  return mnemonicoBase;
}

// =======================================================
// FUNÇÃO PRINCIPAL DE PROCESSAMENTO
// =======================================================

// -------------------------------------------------------
// Lê o opcode como sequência delimitada por '#'
// Se a instrução exigir operando, lê nova sequência
// Exibe no Serial o mnemônico final
//
// Exemplos:
//   #8#       -> BUZON
//   #3# #12#  -> ADDK 12
// -------------------------------------------------------
void processarEntradaTeclado() {
  static bool aguardandoOperando = false;
  static byte opcodeAtual = 0;

  String sequenciaLida = lerSequenciaTeclado();

  // Se ainda não chegou uma sequência completa, não faz nada
  if (sequenciaLida.length() == 0) {
    return;
  }

  // ----------------------------------------------------
  // ETAPA 1: leitura do opcode
  // ----------------------------------------------------
  if (!aguardandoOperando) {

    if (!stringEhNumero(sequenciaLida)) {
      Serial.println("ERRO: opcode deve ser numerico.");
      return;
    }

    int valorOpcode = sequenciaLida.toInt();

    if (valorOpcode < 0 || valorOpcode > 15) {
      Serial.println("ERRO: opcode fora da faixa 0..15.");
      return;
    }

    opcodeAtual = (byte) valorOpcode;

    if (instrucaoExigeOperando(opcodeAtual)) {
      aguardandoOperando = true;

      Serial.print("Opcode reconhecido: ");
      Serial.print(opcodeAtual);
      Serial.println(". Aguardando operando...");
    } else {
      Serial.print("MneMonico gerado: ");
      Serial.println(obterMneMonico(opcodeAtual, ""));
    }

    return;
  }

  // ----------------------------------------------------
  // ETAPA 2: leitura do operando
  // ----------------------------------------------------
  if (!stringEhNumero(sequenciaLida)) {
    Serial.println("ERRO: operando deve ser numerico.");
    aguardandoOperando = false;
    return;
  }

  Serial.print("MneMonico gerado: ");
  Serial.println(obterMneMonico(opcodeAtual, sequenciaLida));

  aguardandoOperando = false;
}
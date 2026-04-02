/*
===========================================================
Descrição geral: sistema de carga de instruções via teclado
de membrana 4x4 utilizando a biblioteca Keypad.h. O código
solicita o endereço inicial, recebe instruções no formato
#opcode# e, quando necessário, #operando#, converte cada
instrução para seu equivalente binário e a armazena em
MEMORIA_PRINCIPAL com 1024 posições. O modo de carga termina
quando a instrução HALT é digitada.

Formato da instrução armazenada:
bits 15..12 -> opcode (4 bits)
bits 11..0  -> operando (12 bits)

Observação:
- instruções STORE e LOADM usam o operando como endereço
  de memória, devendo estar na faixa 0..1023.
- demais instruções com operando aceitam valores de 0..4095.

Data de criação: 02/04/2026
Versão: 6.0
Copywrite: Clayton J A Silva
===========================================================
*/

#include <Keypad.h>

// =======================================================
// CONFIGURAÇÕES GERAIS
// =======================================================

#define NUM_LINHAS 4
#define NUM_COLUNAS 4

#define TAMANHO_MEMORIA 1024
#define ENDERECO_MAXIMO 1023
#define OPERANDO_MAXIMO_12_BITS 4095

// =======================================================
// MAPA DO TECLADO
// =======================================================

char mapaTeclas[NUM_LINHAS][NUM_COLUNAS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};

// =======================================================
// PINOS DO TECLADO
// =======================================================

byte pinosLinhas[NUM_LINHAS]   = {31, 33, 35, 37};
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
// MEMÓRIA PRINCIPAL
// Cada posição armazena uma instrução de 16 bits
// =======================================================

uint16_t MEMORIA_PRINCIPAL[TAMANHO_MEMORIA];

// =======================================================
// ESTADO DO MODO DE CARGA
// =======================================================

bool enderecoInicialDefinido = false;
bool aguardandoOperando = false;
bool modoCargaEncerrado = false;

uint16_t enderecoCargaAtual = 0;
byte opcodeAtual = 0;

// =======================================================
// PROTÓTIPOS
// =======================================================

void inicializarSistema();
void inicializarMemoriaPrincipal();
void exibirMensagemInicial();

char lerTeclado();
String lerSequenciaTeclado();

bool stringEhNumero(String texto);
bool instrucaoExigeOperando(byte opcode);
bool instrucaoUsaEnderecoMemoria(byte opcode);

String obterMneMonico(byte opcode, uint16_t operando);
uint16_t montarPalavraInstrucao(byte opcode, uint16_t operando);
void armazenarInstrucaoNaMemoria(uint16_t endereco, uint16_t instrucao);

void processarModoCarga();
void processarDefinicaoEnderecoInicial(String sequenciaLida);
void processarLeituraOpcode(String sequenciaLida);
void processarLeituraOperando(String sequenciaLida);

void exibirInstrucaoArmazenada(uint16_t endereco, byte opcode, uint16_t operando);
void exibirPalavraBinaria16Bits(uint16_t valor);
void exibirEnderecoBinario10Bits(uint16_t endereco);

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
  processarModoCarga();
}

// =======================================================
// FUNÇÕES DE INICIALIZAÇÃO
// =======================================================

void inicializarSistema() {
  Serial.begin(9600);

  inicializarMemoriaPrincipal();
  exibirMensagemInicial();
}

void inicializarMemoriaPrincipal() {
  uint16_t indice;

  for (indice = 0; indice < TAMANHO_MEMORIA; indice++) {
    MEMORIA_PRINCIPAL[indice] = 0;
  }
}

void exibirMensagemInicial() {
  Serial.println("==================================================");
  Serial.println("MODO DE CARGA DE PROGRAMA VIA TECLADO 4x4");
  Serial.println("Formato de entrada: #opcode#");
  Serial.println("Se houver operando: #opcode# seguido de #operando#");
  Serial.println("Exemplo: #3# #12#  -> ADDK 12");
  Serial.println("Formato da instrucao armazenada:");
  Serial.println("bits 15..12 = opcode | bits 11..0 = operando");
  Serial.println("Digite agora o endereco inicial de carga.");
  Serial.println("Formato: #endereco#");
  Serial.println("Faixa valida: 0 a 1023");
  Serial.println("==================================================");
}

// =======================================================
// FUNÇÕES BÁSICAS DE ENTRADA
// =======================================================

char lerTeclado() {
  return teclado.getKey();
}

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
// FUNÇÕES DE VALIDAÇÃO E TABELA DE INSTRUÇÕES
// =======================================================

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

bool instrucaoExigeOperando(byte opcode) {
  switch (opcode) {
    case 2:   // LOADK
    case 3:   // ADDK
    case 4:   // SUBK
    case 5:   // CMPK
    case 6:   // LEDON
    case 7:   // LEDOFF
    case 13:  // STORE
    case 14:  // LOADM
      return true;

    default:
      return false;
  }
}

bool instrucaoUsaEnderecoMemoria(byte opcode) {
  switch (opcode) {
    case 13:  // STORE
    case 14:  // LOADM
      return true;

    default:
      return false;
  }
}

String obterMneMonico(byte opcode, uint16_t operando) {
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
    default: return "ERRO";
  }

  if (instrucaoExigeOperando(opcode)) {
    return mnemonicoBase + " " + String(operando);
  }

  return mnemonicoBase;
}

// =======================================================
// FUNÇÕES DE MONTAGEM E ARMAZENAMENTO
// =======================================================

uint16_t montarPalavraInstrucao(byte opcode, uint16_t operando) {
  uint16_t palavraInstrucao = 0;

  palavraInstrucao |= ((uint16_t)(opcode & 0x0F) << 12);
  palavraInstrucao |= (operando & 0x0FFF);

  return palavraInstrucao;
}

void armazenarInstrucaoNaMemoria(uint16_t endereco, uint16_t instrucao) {
  if (endereco < TAMANHO_MEMORIA) {
    MEMORIA_PRINCIPAL[endereco] = instrucao;
  }
}

// =======================================================
// FUNÇÃO PRINCIPAL DO MODO DE CARGA
// =======================================================

void processarModoCarga() {
  String sequenciaLida;

  if (modoCargaEncerrado) {
    return;
  }

  sequenciaLida = lerSequenciaTeclado();

  if (sequenciaLida.length() == 0) {
    return;
  }

  if (!enderecoInicialDefinido) {
    processarDefinicaoEnderecoInicial(sequenciaLida);
    return;
  }

  if (!aguardandoOperando) {
    processarLeituraOpcode(sequenciaLida);
  } else {
    processarLeituraOperando(sequenciaLida);
  }
}

// =======================================================
// PROCESSAMENTO DO ENDEREÇO INICIAL
// =======================================================

void processarDefinicaoEnderecoInicial(String sequenciaLida) {
  int enderecoInformado;

  if (!stringEhNumero(sequenciaLida)) {
    Serial.println("ERRO: o endereco inicial deve ser numerico.");
    Serial.println("Digite novamente no formato #endereco#.");
    return;
  }

  enderecoInformado = sequenciaLida.toInt();

  if (enderecoInformado < 0 || enderecoInformado > ENDERECO_MAXIMO) {
    Serial.println("ERRO: endereco inicial fora da faixa 0..1023.");
    Serial.println("Digite novamente no formato #endereco#.");
    return;
  }

  enderecoCargaAtual = (uint16_t) enderecoInformado;
  enderecoInicialDefinido = true;

  Serial.print("Endereco inicial definido: ");
  Serial.print(enderecoCargaAtual);
  Serial.print(" (");
  exibirEnderecoBinario10Bits(enderecoCargaAtual);
  Serial.println(")");

  Serial.println("Digite agora as instrucoes.");
  Serial.println("O modo de carga sera encerrado apos HALT.");
}

// =======================================================
// PROCESSAMENTO DO OPCODE
// =======================================================

void processarLeituraOpcode(String sequenciaLida) {
  int valorOpcode;
  uint16_t palavraInstrucao;

  if (!stringEhNumero(sequenciaLida)) {
    Serial.println("ERRO: o opcode deve ser numerico.");
    return;
  }

  valorOpcode = sequenciaLida.toInt();

  if (valorOpcode < 0 || valorOpcode > 15) {
    Serial.println("ERRO: opcode fora da faixa 0..15.");
    return;
  }

  if (enderecoCargaAtual > ENDERECO_MAXIMO) {
    Serial.println("ERRO: memoria esgotada. Nao ha mais espaco para carga.");
    modoCargaEncerrado = true;
    return;
  }

  opcodeAtual = (byte) valorOpcode;

  if (instrucaoExigeOperando(opcodeAtual)) {
    aguardandoOperando = true;

    Serial.print("Opcode reconhecido: ");
    Serial.print(opcodeAtual);
    Serial.print(" -> ");
    Serial.println(obterMneMonico(opcodeAtual, 0));

    Serial.println("Aguardando operando no formato #operando#.");
    return;
  }

  palavraInstrucao = montarPalavraInstrucao(opcodeAtual, 0);
  armazenarInstrucaoNaMemoria(enderecoCargaAtual, palavraInstrucao);

  exibirInstrucaoArmazenada(enderecoCargaAtual, opcodeAtual, 0);

  if (opcodeAtual == 15) {
    Serial.println("HALT armazenada. Modo de carga encerrado.");
    modoCargaEncerrado = true;
    return;
  }

  enderecoCargaAtual++;
}

// =======================================================
// PROCESSAMENTO DO OPERANDO
// =======================================================

void processarLeituraOperando(String sequenciaLida) {
  long valorOperandoLong;
  uint16_t operando;
  uint16_t palavraInstrucao;

  if (!stringEhNumero(sequenciaLida)) {
    Serial.println("ERRO: o operando deve ser numerico.");
    aguardandoOperando = false;
    return;
  }

  valorOperandoLong = sequenciaLida.toInt();

  if (valorOperandoLong < 0 || valorOperandoLong > OPERANDO_MAXIMO_12_BITS) {
    Serial.println("ERRO: operando fora da faixa 0..4095.");
    aguardandoOperando = false;
    return;
  }

  operando = (uint16_t) valorOperandoLong;

  if (instrucaoUsaEnderecoMemoria(opcodeAtual) && operando > ENDERECO_MAXIMO) {
    Serial.println("ERRO: endereco de memoria invalido para esta instrucao.");
    Serial.println("Para STORE e LOADM, a faixa valida e 0..1023.");
    aguardandoOperando = false;
    return;
  }

  palavraInstrucao = montarPalavraInstrucao(opcodeAtual, operando);
  armazenarInstrucaoNaMemoria(enderecoCargaAtual, palavraInstrucao);

  exibirInstrucaoArmazenada(enderecoCargaAtual, opcodeAtual, operando);

  if (opcodeAtual == 15) {
    Serial.println("HALT armazenada. Modo de carga encerrado.");
    modoCargaEncerrado = true;
    aguardandoOperando = false;
    return;
  }

  enderecoCargaAtual++;
  aguardandoOperando = false;
}

// =======================================================
// FUNÇÕES DE EXIBIÇÃO
// =======================================================

void exibirInstrucaoArmazenada(uint16_t endereco, byte opcode, uint16_t operando) {
  uint16_t palavraInstrucao;

  palavraInstrucao = MEMORIA_PRINCIPAL[endereco];

  Serial.println("--------------------------------------------------");

  Serial.print("Endereco decimal: ");
  Serial.print(endereco);
  Serial.print(" | Endereco binario: ");
  exibirEnderecoBinario10Bits(endereco);
  Serial.println();

  Serial.print("Instrucao: ");
  Serial.println(obterMneMonico(opcode, operando));

  Serial.print("Palavra armazenada (binario 16 bits): ");
  exibirPalavraBinaria16Bits(palavraInstrucao);
  Serial.println();

  Serial.println("--------------------------------------------------");
}

void exibirPalavraBinaria16Bits(uint16_t valor) {
  int bitAtual;

  for (bitAtual = 15; bitAtual >= 0; bitAtual--) {
    Serial.print((valor >> bitAtual) & 0x01);

    if (bitAtual == 12) {
      Serial.print(" ");
    }
  }
}

void exibirEnderecoBinario10Bits(uint16_t endereco) {
  int bitAtual;

  for (bitAtual = 9; bitAtual >= 0; bitAtual--) {
    Serial.print((endereco >> bitAtual) & 0x01);
  }
}
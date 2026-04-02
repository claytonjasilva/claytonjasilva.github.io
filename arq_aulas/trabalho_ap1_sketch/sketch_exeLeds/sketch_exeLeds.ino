/*
===========================================================
Descrição geral: sistema de carga e execução passo a passo
de instruções para controle de 3 LEDs via teclado de
membrana 4x4, utilizando a biblioteca Keypad.h.

Fluxo de operação:
1. MODO LOAD:
   - usuário informa o endereço inicial de carga
   - digita o programa
   - cada instrução é armazenada em MEMORIA_PRINCIPAL
   - a carga termina quando HALT é digitada

2. MODO RUN:
   - usuário pressiona '*'
   - sistema solicita o endereço da primeira instrução
   - esse endereço é carregado em PC
   - cada novo '*' executa uma instrução da memória
   - a execução termina ao encontrar HALT

3. ENCERRAMENTO:
   - após HALT em execução, a aplicação é encerrada
   - não aceita novas operações nesta versão

Nesta versão, o programa admite somente:
- LEDON
- LEDOFF
- HALT

Formato da instrução armazenada:
bits 15..12 -> opcode (4 bits)
bits 11..0  -> operando (12 bits)

LED 1 -> pino 2
LED 2 -> pino 3
LED 3 -> pino 4

Data de criação: 02/04/2026
Versão: 9.0
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
// ESTADOS DO SISTEMA
// =======================================================

#define ESTADO_LOAD_ENDERECO_INICIAL   0
#define ESTADO_LOAD_OPCODE             1
#define ESTADO_LOAD_OPERANDO           2
#define ESTADO_RUN_AGUARDANDO_START    3
#define ESTADO_RUN_EXECUTANDO          4
#define ESTADO_ENCERRADO               5

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
// =======================================================

uint16_t MEMORIA_PRINCIPAL[TAMANHO_MEMORIA];

// =======================================================
// REGISTRADORES
// =======================================================

uint16_t PC = 0;
uint16_t IR = 0;

// =======================================================
// ESTADO GLOBAL DA APLICAÇÃO
// =======================================================

byte estadoSistema = ESTADO_LOAD_ENDERECO_INICIAL;

uint16_t enderecoCargaAtual = 0;
byte opcodeAtual = 0;

bool programaCarregado = false;

// =======================================================
// BUFFER DE ENTRADA DELIMITADA POR '#'
// =======================================================

bool capturandoSequencia = false;
String bufferSequencia = "";
bool sequenciaCompletaDisponivel = false;
String sequenciaCompleta = "";

// =======================================================
// CONFIGURAÇÃO DOS LEDS
// =======================================================

#define NUM_LEDS 3

byte pinosLEDs[NUM_LEDS] = {2, 3, 4};

// =======================================================
// PROTÓTIPOS
// =======================================================

void inicializarSistema();
void inicializarMemoriaPrincipal();
void inicializarLEDs();
void exibirMensagemInicial();

void processarSistema();
char lerTeclaAtual();
void atualizarEntradaTeclado(char teclaAtual);

bool haSequenciaCompleta();
String obterSequenciaCompleta();

bool stringEhNumero(String texto);
bool instrucaoExigeOperando(byte opcode);
bool opcodePermitidoNaEtapaAtual(byte opcode);
bool operandoLEDValido(uint16_t operando);

String obterMneMonico(byte opcode, uint16_t operando);

uint16_t montarPalavraInstrucao(byte opcode, uint16_t operando);
void armazenarInstrucaoNaMemoria(uint16_t endereco, uint16_t instrucao);

byte extrairOpcode(uint16_t instrucao);
uint16_t extrairOperando(uint16_t instrucao);

void processarEstadoLoadEnderecoInicial();
void processarEstadoLoadOpcode();
void processarEstadoLoadOperando();
void processarEstadoRunAguardandoStart();
void processarEstadoRunExecutando(char teclaAtual);
void processarEstadoEncerrado();

void entrarModoRun();
void executarProximaInstrucao();
void executarInstrucao(uint16_t instrucao);
void executarLEDON(uint16_t operando);
void executarLEDOFF(uint16_t operando);
void encerrarAplicacao();

void exibirInstrucaoArmazenada(uint16_t endereco, byte opcode, uint16_t operando);
void exibirPalavraBinaria16Bits(uint16_t valor);
void exibirEnderecoBinario10Bits(uint16_t endereco);
void exibirEstadoLEDs();

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
  processarSistema();
}

// =======================================================
// INICIALIZAÇÃO
// =======================================================

void inicializarSistema() {
  Serial.begin(9600);

  inicializarMemoriaPrincipal();
  inicializarLEDs();
  exibirMensagemInicial();
}

void inicializarMemoriaPrincipal() {
  uint16_t i;

  for (i = 0; i < TAMANHO_MEMORIA; i++) {
    MEMORIA_PRINCIPAL[i] = 0;
  }
}

void inicializarLEDs() {
  byte i;

  for (i = 0; i < NUM_LEDS; i++) {
    pinMode(pinosLEDs[i], OUTPUT);
    digitalWrite(pinosLEDs[i], LOW);
  }
}

void exibirMensagemInicial() {
  Serial.println("==================================================");
  Serial.println("SISTEMA DE CARGA E EXECUCAO DE INSTRUCOES");
  Serial.println("VERSAO ROBUSTA DE TESTE");
  Serial.println();
  Serial.println("Instrucoes desta etapa:");
  Serial.println("6  -> LEDON");
  Serial.println("7  -> LEDOFF");
  Serial.println("15 -> HALT");
  Serial.println();
  Serial.println("LED 1 -> pino 2");
  Serial.println("LED 2 -> pino 3");
  Serial.println("LED 3 -> pino 4");
  Serial.println();
  Serial.println("MODO LOAD ATIVO");
  Serial.println("Digite o endereco inicial de carga no formato #endereco#");
  Serial.println("Faixa valida: 0 a 1023");
  Serial.println("==================================================");
}

// =======================================================
// LEITURA E TRATAMENTO DE ENTRADA
// =======================================================

char lerTeclaAtual() {
  return teclado.getKey();
}

void atualizarEntradaTeclado(char teclaAtual) {
  if (!teclaAtual) {
    return;
  }

  if (teclaAtual == '#') {
    if (!capturandoSequencia) {
      capturandoSequencia = true;
      bufferSequencia = "";
    } else {
      capturandoSequencia = false;
      sequenciaCompleta = bufferSequencia;
      sequenciaCompletaDisponivel = true;
    }
    return;
  }

  if (capturandoSequencia) {
    bufferSequencia += teclaAtual;
  }
}

bool haSequenciaCompleta() {
  return sequenciaCompletaDisponivel;
}

String obterSequenciaCompleta() {
  String retorno = sequenciaCompleta;

  sequenciaCompleta = "";
  sequenciaCompletaDisponivel = false;

  return retorno;
}

// =======================================================
// VALIDAÇÕES
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
    case 6:
    case 7:
      return true;

    default:
      return false;
  }
}

bool opcodePermitidoNaEtapaAtual(byte opcode) {
  switch (opcode) {
    case 6:
    case 7:
    case 15:
      return true;

    default:
      return false;
  }
}

bool operandoLEDValido(uint16_t operando) {
  return (operando >= 1 && operando <= 3);
}

// =======================================================
// TABELA DE INSTRUÇÕES
// =======================================================

String obterMneMonico(byte opcode, uint16_t operando) {
  String mnemonicoBase = "";

  switch (opcode) {
    case 6:  mnemonicoBase = "LEDON";  break;
    case 7:  mnemonicoBase = "LEDOFF"; break;
    case 15: mnemonicoBase = "HALT";   break;
    default: return "ERRO";
  }

  if (instrucaoExigeOperando(opcode)) {
    return mnemonicoBase + " " + String(operando);
  }

  return mnemonicoBase;
}

// =======================================================
// MONTAGEM E DECODIFICAÇÃO
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

byte extrairOpcode(uint16_t instrucao) {
  return (byte)((instrucao >> 12) & 0x0F);
}

uint16_t extrairOperando(uint16_t instrucao) {
  return (uint16_t)(instrucao & 0x0FFF);
}

// =======================================================
// CONTROLE GERAL
// =======================================================

void processarSistema() {
  char teclaAtual = lerTeclaAtual();

  atualizarEntradaTeclado(teclaAtual);

  switch (estadoSistema) {
    case ESTADO_LOAD_ENDERECO_INICIAL:
      processarEstadoLoadEnderecoInicial();
      break;

    case ESTADO_LOAD_OPCODE:
      processarEstadoLoadOpcode();
      break;

    case ESTADO_LOAD_OPERANDO:
      processarEstadoLoadOperando();
      break;

    case ESTADO_RUN_AGUARDANDO_START:
      processarEstadoRunAguardandoStart();
      break;

    case ESTADO_RUN_EXECUTANDO:
      processarEstadoRunExecutando(teclaAtual);
      break;

    case ESTADO_ENCERRADO:
      processarEstadoEncerrado();
      break;
  }
}

// =======================================================
// ESTADOS DO MODO LOAD
// =======================================================

void processarEstadoLoadEnderecoInicial() {
  String sequenciaLida;
  int enderecoInformado;

  if (!haSequenciaCompleta()) {
    return;
  }

  sequenciaLida = obterSequenciaCompleta();

  if (!stringEhNumero(sequenciaLida)) {
    Serial.println("ERRO: o endereco inicial deve ser numerico.");
    return;
  }

  enderecoInformado = sequenciaLida.toInt();

  if (enderecoInformado < 0 || enderecoInformado > ENDERECO_MAXIMO) {
    Serial.println("ERRO: endereco inicial fora da faixa 0..1023.");
    return;
  }

  enderecoCargaAtual = (uint16_t) enderecoInformado;
  estadoSistema = ESTADO_LOAD_OPCODE;

  Serial.print("Endereco inicial de carga definido: ");
  Serial.print(enderecoCargaAtual);
  Serial.print(" (");
  exibirEnderecoBinario10Bits(enderecoCargaAtual);
  Serial.println(")");

  Serial.println("Digite agora as instrucoes.");
  Serial.println("Nesta etapa: LEDON, LEDOFF e HALT.");
}

void processarEstadoLoadOpcode() {
  String sequenciaLida;
  int valorOpcode;
  uint16_t palavraInstrucao;

  if (!haSequenciaCompleta()) {
    return;
  }

  sequenciaLida = obterSequenciaCompleta();

  if (!stringEhNumero(sequenciaLida)) {
    Serial.println("ERRO: o opcode deve ser numerico.");
    return;
  }

  valorOpcode = sequenciaLida.toInt();

  if (valorOpcode < 0 || valorOpcode > 15) {
    Serial.println("ERRO: opcode fora da faixa 0..15.");
    return;
  }

  opcodeAtual = (byte) valorOpcode;

  if (!opcodePermitidoNaEtapaAtual(opcodeAtual)) {
    Serial.println("ERRO: nesta etapa sao permitidos apenas LEDON, LEDOFF e HALT.");
    return;
  }

  if (enderecoCargaAtual > ENDERECO_MAXIMO) {
    Serial.println("ERRO: memoria esgotada.");
    encerrarAplicacao();
    return;
  }

  if (instrucaoExigeOperando(opcodeAtual)) {
    estadoSistema = ESTADO_LOAD_OPERANDO;

    Serial.print("Opcode reconhecido: ");
    Serial.print(opcodeAtual);
    Serial.print(" -> ");
    Serial.println(obterMneMonico(opcodeAtual, 0));
    Serial.println("Aguardando operando (LED 1 a 3).");
    return;
  }

  palavraInstrucao = montarPalavraInstrucao(opcodeAtual, 0);
  armazenarInstrucaoNaMemoria(enderecoCargaAtual, palavraInstrucao);

  exibirInstrucaoArmazenada(enderecoCargaAtual, opcodeAtual, 0);

  if (opcodeAtual == 15) {
    programaCarregado = true;
    entrarModoRun();
    return;
  }

  enderecoCargaAtual++;
}

void processarEstadoLoadOperando() {
  String sequenciaLida;
  long valorOperandoLong;
  uint16_t operando;
  uint16_t palavraInstrucao;

  if (!haSequenciaCompleta()) {
    return;
  }

  sequenciaLida = obterSequenciaCompleta();

  if (!stringEhNumero(sequenciaLida)) {
    Serial.println("ERRO: o operando deve ser numerico.");
    estadoSistema = ESTADO_LOAD_OPCODE;
    return;
  }

  valorOperandoLong = sequenciaLida.toInt();

  if (valorOperandoLong < 0 || valorOperandoLong > OPERANDO_MAXIMO_12_BITS) {
    Serial.println("ERRO: operando fora da faixa 0..4095.");
    estadoSistema = ESTADO_LOAD_OPCODE;
    return;
  }

  operando = (uint16_t) valorOperandoLong;

  if (!operandoLEDValido(operando)) {
    Serial.println("ERRO: para LEDON e LEDOFF, o operando deve estar entre 1 e 3.");
    estadoSistema = ESTADO_LOAD_OPCODE;
    return;
  }

  palavraInstrucao = montarPalavraInstrucao(opcodeAtual, operando);
  armazenarInstrucaoNaMemoria(enderecoCargaAtual, palavraInstrucao);

  exibirInstrucaoArmazenada(enderecoCargaAtual, opcodeAtual, operando);

  enderecoCargaAtual++;
  estadoSistema = ESTADO_LOAD_OPCODE;
}

// =======================================================
// TRANSIÇÃO PARA RUN
// =======================================================

void entrarModoRun() {
  estadoSistema = ESTADO_RUN_AGUARDANDO_START;

  Serial.println("==================================================");
  Serial.println("PROGRAMA CARREGADO");
  Serial.println("MODO RUN ATIVO");
  Serial.println("Digite o endereco da primeira instrucao no formato #endereco#");
  Serial.println("Depois, use '*' para executar uma instrucao por vez.");
  Serial.println("==================================================");
}

// =======================================================
// ESTADOS DO MODO RUN
// =======================================================

void processarEstadoRunAguardandoStart() {
  String sequenciaLida;
  int enderecoInformado;

  if (!haSequenciaCompleta()) {
    return;
  }

  sequenciaLida = obterSequenciaCompleta();

  if (!stringEhNumero(sequenciaLida)) {
    Serial.println("ERRO: o endereco de execucao deve ser numerico.");
    return;
  }

  enderecoInformado = sequenciaLida.toInt();

  if (enderecoInformado < 0 || enderecoInformado > ENDERECO_MAXIMO) {
    Serial.println("ERRO: endereco de execucao fora da faixa 0..1023.");
    return;
  }

  PC = (uint16_t) enderecoInformado;
  estadoSistema = ESTADO_RUN_EXECUTANDO;

  Serial.print("Endereco inicial de execucao carregado em PC: ");
  Serial.print(PC);
  Serial.print(" (");
  exibirEnderecoBinario10Bits(PC);
  Serial.println(")");

  Serial.println("Pressione '*' para executar uma instrucao por vez.");
}

void processarEstadoRunExecutando(char teclaAtual) {
  if (teclaAtual == '*') {
    executarProximaInstrucao();
  }
}

void executarProximaInstrucao() {
  if (PC > ENDERECO_MAXIMO) {
    Serial.println("ERRO: PC fora da faixa de memoria.");
    encerrarAplicacao();
    return;
  }

  IR = MEMORIA_PRINCIPAL[PC];

  Serial.println("==================================================");
  Serial.print("FETCH  -> PC = ");
  Serial.print(PC);
  Serial.print(" | endereco binario = ");
  exibirEnderecoBinario10Bits(PC);
  Serial.println();

  Serial.print("IR     -> ");
  exibirPalavraBinaria16Bits(IR);
  Serial.println();

  executarInstrucao(IR);
}

void executarInstrucao(uint16_t instrucao) {
  byte opcode = extrairOpcode(instrucao);
  uint16_t operando = extrairOperando(instrucao);

  Serial.print("DECODE -> ");
  Serial.println(obterMneMonico(opcode, operando));

  switch (opcode) {
    case 6:
      executarLEDON(operando);
      if (estadoSistema != ESTADO_ENCERRADO) {
        PC++;
      }
      break;

    case 7:
      executarLEDOFF(operando);
      if (estadoSistema != ESTADO_ENCERRADO) {
        PC++;
      }
      break;

    case 15:
      Serial.println("EXEC   -> HALT");
      encerrarAplicacao();
      break;

    default:
      Serial.println("ERRO: opcode invalido para esta etapa.");
      encerrarAplicacao();
      break;
  }

  if (estadoSistema == ESTADO_RUN_EXECUTANDO) {
    exibirEstadoLEDs();
    Serial.print("PC atualizado para: ");
    Serial.println(PC);
    Serial.println("Pressione '*' para executar a proxima instrucao.");
    Serial.println("==================================================");
  }
}

void executarLEDON(uint16_t operando) {
  byte indiceLED;

  if (!operandoLEDValido(operando)) {
    Serial.println("ERRO: LED invalido.");
    encerrarAplicacao();
    return;
  }

  indiceLED = (byte)(operando - 1);
  digitalWrite(pinosLEDs[indiceLED], HIGH);

  Serial.print("EXEC   -> LEDON ");
  Serial.print(operando);
  Serial.print(" | pino ");
  Serial.println(pinosLEDs[indiceLED]);
}

void executarLEDOFF(uint16_t operando) {
  byte indiceLED;

  if (!operandoLEDValido(operando)) {
    Serial.println("ERRO: LED invalido.");
    encerrarAplicacao();
    return;
  }

  indiceLED = (byte)(operando - 1);
  digitalWrite(pinosLEDs[indiceLED], LOW);

  Serial.print("EXEC   -> LEDOFF ");
  Serial.print(operando);
  Serial.print(" | pino ");
  Serial.println(pinosLEDs[indiceLED]);
}

// =======================================================
// ENCERRAMENTO
// =======================================================

void encerrarAplicacao() {
  estadoSistema = ESTADO_ENCERRADO;

  Serial.println("==================================================");
  Serial.println("APLICACAO ENCERRADA");
  Serial.println("Fim da execucao desta versao de teste.");
  Serial.println("==================================================");
}

void processarEstadoEncerrado() {
  // Nesta versao, apos o encerramento nada mais e processado.
}

// =======================================================
// EXIBIÇÃO
// =======================================================

void exibirInstrucaoArmazenada(uint16_t endereco, byte opcode, uint16_t operando) {
  uint16_t palavraInstrucao = MEMORIA_PRINCIPAL[endereco];

  Serial.println("--------------------------------------------------");

  Serial.print("Endereco decimal: ");
  Serial.print(endereco);
  Serial.print(" | Endereco binario: ");
  exibirEnderecoBinario10Bits(endereco);
  Serial.println();

  Serial.print("Instrucao: ");
  Serial.println(obterMneMonico(opcode, operando));

  Serial.print("Palavra armazenada: ");
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

void exibirEstadoLEDs() {
  byte i;

  Serial.print("LEDS   -> ");

  for (i = 0; i < NUM_LEDS; i++) {
    Serial.print("L");
    Serial.print(i + 1);
    Serial.print("=");

    if (digitalRead(pinosLEDs[i]) == HIGH) {
      Serial.print("ON");
    } else {
      Serial.print("OFF");
    }

    if (i < NUM_LEDS - 1) {
      Serial.print(" | ");
    }
  }

  Serial.println();
}
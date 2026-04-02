# 🧠 Simulador Didático de CPU com ULA Combinacional

## 📌 1. Descrição Geral

Este projeto tem como objetivo desenvolver um sistema didático que simula o comportamento de uma CPU simplificada, utilizando:

- **Arduino Mega 2560** como unidade de controle;
- **Circuitos combinacionais** como unidade de execução (ULA).

O sistema executa operações com base em um **opcode binário de 2 bits**, recebido via Monitor Serial.

---

## 🎯 2. Objetivos

### 2.1 Objetivos gerais
- Aplicar conceitos de circuitos combinacionais;
- Implementar uma **ULA (Unidade Lógica e Aritmética)**;
- Integrar hardware e software embarcado;
- Desenvolver modelagem formal (tabela verdade + álgebra booleana);
- Simular execução de instruções em arquitetura digital.

### 2.2 Não Escopo

- Circuitos sequenciais (flip-flops, registradores, contadores);
- Máquinas de estados;
- Execução dependente de clock;
- CPU completa.

## 🧠 3. Funcionamento do Sistema

### 🔎 3.1 Visão Geral

O sistema proposto simula, de forma didática, o funcionamento de uma **CPU simplificada**, com foco na execução de instruções a partir de um código binário.

Nesse contexto, o sistema atua como um **decodificador de instruções de máquina**, no qual:

1. Um **programa binário** é fornecido pelo usuário via Monitor Serial do Arduíno;
2. Após o programa ser inserido, o sketch gera em duas saídas digitais cada uma das **instruções (opcode)** mediante o comando '*' no Monitor Serial, uma instrução por vez;
3. Cada opcode gerado deverá ser entrada para um **decodificador binário**, que acionará um dos elementos do sistema: (i) somador, comparador, ou gerador de complemento de 1;
4. Os elementos constituem simulam operações dentro de uma **ULA (Unidade Lógica e Aritmética)** implementada com circuitos combinacionais;
5. As entradas de cada um dos elementos serão externas, comandadas por chaves;
6. O resultado da operação selecionada deve ser coficado para ser exibido no **display de 7 segmentos** conectado ao Arduíno.

Diferentemente de uma CPU real, este sistema:

- não possui memória;
- não executa instruções sequencialmente;
- não utiliza clock ou elementos de estado.

Assim, trata-se de uma **simulação funcional baseada exclusivamente em lógica combinacional**, onde cada saída depende apenas das entradas atuais.

### ⚙️ 3.2 Visão Específica dos Elementos

#### 2.1 Arduino

**Na entrada**  
O Arduino atua como **interface de entrada e unidade de controle simplificada**.

Suas funções são:

- receber o código binário via Monitor Serial;
- extrair o **opcode de 2 bits**;
- mapear esse opcode para sinais físicos;
- disponibilizar esses sinais nos pinos digitais **D2 e D3**.

Esses pinos formam um **barramento de dados de 2 bits**, equivalente ao campo de operação de uma instrução (o operando é dado por entradas físicas).

Exemplo:

| D3 D2 | Operação |
|------|--------|
| 00 | Soma |
| 01 | Comparação |
| 10 | Complemento |

> ⚠️ O Arduino não executa a operação — apenas seleciona qual será executada pelo hardware.

**No processamento**  
Na saída dos circuitos da ULA, o Arduíno atua como **multiplexador**, para ...

Função:
- selecionar quais resultados dos circuitos serão codificados para o display;
- utilizar D3 e D2 como sinais de seleção.

> O multiplexador atua como o seletor de resultados da ULA, semelhante ao comportamento de CPUs reais.

Após a execução da operação, o Arduino volta a atuar, agora como **interface de saída**.

Funções:
1. converter os bits resultantes da multiplexação para o padrão do display de 7 segmentos;
2. acionar os pinos do display.

#### 2.2 Decodificador de Instruções

Os sinais D2 e D3 são enviados para um bloco lógico responsável pela **decodificação da instrução**.

Esse bloco pode ser implementado com portas lógicas, através de um circuito combinacional de decodificação.

Sua função é:

- decodificar o opcode;
- ativar o circuito da operação correspondente na ULA.

Esse comportamento é análogo a uma **unidade de controle** em arquiteturas reais.

#### 2.3 ULA Combinacional

A ULA é o núcleo do sistema, composta por três circuitos combinacionais independentes.

💡Dica: Habilitar a entrada de cada circuito com uma AND, em que a outra entrada é dada pelo decodificador de instrução.

##### (a) Soma Binária

- Entradas: `A2 A1 A0` e `B2 B1 B0`
- Implementação:
  - somador de 4 bits; ou  
  - composição de somadores completos  

Realiza a soma binária com propagação de carry. 

##### (b) Comparação Lógica

- Entradas: `A` e `B`
- Saída:
  - `A > B`

Implementa função booleana de comparação.

##### (c) Complemento de 1

- Entrada: `X1 X0`
- Saída: `~X1 ~X0`

Implementado operação de complemento de 1.

#### 2.4 Display de 7 Segmentos

O display apresenta o resultado final ao usuário:

- Soma → valor decimal  
- Comparação → maior valor  
- Complemento → valor decimal equivalente  

Essa etapa representa a **interface homem-máquina (HMI)** do sistema.

## 4 Funcionalidades

### 🔹 F01 — Leitura do programa binário
Recebimento do opcode via Monitor Serial.

### 🔹 F02 — Emissão do opcode (D2, D3)

| D3 D2 | Operação |
|------|--------|
| 00 | Soma |
| 01 | Comparação |
| 10 | Complemento de 1 |
| 11 | Operação extra (reserva) |

### 🔹 F03 — ULA combinacional - decodificação

Implementação das operações:

- Soma binária (3 bits);
- Comparação lógica (1 bit);
- Complemento de 1 (2 bits).

### 🔹 F04 — Soma binária

- Entradas: A2 A1 A0, B2 B1 B0  
- Implementação: somador de 4 bits ou equivalente  
- Saída: valor decimal no display  

### 🔹 F05 — Comparação

- Entradas: A, B  
- Saída: maior valor entre A e B  

### 🔹 F06 — Complemento de 1

- Entrada: X1 X0  
- Saída: inversão bit a bit (~X)

### 🔹 F07 — Sinalização com LEDs

Todas as entradas devem ser visíveis por LEDs.

### 🔹 F08 — Exibição em display

Saída apresentada em display de 7 segmentos.

## 5. Documentação de engenharia

### Modelagem lógica formal

Cada operação deve conter:

- Tabela verdade  
- Expressão booleana  
- Forma minimizada  

O projeto deve incluir:

- Diagrama de blocos  
- Diagrama esquemático do circuito completo  
- Código do sketch. Publicar em:

  🌐 Repositório
  
  👉 https://github.com/claytonjasilva

## 6. Arquitetura do Sistema

## 🔌 Componentes

- Arduino Mega 2560  
- Protoboard  
- LEDs + resistores  
- Jumpers  
- Push-buttons  
- Display 7 segmentos  
- Decoder  
- CI somador (opcional)  
- Portas lógicas  
- Multiplexador  

## 7. Setup de Testes

### ✔ T01 — Seleção de operação
Verificar saída correta em D2/D3.

### ✔ T02 — Soma
Exemplo:

A = 101 (5)
B = 011 (3)
Resultado esperado = 8

### ✔ T03 — Comparação
Casos:
- A > B  

### ✔ T04 — Complemento
Exemplo:

Entrada = 10
Saída = 01 → decimal 1

### ⭐ T05 — Teste exaustivo
Uma operação deve ser testada com todas as combinações possíveis.

### ⭐ T06 — Teste de borda

- Soma: 7 + 7  
- Comparação com igualdade  
- Complemento de 00 e 11

### ✔ T07 — Demonstração completa

Fluxo:

1. Entrada via serial  
2. Geração do opcode  
3. Seleção da operação  
4. Entrada manual  
5. Saída no display  

## 📊 8. Avaliação

| Critério | Nota |
|--------|------|
| Modelagem lógica | 2,0 |
| Circuito | 2,0 |
| Integração | 2,0 |
| Testes | 2,0 |
| Documentação | 2,0 |

## 📏 Regras

- Vale **30% da nota de AP1**  
- Trabalho em grupo  
- Presença obrigatória  
- Penalidades:
  - Ausente → -40%  
  - TP → -40%  
  - NT → 0,0  

## 📦 Entregáveis

- Documentação (README.md)  
- Código do Arduino  
- Protótipo funcional  
- Repositório GitHub  

## 🧾 Cabeçalho obrigatório no sketch

```cpp
// 12345 Fulano de Tal TA
// 23456 Sicrano TP
// 34567 Beltrano NT
```
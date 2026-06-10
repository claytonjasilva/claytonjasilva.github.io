# Trabalho AP2 – Tradução Simplificada de Estruturas de Repetição para Assembly AVR (ATmega2560)

## Condições de avaliação

O trabalho é um componente da nota da AP2, totalizando 20% da nota.

## Objetivo

Desenvolver um programa em C ou C++ capaz de reconhecer uma estrutura de repetição específica, verificar sua validade léxica e sintática e produzir um código Assembly equivalente para o microcontrolador ATmega2560.

O objetivo principal do trabalho é compreender a relação entre:

- Linguagem de alto nível;
- Análise léxica;
- Análise sintática;
- Tradução para Assembly;
- Linguagem de máquina;
- Execução de programas em um processador AVR.

> Importante: o foco do trabalho não é o estudo aprofundado de compiladores. O objetivo é compreender como estruturas de controle podem ser representadas em Assembly e executadas pelo processador.

---

# Organização dos Grupos

A turma está dividida nos grupos constantes do anexo.

Cada grupo receberá uma única estrutura de repetição para implementar.

O sorteio das estruturas será realizado pelo professor.

Cada grupo deverá desenvolver um programa capaz de reconhecer exclusivamente a estrutura atribuída.

---

# Estruturas Disponíveis

## Estrutura 1 - Grupo A, 3a

```c
for(i=0;i<N;i++){}
```

## Estrutura 2 - Grupo B, 3a

```c
for(i=1;i<=N;i++){}
```

## Estrutura 3 - Grupo C, 3a

```c
for(i=N;i>0;i--){}
```

## Estrutura 4 - Grupo A, 4a

```c
for(i=N;i>=0;i--){}
```

## Estrutura 5- Grupo B, 4a

```c
while(i<N){}
```

## Estrutura 6- Grupo C, 4a

```c
while(i<=N){}
```

## Estrutura 7- Grupo D, 4a

```c
while(i>0){}
```

## Estrutura 8- Grupo E, 4a

```c
while(i>=0){}
```

## Estrutura 9

```c
do{}while(i<N);
```

## Estrutura 10

```c
do{}while(i>0);
```

---

# Simplificações Adotadas

Para manter o foco nos conceitos de Arquitetura de Computadores:

- A entrada será fornecida pelo usuário através do teclado;
- Não será necessária leitura de arquivos;
- O programa analisará apenas a estrutura atribuída ao grupo;
- O corpo da estrutura será sempre vazio (`{}`).

Exemplo:

```text
Digite a estrutura:
for(i=0;i<45;i++){}
```

---

# Funcionalidades Obrigatórias

## 1. Leitura da Entrada

O programa deverá ler uma única estrutura digitada pelo usuário através do console.

## 2. Análise Léxica

O programa deverá verificar se todos os caracteres utilizados pertencem ao conjunto permitido para a estrutura atribuída.

Exemplo:

```text
Erro léxico: caractere inválido encontrado.
```

## 3. Análise Sintática

O programa deverá verificar se a estrutura digitada corresponde exatamente ao padrão atribuído ao grupo.

Exemplo:

```text
Erro sintático: estrutura inválida.
```

## 4. Tradução para Assembly

Caso a estrutura seja considerada válida, o programa deverá apresentar na tela um código Assembly equivalente para o ATmega2560.

Exemplo:

```asm
LDI R16,0
LDI R17,45

LOOP:
CP R16,R17
BRGE FIM

INC R16
RJMP LOOP

FIM:
NOP
```

Não será obrigatória a geração automática de arquivos `.asm`.

---

# Instruções Assembly Permitidas

O código Assembly produzido deverá utilizar exclusivamente as seguintes instruções:

```asm
LDI
CP
CPI
INC
DEC
RJMP
BREQ
BRNE
BRGE
BRLT
NOP
```

Não será permitida a utilização de qualquer outra instrução Assembly.

---

# Diretivas Proibidas

Não será permitido utilizar diretivas do Assembler AVR.

Exemplos:

```asm
.include
.org
.def
.equ
.cseg
.dseg
.db
.dw
.byte
```

O código produzido deverá conter apenas:

- instruções Assembly;
- rótulos (labels);
- comentários.

---

# Simulação

O grupo deverá copiar o código Assembly produzido para o Microchip Studio e realizar sua montagem e simulação.

Deverá ser apresentada evidência da execução.

---

# Entregáveis

Cada grupo deverá entregar:

1. Código-fonte em C ou C++;
2. Código Assembly produzido;
3. Evidência da simulação no Microchip Studio;
4. Relatório técnico em PDF.

---

# Apresentação dos Trabalhos

As apresentações ocorrerão logo após a realização da AP2. Se o grupo desejar poderá agendar a apresentação no dia 18/6.

Cada grupo terá até 15 minutos para apresentação.

Após o início da apresentação não será permitida qualquer alteração no código-fonte.

## Etapa 1 – Descrição da Solução

O grupo deverá explicar:

- funcionamento geral do programa;
- estratégia de análise léxica;
- estratégia de análise sintática;
- lógica de tradução para Assembly.

## Etapa 2 – Demonstração da Solução

O grupo deverá executar uma entrada válida compatível com sua estrutura.

Deverão ser apresentados:

- entrada fornecida;
- resultado da análise léxica;
- resultado da análise sintática;
- código Assembly produzido.

## Etapa 3 – Setup de Testes

O grupo deverá executar um conjunto de testes propostos pelo professor.

## Etapa 4 – Simulação no Microchip Studio

Para uma entrada válida selecionada pelo professor, o grupo deverá apresentar:

- o código Assembly produzido;
- a montagem do programa;
- a execução passo a passo;
- os registradores utilizados;
- os desvios condicionais executados.

## Etapa 5 – Código de Máquina

Quando o código Assembly não apresentar erros de montagem, o grupo deverá apresentar:

- os endereços das instruções;
- os opcodes gerados;
- a representação hexadecimal do código de máquina correspondente.

O grupo deverá explicar a relação entre:

```text
Entrada
→ Análise Léxica
→ Análise Sintática
→ Assembly
→ Código de Máquina
→ Execução no Processador
```

---

# Critérios de Avaliação

| Critério | Peso |
|-----------|------:|
| Implementação da análise léxica | 15% |
| Implementação da análise sintática | 20% |
| Tradução para Assembly | 20% |
| Simulação no Microchip Studio | 15% |
| Qualidade da apresentação | 10% |
| Capacidade de explicar erros e testes | 20% |

---

# Observações Finais

Será valorizada a compreensão dos seguintes conceitos:

- registradores;
- comparação;
- desvios condicionais;
- laços de repetição;
- código Assembly;
- código de máquina;
- execução em nível de processador.

Mais importante do que implementar uma solução funcional é demonstrar compreensão do processo de tradução e execução de programas em um processador AVR.

# Grupos de Trabalho — Arquitetura

## Turma 3a

### Grupo A
| Matrícula | Nome |
|-----------|------|
| 202403088886 | BERNARDO MEIRELES DOS ANJOS DA SILVA |
| 202403191156 | Caio Domingues Azevedo |
| 202501001041 | Felipe Maia de Lara Resende |
| 202307164607 | Ricardo Santos Lima |

### Grupo B
| Matrícula | Nome |
|-----------|------|
| 202308759141 | ANNA BEATRIZ RODRIGUES DRUMOND FLORES |
| 202508449013 | Arthur Calebe Carvalho Da Silva |
| 202107291052 | Matheus Cocenzo e Silva |
| 202402627279 | Raí Lamper de Avila |
| 202508486091 | THIAGO CARDOSO DA ROCHA |
| 202208766005 | Victor Alvarenga Hwang |

### Grupo C
| Matrícula | Nome |
|-----------|------|
| 202502831285 | Marcos Paulo Lopes de Assunção |

---

## Turma 4a

### Grupo A
| Matrícula | Nome |
|-----------|------|
| 202501540376 | Gabriel Rocha de Lima |
| 202501023169 | MIGUEL ESTEVES DE CARVALHO FERREIRA |
| 202501000908 | MIGUEL FIGUEIRA |
| 202501540503 | VICTOR BARTOSKI MEROLA LOUREIRO |

### Grupo B
| Matrícula | Nome |
|-----------|------|
| 202407096158 | BERNARDO ARSLANIAN ARAUJO |
| 202407095917 | Enzo Araujo Zambrotti |
| 202408356404 | GUILHERME MACHADO VIANA |
| 202402697706 | João Gabriel Meirelles Guedes |
| 202503076936 | PEDRO CARVALHO PEREIRA DA SILVA |

### Grupo C
| Matrícula | Nome |
|-----------|------|
| 202507153706 | Caio Magalhães da Silva de Oliveira |
| 202501001254 | Gianluca Leonardi |
| 202501001531 | Iago Silva Viana |
| 202502070527 | Kaue Fernandes de sousa da silva |
| 202402626604 | LEONARDO ALMEIDA VAZ |

### Grupo D
| Matrícula | Nome |
|-----------|------|
| 202504164065 | ANTONIO REUTHER FRUCTUOSO DAMASCENO |
| 202504236708 | Giovanna Sales Nunes de Lima |
| 202308675435 | Guilherme Reis de Carvalho |
| 202507345321 | Luiz Fernando Silva Divino |
| 202308675427 | Matheus Reis de Carvalho |

### Grupo E
| Matrícula | Nome |
|-----------|------|
| 202401000371 | LUCAS CALIL CAVALCANTI |
| 202402113003 | Marco Antonio Mourao Laurindo |

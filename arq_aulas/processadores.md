# 7. Processadores

## 7.1 Áreas e elementos funcionais
Os processadores possuem duas áreas funcionais básicas:
- Unidade Lógica e Aritmética (ULA)
- Unidade de Controle

A ULA é responsável pela execução das operações definidaas no *set* de instruções.  
Na ULA são realizadas todas as operações lógicas e aritméticas da máquina.
A UC é a unidade responsável pela busca, interpretação e controle das instruções.

![Processador: unidades funcionais](/arq_aulas/images/processador1.jpg)
Observe que, conforme discutido em barramentos, as os elementos das duas áreas se interligam por meio de um barramento local.   
As áreas funcionais possuem elementos para executar essas funções.   
A figura ilustra os elementos:

![Elementos internos do processador](/arq_aulas/images/processador2.jpg)

A figura ilustra os elementos típicos.  
Na ULA,  
- Os circuitos lógicos e aritméticos executam as instruções desse tipo;
- Registradores de uso geral armazenam dados sobre os quais as instruções operam;
- Embora não esteja apresentado na figura, os processadores recentes possuem uma cache, L1.  
A cache L1 é uma memória cache de nível 1 que fica dentro do processador e é a mais rápida e cara.  
É usada para armazenar dados e instruções que são usados com frequência pelo processador.  

Na UC,  
- O registrador de armazenamento das instruções (RI) buscadas, a serem executadas;
- O decodificador de instruções, responsável pela conversão da instrução em um conjunto específico de bits e que alimenta os circuitos de controle
- Circuitos de controle, responsáveis pelos sinais de controle que são encaminhados aos demais componentes da máquina.

Os processadores mais modernos multiplicam a configuração apresentada na figura anterior.  
São os chamados processadores *multicore*.  
Cada núcleo ou *core* contém todos os componentes de um processador independente.  

## 7.2 *Set* de instruções
Cada processador é construído de modo a executar um conjunto finito, pré-definido de instruções.  
Esse conjunto caracteriza o *set* de instruções do processador.  
As instruções são interpretadas pelo processador, decodificadas pela UC.  
Cada instrução corresponde um comportamento específico.  
Considerando cada tarefa executada por um processador, essa tarefa é o resultado de um programa cujas instruções são tipicamente armazenadas em posições lineares de endereço de memória.  
Normalmente as instruções possuem visibilidade sobre alguns registradores.  

### Formatos e modos de endereçamento das instruções
A instrução pode ser dividida em dois campos, opcode, ou código da instrução; e operando.   
O opcode define a palavra do código binário associado à operação realizada pela instrução.  
O operando **referencia o dado** a ser usado pela instrução.  

Em função do operando, o **formato de cada instrução** pode variar:
- As instruções podem não requerer dado.  
Um exemplo é a instrução IJMP do microcontrolador AVR Atmega2560.  
A operação executa desvio incondicional.  
- O campo de operando pode referenciar um dado - a instrução é **monádica**.  
Um exemplo é a instrução INC Rd do microcontrolador AVR Atmega2560.  
A operação executa incremento do valor armazenado no registrador Rd: Rd <- Rd + 1.
- O campo de operando pode referenciar dois dados - a instrução é **diádica**.  
Um exemplo é a instrução ADD Rr,Rd do microcontrolador AVR Atmega2560.  
A operação executa adição do valor armazenado nos registradores Rr e Rd: Rr <- Rr + Rd.

A referência ao dado em memória é chamada de **modo de endereçamento da instrução**.  
Os principais modos de endereçamento são:
1. imediato
- operando contém o próprio dado;  
- dado é buscado juntamente na busca da instrução a execução da instrução tipicamente mais rápida;  
- Exemplo:   
LDI Rs,k, cuja operação é definida por Rs <- k, carrega no registrador Rs o valor k.  
2. direto 
- operando contém o endereço do dado em memória;  
- dado é buscado em memória em um acesso;  
- Exemplo:  
LDS Rs,k, cuja operação é definida por Rs <- DS[k], carrega no registrador Rs o valor armazenado no endereço de memória (DS, *Data Space*) k.   
3. indireto do registrador   
- operando contém o registrador cujo valor contém o endereço do dado em memória;  
- o registrador que contém o endereço do dado é chamado de **ponteiro**;  
- Exemplo:  
LD Rs,x+, cuja operação é definida por Rs <- DS[[x+]], carrega no registrador Rs o dado do endereço de memória (DS, *Data Space*) definido pelo conteúdo do registrador x+.   
4. indexado 
- operando contém o registrador cujo valor contém o endereço do dado em memória e o valor a ser indexado ao registrador;  
- Exemplo:  
LDD Rs, X+k, cuja operação é definida por Rs <- DS[[x+]+k], carrega no registrador Rs o dado do endereço de memória (DS, *Data Space*) acrescido de K definido pelo conteúdo do registrador x+.   

Os principais tipos de instrução mais comuns são:  
- instruções para movimentação de dados, que transferem uma cópia do dado armazenado em um elemento para outro elemento;
- instruções de comparações e desvios condicionais, que permitem estabelecer fluxos alternativos de execução do programa;
- instruções aritméticas e lógicas, que permiem realizar operações lógicas e aritméticas.

### Arquiteturas RISC X CISC
Existem basicamente duas estratégias de construção das instruções de processadores: RISC (*Reduced Instruction Set Computing*) x CISC(*Complex Instruction Set Computing*).  
As diferenças entre as arquiteturas RISC e CISC são principalmente a complexidade das instruções e o número de ciclos de clock necessários para executar uma instrução.   
A arquitetura RISC é uma arquitetura de processador que usa um conjunto de instruções reduzido e simples para acelerar o desempenho do processador.   
A arquitetura CISC , por outro lado, usa um conjunto de instruções mais complexo e variado que pode executar tarefas mais complexas em menos ciclos de clock.   
A arquitetura RISC é geralmente mais rápida e eficiente em termos de energia do que a arquitetura CISC, mas pode exigir mais memória para armazenar programas.   
Já a arquitetura CISC é geralmente mais flexível e pode executar tarefas mais complexas em menos ciclos de clock, mas pode ser menos eficiente em termos de energia e velocidade.

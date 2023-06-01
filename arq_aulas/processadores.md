# 7. Processadores

## 7.1 Áreas e elementos funcionais

### ULA e UC
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

### Núcleos (*core*) e *threads*
#### Processadores multicore
Os processadores mais modernos multiplicam a configuração apresentada na figura anterior.  
São os chamados processadores *multicore*.  
Cada núcleo ou *core* contém todos os componentes de um processador independente.  
Obviamente, quanto mais núcleos maior complexidade para construir o processador.  

#### *Threads*
Relacionado com o núcleo existe o conceito de *threads* do processador. A relação entre núcleos e *threads* é fundamental.       
*Threads* são sequências de instruções executadas em um núcleo do processador,   
cada um representando uma **tarefa independente** que o processador deve realizar. 

A implantação do conceito de multitarefa permite que os núcleos do processador trabalhem em várias tarefas simultaneamente,  
cada um dos quais executando um ou vários *threads*.    

Em processadores básicos, cada núcleo executa um *thread* por vez. Porém, alguns processadores mais avançados permitem que um núcleo execute vários *threads* simultaneamente, melhorando o desempenho e a eficiência em determinadas tarefas.

A capacidade de um processador executar vários *threads* é útil em aplicativos que exigem alto grau de paralelismo, como edição de vídeo, renderização 3D e processamento de dados em larga escala. Também permite que você otimize a distribuição de tarefas e evite que os núcleos fiquem ociosos enquanto aguardam a conclusão de um determinado thread.
Deve-se observar que o aumento de desempenho fornecido pela capacidade de executar vários *threads* em um núcleo não é o mesmo que adicionar núcleos adicionais ao processador. Embora melhore o desempenho em determinadas situações, não dobra o desempenho de um kernel, pois os recursos do kernel ainda são compartilhados entre as threads.

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

## 7.3 Desempenho

### Unidades de medida de desempenho
O desempenho dos processadores é principalmente medido pela velocidade com que executam as instruções.   
1. Um dos parâmetros é a unidade **MIPS – Milhões de Instruções Por Segundo**.  
O MIPS mede apenas a execução de instruções, embora existam diferentes instruções,  
com tempos de execução distintos, como, por exemplo, multiplicação de números   
inteiros e multiplicação de números reais (ponto flutuante).  

2. Em contraste com o MIPS, a unidade **FLOPS – Operações de Ponto Flutuante Por Segundo** mede 
o desempenho da ULA, analisando apenas as instruções mais complexas (as que envolvem 
ponto flutuante).  

### Paralelismo de execução das instruções
Descrevendo o funcionamento da CPU na realização de seus ciclos de instrução foi observado 
que, embora o ciclo de instrução seja composto de várias etapas, ele é realizado de forma seqüencial, isto 
é, uma etapa se inicia após a conclusão da etapa anterior.  

Desta forma enquanto a fase de decodificação 
da instrução estava sendo executada, a busca (MBR e MAR) e a execução (ULA) estavam ociosas.

Graças aos avanços da tecnologia existem CPUs que executam mais de uma instrução 
por ciclo, sendo chamadas de **superescalares**.

**a. *Pipeline***    
O pipeline é uma técnica de implementação de CPU onde múltiplas instruções estão em 
execução ao mesmo tempo. O processador é construído com diversos estágios distintos, cada um 
responsável pela execução de uma parte da instrução e possuindo o seu próprio bloco de controle. Assim 
que um estágio completa sua tarefa com uma instrução passa esta para o estágio seguinte e começa a
tratar da próxima instrução. Uma vez que diversas instruções são executadas ao mesmo tempo, obtêm-se 
um acréscimo no desempenho do processador.

Pode-se dividir, por exemplo, a execução de uma instrução em 5 estágios básicos:
  1. Busca da Instrução (*fetch*)
  2. Decodificação (*decode*)
  3. Busca do Operando (*operand fetch*)
  4. Execução (*execute*)
  5. Armazenamento do Resultado (*store*)

![*Pipeline*](/arq_aulas/images/processador3.jpg)

A implementação do *pipeline* implica problemas que devem ser resolvidos, como conflitos de dados, conflitos estruturais e de controle.  
Aumenta-se a complexidade para resolver tais problemas em proveito do aumento de performance.

**b. Unidades de execução especializadas**  
Para resolver paralelamente a execução das instruções a arquitetura pode contemplara a organização de unidades especializadas.  
A figura ilustra>

![Unidades funcionais](/arq_aulas/images/processador4.jpg)

## 7.4 Arquiteturas RISC X CISC
Existem basicamente duas estratégias de construção das instruções de processadores: RISC (*Reduced Instruction Set Computing*) x CISC(*Complex Instruction Set Computing*).  
As diferenças entre as arquiteturas RISC e CISC são principalmente a complexidade das instruções e o número de ciclos de clock necessários para executar uma instrução.   
A arquitetura RISC é uma arquitetura de processador que usa um conjunto de instruções reduzido e simples para acelerar o desempenho do processador.   
A arquitetura CISC , por outro lado, usa um conjunto de instruções mais complexo e variado que pode executar tarefas mais complexas em menos ciclos de clock.   
A arquitetura RISC é geralmente mais rápida e eficiente em termos de energia do que a arquitetura CISC, mas pode exigir mais memória para armazenar programas.   
Já a arquitetura CISC é geralmente mais flexível e pode executar tarefas mais complexas em menos ciclos de clock, mas pode ser menos eficiente em termos de energia e velocidade.

___
**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**   



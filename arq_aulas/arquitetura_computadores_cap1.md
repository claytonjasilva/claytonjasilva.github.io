# Cap. 1 - Máquina de von Neumann

## 1.1 [Breve histórico](https://pt.wikipedia.org/wiki/Computador_IAS)

A tarefa de carregar e modificar programas nas máquinas historicamente precedentes à máquina IAS era extremamente tediosa.

A ideia principal da máquina IAS, atribuída a von Neumann, é a do **conceito de programa armazenado**.

O conceito de programa armazenado consiste no armazenamento do programa a ser executado pela UCP em memória, juntamente com os dados. O processador busca as instruções e os dados do programa diretamente da memória. Instruções e dados estão armazenados em posições específicas inequívocas da memória, cada uma definida por um **endereço de memória**.

![Máquina original de von Neumann](/arq_aulas/images/figura1_1.png)

Figura 1.1 Máquina original de von Neumann (fonte. Tanenbaum, Organização estruturada de computadores)

A estrutura geral da máquina IAS consiste em:

- Uma memória principal, que armazena dados e instruções  
- Uma Unidade Lógica e Aritmética (ULA), capaz de realizar as operações matemáticas binárias e as operações lógicas  
- Uma Unidade de Controle (UC), que interpreta e executa as instruções armazenadas na memória  
- Dispositivos de entrada e saída (E/S) operados pela Unidade de Controle.

### 1.1.1 Memória

A memória é o elemento dos sistemas computacionais responsável pelo armazenamento das informações. As informações nos sistemas computacionais atuais são armazenadas na forma binária (Ver [anexo II](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/arquitetura_computadores_anexo2.md)). Rigorosamente, nos sistemas computacionais distinguem-se dados de informações, conforme discutiremos na seção seguinte. No momento trataremos como dados e informações de modo indistinto.

Uma das evoluções dos sistemas computacionais tem sido no sentido dos elementos de memória possuírem uma capacidade cada vez maior de armazenar dados (Ver [anexo I](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/arquitetura_computadores_anexo1.md)). Uma metáfora fácil de estabelecer para compreender como as memórias são organizadas é entendê-las como um armário com várias gavetas, organizadas em linhas e colunas. Em cada gaveta armazena-se uma unidade de dado, chamada bit (1 ou 0).

Os dados armazenados podem ser numéricos inteiros ou reais (computacionalmente chamados de ponto flutuante) (Ver [anexo III](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/arquitetura_computadores_anexo3.md)), mas também podem ser não numéricos - como caracteres alfabéticos e outros símbolos discretos. Nessa representação de símbolos discretos se enquadram as instruções que comandam o funcionamento das máquinas computacionais.

Todas as tarefas realizadas pelos sistemas computacionais decorrem da execução de uma sucessão de instruções binárias armazenadas, que podem manipular dados, também armazenados na memória, intitulados programas. Os programas constituem o software e comandam os elementos eletromecânicos, chamados de hardware.

As características tecnológicas dos dispositivos de memória têm evoluído rapidamente, propiciando uma elevada capacidade de armazenamento, mas também velocidade de resposta às solicitações emanadas pela unidade central de processamento (CPU), a quem cabe executar as instruções.

### 1.1.2 Unidade Central de Processamento

A **Unidade Central de Processamento** (CPU, do inglês *Central Processing Unit*) é o elemento concebido na arquitetura para realizar duas funções básicas principais: (i) interpretar as instruções e controlar o funcionamento das elementos do sistema, na **Unidade de Controle** (UC); e (ii) executar as instruções, na **Unidade Lógica e Aritmética** (ULA).

Para o controle, o sistema computacional utiliza uma referência temporal dada por um sinal elétrico chamado de clock. Pense no computador como uma máquina similar a um engenho mecânico, cuja operação é sincronizada por engrenagens. O sinal elétrico do clock é que permite o sincronismo de funcionamento de todas as operações dos computadores. O sinal de clock é periódico, ou seja, repete-se em intervalos regulares de tempo, chamados de **período** ou **ciclo**. O número de ciclos por unidade de tempo é chamado de **frequência**.

A evolução dos sistemas computacionais tem sido no sentido de produzir CPUs com referência de clock cada vez mais velozes. Ou seja, a interpretação das instruções dos programas armazenados na memória tem sido cada vez mais rápida, ou seja, os programas são executados, consequentemente as tarefas são realizadas em tempos cada vez mais curtos.

Por outro lado, as instruções são resolvidas pela ULA. Instruções definidas em fábrica são decodificadas pela UC, mas são efetivamente executadas pelos circuitos lógicos e aritméticos da ULA. Como o próprio nome define, a ULA possui os circuitos para executar operações cujo resultado pode ser verdadeiro ou falso - operações lógicas. Lembre-se que fisicamente os computadores representam os valores lógicos como sinais elétricos, por exemplo, 5V ou 0V, os quais podem ser abstraídos como 0s e 1s.

Além das operações lógicas, a ULA também possui os circuitos que podem resolver operações aritméticas, obviamente lidando com dados numéricos representados na forma binária.

### 1.1.3 Dispositivos de entrada e saída

Os computadores precisam assegurar uma ligação com os usuários. Para isso são necessários elementos que permitam ao usuário inserir os dados por meio de dispositivos de entrada. Por exemplo, um teclado possibilita que um usuário digite um texto que seja tratado pela máquina. Por outro lado, os resultados produzidos pela máquina precisam ser apresentados ao ambiente externo através dos chamados dispositivos de saída, por exemplo, monitores de vídeo.

Mas não somente para as pessoas os dispositivos de entrada e saída são produzidos. Máquinas diferentes precisam se comunicar. Os elementos de entrada e saída propiciam a comunicação do ambiente interno com o ambiente externo.

### 1.1.4 Barramento

Ficou evidente que os programas armazenados em memória possuem instruções interpretadas e executadas pela CPU. Por sua vez, os dados resultantes das operações lógicas e aritméticas precisam ser armazenados em memória ou precisam ser enviados a outra máquina através de dispositivos de E/S. Para que o tráfego de dados ocorra entre os elementos do computador são necessárias vias de comunicações, chamadas de barramento.

Através dos barramentos sao trafegados os sinais elétricos abstraídos matematicamente como 0s e 1s resultantes das operações, assim como relativos às instruções a serem executadas. Esses barramentos são funcionalmente classificados como **barramento de dados**. Mas os dados fluem entre elementos bem definidos, portanto a definição da localização do destinatário do dado é crucial para o tráfego de dados. Cada componente do computador é endereçável, de forma que o dado seja enviado ao destino correto. As vias que trafegam os endereços são chamadas de **barramento de endereços**.

Finalmente, o controle produzido pela UC é veiculado pelo chamado **barramento de controle**. Através dele circulam os sinais elétricos para ativar leitura/escrita em memória, habilitação/desabilitação de elemento etc.

## 1.2 Visão detalhada do computador IAS

A figura abaixo ilustra a organização detalhada do computador IAS.

![Estrutura do IAS](/arq_aulas/images/figura1_2.png)

Figura 1.2 Estrutura do IAS (fonte. Stallings, Arquitetura e Organização de Computadores)

1. **Registrador Temporário da Memória** (MBR, *Memory Buffer Register*): capacidade de armazenar **40 bits** e contém uma palavra com um par de instruções a ser lida ou escrita na memória. Registradores são dispositivos de armazenamento de dados internos ao processador que possuem tipicamente baixo tempo de acesso (posteriormente discutiremos o conceito), embora baixa capacidade de armazenamento de bits.
2. **Acumulador** (Acc) e **Quociente de Multiplicação** (MQ, *Multiplier Quotient*): capacidade de armazenar **40 bits** e **armazenam temporariamente** os operandos e o resultado das operações realizadas pelos circuitos lógicos e aritméticos da ULA. Em operações com mais de 40 bits, o Acc armazena os 40 bits mais significativos e o MQ armazena os 40 bits menos significativos.
3. **Contador do Programa** (PC, *Program Counter*): contador de **10 bits** e **contém o endereço do próximo** par de instruções. Incrementa automaticamente **1 bit** em cada instrução executada. **As instruções são armazenadas e **endereços adjacentes** de memória.
4. **Registrador de Endereçamento à Memória** (MAR, *Memory Adress Register*): capacidade de armazenar **12 bits** e contém o endereço da palavra.
5. **Registrador Temporário de Instruções** (IBR, **Instruction Buffer Register**): capacidade de armazenar **20 bits** e contém a instrução à direita da palavra.
6. **Registrador de Instruções** (IR, *Instruction Register*): capacidade de armazenar **8 bits** e contém o código da instrução (*opcode*) que está sendo executada.
7. Memória (*Memory*): capacidade de armazenar, **em cada linha de endereço** palavras de 40 bits, com duas instruções cadas, ou armazenar um dado de 40 bits. **Possui 1024 linhas de endereço**.
8. Dispositivos de Entrada/Saída (I/O, *Input/Output*): leitura e escrita de dados dos dispositivos externos da/para memória.
9. Barramento (*Bus*): meio de comunicação para tráfego dos bits entre os elementos do sistema, para trafegar **dados, endereços ou sinais de controle**.

A figura abaixo ilustra a relação da memória com os barramentos de dados e de endereços do computador IAS.

![Decodificação de endereço de memória IAS](/arq_aulas/images/figura1_3.jpg)

Figura 1.3 Decodificação de endereço de memória IAS

Cada linha de dados aponta para uma palavra, que ocupa um endereço de memória.  
Os endereços são inequívocos, ou seja, não existem dois endereços iguais.  

## 1.3. Visão detalhada das células de memória do computador IAS

### 1.3.1 Armazenamento de instruções

Um par de instruções ocupa cada linha de endereço. A estrutura da linha é dada por

![Par de instruções na memória IAS](/arq_aulas/images/figura1_4.jpg)

Figura 1.4 Par de instruções na memória IAS

A instrução à esquerda ocupa os bits b<sub>0</sub> a b<sub>19</sub>. As instruções à direita ocupam os bits b<sub>20</sub> a b<sub>39</sub>.
Cada instrução é possui um grupo de bits chamado de *opcode*, a palavra de um código que define as instruções do processador.  
E outro grupo de bits, chamado de operando, que contém o endereço do dado a ser buscado pelo processador em memória.  
Nem toda instrução do processador da máquina IAS requer um operando. Nesse caso, quando busca a instrução o processador desconsidera os bits relativos ao operando.

![Formato da linha de memória IAS](/arq_aulas/images/figura1_5.jpg)

Figura 1.5 Formato da linha de memória IAS: acima, número; abaixo, par de instruções (fonte. Stallings, Arquitetura e Organização de Computadores)

O ISA define os formatos de instruções, códigos de operação da instrução (opcodes), registradores, memória de dados e instrução; o efeito das instruções executadas nos registradores e na memória; e um algoritmo para o controle da execução das instruções. ISA é a arquitetura de conjunto de instrução (ISA — do inglês, *Instruction Set Architecture*). 

Os atributos da camada ISA incluem o conjunto de instrução, o número de bits usados para representar vários tipos de dados (por exemplo, números, caracteres), mecanismos de E/S e técnicas para endereçamento de memória. 

### 1.3.2 Ciclo de instrução

A execução das tarefas do computador consiste na execução sucessiva das instruções armazenadas em memória, as quais constituem os programas armazenados. 

As instruções são normalmente armazenadas em **posições de memória adjacentes** e **executadas sequencialmente**, a execução das instruções de um endereço é seguida da execução das instruções do endereço seguinte.  

As instruções são executadas sincronizadamente. O **sincronismo** é dado pelos circuitos de controle.  

Após a execução de cada instrução os registradores armazenam um valor. Os valores de cada elemento definem o **estado** da máquina. As etapas (microoperações) de execução de cada operação variam de acordo com cada instrução do programa.  O conjunto de microinstruções executadas define o chamado **ciclo de instrução**, que é composto por duas partes:

- **Busca** do par de instruções
- **Execução** das instruções

![Ciclo de instruções da máquina IAS](/arq_aulas/images/figura1_6.png)

Figura 1.6 Ciclo de instruções da máquina IAS (fonte. Adaptado de Stallings, Arquitetura e Organização de Computadores)

O fluxograma da execução das instruções pode ser detalhado por:

1. Programa e dados armazenados em memória: conceito de programa armazenado
2. PC contém o endereço da próxima palavra (par de instruções)
3. Evento de controle - o endereço do par de instruções é carregado no MAR
4. Evento de controle - o endereço das instruções é disponibilizado no barramento de endereços
5. Evento de controle - o endereço das instruções é decodificado e a posição do par de instruções é selecionada
6. Evento de controle - o par de instruções é disponibilizado no barramento de dados
7. Evento de controle - o par de instruções é armazenado no MBR
8. Evento de controle - o opcode da instrução à esquerda é armazenado no IR, o operando da instrução é armazenado no MAR e a instrução à direita é armazenada no IBR
9. Evento de controle - a primeira instrução é decodificada

A partir desse ponto o fluxo dependerá do **modo de endereçamento do dado (operando) pela instrução**. Existem instruções que não requerem operando; o operando é o próprio dado; o operando referencia o endereço do dado; o operando referencia o endereço, no qual está armazenado o endereço do dado. No caso do operando referenciar o endereço do dado, prosseguindo o fluxo...

10.  Evento de controle - o MAR é ativado para disponibilizar o endereço do dado
11.  Evento de controle - o endereço do dado é disponibilizado no barramento de endereços
12.  Evento de controle - o endereço do dado é decodificado e a posição do dado é selecionada
13.  Evento de controle - o dado é disponibilizado no barramento de dados
14.  Evento de controle - o dado é armazenado no MBR
15.  Evento de controle - a ULA realiza a operação
16.  Evento de controle - o par de instruções é armazenado no MBR
17.  Evento de controle - o resultado da operação é armazenado no ACC ou MQ
18.  Evento de controle - o opcode da segunda instrução é transferida do IBR para o IR e o operando é transferido para o MAR
19. O processo prossegue para decodificação da segunda instrução e busca do dado
20. O par de instruções seguinte é buscado ...

![Fluxograma da operação do IAS](/arq_aulas/images/figura1_7.png)

Figura 1.7 Fluxograma da operação do IAS (fonte. Adaptado de Stallings, Arquitetura e Organização de Computadores)

Detalhando mais a operação na ULA.

A ULA efetua adição, subtração e outras operações simples sobre suas entradas, produzindo assim um resultado no registrador de saída, o qual pode ser armazenado em um registrador. Mais tarde, ele pode ser escrito (isto é, armazenado) na memória, se desejado. Nem todos os projetos têm os registradores A, B e de saída. No exemplo, ilustramos uma adição, mas as ULAs também realizam outras operações.

![0 caminho de dados de uma típica máquina de von Neumann](/arq_aulas/images/figura1_8.png)

Figura 1.8 0 caminho de dados de uma típica máquina de von Neumann (fonte. Tanenbaum, Organização estruturada de computadores)

### 1.3.3 Instruções do processador IAS

Todo processador possui um *set* (conjunto) de instruções. O processador do computador IAS também possui o seu *set* de instruções.  
As instruções podem ser classificadas como segue:

- **Transferência de dados**: os dados são transferidos entre a memória e os registradores da CPU ou entre registradores.
- **Desvio incondicional**: normalmente a UC executa as instruções em sequência na memória, que pode ser alterada pelo uso desse desvio independentemente de qualquer condição, quando a instrução é executada.
- **Desvio condicional**: o desvio é executado dependendo de um teste de condição estabelecido pela instrução.
- **Lógicas e aritméticas**, como adição, subtração, multiplicação e divisão binárias.
- **Alteração de endereços**: instruções para calcular endereços para inseri-los em instruções armazenadas na memória, propiciando flexibilidade de endereçamento dos programas.

Os programas executados pelo processador (na **linguagem de máquina**) podem ser escritos por uma representação simbólica (*assembly*) utilizando-se mnemônicos.  
O código em linguagem de máquina, como tratamos, é todo constituído de sequência binária de instruções, ou seja, em sequência de bits.  
A figura apresenta como a tabela do *set* de instruções é normalmente apresentada.

![Forma da tabela do *set* de instruções da IAS](/arq_aulas/images/figura1_9.jpg)

Figura 1.9 Forma da tabela do *set* de instruções da IAS

***SET* DE INSTRUÇÕES**  
**Instruções de transferência de dados**  

| **Código de operação** | **Representação simbólica** | **Descrição** |
| ---------------------- | --------------------------- | ------------- |
| 0000 1010 | LOAD MQ | Transfere o conteúdo do registrador MQ para o acumulador ACC |
| 0000 1001 | LOAD MQ,M(X) | Transfere o conteúdo da posição de memória X, **definida pelo operando**, para MQ |
| 0010 0001 | STOR M(X) | Transfere o conteúdo do acumulador para a posição de memória X, definida pelo operando |
| 0000 0001 | LOAD M(X) | Transfere o conteúdo da posição de memória X, definida pelo operando, para o acumulador |
| 0000 0010 | LOAD -M(X) | Transfere o negativo do conteúdo da posição de memória X, definida pelo operando, para o acumulador |
| 0000 0011 | LOAD \|M(X)\| | Transfere o **valor absoluto** do conteúdo da posição de memória X, definida pelo operando, para o acumulador |
| 0000 0100 | LOAD -\|M(X)\| | Transfere o negativo do valor absoluto do conteúdo da posição de memória X, definida pelo operando, para o acumulador |

**Instruções de desvio incondicional**  

| **Código de operação** | **Representação simbólica** | **Descrição** |
| ---------------------- | --------------------------- | ------------- |
| 0000 1101 | JUMP M(X,0:19) | A próxima instrução a ser executada é buscada **nos bits 0 a 19** da posição de memória X, definida pelo operando |
| 0000 1110 | JUMP M(X,20:39) | A próxima instrução a ser executada é buscada **nos bits 20 a 39** da posição de memória X, definida pelo operando |

**Instruções de desvio condicional**  

| **Código de operação** | **Representação simbólica** | **Descrição** |
| ---------------------- | --------------------------- | ------------- |
| 0000 1111 | JUMP +M(X,0:19) | Se o número do acumulador for **não negativo**, a próxima instrução a ser executada é buscada **nos bits 0 a 19** da posição de memória X, definida pelo operando |
| 0000 1110 | JUMP +M(X,20:39) | Se o número do acumulador for **não negativo**, a próxima instrução a ser executada é buscada **nos bits 20 a 39** da posição de memória X, definida pelo operando |

**Instruções aritméticas**  

| **Código de operação** | **Representação simbólica** | **Descrição** |
| ---------------------- | --------------------------- | ------------- |
| 0000 0101 | ADD M(X) | Soma o conteúdo da posição de memória X, definida pelo operando, com o conteúdo do acumulador; armazena o resultado no acumulador |
| 0000 0111 | ADD \|M(X)\| | Soma o **módulo** do conteúdo da posição de memória X, definida pelo operando, com o conteúdo do acumulador; armazena o resultado no acumulador |
| 0010 0110 | SUB M(X) | Subtrai o conteúdo da posição de memória X, definida pelo operando, do conteúdo do acumulador; armazena o resultado no acumulador |
| 0000 1000 | SUB \|M(X)\| | Subtrai o **módulo** do conteúdo da posição de memória X, definida pelo operando, do conteúdo do acumulador; armazena o resultado no acumulador |
| 0000 1011 | MUL M(X) | Multiplica o conteúdo da posição de memória X, definida pelo operando, por MQ; armazena os bits mais significativos do resultado em ACC e os bits menos significativos em MQ |
| 0000 1100 | DIV M(X) | Divide o conteúdo de ACC pelo conteúdo da posição de memória X, definida pelo operando; armazena o quociente em MQ e o resto em ACC |
| 0001 0100 | LSH | Multiplica o conteúdo do acumulador por 2 |
| 0001 0101 | RSH | Divide o conteúdo do acumulador por 2 |

**Instruções de alteração de endereço**  

| **Código de operação** | **Representação simbólica** | **Descrição** |
| ---------------------- | --------------------------- | ------------- |
| 0001 0010 | STOR M(X,8:19) | Substitui o campo de endereço da instrução à esquerda da posição de memória X (bits 0 a 19), definida pelo operando, pelos 12 bits mais à direita do conteúdo do acumulador |
| 0000 1110 | JUMP M(X,28:39) | Substitui o campo de endereço da instrução à direita da posição de memória X (bits 20 a 39), definida pelo operando, pelos 12 bits mais à direita do conteúdo do acumulador |

### 1.3.4 Linguagem de montagem (*assembly*)

Uma linguagem de montagem pura é uma linguagem na qual cada declaração produz exatamente uma instrução de máquina. Em outras palavras, **há uma correspondência um-para-um entre instruções de máquina e declarações no programa de montagem (mnemônicos)**. Se cada linha no programa em linguagem de montagem contiver exatamente uma declaração e cada palavra de máquina contiver exatamente uma instrução de máquina, então um programa de montagem de n linhas produzirá um programa em linguagem de máquina de n instruções.

A razão por que as pessoas usam linguagem de montagem, ao contrário de programação em linguagem de máquina (em binário ou hexadecimal), é que é muito mais fácil programar. A utilização de nomes simbólicos e endereços simbólicos em vez de binários ou hexadecimais faz uma enorme diferença. A maioria das pessoas pode se lembrar de que as abreviaturas para somar, subtrair, multiplicar e dividir são ADD, SUB, MUL e DIV, mas poucas conseguem se recordar dos valores numéricos correspondentes que a máquina usa. O programador de linguagem de montagem só precisa se lembrar dos nomes simbólicos porque o assembler os traduz para instruções de máquina.

Na tabela do *set* de instruções da máquina IAS, a coluna **Representação simbólica** define as instruções correspondentes ao código binário da operação. O programa armazenado em memória constituído das instruções binárias é o chamado programa em **linguagem de máquina**. Admitiremos que o programa em linguagem de montagem correspondente será formado pela sua representação simbólica seguida do operando da instrução, **representado em hexadecimal**.

Exemplo 1:

| Opcode | Operando | Comentários |
| - | - | - |
| LOAD M(X) | 0x00F | Transfere o conteúdo da posição de memória 0x00F para o ACC |
| ADD M(X) | 0x010 | Soma o conteúdo da posição de memória 0x010 com o conteúdo do ACC |
| STOR M(X) | 0x011 | Transfere o conteúdo do ACC para a posição de memória 0x011 |

Existem programas nos computadores responsáveis pela **tradução** de códigos de uma linguagem para outra. Quando a linguagem-fonte é, basicamente, uma representação simbólica para uma linguagem de máquina numérica, o tradutor é denominado **assembler (montador)** e a linguagem-fonte é denominada linguagem de montagem (linguagem *assembly*). 

O código do exemplo 1 seria o código na linguagem de montagem do IAS referente ao seguinte código em linguagem de máquina

```
0000 0001 0000 0000 1111 0000 0101 0000 0001 0000
0010 0001 0000 0001 0001
```

Na primeira linha do código em linguagem de máquina contém 40 bits porque é o número de bits armazenados em uma linha da máquina IAS. Correspondem às instruções `LOAD` E `ADD`. Na linha seguinte estão apresentados os 20 bits relativos à última instrução, `STOR`.

Lembrando que cada linha está ocupando uma linha de endereços, que poderia ser indicada no código em *assembly* pela inclusão de um rótulo à tabela.

| Rótulo | Opcode | Operando | Comentários |
| - | - | - | - |
| Início: | LOAD M(X) | 0x00F | Transfere o conteúdo da posição de memória 0x00F para o ACC |
| | ADD M(X) | 0x010 | Soma o conteúdo da posição de memória 0x010 com o conteúdo do ACC |
| | STOR M(X) | 0x011 | Transfere o conteúdo do ACC para a posição de memória 0x011 |

O rótulo (*label*) indica o endereço da primeira linha de instruções de forma simbólica (Início). Obviamente o código armazenado ocupará uma posição na memória IAS, ou seja, entre os endereços 0x000 e 0x3FF (entre 0 e 1023, em hexadecimal).

Um novo exemplo de código está apresentado abaixo. O código realiza a soma de 10 (0x00A) números binários a partir da posição de memória 0x100. Admite-se que é necessário inicializar algumas posições de memória. Observe que além de rótulo o código admite comentários, delimitado pelo `;`.

```
inicialização da memória
M[0x000] <- 0x109
M[0x001] <- 0x101
M[0x002] <- 0x001

INICIO:
LOAD_M(X) 0x100 ; carregar o valor de 0x100
LOOP: 
ADD_M(X) 0x101 ; soma o próximo valor
LOAD_M(X) 0x000 ; 0x000 armazena o endereço limite 0x109
SUB_M(X) 0x001 ; 0x001 armazena o próximo endereço
JUMP_+M(X,0:19) NOVO_END
JUMP_M(X,20:39) FIM ; desvia para O final do programa

NOVO_END: ; atualiza endereço do próximo valor
LOAD_M(X) 0x001 ; carrega o próximo endereço
ADD_M(X) 0x002 ; 0x002 armazena 1, logo incrementa o endereço
JUMP_M(X,28:39) LOOP ; altera operando da instrução em LOOP
JUMP_M(X,20:39) LOOP ; desvia para instrução em LOOP
```

___
**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**   

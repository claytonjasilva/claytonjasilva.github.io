# 3. Máquina de von Neumann ou computador IAS

## 3.1 [Breve histórico](https://pt.wikipedia.org/wiki/Computador_IAS)

A tarefa de carregar e modificar programas nas máquinas historicamente precedentes à máquina IAS era extremamente tediosa.  
A ideia principal da máquina IAS, atribuída a von Neumann, é a do **conceito de progama armazenado**.  
O coonceito de programa armazenado consiste no armazenamento do programa a ser executado pela UCP em memória, juntamente com os dados. O processador busca as instruções e os dados do programa diretamente da memória. Instruções e dados estão armazenados em posições específicas inequívocas da memória, cada uma definida por um **endereço de memória**.

![Organização da máquina IAS](/arq_aulas/images/maquinaIAS.jpg)
 
A estrutura geral da máquina IAS consiste em:
- Uma memória principal, que armazena dados e instruções  
- Uma Unidade Lógica e Aritmética (ULA), capaz de realizar as operações matemáticas binárias e as operações lógicas  
- Uma Unidade de Controle (UC), que interpreta e executa as instruções armazenadas na memória  
- Dispositivos de entrada e saída (E/S) operados pela Unidade de Controle.

## 3.2 Visão detalhada do computador IAS 
A figura abaixo ilustra a organiza detalhada do computador IAS.

![Organizadação datalhada do computador IAS](/arq_aulas/images/maquinaIAS_detalhada.jpg)

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

![Relação da memória com os baramentos de dados e endereço do computador IAS](/arq_aulas/images/memoriaIAS.jpg)

Cada linha de dados aponta para uma palavra, que ocupa um endereço de memória.  
Os endereços são inequívocos, ou seja, não existem dois endereços iguais.  

## 3.3. Visão detalhada das células de memória do computador IAS

### 3.3.1 Armazenamento de instruções
Um par de instruções ocupa cada linha de endereço. A estrutura da linha é dada por

![Par de instruções em memória](/arq_aulas/images/instrucoes.jpg)

A instrução à esquerda ocupa os bits b<sub>0</sub> a b<sub>19</sub>. As instruções à direita ocupam os bits b<sub>20</sub> a b<sub>39</sub>.
Cada instrução é possui um grupo de bits chamado de *opcode*, a palavra de um código que define as instruções do processador.  
E outro grupo de bits, chamado de operando, que contém o endereço do dado a ser buscado pelo processador em memória.  
Nem toda instrução do processador da máquina IAS requer um operando. Nesse caso, quando busca a instrução o processador desconsidera os bits relativos ao operando.

![Estrutura das instruções em memória](/arq_aulas/images/instrucoes_estrutura.jpg)

### 3.3.2 Ciclo de instrução
O programa consiste na execução das instruções armazenadas em memória.  
As instruções são normalmente armazenadas em **posições de memória adjacentes** e **executadas sequencialmente**, a execução das instruções de um endereço é seguida da execução das instruções do endereço seguinte.  
As instruções são executadas sincronizadamente. O **sincronismo** é dado pelos circuitos de controle.  
Após a execução de cada instrução os registradores armazenam um valor. Os valores de cada elemento definem o **estado** da máquina.
As etapas (microoperações) de execução de cada operação variam de acordo com cada instrução do programa.  
O conjunto de microinstruções executadas define o chamado **ciclo de instrução**, que é composto por duas partes:
- **Busca** do par de instruções
- **Execução** das instruções

![Ciclo de instrução do computador IAS](/arq_aulas/images/ciclo_instrucao.jpg)

O ciclo de instruções pode ser descrito por:
1. Programa e dados armazenados em memória: conceito de programa armazenado
2. PC contém o endereço da próxima palavra (par de instruções)
3. Evento de controle - o endereço do par de instruções é carregado no MAR
4. Evento de controle - o endereço das instruções é disponibilizado no barramento de endereços
5. Evento de controle - o endereço das instruções é decodificado e a posição do par de instruções é selecionada
6. Evento de controle - o par de instruções é disponibilizdo no barramento de dados
7. Evento de controle - o par de instruções é armazenado no MBR
8. Evento de controle - o opcode da instrução à esquerda é armazenado no IR, o operando da instrução é armazenado no MAR e a instrução à direita é armazenada no IBR
9. Evento de controle - a primeira instrução é decodificada
10. Evento de controle - o MAR é ativado para disponibilizar o endereço do dado
11. Evento de controle - o endereço do dado é disponibilizado no barramento de endereços
12. Evento de controle - o endereço do dado é decodificado e a posição do dado é selecionada
13. Evento de controle - o dado é disponibilizdo no barramento de dados
14. Evento de controle - o dado é armazenado no MBR
15. Evento de controle - a ULA realiza a operação
16. Evento de controle - o par de instruções é armazenado no MBR
17. Evento de controle - o resultado da operação é armazenado no ACC ou MQ
18. Evento de controle - o opcode da segunda instrução é transferida do IBR para o IR e o operando é transferido para o MAR
19. O processo prossegue para decodificação da segunda instrução e busca do dado
20. O par de instruções seguinte é buscado ...

Veja o [**vídeo ilustrativo**](https://1drv.ms/v/s!AsTd8oN7mu8pkchLNfDytNnrgyqLpw?e=gwRYPz).

### 3.3.3 Instruções do processador IAS
Todo processador psosui um *set* (conjunto) de instruções. O processador do computador IAS também possui o seu *set* de instruções.  
As instruções podem ser classificadas como segue:
- **Transferência de dados**: os dados são transferidos entre a memória e os registradores da CPU ou entre registradores.
- **Desvio incondicional**: normalmente a UC executa as instruções em sequência na memória, que pode ser alterada pelo uso desse desvio independentemente de qualquer condição, quando a instrução é executada.
- **Desvio condicional**: o desvio é executado dependendo de um teste de condição estabelecido pela instrução.
- **Lógicas e aritméticas**, como adição, subtração, multiplicação e divisão binárias.
- **Alteração de endereços**: instruções para calcular endereços para inseri-los em instruções armazenadas na memória, propiciando flexibilidade de endereçamento dos programas. 

Os programas executados pelo processador (na **linguagem de máquina**) podem ser escritos por uma representação simbólica (*assembly*) utilizando-se menmônicos.  
O código em linguagem de máquina, como tratamos, é todo constituído de sequência binária de instruções, ou seja, em sequência de bits.  
A figura apresenta como a tabela do *set* de instruções é normalmente apresentada.

![Forma da tabela do *set* de instruções](/arq_aulas/images/forma_set_instrucoes.jpg)

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
| 0000 1011 | MUL M(X) | Multiplica o conteúdo da posição de memória X, definida pelo operando, por MQ; armazena os bits mais singificativos do resultado em ACC e os bits menos significativos em MQ |
| 0000 1100 | DIV M(X) | Divide o conteúdo de ACC pelo conteúdo da posição de memória X, definida pelo operando; armazena o quociente em MQ e o resto em ACC |
| 0001 0100 | LSH | Multiplica o conteúdo do acumulador por 2 |
| 0001 0101 | RSH | Divide o conteúdo do acumulador por 2 |

**Instruções de alteração de endereço**  

| **Código de operação** | **Representação simbólica** | **Descrição** |
| ---------------------- | --------------------------- | ------------- |
| 0001 0010 | STOR M(X,8:19) | Substitui o campo de endereço da instrução à esquerda da posição de memória X (bits 0 a 19), definida pelo operando, pelos 12 bits mais à direita do conteúdo do acumulador |
| 0000 1110 | JUMP M(X,28:39) | Substitui o campo de endereço da instrução à direita da posição de memória X (bits 20 a 39), definida pelo operando, pelos 12 bits mais à direita do conteúdo do acumulador |

___
**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**   


 



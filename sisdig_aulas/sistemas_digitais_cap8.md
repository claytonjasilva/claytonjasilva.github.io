# Cap 8. Fundamentos de máquinas sequenciais

## 8.1 Conceito de sistemas sequenciais

Nosso estudo tem sido dedicado até o momento aos **circuitos combinacionais**.  
Existe um segmento muito importante dos sistemas digitais, cujos circuitos são categorizados como **circuitos sequenciais**.  
Para uma ampla gama de problemas as técnicas de sistemas digitais podem ser aplicadas. Uma delas se refere ao controle de sistemas,
em que sinais digitais são recebidos e interpretados por um sistema digital, gerando saídas de controle de acordo com
**uma sequência** em que os sinais são recebidos.  
Nessas aplicações, circuitos com as características dos circuitos combinacionais não são próprios para resolver o problema.  
Estas aplicações exigem que as saídas geradas sejam uma **função das variáveis de entrada presentes e dos valores passados das variáveis de entrada**.

Um modelo de sistema controlado por realimentação (*feedback*) está apresentado na figura.

![Sistema controlado por realimentação](/sisdig_aulas/images_sisdig/sistemafeedback.jpg)

Na figura estão identificados três blocos:  

- Circuito comparador - circuito digital que recebe a saída do sistema a ser controlado no instante anterior;
- Circuito controlado - circuito que deve ser controlado de modo que as saídas desejadas sejam obtidas.  
As entradas *x(t)* são recebidas de outro módulo qualquer do sistema.  
Os sinais *y(t)* são aqueles obtidos da transformação de *x(t)* pelo *feedback* das saídas no instante anterior.  
As saídas *u(t)* são aquelas que representam o comportamento desejado para o sistema.  

**Distinção entre máquinas sequenciais e combinacionais**

| Sequenciais | Combinacionais |
| - | - |
| Deve possuir capacidade de memória | A saída é estritamente função da entrada - não tem memória |
| Deve possuir realimentação | Não possui realimentação |

As duas propriedades básicas descritas na tabela para os sistemas sequenciais são necessárias, mas não são suficientes.  
Os circuitos sequenciais possuem uma propriedade operacional básica: **são cíclicos** sob determinadas condições de controle.  
Um **modelo geral** de sistemas controlados digitais, ou máquinas sequenciais ou máquina de estados finitos está apresentado na figura.  

![Modelo geral de sistemas sequenciais](/sisdig_aulas/images_sisdig/sistemasequencial.jpg)

Observam-se três blocos, a saber:  

1. O primeiro bloco recebe as entradas e as saídas em ***feedback*** para produzir entradas controladas ou modificadas;
2. No segundo estágio ou bloco as saídas do bloco anterior são armazenadas no **elemento de memória** para realimentar a entrada;
3. No terceiro bloco, aplica-se a lógica necessária para produzir a saída desejada.  

### O modelo acima ilustra como se constroi a **máquina sequencial** ou **máquina de estados finitos**. 

## 8.2 Circuitos síncronos e assíncronos

Vimos a definição de circuitos sequenciais.  
Muitas aplicações de circuitos sequenciais envolvem o emprego de uma referência temporal, 
chamada de **relógio** ou **clock**.  
Quanto ao uso ou não do sinal de clock, os circuitos podem ser classificados como **assíncronos** ou **síncronos**:  

- Circuitos cujo comportamento independe de um sinal de relógio são chamados de circuitos **assíncronos**.  
- Circuitos cujo comportamento é regulado pela referência do sinal de clock são chamados de **circuitos síncronos**.
O comportamento do sinal de clock está apresentado na figura.  

![Sinal de clock](/sisdig_aulas/images_sisdig/clock.jpg)

Tipicamente, o sinal de clock é um **trem de ondas quadradas**.  
Observe que o sinal varia entre dois níveis lógicos: alto e baixo.  
Para circuitos sequenciais é importante salientar que a **transição de um nível para outro** é importante.  
A transição possui uma **borda**, ou seja, um limite entre os dois níveis.  
Embora teoricamente essa transição seja por salto, os sinais reais possuem uma transição que requer um intervalo de tempo $\Delta$ t no circuito.  
Todo sinal de clock é **periódico**, consequentemente possui um ciclo temporal definido por *T<sub>Ck</sub>*.  
O número de ciclos na unidade de tempo define a frequência do sinal, *f<sub>Ck</sub>*, que satisfaz
$$f_{Ck}=\frac{1}{T_{Ck}}$$  
A relação entre o tempo em que o sinal está no nível alto e o período é chamada de *duty cycle*, ou seja, 
$$Duty Cycle=\frac{T_{on}}{T_{Ck}}$$  
, normalmente definido em porcentagem.  

## 8.3 Máquina de estados

### 8.3.1 O diagrama de estados

Existem técnicas para analisar e projetar circuitos sequenciais.  
Uma das técnicas consiste na utilização de **diagramas de estados**.  
De modo geral, os circuitos sequenciais são classificados da seguintes forma:  

- Detectores de sequência de códigos;
- Contadores e registradores;
- Geradores de códigos;
- Sistemas controladores.

O êxito de projetos e análise de máquinas sequenciais depende fortemente dos objetivos e das técnicas empregadas.  
Uma delas é a técnica de diagrama de estados.  
O **estado** define um **conjunto de informações sobre o sistema** em um determinado momento.  
Uma máquina que se encontra em um determinado estado pode passar a outro quando um **evento** ocorre.  
A mudança de estados define uma **transição** de estados.  
O diagrama de estados representa o **comportamento dinâmico** de uma máquina sequencial, apresentando os seguintes elementos:  

- **Estados** possíveis, definidos por um **rótulo**;
- **Transições** possíveis, indicadas por uma seta que representa **origem-destino**;
- **Eventos**, definidos pelas variáveis de entrada, que produzem a transição de estados do sistema;
- **Saídas**, definidas por **variáveis** - variáveis de estado - cujos valores são alterados na transição do estado de origem para o estado de destino.

**O diagrama de estados para as máquinas sequenciais é equivalente à tabela verdade para as máquinas combinacionais.**  
Seja a figura.

![Diagrama de estados](/sisdig_aulas/images_sisdig/diagramaestados.jpg)

A figura ilustra um típico diagrama de estados e seus elementos:

1. Todo estado é definido pelo **símbolo de identificação** do estado e respectivo **código**;
2. Em relação a um estado de **interesse** o diagrama indica o seu **estado predecessor** pelo sentido da seta de **transição de estados**;
3. Toda transição requer **condições de entrada** para o estado de interesse;
4. Toda transição entre estados se refere **às saídas no estado predecessor para uma entrada condicional**.

O **exemplo 1** ilustra o funcionamento de uma máquina sequencial com a utilização de diagrama de estados.

![Exemplo diagrama de estados](/sisdig_aulas/images_sisdig/exdiagramaestados.jpg)

Entendendo o comportamento do sistema:

1. O estado **a** produz saída *00*, ou seja *A=0*, *B=0*, que definem o estado.
2. Quando uma variável de entrada *X* assume o valor *0*, o sistema permanece no estado atual, *00*.
3. Quando *X* passar ao valor *1* será produzida uma transição do estado **a** para o estado **b** -
a variável *B* passa de *0* a *1* e a variável *A* não se altera, permanecendo igual a *0*.  
4. Do estado **b**, se a entrada *X* passar a *1* será produzida uma transição para o estado **c** -
a variável *B* passa de *1* a *0* e a variável *A* passa de *0* a *1* - em caso contrário, se *X* = 0, o sistema permanece no estado.  
5. Do estado **c**, se a entrada *X* passar a *1* será produzida uma transição para o estado **d** -
a variável *B* passa de *0* a *1* e a variável *A* permanece igual a *1* - em caso contrário, se *X* = 0, o sistema permanece no estado.  
6. Do estado **d** uma nova entrada *X=1* leva a máquina a retornar ao estado inicial *A=0,B=0*, renovando o ciclo.  
  
O comportamento da máquina sequencial poderá ser síncrono ou assíncrono.  
No caso síncrono, a transição ocorre dependendo também de um sinal de entrada do clock.  
Além de *X* a transição depende da mudança do valor do sinal de clock de nível baixo (*LOW*) para alto (*HIGH*).  
Essa variação do sinal de clock é chamada de **gatilhamento pela borda**.   
Ou seja, no exemplo, mantido *X=1*, as transições entre estados *00-01-10-11* ocorrerão sempre que houver a transição do clock.  
No caso de *X=0*, independentemente da transição do clock, a saída será mantida no estado em que se encontrar quando *X* for resetado.  

![Máquina sequencial - diagrama](/sisdig_aulas/images_sisdig/maquinasequencial.jpg)

O **exemplo 2** de diagrama de estados está apresentado na figura.

![Exemplo diagrama de estados](/sisdig_aulas/images_sisdig/ex2diagramaestados.jpg)

No novo exemplo, ao invés do uso de símbolos **a**,...,**d** para designar os estados, utiliza-se o próprio código que define cada estado.  
Como o código já está definido, omite-se no diagrama as saídas correspondentes às variáveis de estado.  
No diagrama, apresenta-se uma nova variável *Z*, cujo valor de saída está associada a cada transição de estado, embora não se configure como variável de estado.
Um esquema em bloco do circuito está apresentado na figura.  

![Máquina sequencial - diagrama](/sisdig_aulas/images_sisdig/maquinasequencial2.jpg)

### 8.3.2 Análise de circuitos sequenciais síncronos

Nos processos de análise de circuitos sequenciais duas determinações devem ser feitas:  
(1) Qual é a classe do circuito a ser analisado; e  
(2) O que deve resultar do processo de análise.  
Em outras palavras, o problema requer um **circuito combinacional** ou **sequencial**?  
Se for um circuito sequencial, ele é **síncrono** ou **assíncrono**?  
Qual é a informação que deve ser obtida da análise?  

A partir daí, na análise será necessário:  
(1) Identificar os **estados**  
(2) Quais são as **entradas** relacionadas com as mudanças de estado  
(3) Quais são as **sequências de transições**.

Para a análise, uma ferramenta importante é o **mapa para cada próximo estado** a partir das saídas do estado anterior.  
O mapa é muito útil para construir os circuitos.

Vamos tomar **exemplo 1**.  
O comportamento da **saída *A*** da máquina sequencial pode ser representado pelo mapa.  

| *AB* | *00* | *01* | *11* | *10* |
| - | - | - | - | - |
| ***X*** | - | - | - | - |
| ***0*** | 0 | 0 | 1 | 1 |
| ***1*** | 0 | 1 | 0 | 1 |

O comportamento representa o comportamento da saída *A* em função do estado predecessor e da variável *X*.  
Observe que quando *X=0*, o estado permanece inalterado. Nesse caso, o valor da variável  *A* após a transição de clock não se altera.  
Assim, se *A* for igual a *0* se manterá *0* na transição do clock, portanto, no mapa, a representação da saída é *0*.  
Por outro lado, se *A* for igual a *1* se manterá *1* e, no mapa, a saída deverá ser representada por *1*.
Quando *X=1*, a análise deve levar em consideração as transições que ocorrem entre estados, de modo que a saída será indicada por 1
nas transições *01* para *10* e de *10* para *11*. 

Em raciocínio similar, pode-se definir o comportamento da variável de estado *B*.  
O comportamento da **saída *B*** da máquina sequencial pode ser representado pelo mapa.  

| *AB* | *00* | *01* | *11* | *10* |
| - | - | - | - | - |
| ***X*** | - | - | - | - |
| ***0*** | 0 | 1 | 1 | 0 |
| ***1*** | 1 | 0 | 1 | 0 |

Procedimento similar pode ser adotado para análise do diagrama de estados do **exemplo 2**.  
O comportamento da **saída *A*** da máquina sequencial pode ser representado pelo mapa.  

| *AB* | *00* | *01* | *11* | *10* |
| - | - | - | - | - |
| ***X*** | - | - | - | - |
| ***0*** | 0 | 1 | 0 | 0 |
| ***1*** | 0 | 1 | 0 | 0 |

O comportamento da **saída *B*** da máquina sequencial pode ser representado pelo mapa.  

| *AB* | *00* | *01* | *11* | *10* |
| - | - | - | - | - |
| ***X*** | - | - | - | - |
| ***0*** | 0 | 1 | 1 | 0 |
| ***1*** | 1 | 0 | 0 | 1 |

O comportamento da **saída *Z*** da máquina sequencial pode ser representado pelo mapa.  

| *AB* | *00* | *01* | *11* | *10* |
| - | - | - | - | - |
| ***X*** | - | - | - | - |
| ***0*** | 0 | 1 | 1 | 1 |
| ***1*** | 0 | 0 | 1 | 0 |

Identificado o mapa de próximo estado para cada uma das saídas, é possível 
**escrever a expressão booleana para cada saída de próximo estado**.  
A escrita da expressão é similar à utilização do mapa K.   
No exemplo 1, os mapas relativos às saídas *A* e *B* são

![Máquina sequencial - diagrama](/sisdig_aulas/images_sisdig/mapakexemplo1diagrama.jpg)

Dos quais se obtém as expressões:  
$$A=A.\bar{X}+\bar{A}.B.X+A.\bar{B}.X$$
$$B=B.\bar{X}+\bar{A}.\bar{B}.X+A.B.X$$

É importante lembrar que a variável de saída, à esquerda da equação, é o valor atual e à direita da equação é o seu valor anterior.

### 8.3.3 Exemplos

#### a. Sistema de controle de elevador

Este exercício envolve o projeto de um **circuito sequencial** que controla um **elevador** operando em quatro andares: S_0, S_1, S_2, S_3. O sistema possui **duas entradas** e **uma saída** que indicam as ações do elevador:

- **Entrada X_1**: Representa o botão de **subir** pressionado.
- **Entrada X_2**: Representa o botão de **descer** pressionado.
- **Saída Y**: Indica se o elevador está **em movimento** (Y = 1) ou **parado** (Y = 0).

**Regras de Operação**

1. O elevador começa no **térreo** (S_0).
2. Quando X_1 = 1, o elevador sobe um andar, até o andar máximo (S_3).
3. Quando X_2 = 1, o elevador desce um andar, até o andar mínimo (S_0).
4. A saída Y é 1 enquanto o elevador está **em movimento** e 0 quando ele está **parado**.

**Estados e Transições**

O circuito terá **quatro estados** que representam os andares do elevador:
- **S_0**: Térreo
- **S_1**: Primeiro andar
- **S_2**: Segundo andar
- **S_3**: Terceiro andar

**Tabela de Transição de Estados**

| Estado Atual | X_1 = 0, X_2 = 0 | X_1 = 1, X_2 = 0 | X_1 = 0, X_2 = 1 | X_1 = 1, X_2 = 1 |
|--------------|------------------|------------------|------------------|------------------|
| S_0          | S_0 (Parado)      | S_1 (Sobe)       | S_0 (Parado)      | S_1 (Sobe)       |
| S_1          | S_1 (Parado)      | S_2 (Sobe)       | S_0 (Desce)       | S_2 (Sobe)       |
| S_2          | S_2 (Parado)      | S_3 (Sobe)       | S_1 (Desce)       | S_3 (Sobe)       |
| S_3          | S_3 (Parado)      | S_3 (Parado)     | S_2 (Desce)       | S_2 (Desce)      |

**Saída Y**

- **Y = 1**: Quando o elevador está em movimento.
- **Y = 0**: Quando o elevador está parado.

**Diagrama de Estados**

O diagrama de estados mostrará os quatro estados S_0, S_1, S_2, S_3 com transições entre eles baseadas nas entradas X_1 e X_2.

#### b. Circuito de controle digital de portão

O objetivo é projetar um **circuito sequencial** para controlar a abertura e fechamento de um portão automático. O portão deve ter quatro estados principais e responder a dois sensores de controle. A saída do circuito indica se o portão está **abrindo**, **fechando**, **totalmente aberto** ou **totalmente fechado**.

**Especificações**

1. **Estados**:
   - **S_0**: Portão **totalmente fechado**.
   - **S_1**: Portão **abrindo**.
   - **S_2**: Portão **totalmente aberto**.
   - **S_3**: Portão **fechando**.

2. **Entradas**:
   - **X_1**: Sensor que detecta se o portão está em movimento para **abrir**.
   - **X_2**: Sensor que detecta se o portão está em movimento para **fechar**.

3. **Saída Y**:
   - **Y = 1**: O portão está em **movimento** (abrindo ou fechando).
   - **Y = 0**: O portão está **parado** (totalmente aberto ou totalmente fechado).

**Regras de Operação**

1. O portão começa no estado **S_0** (**totalmente fechado**).
2. Se o botão de abrir é pressionado (X_1 = 1), o portão muda para o estado **S_1** e começa a abrir.
3. Quando o portão está **totalmente aberto** (S_2), ele para de se mover e **Y = 0**.
4. Se o botão de fechar é pressionado (X_2 = 1), o portão passa para o estado **S_3** e começa a fechar.
5. Quando o portão está **totalmente fechado** (S_0), ele para de se mover e **Y = 0**.

**Tabela de Transição de Estados**

A tabela de transição de estados define as mudanças de estado com base nas entradas X_1 e X_2:

| Estado Atual | X_1 = 0, X_2 = 0 | X_1 = 1, X_2 = 0 | X_1 = 0, X_2 = 1 | X_1 = 1, X_2 = 1 |
|--------------|------------------|------------------|------------------|------------------|
| S_0          | S_0 (Parado)      | S_1 (Abrindo)    | S_0 (Parado)      | S_1 (Abrindo)    |
| S_1          | S_1 (Abrindo)     | S_2 (Aberto)     | S_3 (Fechando)    | S_1 (Abrindo)    |
| S_2          | S_2 (Aberto)      | S_2 (Aberto)     | S_3 (Fechando)    | S_3 (Fechando)   |
| S_3          | S_3 (Fechando)    | S_1 (Abrindo)    | S_0 (Fechado)     | S_3 (Fechando)   |

**Saída Y**

- **Y = 1**: Quando o portão está em movimento (estados S_1 ou S_3).
- **Y = 0**: Quando o portão está parado (estados S_0 ou S_2).

**Diagrama de Estados**

- **S_0** (**Fechado**): Transição para **S_1** quando X_1 = 1.
- **S_1** (**Abrindo**): Transição para **S_2** quando o portão está totalmente aberto. Transição para **S_3** se X_2 = 1.
- **S_2** (**Aberto**): Transição para **S_3** quando X_2 = 1.
- **S_3** (**Fechando**): Transição para **S_0** quando o portão está totalmente fechado. Transição para **S_1** se X_1 = 1.

___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  
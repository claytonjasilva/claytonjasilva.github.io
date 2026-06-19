# Cap. 8 — Fundamentos de Máquinas Sequenciais

## 8.1 Conceito de sistemas sequenciais

Nosso estudo tem sido dedicado até o momento aos **circuitos combinacionais**.

Existe um segmento muito importante dos sistemas digitais, cujos circuitos são categorizados como **circuitos sequenciais**.

Para uma ampla gama de problemas, as técnicas de sistemas digitais podem ser aplicadas. Uma delas se refere ao controle de sistemas, em que sinais digitais são recebidos e interpretados por um sistema digital, gerando saídas de controle de acordo com **uma sequência** em que os sinais são recebidos.

Nessas aplicações, circuitos com as características dos circuitos combinacionais não são adequados para resolver o problema. Estas aplicações exigem que as saídas geradas sejam uma **função das variáveis de entrada presentes e dos valores passados das variáveis de entrada**.

Um modelo de sistema controlado por realimentação (*feedback*) está apresentado na figura.

![Sistema controlado por realimentação](https://github.com/claytonjasilva/claytonjasilva.github.io/raw/main/sisdig_aulas/images_sisdig/sistemafeedback.jpg)

Na figura estão identificados três blocos:

- **Circuito comparador** — circuito digital que recebe a saída do sistema a ser controlado no instante anterior;
- **Circuito controlado** — circuito que deve ser controlado de modo que as saídas desejadas sejam obtidas.

As entradas $x(t)$ são recebidas de outro módulo qualquer do sistema. Os sinais $y(t)$ são aqueles obtidos da transformação de $x(t)$ pelo *feedback* das saídas no instante anterior. As saídas $u(t)$ são aquelas que representam o comportamento desejado para o sistema.

**Distinção entre máquinas sequenciais e combinacionais**

| Sequenciais | Combinacionais |
| :--- | :--- |
| Deve possuir capacidade de memória | A saída é estritamente função da entrada — não tem memória |
| Deve possuir realimentação | Não possui realimentação |

As duas propriedades básicas descritas na tabela para os sistemas sequenciais são necessárias, mas não são suficientes. Os circuitos sequenciais possuem uma propriedade operacional básica: **são cíclicos** sob determinadas condições de controle.

Um **modelo geral** de sistemas controlados digitais, também chamados de máquinas sequenciais ou máquinas de estados finitos, está apresentado na figura.

![Modelo geral de sistemas sequenciais](https://github.com/claytonjasilva/claytonjasilva.github.io/raw/main/sisdig_aulas/images_sisdig/sistemasequencial.jpg)

Observam-se três blocos, a saber:

1. O primeiro bloco recebe as entradas e as saídas em ***feedback*** para produzir entradas controladas ou modificadas;
2. No segundo bloco, as saídas do bloco anterior são armazenadas no **elemento de memória** para realimentar a entrada;
3. No terceiro bloco, aplica-se a lógica necessária para produzir a saída desejada.

O modelo acima ilustra como se constrói a **máquina sequencial**, também chamada de **máquina de estados finitos**.

---

## 8.2 Circuitos síncronos e assíncronos

Vimos a definição de circuitos sequenciais. Muitas aplicações de circuitos sequenciais envolvem o emprego de uma referência temporal, chamada de **relógio** ou **clock**.

A classificação correta não se baseia apenas na *presença* do sinal de clock, mas em **como as transições de estado se relacionam com ele**:

- **Circuitos síncronos**: todas as mudanças de estado ocorrem **sincronizadas pelas transições (bordas) do sinal de clock** — o circuito só "avança" no instante em que o clock transiciona, mesmo que as entradas tenham mudado antes desse instante.
- **Circuitos assíncronos**: as mudanças de estado ocorrem **a qualquer momento**, assim que há mudança nas entradas, **sem referência a um sinal de clock comum** a todo o circuito.

O comportamento do sinal de clock está apresentado na figura.

![Sinal de clock](/assets/img/sisdig/cap8_clock.svg)

Tipicamente, o sinal de clock é um **trem de ondas quadradas**. Observe que o sinal varia entre dois níveis lógicos: alto e baixo.

Para circuitos sequenciais é importante salientar que a **transição de um nível para outro** é o evento relevante — não o nível em si. Essa transição possui uma **borda**: a **borda de subida** (transição de baixo para alto) e a **borda de descida** (transição de alto para baixo). Embora teoricamente essa transição seja instantânea (por "salto"), os sinais reais possuem uma transição que requer um intervalo de tempo $\Delta t$.

Todo sinal de clock é **periódico**, consequentemente possui um ciclo temporal definido por $T_{Ck}$. O número de ciclos na unidade de tempo define a frequência do sinal, $f_{Ck}$, que satisfaz:

$$f_{Ck} = \frac{1}{T_{Ck}}$$

A relação entre o tempo em que o sinal está no nível alto e o período total é chamada de ***duty cycle*** (ciclo de trabalho):

$$Duty\;Cycle = \frac{T_{on}}{T_{Ck}}$$

normalmente expresso em porcentagem.

---

## 8.3 Máquina de estados

### 8.3.1 O diagrama de estados

Existem técnicas para analisar e projetar circuitos sequenciais. Uma das técnicas consiste na utilização de **diagramas de estados**.

De modo geral, os circuitos sequenciais são classificados da seguinte forma:

- Detectores de sequência de códigos;
- Contadores e registradores;
- Geradores de códigos;
- Sistemas controladores.

O êxito do projeto e da análise de máquinas sequenciais depende fortemente dos objetivos e das técnicas empregadas. Uma delas é a técnica de diagrama de estados.

O **estado** define um **conjunto de informações sobre o sistema** em um determinado momento. Uma máquina que se encontra em um determinado estado pode passar a outro quando um **evento** ocorre. A mudança de estados define uma **transição** de estados.

O diagrama de estados representa o **comportamento dinâmico** de uma máquina sequencial, apresentando os seguintes elementos:

- **Estados** possíveis, identificados por um **rótulo** (símbolo e/ou código);
- **Transições** possíveis, indicadas por uma seta que liga o **estado de origem** ao **estado de destino**;
- **Eventos**, definidos pelas variáveis de entrada, que disparam a transição entre estados;
- **Saídas**, cujos valores dependem do modelo de máquina utilizado — ver a distinção entre **Mealy** e **Moore** a seguir.

**O diagrama de estados para as máquinas sequenciais é equivalente à tabela-verdade para as máquinas combinacionais.**

Existem dois modelos clássicos de máquina de estados finitos, que se diferenciam pela forma como a saída é determinada:

- **Máquina de Moore**: a saída é função **somente do estado atual** — $Y = f(\text{estado})$. A saída é tipicamente rotulada **dentro do círculo** que representa o estado.
- **Máquina de Mealy**: a saída é função **do estado atual e da entrada presente** — $Y = f(\text{estado}, \text{entrada})$. A saída é tipicamente rotulada **sobre a seta de transição**, junto com o evento que a provoca.

A figura ilustra os elementos do diagrama de estados e a distinção entre os dois modelos:

![Diagrama de estados — elementos básicos](/assets/img/sisdig/cap8_diagramaestados.svg)

A figura ilustra os elementos do diagrama de estados:

1. Todo estado é definido por um **símbolo de identificação** e um respectivo **código**;
2. Uma seta indica a **transição** entre um **estado de origem** e um **estado de destino**;
3. Toda transição é disparada por uma **condição de entrada** (o evento);
4. A saída associada pode estar vinculada ao **estado** (modelo de Moore) ou à **transição** (modelo de Mealy), conforme o modelo adotado para a máquina.

O **exemplo 1**, a seguir, ilustra o funcionamento de uma máquina sequencial do tipo **Moore** — a saída (par *A,B*) está associada a cada estado, e não às transições.

![Exemplo diagrama de estados](https://github.com/claytonjasilva/claytonjasilva.github.io/raw/main/sisdig_aulas/images_sisdig/exdiagramaestados.jpg)

Entendendo o comportamento do sistema:

1. O estado **a** produz saída *00*, ou seja, *A=0*, *B=0*, que definem o estado.
2. Quando a variável de entrada *X* assume o valor *0*, o sistema permanece no estado atual, *00*.
3. Quando *X* passa ao valor *1*, ocorre uma transição do estado **a** para o estado **b** — a variável *B* passa de *0* a *1* e a variável *A* não se altera, permanecendo igual a *0*.
4. Do estado **b**, se a entrada *X* passar a *1*, ocorre uma transição para o estado **c** — a variável *B* passa de *1* a *0* e a variável *A* passa de *0* a *1*; em caso contrário, se *X = 0*, o sistema permanece no estado.
5. Do estado **c**, se a entrada *X* passar a *1*, ocorre uma transição para o estado **d** — a variável *B* passa de *0* a *1* e a variável *A* permanece igual a *1*; em caso contrário, se *X = 0*, o sistema permanece no estado.
6. Do estado **d**, uma nova entrada *X=1* leva a máquina a retornar ao estado inicial *A=0, B=0*, renovando o ciclo.

O comportamento da máquina sequencial poderá ser síncrono ou assíncrono.

No caso síncrono, a transição ocorre dependendo também de um sinal de clock: além de *X*, a transição depende da mudança do sinal de clock de nível baixo (*LOW*) para alto (*HIGH*). Essa variação do sinal de clock é chamada de **disparo pela borda** (*edge-triggered*).

Ou seja, no exemplo, mantido *X=1*, as transições entre estados *00-01-10-11* ocorrerão sempre que houver a borda de subida do clock. No caso de *X=0*, independentemente da transição do clock, a saída será mantida no estado em que se encontrar quando *X* for resetado.

![Máquina sequencial — diagrama de blocos](https://github.com/claytonjasilva/claytonjasilva.github.io/raw/main/sisdig_aulas/images_sisdig/maquinasequencial.jpg)

O **exemplo 2** de diagrama de estados, do tipo **Mealy**, está apresentado na figura.

![Exemplo diagrama de estados — Mealy](https://github.com/claytonjasilva/claytonjasilva.github.io/raw/main/sisdig_aulas/images_sisdig/ex2diagramaestados.jpg)

No novo exemplo, ao invés do uso de símbolos **a**, ..., **d** para designar os estados, utiliza-se o próprio código que define cada estado. Como o código já está definido, omitem-se no diagrama as saídas correspondentes às variáveis de estado.

No diagrama, apresenta-se uma nova variável *Z*, cujo valor de saída está associado a **cada transição de estado** — característica do modelo de Mealy — embora *Z* não se configure como variável de estado.

Um esquema em bloco do circuito está apresentado na figura.

![Máquina sequencial — esquema em blocos](https://github.com/claytonjasilva/claytonjasilva.github.io/raw/main/sisdig_aulas/images_sisdig/maquinasequencial2.jpg)

### 8.3.2 Análise de circuitos sequenciais síncronos

Nos processos de análise de circuitos sequenciais, duas determinações devem ser feitas: (1) qual é a classe do circuito a ser analisado; e (2) o que deve resultar do processo de análise.

Em outras palavras, o problema requer um **circuito combinacional** ou **sequencial**? Se for um circuito sequencial, ele é **síncrono** ou **assíncrono**? Qual é a informação que deve ser obtida da análise?

A partir daí, na análise será necessário:

1. Identificar os **estados**;
2. Identificar quais são as **entradas** relacionadas com as mudanças de estado;
3. Identificar quais são as **sequências de transições**.

Para a análise, uma ferramenta importante é o **mapa de próximo estado** para cada saída, a partir das saídas do estado anterior. O mapa é muito útil para construir os circuitos.

Vamos tomar o **exemplo 1**. O comportamento da **saída *A*** da máquina sequencial pode ser representado pelo mapa.

| *AB* | *00* | *01* | *11* | *10* |
| :---: | :---: | :---: | :---: | :---: |
| ***X = 0*** | 0 | 0 | 1 | 1 |
| ***X = 1*** | 0 | 1 | 0 | 1 |

O mapa representa o comportamento da saída *A* em função do estado predecessor e da variável *X*. Observe que, quando *X = 0*, o estado permanece inalterado — o valor da variável *A* após a transição de clock não se altera. Assim, se *A* for igual a *0*, manter-se-á *0* na próxima borda de clock; se *A* for igual a *1*, manter-se-á *1*.

Quando *X = 1*, a análise deve levar em consideração as transições que ocorrem entre estados, de modo que a saída será indicada por *1* nas transições de *01* para *10* e de *10* para *11*.

Em raciocínio similar, pode-se definir o comportamento da variável de estado *B*. O comportamento da **saída *B*** pode ser representado pelo mapa:

| *AB* | *00* | *01* | *11* | *10* |
| :---: | :---: | :---: | :---: | :---: |
| ***X = 0*** | 0 | 1 | 1 | 0 |
| ***X = 1*** | 1 | 0 | 1 | 0 |

Procedimento similar pode ser adotado para a análise do diagrama de estados do **exemplo 2**. O comportamento da **saída *A*** pode ser representado pelo mapa:

| *AB* | *00* | *01* | *11* | *10* |
| :---: | :---: | :---: | :---: | :---: |
| ***X = 0*** | 0 | 1 | 0 | 0 |
| ***X = 1*** | 0 | 1 | 0 | 0 |

O comportamento da **saída *B*** pode ser representado pelo mapa:

| *AB* | *00* | *01* | *11* | *10* |
| :---: | :---: | :---: | :---: | :---: |
| ***X = 0*** | 0 | 1 | 1 | 0 |
| ***X = 1*** | 1 | 0 | 0 | 1 |

O comportamento da **saída *Z*** (variável de Mealy, associada à transição) pode ser representado pelo mapa:

| *AB* | *00* | *01* | *11* | *10* |
| :---: | :---: | :---: | :---: | :---: |
| ***X = 0*** | 0 | 1 | 1 | 1 |
| ***X = 1*** | 0 | 0 | 1 | 0 |

Identificado o mapa de próximo estado para cada uma das saídas, é possível **escrever a expressão booleana para cada saída de próximo estado**. A escrita da expressão é similar à utilização do Mapa K. No exemplo 1, os mapas relativos às saídas *A* e *B* são:

![Mapa K — exemplo 1 do diagrama de estados](https://github.com/claytonjasilva/claytonjasilva.github.io/raw/main/sisdig_aulas/images_sisdig/mapakexemplo1diagrama.jpg)

Dos quais se obtêm as expressões:

$$A = A.\bar{X} + \bar{A}.B.X + A.\bar{B}.X$$
$$B = B.\bar{X} + \bar{A}.\bar{B}.X + A.B.X$$

É importante lembrar que a variável de saída, à esquerda da equação, representa o **valor atual**, e a mesma variável à direita da equação representa o **valor anterior** (antes da transição de clock).

---

### 8.3.3 Exemplos

#### a. Sistema de controle de elevador

Este exercício envolve o projeto de um **circuito sequencial** que controla um **elevador** operando em quatro andares: S₀, S₁, S₂, S₃. O sistema possui **duas entradas** e **uma saída** que indicam as ações do elevador:

- **Entrada X₁**: representa o botão de **subir** pressionado.
- **Entrada X₂**: representa o botão de **descer** pressionado.
- **Saída Y**: indica se o elevador está **em movimento** (Y = 1) ou **parado** (Y = 0).

**Regras de operação**

1. O elevador começa no **térreo** (S₀).
2. Quando X₁ = 1, o elevador sobe um andar, até o andar máximo (S₃).
3. Quando X₂ = 1, o elevador desce um andar, até o andar mínimo (S₀).
4. A saída Y é 1 enquanto o elevador está **em movimento** e 0 quando ele está **parado**.

**Estados e transições**

O circuito terá **quatro estados** que representam os andares do elevador:

- **S₀**: térreo
- **S₁**: primeiro andar
- **S₂**: segundo andar
- **S₃**: terceiro andar

**Tabela de transição de estados**

| Estado Atual | X₁=0, X₂=0 | X₁=1, X₂=0 | X₁=0, X₂=1 | X₁=1, X₂=1 |
| :---: | :---: | :---: | :---: | :---: |
| S₀ | S₀ (Parado) | S₁ (Sobe) | S₀ (Parado) | S₁ (Sobe) |
| S₁ | S₁ (Parado) | S₂ (Sobe) | S₀ (Desce) | S₁ (Parado) |
| S₂ | S₂ (Parado) | S₃ (Sobe) | S₁ (Desce) | S₂ (Parado) |
| S₃ | S₃ (Parado) | S₃ (Parado) | S₂ (Desce) | S₃ (Parado) |

**Saída Y**

- **Y = 1**: quando o elevador está em movimento.
- **Y = 0**: quando o elevador está parado.

---

#### b. Circuito de controle digital de portão

O objetivo é projetar um **circuito sequencial** para controlar a abertura e fechamento de um portão automático. O portão deve ter quatro estados principais e responder a dois sensores de controle. A saída do circuito indica se o portão está **abrindo**, **fechando**, **totalmente aberto** ou **totalmente fechado**.

**Especificações**

1. **Estados**:
   - **S₀**: portão totalmente fechado.
   - **S₁**: portão parcialmente aberto, abrindo.
   - **S₂**: portão totalmente aberto.
   - **S₃**: portão parcialmente aberto, fechando.

2. **Entradas**:
   - **X₁**: sensor que detecta se o portão está em movimento para **abrir**.
   - **X₂**: sensor que detecta se o portão está em movimento para **fechar**.

3. **Saída Y**:
   - **Y = 1**: o portão está em **movimento** (abrindo ou fechando).
   - **Y = 0**: o portão está **parado** (totalmente aberto ou totalmente fechado).

**Regras de operação**

1. O portão começa no estado **S₀** (totalmente fechado).
2. Se o botão de abrir é pressionado (X₁ = 1), o portão muda para o estado **S₁** e começa a abrir.
3. Quando o portão está totalmente aberto (S₂), ele para de se mover e **Y = 0**.
4. Se o botão de fechar é pressionado (X₂ = 1), o portão passa para o estado **S₃** e começa a fechar.
5. Quando o portão está totalmente fechado (S₀), ele para de se mover e **Y = 0**.

**Tabela de transição de estados**

| Estado Atual | X₁=0, X₂=0 | X₁=1, X₂=0 | X₁=0, X₂=1 | X₁=1, X₂=1 |
| :---: | :---: | :---: | :---: | :---: |
| S₀ | S₀ (Parado) | S₁ (Abrindo) | S₀ (Parado) | S₁ (Abrindo) |
| S₁ | S₁ (Abrindo) | S₂ (Aberto) | S₃ (Fechando) | S₁ (Abrindo) |
| S₂ | S₂ (Aberto) | S₂ (Aberto) | S₃ (Fechando) | S₃ (Fechando) |
| S₃ | S₃ (Fechando) | S₁ (Abrindo) | S₀ (Fechado) | S₃ (Fechando) |

**Saída Y**

- **Y = 1**: quando o portão está em movimento (estados S₁ ou S₃).
- **Y = 0**: quando o portão está parado (estados S₀ ou S₂).

---

#### c. Contador crescente de 3 bits com saída para números ímpares

O objetivo é projetar um **circuito sequencial** que implemente um **contador crescente de 3 bits**. O contador deve contar de 0 a 7, e sua saída será 1 quando o valor contado for um número **ímpar**.

**Especificações**

1. **Estados**: o contador possui **8 estados** representando os valores binários de 3 bits:
   - **S₀** = 000 (decimal 0)
   - **S₁** = 001 (decimal 1)
   - **S₂** = 010 (decimal 2)
   - **S₃** = 011 (decimal 3)
   - **S₄** = 100 (decimal 4)
   - **S₅** = 101 (decimal 5)
   - **S₆** = 110 (decimal 6)
   - **S₇** = 111 (decimal 7)

2. **Entradas**: o circuito não possui entradas de controle para a contagem, apenas o **clock**, que controla a transição entre os estados.

3. **Saída Y**:
   - **Y = 1**: quando o estado atual é um número **ímpar** (S₁, S₃, S₅, S₇).
   - **Y = 0**: quando o estado atual é um número **par** (S₀, S₂, S₄, S₆).

**Regras de operação**

1. O contador começa no estado **S₀** (000) e avança ciclicamente em ordem crescente até **S₇** (111).
2. Quando o estado é um número **ímpar**, a saída **Y** deve ser 1.
3. Quando o estado é um número **par**, a saída **Y** deve ser 0.
4. Após atingir o estado **S₇**, o contador volta ao estado **S₀** e continua o ciclo.

**Tabela de transição de estados e saída**

| Estado Atual | Próximo Estado | Saída Y |
| :---: | :---: | :---: |
| S₀ (000) | S₁ (001) | 0 |
| S₁ (001) | S₂ (010) | 1 |
| S₂ (010) | S₃ (011) | 0 |
| S₃ (011) | S₄ (100) | 1 |
| S₄ (100) | S₅ (101) | 0 |
| S₅ (101) | S₆ (110) | 1 |
| S₆ (110) | S₇ (111) | 0 |
| S₇ (111) | S₀ (000) | 1 |

**Saída Y**

- **Y = 1**: quando o estado atual é um número ímpar (S₁, S₃, S₅, S₇).
- **Y = 0**: quando o estado atual é um número par (S₀, S₂, S₄, S₆).

O diagrama de estados deve representar os 8 estados do contador, de S₀ a S₇, com transições unidirecionais em ordem crescente, voltando ao estado S₀ após o estado S₇. As transições são controladas pelo **clock**, e a saída **Y** é ativada quando o estado atual for um número ímpar — note que, neste exemplo, a saída é função apenas do **estado**, caracterizando uma máquina de **Moore**.

---

Esse exercício permite estudar o comportamento de contadores sequenciais e a lógica associada a saídas que dependem de condições específicas nos estados, como identificar números ímpares.

---

**[Home — Sistemas Digitais](https://claytonjasilva.github.io/sisdig.html)**

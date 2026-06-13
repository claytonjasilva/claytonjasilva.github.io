# Cap. 2 — Álgebra Booleana e Portas Lógicas

## 2.1 Álgebra Booleana

### 2.1.1 Proposição e valor lógico

A base do nosso estudo é o conceito de **proposição**:

Oração declarativa **afirmativa ou negativa** sobre a qual se pode atribuir um, e somente um, **valor lógico**: (*F*) falso ou (*V*) verdadeiro. **Adotaremos como padrão *F* = *0* e *V* = *1***.

Também conhecida como sentença fechada.

**Observação:** sentenças interrogativas, exclamativas e imperativas não são proposições.

A proposição que contém apenas uma afirmação ou negação é chamada de **proposição simples**.

As proposições simples podem ser concatenadas, gerando as **proposições compostas**.

A concatenação das proposições simples é realizada por meio de **operadores lógicos**, que indicam **operações lógicas**.

As operações lógicas **primitivas** são: **conjunção**, **disjunção** e **negação**.

---

### 2.1.2 Operação lógica de CONJUNÇÃO — *AND*

A proposição composta *S* resultante da operação de conjunção de duas proposições simples *p* e *q* é indicada por

```
S = p.q
```

Lê-se *"S é igual a p **e** q"*. O resultado depende dos valores lógicos de *p* e de *q*, conforme a tabela:

| *p.q* | *p* | *q* |
| :---: | :---: | :---: |
| 0 | 0 | 0 |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 1 | 1 |

---

### 2.1.3 Operação lógica de DISJUNÇÃO — *OR*

A proposição composta *S* resultante da operação de disjunção de duas proposições simples *p* e *q* é indicada por

```
S = p+q
```

Lê-se *"S é igual a p **ou** q"*. O resultado depende dos valores lógicos de *p* e de *q*, conforme a tabela:

| *p+q* | *p* | *q* |
| :---: | :---: | :---: |
| 0 | 0 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |
| 1 | 1 | 1 |

---

### 2.1.4 Operação de inversão lógica, NEGAÇÃO — *NOT*

A proposição composta *S* resultante da operação **unária** (com apenas um operando) de negação de uma proposição simples *p* é indicada por

```
S = ~p
```

Lê-se *"S é igual a **não** p"*. O resultado depende do valor lógico de *p*, conforme a tabela:

| *~p* | *p* |
| :---: | :---: |
| 1 | 0 |
| 0 | 1 |

Outros operadores utilizados:

| Operação | Operadores |
| -------- | ---------- |
| Conjunção | $\land$, *e* |
| Disjunção | $\lor$, *ou* |
| Negação | $\bar{X}$, *não* |

---

### 2.1.5 Expressões lógicas ou booleanas

As expressões lógicas consistem na operação lógica de proposições, expressas pelo uso de operadores lógicos, cujo resultado depende do valor lógico de cada proposição constituinte.

Para a construção de expressões lógicas, definem-se os seguintes termos:

- **Variável** lógica: representação simbólica de qualquer proposição, que pode assumir somente um dos valores do conjunto $C = \{0, 1\}$.
- **Constante** lógica: um valor lógico *0* ou *1*.
- **Função** lógica: definida por uma expressão lógica, compreende constantes e variáveis operadas de modo a produzir um valor lógico 0 ou 1. Indicada por $Y = f(X_0, X_1, \ldots, X_n)$.

Para calcular o valor resultante de uma expressão lógica:

1. Substituir em cada variável o seu valor lógico correspondente.
2. Resolver expressões entre símbolos especiais na ordem de precedência: `()` (maior precedência), `[]`, `{}`.
3. Aplicar as operações respeitando a precedência: negação (maior precedência), conjunção e disjunção.
4. O resultado deverá ser valor lógico 0 ou 1.

As proposições compostas podem apresentar características especiais:

1. **Tautologia**: expressão que **sempre resulta em valor lógico verdadeiro (1)** para todas as combinações possíveis de suas variáveis.
2. **Contradição**: expressão que **sempre resulta em valor lógico falso (0)** para todas as combinações possíveis de suas variáveis.
3. **Equivalência lógica**: quando duas proposições compostas produzem resultados iguais para cada combinação possível de variáveis.

**Observação:** se uma expressão booleana utiliza *n* variáveis, é possível elaborar $2^n$ combinações possíveis para determinar o valor da expressão.

---

## 2.2 Tabela-verdade

As tabelas-verdade são instrumentos que permitem representar todas as combinações de saída das funções de variáveis.

São formadas pelas **colunas das variáveis**, **colunas intermediárias** e **coluna de saída**.

Dada uma função de *n* variáveis, a tabela deve possuir ***n*** colunas de variáveis.

As colunas intermediárias são opcionais, dependendo da necessidade na solução da expressão. O mais completo é ter uma coluna intermediária para cada etapa da solução, conforme a precedência discutida anteriormente.

A tabela deve possuir **somente uma** coluna de saída, pois uma função admite apenas um valor **para cada combinação de entradas**.

| *n* colunas de entrada | Colunas intermediárias | 1 coluna de saída |
| :--------------------: | :--------------------: | :---------------: |
| Combinação 0 | ... | Saída 0 |
| ... | ... | ... |
| Combinação $2^n - 1$ | ... | Saída $2^n - 1$ |

**Os circuitos eletrônicos digitais implementam funções lógicas.**

---

## 2.3 Portas lógicas

Os circuitos digitais são circuitos elétricos que utilizam como componentes básicos elementos digitais, ou seja, que operam com dois níveis de sinais lógicos elétricos: (H, de *high*, alto) e (L, de *low*, baixo).

O nível H é abstraído matematicamente como **1** e o nível L, como **0**.

**Do ponto de vista elétrico, os valores de *H* e de *L* podem variar dependendo da tecnologia de construção do componente (discutiremos mais adiante).**

Além dos sinais lógicos, os circuitos digitais utilizam sinal de alimentação de tensão contínua (normalmente $V_{CC}$) e sinal de referência de tensão, o terra (*GROUND*).

Os componentes elétricos básicos dos circuitos digitais são as **portas lógicas** ou ***gates***. São dispositivos eletrônicos com **duas ou mais entradas** que apresentam **uma saída** resultante da operação lógica das entradas naquele instante.

As portas lógicas básicas são: ***AND***, ***OR*** e ***NOT***.

---

### 2.3.1 Porta *OR*

Implementa a operação de disjunção. A figura apresenta a representação simbólica e a respectiva tabela-verdade.

![Símbolo e tabela-verdade da porta OR](/assets/img/sisdig/cap2_or.svg)

As portas lógicas são encapsuladas em chips (discutiremos com mais detalhes posteriormente).

Vários fabricantes desenvolvem e lançam no mercado esses chips. Um deles é a *Texas Instruments*, que produz as portas *OR* [SN54HC32/SN74HC32](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/sistemas_digitais_datasheet_SN74HC32N_Texas.pdf).

Para utilizar as portas, é necessário obedecer às especificações definidas nos *datasheets* (folhas de dados) dos componentes eletrônicos. As especificações compreendem, entre outras:

- **Pinagem**: identificação de todos os pinos do chip, necessária para estabelecer corretamente as ligações;
- **Características elétricas**: os chips precisam receber tensão e corrente adequadas para operar corretamente, pois são **componentes ativos**;
- **Características mecânicas**: temperatura de operação, umidade e outras condições ambientais que afetam o desempenho do chip.

---

### 2.3.2 Porta *AND*

Implementa a operação de conjunção. A figura apresenta a representação simbólica e a respectiva tabela-verdade.

![Símbolo e tabela-verdade da porta AND](/assets/img/sisdig/cap2_and.svg)

Assim como a *Texas Instruments*, a *Motorola* é outro fabricante de chips de portas lógicas. Ela fabrica, entre outros componentes, as portas *AND* [MC14081/MC14082](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/sistemas_digitais_datasheet_CD14082BCP_Motorola.pdf), que diferem pelo número de entradas.

A *Philips* também fabrica portas *AND*, como as [74HC08N](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/sistemas_digitais_datasheet_74HC08N_Philips.pdf).

---

### 2.3.3 Inversor *NOT*

Implementa a operação de negação. A figura apresenta a representação simbólica e a respectiva tabela-verdade.

![Símbolo e tabela-verdade do inversor NOT](/assets/img/sisdig/cap2_not.svg)

A *Philips* produz os inversores [7404](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/sistemas_digitais_datasheet_SN74HC04_Philips.pdf).

---

### 2.3.4 Circuitos lógicos digitais

Os circuitos lógicos são classificados em dois tipos:

- **Circuitos combinacionais**: a saída depende unicamente da combinação das entradas em um dado instante.
- **Circuitos sequenciais**: possuem **memória**, ou seja, a saída em um instante depende das entradas naquele instante e da saída em instante anterior.

Para descrever algebricamente um circuito lógico:

1. Todo circuito lógico pode ser descrito algebricamente.
2. Numerar todas as portas lógicas e inversores.
3. Identificar todas as variáveis de entrada por sua representação simbólica.
4. Definir na saída de cada porta e inversor a expressão lógica em função das respectivas entradas — usar `()`, `[]` ou `{}` quando necessário.
5. Proceder da entrada do circuito até a saída.

![Exemplos de circuitos combinacionais](/assets/img/sisdig/cap2_exemplo_circuitos.svg)

A descrição algébrica dos circuitos do exemplo está indicada na saída de cada circuito. Cada saída pode ser definida como **uma função das entradas** e a ela corresponde **uma** tabela-verdade.

---

## 2.4 Teoremas e axiomas da álgebra booleana

### 2.4.1 Teoremas e axiomas

Como vimos, expressões booleanas diferentes podem apresentar o mesmo resultado lógico para todas as combinações possíveis de entradas — são **logicamente equivalentes**.

Portanto, como os circuitos podem ser descritos algebricamente, **circuitos diferentes podem implementar a mesma função**, pois as expressões que os descrevem são logicamente equivalentes.

Para o projeto de circuitos digitais, normalmente deseja-se obter circuitos com o **menor número possível de componentes**, pois:

1. São mais baratos de construir;
2. Ocupam menor espaço físico;
3. Consomem menor energia;
4. São mais fáceis de manter.

Uma das formas de analisar e projetar circuitos logicamente equivalentes é aplicando os **teoremas** e **axiomas** da Álgebra Booleana.

- **Axiomas**: premissas consideradas verdadeiras, fundamento de uma demonstração, porém indemonstráveis.
- **Teoremas**: proposições cuja veracidade pode ser demonstrada por meio de outras proposições e axiomas.

Salientando que uma variável *A* só pode assumir **um e somente um** valor lógico, 0 ou 1.

**Comutatividade**: $A \cdot B = B \cdot A$ (conjunção); $A + B = B + A$ (disjunção)

**Associatividade**: $A \cdot (B \cdot C) = (A \cdot B) \cdot C$ (conjunção); $A + (B + C) = (A + B) + C$ (disjunção)

**Distributividade**: $A \cdot (B + C) = A \cdot B + A \cdot C$ (conjunção sobre disjunção); $A + B \cdot C = (A + B) \cdot (A + C)$ (disjunção sobre conjunção)

**Elemento neutro**: $A \cdot 1 = A$ (conjunção); $A + 0 = A$ (disjunção)

**Elemento nulo**: $A \cdot 0 = 0$ (conjunção); $A + 1 = 1$ (disjunção)

**Elemento inverso**: $A \cdot \bar{A} = 0$ (conjunção); $A + \bar{A} = 1$ (disjunção)

**Idempotência**: $A \cdot A = A$ (conjunção); $A + A = A$ (disjunção)

**Dupla negação**: $\bar{\bar{A}} = A$

**Teorema de De Morgan**:
- Da conjunção: a negação da conjunção de variáveis é igual à disjunção das variáveis negadas:
$$\overline{A_0 \cdot A_1 \cdots A_n} = \bar{A_0} + \bar{A_1} + \cdots + \bar{A_n}$$
- Da disjunção: a negação da disjunção de variáveis é igual à conjunção das variáveis negadas:
$$\overline{A_0 + A_1 + \cdots + A_n} = \bar{A_0} \cdot \bar{A_1} \cdots \bar{A_n}$$

**Adjacência lógica**: $\bar{A} \cdot B + A \cdot B = B$

**Absorção**: $A + A \cdot B = A$; $A + \bar{A} \cdot B = A + B$

---

### 2.4.2 Simplificação de expressões algébricas

Aplicando sucessivamente os teoremas e axiomas da álgebra booleana, é possível reduzir expressões algébricas. A expressão original e a expressão reduzida são logicamente equivalentes — para os mesmos valores de entrada, o resultado lógico sempre será o mesmo.

- Quando uma expressão sempre resulta em valor lógico 1: **tautologia**.
- Quando sempre resulta em valor lógico 0: **contradição**.
- Quando pode assumir 0 ou 1 conforme as entradas: **contingência**.

---

### 2.4.3 Representação dos teoremas com portas lógicas

**1. Elementos nulo e neutro da conjunção**

![Elementos nulo e neutro da conjunção](/assets/img/sisdig/cap2_nulo_conjuncao.svg)

**2. Elementos nulo e neutro da disjunção**

![Elementos nulo e neutro da disjunção](/assets/img/sisdig/cap2_nulo_disjuncao.svg)

**3. Elementos inversos da conjunção e da disjunção**

![Elementos inversos](/assets/img/sisdig/cap2_inverso.svg)

**4. Idempotência**

![Idempotência](/assets/img/sisdig/cap2_idempotencia.svg)

**5. Dupla negação**

![Dupla negação](/assets/img/sisdig/cap2_dupla_negacao.svg)

---

## 2.5 Portas universais

Além das portas *AND*, *OR* e *NOT*, existem duas portas denominadas **portas universais**, pois somente com um único tipo delas é possível implementar circuitos descritos por quaisquer expressões lógicas.

---

### 2.5.1 Porta *NOR*

Implementa a operação de **negação da disjunção**.

![Símbolo e tabela-verdade da porta NOR](/assets/img/sisdig/cap2_nor.svg)

A *Texas Instruments* produz as portas [SN54HC02/SN74HC02](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/sistemas_digitais_datasheet_SN74HC02N_Texas.pdf).

---

### 2.5.2 Porta *NAND*

Implementa a operação de **negação da conjunção**.

![Símbolo e tabela-verdade da porta NAND](/assets/img/sisdig/cap2_nand.svg)

A *Texas Instruments* produz a série [CD4011/CD4012/CD4023](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/sistemas_digitais_datasheet_CD4011BE_Texas.pdf).

A *Philips* produz a porta [74HC00](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/sistemas_digitais_datasheet_74HC00N_Philips.pdf).

---

**[Home — Sistemas Digitais](https://claytonjasilva.github.io/sisdig.html)**

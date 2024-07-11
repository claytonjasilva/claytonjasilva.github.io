# Cap. 3 - Nível de lógica digital

## 3.1 Álgebra Booleana

### 3.1.1 Proposição e valor lógico

A base do nosso estudo é o conceito de **proposição**:  

Oração declarativa **afirmativa ou negativa**, sobre a qual se pode atribuir um e somente um **valor lógico**: (*F*) falso ou (*V*) verdadeiro. **Abstrairemos como padrão *F* como *0* e *V* como *1***.

Também conhecida como sentença fechada.  

**Observação:** sentenças interrogativas, exclamativas e imperativas não são proposições.  

A proposição que só contém uma afirmação ou negação é chamada de **proposição simples**.  

As proposições simples podem ser concatenadas, gerando as **proposições compostas**. 

A concatenação das proposições simples é realizada através de **operadores lógicos**, os quais indicam **operações lógicas**.  

As operações lógicas **primitivas** são: **conjunção**, **disjunção** e **negação**.   

### 3.1.2 Operação lógica de CONJUNÇÃO - *AND*  

A proposição composta *S* resultante da operação de conjunção de duas proposições simples *p* e *q* é indicada por

```
S = p.q
```

Lê-se *'S é igual a p **e** q'*, cujo resultado depende dos valores lógicos de *p* e de *q*, definido pela tabela  

| *p.q* | *p* | *q* |
| ----- | --- | --- |
| 0 | 0 | 0 |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 1 | 1 |

### 3.1.3 Operação lógica de DISJUNÇÃO - *OR*  

A proposição composta *S* resultante da operação de conjunção de duas proposições simples *p* e *q* é indicada por
```
S = p+q
```

Lê-se *'S é igual a p **ou** q'*, cujo resultado depende dos valores lógicos de *p* e de *q*, definido pela tabela  

| *p+q* | *p* | *q* |
| ----- | --- | --- |
| 0 | 0 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |
| 1 | 1 | 1 |

### 3.1.4 Operação de inverção lógica, NEGAÇÃO, - *NOT*  

A proposição composta *S* resultante da operação **unária** (ou seja, que só possui um operando) de negação de uma proposição simples
*p* é indicada por
```
S = ~p
```

Lê-se *'S é igual **não** p'*, cujo resultado depende dos valores lógicos de *p*, definido pela tabela  

| *~p* | *p* |
| ----- | --- |
| 1 | 0 |
| 0 | 1 |

Outros operadores utilizados
| Operação | Operadores |
| -------- | ---------- |
| Conjunção | $\land$, *e* |
| Disjunção | $\lor$, *ou* |
| Negação | $\bar{X}$, *não* |

### 3.1.5 Expressões lógicas ou booleanas

As expressões lógicas consistem na operação lógica de proposições, expressa pelo uso de operadores lógicos, cujo resultado depende do valor lógico de cada uma das proposições constituintes.  
Para a construção de expressões lógicas devemos definir alguns termos:  

- **Variável** lógica: representação simbólica de qualquer proposição, consequentemente que pode assumir somente um dos valores do conjunto *C={0,1}*.
- **Constante** lógica: um valor lógico *0* ou *1*
- **Função** lógica: definida por uma expressão lógica, compreende constantes e variáveis, as quais são operadas de modo a produzir um valor lógico 0 ou 1. Indicada por $Y=f(X_0,X_1, ..., X_n)$.

Para calcular o valor resultante de uma expressão lógica é necessário aplicar:  

1. Substituir em cada variável o seu valor lógico correspondente.
2. As expressões podem utilizar símbolos especiais inscrevendo parcela da expressão, como {}, [] e (). Nesse caso resolver na precedência: () (maior precedência), [] , {}.
3. Aplicar as operações obedecendo a precedência entre elas: negação (maior precedência), conjunção e disjunção.
4. O resultado deverá ter valor lógico 0 ou valor lógico 1

As proposições compostas podem apresentar características especiais, a saber:  

1. **Tautologia**: é a expressão que **sempre resultará valor lógico verdadeiro (1)**, para todas as combinações possíveis de suas variáveis.
2. **Contradição**: é a expressão que **sempre resultará valor lógico falso (0)**, para todas as combinações possíveis de suas variáveis.
3. Proposições compostas podem representar resultados iguais para cada uma de todas as posiveis combinações de variáveis. Nesse caso, as proposições são ditas **logicamente equivalentes**.

**Observação:** Se uma expressão booleana utiliza *n* variáveis, é possível elaborar *2<sup>n</sup>* combinações possíveis para determinar o valor da expressão.

## 3.2 Tabela-verdade  

As tabelas-verdade são instrumentos que permitem a representação de todas as combinações de saída das funções de variáveis.  

São basicamente formada pelas **colunas das variáveis**, **colunas intermediárias** e **coluna de saída**.  

Dada uma função de *n* variáveis, a tabela deve possuir ***n*** colunas das variáveis.  

As colunas intermediárias são facultativas, dependendo da necessidade na solução da expressão que define a função. O mais completo é ter uma coluna intermediária para cada passo da solução da expressão, conforme a precedência discutida anteriormente.   

A tabela deve possuir **somente uma** coluna de saída, pois uma função só admite um valor **para cada combinação de entradas, 0 ou 1**.  

| *n* colunas de entrada | colunas intermediárias | 1 coluna de saída |
| ---------------------- | ---------------------- | ----------------- |
| Combinação 0 | .... | Saída 0 |
| ... | ... | ... |
| Combinação *2<sup>n</sup>-1* | ... | Saída *2<sup>n</sup>-1* |

**Os circuitos eletrônicos digitais implementam funções lógicas.**

## 2.3 Portas lógicas

Os circuitos digitais são circuitos elétricos que utilizam como componentes elementos básicos digitais, isto é,
que operam com dois níveis de sinais lógicos elétricos (H, de *high*, alto) e (L, de *low*, baixo).   

O nível H é abstraído matematicamente como 1 e o nível L, como 0.  

**De ponto de vista elétrico, o valor de *H* e de *L* podem variar, dependendo da tecnologia de construção do componente (discutiremos mais tarde)**.  

Além dos sinais lógicos, os circuitos digitais utilizam também sinal elétrico de alimentação de tensão contínua (normalmente sinalizada como *V<sub>CC</sub>*) e sinal de referência de tensão, terra  (*GROUND*).  

Os componentes elétricos básicos dos circuitos digitais são as **portas lógicas** ou ***gates***. São dispositivos eletrônicos com **duas ou mais entradas** que apresentam **uma saída** em um instante de tempo resultante da operação lógica das entradas naquele instante.  

As portas lógicas básicas são: ***and***, ***or*** e ***not**.

### 2.3.1 Portas *or*

Implementam a operação de disjunção. A figura apresenta a sua representação simbólica e sua respectiva tabela verdade.

![Tabela verdade e representação da porta *or*](/sisdig_aulas/images_sisdig/or.jpg)

As portas lógicas são encapsuladas em chips (discutiremos com mais detalhes posteriormente).  

Vários fabricantes desenvolvem e lnaçma no mercado esses chips. Um deles é a *Texas Instruments*.  

Os chips são identificados pelo fabricante. A *Texas* produz as portas *or* [SN54HC32/SN74HC32](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/SN74HC32N_Texas.pdf).  

Para utilizar as portas é necessário obedecer as especificações definidas nos *datsasheets* (folhas de dados) dos componentes eletrônicos.  

É possível observar que as especificações compreendem, entre outras coisas:  

- **Pinagem**: identificação de todos os pinos do chip, necessária para estabelecer corretamente as ligações;
- **Características elétricas**: como um componente eletrônicos, os chips precisam receber uma energia elétrica (tensãoxcorrente) para operar corretamente, pois são **componente ativos**;
- **Características mecânicas**: especificações como temperatua de operação, umidade, entre outras, afetam o desempenho do chip.

### 2.3.2 Portas *and*

Implementam a operação de conjunção. A figura apresenta a sua representação simbólica e sua respectiva tabela verdade.

![Tabela verdade e representação da porta *and*](/sisdig_aulas/images_sisdig/and.jpg)

Assim como a *Texas Instruments*, outro fabricante de chips de portas lógicas é a *Motorola*.  

A *Motorola* fabrica uma série de componentes, entre eles as portas *and* [MC14081/MC14082](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/CD14082BCP_Motorola.pdf).  

Observe que elas difereme pelo número de entradas das portas.

A *Philips* também fabrica portas *and* como as portas [74HC08N](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/74HC08N_Philips.pdf).

### 2.3.3 Inversor *not*

Implementam a operação de negação. A figura apresenta a sua representação simbólica e sua respectiva tabela verdade.

![Tabela verdade e representação do inversor *not*](/sisdig_aulas/images_sisdig/not.jpg)

A *Philips* produz os inversores [7404](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/SN74HC04_Philips.pdf). 

### 2.3.4 Os circuitos lógicos digitais

Os circuitos lógicos são classificados em dois tipos: **circuitos combinacionais** e **circuitos sequenciais**.  

Os circuitos combinacionais são aqueles cuja saída depende unicamente da combinação das entradas em um instante.  

Os circuitos sequenciais possuem **memória**, ou seja, a saída em um determinado instante depende das entradas naquele instante e da saída em um instante anterior.  

Descrevendo os circuitos lógicos algebricamente:

1. Todo circuito lógico pode ser descrito algebricamente
2. Numerar todas as portas lógicas e inversores
3. Identificar todas as variáveis de entrada pela sua representação simbólica
4. Definir na saída de cada porta e inversor a sua expressão lógica em função das suas respectivas entradas – não esquecer de usar (), [] ou {} se necessário
5. Proceder da entrada do circuito até a saída.

![Exemplo de circuitos combinacionais](/sisdig_aulas/images_sisdig/exemplo_circuitos.jpg)

A descrição algébrica dos circuitos do exemplos está mostrada na saída dos respectivos circuitos.  

Cada saída pode ser definida como **uma função das entradas**.  

Logo, a cada saída corresponde **uma** tabela verdade. 
___
**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**  
**Álgebra booleana e portas lógicas: [próximo>>](algebraPortasLogicas1.md)**  
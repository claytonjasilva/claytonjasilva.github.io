# 2. Álgebra Booleana e Portas Lógicas

## 2.1 Álgebra Booleana
### 2.1.1 Proposição e valor lógico
A base do nosso estudo é o conteito de **proposição**:  

Oração declarativa **afirmativa ou negativa**, sobre a qual se pode atribuir um e somente um **valor lógico**: (*F*) falso ou (*V*) verdadeiro. **Abstrairemos como padrão *F* como *0* e *V* como *1***.

Também conhecida como sentença fechada.  

**Observação:** sentenças interrogativas, exclamativas e imperativas não são proposições.  

A proposição que só contém uma afirmação ou negação é chamada de **proposição simples**.  

As proposições simples podem ser concatenadas, gerando as **proposições compostas**. 

A concatenação das proposições simples é realizada através de **operadores lógicos**, os quais indicam **operações lógicas**.  

As operações lógicas **primitivas** são: **conjunção**, **disjunção** e **negação**.   

### 2.1.2 Operação lógica de CONJUNÇÃO - *AND*  
A proposição composta *S* resultante da operação de conjunção de duas proposições simples *p* e *q* é indicada por
```
S = p.q
```
. Lê-se *'S é igual a p **e** q'*, cujo resultado depende dos valores lógicos de *p* e de *q*, definido pela tabela  

| *p.q* | *p* | *q* |
| ----- | --- | --- |
| 0 | 0 | 0 |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 1 | 1 |

### 2.1.3 Operação lógica de DISJUNÇÃO - *OR*  
A proposição composta *S* resultante da operação de conjunção de duas proposições simples *p* e *q* é indicada por
```
S = p+q
```
. Lê-se *'S é igual a p **ou** q'*, cujo resultado depende dos valores lógicos de *p* e de *q*, definido pela tabela  

| *p+q* | *p* | *q* |
| ----- | --- | --- |
| 0 | 0 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |
| 1 | 1 | 1 |

### 2.1.4 Operação de inverção lógica, NEGAÇÃO, - *NOT*  
A proposição composta *S* resultante da operação **unária** (ou seja, que só possui um operando) de negação de uma proposição simples
*p* é indicada por
```
S = ~p
```
. Lê-se *'S é igual **não** p'*, cujo resultado depende dos valores lógicos de *p*, definido pela tabela  

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

### 2.1.2 Expressões lógicas ou booleanas
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

## 2.2 Tabela-verdade  
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

___
**Álgebra booleana e portas lógicas: [próximo>>](algebraPortasLogicas1.md)**  
**[home](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  

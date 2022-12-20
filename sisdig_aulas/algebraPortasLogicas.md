# 2. Álgebra Booleana e Portas Lógicas

## 2. Álgebra Booleana
### 2.1 Proposição e valor lógico
A base do nosso estudo é o conteito de **proposição**:  
Oração declarativa **afirmativa ou negativa**, sobre a qual se pode atribuir um e somente um **valor lógico**: falso ou verdadeiro. 
Também conhecida como sentença fechada.  
**Observação:** sentenças interrogativas, exclamativas e imperativas não são proposições.  


A proposição que só contém uma afirmação ou negação é chamada de **proposição simples**.  
As proposições simples podem ser concatenadas, gerando as **proposições compostas**. 
A concatenação das proposições simples é realizada através de **operadores lógicos**, os quais indicam **operações lógicas**.  
As operações lógicas **primitivas** são: **conjunção**, **disjunção** e **negação**.   

**CONJUNÇÃO**  
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

**DISJUNÇÃO**  
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

**NEGAÇÃO**  
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




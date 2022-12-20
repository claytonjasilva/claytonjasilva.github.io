# 2. Álgebra Booleana e Portas Lógicas

## 2.2 Portas lógicas
Os circuitos digitais são circuitos elétricos que utilizam como componentes elementos básicos digitais, isto é,
que operam com dois níveis de sinais lógicos elétricos (H, de *high*, alto) e (L, de *low*, baixo).   
O nível H é abstraído matematicamente como 1 e o nível L, como 0.  
**De ponto de vista elétrico, o valor de *H* e de *L* podem variar, dependendo da tecnologia de construção do componente (discutiremos mais tarde)**.  
Além dos sinais lógicos, os circuitos digitais utilizam também sinal elétrico de alimentação de tensão contínua (normalmente sinalizada como *V<sub>CC</sub>*) e sinal de referência de tensão, terra  (*GROUND*).  
Os componentes elétricos básicos dos circuitos digitais são as **portas lógicas** ou ***gates***. São dispositivos eletrônicos com **duas ou mais entradas** que apresentam **uma saída** em um instante de tempo resultante da operação lógica das entradas naquele instante.  
As portas lógicas básicas são: ***and***, ***or*** e ***not**.

### 2.2.1 Portas *or*
Implementam a operação de disjunção. A figura apresenta a sua representação simbólica e sua respectiva tabela verdade.

![Tabela verdade e representação da porta *or*](/sisdig_aulas/images_sisdig/or.jpg)

### 2.2.2 Portas *and*
Implementam a operação de conjunção. A figura apresenta a sua representação simbólica e sua respectiva tabela verdade.

![Tabela verdade e representação da porta *and*](/sisdig_aulas/images_sisdig/and.jpg)

### 2.2.3 Inversor *not*
Implementam a operação de negação. A figura apresenta a sua representação simbólica e sua respectiva tabela verdade.

![Tabela verdade e representação do inversor *not*](/sisdig_aulas/images_sisdig/not.jpg)

### 2.2.4 Os circuitos lógicos digitais
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

[home](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)

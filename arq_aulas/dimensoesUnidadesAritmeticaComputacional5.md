## 1.8 Aritmética computacional

### 1.8.1 Adição e subtração de bits
Sejam dois bits, a soma é dada pela tabela  

| + | 0 | 1 |
| - | - | - |
| 0 | 0 | 1 |
| 1 | 1 | **1**0 | 

O bit mais significativo 1 resultante da operação *1 + 1* é chamado de ***carry*** ou 'vai um'.

Sejam dois bits, a subtração é dada pela tabela  

| - | 0 | 1 |
| - | - | - |
| 0 | 0 | **1**0 |
| 1 | 1 | 0 | 

O bit mais significativo 1 resultante da operação *0 - 1* é chamado de ***borrow*** ou 'toma um'.

### 1.8.2. Adição e subtração de números binários

**ADIÇÃO**

A adição de dois números binários *A* e *B* de *m* bits, ou seja, *A = a<sub>m-1</sub> ... a<sub>1</sub> a<sub>0</sub>* e *B = b<sub>m-1</sub> ... b<sub>1</sub> b<sub>0</sub>*, *A+B*, é obtida por
1. Realizar a operação **bit a bit** do menos ao mais significativo (da direita para a esquerda)
2. Aplica-se a tabela anterior de adição bit a bit
3. Se houver bit 1 de *carry* transporta-se para a soma dos bits seguintes mais significativos (à esquerda)
4. Repete-se o processo até alcançar o bit mais significativo.

Em **aritmética de complemento de 1**, um *carry* gerado pela adição dos bits **mais significativos** (ou seja, da extrema esquerda) é somado ao **bit menos significativo** (da extrema direita) do resultado - esse processo é chamado de **transporte de contorno**.  

Em **aritmética de complemento de 2**, um *carry* gerado pela adição dos bits **mais significativos** (ou seja, da extrema esquerda) é apensas **descartado**.

**SUBTRAÇÃO**

A subtração de dois números binários *A* e *B* de *m* bits, ou seja, *A = a<sub>m-1</sub> ... a<sub>1</sub> a<sub>0</sub>* e *B = b<sub>m-1</sub> ... b<sub>1</sub> b<sub>0</sub>*, *A-B*, é obtida por
1. Se o minuendo A for menor do o subtraendo B inverter a operação - realizar *B-A* - e tomar o resultado como negativo 
2. Realizar a operação **bit a bit** do menos ao mais significativo (da direita para a esquerda)
3. Aplica-se a tabela anterior de subtração bit a bit
4. Se houver bit 1 de *borrow* transporta-se para a subtração dos bits seguintes mais significativos (à esquerda)
5. Repete-se o processo até alcançar o bit mais significativo.

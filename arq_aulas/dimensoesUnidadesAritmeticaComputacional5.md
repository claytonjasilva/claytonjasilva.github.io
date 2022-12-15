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

A adição de dois números binários **puros** *A* e *B* de *m* bits, ou seja, *A = a<sub>m-1</sub> ... a<sub>1</sub> a<sub>0</sub>* e *B = b<sub>m-1</sub> ... b<sub>1</sub> b<sub>0</sub>*, *A+B*, é obtida por
1. Realizar a operação **bit a bit** do menos ao mais significativo (da direita para a esquerda)
2. Aplica-se a tabela anterior de adição bit a bit
3. Se houver bit 1 de *carry* transporta-se para a soma dos bits seguintes mais significativos (à esquerda)
4. Repete-se o processo até alcançar o bit mais significativo.

**SUBTRAÇÃO**

A subtração de dois números binários **purros** *A* e *B* de *m* bits, ou seja, *A = a<sub>m-1</sub> ... a<sub>1</sub> a<sub>0</sub>* e *B = b<sub>m-1</sub> ... b<sub>1</sub> b<sub>0</sub>*, *A-B*, é obtida por
1. Realizar a operação **bit a bit** do menos ao mais significativo (da direita para a esquerda)
2. Aplica-se a tabela anterior de subtração bit a bit
3. Se houver bit 1 de *borrow* transporta-se para a subtração dos bits seguintes mais significativos (à esquerda)
4. Repete-se o processo até alcançar o bit mais significativo.

**Observações gerais sobre adição e subtração de binários puros**
1. O resultado de uma operação de operandos de mesmo sinal que resultar **mais bits do que o tamanho da palavra** => **OVERFLOW**.
2. Na operação de subtração, se o minuendo A for menor do o subtraendo B deve-se inverter a operação - realizar *B-A* - e tomar o resultado como negativo. 

**ADIÇÃO E SUBTRAÇÃO EM COMPLEMENTO DE 1 E COMPLEMENTO DE 2**
1. As operações de subtração em complemento de 1 e 2 são tratadas como adição, da forma *A - B = A + (-B)*
2. **Se os operandos tiverem o mesmo sinal**, no *overflow* o bit mais significativo da palavra será de sinal trocado
3. **Se os operandos tiverem sinal trocado** não haverá *overflow* 
4. No caso de bits diferentes dos operandos, **nas operações de complemento de 1**, se houver um bit de *carry* após o bit de sinal ele é acrescido ao bit menos significativo do resultado
5. No caso de bits diferentes dos operandos, **nas operações de complemento de 2**, se houver um bit de *carry* após o bit de sinal ele é ignorado

**ADIÇÃO E SUBTRAÇÃO EM EXCESSO m-1**
1. Realiza-se a **adição** normalmente e **subtrai-se o resultado** do excesso na sau representação binária
2. Realiza-se a **subtração** normalmente s **soma-se o resultado** ao excesso na sua representação binária

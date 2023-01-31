# 5. Circuitos aritméticos - somadores binários 

Sistemas digitais são projetados para realizar uma variedade de operações aritméticas com bits.  
Uma das operações mais comuns é a **adição binária**.

## 5.1 Meio-somador
Conforme já discutido anteriormente, a operação de adição de dois bits é dada por  
| + | 0 | 1 |
| - | - | - |
| **0** | 0 | 1 |
| **1** | 1 | **1**0 |

Uma abordagem para projetar um circuito somador é modular o circuito.  
O módulo relativo à soma dos bits menos significativos de dois números A e B de *n* bits é chamado de **meio-somador**.  
O circuito meio-somador utiliza que
BIT<sub>0</sub>=1 + BIT<sub>1</sub>=1 resulta CARRY=1, SOMA=0  
A tabela verdade da soma de dois bits BIT<sub>0</sub> e BIT<sub>1</sub> é dada por
| A | B | SOMA | CARRY |
| - | - | ---- | ----- |
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |





## 5.2 Somador completo

## 5.3 Somador de *n* bits 

## 5.4 CI somador

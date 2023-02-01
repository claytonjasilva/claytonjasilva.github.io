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

Obtendo a expressão booleana e minimizando não é difícil obter que  
$SOMA=(\bar A \.B+A.\bar B \)= A \oplus B$  
e  
$CARRY = A.B$  
Logicamente o meio-somador será representado simplesmente pela figura abaixo  

Observando o meio-somador verifica-se que não possui uma entrada de *carry*. Possui somente dois bits de entrada.
Portanto, para implementação modular de um somador é necessário um outro módulo, chamado de **somador-completo**.

## 5.2 Somador completo
O somador completo apresenta o comportamento descrito pela tabela verdade apresentada abaixo  
| A | B | C<sub>in</sub> | SOMA | C<sub>out</sub> |
| - | - | -------------- |---- | ----- |
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

, onde C<sub>in</sub> e C<sub>out</sub> representam respectivamente *carry* de entrada e *carry* de saída.  
Logicamente o somador completo será representado pela figura abaixo.  
Similarmente ao caso do meio-somador, pode-se obter a expressão booleana relativa a cada uma das saídaso somador completo.  
Dela pode-se obter os respectivos circuitos digitais, implementados por portas lógicas.  

## 5.3 Somador de *n* bits 
Um somador de dois números binários A e B de *n* bits pode ser implementado modularmente,
utilizando-se o **cascateamento** de **1 meio-somador** e ***n-1* somadores completos**.    
O meio-somador realiza a operação de adição dos dígitos binários menos significativos de A e B, A<sub>0</sub> e B<sub>0</sub>.  
O *carry* do meio-somador será **transportado** para o módulo seguinte.  
A soma do meio-somador é o dígito menos significativo da soma resultante, S<sub>0</sub>.  
O meio-somador é cascateado com um somador commpleto.
As entradas A e B do somador completo recebem os respectivos dígitos do número binário a ser somado, A<sub>1</sub> e B<sub>1</sub>.
No módulo do somador completo, a entrada de *carry in* recebe o bit transportado do módulo do meio-somador.  
A saída do primeiro somador completo é S<sub>1</sub>.  
Nos próximos módulos a arquitetura se repete como no primeior somador completo.  
A figura ilustra o modelo lógico.  

Observe que o dígito mais significativo da soma é *carry* do último módulo do somador.

## 5.4 CI somador

### 5.4.1 Circuitos integrados digitais (CIs)
O **chip** é um conjunto de elementos eletrônicos integrados em um substrato de semicondutor.  
Os elementos integrados são **encapsulados** em uma embalagem protetora de um determinado tipo (por exemplo, DIP).  
Dependendo da quantidade de elementos integrados em um único substrado define-se o **grau de integração** do chip.  
Os graus de integração são:  
- SSI, de *small scale integration*,
- MSI, de *medium scale integration*,
- LSI, de *large scale integration*,
- VLSI, de *very large scale integration*,
- ULSI, de *ultra large scale integration*,
- GSI, de *giga scale integration*.  

As figuras abaixo ilustram a orgnização do chip.

A complexidade pode ser definida pelo número de portas que são integradas no substrato.  
A tabela apresenta o grau de complexidade e o respectivo número de portas.

| Complexidade | Número de portas |
| ------------ | ---------------- |
| SSI | menor do que 12 |
| MSI | 12 a 99 |
| LSI | 100 a 9.999 |
| VLSI | 10.000 a 99.999 |
| ULSI | 100.000 a 999.999 |
| GSI | maior do que 1.000.000 |

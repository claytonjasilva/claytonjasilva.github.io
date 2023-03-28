## 5.5 Subtratores
Embora não sejam comumente usados, os circuitos subtratores são interessantes. Recordando, a tabela abaixo apresenta a subtração binária.  

| - | 0 | 1 |
| - | - | - |
| **0** | 0 | 1 |
| **1** | **1**1 | 0 |

**A subtração binária normalmente é realizada pela adição do minuendo ao complemento de 1 ou complemento de 2 do subtraendo.**    
Normalmente não se implementa computacionalmente a operação de subtração, no entanto caso seja necessário implementar o circuito 
pode-se adotar o mesmo método da adição e utilizar o **meio-subtrator** e **subtrator completo**.  

A tabela verdade do meio-subtrator será

| A | B | A-B | BORROW |
| - | - | - | - |
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |

Obtendo a expressão booleana e minimizando não é difícil obter que  

$$ A-B=(\bar A \.B+A.\bar B \)= A \oplus B $$  

e

$$ BORROW = \bar A \.B $$  

Logicamente o meio-somador será representado simplesmente pela figura abaixo  
![Meio-subtrator](/sisdig_aulas/images_sisdig/meio-subtrator.jpg)

O circuito com portas lógicas está apresentado abaixo.  
![Circuito meio-subtrator](/sisdig_aulas/images_sisdig/circuitomeiosubtrator.jpg)

De modo similar à construção do somador completo, pode-se desenvolver o subtrator completo, como 
descrito pela tabela verdade apresentada abaixo  

| A | B | B<sub>in</sub> | DIF | B<sub>out</sub> |
| - | - | -------------- |---- | ----- |
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 1 | 1 |

, onde B<sub>in</sub> e B<sub>out</sub> representam respectivamente *borrow* de entrada e *borrow* de saída.  

Logicamente o somador completo será representado por uma figura similar à do somador-completo, com as devidas substituições.  

Um subtrator de dois números binários A e B de *n* bits pode ser implementado modularmente,
utilizando-se o **cascateamento** de **1 meio-subtrator** e ***n-1* subtratores completos**.    

___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**    







# 7. Circuitos multiplexadores

## 7.1 Conceito
Os circuitos multiplexadores são também chamados de **seletores de dados**.  
São circuitos lógicos que aceitam vários dados de entrada e selecionam um deles em um determinado instante.  
Possuem dois tipos de entradas:
- Entradas de **dados**.
- Entradas **de seleção ou de endereço**.  
Possuem **uma saída**.
Atuam como uma **chave digital**.
A figura ilustra.  
![Circuito multiplexador](/sisdig_aulas/images_sisdig/multiplexador.jpg)

Obviamente, para ser possível selecionar *N* entradas de dados são necessárias pelo menos *M* entradas seletoras, de tal modo que *2<sup>M</sup>=N*.  
Podemos analisar o comportamento a partir de um multiplexador com duas entradas de dados. É suficiente uma entrada seletora.  
A tabela verdade do circuito deverá ser:
| I<sub>1</sub> | I<sub>0</sub> | S | Z |
| - | - | - | - |
| 0 | 0 |  0 | 0 |
| 0 | 0 |  1 | 0 |
| 0 | 1 |  0 | 1 |
| 0 | 1 |  1 | 0 |
| 1 | 0 |  0 | 0 |
| 1 | 0 |  1 | 1 |
| 1 | 1 |  0 | 1 |
| 1 | 1 |  1 | 1 |

Independentemente da análise da tabela verdade, por inspeção, observe que sempre *S=0* a saída é igual I<sub>0</sub>.  
Sempre *S=1* a saída é igual I<sub>1</sub>. Ou seja, a tabel verdade pode ser dada por  
| S | Z |
| - | - |
| 0 | I<sub>0</sub> |
| 1 | I<sub>1</sub> |

Analisando-se a tabela verdade não é difícil verificar que a expressão lógica de $Z=I_0.\bar{S}+I_1.S$, o que resulta no circuito apresentado pela figura.  
![Circuito multiplexador de 2 entradas](/sisdig_aulas/images_sisdig/multiplexador2entradas.jpg)

Similarmente pode-se projetar um multiplexador de 4 entradas. Utilizando portas lógicas será obtido o circuito da figura.  
![Circuito multiplexador de 4 entradas](/sisdig_aulas/images_sisdig/multiplexador4entradas.jpg)

## 7.2 Circuito Integrado de multiplexação
A figura ilustra um circuito integrado 74151, de 8 entradas.   
![Circuito multiplexador de 8 entradas](/sisdig_aulas/images_sisdig/multiplexador8entradas.jpg)

___
**[home](/sisdig_aulas.md)**  



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
Sempre *S=1* a saída é igual I<sub>1</sub>. Ou seja, a tabela verdade pode ser dada por  

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

O circuito integrado também possui uma entrada de controle *enable*, assim a tabela verdade relativa ao CI é

| $\bar{E}$ | S<sub>2</sub> | S<sub>1</sub> | S<sub>0</sub> | $\bar{Z}$ | Z |
| - | - | - | - | - | - |
| H | X | X | X | H | L |
| L | L | L | L | $\bar{I}_0$ | I<sub>0</sub> |
| L | L | L | H | $\bar{I}_1$ | I<sub>1</sub> |
| H | X | X | X | $\bar{I}_2$ | I<sub>2</sub> |
| H | X | X | X | $\bar{I}_3$ | I<sub>3</sub> |
| H | X | X | X | $\bar{I}_6$ | I<sub>6</sub> |
| H | X | X | X | $\bar{I}_5$ | I<sub>5</sub> |
| H | X | X | X | $\bar{I}_6$ | I<sub>6</sub> |
| H | X | X | X | $\bar{I}_7$ | I<sub>7</sub> |

Além de possuir uma saída invertida do sinal de entrada multiplexado.
O [*datasheet* completo do 74151](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/SN74HC151N_Texas.pdf)
apresenta os detalhes elétricos e mecânicos do CI, além das entradas e saída lógicas.  
Observe que o CI da *Texas INstruments* possui alguma modificação da identificação da pinagem do esquema lógico apresentado acima.

## 7.3 Aplicações com multiplexadores
Os multiplexadores podem ser usados para algumas aplicações específicas:
- Conversor série-paralelo
- Contador
- Gerador de funções

### 7.3.1 Mux como Conversor série-paralelo
A figura abaixo ilustra o projeto de um conversor série-paralelo utilizando um mux.
![Conversor série-paralelo com multiplexador](/sisdig_aulas/images_sisdig/conversorserieparalelo.jpg)
O princípio geral de funcionamento é o seguinte:  
1. As entradas de dados podem ser conectadas as saídas de um registrador.
2. As entradas seletoras S<sub>2</sub>S<sub>1</sub>S<sub>0</sub> recebem três bits que determinam a entrada a trasferir,
variando crescentemente de 000, 001 até 111.
3. A entrada de controle *enable* está ativada no nível baixo.
4. Conforme a variação dos bits de seleção a respectiva entrada lógica (saída do registrador) é transferida para a saída *Z* do mux,
assim como o valor invertido transferido para a saída $\bar{Z}$.
5. Se as entradas seletoras variarem crescentemente ou decrescentemente os bits do registrador serão também transferidos serialmente na ordem correspondente,
do bit menos para o mais significativo ou vice-versa.  
6. Quando o controle *enable* está no nível alto (H), o conversor deixa de operar. 

A conversão série-paralelo pode ser **assíncrona**, ou seja, um circuito ou uma pessoa ativa a sequência de seleção, portando não é automática a conversão.  
Por outro lado, automaticamente, operando de acordo com um sinal de *clock* (relógio), os bits das entradas seletoras podem variar.  
A figura ilustra esse caso.  
![Conversor série-paralelo com multiplexador síncrono](/sisdig_aulas/images_sisdig/conversorserieparalelosincrono.jpg)
Observe que o período do sinal *S<sub>0</sub>* é a metade do período do sinal *S<sub>1</sub>*. Este, por sua vez, a metade do período do sinal *S<sub>2</sub>*.  
O período de *S<sub>0</sub>* corresponde ao tempo em que cada bit do registrador é transferido serialmente.


___
**[home](/sisdig_aulas.md)**  



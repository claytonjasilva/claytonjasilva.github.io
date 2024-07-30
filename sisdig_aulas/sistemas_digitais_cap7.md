# Cap 7. Circuitos multiplexadores

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

Analisando-se a tabela verdade não é difícil verificar que a expressão lógica de $Z=I_0.\bar{S}+I_1.S$.  

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

O [*datasheet* completo do 74151](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/sistemas_digitais_datasheet_SN74HC151N_Texas.pdf)
apresenta os detalhes elétricos e mecânicos do CI, além das entradas e saída lógicas.  

Observe que o CI da *Texas INstruments* possui alguma modificação da identificação da pinagem do esquema lógico apresentado acima.

## 7.3 Aplicações com multiplexadores

Os multiplexadores podem ser usados para algumas aplicações específicas, como:

- Conversor paralelo-série
- Gerador de funções

### 7.3.1 Mux como Conversor paralelo-série

A figura abaixo ilustra o projeto de um conversor paralelo-série utilizando um mux.
![Conversor paralelo-série com multiplexador](/sisdig_aulas/images_sisdig/conversorparaleloserie.jpg)

O princípio geral de funcionamento é o seguinte:  

1. As entradas de dados podem ser conectadas as saídas de um registrador (portanto, bits simultaneamente armazenados).  
A conexão de um registrador poderia ser feita a um barramento paralelo. Nesse caso, os bits seriam simultaneamente transferidos.  
Por outro lado, pode-se desejar transferir os bits por um barramento serial.  
2. As entradas seletoras S<sub>2</sub>S<sub>1</sub>S<sub>0</sub> recebem três bits que determinam a entrada a transferir,
variando crescentemente de 000, 001 até 111.
3. A entrada de controle *enable* está ativada no nível baixo.
4. Conforme a variação dos bits de seleção a respectiva entrada lógica (saída do registrador) é transferida para a saída *Z* do mux,
assim como o valor invertido transferido para a saída $\bar{Z}$.
5. Se as entradas seletoras variarem crescentemente ou decrescentemente os bits do registrador serão também transferidos serialmente na ordem correspondente,
do bit menos para o mais significativo ou vice-versa.  
6. Quando o controle *enable* está no nível alto (H), o conversor deixa de operar. 

A conversão paralelo-série pode ser **assíncrona**, ou seja, um circuito ou uma pessoa ativa a sequência de seleção, portanto não automaticamente. 

Por outro lado, automaticamente, operando de acordo com um sinal de *clock* (relógio), os bits das entradas seletoras podem variar.  

Nesse caso, as entradas seletoras operam alimentadas por um circuito que se designa **contador paralelo síncrono**.  
![Saída de um contador síncrono](/sisdig_aulas/images_sisdig/contadorsincrono.jpg)    

Verifique que:

- O sinal de referência é o sinal de *clock*
- O sinal A possui metade da frequência do sinal de *clock*
- O sinal B possui metade da frequência do sinal A  

Esses sinais são gerados por circuitos também chamados de **contadores paralelos** porque produzem os bits simultaneamente. Pode operar contagem crescente ou decrescente.  

A tabela verdade é a seguinte:

| Contagem | B | A | Clock | 
| - | - | - | - |
| 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 |
| 2 | 0 | 1 | 0 |
| 3 | 0 | 1 | 1 |
| 4 | 1 | 0 | 0 |
| 5 | 1 | 0 | 1 |
| 6 | 1 | 1 | 0 |
| 7 | 1 | 1 | 1 |

A figura ilustra a aplicação do mux como conversor paralelo-série síncrono, utilizando um sinal produzido por um contador paralelo.  

O sinal de *clock* pode alimentar a entrada seletora menos significativa.  
![Conversor paralelo-série com multiplexador síncrono](/sisdig_aulas/images_sisdig/conversorserieparalelosincrono.jpg)  

Observe que o período do sinal *S<sub>0</sub>* é a metade do período do sinal *S<sub>1</sub>*. Este, por sua vez, a metade do período do sinal *S<sub>2</sub>*.  

O período de *S<sub>0</sub>* corresponde ao tempo em que cada bit do registrador é transferido serialmente.

### 7.3.2 Mux como gerador de funções

A figura abaixo ilustra o projeto de um gerador de funções utilizando um mux.  
![Gerador de funções com multiplexador](/sisdig_aulas/images_sisdig/geradorfuncoes.jpg)  

O princípio geral de funcionamento é o seguinte:  

- As entradas seletora são as variáveis booleanas independente da função
- Cada combinação das entradas corresponde à conexão da entrada de dados com 0 ou 1  
  
A tabela verdade abaixo é a tabela referente à função obtida pelo circuito.  

| A | B | C | Z | 
| - | - | - | - |
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

## 7.4 Demultiplexador

Os demultiplexadores realizam a operação inversa do mux. A figura ilustra.  
![Demultiplexador](/sisdig_aulas/images_sisdig/demultiplexador.jpg)  

Algumas operações propiciadas pelos demux são as inversas do multiplexador, como **conversor série-paralelo**.  
![Demultiplexador](/sisdig_aulas/images_sisdig/conversorserieparalelo.jpg)  

___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  

## 9.3 Máquina de estados

### 9.3.1 O diagrama de estados

Existem técnicas para analisar e projetar circuitos sequenciais.  
Uma das técnicas consiste na utilização de **diagramas de estados**.  
De modo geral, os circuitos sequenciais são classificados da seguintes forma:  
- Detectores de sequência de códigos;
- Contadores e registradores;
- Geradores de códigos;
- Sistemas controladores.

O êxito de projetos e análise de máquinas sequenciais depende fortemente dos objetivos e das técnicas empregadas.  
Uma delas é a técnica de diagrama de estados.  
O **estado** define um **conjunto de informações sobre o sistema** em um determinado momento.  
Uma máquina que se encontra em um determinado estado pode passar a outro quando um **evento** ocorre.  
A mudança de estados define uma **transição** de estados.  
O diagrama de estados representa o **comportamento dinâmico** de uma máquina sequencial, apresentando os seguintes elementos:  
- **Estados** possíveis, definidos por um **rótulo**;
- **Transições** possíveis, indicadas por uma seta que representa **origem-destino**;
- **Eventos**, definidos pelas variáveis de entrada, que produzem a transição de estados do sistema;
- **Saídas**, definidas por **variáveis** - variáveis de estado - cujos valores são alterados na transição do estado de origem para o estado de destino.

**O diagrama de estados para as máquinas sequenciais é equivalente à tabela verdade para as máquinas combinacionais.**  
Seja a figura.

![Diagrama de estados](/sisdig_aulas/images_sisdig/diagramaestados.jpg)

A figura ilustra um típico diagrama de estados e seus elementos:
1. Todo estado é definido pelo **símbolo de identificação** do estado e respectivo **código**;
2. Em relação a um estado de **interesse** o diagrama indica o seu **estado predecessor** pelo sentido da seta de **transição de estados**;
3. Toda transição requer **condições de entrada** para o estado de interesse;
4. Toda transição entre estados se refere **às saídas no estado predecessor para uma entrada condicional**.

O **exemplo 1** ilustra o funcionamento de uma máquina sequencial com a utilização de diagrama de estados.

![Exemplo diagrama de estados](/sisdig_aulas/images_sisdig/exdiagramaestados.jpg)

Entendendo o comportamento do sistema:
1. O estado **a** produz saída *00*, ou seja *A=0*, *B=0*, que definem o estado.
2. Quando uma variável de entrada *X* assume o valor *0*, o sistema permanece no estado atual, *00*.
3. Quando *X* passar ao valor *1* será produzida uma transição do estado **a** para o estado **b** -
a variável *B* passa de *0* a *1* e a variável *A* não se altera, permanecendo igual a *0*.  
4. Do estado **b**, se a entrada *X* passar a *1* será produzida uma transição para o estado **c** -
a variável *B* passa de *1* a *0* e a variável *A* passa de *0* a *1* - em caso contrário, se *X* = 0, o sistema permanece no estado.  
5. Do estado **c**, se a entrada *X* passar a *1* será produzida uma transição para o estado **d** -
a variável *B* passa de *0* a *1* e a variável *A* permanece igual a *1* - em caso contrário, se *X* = 0, o sistema permanece no estado.  
6. Do estado **d** uma nova entrada *X=1* leva a máquina a retornar ao estado inicial *A=0,B=0*, renovando o ciclo.  
  
O comportamento da máquina sequencial poderá ser síncrono ou assíncrono.  
No caso síncrono, a transição ocorre dependendo também de um sinal de entrada do clock.  
Além de *X* a transição depende da mudança do valor do sinal de clock de nível baixo (*LOW*) para alto (*HIGH*).  
Essa variação do sinal de clock é chamada de **gatilhamento pela borda**.   
Ou seja, no exemplo, mantido *X=1*, as transições entre estados *00-01-10-11* ocorrerão sempre que houver a transição do clock.  
No caso de *X=0*, independentmente da transição do clock, a saída será mantida no estado em que se encontrar quando *X* for resetado.  

![Máquina sequencial - diagrama](/sisdig_aulas/images_sisdig/maquinasequencial.jpg)

O **exemplo 2** de diagrama de estados está apresentado na figura.

![Exemplo diagrama de estados](/sisdig_aulas/images_sisdig/ex2diagramaestados.jpg)

No novo exemplo, ao invés do uso de símbolos **a**,...,**d** para designar os estados, utiliza-se o próprio código que define cada estado.  
Como o código já está definido, omite-se no diagrama as saídas correspondentes às variáveis de estado.  
No diagrama, apresenta-se uma nova variável *Z*, cujo valor de saída está associada a cada transição de estado, embora não se configure como variável deestado.
Um esquema em bloco do circuito está apresentado na figura.  

![Máquina sequencial - diagrama](/sisdig_aulas/images_sisdig/maquinasequencial2.jpg)

### 9.3.2 Análise de circuitos sequenciais síncronos

Nos processos de análise de circuitos sequenciais duas determinações devem ser feitas:  
(1) Qual é a classe do circuito a ser analisado; e  
(2) O que deve resultar do processo de análise.  
Em outras palavras, o problema requer um **circuito combinacional** ou **sequencial**?  
Se for um circuito sequencial, ele é **síncrono** ou **assíncrono**?  
Qual é a informação que deve ser obtida da análise?  

A partir daí, na análise será necessário:  
(1) Identificar os **estados**  
(2) Quais são as **entradas** relacionadas com as mudanças de estado  
(3) Quais são as **sequências de transições**.

Para a análise, uma ferramenta importante é o **mapa para cada próximo estado** a partir das saídas do estado anterior.  
O mapa é muito útil para construir os circuitos.

Vamos tomar **exemplo 1**.  
O comportamento da **saída *A*** da máquina sequencial pode ser representado pelo mapa.  

| *AB* | *00* | *01* | *11* | *10* |
| - | - | - | - | - |
| ***X*** | - | - | - | - |
| ***0*** | 0 | 0 | 1 | 1 |
| ***1*** | 0 | 1 | 0 | 1 |

O comportamento representa o comportamento da saída *A* em função do estado predecessor e da variável *X*.  
Observe que quando *X=0*, o estado permace inalterado. Nesse caso, o valor da variável  *A* após a transição de clock não se altera.  
Assim, se *A* for igual a *0* se manterá *0* na transição do clock, portanto, no mapa, a representação da saída é *0*.  
Por outro lado, se *A* for igual a *1* se manterá *1* e, no mapa, a saída deverá ser representada por *1*.
Quando *X=1*, a análise deve levar em consideração as transições que ocorrem entre estados, de modo que a saída será indicada por 1
nas transições *01* para *10* e de *10* para *11*. 

Em raciocínio similar, pode-se definir o comportamento da variável de estado *B*.  
O comportamento da **saída *B*** da máquina sequencial pode ser representado pelo mapa.  

| *AB* | *00* | *01* | *11* | *10* |
| - | - | - | - | - |
| ***X*** | - | - | - | - |
| ***0*** | 0 | 1 | 1 | 0 |
| ***1*** | 1 | 0 | 1 | 0 |

Procedimento similar pode ser adotado para análise do diagrama de estados do **exemplo 2**.  
O comportamento da **saída *A*** da máquina sequencial pode ser representado pelo mapa.  

| *AB* | *00* | *01* | *11* | *10* |
| - | - | - | - | - |
| ***XZ*** | - | - | - | - |
| ***00*** | 0 | 0 | 0 | 1 |
| ***01*** | 0 | 1 | 0 | 0 |
| ***11*** | 0 | 0 | 0 | 1 |
| ***10*** | 0 | 1 | 0 | 0 |

O comportamento da **saída *B*** da máquina sequencial pode ser representado pelo mapa.  

| *AB* | *00* | *01* | *11* | *10* |
| - | - | - | - | - |
| ***XZ*** | - | - | - | - |
| ***00*** | 0 | 0 | 0 | 0 |
| ***01*** | 0 | 1 | 1 | 1 |
| ***11*** | 0 | 0 | 0 | 0 |
| ***10*** | 1 | 1 | 0 | 0 |

O comportamento da **saída *Z*** da máquina sequencial pode ser representado pelo mapa.  

| *AB* | *00* | *01* | *11* | *10* |
| - | - | - | - | - |
| ***XZ*** | - | - | - | - |
| ***00*** | 0 | 1 | 1 | 1 |
| ***01*** | 0 | 1 | 1 | 1 |
| ***11*** | 0 | 0 | 1 | 0 |
| ***10*** | 1 | 0 | 1 | 0 |

Identificado o mapa de próximo estado para cada uma das saídas, é possível 
**escrever a expressão booleana para cada saída de próximo estado**.  
A escrita da expressão é similar à utilização do mapa K.   
No exemplo 1, os mapas relativos às saídas *A* e *B* são

![Máquina sequencial - diagrama](/sisdig_aulas/images_sisdig/mapakexemplo1diagrama.jpg)

Dos quais se obtém as expressões:  
$$A=A.\bar{X}+\bar{A}.B.X+A.\bar{B}.X$$
$$B=B.\bar{X}+\bar{A}.\bar{B}.X+A.B.X$$

É importante lembrar que a variável de saída, à esquerda da equação, é o valor atual e à direita da equação é o seu valor anterior.

No exemplo 2, os mapas relativos às saídas *A*, *B* e *Z* são

![Máquina sequencial - diagrama](/sisdig_aulas/images_sisdig/mapakexemplo2diagrama.jpg)

Dos quais se obtém as expressões:  
$$A=A.\bar{B}.\bar{X}.\bar{Z}+\bar{A}.B.\bar{X}.Z+A.\bar{B}.X.Z+\bar{A}.B.X.\bar{Z}$$
$$B=B.\bar{X}.Z+A.\bar{X}.Z+\bar{A}.X.\bar{Z}$$
$$Z=A.B+B.\bar{X}+A.\bar{X}+\bar{A}.\bar{B}.X.\bar{Z}$$

___
**[<<anterior](circuitosSequenciais.md)**  
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  



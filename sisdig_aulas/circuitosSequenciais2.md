## 5.2 Máquina de estados

### 5.2.1 O diagrama de estados

Existem técnicas para analisar e projetar circuitos sequenciais.  
Uma das técnicas consiste na utilização de **diagramas de estados**.  
De modo geral, os circuitos sequenciais são classificados da seguintes forma:  
- Detectores de sequência de códigos;
- Contadores e registradores;
- Geradores de códigos;
- Sistemas controladores.

O êxito de projetos e análise de máquinas sequenciais depende fortemente dos objetivos e das técnicas empregadas.  
Uma delas é a técnica de diagrama de estados.  
O diagrama de estados descreve as possíveis transações entre todos os estados possíveis da máquina.    
O diagrama de estados para as máquinas sequenciais é equivalente à tabela verdade para as máquinas combinacionais.  
Seja a figura.

![Diagrama de estados](/sisdig_aulas/images_sisdig/diagramaestados.jpg)

A figura ilustra um típico diagrama de estados e seus elementos:
1. Todo estado é definido pelo **símbolo de identificação** do estado e respectivo **código**;
2. Em relação a um estado de **interesse** o diagrama indica o seu **estado predecessor** pelo sentido da seta de **transição de estados**;
3. Toda transição requer **condições de entrada** para o estado de interesse;
4. Toda transição entre estados se refere **às saídas no estado predecessor para uma entrada condicional**.

O **exemplo 1** ilustra o funcionamento de uma máquina sequencial com a utilização de diagrama de estados está apresentado na figura.

![Exemplo diagrama de estados](/sisdig_aulas/images_sisdig/exdiagramaestados.jpg)

No exemplo, o estado *a* é definido pelo código correspondente as saídas *00*, ou seja *A=0*, *B=0*.  
Se no estado *00* a entrada *X*  for igual a *1*, ocorrerá uma transição do estado *a* para o estado *b* -
a variável *B* passa de *0* a *1* e a variável *A* não se altera, permanecendo igual a *0*.  
Do estado *01* a entrada *X* igual a *1* acarreta uma transição do estado *b* para o estado *c* -
a variável *B* passa de *1* a *0* e a variável *A* passa de *0* a *1*.  
Do estado *10* a entrada *X* igual a *1* acarreta uma transição do estado *c* para o estado *d* -
a variável *B* passa de *0* a *1* e a variável *A* permanece igual a *1*.  
A partir do estado *d* uma nova entrada *X=1* leva a máquina 
a retornar ao estado inicial *A=0,B=0*, renovando o ciclo.  
Em qualquer estado, as saídas da máquina permanecem no mesmo estado, ou seja, as variáveis não mudam, se ela receber como entrada um sinal *X=0*.  
O comportamento da máquina sequencial poderá ser síncrono ou assíncrono.  

No caso síncrono, a transição poderá ser *gatilhada* pela transição de um sinal de clock (por exemplo de *LOW* para *HIGH*).   
Nesse caso, mantido *X=1*, as transições entre estados *00-01-10-11* ocorrerão sempre que houver a transição do clock.  
No caso de *X=0*, independentmente da transição do clock, a saída será mantida no estado em que se encontrar quando *X* for resetado.  

![Máquina sequencial - diagrama](/sisdig_aulas/images_sisdig/maquinasequencial.jpg)

O **exemplo 2** de diagrama de estados está apresentado na figura.

![Exemplo diagrama de estados](/sisdig_aulas/images_sisdig/ex2diagramaestados.jpg)

No novo exemplo, ao invés do uso de símbolos *a*,...,*d* para designar os estados, utiliza-se o próprio código que define cada estado.  
Como o código já está definido omite-se no diagrama as saídas correspondentes às **variáveis de estado**.  
No diagrama, apresenta-se uma nova variável Z, cujo valor de saída está associada a cada transição de estado.
Um esquema em bloco do circuito está apresentado na figura.  

![Máquina sequencial - diagrama](/sisdig_aulas/images_sisdig/maquinasequencial2.jpg)

### 5.2.2 Análise de circuitos sequenciais síncronos

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
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  

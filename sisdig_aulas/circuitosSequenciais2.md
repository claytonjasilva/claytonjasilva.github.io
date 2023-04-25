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
O diagrama de estados para as máquinas sequnciais é equivalente à tabela verdade para as máquinas combinacionais.  
Seja o exemplo da figura.

![Diagrama de estados](/sisdig_aulas/images_sisdig/diagramaestados.jpg)

A figura ilustra um típico diagrama de estados e seus elementos:
1. Todo estado é definido pelo **símbolo de identificação** do estado e respectivo **código**;
2. Em relação a um estado de **interesse** o diagrama indica o seu **estado predecessor** pelo sentido da seta de **transição de estados**;
3. Toda transição requer **condições de entrada** para o estado de interesse;
4. Toda transição entre estados se refere **às saídas no estado predecessor para uma entrada condicional**.

Um exemplo simples que ilutra o funcionamento de uma máquina sequencial com a utilização de diagrama de estados está apresentado na figura.

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

Um novo exemplo de diagrama de estados esstá apresentado na figura.

![Exemplo diagrama de estados](/sisdig_aulas/images_sisdig/ex2diagramaestados.jpg)

No novo exemplo, ao invés do uso de símbolos *a*,...,*d* para designar os estados, utiliza-se o próprio código que define cada estado.  
Como o código já está definido omite-se no diagrama as saídas correspondentes às **variáveis de estado**.  
No diagrama, apresenta-se uma nova variável Z, cujo valor de saída está associada a cada transição de estado.
Um esquema em bloco do circuito está apresentado na figura.  

![Máquina sequencial - diagrama](/sisdig_aulas/images_sisdig/maquinasequencial2.jpg)

### 5.2.2 Análise de circuitos sequenciais síncronos

O comportamento da **saída *A*** da máquina sequencial pode ser representado pelo mapa.  

| *AB* | *00* | *01* | *10* | *11* |
| - | - | - | - | - |
| *X* | - | - | - | - |
| 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 1 | 0 |

O comportamento da **saída *B*** da máquina sequencial pode ser representado pelo mapa.  

| *AB* | *00* | *01* | *10* | *11* |
| - | - | - | - | - |
| *X* | - | - | - | - |
| 0 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 1 | 0 |
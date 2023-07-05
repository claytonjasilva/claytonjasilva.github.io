# 1. Fundamentos de eletrônica

## 1.1 Grandezas elétricas

### 1.1.1 Tensão elétrica ou voltagem
- Representação simbólica: V ou E
- É o custo de energia (trabalho entregue) para mover uma carga elétrica positiva entre dois pontos, 
do menor potencial (polo negativo) para o maior potencial (polo positivo).
- Diferença de potencial ou força eletromotiva (EMF).
- Unidade de medida: **volt (V)**.
- Referencial de potencial. Todos os circuitos eletrônicos devem trabalhar com o mesmo referencial de potencial. 
Utiliza-se **terra (GND)** como referencial de 0V.
- Mede-se a tensão elétrica pela diferença de potencial **entre dois pontos ou nós do circuito.**

### 1.1.2 Corrente elétrica
- Representação elétrica: I
- É a taxa de fluxo de carga elétrica que **atravessa um ponto ou nó**.
- Unidade de medida: **ampere (A)**.

### 1.1.3 Resistência elétrica. Lei de Ohm.
- A corrente que atravessa um condutor é diretamente proporcional à tensão entre os dois nós da extremidade desse condutor.
Essa propriedade do material é chamada de **resistência** do condutor.

$$ V = R.I $$

- A resistência de um condutor é medida em **ohm ($\Omega$)**

### 1.1.4 Potência elétrica
- A potência consumida por um circuito ou seja o trabalho realizado em um determinado instante de tempo.
- É medida em **watt (W)**.
- A potência é calculada por

$$
P = V.I
$$

Utilizando a lei de Ohm, não difícil chegar que $V=R.I^2$.
- Quando os circuitos eletrônicos operam com tensões e correntes que variam com o tempo o correto é trabalhar com **potência média**,
que é diferente da **potência instantânea**.

## 1.2 Circuito elétrico

- É a **associação de componentes elétricos**, que, excitado por um **sinal elétrico** de entrada,
produz um sinal de saída, que se configura como uma **resposta** do circuito.
- Os componentes elétricos podem ser associados **em série ou em paralelo** para construir circuitos.
- Os componentes elétricos podem ser classificados como **ativos e passivos - resistivos ou reativos**.
- Os circuitos são representados esquematicamente por **diagramas unifilares**, em que os componentes elétricos são representados de acordo com uma convenção e interligados por uma linha ou fio.

### 1.2.1 Componentes ativos e resistivos
#### Fontes de tensão
- Os **componentes eletrônicos ativos (produzem energia)** entregando uma diferença de potencial entre seus terminais,
suprindo energia a um circuito (fonte primária) ou dissipando energia de um circuito (fonte secundária).
- Uma **fonte de tensão ideal** gera uma tensão constante, independentemente da carga atendida.
- A figura ilustra
![Fonte de tensão ideal](/eletronica/imageElt/fonteideal.jpg)
- As fontes de tensão podem ser de dois tipos: **CC (corrente contínua)** ou **AC (corrente alternada)**.
- As fontes de tensão CC mais conhecidas são as **baterias**, cuja representação nos diagramas unifilares é 
![Representação esquemática de baterias](/eletronica/imageElt/bateria.jpg)
- Uma fonte real pode suportar somente uma máxima corrente elétrica. No limite da máxima corrente,  
comporta-se como uma fonte ideal em série com uma resistência pequena. Veja o exemplo
![Fonte real](/eletronica/imageElt/fontereal.jpg)  
Observe que utiliza-se uma representação simbólica alternativa da fonte. Na parte superior é identificado **valor nominal**
de tensão que ela entrega.   
- Na construção dos circuitos elétricos, as fontes de tensão podem ser **associadas em série**,  
![Associação de fontes](/eletronica/imageElt/associacaofonte.jpg)    
de forma que a tensão nominal da associação de *n* fontes é a **soma das tensões nominais individuais**.  

$$
V_{eq} = \sum V_j
$$

, onde *j=1,.., n*.
#### Resistores
- São componentes **eletrônicos passivos (não produzem energia)**, com **dois terminais**,
construídos de moldagem de composto de carbono, de filmes de metal ou de elementos semicondutores. 
- Como **não são perfeitos**, seus valores compreendem, entre outros aspectos:
  - a definição do **valor nominal da resistência** e
  - a **tolerância**, normalmente estabelecida em um percentual do valor nominal.
- A resposta do resistor a um sinal elétrico de entrada é **linear**.  
![Resposta do resistor](/eletronica/imageElt/respostaresistor.jpg)    
- Pode-se observar pelo comportamento tensão (V) versus corrente (I). A inclinação da curva é dada por *1/R*, onde *R* é o valor nominal do resistor.
- A representação dos resistores nos diagramas unifilares de circuitos elétricos é dada por  
![Resistor](/eletronica/imageElt/resistor.jpg)    
, onde na parte superior é identificado o **valor nominal** de resistência.
- Na construção dos circuitos os resistores podem ser associados em série ou em paralelo.

#### Associação de resistores em série
![Resistor](/eletronica/imageElt/resistorserie.jpg)    
- A resistência de dois resistores R1 e R2 em série é dada pela relação $R_{eq}=R_1+R_2$.
- Generalizando, a resistência equivalente da associação em série de *n* resistores é dada por

$$
R_{eq} = \sum R_j
$$

, onde *j=1,...,n*.

#### Associação de resistores em paralelo
![Resistor](/eletronica/imageElt/resistorparalelo.jpg)    
- A resistência de dois resistores R1 e R2 em paralelo é dada pela relação $R_{eq}=\frac{R_1+R_2}{R_1.R_2}$.
- Generalizando, a resistência equivalente da associação em paralelo de *n* resistores é dada por

$$
R_{eq} = \frac {1} {\sum \frac{1}{R_j}}
$$

, onde *j=1,...,n*.

#### Potenciômetros
- Resistor variável. Geralmente possui **três terminais**, em que o terminal central é deslizante. Se todos os terminais são usados opera como um **divisor de tensão**.  
![Potenciômetro](/eletronica/imageElt/potenciometro.jpg)    

### 1.2.2 Contruindo circuitos elétricos
- Os circuitos elétricos representados pelo diagramas unifilares consistem em **ligações entre os terminais** dos componentes através de fios.
- Os fios dos diagramas são condutores ideais, através dos quais flui uma corrente elétrica.
- Como tratamos anteriormente, os elementos ou componentes podem ser associados em paralelo ou série.

#### Nós e malhas
- O caminho através do qual circula a corrente elétrica constitui um **ramo** do circuito. 
Um ramo é definido por um fio do diagrama unifilar. Por um ramo circula uma corrente elétrica.
- Um **nó** é a interseção de dois caminhos ou ramos diferentes do circuito. Os terminais dos componentes elétricos definem nós.
- Entre dois nós é sempre possível definir uma diferença de potencial ou tensão.
- Uma **malha** é um laço fechado no diagrama unifilar de circuito.  
![Nó e malha](/eletronica/imageElt/nomalha.jpg)

#### Curto circuito e circuito aberto
Nos diagramas unifilares de circuitos elétricos, um curto-circuito é aquele em que a diferença de potencial é zero entre dois nós.  
![Curto circuito](/eletronica/imageElt/curto.jpg)  
Nos diagramas unifilares de circuitos elétricos, um circuito aberto é um laço em que a resistência da carga é infinita entre dois nós.  
![Circuito aberto](/eletronica/imageElt/circuitoaberto.jpg)  

#### Lei das correntes e das tensões de *Kirchhof*
1. A soma das correntes que **entram em um nó (ponto)** de um circuito é **igual à soma das correntes que saem** do nó do circuito. Conservação de carga.  
2. **A soma das tensões em uma malha (circuito fechado) é igual a zero**. A tensão entre dois nós de um circuito é única, independentemente do caminho do entre os dois nós.

#### Teorema de Thévenin
Qualquer circuito formado por múltiplas malhas pode ser reduzido a um **circuito equivalente** constituído por uma única malha, constituído por uma **Tensão de Thevenin (V<sub>TH</sub>) e Resistência de Thevenin (R<sub>TH</sub>)**.  
![Circuito equivalente de Thevenin](/eletronica/imageElt/thevenin.jpg)  

**Procedimento para obter o circuito equivalente de Thevenin**

| Passo | Ação |
| - | - |
| 1 | Abrir o resistor de carga |
| 2 | Calcular ou medir a tensão nos terminais - tensão de Thevenin |
| 3 | Substituir a fonte de tensão por um curto circuito |
| 4 | Calcular a resistência 'vista' nos terminais da carga - resistência de Thevenin |

___
**[Eletrônica e Design de Circuitos](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/eletronica_aulas.md)**








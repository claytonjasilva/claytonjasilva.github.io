# 4. Capacitores

## 1. Definição
Um capacitor é um componente eletrônico que armazena carga elétrica. Consiste em dois condutores separados por um isolante, conhecido como dielétrico. Quando uma diferença de potencial (tensão) é aplicada aos terminais do capacitor, ocorre o acúmulo de carga nas placas, criando um campo elétrico entre elas.

## 2. Propriedades
- **Capacitância (C)**  
Mede a capacidade do capacitor de armazenar carga por unidade de tensão. É medida em Farads (F). 

$$C = \frac{Q}{V}$$, 

onde $C$ é a capacitância (em Farads), $Q$ é a carga armazenada (em Coulombs, C), e $V$ é a tensão (em Volts).

- **Energia Armazenada (W)**  
A energia armazenada em um capacitor é dada por

$$W = \frac{1}{2} C V^2$$

## 3. Resposta Característica V x I
A relação entre a tensão ***V*** e a corrente ***I*** em um capacitor é dada pela equação diferencial

$$I(t) = C \frac{dV(t)}{dt}$$

, onde $I(t)$ é a corrente instantânea, $C$ é a capacitância, e $\frac{dV(t)}{dt}$ é a taxa de variação da tensão em relação ao tempo.

- Operação em corrente contínua (CC)

Em corrente contínua (CC), o capacitor atua como um circuito aberto após atingir a carga máxima. Vamos analisar matematicamente esse comportamento.
A corrente *I* em um capacitor em função do tempo *t* é dada pela equação diferencial acima.  
Em regime permanente, em corrente contínua, a tensão *V* é constante $V = V_0$ e a derivada $\frac{dV(t)}{dt} = 0$. Portanto, a corrente

$$I(t) = C \frac{dV(t)}{dt}=C.0=0$$

, ou seja, a corrente é nula (*I = 0*).  
No entanto, a carga *Q* armazenada no capacitor é dada por

$$Q = C \cdot V$$

Se a tensão *V* é constante, a carga *Q* também é constante. 

- Operação em corrente alternada (CA)
O capacitor exibe **reatância capacitiva** ($X_C$) dada por: $X_C = \frac{1}{2 \pi f C}$, onde $f$ é a frequência.

**Detalhando**  
Em um circuito de corrente alternada, quando aplicamos uma tensão senoidal $V(t) = V_0 \sin(\omega t)$ a um capacitor, a corrente *I(t)* através do capacitor pode ser determinada pela seguinte equação diferencial:

$$I(t) = C \frac{dV(t)}{dt} = C \omega V_0 \cos(\omega t)$$

Onde:
- $V_0$ é a amplitude da tensão senoidal.
- $\omega$ é a frequência angular $2\pi$ vezes a frequência *f*.

**Reatância *X***  
A reatância *X* é a oposição oferecida por um componente elétrico à passagem de corrente em um circuito de corrente alternada. Para o capacitor, a reatância é calculada como apresentado a seguir.

**Reatância Capacitiva**  
A reatância capacitiva $X_C$ específica para um capacitor é devida à capacidade do capacitor de armazenar e liberar cargas. Quanto maior a capacitância *C*, menor será a reatância capacitiva à corrente em uma determinada frequência *f*.  
A corrente através do capacitor em um circuito de corrente alternada não está em fase com a tensão devido à presença da reatância capacitiva $X_C$. A reatância capacitiva é dada por:

$$X_C = \frac{1}{\omega C}$$

Portanto, a corrente através do capacitor é dada por:

$$I(t) = \frac{V_0}{X_C} \sin(\omega t - \phi)$$

Onde:
- $\phi$ é o ângulo de fase entre a corrente e a tensão.


## 4. Tipos de Capacitores
Existem vários tipos de capacitores, incluindo:
- Capacitores de cerâmica
- Capacitores eletrolíticos
- Capacitores de filme

## 5. Associação de Capacitores
- **Associação em Série**

$$\frac{1}{C_{\text{eq}}} = \frac{1}{C_1} + \frac{1}{C_2} + ... + \frac{1}{C_n}$$

- **Associação em Paralelo**

$$C_{\text{eq}} = C_1 + C_2 + ... + C_n$$

## 6. Circuitos com Capacitores
- **Filtro RC**

Em um circuito *RC*, a constante de tempo $\tau$ é dada por $\tau = R \cdot C$. Este circuito é usado em filtros para atenuar sinais.

- **Carga e Descarga de Capacitores**

$$V(t) = V_0 e^{-\frac{t}{R \cdot C}}$$ 

, onde *V(t)* é a tensão no capacitor no tempo *t*, $V_0$ é a tensão inicial, *R* é a resistência, e *C* é a capacitância.


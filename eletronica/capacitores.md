# Capacitores: Nota de Aula

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

Observação:
- Em corrente contínua (CC), o capacitor atua como um circuito aberto após atingir a carga máxima.
- Em corrente alternada (CA), o capacitor exibe reatância capacitiva ($X_C$) dada por: $X_C = \frac{1}{2 \pi f C}$, onde $f$ é a frequência.

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


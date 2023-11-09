# 5. Indutores

## 1. Definição
Um indutor é um componente eletrônico que armazena energia na forma de campo magnético quando uma corrente elétrica passa por ele. Consiste em uma bobina de fio enrolada em torno de um núcleo, frequentemente de material ferromagnético.

## 2. Propriedades
- **Indutância (L)**  
Mede a capacidade do indutor de armazenar energia magnética por unidade de corrente. É medida em Henrys (H).

$$V = L \frac{di}{dt}$$

onde \(V\) é a tensão induzida (em Volts), \(L\) é a indutância (em Henrys), e \(\frac{di}{dt}\) é a taxa de variação da corrente em relação ao tempo.

- **Energia Armazenada (W)**  
A energia armazenada em um indutor é dada por

$$W = \frac{1}{2} L I^2$$

## 3. Resposta Característica V x I
A relação entre a tensão \(V\) e a corrente \(I\) em um indutor é dada pela equação diferencial

$$V(t) = L \frac{di(t)}{dt}$$

, onde \(V(t)\) é a tensão instantânea, \(L\) é a indutância, e \(\frac{di(t)}{dt}\) é a taxa de variação da corrente em relação ao tempo.

- **Operação em corrente contínua (CC)**

Em corrente contínua (CC), um indutor age como um circuito aberto inicialmente. A corrente \(I\) aumenta gradualmente, seguindo a equação

$$I(t) = \frac{V}{R}(1 - e^{-\frac{R}{L}t})$$

, onde *V* é a tensão, *R* é a resistência, *L* é a indutância e *t* é o tempo.

- **Operação em corrente alternada (CA)**

O indutor exibe **reatância indutiva** $X_L$ dada por: $X_L = 2 \pi f L$, onde *f* é a frequência.

**Detalhando**  
Em um circuito de corrente alternada, quando aplicamos uma corrente senoidal $I(t) = I_0 \sin(\omega t)$ a um indutor, a tensão *V(t)* pode ser determinada pela seguinte equação diferencial:

$$V(t) = L \frac{di(t)}{dt} = \omega L I_0 \cos(\omega t)$$

Onde:
- $I_0$ é a amplitude da corrente senoidal.
- $\omega$ é a frequência angular $2\pi$ vezes a frequência *f*.

**Reatância *X***  
A reatância indutiva $X_L$ específica para um indutor é devida à capacidade do indutor de armazenar energia magnética. Quanto maior a indutância *L*, maior será a reatância indutiva em uma determinada frequência *f*.

A corrente através do indutor em um circuito de corrente alternada não está em fase com a tensão devido à presença da reatância indutiva $X_L$. A reatância indutiva é dada por:

$$X_L = 2\pi f L$$

Portanto, a corrente através do indutor é dada por:

$$I(t) = \frac{V_0}{X_L} \sin(\omega t - \phi)$$

Onde:
- $\phi$ é o ângulo de fase entre a corrente e a tensão.

## 4. Tipos de Indutores
Existem vários tipos de indutores, incluindo:
- Indutores de núcleo de ar
- Indutores toroidais
- Indutores acoplados magneticamente

## 5. Associação de Indutores
- **Associação em Série**

$$L_{\text{eq}} = L_1 + L_2 + ... + L_n$$

- **Associação em Paralelo**

$$\frac{1}{L_{\text{eq}}} = \frac{1}{L_1} + \frac{1}{L_2} + ... + \frac{1}{L_n}$$

## 6. Circuitos com Indutores
- **Filtro RL**

Em um circuito *RL*, a constante de tempo $\tau$ é dada por $\tau = \frac{L}{R}$. Este circuito é usado em filtros para atenuar sinais.

- **Carga e Descarga de Indutores**

$$I(t) = I_0 e^{-\frac{R}{L}t}$$

, onde *I(t)* é a corrente no indutor no tempo *t*, $I_0$ é a corrente inicial, *R* é a resistência, e *L* é a indutância.

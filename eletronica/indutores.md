# 5. Indutores

## 5.1. Definição
Um indutor é um componente eletrônico que armazena energia na forma de campo magnético quando uma corrente elétrica passa por ele. Consiste em uma bobina de fio enrolada em torno de um núcleo, frequentemente de material ferromagnético.

## 5.2. Propriedades
- **Indutância (L)**  
Mede a capacidade do indutor de armazenar energia magnética por unidade de corrente. É medida em Henrys (H).

$$V = L \frac{di}{dt}$$

onde \(V\) é a tensão induzida (em Volts), \(L\) é a indutância (em Henrys), e \(\frac{di}{dt}\) é a taxa de variação da corrente em relação ao tempo.

- **Energia Armazenada (W)**  
A energia armazenada em um indutor é dada por

$$W = \frac{1}{2} L I^2$$

## 5.3. Resposta Característica V x I
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

## 5.4. Tipos de Indutores
Existem vários tipos de indutores, incluindo:
- Indutores de núcleo de ar
- Indutores toroidais
- Indutores acoplados magneticamente

## 5.5. Associação de Indutores
- **Associação em Série**

$$L_{\text{eq}} = L_1 + L_2 + ... + L_n$$

- **Associação em Paralelo**

$$\frac{1}{L_{\text{eq}}} = \frac{1}{L_1} + \frac{1}{L_2} + ... + \frac{1}{L_n}$$

## 5.6. Circuitos com Indutores
- **Filtro RL**

Em um circuito *RL*, a constante de tempo $\tau$ é dada por $\tau = \frac{L}{R}$. Este circuito é usado em filtros para atenuar sinais.

- **Carga e Descarga de Indutores**

$$I(t) = I_0 e^{-\frac{R}{L}t}$$

, onde *I(t)* é a corrente no indutor no tempo *t*, $I_0$ é a corrente inicial, *R* é a resistência, e *L* é a indutância.

# 6. Impedância

## 6.1. Definição
Impedância é a medida da oposição total que um circuito oferece à passagem da corrente alternada. Ela inclui resistência, reatância indutiva e reatância capacitiva. A unidade de impedância é o ohm $\Omega\$.

## 6.2. Relação com Resistência e Reatância
A impedância *Z* em um circuito é composta por duas partes principais:

$$Z = R + jX$$

onde:
- *R* é a resistência, medida em ohms $\Omega\$,
- *X* é a parte imaginária representando a combinação de reatância indutiva $X_L$ e reatância capacitiva $X_C$,
- *j* é a unidade imaginária $j^2 = -1$.

A magnitude da impedância é dada por:

$$|Z| = \sqrt{R^2 + X^2}$$

e o ângulo de fase $\phi$ é determinado por:

$$\tan(\phi) = \frac{X}{R}$$

## 6.3. Associação de Impedâncias
- **Associação em Série**

$$Z_{\text{eq}} = Z_1 + Z_2 + ... + Z_n$$

- **Associação em Paralelo**

$$\frac{1}{Z_{\text{eq}}} = \frac{1}{Z_1} + \frac{1}{Z_2} + ... + \frac{1}{Z_n}$$

## 6.4. Lei de Ohm para Circuitos de Corrente Alternada
Na corrente alternada, a lei de Ohm para impedância é expressa como:

$$V = I \cdot Z$$

onde:
- *V* é a tensão em volts (V),
- *I* é a corrente em amperes (A),
- *Z* é a impedância em ohms $\Omega$.

## 6.5. Impedância em Componentes Individuais
- **Resistência (*R*)**

A impedância é igual à resistência, sem componente imaginário $X = 0$.

$$ = R$$

- **Reatância Indutiva ($X_L$)**

Para uma bobina, a impedância é puramente imaginária, sem resistência (\(R = 0\)).

$$Z_{L} = jX_{L}$$

- **Reatância Capacitiva ($X_C$)**

Para um capacitor, a impedância é puramente imaginária, sem resistência (\(R = 0\)).

$$Z_{C} = -jX_{C}$$

## 6.6. Impedância Complexa
A impedância complexa (*Z*) é expressa na forma polar como:

$$Z = |Z| \angle \phi$$

onde *|Z|* é a magnitude da impedância e $\phi$ é o ângulo de fase.

A relação com as partes real e imaginária é dada por:

$$Z = R + jX = |Z| (\cos(\phi) + j\sin(\phi))$$

A impedância complexa também pode ser representada no plano complexo.


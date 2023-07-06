# 2.  Circuitos de corrente contínua (CC) e de corrente alternada (CA)

## 2.1 Circuitos de corrente contínua (CC)
- Os circuitos CC são aqueles em que a corrente e a tensão resultam da alimentação por fonte (componente ativo) que produz um sinal **invariantes no tempo**.
- Nesse sentido, os valores observados de tensão e corrente são **constantes**.

## 2.2 Circuitos de corrente alternada (CA)
- Os circuitos CA são aqueles em que a corrente e a tensão resultam da alimentação por fonte que produz um sinal **variante no tempo**.
- As fontes CA produzem sinais senoidais, cujo comportamento é definido por  

$$
V(t) = A.sen(2.\pi.f_0.t+\theta)
$$

, onde *A* representa a amplitude do sinal,    
$f_0$ representa a frequência fundamental do sinal, medida em ciclos por segundo (ou Hertz),   
$2.\pi.f_0 = w_0$ representa a frequência fundamental angular, medida em rad/s,  
$\theta$ representa o atraso inicial do sinal.

![Sinal senoidal](/eletronica/imageElt/sinalsenoidal.jpg)  

- As análises precedentes de circuitos (Lei de Ohm, Teorema de Thevenin etc.) são válidas
mesmo que tensões e correntes sejam variantes no tempo.
- Sinais senoidais são periódicos. Um sinal é periódico em relação ao tempo (t), se o seu domínio contiver t+T e
𝑉(𝑡)=𝑉(𝑡+𝑇), onde *T* é o período da função, ou seja, *V(t)* irá se repetir para qualquer múltiplo de T.
- A relação do período com a frequência é dada pela relação $f_0=1/𝑇$.
- Na análise de circuitos, uma característica importante dos sinais periódicos é que:  
**a soma de dois sinais periódicos de período *T* também é um sinal periódico de período *T*.**

#### Outros parâmetros de sinais senoidais
1. Amplitude pico a pico - Os sinais senoidais gerados pela fontes de tensão alternada são muitas vezes medido em função
do seu valor entre a amplitude máxima e mínima, chamada tensão de amplitude pico a pico, normalmente indicada por V</sub>pp<sub>.
2. Amplitude RMS (raiz média quadrática) - O valor médio de um sinal senoidal é 0. Muitas vezes a amplitude utilizada se refere ao valor médio quadrático ou RMS, que, para sinais senoidais, é obtido por  

$$
V_{RMS} = \frac{1}{\sqrt{2}}.A
$$

, onde *A* é a amplitude do sinal.  
Como a amplitude de sinais senoidais pode ser medida pelo seu valor quadrático, também é comum utilizar a referência à potência RMS, dada por

$$
P_{RMS} = \frac{V_{RMS}^2}{R}
$$

, onde *R* é a resistência da carga e *V<sub>RMS</sub> é a tensão RMS sobre a carga.  
Nesse sentido, para circuito CA é importante destacar se a potência é de pico (P=V.I) ou RMS.

3. Decibeis - Para comparar sinais é mais conveniente em muitas circunstâncias utilizar escala logarítmica, pois a diferença de grandezas pode envolver números grandes.  
A razão entre dois sinais de amplitudes A<sub>1</sub> e A<sub>2</sub>, medida em decibeis (dB), é dada por

$$
dB=20log\frac{A_2}{A_1}
$$

A medida em dB pode ser obtida pela relação logaritmica entre potências, obtida de

$$
dB=10log\frac{P_2}{P_1}
$$

, onde P<sub>1</sub> e P<sub>2</sub> são as potências instantâneas.

O valor da potência de um sinal pode ser definido pela razão logaritmica com um sinal de 1 mW, na definição de dBm, logo obtida por

$$
dB=10log\frac{P}{1 mW}
$$

, onde P é a potência instantânea do sinal considerado.

## 2.3 Circuitos lineares
- Os circuitos lineares são aqueles cuja saída, quando alimentado por vários sinais de entrada,
é igual à soma das saídas individuais, cada uma delas resposta do circuito ao respectivo sinal de entrada.
- Matematicamente,

$$
Y(t) = Y_1(t) + Y_2(t) + ...+ Y_n(t)
$$

, onde $Y_i(t)$ é a resposta de saída à i-ésima entrada $X_i(t)$.
- Circuitos lineares alimentados por uma entrada senoidal respondem sempre com saída senoidal,
embora com fase e amplitude geralmente modificados.

___
**[Home Eletrônica e Design de Circuitos](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/eletronica_aulas.md)**


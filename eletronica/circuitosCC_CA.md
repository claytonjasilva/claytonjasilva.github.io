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

## 2.3 Circuitos lineares
- Os circuitos lineares são aqueles cuja saída, quando alimentado por vários sinais de entrada,
é igual à soma das saídas individuais, cada uma delas resposta do circuito ao respectivo sinal de entrada.
- Matematicamente,

$$
Y(t) = Y_1(t) + Y_2(t) + ...+ Y_n(t)
$$

, onde $Y_i(t)$ é a resposta de saída à i-ésima entrada $X_i(t)$.
- Circuitos lineares alimentados por uma entrada senoidal responde sempre com saída senoidal,
embora com fase e amplitude geralmente modificados.

# 1. ELEMENTOS DA TEORIA DE SISTEMAS DE COMUNICAÇÕES DIGITAIS

## 1.1 INFORMAÇÃO E MENSAGENS
Claramente o conceito de informação é central para comunicações.
Informação pode conter noções filosóficas que dificultam uma definição precisa. 
Para evitar essas dificuldades, ao invés de utilizar a palavra informação, pode-se utilizar a palavra **mensagem**, 
definida como a manifestação física da informação, **produzida por uma fonte**. 

O **objetivo do sistema de comunicações** é reproduzir no destino de forma aceitável uma réplica da mensagem gerada pela fonte.

Existem vários tipos de fontes de informação, incluindo máquinas e pessoas, 
de modo que as mensagens podem aparecer de várias formas. 

As mensagens podem ser **analógicas** ou **digitais**.

Algumas mensagens são elétricas. A maioria dos sistemas de comunicações possui **transdutores** na entrada e na saída. 
O transdutor de entrada converte a mensagem para um sinal elétrico, tensão ou corrente elétrica. 
Na saída, o sinal elétrico é convertido na forma desejada no destino.

## 1.2 SINAIS
### [1.2.1 Sinais analógicos, discretos e digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/digitaisAnalogicos.md)

### 1.2.2 Sinais senoidais
Os sinais senoidais são muito comuns nos circuitos eletrônicos. Descrevem vários fenômenos da natureza bem como propriedades de circuitos lineares. Matematicamente, a tensão senoidal pode ser representada por

$$V(t)=A.sen(2\pi.f_0.t-\theta)=A.sen(w_0.t-\theta)$$

, onde $A$ representa a amplitude do sinal, $f_0$ representa a frequência fundamental, medida em ciclos por segundo (ou Hertz), $w_0=2.\pi.f_0$, representa a frequência fundamental angular e $\theta$ representa o atraso inicial do sinal – em radianos.

Graficamente, **o comportamento do sinal senoidal é observado conforme sua variação em relação à variáção do tempo (variável independente)** como apresenta a figura
![Sinal senoidal - parâmetros](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/eletronica/imageElt/sinalsenoidal.jpg)

A figura ilustra os parâmetros que definem o sinal: amplitude, frequência e fase. Esses parâmetros constituem-se **informações que caracetrizam o sinal**. Matematicamente, o comportamento do mesmo sinal **pode ser observado segundo sua variação de acordo com a frequência que o compõe**, não de acordo com o tempo. Ou seja, utilizando-se a frequência como variável independente.  
![Amplitude do sinal senoidal em relação a frequência](/siscom_aulas/imagemSiscom/fftsinalsenoidal.jpg)

Observe que a amplitude *A=15* é apresentada na frequência fundamental de $f_0=60 Hz$. Nas demais frequências a amplitude é nula.
Uma propriedade especial do sinal senoidal é seu comportamento periódico ao longo do tempo. Esse comportamento caracteriza o sinal $V(t)=15sen(2.\pi.60-\frac{\pi}{5})$ em função da frequência.

Um comportamento fundamental do sinal senoidal é de que se repete em ciclos regulares, ou seja, é periódico. Um sinal é periódico em relação ao tempo (t) se o seu domínio contiver *t+T*, tal que $V(t)=V(t+T)$, onde *T* é o período da função $V(t)$, portanto intervalo de tempo durante o qual a função repete seu comportamento.

A taxa de variação do comportamento de *V* com o tempo, ou seja, sua frequência, satisfaz a relação $f_0=1/T$.
Os sinais senoidais também são comumente caracterizados por outros parâmetros, como a **amplitude pico a pico**, que corresponde à variação entre o valor de amplitude do ciclo negativo à amplitude do ciclo positivo, amplitude pico a pico ($V_{pp}$). Nesse caso, $V_{pp}=2.A$, onde *A* é a amplitude do sinal.

Em muitas circunstâncias, trabalha-se com a amplitude da raiz média quadrática (RMS), obtida por $V_{RMS}=\frac{1}{\sqrt{A}}$. 

Os circuitos lineares alimentados por um sinal senoidal respondem também com um sinal senoidal, de mesma frequência, porém com fase e amplitude alterada. Além disso, a linearidade assegura que os circuitos lineares alimentados por vários sinais senoidais de entrada $X_1, X_2, ..., X_n$ apresenta uma resposta igual à soma das saídas individuais $Y_1, Y_2, ..., Y_n$, tal que $Y_i$ é resposta à entrada $X_i$. Matematicamente, $Y(t)=Y_1(t)+Y_2(t)+⋯+Y_n(t)$, onde $Y_i$ é resposta à entrada $X_i$.  

### 1.2.3 Representação de sinais periódicos: série de Fourier
Todo sinal periódico pode ser representado como uma soma de sinais senoidais, definida pela expressão  

$$
S(t)=a_0+\sum_{(n=1)}^{∞}[a_n.cos⁡(n.w_0.t)+b_n.sen(n.w_0.t)]
$$

, onde $a_0$ é o valor médio da função, $a_n$ e $b_n$ são os coeficientes da série de Fourier.

Os coeficientes da série de Fourier podem ser definidos pelas expressões, para t=1, 2, ...   
$a_n=\frac{2}{T}\int_{0}^{T}V(t)cos⁡(n.w_0.t)dt$    
$b_n=\frac{2}{T}\int_{0}^{T}V(t)sen⁡(n.w_0.t)dt$    

A expressão da série de Fourier pode ser apresentada de forma compacta por  
$S(t)=C_0+\sum_{n=1}^{\infty} C_ncos⁡(nw_0t+\theta_n)$  
, onde C_n=√(a_n^2+b_n^2 ) e θ_n=-arctan⁡(b_n/a_n ), t=1,2,...
Analisando a expressão da série de Fourier na sua forma compacta, fica evidenciado que qualquer sinal periódico contém um valor constante C0, que independe da variação de frequência, chamado de componente DC.
Os termos da série dependentes da variação em frequência, n.w0, possuem o valor mais baixo para n=1. Essa é a chamada frequência fundamental w0 (frequência angular obviamente). As frequências múltiplas da frequência fundamental são chamadas de harmônicos.
A Figura 9 apresenta a representação do comportamento do sinal periódico S(t) em uma janela de observação de 1 segundo. Apresenta também a representação da amplitude do sinal em função da frequência, |S(f)|. 


___
**[Home Sistemas de Comunicações Móveis](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/siscom_aulas.md)**

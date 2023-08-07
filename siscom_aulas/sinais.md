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

Graficamente, **o comportamento do sinal senoidal é observado conforme sua variação em relação à variação do tempo (variável independente)** como apresenta a figura
![Sinal senoidal - parâmetros](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/eletronica/imageElt/sinalsenoidal.jpg)

A figura ilustra os parâmetros que definem o sinal: amplitude, frequência e fase. Esses parâmetros constituem-se **informações que caracterizam o sinal**. Matematicamente, o comportamento do mesmo sinal **pode ser observado segundo o comportamento das taxas de variação no tempo - de acordo com as frequências que o compõe**, não somente de acordo com o tempo. Ou seja, o sinal (variável dependente) apresenta um comportamento de acordo com a frequência (variável independente).  
![Amplitude do sinal senoidal em relação a frequência](/siscom_aulas/imagemSiscom/fftsinalsenoidal.jpg)

Observe que a amplitude *A=15* é apresentada na frequência fundamental de $f_0=60 Hz$. Nas demais frequências a amplitude é nula, uma vez que o sinal varia somente na taxa de 60 ciclos por segundo.  

Uma propriedade especial do sinal senoidal é seu comportamento periódico ao longo do tempo. Esse comportamento caracteriza o sinal $V(t)=15sen(2.\pi.60-\frac{\pi}{5})$ em função da frequência.

Um comportamento fundamental do sinal senoidal é de que se repete em ciclos regulares, ou seja, é periódico. Um sinal é periódico em relação ao tempo (t) se o seu domínio contiver *t+T*, tal que $V(t)=V(t+T)$, onde *T* é o período da função $V(t)$, portanto intervalo de tempo durante o qual a função repete seu comportamento.

A taxa de variação do comportamento de *V* com o tempo, ou seja, sua frequência, satisfaz a relação $f_0=1/T$.
Os sinais senoidais também são comumente caracterizados por outros parâmetros, como a **amplitude pico a pico**, que corresponde à variação entre o valor de amplitude do ciclo negativo à amplitude do ciclo positivo, amplitude pico a pico ($V_{pp}$). Nesse caso, $V_{pp}=2.A$, onde *A* é a amplitude do sinal.

Em muitas circunstâncias, trabalha-se com a amplitude da raiz média quadrática (RMS), obtida por $V_{RMS}=\frac{1}{\sqrt{A}}$. 

Os circuitos lineares alimentados por um sinal senoidal respondem também com um sinal senoidal, de mesma frequência, porém com fase e amplitude alterada. Além disso, a linearidade assegura que os circuitos lineares alimentados por vários sinais senoidais de entrada $X_1, X_2, ..., X_n$ apresenta uma resposta igual à soma das saídas individuais $Y_1, Y_2, ..., Y_n$, tal que $Y_i$ é resposta à entrada $X_i$. Matematicamente, $Y(t)=Y_1(t)+Y_2(t)+⋯+Y_n(t)$, onde $Y_i$ é resposta à entrada $X_i$.  

### 1.2.3 Representação de sinais no domínio do tempo e no domínio da frequência
### 1.2.3.1 Representação de sinais periódicos: série de Fourier
Todo sinal periódico pode ser representado como uma soma de sinais senoidais, definida pela expressão  

$$
S(t)=a_0+\sum_{(n=1)}^{∞}[a_n.cos⁡(n.w_0.t)+b_n.sen(n.w_0.t)]
$$

, onde $a_0$ é o valor médio da função, $a_n$ e $b_n$ são os coeficientes da série de Fourier.

Os coeficientes da série de Fourier podem ser definidos pelas expressões, para t=1, 2, ...   
$a_n=\frac{2}{T}\int_{0}^{T}V(t)cos⁡(n.w_0.t)dt$    
$b_n=\frac{2}{T}\int_{0}^{T}V(t)sen⁡(n.w_0.t)dt$    

A expressão da série de Fourier pode ser apresentada de forma compacta por  

$$
S(t)=C_0+\sum_{(n=1)}^{∞}[C_ncos⁡(nw_0t+\theta_n)]
$$

, onde $C_n=\sqrt{(a_n^2+b_n^2)}$ e $θ_n=-arctan⁡(\frac{b_n}{a_n})$, t=1,2,...

Analisando a expressão da série de Fourier na sua forma compacta, fica evidenciado que qualquer sinal periódico contém um valor constante $C_0$, que independe da variação de frequência, chamado de componente DC.  
Os termos da série dependentes da variação em frequência, $n.w_0$, possuem o valor mais baixo para *n=1*. Essa é a chamada **frequência fundamental $w_0$ (frequência angular obviamente)**. **As frequências múltiplas da frequência fundamental são chamadas de harmônicos**.  
A figura abaixo apresenta a representação do comportamento do sinal periódico *S(t)* em uma janela de observação de 1 segundo. Apresenta também a representação da amplitude do sinal em função da frequência, *|S(f)|*. 

![Sinal periódico: domínio do tempo x domínio da frequência](/siscom_aulas/imagemSiscom/seriefourier.jpg)

A figura evidencia que há um decaimento da amplitude do sinal nos harmônicos de mais alto valor. A análise desse comportamento é muito útil para a eletrônica, a fim de projetar os circuitos, de modo a explorar as propriedades do sinal não somente no domínio do tempo, mas também explorá-las no domínio da frequência.

### 1.2.3.2 Representação de sinais não periódicos: transformada de Fourier 
A representação em série de Fourier é útil para qualquer tipo de sinal, desde que se queira sua representação apenas no intervalo de *0* a *T*. Todo sinal arbitrário *S(t)* pode ser representado por uma combinação linear de funções exponenciais em um intervalo *T* por 

$$
S(t)=\sum_{-∞}^{∞}[F_ne^{-jnw_0t}]
$$

, onde $F_n=\frac{1}{T}\int_{-T/2}^{T/2}f(t)e^{-jnw_0t}dt$, *t=1, 2, ...*  

A expressão da fórmula é apenas uma maneira diferente de expressar a série de Fourier utilizando a exponencial complexa $e^{jw_0t}$. O termo $F_n$ expressa a **amplitude espectral** (da frequência) associada a cada componente de frequência $nw_0$. 

Matematicamente, pode-se definir que quando o intervalo de observação de um sinal de qualquer natureza tende a infinito, o comportamento espectral – ou seja, no domínio da frequência –, pode ser definido pela expressão 

$$
F(w)=\int_{-∞}^{∞}S(t)e^{-jωt}dt
$$

, chamada de **Transformada de Fourier**, também chamada de integral de Fourier, cuja representação simplificada é $\mathcal{F}[S(t)]=F(w)$.  
Assim, a observação do **comportamento espectral de um sinal, isto é, como varia de acordo com as frequências que o compõem**, pode ser aplicada tanto a sinais periódicos quanto a sinais não periódicos.

#### Propriedades da Transformada de Fourier
A Transformada de Fourier possui algumas propriedades úteis à análise de sinais no domínio da frequência:
1. **Linearidade:**   
$αx(t)=αy(t)$, onde $y(t)=f[x(t)]$  
$f(x_1)=y_1$, $f(x_2)=y_2$ → $f(x_1+x_2)=y_1+y_2$  
2. **Escalonamento:** o sinal comprimido no tempo se expande em frequência
3. **Simetria nas funções pares:**  
$\mathcal{F}[x(t)]=X(f)$, $\mathcal{F}[\mathcal{F}[x(t)]]=x(t)$
4. **Deslocamento em *t* de $t_0$:** implica deslocamento em *f* de $w.t_0$
5. **Deslocamento em *w* de $w_0$:** implica atraso em *t* de $t.w_0$ 

## 1.2.4 Sinais especiais
Alguns sinais elétricos e suas respectivas transformadas de Fourier são muito utilizados na eletrônica porque apresentam características que as tornam úteis à análise de circuitos.

#### Sinal pulso retangular
O pulso retangular pode ser definido por  

$$
x(t) = \begin{cases}
    A, & \text{se } |t| \leq \frac{T}{2}, \\
    0, & \text{caso contrário}.
\end{cases}
$$

, onde *T* é a largura do pulso.

A sua Transformada de Fourier é

$$
X(f) = \text{sinc}\left(\frac{\pi fT}{2}\right) \cdot AT \cdot e^{-j\pi fT}
$$

A figura abaixo apresenta um exemplo de pulso retangular, a partir da origem t=0.  
O sinal pode ser deslocado no tempo, atrasado de $\Delta{t}$.  
A correspondente transformada de Fourier (conforme a propriedade 4) será deslocada em frequência.   

![Sinal pulso](/siscom_aulas/imagemSiscom/sinalpulso.jpg)

A expressão da transformada de Fourier da função pulso é a função sinc, cuja figura apresenta.  
![Sinal sinc](/siscom_aulas/imagemSiscom/sinc.jpg)

Observe que a largura do primeiro zero da função é dada pela frequência igual ao inverso da duração do pulso (*1/T*). Os demais zeros são observados em múltiplos da frequência fundamental. 

A figura apresenta o comportamento do pulso e de sua respectiva transformada quando varia-se a sua largura.
![Sinal pulso e transformada com variação de largura](/siscom_aulas/imagemSiscom/pulsovariando.jpg)

Analisando o comportamento da variação da largura do sinal do pulso, não é difícil verificar que quando a largura do pulso tende a 0 seg, o primeiro zero da transformada tende a infinito, ou seja, a resposta de frequência tende a ser constante. Esse comportamento indica a convergência para o comportamento do **sinal delta de Dirac**. Por outro lado, quando a largura do pulso tende a infinito, a sua transformada tende a um pulso unitário. Nesse caso configura-se a função **degrau unitário**.

#### Sinal delta de Dirac
A função sinc pode ser definida por

$$
\delta(t) =
\begin{cases}
\infty, & \text{se } t = 0 \\
0, & \text{caso contrário}
\end{cases}
$$

e sua transformada de Fourier por

$$
\mathcal{F}[\delta(t)] = \int_{-\infty}^{\infty} \delta(t) e^{-i\omega t} dt = 1
$$

A figura apresenta o comportamento do sinal.
![Sinal delta de Dirac](/siscom_aulas/imagemSiscom/dirac.jpg)

#### Sinal degrau unitário
A função sinc pode ser definida por

$$
u(t) =
\begin{cases}
0, & \text{se } t < 0 \\
1, & \text{se } t \geq 0
\end{cases}
$$

e sua transformada de Fourier por

$$
\mathcal{F}[u(t)] = \frac{1}{i\omega} + \pi\delta(\omega)
$$

#### Sinal sinc
A função sinc pode ser definida por

$$
\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}
$$

e sua transformada de Fourier por

$$
\text{Sinc}(f) = \int_{-\infty}^{+\infty} \text{sinc}(t) \cdot e^{-2\pi i f t} dt
$$


___
**[Home Sistemas de Comunicações Móveis](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/siscom_aulas.md)**

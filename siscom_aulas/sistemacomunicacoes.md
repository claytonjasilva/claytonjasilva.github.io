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

___
**[Home Sistemas de Comunicações Móveis](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/siscom_aulas.md)**

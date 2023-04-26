## 10.2 Flip-Flops

Relembrando, os circuitos sequenciais são aqueles cujas saídas em um determinado instante dependem
das entradas no instante considerado e das saídas em instantes anteriores.  
A resposta atual depende da memória, ou seja, dos dados do passado.  
Reapresentando em uma nova forma, o modelo geral dos circuitos sequenciais é dado por

![Modelo de circuito sequencial](/sisdig_aulas/images_sisdig/modelocircuitosequencial.jpg)

Vimos as células de memória (*latch*), cujo modelo geral é

![Modelo de *latch*](/sisdig_aulas/images_sisdig/modelolatch.jpg)

Vimos as células (*latch*), que são também chamados de **Flip-Flop genérico**.  
Embora uma porta lógica isolada não tenha capacidade de armazenamento, várias portas conectadas de forma adequada podem proporcionar memória.  

###  10.2.1 Conceito de Flip-Flops

Duas questões merecem ser salientadas a respeito das células de memória:  
1. Elas possuem um *delay* de propagação; e
2. É um hardware que permite armazenar o **estado presente** de uma máquina sequencial.

Os Flip-Flops são dispositivos de hardware amplamente utilizados nas máquinas de estados finitos síncronas.  
Utilizam como base de construção a **célula binária (*latch*)**, **entradas de controle** e um **sinal de clock**.  
O modelo geral está apresentado na figura.  

![Modelo de *latch*](/sisdig_aulas/images_sisdig/modeloFF.jpg)

### 10.2.2 Tipos de Flip-Flops com clock

**a. Flip-Flop Set/Reset (SR)**

O Flip-Flop SR possui a representação e a respectiva tabela verdade apresentados na figura.  

![Flip-Flop RS](/sisdig_aulas/images_sisdig/flipfloprs.jpg)



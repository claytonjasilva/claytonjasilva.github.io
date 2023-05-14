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

A imagem mostra o comportamento do dispositivo.  
Quando a entrada é *S=1,C=0*, independentemente da transição da entrada de clock, o FF SR seta (armazena) a saída igual a 1.  
Quando a entrada é *S=0,C=1*, independentemente da transição de entrada de clock, o FF SR reseta (armazena) a saída igual a 0.  
Quando a entrada é *S=0,C=0*, independentemente da transição de entrada de clock, o FF SR mantém (armazena) a saída em um instante igual a saída no instante anterior.   
Não se usa entradas *S* e *C* ambas iguais a 1.   

O diagrama de tempo apresentado na figura abaixo ilustra o funcionamento.  

![Flip-Flop RS - temporização](/sisdig_aulas/images_sisdig/temporizacao_ffsr.jpg)

Observe a utilização das entradas *S,R*, ambas iguais a 0.

**b. Flip-Flop JK**

O Flip-Flop JK possui a representação e a respectiva tabela verdade apresentados na figura.  

![Flip-Flop JK](/sisdig_aulas/images_sisdig/flipflopjk.jpg)

A imagem mostra o comportamento do dispositivo.  
Quando a entrada é *J=1,K=0*, independentemente da transição da entrada de clock, o FF JK seta (armazena) a saída igual a 1.  
Quando a entrada é *J=0,K=1*, independentemente da transição de entrada de clock, o FF JK reseta (armazena) a saída igual a 0.  
Quando a entrada é *J=0,K=0*, independentemente da transição de entrada de clock, o FF JK mantém (armazena) a saída em um instante igual a saída no instante anterior.   
Quando a entrada é *J=1,K=1*, independentemente da transição de entrada de clock, o FF JK mantém (armazena) a saída em um instante igual a saída no instante anterior **invertida**.   

O diagrama de tempo apresentado na figura abaixo ilustra o funcionamento.  

![Flip-Flop JK - temporização](/sisdig_aulas/images_sisdig/temporizacao_ffjk.jpg)

**c. Flip-Flop D**

O Flip-Flop D possui a representação e a respectiva tabela verdade apresentados na figura.  

![Flip-Flop D](/sisdig_aulas/images_sisdig/flipflopd.jpg)

A imagem mostra o comportamento do dispositivo.  
Quando a entrada é *D=0*, independentemente da transição da entrada de clock, o FF D seta (armazena) a saída igual a 0.  
Quando a entrada é *D=1*, independentemente da transição da entrada de clock, o FF D seta (armazena) a saída igual a 1.  
O diagrama de tempo apresentado na figura abaixo ilustra o funcionamento.  

![Flip-Flop D - temporização](/sisdig_aulas/images_sisdig/temporizacao_ffd.jpg)



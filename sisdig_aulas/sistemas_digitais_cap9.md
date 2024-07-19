# Cap 9. Memória: células de memória e Flip-Flops

## 9.1 Conceito de memória

A memória é um elemento essencial para o funcionamento dos sistemas sequenciais, como mostrado na figura acima.  
Como discutido, as saídas dos circuitos sequenciais dependem da entrada em um determinado instante e 
das saídas relativas às entradas passadas - *feedback*.  
Pode-se definir fundamentalmente memória como um dispositivo no qual valores binários podem ser armazenados ou retidos
até que seja comandada a substituição do valor atual por um novo valor.  
Os dispositivos de memória normalmente tratados são aqueles mais complexos, como as memórias RAM, ROM etc.  

### Trataremos aqui da unidade mais elementar dessas memórias mais complexas, que designaremos como **célula binária** ou ***latch***.

**A célula binária é um circuito sequencial elementar que possui a capacidade de armazenar 1 bit.**  

![Célula binária com portas NAND](/sisdig_aulas/images_sisdig/celulabinarianand.jpg)

Observe que a célula possui uma entrada *SET* e uma entrada *CLEAR* (ou *RESET*).   
O papel da célula é **armazenar 1 bit**:

- Para armazenar o bit *1*, deve se atribuir 0 para entrada *SET* - **a saída *Q* irá armazenar o bit 1.**  
- Para armazenar o bit *0*, deve ser atribuído 0 para a entrada *CLEAR* - **a saída *Q* irá armazenar o bit 0.**  

Para entender o funcionamento das células binárias é importante definir os **estados** possíveis das entradas *SET* e *CLEAR*.

| Estado | Entradas | Comportamento |
| - | - | - |
| Repouso | *SET*=1, *CLEAR*=1 | Não tem nenhum efeito sobre a saída. As saídas *Q* e $\bar{Q}$ permanecem com os mesmos valores anteriores |
| Resetar | *SET*=1, *CLEAR*=0 | A saídas *Q*=0 e $\bar{Q}=1$, permanecendo 0 mesmo que *CLEAR* retorne ao valor 1 |
| Setar | *SET*=0, *CLEAR*=1 | A saídas *Q*=1 e $\bar{Q}=0$, permanecendo 1 mesmo que *SET* retorne ao valor 1 |
| Ambíguo | *SET*=0, *CLEAR*=0 | A saída é instável - tenta-se resetar e setar o *latch* ao mesmo tempo |

### Vamos analisar o funcionamento do *latch*  

A análise dos circuitos sequenciais requer sempre admitir uma **condição inicial**, em virtude da existência de memória.  
Analisando o estado de repouso...

![Célula binária em repouso](/sisdig_aulas/images_sisdig/latchrepouso.jpg)
As condições inicias, são mostradas nas imagens (a) e (b), ou seja, anteriormente tem-se *Q=0* ou *Q=1*.  

#### Analisando o estado de *latch* 'setado'...

![Célula binária 'setada' - primeira condição inicial](/sisdig_aulas/images_sisdig/latchsetado.jpg)
Verifique que as condições iniciais podem ser decompostas em duas partes:  
1 - Ambas as entradas *SET* e *CLEAR* iguais a 1, *Q=0*   
Neste caso, a transição da entrada *SET* de 1 para 0 leva a saída *Q* à transição do nível baixo (0) para o nível alto (1).  
Quando o valor de *SET* retornar a 1, o bit 1 mantém-se na saída *Q* - memória com armazenamento de 1 bit.  

Por outro lado, a análise admite uma segunda condição inicial:
2 - Ambas as entradas *SET* e *CLEAR* iguais a 1, *Q=1*

![Célula binária 'setada' - segunda condição inicial](/sisdig_aulas/images_sisdig/latchsetado2.jpg)
Neste caso, a transição da entrada *SET* de 1 para 0 leva a saída *Q* a permanecer no nível alto (1).  
Quando o valor de *SET* retornar a 1, o bit 1 mantém-se na saída *Q* - memória, armazenamento de 1 bit.  

#### Analisando o estado do *latch* 'resetado'...

![Célula binária 'resetada' - primeira condição inicial](/sisdig_aulas/images_sisdig/latchresetado.jpg)

A análise é similar à análise realizada no caso anterior.    
Admitindo duas condições iniciais, pode-se observar o comportamento apresentado na figura.   

Podemos sintetizar o comportamento do *latch* na tabela verdade apresentada abaixo>

| Set | Clear | Saída |
| - | - | - |
| 1 | 1 | Não muda |
| 0 | 1 | *Q=1* |
| 1 | 0 | *Q=0* |
| 0 | 0 | Inválido |

## 9.2 Flip-Flops

Relembrando, os circuitos sequenciais são aqueles cujas saídas em um determinado instante dependem
das entradas no instante considerado e das saídas em instantes anteriores.  
A resposta atual depende da memória, ou seja, dos dados do passado.  
Reapresentando em uma nova forma, o modelo geral dos circuitos sequenciais é dado por

![Modelo de circuito sequencial](/sisdig_aulas/images_sisdig/modelocircuitosequencial.jpg)

Vimos as células de memória (*latch*), cujo modelo geral é

![Modelo de *latch*](/sisdig_aulas/images_sisdig/modelolatch.jpg)

Vimos as células (*latch*), que são também chamados de **Flip-Flop genérico**.  
Embora uma porta lógica isolada não tenha capacidade de armazenamento, várias portas conectadas de forma adequada podem proporcionar memória.  

### 9.2.1 Conceito de Flip-Flops

Duas questões merecem ser salientadas a respeito das células de memória:  

1. Elas possuem um *delay* de propagação; e
2. É um hardware que permite armazenar o **estado presente** de uma máquina sequencial.

Os Flip-Flops são dispositivos de hardware amplamente utilizados nas máquinas de estados finitos síncronas.  
Utilizam como base de construção a **célula binária (*latch*)**, **entradas de controle** e um **sinal de clock**.  
O modelo geral está apresentado na figura.  

![Modelo de *latch*](/sisdig_aulas/images_sisdig/modeloFF.jpg)

### 9.2.2 Tipos de Flip-Flops com clock

#### a. Flip-Flop Set/Reset (SR)

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

#### b. Flip-Flop JK

O Flip-Flop JK possui a representação e a respectiva tabela verdade apresentados na figura.  

![Flip-Flop JK](/sisdig_aulas/images_sisdig/flipflopjk.jpg)

A imagem mostra o comportamento do dispositivo.  
Quando a entrada é *J=1,K=0*, independentemente da transição da entrada de clock, o FF JK seta (armazena) a saída igual a 1.  
Quando a entrada é *J=0,K=1*, independentemente da transição de entrada de clock, o FF JK reseta (armazena) a saída igual a 0.  
Quando a entrada é *J=0,K=0*, independentemente da transição de entrada de clock, o FF JK mantém (armazena) a saída em um instante igual a saída no instante anterior.   
Quando a entrada é *J=1,K=1*, independentemente da transição de entrada de clock, o FF JK mantém (armazena) a saída em um instante igual a saída no instante anterior **invertida**.   

O diagrama de tempo apresentado na figura abaixo ilustra o funcionamento.  

![Flip-Flop JK - temporização](/sisdig_aulas/images_sisdig/temporizacao_ffjk.jpg)

#### c. Flip-Flop D

O Flip-Flop D possui a representação e a respectiva tabela verdade apresentados na figura.  

![Flip-Flop D](/sisdig_aulas/images_sisdig/flipflopd.jpg)

A imagem mostra o comportamento do dispositivo.  
Quando a entrada é *D=0*, independentemente da transição da entrada de clock, o FF D seta (armazena) a saída igual a 0.  
Quando a entrada é *D=1*, independentemente da transição da entrada de clock, o FF D seta (armazena) a saída igual a 1.  
O diagrama de tempo apresentado na figura abaixo ilustra o funcionamento.  

![Flip-Flop D - temporização](/sisdig_aulas/images_sisdig/temporizacao_ffd.jpg)

#### d. Flip-Flop T

O Flip-Flop T possui a representação e a respectiva tabela verdade apresentados na figura.  

![Flip-Flop T](/sisdig_aulas/images_sisdig/flipflopt.jpg)

A imagem mostra o comportamento do dispositivo.  
Quando a entrada é *T=0*, independentemente da transição da entrada de clock, o FF T mantém a saída em um instante igual a saída no instante anterior.  
Quando a entrada é *T=1*, independentemente da transição da entrada de clock, o FF T mantém a saída em um instante igual a saída no instante anterior **invertida**.  

___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  
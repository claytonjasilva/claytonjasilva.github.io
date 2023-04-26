# 10. Memória: células de memória e Flip-Flops

## 10.1 Conceito de memória
A memória é um elemento essencial para o funcionamento dos sistemas sequenciais, como mostrado na figura acima.  
Como discutido, as saídas dos circuitos sequenciais dependem da entrada em um determinado instante e 
das saídas relativas às entradas passadas - *feedback*.  
Pode-se definir fundamentalmente memória como um dispositivo no qual valores binários podem ser armazenados ou retidos
até que seja comandada a substituição do valor atual por um novo valor.  
Os dispositivos de memória normalmente tratados são aqueles mais complexos, como as memórias RAM, ROM etc.  
Trataremos aqui da unidade mais elementar dessas memórias mais complexas, que designaremos como **célula binária** ou ***latch***.
**A célula binária é um circuito sequencial elementar que possui a capcidade de armazenar 1 bit.**  

![Célula binária com portas NAND](/sisdig_aulas/images_sisdig/celulabinarianand.jpg)

Observe que a célula possui uma entrada *SET* e uma entrada *CLEAR* (ou *RESET*).   
O papel da célula é **armazenar 1 bit**.  
Para armazenar o bit *1*, deve se atribuir 0 para entrada *SET*. A saída *Q* irá armazenar o bit 1.  
Para armazenar o bit *0*, deve ser atribuído 0 para a entrada *CLEAR*. A saída *Q* irá armazenar o bit 0.  

Para entender o funcionamento das células binárias é importante definir os **estados** possíveis das entradas *SET* e *CLEAR*.

| Estado | Entradas | Comportamento |
| - | - | - |
| Repouso | *SET*=1, *CLEAR*=1 | Não tem nenhum efeito sobre a saída. As saídas *Q* e $\bar{Q}$ permanecem com os mesmos valores anteriores |
| Resetar | *SET*=1, *CLEAR*=0 | A saídas *Q*=0 e $\bar{Q}=1$, permanecendo 0 mesmo que *CLEAR* retorne ao valor 1 |
| Setar | *SET*=0, *CLEAR*=1 | A saídas *Q*=1 e $\bar{Q}=0$, permanecendo 1 mesmo que *SET* retorne ao valor 1 |
| Ambíguo | *SET*=0, *CLEAR*=0 | A saída é instável - tenta-se resetar e setar o *latch* ao mesmo tempo |

Vamos analisar o funcionamento. A análise dos circuitos sequenciais requer sempre admitir uma **condição inicial**, em virtude da existência de memória.  
Analisando o estado de repouso...

![Célula binária em repouso](/sisdig_aulas/images_sisdig/latchrepouso.jpg)

As condições inicias, são mostradas nas imagens (a) e (b), ou seja, anteriormente tem-se *Q=0* ou *Q=1*.

Analisando o estado de *latch* 'setado'...

![Célula binária 'setada' - primeira condição inicial](/sisdig_aulas/images_sisdig/latchsetado.jpg)

Verifique que as condições iniciais podem ser decompostas em duas partes:
1 - Ambas as entradas *SET* e *CLEAR* iguais a 1, *Q=0*   
Neste caso, a transição da entrada *SET* de 1 para 0 leva a saída *Q* à transição do nível baixo (0) para o nível alto (1).  
Quando o valor de *SET* retornar a 1, o bit 1 mantém-se na saída *Q* - memória, armazenamento de 1 bit.  
Por outro lado, a análise admite uma segunda condição inicial:
2 - Ambas as entradas *SET* e *CLEAR* iguais a 1, *Q=1*

![Célula binária 'setada' - segunda condição inicial](/sisdig_aulas/images_sisdig/latchsetado2.jpg)

Neste caso, a transição da entrada *SET* de 1 para 0 leva a saída *Q* a permanecer no nível alto (1).  
Quando o valor de *SET* retornar a 1, o bit 1 mantém-se na saída *Q* - memória, armazenamento de 1 bit.  

Analisando o estado do *latch* 'resetado'...

![Célula binária 'resetada' - primeira condição inicial](/sisdig_aulas/images_sisdig/latchresetado.jpg)

A análise é similar à análise realizada no caso anterior.  
Admitindo duas condições iniciais, pode-se observar o comportamento apresnetado na figura.

Podemos sintetizar o comportamento do *latch* na tabela verdade apresentada abaixo>

| Set | Clear | Saída |
| - | - | - |
| 1 | 1 | Não muda |
| 0 | 1 | *Q=1* |
| 1 | 0 | *Q=0* |
| 0 | 0 | Inválido |

___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  
**Flip-Flops [próximo >>](flipflop2.md)**









# 9. Fundamentos de máquinas sequenciais

## 9.1 Conceito de sistemas sequenciais
Nosso estudo tem sido dedicado até o momento aos circuitos combinacionais.  
Existe um segmento muito importante dos sistemas digitais, cujos circuitos são categorizados como **circuitos sequenciais**.  
Existe uma ampla gama de problemas em que as técnicas de sistemas digitais podem ser aplicadas. Uma delas se refere ao controle,
em que sinais digitais são recebidos e interpretados por um sistema digital, gerando saídas de controle de acordo com
**uma sequência** em que os sinais são recebidos.  
Nessas aplicações, circuitos com as características dos circuitos combinacionais não são próprios para resolver o problema.  
Estas aplicações exigem que as saídas geradas sejam uma **função das variáveis de entrada presentes e dos valores passados das variáveis de entrada**.
Um modelo de sistema controlado por realimentação (*feedback*) está apresentado na figura.

![Sistema controlado por realimentação](/sisdig_aulas/images_sisdig/sistemafeedback.jpg)

Examinando o modelo da figura é fácil concluir que as entradas presentes *x(t)* e as saidas presentes *u(t)* são comparadas.  
Em seguida, dependendo da comparação, as entradas são modificadas para produzir um resultado sobre o sistema controlado.  
A maneira como os sinais *x(t)* e *u(t)* são combinados determina como será produzido o resultado sobre o sistema controlado.  

**Distinção entre máquinas sequenciais e combinacionais**

| Sequenciais | Combinacionais |
| - | - |
| Deve possuir capacidade de memória | A saída é estritamente função da entrada - não tem memória |
| Deve possuir realimentação | Não possui realimentação |

As duas propriedades básicas descritas na tabela para os sistemas sequenciais são necessárias, mas não são suficientes.  
Os circuitos sequenciais possuem uma propriedade operacional básica: **são cíclicos** sob determinadas condições de controle.

## 9.2 Conceito de memória
A memória é um elemento essencial para o funcionamento dos sistemas sequenciais.  
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

## 9.3 Circuitos síncronos e assíncronos
Vimos a definição de circuitos sequenciais.  
Muitas aplicações de circuitos sequenciais envolvem o emprego de uma referência temporal, 
chamada de **relógio** ou **clock**.  
Circuitos cujo comportamento independe de um sinal de relógio são chamados de circuitos **assíncronos**.  
Circuitos cujo comportamento é regulado pela referência do sinal de clock são chamados de **circuitos síncronos**.
O comportamento do sinal de clock está apresnetado na figura.  

![Sinal de clock](/sisdig_aulas/images_sisdig/clock.jpg)

Tipicamente, o sinal de clock é um **trem de ondas quadradas**.  
Observe que o sinal varia entre dois níveis: alto e baixo. Para circuitos sequenciais é importante salientar que
a transição de um nível para outro é importante. A transição possui uma **borda**, ou seja, um limite entre os dois níveis.  
Embora teoricamente essa transição seja por salto, os sinais reais possuem uma transição que requer um intervalo de tempo $\Delta$ t no circuito.  
Todo sinal de clock é **periódico**, consequentemente possui um ciclo temporal definido por *T<sub>Ck</sub>*.  
O número de ciclos na unidade de tempo define a frequência do sinal, *f<sub>Ck</sub>*, que satisfaz
$$f_{Ck}=\frac{1}{T_{Ck}}$$  
A relação entre o tempo em que o sinal está no nível alto (1) e o período é chamada de *duty cycle*, ou seja, 
$$Duty Cycle=\frac{T_{on}}{T_{Ck}}$$  
, normalmente definido em porcentagem.  











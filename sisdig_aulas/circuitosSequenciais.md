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

![Célula binária em repouso](/sisdig_aulas/images_sisdig/latchrepouso.jpg)

As codições inicias, são mostradas nas imagens (a) e (b), ou seja, anteriormente tem-se *Q=0* ou *Q=1*.







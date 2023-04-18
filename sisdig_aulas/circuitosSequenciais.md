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


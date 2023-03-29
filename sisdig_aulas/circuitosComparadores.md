# 6. Circuitos comparadores 

## 6.1 Comparador de 2 bits

Um comparador é um circuito combinacional projetado para comparar a grandeza relativa de grandezas binárias.  
A figura apresenta o diagrama funcional do circuito.  
![Comparador de 2 bits](/sisdig_aulas/images_sisdig/comparador2bits.jpg)

A tabela verdade que ilustra o funcionamento do circuito é a seguinte

| A<sub>1</sub> | A<sub>0</sub> | B<sub>1</sub> | B<sub>0</sub> | A>B | A=B | A<B |
| - | - | - | - | - | - | - |
| 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 0 | 1 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 0 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 | 1 | 0 |

A figura abaixo apresenta o mapa K para a saída A>B.  
![Mapa K: A>B](/sisdig_aulas/images_sisdig/mapaKamaiorb.jpg)

## 6.2 CI comparador

### 5.4.1 Circuitos integrados digitais (CIs)



Ver o *datasheet* em [*Datasheet* do 54LS283](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/74LS283_National.pdf).  

O 54LS283 é um somador de 4 bits, cujas características básicas são as seguintes (conforme especificado no *datasheet*):  

| Característica | Descição |
| -------------- | -------- |
| Pinagem | 16 pinos |
| Entradas lógicas | A (4 bits), B (4 bits) e C<sub>0</sub> |
| Saídas lógicas | $\sum$ (4 bits) e C<sub>4</sub> |
| Alimentação (V<sub>cc</sub> | 5 volts (nominal) |

O 54LS283 pode ser cascateado utilizando-se covenientemente os pinos de *carry* de entrada e saída,
da mesma maneira que a indicada logicamente na construção modular dos somadores com meio=somador e somador completo.  

A figura ilustra como realizar o cascateamento de somadores de 4 bits.  
![Cascateamento de CIs somadores](/sisdig_aulas/images_sisdig/somadorcascata.jpg)  

### 5.4.3 Somador BCD (*Binary Code Decimal*)
Estudaremos mais à fente diversos tipos de códigos.  

Uma das formas de implementar eletronicamente números decimais é utilizar módulos que permitem
representar somente os dígitos decimais na sua representação binária.  

Dessa forma as **palavras** do código contemplam somente  

| Palavra | Decimal |
| ------- | ------- |
| 0000 | 0 |
| 0001 | 1 |
| 0010 | 2 |
| 0011 | 3 |
| 0100 | 4 |
| 0101 | 5 |
| 0110 | 6 |
| 0111 | 7 |
| 1000 | 8 |
| 1001 | 9 |

A soma BCD é realizada em grupos de 4 bits. Quando a soma dos bits é inferior a 9 (maior dígito decimal) a soma é de binário puro.  

Por exemplo,  
5 + 4 = 9, em binário 0101 + 0100 = 1001.   
45 + 33 = 78. A parcela 5 + 3, em binário 0101 + 0011 = 1000. A parcela 4 + 5, em binário 0100 + 0101 = 1001.  

No entanto, quando a soma resulta maior do o dígito 9, em binário 1001, é necessário somar o resultado ao complemento, C(1001)=0110.

Por exemplo,   
6 + 7 resulta 13. Em binário, 0110 + 0111 = 1101 (palavra inválida). Daí é necessário realizar 1101 + 0110 = 1 0011  

| *Carry* | Soma |
| ------- | ---- |
| 0001 | 0011 |

O somador BCD implementa a soma de cada dígito decimal, transportando o *carry*, reproduzindo exatamente a soma decimal.  

A figura ilustra a operação.  
![Somador BCD](/sisdig_aulas/images_sisdig/somadorbcd.jpg)  
A e B representam os dois dígitos decimais a serem somados em cada módulo somador.  

A saída decimal é dada por $\sum$.  

O *carry* é transportado ao módulo seguinte, caracterizando a dezena, centena, ...  

___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  
**[Subtratores: próximo >>](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/circuitosSubtratores.md)**  







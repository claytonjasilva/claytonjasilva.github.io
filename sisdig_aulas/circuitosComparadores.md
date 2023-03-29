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

Da qual é possível obter o circuito apresentado na figura abaixo.

![Circuito comparador de 2 bits: A>B](/sisdig_aulas/images_sisdig/circuitocomparador.jpg)


## 6.2 CI comparador

Como outros circuitos funcionalmente importantes, o comparador pode ser obtido integrado.  
Ver o *datasheet* em [*Datasheet* do 74LS85](https://html.alldatasheetpt.com/html-pdf/8074/NSC/7485/35/1/7485.html).  

___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  







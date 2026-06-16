# Cap. 5 — Circuitos Comparadores

## 5.1 Comparador de 2 bits

Um **comparador** é um circuito combinacional projetado para comparar a grandeza relativa de duas palavras binárias.

A figura apresenta o diagrama funcional do circuito:

![Comparador de 2 bits — diagrama funcional](/assets/img/sisdig/cap5_comparador2bits.svg)

A tabela-verdade que descreve o funcionamento do circuito é a seguinte:

| A1 | A0 | B1 | B0 | A>B | A=B | A<B |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
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

A figura abaixo apresenta o Mapa K para a saída A>B:

![Mapa K — saída A > B](/assets/img/sisdig/cap5_mapaK_amaiorb.svg)

A partir do Mapa K, obtém-se o circuito apresentado na figura abaixo:

![Circuito comparador de 2 bits — saída A > B](/assets/img/sisdig/cap5_circuito_comparador.svg)

---

## 5.2 CI Comparador

Como outros circuitos funcionalmente importantes, o comparador pode ser obtido na forma integrada.

Ver o *datasheet*: [*Datasheet* do 74LS85](https://html.alldatasheetpt.com/html-pdf/8074/NSC/7485/35/1/7485.html).

---

**[Home — Sistemas Digitais](https://claytonjasilva.github.io/sisdig.html)**

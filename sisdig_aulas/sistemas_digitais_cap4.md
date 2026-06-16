# Cap. 4 — Circuitos Aritméticos: Somadores e Subtratores Binários

Sistemas digitais são projetados para realizar uma variedade de operações aritméticas com bits. Uma das operações mais comuns é a **adição binária**.

---

## 4.1 Meio-somador

A operação de adição de dois bits é dada por:

| + | 0 | 1 |
| :---: | :---: | :---: |
| **0** | 0 | 1 |
| **1** | 1 | **1**0 |

Uma abordagem para projetar um circuito somador é modularizar o circuito.

O módulo relativo à soma dos bits menos significativos de dois números A e B de *n* bits é chamado de **meio-somador**.

O circuito meio-somador considera que:

$$\text{BIT}_0 = 1 + \text{BIT}_1 = 1 \Rightarrow CARRY = 1, \; SOMA = 0$$

A tabela-verdade da soma de dois bits A e B é:

| A | B | SOMA | CARRY |
| :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

Obtendo a expressão booleana e minimizando, chega-se a:

$$SOMA = \bar{A}.B + A.\bar{B} = A \oplus B \qquad CARRY = A.B$$

O meio-somador é representado logicamente pela figura abaixo:

![Meio-somador — representação lógica](/assets/img/sisdig/cap4_meio_somador.svg)

Observando o meio-somador, verifica-se que ele **não possui entrada de carry** — possui somente dois bits de entrada. Portanto, para a implementação modular de um somador completo é necessário outro módulo: o **somador completo**.

---

## 4.2 Somador completo

O somador completo apresenta o comportamento descrito pela tabela-verdade abaixo:

| A | B | C$_{in}$ | SOMA | C$_{out}$ |
| :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

onde $C_{in}$ e $C_{out}$ representam respectivamente o *carry* de entrada e o *carry* de saída.

O somador completo é representado logicamente pela figura abaixo:

![Somador completo — representação lógica](/assets/img/sisdig/cap4_somador_completo.svg)

De modo similar ao meio-somador, pode-se obter a expressão booleana relativa a cada saída do somador completo e, a partir dela, os respectivos circuitos digitais implementados com portas lógicas.

---

## 4.3 Somador de *n* bits

Um somador de dois números binários A e B de *n* bits pode ser implementado modularmente, utilizando o **cascateamento** de **1 meio-somador** e ***n-1* somadores completos**.

- O meio-somador realiza a adição dos dígitos binários menos significativos $A_0$ e $B_0$.
- O *carry* do meio-somador é **transportado** para o módulo seguinte.
- A soma do meio-somador é o dígito menos significativo do resultado, $S_0$.
- No somador completo seguinte, as entradas A e B recebem $A_1$ e $B_1$, e a entrada $C_{in}$ recebe o *carry* do meio-somador.
- A saída do primeiro somador completo é $S_1$.
- Nos módulos seguintes a arquitetura se repete.

A figura ilustra o modelo lógico:

![Somador modular de n bits](/assets/img/sisdig/cap4_somador_modular.svg)

Observe que o dígito mais significativo da soma é o *carry* do último módulo.

---

## 4.4 CI Somador

### 4.4.1 Circuitos integrados digitais (CIs)

O **chip** é um conjunto de elementos eletrônicos integrados em um substrato semicondutor, **encapsulados** em uma embalagem protetora (por exemplo, DIP).

A quantidade de elementos integrados define o **grau de integração** do chip:

- SSI, de *small scale integration*
- MSI, de *medium scale integration*
- LSI, de *large scale integration*
- VLSI, de *very large scale integration*
- ULSI, de *ultra large scale integration*
- GSI, de *giga scale integration*

As figuras abaixo ilustram a organização do chip:

![Encapsulamento e pinagem do chip](/assets/img/sisdig/cap4_circuito_integrado.jpg)

A figura (a) evidencia a **pinagem** do chip, através da qual são estabelecidas as conexões. A figura (b) indica o **chanfro** (entalhe) que os chips possuem a fim de indicar a numeração da pinagem.

A complexidade pode ser definida pelo número de portas integradas no substrato:

| Complexidade | Número de portas |
| :---: | :--- |
| SSI | Menos de 12 |
| MSI | 12 a 99 |
| LSI | 100 a 9.999 |
| VLSI | 10.000 a 99.999 |
| ULSI | 100.000 a 999.999 |
| GSI | Mais de 1.000.000 |

---

### 4.4.2 Somadores integrados

Existem diversos tipos de chips cuja função é produzir a soma de dígitos binários. Pela demanda existente, fabricantes como a *National Semiconductor* integram e encapsulam esses circuitos em chips identificados por um código — por exemplo, **54LS283**.

Ver o datasheet: [*Datasheet* do 74LS283](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/sistemas_digitais_datasheet_74LS283_National.pdf).

O 54LS283 é um **somador de 4 bits** com as seguintes características básicas:

| Característica | Descrição |
| :--- | :--- |
| Pinagem | 16 pinos |
| Entradas lógicas | A (4 bits), B (4 bits) e C0 |
| Saídas lógicas | $\Sigma$ (4 bits) e C4 |
| Alimentação ($V_{CC}$) | 5 volts (nominal) |

O 54LS283 pode ser cascateado utilizando convenientemente os pinos de *carry* de entrada e saída, da mesma maneira que na construção modular com meio-somador e somadores completos.

A figura ilustra o cascateamento de somadores de 4 bits:

![Cascateamento de CIs somadores](/assets/img/sisdig/cap4_somador_cascata.jpg)

---

### 4.4.3 Somador BCD (*Binary-Coded Decimal*)

Uma das formas de implementar eletronicamente números decimais é utilizar módulos que representam somente os dígitos decimais em sua forma binária. As **palavras** do código BCD são:

| Palavra | Decimal |
| :---: | :---: |
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

A soma BCD é realizada em grupos de 4 bits. Quando a soma é inferior a 9, a operação é de binário puro. Por exemplo:

- $5 + 4 = 9$: em binário $0101 + 0100 = 1001$ ✓
- $45 + 33 = 78$: parcela $5+3 \Rightarrow 0101+0011=1000$; parcela $4+3 \Rightarrow 0100+0011=0111$ ✓

Quando a soma resulta maior que 9 ($1001_2$), é necessário somar o resultado ao complemento $C(1001) = 0110$. Por exemplo:

- $6 + 7 = 13$: $0110 + 0111 = 1101$ (palavra inválida) → $1101 + 0110 = 1\,0011$

| *Carry* | Soma |
| :---: | :---: |
| 0001 | 0011 |

O somador BCD implementa a soma de cada dígito decimal, transportando o *carry*, reproduzindo exatamente a soma decimal.

A figura ilustra a operação:

![Somador BCD](/assets/img/sisdig/cap4_somador_bcd.jpg)

A e B representam os dois dígitos decimais a serem somados em cada módulo. A saída decimal é dada por $\Sigma$. O *carry* é transportado ao módulo seguinte, caracterizando a dezena, centena, ...

---

## 4.5 Subtratores

A subtração binária é dada por:

| − | 0 | 1 |
| :---: | :---: | :---: |
| **0** | 0 | 1 |
| **1** | **1**1 | 0 |

**A subtração binária normalmente é realizada pela adição do minuendo ao complemento de 1 ou complemento de 2 do subtraendo.**

Normalmente não se implementa computacionalmente a operação de subtração. No entanto, caso seja necessário implementar o circuito, pode-se adotar o mesmo método da adição, utilizando o **meio-subtrator** e o **subtrator completo**.

A tabela-verdade do meio-subtrator é:

| A | B | A−B | BORROW |
| :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |

Obtendo a expressão booleana e minimizando:

$$A - B = \bar{A}.B + A.\bar{B} = A \oplus B \qquad BORROW = \bar{A}.B$$

O meio-subtrator é representado logicamente pela figura abaixo:

![Meio-subtrator — representação lógica](/assets/img/sisdig/cap4_meio_subtrator.svg)

O circuito com portas lógicas é apresentado abaixo:

![Circuito do meio-subtrator com portas lógicas](/assets/img/sisdig/cap4_circuito_meio_subtrator.svg)

De modo similar ao somador completo, pode-se desenvolver o **subtrator completo**, descrito pela tabela-verdade:

| A | B | B$_{in}$ | DIF | B$_{out}$ |
| :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 1 | 1 |

onde $B_{in}$ e $B_{out}$ representam respectivamente o *borrow* de entrada e o *borrow* de saída.

O subtrator completo é representado por uma figura similar à do somador completo, com as devidas substituições.

Um subtrator de dois números binários A e B de *n* bits pode ser implementado modularmente, utilizando o **cascateamento** de **1 meio-subtrator** e ***n-1* subtratores completos**.

---

**[Home — Sistemas Digitais](https://claytonjasilva.github.io/sisdig.html)**
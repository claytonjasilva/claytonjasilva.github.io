# Cap. 1 — Sinais Digitais e Analógicos

## 1.1 Dimensões e unidades de medida

Os fenômenos se manifestam em quantidades que podem ser medidas, registradas e processadas.

As variáveis utilizadas para especificar requisitos de fenômenos expressam uma quantidade mensurável. Para descrevê-los completamente, referem-se a unidades de comparação ou de medida.

As aplicações das grandezas e unidades de medida podem ser classificadas como:

1. **Avaliação de desempenho**: o sistema funciona de acordo com o desejado?
2. **Controle de processos**: nas operações de realimentação, a medida observada indica se o processo se mantém de acordo com condições específicas.
3. **Contagem**: registro de uso ou fluxo de uma quantidade.
4. **Pesquisa**: as medidas dos fenômenos validam ou refutam as hipóteses formuladas?
5. **Projeto**: acompanhamento e controle dos requisitos das entregas.

Uma revisão rápida sobre [dimensões, unidades e aritmética computacional](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/dimensoesUnidadesAritmeticaComputacional1.md).

---

## 1.2 Sinais analógicos, discretos e digitais

### 1.2.1 Sinais analógicos

Sinais analógicos apresentam uma variação contínua de valores, definida em qualquer instante de tempo durante uma janela de observação.

A continuidade dos valores observados (variável dependente *x*) e do tempo (variável independente *t*) pode ser expressa matematicamente como:

$$x(t) = f(t)$$

onde:
- *x(t)* é a variável dependente, que pode assumir qualquer valor *X* entre dois valores quaisquer $x_0$ e $x_1$ — **continuidade em amplitude**;
- *t* é a variável independente, que pode assumir qualquer valor *T* entre dois instantes quaisquer $t_0$ e $t_1$ — **continuidade no tempo**.

![Sinal analógico — contínuo em amplitude e no tempo](/assets/img/sisdig/cap1_analogico.svg)

Para representar sinais analógicos em sistemas computacionais, é necessário **discretizá-los**. Os sistemas computacionais possuem capacidade **finita** de representar números, portanto a discretização consiste em:

- **Amostrar o sinal no tempo**: registrar observações apenas em intervalos discretos;
- **Quantizar o sinal**: aproximar os valores medidos a um conjunto finito de níveis.

---

### 1.2.2 Amostragem de sinais analógicos

A **amostragem** consiste em registrar o sinal *x(t)* somente em instantes discretos de tempo. Por conveniência de implementação, a amostragem é realizada em intervalos periódicos constantes, denominados **período de amostragem** $T_A$.

![Sinal amostrado — discreto no tempo, contínuo em amplitude](/assets/img/sisdig/cap1_amostrado.svg)

Quanto menor o período de amostragem $T_A$, mais o sinal amostrado se aproxima do sinal analógico original. Quando $T_A \to 0$, o sinal amostrado converge ao analógico. Por outro lado, períodos de amostragem maiores reduzem a fidelidade do sinal resultante.

A todo período *T* corresponde uma frequência $f = 1/T$, medida em Hertz (Hz). Portanto, ao período de amostragem corresponde a **frequência de amostragem**:

$$f_A = \frac{1}{T_A}$$

**Teorema de Nyquist.** Um sinal *S(t)* com largura de banda *B* deve ser amostrado com frequência de amostragem tal que:

$$f_A \geq 2B$$

Após a amostragem, embora o sinal permaneça contínuo em amplitude, passa a ser **discreto no tempo**. Pode então ser definido em instantes $n = 0, 1, 2, \ldots$ correspondentes ao tempo $n \cdot T_A$:

$$x(n) = f(n)$$

onde *n* é a variável independente discreta ($n = 0, 1, 2, \ldots$).

---

### 1.2.3 Quantização de sinais analógicos

A **quantização** consiste em representar o sinal *x(t)* com valores pertencentes a um conjunto discreto finito $C = \{x_0, x_1, \ldots, x_{N}\}$.

Os valores discretos variam entre um limite inferior $x_{MIN}$ e um limite superior $x_{MAX}$, totalizando **L níveis**. O intervalo entre dois níveis consecutivos é denominado **degrau de quantização**:

$$\Delta = \frac{x_{MAX} - x_{MIN}}{L - 1}$$

O degrau de quantização determina o **erro de quantização**, ou seja, a perda de informação decorrente da aproximação.

![Sinal quantizado — discreto em amplitude, contínuo no tempo](/assets/img/sisdig/cap1_quantizado.svg)

O sinal quantizado $x_Q$ só pode assumir valores nos limites dos níveis estabelecidos, em qualquer instante de tempo *t*:

$$x_Q(t) = f(t), \quad x_Q \in C = \{x_0, x_1, \ldots, x_{L-1}\}$$

---

### 1.2.4 Sinais digitais

Os sinais digitais assumem somente **dois níveis lógicos**, cuja abstração matemática é $\{0, 1\}$.

Fisicamente, os bits **1** e **0** se apresentam como sinais elétricos cujos valores dependem da tecnologia empregada. Existem diversas famílias de circuitos que reproduzem fisicamente portas lógicas, como:

- **RTL** — *Resistor Transistor Logic*
- **DTL** — *Diode Transistor Logic*
- **TTL** — *Transistor Transistor Logic*
- **CMOS** — *Complementary Metal-Oxide Semiconductor*

Após amostrado e quantizado, o sinal analógico assume a forma de um sinal digital, com apenas dois níveis possíveis:

![Sinal digital — dois níveis lógicos {0,1}](/assets/img/sisdig/cap1_digital.svg)

---

### 1.2.5 Conversão analógico-digital (A/D)

Embora a maioria dos fenômenos naturais se apresente como analógica, há diversas vantagens em processá-los digitalmente:

- Facilidade de projeto
- Facilidade de armazenamento
- Precisão suficiente para a aplicação
- Facilidade de processamento
- Robustez a ruído
- Facilidade de integração

Uma aplicação típica é o armazenamento de músicas. O sinal sonoro captado pelo microfone é analógico e deve ser convertido para o formato digital antes de ser armazenado ou transmitido.

![Aplicação típica de conversão A/D — gravação de áudio](/assets/img/sisdig/cap1_aplicacao_AD.svg)

O processo de conversão analógico-digital envolve três etapas sequenciais:

1. **Amostragem** — discretização no tempo com período $T_A$;
2. **Quantização** — discretização em amplitude com *L* níveis e degrau $\Delta$;
3. **Codificação** — associação de cada nível quantizado a uma palavra binária.

![Etapas da conversão analógico-digital (A/D)](/assets/img/sisdig/cap1_conversao_AD.svg)

A **codificação binária** consiste em relacionar um conjunto de elementos discretos a palavras binárias, que podem ser armazenadas e processadas digitalmente. O exemplo mais simples é o código **BCD** (*Binary-Coded Decimal*):

| Decimal | Código BCD |
| :-----: | :--------: |
| 0 | 0000 |
| 1 | 0001 |
| 2 | 0010 |
| 3 | 0011 |
| 4 | 0100 |
| 5 | 0101 |
| 6 | 0110 |
| 7 | 0111 |
| 8 | 1000 |
| 9 | 1001 |

Ao tratarmos dos sinais digitais armazenados e processados por sistemas digitais, convém recordar o modelo em camadas dos computadores — especificamente o **modelo de 6 níveis**:

- **Nível 0 — Lógica digital**: portas lógicas (*gates*) combinadas em série e em paralelo. Os dados são sinais elétricos, abstração dos *bits* (*binary digits*).
- **Nível 1 — Microarquitetura**: circuitos especializados — registradores, Unidade Lógica e Aritmética (ULA), barramentos internos (caminho de dados) e Unidade de Controle, constituída de microprogramas ou circuitos eletrônicos.

---

**[Home — Sistemas Digitais](https://claytonjasilva.github.io/sisdig.html)**
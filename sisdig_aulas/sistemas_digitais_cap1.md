# Cap 1. Sinais Digitais e Analógicos

## 1.1 Dimensões e unidades de medida

Os fenômenos se manifestam em quantidades que podem ser medidas, registradas e processadas.  

As variáveis utilizadas para especificar requisitos de fenômenos expressam uma quantidade mensurável, no entanto, para descrevê-los completamente, referem-se a unidades de comparação ou de medida.  

As aplicações das grandezas e unidades de medida podem ser classificadas como:

1. **Avaliação de desempenho**: o sistema funciona de acordo com o desejado?
2. **Controle de processos**: nas operações de realimentação a medida observada indica se o processo se mantém de acordo com condições específicas.
3. **Contagem**: registro de uso ou fluxo de uma quantidade.
4. **Pesquisa**: as medidas dos fenômenos validam ou refutam as hipóteses formuladas?
5. **Projeto**: acompanhamento e controle dos requisitos das entregas.

Uma revisão rápida sobre [dimensões, unidades e aritmética computacional](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/dimensoesUnidadesAritmeticaComputacional1.md)

## 1.2 Sinais analógicos, discretos e digitais

### 1.2.1 Sinais analógicos

Apresentam uma variação contínua de valores e definida em qualquer instante de tempo durante uma janela temporal de observação. 
A continuidade dos valores observados (variável dependente *x*) e continuidade do tempo (variável independente *t*) em relação ao qual é medida a grandeza pode ser definida matematicamente da seguinte forma

$$ x(t)=f(t) $$

, onde *x(t)* é a variável dependente, que pode assumir um valor *X* entre dois valores quaisquer x<sub>0</sub> e x<sub>1</sub> - continuidade em *x*; e  
*t* é a variável independente, que pode assumir um valor *T* entre dois valores quaisquer t<sub>0</sub> e t<sub>1</sub> - continuidade em *x*.

![Sinais analógicos](/sisdig_aulas/images_sisdig/analogico.jpg)

Para transformar os sinais analógicos relativos aos fenômenos da natureza e representá-los nos sistemas computacionais é necessário **discretizar**.

Os sistemas computacionais possuem capacidade **finita** de representar números, logo a discretização consiste em:  

- Registrar as observações somente em intervalos discretos, **amostranto o sinal no tempo**; e  
- Apróximar os valores medidos a um conjunto finito de valores, **quantiando o sinal**.

### 1.2.2 Amostragem de sinais analógicos

Os sinais *x(t)* analógicos são registrados somente em intervalos de tempo.  
A esse procedimento se dá o nome de **amostragem**.   
Por uma conveninência de implementação, a amostragem do sinal analógico é realizado em intervalos de tempo periódicos constantes. O intervalo de amostragem é chamado **período de amostragem**, *T<sub>A</sub>*. 
A figura ilustra o sinal amostrado.  

![Sinal amostrado](/sisdig_aulas/images_sisdig/amostrado.jpg)

Não é difícil observar que quanto menor o intervalo de amostragem (*T<sub>A</sub>*), mais o sinal amostrado se aproxima do sinal analógico. Ou seja, quando *T<sub>A</sub>* converge a 0, o sinal amostrado se aproxima do sinal analógico.  
Por outro lado, quanto maior o intervalo de amostragem, menor é a fidedignidade do sinal resultante em relação ao original.  

Fisicamente, a todo sinal de período *T* corresponde uma frequência *f=1/T*, medida em Hertz (Hz), logo para o intervalo ou período de amostragem corresponde uma frequência de amostragem em que 

$$T_A = \frac{1}{f_A}$$.  

**Teorema de Nyquist.** Aprofundaremos posteriormente, mas o teorema de Nyquist postula que um sinal *S(t)* com banda *B* deve ser amostrado com uma frequência de amostragem tal que

$$f_A≥2.B$$.

Não é difícil concluir também que existe **perda de informação** quando se realiza a aproximação
de um sinal analógico para um sinal digital. Por outro lado, para a computação é conveniente lidar com sinais digitais por diversos motivos, a despeito de alguma perda na amostragem.  

Embora o sinal seja contínuo nos valores observados (variável dependente *x*), após amostrado passa a discreto no tempo, consequentemente pode ser definido em instantes discretos *n = 0, 1, 2, ...* correspondente ao tempo *n.T<sub>A</sub>*, logo que pode ser definido matematicamente da seguinte forma

$$ x(n)=f(n) $$

, onde *x(n)* é a variável dependente, que pode assumir um valor *X* entre dois valores quaisquer x<sub>0</sub> e x<sub>1</sub> - continuidade em *x*; e  
*n* é a variável independente, *n = 0, 1, 2, ...*.

### 1.2.3 Quantização de sinais analógicos

Os sinais *x(t)* analógicos são registrados somente em valores pertencentes a um conjunto discreto $x\in$ *C={x<sub>0</sub>, x<sub>1</sub>, ..., x<sub>N</sub>}*.  

Normalmente, os valores discretos variam entre o valor inferior de *x* e o valor superior, totalizando ***L* níveis**, de modo que entre dois níveis se configura o chamado **degrau de quantização**, ou seja,  

$$ \Delta = \frac{x_{MAX}-x_{MIN}}{L-1} $$

O degrau de quantização indica o erro de quantização ocorrido no processo de quantização do sinal analógico.  
A figura mostra o sinal quantizado.

![Sinal amostrado](/sisdig_aulas/images_sisdig/quantizado.jpg)

Não é difícil concluir também que existe **perda de informação** quando se realiza a aproximação
de um sinal analógico para um sinal quantizado.  

O sinal quantizado (variável dependente *x*) só pode assumir valores nos limites dos níveis discreteos estabelecidos para quantização, em qualquer instante de tempo *t* (variável independente), logo que pode ser definido matematicamente da seguinte forma

$$ x_Q(n)=f(t) $$

, onde *x<sub>Q</sub>* é a variável dependente, que pode assumir um valor *X* pertencente ao conjunto de dimensão L, *C={x<sub>0</sub>, x<sub>1</sub>, ..x<sub>L-1</sub>}*; e   
*t* é a variável independente contínua.

### 1.2.4 Sinais digitais

Os sinais digitais assumem somente dois níveis lógicos cuja abstração matemática é *{0,1}*.  
Fisicamente, os bits 1 e 0 se apresentam como sinais elétricos cujos valores dependem da tecnologia empregada.  
Existem várias famílias de circuitos elétricos que reproduzem fisicamente blocos lógicos (serão discutidos posteriromente), como *RTL, Resistor Transistor Logic*, *DTL, Diode Transistor Logic*, *TTL, Transistor Transistor Logic*, *CMOS, Complementary Metal-Oxide Semiconductor*, como discutiremos posteriormente.  
Considerando a abstração dos sinais elétricos como 0s e 1s, o sinal analógico, após quantizado e amostrado, assume a forma apresentada na figura.  

![Sinal digital](/sisdig_aulas/images_sisdig/digital.jpg)

### 1.2.4 Conversão analógico-digital (AD)

Embora a maioria dos fenômenos observados na natureza se apresentem tipicamente como analógicos, há uma série de vantagens de processá-los digitalmente, aproveitando o avanço da tecnologia:

- Facilidade de projeto
- Facilidade de armazenamento
- Precisão suficiente para a aplicação
- Facilidade de processamento
- Robustez a ruído
- Facilidade de integração  

Uma aplicação típica e simples de compreender é o armazenamento de músicas. A figura ilustra a aplicação de conversão de sinal analógico para digital.

![Aplicação de conversão AD](/sisdig_aulas/images_sisdig/aplicacao_AD.jpg)

Tipicamente, o processo de conversão analógico-digital envolve a amostragem do sinal analógico, 
a quantização e finalmente a **codificação**.  

![Etapas da conversão AD](/sisdig_aulas/images_sisdig/conversao_AD.jpg)

A codificação binária consiste em relacionar um conjunto de **elementos discretos** a um conjunto de **palavras binárias**, as quais podem ser armazenadas e processadas digitalmente.  O exemplo mais simples é o chamado código *BCD, Binary-To-Decimal*.  

| Decimal | Código BCD |
| ------- | ---------- |
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

Quando tratamos dos sinais digitais, armazenados e processados pelos sistemas digitais, convém recordarmos o modelo dos computadores de acordo com um conjunto de camadas, especificamente do modelo de 6 níveis, em que:

- **Nível 0 - nível de lógica digital**. Mais elementar. portas lógicas (gates), que podem ser combinadas em série e em paralelo. Os dados são sinais elétricos, abstrações  dos bits (*binary digits*).
- **Nível 1 - nível de microarquitetura**. Circuitos especializados: registradores; Unidade Lógica e Aritmética; barramentos internos – caminho de dados; Unidade de Controle, constituída de microprogramas ou de circuitos eletrônicos.

___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  
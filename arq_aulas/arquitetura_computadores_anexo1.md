# ANEXO 1 - Grandezas Numéricas e Unidades de Medida

## 1.1 Medindo fenômenos

Os fenômenos naturais são observados e afetam a vida da humanidade. Influenciam o comportamento em todos os contextos da existência da humanidade, seja no âmbito social, econômico, de lazer, de saúde, ou qualquer outro. São exemplos de fenômenos naturais a corrente elétrica, os ventos, a gravidade etc.

Para compreender os fenômenos, adaptar, explorar ou proteger-se dos seus efeitos, é necessário mensurá-los. Nesse sentido, utilizar grandezas numéricas e estabelecer as escalas próprias para medir o comportamento dos fenômenos é fundamental. Para a engenharia a dimensão dos fenômenos normalmente é definida pela **grandeza numérica** seguida por uma **unidade de medida**.

### 1.1.1 Representação de grandezas numéricas

As grandezas numéricas são utilizadas para quantificar os fenômenos. A representação da grandeza numérica consagrada historicamente foi a representação que emprega 10 **dígitos numéricos**, definidos pelo **conjunto ordenado** B<sub>10</sub> = {0, 1, 2 , 3, 4, 5 , 6, 7, 8, 9}. A esse sistema de representação numérica dá-se o nome de **sistema decimal**.  

Por conjunto ordenado entende-se como aquele conjunto cujos elementos possuem um valor relativo entre eles. No caso do sistema decimal, o dígito *8* é superior aos dígitos *7*, *6*, ...*0*, assim por diante.  

**Independentemente da base**, as grandezas numéricas podem ser representadas de acordo com duas notações:  

- Notação **posicional** ou
- Notação **polinomial**

#### a. Notação posicional  

Na notação posicional, a posição relativa do dígito na representação do número determina o valor que possui na grandeza numérica. Pode-se generalizar essa representação de um número com M dígitos por:   

$$ N_b = d_{(m-1)}d_{(m-2)}...d_0 $$

, onde

- *N* é a grandeza,
- *b* é a base,
- *m* é o número de dígitos usados na representação.

Os índices *0* a *m-1* representam a posição relativa do dígito na grandeza.  

Os dígitos à esquerda são os **mais significativos**.

#### b. Notação polinomial  

Na notação polinomial a grandeza numérica é representada pela soma ponderada dos seus dígitos pela potência da base em que o número está representado. Um número de M dígitos será representado por:

$$ N_b = d_{(m-1)}.b^{m-1}+d_{(m-2)}.b^{m-2}+...+d_0.b^0 $$

, onde   
- *N* é a grandeza,   
- *b* é a base,   
- *m* é o número de dígitos usados na representação.  

### 1.1.2 Múltiplos e submúltiplos de base 10

Para a representação de grandezas numéricas muito elevadas, a fim de simplificar, é adequado apresentá-las como potência de expoente positivo (múltiplos); e muito baixas, apresentá-las como potência de expoente negativo (submúltiplos). 

| Expoente | Valor | Prefixo | Expoente | Valor | Prefixo |
| -------- | ----- | ------- | -------- | ----- | ------- |
| 10<sup>-3</sup> | 0,001 | mili | 10<sup>3</sup> | 1.000 | Kilo |
| 10<sup>-6</sup> | 0,000001 | micro | 10<sup>6</sup> | 1.000.000 | Mega |
| 10<sup>-9</sup> | 0,000000001 | nano | 10<sup>9</sup> | 1.000.000.000 | Giga |
| 10<sup>-12</sup> | 0,000000000001 | pico | 10<sup>12</sup> | 1.000.000.000.000 | Tera |

Por exemplo, intervalos entre operações computacionais no nível mais elementar são frequentemente estabelecidos em bilionésimos de segundos (unidade de medida de tempo), ou seja, em nanossegundos.

## 1.2 A representação da informação nos sistemas computacionais

Os sistemas computacionais são utilizados para armazenar, recuperar, transmitir, processar informações que permitem mediar os fenômenos observados e que influenciam o comportamento da humanidade. As informações se caracterizam como:
- elementos discretos, ou seja, que pertencem a um conjunto finito;
- grandezas inteiras pertencentes a um conjunto infinito, definidas em valor absoluto ou não;
- grandezas reais pertencente a um conjunto infinito, definidas em valor absoluto ou não.

Computacionalmente, a representação das informações é limitada pela capacidade de representar os limites de grandezas muito grandes ou pequenas, assim como pela precisão exigida adequada para o comportamento do fenômeno em pauta.

#### bit e *byte (B)*

Em razão da construção física dos sistemas computacionais, ou seja, do *hardware*, os sistemas computacionais modernos utilizam o sistema binário. Os computadores modernos são construídos utilizando componentes eletrônicos classificados como circuitos digitais. De um modo geral, os componentes eletrônicos são classificados como analógicos ou digitais. 

A classificação como analógico ou digital deriva da forma como o sinal elétrico (tensão ou corrente) se comporta em função do tempo. Quando o sinal de resposta do componente é contínuo o componente é analógico, em caso contrário, quando admite somente dois níveis de tensão, o componente é chamado de digital. Circuitos digitais são aqueles construídos com componentes eletrônicos digitais. Uma característica particular é importante ao contexto da nossa discussão aqui: **os sinais apresentam somente dois níveis de tensão elétrica**, *high* (H) ou *low* (L).   

A abstração para tratar os dois valores de informação (ou dados) utilizados para representação dos números nos sistemas computacionais é associar o sinal H ao 1 e o sinal L ao 0. Portanto, nessa abstração as grandezas numéricas nos sistemas computacionais são representadas por dígitos binários 0s e 1s.  

A **menor unidade de informação** nos sistemas computacionais é o **bit**, que é um acrônimo de ***bi**nary digi**t***.  Como unidade binária, o bit só pode assumir dois valores: 0 ou 1.  

Por conveniência da representação das informações em sistemas computacionais, em certas circunstâncias utiliza-se o múltiplo de 8 bits, chamado de ***byte (B)***. 

| Unidade | Equivalência |
| ------- | -------- |
| 1 ***byte*** | **8** bits |

#### Múltiplos de bits

A capacidade de armazenar ou de processar informações computacionais é indicada em bits, bytes ou múltiplos binários.

Há uma ambiguidade no uso dos prefixos **k, M e G** quando se fala em capacidade ou processamento de informações digitais porque esses símbolos vêm do Sistema Internacional (SI), onde representam potências de 10, enquanto os computadores operam naturalmente em base 2. Como 2<sup>10</sup> = 1024 é próximo de 1000, passou-se historicamente a utilizar “KB”, “MB” e “GB” tanto para valores decimais quanto para valores binários (1024, 1024², 1024³), gerando dupla interpretação para a mesma notação.

Essa diferença torna-se relevante porque fabricantes de dispositivos de armazenamento normalmente adotam a base 10 (por exemplo, 1 GB = 1.000.000.000 bytes), enquanto sistemas operacionais e memórias tradicionalmente utilizam a base 2 (1 GB ≈ 1.073.741.824 bytes). Assim, o mesmo símbolo pode representar quantidades **diferentes dependendo do contexto**, exigindo atenção técnica para evitar interpretações incorretas.

Convém lembrar que para medir **capacidade de armazenamento de memórias** é comum utilizar potências de 2. A tabela apresenta um resumo.

| Expoente | Valor | Prefixo |
| -------- | ----- | ------- |
| 2<sup>10</sup> | 1.024 | Kilo |
| 2<sup>20</sup> | 1.048.576 | Mega |
| 2<sup>30</sup> | 1.073.741.824 | Giga |

## 1.3 Conversão de bases

As informações armazenadas ou processadas computacionalmente são chamadas genericamente de dados. São representações binárias daquelas que mensuram os fenômenos da natureza. Os dados são codificações binárias de símbolos discretos; representações binárias de números inteiros representadas em base decimal; codificações binárias de números reais, chamadas de números de ponto flutuante; e codificações binárias de números negativos.

[Conversão de bases](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/arquitetura_computadores_anexo2.md)

___
**Home [Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)




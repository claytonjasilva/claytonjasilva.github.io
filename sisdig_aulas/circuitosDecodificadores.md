# 6. Circuitos decodificadores

## 6.1 Códigos binários

O processo de codificação digital consiste na definição de um grupo de dígitos binários para representar um conjunto discreto de elementos.  

Sinteticamente, um **código** é uma representação simbólica de uma transformação da infomação.  

Cada **palavra do código** define uma representação binária inequívoca, ou seja, que não se confunde com nenhuma outra, única, de cada elemento discreto.  

Caso haja duas palavras distintas para representar o mesmo elemento discreto o código é **ambíguo**, o que é uma característica indesejável.  

Existem diferente esquemas de codificação, cada um com suas particularidade, vantagens e desvantagens (Não as discutiremos aqui).  

### 6.1.1 Código BCD (*Binary Coded Decimal*)
O código BCD representa os dígitos decimais.  

Existema vários tipos de códigos BCD, tratarems especificamente do código 8421 BCD, algumas vezes designado como NBCD, de *Natural Binary Coded Decimal*.   

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

### 6.1.2 Códigos UDC (*Unit Distance Code*)
Existem aplicações em que é desjável representar valores numéricos bem como outras informações em que uma palavra da adjacente muda somente uma posição.  

Esse tipo de código possui distância unitária, portanto é chamado de **código UCD**. 

Um código UCD conhecido é o chamado código de Gray de 4 bits.  

| Palavra | Decimal |
| ------- | ------- |
| 0000 | 0 |
| 0001 | 1 |
| 0011 | 2 |
| 0010 | 3 |
| 0110 | 4 |
| 0111 | 5 |
| 0101 | 6 |
| 0100 | 7 |
| 1100 | 8 |
| 1101 | 9 |
| 1111 | 10 |
| 1110 | 11 |
| 1010 | 12 |
| 1011 | 13 |
| 1001 | 14 |
| 1000 | 15 |

### 6.1.3 Códigos alfanuméricos
Quando os elementos discretos incluem incluem, além dos dígitos decimais, caraceres alfabéticos e símbolos especiais caracteriza-se um **código alfanumérico**.  

Um código alfanumérico amplamente usado é o códgo ASCII, padronizado pela *American Standard Code For Information Interchange*.  
Cada palavra do código ASCII possui 8 bits.  

O código utiliza 7 bits para representar um conjunto de 128 sinais:  
- 95 sinais gráficos (letras do alfabeto latino, algarismos arábicos, sinais de pontuação e sinais matemáticos) e
- 33 sinais de controle.  

O bit não utilizado pode ser utilizado de diferentes maneiras.  

|   |   |   |   | b<sub>7</sub> b<sub>6</sub> b<sub>5</sub> | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
| - | - | - | - | - | - | - | - | - | - | - | - | - |
| **b<sub>4</sub>** | **b<sub>3</sub>** | **b<sub>2</sub>** | **b<sub>1</sub>** |   |  |   |   |   |   |   |   |   |
| 0 | 0 | 0 | 0 |   | NULL | DLE | SP | 0 | @ | P | ´ | p |
| 0 | 0 | 0 | 1 |   | SOH | DC1 | ! | 1 | A | Q | a | q |
| 0 | 0 | 1 | 0 |   | STX | DC2 | " | 2 | B | R | b | r |
| 0 | 0 | 1 | 1 |   | ETX | DC3 | # | 3 | C | S | c | s |
| 0 | 1 | 0 | 0 |   | EOT | DC4 | $ | 4 | D | T | d | t |
| 0 | 1 | 0 | 1 |   | ENQ | NAK | % | 5 | E | U | e | u |
| 0 | 1 | 1 | 0 |   | ACK | SYN | & | 6 | F | V | f | v |
| 0 | 1 | 1 | 1 |   | BEL | ETB | ' | 7 | G | W | g | w |
| 1 | 0 | 0 | 0 |   | BS | CAN | ( | 8 | H | X | h | x |
| 1 | 0 | 0 | 1 |   | HT | EM | ) | 9 | I | Y | i | y |
| 1 | 0 | 1 | 0 |   | LF | SUB | * | : | J | Z | j | z |
| 1 | 0 | 1 | 1 |   | VT | ESC | + | ; | K | [ | k | { |
| 1 | 1 | 0 | 0 |   | FF | FS | , | < | L | \ | l | | |
| 1 | 1 | 0 | 1 |   | CR | GS | - | = | M | ] | m | } |
| 1 | 1 | 1 | 0 |   | SO | RS | . | > | N | ^ | n | ~ |
| 1 | 1 | 1 | 1 |   | SI | US | / | ? | O | _ | o | DEL |

Cada caractere pode ser referenciado pela sua representação binária e, de modo equivalente, pela sua representação decimal ou hexadecimmal.  
Por exemplo, o caractere *B* possui a codificação 0100 0010, logo 0x42 ou 66 na representação decimal.

## 6.2 Circuitos codificadores
São circuitos lógicos que aceitam *M* entradas, em que **somente uma entrada é ativada por vez**, e ativa as saídas que correspondem à palavra do código de *N* bits que representa a entrada.  

A entrada ativada representa o símbolo discreto representado pela palavra de saída.  

A figura ilustra o codificador típico.  
![Circuito codificador](/sisdig_aulas/images_sisdig/codificador.jpg)

Obviamente, é necessário que 2<sup>N</sup> seja maior ou igual a M, de modo que todos os elementos discretos associados à entrada sejam representados por uma palavra sem ambiguidade.  

Um codificador binário de 8 bits pode ter o comportamento representado pela seguinte tabela verdade

| A<sub>7</sub> | A<sub>6</sub> | A<sub>5</sub> | A<sub>4</sub> | A<sub>3</sub> | A<sub>2</sub> | A<sub>1</sub> | A<sub>0</sub> | O<sub>2</sub> | O<sub>1</sub> | O<sub>0</sub> | 
| - | - | - | - | - | - | - | - | - | - | - |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 |

As entradas são  A<sub>7</sub>A<sub>6</sub>A<sub>5</sub>A<sub>4</sub>A<sub>3</sub>A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>.  

As saídas são O<sub>2</sub>O<sub>1</sub>O<sub>0</sub>.   

A tabela verdade sugere que **pelo menos uma entrada sempre estará ativada**.  

A entrada A<sub>j</sub> ativada implica como saída a palavra binária de 3 bits equivalente ao decimal *j*.    

É necessário observar que dependendo do projeto o codificador também pode definir palavras relacionadas a outra combinação binária própria das entradas.  

Um exemplo típico é o [CD4511B](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/CD4511_Texas.pdf).  

Trata-se de um CI que possui 4 bits de entradas lógicas e 7 bits de saídas lógicas.  

Funcionalmente, o CD4511 converte as entradas *ABCD* de um código BCD para as saídas associadas a um *display* de 7 segmentos.  

O *display* de 7 segmentos é o encapsulamento de um conjunto de 7 LEDs.  

Os segmentos são identificados por letras *a, b, c, d, e, f*, que permitem formar caracteres alfanuméticos quando ativados.  

A figura ilustra os segmentos.  
![*Display* de 7 segmentos](/sisdig_aulas/images_sisdig/setesegmentos.jpg)

A figura apresenta o esquema elétrico da conexão do *decoder* com a organização interna do *display*.  
![Circuito*decoder*-*display*](/sisdig_aulas/images_sisdig/circuitodecoder7segmentos.jpg)

Observe que o CD4511 possui também **entradas de controle** que influenciam a palavra gerada na saída do circuito.  

**Embora o *datasheet* trate o CD4511 como *BCD-to-7-Segment Decoder* ele satisfaz exatamente a definição que apresentamos,
embora realize de fato a *decodificação* do código BCD e codificação para o código de 7 segmentos.**

## 6.3 Circuitos decodificadores (*decoders*)
Realizando a operação inversa dos circuitos codificadores, os *decoders* são circuitos lógicos que aceitam *N* entradas de um código, cada uma representando a palavra de um código,
e **ativam somente uma das *M* saídas**, que corresponde ao elemento do conjunto discreto relacionado por aquela palavra.  

A figura ilustra o *decoder* típico.  
![Meio-somador](/sisdig_aulas/images_sisdig/decodificador.jpg)

Um decodificador binário de 3 bits pode ter o comportamento representado pela seguinte tabela verdade

| C | B | A | O<sub>7</sub> | O<sub>6</sub> | O<sub>5</sub> | O<sub>4</sub> | O<sub>3</sub> | O<sub>2</sub> | O<sub>1</sub> | O<sub>0</sub> | 
| - | - | - | - | - | - | - | - | - | - | - |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

Como já visto no CD4511, os circuitos integrados operam não somente com sinais lógicos,
mas também com sinais de controle. A figura apresenta.  
![Sinal de controle - *enable*](/sisdig_aulas/images_sisdig/decodificadorcontrole.jpg)

O sinal de controle é chamado de ***enable***.  

O sinal de *enable* normalmente habilita ou desabilita o circuito para realizar a função para a qual foi projetado.  

A figura ilustra o esquema geral de um *decoder* BCD produzindo uma saída decimal.  
![DEcoder BCD-decimal](/sisdig_aulas/images_sisdig/decoderbcddecimal.jpg)

Observe que, diferentemente da tabela verdade apresentada acima, nem todas as combinações das entradas ativam uma saída. 
No caso, somente as palavras binárias do código BCD ativam saída.

Um *datasheet* com todas as especificações de um decoder BCD-decimal está disponível para o [CD4028](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/CD4028_Texas.pdf).

___
**[Home Conteúdo Sistemas Digitais](/sisdig_aulas.md)**  




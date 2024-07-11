# ANEXO III - Representação numérica: binário puro, inteiros negativos, ponto flutuante 

## III.1 Representação de números em binário puro
As grandezas numéricas representadas nos sistemas computacionais utilizam o sistema binário de numeração.  

Os conjuntos dos números discutidos na matemática do "sistema decimal" também merecem um tratamento próprio nos sistemas computacionais.  

Nos sistemas computacionais, em certas circunstâncias, é necessário tratar somente o **valor absoluto**, isto é, sem sinal, do **número inteiro**.  
Designaremos essa representação dos números dos sistemas computacionais como **representação em binário puro.**  

## III.2 A **palavra de máquina**
"Em ciência da computação, palavra (em inglês: word) é a unidade natural de informação usada por cada tipo de computador em particular.
É uma sequência de bits de tamanho fixo que é processado em conjunto numa máquina." 
[Wikipédia](https://pt.wikipedia.org/wiki/Palavra_(ci%C3%AAncia_da_computa%C3%A7%C3%A3o)#:~:text=Em%20ci%C3%AAncia%20da%20computa%C3%A7%C3%A3o%2C%20palavra,processado%20em%20conjunto%20numa%20m%C3%A1quina.)

Para não haver equívoco, sempre que nos referirmos a uma grandeza numérica tratada pelos sistemas computacionais, 
definiremos o tamanho da **palavra**, conforme o sentido descrito acima, da arquitetura.

## III.3 Representação de **números inteiros negativos**  
Seja um número binário negativo com *m* bits, ele pode ser representado das seguintes notações:  
- Representação em **bit sinal (sinal e magnitude)**  
- Representação em **complemento de 1** 
- Representação em **complemento de 2**  
- Representação em **excesso 2<sup>m-1</sup>** 

### III.3.1 Representação em sinal e magnitude (bit sinal)
#### a. Representação
Seja um número de *m* bits, ***N = b<sub>m-1</sub> ... b<sub>1</sub> b<sub>0</sub>***, usando a notação em bit sinal,
1. Na posição **mais significativa**, utiliza-se o bit sinal para os números positivos e negativos
2. Os demais bits representam o valor representado em binário puro  
3. Utilizaremos como notação que o bit sinal igual a 0 define **números positivos** e que o bit sinal igual a 1 define números **negativos**

| bit sinal | representação em binário puro | Positivo/Negativo |
| --------- | ----------------------------- | ----------------- |
| 0 | b<sub>m-2</sub> ... b<sub>1</sub> b<sub>0</sub> | **Positivos** |
| 1 | b<sub>m-2</sub> ... b<sub>1</sub> b<sub>0</sub> | **Negativos** |

#### b. Características  
1. Dos *m* bits, 1 bit fica reservado ao sinal
2. **Faixa de representação**: -(2<sup>m-1</sup>-1) a +(2<sup>m-1</sup>-1). A faixa de representação representa os limites dos números contemplados, desde o inteiro mais negativo até o inteiro mais positivos.
3. **Dupla representação do 0** – todos os bits iguais a 0, com bit sinal 0 ou 1.

### III.3.2 Representação em complemento de 1
#### a. Complemento de números    
O complemento de um número de *m* dígitos é a diferença entre o maior número de *m* dígitos naquela base e o número considerado.  
Por exemplo, na base 10, o complemento de 12 é 87, pois 99 (maior número com 2 dígitos) menos 12 é igual a 87.   

**Na base 2, para obter o complemento basta inverter os bits do número binário**.   

Por exemplo *C<sub>1</sub>*(1011) = 1111-1011 = 0100 (inversão dos bits de 1011), onde *C<sub>1</sub>* representa a operação complemento, chamado na base 2 de **complemento de 1.**

#### b. Representação em complemento de 1
Considerando o que foi tratado acima, seja um número de *m* bits, ***N = b<sub>m-1</sub> ... b<sub>1</sub> b<sub>0</sub>***, usando a notação em complemento de 1,  
1. Na posição **mais significativa**, utiliza-se o bit sinal para os números positivos e negativos
2. Na faixa **dos números positivos**, o bit sinal é 0, seguido pelos demais bits representando o valor em binário puro  
3. Na faixa **dos números negativos**, o bit sinal é 1, seguido pelo complemento de 1 do respectivo **simétrico** positivo

| bit sinal | representação em binário puro | Positivo/Negativo |
| --------- | ----------------------------- | ----------------- |
| 0 | b<sub>m-2</sub> ... b<sub>1</sub> b<sub>0</sub> | **Positivos** |
| 1 | Complemento de 1 de b<sub>m-2</sub> ... b<sub>1</sub> b<sub>0</sub> | **Negativos** |

#### c. Características    
1. Dos *m* bits, 1 bit fica reservado ao sinal
2. **Faixa de representação**: -(2<sup>m-1</sup>-1) a +(2<sup>m-1</sup>-1).
3. **Dupla representação do 0** – todos os bits iguais a 0 todos os bits iguais a 1.  

### III.3.3 Representação em complemento de 2  
#### a. Representação
O complemento 2 de números binários obtém-se pela soma do complemento de 1 com o bit 1.   

Ou seja, C<sub>2</sub>(N) = C<sub>1</sub>(N) + 1.

Considerando o que foi tratado acima, seja um número de *m* bits, ***N = b<sub>m-1</sub> ... b<sub>1</sub> b<sub>0</sub>***, usando a notação em complemento de 1,
1. Na posição **mais significativa**, utiliza-se o bit sinal para os números positivos e negativos
2. Na faixa **dos números positivos**, o bit sinal é 0, seguido pelos demais bits representando o valor em binário puro  
3. Na faixa **dos números negativos**, o bit sinal é 1, seguido pelo complemento de 2 do respectivo **simétrico** positivo
4. A faixa dos negativos possui uma palavra *10...0*, que não possui simétrico positivo - esse é o valor mais negativo

| bit sinal | representação em binário puro | Positivo/Negativo |
| --------- | ----------------------------- | ----------------- |
| 0 | b<sub>m-2</sub> ... b<sub>1</sub> b<sub>0</sub> | **Positivos** |
| 1 | Complemento de 2 de b<sub>m-2</sub> ... b<sub>1</sub> b<sub>0</sub> | **Negativos** |

#### b. Características    
1. Dos *m* bits, 1 bit fica reservado ao sinal
2. **Faixa de representação**: -(2<sup>m-1</sup>) a +(2<sup>m-1</sup>-1).
3. **Não** possui dupla representação do 0.  

### III.3.4 Representação em excesso de 2<sup>m-1<sup>  
#### a. Representação
Seja um número de *m* bits, ***N = b<sub>m-1</sub> ... b<sub>1</sub> b<sub>0</sub>***, usando a notação em excesso **m-1**, a representação binária é a mesma da representação em binário puro deslocada de até a faixa dos negativos em *2<sup>m-1</sup>*.  

1. O número mais negativo é o decimal -2<sup>m-1</sup>, representado por todos *m* bits iguais a 0.  
2. Incrementa-se 1 a cada número seguinte até o número mais positivo.   

Cada número em representação de excesso *m-1* equivale ao binário puro de *m* bits decrementado de -2<sup>m-1</sup>.
Por exemplo, em palavras de 4 bits, o excesso é 2<sup>3</sup>=8. A representação de 0d (em decimal) em binário puro é 0000, que corresponde a 0-8=-8 em excesso 8. A representação de 12d em binário puro é 1100, que corresponde a (12-8)=+4 em excesso 8.

#### b. Características  
1. **Não utiliza** bit sinal.
2. **Faixa de representação**: -(2<sup>m-1</sup>) a +(2<sup>m-1</sup>-1).
3. **Não** possui dupla representação do 0.  

## III.5 Visão geral
A tabela apresenta uma comparação entre representações de inteiros negativos e positivos em um sistema cuja palavra possui 4 bits.
  
| base 10 | Sinal e magnitude | Complemento de 1 | Complemento de 2 | excesso 8 |
| ------- | ----------------- | ---------------- | ---------------- | --------- |
| +7 | 0111 | 0111 | 0111 | 1111 |
| +6 | 0110 | 0110 | 0110 | 1110 |
| +5 | 0101 | 0101 | 0101 | 1101 |
| +4 | 0100 | 0100 | 0100 | 1100 |
| +3 | 0011 | 0011 | 0011 | 1011 |
| +2 | 0010 | 0010 | 0010 | 1010 |
| +1 | 0001 | 0001 | 0001 | 1001 |
| 0 | 0000 | 0000 | 0110 | 1000 |
| 0 | 1000 | 1111 | - | - |
| -1 | 1001 | 1110 | 1111 | 0111 |
| -2 | 1010 | 1101 | 1110 | 0110 |
| -3 | 1011 | 1100 | 1101 | 0101 |
| -4 | 1100 | 1011 | 1100 | 0100 |
| -5 | 1101 | 1010 | 1011 | 0011 |
| -6 | 1110 | 1001 | 1010 | 0010 |
| -7 | 1111 | 1000 | 1001 | 0001 |
| -8 | - | - | 1000 | 0000 |

## III.6 Representação em ponto flutuante
Os números reais, particularmente os números fracionários, podem ser representados usando-se **notação científica**, na forma

$$ N=f\times10^e $$

, onde *f* é a **fração ou mantissa** e *e* é o **expoente**.  

Computacionalmente, o equivalemente aos números fracionários representados em notação científica, são os números com representação em **ponto flutuante**.  

Pela representação em ponto flutuante **convenciona-se o número de dígitos** para representar mantissa e expoente.  

Nesse sentido, um sistema com palavras de *m* bits utiliza, *n* bits para representar a mantissa (ou fração) e *k=m-n* bits para representar o expoente.  

Tanto mantissa quanto expoente podem utilizar uma das representações de números negativos discutidas anteriormente.  

Admtindo que a faixa de representação da notação usada para a mantissa seja *-N* a *+M* e para o expoente seja *-P* a *+Q*,a faixa de representação dos números de ponto flutuante será  
- no semi eixo dos números negativos, *-N.10<sup>+Q</sup>* a *-10<sup>-P</sup>*  
- 0 (mantissa igual a 0)   
- no semi eixo dos números positivos, *+10<sup>-P</sup> a *+M.10<sup>+Q</sup>*  

A representação pode ser caracterizada pela **faixa de representação** (limites da representação numerica) e pela **precisão**:  
- a faixa de representação é determinada pelo **número de dígitos do expoente**; e
- a precisão é determinada pelo **número de dígitos da mantissa**. 

___  
**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**




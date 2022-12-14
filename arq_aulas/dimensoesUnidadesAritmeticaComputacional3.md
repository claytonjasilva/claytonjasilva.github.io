# 1. Dimensões, Unidades e Aritmética Computacional

## 1.4 Representação de números em binário puro
As grandezas numéricas representadas nos sistemas computacionais utilizam o sistema binário de numeração.  
Os conjuntos dos números discutidos na matemática do "sistema decimal" também merecem um tratamento próprio nos sistemas computacionais.  
Nos sistemas computacionais, em certas circunstâncias, é necessário tratar somente o **valor absoluto**, isto é, sem sinal, do **número inteiro**.  
Designaremos essa representação dos números dos sistemas computacionais como **representação em binário puro.**  

## 1.5 A **palavra de máquina**
"Em ciência da computação, palavra (em inglês: word) é a unidade natural de informação usada por cada tipo de computador em particular.
É uma sequência de bits de tamanho fixo que é processado em conjunto numa máquina." 
[Wikipédia](https://pt.wikipedia.org/wiki/Palavra_(ci%C3%AAncia_da_computa%C3%A7%C3%A3o)#:~:text=Em%20ci%C3%AAncia%20da%20computa%C3%A7%C3%A3o%2C%20palavra,processado%20em%20conjunto%20numa%20m%C3%A1quina.)

Para não haver equívoco, sempre que nos referirmos a uma grandeza numérica tratada pelos sistemas computacionais, 
definiremos o tamanho da **palavra**, conforme o sentido descrito acima, da arquitetura.

## 1.6 Representação de **números inteiros negativos**  
Seja um número binário negativo com *m* bits, ele pode ser representado das seguintes notações:  
- Representação em **bit sinal (sinal e magnitude)**  
- Representação em **complemento de 1** 
- Representação em **complemento de 2**  
- Representação em **excesso 2<sup>m-1</sub>** 

### 1.6.1 Representação em sinal e magnitude (bit sinal)
Seja um número de *m* bits, ***N = b<sub>m-1</sub> ... b<sub>1</sub> b<sub>0</sub>***, usando a notação em bit sinal,
1. Na posição **mais significativa**, utiliza-se o bit sinal para os números positivos e negativos
2. Os demais bits representam o valor representado em binário puro  
3. Utilizaremos como notação que o bit sinal igual a 0 define **números positivos** e que o bit sinal igual a 1 define números **negativos**

| bit sinal | representação em binário puro | Positivo/Negativo |
| --------- | ----------------------------- | ----------------- |
| 0 | b<sub>m-2</sub> ... b<sub>1</sub> b<sub>0</sub> | **Positivos** |
| 1 | b<sub>m-2</sub> ... b<sub>1</sub> b<sub>0</sub> | **Negativos** |

**Características da representação em sinal e magnitude**  
1. Dos *m* bits, 1 bit fica reservado ao sinal
2. **Faixa de representação**: -(2<sup>m-1</sup>-1) a +(2<sup>m-1</sup>-1). A faixa de representação representa os limites dos números contemplados, desde o inteiro mais negativo até o inteiro mais positivos.
3. **Dupla representação do 0** – todos os bits iguais a 0, com bit sinal 0 ou 1.

### 1.6.2 Representação em complemento de 1
**Complemento de números**    
O complemento de um número de *m* dígitos é a diferença entre o maior número de *m* dígitos naquela base e o número considerado.  
Por exemplo, na base 10, o complemento de 12 é 87, pois 99 (maior número com 2 dígitos) menos 12 é igual a 87.   
**Na base 2, para obter o complemento basta inverter os bits do número binário**. 
Por exemplo *C<sub>1</sub>*(1011) = 1111-1011 = 0100 (inversão dos bits de 1011), onde *C<sub>1</sub>* representa a operação complemento, chamado na base 2 de **complemento de 1.**

Considerando o que foi tratado acima, seja um número de *m* bits, ***N = b<sub>m-1</sub> ... b<sub>1</sub> b<sub>0</sub>***, usando a notação em complemento de 1,
1. Na posição **mais significativa**, utiliza-se o bit sinal para os números positivos e negativos
2. Na faixa **dos números positivos**, o bit sinal é 0, seguido pelos demais bits representando o valor em binário puro  
3. Na faixa **dos números negativos**, o bit sinal é 1, seguido pelo complemento de 1 do respectivo **simétrico** positivo

| bit sinal | representação em binário puro | Positivo/Negativo |
| --------- | ----------------------------- | ----------------- |
| 0 | b<sub>m-2</sub> ... b<sub>1</sub> b<sub>0</sub> | **Positivos** |
| 1 | Complemento de 1 de b<sub>m-2</sub> ... b<sub>1</sub> b<sub>0</sub> | **Negativos** |

**Características da representação em complemento de 1**  
1. Dos *m* bits, 1 bit fica reservado ao sinal
2. **Faixa de representação**: -(2<sup>m-1</sup>-1) a +(2<sup>m-1</sup>-1).
3. **Dupla representação do 0** – todos os bits iguais a 0 todos os bits iguais a 1.  

### 1.6.3 Representação em complemento de 2
**Complemento 2 de números binários**: obtém-se pela soma do complemento de 1 com o bit 1.   
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

**Características da representação em complemento de 1**  
1. Dos *m* bits, 1 bit fica reservado ao sinal
2. **Faixa de representação**: -(2<sup>m-1</sup>) a +(2<sup>m-1</sup>-1).
3. **Não** possui dupla representação do 0.  

### 1.6.4 Representação em excesso de 2<sup>m-1<sup>
Seja um número de *m* bits, ***N = b<sub>m-1</sub> ... b<sub>1</sub> b<sub>0</sub>***, usando a notação em excesso **m-1**, a representação binária é a mesma da representação em binário puro deslocada de até a faixa dos negativos em *2<sup>m-1</sup>*.  

1. O número mais negativo é o decimal -2<sup>m-1</sup>, representado por todos *m* bits iguais a 0
2. Incrementa-se 1 a cada número seguinte até o número mais positivo
**Observação:** Cada número em representação de excesso *m-1* equivale ao binário puro de *m* bits decrementado de -2<sup>m-1</sup>.
Por exemplo, em palavras de 4 bits, o excesso é 2<sup>3</sup>=8. A representação de 0d (em decimal) em binário puro é 0000, que corresponde a 0-8=-8 em excesso 8. A representação de 12d em binário puro é 1100, que corresponde a (12-8)=+4 em excesso 8.

**Características da representação em complemento de 1**  
1. **Não utiliza** bit sinal.
2. **Faixa de representação**: -(2<sup>m-1</sup>) a +(2<sup>m-1</sup>-1).
3. **Não** possui dupla representação do 0.  

  
 
[home]() [<<](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/dimensoesUnidadesAritmeticaComputacional3.md) 







## Representação de números em binário puro
As grandezas numéricas representadas nos sistemas computacionais utilizam o sistema binário de numeração.  
Os conjuntos dos números discutidos na matemática do "sistema decimal" também merecem um tratamento próprio nos sistemas computacionais.  
Nos sistemas computacionais, em certas circunstâncias, é necessário tratar somente o **valor absoluto**, isto é, sem sinal, do **número inteiro**.  
Designaremos essa representação dos números dos sistemas computacionais como **representação em binário puro.**  

## A **palavra de máquina**
"Em ciência da computação, palavra (em inglês: word) é a unidade natural de informação usada por cada tipo de computador em particular.
É uma sequência de bits de tamanho fixo que é processado em conjunto numa máquina." 
[Wikipédia](https://pt.wikipedia.org/wiki/Palavra_(ci%C3%AAncia_da_computa%C3%A7%C3%A3o)#:~:text=Em%20ci%C3%AAncia%20da%20computa%C3%A7%C3%A3o%2C%20palavra,processado%20em%20conjunto%20numa%20m%C3%A1quina.)

Para não haver equívoco, sempre que nos referirmos a uma grandeza numérica tratada pelos sistemas computacionais, 
definiremos o tamanho da **palavra**, conforme o sentido descrito acima, da arquitetura.

## Representação de **números inteiros negativos**  
Seja um número binário negativo com *m* bits, ele pode ser representado das seguintes notações:  
- Representação em **bit sinal (sinal e magnitude)**  
- Representação em **complemento de 1** 
- Representação em **complemento de 2**  
- Representação em **excesso 2<sup>m-1</sub>** 

### Representação em sinal e magnitude (bit sinal)
Seja um número de *m* bits, ***N = b<sub>m-1</sub> ... b<sub>1</sub> b<sub>0</sub>***  
Usando a notação em bit sinal,
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
3. Dupla representação do 0 – todos os bits iguais a 0, com bit sinal 0 ou 1.






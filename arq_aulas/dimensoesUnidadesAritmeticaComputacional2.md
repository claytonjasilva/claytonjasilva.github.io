# 1. Dimensões, Unidades e Aritmética Computacional

## 1.3 Conversão de bases  
As grandezas numéricas possuem representações equivalentes entre os diferentes sistemas de numeração. A tabela apresenta a equivalência dos dígitos numéricos dos sistemas de base 2 (**binária**), 10 (**decimal**) e 16 (**hexadecimal**).

| Base 2 | Base 10 | Base 16 | Base 2 | Base 10 | Base 16 |
| ------ | ------- | ------- | ------ | ------- | ------- |
| 0 | 0 | 0 | 1000 | 8 | 8 |
| 1 | 1 | 1 | 1001 | 9 | 9 |
| 10 | 2 | 2 | 1010 | 10 | A |
| 11 | 3 | 3 | 1011 | 11 | B |
| 100 | 4 | 4 | 1100 | 12 | C |
| 101 | 5 | 5 | 1101 | 13 | D |
| 110 | 6 | 6 | 1110 | 14 | E |
| 111 | 7 | 7 | 1111 | 15 | F |

### 1.3.1 Conversão de grandezas numéricas da base 10 para as bases 2 e 16: Método das divisões sucessivas  
Para obter o número representado em base 10 (N<sub>10</sub>) no seu equivalente em base 2 (N<sub>2</sub>) ou em base 16 (N<sub>16</sub>), aplica-se o seguinte método:

1. Aplicar a divisão inteira de N<sub>10</sub> pela base para a qual se deseja converter (2 ou 16)  
2. Em seguida, aplicar repetidas vezes a divisão do **quociente obtido na divisão anterior pela base** para a qual se deseja converter (2 ou 16)
3. Parar as divisões quando obtiber quociente igual a 0.
4. O número na nova base (2 ou 16) na notação posicional será formado pelos restos obtidos, de tal modo que **o último resto é o dígito mais significativo**. 

Na conversão da base 10 para a base 2 pode-se também utilizar o comportamento da notação polinomial.   
1. **A paritr do mais significativo**,
preencher com o binário 1 as **potências de 2 cuja soma não ultrapasse o número a ser convertido**.  
2. Preencher com 0 as potências que não 'couberam' (cuja soma ultrapassou o número decimal a ser convertido).  

A tabela mostra um exemplo para 235<sub>10</sub> convertido à base 2.

| 2<sup>7</sup> | 2<sup>6</sup> | 2<sup>5</sup> | 2<sup>4</sup> | 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup> | 2<sup>0</sup> |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | 
| 1 | 1 | 1 | 0 | 1 | 0 | 1 | 1 |

### 1.3.2 Conversão de grandezas numéricas da base 2 para a bases 10: Método da soma polinomial
Para obter o número representado em base 2 (N<sub>2</sub>) no seu equivalente em base 10 (N<sub>10</sub>), aplica-se o seguinte método:  
1. Representar N<sub>2</sub> na sua forma polinomial, em que cada termo da soma é dado pelo dígito binário (1 ou 0) multiplicado por 2<sup>j</sup>, onde j é a posição relativa do dígito no número.
2. Aplicar a adição dos termos.

### 1.3.3 Conversão de grandezas numéricas da base 2 para a base 16
Para obter o número representado em base 2 (N<sub>2</sub>) no seu equivalente em base 16 (N<sub>10</sub>), aplica-se o seguinte método:
1. Do dígito binário menos significativo ao mais significativo separam-se grupos de 4 dígitos binários.
2. Converte-se cada grupo de 4 dígitos binários ao seu equivalente em base 16.
3. O número na nova base (16) na notação posicional será formado pelos dígitos em base 16 de cada grupo.

### 1.3.4 Representação das grandezas numéricas nos sistemas computacionais
Os sistemas computacionais modernos são máquinas eletrônicas em que as grandezas numéricas são informações (ou dados) representadas por **sinais elétricos**.   

Esses sinais elétricos possuem características particulares pela conveniência dos projetos de computadores, que satisfazem a padrões de fabricantes dos componentes eletrônicos.    

Uma característica particular é importante ao contexto da nossa discussão aqui: **os sinais apresentam somente dois níveis de tensão elétrica**, *high* (H) ou *low* (L).   

A abstração para tratar os dois valores de informação (ou dados) utilizados para representação dos números nos sistemas computacionais é associar o sinal H ao 1 e o sinal L ao 0. Portanto, nessa abstração as grandezas numéricas nos sistemas computacionais são representadas por dígitos binários 0s e 1s.  

As grandezas numéricas utilizadas pelos computadores podem ser representads em qualquer sistema de numeração. Para não haver ambiguidade de interpretação, utilizaremos a seguinte **notação**:  
- Números representados em **base decimal** serão indicados sucedidos pelo caracter *d*, na forma *Nd*, ou simplesmente *N* quando o contexto não deixar margem a dúvida - por exemplo, 126d;
- Números representados em **base binária** serão indicados simplesmente pelos seus dígitos - por exemplo, 1011101;
- Números representados em **base hexadecimal** serão indicados preferencialmente precedidos pelos caracteres *0x*, na forma *0xN* - por exemplo, 0xAF34. Eventualmente, poderão ser usadas as formas *Nh*.

### 1.3.5 A unidade elementar de informação computacional: bit
Os sistemas computacionais modernos utilizam o sistema binário, como discutido acima.   

A menor unidade de informação nos sistemas computacionais é o **bit**, que é um acrônimo de ***bi**nary digi**t***.  

Como unidade binária, o bit só pode assumir dois valores: 0 ou 1.  

Por conveniência da representação das informações em sistemas computacionais, em certas circunstâncias utiliza-se o múltiplo de de bits, chamado de ***byte***. 

| Unidade | Equivalência |
| ------- | -------- |
| 1 ***byte*** | **8** bits |

___  
**[<<anterior](https://claytonjasilva.github.io/arq_aulas/dimensoesUnidadesAritmeticaComputacional1.html)**    
**[home](https://claytonjasilva.github.io/arq_aulas.html)**   
**Representação de números negativos: [próximo>>](https://claytonjasilva.github.io/arq_aulas/dimensoesUnidadesAritmeticaComputacional3.html)**  


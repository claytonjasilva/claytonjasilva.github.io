# 1. Dimensões, Unidades e Aritmética Computacional

## 1.1 Unidades métricas

As unidades métricas também são usadas no domínio da computação. A tabela apresenta um resumo.

| Expoente | Valor | Prefixo | Expoente | Valor | Prefixo |
| -------- | ----- | ------- | -------- | ----- | ------- |
| 10<sup>-3</sup> | 0,001 | mili | 10<sup>3</sup> | 1.000 | Kilo |
| 10<sup>-6</sup> | 0,000001 | micro | 10<sup>6</sup> | 1.000.000 | Mega |
| 10<sup>-9</sup> | 0,000000001 | nano | 10<sup>9</sup> | 1.000.000.000 | Giga |
| 10<sup>-12</sup> | 0,000000000001 | pico | 10<sup>12</sup> | 1.000.000.000.000 | Tera |

Convém lembrar que para medir capacidade de armazenamento de memórias é comum utilizar potências de 2. A tabela apresenta um resumo.

| Expoente | Valor | Prefixo |
| -------- | ----- | ------- |
| 2<sup>10</sup> | 1.024 | Kilo |
| 2<sup>20</sup> | 1.048.576 | Mega |
| 2<sup>30</sup> | 1.073.741.824 | Giga |

## 1.2 Grandezas numéricas

### 1.2.1 Representação de grandezas numéricas

As grandezas numéricas são utilizadas para quantificar os fenômenos observados na natureza. Para a engenharia a dimensão dos fenômenos normalmente é definida pela **grandeza numérica** seguida por uma **unidade de medida**.    

A representação da grandeza numérica consagrada historicamente foi a representação que emprega 10 **dígitos numéricos**, definidos pelo **conjunto ordenado** B<sub>10</sub> = {0, 1, 2 , 3, 4, 5 , 6, 7, 8, 9}. A esse sistema de representação numérica dá-se o nome de **sistema decimal**.  

Por conjunto ordenado entende-se como aquele conjunto cujos elementos possuem um valor relativo entre eles. No caso do sistema decimal, o dígito *8* é superior aos dígitos *7*, *6*, ...*0*, assim por diante.  

Nos sistemas computacionais, como discutiremos com maiores detalhes no decorrer da disciplina, são particularmente importantes os sistemas de **base 2 (binário)** e o sistema de **base 16 (hexadecimal)**. 

**BASE 2**

| Base | Conjunto ordenado de dígitos | 
| ---- | ---------------------------- |
|  2  | B<sub>2</sub> = {0, 1} |
|  16  | B<sub>16</sub> = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F} |

Independentemente da base, as grandezas numéricas podem ser representadas de acordo com duas notações:  
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

___
**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**  ou 
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**   
**Conversão de bases: [próximo>>](dimensoesUnidadesAritmeticaComputacional2.md)** 




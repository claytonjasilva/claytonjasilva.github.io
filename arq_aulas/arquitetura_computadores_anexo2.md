# ANEXO 2 - Conversão de base

Alguns dados armazenados e processados computacionalmente se configuram representações binárias de informações descritas por números inteiros em valor absoluto representados em base decimal. Descrevem medidas em que o conjunto dos números inteiros são aplicáveis para medir um fenômeno. Por exemplo, a representação da idade das pessoas, a quantidade de objetos existentes em um recipiente, o número do endereço de um imóvel em uma avenida, entre outros.

Entender a conversão na representação desse tipo de informação de um sistema numérico para outro é importante para definir as características de um sistema computacional, composto por circuitos digitais.

Nesse sentido, a importância do sistema de base binária (base 2) é óbvia. No entanto, a representação em base hexadecimal (base 16) é especialmente útil também para se discutir. 

A representação hexadecimal é amplamente utilizada em sistemas digitais por uma questão de conveniência e eficiência na leitura e manipulação de dados binários. Como os computadores operam em base 2, grandes sequências de bits tornam-se difíceis de visualizar e interpretar diretamente. O sistema hexadecimal (base 16) resolve esse problema porque cada dígito hexadecimal corresponde exatamente a 4 bits (um nibble). Assim, um byte (8 bits) pode ser representado por apenas dois dígitos hexadecimais, tornando a escrita muito mais compacta e reduzindo a probabilidade de erro na leitura.

Além disso, a representação hexadecimal facilita a análise de endereços de memória, registradores, códigos de máquina e máscaras binárias, pois mantém uma correspondência direta com a estrutura interna dos dados digitais. Diferentemente do sistema decimal, que não possui alinhamento natural com potências de 2, o hexadecimal preserva a lógica binária do hardware ao mesmo tempo em que oferece uma forma mais legível para humanos, sendo por isso amplamente adotado em arquitetura de computadores, programação de baixo nível e eletrônica digital.

| Base | Conjunto ordenado de dígitos | 
| ---- | ---------------------------- |
|  2  | B<sub>2</sub> = {0, 1} |
|  16  | B<sub>16</sub> = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F} |

## 2.1 Conversão de bases  
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

### 2.1.1 Conversão de grandezas numéricas da base 10 para as bases 2 e 16: Método das divisões sucessivas  

Para obter o número representado em base 10 (N<sub>10</sub>) no seu equivalente em base 2 (N<sub>2</sub>) ou em base 16 (N<sub>16</sub>), aplica-se o seguinte método:

1. Aplicar a divisão inteira de N<sub>10</sub> pela base para a qual se deseja converter (2 ou 16)  
2. Em seguida, aplicar repetidas vezes a divisão do **quociente obtido na divisão anterior pela base** para a qual se deseja converter (2 ou 16)
3. Parar as divisões quando obter quociente igual a 0.
4. O número na nova base (2 ou 16) na notação posicional será formado pelos restos obtidos, de tal modo que **o último resto é o dígito mais significativo**. 

Na conversão da base 10 para a base 2 pode-se também utilizar o comportamento da notação polinomial.   

1. **A partir do dígito mais significativo**,
preencher com o binário 1 as **potências de 2 cuja soma não ultrapasse o número a ser convertido**.  
2. Preencher com 0 as potências que não 'couberam' (cuja soma ultrapassou o número decimal a ser convertido).  

A tabela mostra um exemplo para 235<sub>10</sub> convertido à base 2.

| 2<sup>7</sup> | 2<sup>6</sup> | 2<sup>5</sup> | 2<sup>4</sup> | 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup> | 2<sup>0</sup> |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | 
| 1 | 1 | 1 | 0 | 1 | 0 | 1 | 1 |

### 2.1.2 Conversão de grandezas numéricas da base 2 ou base 16 para a bases 10: Método da soma polinomial

Para obter o número representado em base 2 (N<sub>2</sub>) ou base 16 (N<sub>h</sub>) no seu equivalente em base 10 (N<sub>10</sub>), aplica-se o seguinte método:  
1. Representar N<sub>2</sub> ou (N<sub>h</sub> na sua forma polinomial  
 - no caso de base 2, cada termo do polinômio é dado pelo dígito binário (1 ou 0) multiplicado por 2<sup>j</sup>, onde j é a posição relativa do dígito no número;  
 - no caso de base 16, cada termo do polinômio é dado pelo decimal equivalente ao dígito hexadecimal multiplicado por 16<sup>j</sup>, onde j é a posição relativa do dígito hexadecimal no número; 
2. Aplicar a adição dos termos.

### 2.1.3 Conversão de grandezas numéricas da base 2 para a base 16
Para obter o número representado em base 2 (N<sub>2</sub>) no seu equivalente em base 16 (N<sub>10</sub>), aplica-se o seguinte método:
1. Do dígito binário menos significativo ao mais significativo separam-se grupos de 4 dígitos binários.
2. Converte-se cada grupo de 4 dígitos binários ao seu equivalente em base 16.
3. O número na nova base (16) na notação posicional será formado pelos dígitos em base 16 de cada grupo.

### 2.1.4 Representação das grandezas numéricas nos sistemas computacionais

As grandezas numéricas utilizadas pelos computadores podem ser representadas em qualquer sistema de numeração. Para não haver ambiguidade de interpretação, utilizaremos a seguinte **notação**:  
- Números representados em **base decimal** serão indicados sucedidos pelo caracter *d*, na forma *Nd*, ou simplesmente *N* quando o contexto não deixar margem a dúvida - por exemplo, 126d;
- Números representados em **base binária** serão indicados simplesmente pelos seus dígitos - por exemplo, 1011101;
- Números representados em **base hexadecimal** serão indicados preferencialmente precedidos pelos caracteres *0x*, na forma *0xN* - por exemplo, 0xAF34. Eventualmente, poderão ser usadas as formas *Nh*.

___  
**Home [Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**

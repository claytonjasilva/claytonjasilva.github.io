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




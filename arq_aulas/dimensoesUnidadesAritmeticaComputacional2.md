# Dimensões, Unidades e Aritmética Computacional

## Conversão de bases  
As grandezas numéricas possuem representações equivalentes entre os diferentes sistemas de numeração. A tabela apresenta a equivalência dos dígitos numéricos dos sistemas de base 2, 10 e 16.

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

### Conversão da base 10 para as bases 2 e 16: Método das divisões sucessivas  
Para obter o número representado em base 10 (N<sub>10</sub>) no seu equivalente em base 2 (N<sub>2</sub>) ou em base 16 (N<sub>16</sub>), aplica-se o seguinte método:
1. Aplicar a divisão inteira de N<sub>10</sub> pela base para a qual se deseja converter (2 ou 16)  
2. Em seguida, aplicar repetidas vezes a divisão do **quociente obtido na divisão anterior pela base** para a qual se deseja converter (2 ou 16)
3. Parar as divisões quando obtiber quociente igual a 0.
4. O número na nova base (2 ou 16) na notação posicional será forma do pelos restos obtidos, de tal modo que **o último resto é o dígito mais significativo**. 

### Conversão da base 2 para as bases 10: Método da soma polinomial
Para obter o número representado em base 2 (N<sub>2</sub>) no seu equivalente em base 10 (N<sub>10</sub>), aplica-se o seguinte método:  
1. Representar N<sub>2</sub> na sua forma polinomial, em que cada termo da soma é dado pelo dígito binário (1 ou 0) multiplicado por 2<sup>j</sup>, onde j é a posição relativa do dígito no número.
2. Aplicar a adição dos termos.

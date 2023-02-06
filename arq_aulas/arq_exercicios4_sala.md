# Lista 4 de exercícios em sala: Conceito de máquina de níveis 

1. As **instruções primitivas** de um computador formam uma linguagem com a qual as pessoas podem se comunicar com ele.
Em geral, os projetistas tentam fazer com que as instruções primitivas sejam as mais simples possíveis. Como se denomina essa linguagem?  

2. Explique **sinteticamente** o que você entendr por
a. Compilador  
b. Montador ou *assembler*  
c. Linguagem de máquina  
d. Tradutor  
e. Interpretador

3. A organização estruturada de computadores deve conciliar a utilização de uma linguagem de instruções primitivas, simples, 
com as necessidades complexas das pessoas. Uma abordagem dessa organização é projetar um conjunto de instruções mais conveniente para as pessoas, 
pertencentes a uma linguagem L1, com as instruções primitivas, da linguagem L0. 
Identificar os **métodos de suporte** típicos para executar um programa:
a. Escrito em L1 para ser executado na máquina M0   
b. Escrito em L2 para ser executado na máquina M1
c. Escrito em L3 para ser executado na máquina M2
d. Escrito em L4 para ser executado na máquina M3
Escrito em L5 para ser executado na máquina M4

4. Explique **sinteticamente** a diferença básica entre os processos de conversão do código de uma máquina para ser executado em uma máquina do nível inferior, 
chamados de **tradução** e **interpretação**.

5. Considere um computador em que os interpretadores são idênticos nos níveis 1, 2 e 3. Um interpretador precisa de *n* instruções para 
buscar, examinar e executar uma instrução. Uma instrução do nível 1 demora k nanossegundos para executar. 
Quanto tempo demora para executar uma instrução nos níveis 2, 3 e 4?
 
6. Considere um computador multinível em que cada um dos níveis é diferente dos demais. Cada nível tem instruções que são *m* vezes mais "poderosas" 
do que as instruções do nível abaixo. Entenda que mais "poderosa" significa uma instrução do nível *r* pode fazer o trabalho de *m* instruções do nível *r-1*. 
Se um programa de nível 1 requer *k* segundos para executar, quanto tempo levariam programas equivalentes nos níveis 2, 3 e 4, 
admitindo que são requeridas *n* instruções de nível *r* para interpretar uma única instrução do nível *r+1*?

7. Os computadores são máquinas reais, constituídas por circuitos eletrônicos que operam sinais elétricos (dados e instruções).
No modelo da máquina de 6 níveis, o que caracteriza o nível de lógica digital?

8. 

11. Admitindo **palavras de 6 bits**, representação em binário puro, realizar as operações de adição e subtração solicitadas abaixo.
Indicar a ocorrência de *overflow*, se for o caso. Além disso, se o resultado é negativo.  
a. 100100 + 110  
b. 110011 + 101010
c. 1101 - 110110
d. 10111 - 111
e. 101 + 1110  
3. Admitindo **palavras de 15 bits**, realizar as operações de adição e subtração solicitadas abaixo. Indicar, se for o caso, se o resultado é negativo.  
a. 0xAF3 + 0x200  
b. 0xA4 + 0x4FF  
c. 0x65A - 0x2B22  
d. 0x2314 - 0xFFF  
e. 0x32FF + 0x54AA  
4. Admitindo **palavras de 12 bits**, realizar as operações de adição e subtração solicitadas abaixo, considerando representação em complemento de 1. Indicar a ocorrência de *overflow*, se for o caso. Admitir bit sinal 0 para números positivos.
Apresentar o resultado usando a notação hexadecimal.  
a. 235d + 367d  
b. 129d - 433d  
c. -255d - 67d  
d. -33d + 411d  
5. Admitindo **palavras de 12 bits**, realizar as operações de adição e subtração solicitadas abaixo, considerando representação em complemento de 2. Indicar a ocorrência de *overflow*, se for o caso. Admitir bit sinal 0 para números positivos.
Apresentar o resultado usando a notação hexadecimal.  
a. 265d + 867d  
b. 12d - 563d  
c. -3FFd - 67d  
d. -281d + 451d  
6. Admitindo **palavras de 8 bits**, realizar as operações de adição e subtração solicitadas abaixo, considerando representação em excesso.
Indicar a ocorrência de *overflow*, se for o caso. Apresentar o resultado usando a notação hexadecimal.  
a. 45d - 31d  
b. 120d + 53d  
c. 71d + 22d  
d. -55d - 100d  
7. Admitindo **palavras de 12 bits**, apresentar os valores dos números de ponto flutuante.
Considerar as representações indicadas.  
a. 0x3EC, base em bit sinal, com 5 bits, expoente em complemento de 2, com 7 bits  
b. 0x1A3, base em complemento de 1, com 4 bits, expoente em excesso 8

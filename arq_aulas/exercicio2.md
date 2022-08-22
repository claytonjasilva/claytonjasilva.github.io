## Arquitetura de Computadores: Lista 2 de exercícios

1. Elaborar um programa no assembly da máquina IAS discutido em sala, para ler 3 dados armazenados nas posições de endereço de memória adjacentes, a partir da posição 500. Somar os três valores e armazenar o resultado na posição 600.
2. Seja o código no assembly da máquina IAS, apresentado abaixo
```
load m(x) 100
lsh
add m(x) 101
stor m(x) 102
```
Descrever o que o programa realiza.  
3. Seja o código no assembly da máquina IAS, apresentado abaixo
```
load m(x) 100
add m(x) 101
add m(x) 102
add m(x) 103
jump m(x,0:19) 200
```
Descrever o que o programa realiza.  
4. Elaborar um programa no assembly da máquina IAS discutido em sala, para realizar a subtração de nois números armazenados, respectivamente, nas posições 100 e 101 da memória. O programa deverá multiplicar o resultado por 2, se o resultado for não negativo. Deverá dividir o número por 2 se o resultado for negativo. O resultado deverá ser armazenado na posição de memória 102.  
5. O código assembly da máquina IAS discutido em sala possui somente instruções de **adição e subtração de modo direto**, cujo operando especifica endereços de memória. Admitir três novas instruções, LOADI, ADDI e SUBI, códigos, respectivamente, 1000 1010, 1000 0101 e 1000 0110, cujos operandos sejam os próprios dados (modo imediato). Podem ser descritas de modo similar: ADDI soma o conteúdo do operando ao AC; armazena o resultado em AC. Ampliando o set da máquina com tais instruções, propor um programa no assembly ampliado da IAS para armazenar o resultado da soma dos 3 termos de uma progressão aritmética com razão 2, a partir do termo inicial cujo dado está no endereço 25.  
6. Seja o código no assmebly ampliado proposto na questão anterior, apresentado abaixo
```
loadi 25
add m(x) 100
stor m(x) 101
```
Representar o diagrama de estados na execução do programa, admitindo o ciclo de instruções tratado em sala. Considerando a microarquitetura da máquina IAS, propor um diagrama de temporização.   
7. Escrever o código das questões 2, 3 e 6 em linguagem de máquina, utilizando a representação hexadecimal.

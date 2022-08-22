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
5. O código assembly da máquina IAS discutido em sala possui somente instruções add e sub cujo operando especifica endereços de memória. Admitir três novas instruções, loadi, addi e subi, códigos, respectivamente, 1000 1010, 1000 0101 e 1000 0110, cujos operando sejam os próprios dados. Podem ser descritas de modo similar: ADDI soma o conteúdo do operando; armazena o resultado em AC. Ampliando o set da máquina com tais instruções, propor um programa no assembly ampliado da IAS para somar os 3 termos de uma progressão aritmética com razão 2, de 3 números, a partir do número 25.  
6. Seja o código no assmebly ampliado proposto na questão anterior, apresentado abaixo
```
loadi 25
add 100
stor 101
```
Representar o diagrama de estados na execução do programa, admitindo o ciclo de instruções tratado em sala. Considerando a microarquitetura da máquina IAS, propor um diagrama de temporização.   
7. Escrever o código das questões 2, 3 e 6 em linguagem de máquina, utilizando a representação hexadecimal.

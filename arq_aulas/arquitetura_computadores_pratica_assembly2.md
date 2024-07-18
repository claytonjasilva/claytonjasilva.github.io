# Prática 2 Assembly Atmega2560 

## Visão inicial

### Instruções básicas

- LDS: Carrega dado armazenado em memória diretamente no registrador  
Sintaxe:`LDS Rd,k`, onde 0 ≤ d ≤ 31, 0 ≤ k ≤ 65535
Operação: Rd ← DS(k)
- EOR: Operação ou exclusivo entre os valores dos registradores  
Sintaxe:`EOR Rd,Rr`, onde 0 ≤ d ≤ 31, 0 ≤ r ≤ 31
Operação: Rd ← Rd ⊕ Rr  
- JMP: Desvio incondicional para o endereço do operando  
Sintaxe:`JMP k`, onde 0 ≤ k < 4M
Operação: PC ← k

### Exemplos

1. Elaborar um programa em assembly para armazenar criar uma tabela de dados nos endereços de memória a partir do endereço 0x200 até o endereço 0x20A.
Os dados armazenados em memória são números pares acima de 50. O programa deverá ler os dados, determinar a soma dos números, armazenando resultado
no endereço 0x20B. Ler os dados armazenado em memória.

2. Elaborar um programa em assembly para ler dois dados armazenados nos endereços 0x20B e 0x20C.
Realizar a operação 'ou exclusivo' entre os dados, armazenando o resultado no endereço de memória 0x20D.  

3. Elaborar um programa em assembly para inicializar o registrador r0 com 30, incrementar o valor 10 vezes.

4. Elaborar um programa em assembly para somar os dados dos endereços 0x20E a 0x213,
subtraindo o valor obtido do valor armazenado no endereço 0x214, armazenando o resultado no endereço 0x215.
Em seguida desviar a execução ao endereço 0x20.
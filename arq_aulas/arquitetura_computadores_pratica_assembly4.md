# Assembly Atmega2560

#### Exercicio 1. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Armazene inicialmente os 20 impares acima de 100 nos endereços de memória acima de 0x200, construindo uma tabela de dados.  
b. Em seguida, leia sequencialmente cada um dos números armazenados na tabela, armazenando também em sequência o par imediatamente inferior ao número lido
em uma nova tabela iniciada a contar do endereço após a última linha da tabela anterior.  
c. Armazenar, por último: o endereço inicial da primeira tabela; e o tamanho (número de linhas) de cada tabela.  
[Uma proposta de solução](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/assembly7.asm)   

#### Exercicio 2. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Armazenar dois números em memória, nos endereços 0x200 e 0x201. Definir arbitrariamente os números.  
b. Se os números forem iguais armazenar a soma no endereço 0x202.  
c. Se os números forem diferentes armazenar a diferença no endereço 0x203.  
[Uma proposta de solução](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/assembly8.asm)   

## Novas instruções
- LD: Carrega indiretamente registrador  
Sintaxe: `LD Rr,Y, onde 0 ≤ r ≤ 31`   
Operação: Armazena o conteúdo do endereço de memória Y (r29,r28) no registrador Rr
- DEC: Decrementa o registrador  
Sintaxe: `DEC Rr, onde 0 ≤ r ≤ 31`   
Operação: Decrementa o registrador Rr em 1   


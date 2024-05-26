# Assembly Atmega2560

#### Exercicio 1. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Armazene inicialmente os 20 impares acima de 100 nos endereços de memória acima de 0x200, construindo uma tabela de dados.
b. Em seguida, leia sequencialmente cada um dos números armazenados na tabela, armazenando também em sequência o par imediatamente inferior ao número lido
em uma nova tabela iniciada a contar do endereço após a última linha da tabela anterior.  
c. Aramazenar, por último: o endereço inicial da primeira tabela; e o tamanho (número de linhas) de cada tabela.  
[Uma proposta de solução](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/assembly7.asm)   

#### Exercicio 2. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Armazene uma tabela de 7 valores em memória, a partir do endereço 0x200. Definir arbitrariamente os números.  
b. Verifique se os dados da tabela são iguais. Se forem iguais, armazene 0 no endereço após a última linha da tabela.  
[Uma proposta de solução](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/assembly2.asm)   

#### Exercicio 3. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Inicie a execução a partir de um endereço 0xa da memória flash.  
b. Leia os dados de uma tabela armazenada nos cinco primeiros endereço a partir da posição 0x200.  
c. Retorne a execução para o primeiro endereço livre da memória flash.  
[Uma proposta de solução](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/assembly3.asm)    

#### Exercicio 4. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Inicialize um registrador com um valor qualquer.  
b. Armazene em  memória, a partir do endereço 0x200, o valor inicial e os cinco valores subsequentes.  
[Uma proposta de solução](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/assembly4.asm)   

## Novas instruções
- LD: Carrega indiretamente registrador  
Sintaxe: `LD Rr,Y, onde 0 ≤ r ≤ 31`   
Operação: Armazena o conteúdo do endereço de memória Y (r29,r28) no registrador Rr
- DEC: Decrementa o registrador  
Sintaxe: `DEC Rr, onde 0 ≤ r ≤ 31`   
Operação: Decrementa o registrador Rr em 1   


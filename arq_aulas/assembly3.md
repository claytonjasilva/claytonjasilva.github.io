# Assembly Atmega2560

#### Exercicio 1. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Armazene uma tabela de 7 valores em memória, a partir do endereço 0x200. Definir arbitrariamente os números.  
b. Some os dados da tabela armazenando na posição de endereço seguinte à última linha.  
[Uma proposta de solução](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/4983b81071d4d47d987ee9d03eea9a3bd2169029/arq_aulas/assembly1.asm)   

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
[Uma proposta de solução](arq_aulas/assembly4.asm)   

## Novas instruções
- CP: Compara o valor armazenado em dois registradores.  
Sintaxe:`CP Rd,Rr, onde 0 ≤ d ≤ 31, 0 ≤ r ≤ 31`    
Operação: Rd - Rr, se o resultado igual a 0x00, 'seta' o bit 1 do registrador de status  
- BREQ: Desvia se os operandos forem iguais a um endereço  
Sintaxe: `BREQ k, onde -64 ≤ k ≤ +63`   
Operação: Desvia o código para +-k posições  

#### Exercicio 5. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Usando as instruções `CP` e `BREQ`, leia os dados de uma tabela de 16 valores em memória, a partir do endereço 0x200.   
b. Some os dados da tabela armazenando na posição de endereço seguinte à última linha.  
[Uma proposta de solução](arq_aulas/assembly5.asm)   

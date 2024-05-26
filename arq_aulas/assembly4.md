# Assembly Atmega2560

#### Exercicio 1. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Armazene inicialmente os 20 impares acima de 100 nos endereços de memória acima de 0x200, construindo uma tabela de dados.
b. Em seguida, leia sequencialemnte cada um dos números armazenados na tabela, armazenando também em sequência o par imediatamente inferior ao número lido
em uma nova tabela iniciada a contar do endereço após a última linha da tabela anterior.  
c. Aramazenar, por último: o endereço inicial da primeira tabela; e o tamanho (número de linhas) de cada tabela.
[Uma proposta de solução](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/assembly5.asm)   

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
- CP: Compara o valor armazenado em dois registradores.  
Sintaxe:`CP Rd,Rr, onde 0 ≤ d ≤ 31, 0 ≤ r ≤ 31`    
Operação: Rd - Rr, se o resultado igual a 0x00, 'seta' o bit 1 do registrador de status  
- BREQ: Desvia para o endereço se os operandos forem iguais  
Sintaxe: `BREQ k, onde -64 ≤ k ≤ +63`   
Operação: Desvia o código para +-k posições  
- BRNE: Desvia para o endereço se os operandos forem diferentes  
Sintaxe: `BRNE k, onde -64 ≤ k ≤ +63`   
Operação: Desvia o código para +-k posições
- ST: Armazena indiretamente dados em memória  
Sintaxe: `ST X, Rr, onde 0 ≤ r ≤ 31`   
Operação: Armazena o conteúdo de Rr no endereço de memória definido em X (r27,r26)    

#### Exercicio 5. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Usando as instruções `CP` e `BRNE`, realize um loop de 10 repetições.   
b. Some os dez primeiros número pares a partir de um par definido arbitrariamente.  
[Uma proposta de solução](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/assembly5.asm)   

#### Exercicio 6. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Usando as instruções `CP` e `BRNE`, realize um loop de 10 repetições.   
b. Usando a instrução `ST`, armazene os dez números pares a partir de um número par inicial definido arbitrariamente nos endereços a partir de 0x200.  
[Uma proposta de solução](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/assembly6.asm)   


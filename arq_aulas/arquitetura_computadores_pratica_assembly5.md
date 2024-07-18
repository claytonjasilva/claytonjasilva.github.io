# Prática 5 Assembly Atmega2560

### Novas instruções
- BRLO k: Desvia se menor  
Sintaxe:`BRLO k, onde -64 ≤ k ≤ +63`
- BRMI k: Desvia se negativo
Sintaxe:`BRMI k, onde -64 ≤ k ≤ +63`

#### Exercicio 1. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Execute uma operação de ler uma tabela, com 64 linhas, de dados, armazenada a partir de 0x200.  
b. Em seguida, conte quantos números da tabela são inferiores a 50, armazenando o resultado no endereço após a tabela.  
[Uma proposta de solução](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/assembly9.asm)   

## *Assembler* do Atmega2560
1. Diretiva `.def`
Define um nome simbólico em um registrador. Permite que sejam referenciados por meio do símbolo e que pode ser usado no programa.   
```
.def flag=r16
```
2. Diretiva `.set`
Definem um símbolo igual a uma expressão. Atribuem um valor a um rótulo, que ser usado em expressões posteriores.   
```
.set cont=1
```
3. Diretiva `.MACRO`
informa ao Assembler que este é o início de uma macro.
Leva o nome da macro como parâmetro e pode ter até 10 parâmetros.
A definição da macro é encerrada por uma diretiva `.ENDMACRO`.
```
.MACRO soma
add r16,r17
st X,r16
inc r26
.ENDMACRO

# Prática 3 Assembly Atmega2560 

## Visão inicial: arquitetura do Atmega2560

- O Atmega possui 135 instruções
- Possui 32 registradores de 8 bits **de uso geral**: r0 a r31
- Possui 3 registradores **ponteiros**, criados a partir dos seguintes de uso geral: registrador X, r27-r26; registrador Y, r29,r28; registrador Z, r31, r30
- Possui memória de 8 kB
- O endereçamento da RAM interna ocupa a **faixa de 0x0200 a 0x21FF**

## Visão inicial: *Assembler* do Atmega2560

**[Manual completo do Assembler 2560](https://ww1.microchip.com/downloads/en/DeviceDoc/40001917A.pdf)**

1. **Comentários**  

```
; The rest of the line is a comment
```

2. **Operandos**  
Os seguintes operandos podem ser usados:

- **Rótulos** definidos pelo usuário, que recebem o valor do contador de localização no ponto em que aparecem;  
- Variáveis definidas pelo usuário criadas pela diretiva SET;  
- Constantes definidas pelo usuário estabelecidas pela diretiva EQU;  
- **Constantes inteiras**: as constantes podem ser fornecidas em vários formatos, incluindo:  
**Decimal (padrão)**: 10, 255  
**Hexadecimal (duas notações)**: 0x0a, $0a, 0xff, $ff  
Binário: 0b00001010, 0b11111111  
Octal (zero à esquerda): 010, 077  

3. **Diretivas**

- `DEF`

Define um nome simbólico para um registrador.   
Sintaxe: `.DEF rótulo = registrador`

- `EQU`

Define um nome simbólico para um registrador.   
Sintaxe: `.EQU rótulo = registrador`

- `SET`

Define um rótulo para uma expressão que resulta um valor. **Pode ser alterado no corpo do programa**.  
Sintaxe: `.SET rótulo = expressão`

- `EQU`

Define um rótulo para uma expressão que resulta um valor. **Não pode ser alterado no corpo do programa**.  
Sintaxe: `.EQU rótulo = expressão`

- `MACRO`

Inicia uma macro (sequência de instruções ou comandos).  
Sintaxe: `.MACRO rótulo`

- `ENDMACRO`

Finaliza uma macro.  
Sintaxe: `.ENDMACRO`

4. **Operadores**

- `+`

Adição binária que retorna a adição de duas expressões.  

- `*`

Multiplicação binária que retorna o produto de duas expressões.


## Instruções básicas

- `CP`

Compara o valor armazenado em dois registradores.    
Sintaxe:`CP Rd,Rr`, onde 0 ≤ d ≤ 31, 0 ≤ r ≤ 31
Operação: Rd - Rr, se o resultado igual a 0x00, 'seta' o bit 1 (bit de 'Zero') do **registrador de status**

- `BREQ`

Desvio **condicional** relativo para o endereço se os operandos forem iguais. Testa se na comparação anterior Rd = Rr.    
Sintaxe: `BREQ k`, onde -64 ≤ k ≤ +63
Operação: Desvia o código para +/-k posições.  

- `BRNE`

Desvio **condicional** relativo para o endereço se os operandos forem diferentes. Testa se na comparação anterior Rd é diferente de Rr.   
Sintaxe: `BRNE k`, onde -64 ≤ k ≤ +63
Operação: Desvia o código para +/-k posições

- `ST`

Transfere indiretamente dados de registrador para memória. Os respectivos registradores de uso geral devem estar com os bytes de metade do endereço. Registrador X, r27-r26; registrador Y, r29,r28; registrador Z, r31, r30.    
Sintaxe: `ST X, Rr`, `ST Y, Rr` ou `ST X, Rr`, onde 0 ≤ r ≤ 31
Operação: Armazena o conteúdo de Rr no endereço de memória definido em X (r27,r26), Y (r29,r28) ou Z (r31,r30).

- `LD`

Transfere indiretamente dados da memória para registrador de uso geral. Os respectivos registradores de uso geral devem estar com os bytes de metade do endereço. Registrador X, r27-r26; registrador Y, r29,r28; registrador Z, r31, r30.    
Sintaxe: `LD Rr,X`, `LD Rr,Y` ou `LD Rr,Z`, onde 0 ≤ r ≤ 31
Operação: Armazena o conteúdo do endereço de memória definido em X (r27,r26), Y (r29,r28) ou Z (r31,r30) no registrador Rr.

## Exercicios

1. Elaborar um programa em assembly para calcular os 10 pares a partir do número 2 (inclusive) e armazenar o resultado em r0, utilizando um loop.

[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_assembly_asm/pratica_assembly3_ex1.asm)

2. Elaborar um programa em assembly para calcular os 10 pares, a partir do número 2, e armazená-los em uma tabela a partir do endereço 0x200;  
Somar os números determinados e armazenar o resultado no endereço seguinte ao último dado da tabela.

[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_assembly_asm/pratica_assembly3_ex2.asm)

3. Elaborar um programa em assembly para calcular os 20 pares, a partir do número 2, e armazená-los em uma tabela a partir do endereço 0x200;  
Até o décimo para, para cada número par, determinar o resultado da expressão y = x * x + 3;  
Somar todos os números pares, os números y determinados e armazenar ambos nos endereços seguintes à tabela.

[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_assembly_asm/pratica_assembly3_ex3.asm)

4. Exercício. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Armazene uma tabela de 7 valores em memória, a partir do endereço 0x200. Definir arbitrariamente os números.  
b. Verifique se os dados da tabela são iguais. Se forem iguais, armazene 0 no endereço após a última linha da tabela.  
[Uma proposta de solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/assembly/assembly2.asm)   

5. Exercício. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Inicie a execução a partir de um endereço 0xa da memória flash.  
b. Leia os dados de uma tabela armazenada nos cinco primeiros endereço a partir da posição 0x200.  
c. Retorne a execução para o primeiro endereço livre da memória flash.  
[Uma proposta de solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/assembly/assembly3.asm)

6. Exercício. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Inicialize um registrador com um valor qualquer.  
b. Armazene em  memória, a partir do endereço 0x200, o valor inicial e os cinco valores subsequentes.  
[Uma proposta de solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/assembly/assembly4.asm)


7. Exercício. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Usando as instruções `CP` e `BRNE`, realize um loop de 10 repetições.   
b. Some os dez primeiros número pares a partir de um par definido arbitrariamente.  
[Uma proposta de solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/assembly/assembly5.asm)

8. Exercício. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

a. Usando as instruções `CP` e `BRNE`, realize um loop de 10 repetições.
b. Usando a instrução `ST`, armazene os dez números pares a partir de um número par inicial definido arbitrariamente nos endereços a partir de 0x200.  
[Uma proposta de solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/assembly/assembly6.asm)

9.  Exercício. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que

a. Armazene uma tabela de 7 valores em memória, a partir do endereço 0x200. Definir arbitrariamente os números.  
b. Some os dados da tabela armazenando na posição de endereço seguinte à última linha.  
[Uma proposta de solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/assembly/assembly1.asm)

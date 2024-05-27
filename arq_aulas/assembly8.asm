;
; assembly8.asm
;
; Created: 26/05/2024 19:38:52
; Author : Clayton J A Silva
;

; Exercicio 2. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:
; a. Armazenar dois números em memória, nos endereços 0x200 e 0x201. Definir arbitrariamente os números.
; b. Se os números forem iguais armazenar a soma no endereço 0x202.
; c. Se os números forem diferentes armazenar a diferença no endereço 0x203.

ldi r16,101 ; define numero a
ldi r17,101 ; define numero b

cp r16,r17 ; compara os dois numeros
breq soma
jmp diferenca

soma: ; bloco da soma
add r16,r17
ldi r26,0x02 ; define o endereço menos significativo inicial da primeira tabela
ldi r27,0x02 ;  define o endereço mais significativost x,r16 
st x,r16 ; carrega resultado
jmp final ; envia ao ultimo endereço 

diferenca:
sub r16,r17
ldi r26,0x03 ; define o endereço menos significativo inicial da primeira tabela
ldi r27,0x02 ;  define o endereço mais significativost x,r16 
st x,r16 ; carrega resultado

final:
break

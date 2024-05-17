;
; lista1_ex2.asm
;
; Created: 17/05/2024 15:34:14
; Author : Clayton J A Silva
;

; Exercicio 2. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') 
; do microcontrolador Atmega2560 que:

; a. Armazene uma tabela de 7 valores em memória, 
; Verifique se os dados da tabela são iguais. 
; Se forem iguais, armazene 0 no endereço após a última linha da tabela.

ldi r16,33 ; arbitra o numero e carrega no registrador r16
sts 0x200,r16 ; armazena a linha 1 da tabela
ldi r17,33 
sts 0x201,r16
ldi r18,33 
sts 0x202,r16
ldi r19,33 
sts 0x203,r16
ldi r20,33 
sts 0x204,r16 
ldi r21,33 
sts 0x205,r16 
ldi r22,33 
sts 0x206,r16 ; armazena o dado da ultima linha

eor r16,r17 ; realiza operacão ou exclusivo - se os valores forem iguais retorna 0
eor r17,r18
eor r18,r19
eor r19,r20
eor r20,r21
eor r21,r22

add r16,r17 ; soma todos os valores - se todos forem 0 os dados da tabela são iguais
add r16,r18
add r16,r19
add r16,r20
add r16,r21

sts 0x207,r16

break

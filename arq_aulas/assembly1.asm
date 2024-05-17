;
; lista1_ex1.asm
;
; Created: 17/05/2024 15:34:14
; Author : Clayton J A Silva
;

; Exercicio 1. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') 
; do microcontrolador Atmega2560 que:

; a. Armazene uma tabela de 7 valores em memória, 
; a partir do endereço 0x200. Definir arbitrariamente os números.

ldi r16,3 ; arbitra o numero e carrega no registrador r16
sts 0x200,r16 ; armazena a linha 1 da tabela
ldi r17,0 ; inicializa o registrador r17
add r17,r16 ; acumula o valor dos dados em r17
ldi r16,45 
sts 0x201,r16
add r17,r16 
ldi r16,56 
sts 0x202,r16
add r17,r16 
ldi r16,32 
sts 0x203,r16
add r17,r16 
ldi r16,89 
sts 0x204,r16 
add r17,r16
ldi r16,1 
sts 0x205,r16 
add r17,r16
ldi r16,2 
sts 0x206,r16 
add r17,r16
sts 0x207,r17 

break

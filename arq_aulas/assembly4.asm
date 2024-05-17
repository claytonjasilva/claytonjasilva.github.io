;
; lista1_ex4.asm
;
; Created: 17/05/2024 15:34:14
; Author : Clayton J A Silva
;

; Exercicio 4. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') 
; do microcontrolador Atmega2560 que:

; a. Inicialize um registrador com um valor qualquer;
; b. Armazene em  memória, a partir do endereço 0x200, o valor inicial e os cinco valores subsequentes.

ldi r16,0xe ; inicializa registrador
sts 0x200,r16 ; armazena o dado em memória
inc r16 ; incrementa registrador
sts 0x201,r16
inc r16
sts 0x202,r16
inc r16
sts 0x203,r16
inc r16
sts 0x204,r16
inc r16
sts 0x205,r16

break




;
; lista1_ex5.asm
;
; Created: 17/05/2024 15:34:14
; Author : Clayton J A Silva
;

; Exercicio 5. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

; a. Usando as instruções `CP` e `BRNE`, realize um loop de 10 repetições.   
; b. Some os dez primeiros número pares a partir de um par definido arbitrariamente.

; inicializa registradores
ldi r16,0 ; valor inicial de r16: contador
ldi r17,10 ; r17 - flag: armazena o valor final do loop
ldi r18,34 ; inicializa r18 - par inicial
ldi r19,2 ; r19: incremento de par

; transfere o valor inicial de r17 para r19
mov r20,r18 ; r20: soma dos pares 

loop: ; rótulo de loop
add r18,r19 ; atualiza o número par em r17
add r20,r18 ; acumula valor 
inc r16 ; incrementa contador
cp r17,r16 ; compara contador com flag
brne loop

break

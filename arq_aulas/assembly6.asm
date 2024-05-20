;
; lista1_ex6.asm
;
; Created: 17/05/2024 15:34:14
; Author : Clayton J A Silva
;

; Exercicio 6. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:

; a. Usando as instruções `CP` e `BRNE`, realize um loop de 10 repetições.   
; b. Armazene os dez números pares a partir de um número par inicial definido arbitrariamente 
; nos endereços a partir de 0x200.  

; inicializa registradores
ldi r16,0 ; valor inicial de r16: contador
ldi r17,10 ; r17 - flag: armazena o valor final do loop
ldi r18,34 ; inicializa r18 - par inicial
ldi r19,2 ; r19: incremento de par
ldi r26,0x00 ; r26: armazena 8 bits menos significativos de endereço de memória
ldi r27,0x02 ; r27: armazena 8 bits mais significativos de endereço de memória

; transfere o valor inicial de r17 para r19
mov r20,r18 ; r20: soma dos pares 

loop: ; rótulo de loop
add r18,r19 ; atualiza o número par em r17
st x,r18 ; Armazena o par no endereço de memória definido por X
add r20,r18 ; acumula valor 
inc r16 ; incrementa contador
inc r26 ; atualiza endereço
cp r17,r16 ; compara contador com flag
brne loop

sts 0x20A,r20 ; armazena no endereço 0x20a o valor acumulado
break

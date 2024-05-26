;
; assembly7.asm
;
; Created: 26/05/2024 19:38:52
; Author : Clayton J A Silva
;

; Exercicio 1. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') do microcontrolador Atmega2560 que:
; a. Armazene inicialmente os 20 impares acima de 100 nos endereços de memória acima de 0x200, 
; construindo uma tabela de dados. 
; b. Em seguida, leia sequencialmente cada um dos números armazenados na tabela, 
; armazenando também em sequência o par imediatamente inferior ao número lido em uma nova tabela iniciada a contar do endereço após a última linha da tabela anterior.
; c. Aramazenar, por último: o endereço inicial da primeira tabela; e o tamanho (número de linhas) de cada tabela.
; Replace with your application code

; Cria tabela de numeros impares a partir de 100
ldi r16,101 ; inicializa o impar
ldi r17,20 ; define a flag
ldi r18,0 ; define e inicializa contador
ldi r26,0x00 ; define o endereço menos significativo inicial da primeira tabela
ldi r27,0x02 ;  define o endereço mais significativo

loop1: ; loop da parte a
st x,r16 ; carrega impar
inc r16
inc r16 ; atualiza impar
inc r26 ; atualiza endereço da linha da tabela a
inc r18 ; atualiza contador
cp r18,r17
brne loop1

break ; cria o primeiro ponto de controle 

ldi r18,0 ; reinicializa contador
mov r28,r26 ; define o endereço menos significativo inicial da segunda tabela
ldi r26,0x00 ; reseta a linha da tabela a
ldi r29,0x02 ;  define o endereço mais significativo


loop2: ; loop da parte b
ld r19,x ; carrega o registrador com o dado da tabela a
dec r19 ; calcula o par inferior
st y,r19 ; carrega o dado na tabela b
inc r26 ; atualiza a linha da tabela a
inc r28 ; atualiza a linha da tabela b
inc r18 ; atualiza contador
cp r18,r17
brne loop2

break ; cria o segundo ponto de controle 

ldi r26,0x00 ; reseta o endereço da tabela a
st y,r26
inc r28
st y,r27
inc r28
st y,r17

break ; cria o terceiro ponto de controle 

break

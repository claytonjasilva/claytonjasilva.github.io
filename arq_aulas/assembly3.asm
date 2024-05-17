;
; lista1_ex3.asm
;
; Created: 17/05/2024 15:34:14
; Author : Clayton J A Silva
;

; Exercicio 3. Implementar um código em linguagem de montagem ('assembly') para o montador ('assembler') 
; do microcontrolador Atmega2560 que:

; a. Inicie a execução a partir de um endereço 0xa da memória flash;
; b. Leia os dados de uma tabela armazenada nos cinco primeiros endereço a partir da posição 0x200;
; c. Retorne a execução para o primeiro endereço livre da memória flash.

jmp 0x15 ; gera uma tabela na memória com dados diferentes de 0 
jmp 0xa
break
break
break
break
break
break
lds r16,0x200 ; leitura dos dados da tabela
lds r17,0x201 ; leitura dos dados da tabela
lds r18,0x202 ; leitura dos dados da tabela
lds r19,0x203 ; leitura dos dados da tabela
lds r20,0x204 ; leitura dos dados da tabela
jmp 0x4
ldi r16,33 ; arbitra o numero e carrega no registrador r16
sts 0x200,r16 ; armazena a linha 1 da tabela
ldi r17,33 
sts 0x201,r16
ldi r18,33 
sts 0x202,r16
ldi r19,33 
sts 0x203,r16
ldi r20,33 
sts 0x204,r16 ; armazena o dado da ultima linha
jmp 0x2 ; observe que a instrução jmp possui 32-bits, ocupando 2 endereços - ver manual

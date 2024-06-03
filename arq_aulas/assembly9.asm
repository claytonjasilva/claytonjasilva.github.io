;
; AssemblerApplication9.asm
;
; Created: 03/06/2024 10:25:27
; Author : Clayton J A Silva
;

.def cont=r16 ; Define o registrador contador
.def inf50=r17 ; Define o registrador que armazena os numeros inferiores a 50
ldi inf50,0 ; Inicializa o registrador
.set flag=4 ; Inicializa o flag
ldi r26,0x00 ; Incializa o endereço inicial
ldi r27,0x02

.MACRO teste
cpi r18,50 ; Compara o dado do registrador com 50
brlo conta
jmp fim
conta: inc inf50
fim:
.ENDMACRO


loop:
ld r18,X ; Carrega o dado da tabela
teste ; Executa a macro teste
inc r26
inc cont ; Incrementa contador
cpi cont,flag ; Compara o contador com o flag
brlo loop ; Desvia se o contador<flag	

; Armazena o resultado após a tabela
st X,inf50 

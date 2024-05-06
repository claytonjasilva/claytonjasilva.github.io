# Visão inicial
## Registradores e memória RAM
**Registradores**   
1. Elaborar um programa em assembly para armazenar os 32 primeiros números pares nos registradores do processador do Atmega2560.
   **Uso da instrução LDI.**
2. Elaborar um programa em assembly para inicializar os registradores r0 a r5 do processador do Atmega2560 com 2, 4, 6, 8, 10 e 12.
   Incrementar r0 uma vez; r1, duas vezes; assim por diante. **Uso da instrução LDI.**
3. Considerando os dados armazenados nos registradores r0 a r5 da questão anterior, somar os valores, acumulando o resultado da soma no registrador r5.
**Uso da instrução ADD.**   
4. Armazenar os valores armazenados no registrador r5 na posição de endereço 0x200 da memória RAM do microcontrolador Atmega2560.
**Uso da instrução STS.**
6. Instrução **BREAK**

## *Assembler* do Atmega2560
1. Comentários  
```
; The rest of the line is a comment
```
2. Operandos  
Os seguintes operandos podem ser usados:
- Rótulos definidos pelo usuário, que recebem o valor do contador de localização no ponto em que aparecem;  
- Variáveis definidas pelo usuário criadas pela diretiva SET;  
- Constantes definidas pelo usuário estabelecidas pela diretiva EQU;  
- Constantes inteiras: as constantes podem ser fornecidas em vários formatos, incluindo:  
Decimal (padrão): 10, 255  
Hexadecimal (duas notações): 0x0a, $0a, 0xff, $ff  
Binário: 0b00001010, 0b11111111  
Octal (zero à esquerda): 010, 077  

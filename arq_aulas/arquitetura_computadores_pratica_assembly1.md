# Prática 1 Assembly Atmega2560 

## Visão inicial

### Instruções básicas

- LDI: Carrega operando no registrador  
Sintaxe:`LDI Rd`, onde K 16 ≤ d ≤ 31, 0 ≤ K ≤ 255`  
Operação: Rd <- k
- INC: Incrementa registrador  
Sintaxe:`INC Rd`, onde 0 ≤ d ≤ 31 `
Operação: Rd <- Rd + 1
- ADD: Soma os valores de dois registradores  
Sintaxe:`ADD Rd,Rr`, onde 0 ≤ d ≤ 31, 0 ≤ r ≤ 31`
Operação: Rd <- Rd + Rr
- STS: Armazena dado de registrador diretamente em memória  
Sintaxe:`STS k,Rr`, onde 0 ≤ r ≤ 31, 0 ≤ k ≤ 65535`
Operação: DS(k) ← Rr  

### Exemplos

1. Elaborar um programa em assembly para armazenar os 32 primeiros números pares nos registradores do processador do Atmega2560.  

2. Elaborar um programa em assembly para inicializar os registradores r0 a r5 do processador do Atmega2560 com 2, 4, 6, 8, 10 e 12.
   Incrementar r0 uma vez; r1, duas vezes; assim por diante.

4. Considerando os dados armazenados nos registradores r0 a r5 da questão anterior, somar os valores, acumulando o resultado da soma no registrador r5.  

5. Armazenar os valores armazenados no registrador r5 na posição de endereço 0x200 da memória RAM do microcontrolador Atmega2560.  

6. Instrução **BREAK**  

## *Assembler* do Atmega2560

1. **Comentários**  

```
; The rest of the line is a comment
```

2. **Operandos**  
Os seguintes operandos podem ser usados:

- **Rótulos** definidos pelo usuário, que recebem o valor do contador de localização no ponto em que aparecem;  
- Variáveis definidas pelo usuário criadas pela diretiva SET;  
- Constantes definidas pelo usuário estabelecidas pela diretiva EQU;  
- **Constantes inteiras**: as constantes podem ser fornecidas em vários formatos, incluindo:  
**Decimal (padrão)**: 10, 255  
**Hexadecimal (duas notações)**: 0x0a, $0a, 0xff, $ff  
Binário: 0b00001010, 0b11111111  
Octal (zero à esquerda): 010, 077  

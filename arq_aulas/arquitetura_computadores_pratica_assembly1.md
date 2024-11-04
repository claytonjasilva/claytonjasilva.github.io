# Prática 1 Assembly Atmega2560 

## Visão inicial: arquitetura do Atmega2560

- O Atmega possui 135 instruções
- Possui 32 registradores de 8 bits
- Possui memória de 8 kB
- O endereçamento da RAM interna ocupa a faixa de 0x0200 a 0x21FF

## Visão inicial: *Assembler* do Atmega2560

**[Manual completo do Assembler 2560](https://ww1.microchip.com/downloads/en/DeviceDoc/40001917A.pdf)**

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


### Instruções básicas

[Manual completo do *set* de instruções do 2560](https://ww1.microchip.com/downloads/en/DeviceDoc/AVR-Instruction-Set-Manual-DS40002198A.pdf)

- `BREAK`

A instrução BREAK é usada pelo sistema de depuração e não pelo software da aplicação. Quando a instrução BREAK é executada, a CPU do AVR é colocada no estado *Parado*.   
Sintaxe:`BREAK`  
Operação: PC <- PC + 1


- `LDI` 

*Load* imediato. Carrega operando no registrador.    
Sintaxe:`LDI Rd,k`, onde 16 ≤ d ≤ 31, 0 ≤ K ≤ 255`    
Operação: Rd <- k

- `MOV` 

Copia dado de um registrador para outro.    
Sintaxe:`MOV Rd,Rr`, onde 0 ≤ d ≤ 31, 0 ≤ r ≤ 31    
Operação: Rd <- Rr


- `INC` 

Incrementa registrador.    
Sintaxe:`INC Rd`, onde 0 ≤ d ≤ 31 `  
Operação: Rd <- Rd + 1

- `ADD` 

Soma os valores de dois registradores.    
Sintaxe:`ADD Rd,Rr`, onde 0 ≤ d ≤ 31, 0 ≤ r ≤ 31`  
Operação: Rd <- Rd + Rr

- `STS`

Armazena dado de registrador diretamente em memória  
Sintaxe:`STS k,Rr`, onde 0 ≤ r ≤ 31, 0 ≤ k ≤ 65535`
Operação: DS(k) ← Rr  


### Exemplos

1. Elaborar um programa em assembly para armazenar os 4 primeiros números pares nos registradores 0 a 3 do processador do Atmega2560, a partir do número 8. Usar somente representação numérica decimal.

[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_assembly_asm/pratica_assembly1_ex1.asm)

2. Elaborar um programa em assembly para inicializar os registradores r0 a r5 do processador do Atmega2560 com 2, 4, 6, 8, 10 e 12. Em seguida, somar os valores, acumulando o resultado da soma no registrador r6.  

[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_assembly_asm/pratica_assembly1_ex2.asm)

3. Criar uma tabela de números pares na memória do Atmega2560 a partir do endereço 0x200, contendo 2, 4, 6, 8, 10 e 12, utilizando os dados armazenados nos registradores.  

[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_assembly_asm/pratica_assembly1_ex3.asm)

4. Elaborar um programa que armazene uma tabela de três números pares subsequentes ao número 0xF0, armazenando-os a partir do endereço 0x200;  
armazenar uma tabela com três número impares subsequentes ao número 0x5, armazenando-os a partir do endereço 0x210;  
armazenar a multiplicação dos pares pelos respectivos impares na ordem da lista nos endereços a partir de 0x220. 

[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_assembly_asm/pratica_assembly1_ex4.asm)



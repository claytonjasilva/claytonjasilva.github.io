# Visão inicial
## Registradores e memória RAM
**Registradores**   
1. Elaborar um programa em assembly para armazenar criar uma tabela de dados nos endereços de memória a partir do endereço 0x200 até o endereço 0x20A.
Os dados armazenados em memória são números pares acima de 50. O programa deverá ler os dados, determinar a soma dos números, armazenando resultado
no endereço 0x20B. **Uso da instrução LDS.**
2. Elaborar um programa em assembly para ler dois dados armazenados nos endereços 0x20B e 0x20C.
Realizar a operação 'ou exclusivo' entre os dados, armazenando o resultado no endereço de memória 0x20D.
 **Uso da instrução EOR.**
3. Elaborar um programa em assembly para inicializar o registrador r0 com 30, incrementar o valor 10 vezes.
4. Elaborar um programa em assembly para somar os dados dos endereços 0x20E a 0x213,
subtraindo o valor obtido do valor armazenado no endereço 0x214, armazenando o resultado no endereço 0x215.
Em seguida desviar a execução ao endereço 0x20.
**Uso da instrução JMP, instrução RJMP.**   

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

# Prática 2 Assembly Atmega2560 

## Visão inicial: arquitetura do Atmega2560

- O Atmega possui 135 instruções
- Possui 32 registradores de 8 bits **de uso geral**: r0 a r31
- Possui 3 registradores **ponteiros**, criados a partir dos seguintes de uso geral: registrador X, r27-r26; registrador Y, r29,r28; registrador Z, r31, r30
- Possui memória de 8 kB
- O endereçamento da RAM interna ocupa a **faixa de 0x0200 a 0x21FF**

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

3. **Diretivas**

- `DEF`

Define um nome simbólico para um registrador.   
Sintaxe: `.DEF rótulo = registrador`

- `EQU`

Define um nome simbólico para um registrador.   
Sintaxe: `.EQU rótulo = registrador`

- `SET`

Define um rótulo para uma expressão que resulta um valor. **Pode ser alterado no corpo do programa**.  
Sintaxe: `.SET rótulo = expressão`

- `EQU`

Define um rótulo para uma expressão que resulta um valor. **Não pode ser alterado no corpo do programa**.  
Sintaxe: `.EQU rótulo = expressão`


4. **Operadores**

- `+`

Adição binária que retorna a adição de duas expressões.  

- `*`

Multiplicação binária que retorna o produto de duas expressões.

### Instruções básicas

[Manual completo do *set* de instruções do 2560](https://ww1.microchip.com/downloads/en/DeviceDoc/AVR-Instruction-Set-Manual-DS40002198A.pdf)

- `LDS`

Carrega dado armazenado em memória diretamente no registrador.    
Sintaxe:`LDS Rd,k`, onde 0 ≤ d ≤ 31, 0 ≤ k ≤ 65535.  
Operação: Rd ← DS(k)

- `JMP` 

Desvio incondicional para o endereço do operando. **Trata-se de uma instrução de 32 bits**.  
Sintaxe:`JMP k`, onde 0 ≤ k < 4M  
Operação: PC ← k

- `RJMP`

Desvio incondicional **relativo** ao endereço atual, em um intervalo de 4096, abaixo e acima do PC. **Trata-se de uma instrução de 16 bits**.  
Sintaxe:`RJMP k`, onde -2K ≤ k < 2K  
Operação: PC ← PC + k + 1

### Exemplos

1. Elaborar um programa que armazene uma tabela de três números pares subsequentes ao número 0xE, armazenando-os a partir do endereço 0x200;  
ler os dados da tabela e somar os valores, armazenando o resultado no endereço 0x203;  
em seguida, substituir os dados da tabela por novos valores pares, somar novos valores, atualizando o resultado no endereço 0x203;  
executar as instruções em um loop infinito.  

[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_assembly_asm/pratica_assembly2_ex1.asm)

2. Elaborar um programa que armazene uma tabela de cinco números subsequentes ao número 0xAA, armazenando-os a partir do endereço 0x200;  
somar os dados das linhas, acumulando a soma (soma 0 = linha 0, soma 1 = linha 0 + linha 1, soma 2 = linha 0 + linha 1 + linha 2, ...);  
armazenar o resultado nas cinco linhas adjacentes à tabela;  
em seguida, substituir os dados da tabela pelas linhas da soma;  
executar as instruções em um loop infinito.  

[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_assembly_asm/pratica_assembly2_ex2.asm)

3. Elaborar um programa em assembly para armazenar os dados dos cinco termos de uma série x = 3.x + 2 em uma tabela a partir do endereço 0x200 (x inicial igual a 2);  
Calcular a soma dos termos da série e armazenar no endereço 0x205.  

[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_assembly_asm/pratica_assembly2_ex3.asm)

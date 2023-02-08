# 3. Controle de fluxo: condicionais simples e compostas
Os comandos de controle de fluxo são aqueles que premitem ao programador alterar a sequência de execução das instruções do programa.  
Podem ser divididos em dois grupos:  
- Condicionais simples
- Condicionais compostas  
As condições que determinam o fluxo de execução das instruções são definidas pelo resultado de uma **expressão lógica**.  

## 3.1 Expressões lógicas
As expressões aritméticas resultam em números de ponto flutante ou inteiros.  
As expressões lógicas são aquelas cujo reultado é um valor lógico.  
Na linguagem C, o valor lógico verdadeiro é 1; e o valor lógico falso é 0.  
Assim como os operadores aritméticos especificam à máquina uma operação aritmética,
os operadores lógicos especificam operações lógicas, qe são de dois tipos: **relacionais** ou de commparação e operações próprias da lógica matemática.

### 3.1.2 Operadores lógicos de comparação
Os operadores lógicos de comparação possibilitam criar proposições lógicas simples estabelecendo a relação comparativa entre dois dados do mesmo tipo, 
por exemplo, duas vaariáveis, uma variávels e uma expressão aritmética, duas constantes etc.    
A tabela especifica os operadores e a respectiva operação lógica correspondente.
| Operador | Operação |
| - | - |
| > | maior |
| < | menor |
| >= | maior ou igual |
| <= | menor ou igual |
| == | igual |
| != | diferente |

### 3.1.2 Operadores lógicos
Variáveis, expressões ou constante lógicas podem ser combinadas com operadores lógicos para formar proposições compostas.  
As operações são conjunção, disjunção ou negação.  
| Operador | Operação |
| - | - |
| && | conjunção (*and*) |
| \|\| | disjunção (*or*) |
| ! | negação |

# 3.2 Condicionais simples
Na condicional simples, a execução da instrução é condicionada ao resultado da expressão lógica da sentença, cuja sintaxe é
```
if (<expressão lógica>) {
  <bloco de instruções>
}
```

# 3.3 Condicionais compostas

# 2. Programando com Arduino. Controle de fluxo: condicionais simples e compostas

Os comandos de controle de fluxo para o Arduíno são aqueles que permitem ao programador **alterar a sequência de execução das instruções** do programa, similares à linguagem C/C++.  

Podem ser divididos em dois grupos:  

- Condicionais **simples**
- Condicionais **compostas**
  
As condições que determinam o fluxo de execução das instruções são definidas pelo resultado de uma **expressão lógica**.  

## 2.1 Expressões lógicas

As **expressões aritméticas** resultam em números, por exemplo **ponto flutuante** (tipo *float*) ou **inteiros** (tipo *int*).  

As **expressões lógicas** são aquelas cujo resultado é um **valor lógico**. Na linguagem C, o valor lógico **retornado por uma expressão lógica verdadeira é 1**; e o valor lógico **falso é 0**.

Nesse ponto cabe uma observação:

- Verdadeiro: 1 (resultado de expressões lógicas, **mas qualquer valor diferente de 0 é considerado verdadeiro em contextos booleanos**).
- Falso: 0.

Assim como os operadores aritméticos especificam à máquina uma operação aritmética, os **operadores lógicos** especificam **operações lógicas**, que são de dois tipos: **relacionais** ou de comparação e operações **lógicas** (próprias da lógica matemática).

### 2.1.1 Operadores lógicos de comparação

Os operadores lógicos de comparação possibilitam criar **proposições simples** estabelecendo a **relação comparativa** entre dois dados do mesmo tipo, por exemplo, duas variáveis, uma variável e uma expressão aritmética, duas constantes etc.

A tabela especifica os operadores e a respectiva operação lógica correspondente.

| Operador | Operação |
| - | - |
| > | maior |
| < | menor |
| >= | maior ou igual |
| <= | menor ou igual |
| == | igual |
| != | diferente |

Os operadores relacionais são aplicados a **dois operandos**. Por exemplo, `3 > 2`, que compara o número 3 com o número 2.

Os operandos podem conter **números**; **variáveis**, por exemplo, `x > 3`; e **expressões aritméticas**, por exemplo, `x + 3 <= 4 + y`. A máquina resolve primeiro as expressões aritméticas (os operadores aritméticos têm precedência sobre os lógicos).  

Expressões lógicas podem ser operandos de outras expressões lógicas. Isso é possível porque as expressões lógicas retornam valores inteiros (int) que são interpretados como 0 (falso) ou 1 (verdadeiro). Pode-se usar esses valores como operandos em outras operações lógicas para construir expressões mais complexas.

### 2.1.2 Operadores lógicos

Variáveis, expressões ou constante lógicas podem ser combinadas com operadores lógicos para formar **proposições compostas**.  
As operações lógicas básicas são **conjunção**, **disjunção** e **negação (inversão lógica)**.  

| Operador | Operação |
| - | - |
| && | conjunção (*and*) |
| \|\| | disjunção (*or*) |
| ! | negação |

Existem operações que podem ser aplicadas **bit a bit**.

As operações lógicas também podem ser utilizadas **bit a bit**. Nesse caso, os operandos devem ser inteiros. Os operadores são os seguintes:

| Operador | Operação |
| - | - |
| & | conjunção bit a bit (*and*) |
| \ | disjunção bit a bit (*or*) |
| ^ | ou exclusivo bit a bit (*xor*) |
| ! | negação |
| << | deslocamento à esquerda |
| >> | deslocamento à direita |

As operações lógicas bit a bit (ou *bitwise*) são usadas para manipular bits individuais de um número. Em C, essas operações são realizadas usando operadores específicos que operam diretamente nos bits de um operando. **Essas operações são úteis em muitas aplicações de baixo nível, como manipulação de registros, criptografia, e controle de hardware**.

As operações de conjunção, disjunção e negação são aplicadas a cada bit dos operandos. Os operadores bit a bit operam diretamente sobre os bits individuais dos operandos.

As operações de deslocamento requerem como operando o inteiro cuja representação em bita será aplicado o deslocamento, bem como o número de bits de posições de deslocamento. Por exemplo,

```cpp
int a = 3; // 11 em binário
int res = a << 2; // Desloca os bits de 'a' duas posições para a esquerda
Serial.begin(9600);
Serial.println(res); // Imprime o valor de 'res' no monitor serial
```

irá apresentar na console do monitor serial o valor 12 (1100 em binário).

Operações lógicas bit a bit são projetadas para serem usadas com tipos de dados inteiros (como int, unsigned int, char, short, long). Aplicar esses operadores a tipos de dados de ponto flutuante (como float e double) não é apropriado e geralmente resulta em comportamento indefinido ou em um erro de compilação, dependendo do compilador e das configurações.

Os caracteres podem ser usados com operadores bit a bit porque **cada caractere é internamente representado por um valor inteiro correspondente ao seu código ASCII**.


# 9. *Strings* e vetores

## 9.1 *Strings*
As *strings* são cadeias de caracteres. Na linguagem C existem alguma peculiaridades para tratar caracteres que merecem ser observadas.

### 9.1.1 Caracteres (*char*)
Os caracteres são um tipo de dado:*char*. Alinguagem C as trata como sendo variáveis de 1 *byte*.  
A sintaxe para indicar ao compilador que o dado é um caractere é inscrevê-lo entre **aspas simples**, `'<caractere>'`.  
Como vimaos anteriormente, a declaraço de uma variável do tipo *char* deve ser `char <nome da variável>;`.   
**Uma peculiaridade do C:** pode-se também usar *char* para armazenar valores numéricos inteiros.
Para escrever o *char* como inteiro basta formatar a saída com `%d`ou `%i`.

### 9.1.2 Entrada e Saída de caracteres
1. Funções `getchar`e `putchar`  
O modelo de entrada e saída da linguagem C é maniulado como um fluxo de caracteres.  
Um **fluxo de texto** é uma sequência de caracteres dividida em **linhas**.  
Cada linha possui zero ou mais caracteres seguidos por um **caracteres de nova linha**.  
A biblioteca padrão provê funções para leitura e escrita de caracteres, das quais as mais simples são:  
`getchar()`: lê o próximo caractere do fluxo de texto retorna seu valor; e  
`putchar(<caractere>)`: imprime um caractere.

2. Entrada de fluxo de texto inválida
Os caracteres do fluxo de texto de entrada são lidos até que não há mais caractere válido.  
A linguagem C requer um caractere que indique não haver mais caractere válido nos fluxos de texto. É o caractere chamado `EOF`, de *end of file*.  
EOF é um inteiro definido na biblioteca <stdio.h> diferente de qualquer char.

3. Outras funções de saída e entrada de caractere


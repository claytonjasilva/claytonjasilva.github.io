# 9. *Strings* e vetores

## 9.1 *Strings*
As *strings* são cadeias de caracteres. Na linguagem C existem alguma peculiaridades para tratar caracteres que merecem ser observadas.

### 9.1.1 Caracteres (*char*): conceitos gerais
- Os caracteres são um tipo de dado:*char*. A linguagem C as trata como sendo variáveis de 1 *byte*.  
- A sintaxe para indicar ao compilador que o dado é um caractere é inscrevê-lo entre **aspas simples**, `'<caractere>'`.  
- Como vimos anteriormente, a declaraço de uma variável do tipo *char* deve ser `char <nome da variável>;`.   
- **Uma peculiaridade do C:** pode-se também usar *char* para armazenar valores numéricos inteiros.  
- Para escrever o *char* como inteiro basta formatar a saída com `%d`ou `%i`.  
- O *char* utilizado como inteiro é identificado pela sua equivalência decimal no código ASCII.
  Por exemplo, a letra *B* é identificada pelo decimal 66. [Ver a tabelas ASCII](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/circuitosDecodificadores.md).


### 9.1.2 Entrada e Saída de caracteres  
**a. Utilizando `scanf`**  
  A função *scanf* opera normalmente com caracteres, desde que o formatador de entrada/saída utilize o símbolo `c`.  
  Por exemplo,  
```
#include <stdio.h>

int main(void) {
  char c;
  printf("digite a letra: ");
  scanf("%c", &c);
  printf("A letra eh %c", c);
  return 0;
}
```

**b. Utilizando as funções `getchar`e `putchar` da biblioteca <stdio.h>**  
  Lembrando que o modelo de entrada e saída da linguagem C é manipulado como um fluxo de texto ou seja, de caracteres; um **fluxo de texto** é uma sequência de caracteres dividida em **linhas**; e que cada linha possui zero ou mais caracteres seguidos por um **caracteres de nova linha**.  

  A biblioteca padrão provê funções para leitura e escrita de caracteres, das quais as mais simples são:  
  - `getchar()`: lê o próximo caractere do fluxo de texto retorna seu valor; e  
  - `putchar(<caractere>)`: imprime um caractere.

**c. Obs - Caractere inválido - fim do fluxo de texto de entrada** 
  - Os caracteres do fluxo de texto de entrada são lidos até que não há mais caractere válido.
  - A linguagem C requer um caractere que indique não haver mais caractere válido nos fluxos de texto. É o caractere chamado `EOF`, de *end of file*.
  - EOF é um inteiro definido na biblioteca <stdio.h> diferente de qualquer char.  

### 9.1.3 Sequência ou caracteres de *escape*
Alguns caracteres não são definidos com o uso da barra invertida. A tabela apresenta algumas

| Caracteres | Significado |
| - | - |
| \b | Retrocesso (*back*) |
| \n | Nova linha |
| \r | Retorno na linha |
| \a | *beep* |
| \0 | Fim de *string* |
| \t | Tabulação |
| \ | Aspa |

Veja a [relação completa](https://learn.microsoft.com/pt-br/cpp/c-language/escape-sequences?view=msvc-170)
___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   
**[Vetores: próximo>>](progC_stringsvetores1.md)**   



# 2. Funções de entrada e saída 

## 2.1 Introdução às funções
Uma função é um **bloco de código** que pode ser utilizado várias vezes no programa para **realizar uma tarefa específica**, que:  
- só requer ser escrito somente uma vez; 
- possui um **nome** ou **identificador** e espera os **parâmetros** necessários para realizar a tarefa; e  
- pode ser **chamado** no ponto adequado do programa.
  
Em relação ao uso das funções:
- É inserida no trecho de código que se desejar resolver a tarefa insere-se o nome da função, atribuindo-lhe, entre parêntesis, os **argumentos**, de acordo com o tipo exigido pelos parâmetros da função.   
- Algumas funções respondem **retornando um valor de um determimnado tipo** após a tarefa ser realizada.  
- Podem ser definidas pelo programador, no entanto **outras disponíveis nas bibliotecas da linguagem podem ser usadas**.    
- Para funções de bibliotecas específicas possam ser usadas a diretiva de inclusão `include <nome da biblioteca>` deve ser inderida no programa.

## 2.2 Entrada e Saída: <stdio.h>
Observações gerais:
- Os dados trocados entre fonte ou destino de dados com um programa deve escrito no código por meio de instruções.  
- São exemplos de fonte e destino de dados: teclado, disco ou outros dispositivos de I/O (entrada/saída).  
- Esses dados configuram-se como **fluxo de texto** e fluxo binários (bits).  
- Um fluxo de texto é uma **sequência de linhas**, cada uma com **caracteres**.  
- Um fluxo binário é uma sequência de bytes não processados, que registram dados internos.   
- Os programas precisam incluir as instruções ou comandos para possiblitar esses fluxos.  

São categorias de funções, pertencentes à **biblioteca <stdio.h>**, entre outras:
- Operações de arquivo - discutida posteriormente;
- Saída formatada;
- Entrada foramtada.

### 2.2.1 Função `printf` 
A função *printf* é uma função de saída formatada que **escreve no dispositivo de saída (normalmente a console do computador)
caracteres e dados convertidos como especificado no argumento** e **retorna o número de caracteres gravados**.   

A sintaxe da função *printf* é a seguinte:

```
printf(<cadeia de caracteres de controle>,<lista de argumentos>);
```  
**A cadeia de caracteres será escrita na console**.

Na ordem em que são apresentados os argumentos na lista, na cadeia de caracteres deve ser especificado o tipo, conforme o código de especificação da tabela abaixo.  

| Código | Tipo |
| - | - |
| %d ou %i | inteiro |
| %x ou %X | hexadecimal |
| %c | caractere único (*char*) |
| %s | cadeia de caracteres (*string*) |
| %f | ponto flutuante |

Entre o símbolo *%* e a especificação do tipo pode ser usado  

| Símbolo | Significado |
| - | - |
| + | especifica que o número será impresso com sinal |
| número inteiro | especifica o tamanho mínimo do campo |
| . | especifica a separação do tamanho do campo da precisão desejada |
| número inteiro | especifica a precisão (após o ponto) |

Por exemplo, o trecho abaixo escreve o resultado de uma operação de adição inteira:

```
#include <stdio.h>

void main(){
  printf("A soma de 3 + 4 eh %i", 3+4);
}
```

### 2.2.2 Função `scanf` 
A função *scanf* lê do dispositivo de entrada o fluxo de dados, com o **controle do formato** e **atribui os valores convertidos ao formato especificado** a um **ponteiro**.  

A sintaxe da função *scanf* é a seguinte:

```
scanf(<cadeia de caracteres de controle>,<lista de ponteiros dos argumentos>);
```  

1. A cadeia de caracteres de controle pode conter:
- Espaços ou tabulações, que são ignorados   
- Especificações de conversão    
  Uma especificação de conversão determina a conversão do próximo campo de entrada, de acordo com o mesmo código da função *printf*.  
  
2. Os ponteiros dos argumentos devem ser especificados pelo sinal `&`.

O trecho abaixo escreve o resultado de uma operação de adição inteira:

```
#include <stdio.h>

void main(){
  int x, y;
  scanf("%i %i",&x,&y);
  printf("A soma de x + y eh %i", x+y);
}
```

### 2.2.3 Funções `getchar` e `putchar`
São funções de leitura e escrita de caracteres.

A função *getchar* possui o protótipo
```
char getchar(void);
```
Observe que a função retorna um valor char após o usuário digitar um valor de entrada e teclar *enter*.  
**Para esse valor ser armazenado é necessário o uso de um comando de atribuição para uma variável do tipo char.**  
**Observação!!!** O problema da função é que o caractere lido é colocado em uma área intermediária até que o usuário digita um *enter* - é muito comum o programador perceber os problemas em ambientes interativos.  

A função *putchar* possui o protótipo seguinte
```
int putchar(int c);
```
Devolve um inteiro e **apresenta o caractere na console**. O parâmetro pode ser um inteiro equivalente ao caractere no código ASCII ou o próprio caractere.  

O exemplo a seguir mostra o uso de ambas as funções  
```
#include <stdio.h>
#include <conio.h>
/* Referencia: Aprenda a Programar em C, C++ e C#, de Hickson, R.*/
int main()
{
    char Ch;
    Ch=getchar();
    printf("Voce pressionou a tecla ");
    putchar(Ch);
    return(0);
}
```

## 2.3 Entrada e saída: <conio.h>
Para ler e escrever caracteres podem também ser usadas as funções *getch* e *getche*, que **não são definidas pelo padrão ANSI**, embora estejam normalmente incluídas em vários compiladores, especialmente para Windows.  
O protótipo das funções é o seguinte:  
```
int getch(void);
```
Observe que a função retorna um valor int, o que não é problema, pois o valor lido corresponde ao inteiro equivalente à palavra do código ASCII do caractere
quando o usuário digitar um caractere. **A função não requer o uso do *enter*.**  
Como a função retorna um valor, **para esse valor ser armazenado é necessário o uso de um comando de atribuição para uma variável do tipo char.**  
O exemplo abaixo ilustra o funcionamento   
```
#include <stdio.h>
#include <conio.h>
/* Referencia: Aprenda a Programar em C, C++ e C#, de Hickson, R.*/
int main()
{
    char Ch;
    Ch=getch();
    printf("Voce pressionou a tecla %c",Ch);
    return(0);
}
```
A função *getche()* possui prototipo similar
```
int getche(void);
```  
A diferença básica entre as duas é que a função *getche* retorna um **eco**, isto é, apresenta na caonsole o valor digitado pelo usuário.  

## 2.4 *Strings*, entrada/saída de *strings*
Na linguagem C, uma *string* é um **vetor de caracteres** - depois aprofundaremos esses conceitos.   
**Toda *strings* possui um caractere 'terminador' definido no ASCII pelo caractere `\0`**.   
Por exemplo, a palavra "Maria" é uma *string*, que na lingaugem C é definida em memória por
| 0 | 1 | 2 | 3 | 4 | 5 |
| - | - | - | - | - | - |
| 'M' | 'a' | 'r' | 'i' | 'a' | '\0' | 

Para declarar uma *string* e realizar mais operações [ver a seção *strings*]().



## 2.5 Exercícios com tipos, operadores, entrada/saída  
1. Elaborar um programa na linguagem C para ler as notas da ap1, ap2 e ac; calcular e escrever a média do semestre do aluno, de acordo com as regras do Ibmec. 
2. Elaborar um programa na linguagem C para ler os coeficientes de uma equação do segundo grau.
3. Elaborar um programa na linguagem C para calcular e escrever a área interna e o perímetro de um círculo de raio r e seu perímetro.
5. Elaborar um programa na linguagem C para calcular e escrever o índice de massa (imc) corporal de uma pessoa. O imc é calculado dividindo-se o peso pelo quadrado da altura.
6. Elaborar um programa na linguagem C para ler as dimensões dos lados de uma pista de corrida de formato retangular, ler a distância percorrida por um veículo, calcular e escrever o número completo de voltas dadas.

___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

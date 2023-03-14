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
Por exemplo, a palavra "Maria" é uma *string*, que na linguagem C é definida em memória por
| 0 | 1 | 2 | 3 | 4 | 5 |
| - | - | - | - | - | - |
| 'M' | 'a' | 'r' | 'i' | 'a' | '\0' |   

Uma *string* é um **vetor de caracteres**.  
O nome de um vetor define o **ponteiro** do vetor, ou seja, a variável que aponta para o endereço onde o vetor está armazenado em memória.  
Veremos [ponteiros com mais detalhes](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas/progC_ponteiros.md).

Para declarar uma *string* e realizar operações mais elaboradas [ver a seção *strings*](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas/progC_stringsvetores2.md).  

Tratando objetivamente de **entrada** e **saída** com *strings* podemos antecipar:  

**(1)** Declaração de *string*
```
char nome[tamanho];
```  
**(2)** Inicialização de *string*  
```
char nome[tamanho]=<constante string>;
```  
, onde a constante *string* é a cadeia de caracteres entre aspas duplas.  
**(3)** Entrada de *string*  
Uma forma comum é    
```
scanf("%s",<nome da string>);
```
, onde o nome da *string* **não é precedido** do operador unário `&`.  Por exemplo,  
```
#include <stdio.h>

int main()
{
    char palavra[10];
    scanf("%s",palavra);
    printf("Voce digitou a palavra %s",palavra);
    return(0);
}
```  

Outra forma é  
```
gets(<nome da string>);
```  
Por exemplo,  
```
#include <stdio.h>
#include <conio.h>

int main()
{
    char palavra[10];
    gets(palavra);
    printf("Voce digitou a palavra %s",palavra);
    return(0);
}
```

A função *gets* possui o protótipo  
```
char *gets(char *s);
```
, evidenciando que o operador unário `*` indica que a função retona um **ponteiro de char**, que endereça a *string* lida.  
Logo o código escrito acima também pode ser escrito da forma  
```
#include <stdio.h>
#include <conio.h>

int main()
{
    char palavra[10];
    char *p;
    p = gets(palavra);
    printf("Voce digitou a palavra %s",p);
    return(0);
}
```

**Obs.** A função *gets* não é considerada segura porque dependendo da variável lida pode haver um estouro da declaração da *string*,  
ou seja, o usuário pode digitar uma *string* maior do que a definida, fazendo com que uma área da memória não reservada seja ocupada, 
o que configura o chamado **estouro de *buffer***.

**(4)** Saída de *string*  
```
printf(<cadeia de controle>,<nome da string>);
```
, onde a cadeia de controle deve incluir o especificador `%s` onde a *string* for inserida.  

Alternativamente à função *printf*, pode-se usar a função *puts* para escrever na console uma *string* e cuja sintaxe é
```
puts(<nome da string>);
```

## 2.5 Exemplos de aula
#### 2.5.1 Formatando saída, lendo e escrevendo caracteres
**a.** Elaborar um programa na linguagem C para ler os coeficientes de uma equação do segundo grau e calcular as raízes da equação.  
Apresentar a solução com duas casas decimais.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC251a.c)**
**Como usar números complexos em C**  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC251a1.c)**
Consulte outras funções da biblioteca [complex.h](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/complex.h.html)

**b.** Elaborar um programa na linguagem C para calcular e escrever a área interna e o perímetro de um círculo de raio *r*.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC251ab.c)**

**c.** Elaborar um programa na linguagem C para calcular e escrever o índice de massa (imc) corporal de uma pessoa. O imc é calculado dividindo-se o peso pelo quadrado da altura.  
**d.** Elaborar um programa na linguagem C para **ler e escrever cinco caracteres, usando as funções *scanf* e *printf***.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC251d.c)**  

**e.** Elaborar um programa na linguagem C para **escrever os caracteres das vogais usando a função *printf***.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC251e.c)**  
**Pode-se usar a função *putchar***  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC251e1.c)**  

**f.** Elaborar um programa na linguagem C para **ler cinco caracteres e escrever seu respectivo valor ASCII, usando as funções *scanf* e *printf***.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC251f.c)**  

**g.** Elaborar um programa na linguagem C para **escrever os caracteres minúsculos do alfabeto**.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC251g.c)**  
**Tente agora com as lestras maiúsculas!**

#### 2.5.2 Usando a biblioteca *conio.h* e lendo cadeias de caracteres
**a.** Elaborar um programa na linguagem C para ler cinco caracteres, **sem produzir o *eco* na console**. Escrever a sequência de caracteres lidos.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC252a.c)**    
Tente agora mudar a funcao *getch* pela funcao *getche* e veja o que acontece - **a função *getche* gera um eco do caractere digitado**

**b.** Elaborar um programa na linguagem C para ler uma frase, utilizando a função *getch*, e escrever a frase digitada.   

**c.** Elaborar um programa na linguagem C para **criar uma variável que armazene o seu próprio nome**.   
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC252c.c)**   

**d.** Elaborar um programa na linguagem C para criar uma variável que armazene o seu prórpio nome. **Inicializar a variável como um vetor**.   
**e.** Elaborar um programa na linguagem C para ler o nome de uma pessoa. Escrever o nome lido.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC252e.c)**   

**f.** Elaborar um programa para armazenar o seu próprio nome, **usando uma variável ponteiro**. Escrever o quinto caractere do seu nome.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC252f.c)**   








___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

# 2. Controle de fluxo: condicionais simples e compostas

Os comandos de controle de fluxo são aqueles que permitem ao programador **alterar a sequência de execução das instruções** do programa.  

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

```c
int a = 3; //11 em binário
res = << a, 2;
printf("%i",res);
```

irá apresentar na console o valor 12 (1100 em binário).

Operações lógicas bit a bit são projetadas para serem usadas com tipos de dados inteiros (como int, unsigned int, char, short, long). Aplicar esses operadores a tipos de dados de ponto flutuante (como float e double) não é apropriado e geralmente resulta em comportamento indefinido ou em um erro de compilação, dependendo do compilador e das configurações.

Em C, os caracteres podem ser usados com operadores bit a bit porque **cada caractere é internamente representado por um valor inteiro correspondente ao seu código ASCII**.

## 2.2 Condicionais simples

Na condicional simples, a execução de um bloco de instruções interno ao comando é condicionada ao resultado da expressão lógica da sentença.

Sua sintaxe é

```c
if (<condição>) {
  <bloco de instruções>
}
```

Processo de execução pela máquina:  

1. A condição via de regra é uma expressão lógica, cujo valor é calculado pela máquina.  **A condição só pode gerar um resultado dentre dois possíveis: diferente de 0 - 1 se a condição for expressão lógica, (verdadeiro), ou 0, (falso)**.

- Em C, não existe uma constante de linguagem chamada *True*. Em vez disso, valores lógicos são representados por 0 e diferente de 0. Por convenção, 0 é considerado falso (*false*), e qualquer valor diferente de 0 é considerado verdadeiro (*true*), com 1 sendo usado frequentemente para representar verdadeiro ou resultante de uma expressão lógica.

2. A instrução (ou bloco de instruções) interna é executada somente se a condição ou o cálculo da expressão lógica resultar diferente de 0 e a execução do programa prossegue após a estrutura *if*.

3. Em caso contrário, se a condição for falsa (valor 0), a máquina executa a instrução seguinte ao *if* do programa,
sem executar a instrução (ou bloco de instruções).  

Observações gerais:  

- O bloco das instruções internas ao *if* após a instrução condicional **deve ser delimitado entre chaves**.  
- **Se houver somente uma instrução no bloco** o compilador admite não se usar a delimitação entre chaves.  
- A indentação opera exclusivamente para proporcionar mais clareza ao código, facilitando a manutenção, legibilidade etc.  

Um exemplo é o seguinte:  

```c
#include <stdio.h>
void main(){
  int num; // Declaração da variável num
  printf("Digite um numero: "); // Criar uma interface do programa com o usuário
  scanf("%d",&num);
  if (num>10) printf("\n\nO numero e maior do que 10");
  if (num==10) {
    printf("\n\nVoce acertou!\n");
    printf("\nO numero e igual a 10");
  }
  if (num<10) printf("\n\nO numero e menor do que 10");
}
```

## 2.3 Condicionais compostas

Na condicional composta, **a execução de um bloco de instruções interno** ao comando *if* é condicionada ao valor da condição ou resultado da expressão lógica da sentença ser verdadeiro (diferente de 0), enquanto a execução de **outro bloco de instruções**, interno ao *else* do comando *if*, é condicionada ao resultado ser falso (valor lógico igual a 0).

A sintaxe é

```c
if (<condição>) {
  <bloco 1 de instruções>
}
else {
  <bloco 2 de instruções>
}
```

Processo de execução pela máquina:  

1. A condição é avaliada ou a expressão lógica é calculada pela máquina, gerando um dentre dois resultados, **diferente de 0** (verdadeiro) ou **0** (falso).  
2. A instrução (ou bloco 1 de instruções) - interno ao *if* - é executado somente se a expressão lógica de sua sentença resultar 1.  
3. A instrução (ou bloco 2 de instruções) - interno ao *else* é executado se a expressão lógica resultar 0.
4. Em ambas as situações, o programa prossegue sua execução a partir da instrução seguinte ao comando *if*.

Observações gerais:  

- Como anteriormente, **os blocos de instruções devem ser delimitados entre chaves**.  
- **Se houver somente uma instrução no bloco** o compilador admite não se usar a delimitação entre chaves.

Um exemplo é o seguinte:

```c
#include <stdio.h>
void main(){
  int num; // Declaração da variável num
  printf("Digite um numero: "); // Criar uma interface do programa com o usuário
  scanf("%d",&num);
  if (num>10) printf("\n\nO numero e maior do que 10");
  else {
    printf("\n\nO numero e menor ou igual a 10");
    if (num<5) {
      printf("\n\nO numero e menor do que 5\n");
      printf("\nO numero e %d",num);
    }
  }
}
```

## 2.4 Aninhamento de *ifs* - comando `switch...case`

Seja o seguinte uso de condicional composta

```c
if (a>100) printf("a maior do que 100");
else
  if (a>50) printf("a maior do que 50");
  else printf("a menor ou igual a 50");
```

O código possui dois comandos condicionais compostos *if...else*. Diz-se que os ***ifs* estão aninhados**.

O C possui uma instrução composta (`switch...case`) de condicional composta múltipla cuja sintaxe é a seguinte:  

```c
switch (<expressão integral>) {
case <dado inteiro, caractere ou enumerador>:
  <bloco 1 de instruções>
  break;
case <dado inteiro, caractere ou enumerador>:
  <bloco 2 de instruções>
  break;
...
default:
  <bloco n de instruções>
}
```

O argumento do *switch* é a expressão que você deseja avaliar. **Esta expressão pode ser de qualquer tipo de dado integral, ou seja, que representa inteiros**, como int, char, enum, etc. O valor desta expressão é comparado com os valores especificados em cada case.

O argumento do case pode ser:

- Constante inteira;
- Constante caractere;
- Enumeradores. Enumeradores são tipos definidos pela palavra reservada `enum` definidos pelo identificador seguidos de valores entre {} separados por vírgulas. Por exemplo, `enum Dias {SEG, TER, QUA, QUI, SEX, SAB, DOM};`. Em C, os elementos de uma enumeração (enum) devem ser valores inteiros constantes. 

O funcionamento do `switch...case` é o seguinte:

1. A máquina testa o valor do argumento do `switch` comparando-o com o argumento do primeiro `case`.
2. Caso seja igual, executa o bloco 1 de instruções (interno ao *case*) e segue para a instrução posterior ao *switch* do código.
3. Caso não seja igual, testa o valor do argumento do `switch`, comparando-o com o argumento do próximo `case`.
4. Caso seja igual, executa o bloco de instruções interno ao *case*; em caso contrário, segue ao próximo `case`.
5. A máquina executa esse procedimento até alcançar `default`, caso o argumento do `switch` não seja igual aos argumentos dos `case`.
6. Nesse caso, executa o bloco de instruções interno ao `default` e segue à execução da próxima instrução do código.
7. Importante que o **uso do *default* é opcional**.

Adaptando o exemplo anterior para ilustrar o uso do `switch...case`, temos:

```c
switch (a) {
case 100:
  printf("Voce digitou 100");
  break;
case 50:
  printf("Voce digitou 50");
  break;
default:
  printf("Voce digitou numero diferente de 50 e de 100");
}
```

**Observação**. Você pode usar o mesmo bloco de instruções subordinado a vários `case` diferentes. Isso é feito simplesmente omitindo as instruções de `break` entre os `case`, permitindo que a execução "caia" (*fall through*) para o próximo case. Por exemplo,

```c
switch (<expressão integral>) {
case <dado inteiro, caractere ou enumerador>: 
case <dado inteiro, caractere ou enumerador>:
  <bloco 2 de instruções>
  break;
...
default:
  <bloco n de instruções>
}
```

## 2.5 O operador ternário `? :`

Em C, o operador ternário `? :` é uma forma concisa de expressão condicional que pode substituir a estrutura `if-else` para operações simples. Este operador é também conhecido como operador condicional.

A sintaxe é

```c
<condição> ? <instrução ou bloco de instruções 1> : <instrução ou bloco de instruções 2>;
```

, onde

- condição: Uma expressão lógica que é avaliada como verdadeira (não zero) ou falsa (zero).
- instrução ou bloco de instruções 1: A expressão que é avaliada e retornada se a condição for 1 (verdadeira).
- instrução ou bloco de instruções 2: A expressão que é avaliada e retornada se a condição for 0 (falsa).

## 2.6 Desvio incondicional. Comando `goto`

A linguagem C dispõe de um comando de **desvio incondicional**, `goto`. Precisa ser utilizado com muito cuidado, pois é próprio de uma linguagem não estruturada.

O comando `goto` é frequentemente associado a linguagens de programação não estruturadas, **onde o fluxo de controle pode ser alterado arbitrariamente, levando a um código difícil de seguir e manter**. No entanto, é importante entender que o C, embora seja uma linguagem de programação estruturada, inclui o comando goto por razões históricas e por permitir certos usos específicos onde pode ser conveniente.

As linguagens não estruturadas são caracterizadas pela ausência de estruturas claras para o **controle de fluxo de execução das instruções**, como *loops* e condicionais, o que frequentemente leva ao uso excessivo de comandos `goto`, resultando em código espaguete (*spaghetti code*). Exemplos incluem linguagens de primeira geração como Assembly.

O formato geral do `goto` é

```c
<nome do rotulo>: <instrução>
...
goto <nome do rótulo>;
```

O rótulo (*label*) pode ser um nome qualquer, contanto que siga as regras de nomenclatura dos identificadores. Um rótulo é definido como um identificador seguido de dois pontos (`:`), e pode ser colocado antes de qualquer instrução em uma função.

## 2.7 Tipos caracteres e cadeias de caracteres

Vimos o conceito de [tipos de dados](https://press.rebus.community/programmingfundamentals/chapter/data-types/). 

Além dos tipos de dados numéricos a linguagem C permite operar com constantes e variáveis não numéricos, como caracteres e cadeias de caracteres (*strings*).

### 2.7.1 Tipo caractere (*char*)

Os caracteres são tipo *char*. Os caracteres válidos na linguagem de programação C são baseados no conjunto de caracteres ASCII. O ASCII (*American Standard Code for Information Interchange*) é um padrão de codificação de caracteres que representa texto em computadores e outros dispositivos que utilizam texto. O ASCII usa valores numéricos para representar caracteres, incluindo letras, dígitos, sinais de pontuação e caracteres de controle.

Caracteres ASCII em C
Letras: A-Z (maiúsculas), a-z (minúsculas)
Dígitos: 0-9
Sinais de pontuação: ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ { | } ~ `
Caracteres de controle: como \n (nova linha), \t (tabulação), \0 (nulo), entre outros.

Os caracteres são representados internamente por seus valores ASCII, que são inteiros decimais correspondentes a cada caractere. A tabela ASCII (American Standard Code for Information Interchange) define esses valores para um conjunto padrão de caracteres.

A tabela ASCII mapeia caracteres para números inteiros. Por exemplo,

- Letras Maiúsculas: 'A': 65; 'B': 66; 'Z': 90
- Letras Minúsculas: 'a': 97; 'b': 98
- Dígitos: '0': 48; '1': 49; '9': 57
- Sinais de Pontuação e Outros Símbolos: '!': 33; '@': 64; '#': 35
- Caracteres de Controle (não imprimíveis): '\n' (nova linha): 10; '\t' (tabulação): 9

Os caracteres individuais precisam ser delimitados por aspas simples (' '). Alguns caracteres de controle comuns também são representados usando aspas simples, mas com sequências de escape (`\`).

A declaração de variáveis do tipo *char* possui a seguinte sintaxe:

```c
char x;
```

e a declaração com inicialização

```c
char x = '<caractere>';
```

As atribuições podem ser realizadas para caracteres da mesma forma que para variáveis *int* e *float*, `<nome> = '<caractere>'`.

Além disso, pode-se comparar caracteres diretamente usando os operadores de comparação (==, !=, <, >, <=, >=), pois os caracteres são representados internamente por seus valores ASCII. Similarmente, entre eles podem ser aplicados operadores lógicos bit a bit.

### 2.7.2 Tipo cadeia de caracteres (*string*)

As cadeias de caracteres são definidas com os caracteres entre aspas duplas ("). **Para a linguagem C, um caractere inscrito entre aspas duplas é uma *string*.**

No caso de variáveis, as *strings* precisam ser declaradas **sem inicialização**, da seguinte forma

| Tipo | Descrição |
| - | - |
| `char <nome>[<tamanho>];` | Declaração sem inicialização |

onde o `nome` é um identificador cujas regras são similares as de qualquer outra variável

e o `tamanho` representa o número máximo de caracteres que a *string* pode conter, **incluindo o caractere nulo ('\0') que termina toda *string***. Isso significa que o tamanho do array deve ser grande o suficiente para acomodar todos os caracteres da string mais o terminador nulo.

Podem também ser declaradas com a inicialização, da seguinte forma

| Tipo | Descrição |
| - | - |
| `char <nome>[] = "<cadeia de caracteres>"` | Declaração com inicialização  |

**Observações**.

1. Os comandos de atribuição não podem ser utilizados nas *strings* da mesma forma que nas variáveis *int*,*float* e *char*;
2. As *strings* não podem ser usadas diretamente em operações lógicas da mesma forma que variáveis inteiras ou caracteres. ***Strings* em C são arrays de caracteres terminados com o caractere nulo '\0', cujo nome em uma expressão é interpretado como um ponteiro** para o primeiro caractere da *string*. No entanto, há maneiras de realizar operações lógicas e comparações envolvendo strings utilizando funções da biblioteca padrão [string.h](https://petbcc.ufscar.br/string/).

Na linguagem C, uma *string* é um **vetor de caracteres** - depois aprofundaremos esses conceitos.

**Toda *strings* possui um caractere 'terminador' definido no ASCII pelo caractere de escape `\0`**. Por exemplo, a palavra "Maria" é uma *string*, que na linguagem C é definida em memória por

| 0 | 1 | 2 | 3 | 4 | 5 |
| - | - | - | - | - | - |
| 'M' | 'a' | 'r' | 'i' | 'a' | '\0' |

Com uma *string* é um **vetor de caracteres**, o nome do vetor define um **ponteiro** do vetor, ou seja, a variável que aponta para o endereço onde o primeiro caractere do vetor está armazenado em memória. Em razão disso, os elementos da *string* (os carateres) podem ser identificados pela sua posição relativa. A sintaxe para a identificação é, como mostrado no exemplo, `nome da string[<posição do caractere>]`

```c
char nome = "Maria";
printf("A primeira letra do nome e %c: ",nome[0]);
```

É bom destacar que a posição sempre é iniciada a partir de 0.

## 2.8 Entrada e saída com caracteres e cadeias de caracteres

### 2.8.1 Entrada e Saída com funções da biblioteca padrão <stdio.h>

#### Funções `printf` e `scanf`

A sintaxe de ambas foi discutida na seção anterior. A especificação de tipo em ambas, no caso de *char* e *strings*, é

| Código | Tipo |
| - | - |
| %c | caractere (char) |
| %s | cadeia de caracteres (*string*) |

Para *char*, o uso de duas leituras sucessivas com `scanf`, como no exemplo abaixo, 

```c
printf("Digite o caractere 1: ");
scanf("%c",&c1);
printf("Digite o caractere 2: ");
scanf("%c",&c2);
printf("Digite o caractere 3: ");
```

gera um problema na execução, pois quando se digita o primeiro caractere e pressiona <Enter>, o `scanf("%c", &c1);` lê o caractere corretamente, **mas o caractere de nova linha (\n) que você digitou ao pressionar <Enter> permanece no *buffer* de entrada**. Quando o `scanf("%c", &c2);` é chamado para ler o próximo caractere, ele acaba lendo esse caractere de nova linha (\n) em vez de esperar pela próxima entrada do usuário.

Uma solução é **adicionar um espaço antes do especificador %c no `scanf`**, que faz com que o `scanf` ignore quaisquer caracteres de espaço em branco (incluindo \n, espaço, tabulação) antes de ler o próximo caractere, por exemplo,

```c
char c1,c2,c3; // Declara variáveis de tipo caractere
printf("Digite o caractere 1: ");
scanf("%c",&c1);
printf("Digite o caractere 2: ");
scanf(" %c",&c2); // inserido espaço antes do identificador
```

Para *strings*, na função `scanf`, **não se aplica a indicação `&` antes do nome de variável, pois uma string é um vetor em que o primeiro caractere é o conteúdo associado ao ponteiro de mesmo nome**. Por exemplo, a *string* nome = "Casa de festas" é um vetor (estudaremos mais adiante) em que o primeiro caractere ('C') é o conteúdo do ponteiro nome.

Para permitir que o `scanf` leia *strings* contendo espaços em C, você pode usar uma **expressão regular** para capturar a *string* inteira até a quebra de linha: `scanf(" %[^\n]", <nome da string>)`.

```c
#include <stdio.h>

void main(){
    char nome[20];
    printf("Digite o nome: \n");
    scanf(" %[^\n]",nome);
    printf("O nome digitado e %s",nome);

    return 0;
}
```

Uma expressão regular (ou regex) é uma sequência de caracteres que define um padrão de pesquisa. Em muitos contextos, é usada para encontrar, substituir ou manipular padrões de texto. Expressões regulares são extremamente poderosas e versáteis, permitindo realizar operações complexas de manipulação de strings.

No contexto da linguagem C, o uso de expressões regulares é um pouco mais limitado do que em linguagens modernas, mas ainda é possível. Existem bibliotecas como [regex.h](https://www.piazinho.com.br/download/expressoes-regulares-3-tabelas.pdf) que permitem trabalhar com expressões regulares em C.
  
#### Funções `getchar` e `putchar`

São funções de leitura e escrita de caracteres.

A função `getchar` possui o protótipo

```c
char getchar(void);
```

Observe que **a função retorna um valor char** após o usuário digitar um valor de entrada e teclar *enter*. Logo **para esse valor ser armazenado, é necessário o uso de um comando de atribuição para uma variável do tipo char.**

De modo similar ao comando `scanf`, a leitura de dois caracteres sucessivos pode gerar problema, pois o segundo `getchar` consome o caractere de escape \n (devido ao <Enter>). Uma solução simples é

```c
printf("\nDigite o caractere 1: ");
c1 = getchar();
getchar(); // consome o \n do <Enter>
```

A função `putchar` possui o protótipo seguinte

```c
int putchar(int c);
```

Devolve um inteiro e **apresenta o caractere na console**. O parâmetro pode ser um inteiro equivalente ao caractere no código ASCII ou o próprio caractere.  

O exemplo a seguir mostra o uso de ambas as funções  

```c
#include <stdio.h>
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

#### As funções `gets` e `puts`

A função *gets* possui o protótipo

```c
char *gets(char *s);
```

, evidenciando que o operador unário `*` indica que a função retorna um **ponteiro de char**, que endereça a *string* lida.  

A função `gets` é insegura porque não permite especificar o tamanho do buffer onde a string será armazenada, o que **pode levar a estouro de buffer (*buffer overflow*)**. Isso ocorre porque `gets` continuará lendo caracteres até encontrar um caractere de nova linha ou o fim do arquivo, sem verificar se há espaço suficiente no buffer para armazenar esses caracteres.

Alternativa Segura: `fgets`
Devido aos problemas de segurança com `gets`, a função `fgets` é recomendada como uma alternativa mais segura. A função permite especificar o tamanho do buffer, o que ajuda a prevenir estouros de buffer. Por exemplo,

```c
#include <stdio.h>

int main() {
    char buffer[100];

    printf("Digite uma string: ");
    if (fgets(buffer, sizeof(buffer), stdin) != NULL) {
        printf("Você digitou: %s", buffer);
    } else {
        printf("Erro ao ler a string.\n");
    }

    return 0;
}
```

Como `fgets` funciona. Parâmetros:

- *buffer*: Um ponteiro para a área de memória onde a string será armazenada.
- *sizeof(buffer)*: O tamanho máximo que pode ser armazenado no buffer (incluindo o caractere nulo).
- *stdin*: O fluxo de entrada padrão (teclado).

`fgets` retorna o buffer se a leitura for bem-sucedida. Caso contrário, retorna NULL. 

NULL é um macro definido na linguagem C (e também em C++) que representa um ponteiro nulo. Em termos simples, NULL é usado para indicar que um ponteiro não aponta para nenhum objeto ou endereço válido na memória.

Alternativamente à função `printf`, pode-se usar a função `puts` para escrever na console uma *string* e cuja sintaxe é

```c
puts(<nome da string>);
```

### 2.8.2 Entrada e saída: <conio.h>

Para ler e escrever caracteres podem também ser usadas as funções `getch` e `getche`, que **não são definidas pelo padrão ANSI**, embora estejam normalmente incluídas em vários compiladores, especialmente para Windows.  

O protótipo das funções é o seguinte:

```c
int getch(void);
```

Observe que a função retorna um valor int. O que não é problema, pois o valor lido corresponde ao inteiro equivalente à palavra do código ASCII do caractere quando o usuário digitar um caractere. **A função não requer o uso do *enter*.**  

Como a função retorna um valor, **para esse valor ser armazenado é necessário o uso de um comando de atribuição para uma variável do tipo char.**  

O exemplo abaixo ilustra o funcionamento

```c
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

A função `getche()` possui prototipo similar

```c
int getche(void);
```

A diferença básica entre as duas é que a função `getche` retorna um **eco**, isto é, apresenta na console o valor digitado pelo usuário.  

## 2.9 Exemplos

1. Escrever um programa em C para resolver as seguintes expressões lógicas (descritas sem seguir a sintaxe de C) e escrever o resultado:
  
**a.** $(2 > x) e (3 + 4 = 6)$, dado que *x*=7  
**b.** $(x > y) ou (x + y = 6)$, dado que *x*=3, *y*=5  
**c.** $\overline{(x > y) ou (x + y = 6)}$  

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo14.c)**

2. Elaborar um programa na linguagem C para ler dois diferentes números; calcular e escrever o maior dos números lidos.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo15.c)**

3. Elaborar um programa na linguagem C para ler o nome e a respectiva idade de duas pessoas; calcular e escrever o nome da pessoa mais velha. Admitir que as pessoas podem ter a mesma idade.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo16.c)**  

4. Elaborar um programa na linguagem C para ler a idade de uma pessoa. Se a idade for igual ou inferior a 10 anos, classificar a pessoa como 'criança'. Caso a idade seja inferior a 18 anos e superior a 10 anos, classificar como 'adolescente'. Em qualquer outro caso, classificar como 'adulto'. Escrever a classificação atribuída.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo17.c)**  

5. Elaborar um programa na linguagem C para ler os nomes, pesos e altura de 3 pessoas; calcular e escrever os nomes de cada pessoa com IMC superior a 22 ('valor alto') ou com IMC inferior a 20 ('valor baixo'), seguido do respectivo IMC calculado.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo18.c)**  

6. Elaborar um programa na linguagem C para ler o nome e a idade de 3 animais; calcular e escrever o nome do animal mais velho.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo19.c)**  

7. Elaborar um programa na linguagem C para ler um caractere maiúsculo do alfabeto. Se a letra digitada pelo usuário for igual a *A* ou igual a *B*, o programa deve ler dois números e escrever o resultado da soma. Se a letra digitada for igual a *C*, o programa deve ler um número e escrever o quadrado do número lido. Se a letra digitada pelo usuário for igual a *D*, o programa deve ler três números e escrever o maior dentre os números lidos. Para qualquer outra letra digitada pelo usuário o programa deve escrever a mensagem "Entrada invalida".

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo20.c)**  

8. Elaborar um programa na linguagem C para ler os coeficientes de uma equação do segundo grau e calcular as raízes da equação.  
Apresentar a solução com duas casas decimais. Utilizar a biblioteca [complex.h](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/complex.h.html)

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo21.c)**

9. Elaborar um programa na linguagem C para ler o raio *r* de um círculo, calcular e escrever a área interna e o perímetro.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo22.c)**

10. Elaborar um programa na linguagem C para ler e **escrever três caracteres, usando as funções *scanf* e *printf***. Alternativamente, ler e escrever três caracteres usando as funções `getchar` e `putchar`.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo23.c)**

11. Adaptar o programa do exercício anterior na linguagem C para **escrever o respectivo valor ASCII dos caracteres**.
 
Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo24.c)**

12. Adaptar o programa de anterior, utilizando as funções `getch` para ler o primeiro caractere e `getche` para ler os demais, ambos da biblioteca `conio.h`.
  
Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo25.c)**

13. Elaborar um programa na linguagem C para **criar uma variável que armazene uma *string* com o seu próprio nome**. Em seguida, escrever as quatro primeiras iniciais do nome. Se o caractere for espaço em branco escrever o próximo caractere.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo26.c)**

14.  Adaptar o programa anterior para **ler** o nome completo de uma pessoa, produzindo o mesmo resultado.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo27.c)**
___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

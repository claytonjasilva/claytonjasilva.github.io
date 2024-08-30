# 1. Programando com C

## 1.1 O que é C?

Uma linguagem de **alto nível** para que os usuários possam escrever **programas** que determinem como computadores possam resolver problemas.

## 1.2 O que é um programa de computador?

Um conjunto de **instruções** que devem obedecem à **sintaxe** e à **semântica** da linguagem de programação.
A execução da sequência de instruções do programa deve levar à solução de um problema.

## 1.3 Compilação

Diferentemente do Python, a linguagem C é **compilada**.  
O processo de compilação nos sistemas computacionais é aquele em que o código escrito na linguagem, chamado de **código-fonte**,
é convertido para o **código em linguagem de máquina**, o qual será executado pela máquina.  
O programa encarregado de realizar a conversão é chamado de **compilador**.

## 1.4 Ambiente de desenvolvimento em C

### 1.4.2 O que é uma IDE (*Integrated Development Enviroment*)?

Abreviatura do termo em inglês *Integrated Development Enviroment*, ou seja, **ambiente de desenvolvimento integrado**, 
que designa uma ferramenta de desenvolvimento para **editar o código, acessar um terminal, executar um programa, *debugar* e compilar programas usando um único ambiente.

Exemplos de IDE para o C:  

- [Eclipse Foundation](https://eclipseide.org/)

- [VSCode](https://code.visualstudio.com/)

- [Dev C++](https://www.bloodshed.net/)  

### 1.4.3 É possível usar uma IDE online

Por exemplo, o [replit](https://replit.com/cloud-development-environment) é plataforma para criar e compartilhar software.

Pode ser usado para escrever e hospedar códigos em diversas linguagens de programação no mesmo lugar. Também é útil para o aprendizado, dispondo de alguns recursos educacionais integrados.

Algumas funcionalidades:

- Editor de código
- Ambiente de desenvolvimento
- Provedor de nuvem
- Ferramentas de colaboração em equipe (por exemplo, Google Docs, GitHub)

Primeiros passos para usar o replit:

- Acessar e criar uma conta em https://replit.com/site/ide
- Conhecer a área de trabalho
- Criar as pastas para armazenar os seus códigos
- Configurar o tema (*Dark/Sun*)

O Help do replit pode ser encontrado em https://docs.replit.com/.

## 1.5 Estrutura de programa em C

### 1.5.1 Visão geral

Os programas em C podem ser decompostos da seguinte forma:

- Os programas são organizados em **projetos**.
- Cada projeto possui pastas, algumas das quais contendo os **códigos nativos do padrão C utilizado do compilador**, chamados de **bibliotecas**
- Contém também as bibliotecas com os códigos **criados pelo próprio programador do projeto**.
- Contém o **código principal** desenvolvido pelo programador, cuja estrutura é a seguinte:  

___

1. Instruções de **pré-processamento**;
2. Prototipação das funções: pode se declarar uma função antes de defini-la; através do protótipo da função, ou seja,
a **especificação do nome e dos parâmetros da função**;  
3. Declaração das variáveis de escopo global - possuem visibilidade em todo o programa;
4. Função ***main()***, código principal;
5. Definição das funções.

___

As instruções dos programas em C são sempre separadas pelo caractere especial `;`, delimitando o fim de uma instrução e o início da instrução seguinte.  

Por exemplo,  

```c
x = 3 * 4 + y;
x++;
print("O resultado eh %i",x);
```

Processo de compilação e execução do programa:

1. Diferentemente do interpretador, o compilador converte todo o programa, **chamado de programa-fonte**, escrito na linguagem de alto nível C, em um código em **linguagem de máquina**, para depois executá-lo.
2. Além do compilador, outros processos são realizados para a geração do **código executável**:

- ***Link* edição**: realizado pelo ***linker***, é o processo de combinar o resultado compilado (em linguagem de máquina) das funções e outros objetos, tanto aqueles da biblioteca padrão quanto aqueles criadas pelo próprio programador, com o código principal - que contém a função *main()* - compilado.
- **Pré-processamento**: realizado pelo **pré-processador**, é o processo que consiste em (i) remover os comentários do programa; e (ii) interpretar as **diretivas** especiais.

Em consequência, **a estrutura sintática do código principal** em C é:  

```c
#include <*header file*> /*Se o código precisar de funções de bibliotecas */
#define <caractere de entrada> <caractere de saída> /*Se o código precisar de macros */
<protótipo de funções>
<declaração de variáveis globais>
void main() { /*função principal*/
  <corpo de instruções>
}
<definição de funções>
```

Algumas observações sobre a sintaxe:

- Os comentários em C são delimitados `/*` e `*/`. 
- Se desejar inserir um comentário em uma linha inteira, pode-se usar `//`antes do comentário.
- Todo o código da função principal *main()* deve ser delimitado por `{` e `}`.  
- Posteriormente definiremos a sintaxe para prototipação e definição de funções, assim como para declaração de variáveis.

### 1.5.2 Diretivas da linguagem C

As diretivas são incluídas no corpo das instruções de pré-processamento e iniciam pelo caractere especial `#`, por exemplo `#include <stdio.h>`.  

As duas diretivas mais utilizadas são:  

- `#include`: incluir o conteúdo de um arquivo, chamado de cabeçalho (*header file*) e que possui extensão *.h*, durante a compilação;
- `#define`: substituir um **código** por uma sequência arbitrária de caracteres.

### 1.5.3 Inclusão de arquivos

As diretivas *include* são muito úteis especialmente para desenvolver códigos muito grandes, utilizando-se o recursos de **modularização de código**.
A inclusão de arquivos admite duas formas sintáticas:  

#### a. Primeira forma

```c
#include "arquivo.h"
```

Se o `arquivo.h` estiver entre aspas, **a busca pelo arquivo será realizada na mesma pasta em que se encontra o código principal**.  

#### b. Segunda forma

Para incluir um `arquivo.h` em C que não esteja na mesma pasta do código principal, você pode especificar o caminho relativo ou absoluto para o arquivo.

- **Incluir Arquivo com Caminho Relativo**

Se o arquivo `arquivo.h` estiver em uma subpasta do código principal chamada `includes`, você pode incluí-lo assim:

```c
#include "includes/arquivo.h"
```

- **Incluir Arquivo com Caminho Absoluto**

Se o arquivo `arquivo.h` estiver em um **diretório absoluto**, por exemplo, `/usr/local/include`, você pode incluí-lo assim:

```c
#include "/usr/local/include/arquivo.h"
```

- **Caminho Relativo para um Diretório Pai**

Se o arquivo `arquivo.h` estiver em um diretório pai, por exemplo, no diretório pai da pasta atual, você pode incluí-lo assim:

```c
#include "../arquivo.h"
```

#### c. Utilização de diretórios padrão

Quando um arquivo de cabeçalho é incluído usando colchetes angulares (< >), como em `#include <arquivo.h>`, o compilador procura o arquivo de cabeçalho apenas nos diretórios padrão onde os arquivos de cabeçalho do sistema estão localizados. Ele não procura no diretório do arquivo de origem atual.

**Observação: Um arquivo cabeçalho também pode conter diretivas *include*.** 

### 1.5.4 Substituição de Macro

Uma macro (abreviação para macroinstrução) **é uma regra ou padrão que especifica como uma certa sequência de entrada (frequentemente uma sequência de caracteres) mapeada para uma substituição de sequência de saída** de acordo com um procedimento definido. 

Ou seja, utilizando-se uma macro é possível substituir no código uma sequência de caracteres longa e complexa, que se repete muitas vezes,
por uma sequência simples.  

Para substituir macro em C utiliza-se a diretiva `#define`.  

Por exemplo, a sequência mais simples de substituição de macro pode ser  

```c
#define NUM 100
```

, que substituirá no corpo do código todas as referências a *NUM* pelo número 100.

### 1.5.5 As expressões aritméticas do programa C

As expressões aritméticas contemplam **operadores** e **operandos** (**variáveis** e **constantes**) de vários **tipos** (Ver o conceito de [tipos de dados](https://press.rebus.community/programmingfundamentals/chapter/data-types/).

Os **operadores aritméticos** sinalizam para o compilador a operação aritmética correspondente. São eles:

| Operador | Operação |
| - | - |
| `+` | Adição |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão |
| `%` | Módulo ou resto da divisão inteira |
| `++` | Incremento |
| `--` | Decremento |

Os operadores possuem **prioridade** para serem resolvidos, logo é importante organizá-los na expressão da forma adequada.  A precedência dos operadores determina a ordem em que as operações são realizadas quando múltiplos operadores aparecem em uma expressão. Em C, a precedência dos operadores aritméticos é a seguinte (do mais alto para o mais baixo):

1. Multiplicação (*), Divisão (/), Módulo (%): Esses operadores têm a mesma precedência e são avaliados antes dos operadores de adição e subtração. Eles são avaliados da esquerda para a direita (associatividade à esquerda). **Importante verificar que os operadores podem ser unários (um só operando) ou binários (dois operandos)**.  Por exemplo, em `int resultado = 20 / 5 * 4;`, primeiro, a divisão 20 / 5 é realizada, resultando em 4; depois, a multiplicação 4 * 4 é realizada, resultando em 16. A associatividade da esquerda para a direita garante que a divisão ocorra antes da multiplicação. Em `int resultado = 18 / 3 * 2 % 5;`, a sequência de operações é `18 / 3`, `6 * 2` e `12 % 5`.
2. Adição (+), Subtração (-): Esses operadores têm precedência mais baixa do que multiplicação, divisão e módulo. Eles também são avaliados da esquerda para a direita (associatividade à esquerda). Por exemplo, em `int resultado = 10 + 5 * 2 - 8 / 4 % 3;`, resolve-se (i) 5 * 2 (10), a expressão agora é: 10 + 10 - 8 / 4 % 3; (ii) depois, a divisão 8 / 4 (2), a expressão agora é: 10 + 10 - 2 % 3; (iii) em seguida, o módulo 2 % 3 (2), a expressão agora é: 10 + 10 - 2; (iv) em seguida, a operação 10 + 10 (20), a expressão agora é: 20 - 2; finalmente, a subtração 20 - 2 = 18. O resultado final é 18.
3. Os parênteses () podem ser usados para alterar a ordem de avaliação de uma expressão, sobrescrevendo a precedência natural dos operadores.

Em relação aos operadores de incremento e decremento, pode-se afirmar que não são operadores concorrentes com os demais operadores. Aplicam-se ao operador imediato a que se referem têm uma precedência alta e são avaliados antes dos operadores aritméticos básicos. Só podem ser aplicados a *lvalues*, que são expressões que se referem a um local na memória e, portanto, podem ser modificadas. Um *lvalue* (*left value*) é uma expressão que se refere a um local de memória que contém um valor, é algo que pode ser modificado diretamente, como uma variável.

No pré-incremento (++x) e pré-decremento (--x), **modificam o valor da variável antes que ela seja usada na operação imediata seguinte**. Por exemplo, na atribuição `y=++x * z`, primeiro se incrementa x; posteriormente multiplica-se o novo valor por z; e, por último, se atribui o novo valor de x a y. No pós-incremento (x++) e pós-decremento (x--), **são avaliados após a utilização da variável na operação imediata seguinte**. Modificam o valor da variável após ela ser usada na operação. Por exemplo, na atribuição `y=x++ * z`, primeiro se realiza x * z; em seguida, incrementa-se x; e por último atribui-se o resultado a y.

Os operandos são os dados sobre os quais serão realizadas as operações. Inicialmente trataremos os dados numéricos dos seguintes **tipos**:

| Tipo | Descrição |
| - | - |
| `int` | números inteiros, podendo variar para `long` ou `short` em função da capacidade de representação desejada |
| `float` | números de **ponto flutuante**, que representam números fracionários computacionalmente, podendo variar para `double` - a parte fracionária é separada da inteira pelo ponto de fração (`.`) |

**Observação**. Uma biblioteca padrão muito útil para realização de operação matemáticas é a [math.h](https://petbcc.ufscar.br/math/).

### 1.5.6 Variáveis em C

Variáveis são **representações simbólicas** de dados que pertencem a um determinado conjunto, ou seja, cujos dados são de um determinado tipo.  

Como são representações simbólicas possuem um **identificador** ou **nome**, que deve obedecer as regras:

- Nomes de variáveis são formados por letras e dígitos;
- O primeiro caractere deve ser uma letra - o caractere *_* é considerado uma letra;
- Letras maiúsculas e minúsculas são caracteres distintos;
- Possuem tamanho limitado - no caso do Ansi-C, no máximo 31 caracteres.  

O uso das variáveis requer a **declaração do tipo**, cuja sintaxe em C é:

```c
<tipo> <nome da variável ou lista de nomes de variáveis>;
```

, onde a lista de nomes de variáveis é um conjunto de nomes separados por vírgula.

Por exemplo,

```c
int i, cont;
float res;
```

Quando uma variável é declarada o compilador C reserva **um endereço de memória** disponível no computador, com o **tamanho necessário** (Ver o [espaço ocupado por tipo de variável](https://intellipaat.com/blog/tutorial/c-tutorial/c-data-types/)) para armazenar o dado numérico, e associa a ele um **endereço de memória**. Em C, **é muito importante entender essa dinâmica**.

### 1.5.7 Sentença de atribuição

A sentença de atribuição se caracteriza pela **atribuição de um valor a uma variável**.  

A sintaxe para o comando de atribuição é  

```c
<nome da variável> = <expressão aritmética ou variável ou número>;
```

Por exemplo,

```c
i = 12;
cont = 3;
res = (12 + 3) * 1.35;
```

Observe que **as sentenças são separadas pelo `;`**

Quando se atribui um valor a uma variável pela primeira vez, diz-se a variável foi **inicializada**. A inicialização pode ser feita por um comando de atribuição em uma linha de instrução separada ou **pode ser feita na mesma linha em que se declara a variável**.

Nesse caso, para variáveis *int* e *float* a sintaxe é

```c
int x = <valor>;
float y = <valor>;
```

### 1.5.8 Comandos básicos de entrada e saída

Os dados trocados entre fonte ou destino de dados com um programa deve escrito no código por meio de instruções. São exemplos de fonte e destino de dados: teclado, disco ou outros dispositivos de I/O (entrada/saída). Esses dados configuram-se como **fluxo de texto** e **fluxo binários (bits)**.

Um fluxo de texto é uma **sequência de linhas**, cada uma com **caracteres**. Um fluxo binário é uma sequência de bytes não processados, que registram dados internos. Os programas precisam incluir as instruções ou comandos para possibilitar esses fluxos.  

São categorias de funções pertencentes à **biblioteca padrão <stdio.h>**, entre outras:

- Operações de arquivo;
- Saída formatada;
- Entrada formatada.

Os dois comandos básicos de entrada e saída em C são `printf` e `scanf`. Ambas são funções pertencentes à biblioteca [stdio.h](https://petbcc.ufscar.br/stdio/).

A biblioteca stdio.h (*Standard Input Output Header*) é fundamental na linguagem C e inclui funções para operações básicas de entrada e saída. Possui os seguintes fluxos padrão:

- stdin: Este é o fluxo de entrada padrão. Por padrão, ele está **associado ao teclado**.
- stdout: Este é o fluxo de saída padrão. Por padrão, ele está **associado à tela do console**.
- stderr: Este é o fluxo de erro padrão. Também associado à tela do console, mas geralmente usado para saída de mensagens de erro.

#### a. Função `printf`

A função *printf* é uma **função de saída** formatada que escreve no dispositivo de saída (normalmente a console do computador)
caracteres e dados convertidos como especificado no argumento** e **retorna o número de caracteres gravados** (ou seja, a execução do comando devolve para o programa o número de caracteres gravados).

O comando básico é:

```c
printf("<cadeia de caracteres de controle>",<lista de argumentos>);
```

A cadeia de caracteres de controle deve conter uma especificação de tipo, por exemplo, `%d`, para inteiro e `%f`, para números de ponto flutuante. **[Ver a relação completa de especificadores](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1256.pdf) na página 344 da referência ISO/IEC 9899**. A tabela abaixo apresenta um resumo

| Código | Tipo |
| - | - |
| %d ou %i | inteiro |
| %x ou %X | hexadecimal |
| %c | caractere único (*char*) |
| %s | cadeia de caracteres (*string*) |
| %f | ponto flutuante |

A cadeia de carateres também pode conter entre o símbolo *%* e a especificação do tipo o seguinte

| Símbolo | Significado |
| - | - |
| + | especifica que o número será impresso com sinal |
| número inteiro | especifica o tamanho mínimo do campo |
| . | especifica a separação do tamanho do campo da precisão desejada |
| número inteiro | especifica a precisão (após o ponto) |

A cadeia de caracteres (**delimitada entre aspas duplas**) será escrita na console. A especificação de tipo será substituída pela variável. Poderá conter também outros caracteres, além do especificador de tipo, normalmente usada para produzir uma saída formatada. 

A lista de argumentos contém os nomes da variáveis separados por vírgulas.

Por exemplo,

```c
x = 2;
y = 5;
soma = x + y;
printf("A soma de x e y e %d",soma);
```

Podendo usar para múltiplas variáveis, por exemplo,

```c
x = 2;
y = 5;
soma = x + y;
printf("A soma de %d", x, " + %d", y, " resulta %d",soma);
```

A lista de argumentos também pode conter constantes ou expressões aritméticas.

#### b. Função `scanf`

A função *scanf* lê do dispositivo de entrada o fluxo de dados, com o **controle do formato** e **atribui os valores convertidos ao formato especificado** a um **ponteiro**.  

A sintaxe do comando básico é:

```c
scanf(<cadeia de caracteres de controle>,<lista de ponteiros dos argumentos>);
```

A cadeia de caracteres de controle pode conter:

- Espaços ou tabulações, que são ignorados;
- Especificações de conversão;

Uma especificação de conversão determina a conversão do próximo campo de entrada, de acordo com o mesmo código da função *printf*. A cadeia de caracteres de controle deve conter também a especificação de tipos das variáveis lidas, **na ordem em que são listadas**.

A lista de **ponteiros das variáveis** contém os nomes das variáveis, cada uma precedido pelo operador unário `&`, indicando o endereço ocupado pela variável, separados por vírgula.

O trecho abaixo escreve o resultado de uma operação de adição inteira:

```c
#include <stdio.h>

void main(){
  int x, y;
  scanf("%i %i",&x,&y);
  printf("A soma de x + y eh %i", x+y);
}
```

Estudaremos mais sobre comandos de entrada e saída nas próximas seções.

## 1.6  Exemplos

1. Elaborar um programa na linguagem C que produza a mensagem `Meu primeiro programa em C`. Incluir **comentários**.  

[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio1.c)

2. Elaborar um programa na linguagem C que produza uma mensagem `Agora vou iniciar...`. Escrever **na linha seguinte** `produzindo um novo codigo`. Incluir os comentários.

[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio2.c)

3. Elaborar um programa na linguagem C que produza o resultado das expressões abaixo  

- $3 + 4 \times 5 - 2 \times (4+6)$
- $6 + 4 \times 8 \times (3 + 7 + 27)$
- $\frac{3 + 4 \times 5} {[2 \times (4 + 6) ]}$
- $\frac{3} {[6 \times (1.25 + 6.78)]}$

[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio3.c)

4. Elaborar um programa na linguagem C, usando a biblioteca [math.h](https://petbcc.ufscar.br/math/), para escrever o resultado das expressões abaixo

- $3^{4 \times 5 \times [2 \times (4 + 6) ]}$
- $\sqrt{2 \times (5 + 3) ^ {34}}$ 

[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio4.c)

5. Elaborar um programa na linguagem C para atribuir as notas 8,5 (oito vírgula cinco), 7,3 (sete vírgula três) e 5 (cinco) respectivamente para ap1, ap2 e ac de um aluno. Calcular e escrever a média.

[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio5.c)

6. Elaborar um programa na linguagem C para converter um determinado número de dias em anos.

[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio6.c)

7. Elaborar um programa na linguagem C para calcular a área de um círculo de raio r=2,1 metros.  

[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio7.c)

8. Elaborar um programa na linguagem C para ler dois números inteiros e escrever a soma dos números lidos.  

[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio8.c)

9. Elaborar um programa na linguagem C para ler um **número inteiro**, calcular e escrever o quadrado do número lido.

[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio9.c)

10. Elaborar um programa na linguagem C para calcular o produto de dois números inteiros, digitados pelo usuário.  

[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio10.c)

11. Elaborar um programa na linguagem C para ler as notas de ap1, ap2 e ac de um aluno. Calcular e escrever a média.
 
[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio11.c)

12. Elaborar um programa na linguagem C para ler o consumo de combustível de um veículo. Ler também a capacidade do tanque de combustível. Escrever quantos quilômetros o veículo irá rodar com um tanque cheio.
 
[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio12.c)

13. Elaborar um programa na linguagem C para ler o perímetro de uma pista. Ler também a distância percorrida pelo veículo em um determinado tempo. O programa deverá escrever quantas voltas completas o veículo realizou e qual distância percorreu após completar a última volta.

[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio13.c)

___ 
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

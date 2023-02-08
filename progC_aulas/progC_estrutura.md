## 1.6 Estrutura de programa em C

Os programas em C podem ser decompostos da seguinte forma:

- Os programas são organizados em **projetos**.
- Cada projeto possui pastas, algumas das quais contendo os **códigos nativos do padrão C utilizado do compilador**, chamados de **bibliotecas**
- Contém também as bibliotecas com os códigos **criados pelo próprio programador do projeto**.
- Contém o **código principal** desenvolvido pelo programador, cuja estrutura é a seguinte:  

___
1. Instruções de **pré-processamento**;
2. Prototipação das funções: pode se declarar uma função antes de defini-la; através do protótipo da função, ou seja,
a **especificação do nome e dos parâmetros da função**;  
3. Declaração das variáveis de escopo global - possuem visibilidade em todo o progama;
4. Função ***main()***, código principal;
5. Definição das funções.

___

As instruções dos progrfamas em C são sempre separadas pelo caractere especial `;`, delimitando o fim de uma instrução e o início da instrução seguinte.  
Por exemplo,  
```
x = 3 * 4 + y;
x++;
print("O resultado eh %i",x);
```

Diferentemente do interpretador, o compilador converte todo o programa, **chamado de programa-fonte**, escrito na linguagem de alto nível C, em um código em **linguagem de máquina**, para depois executá-lo.  
Além do compilador, outros processos são realizados para a geração do **código executável**:  
- ***Link* edição**: realizado pelo ***linker***, é o processo de combinar o resultado compilado (em linguagem de máquina) das funções e outros objetos, tanto aqueles da biblioteca padrão quanto aqueles criadas pelo próprio programador, com o código principal - que contém a função *main()* - compilado. 
- **Pré-processamento**: realizado pelo **pré-processador**, é o processo que consiste em (i) remover os comentários do programa; e (ii) interpretar as **diretivas** especiais. 

Em consequência, a sintaxe do código principal em C é:  
```
#include <*header file*> /*Se o código precisar de funções de bibliotecas */
#define <caractere de entrada> <caractere de saída> /*Se o código precisar de macros */
<protótipo de funções>
<declaração de variáveis globais>
void main() {
  <corpo de instruções>
}
<definição de funções>
```
Algumas observações sobtre a sintaxe:
- Os comentários em C são deleimitados `/*` e `*/`. Se desejar inserir um comentário em uma linha inteira, pode-se usar `//`antes do comentário.
- Todo o código da função principal *main()* deve ser delimitado por `{` e `}`.  
- Posteriormente definiremos a sintaxe para prototipação e definição de funções, assim como para declaração de variáveis.

## 1.7 Diretivas da linguagem C
As diretivas são incluídas no corpo das instruções de pré-processamento e iniciam pelo caractere especial `#`, por exemplo `#include <stdio.h>`.  
As duas diretivas mais utilizadas são:  
`#include`: incluir o conteúdo de um arquivo, chamado de cabeçalho (*header file*) e que possui extensão *.h*, durante a compilação;   
`#define`: substituir um **código** por uma sequência arbitrária de caracteres.

### 1.7.1 Inclusão de arquivos
A inclusão de arquivos admite duas formas sintáticas:  
```
#include "arquivo"
```
Se o arquivo estiver entre aspas, a busca pelo arquivo será realizada na mesma pasta em que se encontra o código principal.  
Se não estiver na mesma pasta, a regra para encontrar o arquivo deve ser especificada.
```
#include <arquivo>
```
Para acessar normalmente os arquivos da biblioteca padrão.  
Um arquivo cabeçalho também pode conter diretivas *include*.  
As diretivas *include* são muito úteis especialmente para desenvolver códigos muito grandes, utilizando-se o recursos de modularização de código.

### 1.7.2 Substituição de Macro
Uma macro (abreviação para macroinstrução) é uma regra ou padrão que especifica como uma certa sequência de entrada (frequentemente uma sequência de caracteres) mapeada para uma substituição de sequência de saída de acordo com um procedimento definido.  
Ou seja, utilizando-se uma macro é possível substituir no código uma sequência de caracteres longa e complexa, que se repete muitas vezes,
por uma sequência simples.  
Para substituir macro em C utiliza-se a diretiva `#define`.  
Por exemplo, a sequência mais simples de substituição de macro pode ser  
```
#define NUM 100
```
, que substituirá no corpo do código todas as referências a *NUM* pelo número 100.

## 1.8 As expressões aritméticas do programa C

As expressões aritméticas contemplam **operadores** e **operandos** de vários **tipos**.  
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

Os operadores possuem prioridade para serem resolvidos, logo é importante organizá-los na expressão da forma adequada.  
Admite-se o uso do `(` e `)` para delimitar operações que devem ser priorizadas.  

Os operandos são os dados sobre os quais serão realizadas as operações. Os dados numéricos pode ser dos seguintes **tipos**:

| Tipo | Descrição |
| - | - |
| `int` | números inteiros, podendo variar para `long` ou `short` em função da capacidade de representação desejada |
| `float` | números de **ponto flutuante**, que representam números fracionários computacionalmente, podendo variar para `double` - a parte fracionária é separada da inteira pelo ponto de fração (`.`) |

## 1.9 Variáveis em C
Variáveis são representações simbólicas de dados que pertencem a um determinado conjunto.  
Como são representações simbólicas possuem uma identificação ou nome, que deve obedecer as regras:  
- Nomes de variáveis são formados por letras e dígitos;
- O primeiro caractere deve ser uma letra - o caractere *_* é considerado uma letra;
- Letras maiúsculas e minúsculas são caracteres distintos;
- Possuem tamanho limitado - no caso do Ansi-C, no máximo 31 caracteres.  

O uso das variáveis requer a **declaração do tipo**, cuja sintaxe em C é:
```
<tipo> <nome da variável ou lista de nomes de variáveis>
```
, onde a lista de nomes de variáveis é um conjunto de nomes separados por vírgula.
Por exemplo,
```
int i, cont
float res
```
Quando uma variável é declarada o compilador C reserva **um endereço de memória** disponível no computador, com o tamanho necessário para armazenar o dado numérico, e associa a ele um **endereço de memória**.  
Em C, é muito importante entender essa dinâmica.

## 1.8 Sentença de atribuição
A sentença de atribuição se caracteriza pela atribuição de um valor a uma variável.  
A sintaxe para o comando de atribuição é  
```
<nome da variável> = <expressão aritmética ou variável ou número>
```
Por exemplo,
```
i = 12;
cont = 3;
res = (12 + 3) * 1.35;
```
Observe que **as sentenças são separadas pelo `;`**

## 1.9 Exercícios de aula 
1. Criar códigos na linguagem C que contenham expressões aritméticas para determinar o resultado dos seguintes problemas, utilizando os dados apresentados:  
- Quantos minutos dois dias e 18 horas contemplam?  
- Qual é a área de um terreno retangular com lados de 50 metros e 15 metros? 
- Quantas voltas um corredor completou em uma pista com perímetro de 400 metros se ele conseguiu correr 2.300 metros? 
- Um veículo consome em média 2 litros de gasolina para percorrer 19,5 quilômetros. Quantos quilômetros o veículo deverá percorrer se o tanque de combustível possuir capacidade de armazenar 50 litros?  
- A fórmula para determinação da nota final é definida por uma média ponderada em que a nota de cada avaliação parcial possui peso de 40% e a avaliação continuada, peso de 20%. A média para aprovação é 7,0. Se o aluno obtiver nota 6,5 na AP1; nota 8,3 na AP2; e nota 6,9 na AC; ele será aprovado?  
2. Criar *scripts* da linguagem C, utilizando variáveis e atribuindo a elas os dados especificados nas questões acima, assim como o resultado de cada uma das expressões. Lembre-se de utilizar **nomes de variáveis** que facilitem a legibilidade do *script*. 

___
**[<<anterior](progC_replit.md)**  
**[home](/progC_aulas.md)**

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

As instruções dos programas em C são sempre separadas pelo caractere especial `;`, delimitando o fim de uma instrução e o início da instrução seguinte.  

Por exemplo,  

```
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
- Os comentários em C são delimitados `/*` e `*/`. 
- Se desejar inserir um comentário em uma linha inteira, pode-se usar `//`antes do comentário.
- Todo o código da função principal *main()* deve ser delimitado por `{` e `}`.  
- Posteriormente definiremos a sintaxe para prototipação e definição de funções, assim como para declaração de variáveis.

## 1.7 Diretivas da linguagem C
As diretivas são incluídas no corpo das instruções de pré-processamento e iniciam pelo caractere especial `#`, por exemplo `#include <stdio.h>`.  

As duas diretivas mais utilizadas são:  
`#include`: incluir o conteúdo de um arquivo, chamado de cabeçalho (*header file*) e que possui extensão *.h*, durante a compilação;   
`#define`: substituir um **código** por uma sequência arbitrária de caracteres.

### 1.7.1 Inclusão de arquivos
As diretivas *include* são muito úteis especialmente para desenvolver códigos muito grandes, utilizando-se o recursos de modularização de código.
A inclusão de arquivos admite duas formas sintáticas:  

a. Primeira forma

```
#include "arquivo"
```
Se o arquivo estiver entre aspas, a busca pelo arquivo será realizada na mesma pasta em que se encontra o código principal.  

b. Segunda forma

Se não estiver na mesma pasta, a regra para encontrar o arquivo deve ser especificada.
```
#include <arquivo>
```
Para acessar normalmente os arquivos da biblioteca padrão.  

Observação: Um arquivo cabeçalho também pode conter diretivas *include*.  

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

As expressões aritméticas contemplam **operadores** e **operandos** (**variáveis** e **constantes**) de vários **tipos**. 

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

Os operadores possuem **prioridade** para serem resolvidos, logo é importante organizá-los na expressão da forma adequada.  
**Admite-se o uso do `(` e `)` para delimitar operações que devem ser priorizadas**.  

Os operandos são os dados sobre os quais serão realizadas as operações. Os dados numéricos pode ser dos seguintes **tipos**:

| Tipo | Descrição |
| - | - |
| `int` | números inteiros, podendo variar para `long` ou `short` em função da capacidade de representação desejada |
| `float` | números de **ponto flutuante**, que representam números fracionários computacionalmente, podendo variar para `double` - a parte fracionária é separada da inteira pelo ponto de fração (`.`) |

## 1.9 Variáveis em C
Variáveis são **representações simbólicas** de dados que pertencem a um determinado conjunto.  

Como são representações simbólicas possuem um **identificador** ou **nome**, que deve obedecer as regras:  
- Nomes de variáveis são formados por letras e dígitos;
- O primeiro caractere deve ser uma letra - o caractere *_* é considerado uma letra;
- Letras maiúsculas e minúsculas são caracteres distintos;
- Possuem tamanho limitado - no caso do Ansi-C, no máximo 31 caracteres.  

O uso das variáveis requer a **declaração do tipo**, cuja sintaxe em C é:

```
<tipo> <nome da variável ou lista de nomes de variáveis>;
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
<nome da variável> = <expressão aritmética ou variável ou número>;
```

Por exemplo,

```
i = 12;
cont = 3;
res = (12 + 3) * 1.35;
```

Observe que **as sentenças são separadas pelo `;`**

## 1.9 Entrada e Saída
Os dois comandos básicos de entrada e saída em C são os seguintes:
```
printf(<cadeia de caracteres de controle>,<lista de argumentos>);
```
A cadeia de caracteres de controle e deve conter uma especificação de tipo, por exemplo, `%d`, para inteiro e `%f`, para números de ponto flutuante.  
A cadeia será escrita na console. A especificação de tipo será substituída pela variável.

```
scanf(<cadeia de caracteres de controle>,<lista de ponteiros dos argumentos>);
```
A cadeia de caracteres de controle deve conter a especificação de tipos das variáveis lidas, em ordem.  
A lista de pinteiros contém os nomes das variáveis, cada uma precedido pelo operador unário `&`, indicando o endereço, seprados por vírgula. 
[Ver mais sobre entrada e saída em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas/progC_entradasaida.md)

## 1.10 Exemplos de aula
#### 1.10.1 Criando os primeiros programas e escrevendo saídas
**a.** Escrever a mensagem `Meu primeiro programa em C`. Incluir **comentários**.  
Veja **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC1101a.c)**  

Agora produza seu primeiro código...  
**b.** Escrever uma mensagem `Agora vou iniciar...`. Escrever **na linha seguinte** `produzindo um novo codigo`. Incluir os comentários.  
Veja **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC1101b.c)**

**c.** Escrever o resultado das expressões abaixo  
  - $3 + 4 \times 5 - [2 \times (4 + 6) ]$: **veja o [exemplo](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC1101c.c)**    
  - $6 + 4 \times 8 \times (3 + 7 + 27)$  
  - $\frac{3 + 4 \times 5} {[2 \times (4 + 6) ]}$: **veja o [exemplo](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC1101c_1.c)**   
  - $\frac{3} {[6 \times (1.25 + 6.78)]}$  
 
 **d.** Usando a biblioteca `math.h`, escrever o resultado das expressões abaixo    
  - $3^{4 \times 5 \times [2 \times (4 + 6) ]}$: **veja o [exemplo](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC1101d.c)**    
  - $\sqrt{2 \times (5 + 3) ^ {34}}$  -   

#### 1.10.2 Declarando e usando variáveis
**a.** Escrever um programa para atribuir as notas 8,5 (oito vírgula cinco), 7,3 (sete vírgula três) e 5 (cinco) respectivamente para ap1, ap2 e ac de um aluno.
Calcular e escrever a média.   
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC1102a.c)**

**b.** Converter um determinado número de dias em anos.

**c.** Calcular a área de um círculo de raio r=2,1 metros.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC1102c.c)**

#### 1.10.3 Lendo dados na console
**a.** Escrever um programa em C para ler dois números inteiros e escrever a soma dos números lidos.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC1103a.c)**

**b.** Escrever um programa em C para ler um **número inteiro**, calcular e escrever o quadrado do número lido.

Outros exemplos...  
**c.** Escrever um programa em C para calcular o produto de dois numeros inteiros, digitados pelo usuário.  
**d.** Escrever um programa para ler as notas de ap1, ap2 e ac de um aluno.
Calcular e escrever a média.   
**e.** Escrever um programa em C para ler o consumo de combustível de um veículo. Ler também a capacidade do tanque de combustível. Escrever quantos quilômetros o veículo irá rodar com um tanque cheio.    
**f.** Escrever um programa em C para ler o perímetro de uma pista. Ler também a distância percorrida pelo veículo em um determinado tempo. 
O programa deverá escrever quantas voltas completas o veículo realizou e qual distância percorreu após completar a última volta.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC1103f.c)**


___
**[<<anterior](progC_replit.md)**  
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

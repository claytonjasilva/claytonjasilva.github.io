## 1.6 Estrutura de programa em C

Os programas em C podem ser decompostos da seguinte forma:

- Os programas são organizados em **projetos**.
- Cada projeto possui pastas, algumas das quais contendo os **códigos nativos do padrão utilizado do compilador**, chamados de **bibliotecas**
- Contém também as bibliotecas com os códigos **criados pelo próprio programador do projeto**.
- Contém o código principal desenvolvido pelo programador, cuja estrutura é a seguinte:
1. Instruções de **pré-processamento**;
2. Prototipação das funções: pode se declarar uma função antes de defini-la; através do protótipo da função, ou seja,
a **especificação do nome e dos parâmetros da função**;  
3. Declaração das variáveis de escopo global - possuem visibilidade em todo o progama;
4. Função ***main()***, código principal;
5. Definição das funções.

Diferentemente do interpretador, o compilador converte todo o programa para depois executá-lo em linguagem de máquina.  
Além do compilador, outros processos são realizados para a geração do **código executável**:  
- *Link* edição: realizado pelo ***linker***, é o processo de combinar o resultado compilado (em linguagem de máquina) das funções e outros objetos, tanto aqueles da biblioteca padrão quanto aqueles criadas pelo próprio programador, com o código principal - que contém a função *main()* - compilado. 
- Pré-processamento: realizado pelo **pré-processador**, é o processo que consiste em (i) remover os comentários do programa; e (ii) interpretar as **diretivas** especiais.  

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

## 1.8 As expressões do programa Python

As expressões que geram objetos contemplam:

1. [Funções da biblioteca-padrão](https://docs.python.org/pt-br/3/library/functions.html).  
Funções são elementos da expressão que realizam um trabalho, entregando um resultado após serem executadas.  
Por exemplo, *print(argumento)* apresenta na área de console o valor do argumento.
3. Objetos de vários **tipos**:  
  a. **Números**  
  b. Strings  
  c. Listas  
  d. Tuplas  
  e. Dicionários  
  f. Arquivos  
3. Expressões e operações aritméticas: utilizam operadores `+`, `-`, `*` e `/`. Divisão (`/`) sempre retorna número na representação em **ponto flutuante (float)**. Para fazer uma divisão com resultado inteiro (descartando a parte fracionária) pode-se usar o operador divisão inteira (`//`); para calcular o resto da divisão inteira pode-se usar o operador **módulo** (`%`).
4. Objetos de referência - **variáveis** -, que armazenam os valores dos objetos e são referenciadas por um **identificador** (nome).
5. Constantes, que possuem valores pré-estabelecidos, chamados pela sua identificação.  
Por exemplo, a constante matemática *pi*.
6. Sentença de **atribuição**: o valor armazenado em uma variável ou resultante de uma expressão aritmética é passado a uma variável.
  
## 1.8 Modos de utilização do interpretador
### 1.8.1 Modo interativo
Quando os comandos são lidos a partir do **console**, diz-se que o interpretador está em **modo interativo**.  
No modo interativo o interpretador solicita um próximo comando através do *prompt* primário.  
Usando o interpretador Python como calculadora no modo interativo...

### 1.8.2 Modo de *script*
O outro modo de utilização do interpretador é através da **criação de *scripts***.  
Um *script* é um conjunto de instruções escritas de forma ordenada, organizadas em um arquivo com extensão ***.py***, 
que serão convertidas individualmente para a máquina virtual.  
O arquivo constitui um **programa** que será executado pela IDE pra execução de uma **tarefa**.  
Um exemplo de *script* é apresentado abaixo:
```
x = 5
y = 6
z = x**2 + y**2 + 2 * (x + y)
print(z)
```
Vamos criá-lo utilizando o Replit:
1. Criar um *New Repl* - **definir um nome e selecionar o *Template* Python**. O nome escolhido é o que define o projeto Python.
2. O projeto contemplará um arquivo *main.py* que se constitui o **módulo principal** do projeto criado - **não alterar o nome *main.py***
3. Escrever as instruções e executar o *script*

## 1.9 Exercícios de aula 
1. **Utilizando o interpretador Python como calculadora**, criar *scripts* da linguagem Python que contenham expressões aritméticas para determinar o resultado dos seguintes problemas, utilizando os dados apresentados:  
- Quantos minutos dois dias e 18 horas contemplam? [*Script* 1.1](https://github.com/claytonjasilva/prog_exemplos/blob/main/minutos.py)  
- Qual é a área de um terreno retangular com lados de 50 metros e 15 metros? [*Script* 1.2](https://github.com/claytonjasilva/prog_exemplos/blob/main/area.py)   
- Quantas voltas um corredor completou em uma pista com perímetro de 400 metros se ele conseguiu correr 2.300 metros? [*Script* 1.3](https://github.com/claytonjasilva/prog_exemplos/blob/main/volta.py)  
- Um veículo consome em média 2 litros de gasolina para percorrer 19,5 quilômetros. Quantos quilômetros o veículo deverá percorrer se o tanque de combustível possuir capacidade de armazenar 50 litros? [*Script* 1.5](https://github.com/claytonjasilva/prog_exemplos/blob/main/veiculo.py)  
- A fórmula para determinação da nota final é definida por uma média ponderada em que a nota de cada avaliação parcial possui peso de 40% e a avaliação continuada, peso de 20%. A média para aprovação é 7,0. Se o aluno obtiver nota 6,5 na AP1; nota 8,3 na AP2; e nota 6,9 na AC; ele será aprovado? [*Script* 1.6](https://github.com/claytonjasilva/prog_exemplos/blob/main/nota.py)  
**Não esqueça de salvar os *scrips* criados usando um nome de arquivo adequado**
2. Criar *scripts* da linguagem Python, utilizando variáveis e atribuindo a elas os dados especificados nas questões acima, assim como o resultado de cada uma das expressões. Lembre-se de utilizar **nomes de variáveis** que facilitem a legibilidade do *script*. [*Script* 1.7](https://github.com/claytonjasilva/prog_exemplos/blob/main/nota2.py)

___
**[<<anterior](prog_replit.md)**  
**[home](https://claytonjasilva.github.io/progPython_aulas.html)**

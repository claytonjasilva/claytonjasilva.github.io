# 2. Funções de entrada e saída 

## 2.1 Introdução às funções
Uma função é um bloco de código que pode ser utilizado várias vezes no programa para realizar uma tarefa específica, portanto  
- escrevê-lo somente uma vez, 
- definindo-lhe um **nome** e os **parâmetros** necessários para realizar a tarefa  
- **chamá-lo** no ponto adequado do código é producente.  
No trecho de código que se desejar resolver a tarefa insere-se o nome da função, inserindo-se entre parêntesis os argumentos, de acordo com o tipo exigido pelos parâmetros da função.  
Algumas funções respondem **retornando um valor de um determimnado tipo** após a tarefa ser realizada.   
As funções podem ser definidas pelo programador, no entanto **outras disponíveis nas bibliotecas da linguagem podem ser usadas**.  
Para que possam ser usadas a diretiva de inclusão `include <nome da biblioteca>` deve ser incluída no programa.

## 2.2 Entrada e Saída: <stdio.h>
Os dados trocados entre fonte ou destino de dados com um programa deve escrito no código por meio de instruções.  
São exemplos de fonte e destino de dados: teclado, disco ou outros dispositivos de I/O (entrada/saída).  
Esses dados configuram-se como fluxo de texto e fluxo binários (bits).  
Um fluxo de texto é uma sequência de linhas, cada uma com caracteres.  
Um fluxo binário é uma sequência de bytes não processados, que registram dados internos.   
Os programas precisam incluir as instruções ou comandos para possiblitar esses fluxos.  
São categorias de funções, pertencentes à biblioteca <stdio.h>, entre outras:
- Operações de arquivo;
- Saída formatada;
- Entrada foramtada.

### 2.2.1 Função `printf`
A função *printf* 

O usuário do *script* executado precisa, na maioria dos casos, apresentar os dados para o interpretador realizar as tarefas e receber as informações do interpretador durante a realização das tarefas.  
Para o usuário **apresentar** os dados ao interpretador, o *script* deve conter **comando de entrada**.  
Para o usuário **receber** os dados do interpretador, o *script* deve conter **comando de saída**.  
Em Python,  
- **Função de saída**  
`print(argumento)`  
, que apresenta o conteúdo ou o resultado do argumento ao usuário na console.  
O argumento pode conter **listas de expressão, número ou variável - separadas por vírgula**.  
- **Função de entrada**  
`x=input("o valor de x e: ")`  
, que permite ao usuário inserir o dado na console.  
No exemplo, *x* é o nome da variável; o texto "o valor ..." é chamado de ***string*** (uma *string* é uma **cadeia de caracteres**) e aparecerá no console.  
Em Python, *strings* podem ser delimitadas por aspas simples `'texto'` ou aspas duplas `"texto"`  
O programador pode definir no *script* o nome da variável e a *string* - recomenda-se utilizar nomes de variáveis que sugiram o seu papel.  
O dado digitado pelo usuário **será atribuído para a variável como tipo *string***.  
É possível converter um tipo *string* para tipo inteiro usando o comando `int(string)` ou para tipo ponto flutuante usando `float(string)`, 
logo o comando de entrada pode ser dado `x = int(input('Digite o número: ')` para o valor atribuído à variável *x* ser do tipo inteiro.

## 2.4 Exercícios com tipos, operadores, entrada/saída  
1. Elaborar um programa na linguagem Python para ler as notas da ap1, ap2 e ac; calcular e escrever a média do semestre do aluno, de acordo com as regras do Ibmec.  [*Script 2.1*](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcNota.py)
2. Elaborar um programa na linguagem Python para ler os coeficientes de uma equação do segundo grau, 2[*Script 2.2*](equacaoGrau2.gif)   
Obs. Para calcular a raiz quadrada pode-se incluir o comando `import math` e usar o método `math.sqrt(numero)`  [*Script 2.3*](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcRaiz.py)  
3. Elaborar um programa na linguagem Python para calcular e escrever a área interna e o perímetro de um círculo de raio r e seu perímetro. [*Script 2.4*](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcAreaCirc.py)
5. Elaborar um programa na linguagem Python para calcular e escrever o índice de massa (imc) corporal de uma pessoa. O imc é calculado dividindo-se o peso pelo quadrado da altura. [*Script 2.5*](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcIMC.py)
6. Elaborar um programa na linguagem Python para ler as dimensões dos lados de uma pista de corrida de formato retangular, ler a distância percorrida por um veículo, calcular e escrever o número completo de voltas dadas. [*Script 2.6*](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcVoltas.py)

___
**[home](/progC_aulas.md)**

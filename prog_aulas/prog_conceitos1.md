# 2. Conceitos básicos de programação estruturada: tipos, operadores, entrada/saída  
## 2.1 Tipos numéricos
### 2.1.1 Considerações gerais sobre tipos numéricos
- Os tipos numéricos, como tratamos, podem ser inteiros, de ponto flutuante ou complexos.  
- Os inteiros são escritos simplesmente com os dígitos do **sistema de numeração** desejado:  
  No sistema octal, base formada pelos dígitos do conjunto {0, 1, ...,7}, precede-se o número por `0o`;  
  No sistema hexadecimenal, base formada pelos dígitos do conjunto {0, 1, ..., 9, ..., A, ..., F}, precede-se o número por `0x`;  
  A omisssão do prefixo indica que a base considerada é a decimal.  
- Os números de ponto flutuante são grafados com **ponto de fração** para separar a parte inteira da parte fracionária.  
- Os números complexos são grafados utilizando a forma `<parte inteira>+<parte fracionária>j`.  
[Mais sobre tipos numéricos](https://docs.python.org/pt-br/3/library/stdtypes.html#numeric-types-int-float-complex)

### 2.1.2 A ferramenta numérica *math*
- O Python fornece funções e módulos internos para processamento numérico, como o módulo `math`.  
- O módulo deve ser importado para que suas funções e constantes possam ser usados. Por exemplo,

```
  import math
  x = math.pi
  print(x)
``` 

A descrição completa das **constante e funções de *math* podem ser obtidas no tutorial: [*math* Funções matemáticas](https://docs.python.org/pt-br/3/library/math.html#:~:text=Este%20m%C3%B3dulo%20fornece%20acesso%20%C3%A0s,de%20suporte%20para%20n%C3%BAmeros%20complexos.)**
## 2.2 Mais sobre variáveis
Como vimos, as variáveis são criadas **na primeira vez** que recebem um valor, utilizando-se um comando de **atribuição**, por exemplo, `x=3`.  
### Algumas considerações adicionais:  
- O Python cria o objeto para receber o valor 3, cria a variável *x*, caso não exista, e **vincula** a variável ao objeto.
- As variáveis e os objetos são **armazenados em partes diferentes da memória** e **associados por vínculos**.
- As variáveis **sempre se vinculam a objetos** e não a outras variáveis.
- Os vínculos da variável para o objeto são seguidos automaticamente pelo Python  
  (i) As variáveis são simplesmente entradas em uma tabela de pesquisa, com espaço para vínculo ao objeto;  
  (ii) Os objetos são apenas partes da memória alocada, com espaço suficiente para armazenar o valor que denotam e informações de *tag* de tipo.  
- Quando se cria uma nova variável e atribui-se a ela o valor armazenado na variável anterior, 
por exemplo, `y = x`, o que ocorre na realidade é que a nova variável *y* **faz uma referência ao mesmo objeto**
- Vários nomes referenciando o mesmo objeto é designado como **referência compartilhada**.
- Uma observação importante, especialmente àqueles que possuem experiência com linguagem cuja tipagem não é dinâmica é que: **os tipos pertencem aos objetos, não pertencem às variáveis**. Por exemplo,  
  ```
  x = 2
  print(x)
  x = 'a'
  print(x)
  ```
  não produz erro, pois na instrução `x = 2` a variável faz referência ao objeto *2* do tipo inteiro e na instrução `x = 'a'` para a fazer referência a um novo objeto, *'a'*, do tipo caractere.
- As referências para os objetos são descartadas sempre que a variável recebe um novo objeto.
- **As referências são semelhantes a ponteiros na linguagem C. As variáveis e Python são sempre ponteiros para objetos e não rótulos de áreas de memória alteráveis.**

## 2.3 Interação do usuário com o interpretador: funções de entrada e saída
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
**[Home Programação Estruturada com Python](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progPython_aulas.md)**  


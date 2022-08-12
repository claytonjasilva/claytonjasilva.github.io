## Conceitos de programação procedural: tipos, operadores, entrada/saída  
### [Tipos numéricos](https://docs.python.org/pt-br/3/library/stdtypes.html#numeric-types-int-float-complex)

### Mais sobre variáveis  
- As variáveis **são criadas na primeira vez** que recebem um valor  
- As variáveis são substituídas por seus valores, quando usadas em expressões
- As variáveis devem receber **atribuições** *(p ex, x=3)* antes que possam ser usadas em **expressões**
- As variáveis se referem a objetos e nunca são declaradas antecipadamente

### Lendo e escrevendo dados: funções de entrada e saída
- **Função de saída**: Vimos a função de saída  
`print(argumento)`  
que apresenta o conteúdo ou o resultado do argumento ao usuário. Vimos que o argumento pode conter listas de expressão, número ou variável - separadas por vírgula.  
- O Python possui também uma **função de entrada**, que permite ao usuário inserir um dado e atribui-lo a uma variável, como o exemplo:  
`x=input("o valor de x e: ")`  
, onde x é o nome da variável; o texto "o valor ..." é o que aparecerá no console. **Obs.** O programador pode definir o nome da variável e o **texto** desejado. 
- O dado digitado pelo usuário será atribuído para a variável como tipo ***string*** (cadeia de caracteres).
- Um texto é chamado de ***string*** (cadeia de caracteres). Em Python, *strings* podem ser delimitadas por aspas simples `'texto'` ou aspas duplas `"texto"` 
- É possível converter um tipo *string* para tipo inteiro usando o comando `int(string)` ou para tipo ponto flutuante usando `float(string)`

# Exercícios com tipos, operadores, entrada/saída  
1. Elaborar um programa na linguagem Python para ler as notas da ap1, ap2 e ac; calcular e escrever a média do semestre do aluno, de acordo com as regras do Ibmec.  [calcNota.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcNota.py)
2. Elaborar um programa na linguagem Python para ler os coeficientes de uma equação do segundo graau, cuja expressão e raízes são dadas por  
![equação2grau](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/prog_aulas/equacaoGrau2.gif)  
[calcRaiz.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcRaiz.py)  
Obs. Para calcular a raiz quadrada pode-se incluir o comando `import math` e usar o método `math.sqrt(numero)`  
3. Elaborar um programa na linguagem Python para calcular e escrever a área interna e o perímetro de um círculo de raio r e seu perímetro. [calcAreaCirc.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcAreaCirc.py)
5. Elaborar um programa na linguagem Python para calcular e escrever o índice de massa (imc) corporal de uma pessoa. O imc é calculado dividindo-se o peso pelo quadrado da altura. [calcIMC.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcIMC.py)
6. Elaborar um programa na linguagem Python para ler as dimensões dos lados de uma pista de corrida de formato retangular, ler a distância percorrida por um veículo, calcular e escrever o número completo de voltas dadas. [calcVoltas.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcVoltas.py)


# 7. Funções em Python

## 7.1 Conceitos gerais sobre funções  
No contexto de uma programação, uma **função** é uma sequência nomeada de instruções que proporciona um resultado. 
[Definição de funções](https://docs.python.org/pt-br/3/reference/compound_stmts.html#function-definitions)  
É um bloco de código de programa que pode ser chamaado várias vezes, produzindo alguns benefícios, como.
- Reutilizar código: as funções permitem agrupar e generalizar um código para se usado arbitrariamente muitas vezes posteriormente  
- Decomposição procedural: permitem dividir o sistema desenvolvido em partes, com tarefas bem definidas  

## 7.2 Chamada de funções
Seja o exemplo `round(x,1)` escrito no trecho de um código, por exemplo, do módulo principal,  
- A função para ser executada em um determinado trecho de código precisa ser **chamada**, na forma `round(x,1)`  
- Para ser chamada, requer que possua um **nome** ou **identificador** - no exemplo, o nome da função é `round`  
- Requer também uma lista de dados (variáveis ou constantes) entre parênteses, chamada de **argumento** da função - diz-se que a função **recebe** argumentos 
- Em Python, uma cópia dos valores dos argumentos é passada aos parâmetros da função
- Quando uma função é executada, ela pode devolver um valor (**retornar** valor) derivado da execução da tarefa, o qual pode ser atribuído a uma variável ou utilizado no contexto de uma expressão, por exemplo, `y = round(x,1)`  
- Para que a atribuição ocorra, o corpo da função deve contemplar o uso da palavra reservada `return <valor ou expressão>` 

### 7.1.3 Como definir uma nova função...
Para criar uma nova função é necessário escrever instruções atendendo a sintaxe do Python, da seguinte forma  
```
def nome_da_função(lista_de_parâmetros):
  corpo de instruções
  return <valor ou expressão>
 ```  
Algumas considerações:  
- A lista de parâmetros contém os nome de todas as variáveis que receberão os dados para a função executar suas instruções separados por vírgulas.
- A definição de uma função cria um **objeto de função**, que tem o tipo *function*.  
- Uma vez definida a função, ela poderá ser usada dentro de outra função.   

#### Retornando valores ...
Algumas funções devolvem resultado. Por exemplo, a função `round(12.345,1)` devolve o resultado 12.3. Se a instrução utilizada for `x = round(12.345,1)`, o resultado será atribuído à variável *x*.  
Para a função devolver um resultado é necessário utilizar a instrução simples `return valor_a_retornar` no corpo das instruções.  
A instrução simples [*return*](https://docs.python.org/pt-br/3/reference/simple_stmts.html#the-return-statement) pode acompanhar ou não a definição de uma função.   
#### Os parâmetros são ...  
os nomes das variáveis que receberão os **argumentos** quando a função for chamada e devem ser separados por vírgula (se houver mais de um parâmetro).  
Na estrutura chamadora utiliza-se `função(lista_de_argumentos)`. Os valores dos argumentos são copiados para os parâmetros da função. **A alteração do valor dos parâmetros não altera o valor dos argumentos**. Por exemplo,
```
def fun(x)  
  x=1  
 return 0*     
x=2    
fun(x)  
print(x)
```
Escreve o valor **2**

### Escopo das variáveis  
Por padrão, todos os nomes das variáveis atribuídos em uma função são **locais**, isto é, existem apensas enquanto a função é executada. Variáveis globais são lidas e atualizadas por qualquer função ou método do programa. As variáveis locais só podem ser acessadas por código pertencente ao método ou função onde foi declarado a variável. [Ver detalhes](prog_funcoes_escopo.md)

### Outras considerações sobre funções  
- A linguagem Python posssui algumas [funções embutidas](h funçõesttps://docs.python.org/pt-br/3/library/functions.html)

### Exercícios sobre funções
1. Elaborar um programa na linguagem Python que permita gerenciar a aprovação ou não de um grupo de 30 alunos, com base nas notas e na frequência. O programa deve possuir uma função para determinar a média do aluno, dada por mf=0,4.ap1+0,4.ap2+0,2.ac. Deve possuir também uma função que permita, caso o aluno seja reprovado, substituir a menor nota das ap pela nota da as (se a nota da as for superior a menor ap) e determinar a nova média final. Deve possuir também uma função para determinar a porcentagem de faltas de cada aluno. O programa deverá ler o número de aulas dadas; ler as notas de ap, ap2 e ac; ler a nota de as (se for necessário); e ler o número de faltas de cada aluno. Deverá escrever a média final de cada aluno, a porcentagem de faltas e a condição ('aprovado' ou 'reprovado'). O aluno estará aprovado se a média final for superior ou igual a 7.0 e tiver uma frequência superior a 75%. Deverá fazer a as se obtiver uma nota mf inferior a 7.0.   
[funcoesAprovacao.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/funcoesAprovacao.py)  
2. Elaborar um programa na linguagem Python que possua um conjunto de funções para calcular a área de figuras geométricas. O programa deve permitir que o usuário digite o número de figuras cujos parâmetros serão lidos e cuja área será determinada. Deve ler, para cada figura, o seu tipo, ('t':triângul;'r':retângulo;'c':círculo) e os respectivos parâmetros para cálculo de área, escrevendo a área da figura solicitada. [funcoesGeometria.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/funcoesGeometria.py)  
3. Elaborar um programa na linguagem Python que leia um número inteiro. Se o número for par não negativo, o programa deve executar uma função para calcular o valor da soma dos termos positivos de uma série aritmética de razão 1, cujo maior termo é N dado, ou seja, soma=1+2+3+...+N. Se o número for impar não negativo, o programa deve executar uma função para determinar a soma dos seus divisores. Se o número for negativo, o programa deve calcular a soma dos quadrados do número até 0.  [funcoesSeriesN.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/funcoesSeriesN.py)
4. Elaborar um programa na linguagem Python que leia os dados de uma pessoa: nome, idade, peso, altura. Para a idade lida, o programa deverá recomendar exercícios do tipo A, para pessoas acima de 60 anos; do tipo B, para pessoas entre 40 e 60 anos; do tipo C, para pessoas entre 15 e 40 anos; e do tipo D, para crianças (idade inferior a 15 anos). Com base no peso e na altura, o programa deve calcular o IMC (dado por peso/altura^2), determinando as dietas: 'magra', IMC superior a 25; 'normal', IMC entre 19 e 25; e 'gorda', IMC inferior a 19.  [funcoesIMCexercicios.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/funcoesImcExercicio.py)
5. Elaborar um programa na linguagem Python que permita realizar várias operações diferentes com um par de números digitados pelo usuário, A e B. As operações são as seguintes:  
- soma dos quadrados, designada 'sq', que resulta na soma do quadrado de A com o quadrado de B;  
- soma dos cubos, designada 'sc', que resulta na soma de A elevado à terceira potência com B elevado à terceita potência;
- quadrado da diferença, 'qdif', que resulta no quadrado da diferença de A por B;
- quadrado da soma, 'qsoma', que resulta no quadrado da soma de A e B;
- cubo da diferença, 'cdif', resulta no cubo da diferença de A por B;
- cubo da soma, 'csoma', que resulta no cubo da soma de A e B.  
O programa deve executar sucessivas vezes as operações. Na **primeira** repetição, o usuário deve digitar os valores de A e B, seguidos da operação desejada. Nas **repetições seguintes**, o usuário deve digitar o valor de um novo número, seguido da nova operação desejada. A nova operação será aplicada sobre o novo número e o resultado da repetição anterior. O programa será interrompido quando for digitada a operação 'nop' - nenhuma operação - e deverá escrever o último valor resultante da operação. [funcoesNotacaoPolonesa.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/funcoesNotacaoPolonesa.py)
6. Uma forma de calcular a potência de base *e* de um número é dada por *e^x = 1 + x + x^2/2! + x^3/!3 + ...*, onde *^* representa potência e *!* representa o fatorial do número. Elaborar um programa na linguagem Python para determinar o resultado de *e^x*, em que o usuário ditige na entrada o valor de *x* e o número de interações desejadas (número de termos da série). [funcoesSerieExp.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/funcoesSerieExp.py)


___
**[home](/progC_aulas.md)**

# 5. Funções em Python

## 5.1 Conceitos gerais sobre funções  
No contexto de uma programação, uma **função** é uma sequência nomeada de instruções que proporciona um resultado.   
É um bloco de código de programa que pode ser chamado várias vezes, produzindo alguns benefícios, como  
- **Reutilizar código**: as funções permitem agrupar e generalizar um código para se usado arbitrariamente muitas vezes posteriormente  
- **Decomposição procedural**: permitem dividir o sistema desenvolvido em partes, com tarefas bem definidas  
Além das funções internas (nativas) da linguagem Python, os programadores podem desenvolver suas próprias funções, que: são **chamadas** em sentenças, **recebem valores** e **retornam** resultados.

## 5.2 Como definir uma nova função
**Para criar uma nova função** é necessário escrever instruções atendendo a sintaxe do Python, da seguinte forma  
```
def nome_da_função(lista_de_parâmetros):
  corpo de instruções
  return <valor ou expressão>
 ```  
### 5.2.1 A instrução *def*
- *def* é uma instrução executável - a função não  existe até que o Python a busque e execute;
- Pode-se aninhar instruções *def* dentro de *if*, *loops* etc., em qualquer ponto do código - inclusive dentro de outra função;
- *def* cria um **objeto de função**, que tem o tipo *function*;
- A lista de **parâmetros** compreende os nomes das variáveis que receberão os argumentos quando a função for chamada e **devem ser separados por vírgula (se houver mais de um parâmetro)**;
- Os argumentos pertencentes ao código chamador e a função compartilham objetos pelas referências - a alteração de objetos mutáveis passados pode alterar os objetos compartilhados (posteriormente discutiremos essa questão);
- A instrução `return` **pode aparecer em qualquer lugar no bloco interno** de instruções da função - 
ela finaliza a chamada de função e envia o resultado para o código que fez a chamada;
- **A instrução `return` é opcional** - pode acompanhar ou não a definição de uma função.  Ver mais em [*return*](https://docs.python.org/pt-br/3/reference/simple_stmts.html#the-return-statement) 
- O valor retornado pela execução da função pode ser atribuído a uma variável ou utilizado no contexto de uma expressão, por exemplo, `y = round(x,1)`;
- Por padrão, todos os nomes definidos em uma função possuem **escopo local**, ou seja, são reconhecidos somente dentro da função  
  (i) As variáveis **locais existem apensas enquanto a função é executada**;   
  (ii) **Variáveis globais** são lidas e atualizadas por qualquer função ou método do programa;    
  (iii) As variáveis locais só podem ser acessadas por código pertencente ao método ou função onde foi declarado a variável;  
  **Ver mais em [escopo de funções](prog_funcoes_escopo.md)**

### 5.2.2 Chamada de funções
- Na estrutura chamadora utiliza-se `função(lista_de_argumentos)` - os valores dos argumentos são copiados para os parâmetros da função. Por exemplo, 
  ```
  def fun(x):  
    x=1  
    return 0     
  x=2
  y=fun(x)  
  print(x)
  ```
  escreve o valor **2**.  

Algumas considerações:
- A função para ser executada em um determinado trecho de código precisa ser **chamada** - no exemplo, `fun(x)`  
- Para ser chamada, requer que possua um **nome** ou **identificador** (*fun*) que referencia o objeto, como descrito acima  
- Requer também uma lista de dados (variáveis ou constantes) entre parênteses, chamada de **argumento** da função - no exemplo, *x*. Diz-se que a função **recebe** argumentos 
- **A alteração do valor dos parâmetros não altera o valor dos argumentos**. No exemplo, a variável *x* manteve o mesmo valor atribuído `x = 2`, embora no corpo da função *fun* seja definida uma variável local *x* que recebeu o valor *1*.

## 5.3 Funções nativas do Python
**A linguagem Python posssui algumas [funções embutidas](https://docs.python.org/pt-br/3/library/functions.html)**

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
**[Home Programação Estruturada com Python](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progPython_aulas.md)**  

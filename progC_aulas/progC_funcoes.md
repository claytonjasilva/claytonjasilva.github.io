# 7. Funções em C

## 7.1 Conceitos gerais sobre funções  
No contexto de uma programação, uma **função** é uma sequência nomeada de instruções que proporciona um resultado.  
É um bloco de código de programa que pode ser chamaado várias vezes, produzindo alguns benefícios, como  
- Reutilizar código: as funções permitem agrupar e generalizar um código para se usado arbitrariamente muitas vezes posteriormente  
- Decomposição procedural: permitem dividir o sistema desenvolvido em partes, com tarefas bem definidas  

### 7.1.1 Prototipação de funções
A função para ser executada em um determinado trecho de código precisa ser **chamada**.  
A **chamada de função** requer o uso o nome e a passagem dos valores dos argumentos aos parâmetros.  
Além disso, quando uma função é executada, ela pode devolver um valor (**retornar** valor) derivado da execução da tarefa, o qual pode ser atribuído a uma variável ou utilizado no contexto de uma expressão, por exemplo.  
É necessário que o código em C especifique:  
o **tipo** de valor que a função retorna;  
o **identificador** ou **nome** da função; e  
os **parâmetros** que a função utiliza para realizar a tarefa, cujos valores serão definidos pelos **argumentos** utilizados no código que a chamar.  
A prototipação informa ao compilador que a função pode ser utilizada no módulo principal.  
A sintaxe para prototipação de uma função é dada por  
```
<tipo de retorno> <nome da função>(<declaração dos parâmetros>);
```
Algumas **observações**:  
1. A função pode não retornar valor algum. Nesse caso, ao invés do tipo (*int*, *float*,...), utiliza-se a **palavra reservada** `void`.
2. O nome da função segue as mesmas regras definidas para definição dos nomes das variáveis.
3. Em C, todos os argumentos são passados aos parâmetros **por valor**. Isso significa que a função usará uma **cópia** do valor do argumento.  
Sendo direto, isso significa que a alteração na função dos valores passados **não altera os valores dos argumentos**.  
A função passa os valores às **variáveis locais** da função, conforme sua prototipação as define.
4. As variáveis locais são aquelas que possuem somente valor dentro da função que são declaradas, incluindo a função *main*. A variável local deixa de existir quando a função é encerrada. Nos compiladores ANSI C, as variáveis precisam **não inicializadas** armazenam 'lixo'.  
Como alternativa às variáveis locais pode ser conveniente o programador definir **variáveis globais**, ou seja, externas e fora de todas as funções.  
Em cada função que for utilizada a variável global deverá ser declarada explícita ou **implicitamente, pelo contexto**.  
A sintaxe da declaração explícita é dada por `extern <tipo> <nome da variável>;`.  Não há problema na redundância.
A declaração implícita ocorrerá se no arquivo fonte a variável externa for utilizada antes da função necessitar dela.
6. Se for desnecessário que a função utilize parâmetros o código pode informar ao compilador pelo uso da sintaxe `<tipo de retorno> <nome da função>(void);`  
Alternativamente, o compilador reconhece a omissão da palavra reservada, usando a sintaxe `<tipo de retorno> <nome da função>();`.

Na estrutura do programa em C vimos que a prototipação da função se apresenta após as diretivas de pré-processamento e antes do módulo principal *main*.  
**A prototipação pode ser omitida se a função for definida antes do módulo principal *main***

### 7.1.2 Definição de funções
Para criar uma nova função é necessário escrever instruções atendendo a sintaxe do C, da seguinte forma  
```
<tipo de retorno> <nome da função>(<declaração dos parâmetros>) {
  <declarações de variáveis>
  <corpo de instruções>
  return <valor ou expressão de retorno>
}
```
As declarações de funções podem estar em qualquer ordem, em um arquivo fonte ou diversos, porém **nenhuma função pode estar dividida em dois arquivos**.  
Se a definição da função for apresentada antes do módulo principal a prototipação é desnecessária, no entanto, se a prototipação for usada, 
**se a definição da função não estiver de acordo com o seu protótipo será apresentado um erro na compilação.**

## 7.2 Biblioteca-padrão
As funções, tipos e macros da biblioteca-padrão são declaradas em *cabeçalhos*-padrão.  
Uma relação extensa dessas funções pode ser obtida em [USP, Prof. Paulo Feofiloff](https://www.ime.usp.br/~pf/algoritmos/apend/interfaces.html)

### Exercícios com funções  
1. Elaborar um programa na linguagem C que permita gerenciar a aprovação ou não de um grupo de 30 alunos, com base nas notas e na frequência. O programa deve possuir uma função para determinar a média do aluno, dada por mf=0,4.ap1+0,4.ap2+0,2.ac. Deve possuir também uma função que permita, caso o aluno seja reprovado, substituir a menor nota das ap pela nota da as (se a nota da as for superior a menor ap) e determinar a nova média final. Deve possuir também uma função para determinar a porcentagem de faltas de cada aluno. O programa deverá ler o número de aulas dadas; ler as notas de ap, ap2 e ac; ler a nota de as (se for necessário); e ler o número de faltas de cada aluno. Deverá escrever a média final de cada aluno, a porcentagem de faltas e a condição ('aprovado' ou 'reprovado'). O aluno estará aprovado se a média final for superior ou igual a 7.0 e tiver uma frequência superior a 75%. Deverá fazer a as se obtiver uma nota mf inferior a 7.0.  
2. Elaborar um programa na linguagem C que possua um conjunto de funções para calcular a área de figuras geométricas. O programa deve permitir que o usuário digite o número de figuras cujos parâmetros serão lidos e cuja área será determinada. Deve ler, para cada figura, o seu tipo, ('t':triângul;'r':retângulo;'c':círculo) e os respectivos parâmetros para cálculo de área, escrevendo a área da figura solicitada. 
3. Elaborar um programa na linguagem C que leia um número inteiro. Se o número for par não negativo, o programa deve executar uma função para calcular o valor da soma dos termos positivos de uma série aritmética de razão 1, cujo maior termo é N dado, ou seja, soma=1+2+3+...+N. Se o número for impar não negativo, o programa deve executar uma função para determinar a soma dos seus divisores. Se o número for negativo, o programa deve calcular a soma dos quadrados do número até 0. 
4. Elaborar um programa na linguagem Python que leia os dados de uma pessoa: nome, idade, peso, altura. Para a idade lida, o programa deverá recomendar exercícios do tipo A, para pessoas acima de 60 anos; do tipo B, para pessoas entre 40 e 60 anos; do tipo C, para pessoas entre 15 e 40 anos; e do tipo D, para crianças (idade inferior a 15 anos). Com base no peso e na altura, o programa deve calcular o IMC (dado por peso/altura^2), determinando as dietas: 'magra', IMC superior a 25; 'normal', IMC entre 19 e 25; e 'gorda', IMC inferior a 19. 
5. Elaborar um programa na linguagem C que permita realizar várias operações diferentes com um par de números digitados pelo usuário, A e B. As operações são as seguintes:  
- soma dos quadrados, designada 'sq', que resulta na soma do quadrado de A com o quadrado de B;  
- soma dos cubos, designada 'sc', que resulta na soma de A elevado à terceira potência com B elevado à terceita potência;
- quadrado da diferença, 'qdif', que resulta no quadrado da diferença de A por B;
- quadrado da soma, 'qsoma', que resulta no quadrado da soma de A e B;
- cubo da diferença, 'cdif', resulta no cubo da diferença de A por B;
- cubo da soma, 'csoma', que resulta no cubo da soma de A e B.  
O programa deve executar sucessivas vezes as operações. Na **primeira** repetição, o usuário deve digitar os valores de A e B, seguidos da operação desejada. Nas **repetições seguintes**, o usuário deve digitar o valor de um novo número, seguido da nova operação desejada. A nova operação será aplicada sobre o novo número e o resultado da repetição anterior. O programa será interrompido quando for digitada a operação 'nop' - nenhuma operação - e deverá escrever o último valor resultante da operação. 
6. Uma forma de calcular a potência de base *e* de um número é dada por *e^x = 1 + x + x^2/2! + x^3/!3 + ...*, onde *^* representa potência e *!* representa o fatorial do número. Elaborar um programa na linguagem C para determinar o resultado de *e^x*, em que o usuário ditige na entrada o valor de *x* e o número de interações desejadas (número de termos da série). 

___
**[home](/progC_aulas.md)**

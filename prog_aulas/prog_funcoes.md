## Funções em Python  
### [Definição de funções](https://docs.python.org/pt-br/3/reference/compound_stmts.html#function-definitions)

### Por que usar funções?     
- Reutilizar código: as funções permitem agrupar e generalizar um código para se usado arbitrariamente muitas vezes posteriormente
- Decomposição procedural: permitem dividir o sistema desenvolvido em partes, com tarefas bem definidas

### Sintaxe  
- A sintaxe geral é dada por  
*def nome_da_função(parâmetros):*    
*--> bloco de instruções*   
*--> return valor*  
- O uso do comando simples [*return*](https://docs.python.org/pt-br/3/reference/simple_stmts.html#the-return-statement) pode acompanhar ou não a definição de uma função.  
- O comando simples *return* devolve o resultado da função chamada para o programa que a chama. Por exemplo,  
*y = func(a)*  
atribui para y o valor retornado pela função 
- Os **parâmetros** são nomes das variáveis que receberão os **argumentos** quando a função for chamada e devem ser separados por vírgula (se houver mais de um parâmetro)  
- Na estrutura chamadora utiliza-se *função(argumento's)*. Os valores dos **argumentos** são copiados para os **parâmetros** da função. A alteração do valor do parâmetros não altera o valor dos argumentos se estes forem dos tipos imutáveis (int, float, ...). Por exemplo,  
*def fun(x)*  
-->x=1*  
-->return 0*     
*x=2*    
*fun(x)*  
*print(x)*  
Escreve o valor **2**

### Escopo das variáveis  
- Por padrão, todos os nomes das variáveis atribuídos em uma função são locais, isto é, existem apensas enquanto a função é executada. Variáveis globais são lidas e atualizadas por qualquer função ou método do programa. As variáveis locais só podem ser acessadas por código pertencente ao método ou função onde foi declarado a variável. [Ver detalhes](prog_funcoes_escopo.md)

### Outras considerações sobre funções  
- A linguagem Python posssui algumas [funções embutidas](https://docs.python.org/pt-br/3/library/functions.html)

### Exercícios com condicionais simples e compostas  
1. Elaborar um programa na linguagem Python que permita gerenciar a aprovação ou não de um grupo de 30 alunos, com base nas notas e na frequência. O programa deve possuir uma função para determinar a média do aluno, dada por mf=0,4.ap1+0,4.ap2+0,2.ac. Deve possuir também uma função que permita, caso o aluno seja reprovado, substituir a menor nota das ap pela nota da as (se a nota da as for superior a menor ap) e determinar a nova média final. Deve possuir também uma função para determinar a porcentagem de faltas de cada aluno. O programa deverá ler o número de aulas dadas; ler as notas de ap, ap2 e ac; ler a nota de as (se for necessário); e ler o número de faltas de cada aluno. Deverá escrever a média final de cada aluno, a porcentagem de faltas e a condição ('aprovado' ou 'reprovado'). O aluno estará aprovado se a média final for superior ou igual a 7.0 e tiver uma frequência superior a 75%. Deverá fazer a as se obtiver uma nota mf inferior a 7.0. 
2. Elaborar um programa na linguagem Python que possua um conjunto de funções para calcular a área de figuras geométricas. O programa deve permitir que o usuário digite o número de figuras cujos parâmetros serão lidos e cuja área será determinada. Deve ler, para cada figura, o seu tipo, ('t':triângul;'r':retângulo;'c':círculo) e os respectivos parâmetros para cálculo de área, escrevendo a área da figura solicitada.
3. Elaborar um programa na linguagem Python que leia um número inteiro. Se o número for par não negativo, o programa deve executar uma função para calcular o valor da soma dos termos positivos de uma série aritmética de razão 1, cujo maior termo é N dado, ou seja, soma=1+2+3+...+N. Se o número for impar não negativo, o programa deve executar uma função para determinar a soma dos seus divisores. Se o número for negativo, o programa deve calcular a soma dos quadrados do número até 0.  
4. Elaborar um programa na linguagem Python que possua uma função para somar o quadrado de três valores.
5. Elaborar um programa na linguagem Python que possua uma função para ler dois números e retornar o maior dentre os dois. O programa deve ler 10 números, determinar e escrever o maior dentre os números lidos. 

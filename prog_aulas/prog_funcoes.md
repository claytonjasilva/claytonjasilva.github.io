## Funções em Python  
### [Definição de funções](https://docs.python.org/pt-br/3/reference/compound_stmts.html#function-definitions)

### Por que usar funções?     
- Reutilizar código: as funções permitem agrupar e generalizar um código para se usado arbitrariamente muitas vezes posteriormente
- Decomposição procedural: permitem dividir o sistema desenvolvido em partes, com tarefas bem definidas

### Escopo das variáveis
- A linguagem Python posssui algumas [funções embutidas](https://docs.python.org/pt-br/3/library/functions.html)
- Na estrutura *função(argumento's)*, os valores dos argumentos são copiados para os parâmetros da função. A alteração do valor do parâmetros não altera o valor dos argumentos se estes forem dos tipos imutáveis (int, float, ...). Por exemplo,  
*def fun(x)  
   x=1  
   return nulo     
x=2    
fun(x)  
print(x)*  
Escreve o valor **2**
- O uso do comando simples [*return*](https://docs.python.org/pt-br/3/reference/simple_stmts.html#the-return-statement) pode acompanhar ou não a definição de uma função. O comando simples *return* devolve o resultado da função chamada para o programa que a chama
- Por padrão, todos os nomes das variáveis atribuídos em uma função são locais, isto é, existem apensas enquanto a função é executada. Variáveis globais são lidas e atualizadas por qualquer função ou método do programa. As variáveis locais só podem ser acessadas por código pertencente ao método ou função onde foi declarado a variável. [Ver detalhes](prog_funcoes_escopo.md)

### Exercícios com condicionais simples e compostas  
1. Elaborar um programa na linguagem Python que possua uma função para calcular a média final de aluno, usando a fórmula: mf=0,4.ap1+0,4.ap2+0,2.ac. O programa deve ser executado para calcular a média de um grupo de 30 alunos.
2. Elaborar um programa na linguagem Python que possua uma função para calcular a área de figuras geométricas. A função deve ler o tipo de figura('t':triângul;'r':retângulo;'c':círculo) e os dados da figura, conforme o tipo especificado no argumento.
3. Elaborar um programa na linguagem Python que possua uma função para calcular o valor da soma dos termos positivos de uma série aritmética de razão 1, cujo maior termo é um número N dado, ou seja, soma=1+2+3+...+N.
4. Elaborar um programa na linguagem Python que possua uma função para somar o quadrado de três valores.
5. Elaborar um programa na linguagem Python que possua uma função para ler dois números e retornar o maior dentre os dois. O programa deve ler 10 números, determinar e escrever o maior dentre os números lidos. 

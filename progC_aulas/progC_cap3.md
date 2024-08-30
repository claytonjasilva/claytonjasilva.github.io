# 3. Funções e controle de fluxo com estruturas de repetição

## 3.1 Conceitos gerais sobre funções  

No contexto de uma programação, uma **função** é uma sequência nomeada de instruções que proporciona um resultado.  

É um bloco de código de programa que pode ser chamado várias vezes, produzindo alguns benefícios, como:

- **Reutilizar código** - as funções permitem agrupar e generalizar um código para se usado arbitrariamente muitas vezes posteriormente;  
- **Decomposição procedural** - permitem dividir o sistema desenvolvido em partes, com tarefas bem definidas.  

### 3.1.1 Prototipação de funções

Na estrutura do programa em C vimos que a prototipação da função se apresenta após as diretivas de pré-processamento e antes do módulo principal *main*.

Uma função para ser executada em um determinado trecho de código precisa ser **chamada**.

A **chamada de função** requer o uso do **nome** e a **passagem dos valores dos argumentos aos parâmetros**.  

Além disso, quando uma função é executada, ela pode devolver um valor (**retornar** valor) derivado da execução da tarefa, **o qual pode ser atribuído a uma variável** ou **utilizado no contexto de uma expressão**.  

No padrão ANSI C (C89/C90), a **prototipação de funções** não é obrigatória, mas é fortemente recomendada. Se uma função é utilizada antes de ser definida ou prototipada, o compilador assume que a função retorna um valor do tipo int e que seus parâmetros são do tipo padrão (normalmente int ou double, dependendo de como os argumentos são passados). Isso pode causar problemas se a função realmente retornar outro tipo de dado ou tiver parâmetros de tipos diferentes, pois o compilador não terá as informações corretas para verificar o tipo ou o número de argumentos passados para a função.

A prototipação ajuda a evitar esses problemas, pois permite ao compilador verificar se as chamadas de função estão corretas em termos de número e tipo dos argumentos. Para prototipar é necessário que o código em C especifique a função a ser usada, contendo:

- o **tipo** de valor que a função retorna (*void*, retorna vazio; *int*, retorna inteiro, ou *float*, retorna ponto flutuante);    
- o **identificador** ou **nome** da função; e  
- os **parâmetros** que a função utiliza para realizar a tarefa, cujos valores serão definidos pelos **argumentos** utilizados no código que a chamar.  

A prototipação informa ao compilador que a função pode ser utilizada no módulo principal. A sintaxe para prototipação é dada por  

```C
<tipo de retorno> <nome da função>(<declaração dos parâmetros>);
```

Se a função não retornar valor algum utiliza-se a **palavra reservada** `void`. Na linguagem C não se distingue *procedure* (quando não há retorno de valor) de *function* como em outras linguagens. Caso não se utilize a palavra reservada `void`, o compilador assume que a função retorna inteiro.

O nome da função segue as mesmas regras definidas para definição dos nomes das variáveis.

Todos os argumentos são passados aos parâmetros **por valor**. Isso significa que a função usará uma **cópia** do valor do argumento.  Objetivamente, isso significa que a alteração na função dos valores passados **não altera os valores dos argumentos**.

Se for desnecessário que a função utilize parâmetros o código pode informar ao compilador:

- pelo uso da sintaxe `<tipo de retorno> <nome da função>(void)` ou
- o compilador reconhece a omissão da palavra reservada, usando a sintaxe `<tipo de retorno> <nome da função>();`.

A instrução `return`

A instrução `return` em C é fundamental para o controle de fluxo dentro de funções. Ela permite que uma função finalize sua execução e, opcionalmente, retorne um valor para o ponto de chamada. Quando a instrução `return` é executada em uma função, a execução dessa função é imediatamente interrompida, e o controle é devolvido ao ponto onde a função foi chamada.

Dependendo da função, `return` pode ser usado para devolver um valor ao chamador da função. Esse valor pode ser de **qualquer tipo compatível com o tipo de retorno da função**.

Pode ser usada também para retorno condicional, isto é, usada para sair de uma função precocemente, com ou sem um valor de retorno, dependendo de uma condição. Por exemplo,

```c
int dividir(int a, int b) {
    if (b == 0) {
        printf("Erro: Divisao por zero\n");
        return 0;  // Retorna 0 ou outro valor especial em caso de erro
    }
    return a / b;  // Caso contrário, retorna a divisão
}
```

Assim como pode ser usada para encerramento prematuro de funções. Por exemplo,

```c
void verificarPositivo(int num) {
    if (num <= 0) {
        printf("Numero nao e positivo.\n");
        return;  // Sai da função se o número não for positivo
    }
    printf("Numero positivo: %d\n", num);
}
```

Em funções declaradas como void, você não pode retornar um valor, mas pode usar return para sair da função mais cedo.

A função `main` em C pode usar `return` para retornar um valor ao sistema operacional, **indicando o status de término do programa** (tipicamente 0 para sucesso, e um valor diferente de zero para erro).

### 3.1.2 Escopo de variáveis

As funções estão diretamente relacionadas ao conceito de **escopo** de variáveis.

Uma função passa os valores às **variáveis locais** da função, conforme sua prototipação as define.

As variáveis locais são aquelas que possuem somente valor dentro da função que são declaradas, incluindo a função *main*, e **deixam de existir quando a função é encerrada**.

Como alternativa às variáveis locais pode ser conveniente o programador definir **variáveis globais**, ou seja, externas e fora de todas as funções.

Em cada função que for utilizada a variável global deverá ser **declarada implicitamente, pelo contexto** ou **declarada explicitamente**.

A declaração implícita ocorrerá quando a declaração é feita fora do contexto de qualquer função, inclusive a função principal `main()`.

A sintaxe da declaração explícita é dada por `extern <tipo> <nome da variável>;`, incluída no arquivo em que a variável será usada. O uso de declaração explícita só faz sentido entre arquivos diferentes, quando você deseja acessar uma variável global definida em outro arquivo. Nesse caso, `extern` informa ao compilador que a variável existe em outro arquivo, permitindo que você a utilize sem redefini-la.

### 3.1.3 Definição de funções

Para criar uma nova função é necessário escrever instruções atendendo a sintaxe do C, da seguinte forma  

```c
<tipo de retorno> <nome da função>(<declaração dos parâmetros>) {
  <declarações de variáveis>
  <corpo de instruções>
  return <valor ou expressão de retorno>
}
```

As definições de funções podem estar em qualquer ordem, em um arquivo fonte ou diversos, porém **nenhuma função pode estar dividida em dois arquivos**.

Se a definição da função for apresentada antes do módulo principal a prototipação é desnecessária, no entanto, se a prototipação for usada, **se a definição da função não estiver de acordo com o seu protótipo será apresentado um erro na compilação.**

### 3.1.3 Recursividade de funções 

Recursividade ocorre quando uma função chama a si mesma, direta ou indiretamente, como parte da sua execução. Esse tipo de chamada permite que problemas complexos sejam resolvidos de maneira elegante, quebrando-os em subproblemas menores e mais simples, que eventualmente convergem para um caso base.

A estrutura de uma função recursiva compreende:

- Caso base: é a condição de parada que termina a recursão. Sem um caso base, a recursão se tornaria infinita;
- Chamada recursiva: é onde a função se chama novamente com um conjunto modificado de parâmetros, movendo o problema em direção ao caso base.

O exemplo clássico do uso de recursividade é para determinação do fatorial de um número. Veja o exemplo do exercício 12.

### 3.1.4 Biblioteca-padrão

As funções, tipos e macros da biblioteca-padrão são declaradas em *cabeçalhos*-padrão.

Uma relação extensa dessas funções pode ser obtida em [USP, Prof. Paulo Feofiloff](https://www.ime.usp.br/~pf/algoritmos/apend/interfaces.html)

## 3.2 Instruções de controle de fluxo com repetição  

Os programas muitas vezes precisam automatizar tarefas repetitivas. A repetição ou **iteração** pode ser obtida pela utilização de instruções compostas chamadas instruções de repetição.

As três instruções de repetição disponíveis na linguagem C são `while`, `do-while` e `for`.

### 3.2.1 O comando `while`

A instrução `while` possui a seguinte sintaxe  

```c
while (<expressão lógica>) {
  <instrução ou bloco de instruções>
}
```  

A máquina executa a instrução *while* da seguinte forma:

1. Calcula o resultado da condição lógica. Se a condição lógica for 0 (falso), passa à instrução do código após o *while* sem executar a instrução (ou bloco) interna.
2. Se a expressão resultar diferente de 0 (verdadeiro), a instrução ou o bloco de instruções internos (delimitados pelas chaves) será executado.
3. Após executar a primeira vez o bloco de instruções, a máquina volta a testar a condição lógica. **Enquanto** a condição permanecer diferente de 0 (verdadeira) o compilador repetirá a execução do bloco. Cada execução é normalmente referida como um ***loop***.
4. A repetição da instrução ou do bloco de instruções internos será interrompida **quando a condição lógica for 0*. Nesse momento, o computador passará a executar a instrução após o *while*.

#### 3.2.1.1 Controle das repetições com **contador**  

É muito comum a repetição ser controlada por uma variável de contagem. No exemplo abaixo utiliza-se a variável designada *cont*  

```c
cont = 1;
while (cont<=50) {
  <instrução ou bloco de instruções>
  cont = cont + 1;
}
```  

O comando será executado da seguinte forma:

1. Inicialmente a máquina executa a instrução de atribuição `cont = 1`. A operação é normalmente chamada de **inicialização** da variável de controle.
2. Em seguida, executa a expressão lógica `cont<50`, que retorna 1, consequentemente levando à execução de

  ```c
    <instrução ou bloco de instruções>
    cont = cont + 1;
  ```
  
3. Após executar a instrução ou bloco, a máquina **incrementa** a variável *cont* de 1, que passa a armazenar 2, e retorna para executar a expressão lógica.
4. A execução das instruções do bloco ocorrerá 50 vezes - iniciando com o valor de *cont* igual a 1 até o valor de cont igual a 50, pois nesse intervalo `cont<=50`, logo retornando valor lógico 1.
5. Na última repetição *cont* passará a valer 51, logo a expressão `cont<=50` retornará 0.

Ao invés de utilizar o limite 50, pode-se utilizar uma variável para a qual preliminarmente seja atribuído um valor limite. O importante é inicializar adequadamente a variável de controle, de modo que **o número de *loops* desejado seja alcançado no intervalo desde sua inicialização até o valor limite estabelecido na condição de guarda.**

Caso a variável *cont* não seja incrementada, a estrutura permanecerá em ***loop* **infinito**, pois a condição que resulta falso nunca ocorrerá.  

A verificação lógica da condição é realizada no início da estrutura, razão pela qual a estrutura muitas vezes é designada como **instrução de repetição com teste de condição no início**. 

Como já descrito anteriormente, a linguagem C dispõe do operador incremento `++` que incrementa o operando de 1, portanto a linha de comando `cont = cont + 1` pode ser substituída por `cont++;` ou `++cont;`.

**Salientando novamente**, observe que inserir o operador antes ou depois da variável sinaliza que qualquer outra operação sobre ela será realizada antes ou depois do incremento**.  

#### 3.2.1.2 Controle das repetições com *flag*

Outra situação também muito comum é utilizar uma variável de controle (pode ser chamada de *flag*) cujo valor determina a interrupção ou não da repetição do bloco de instruções.

Por exemplo,  

```c
flag = 1;
while (flag==1) {
  <instrução ou bloco de instruções>
  if (<condição>)
    flag = 0;
}
```  

O código será executado da seguinte forma:

1. Inicialmente executa-se a instrução de atribuição `flag = 1`.
2. Em seguida, executa-se a expressão lógica `flag==1`, que retorna 1, consequentemente levando à execução de

  ```c
    <instrução ou bloco de instruções>
    if (<condição>)
      flag = 0;
  ```

3. Após executar a instrução ou bloco, a máquina executa a expressão lógica. Se a expressão resultar 1, o valor de *flag* será modificado para 0. Na execução de `flag==1` o valor retornado será 0 e o computador passará a executar a instrução seguinte do código.
4. O número de *loops* não é pré-definido, dependendo da condição que pode determinar a mudança da variável *flag*.

#### 3.2.1.3 Instruções ***break*** e ***continue***

Existem duas instruções do Python destinadas a interromper o *loop* de repetições de instruções compostas de repetição: `break` e `continue`.

As instruções permitem permitem interromper o ciclo de repetições **independentemente da condição de teste do início do comando**.

##### a. **Instrução `break`**

A instrução `break` interrompe a execução do *loop* no ponto em que foi inserida e prossegue a execução do programa a partir da instrução do código seguinte ao `while`, `do-while` ou ao `for`.  

Por exemplo, no código,  

```c
while (<condição>) {
  <instruções ou bloco de instruções>
  y = 3;
  printf("Digite número: ");  
  scanf("%i", &x);
  if (x == 0)
    break;
  y = 30;
}
print("%i", y);
```  

Independentemente do valor lógico da condição, a máquina interromperá o *loop* e **escreverá 3** no console quando o usuário digitar 0 no comando de entrada *scanf*.

Em caso contrário, executará as repetições do *while* normalmente e escreverá 30 (último valor atribuído ao y no *loop*.

##### b. **Instrução `continue`**

A instrução `continue` interrompe a execução do *loop* no ponto em que foi inserido e remete a execução para o próximo teste de condição do `while` (ou `do-while`) ou para o próximo *loop* do `for` 

### 3.2.2 O comando `do-while`

A instrução `do-while` possui a seguinte sintaxe

```c
do {
  <instrução ou bloco de instruções>
}
while (<condição>);
```

O compilador executa a instrução `do-while` da seguinte forma:

1. Executa a primeira vez a instrução interna ao *do*. Ou seja, diferentemente do *while*, **o comando *do-while* assegura a repetição pelo menos uma vez da instrução ou bloco de instruções**.
2. Após executar a primeira vez a instrução (ou bloco de instruções), a máquina calcula o resultado da condição lógica. 
Se a condição resultar 0 (falso), passa à execução da instrução do código após o *do-while*, sem executar novo *loop*.
3. Se a condição for diferente de 0 (verdadeiro), a instrução ou o bloco de instruções internos (delimitados pelas chaves) será executado novamente. Novo *loop*.
4. O processo se repete **enquanto** a expressão lógica de condição resultar 1.
5. A repetição da instrução ou do bloco de instruções internos será interrompida **quando o resultado da expressão lógica for 0**. 
Nesse momento, a máquina passará a executar a instrução após o *do-while*.  

O comando `do-while` é chamado de comando de repetição com **teste de condição no fim da estrutura**.

#### 3.2.2.1 Controle das repetições com **contador**

No caso do comando `do-while` o contador sempre deverá computar um *loop*. No exemplo abaixo utiliza-se a variável designada *cont*  

```c
cont = 1;
do {
  <instrução ou bloco de instruções>
  cont = cont + 1;
}
while (cont<=50);
```

A execução do código é similar à aplicação com o `while`.

#### 3.2.2.2 Controle das repetições com *flag*

No caso da utilização do *flag* é bom lembrar que pelo menos uma execução do comando ou bloco de comandos interno à estrutura ocorrerá.  
Situações em que pode não ocorrer execução alguma das instruções do *loop* são mais adequadamente tratadas pelo *while*, ou usando-se os comandos ***break*** ou ***continue***.

### 3.2.3 O comando `for`

O loop for em C é normalmente usado para **iterar sobre uma sequência de valores**. A instrução `for` possui a seguinte sintaxe

```c
for (<inicialização da variável de controle>;<condição>;<incremento>) {
  <instrução ou bloco de instruções>
}
```

A instrução será executada da seguinte forma:

1. Inicializa-se a variável de controle conforme o comando de atribuição do argumento. 
2. A máquina verifica a condição.
Se a condição resultar 0 (falso), passa à execução da instrução do código após o *for*, sem executar o *loop*.
3. Se a verificação de condição resultar diferente de 0 (verdadeiro), a instrução ou o bloco de instruções internos (delimitados pelas chaves) será executado.
4. Após o *loop* a variável de controle é atualizada conforme o <incremento> especificado no argumento do `for`.
5. A condição é calculada novamente e o processo se repete até que resulte valor lógico igual a 0.  

O *loop* infinito pode ocorrer se não for especificada a condição de controle  

```c
for (<inicialização da variável de controle>; ;<incremento>) {
  <instrução ou bloco de instruções>
}
```

É possível e comum declarar a variável de controle diretamente dentro do argumento do `for`. A variável terá escopo limitado ao loop `for`. Por exemplo,

```c
for (int i=0;i<N;i++>){
    <bloco de instruções>
}
```

O comando `for` também admite a utilização dos comandos ***break*** ou ***continue***.

## 3.3 Exemplos

1. Elaborar um código em C para ler um número inteiro não negativo e escrever a soma dos números **inferiores ao número lido**.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo28.c)**

2. Elaborar um código em C para ler um conjunto de números não nulos e escrever somente os números pares. Caso o número lido não seja par escrever a mensagem "numero impar". O usuário poderá interromper o programa digitando o número 0.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo29.c)**

3. Elaborar um código em C para ler um número inteiro *n* positivo. O usuário deve escolher uma opção de 1 a 3:

- A opção 1 deve escrever a soma dos *n* termos da série S = 1/(k+3), k=0,...,n-1
- A opção 2 deve escrever a soma dos *n* termos da série S = 2k/(k+1), k=0,...,n-1
- A opção 3 deve escrever a soma dos *n* termos da série S = k, k=0,...,n-1  

Se o usuário digitar uma opção inválida o programa deve permanecer solicitando uma opção válida.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo30.c)**

4. Escrever um código em C para calcular a expressão *e<sup>x</sup>* aplicando a aproximação dada abaixo  
$$e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+...$$  
Utilizar uma função cujos parâmetros são o expoente *x* e o número *N* de termos da aproximação.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo31.c)**

5. Elaborar um programa na linguagem C para **escrever os caracteres minúsculos do alfabeto**.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo32.c)**

6. Elaborar um programa na linguagem C para ler uma frase com até 15 caracteres - preencher a frase com espaços em branco se ela não possuir 15 caracteres, utilizando a função *getch*, e escrever a frase digitada.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo33.c)**

7. Elaborar um programa na linguagem C que permita gerenciar a aprovação ou não de um grupo de 30 alunos, com base nas notas e na frequência. O programa deve possuir uma função para determinar a média do aluno, dada por mf=0,4.ap1+0,4.ap2+0,2.ac. Deve possuir também uma função que permita, caso o aluno seja reprovado, substituir a menor nota das ap pela nota da as (se a nota da as for superior a menor ap) e determinar a nova média final. Deve possuir também uma função para determinar a porcentagem de faltas de cada aluno. O programa deverá ler o número de aulas dadas; ler as notas de ap, ap2 e ac; ler a nota de as (se for necessário); e ler o número de faltas de cada aluno. Deverá escrever a média final de cada aluno, a porcentagem de faltas e a condição ('aprovado' ou 'reprovado'). O aluno estará aprovado se a média final for superior ou igual a 7.0 e tiver uma frequência superior a 75%. Deverá fazer a as se obtiver uma nota mf inferior a 7.0.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo34.c)**

8. Elaborar um programa na linguagem C que possua um conjunto de funções para calcular a área de figuras geométricas. O programa deve permitir que o usuário digite o número de figuras cujos parâmetros serão lidos e cuja área será determinada. Deve ler, para cada figura, o seu tipo, ('t':triângulo;'r':retângulo;'c':círculo) e os respectivos parâmetros para cálculo de área, escrevendo a área da figura solicitada.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo35.c)**

9.  Elaborar um programa na linguagem C que leia um número inteiro. Se o número for par não negativo, o programa deve executar uma função para calcular o valor da soma dos termos positivos de uma série aritmética de razão 1, cujo maior termo é N dado, ou seja, soma=1+2+3+...+N. Se o número for impar não negativo, o programa deve executar uma função para determinar a soma dos seus divisores. Se o número for negativo, o programa deve calcular a soma dos quadrados do número até 0.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo36.c)**

10. Elaborar um programa na linguagem C que leia os dados de uma pessoa: nome, idade, peso, altura. Para a idade lida, o programa deverá recomendar exercícios do tipo A, para pessoas acima de 60 anos; do tipo B, para pessoas entre 40 e 60 anos; do tipo C, para pessoas entre 15 e 40 anos; e do tipo D, para crianças (idade inferior a 15 anos). Com base no peso e na altura, o programa deve calcular o IMC (dado por peso/altura^2), determinando as dietas: 'magra', IMC superior a 25; 'normal', IMC entre 19 e 25; e 'gorda', IMC inferior a 19.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo37.c)**

11. Elaborar um programa na linguagem C que permita realizar várias operações diferentes com um par de números digitados pelo usuário, A e B. As operações são as seguintes:

- soma dos quadrados, designada 'sq', que resulta na soma do quadrado de A com o quadrado de B;  
- soma dos cubos, designada 'sc', que resulta na soma de A elevado à terceira potência com B elevado à terceira potência;
- quadrado da diferença, 'qdif', que resulta no quadrado da diferença de A por B;
- quadrado da soma, 'qsoma', que resulta no quadrado da soma de A e B;
- cubo da diferença, 'cdif', resulta no cubo da diferença de A por B;
- cubo da soma, 'csoma', que resulta no cubo da soma de A e B.  

O programa deve executar sucessivas vezes as operações. Na **primeira** repetição, o usuário deve digitar os valores de A e B, seguidos da operação desejada. Nas **repetições seguintes**, o usuário deve digitar o valor de um novo número, seguido da nova operação desejada. A nova operação será aplicada sobre o novo número e o resultado da repetição anterior. O programa será interrompido quando for digitada a operação 'nop' - nenhuma operação - e deverá escrever o último valor resultante da operação.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo38.c)**

12. Uma forma de calcular a potência de base *e* de um número é dada por $e^x=1+x+x^2/2!+x^3/3!+ ...$, onde *!* representa o fatorial do número. Elaborar um programa na linguagem C para determinar o resultado de $e^x$, em que o usuário digite na entrada o valor de *x* e o número de interações desejadas (número de termos da série).

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo39.c)**

___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

# 3. Controle de fluxo: estruturas de repetição

## 3.1 Instruções de repetição  

Os programas muitas vezes precisam automatizar tarefas repetitivas. A repetição ou **iteração** pode ser obtida pela utilização de instruções compostas chamadas instruções de repetição.

As três instruções de repetição disponíveis na linguagem C são `while`, `do-while` e `for`.

## 3.2 O comando `while`

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

### 3.2.1 Controle das repetições com **contador**  

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

#### Observações:
  
  -- Ao invés de utilizar o limite 50, pode-se utilizar uma variável para a qual preliminarmente seja atribuído um valor limite.  
  -- O importante é inicializar adequadamente a variável de controle, de modo que **o número de *loops* desejado seja alcançado no intervalo desde sua inicialização até o valor limite estabelecido na condição de guarda.**  
  -- Caso a variável *cont* não seja incrementada, a estrutura permanecerá em ***loop* **infinito**, pois a condição que resulta falso nunca ocorrerá.  
  -- O teste para execução ou não é realizado no início do comando, razão pela qual a instrução muitas vezes é designada como **instrução de repetição com teste de condição no início**.  
  -- Como já descrito anteriormente, a linguagem C dispõe do operador incremento `++` que incrementa o operando de 1, portanto a linha de comando `cont = cont + 1` pode ser substituída por `cont++;` ou `++cont;`.  
  -- **Observe que inserir o operador antes ou depois da variável sinaliza que qualquer outra operação sobre ela será realizada antes ou depois do incremento**.  

### 3.2.2 Controle das repetições com *flag*

Outra situação também muito comum é utilizar uma variável de controle (pode ser chamada de *flag*) cujo valor determina a interrupção ou não da repetição do bloco de instruções. 

Por exemplo,  

```c
flag = 1;
while (flag==1) {
  <instrução ou bloco de instruções>
  if (<expressão lógica>)
    flag = 0;
}
```  

O código será executado da seguinte forma:

1. Inicialmente executa-se a instrução de atribuição `flag = 1`.
2. Em seguida, executa-se a expressão lógica `flag==1`, que retorna 1, consequentemente levando à execução de

  ```c
    <instrução ou bloco de instruções>
    if (<expressão lógica>)
      flag = 0;
  ```

3. Após executar a instrução ou bloco, a máquina executa a expressão lógica. Se a expressão resultar 1, o valor de *flag* será modificado para 0. Na execução de `flag==1` o valor retornado será 0 e o computador passará a executar a instrução seguinte do código.
4. O número de *loops* não é pré-definido, dependendo da condição que pode determinar a mudança da variável *flag*.

### 3.2.3 Instruções ***break*** e ***continue***

Existem duas instruções do Python destinadas a interromper o *loop* de repetições de instruções compostas de repetição: `break` e `continue`.

As instruções permitem permitem interromper o ciclo de repetições **independentemente da condição de teste do início do comando**.

#### a. **Instrução `break`**

A instrução `break` interrompe a execução do *loop* no ponto em que foi inserida e prossegue a execução do programa a partir da instrução do código seguinte ao `while`, `do-while` ou ao `for`.  

Por exemplo, no código,  

```c
while (<expressão lógica>) {
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

Independentemente do valor da expressão lógica, a máquina interromperá o *loop* e **escreverá 3** no console quando o usuário digitar 0 no comando de entrada *scanf*.

Em caso contrário, executará as repetições do *while* normalmente e escreverá 30 (último valor atribuído ao y no *loop*.

#### b. **Instrução `continue`**

A instrução `continue` interrompe a execução do *loop* no ponto em que foi inserido e remete a execução para o próximo teste de condição do `while` (ou `do-while`) ou para o próximo *loop* do `for` 

## 3.3 O comando `do-while`

A instrução `do-while` possui a seguinte sintaxe

```c
do {
  <instrução ou bloco de instruções>
}
while (<expressão lógica>);
```
 
O compilador executa a instrução *do-while* da seguinte forma:

1. Executa a primeira vez a instrução interna ao *do*. Ou seja, diferentemente do *while*, **o comando *do-while* assegura a repetição pelo menos uma vez da instrução ou bloco de instruções**.
2. Após executar a primeira vez a instrução (ou bloco de instruções), a máquina calcula o resultado da condição lógica. 
Se a condição resultar 0 (falso), passa à execução da instrução do código após o *do-while*, sem executar novo *loop*.
3. Se a condição for diferente de 0 (verdadeiro), a instrução ou o bloco de instruções internos (delimitados pelas chaves) será executado novamente. Novo *loop*.
4. O processo se repete **enquanto** a expressão lógica de condição resultar 1.
5. A repetição da instrução ou do bloco de instruções internos será interrompida **quando o resultado da expressão lógica for 0**. 
Nesse momento, a máquina passará a executar a instrução após o *do-while*.  

O comando *do-while* é chamado de comando de repetição com **teste de condição no fim da estrutura**.

### 3.3.1 Controle das repetições com **contador**

No caso do comando *do-while* o contador sempre deverá computar um *loop*. No exemplo abaixo utiliza-se a variável designada *cont*  

```c
cont = 1;
do {
  <instrução ou bloco de instruções>
  cont = cont + 1;
}
while (cont<=50);
```
 
A execução do código é similar à aplicação com o *while*.

### 3.3.2 Controle das repetições com *flag*

No caso da utilização do *flag* é bom lembrar que pelo menos uma execução do comando ou bloco de comandos interno à estrutura ocorrerá.  
Situações em que pode não ocorrer execução alguma das instruções do *loop* são mais adequadamente tratadas pelo *while*, ou usando-se os comandos ***break*** ou ***continue***.

## 3.4 O comando `for`

O loop for em C é normalmente usado para **iterar sobre uma sequência de valores**. A instrução `for` possui a seguinte sintaxe

```c
for (<inicialização da variável de controle>;<expressão lógica>;<incremento>) {
  <instrução ou bloco de instruções>
}
```

A instrução será executada da seguinte forma:

1. Inicializa-se a variável de controle conforme o comando de atribuição do argumento. 
2. A máquina calcula a expressão lógica. 
Se a expressão resultar 0 (falso), passa à execução da instrução do código após o *for*, sem executar o *loop*.
3. Se a expressão resultar 1 (verdadeiro), a instrução ou o bloco de instruções internos (delimitados pelas chaves) será executado.
4. Após o *loop* a variável de controle é atualizada conforme o incremento especificado no argumento da função.
5. A expressão é calculada novamente e o processo se repete até que resulte valor lógico igual a 0.  

O *loop* infinito pode ocorrer se não for especificada a expressão lógica de controle  

```c
for (<inicialização da variável de controle>; ;<incremento>) {
  <instrução ou bloco de instruções>
}
```

O comando *for* também admite a utilização dos comandos ***break*** ou ***continue***.



## 5.3 Exemplos
1. Elaborar um código em C para ler um número inteiro não negativo e escrever a soma dos números **inferiores ao número lido**.  
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoCcomandoDoWhile1.c)  
2. Elaborar um código em C para ler um conjunto de números não nulos e escrever somente os números pares. 
Caso o número lido não seja par escrever a mensagem "numero impar".
O usuário poderá interromper o programa digitando o número 0.   
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoCcomandoDoWhile2.c)
3. Elaborar um código em C para ler um número inteiro *n* positivo. O usuário deve escolher uma opção de 1 a 3.  
A opção 1 deve escrever a soma dos *n* termos da série S = 1/(k+3), k=0,...,n-1  
A opção 2 deve escrever a soma dos *n* termos da série S = 2k/(k+1), k=0,...,n-1  
A opção 3 deve escrever a soma dos *n* termos da série S = k, k=0,...,n-1  
Se o usuário digitar uma opção inválida o programa deve permanecer solicitando uma opção válida.  
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoCcomandoDoWhile3.c)  
4. Escrever um código em C para calcular a expressão *e<sup>x</sup>* aplicando a aproximação dada abaixo  
$$e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+...$$  
Utilizar uma função cujos parâmetros são o expoente *x* e o número *N* de termos da aproximação.  
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoCcomandoFor.c)

**g.** Elaborar um programa na linguagem C para **escrever os caracteres minúsculos do alfabeto**.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC251g.c)**  
**Tente agora com as lestras maiúsculas!**

13. Elaborar um programa na linguagem C para ler uma frase com 15 caracteres - preencher a frase com espaços em branco se ela não possuir 15 caracteres, utilizando a função *getch*, e escrever a frase digitada.

Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC252b.c)**    

___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

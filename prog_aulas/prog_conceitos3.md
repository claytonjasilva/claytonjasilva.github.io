# 4. Conceitos de programação procedural: estruturas de repetição  
## 4.1 [Instruções compostas](https://docs.python.org/pt-br/3/reference/compound_stmts.html)

## 4.2 Instruções de repetição  
Os programas muitas vezes precisam automatizar tarefas repetitivas. A repetição ou **iteração** pode ser obtida pela utilização de instruções compostas chamadas instruções de repetição.  
As duas instruções de repetição disponíveis na linguagem Python são `while` e `for`.

### 4.2.1 Instrução composta `while`
A instrução `while` possui a seguinte sintaxe  
```
while <expressão lógica>:
  <instrução ou bloco de instruções>
```  
O interpretador executa a instrução *while* da seguinte forma:
1. O interpretador Python calcula o resultado da expressão lógica. Se a expressão resultar *False*, o interpretador passa à instrução do *script* após o *while* sem executar a instrução (ou bloco) interna.
2. Se a expressão resultar *True*, a instrução ou o bloco de instruções internos (delimitados pela indentação) será executado.
3. Após executar a primeira vez o bloco de instruções, o interpretador volta a executar a expressão lógica. **Enquanto** a expressão lógica resultar *True* o interpretador repetirá a execução do bloco. Cada execução é normalmente referida como um ***loop***.
4. A repetição da instrução ou do bloco de instruções internos será interrompida **quando o resultado da expressão lógica for *False***. Nesse momento, o interpretador passará a executar a instrução do *script* após o *while*.
5. A figura ilustra o funcionamento do comando *while*

### 4.2.2 Controle das repetições com **contador**  
É muito comum a repetição ser controlada por uma variável de contagem. No exemplo abaixo utiliza-se a variável designada *cont*  
```
cont = 1
while cont<=50:
  <instrução ou bloco de instruções>
  cont = cont + 1
```  
O interpretador executa o *script* da seguinte forma:
1. Inicialmente executa a instrução de atribuição `cont = 1`. A operação é normalmente chamada de **inicialização** da variável de controle.
2. Em seguida, o interpretador executa a expressão lógica `cont<50`, que retorna *True*, consequentemente levando à execução de  
  ```
    <instrução ou bloco de instruções>
    cont = cont + 1
  ```  
3. Após executar a instrução ou bloco, o interpretador **incrementa** a variável *cont* de 1, que passa a armazenar 2, e retorna para executar a expressão lógica.
4. A execução das instruções do bloco ocorrerá 50 vezes - iniciando com o valor de *cont* igual a 1 até o valor de cont igual a 50, pois nesse intervalo `cont<=50`, logo retornando valor lógico *True*.
5. Na última repetição *cont* passará a valer 51, logo a expressão `cont<=50` retornará *False*.
6. A figura ilustra o funcionamento do *while*

7. Observações:  
  Ao invés de utilizar o limite 50, pode-se utilizar uma variável para a qual preliminarmente seja atribuído um valor limite.  
  Caso a variável *cont* não seja incrementada, a estrutura permanecerrá em ***loop* **infinito**, pois a condição *False* nunca ocorrerá.  
  O teste para execução ou não é realizado no início do comando, razão pela qual a instrução muitas vezes é designada como **instrução de repetição com teste de condição no início**.
  
### 4.2.3 Controle das repetições com *flag*
Outra situação também muito comum é utilizar uma variável de controle (pode ser chamada de *flag*) cujo valor determina a interrupção ou não da repetição do bloco de instruções. Por exemplo,  
```
flag = 1
while flag==1:
  <instrução ou bloco de instruções>
  if <expressão lógica>:
    flag = 0
```  
O interpretador executa o *script* da seguinte forma:
1. Inicialmente executa a instrução de atribuição `flag = 1`.
2. Em seguida, o interpretador executa a expressão lógica `flag==1`, que retorna *True*, consequentemente levando à execução de  
  ```
    <instrução ou bloco de instruções>
    if <expressão lógica>:
      flag = 0
  ```  
3. Após executar a instrução ou bloco, o interpretador executa a expressão lógica. Se a expressão resultar *True*, o valor de *flag* será modificado para 0. Na execução de `flag==1` o valor retornado será *False* e o interpretador passará a executar a instrução seguinte do *script*.
4. O número de *loops* não é pré-definido, dependendo da condição que pode determinar a mudança da variável *flag*.

### 4.2.4 Instruções ***break*** e ***continue***
- A instrução `break` interrompe a execução do *loop* no ponto em que foi inserida e prossegue a execução do programa a partir da instrução seguinte ao `while` ou ao `for`.
- A instrução `continue` interrompe a execução do *loop* no ponto em que foi inserido e remete a execução para o próximo teste de condição do `while` ou para o próximo *loop* do `for` 

#### Instrução composta `for` 
- A instrução `for` é usada também para executar um *loop* de instruções ou bloco de instruções.
- Uma das suas regras de sintaxe é a seguinte  
```
for nome_de_variável in range(N):
  instrução ou bloco de instruções
```
- A instrução determina a execução de **N** *loops*. N pode ser um número ou o valor armazenado anteriormente em uma variável.    
- A instrução `range(N)` define uma lista de números que varia entre **0 e N-1**. Em cada *loop* o interpretador atribui de forma crescente à variável *nome_de_variável* um valor da lista.
- **Observações**  
  - A função `range` admite também a sintaxe `range(start,stop,step)`, onde *start* é o limite inferior, *stop* é o limite superior e *step* é o passo em cada incremento
  - Nesse caso, a sintaxe da instrução `for` será
  ```
  for nome_de_variável in range(start,stop,step):
    instrução ou bloco de instruções
  ```



### Exercícios com condicionais simples e compostas  
1. Elaborar um programa na linguagem Python que leia as notas de um grupo de N=30 alunos; calcule e escreva a média aritmética das notas dos alunos.  [le30Notas.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/le30Notas.py)   
2. Elaborar um programa na linguagem Python que leia as alturas e pesos de um grupo de N=20 pessoas; calcule e escreve o IMC médio daquele grupo. [calcIMC20pessoas](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcIMC20pessoas.py)
3. Elaborar um programa na linguagem Python que leia os dados de um grupo de pessoas: nome, idade e escolaridade('fundamental','medio','superior'). O programa deverá calcular e escrever a média da idade das pessoas que possuem nível de escolaridade de ensino médio. [classEscol](https://github.com/claytonjasilva/prog_exemplos/blob/main/classEscol.py)
4. Elaborar um programa na linguagem Python que leia o cpf de uma pessoa, o saldo da conta corrente no início de um dia. Em seguida, leia a natureza ('d'-depósito,'s'-saque) e o valor de todas as operações do dia. O programa deverá escrever o cpf do correntista e escrever o respectivo saldo ao final do dia. [calcSaldo.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcSaldo.py)  
6. Elaborar um programa na linguagem Python que leia o cpf (no formato de 11 caracteres numéricos sem pontos e travessão) de uma pessoa. O programa deverá verificar se o cpf é válido usando a regra proposta pela [Associação Comercial e Empresarial de Guarulhos](https://www.aceguarulhos.com.br/blog/como-saber-se-um-cpf-e-verdadeiro/#gsc.tab=0).  
[testaCPF.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/testaCPF.py)

**[home](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progPython_aulas.md)**

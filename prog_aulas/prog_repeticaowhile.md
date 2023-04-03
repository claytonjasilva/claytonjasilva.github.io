# 4. Conceitos básicos de programação estruturada: estruturas de repetição  
Os programas muitas vezes precisam automatizar tarefas repetitivas. A repetição ou **iteração** pode ser obtida pela utilização de instruções compostas chamadas instruções de repetição.  

As duas instruções de repetição disponíveis na linguagem Python são `while` e `for`.

## 4.1 Instrução composta `while`
A instrução `while` possui a seguinte sintaxe mais geral 
```
while <expressão lógica>:
  <instrução ou bloco 1 de instruções>
else:
  <bloco 2 de instrruções>
```  
O interpretador executa a instrução *while* da seguinte forma:
1. O interpretador Python calcula o resultado da expressão lógica. Se a expressão resultar *False*, o interpretador passa à instrução do *script* após o *while* sem executar a instrução (ou bloco) interna.
2. Se a expressão resultar *True*, a instrução ou o bloco de instruções internos (delimitados pela indentação) será executado.
3. Após executar a primeira vez o bloco de instruções, o interpretador volta a executar a expressão lógica. **Enquanto** a expressão lógica resultar *True* o interpretador repetirá a execução do bloco. Cada execução é normalmente referida como um ***loop***.
4. A repetição da instrução ou do bloco de instruções internos será interrompida **quando o resultado da expressão lógica for *False***. Nesse momento, o interpretador passará a executar a instrução interna ao *else* e, na sequência, a instrução do *script* após o *while*.
5. A figura ilustra o funcionamento do comando *while*
![Comando while](/prog_aulas/images_prog/repeticaowhile.jpg)  

Observe que a figura não ilustra o *else*. A cláusula *else* **é opcional**. É executada sempre que o laço se encerra quando a condição se torna falsa (no caso do *while*), **mas nunca quando o laço é interrompido por um [*break*](#ancora_break)**.  
A cláusula *else* também não é executada se o bloco de instruções do *while* nunca for executado, o que acontece se o teste da condição for falso logo no início.

### 4.2.1 Controle das repetições com **contador**  
É muito comum a repetição ser controlada por uma variável de contagem. No exemplo abaixo utiliza-se a variável designada *cont*  
```
cont = 1
while cont<=50:
  <instrução ou bloco de instruções>
  cont = cont + 1
```  
O interpretador executa o *script* da seguinte forma:
1. Inicialmente executa a instrução de atribuição `cont = 1`. A operação é normalmente chamada de **inicialização** da variável de controle.
2. Em seguida, o interpretador executa a expressão lógica `cont<=50`, que retorna *True*, consequentemente levando à execução de  
  ```
    <instrução ou bloco de instruções>
    cont = cont + 1
  ```  
3. Após executar a instrução ou bloco, o interpretador **incrementa** a variável *cont* de 1, que passa a armazenar 2, e retorna para executar a expressão lógica.
4. A execução das instruções do bloco ocorrerá 50 vezes - iniciando com o valor de *cont* igual a 1 até o valor de cont igual a 50, pois nesse intervalo `cont<=50`, logo retornando valor lógico *True*.
5. Na última repetição *cont* passará a valer 51, logo a expressão `cont<=50` retornará *False*.

**Observações**:  
  - Ao invés de utilizar o limite 50, pode-se utilizar uma variável para a qual preliminarmente seja atribuído um valor limite, por exemplo  
  ```
  N = 50
  cont = 1
  while cont <= N:
  ...
  ```
  - Caso a variável *cont* não seja incrementada, a estrutura permanecerrá em ***loop* **infinito**, pois a condição *False* nunca ocorrerá.  
  
### 4.2.2 Controle das repetições com *flag*
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

<a id="ancora_break"></a>
### 4.2.3 Instruções ***break*** e ***continue***
Existem duas instruções do Python destinadas a interromper os *loops* de repetições de instruções: `break` e `continue`.
As instruções permitem permitem interromper o ciclo de repetições **independentemente da condição de teste do início do comando**.

#### a. **Instrução `break`**  
A instrução `break` interrompe a execução do *loop* no ponto em que foi inserida e prossegue a execução do programa a partir da instrução do *script* seguinte ao `while` ou ao `for`.  
Por exemplo, no *script*,  
```
while <expressão lógica>:
  <instruções ou bloco de instruções>
  y = 3
  x = int(input('Digite número: )  if x == 0:
    break
  y = 30
print(y)
```  
Independentemente do valor da expressão lógica, o interpretador interromperá o *loop* e **escreverá 3** no console quando o usuário digitar 0 no comando de entrada *input*.  
Em caso contrário, o interpretador executará as repetições do *while* normalmente e o interpretador escreverá 30 (último valor atribuído ao y no *loop*.

#### b. **Instrução `continue`**  
A instrução `continue` interrompe a execução do *loop* no ponto em que foi inserido e remete a execução para o próximo teste de condição do `while` ou para o próximo *loop* do `for`. 

### 4.2.4 Exemplos discutidos em sala
1. Elaborar um *script* em Python que leia o nome e a idade de um grupo de animais. Escrever o nome do animal mais velho.  
Interromper a leitura quando o usuário digitar idade igual a 0.
2. Elaborar um *script* em Python que leia o nome e a idade de um grupo de 50 animais. Escrever o nome do animal mais velho.  
Interromper a leitura se o usuário digitar idade igual a 0.
3. Elaborar um *script* em Python que leia o nome e a idade de um grupo de animais. Escrever a média das idades lidas.  
Interromper a leitura quando o usuário digitar idade igual a 0.
4. Elaborar um *script* em Python que leia a classificação (J - jovem, A - adulto, V - velho), a idade e o peso de um grupo de animais.   
Escrever a média das idades dos animais jovens.  
Escrever a idade do animal mais pesado dentre os adultos.  
Escrever o percentual dos animais velhos.  
Interromper a leitura quando o usuário digitar idade igual a 0.
5. Elaborar um *script* em Python para ler um número inteiro e uma dentre 4 opções de operação: fatorial, primos, soma e pares.  
Se a opção dada for fatorial, o *script* deve escrever o fatorial do número.  
Se for primos, escrever os primos inferiroes ao número lido.  
Se for soma, escrever a soma dos números inferiores não negativos.  
Se for pares, escrever todos os pares inferiores ao número.


___     
**[Home Programação Estruturada com Python](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progPython_aulas.md)**  
**Instrução composta de repetição *for*: [próximo>>](prog_repeticaofor.md)**  


# 4. Controle de fluxo: estruturas de repetição

## 4.1 Instruções de repetição  
Os programas muitas vezes precisam automatizar tarefas repetitivas. A repetição ou **iteração** pode ser obtida pela utilização de instruções compostas chamadas instruções de repetição.  
As três instruções de repetição disponíveis na linguagem C são `while`, `do-while` e `for`.

## 4.2 O comando `while`
A instrução `while` possui a seguinte sintaxe  
```
while (<expressão lógica>) {
  <instrução ou bloco de instruções>
}
```  
O compilador executa a instrução *while* da seguinte forma:
1. Calcula o resultado da expressão lógica. Se a expressão resultar 0 (falso), o compilador passa à instrução do código após o *while* sem executar a instrução (ou bloco) interna.
2. Se a expressão resultar 1 (verdadeiro), a instrução ou o bloco de instruções internos (delimitados pelas chaves) será executado.
3. Após executar a primeira vez o bloco de instruções, o compilador volta a executar a expressão lógica. **Enquanto** a expressão lógica resultar 1 o compilador repetirá a execução do bloco. Cada execução é normalmente referida como um ***loop***.
4. A repetição da instrução ou do bloco de instruções internos será interrompida **quando o resultado da expressão lógica for 0*. Nesse momento, o compilador passará a executar a instrução após o *while*.

### 4.2.1 Controle das repetições com **contador**  
É muito comum a repetição ser controlada por uma variável de contagem. No exemplo abaixo utiliza-se a variável designada *cont*  
```
cont = 1;
while (cont<=50) {
  <instrução ou bloco de instruções>
  cont = cont + 1;
}
```  
O compilador executa o comando da seguinte forma:
1. Inicialmente executa a instrução de atribuição `cont = 1`. A operação é normalmente chamada de **inicialização** da variável de controle.
2. Em seguida, o compilador executa a expressão lógica `cont<50`, que retorna 1, consequentemente levando à execução de  
  ```
    <instrução ou bloco de instruções>
    cont = cont + 1;
  ```  
3. Após executar a instrução ou bloco, o compilador **incrementa** a variável *cont* de 1, que passa a armazenar 2, e retorna para executar a expressão lógica.
4. A execução das instruções do bloco ocorrerá 50 vezes - iniciando com o valor de *cont* igual a 1 até o valor de cont igual a 50, pois nesse intervalo `cont<=50`, logo retornando valor lógico 1.
5. Na última repetição *cont* passará a valer 51, logo a expressão `cont<=50` retornará 0.  
**Observações**:  
  Ao invés de utilizar o limite 50, pode-se utilizar uma variável para a qual preliminarmente seja atribuído um valor limite.  
  Caso a variável *cont* não seja incrementada, a estrutura permanecerrá em ***loop* **infinito**, pois a condição que resulta falso nunca ocorrerá.  
  O teste para execução ou não é realizado no início do comando, razão pela qual a instrução muitas vezes é designada como **instrução de repetição com teste de condição no início**.  
  Como já descrito anteriormente, a linguagem C dispõe do operador incremento `++` que incrementa o operando de 1, portanto a linha de comando `cont = cont + 1` pode ser substituída por `cont++;` ou `++cont;`. **Observe que inserir o operador antes ou depois da variável sinaliza que qualquer outra operação sobre ela será realizada antes ou depois do incremento**.

### 4.2.2 Controle das repetições com *flag*
Outra situação também muito comum é utilizar uma variável de controle (pode ser chamada de *flag*) cujo valor determina a interrupção ou não da repetição do bloco de instruções. Por exemplo,  
```
flag = 1;
while (flag==1) {
  <instrução ou bloco de instruções>
  if (<expressão lógica>)
    flag = 0;
}
```  
O compilador executa o código da seguinte forma:  
1. Inicialmente executa a instrução de atribuição `flag = 1`.
2. Em seguida, o compilador executa a expressão lógica `flag==1`, que retorna 1, consequentemente levando à execução de  
  ```
    <instrução ou bloco de instruções>
    if (<expressão lógica>)
      flag = 0;
  ```  
3. Após executar a instrução ou bloco, o compilador executa a expressão lógica. Se a expressão resultar 1, o valor de *flag* será modificado para 0. Na execução de `flag==1` o valor retornado será 0 e o compilador passará a executar a instrução seguinte do código.
4. O número de *loops* não é pré-definido, dependendo da condição que pode determinar a mudança da variável *flag*.

### 4.2.3 Instruções ***break*** e ***continue***
Existem duas instruções do Python destinadas a interromper o *loop* de repetições de instruções compostas de repetição: `break` e `continue`.
As instruções permitem permitem interromper o ciclo de repetições **independentemente da condição de teste do início do comando**.

a. **Instrução `break`**  
A instrução `break` interrompe a execução do *loop* no ponto em que foi inserida e prossegue a execução do programa a partir da instrução do código seguinte ao `while`, `do-while` ou ao `for`.  
Por exemplo, no código,  
```
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
Independentemente do valor da expressão lógica, o compilador interromperá o *loop* e **escreverá 3** no console quando o usuário digitar 0 no comando de entrada *scanf*.  
Em caso contrário, o compilador executará as repetições do *while* normalmente e o compilador escreverá 30 (último valor atribuído ao y no *loop*.

b. **Instrução `continue`**  
A instrução `continue` interrompe a execução do *loop* no ponto em que foi inserido e remete a execução para o próximo teste de condição do `while` (ou `do-while`) ou para o próximo *loop* do `for` 

___
**[home](/progC_aulas.md)**

# 3. Conceitos de programação procedural: condicionais simples e compostas
## 3.1 [Expressões lógicas (booleanas) e comparações](https://docs.python.org/pt-br/3/library/stdtypes.html#boolean-operations-and-or-not)
1. Assim como as expressões aritméticas utilizam operadores aritméticos cujas operações resultam números, as expressões lógicas utilizam **operadores lógicos**.
2. Por enquanto discutiremos os operadores lógicos **relacionais** ou **de comparação**, que são os seguintes:  

| Operador | Descrição |
| -------- | --------- |
| > | Maior |
| < | Menor |
| >= | Maior ou igual |
| <= | Menor ou igual |
| != | Diferente |
| == | Igual |
3. O resultado das operações de uma expressão lógica só pode ser ***False*** ou ***True***.
4. Os operadores relacionais são aplicados a **dois operandos**.
Por exemplo, `3 > 2`, que compara o número 3 com o número 2.
Experimente escrever a expressão no modo interativo e verificar o resultado.
5. Os operandos podem conter **números**; **variáveis**, por exemplo, `x > 3`; e **expressões aritméticas**, por exemplo, `x + 3 <= 4 + y`. O interpretador resolve primeiro as expressões aritméticas (os operadores aritméticos têm precedência sobre os lógicos).  

## 3.2 Instruções condicionais simples e instruções condicionais compostas
As [instruções compostas](https://docs.python.org/pt-br/3/reference/compound_stmts.html) contêm (grupos de) outras instruções; Elas afetam ou controlam a execução dessas outras instruções de alguma maneira. Em geral, instruções compostas abrangem múltiplas linhas.

### 3.2.1 Instrução condicional simples - *if ...*
Uma das instruções compostas é a **instrução condicional simples** - executa uma ação (ou conjunto de ações) dependendo do resultado da avaliação de uma **expressão lógica (condição)** ser verdadeiro ou falso.

1. A figura ilustra o fluxo de execução das instruções no *script*  
![Condicional simples](/prog_aulas/images_prog/condicionalsimples.jpg)  
2. A expressão lógica é calculada pelo interpretador Python. A condição só pode gerar somente um resultado dentre dois possíveis: **verdadeiro (*True*)** ou **falso** (*False*).
3. A instrução (ou bloco de instruções) interna é executa somente se a expressão lógica de sua sentença resultar verdadeira. Em caso contrário, o interpretador executa a instrução do *script* após a instrução condicional.
4. A sintaxe em Python da condicional simples é
      ```
      if <expressao logica>:  
            <instrucao ou bloco de instruções>
      ```  
      Os limites da instrução ou do bloco de instruções **internos (identificados pela indentação)** são detectados automaticamente pelo interpretador.  
5. A expressão lógica poderá conter um dos operadores lógicos, por exemplo, o operador *>*.
      ```
      if a>b:  
            maior = a
            menor = b
      ```  
      A expressão lógica `a>b` pode resultar *True* ou *False*, dependendo do valor de *a* e de *b*.
      Se o valor de *a* for maior do que *b* a expressão retornará como resultado *True* e as instruções dentro da indentação serão executadas.
      Em caso contrário, o interpretador irá a executar a instrução após o bloco de instruções indentado.  

### 3.2.2 Instrução condicional composta - *if ... else*  
A **instrução condicional composta** - executa uma ação (ou conjunto de ações) dependendo do resultado da avaliação de uma **expressão lógica (condição)** ser verdadeiro e outra ação (ou conjunto de ações) se for falso.

1. A sintaxe em Python da condicional composta é  
      ```
      if <expressão logica>:  
            <instrucao ou bloco 1 de instruções>
      else:
            <instrucao ou bloco 2 de instruções>
      ```  
2. A figura ilustra o fluxo de execução das instruções do *script*  
![Condicional composta](/prog_aulas/images_prog/condicionalcomposta.jpg)  
3. A interpretação da condicional composta leva à execução do bloco 1 de instruções se a expressão lógica for verdadeira e à execução do bloco 2 de instruções se a expressão lógica for falsa.  
Adaptando o exemplo anterior,  
      ```
      if a>b:  
            maior = a
            menor = b
      else:
           maior = b
           menor = a
      ```  
      Obviamente admite-se que os valores de *a* e *b* são diferentes.

### 3.2.3 Aninhamento de *ifs* - comando *elif*
Seja o seguinte uso de condicional composta  
```
if a>100:
      print('maior do que 100')
else:
      if a>50:
            print('a maior do que 50')
      else:
            print('a menor ou igual a 50')
```
O *script* possui dois comandos condicionais compostos *if...else* - a indentação evidencia que  
```
if a>50:
      print('a maior do que 50')
else:
      print('a menor ou igual a 50')
```  
está interno a 
```
if a>100:
      print('maior do que 100')
else:
      ...  
```  
Diz-se que os ***ifs* estão aninhados**.

O Python possui uma instrução composta cuja sintaxe é a seguinte:  
```
if <expressao logica 1>:  
      <instrucao ou bloco 1 de instruções>
elif <expressao logica 2>:
      <instrucao ou bloco 2 de instruções>
...
elif <expressao logica n>:
      <instrucao ou bloco de instruções n>
else:
      <instrucao ou bloco de instruções n+1>
```  
, cujo funcionamento é o seguinte:
1. O interpretador calcula a expressão lógica 1. Se resultar *True* executa o bloco 1, encerra a execução, passando ao próximo comando do *script*. Se resultar *False* calcula a expressão lógica 2.
2. Se a expressão lógica 2 resultar *True* o interpretador executa o bloco 2 de instruções e passa ao comando seguinte. Se resultar *False* calcula a expressão lógica seguinte.
3. O interpretador repete esse processo, calculando todas as expressões lógicas até obter resultado *True*, executando o respectivo bloco de instruções, ou seguindo adiante à próxima expressão lógica.
4. O último *else* é opcional. Se todas as expressões lógicas resultarem *False* nenhum comnado interno é executado e o interpretador segue ao próximo comando do *script* **se não for utilizado o último *else*.
5. Se o último *else* for utilizado, após todas as espressões lógicas resultarem *False* o comando (ou bloco de comandos) interno a ele será executado. após isso, o interpretador passa à instrução seguinte do *script*.
                  
## 3.3 Exercícios com condicionais simples e compostas  
1. Elaborar um programa na linguagem Python para ler dois números; calcular e escrever o maior dos números lidos. [*Script 3.1*](https://github.com/claytonjasilva/prog_exemplos/blob/main/maior2num.py)
2. Elaborar um programa na linguagem Python para ler a idade de uma pessoa. Se a idade for igual ou inferior a 10 anos, classificar a pessoa como 'criança'. Caso a idade seja inferior a 18 anos e superior a 10 anos, classificar como 'adolescente'. Em qualquer outro caso, classificar como 'adulto'. Apresentar a classificação atribuída. [*Script 3.2*](https://github.com/claytonjasilva/prog_exemplos/blob/main/classIdade.py)  
3. Elaborar um programa na linguagem Python para ler os nomes, pesos e altura de 3 pessoas; calcular e escrever os nomes de cada pessoa com IMC superior a 22 ('valor alto') ou com IMC inferior a 20 ('valor baixo'), seguido do respectivo IMC calculado. [*Script 3.3*](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcIMC3.py)  
**Obs.: Para reflexão** - É prático para escrever códigos se a linguagem possuir instruções que permitam repetir um bloco de instruções quando uma condição for verdadeira. O Python dispõe de **expressões compostas de repetição**.   
4. Elaborar um programa na linguagem Python para ler o nome e a idade de 3 animais; calcular e escrever o nome do animal mais velho. [*Script 3.4*](https://github.com/claytonjasilva/prog_exemplos/blob/main/maior3id.py)  

___
**[home](https://claytonjasilva.github.io/progPython_aulas.html)**

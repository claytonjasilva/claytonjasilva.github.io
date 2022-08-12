## Conceitos de programação procedural: condicionais simples e compostas  

### [Expressões lógicas (booleanas) e comparações](https://docs.python.org/pt-br/3/library/stdtypes.html#boolean-operations-and-or-not)

### Instruções condicionais simples, instruções condicionais compostas e expressões lógicas
1. As [instruções compostas](https://docs.python.org/pt-br/3/reference/compound_stmts.html) contêm (grupos de) outras instruções; Elas afetam ou controlam a execução dessas outras instruções de alguma maneira. Em geral, instruções compostas abrangem múltiplas linhas. 
2. Uma das instruções compostas é a **instrução condicional simples** - uma instrução condicional simples executa uma ação (ou conjunto de ações) dependendo do resultado da avaliação de uma **expressão lógica (condição)** ser verdadeiro ou falso  
3. A expressão lógica é calculada pelo interpretador Python e pode gerar somente um resultado dentre dois possíveis: **verdadeiro (*True*)** ou **falsa** (*False*) 
4. A instrução condicional simples executa uma instrução (ou bloco de instruções) se a expressão lógica de sua sentença resultar verdadeira. Em caso contrário, o interpretador não realiza nenhuma ação.
5. A sintaxe em Python da condicional simples é  
```
if expressao logica:  
      instrucao ou bloco de instruções
```  
Obs.: Na estrutura de execução, os limites da instrução ou do bloco de instruções **internos (identificados pela indentação)** são detectados automaticamente pelo interpretador.
6. A expressão lógica, como pode ser visto no link acima, poderá conter um dos operadores lógicos, por exemplo, o operador *>*.  
```
if a>b:  
      maior = a
      menor = b
```  
7. A sintaxe em Python da condicional composta é  
```
if expressao logica:  
      instrucao ou bloco de instruções 1
else:
      instrucao ou bloco de instruções 2
```  
A interpretação da condicional composta leva à execução do bloco 1 de instruções se a expressão lógica for verdadeira e à execução do bloco 2 de instruções se a expressão lógica for falsa.  

### Exercícios com condicionais simples e compostas  
1. Elaborar um programa na linguagem Python para ler dois números; calcular e escrever o maior dos números lidos.
2. Elaborar um programa na linguagem Python para ler a idade de uma pessoa. Se a idade for igual ou inferior a 10 anos, classificar a pessoa como 'criança'. Caso a idade seja inferior a 18 anos e superior a 10 anos, classificar como 'adolescente'. Em qualquer outro caso, classificar como 'adulto'. Apresentar a classificação atribuída.
3. Elaborar um programa na linguagem Python para ler um texto digitado pelo usuário. O programa deverá apresentar o texto digitado. O limite de tamanho do texto é de 20 caracteres. O programa deverá informar se o texto for superior ao limite de caracteres permitido e solicitar ao usuário que o redigite novamente. O usuário tem três oportunidades para digitar o texto. Caso o usuário ultrapasse as três oportunidades o programa deverá apresentar como saída 'texto inválido'.
4. Elaborar um programa na linguagem Python para ler os nomes, pesos e altura de 3 pessoas; calcular e escrever os nomes das pessoas com imc superior a 22 ('valor alto') e inferior a 20 ('valor baixo').
5. Elaborar um programa na linguagem Python para ler o nome e a idade de 3 animais; calcular e escrever o nome do animal mais velho.   

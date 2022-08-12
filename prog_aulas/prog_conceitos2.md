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
1. Elaborar um programa na linguagem Python para ler dois números; calcular e escrever o maior dos números lidos. [maior2num.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/maior2num.py)
2. Elaborar um programa na linguagem Python para ler a idade de uma pessoa. Se a idade for igual ou inferior a 10 anos, classificar a pessoa como 'criança'. Caso a idade seja inferior a 18 anos e superior a 10 anos, classificar como 'adolescente'. Em qualquer outro caso, classificar como 'adulto'. Apresentar a classificação atribuída. [classIdade.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/classIdade.py)  
A solução apresentada utiliza uma instrução condicional composta disponível na sintaxe do Python, que possui staisfaz a regra
```
if expressao logica 1:  
      instrucao ou bloco de instruções 1
elif expressao logica 2:
      instrucao ou bloco de instruções 2
...
elif expressao logica n:
      instrucao ou bloco de instruções n
else:
      instrucao ou bloco de instruções n+1
```  
**Obs. O uso do else é opcional**  
3. Elaborar um programa na linguagem Python para ler os nomes, pesos e altura de 3 pessoas; calcular e escrever os nomes de cada pessoa com IMC superior a 22 ('valor alto') ou com IMC inferior a 20 ('valor baixo'), seguido do respectivo IMC calculado. [calcIMC3.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcIMC3.py)  
**Obs.: Para reflexão** - É prático para escrever códigos se a linguagem possuir instruções que permitam repetir um bloco de instruções quando uma condição for verdadeira. O Python dispõe de **expressões compostas de repetição**.   
4. Elaborar um programa na linguagem Python para ler o nome e a idade de 3 animais; calcular e escrever o nome do animal mais velho. [maior3id](https://github.com/claytonjasilva/prog_exemplos/blob/main/maior3id.py)  

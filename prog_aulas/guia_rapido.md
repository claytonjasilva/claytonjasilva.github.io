# Guia rápido Python - Programação 2022.1
<a name="ancora"></a>
- [Operadores](#ancora1)
- [Instruções simples e compostas](#ancora2)
- [Entrada e saída](#ancora3)
- [Conversão de tipos](#ancora4)
- [Funções](#ancora5)
- [Listas](#ancora6)
- [Strings](#ancora7)
- [Tuplas](#ancora8) 
- [Outras](#ancora9)
   - [Operações comuns a listas, strings e tuplas](#ancora10)

<a id="ancora1"></a>
## Operadores
1. **Aritméticos**  
   Sintaxe:  
   `+`, adição  
   `-`, subtração  
   `*`, multiplicação  
   `/`, divisão
   `//`, divisão inteira  
   `%`, módulo ou resto da divisão inteira  
    `**` , potenciação  
    Exemplos: `x+y`, `4-z`, `8*5`, `x/4`, `x//4`, `x%4`, `x ** 2`  
    Finalidade: implementar operação aritmética.
2. **Lógicos de comparação**  
  Sintaxe:  
  `>`, maior  
  `<`, menor  
  `>=`, maior ou igual  
  `<=`, menor ou igual  
  `==`, igual  
  `!=`, diferente  
  Exemplos: `x>y`, `4<z`, `x==5`, `x!=4`, ...  
  Finalidade: realizar a comparação e retornar *True* (verdadeiro) ou *False* (falso).  
3. **Lógicos**  
  Sintaxe:  
  `or`, disjunção - ou  
  `and`, conjunção - e  
  `not`, negação  
  Exemplos: `x or y`, `x and y`, `not x`, ... onde x, y assumem os valores *True* ou *False* 
  Finalidade: realizar operações lógicas entre expressões que retornam *True* (verdadeiro) ou *False* (falso).  
4. **Pertinência**  
   Sintaxe: `in` ou `not in`  
   Exemplos:  
   ```
   x = 2
   k = 5
   lista = [1, 2, 3]
   y = x in lista
   w = k in lista
   ```  
   retorna *True* para *y*, pois 2 pertence a lista; e retorna *False* para *w*. O operador `not in` retorna a negação de `in`.  
   Finalidade: determinar se um elemento pertence ou não a um objeto

[Topo](#ancora)

<a id="ancora2"></a>
## Instruções simples e compostas 
1. **Atribuição**  
   Sintaxe: `var = var` ou `var = numero` ou `var = expressão`  
   Exemplo: `x = 24`  
   Finalidade: atribuir um valor à direita do sinal da equação a uma variável à esquerda do sinal. No exemplo, *x* **recebe** 24.
2. **Comando if**  
   Sintaxe:  
   ```
   if cond:
      instrução ou bloco de instruções
   ```  
   Exemplo:  
   ```
   if x<0:
      print(x)
   ```
   Finalidade: Executa a instrução ou o bloco de instruções somente se a condição for verdadeira.  
3. **Comando if...else...**  
   Sintaxe:  
   ```
   if cond:
      instrução ou bloco de instruções 1
   else:
      instrução ou bloco de instruções 2
   ```
   Exemplo:
   ```
   if x<0:
      print(x)
   else:
      print(y)
   ```
   Finalidade: Executa o bloco 1 de instruções somente se a condição for verdadeira. Se a condição for falsa executa o bloco 2 de instruções.  
4. **Comando if...elif...else...**  
   Sintaxe:
   ```
   if cond 1:
      instrução ou bloco de instruções 1
   elif cond 2:
      instrução ou bloco de instruções 2
   ...
   elif cond n:
      instrução ou bloco de instruções n
   else:
      instruções C
   ```
   Exemplo:
   ```
   if x<16:
      print(x)
   elif x<25:
      print(x+16)
   else:
      print(x+25)
   ```
   Finalidade: Executa o bloco 1 de instruções somente se a condição 1 for verdadeira. Se a condição for falsa, testa a condição 2. Se for verdadeira, executa o bloco 2 de instruções, assim por diante. **O *else...* é opcional**   
5. **Comando while...**  
   Sintaxe:
   ```
   while cond:
      instrução ou bloco de instruções
   ```
   Exemplo:
   ```
   x = 1
   while x<16:
      print(x)
      x = x + 1
   ```
   Finalidade: Executa o bloco de instruções enquanto a condição for verdadeira e volta a testa a condição. Se a condição for falsa, prossegue para à execução da instrução seguinte ao *while*  
6. **Comando for...**  
   Sintaxe:
   ```
   for var in range(limite):
      bloco de instruções
   ```  
   Exemplo:
   ```
   for x in range(16):
      print(x)
   ```
   Finalidade: Executa o bloco de instruções em um número de *loops* controlado por x. Em cada *loop* o valor de *x* é incrementado em 1, dentro dos limites de 0 a (limite-1)  
  7. **Função range**  
   Sintaxe: `range(stop)` ou `range(start, stop)` ou `range(start, stop, step)`  
   Exemplo:
      ```
      for x in range(1,16):
         print(x)
      ```
      Finalidade: retorna um objeto interável de inteiros que inicia em *start*, incrementa em *step* até o limite de *stop*   

[Topo](#ancora)  

<a id="ancora3"></a>
## Entrada e saída
1. **Escrever uma saída**  
   Sintaxe: `print(lista de argumentos)`, em que `lista de argumentos` possui a sintaxe `var, ...`, `número, ...` ou combinação de variáveis e números
   Exemplo: `print(x)`    
   Finalidade: apresentar no 'console' o valor armazenado em *x*. No exemplo, o valor guardao em *x* será 'escrito' na tela de 'console'.
2. **Ler entrada**  
   Sintaxe: `input(texto)`, em que `texto` é uma cadeia de caracteres delimitada por aspas duplas `"` ou aspas simples `'`   
   Exemplo: `x=input("Digite o valor")`  
   Finalidade: ler o valor digitado pelo usuário no 'console', após ele teclar *enter* e armazena que foi digitado **como tipo texto** em *x*. No exemplo, o texto digitado pelo usuário será armazenado em *x*.  

[Topo](#ancora) 

<a id="ancora4"></a>
## Conversão de tipos
1. **Converter para inteiro**  
   Sintaxe: `int(texto)`, em que o *texto* deve ser uma cadeia de dígitos numéricos 0-9; ou `int(float)`, em que o *float* é um número de poonto flutuante; ou `int(var)`, em que a variável é do tipo *string* com valor de dígitos numéricos ou do tipo float   
   Exemplo: `y=int(x)`  
   Finalidade: converter um valor texto ou float para um número inteiro. No exemplo, o valor de *x* é convertido para inteiro - por causa da atribuição, *y* recebe o número convertido.  
2. **Converter para ponto flutuante** - usa-se **ponto flutuante** para a representação de números fracionários no computador  
   Sintaxe: `float()`, similar ao uso do `int`  
   Exemplo: `y=float(x)`  
   Finalidade: converter um valor para um número de ponto flutuante. No exemplo, o valor de *x* é convertido para ponto flutuante  

[Topo](#ancora)

<a id="ancora5"></a>
## Funções
1. **Definição de função**  
   Sintaxe:   
   ```
   def nome_da_função(parâmetros):
      bloco de instruções
      return valor
   ```  
   em que os parâmetros são a lista das variáveis, `var, ...`  
   Exemplo:
   ```
   def soma(a,b):
      c = a+b
      return c
   ```
   Finalidade: criar e definir as instruções executadas por uma função.  
2. **Retornando tupla**  
   Sintaxe: `return <valores ou variáveis separadas por vírgula>`  
   Exemplo:  
   ```
   def add_mult(n,m):
      a = n * m
      b = n + m
      retiurn a , b
   ```  
   retorna a tupla (a, b).  
   Finalidade: criar uma tupla por função.  

[Topo](#ancora)

<a id="ancora6"></a>
## Listas
1. **Inicializar lista vazia**  
   Sintaxe: `lista=[]`  
   Exemplo: `nota=[]`  
   Finalidade: criar uma lista vazia.
2. **Inicializar lista não vazia**  
   Sintaxe: `lista=[item, item, ...]`  
   Exemplo: `nota=[8,9,10,3]`  
   Finalidade: criar e inicializar uma lista com seus elementos.
3. **Elemento de uma lista**  
   Sintaxe: `nome[indice]`  
   Exemplo: `nota[0]`  
   Finalidade: associa ao dado de nota na posição [0]
4. **Fatiar listas** 
   Sintaxe: `nome da lista[indice inferior:indice superior]` ou `nome da lista[:indice superior]` ou `nome da lista[indice inferior:]`  
   Exemplo:  
   ```
   nota = [1,4,2,8,8]
   print(nota[:1], nota[1:3), nota[2:])
   ```  
   produz as listas [1,4] [4,2,8] [2,8,8]  
   Finalidade: tomar e manipular trechos de lista  
5. **Método *append***  
   Sintaxe: `lista.append(item)`  
   Exemplo: 
   ```
   nota = []
   nota.append(0)
   ```  
   insere o valor 0 na lista vazia.  
   Finalidade: método para inserir elemento após o último elemento da lista.  
6. **Método *extend***  
   Sintaxe: `lista.extend(lista)`  
   Exemplo:
   ```
   nota = [1,2,5,6]
   nota.extend([4,6])
   ```
   produz a lista [1,2,5,6,4,6].  
   Finalidade: método para incluir uma lista argumento no fim da lista  
7. **Método *sort()***  
   Sintaxe: `lista.sort()`  
   Exemplo:
   ```
   nota = [4,1,0,3]
   print(nota.sort())
   ```
   produz a lista [0,1,3,4].  
   Finalidade: método para ordenar crescentemente a lista.
8. **Método *insert***
   Sintaxe: `lista.insert(i,elemento)`  
   Exemplo: 
   ```
   lista = [1,2.4,6.7,3]
   lista.insert(1,8)
   ```
   produz a lista [1,8,2.4,6.7,3]  
   Finalidade: método para inserir um elemento em uma posição i.
9. **Método *pop***  
   Sintaxe: `lista.pop()`  
   Exemplo: 
   ```
   lista = [1,2,4,6,7,3]
   x = lista.pop(4)
   ```
   retorna 7 e atribui a x e produz a lista [1,2,4,6,3]  
   Finalidade: método para remove e retorna o elemento da posição i.  
10. **Método *remove***  
   Sintaxe: `lista.remove(elemento)`  
   Exemplo:  
   ```
   lista = [1,2,4,2,7,3]
   x = lista.remove(2)
   ```  
   produz a lista [1,4,2,7,3]  
   Finalidade: método para remover o primeiro *elemento* na lista.  
11. **Função *sum***  
   Sintaxe: `sum(lista)`  
   Exemplo: 
   ```
   lista = [1,2,4,2,7,3]
   x = sum(lista)
   ```
   calcula a soma igual a 19 e atribui à variável x  
   Finalidade: função para retornar a soma todos os elementos da lista.  
[Topo](#ancora)

<a id="ancora7"></a>
## Strings  
1.  **Delimitação de strings - cadeias de caracteres**  
   Sintaxe: `'texto'` ou `"texto"`  
   Exemplo: `"Digite o valor"`  
   Finalidade: Definir uma cadeia de caracteres  
2. **Caracteres de escape**

| Caractere de escape | Significado |
| ------------------- | ----------- |
| \n |  Nova linha. Move o cursor para o início da próxima linha. |
| \t | Tabulação Horizontal. Move o cursor para a próxima parada de tabulação (tab). |
| \r | Retorno de carro. Move o cursor para o início da linha atual; não avança para a próxima linha. |
| \b | Backspace. Retrocede o cursor um caractere. |
| \a | Alerta. Emite o som de sino do sistema. |
| \ | Barra invertida (Backslash). |
| \\" | Caractere de aspas duplas. |
| \\' | Caractere de aspas simples. |

[Topo](#ancora)

<a id="ancora8"></a>
## Tuplas
1. **Criação**  
   Sintaxe: `tupla = (<elementos separados por vírgula>)` ou `tupla = <elementos separados por vírgula`  
   Exemplo: `vogais = ('a','e','i','o','u')` ou `vogais = 'a','e','i','o','u'`  
   Finalidade: criar a tupla  
2. **Função *tuple***  
   Sintaxe: `tupla = tuple(<objeto>)`  
   Exemplo: `tupla = tuple([1,2,3])`  
   produz a tupla (1,2,3)  
   Finalidade: criar a tupla a partir da lista  
[Topo](#ancora)

<a id="ancora9"></a>
## Outras
1. **Comentário:**  
   Sintaxe: `#`, seguido pelo texto de comentário  
   Exemplo: `# texto explicativo do código`   
   Finalidade: proporcionar melhor legibilidade e facilitar a manutenção do código
2. **Arredondar um número de ponto flutuante**  
   Sintaxe: `round(x,ndig)`  
   Exemplo: `y=round(x,1)`  
   Finalidade: Retorna o número arredondado para a precisão de *n* dígitos após o ponto decimal. Se *ndig* for omitido retornará o inteiro mais próximo.  
3. **Importando pacotes**  
   Sintaxe: `import pacote`  
   Exemplo: `import math`  
   Finalidade: importa todos os módulos do pacote
   6. **Importando módulos de pacotes**
   Sintaxe: `from pacote import módulo`  
   Exemplo: `from math import sqrt`  
   Finalidade: importa somente o módulo do pacote  
 <a id="ancora10"></a>
 4. **Operações comuns a listas, strings e tuplas**

| Operação | Resultado | Observação |
| -------- | --------- | ---------- |
| `x in s` | `True` se x está em s, `False` caso contrário | Para *strings* `"gg" in "eggs"` retorna *True* |
| `x not in s` | `False` se x está em s, `True` caso contrário | Para *strings* `"gg" not in "eggs"` retorna *False* |
| `s + t` | Concatena s com t | Concatenar objetos imutáveis gera um objeto imutável |
| `s * n` ou `n * s`| Gera uma sequência s repetida n vezes | Se n igual a zero gera sequência vazia |
| `s[i]`,`s[i:j]`, ... | Define elemento ou intervalo de elementos de s |  |
| `len(s)` | Retorna tamanho da sequência |  |
| `max(s)` | Retorna maior valor |  |
| `min(s)` | Retorna menor valor |  |
| `s.index(x)` | Retorna a posição da primeira ocorrência de x em s |  |
| `s.count(x)` | Retorna o número de ocorrências de x em s |  |
   
[Topo](#ancora)

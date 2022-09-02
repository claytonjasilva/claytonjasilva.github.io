## Listas 

### 1. Sobre listas...
- Constituem um dos tipos de **sequências**: conjuntos **ordenados** finitos de **elementos**, **indexados** por números não negativos.   
- Tratam-se de um tipo de sequência **mutável**, ou seja, que pode ser alterada após ser criada. 
- Definem uma **ordenação** posicional dos objetos, da esquerda para a direita. 
- Possuem **comprimento variável**, ou seja, pode crescer e diminuir.
- Podem conter qualquer tipo de objeto - os elementos não precisam ser do mesmo tipo, mas **geralmente** são usadas com elementos do mesmo tipo - estrutura **homogênea**.
- Admitem **aninhamento arbitrário**, ou seja, podem ser construídas listas de listas.

### 2. Sintaxe  
As listas são definidas por elementos entre **colchetes**, separados por **vírgulas**, como `[e1, e2, e3, ..., en]`  

#### 2.1 Criação de listas
Colocando os elementos entre colchetes  
```
nome da lista = [ lista de elementos ]
```
Por exemplo,  
```
numero = [1,3,6,7]
```
O elemento 6 ocupa a posição indexada [2]. O elemento 1 ocupa a posição [0].  

Criando uma **lista vazia** e inserindo elementos pelo **método** `append()`, na forma `nome da lista.append(elemento)` - que insere o elemento no final da lista.  Por exemplo,
```
numero = []
numero.append(1)
numero.append(3)
numero.append(6)
numero.append(7)
```
A lista é criada vazia. O método insere o novo dado após o último.  

Toda lista é designada por um nome, de forma semelhante a uma variável simples.   
Cada elemento de uma lista é referenciado pelo nome, seguido pelo **índice** (entre colchetes), que sinaliza a posição que ocupa, a partir do índice 0 até o índice n-1, na forma `nome da lista[indice do elemento]`. Nos exemplos, o elemento *6* ocupa a posição *2*, logo pode ser tratado por `numero[2]`.    
O comprimento de uma sequência n possui elementos cujos índices variam de 0 a n-1. Nos exemplos, a lista *numero* possui 4 elementos, indexados do índice 0 ao índice 3.  
Pode-se utilizar o operador de **fatias** para referenciação a um grupo de elementos da lista.
```
nome da lista[indice inferior:indice superior]
```

```
nome da lista[:indice superior]
```

```
nome da lista[indice inferior:]
```
Nos exemplos, `numero[1:3]` refere-se aos elementos *numero[1]* ao *numero[3]*; `numero[:1]` refere-se aos elementos *numero[0]* ao *numero[1]*; e `numero[2:]` refere-se aos elementos *numero[2]* ao *numero[3]*.  
Cada elemento da lista pode ser tratado como uma variável simples do seu respectivo tipo. Por exemplo, *pessoa[1]* é um inteiro e *pessoa[2]* é um ponto flutuante na lista `pessoa = ['pedro',18,73.2]`.  
Pode-se aninhar listas, ou seja, criar uma lista que contém listas como elementos. Por exemplo, `pessoa = ['pedro',[98,1.89]]`. O elemento *pessoa[1]* é a lista *[98,1.89]*. Em consequência, *pessoa[1][0]* refere-se ao número 98, ou seja, ao elemento na posição [0] de *pessoa[1]*.    

#### 2.2 Operações com listas
**Concatenação**: operador `+`. Por exemplo, `[1,2,3] + [9,3]` resulta na lista `[1,2,3,9,3]`.  
**Repetição**: operador `*`. Por exemplo, `[1,2]*2` resulta na lista `[1,2,1,2]`.  

#### 2.3 Alguns métodos e funções sobre listas  
1. Método `lista.append(elemento)`: insere um novo elemento ao fim da lista. Por exemplo, na *lista = [1,2.4,6.7,3]*, `lista.append(4)` produz *lista = [1,2.4,6.7,3,4]*. 
2. Método `lista.extend(lista argumento)`: inclui uma lista argumento no fim da lista. Por exemplo, na *lista = [1,2.4,6.7,3]*, `lista.extend([4,2.3])` produz *lista = [1,2.4,6.7,3,4,2.3]*.  
3. Método `lista.sort()`: ordena crescentemente a lista. Por exemplo, na *lista = [1,2.4,6.7,3]*, `lista.sort()` produz *lista = [1,2.4,3,6.7]*.  
4. Método `lista.insert(i,elemento)`: insere um elemento em uma posição i. Por exemplo, na *lista = [1,2.4,6.7,3]*, `lista.insert(1,8)` produz *lista = [1,8,2.4,6.7,3]*. 
5. Método `lista.pop(i)`: remove e retorna o elemento da posição i. Por exemplo, na *lista = [1,2.4,6.7,3]*, `x = lista.pop(1)` produz *lista = [1,6.7,3]* e *x = 2.4*.  
6. Método `lista.remove(elemento)`: remove o primeiro elemento na lista. Por exemplo, na *lista = [1,2.4,6.7,3]*, `lista.remove(6.7)` produz *lista = [1,2.4,3]*.
7. Função `sum(lista)`: retorna a soma todos os elementos da lista. Por exemplo, na *lista = [1,2.4,6,3]*, `sum(lista)` retorna a soma de seus elementos, *12.4*.  
8. Função `len(lista)`: retorna o tamanho, ou seja, o número de elementos da lista. Por exemplo, na *lista = [1,2.4,6.7,3]*, `len(lista)` retorna o número de seus elementos, *4*.  
Mais métodos podem ser obtidos em  
 *<https://docs.python.org/pt-br/3/tutorial/datastructures.html>* ou  
 *<https://docs.python.org/3/library/stdtypes.html#index-23>*

#### 2.4 Considerações adicionais
**Percorrendo os elementos da lista**: é possível percorrer os elementos de uma lista com a instrução composta de repetição *for*, da maneira abaixo  
```
for variavel in lista:
```
Por exemplo, seja a *lista = [1,3,7,2,4]*, o código
```
for x in lista:
 print(x)
```
irá escrever todos os elementos da lista.  

**Compreensão de lista**: é possível usar uma estrutura sintática, por exemplo, para **criar uma nova lista** com um código sobre uma lista existente.  
Pode-se usar para criar uma nova lista a forma sintática ilustrada abaixo
```
t = [j for j in range(N)]
print(t)
```
escreve a lista [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].  

**Matrizes**: como é possível aninhar listas, é possível construir matrizes a partir de uma lista com sub-listas aninhadas. Por exemplo,  
```
matriz =[[1,2,3],[4,5,6],[7,8,9]]
```
é uma lista cujo primeiro objeto, *matriz[0]* é a lista *[1,2,3]*, logo *matriz[0][2]* retorna o elemento *3*. 

#### Exercícios com listas  
1. Elaborar um programa na linguagem Python que leia e armazene os dados de um grupo de 30 pessoas: nome, idade, peso, altura. Para a idade de cada pessoa lida, o programa deverá recomendar exercícios do tipo A, para pessoas acima de 60 anos; do tipo B, para pessoas entre 40 e 60 anos; do tipo C, para pessoas entre 15 e 40 anos; e do tipo D, para crianças (idade inferior a 15 anos). Com base no peso e na altura, o programa deve calcular o IMC (dado por peso/altura^2), determinando as dietas: 'magra', IMC superior a 25; 'normal', IMC entre 19 e 25; e 'gorda', IMC inferior a 19. O programa deverá armazenar a dieta de cada pessoa e o respectivo IMC.  [listaDieta.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/listaDieta.py)
2. Elaborar um programa na linguagem Python que leia e armazene as matrículas e notas de um grupo de 20 alunos. O programa deverá calcular a média das notas lidas e o desvio padrão, usando a fórmula  
![desvio](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/prog_aulas/desvio.png)  
onde MA é a média aritmética. Deverá escrever somente as matrículas dos alunos com nota inferior à nota média.   [listaDevPad.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/listaDevPad.py)
3. Elaborar um programa na linguagem Python que leia uma sequência de vários números inteiros não nulos, até que o usuário digite 0. Para cada número da sequência lida o programa deverá determinar: (i) a soma da série {0,1,2, ..., N}; (ii) a soma da série {1/N,2/N-1, ..., N/1}. O programa deverá escrever todos os números superiores ao primeiro número lido. Deverá escrever também todos os números inferiores ao último número lido antes do 0. [listaSerie.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/listaSerie.py)
4. Elaborar um programa na linguagem Python para cadastrar os códigos de um grupo de clientes de uma loja e o valor das respectivas compras realizadas em um determinado mês. O código 0 significa que não será cadastrado novo cliente. Após os clientes serem cadastrados, o usuário poderá fazer uma consulta ao sistema, digitando um valor qualquer. O sistema deverá escrever os códigos dos clientes que realizaram compras acima desse valor.
5. Elaborar um programa na linguagem Python para registrar os lançamentos contáveis de uma empresa ao longo de um ano. O programa deverá ler o CNPJ da empresa no início do ano juntamente com o saldo de caixa do mês anterior. Deverá cadastrar, mês a mês, a receita e a despesa. Ao final do ano, o programa deverá apresentar o extrato do balanço contábil, contendo o mês, receita, despesa, saldo parcial.  

### Outra sequência importante: as cadeias de caracteres ou *[Strings>>](prog_str.md)*.

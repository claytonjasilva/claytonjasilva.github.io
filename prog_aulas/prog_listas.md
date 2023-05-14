# 6. Listas

## 6.1 Conceitos gerais
- Constituem um dos tipos de **sequências**: conjuntos **ordenados** finitos de **elementos**, **indexados** por números não negativos.   
- Tratam-se de um tipo de sequência **mutável**, ou seja, que pode ser alterada após ser criada. 
- Definem uma **ordenação** posicional dos objetos, da esquerda para a direita. 
- Possuem **comprimento variável**, ou seja, pode crescer e diminuir.
- Podem conter qualquer tipo de objeto - os elementos não precisam ser do mesmo tipo, mas **geralmente** são usadas com elementos do mesmo tipo - estrutura **homogênea**.
- Admitem **aninhamento arbitrário**, ou seja, podem ser construídas listas de listas.

## 6.2 Sintaxe  
As listas são definidas por elementos entre **colchetes**, separados por **vírgulas**, como `[e1, e2, e3, ..., en]`  

### 6.2.1 Criação de listas
1. Uma forma comum é **inscrever os elementos entre colchetes e atribuir à lista um nome**, como descrito abaixo  
```
<nome da lista> = [lista de elementos]
```  
Por exemplo,  
```
numero = [1,3,6,7]
```  
O elemento 6 ocupa a posição indexada [2]. O elemento 1 ocupa a posição [0].  

2. Uma segunda forma, muito útil em vários casos, é **usar o que se designa como compreensão de lista**, como descrito abaixo
```
<nome da lista> = [<expressão da lista> for <variável de controle> in <comando range>]
```  
Quando a regra de formação dos elementos da lista **não é arbitrária**, ou seja, os elementos podem ser definidos por meio de uma expressão, 
usar a compreensão de lista produz um *script* mais sintético.  

O caso mais simples é a sequência *{1,2,3,4,...,20}*, cuja criação como lista seria  

`num = [i for i in range(1,21)]`.    

Complicando um pouco, admita a lista da sequência definida por $x_i=2.i+3$ com 10 termos, sendo o primeiro termo x<sub>1</sub>=5, logo *i=1*.  
Portanto *i* varia de 1 a 10, produzindo a sequência será *{5, 7, 10, ..., 23}* e poderá ser criada por  

`termo = [2*i+3 for i in range(1,11)]`.

3. Algumas ocasiões pode ser necessário criar uma **lista vazia**, para **posteriormente atribuir os elementos da lista**.  
Para isso, pode-se inserir elementos utilizando o **método** `append()`, na forma  

```
<nome da lista>.append(<elemento>) 
```
, que insere o elemento no final da lista.  

Por exemplo,  
```
numero = []
numero.append(1)
numero.append(3)
numero.append(6)
numero.append(7)
```

A lista é criada vazia. **O método *append* insere o novo dado após o último**.  

4. Pode-se também **ler os dados e atribuí-los a uma lista inicialmente vazia**  
Admitindo-se uma lista com tamanho *N*, a forma poderia ser   

```
numero = []
[numero.append(int(input('Digite a entrada: '))) for i in range(N)]
```
, em que o valor de *N* deve ter sido definido a priori, obviamente.  
**Se a lista não for criada preliminarmente o interpretador irá acusar o erro**.

5. Pode-se também criar uma **lista com vários elementos iguais**  
Para isso, pode-se criar a lista unitária e multiplicar o número de elementos, na forma  
```
<nome da lista> = [<valor>] * <número de elementos> 
```  
Por exemplo,  
```
numero = [1] * 3
```
, produzindo a lista *numero=[1, 1, 1]*.

6. Muitas vezes é necessário criar uma lista de uma **uma série com elementos recursivos**    
A lista é composta por elementos cujos valores são definidos recursivamente, isto é, o valor do elemento de ordem *n* depende de *n-1*.  
Por exemplo, seja a série $x_i=3.x_{i-1}+4$. Admitindo que o valor inicial da série é x<ub)1</sub>, igual a 0.     
Nesse caso, pode-se utilizar a compreensão de lista, lembrando que é necessário **inicializar a lista com um elemento, igual ao primeiro da lista**.  
A forma pode ser    

```
S = [0] # Cria a lista unitária
[S.append(3*S[i-1]+4) for i in range(1,10)]
```
, produzindo-se a série com 10 elementos *S={0, 4, 18, ...,}*. 

### 6.2.2 Observações gerais
- Toda lista é designada por um nome, de forma semelhante a uma variável simples.   
- **Cada elemento** de uma lista é referenciado pelo nome, seguido pelo **índice** (entre colchetes), que sinaliza a ordem que ocupa, 
**a partir do índice *0* até o índice *n-1***, na forma `nome da lista[indice do elemento]`. Na lista `numero=[1, 2 , 6, 4]`, o elemento *6* ocupa a posição *2*, logo pode ser tratado por `numero[2]`.    
- Pode-se utilizar o operador de **fatias** para referenciação a um grupo de elementos da lista.  
  ```
  nome da lista[indice inferior:indice superior]
  ```  
  Inclusive os elementos dos índicessão considerados. Por exemplo, na lista numero=[1,2,3,4], `print(numero[1:2])` resulta `[2, 3]`.
  
  ```
  nome da lista[:indice superior]
  ```
  Fatia a lista a partir do índice 0 até o índice superior (inclusive). Por exemplo, na lista numero=[1,2,3,4], `print(numero[0:2])` resulta `[1, 2, 3]`.
  
  ```
  nome da lista[indice inferior:]
  ```
  Fatia a lista a partir do índice inferior  (inclusive) até o último elemento. Por exemplo, na lista numero=[1,2,3,4], `print(numero[2:])` resulta `[3, 4]`.
  
- Cada elemento da lista pode ser tratado como uma variável simples do seu respectivo tipo. Por exemplo, *pessoa[1]* é um inteiro e *pessoa[2]* é um ponto flutuante na lista `pessoa = ['pedro',18,73.2]`.  
- Pode-se **aninhar listas**, ou seja, criar uma lista que contém listas como elementos. Por exemplo, `pessoa = ['pedro',[98,1.89]]`. O elemento *pessoa[1]* é a lista *[98,1.89]*. Em consequência, *pessoa[1][0]* refere-se ao número 98, ou seja, ao elemento na posição [0] de *pessoa[1]*.    

## 6.3 Operações, métodos e funções de listas

### 6.3.1 Operações

| Operação | Operador | Exemplo |
| - | - | - |
| Concatenação | `+` | Por exemplo, `[1,2,3] + [9,3]` resulta na lista `[1,2,3,9,3]` |  
| Repetição | `*` | Por exemplo, `[1,2]*2` resulta na lista `[1,2,1,2]` |  

### 6.3.2 Métodos e funções

| Operação | Objetivo | Exemplo |
| - | - | - |
| `lista.append(elemento)` | insere um novo elemento ao fim da lista | Por exemplo, na *lista = [1,2.4,6.7,3]*, `lista.append(4)` produz *lista = [1,2.4,6.7,3,4]* |
| `lista.index(elemento)` | devolve a posição do elemento na lista | Por exemplo, na *lista = [1,2.4,6.7,3]*, `lista.index(4)` retorna 2 |
| `lista.extend(lista argumento)` | inclui uma lista argumento no fim da lista | Por exemplo, na *lista = [1,2.4,6.7,3]*, `lista.extend([4,2.3])` produz *lista = [1,2.4,6.7,3,4,2.3]*.  |
| `lista.sort()` | ordena crescentemente a lista | Por exemplo, na *lista = [1,2.4,6.7,3]*, `lista.sort()` produz *lista = [1,2.4,3,6.7]* |  
| `lista.insert(i,elemento)` | insere um elemento em uma posição i | Por exemplo, na *lista = [1,2.4,6.7,3]*, `lista.insert(1,8)` produz *lista = [1,8,2.4,6.7,3]* |
| `lista.pop(i)` | remove e retorna o elemento da posição i | Por exemplo, na *lista = [1,2.4,6.7,3]*, `x = lista.pop(1)` produz *lista = [1,6.7,3]* e *x = 2.4* |  
| `lista.remove(elemento)` | remove o primeiro elemento na lista | Por exemplo, na *lista = [1,2.4,6.7,3]*, `lista.remove(6.7)` produz *lista = [1,2.4,3]* |
| `sum(lista)` | retorna a soma todos os elementos da lista | Por exemplo, na *lista = [1,2.4,6,3]*, `sum(lista)` retorna a soma de seus elementos, *12.4* |  
| `len(lista)` | retorna o tamanho, ou seja, o número de elementos da lista | Por exemplo, na *lista = [1,2.4,6.7,3]*, `len(lista)` retorna o número de seus elementos, *4* |

**Mais métodos podem ser obtidos em**   
 1. *<https://docs.python.org/pt-br/3/tutorial/datastructures.html>* ou  
 2. *<https://docs.python.org/3/library/stdtypes.html#index-23>*

### 6.3.3 Considerações adicionais
1. **Percorrendo os elementos da lista**: é possível percorrer os elementos de uma lista com a instrução composta de repetição *for*, da maneira abaixo  

```
for <variavel> in <lista>:
```

Utiliza-se o **operador *in*** de pertencimento. Por exemplo, seja a *lista = [1,3,7,2,4]*, o código  

```
for x in lista:
 print(x)
```
irá escrever todos os elementos da lista.  

2. Operar com **matrizes**: como é possível aninhar listas, é possível construir matrizes a partir de uma lista com sub-listas aninhadas. 

Por exemplo,  
```
matriz =[[1,2,3],[4,5,6],[7,8,9]]
```
é uma lista cujo primeiro objeto, *matriz[0]* é a lista *[1,2,3]*, logo *matriz[0][2]* retorna o elemento *3*. 

## 6.4 Exercícios com listas  
1. Elaborar um programa na Linguagem Python que, dada a *lista=[1.5, 6.6, 7, 8.9, 15,12.56]*, leia um número qualquer digitadao pelo usuário e 
escreva uma mensagem informando se o número lido é maior ou menor do que a soma dos números da lista.  
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoPythonlista1.py)
2. Elaborar um programa em Python para criar uma lista contendo os 20 números pares a partir de um número digitado pelo usuário.  
Se o número digitado pelo usuário não for par, o programa deve solicitar que o usuário digite um número válido.  
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoPythonlista2.py)
3. Elaborar um programa em Python para cadastrar uma lista contendo as notas de um grupo de 20 alunos digitadas pelo usuário.  
Escrever as notas inferiores à média da turma.   
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoPythonlista3.py)  
4. Elaborar um programa em Python para cadastrar uma lista contendo a idade de um grupo de 15 pessoas digitada pelo usuário.  
Escrever as 10 maiores idades em ordem crescente. 
5. Elaborar um programa em Python para cadastrar duas listas, uma contendo o nome e outra contendo a idade de um grupo de 15 pessoas.    
O nome e a idade serão digitados pelo usuário.  
Escrever os nomes dos alunos com nota inferior à média da turma.
6. Elaborar um programa em Python para cadastrar uma lista contendo 10 nomes de pessoas, digitados pelo usuário.  
Em seguida, o programa deverá permitir que o usuário digite um nome qualquer para cadastrar 
o tipo sanguineo válido de uma das pessoas cadastradas.  
Se o usuário digitar uma pessoa não cadastrada o programa deverá informar com a mensagem PESSOA NAO CADASTRADA.
Se a pessoa tiver o nome cadastrado na lista, o programa deverá cadastrar o respectivo tipo sanguíneo. Os tipos sanguíneos válidos são 'O','A','B' ou 'AB'. 
7. Elaborar um programa em Python para cadastrar uma lista contendo 10 nomes de pessoas, digitados pelo usuário.  
Em seguida, o programa deverá cadastrar para cada nome a respectiva idade.   
8. Elaborar um programa em Python para cadastrar uma lista contendo peso e altura de um grupo de 10 pessoas, digitados pelo usuário.  
Em seguida, o programa deverá criar uma nova lista contendo o IMC das pessoas.  
O IMC é calculado pela razão $IMC=\frac{peso}{altura²}$.  
9. Elaborar um programa em Python para cadastrar uma lista contendo nome e altura de um grupo de 10 pessoas.  
Em seguida, o programa deverá ler o nome e retornar a altura da pessoa.  
Se a pessoa não tiver sido cadastrada, o programa deverá retornar a mensagem PESSOA NÃO CADASTRADA.
10. Elaborar um programa em Python para cadastrar os dados de temperatura de 3 cidades em uma matriz.  
Cada linha armazena as temperaturas de uma cidade em 5 horas diferentes do dia.  
O usuário deve poder digitar o código da cidade (0, 1 ou 2). O programa retornarnará a temperatura média do dia.
11. Elaborar um programa em Python para cadastrar dados em uma matriz de N X M elementos - N e M definidos pelo usuário.  
O usuário deve poder digitar uma célula da matriz, na forma [linha,coluna].   
O programa deverá alterar o valor cadastrado anteriormente por um novo dado digitado pelo usuário.
12. Elaborar um programa na linguagem Python que leia e armazene os dados de um grupo de 30 pessoas: nome, idade, peso, altura. Para a idade de cada pessoa lida, o programa deverá recomendar exercícios do tipo A, para pessoas acima de 60 anos; do tipo B, para pessoas entre 40 e 60 anos; do tipo C, para pessoas entre 15 e 40 anos; e do tipo D, para crianças (idade inferior a 15 anos). Com base no peso e na altura, o programa deve calcular o IMC (dado por peso/altura^2), determinando as dietas: 'magra', IMC superior a 25; 'normal', IMC entre 19 e 25; e 'gorda', IMC inferior a 19. O programa deverá armazenar a dieta de cada pessoa e o respectivo IMC.  [listaDieta.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/listaDieta.py)
13. Elaborar um programa na linguagem Python que leia e armazene as matrículas e notas de um grupo de 20 alunos. O programa deverá calcular a média das notas lidas e o desvio padrão, usando a fórmula  
![desvio](/prog_aulas/desvio.png)  
onde MA é a média aritmética. Deverá escrever somente as matrículas dos alunos com nota inferior à nota média.   [listaDevPad.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/listaDevPad.py)
14. Elaborar um programa na linguagem Python que leia uma sequência de vários números inteiros não nulos, até que o usuário digite 0. Para cada número da sequência lida o programa deverá determinar: (i) a soma da série {0,1,2, ..., N}; (ii) a soma da série {1/N,2/N-1, ..., N/1}. O programa deverá escrever todos os números superiores ao primeiro número lido. Deverá escrever também todos os números inferiores ao último número lido antes do 0. [listaSerie.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/listaSerie.py)
15. Elaborar um programa na linguagem Python para cadastrar os códigos de um grupo de clientes de uma loja e o valor das respectivas compras realizadas em um determinado mês. O código 0 significa que não será cadastrado novo cliente. Após os clientes serem cadastrados, o usuário poderá fazer uma consulta ao sistema, digitando um valor qualquer. O sistema deverá escrever os códigos dos clientes que realizaram compras acima desse valor.  [listaCliente.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/listaCliente.py)  
16. Elaborar um programa na linguagem Python para registrar os lançamentos contáveis de uma empresa ao longo de um ano. O programa deverá ler o CNPJ da empresa no início do ano juntamente com o saldo de caixa do ano anterior. Deverá cadastrar, mês a mês, a receita e a despesa. Ao final do ano, o programa deverá apresentar o extrato do balanço contábil, contendo o mês, receita, despesa, saldo parcial.  [listaBalanco.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/listaBalanco.py)


___ 
**[home](https://claytonjasilva.github.io/progPython_aulas.html)**

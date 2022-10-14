## Tuplas 

### Visão geral
- Constituem um dos tipos de **sequências**, assim como as listas e as strings, ou seja, **conjuntos ordenados finitos indexados por números não negativos**. 
- Podem conter qualquer tipo de objeto - os elementos não precisam ser do mesmo tipo, mas **geralmente** são usadas com elementos heterogêneos.
- A diferença importante entre tuplas e listas é que as tuplas são **imutáveis**, ou seja, **não** podem ser alteradas após serem criadas.

### Criação de tuplas 
- Uma tupla consiste em uma sequência de valores separados por vírgulas, de expressões entre **parênteses**. Por exemplo,

```
t = ('a','b','c','d')
```
- Pode-se criar uma tupla também pela indicação dos elementos separados por vírgulas. Por exemplo,  
```
vogais = 'a','e','i','o','u'
print(vogais)
```
apresenta a tupla *('a', 'e', 'i', 'o', 'u')*
- Para criar uma tupla com um elemento é preciso incluir uma vírgula final. Por exemplo,  

```
t1 = 'a',
```
**Um valor entre parênteses não é uma tupla**
- Podem ser criadas também utilizando-se a função embutida `tuple()`. Por exemplo,
```
t = tuple('teste')
```
cria uma tupla *t* que contém `('t','e','s','t','e')`
- Aplicam-se às tuplas a função embutida `len()` e a indexação de uma tupla de dimensão *n* por um conjunto de índices *0, 1, …, n-1*, cada item *i* de uma tupla *a* é tratado `a[i]`. **Não é possível atribuir itens individuais** de uma tupla.
- É **possível criar tuplas que contenham objetos mutáveis**, como listas. Por exemplo,
```
t = ([1,2,3],['a','b'])
```
cria uma tupla *t* que contém as listas `[1,2,3]` e `['a','b']`. Embora a tupla seja imutável as listas podem ser modificadas.  
- É possível crir uma lista em tupla utilizando-se a função embutida `tuple()`. Por exemplo,  
```
lista = [1, 2, 3, 4]
t = tuple(lista)
print(t)
```
- **As operações com tuplas podem ser obtidas em *<https://docs.python.org/3/library/stdtypes.html#index-23>***

### Tupla com retorno de função
- Uma função pode retornar mais de um valor. Por exemplo,  

```
def mult(n):
  a = 3 * n
  b = 2 * n
  return a , b
```
O valor retornado é uma tupla.

### Tupla como argumento e parâmetro de função
- É possível **espalhar** (*scatter*) os elementos de uma tupla como **argumento** da chamada de uma função. Por exemplo,  

```
def mult(n):
  a = 3 * n
  b = 2 * n
  return a , b

def soma(a,b):
    return a + b

n = 4
t = mult(n)
x = soma(*t)
print(x)
```
- Por outtro lado, é possível **reunir** (*gather*) os elementos de uma tupla como **parâmetro** de uma função. Por exemplo,  

```
def gather(*a)
    return a

x = gather(1,3,5)
print(x)
```

### Exercícios com listas  
1. Elaborar um programa na linguagem Python que armazene as vogais em uma tupla. Leia também uma string, verifique e escreva em uma lista quantas vezes cada vogal está presente na string lida. [tuplaExemplo1.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/tuplaExemplo1.py)
2. Elaborar um programa em Python que leia a matrícula de um grupo de N alunos. Como a matrícula identifica de modo inequìvoco cada aluno, após cadastrar a matrícula dos alunos, o programa não admitirá mudar o número de matrícula cadastrado.  [tuplaExemplo2.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/tuplaExemplo2.py)
3. Elaborar um programa em Python que leia a matrícula de um grupo de N alunos, cadastrando-as em uma tupla. Leia também as notas do grupo [AP1, AP2 e AC], cadastrando-as em uma lista. O programa deverá determinar a média parcial (MP) de cada aluno, considerando que MP = 0,4(AP1+AP2) + 0,2 AC. Deverá cadastrar em uma tupla as matriculas, as notas e a média parcial de todos os alunos.  [tuplaExemplo3.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/tuplaExemplo3.py)

**Observação: Compreensão de lista**
- Python permite uma forma sintática para popular lista, que simplifica o modo tratado até agora, chamada de **compreensão de lista**.  
- A forma é dada por `lista = [<i-ésimo valor> for <contador> in range(<limite>)]`. Por exemplo,
```
N = 3
mat = [int(input('digite matricula: ')) for i in range(N)]
print(mat)
```  
4. Elaborar um programa em Python que leia e armazene o cpf de um grupo de 10 pessoas em uma tupla. Leia e armazene o saldo bancário médio ao longo dos últimos 30 dias em uma lista. O programa deverá criar uma lista dos cpf cujas pessoas apresentaram um saldo médio superior à média de saldo do grupo. [tuplaExemplo4.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/tuplaExemplo4.py)  
**Observação: Compreensão de lista**  
- Python permite uma forma sintática para popular lista sob uma condição, utilizando compreensão de lista. 
- A forma é dada por `[<i-ésimo valor> for <contador> in range(<limite>) if <cond>]`. Por exemplo,
```
# Escreve os números pares inferiores a um número dado
N = int(input("Digite um número inteiro não negativo: "))
par = [i for i in range(N) if (i % 2) == 0]
print(par)
```


## Listas 

### Sobre listas...
- Constituem um dos tipos de **sequências**: conjuntos **ordenados** finitos de **elementos**, **indexados** por números não negativos.   
- Tratam-se de um tipo de sequência **mutável**, ou seja, que pode ser alterada após ser criada. 
- Definem uma **ordenação** posicional dos objetos, da esquerda para a direita. 
- Possuem **comprimento variável**, ou seja, pode crescer e diminuir.
- Podem conter qualquer tipo de objeto - os elementos não precisam ser do mesmo tipo, mas **geralmente** são usadas com elementos do mesmo tipo - estrutura **homogênea**.
- Admitem **aninhamento arbitrário**, ou seja, podem ser construídas listas de listas.

### Sintaxe  
As listas são definidas por elementos entre **colchetes**, separados por **vírgulas**, como `[e1, e2, e3, ..., en]`  

#### Criação de listas
Colocando os elementos entre colchetes  
```
nome da lista = [ lista de elementos ]
```
Por exemplo,  
```
numero = [1,3,6,7]
```
O elemento 6 ocupa a posição indexada [2]. O elemento 1 ocupa a posição [0].  
Criando uma lista vazia e inserindo elementos pelo **método** `append()`, na forma `nome da lista.append(elemento)` - que insere o elemento no final da lista.Por exemplo,
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

#### Operações com listas
**Concatenação**: operador `+`. Por exemplo, `[1,2,3] + [9,3]` resulta na lista `[1,2,3,9,3]`.  
**Repetição**: operador `*`. Por exemplo, `[1,2]*2` resulta na lista `[1,2,1,2]`.  

#### Alguns métodos sobre listas  
Para incluir um elemento em uma lista pode-se usar o método *nome da lista.append()*  
A função embutida [*len()*](https://docs.python.org/pt-br/3/library/functions.html#len) retorna o número de itens de uma sequência, incluindo as listas.  
Mais métodos podem ser obtidos em  
 *<https://docs.python.org/pt-br/3/tutorial/datastructures.html>* ou  
 *<https://docs.python.org/3/library/stdtypes.html#index-23>*

#### Matrizes
- Como é possível aninhar listas, é possível construir matrizes a partir de uma lista com sub-listas aninhadas
- Por exemplo,  
  *matriz =[[1,2,3],[4,5,6],[7,8,9]]*  
  é uma lista cujo primeiro objeto, *matriz[0]* é a lista *[1,2,3]*, logo  
  *matriz[0][2]* retorna o elemento *3*. 

#### Exercícios com listas  
1. Elaborar um programa na linguagem Python que leia e armazene os dados de um grupo de 30 pessoas: nome, idade, peso, altura. Para a idade de cada pessoa lida, o programa deverá recomendar exercícios do tipo A, para pessoas acima de 60 anos; do tipo B, para pessoas entre 40 e 60 anos; do tipo C, para pessoas entre 15 e 40 anos; e do tipo D, para crianças (idade inferior a 15 anos). Com base no peso e na altura, o programa deve calcular o IMC (dado por peso/altura^2), determinando as dietas: 'magra', IMC superior a 25; 'normal', IMC entre 19 e 25; e 'gorda', IMC inferior a 19. O programa deverá armazenar a dieta de cada pessoa e o respectivo IMC.
2. Elaborar um programa na linguagem Python que leia e armazene as matrículas e notas de um grupo de 20 alunos. O programa deverá calcular a média das notas lidas e o desvio padrão (usando a fórmula disponível em <https://www.todamateria.com.br/desvio-padrao/>). Deverá escrever somente as matrículas dos alunos com nota inferior à nota média.
3. Elaborar um programa na linguagem Python que leia uma sequência de vários números inteiros. O programa será interrompido quando for lido um número igual a 0. Para cada número lido o programa deverá determinar: (i) determinar a soma da série {0,1,2, ..., N}; (ii) determinar a soma da série {1/N,2/N-1, ..., N/1}. O programa deverá escrever todos os números superiores ao primeiro número lido. Deverá escrever também todos os números inferiores ao último número lido antes do 0.
4. Elaborar um programa na linguagem Python para cadastrar os códigos de um grupo de clientes de uma loja e o valor das respectivas compras realizadas em um determinado mês. O código 0 significa que não será cadastrado novo cliente. Após os clientes serem cadastrados, o usuário poderá fazer uma consulta ao sistema, digitando um valor qualquer. O sistema deverá escrever os códigos dos clientes que realizaram compras acima desse valor.
5. Elaborar um programa na linguagem Python para registrar os lançamentos contáveis de uma empresa ao longo de um ano. O programa deverá ler o CNPJ da empresa no início do ano juntamente com o saldo de caixa do mês anterior. Deverá cadastrar, mês a mês, a receita e a despesa. Ao final do ano, o programa deverá apresentar o extrato do balanço contábil, contendo o mês, receita, despesa, saldo parcial.  

### Outra sequência importante: as cadeias de caracteres ou *[Strings>>](prog_str.md)*.

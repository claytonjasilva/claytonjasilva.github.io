## 9.2 Vetores

### 9.2.1 Conceitos gerais
Vetores ou *arrays* são matrizes com uma dimensão.  

Configuram-se como estruturas de dados **homogêneas**, ou seja, armazenam **dados do mesmo tipo**,  
**unidimensionais**, pois possuem somente uma dimensão,   
definidos por um **identificador** ou **nome**, que deve atender as mesmas regras para designação de nomes de variáveis.  

Seus elementos são referenciados pelo **índice da posição** que ocupam, **a partir do índice 0**.
Portanto, um vetor de tamanho *N* possui elementos que são referenciados desde a posição 0 até a posição *N-1*.

### 9.2.2 Declaração de vetores
Para declarar um vetor em C é necessário seguir a seguinte sintaxe

```
<tipo> <nome do vetor>[dimensão];
```
Por exemplo,  
```
float peso[50];
```
cria um vetor de tamanho 50, cujos elementos são: *peso[0]*, *peso[1]*, ... *peso[49]*, todos armazenando dados do tipo ponto flutuante.

### 9.2.3 Inicialização de vetor
Assim como as variáveis, quando um vetor não é inicializado não se pode garantir os valores armazenados em cada um dos elementos indexados pelo seu nome.  
Diz-se que armazena inicialmente 'lixo'.
Pode-se inicializar os valores de um vetor utilizando a seguinte sintaxe

```
<tipo> <nome do vetor>[<dimensão do vetor>] = {<lista de valores>};
```
, onde a lista de valores consiste nos valores a serem atribuídos, **ordenados, separados por vírgula**.   


### 9.2.4 Ponteiros e vetores
Quando se declara um vetor, o compilador (dependendo do tipo do vetor) aloca o espaço de endereços de memória para armazenar os dados.

**O nome do vetor é na realidade um ponteiro dos elementos do vetor**,  
que pode ser obtido utilizando-se o operador unário `*`, da seguinte forma: `*(nome do vetor+<indice>)`, onde o índice varia de *0* a *N-1*. 

Por exemplo, dado o vetor *peso*, do exemplo anterior, `*peso` é equivalente a `peso[0]`,`*(peso+1)` é equivalente a `peso[1]`, assim por diante.

Essa característica possibilita uma utilização incomum, porém possível, que é a utilização de **índices negativos** no vetor.  
Considerando o que tratamos anteriormente, índices negativos significam, na prática, apontar para posições de endereço anteriores à posição
inicial do vetor.

Como o nome do vetor é, na prática, um ponteiro, também é possível indexar o nome de um vetor.
Por exemplo,

```
int idade[10] = {1, 2, 3, 4, 5, 6 , 7, 8, 9, 10};
int *p;
p = idade;
printf("O terceiro elemento do vtoer eh %i",p[2]);
```

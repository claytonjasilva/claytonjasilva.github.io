# 4. Estruturas de Dados Homogêneas Unidimensionais, Bidimensionais e Multidimensionais no Arduino

As estruturas homogêneas são aquelas que admitem múltiplos elementos de forma que **todos os elementos são do mesmo tipo**. Elas são amplamente utilizadas em programação no Arduino, tanto em casos simples quanto em sistemas mais complexos.

## 4.1 Estruturas Homogêneas Unidimensionais (*Arrays*)

As estruturas homogêneas **unidimensionais (possuem uma dimensão)** são chamadas de vetores ou *arrays*. Essas estruturas permitem o armazenamento de **dados do mesmo tipo** e são amplamente utilizadas em projetos Arduino, como para armazenar leituras de sensores, valores de saídas, entre outros.

### 4.1.1 Declaração de Vetores no Arduino

Para declarar um vetor no Arduino (assim como em C), utiliza-se a seguinte sintaxe:

```cpp
<tipo> <nome do vetor>[<dimensão>];
```

Onde:

- <tipo> refere-se ao tipo de dado armazenado, como int, float, char, etc.
- <nome do vetor> é o nome dado ao vetor, que segue as regras de nomeação de variáveis.
- <dimensão> é o número de elementos no vetor.

Por exemplo, `float peso[50];`. Este exemplo declara um vetor de 50 elementos do tipo float, acessíveis pelos índices de 0 a 49.

### 4.1.2 Inicialização de Vetores

É possível inicializar um vetor com valores conhecidos ao declará-lo, da seguinte forma:

```cpp
<tipo> <nome do vetor>[<dimensão>] = {<lista de valores>};
```

A lista de valores consiste nos valores a serem atribuídos aos elementos, separados por vírgula. Exemplo: `char vogais[5] = {'a', 'e', 'i', 'o', 'u'};`

No Arduino, também é possível modificar os valores dos vetores dinamicamente, por exemplo, armazenando leituras de sensores.

```cpp
int leituras[10];
for (int i = 0; i < 10; i++) {
    leituras[i] = analogRead(A0); // Lê valores de um sensor conectado à entrada A0
}
```

## 4.2 Estruturas Homogêneas Bidimensionais (Matrizes)

As estruturas homogêneas bidimensionais (duas dimensões) são chamadas de matrizes. Elas são úteis em projetos Arduino para organizar dados em formato de linhas e colunas, como em telas de LED, matrizes de teclas, etc.

### 4.2.1 Declaração de Matrizes no Arduino

Para declarar uma matriz bidimensional, utiliza-se a seguinte sintaxe:

```cpp
<tipo> <nome da matriz>[N][M];
```

Onde N é o número de linhas e M é o número de colunas. Por exemplo, `int matriz[2][3];`é uma matriz de 2 linhas e 3 colunas.

### 4.2.2 Inicialização de Matrizes

As matrizes podem ser inicializadas durante sua declaração, por exemplo: `int matriz[2][3] = { {1, 2, 3}, {4, 5, 6} };`

Nesse caso, a matriz terá a seguinte forma:

1  2  3
4  5  6

Assim como os vetores, as matrizes também podem ser preenchidas dinamicamente, como no exemplo abaixo que utiliza um loop para preencher os valores:

```cpp
int leitura[2][5];
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 5; j++) {
        leitura[i][j] = analogRead(A0); // Lê valores do sensor em A0 e armazena na matriz
    }
}
```

## 4.3 Estruturas Homogêneas Multidimensionais

Estruturas homogêneas podem ter mais de duas dimensões, conhecidas como estruturas multidimensionais. São menos comuns, mas podem ser úteis para organizar dados em grades 3D, como em simulações ou controles mais complexos.

### 4.3.1 Declaração de Estruturas Multidimensionais

A sintaxe para declaração de estruturas multidimensionais segue o padrão:

```cpp
<tipo> <nome>[dim1][dim2]...[dimN];
```

Por exemplo, `int estrutura[2][2][3];` cria uma estrutura 3D com 2 matrizes, cada uma contendo 2 linhas e 3 colunas.

### 4.3.2 Inicialização de Estruturas Multidimensionais

A inicialização pode ser feita diretamente:

```cpp
int estrutura[2][2][3] = {
    { {1, 2, 3}, {4, 5, 6} },
    { {7, 8, 9}, {10, 11, 12} }
};
```

Assim, cada dimensão pode ser visualizada como uma série de matrizes:

1  2  3     7  8  9
4  5  6     10 11 12

## 4.4 Ponteiros, Arrays e Matrizes

No Arduino, os ponteiros funcionam da mesma forma que na linguagem C. Um ponteiro é uma variável que armazena o endereço de outra variável.

### 4.4.1 Declaração de Ponteiros

A sintaxe para declarar um ponteiro é:

```cpp
<tipo> *<nome_do_ponteiro>;
```

Por exemplo, 

```cpp
int x = 10;
int *ptr;
ptr = &x; // ptr armazena o endereço da variável x
```

### 4.4.2 Inicialização e Uso de Ponteiros

Ponteiros podem ser usados para acessar e modificar os valores das variáveis para as quais eles apontam. Exemplo:

```cpp
int x = 10;
int *ptr = &x;
Serial.println(*ptr); // Imprime o valor de x (10)
```

Ponteiros também são usados para navegar e manipular arrays e matrizes. No caso de um array, o nome do array é, por si só, um ponteiro para o primeiro elemento:

```cpp
int vetor[5] = {1, 2, 3, 4, 5};
int *ptr = vetor; // ptr aponta para vetor[0]
```

É possível iterar sobre um vetor usando um ponteiro:

```cpp
for (int i = 0; i < 5; i++) {
    Serial.println(*(ptr + i)); // Acessa os elementos do vetor usando o ponteiro
}
```

# 4.5 Exemplos no Arduino

Criar um vetor que armazene 10 leituras de um sensor e mostre a média dessas leituras no monitor serial.

```cpp
int leituras[10];
int soma = 0;

for (int i = 0; i < 10; i++) {
    leituras[i] = analogRead(A0);
    soma += leituras[i];
}

int media = soma / 10;
Serial.println("Media das leituras: ");
Serial.println(media);
```

Criar uma matriz 3x3 para armazenar valores de sensores e exibi-los.

```cpp
int sensores[3][3];

for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        sensores[i][j] = analogRead(A0);
    }
}

for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        Serial.print(sensores[i][j]);
        Serial.print(" ");
    }
    Serial.println();
}
```


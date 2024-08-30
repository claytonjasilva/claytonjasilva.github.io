# 4. Estruturas de dados homogêneas unidimensionais, bidimensionais e multidimensionais. Ponteiros.

As estruturas homogêneas são aquelas que admitem múltiplos elementos de forma que **todos os elementos são do mesmo tipo**.

## 4.1 Estruturas homogêneas unidimensionais ou *arrays*

As estruturas homogêneas **unidimensionais (possuem uma dimensão)** são chamadas de vetores ou *arrays*.

Configuram-se como estruturas de dados **homogêneas**, ou seja, armazenam **dados do mesmo tipo**.

São definidos por um **identificador** ou **nome**, que deve atender as mesmas regras para designação de nomes de variáveis.  

Seus elementos são referenciados pelo **índice da posição** que ocupam, **a partir do índice 0**. Portanto, um vetor de tamanho *N* possui elementos que são referenciados desde a posição 0 até a posição *N-1*.

### 4.1.1 Declaração de vetores

Para declarar um vetor em C é necessário seguir a seguinte sintaxe

```c
<tipo> <nome do vetor>[<dimensão>];
```

, onde os tipos de variáveis simples (`int`, `float`, ...) são admitidos; as regras de nome de variável também se aplicam ao nomes de *array*; e a dimensão é um inteiro N que define o número de elementos reservados à estrutura.

Por exemplo,

```c
float peso[50];
```

cria um vetor de tamanho 50, cujos elementos são: *peso[0]*, *peso[1]*, ... *peso[49]*, todos armazenando dados do tipo ponto flutuante.

### 4.1.2 Inicialização de vetor

Assim como as variáveis, quando um vetor não é inicializado não se pode garantir os valores armazenados em cada um dos elementos indexados pelo seu nome. Diz-se que armazena inicialmente 'lixo'. Pode-se inicializar os valores de um vetor utilizando a seguinte sintaxe

```c
<tipo> <nome do vetor>[<dimensão>] = {<lista de valores>};
```

onde a lista de valores consiste nos valores a serem atribuídos, **ordenados, separados por vírgula**. Por exemplo,

```c
char nome[5] =  {'a','e','o','i','u'};
```

## 4.2 Estruturas homogêneas bidimensionais

As estruturas homogêneas **bidimensionais (possuem duas dimensões)** são chamadas de matrizes.

Configuram-se como estruturas de dados **homogêneas**, ou seja, armazenam **dados do mesmo tipo**.

São definidos por um **identificador** ou **nome**, que deve atender as mesmas regras para designação de nomes de variáveis.  

Seus elementos são referenciados usando a sintaxe `nome[i][j]`, onde nome é o nome da matriz, i é o índice da linha e j é o índice da coluna. Portanto, uma matriz de tamanho *N* linhas versus *M* colunas possui *N.M* elementos que são referenciados desde a posição [0][0]até a posição [N-1][M-1].

### 4.2.1 Declaração de matrizes

A forma geral da declaração de uma matriz bidimensional é

```c
<tipo> <nome> [N][M]];
```

, onde N é o número de Linhas, M é o número de colunas

Por exemplo,

```c
float peso_altura[2][5];
```

declara uma matriz 2x5.

### 4.2.2 Inicialização de matrizes

O formato geral de inicialização de matrizes é dado por

```c
<tipo> <nome> [N][M] = {lista de valores};
```

A lista de valores pode ser apresentada de duas maneiras:

- Composta pelos valores (do mesmo tipo da variável) separados por vírgula, de todas as colunas, da primeira à ultima linha. Ou seja,

```c
{[0][0],[0][1],...,[0][M-1],[1][0],[1][1],...,[1][M-1]...[N-1][0],[N-1][1],...,[N-1][M-1]}
```

- Ou composta pelos valores separados por vírgula das linhas delimitadas por chaves, da primeira à ultima. Ou seja,

```c
{{linha [0]},{linha [1]},...,{linha [N-1]}}
```

Por exemplo,

```c
int matriz[2][3] = { 1, 2, 3, 4, 5, 6};
```

ou, alternativamente,

```c
int matriz[2][3] = { {1, 2, 3}, {4, 5, 6} };
```

## 4.3 Estruturas homogêneas multidimensionais

As estruturas homogêneas **multidimensionais (possuem múltiplas dimensões)**.

Configuram-se como estruturas de dados **homogêneas**, ou seja, armazenam **dados do mesmo tipo**.

São definidos por um **identificador** ou **nome**, que deve atender as mesmas regras para designação de nomes de variáveis.  

Seus elementos são referenciados usando a sintaxe `nome[i1][i2]...[ik]`, onde nome é o nome da estrutura, i1,i2,...,ik são os índices das k-ésimas dimensões. Portanto, uma estrutura multidimensional terá o tamanho *dim 1 . dim 2....dim k**.

### 4.3.1 Declaração de estruturas homogêneas multidimensionais

As estruturas homogêneas multidimensionais possuem a forma geral de declaração se acordo com a sintaxe

```c
<tipo> <nome> [tam 1][tam 2]...[tam k];
```

### 4.3.2 Inicialização de estruturas multidimensionais

O formato geral de inicialização de matrizes é dado por

```c
<tipo> <nome> [tam 1][tam 2]...[tam k] = {<lista de valores>};
```

A ordem de preenchimento em uma estrutura multidimensional é dada pelo primeiro índice variando mais lentamente, o segundo índice variando no meio, e o terceiro índice variando mais rapidamente, assim por diante.

Por exemplo, em uma estrutura 3D 2x2x3, seria na ordem dos termos

```c
{[0][0][0], [0][0][1], [0][0][2], [0][1][0], [0][1][1], [0][1][2], [1][0][0], [1][0][1], [1][0][2], [1][1][0], [1][1][1], [1][1][2]}
```

, onde [i][j][k] representam os índices dos elementos na estrutura.

Pode-se também separar a atribuição na inicialização de estruturas multidimensionais em matrizes da última dimensão à primeira, evidenciando-as entre chaves. Por exemplo, no caso 3D 2x2x3, tem-se 2 matrizes 2x3, logo

```c
{
    {[0][0][0], [0][0][1], [0][0][2], [0][1][0], [0][1][1], [0][1][2]} // matriz 1

    {[1][0][0], [1][0][1], [1][0][2], [1][1][0], [1][1][1], [1][1][2]} // matriz 2
}
```

Ou, de modo similar à inicialização em matrizes, linha a linha. Ou seja 2 matrizes com 2 linhas e 3 colunas

```c
{
    { // matriz 1
        {[0][0][0], [0][0][1], [0][0][2]}, // linha 1
        {[0][1][0], [0][1][1], [0][1][2]} // linha 2
    },
    { // matriz 2
        {[1][0][0], [1][0][1], [1][0][2]}, // linha 1
        {[1][1][0], [1][1][1], [1][1][2]} // linha 2
    }
}
```

## 4.4 Ponteiros, *arrays* e matrizes

Um ponteiro é uma variável que armazena o endereço do primeiro byte de uma variável na memória. Uma variável pode ocupar vários bytes na memória. O ponteiro armazena o endereço de onde esse bloco de memória começa. Vale lembrar que cada tipo definido em C admite ocupar um espaço específico de memória.

| Tipo de Variável | Tamanho em Memória (Bytes) |
|------------------|----------------------------|
| `char`           | 1                          |
| `unsigned char`  | 1                          |
| `short`          | 2                          |
| `unsigned short` | 2                          |
| `int`            | 4                          |
| `unsigned int`   | 4                          |
| `long`           | 4                          |
| `unsigned long`  | 4                          |
| `float`          | 4                          |
| `double`         | 8                          |
| `long double`    | 12 ou 16                   |
| `void*`          | 4                          |

Mesmo que um ponteiro possa tecnicamente apontar para qualquer endereço dentro do espaço de endereçamento de uma máquina, o sistema operacional pode restringir o acesso a certas áreas de memória (por exemplo, memória do kernel, regiões não mapeadas), e tentar acessar essas áreas pode causar um erro de segmentação (*segmentation fault*).

O compilador C, em conjunto com a arquitetura da máquina e o sistema operacional, não reconhece todos os endereços de memória possíveis, mas sim um subconjunto que é definido pelas limitações de hardware e software. Essas limitações variam com a arquitetura, o sistema operacional e as políticas de gerenciamento de memória.

### 4.4.1 Declaração de variáveis do tipo ponteiro

A declaração mais frequente de um ponteiro em C deve obedecer a sintaxe

```c
<tipo> *<nome>;
```

onde o nome deve satisfazer a regra geral da linguagem C para identificadores de variáveis.

Alguns pontos merecem ser discutidos na declaração de ponteiros:

#### a. Vetor de ponteiros

Quando se utiliza a sintaxe `<tipo> *<nome>[<tam>];`, se declara um vetor de ponteiros.

O significado é <nome> é um array de <tam> ponteiros para <tipo>. Cada <nome>[i] é um ponteiro que pode apontar para um <tipo>. Por exemplo,

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    // Declarando um vetor de 12 ponteiros para float
    float *p[12];

    // Alocando memória dinamicamente para cada ponteiro no vetor
    for (int i = 0; i < 12; i++) {
        p[i] = (float*) malloc(5 * sizeof(float));  // Cada ponteiro aponta para um array de 5 floats

        // Verificando se a alocação foi bem-sucedida
        if (p[i] == NULL) {
            printf("Erro na alocacao de memoria para p[%d]\n", i);
            return 1;  // Encerra o programa em caso de erro de alocação
        }

        // Preenchendo o array com valores multiplicados por i
        for (int j = 0; j < 5; j++) {
            p[i][j] = (i + 1) * (j + 1);  // Exemplo de preenchimento: (i+1) * (j+1)
        }
    }
```

A função `malloc` (*memory allocation*) é usada em C para alocar dinamicamente um bloco de memória durante a execução do programa. Isso significa que você pode solicitar uma quantidade específica de memória que será reservada para o uso do seu programa e acessada através de um ponteiro. **Retorna um ponteiro para o início do bloco de memória alocado**. Esse ponteiro é do tipo `void*`, o que significa que ele é um ponteiro genérico que pode ser convertido para qualquer tipo de ponteiro necessário (como int*, float*, etc.).

A sintaxe da função é

```c
void* malloc(<tam>);
```

, onde `<tam>` é o tamanho, em bytes, do bloco de memória que se deseja alocar. A função `sizeof` é comumente usada para determinar o número de bytes necessários para armazenar um tipo de dado específico.

A função `malloc` é usada quando você precisa de alocação dinâmica de memória, ou seja, quando o tamanho da memória que você precisa alocar só é conhecido em tempo de execução ou quando você precisa que a memória alocada persista após o término de uma função. Por exemplo, alocar memória para um array cujo tamanho é desconhecido até a execução, alocar memória para uma estrutura que será usada além do escopo da função criada, criar estruturas de dados complexas como listas encadeadas, árvores, etc., onde os elementos são alocados dinamicamente.

O trecho de código 

```c
 // Verificando se a alocação foi bem-sucedida
        if (p[i] == NULL) {
            printf("Erro na alocacao de memoria para p[%d]\n", i);
            return 1;  // Encerra o programa em caso de erro de alocação
        }
```

é importante para verificar se a alocação de memória foi bem-sucedida é uma prática importante em C para garantir que o programa não tente acessar ou usar memória que não foi alocada corretamente, pois quando se usa a função `malloc` para alocar memória dinamicamente pode ocorrer falha por várias razões, como memória insuficiente, o sistema não tem memória disponível suficiente para atender à solicitação, ou fragmentação de memória, a memória pode estar fragmentada de forma que não consiga fornecer um bloco contíguo do tamanho solicitado.

Para evitar esses problemas, você deve-se verificar sempre se a alocação de memória foi bem-sucedida antes de usar o ponteiro retornado por `malloc`.

Veja a solução do exemplo 8, ao término da seção.

#### b. Ponteiros de vetor

Quando se utiliza a sintaxe `<tipo> *(<nome>)[<tam>];`, se declara um ponteiro de vetor.

O significado é <nome> é um ponteiro de um array de tamanho <tam> de dados do <tipo>. O <nome> é um ponteiro que pode apontar para o vetor de <tipo>. Por exemplo,

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    // Alocando memória para uma matriz de 10 linhas e 12 colunas
    float (*p)[12] = (float (*)[12]) malloc(10 * sizeof(float[12]));

    // Verificando se a alocação foi bem-sucedida
    if (p == NULL) {
        printf("Erro na alocacao de memoria!\n");
        return 1;  // Encerra o programa em caso de erro de alocação
    }

    // Preenchendo a matriz com valores
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 12; j++) {
            p[i][j] = (i + 1) * (j + 1);  // Exemplo: valor = (i+1) * (j+1)
        }
    }

    // Exibindo a matriz
    printf("Matriz 10x12:\n");
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 12; j++) {
            printf("%.2f ", p[i][j]);
        }
        printf("\n");
    }

    // Liberando a memória alocada
    free(p);

    return 0;
}
```

Observe no exemplo que o ponteiro pôde ser utilizado para a definição de uma matriz [10][12], em tempo de compilação. A mesma declaração do ponteiro poderia servir à criação de um vetor unidimensional ou tridimensional, dependendo do problema endereçado. Se você está lidando com um grid ou tabela com mais de uma dimensão, então se pode definir no código. Não obstante, pode ser possível definir na declaração do ponteiro o grid desejado, por exemplo, `float *p[4][3]` indicaria o grid bidimensional.

#### c. Ponteiro de ponteiros

Um ponteiro de ponteiros, cuja sintaxe é `<tipo> **<nome>;`, é um conceito importante em C, frequentemente usado em situações onde você precisa de mais de um nível de indireção. 

Suas aplicações mais comuns são: (i) Matrizes de Strings (array de Strings); (ii) passagem de Arrays de Strings para Funções; (iii)  alocação dinâmica de matrizes de Strings:

Exemplo de matriz de Strings,

```c
char *nomes[] = {"Alice", "Bob", "Charlie"};
```

Exemplo de passagem de arrays de Strings para funções,

```c
int main(int argc, char **argv) {
    printf("Primeiro argumento: %s\n", argv[0]);
    return 0;
}
```

Exemplo de alocação dinâmica de matrizes de Strings,

```c
char **nomes = (char **)malloc(3 * sizeof(char *));
nomes[0] = (char *)malloc(10 * sizeof(char));  // Aloca espaço para 10 caracteres
nomes[1] = (char *)malloc(10 * sizeof(char));
nomes[2] = (char *)malloc(10 * sizeof(char));
```

Veja o exemplo do exercício 4.

#### d. Ponteiro de funções

Embora na linguagem C as funções não sejam variáveis, é possível definir ponteiros para funções, utilizando oa sintaxe geral

```c
<tipo> (*<nome>)(<declaração de parâmetros>)
```

Por exemplo,

```c
int minha_funcao(int a, float b) {
    return a + (int)b;
}

int main() {
    int (*func_ptr)(int, float) = &minha_funcao; // Atribui o endereço da função ao ponteiro
    int resultado = func_ptr(3, 4.5);            // Chama a função usando o ponteiro
    printf("Resultado: %d\n", resultado);
    return 0;
}
```

Ponteiros de função são uma característica poderosa e flexível em C que permitem tratar funções como valores, o que proporciona uma série de aplicações vantajosas. Por exemplo, implementação de *callbacks* (*callback* é uma função que é passada como argumento para outra função e é chamada em um momento específico dentro dessa função). Por exemplo,

```c
#include <stdio.h>
#include <stdlib.h>

// Função de comparação para ordem crescente
int comparacao_crescente(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

// Função de comparação para ordem decrescente
int comparacao_decrescente(const void *a, const void *b) {
    return (*(int*)b - *(int*)a);
}

// Função de ordenação genérica que aceita uma função de comparação como callback
void ordenar(int *array, size_t tamanho, int (*comparar)(const void *, const void *)) {
    qsort(array, tamanho, sizeof(int), comparar);
}

int main() {
    int valores[] = {40, 10, 100, 90, 20, 25};
    size_t tamanho = sizeof(valores) / sizeof(valores[0]);

    // Ordenar em ordem crescente
    ordenar(valores, tamanho, comparacao_crescente);
    printf("Ordem crescente: ");
    for (size_t i = 0; i < tamanho; i++) {
        printf("%d ", valores[i]);
    }
    printf("\n");

    // Ordenar em ordem decrescente
    ordenar(valores, tamanho, comparacao_decrescente);
    printf("Ordem decrescente: ");
    for (size_t i = 0; i < tamanho; i++) {
        printf("%d ", valores[i]);
    }
    printf("\n");

    return 0;
}
```

Ponteiros podem ser usados também para redução de código duplicado, pois em vez de escrever funções quase idênticas para diferentes tipos de dados ou operações, um ponteiro de função permite abstrair o comportamento variável; entre outras diversas aplicações.

Como a linguagem C passa argumentos para funções usando 'chamada por valor', ou seja, a função chama **não pode alterar uma variável diretamente na função chamadora**.

Pode-se alterar os valores na função chamadora utilizando-se ponteiro. Para isso pode-se passar como argumento na função chamadora o endereço das variáveis cujos valores deseja-se alterar na função chamada. Quando a função chamada alterar o conteúdo do endereço apontado pelos ponteiros, automaticamente estará sendo alterado o valor também na função chamadora. 

Por exemplo, seja uma função para trocar valores de duas variáveis `x` e `y`

```c
void troca(int *px, int *py){
    int temp;
    temp = *px;
    *px = *py;
    *py = temp;
}

void main(){
    int x=3;
    int y=4;
    troca(x,y);
    printf("O conteudo de x eh %i e o conteudo de y eh %i",x,y);
}
```

### 4.4.2 Inicialização de ponteiros

A inicialização de ponteiros requer muito cuidado, pois, a priori, não se pode atribuir qualquer valor à variável ponteiro, conforme tratado anteriormente, em função especialmente das restrições impostas pela arquitetura e pelo sistema operacional, a quem compete gerenciar memória.

Um artifício utilizado para inicializar uma variável do tipo ponteiro é declarar uma variável do  tipo para o qual o ponteiro aponta e associar o seu endereço ao valor inicial do ponteiro. Isso pode ser realizado pelo operador unário `&`.

#### a. Endereços de variáveis simples

Para variáveis simples, a sintaxe é a seguinte

```c
<tipo> <nome da variável apontada>;
<tipo> *<nome do ponteiro>;
<nome do ponteiro> = &<nome da variável apontada>;
```

Por exemplo,

```c
int x;
int *int_p;
int_p = &x;
```

#### b. Endereços de variáveis compostas homogêneas (*arrays*, matrizes e estruturas multidimensionais)

É possível também inicializar ponteiros em C para endereços de estruturas homogêneas unidimensionais e multidimensionais. Entretanto, nesses casos, **o ponteiro aponta o endereço do primeiro elemento da estrutura**. Convém lembrar como os dados de uma estrutura multidimensional são organizados sequencialmente, variando da última até a primeira dimensão.

A sintaxe para inicializar o ponteiro é dada por

```c
<tipo> <nome da estrutura>[dim 1][dim 2]...[dim k];
<tipo> *<nome do ponteiro>;
<nome do ponteiro> = &<nome da estrutura>[0][0]...[0];
```

Alternativamente, pode-se usar somente o nome da estrutura, sem uso do operador unário `&`:

```c
<tipo> <nome da estrutura>[dim 1][dim 2]...[dim k];
<tipo> *<nome do ponteiro>;
<nome do ponteiro> = <nome da estrutura>;
```

Quando você usa o nome de uma estrutura em expressões, ele "decai" (se converte) para um ponteiro que aponta para o primeiro elemento da estrutura.

Por exemplo, se você declara `int nome[10];`, então `nome` decai para `&nome[0]`, um ponteiro para o primeiro elemento do array.

### 4.4.3 Conteúdo dos endereços armazenados em variáveis do tipo ponteiro

#### a. Conteúdos dos endereços armazenados em ponteiros para variáveis simples

É possível referenciar o dado armazenado no endereço definido por uma variável do tipo ponteiro, ou seja, obter o seu conteúdo. Em se tratando de um ponteiro para uma variável simples, isso pode ser obtido pelo uso do operador unário `*` precedendo o nome da variável: `*<nome do ponteiro>`. Por exemplo,

```c
int x=2;
int *int_p;
int_p = &x;
printf("O valor armazenado no endereço %p eh o valor inteiro %i",int_p,*int_p);
```

No exemplo, como o ponteiro armazena o endereço de x, obviamente o seu conteúdo será 2.

#### b. Conteúdos dos endereços armazenados em ponteiros para estruturas compostas homogêneas (*arrays*, matrizes e estruturas multidimensionais)

De modo similar ao ponteiro para uma variável simples, isso pode ser obtido pelo uso do operador unário `*` precedendo o nome da variável: `*<nome do ponteiro>`.

Como no exemplo anterior, `printf("O endereço armazenado no ponteiro eh %p; no endereco se armazena o valor inteiro %i",int_p,*int_p);`, mesmo que `int_p` armazene o endereço do dado do primeiro elemento de uma estrutura homogênea, por exemplo `&vetor[0]`, onde `vetor` é um *array* de inteiros.

A particularidade do uso de ponteiros para referenciar dados de estrutura homogênea se deve à possibilidade de poder obter todos os dados utilizando a sintaxe

```c
*(<nome do ponteiro>+<n>)`
```

, onde `n` varia de 1 até N-1, onde N é o número de elementos da estrutura.

Por exemplo, para escrever todos os dados de uma estrutura 3D 2x2x3, pode-se usar o código

```c
int estrutura[2][2][3] = {10,20,30,40,50,60,70,80,90,100,110,120};
int *estr_p;
estr_p = estrutura;
for (int i=0;i<12;i++) printf("O termo %i eh %i\n",i,*(estr_p+i));
```

## 4.5 Exemplos

1. Escrever um código em C para ler 10 números quaisquer. Determinar e escrever cada número lido seguido da média dos números lidos.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo40.c)**

2. Criar um vetor que armazene os seguintes nomes: "ana", "joao", "pedro", "carlos", "jose", "joaquim", "zenildo".  
Com o vetor criado, o usuário poderá digitar um nome, se o nome pertencer ao conjunto, o programa deverá responder "NOME ENCONTRADO!".  
Se o nome digitado pelo usuário não pertencer ao conjunto, o programa deverá responder "NOME NAO PERTENCE A RELACAO!".  

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo41.c)**

3. Elaborar um programa na linguagem C para criar um vetor para armazenar as idades de um grupo de pessoas. O usuário deverá digitar quantas pessoas serão cadastradas. Escrever a média das idades.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo42.c)**

4. Elaborar um programa na linguagem C criar um vetor para armazenar os nomes de alunos de uma turma de aula. O usuário deverá digitar quantos alunos a turma possui, antes de informar os nomes do aluno da turma. Ao final, o programa deve escrever o primeiro nome digitado pelo usuário.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo43.c)**

5. Elaborar um programa em C que preencha, linha por linha, com dados de 1 a 200, uma matriz de 20x10.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo44.c)**

6. Elaborar um programa em C que leia as temperaturas (em graus Celsius), entre 2h e 24h do dia, em intervalos de 2h, para 20 cidades. Armazene as temperaturas da cidade em uma matriz. Determine e armazene a temperatura média na mesma matriz. 

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo45.c)**

7. Elaborar um programa em C para armazenar em uma matriz de duas linhas as vogais. Na primeira linha, as vogais em minúscula. Na segunda linha, as vogais em maiúscula.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo46.c)**

8. Elaborar um programa em C que leia os dados de peso de 10 pessoas mês a mês, de janeiro a dezembro. Armazene os pesos das pessoas em uma matriz. Utilizar ponteiro.  

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exemplo47.c)**

___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

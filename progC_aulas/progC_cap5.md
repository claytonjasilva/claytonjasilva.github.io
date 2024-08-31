# 5. Estruturas de dados heterogêneas: *Struct*

As estruturas heterogêneas ou simplesmente **estrutura** são aquelas que admitem múltiplos elementos de forma que **os elementos podem ser de tipos diferentes**.

As estruturas (*structs*) são coleções de uma ou mais variáveis colocadas juntas sob um único nome. São também chamadas de registros.

Ajudam a organizar dados complicados, pois permitem que um grupo de variáveis relacionadas sejam tratadas como uma unidade ao invés de entidades separadas.

## 5.1 Conceitos básicos

A sintaxe básica de uma estrutura é

```c
struct <nome> {
    <lista de declaração das variáveis>
};
```

A palavra-chave `struct` introduz a declaração, que é uma <lista de declaração de variáveis>. As variáveis pertencentes à estrutura são chamadas de **membros**. Os nomes designados para membros podem ser usados para outras variáveis, pois são distinguíveis pelo contexto.

Um nome opcional, chamado de **tag** da estrutura (ou etiqueta), pode seguir a palavra `struct`. Esse nome atribui um identificador ao tipo da estrutura, permitindo que você declare variáveis desse tipo posteriormente, sem precisar repetir a definição completa da estrutura. Após a definição da estrutura com a tag, você pode usar essa tag para declarar variáveis do tipo da estrutura. Para declarar a estrutura incluindo a tag a sintaxe é

```c
struct <nome> {
    <lista de declaração das variáveis>
};

struct <nome> <tag>;
```

Os nomes designados para as tags também podem ser usados para outras variáveis, pois são distinguíveis pelo contexto. A partir da definição da tag, um membro da estrutura pode ser referenciada utilizando-se a sintaxe `<tag>.<membro>`.

Um exemplo de `struct`

```c
#include <stdio.h>
#include <math.h>

// Definindo a estrutura Ponto
struct Ponto {
    float x;
    float y;
};

// Definindo a estrutura Retangulo
struct Retangulo {
    struct Ponto superiorEsquerdo;  // Um retângulo é definido pelo ponto superior esquerdo
    struct Ponto inferiorDireito;   // e pelo ponto inferior direito
};

// Definindo a estrutura Circulo
struct Circulo {
    struct Ponto centro;  // O círculo é definido pelo centro
    float raio;           // e pelo raio
};

// Função para imprimir um ponto
void imprimirPonto(struct Ponto p) {
    printf("Ponto (%.2f, %.2f)\n", p.x, p.y);
}

// Função para imprimir as informações de um retângulo
void imprimirRetangulo(struct Retangulo r) {
    printf("Retangulo:\n");
    printf(" Superior Esquerdo: ");
    imprimirPonto(r.superiorEsquerdo);
    printf(" Inferior Direito: ");
    imprimirPonto(r.inferiorDireito);
}

// Função para imprimir as informações de um círculo
void imprimirCirculo(struct Circulo c) {
    printf("Circulo:\n");
    printf(" Centro: ");
    imprimirPonto(c.centro);
    printf(" Raio: %.2f\n", c.raio);
}

int main() {
    // Criando um ponto
    struct Ponto p1 = {2.0, 3.0};

    // Criando um retângulo usando dois pontos
    struct Retangulo r1 = {{1.0, 4.0}, {5.0, 1.0}};

    // Criando um círculo com centro e raio
    struct Circulo c1 = {{0.0, 0.0}, 3.5};

    // Imprimindo as informações
    printf("Ponto p1:\n");
    imprimirPonto(p1);

    printf("\nRetangulo r1:\n");
    imprimirRetangulo(r1);

    printf("\nCirculo c1:\n");
    imprimirCirculo(c1);

    return 0;
}
```

O uso da tag é opcional porque se pode definir e usar uma estrutura sem dar a ela um nome específico que possa ser reutilizado em outras partes do código. Nesse caso o nome da estrutura será utilizado. Em sendo assim, a sintaxe da estrutura é dada por

```c
struct {
    <declaração de lista de variáveis>
} <lista de nomes>;
```

Sem uma tag, a estrutura é anônima, e você só pode declarar a <lista de nomes> nesse momento. Não é possível criar mais variáveis do mesmo tipo de estrutura fora do contexto da declaração. Por exemplo,

```c
struct {
    int x;
    int y;
} ponto1, ponto2;
```

## 5.2 Inicialização de estruturas

Inicializar estruturas em C envolve atribuir valores iniciais aos membros da estrutura no momento da declaração ou logo após. Existem várias maneiras de inicializar uma estrutura, dependendo de como se deseja definir os valores dos membros.

As formas de inicialização consistem em: (i) inicialização no momento da declaração; (ii) inicialização de apenas alguns membros; (iii) inicialização independentemente da ordem dos membros; (iv) inicialização padrão com 0; e (v) inicialização aninhada.

Pode-se inicializar os membros de uma estrutura diretamente no momento em que a variável é declarada. Isso é feito usando uma lista de inicializadores entre chaves {}. Por exemplo,

```c
#include <stdio.h>

struct Ponto {
    int x;
    int y;
};

int main() {
    struct Ponto p1 = {2, 3};  // Inicializa x = 2 e y = 3

```

Pode-se inicializar apenas alguns membros de uma estrutura. **Os membros não inicializados explicitamente recebem um valor padrão (zero para tipos numéricos, '\0' para caracteres, e NULL para ponteiros)**. Por exemplo,

```c
#include <stdio.h>

struct Ponto {
    int x;
    int y;
    int z;
};

int main() {
    struct Ponto p1 = {2};  // Apenas x é inicializado; y e z serão 0

```

Pode-se também fazer a inicialização designada para inicializar membros específicos da estrutura, independentemente da ordem dos membros.Por exemplo,

```c
#include <stdio.h>

struct Ponto {
    int x;
    int y;
    int z;
};

int main() {
    struct Ponto p1 = {.y = 3, .x = 2};  // Inicializa y = 3, x = 2, z = 0

    printf("p1.x = %d, p1.y = %d, p1.z = %d\n", p1.x, p1.y, p1.z);  // Saída: p1.x = 2, p1.y = 3, p1.z = 0

    return 0;
}
```

Pode-se inicializar todos os membros de uma estrutura com zero, utilizando a inicialização {0}. Isso é útil para garantir que todos os membros com tipos numéricos sejam zero, e caracteres sejam '\0'. Por exemplo,

```c
#include <stdio.h>

struct Ponto {
    int x;
    int y;
    int z;
};

int main() {
    struct Ponto p1 = {0};  // Inicializa todos os membros com 0

    printf("p1.x = %d, p1.y = %d, p1.z = %d\n", p1.x, p1.y, p1.z);  // Saída: p1.x = 0, p1.y = 0, p1.z = 0

    return 0;
}
```

Quando se tem estruturas aninhadas (uma estrutura dentro de outra), a inicialização pode ser feita de forma aninhada, usando várias listas de inicializadores. Por exemplo,

```c
#include <stdio.h>

struct Ponto {
    int x;
    int y;
};

struct Retangulo {
    struct Ponto superiorEsquerdo;
    struct Ponto inferiorDireito;
};

int main() {
    struct Retangulo r1 = {{0, 1}, {5, 6}};  // Inicializa os membros da estrutura aninhada

    printf("Retangulo:\n");
    printf(" Superior Esquerdo: (%d, %d)\n", r1.superiorEsquerdo.x, r1.superiorEsquerdo.y);
    printf(" Inferior Direito: (%d, %d)\n", r1.inferiorDireito.x, r1.inferiorDireito.y);

    return 0;
}
```

## 5.3 Operações com estruturas

Em C, as estruturas são blocos de dados que agrupam membros sob um único nome. Diferente dos tipos de dados primitivos, as estruturas permitem organizar e manipular dados relacionados. Embora as operações diretamente aplicáveis a estruturas sejam mais limitadas em comparação com tipos de dados primitivos, existem algumas operações fundamentais que podem ser realizadas com estruturas. A tabela apresenta os tipos:

| **Operação**                         | **Operador/Exemplo**                          | **Explicação**                                                                                           |
|--------------------------------------|------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| **Cópia e atribuição direta, como uma unidade**                | `p2 = p1;`                                    | Copia os valores dos membros de uma estrutura para outra estrutura do mesmo tipo.                         |
| **Acesso aos membros**  | `p1.x = 5;`                                   | Usa o operador `.` para acessar e modificar os membros de uma estrutura.                                  |
| **Passagem de argumento para funções (Por Valor)**| `imprimirPonto(p1);`                          | Passa uma cópia da estrutura para uma função. Alterações dentro da função não afetam a estrutura original. |
| **Tomando-se seu endereço (Por Referência)** | `alterarPonto(&p1);`                      | Passa um ponteiro para a estrutura para uma função, permitindo a modificação direta dos membros da estrutura. |
| **Retorno de valores de funções** | `struct Ponto criarPonto(int x, int y);`      | Uma função pode retornar uma estrutura, permitindo a construção e retorno de objetos complexos.            |

As **estruturas não podem ser comparadas diretamente**. Os membros devem ser comparados individualmente.         |

## 5.5 Ponteiros de estruturas

Ponteiros para estruturas são variáveis que armazenam o endereço de uma estrutura em vez de armazenar diretamente os valores dos seus membros. Isso permite acessar e modificar os membros da estrutura através do ponteiro.

A declaração de um ponteiro para uma estrutura segue a mesma sintaxe de um ponteiro para qualquer outro tipo de dado, mas aponta para uma estrutura em vez de um tipo primitivo: `struct <nome da struct> *<nome do ponteiro>;`. A inicialização também será realizada de modo similar `struct <nome da struct> *<nome do ponteiro>=&<tag>;`. 

Quando se usa um ponteiro para acessar os membros de uma estrutura, utiliza-se o operador `->`, que é uma conveniência em C para acessar membros de uma estrutura através de um ponteiro.

O exemplo abaixo ilustra a declaração, inicialização e acesso aos membros de um ponteiro de estrutura.

```c
#include <stdio.h>

struct Ponto {
    int x;
    int y;
};

int main() {
    struct Ponto p1 = {2, 3};      // Declaração e inicialização de uma estrutura
    struct Ponto *ptr = &p1;       // Declaração de um ponteiro para a estrutura

    // Acessando membros da estrutura através do ponteiro
    printf("p1.x = %d, p1.y = %d\n", ptr->x, ptr->y);  // Usando o operador ->

    return 0;
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

Quando uma função retorna um ponteiro, é crucial que o ponteiro ainda seja válido após o retorno. Por exemplo, retornar um ponteiro para uma variável local resulta em comportamento indefinido, porque a variável local deixa de existir após a função terminar. Por exemplo,

```c
int* retornarPonteiroIncorreto() {
    int x = 10;
    return &x;  // Incorreto: x é uma variável local
}
```

Para evitar problemas, você deve alocar dinamicamente a memória ou usar variáveis globais/estáticas, logo

```c
int* retornarPonteiroCorreto() {
    int *p = (int *)malloc(sizeof(int));
    *p = 10;
    return p;  // Correto: memória foi alocada dinamicamente
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

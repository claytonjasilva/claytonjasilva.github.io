# 6. Estruturas de dados heterogêneas: *Struct*

As estruturas heterogêneas ou simplesmente **estrutura** são aquelas que admitem múltiplos elementos de forma que **os elementos podem ser de tipos diferentes**.

As estruturas (*structs*) são coleções de uma ou mais variáveis colocadas juntas sob um único nome. São também chamadas de registros.

Ajudam a organizar dados complicados, pois permitem que um grupo de variáveis relacionadas sejam tratadas como uma unidade ao invés de entidades separadas.

## 6.1 Conceitos básicos

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

## 6.2 Inicialização de estruturas

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

## 6.3 Operações com estruturas

Em C, as estruturas são blocos de dados que agrupam membros sob um único nome. Diferente dos tipos de dados primitivos, as estruturas permitem organizar e manipular dados relacionados. Embora as operações diretamente aplicáveis a estruturas sejam mais limitadas em comparação com tipos de dados primitivos, existem algumas operações fundamentais que podem ser realizadas com estruturas. A tabela apresenta os tipos:

| **Operação**                         | **Operador/Exemplo**                          | **Explicação**                                                                                           |
|--------------------------------------|------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| **Cópia e atribuição direta, como uma unidade**                | `p2 = p1;`                                    | Copia os valores dos membros de uma estrutura para outra estrutura do mesmo tipo.                         |
| **Acesso aos membros**  | `p1.x = 5;`                                   | Usa o operador `.` para acessar e modificar os membros de uma estrutura.                                  |
| **Passagem de argumento para funções (Por Valor)**| `imprimirPonto(p1);`                          | Passa uma cópia da estrutura para uma função. Alterações dentro da função não afetam a estrutura original. |
| **Tomando-se seu endereço (Por Referência)** | `alterarPonto(&p1);`                      | Passa um ponteiro para a estrutura para uma função, permitindo a modificação direta dos membros da estrutura. |
| **Retorno de valores de funções** | `struct Ponto criarPonto(int x, int y);`      | Uma função pode retornar uma estrutura, permitindo a construção e retorno de objetos complexos.            |

As **estruturas não podem ser comparadas diretamente**. Os membros devem ser comparados individualmente.         |

## 6.4 Ponteiros de estruturas

Ponteiros para estruturas são variáveis que armazenam o endereço de uma estrutura em vez de armazenar diretamente os valores dos seus membros. Isso permite acessar e modificar os membros da estrutura através do ponteiro.

A declaração de um ponteiro para uma estrutura segue a mesma sintaxe de um ponteiro para qualquer outro tipo de dado, mas aponta para uma estrutura em vez de um tipo primitivo: `struct <nome da struct> *<nome do ponteiro>;`. A inicialização também será realizada de modo similar `struct <nome da struct> *<nome do ponteiro>=&<tag>;`. 

**Quando se usa um ponteiro para acessar os membros de uma estrutura, utiliza-se o operador `->`, que é uma conveniência em C para acessar membros de uma estrutura através de um ponteiro.**

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

Ao acessar campos de uma *struct* através de ponteiros, você usa o operador `->` em vez do `.` (que é usado para acessar campos diretamente). Por exemplo:

```c
Node *nodePtr = malloc(sizeof(Node));  // alocação dinâmica de memória
nodePtr->data = 10;                    // acessando campo através do ponteiro
nodePtr->next = NULL;                  // inicializando o próximo como NULL
```

## 6.5 Vetores de `struct`

Um vetor de `struct` permite armazenar múltiplas instâncias de uma estrutura em um array, possibilitando o uso de dados heterogêneos de maneira organizada e facilitando o acesso a elementos estruturados em grande quantidade.

Para declarar um vetor de `struct`, é necessário definir a estrutura e, em seguida, criar um array do tipo dessa estrutura. Por exemplo, considere uma `struct` `Aluno` que possui os campos `nome`, `idade` e `nota`:

```c
#include <stdio.h>

struct Aluno {
    char nome[50];
    int idade;
    float nota;
};

int main() {
    // Declara um array de 3 structs Aluno
    struct Aluno turma[3] = {
        {"Alice", 20, 8.5},
        {"Bruno", 21, 7.3},
        {"Carla", 22, 9.1}
    };

    // Exibe as informações dos alunos
    for (int i = 0; i < 3; i++) {
        printf("Aluno %d: %s, Idade: %d, Nota: %.1f\n", i + 1, turma[i].nome, turma[i].idade, turma[i].nota);
    }

    return 0;
}
```

## 6.6 Exercícios

1. Elaborar um programa na linguagem C que defina uma *struct* chamada Carro, com os campos marca, ano e preco. Inicialize uma variável dessa estrutura com dados específicos e exiba esses dados.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio48.c)**

2. Elaborar um programa na linguagem C que defina uma struct chamada Livro, com os campos titulo, autor, ano. Permita que o usuário insira os dados de um livro e depois os exiba.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio49.c)**

3. Elaborar um programa na linguagem C que crie um array de 3 *structs* do tipo Aluno, contendo nome, idade e nota. Solicite os dados para cada aluno e exiba-os. 

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio50.c)**

4. Elaborar um programa na linguagem C que crie uma *struct* chamada Endereco com os campos rua, cidade e cep. Crie outra struct chamada Pessoa, que contém nome, idade e endereco do tipo Endereco. Solicite os dados e exiba-os.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio51.c)**

5. Elaborar um programa na linguagem C que crie uma função chamada exibeCarro que recebe uma struct Carro e exibe seus dados.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio52.c)**

6. Elaborar um programa na linguagem C que defina uma *struct* chamada Produto com os campos nome e preco. Crie uma função que atualize o preço do produto e exiba os novos dados.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio53.c)**

7.  Elaborar um programa na linguagem C que crie uma *struct* chamada Aluno com nome e nota. Solicite os dados de 3 alunos e calcule a média das notas.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio54.c)**

___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

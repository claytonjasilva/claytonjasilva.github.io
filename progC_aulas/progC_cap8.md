# 8. Tipos de Dados com `typedef`

O `typedef` em C é uma palavra-chave usada para criar alias (*apelidos*) para tipos de dados. Isso facilita o uso de tipos complexos, tornando o código mais legível e ajudando a manter a consistência de tipos em programas maiores. Com `typedef`, é possível definir nomes mais descritivos para tipos de dados, especialmente úteis em estruturas e ponteiros complexos.

## 8.1 Conceitos Básicos

A sintaxe básica do `typedef` é:

```c
typedef <tipo_existente> <novo_nome>;
```

A palavra-chave `typedef` permite que o programador defina um novo nome para um tipo de dados existente. Isso é útil para simplificar tipos longos ou criar alias para facilitar a leitura do código.

Exemplo básico:

```c
typedef unsigned long int ULI;
ULI valor = 100000;  // Agora ULI é um alias para unsigned long int
```

## 8.2 Uso com struct

Uma das aplicações mais comuns do `typedef` é com `structs`. Ele permite criar um nome mais simples para a estrutura sem precisar usar `struct` toda vez que uma variável desse tipo é declarada.

Exemplo com `struct` sem `typedef`:

```c
#include <stdio.h>

struct Ponto {
    int x;
    int y;
};

struct Ponto p1; // Declaração do tipo struct
```

Exemplo com `typedef`:

```c
#include <stdio.h>

typedef struct {
    int x;
    int y;
} Ponto;

Ponto p1; // Declaração simplificada com typedef
```

Nesse exemplo, Ponto se torna um alias para struct Ponto, simplificando a declaração e uso da estrutura.

## 8.3 `typedef` com Ponteiros

O typedef também pode ser utilizado para simplificar o uso de ponteiros complexos, especialmente em funções e arrays de ponteiros.

```c
#include <stdio.h>

typedef int* IntPtr;

int main() {
    IntPtr ptr1, ptr2; // Declara dois ponteiros para int
    int valor = 5;
    ptr1 = &valor;
    ptr2 = ptr1;

    printf("Valor via ptr1: %d\n", *ptr1);
    printf("Valor via ptr2: %d\n", *ptr2);

    return 0;
}
```

Neste exemplo, IntPtr representa o tipo int*, permitindo que ptr1 e ptr2 sejam ponteiros para int sem repetir o operador *.

## 8.4 `typedef` com Arrays e Ponteiros para Funções

Para tipos de dados complexos, como ponteiros para funções, o typedef ajuda a simplificar a sintaxe. Isso é útil em programas que utilizam callbacks e funções como argumentos.

Exemplo com Ponteiro para Função

```c
#include <stdio.h>

typedef int (*Operacao)(int, int);

int soma(int a, int b) {
    return a + b;
}

int main() {
    Operacao op = soma; // op é um ponteiro para a função soma
    printf("Resultado: %d\n", op(3, 4)); // Chama soma via op

    return 0;
}
```

Aqui, Operacao representa um ponteiro para uma função que recebe dois int e retorna um int, tornando o código mais legível.

## 8.5 Compatibilidade entre Plataformas

Em projetos que precisam ser portáveis, `typedef` é muito útil para definir tipos de dados que podem variar entre plataformas. Isso permite que o código seja ajustado facilmente sem modificações extensivas.

Exemplo

```c
#ifdef _WIN32
typedef unsigned int uint32;
#else
typedef unsigned long uint32;
#endif
```

Neste caso, uint32 pode ser ajustado conforme necessário para a plataforma em uso.

## 8.6 Vantagens do `typedef`

O typedef oferece diversas vantagens:

- Legibilidade: Permite descrever tipos complexos com nomes mais intuitivos e simples.
- Consistência: Facilita a manutenção de tipos em diferentes partes do código.
- Portabilidade: Simplifica a adaptação de código para diferentes plataformas, possibilitando ajustes de tipos de dados conforme o ambiente.
- Abstração: Ajuda a ocultar a complexidade dos tipos, permitindo que o programador se concentre na lógica principal do código.

## 8.7 Exercícios

1. Definir um typedef para um ponteiro de struct: Crie uma struct chamada Produto com os campos nome e preco. Em seguida, use typedef para definir ProdutoPtr como um ponteiro para Produto. Inicialize e exiba os valores de um Produto usando ProdutoPtr.

2.  Criar um tipo com typedef para um array: Use typedef para definir um tipo IntArray para representar um array de 10 inteiros. Inicialize o array e exiba os valores.

3. typedef com Funções: Crie um typedef para uma função que recebe dois float e retorna um float. Defina funções para multiplicação e divisão que correspondem a esse tipo. Escreva um programa que usa o typedef para chamar essas funções e exibir os resultados.

4. Criar um typedef para uma struct com union: Crie uma struct chamada Medida que contém uma union com membros metros e centimetros. Use typedef para simplificar a declaração de variáveis desse tipo e inicialize os valores de metros e centimetros, exibindo-os.

5. Definir um tipo de dados compatível com plataforma usando typedef: Usando typedef, crie um tipo uint16 que representa unsigned short int em uma plataforma e unsigned int em outra. Implemente um programa que verifica o tamanho do tipo uint16 e exibe uma mensagem dependendo da plataforma.

___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

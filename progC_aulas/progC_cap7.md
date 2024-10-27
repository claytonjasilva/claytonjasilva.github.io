# 6. Tipos de Dados com `typedef`

O `typedef` em C é uma palavra-chave usada para criar alias (*apelidos*) para tipos de dados. Isso facilita o uso de tipos complexos, tornando o código mais legível e ajudando a manter a consistência de tipos em programas maiores. Com `typedef`, é possível definir nomes mais descritivos para tipos de dados, especialmente úteis em estruturas e ponteiros complexos.

## 6.1 Conceitos Básicos

A sintaxe básica do `typedef` é:

```c
typedef <tipo_existente> <novo_nome>;
```

A palavra-chave typedef permite que o programador defina um novo nome para um tipo de dados existente. Isso é útil para simplificar tipos longos ou criar alias para facilitar a leitura do código.

Exemplo básico:

```c
typedef unsigned long int ULI;
ULI valor = 100000;  // Agora ULI é um alias para unsigned long int
```

## 6.2 Uso com struct

Uma das aplicações mais comuns do typedef é com structs. Ele permite criar um nome mais simples para a estrutura sem precisar usar struct toda vez que uma variável desse tipo é declarada.

Exemplo com struct sem typedef:

```c
#include <stdio.h>

struct Ponto {
    int x;
    int y;
};

struct Ponto p1; // Declaração do tipo struct
```

Exemplo com typedef:

```c
#include <stdio.h>

typedef struct {
    int x;
    int y;
} Ponto;

Ponto p1; // Declaração simplificada com typedef
```

Nesse exemplo, Ponto se torna um alias para struct Ponto, simplificando a declaração e uso da estrutura.

## 6.3 typedef com Ponteiros

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

## 6.4 typedef com Arrays e Ponteiros para Funções

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

## 6.5 Compatibilidade entre Plataformas

Em projetos que precisam ser portáveis, typedef é muito útil para definir tipos de dados que podem variar entre plataformas. Isso permite que o código seja ajustado facilmente sem modificações extensivas.

Exemplo

```c
#ifdef _WIN32
typedef unsigned int uint32;
#else
typedef unsigned long uint32;
#endif
```

Neste caso, uint32 pode ser ajustado conforme necessário para a plataforma em uso.

## 6.6 Vantagens do typedef

O typedef oferece diversas vantagens:

- Legibilidade: Permite descrever tipos complexos com nomes mais intuitivos e simples.
- Consistência: Facilita a manutenção de tipos em diferentes partes do código.
- Portabilidade: Simplifica a adaptação de código para diferentes plataformas, possibilitando ajustes de tipos de dados conforme o ambiente.
- Abstração: Ajuda a ocultar a complexidade dos tipos, permitindo que o programador se concentre na lógica principal do código.

## 6.7 Exercícios

1. Definir um typedef para um ponteiro de struct: Crie uma struct chamada Produto com os campos nome e preco. Em seguida, use typedef para definir ProdutoPtr como um ponteiro para Produto. Inicialize e exiba os valores de um Produto usando ProdutoPtr.

2.  Criar um tipo com typedef para um array: Use typedef para definir um tipo IntArray para representar um array de 10 inteiros. Inicialize o array e exiba os valores.

3. typedef com Funções: Crie um typedef para uma função que recebe dois float e retorna um float. Defina funções para multiplicação e divisão que correspondem a esse tipo. Escreva um programa que usa o typedef para chamar essas funções e exibir os resultados.

4. Criar um typedef para uma struct com union: Crie uma struct chamada Medida que contém uma union com membros metros e centimetros. Use typedef para simplificar a declaração de variáveis desse tipo e inicialize os valores de metros e centimetros, exibindo-os.

5. Definir um tipo de dados compatível com plataforma usando typedef: Usando typedef, crie um tipo uint16 que representa unsigned short int em uma plataforma e unsigned int em outra. Implemente um programa que verifica o tamanho do tipo uint16 e exibe uma mensagem dependendo da plataforma.












# 6. Estruturas de Dados Heterogêneas (*Union*)

As estruturas heterogêneas ou simplesmente **unions** são coleções de múltiplos elementos que permitem armazenar diferentes tipos de dados em um mesmo espaço de memória. Ao contrário das `structs`, onde cada membro ocupa seu próprio espaço, as `unions` compartilham o mesmo espaço de memória entre todos os membros. Assim, somente um valor pode ser armazenado na `union` a cada instante.

## 6.1 Conceitos Básicos

A sintaxe básica de uma `union` é:

```c
union <nome> {
    <lista de declaração das variáveis>;
};
```

A palavra-chave union introduz a declaração e indica que cada membro da union compartilha o mesmo espaço de memória, com o tamanho total da union sendo o tamanho do maior membro.

```c
union Data {
    int inteiro;
    float decimal;
    char caractere;
};
```

Neste caso, inteiro, decimal e caractere compartilham a mesma área de memória. Somente um deles pode armazenar um valor válido a qualquer momento.

## 6.2 Declaração e Uso de Union

A declaração e o uso de uma union em C podem ser feitos criando uma variável da union e atribuindo valores a seus membros. **Ao contrário de *struct*, ao atribuir um novo valor a um membro, o valor de outro membro será sobrescrito, pois o espaço é compartilhado**.

```c
#include <stdio.h>

union Data {
    int inteiro;
    float decimal;
    char caractere;
};

int main() {
    union Data data;

    data.inteiro = 10;
    printf("Inteiro: %d\n", data.inteiro);

    data.decimal = 5.5;
    printf("Decimal: %.1f\n", data.decimal);

    data.caractere = 'A';
    printf("Caractere: %c\n", data.caractere);

    return 0;
}
```

No exemplo acima, após atribuir um valor ao membro decimal, o valor anterior armazenado em inteiro foi perdido, já que decimal e inteiro compartilham o mesmo espaço. Vamos ilustrar com um exemplo,

```c
#include <stdio.h>

union Exemplo {
    int inteiro;
    float decimal;
};

int main() {
    union Exemplo valor;

    valor.inteiro = 42; // Atribui o valor 42 ao membro `inteiro`
    printf("Inteiro: %d\n", valor.inteiro);  // Exibe: Inteiro: 42

    valor.decimal = 3.14; // Agora atribui 3.14 ao membro `decimal`
    printf("Decimal: %.2f\n", valor.decimal); // Exibe: Decimal: 3.14

    // Como `decimal` e `inteiro` compartilham o mesmo espaço, `inteiro` foi alterado
    printf("Inteiro após mudar decimal: %d\n", valor.inteiro);  // Exibe um valor indefinido para `inteiro`

    return 0;
}
```

Em um array de union, cada elemento do array é uma union completa, e cada union compartilha o mesmo espaço de memória para todos os seus membros, assim como uma union individual.

Ou seja, cada posição do array de union pode armazenar um valor de apenas um membro de cada vez. No entanto, você pode atribuir um valor diferente para um membro específico em cada posição do array.

```c
#include <stdio.h>

union Dados {
    int inteiro;
    float decimal;
    char caractere;
};

int main() {
    union Dados valores[3]; // Array de 3 `union`s `Dados`

    // Inicializa cada `union` em posições do array com um membro específico
    valores[0].inteiro = 10;     // Primeiro elemento usa `inteiro`
    valores[1].decimal = 3.14f;  // Segundo elemento usa `decimal`
    valores[2].caractere = 'A';  // Terceiro elemento usa `caractere`

    // Exibe os valores
    printf("valores[0].inteiro = %d\n", valores[0].inteiro);
    printf("valores[1].decimal = %.2f\n", valores[1].decimal);
    printf("valores[2].caractere = %c\n", valores[2].caractere);

    return 0;
}
```

Explicando,   
    - valores[0] está usando o membro inteiro, então você pode acessar valores[0].inteiro.
    - valores[1] está usando o membro decimal, então você pode acessar valores[1].decimal.
    - valores[2] está usando o membro caractere, então você pode acessar valores[2].caractere.

Cada union dentro do array compartilha o mesmo espaço para seus membros, mas as posições individuais do array são independentes umas das outras. Isso significa que valores[0], valores[1], e valores[2] podem conter valores para membros diferentes ao mesmo tempo.


## 6.3 Diferenças entre Struct e Union

| Característica                        | `struct`                                                  | `union`                                                  |
|--------------------------------------|-----------------------------------------------------------|----------------------------------------------------------|
| **Alocação de Memória**              | Aloca memória suficiente para armazenar todos os membros. | Aloca memória apenas para o maior membro.                |
| **Compartilhamento de Memória**      | Cada membro possui seu próprio espaço de memória.         | Todos os membros compartilham o mesmo espaço de memória. |
| **Acesso aos Membros**               | Todos os membros podem ser acessados simultaneamente.     | Apenas um membro pode ser acessado por vez.              |
| **Usos Comuns**                      | Armazenar dados relacionados com diferentes tipos e acessá-los simultaneamente. | Armazenar dados que podem assumir diferentes formas, mas apenas uma de cada vez. |
| **Modificação de um Membro**         | Não afeta os valores dos outros membros.                  | Modificar um membro altera o valor dos outros membros.   |
| **Tamanho Total**                    | Soma dos tamanhos de todos os membros.                    | Tamanho do maior membro.                                 |
| **Exemplo de Declaração**            | `struct Dados { int a; float b; };`                       | `union Dados { int a; float b; };`                       |
| **Exemplo de Acesso**                | `dados.a = 5;` e `dados.b = 3.2;` (podem coexistir)       | `dados.a = 5;` e `dados.b = 3.2;` (somente um válido)    |
| **Quando Usar**                      | Quando é necessário armazenar e manipular dados de diferentes tipos simultaneamente. | Quando diferentes representações de dados precisam usar o mesmo espaço de memória, como economia de memória. |

## 6.4 Inicialização de Unions

A inicialização de *unions* em C é similar à de *structs*, mas com uma diferença essencial: todos os membros de uma union compartilham o mesmo espaço de memória. Assim, no momento da inicialização, apenas um membro pode ser definido de cada vez. As formas de inicialização consistem em: (i) inicialização no momento da declaração, (ii) atribuição de valores aos membros após a declaração.

Exemplo de inicialização de *union*

```c
#include <stdio.h>

union Medida {
    int metros;
    float centimetros;
};

int main() {
    union Medida medida1 = {5};  // Inicializa `metros` como 5 (outros membros não podem ser inicializados ao mesmo tempo)

    // Exibe o valor de `metros`
    printf("Metros: %d\n", medida1.metros);

    // Atribuição de um valor ao membro `centimetros`
    medida1.centimetros = 123.45;
    printf("Centimetros: %.2f\n", medida1.centimetros);  // Observação: `metros` perde seu valor original

    return 0;
}
```

No exemplo, como metros e centímetros compartilham o mesmo espaço de memória, ao atribuir um valor a centímetros, o valor original de metros é sobrescrito.

## 6.5 Operações com Unions

Operações com unions em C são limitadas a acessar e modificar um único membro de cada vez. Diferente de *structs*, onde todos os membros podem ser acessados simultaneamente, uma union permite trabalhar com um membro ativo por vez, devido ao compartilhamento de memória. Abaixo estão algumas operações comuns:

| Operação | Exemplo | Explicação |
| -------- | ------- | ---------- |
| Acesso e atribuição |	medida1.metros = 10; | Atribui valor a um dos membros da union, sobrescrevendo o anterior. |
| Uso de membros com diferentes tipos | medida1.centimetros = 123.45; | Permite o uso de múltiplos tipos com o mesmo espaço de memória. |
| Passagem para funções	| exibirMedida(medida1); | Como uma struct, uma union pode ser passada para uma função por valor ou referência. |

**Exemplo de Atribuição e Uso em Função**

```c
#include <stdio.h>

union Medida {
    int metros;
    float centimetros;
};

void exibirMedida(union Medida m) {
    printf("Medida em metros: %d\n", m.metros);
}

int main() {
    union Medida medida1;
    medida1.metros = 100;

    // Chama a função para exibir `metros`
    exibirMedida(medida1);

    return 0;
}
```

## 6.6 Ponteiros de Unions

Ponteiros para unions funcionam de forma semelhante aos ponteiros para *structs*, armazenando o endereço de uma union. Isso permite acessar e modificar o valor dos membros da union através do ponteiro, usando o operador `->`.

```c
#include <stdio.h>

union Medida {
    int metros;
    float centimetros;
};

int main() {
    union Medida medida1 = {10};   // Inicializa `metros`
    union Medida *ptr = &medida1;  // Declara ponteiro para `union`

    // Acessa o membro através do ponteiro
    printf("Metros: %d\n", ptr->metros);

    // Atualiza `centimetros` via ponteiro
    ptr->centimetros = 123.45;
    printf("Centimetros: %.2f\n", ptr->centimetros);

    return 0;
}
```

## 6.7 Exercícios

1. Elaborar um programa na linguagem C que defina uma union chamada Medida, com os campos metros e centimetros. Inicialize e exiba os valores dos membros, observando o compartilhamento de memória.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio55.c)**

2. Elaborar um programa na linguagem C que defina uma union Numero, com membros int, float, e double. Solicite ao usuário um valor para cada tipo e exiba os resultados, observando as mudanças nos valores dos outros membros.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio56.c)**

3. Elaborar um programa na linguagem C que crie uma union Dado com um char, um int e um float. Solicite que o usuário insira um valor de cada tipo e exiba o conteúdo de cada membro após cada atribuição.. 

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio57.c)**

4. Elaborar um programa na linguagem C que defina uma union chamada Temperatura com os membros celsius e fahrenheit. Crie funções para converter e exibir o valor em ambas as escalas.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio58.c)**

5. Elaborar um programa na linguagem C que implemente um programa que utilize uma union chamada Identificacao, com um número de CPF ou CNPJ, e peça ao usuário qual tipo de identificação ele quer usar, exibindo a informação corretamente.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio59.c)**

6. Elaborar um programa na linguagem C que crie um array de unions do tipo Numero para armazenar valores numéricos em diferentes formatos (inteiro e ponto flutuante) e exiba os valores, observando o comportamento dos dados.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio60.c)**

7.  Elaborar um programa na linguagem C que defina uma union Moeda com membros para real, dolar, e euro. Inicialize com um valor em reais e converta para as outras moedas com uma função.

Ver **[Solução proposta](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_c/exercicio61.c)**

___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

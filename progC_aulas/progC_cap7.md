# 7. Estruturas de Dados Heterogêneas (*Union*)

As estruturas heterogêneas ou simplesmente **unions** são coleções de múltiplos elementos que permitem armazenar diferentes tipos de dados em um mesmo espaço de memória. Ao contrário das `structs`, onde cada membro ocupa seu próprio espaço, as `unions` compartilham o mesmo espaço de memória entre todos os membros. Assim, somente um valor pode ser armazenado na `union` a cada instante.

## 7.1 Conceitos Básicos

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

## 7.2 Declaração e Uso de Union

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


## 7.3 Diferenças entre Struct e Union

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

## 7.4 Inicialização de Unions

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

## 7.5 Operações com Unions

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

## 7.6 Ponteiros de Unions

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

## 7.7 Exercícios

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

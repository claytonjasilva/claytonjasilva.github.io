# 4. Estruturas de dados. Estruturas *enum*.

## 4.1 Conceito de estrutura de dados

Uma estrutura de dados é uma forma organizada de armazenar, gerenciar e manipular dados de maneira eficiente. Ela define a disposição e o relacionamento dos dados em memória ou em armazenamento secundário, permitindo operações como inserção, busca, modificação e exclusão de dados de acordo com regras específicas.

**Conceitos Fundamentais**

- **Organização dos Dados**: Estruturas de dados organizam os dados em formatos lógicos e acessíveis, adequados para o uso em diferentes operações e algoritmos. A escolha da estrutura influencia diretamente o desempenho e a eficiência dos algoritmos aplicados a esses dados.
- **Tipos de Dados e Acesso**: Cada estrutura de dados possui um modelo específico para armazenar e acessar dados. Arrays, por exemplo, permitem acesso direto a cada elemento pelo índice, enquanto listas ligadas exigem uma travessia sequencial.
- **Eficiência e Propósito**: Diferentes estruturas são projetadas para atender necessidades específicas, como otimizar a busca (árvores e tabelas hash) ou facilitar a ordem de processamento (pilhas e filas).

## 4.2 Classificação das estruturas de dados

As estruturas de dados são amplamente classificadas nas teorias das linguagens de programação e da ciência da computação em geral. Essa classificação é essencial para entender o comportamento, a eficiência e a adequação de diferentes tipos de dados para várias operações e contextos.

Esses critérios de classificação ajudam a decidir qual estrutura é mais adequada para resolver um problema específico, otimizando tempo e uso de memória.

**Critérios para Classificação das Estruturas de Dados**

Aqui estão alguns critérios comuns para classificar estruturas de dados:

- Homogeneidade vs. Heterogeneidade

Homogêneas: Armazenam elementos do mesmo tipo. Exemplos incluem `arrays` e `enum`.

Heterogêneas: Permitem armazenar elementos de diferentes tipos. `struct` e `union` em C são exemplos.

- Natureza do Acesso e Organização

Linear: Os elementos são organizados em sequência, e geralmente há uma ordem natural para acessar cada elemento. Exemplos: arrays, listas, pilhas e filas.

Não Linear: A organização não é sequencial. Isso inclui árvores e grafos, onde o acesso aos elementos depende de relações complexas entre eles.

- Estrutura de Dados Estática vs. Dinâmica

Estáticas: O tamanho ou a estrutura não mudam em tempo de execução. `Arrays` em C são um exemplo clássico de estrutura de dados estática.

Dinâmicas: O tamanho ou a estrutura podem crescer ou diminuir durante a execução. Listas ligadas e árvores são exemplos de estruturas dinâmicas.

- Alocação de Memória

Contígua: Os elementos são armazenados em blocos contíguos de memória. `Arrays` são uma estrutura de dados contígua.

Encadeada (ou não contígua): Os elementos são armazenados em locais de memória diferentes, mas mantêm uma ligação entre si, como ocorre em listas ligadas.

- Persistência dos Dados

Volátil: As estruturas de dados perdem seu conteúdo quando o programa é encerrado. Arrays e listas em memória RAM são exemplos.

Persistente: Os dados são mantidos em armazenamento secundário (como arquivos ou bancos de dados), mesmo após o programa ser encerrado.

- Tipo de Acesso

Acesso Direto: Permite acesso imediato a qualquer elemento, como em `arrays`.

Acesso Sequencial: O acesso ocorre em uma sequência específica; listas ligadas são um exemplo onde geralmente é necessário seguir uma sequência para encontrar um elemento.

## 4.3 Estrutura `enum`

A estrutura `enum` pode ser classificada como uma estrutura de dados homogênea. É uma das mais simples disponíveis em C.

1. Homogeneidade: Todos os elementos de um enum são representados internamente como inteiros. Mesmo que os nomes descritivos sejam usados para maior clareza, o tipo subjacente é sempre um int. Assim, enum é homogêneo, pois todos os valores mantêm o mesmo tipo.
2. Simplicidade: enum não envolve armazenamento complexo nem estruturas de dados aninhadas. Cada elemento é apenas uma constante inteira nomeada. Não há necessidade de alocar ou liberar memória adicional, e o compilador gerencia tudo de forma simples e direta.
3. Propósito e Uso: enum serve exclusivamente para definir conjuntos limitados e nomeados de valores constantes, como estados, opções ou configurações. Essa simplicidade faz com que seja a escolha ideal para representar listas pequenas e fixas de valores.

### 4.3.1 Sintaxe e características

A estrutura `enum` é um conjunto ordenado de constantes inteiras. Cada elemento no `enum` é uma constante com um valor inteiro associado, e esses valores começam em 0 por padrão (a menos que sejam explicitamente definidos de outra forma). Esse conjunto de constantes é útil para representar valores fixos e bem definidos em um programa, facilitando a leitura e manutenção do código.

Permite definir um conjunto de valores inteiros nomeados, chamados de **constantes de enumeração**. Esses valores ajudam a tornar o código mais legível, substituindo números mágicos por nomes significativos, especialmente em contextos onde um conjunto de valores bem definidos representa diferentes estados ou opções.

A sintaxe básica de `enum` em C é

```c
enum NomeDoEnum {
    CONSTANTE1,
    CONSTANTE2,
    CONSTANTE3,
    // ...
};
```

Por padrão, o primeiro valor de um `enum` é 0, e cada constante subsequente incrementa o valor anterior em 1. No entanto, você pode atribuir valores específicos a qualquer constante, e as constantes subsequentes continuarão a partir desse valor.

Exemplo de enum simples

```c
enum DiasDaSemana {
    DOMINGO,     // 0
    SEGUNDA,     // 1
    TERCA,       // 2
    QUARTA,      // 3
    QUINTA,      // 4
    SEXTA,       // 5
    SABADO       // 6
};
```

onde DOMINGO é 0, SEGUNDA é 1, e assim por diante até SABADO, que é 6. Exemplo com valores definidos pelo usuário:

```c
enum Niveis {
    BAIXO = 1,
    MEDIO = 5,
    ALTO = 10
};
```

**Características do enum**

- **Definição de constantes inteiras**: Cada constante enum é representada como um int.
- **Legibilidade**: Substitui números mágicos por nomes significativos, melhorando a clareza do código.
- **Atribuição de valores personalizados**: É possível definir valores específicos para cada constante.
- **Aritmética de inteiros**: Como enum é representado por int, permite operações aritméticas e comparações.

**Aplicações do enum**

1. Representação de Estados: enum é ideal para representar estados específicos que não mudam. Exemplo:

```c
enum Estado {
    INICIANDO,
    EXECUTANDO,
    PARANDO,
    TERMINADO
};
```

2. Seleção de Opções em Menu: Pode ser usado para definir opções de menu:

```c
enum OpcoesMenu {
    NOVO = 1,
    ABRIR,
    SALVAR,
    SAIR
};
```

3. Dias da Semana ou Meses do Ano: Como dias e meses são constantes, enum é adequado para representar esses valores:

```c
enum Meses {
    JANEIRO = 1, FEVEREIRO, MARCO, ABRIL,
    MAIO, JUNHO, JULHO, AGOSTO,
    SETEMBRO, OUTUBRO, NOVEMBRO, DEZEMBRO
};
```

4. Configurações e Níveis: Ideal para configurações como Niveis de prioridade ou Modos de operação:

```c
enum Prioridade {
    BAIXA,
    MEDIA,
    ALTA
};
```

5. Controle de Erros: Pode ser usado para indicar diferentes tipos de erros ou status de operações:

```c
enum StatusErro {
    SEM_ERRO = 0,
    ERRO_ARQUIVO,
    ERRO_MEMORIA,
    ERRO_PERMISSAO
};
```

**Exemplo Completo de Uso de *enum***

Este exemplo mostra como enum pode ser usado para controlar o fluxo de um menu de opções:

```c
#include <stdio.h>

enum Menu {
    NOVO = 1,
    ABRIR,
    SALVAR,
    SAIR
};

int main() {
    int escolha;
    enum Menu opcao;

    printf("Escolha uma opcao:\n");
    printf("1 - Novo\n2 - Abrir\n3 - Salvar\n4 - Sair\n");
    printf("Digite sua escolha: ");
    scanf("%d", &escolha);

    opcao = (enum Menu) escolha;  // Converte a escolha para o tipo enum Menu

    switch (opcao) {
        case NOVO:
            printf("Novo arquivo criado.\n");
            break;
        case ABRIR:
            printf("Arquivo aberto.\n");
            break;
        case SALVAR:
            printf("Arquivo salvo.\n");
            break;
        case SAIR:
            printf("Saindo do programa.\n");
            break;
        default:
            printf("Opcao invalida.\n");
    }

    return 0;
}
```

### 4.3.2 Observação

A estrutura `enum` em C não pode contemplar elementos de tipos diferentes. Em C, os valores de enum são sempre constantes inteiras (int). Cada elemento em um enum representa um valor inteiro específico, e o compilador associa esses nomes a valores inteiros constantes, que são sequenciais por padrão (começando de 0, a menos que outro valor inicial seja especificado).

Por exemplo,

```c
enum Status {
    ATIVO = 1,
    INATIVO,
    PENDENTE
};
```

Onde ATIVO, INATIVO, e PENDENTE representam valores inteiros (1, 2, 3). Não é possível, no entanto, associar um elemento enum a outro tipo, como float, double, ou char.

Para representar elementos de tipos diferentes (heterogêneos), geralmente é melhor usar uma struct ou uma union, onde é possível combinar variáveis de diferentes tipos em uma mesma estrutura de dados.

Pode-se representar elementos char em um `enum`, mas eles ainda serão tratados internamente como inteiros. Em C, os caracteres são representados por valores inteiros baseados na tabela ASCII, então você pode definir constantes enum usando caracteres, e o compilador automaticamente converte esses caracteres em seus valores inteiros equivalentes.

Por exemplo,

```c
#include <stdio.h>

enum Letras {
    A = 'A',
    B = 'B',
    C = 'C'
};

int main() {
    enum Letras letra = A;

    printf("Valor de A: %d\n", A);         // Exibe o valor ASCII de 'A' (65)
    printf("Letra armazenada: %c\n", letra); // Exibe 'A' como caractere

    return 0;
}
```

___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

# 2. Programando com Arduino. Controle de fluxo: condicionais simples e compostas

Os comandos de controle de fluxo para o Arduíno são aqueles que permitem ao programador **alterar a sequência de execução das instruções** do programa, similares à linguagem C/C++.  

Podem ser divididos em dois grupos:  

- Condicionais **simples**
- Condicionais **compostas**
  
As condições que determinam o fluxo de execução das instruções são definidas pelo resultado de uma **expressão lógica**.  

## 2.1 Expressões lógicas

As **expressões aritméticas** resultam em números, por exemplo **ponto flutuante** (tipo *float*) ou **inteiros** (tipo *int*).  

As **expressões lógicas** são aquelas cujo resultado é um **valor lógico**. Na linguagem C, o valor lógico **retornado por uma expressão lógica verdadeira é 1**; e o valor lógico **falso é 0**.

Nesse ponto cabe uma observação:

- Verdadeiro: 1 (resultado de expressões lógicas, **mas qualquer valor diferente de 0 é considerado verdadeiro em contextos booleanos**).
- Falso: 0.

Assim como os operadores aritméticos especificam à máquina uma operação aritmética, os **operadores lógicos** especificam **operações lógicas**, que são de dois tipos: **relacionais** ou de comparação e operações **lógicas** (próprias da lógica matemática).

### 2.1.1 Operadores lógicos de comparação

Os operadores lógicos de comparação possibilitam criar **proposições simples** estabelecendo a **relação comparativa** entre dois dados do mesmo tipo, por exemplo, duas variáveis, uma variável e uma expressão aritmética, duas constantes etc.

A tabela especifica os operadores e a respectiva operação lógica correspondente.

| Operador | Operação |
| - | - |
| > | maior |
| < | menor |
| >= | maior ou igual |
| <= | menor ou igual |
| == | igual |
| != | diferente |

Os operadores relacionais são aplicados a **dois operandos**. Por exemplo, `3 > 2`, que compara o número 3 com o número 2.

Os operandos podem conter **números**; **variáveis**, por exemplo, `x > 3`; e **expressões aritméticas**, por exemplo, `x + 3 <= 4 + y`. A máquina resolve primeiro as expressões aritméticas (os operadores aritméticos têm precedência sobre os lógicos).  

Expressões lógicas podem ser operandos de outras expressões lógicas. Isso é possível porque as expressões lógicas retornam valores inteiros (int) que são interpretados como 0 (falso) ou 1 (verdadeiro). Pode-se usar esses valores como operandos em outras operações lógicas para construir expressões mais complexas.

### 2.1.2 Operadores lógicos

Variáveis, expressões ou constante lógicas podem ser combinadas com operadores lógicos para formar **proposições compostas**.  
As operações lógicas básicas são **conjunção**, **disjunção** e **negação (inversão lógica)**.  

| Operador | Operação |
| - | - |
| && | conjunção (*and*) |
| \|\| | disjunção (*or*) |
| ! | negação |

Existem operações que podem ser aplicadas **bit a bit**.

As operações lógicas também podem ser utilizadas **bit a bit**. Nesse caso, os operandos devem ser inteiros. Os operadores são os seguintes:

| Operador | Operação |
| - | - |
| & | conjunção bit a bit (*and*) |
| \ | disjunção bit a bit (*or*) |
| ^ | ou exclusivo bit a bit (*xor*) |
| ! | negação |
| << | deslocamento à esquerda |
| >> | deslocamento à direita |

As operações lógicas bit a bit (ou *bitwise*) são usadas para manipular bits individuais de um número. Em C, essas operações são realizadas usando operadores específicos que operam diretamente nos bits de um operando. **Essas operações são úteis em muitas aplicações de baixo nível, como manipulação de registros, criptografia, e controle de hardware**.

As operações de conjunção, disjunção e negação são aplicadas a cada bit dos operandos. Os operadores bit a bit operam diretamente sobre os bits individuais dos operandos.

As operações de deslocamento requerem como operando o inteiro cuja representação em bita será aplicado o deslocamento, bem como o número de bits de posições de deslocamento. Por exemplo,

```cpp
int a = 3; // 11 em binário
int res = a << 2; // Desloca os bits de 'a' duas posições para a esquerda
Serial.begin(9600);
Serial.println(res); // Imprime o valor de 'res' no monitor serial
```

irá apresentar na console do monitor serial o valor 12 (1100 em binário).

Operações lógicas bit a bit são projetadas para serem usadas com tipos de dados inteiros (como int, unsigned int, char, short, long). Aplicar esses operadores a tipos de dados de ponto flutuante (como float e double) não é apropriado e geralmente resulta em comportamento indefinido ou em um erro de compilação, dependendo do compilador e das configurações.

Os caracteres podem ser usados com operadores bit a bit porque **cada caractere é internamente representado por um valor inteiro correspondente ao seu código ASCII**.

## 2.2 Condicionais simples

Na condicional simples, a execução de um bloco de instruções interno ao comando é condicionada ao resultado da expressão lógica da sentença.

Sua sintaxe é

```cpp
if (<condição>) {
  <bloco de instruções>
}
```

Processo de execução pela máquina:  

1. A condição via de regra é uma expressão lógica, cujo valor é calculado pela máquina.  **A condição só pode gerar um resultado dentre dois possíveis: diferente de 0 - 1 se a condição for expressão lógica, (verdadeiro), ou 0, (falso)**.

- Na linguagem para a Arduíno, não existe uma constante de linguagem chamada *True*. Em vez disso, valores lógicos são representados por 0 e diferente de 0. Por convenção, 0 é considerado falso (*false*), e qualquer valor diferente de 0 é considerado verdadeiro (*true*), com 1 sendo usado frequentemente para representar verdadeiro ou resultante de uma expressão lógica.

2. A instrução (ou bloco de instruções) interna é executada somente se a condição ou o cálculo da expressão lógica resultar diferente de 0 e a execução do programa prossegue após a estrutura *if*.

3. Em caso contrário, se a condição for falsa (valor 0), a máquina executa a instrução seguinte ao *if* do programa,
sem executar a instrução (ou bloco de instruções).  

Observações gerais:  

- O bloco das instruções internas ao *if* após a instrução condicional **deve ser delimitado entre chaves**.  
- **Se houver somente uma instrução no bloco** o compilador admite não se usar a delimitação entre chaves.  
- A indentação opera exclusivamente para proporcionar mais clareza ao código, facilitando a manutenção, legibilidade etc.  

Um exemplo é o seguinte:  

void setup() {
  Serial.begin(9600); // Inicializa a comunicação serial a 9600 bps
}

void loop() {
  int num; // Declaração da variável num

  // Solicitar ao usuário que insira um número
  Serial.println("Digite um numero: ");
  
  // Esperar até que o usuário insira um número no monitor serial
  while (Serial.available() == 0) {
    // Aguarda a entrada do usuário
  }
  
  // Lê o número inserido
  num = Serial.parseInt();

  // Verificar o valor de 'num' e enviar a resposta correspondente
  if (num > 10) {
    Serial.println("\n\nO numero e maior do que 10");
  }
  if (num == 10) {
    Serial.println("\n\nVoce acertou!\n");
    Serial.println("\nO numero e igual a 10");
  }
  if (num < 10) {
    Serial.println("\n\nO numero e menor do que 10");
  }
  
  // Adiciona um pequeno atraso antes de reiniciar o loop
  delay(1000); 
}

## 2.3 Condicionais compostas

Na condicional composta, **a execução de um bloco de instruções interno** ao comando *if* é condicionada ao valor da condição ou resultado da expressão lógica da sentença ser verdadeiro (diferente de 0), enquanto a execução de **outro bloco de instruções**, interno ao *else* do comando *if*, é condicionada ao resultado ser falso (valor lógico igual a 0).

A sintaxe é

```cpp
if (<condição>) {
  <bloco 1 de instruções>
}
else {
  <bloco 2 de instruções>
}
```

Processo de execução pela máquina:  

1. A condição é avaliada ou a expressão lógica é calculada pela máquina, gerando um dentre dois resultados, **diferente de 0** (verdadeiro) ou **0** (falso).  
2. A instrução (ou bloco 1 de instruções) - interno ao *if* - é executado somente se a expressão lógica de sua sentença resultar 1.  
3. A instrução (ou bloco 2 de instruções) - interno ao *else* é executado se a expressão lógica resultar 0.
4. Em ambas as situações, o programa prossegue sua execução a partir da instrução seguinte ao comando *if*.

Observações gerais:  

- Como anteriormente, **os blocos de instruções devem ser delimitados entre chaves**.  
- **Se houver somente uma instrução no bloco** o compilador admite não se usar a delimitação entre chaves.

Um exemplo é o seguinte:

```cpp
void setup() {
  Serial.begin(9600); // Inicializa a comunicação serial a 9600 bps
}

void loop() {
  int num; // Declaração da variável num

  // Solicitar ao usuário que insira um número
  Serial.println("Digite um numero: ");
  
  // Esperar até que o usuário insira um número no monitor serial
  while (Serial.available() == 0) {
    // Aguarda a entrada do usuário
  }
  
  // Lê o número inserido
  num = Serial.parseInt();

  // Verificar o valor de 'num' e enviar a resposta correspondente
  if (num > 10) {
    Serial.println("\n\nO numero e maior do que 10");
  } else {
    Serial.println("\n\nO numero e menor ou igual a 10");
    if (num < 5) {
      Serial.println("\n\nO numero e menor do que 5\n");
      Serial.print("\nO numero e ");
      Serial.println(num);
    }
  }
  
  // Adiciona um pequeno atraso antes de reiniciar o loop
  delay(1000); 
}
```

## 2.4 Aninhamento de *ifs* - comando `switch...case`

Seja o seguinte uso de condicional composta

```cpp
void setup() {
  Serial.begin(9600); // Inicializa a comunicação serial a 9600 bps
}

void loop() {
  int a; // Declaração da variável a

  // Solicitar ao usuário que insira um número
  Serial.println("Digite um numero: ");
  
  // Esperar até que o usuário insira um número no monitor serial
  while (Serial.available() == 0) {
    // Aguarda a entrada do usuário
  }
  
  // Lê o número inserido
  a = Serial.parseInt();

  // Verificar o valor de 'a' e enviar a resposta correspondente
  if (a > 100) {
    Serial.println("a maior do que 100");
  } else if (a > 50) {
    Serial.println("a maior do que 50");
  } else {
    Serial.println("a menor ou igual a 50");
  }
  
  // Adiciona um pequeno atraso antes de reiniciar o loop
  delay(1000); 
}
```

O código possui dois comandos condicionais compostos *if...else*. Diz-se que os ***ifs* estão aninhados**.

A linguagem do Arduíno possui uma instrução composta (`switch...case`) de condicional composta múltipla cuja sintaxe é a seguinte:  

```cpp
switch (<expressão integral>) {
case <dado inteiro, caractere ou enumerador>:
  <bloco 1 de instruções>
  break;
case <dado inteiro, caractere ou enumerador>:
  <bloco 2 de instruções>
  break;
...
default:
  <bloco n de instruções>
}
```

O argumento do *switch* é a expressão que você deseja avaliar. **Esta expressão pode ser de qualquer tipo de dado integral, ou seja, que representa inteiros**, como int, char, enum, etc. O valor desta expressão é comparado com os valores especificados em cada case.

O argumento do case pode ser:

- Constante inteira;
- Constante caractere;
- Enumeradores. Enumeradores são tipos definidos pela palavra reservada `enum` definidos pelo identificador seguidos de valores entre {} separados por vírgulas. Por exemplo, `enum Dias {SEG, TER, QUA, QUI, SEX, SAB, DOM};`. Em C, os elementos de uma enumeração (enum) devem ser valores inteiros constantes. 

O funcionamento do `switch...case` é o seguinte:

1. A máquina testa o valor do argumento do `switch` comparando-o com o argumento do primeiro `case`.
2. Caso seja igual, executa o bloco 1 de instruções (interno ao *case*) e segue para a instrução posterior ao *switch* do código.
3. Caso não seja igual, testa o valor do argumento do `switch`, comparando-o com o argumento do próximo `case`.
4. Caso seja igual, executa o bloco de instruções interno ao *case*; em caso contrário, segue ao próximo `case`.
5. A máquina executa esse procedimento até alcançar `default`, caso o argumento do `switch` não seja igual aos argumentos dos `case`.
6. Nesse caso, executa o bloco de instruções interno ao `default` e segue à execução da próxima instrução do código.
7. Importante que o **uso do *default* é opcional**.

Adaptando o exemplo anterior para ilustrar o uso do `switch...case`, temos:

```cpp
void setup() {
  Serial.begin(9600); // Inicializa a comunicação serial a 9600 bps
}

void loop() {
  int a; // Declaração da variável a

  // Solicitar ao usuário que insira um número
  Serial.println("Digite um numero: ");
  
  // Esperar até que o usuário insira um número no monitor serial
  while (Serial.available() == 0) {
    // Aguarda a entrada do usuário
  }
  
  // Lê o número inserido
  a = Serial.parseInt();

  // Usando switch para verificar o valor de 'a'
  switch (a) {
    case 100:
      Serial.println("Voce digitou 100");
      break;
    case 50:
      Serial.println("Voce digitou 50");
      break;
    default:
      Serial.println("Voce digitou numero diferente de 50 e de 100");
      break;
  }

  // Adiciona um pequeno atraso antes de reiniciar o loop
  delay(1000); 
}
```

**Observação**. Você pode usar o mesmo bloco de instruções subordinado a vários `case` diferentes. Isso é feito simplesmente omitindo as instruções de `break` entre os `case`, permitindo que a execução "caia" (*fall through*) para o próximo case. Por exemplo,

```cpp
switch (<expressão integral>) {
case <dado inteiro, caractere ou enumerador>: 
case <dado inteiro, caractere ou enumerador>:
  <bloco 2 de instruções>
  break;
...
default:
  <bloco n de instruções>
}
```

## 2.5 O operador ternário `? :`

Na linguagem do Arduíno, o operador ternário `? :` é uma forma concisa de expressão condicional que pode substituir a estrutura `if-else` para operações simples. Este operador é também conhecido como operador condicional.

A sintaxe é

```cpp
<condição> ? <instrução ou bloco de instruções 1> : <instrução ou bloco de instruções 2>;
```

, onde

- condição: Uma expressão lógica que é avaliada como verdadeira (não zero) ou falsa (zero).
- instrução ou bloco de instruções 1: A expressão que é avaliada e retornada se a condição for 1 (verdadeira).
- instrução ou bloco de instruções 2: A expressão que é avaliada e retornada se a condição for 0 (falsa).

## 2.6 Desvio incondicional. Comando `goto`

Na linguagem do Arduíno dispõe-se de um comando de **desvio incondicional**, `goto`. Precisa ser utilizado com muito cuidado, pois é próprio de uma linguagem não estruturada.

O comando `goto` é frequentemente associado a linguagens de programação não estruturadas, **onde o fluxo de controle pode ser alterado arbitrariamente, levando a um código difícil de seguir e manter**. No entanto, é importante entender que o C, embora seja uma linguagem de programação estruturada, inclui o comando goto por razões históricas e por permitir certos usos específicos onde pode ser conveniente.

As linguagens não estruturadas são caracterizadas pela ausência de estruturas claras para o **controle de fluxo de execução das instruções**, como *loops* e condicionais, o que frequentemente leva ao uso excessivo de comandos `goto`, resultando em código espaguete (*spaghetti code*). Exemplos incluem linguagens de primeira geração como Assembly.

O formato geral do `goto` é

```cpp
<nome do rotulo>: <instrução>
...
goto <nome do rótulo>;
```

O rótulo (*label*) pode ser um nome qualquer, contanto que siga as regras de nomenclatura dos identificadores. Um rótulo é definido como um identificador seguido de dois pontos (`:`), e pode ser colocado antes de qualquer instrução em uma função.

## 2.7 Tipos caracteres e cadeias de caracteres

### 2.7.1 Tipo caractere (*char*)

Os caracteres são tipo *char*. Os caracteres válidos na linguagem do Arduíno são baseados no conjunto de caracteres ASCII. O ASCII (*American Standard Code for Information Interchange*) é um padrão de codificação de caracteres que representa texto em computadores e outros dispositivos que utilizam texto. O ASCII usa valores numéricos para representar caracteres, incluindo letras, dígitos, sinais de pontuação e caracteres de controle.

Caracteres ASCII em C
Letras: A-Z (maiúsculas), a-z (minúsculas)
Dígitos: 0-9
Sinais de pontuação: ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ { | } ~ `
Caracteres de controle: como \n (nova linha), \t (tabulação), \0 (nulo), entre outros.

Os caracteres são representados internamente por seus valores ASCII, que são inteiros decimais correspondentes a cada caractere. A tabela ASCII (American Standard Code for Information Interchange) define esses valores para um conjunto padrão de caracteres.

A tabela ASCII mapeia caracteres para números inteiros. Por exemplo,

- Letras Maiúsculas: 'A': 65; 'B': 66; 'Z': 90
- Letras Minúsculas: 'a': 97; 'b': 98
- Dígitos: '0': 48; '1': 49; '9': 57
- Sinais de Pontuação e Outros Símbolos: '!': 33; '@': 64; '#': 35
- Caracteres de Controle (não imprimíveis): '\n' (nova linha): 10; '\t' (tabulação): 9

Os caracteres individuais precisam ser delimitados por aspas simples (' '). Alguns caracteres de controle comuns também são representados usando aspas simples, mas com sequências de escape (`\`).

A declaração de variáveis do tipo *char* possui a seguinte sintaxe:

```c
char x;
```

e a declaração com inicialização

```cpp
char x = '<caractere>';
```

As atribuições podem ser realizadas para caracteres da mesma forma que para variáveis *int* e *float*, `<nome> = '<caractere>'`.

Além disso, pode-se comparar caracteres diretamente usando os operadores de comparação (==, !=, <, >, <=, >=), pois os caracteres são representados internamente por seus valores ASCII. Similarmente, entre eles podem ser aplicados operadores lógicos bit a bit.

### 2.7.2 Tipo cadeia de caracteres (*string*)

As cadeias de caracteres podem ser definidas de duas formas no Arduino: usando vetores de caracteres (`char`) ou objetos `String`. **Para a linguagem Arduino, um conjunto de caracteres entre aspas duplas é considerado uma *string*.**

No caso de variáveis, as *strings* baseadas em `char` precisam ser declaradas **sem inicialização**, da seguinte forma:

| Tipo | Descrição |
| - | - |
| `char <nome>[<tamanho>];` | Declaração sem inicialização |

Onde o `nome` é um identificador cujas regras são similares às de qualquer outra variável.

O `tamanho` representa o número máximo de caracteres que a *string* pode conter, **incluindo o caractere nulo (' ') que termina toda *string***. Isso significa que o tamanho do array deve ser grande o suficiente para acomodar todos os caracteres da string mais o terminador nulo.

Podem também ser declaradas com a inicialização, da seguinte forma:

| Tipo | Descrição |
| - | - |
| `char <nome>[] = "<cadeia de caracteres>"` | Declaração com inicialização  |

**Observações**.

1. Os comandos de atribuição não podem ser utilizados nas *strings* baseadas em `char` da mesma forma que nas variáveis *int*, *float* e *char*; Para manipulação de strings no Arduino, você pode usar o objeto `String` que permite atribuições diretas, como `String nome = "Maria";`.
2. As *strings* baseadas em `char` não podem ser usadas diretamente em operações lógicas da mesma forma que variáveis inteiras ou caracteres. ***Strings* em C (e Arduino) são arrays de caracteres terminados com o caractere nulo ' ', cujo nome em uma expressão é interpretado como um ponteiro** para o primeiro caractere da *string*. No entanto, há maneiras de realizar operações lógicas e comparações envolvendo strings utilizando funções da biblioteca padrão do Arduino ou funções C da biblioteca [string.h](https://petbcc.ufscar.br/string/).

No Arduino, uma *string* pode ser um **vetor de caracteres** (como em C) ou um objeto `String`:

- Para vetores de caracteres:
  
  ```cpp
  char nome[] = "Maria";
  ```

- Para objetos `String`:
  
  ```cpp
  String nome = "Maria";
  ```

**Toda string baseada em `char` possui um caractere 'terminador' definido no ASCII pelo caractere de escape ` `**. Por exemplo, a palavra "Maria" é uma *string* que na linguagem Arduino é definida em memória por:

| 0 | 1 | 2 | 3 | 4 | 5 |
| - | - | - | - | - | - |
| 'M' | 'a' | 'r' | 'i' | 'a' | ' ' |

Como uma *string* baseada em `char` é um **vetor de caracteres**, o nome do vetor define um **ponteiro** do vetor, ou seja, a variável que aponta para o endereço onde o primeiro caractere do vetor está armazenado em memória. Em razão disso, os elementos da *string* (os caracteres) podem ser identificados pela sua posição relativa. A sintaxe para a identificação é, como mostrado no exemplo:

```cpp
char nome[] = "Maria";
Serial.print("A primeira letra do nome é ");
Serial.println(nome[0]);
```

É bom destacar que a posição sempre é iniciada a partir de 0.

## 2.8 Entrada e saída com caracteres e cadeias de caracteres no Arduino

### 2.8.1 Entrada e Saída com o Monitor Serial do Arduino

#### Funções `Serial.print()` e `Serial.println()`

No Arduino, as funções `Serial.print()` e `Serial.println()` são usadas para enviar dados do Arduino para o Monitor Serial no computador.

- `Serial.print()`: Imprime os dados na janela do Monitor Serial sem adicionar uma nova linha ao final.
- `Serial.println()`: Imprime os dados na janela do Monitor Serial e move o cursor para a próxima linha.

Exemplo básico:

```cpp
void setup() {
  Serial.begin(9600);  // Inicializa a comunicação serial a 9600 bps
}

void loop() {
  Serial.print("Digite um caractere: ");
  while (Serial.available() == 0) {
    // Aguarda até que um caractere seja digitado no Monitor Serial
  }
  char c = Serial.read();  // Lê o caractere digitado
  Serial.print("Você digitou: ");
  Serial.println(c);
  delay(1000);
}
```

#### Função `Serial.read()`

A função `Serial.read()` lê o primeiro byte de dados disponíveis na entrada serial e o retorna como um valor inteiro. Esse valor pode ser convertido em um caractere se necessário.

Exemplo:

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    char c = Serial.read();  // Lê o caractere digitado
    Serial.print("Você digitou: ");
    Serial.println(c);
  }
}
```

#### Função `Serial.readString()`

A função `Serial.readString()` lê a entrada serial e retorna uma `String` contendo os caracteres recebidos até um delimitador ou timeout. Por padrão, o delimitador é o caractere de nova linha (`
`).

Exemplo:

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    String texto = Serial.readString();
    Serial.print("Você digitou: ");
    Serial.println(texto);
  }
}
```

#### Função `Serial.parseInt()`

A função `Serial.parseInt()` lê a entrada serial e converte os números recebidos em um valor inteiro (`int`).

Exemplo:

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("Digite um número:");
  while (Serial.available() == 0) {
    // Aguarda a entrada do usuário
  }
  int num = Serial.parseInt();
  Serial.print("Você digitou: ");
  Serial.println(num);
}
```

### 2.8.2 Manipulação de Strings no Arduino

As `String` são objetos utilizados no Arduino para manipulação de texto. As `String` podem ser manipuladas de diversas maneiras, utilizando métodos específicos.

Exemplo de criação e manipulação de uma `String`:

```cpp
void setup() {
  Serial.begin(9600);
  String nome = "Arduino";  // Cria uma String
  Serial.print("O nome é: ");
  Serial.println(nome);
  
  nome += " Uno";  // Concatena " Uno" à String
  Serial.print("O nome completo é: ");
  Serial.println(nome);
}

void loop() {
  // O loop fica vazio neste exemplo
}
```

### 2.8.3 Entrada e Saída com Funções Avançadas

No ambiente do Arduino, a entrada e saída de caracteres e strings podem ser manipuladas com outras funções específicas para diferentes situações.

#### Funções `getchar()` e `putchar()`

As funções `getchar()` e `putchar()` não são diretamente disponíveis no Arduino, mas podem ser simuladas usando `Serial.read()` e `Serial.write()` para leitura e escrita de caracteres.

Exemplo:

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    char c = Serial.read();  // Simula getchar()
    Serial.write(c);         // Simula putchar()
  }
}
```

#### Funções `getString()` e `putString()`

Para ler e escrever `String` completas, usa-se `Serial.readString()` e `Serial.print()` ou `Serial.println()`.

Exemplo:

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    String texto = Serial.readString();
    Serial.print("Você digitou: ");
    Serial.println(texto);
  }
}
```

## 2.9 Exemplos

1. Escrever um programa no Arduíno para resolver as seguintes expressões lógicas (descritas sem seguir a sintaxe de C) e escrever o resultado:
  
**a.** $(2 > x) e (3 + 4 = 6)$, dado que *x*=7  
**b.** $(x > y) ou (x + y = 6)$, dado que *x*=3, *y*=5  
**c.** $\overline{(x > y) ou (x + y = 6)}$  

```cpp
void setup() {
  Serial.begin(9600);
  
  int x = 7;
  bool resultado_a = (2 > x) && (3 + 4 == 6);
  Serial.print("Resultado a: ");
  Serial.println(resultado_a);
  
  int y = 5;
  bool resultado_b = (x > y) || (x + y == 6);
  Serial.print("Resultado b: ");
  Serial.println(resultado_b);
  
  bool resultado_c = !((x > y) || (x + y == 6));
  Serial.print("Resultado c: ");
  Serial.println(resultado_c);
}

void loop() {
  // O loop está vazio porque a execução ocorre no setup
}
```

2. Elaborar um programa na linguagem do Arduíno para ler dois diferentes números; calcular e escrever o maior dos números lidos.

```cpp
int num1, num2;

void setup() {
  Serial.begin(9600);
  Serial.println("Digite o primeiro numero:");
  while (Serial.available() == 0) {}
  num1 = Serial.parseInt();
  
  Serial.println("Digite o segundo numero:");
  while (Serial.available() == 0) {}
  num2 = Serial.parseInt();
  
  if (num1 > num2) {
    Serial.print("O maior numero é: ");
    Serial.println(num1);
  } else {
    Serial.print("O maior numero é: ");
    Serial.println(num2);
  }
}

void loop() {
  // O loop está vazio porque a execução ocorre no setup
}
```

3. Elaborar um programa na linguagem do Arduíno para ler o nome e a respectiva idade de duas pessoas; calcular e escrever o nome da pessoa mais velha. Admitir que as pessoas podem ter a mesma idade.

```cpp
char nome1[20], nome2[20];
int idade1, idade2;

void setup() {
  Serial.begin(9600);
  
  Serial.println("Digite o nome da primeira pessoa:");
  while (Serial.available() == 0) {}
  Serial.readBytesUntil('\n', nome1, 20);
  
  Serial.println("Digite a idade da primeira pessoa:");
  while (Serial.available() == 0) {}
  idade1 = Serial.parseInt();
  
  Serial.println("Digite o nome da segunda pessoa:");
  while (Serial.available() == 0) {}
  Serial.readBytesUntil('\n', nome2, 20);
  
  Serial.println("Digite a idade da segunda pessoa:");
  while (Serial.available() == 0) {}
  idade2 = Serial.parseInt();
  
  if (idade1 > idade2) {
    Serial.print(nome1);
    Serial.println(" é mais velho.");
  } else if (idade2 > idade1) {
    Serial.print(nome2);
    Serial.println(" é mais velho.");
  } else {
    Serial.println("Ambos têm a mesma idade.");
  }
}

void loop() {
  // O loop está vazio porque a execução ocorre no setup
}
```

4. Elaborar um programa na linguagem do Arduíno para ler a idade de uma pessoa. Se a idade for igual ou inferior a 10 anos, classificar a pessoa como 'criança'. Caso a idade seja inferior a 18 anos e superior a 10 anos, classificar como 'adolescente'. Em qualquer outro caso, classificar como 'adulto'. Escrever a classificação atribuída.

```cpp
int idade;

void setup() {
  Serial.begin(9600);
  
  Serial.println("Digite a idade:");
  while (Serial.available() == 0) {}
  idade = Serial.parseInt();
  
  if (idade <= 10) {
    Serial.println("A pessoa é criança.");
  } else if (idade < 18) {
    Serial.println("A pessoa é adolescente.");
  } else {
    Serial.println("A pessoa é adulta.");
  }
}

void loop() {
  // O loop está vazio porque a execução ocorre no setup
}
```

5. Elaborar um programa na linguagem C para ler os nomes, pesos e altura de 3 pessoas; calcular e escrever os nomes de cada pessoa com IMC superior a 22 ('valor alto') ou com IMC inferior a 20 ('valor baixo'), seguido do respectivo IMC calculado.

```cpp
char nome[20];
float peso, altura, imc;

void setup() {
  Serial.begin(9600);
  
  for (int i = 1; i <= 3; i++) {
    Serial.print("Pessoa ");
    Serial.println(i);
    
    Serial.println("Digite o nome:");
    while (Serial.available() == 0) {}
    Serial.readBytesUntil('\n', nome, 20);
    
    Serial.println("Digite o peso:");
    while (Serial.available() == 0) {}
    peso = Serial.parseFloat();
    
    Serial.println("Digite a altura:");
    while (Serial.available() == 0) {}
    altura = Serial.parseFloat();
    
    imc = peso / (altura * altura);
    
    if (imc < 20) {
      Serial.print(nome);
      Serial.print(" - valor baixo, IMC = ");
      Serial.println(imc);
    } else if (imc > 22) {
      Serial.print(nome);
      Serial.print(" - valor alto, IMC = ");
      Serial.println(imc);
    }
  }
}

void loop() {
  // O loop está vazio porque a execução ocorre no setup
}
```

___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

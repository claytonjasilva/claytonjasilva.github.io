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
```

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


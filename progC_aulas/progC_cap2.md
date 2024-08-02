# 2. Controle de fluxo: condicionais simples e compostas

Os comandos de controle de fluxo são aqueles que permitem ao programador **alterar a sequência de execução das instruções** do programa.  

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

```c
int a = 3; //11 em binário
res = << a, 2;
printf("%i",res);
```

irá apresentar na console o valor 12 (1100 em binário).

Operações lógicas bit a bit são projetadas para serem usadas com tipos de dados inteiros (como int, unsigned int, char, short, long). Aplicar esses operadores a tipos de dados de ponto flutuante (como float e double) não é apropriado e geralmente resulta em comportamento indefinido ou em um erro de compilação, dependendo do compilador e das configurações.

Em C, os caracteres podem ser usados com operadores bit a bit porque **cada caractere é internamente representado por um valor inteiro correspondente ao seu código ASCII**.

## 2.2 Condicionais simples

Na condicional simples, a execução de um bloco de instruções interno ao comando é condicionada ao resultado da expressão lógica da sentença.

Sua sintaxe é

```c
if (<condição>) {
  <bloco de instruções>
}
```

Processo de execução pela máquina:  

1. A condição via de regra é uma expressão lógica, cujo valor é calculado pela máquina.  **A condição só pode gerar um resultado dentre dois possíveis: diferente de 0 - 1 se a condição for expressão lógica, (verdadeiro), ou 0, (falso)**.

- Em C, não existe uma constante de linguagem chamada *True*. Em vez disso, valores lógicos são representados por 0 e diferente de 0. Por convenção, 0 é considerado falso (*false*), e qualquer valor diferente de 0 é considerado verdadeiro (*true*), com 1 sendo usado frequentemente para representar verdadeiro ou resultante de uma expressão lógica.

2. A instrução (ou bloco de instruções) interna é executada somente se a condição ou o cálculo da expressão lógica resultar diferente de 0 e a execução do programa prossegue após a estrutura *if*.

3. Em caso contrário, se a condição for falsa (valor 0), a máquina executa a instrução seguinte ao *if* do programa,
sem executar a instrução (ou bloco de instruções).  

Observações gerais:  

- O bloco das instruções internas ao *if* após a instrução condicional **deve ser delimitado entre chaves**.  
- **Se houver somente uma instrução no bloco** o compilador admite não se usar a delimitação entre chaves.  
- A indentação opera exclusivamente para proporcionar mais clareza ao código, facilitando a manutenção, legibilidade etc.  

Um exemplo é o seguinte:  

```c
#include <stdio.h>
void main(){
  int num; // Declaração da variável num
  printf("Digite um numero: "); // Criar uma interface do programa com o usuário
  scanf("%d",&num);
  if (num>10) printf("\n\nO numero e maior do que 10");
  if (num==10) {
    printf("\n\nVoce acertou!\n");
    printf("\nO numero e igual a 10");
  }
  if (num<10) printf("\n\nO numero e menor do que 10");
}
```

## 2.3 Condicionais compostas

Na condicional composta, **a execução de um bloco de instruções interno** ao comando *if* é condicionada ao valor da condição ou resultado da expressão lógica da sentença ser verdadeiro (diferente de 0), enquanto a execução de **outro bloco de instruções**, interno ao *else* do comando *if*, é condicionada ao resultado ser falso (valor lógico igual a 0).

A sintaxe é

```c
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

```c
#include <stdio.h>
void main(){
  int num; // Declaração da variável num
  printf("Digite um numero: "); // Criar uma interface do programa com o usuário
  scanf("%d",&num);
  if (num>10) printf("\n\nO numero e maior do que 10");
  else {
    printf("\n\nO numero e menor ou igual a 10");
    if (num<5) {
      printf("\n\nO numero e menor do que 5\n");
      printf("\nO numero e %d",num);
    }
  }
}
```

## 2.4 Aninhamento de *ifs* - comando `switch...case`

Seja o seguinte uso de condicional composta

```c
if (a>100) printf("a maior do que 100");
else
  if (a>50) printf("a maior do que 50");
  else printf("a menor ou igual a 50");
```

O código possui dois comandos condicionais compostos *if...else*. Diz-se que os ***ifs* estão aninhados**.

O C possui uma instrução composta (`switch...case`) de condicional composta múltipla cuja sintaxe é a seguinte:  

```c
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

```c
switch (a) {
case 100:
  printf("Voce digitou 100");
  break;
case 50:
  printf("Voce digitou 50");
  break;
default:
  printf("Voce digitou numero diferente de 50 e de 100");
}
```

**Observação**. Você pode usar o mesmo bloco de instruções subordinado a vários `case` diferentes. Isso é feito simplesmente omitindo as instruções de `break` entre os `case`, permitindo que a execução "caia" (*fall through*) para o próximo case. Por exemplo,

```c
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

Em C, o operador ternário `? :` é uma forma concisa de expressão condicional que pode substituir a estrutura `if-else` para operações simples. Este operador é também conhecido como operador condicional.

A sintaxe é

```c
<condição> ? <instrução ou bloco de instruções 1> : <instrução ou bloco de instruções 2>;
```

, onde

- condição: Uma expressão lógica que é avaliada como verdadeira (não zero) ou falsa (zero).
- instrução ou bloco de instruções 1: A expressão que é avaliada e retornada se a condição for 1 (verdadeira).
- instrução ou bloco de instruções 2: A expressão que é avaliada e retornada se a condição for 0 (falsa).

## 2.6 Desvio incondicional. Comando `goto`

A linguagem C dispõe de um comando de **desvio incondicional**, `goto`. Precisa ser utilizado com muito cuidado, pois é próprio de uma linguagem não estruturada.

O comando `goto` é frequentemente associado a linguagens de programação não estruturadas, **onde o fluxo de controle pode ser alterado arbitrariamente, levando a um código difícil de seguir e manter**. No entanto, é importante entender que o C, embora seja uma linguagem de programação estruturada, inclui o comando goto por razões históricas e por permitir certos usos específicos onde pode ser conveniente.

As linguagens não estruturadas são caracterizadas pela ausência de estruturas claras para o **controle de fluxo de execução das instruções**, como *loops* e condicionais, o que frequentemente leva ao uso excessivo de comandos `goto`, resultando em código espaguete (*spaghetti code*). Exemplos incluem linguagens de primeira geração como Assembly.

O formato geral do `goto` é

```c
<nome do rotulo>: <instrução>
...
goto <nome do rótulo>;
```

O rótulo (*label*) pode ser um nome qualquer, contanto que siga as regras de nomenclatura dos identificadores. Um rótulo é definido como um identificador seguido de dois pontos (`:`), e pode ser colocado antes de qualquer instrução em uma função.

## 2.7 Exemplos

1. Escrever um programa em C para resolver as seguintes expressões lógicas (descritas sem seguir a sintaxe de C) e escrever o resultado:
  
**a.** $(2 > x) e (3 + 4 = 6)$, dado que *x*=7  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC351a.c)**  
**Pergunta!** Há como ajustar o valor de *x* na expressão lógica para que o resultado dê **verdadeiro**?.  

**b.** $(x > y) ou (x + y = 6)$, dado que *x*=3, *y*=5  
**Lembre-se que:**  
0 || 0 = 0  
0 || 1 = 1  
1 || 0 = 1  
1 || 1 = 1

**c.** $\overline{(x > y) ou (x + y = 6)}$  

1. Elaborar um programa na linguagem C para ler dois diferentes números; calcular e escrever o maior dos números lidos.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC352a.c)**  

Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC352a1.c)**  

3. Elaborar um programa na linguagem C para ler o nome e a respectiva idade de duas pessoas; calcular e escrever o nome da pessoa mais velha. Admitir que as pessoas podem ter a mesma idade.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC352b.c)**  

4. Elaborar um programa na linguagem C para ler a idade de uma pessoa. Se a idade for igual ou inferior a 10 anos, classificar a pessoa como 'criança'. Caso a idade seja inferior a 18 anos e superior a 10 anos, classificar como 'adolescente'. Em qualquer outro caso, classificar como 'adulto'. Escrever a classificação atribuída.
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC352c.c)**  

5. Elaborar um programa na linguagem C para ler os nomes, pesos e altura de 3 pessoas; calcular e escrever os nomes de cada pessoa com IMC superior a 22 ('valor alto') ou com IMC inferior a 20 ('valor baixo'), seguido do respectivo IMC calculado.  
**e.** Elaborar um programa na linguagem C para ler o nome e a idade de 3 animais; calcular e escrever o nome do animal mais velho. 

6. Elaborar um programa na linguagem C para ler um caractere maiúsculo do alfabeto. Se a letra digitada pelo usuário for igual a *A* ou igual a *B*, o programa deve ler dois números e escrever o resultado da soma. Se a letra digitada for igual a *C*, o programa deve ler um número e escrever o quadrado do número lido. Se a letra digitada pelo usuário for igual a *D*, o programa deve ler três números e escrever o maior dentre os números lidos. Para qualquer outra letra digitada pelo usuário o programa deve escrever a mensagem "Entrada invalida".  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC353a.c)**  

___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

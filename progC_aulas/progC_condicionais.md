# 3. Controle de fluxo: condicionais simples e compostas
Os comandos de controle de fluxo são aqueles que premitem ao programador **alterar a sequência de execução das instruções** do programa.  

Podem ser divididos em dois grupos:  
- Condicionais **simples**
- Condicionais **compostas**
  
As condições que determinam o fluxo de execução das instruções são definidas pelo resultado de uma **expressão lógica**.  

## 3.1 Expressões lógicas
As **expressões aritméticas** resultam em números de **ponto flutante** (tipo *float*) ou **inteiros** (tipo *int*).  

As **expressões lógicas** são aquelas cujo reultado é um **valor lógico**.  
Na linguagem C, o valor lógico **verdadeiro é 1**; e o valor lógico **falso é 0**.  

Assim como os operadores aritméticos especificam à máquina uma operação aritmética,
os **operadores lógicos** especificam **operações lógicas**, que são de dois tipos: **relacionais** ou de commparação e operações **lógicas** (próprias da lógica matemática).

### 3.1.1 Operadores lógicos de comparação
Os operadores lógicos de comparação possibilitam criar **proposições simples** estabelecendo a **relação comparativa** entre dois dados do mesmo tipo, 
por exemplo, duas variáveis, uma variável e uma expressão aritmética, duas constantes etc.   

A tabela especifica os operadores e a respectiva operação lógica correspondente.

| Operador | Operação |
| - | - |
| > | maior |
| < | menor |
| >= | maior ou igual |
| <= | menor ou igual |
| == | igual |
| != | diferente |

Os operadores relacionais são aplicados a **dois operandos**.  

Por exemplo, `3 > 2`, que compara o número 3 com o número 2.

Os operandos podem conter **números**; **variáveis**, por exemplo, `x > 3`; e **expressões aritméticas**, por exemplo, `x + 3 <= 4 + y`. A máquina resolve primeiro as expressões aritméticas (os operadores aritméticos têm precedência sobre os lógicos).  

### 3.1.2 Operadores lógicos
Variáveis, expressões ou constante lógicas podem ser combinadas com operadores lógicos para formar **proposições compostas**.  
As operações lógicas básicas são **conjunção**, **disjunção** e **negação (inversão lógica)**.  

| Operador | Operação |
| - | - |
| && | conjunção (*and*) |
| \|\| | disjunção (*or*) |
| ! | negação |

Existem operações que podem ser aplicadas **bit a bit**. Discutiremos esse ponto posteriormente.

## 3.2 Condicionais simples
Na condicional simples, a execução de um bloco de instruções interno ao comando é condicionada ao resultado da expressão lógica da sentença.
Sua sintaxe é

```
if (<expressão lógica>) {
  <bloco de instruções>
}
```

Processo de execução pela máquina:  
1. A expressão lógica é calculada pela máquina.  
  A condição só pode gerar somente um resultado dentre dois possíveis: **1** (verdadeiro) ou **0** (falso).  
2. A instrução (ou bloco de instruções) interna é executada somente se o cálculo da expressão lógica resultar 1 e a execução do programa prossegue após a estrutura *if*
3. Em caso contrário, se a expressão condicional resultar falso (valor 0), a máquina executa a instrução seguinte ao *if* do programa,
sem executar a instrução (ou bloco de instruções).  

Observações gerais:  
- O bloco das instruções internas ao *if* após a instrução condicional **deve ser delimitado entre chaves**.  
- **Se houver somente uma instrução no bloco** o compilador admite não se usar a delimitação entre chaves.  
- A indentação opera exclusivamente para proporcionar mais clareza ao código, facilitando a manutenção, legibilidade etc.  

Um exemplo é o seguinte:  
```
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

## 3.3 Condicionais compostas
Na condicional composta, **a execução de um bloco de instruções interno** ao comando *if* é condicionada ao resultado da expressão lógica da sentença ser verdadeiro (valor 1), enquanto a execução de **outro bloco de instruções**, interno ao *else* do comando *if*, é condicionada ao resultado ser falso (valor lógico igual a 0).
A sintaxe é

```
if (<expressão lógica>) {
  <bloco 1 de instruções>
}
else {
  <bloco 2 de instruções>
}
```
Processo de execução pela máquina:  
1. A expressão lógica é calculada pela máquina, gerando um dentre dois resultados, **1** (verdadeiro) ou **0** (falso).  
2. A instrução (ou bloco 1 de instruções) - interno ao *if* - é executado somente se a expressão lógica de sua sentença resultar 1.  
3. A instrução (ou bloco 2 de instruções) - interno ao *else* é executado se a expressão lógica resultar 0.
4. Em ambas as situações, o programa prossegue sua execução a partir da instrução seguinte ao comando *if*.

Observações gerais:  
- Como anteriormente, **os blocos de instruções devem ser delimitados entre chaves**.  
- **Se houver somente uma instrução no bloco** o compilador admite não se usar a delimitação entre chaves.

Um exemplo é o seguinte:  
```
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

## 3.4 Aninhamento de *ifs* - comando `switch...case`
Seja o seguinte uso de condicional composta  

```
if (a>100) printf("a maior do que 100");
else
  if (a>50) printf("a maior do que 50");
  else printf("a menor ou igual a 50");
```
O código possui dois comandos condicionais compostos *if...else*.  
Diz-se que os ***ifs* estão aninhados**.

O C possui uma instrução composta cuja sintaxe é a seguinte:  

```
switch (<variável>) {
case <constante 1>:
  <bloco 1 de instruções>
  break;
case <constante 2>:
  <bloco 2 de instruções>
  break;
...
default:
  <bloco n de instruções>
}
```  
, cujo funcionamento é o seguinte:
1. A máquina testa o valor da variável comparando-o com a constante 1. 
2. Caso seja igual, executa o bloco 1 de instruções (interno ao *case*) e segue para a instrução posterior ao *switch* do código.
3. Caso não seja igual, testa o valor da variável, comparando-o com a contante 2.
4. Executa o bloco de instruções interno ao *case* da constante 2.
5. A máquina executa esse procedimento até alcançar *default* no caso da variável não armazenar valor igual a nenhuma das constantes.
6. Nesse caso, executa o bloco de instruções interno ao *default* e segue à execução da próxima instrução do código.
7. Importante que o **uso do *default* é opcional**.

Adaptando o exemplo anterior para ilustrar o uso do *switch*, temos:  
```
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
                  
## 3.5 Exemplos de aula

#### 3.5.1 Expressões lógicas
Escrever um programa em C para resolver as seguintes expressões lógicas (descritas sem seguir a sintaxe de C) e escrever o resultado:  
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

#### 3.5.2 Condicionais simples e compostas
**a.** Elaborar um programa na linguagem C para ler dois diferentes números; calcular e escrever o maior dos números lidos.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC352a.c)**  

**Observe o uso do comando `goto`,** cujo formato geral é  
```
<nome do rotulo>: <instrução>
...
goto <nome do rótulo>;
```

**O operador ?**  
Em C a forma *if <expressão lógica> {<bloco 1>} else {<bloco 2>}* pode ser substituída pelo uso do operador `? com a seguinte sintaxe:  
```
<expressão lógica>? <bloco 1>:<bloco 2>;
```
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC352a1.c)**  

**b.** Elaborar um programa na linguagem C para ler o nome e a respectiva idade de duas pessoas; calcular e escrever o nome da pessoa mais velha.
Admitir que as pessoas podem ter a mesma idade.  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC352b.c)**  

**c.** Elaborar um programa na linguagem C para ler a idade de uma pessoa. Se a idade for igual ou inferior a 10 anos, classificar a pessoa como 'criança'. Caso a idade seja inferior a 18 anos e superior a 10 anos, classificar como 'adolescente'. Em qualquer outro caso, classificar como 'adulto'. Escrever a classificação atribuída.
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC352c.c)**  

**d.** Elaborar um programa na linguagem C para ler os nomes, pesos e altura de 3 pessoas; calcular e escrever os nomes de cada pessoa com IMC superior a 22 ('valor alto') ou com IMC inferior a 20 ('valor baixo'), seguido do respectivo IMC calculado.  
**e.** Elaborar um programa na linguagem C para ler o nome e a idade de 3 animais; calcular e escrever o nome do animal mais velho. 

#### 3.5.3 *Switch case*
**a.** Elaborar um programa na linguagem C para ler um caractere maiúsculo do alfabeto. Se a letra digitada pelo usuário for igual a *A* ou igual a *B*, o programa deve ler dois números e escrever o resultado da soma. Se a letra digitada for igual a *C*, o programa deve ler um número e escrever o quadrado do número lido. Se a letra digitada pelo usuário for igual a *D*, o programa deve ler três números e escrever o maior dentre os números lidos. Para qualquer outra letra digitada pelo usuário o programa deve escrever a mensagem "Entrada invalida".  
Ver **[uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoC353a.c)**  

___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

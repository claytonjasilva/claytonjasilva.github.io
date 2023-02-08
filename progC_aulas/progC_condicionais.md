# 3. Controle de fluxo: condicionais simples e compostas
Os comandos de controle de fluxo são aqueles que premitem ao programador alterar a sequência de execução das instruções do programa.  
Podem ser divididos em dois grupos:  
- Condicionais simples
- Condicionais compostas  
As condições que determinam o fluxo de execução das instruções são definidas pelo resultado de uma **expressão lógica**.  

## 3.1 Expressões lógicas
As expressões aritméticas resultam em números de ponto flutante ou inteiros.  
As expressões lógicas são aquelas cujo reultado é um valor lógico.  
Na linguagem C, o valor lógico verdadeiro é 1; e o valor lógico falso é 0.  
Assim como os operadores aritméticos especificam à máquina uma operação aritmética,
os operadores lógicos especificam operações lógicas, qe são de dois tipos: **relacionais** ou de commparação e operações próprias da lógica matemática.

### 3.1.1 Operadores lógicos de comparação
Os operadores lógicos de comparação possibilitam criar proposições lógicas simples estabelecendo a relação comparativa entre dois dados do mesmo tipo, 
por exemplo, duas vaariáveis, uma variávels e uma expressão aritmética, duas constantes etc.    
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
Os operandos podem conter **números**; **variáveis**, por exemplo, `x > 3`; e **expressões aritméticas**, por exemplo, `x + 3 <= 4 + y`. O compilador resolve primeiro as expressões aritméticas (os operadores aritméticos têm precedência sobre os lógicos).  

### 3.1.2 Operadores lógicos
Variáveis, expressões ou constante lógicas podem ser combinadas com operadores lógicos para formar proposições compostas.  
As operações são conjunção, disjunção ou negação.  
| Operador | Operação |
| - | - |
| && | conjunção (*and*) |
| \|\| | disjunção (*or*) |
| ! | negação |

## 3.2 Condicionais simples
Na condicional simples, a execução da de um bloco de instruções interno ao comando é condicionada ao resultado da expressão lógica da sentença, cuja sintaxe é
```
if (<expressão lógica>) {
  <bloco de instruções>
}
```
A expressão lógica é calculada pelo compilador.  
A condição só pode gerar somente um resultado dentre dois possíveis: **1** (verdadeiro) ou **0** (falso).  
A instrução (ou bloco de instruções) interna é executa somente se a expressão lógica de sua sentença resultar 1. Em caso contrário, o compilador executa seguinte ao *if* no programa.  
O bloco das instruções internas ao *if* após a instrução condicional **deve ser delimitado entre chaves**.  
**Se houver somente uma instrução no bloco** o compilador admite não se usar a delimitação entre chaves.  
Observe que a indentação opera exclusivamente para proporcionar mais clareza ao código, facilitando a manutenção, legibilidade etc.  

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
Na condicional composta, a execução de um bloco de instruções interno ao comando *if* é condicionada ao resultado da expressão lógica da sentença ser verdadeira (valor 1), enquanto a execução de **outro** bloco de instruções, interno ao comando *else*, é condicionada ao resultado ser falso (valor lógico igual a 0).
A sintaxe é
```
if (<expressão lógica>) {
  <bloco de instruções>
}
else {
  <bloco de instruções>
}
```
A expressão lógica é calculada pelo compilador.  
A condição só pode gerar somente um resultado dentre dois possíveis: **1** (verdadeiro) ou **0** (falso).  
A instrução (ou bloco de instruções) interno ao *if* é executado somente se a expressão lógica de sua sentença resultar 1.   
Em caso contrário, o compilador executa o bloco das instruções interno ao *else*.
Como anteriormente, **o bloco de instruções deve ser delimitado entre chaves**.  
**Se houver somente uma instrução no bloco** o compilador admite não se usar a delimitação entre chaves.

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
1. O compilador testa o valor da variável comparando-o com a constante 1. 
2. Caso seja igual, o compilador executa o bloco 1 de instruções (interno ao *case*) e segue para a instrução posterior ao *switch* do código.
3. Caso não seja igual, testa o valor da variável, comparando-o com a contante 2.
4. Executa o bloco de instruções interno ao *case* da constante 2.
5. O compilador executa esse procedimento até alcançar *else* no caso da variável não armazenar valor igual a nenhuma das constantes.
6. Nesse caso, executa o bloco de instruções interno ao *else* e segue à execução da próxima instrução do código.
7. Importante que o **uso do *else* é opcional**.

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
                  
## 3.3 Exercícios com condicionais simples e compostas  
1. Elaborar um programa na linguagem C para ler dois números; calcular e escrever o maior dos números lidos.
2. Elaborar um programa na linguagem C para ler a idade de uma pessoa. Se a idade for igual ou inferior a 10 anos, classificar a pessoa como 'criança'. Caso a idade seja inferior a 18 anos e superior a 10 anos, classificar como 'adolescente'. Em qualquer outro caso, classificar como 'adulto'. Apresentar a classificação atribuída.
3. Elaborar um programa na linguagem C para ler os nomes, pesos e altura de 3 pessoas; calcular e escrever os nomes de cada pessoa com IMC superior a 22 ('valor alto') ou com IMC inferior a 20 ('valor baixo'), seguido do respectivo IMC calculado.
4. Elaborar um programa na linguagem C para ler o nome e a idade de 3 animais; calcular e escrever o nome do animal mais velho. 


___
**[home](/progC_aulas.md)**

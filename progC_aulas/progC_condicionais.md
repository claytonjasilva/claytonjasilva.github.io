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
if <expressao logica 1>:  
      <instrucao ou bloco 1 de instruções>
elif <expressao logica 2>:
      <instrucao ou bloco 2 de instruções>
...
elif <expressao logica n>:
      <instrucao ou bloco de instruções n>
else:
      <instrucao ou bloco de instruções n+1>
```  
, cujo funcionamento é o seguinte:
1. O interpretador calcula a expressão lógica 1. Se resultar *True* executa o bloco 1, encerra a execução, passando ao próximo comando do *script*. Se resultar *False* calcula a expressão lógica 2.
2. Se a expressão lógica 2 resultar *True* o interpretador executa o bloco 2 de instruções e passa ao comando seguinte. Se resultar *False* calcula a expressão lógica seguinte.
3. O interpretador repete esse processo, calculando todas as expressões lógicas até obter resultado *True*, executando o respectivo bloco de instruções, ou seguindo adiante à próxima expressão lógica.
4. O último *else* é opcional. Se todas as expressões lógicas resultarem *False* nenhum comnado interno é executado e o interpretador segue ao próximo comando do *script* **se não for utilizado o último *else*.
5. Se o último *else* for utilizado, após todas as espressões lógicas resultarem *False* o comando (ou bloco de comandos) interno a ele será executado. após isso, o interpretador passa à instrução seguinte do *script*.
                  
## 3.3 Exercícios com condicionais simples e compostas  
1. Elaborar um programa na linguagem Python para ler dois números; calcular e escrever o maior dos números lidos. [*Script 3.1*](https://github.com/claytonjasilva/prog_exemplos/blob/main/maior2num.py)
2. Elaborar um programa na linguagem Python para ler a idade de uma pessoa. Se a idade for igual ou inferior a 10 anos, classificar a pessoa como 'criança'. Caso a idade seja inferior a 18 anos e superior a 10 anos, classificar como 'adolescente'. Em qualquer outro caso, classificar como 'adulto'. Apresentar a classificação atribuída. [*Script 3.2*](https://github.com/claytonjasilva/prog_exemplos/blob/main/classIdade.py)  
3. Elaborar um programa na linguagem Python para ler os nomes, pesos e altura de 3 pessoas; calcular e escrever os nomes de cada pessoa com IMC superior a 22 ('valor alto') ou com IMC inferior a 20 ('valor baixo'), seguido do respectivo IMC calculado. [*Script 3.3*](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcIMC3.py)  
**Obs.: Para reflexão** - É prático para escrever códigos se a linguagem possuir instruções que permitam repetir um bloco de instruções quando uma condição for verdadeira. O Python dispõe de **expressões compostas de repetição**.   
4. Elaborar um programa na linguagem Python para ler o nome e a idade de 3 animais; calcular e escrever o nome do animal mais velho. [*Script 3.4*](https://github.com/claytonjasilva/prog_exemplos/blob/main/maior3id.py) 


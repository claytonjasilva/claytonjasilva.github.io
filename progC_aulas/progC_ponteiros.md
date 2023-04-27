# 8. Ponteiros

## 8.1 Conceitos gerais
Um ponteiro é uma variável que contém o endereço de outra variável.  

### 8.1.1 Operadores unários `&` e `*`
- O endereço de um objeto em C é definido pelo **operador** unário `&` (o operador unário é aquele que possui somente um operando).  
  A sintaxe em C do seu emprego é `&<variável>`.
- O comando `p = &c;` atribui o endereço da variável *c* à variável *p*. Diz-se que o ponteiro *p* **aponta** para (o endereço de) *c*.   
- Por outro lado, o operador unário `*` refere-se ao conteúdo do endereço armazenado pela variável ponteiro.  
  A sintaxe em C do seu emprego é `*<ponteiro>`.  
- O comando `c=*p;` atribui o conteúdo armazenado no endereço definido por *p* à variável *c*.
- É possível o programador armazenar um determinado valor em um endereço, pode usar utilizando a forma `*p = x` onde *x* é uma variável do mesmo tipo para o qual *p* aponta. 

### 8.1.2 Declaração de variável do tipo ponteiro  
Uma variável ponteiro para um dado de um determinado tipo deve ser declarada da segjuinte forma  

```
<tipo apontado> *<nome da variável>;
```
, logo, se *p* é um ponteiro para uma variável *c* do tipo *int*, sua declaração deve ser `int *p;`

**O ponteiro restringe-se a apontar para algum tipo especifico de objeto.**

## 8.2 Ponteiros e argumentos de funções
Como em C os argumentos das funções são passados por valor (isto é, uma cópia dos argumentos é utilizada como parâmetro), 
uma forma de alterar uma variável de escopo mais externo por uma função é passar para a função como argumentos o endereço de variáveis.  
Claro que se deve declarar os parâmetros da função como ponteiros.  
Por exemplo,  
```
int dobro(int *p) {
  return *p*2;
}

void main(){
  int x;
  printf("Digite o numero: ");
  scanf("%i",&x);
  printf("/nO dobro do numero e: %i",dobro(&x));
  printf("/nO valor de x e: %i",x);
}
```
, observado o comportamento do resultado o resultado de saída do programa é o mesmo nas duas linhas porque a função *dobro* altera o valor do conteúdo do endereço da variável.  
Por essa razão, se diz que em C **as funções também podem passar argumentos por referência**.

## 8.3 Atenção com o uso de ponteiros
### 8.3.1 Inicialização de ponteiros
O uso de ponteiros em C requer alguns cuidados, um dos quais porque ao declarar um ponteiro, como ele **não é inicializado**, aponta para um endereço indefinido.  
Isso pode levar a problemas na execução do programa por diversos motivos, como, por exemplo, apontar para um endreço de memória reservado ao sistema operacional.  
Em consequência é **muito importante** que os ponteiros sejam **inicializados antes de serem utilizados**.

**Para inicializar um ponteiro** pode-se  
(1) definir uma variável do mesmo tipo para o qual o ponteiro aponta e  
(2) atribuir ao ponteiro o endereço da variável criada, usando-se o operador unário `&`.  
Por exemplo,

```
int cont = 10;
int *p;
p = &cont;
```
Nesse caso, *p* recebe o endereço definido pelo compilador para armazenar os dados de *cont*.  
Como discutido acima, pode-se operar os dados utilizando-se o operador unário `*`. Por exemplo,

```
int x = cont + 1;
```
é equivalente a  
```
int x = *p + 1;
```
Pode-se também modificar o valor de *cont* apontada por *p*. Por exemplo, ao invés de usar `cont = 35;`, é equivalente usar `*p = 35;`

### 8.3.2 Incremente/decremento de ponteiros
**Quando se incrementa um ponteiro ele passa a armazenar um valor que depende do tipo de dado para o qual ele aponta**.  
Por exemplo, quando se incrementa em 1 um ponteiro `*char` ele é alterado para o endereço que armazena o próximo *byte*, 
pois variáveis do tipo *char* ocupam 1 *byte*.  
No entanto, quando se incrementa em 1 um ponteiro `int` ele é alterado para o endereço que armazena o seundo *byte*, 
pois variáveis do tipo inteiro ocupam 16 bits (2 *bytes*) de memória.  
No primeiro caso (*char*), se a memória possui posições de endereço de 1 *byte* e o valor de p for igual a 0 (mero exemplo), 
`p++` implica que o nvo valor de *p* será igual a 1. Por outro lado (*int*), o comando `p++` implicará um novo valor igual a 2. 

### 8.3.3 Uso da função `malloc`
A função `malloc()` é usada para alocação dinâmica de um bloco de memória.  
É utilizada frequentemente para armazenar dados quando não se conhece a dimensão exata da
quantidade de dados a armazenar.  
A função pertence à biblioteca `stdlib.h`, 
portanto é necessário inclu´-la nas diretivas de pré-processamento.  
```
#include <stdlib.h>
```
A quantidade de memória a alocar depende do tipo de dado.  
Uma forma de alocar é mediane o uso da linha de comando  
```
float *p;
p = (<tipo> <* ponteiro>) malloc(<quantidade de dados>*sizeof(<tipo>)); 
```
Observe que é usada a função `sizeof()`.
A função recebe uma variável como argumento e devolve o número de bytes.  
Admite como argumento a variável ou simplesmente o tipo char, int ou float, por exemplo.

## 8.4 Exemplos
1. Escrever um código em C para ler dois números de ponto flutuante. Escrever a soma dos números e o endereço onde a soma está armazenada na memória.   
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoCponteiro1.c)  
2. Escrever um código em C para ler e armazenar 10 números de ponto flutuante.  
Escrever cada um dos números lidos seguidos da média.    
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoCponteiro2.c)  
3. Escrever um código em C para ler e escrever o complemento de um número inteiro N, chamando uma função *complemento*.  
Relembrando, o complemento de *N* é definido pela diferença $C(N)=M-N$, onde M é o maior número com a mesma quantidade de dígitos de *N*.    
A função deve retornar `void`, **devendo alterar o valor do argumento**.  
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoCponteiro3.c)  

___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   



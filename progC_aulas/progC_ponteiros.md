# 8. Ponteiros

## 8.1 Conceitos gerais
Um ponteiro é uma variável que contém o endereço de outra variável.  

### 8.1.1 Operadores unários `&` e `*`
- O endereço de um objeto em C é definido pelo **operador** unário `&` (o operador unário é aquele que possui somente um operando).  
- A sintaxe em C do seu emprego é `&<variável>`.
- O comando `p = &c;` atribui o endereço da variável *c* à variável *p*. Diz-se que o ponteiro *p* **aponta** para (o endereço de) *c*.   

- Por outro lado, o operador unário `*` refere-se ao conteúdo do endereço armazenado pela variável ponteiro.
- A sintaxe em C do seu emprego é `*<ponteiro>`.  
- O comando `c=*p;` atribui o conteúdo do endereço armazenado em *p* à variável *c*.

### 8.1.2 Declaração de variável do tipo ponteiro  
Uma variável ponteiro para um dado de um determinado tipo deve ser declarada da segjuinte forma  

```
<tipo apontado> *<nome da variável>;
```
, logo, se *p* é um ponteiro para uma variável *c* do tipo *int*, sua declaração deve ser `int *p;`

**O ponteiro restringe-se a apontar para algum tipo especifico de objeto.**

## 8.2 Ponteiros e argumentos de funções
Como em C os argumentos das funções são passados por valor (isto é, uma cópia dos argumentos é utilizada como parâmetro), 
uma forma de alteraruma variável de escopo mais externo por uma função é passar para a função como argumentos o endereço de variáveis.  
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

___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   



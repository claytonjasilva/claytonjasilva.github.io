# 8. Ponteiros

## 8.1 Conceitos gerais
Um ponteiro é uma variável que contém o endereço de outra variável.  
O endereço de um objeto em C é definido pelo **operador** unário `&` (o operador unário é aquele que possui somente um operando).  
O comando `p = &c;` atribui o endereço da variável *c* à variável *p*. Diz-se que o ponteiro *p* **aponta** para (o endereço de) *c*.   

### 8.1.1 Declaração de variável do tipo ponteiro  
Uma variável ponteiro para um dado de um determinado tipo deve ser declarada da segjuinte forma  

```
<tipo apontado> *<nome da variável>;
```
, logo, se *p* é um ponteiro para uma variável *c* do tipo *int*, sua declaração deve ser `int *p;`

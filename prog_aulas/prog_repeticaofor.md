## 4.3 Instrução composta `for` 
A instrução `for` é usada também para executar um *loop* de instruções ou bloco de instruções.  
A regra de sintaxe do *for* em Python é a seguinte  
```
for <variável de controle> in <função *range*>:
  instrução ou bloco de instruções
```
A respeito da sintaxe cabe comentar:
1. A função *range* retorna um objeto que compreende uma sequência ordenada de números inteiros.  
Admite três formas:  
- `range(N)`: retorna a sequência de 0 a N-1, com incremento de 1  
- `range(M, N)`: retorna a sequência que inicia no valor de M e encerra no valor de N-1, com incremento de 1
- `range(M, N, passo)`: retorna a sequência que inicia no valor de M e encerra no valor de N-1, com incremento de passo
2. O operador `in` testa o pertencimento. Verifica se o operando pertence ou não ao objeto definido à direita. Retorna *True* - se pertence, ou *False* - se não pertence.
3. O número de repetições do comando *for* é definido pela dimensão (número de valores do objeto retornado pela função *range*).
4. O comando *for* inicializa a variável de controle no menor valor retornado pela função *range* e executa a instrução ou bloco de instruções.  
5. Em seguida, a variável de controle irá assumir o próximo valor do objeto e executar a instrução ou bloco de intruções.
6. Repetirá o *loop* até a variável de controle receber o último valor retornado pela função *range*.  

No exemplo,  
```
for i in range(10):
  print(i)
```
O interpretador escreverá os valores inteiros 0, 1, 2, ..., 9.  
Substituindo o *scritpt* por  
```
for i in range(1,10):
  print(i)
```
O interpretador escreverá os valores inteiros 1, 2, ..., 9.  
Finalmente, substituindo o *scritpt* por  
```
for i in range(1,10,3):
  print(i)
```
O interpretador escreverá os valores inteiros 1, 4, 7.  

## 4.4 Exercícios de aula com instruções de repetição
1. Elaborar um programa na linguagem Python que leia as notas de um grupo de N=30 alunos; calcule e escreva a média aritmética das notas dos alunos.  [*Script 4.1*](https://github.com/claytonjasilva/prog_exemplos/blob/main/le30Notas.py)   
2. Elaborar um programa na linguagem Python que leia as alturas e pesos de um grupo de N=20 pessoas; calcule e escreve o IMC médio daquele grupo. [*Script 4.2*](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcIMC20pessoas.py)
3. Elaborar um programa na linguagem Python que leia os dados de um grupo de pessoas: nome, idade e escolaridade('fundamental','medio','superior'). O programa deverá calcular e escrever a média da idade das pessoas que possuem nível de escolaridade de ensino médio. [*Script 4.3*](https://github.com/claytonjasilva/prog_exemplos/blob/main/classEscol.py)
4. Elaborar um programa na linguagem Python que leia o cpf de uma pessoa, o saldo da conta corrente no início de um dia. Em seguida, leia a natureza ('d'-depósito,'s'-saque) e o valor de todas as operações do dia. O programa deverá escrever o cpf do correntista e escrever o respectivo saldo ao final do dia. [*Script 4.4*](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcSaldo.py)  
5. Elaborar um programa na linguagem Python que leia o cpf (no formato de 11 caracteres numéricos sem pontos e travessão) de uma pessoa. O programa deverá verificar se o cpf é válido usando a regra proposta pela [Associação Comercial e Empresarial de Guarulhos](https://www.aceguarulhos.com.br/blog/como-saber-se-um-cpf-e-verdadeiro/#gsc.tab=0).  
[*Script 4.5*](https://github.com/claytonjasilva/prog_exemplos/blob/main/testaCPF.py)


___
**[<<anterior](prog_repeticaowhile.md)**  
**[home](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progPython_aulas.md)**

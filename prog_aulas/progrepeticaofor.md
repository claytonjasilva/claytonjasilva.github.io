#### Instrução composta `for` 
- A instrução `for` é usada também para executar um *loop* de instruções ou bloco de instruções.
- Uma das suas regras de sintaxe é a seguinte  
```
for nome_de_variável in range(N):
  instrução ou bloco de instruções
```
- A instrução determina a execução de **N** *loops*. N pode ser um número ou o valor armazenado anteriormente em uma variável.    
- A instrução `range(N)` define uma lista de números que varia entre **0 e N-1**. Em cada *loop* o interpretador atribui de forma crescente à variável *nome_de_variável* um valor da lista.
- **Observações**  
  - A função `range` admite também a sintaxe `range(start,stop,step)`, onde *start* é o limite inferior, *stop* é o limite superior e *step* é o passo em cada incremento
  - Nesse caso, a sintaxe da instrução `for` será
  ```
  for nome_de_variável in range(start,stop,step):
    instrução ou bloco de instruções
  ```



### Exercícios com condicionais simples e compostas  
1. Elaborar um programa na linguagem Python que leia as notas de um grupo de N=30 alunos; calcule e escreva a média aritmética das notas dos alunos.  [le30Notas.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/le30Notas.py)   
2. Elaborar um programa na linguagem Python que leia as alturas e pesos de um grupo de N=20 pessoas; calcule e escreve o IMC médio daquele grupo. [calcIMC20pessoas](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcIMC20pessoas.py)
3. Elaborar um programa na linguagem Python que leia os dados de um grupo de pessoas: nome, idade e escolaridade('fundamental','medio','superior'). O programa deverá calcular e escrever a média da idade das pessoas que possuem nível de escolaridade de ensino médio. [classEscol](https://github.com/claytonjasilva/prog_exemplos/blob/main/classEscol.py)
4. Elaborar um programa na linguagem Python que leia o cpf de uma pessoa, o saldo da conta corrente no início de um dia. Em seguida, leia a natureza ('d'-depósito,'s'-saque) e o valor de todas as operações do dia. O programa deverá escrever o cpf do correntista e escrever o respectivo saldo ao final do dia. [calcSaldo.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcSaldo.py)  
6. Elaborar um programa na linguagem Python que leia o cpf (no formato de 11 caracteres numéricos sem pontos e travessão) de uma pessoa. O programa deverá verificar se o cpf é válido usando a regra proposta pela [Associação Comercial e Empresarial de Guarulhos](https://www.aceguarulhos.com.br/blog/como-saber-se-um-cpf-e-verdadeiro/#gsc.tab=0).  
[testaCPF.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/testaCPF.py)

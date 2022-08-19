## Conceitos de programação procedural: estruturas de repetição  
### [Instruções compostas](https://docs.python.org/pt-br/3/reference/compound_stmts.html)

### Instruções de repetição  
- Os programas muitas vezes precisam automatizar tarefas repetitivas. A repetição ou **iteração** pode ser obtida pela utilização de instruções compostas chamadas instruções de repetição.
- As duas instruções de repetição disponíveis na linguagem Python são `while` e `for`  
#### Instrução composta `while`  
- A instrução `while` possui a seguinte sintaxe  
```
while condição:
  instrução ou bloco de instruções
```
- O interpretador Python calcula o resultado da expressão lógica. Se a expressão resultar *True*, a instrução ou o bloco de instruções internos (delimitados pela indentação) será executado. Cada execução é normalmente referida como um *loop*. 
- Após a execução do *loop*, o interpretador volta a testar a condição. enquanto a condição permanecer *True* um novo *loop* se repete.
- A repetição da instrução ou do bloco de instruções internos será interrompida quando o resultado da expressão lógica for *False*. Nesse momento, o interpretador passará a executar a instrução seguinte ao `while`.
- **Observações**  
  - É muito comum a repetição ser definida por uma variável de contagem. No exemplo abaixo utiliza-se a variável designada *cont*   
  ```
  cont = 1
  while cont<=N:
    instrução ou bloco de instruções
    cont = cont + 1
  ```
  - A instrução simples de atribuição `cont = 1` é comumente chamada de **inicialização** da variável
  - O valor *N* da condição poderá ser um número ou uma variável cujo valor seja previamente definido
  - A instrução simples de atribuição `cont = cont + 1` **incrementa** em 1 o valor anterior armazenado na variável *cont*. Caso a variável *cont* não seja incrementada, a estrutura permanecerrá em ***loop*** **infinito**, pois a condição *False* nunca ocorrerá.
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
#### Instruções ***break*** e ***continue***
- A instrução `break` interrompe a execução do *loop* no ponto em que foi inserida e prossegue a execução do programa a partir da instrução seguinte ao `while` ou ao `for`.
- A instrução `continue` interrompe a execução do *loop* no ponto em que foi inserido e remete a execução para o próximo teste de condição do `while` ou para o próximo *loop* do `for` 


### Exercícios com condicionais simples e compostas  
1. Elaborar um programa na linguagem Python que leia as notas de um grupo de N=30 alunos; calcule e escreva a média aritmética das notas dos alunos.  [le30Notas.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/le30Notas.py)   
2. Elaborar um programa na linguagem Python que leia as alturas e pesos de um grupo de N=20 pessoas; calcule e escreve o IMC médio daquele grupo. [calcIMC20pessoas](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcIMC20pessoas.py)
3. Elaborar um programa na linguagem Python que leia os dados de um grupo de pessoas: nome, idade e escolaridade('fundamental','medio','superior'). O programa deverá calcular e escrever a média da idade das pessoas que possuem nível de escolaridade de ensino médio. [classEscol](https://github.com/claytonjasilva/prog_exemplos/blob/main/classEscol.py)
4. Elaborar um programa na linguagem Python que leia o cpf de uma pessoa, o saldo da conta corrente no início de um dia. Em seguida, leia a natureza ('d'-depósito,'s'-saque) e o valor de todas as operações do dia. O programa deverá escrever o cpf do correntista e escrever o respectivo saldo ao final do dia. [calcSaldo.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcSaldo.py)  
6. Elaborar um programa na linguagem Python que leia o cpf (no formato de 11 caracteres numéricos sem pontos e travessão), o número da instituição financeira a que pertence aquele cpf e o respectivo saldo bancário na instituição financeira de um grupo de pessoas. O programa deverá calcular e apresentar o saldo médio de cada cpf, assim como o saldo médio de cada instituição financeira. Admitir que o programa será interrompido se for digitado o cpf 000.000.000-00. O programa deverá **verificar se o cpf é válido** usando a regra proposta em <https://www.aceguarulhos.com.br/blog/como-saber-se-um-cpf-e-verdadeiro/#gsc.tab=0>.

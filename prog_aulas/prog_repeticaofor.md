## 4.3 Instrução composta `for` 
A instrução `for` é usada também para executar um *loop* de instruções ou bloco de instruções.  
A regra geral de sintaxe do *for* em Python é a seguinte  
```
for <variável de controle> in <objeto>:
  <instrução ou bloco 1 de instruções>
else:
  <bloco 2 de instruções>
```
A respeito da sintaxe cabe comentar:
1. A cláusula *else* (como no comando *while*) também **é opcional**.
2. **Atribui itens do objeto à variável de controle** até percorrer todo o objeto - o que determina o número de *loops* ou repetições. Veremos oportunamente o seu uso com vários objetos. No momento veremos o uso do *for* especificamente com o objeto retornado pela função `range`.
3. A função `range`retorna um objeto definido pela **sequência de números inteiros**.
  É uma função nativa da linguagem que é **utilizada para gerar uma sequência numérica dentro de um intervalo determinado**.
4. A função *range* admite três formas:  
    ___
    (i) `range(N)`: retorna a sequência *i* de *0* a *N-1*, com incremento de *1* (passo ou *step*), logo *S={0, 1, 2,..., N-1}*    
    (ii) `range(M, N)`: retorna a sequência que inicia no valor de *i* igual a *M* e encerra no valor de *i* igual a *N-1*, com incremento de 1, logo *S={M, M+1, ..., N-1}*    
    (iii) `range(M, N, passo)`: retorna a sequência que inicia no valor de *i* igual a *M* e encerra no valor de *i* menor do que N, com incremento de *passo*, logo *S=M+passo.i, i=0, ..., n-1*, onde *n* é o número de elementos da sequência  
      **O passo pode ser negativo** - nesse caso a sequência encerra-se no valor de *i* maior do que N, a partir de *i* igual a *M*  
      ___
5. **O operador `in` testa o pertencimento**. Verifica se o operando pertence ou não ao objeto definido à direita. Retorna *True* - se pertence, ou *False* - se não pertence.
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

**Observações:**  
(i) A instrução *for* substitui o uso do *while* para operação de contagem com mais simplicidade;  
(ii) Antecipando o uso com outros objetos, **pode-se usar o objeto *string* para varrer os seus caracteres**, na forma, por exemplo,     
```
for caractere in 'palavra':
  print(caractere)
```  
(iii) Para varrer elementos de uma **[lista](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/prog_aulas/prog_listas.md)**, por exemplo,
```
for elemento in [1, 'a', 4, 'item', 6]:
  print(elemento)
```  
(iv) Pode-se utilizar a função `zip` para **varrer elementos paralelamente** em listas   
```
for (x,y) in zip(['a', 'b', 'c', 'd'],[1, 2, 3, 4]):
  print(x,y)
```

## 4.4 Exercícios de aula com instruções de repetição
1. Elaborar um programa na linguagem Python que leia as notas de um grupo de N=30 alunos; calcule e escreva a média aritmética das notas dos alunos.  [*Script 4.1*](https://github.com/claytonjasilva/prog_exemplos/blob/main/le30Notas.py)   
2. Elaborar um programa na linguagem Python que leia as alturas e pesos de um grupo de N=20 pessoas; calcule e escreve o IMC médio daquele grupo. [*Script 4.2*](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcIMC20pessoas.py)
3. Elaborar um programa na linguagem Python que leia os dados de um grupo de pessoas: nome, idade e escolaridade('fundamental','medio','superior'). O programa deverá calcular e escrever a média da idade das pessoas que possuem nível de escolaridade de ensino médio. [*Script 4.3*](https://github.com/claytonjasilva/prog_exemplos/blob/main/classEscol.py)
4. Elaborar um programa na linguagem Python que leia o cpf de uma pessoa, o saldo da conta corrente no início de um dia. Em seguida, leia a natureza ('d'-depósito,'s'-saque) e o valor de todas as operações do dia. O programa deverá escrever o cpf do correntista e escrever o respectivo saldo ao final do dia. [*Script 4.4*](https://github.com/claytonjasilva/prog_exemplos/blob/main/calcSaldo.py)  
5. Elaborar um programa na linguagem Python que leia o cpf (no formato de 11 caracteres numéricos sem pontos e travessão) de uma pessoa. O programa deverá verificar se o cpf é válido usando a regra proposta pela [Associação Comercial e Empresarial de Guarulhos](https://www.aceguarulhos.com.br/blog/como-saber-se-um-cpf-e-verdadeiro/#gsc.tab=0).  
[*Script 4.5*](https://github.com/claytonjasilva/prog_exemplos/blob/main/testaCPF.py)

___
**[<<anterior](prog_repeticaowhile.md)**      
**[Home Programação Estruturada com Python](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progPython_aulas.md)**  

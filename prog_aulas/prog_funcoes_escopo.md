## Funções em Python: escopos e argumentos  
### Regras de escopo  
- O Python utiliza o local de atribuição de nome para associá-lo a um **espaço de nome** em particular
- O espaço de nome de um objeto determina o **escopo de visibilidade**
- O Python **utiliza o local de atribuição de um nome para associá-lo a um espaço de nome da função**;
- Os nomes definidos dentro de uma instrução *def* **só podem ser vistos pelo código que está dentro da função** - não se pode sequer usar o nome fora desse espaço;
- Os nomes definidos dentro de uma instrução *def* **não entram em conflito com os nomes das variáveis fora da função** - ainda que possuam o mesmo nome são tratados como variáveis diferentes;
- As funções definem um espaço local e o **[módulo](prog_modulos.md) envolvente** define um espaço global;
- **O escopo global abrange apenas um arquivo**;
- A **regra de pesquisa** de escopo do Python é dada por  
  1. Interna (Python) - nomes atribuídos previamente no módulos de **nomes internos**, por exemplo, *open*, *range*, ...
  2. Global (módulos) - nomes atribuídos em um arquivo de módulos ou **declarados em uma instrução *def* do arquivo**
  3. Locais de funções envolventes - nomes atribuídos nas funções que envolvem outras funções
  4. Locais (funções) - nomes atribuídos dentro da função  
 - A instrução `global` é uma declaração de espaço de nome. É utilizada na função se for relativa a uma variável do escopo acima. Por exemplo,   
  ```
  x = 88
  def func():
    global x
    x = 99
  func()
  print(x)
  ```
  escreve 99, pois a variável x foi declarada em *func* como global.
  
### Escopo e funções aninhadas     
- O Python permite escrever funções dentro de funções envolventes
- A regra de pesquisa é a seguinte:
  - O interpretador atribui a variável no espaço de nome da função mais envolvente
  - Se o mesmo nome for usado em uma função envolvida **sem que tenha sido atribuída no respectivo espaço de nome (da função envolvida)** a variável é tratada pela referência mais recente da função envolvente
  - Se o mesmo nome for usado em uma função envolvida e **tiver sido atribuída no respectivo espaço de nome (da função envolvida)** a variável é tratada pela como local 
- Exemplo do caso 1 de escopo aninhado:  
  ```
  def f1():  
    x = 88  
    def f2():  
      print(x)  
    f2()  
  f1()
  ```
  O resultado é a apresentação de 88. **A instrução *def* aninhada só é executada enquanto uma chamada da função envolvente está em andamento**
- Exemplo do caso 2 de escopo aninhado:  
  ```
  def f1():  
    x = 88  
    def f2(): 
      x = 5
      print(x)  
    f2()  
  f1()
  ```
  O resultado é a apresentação de 5.

### Passando argumentos
1. Os argumentos são passados pela **atribuição de objetos a nomes locais** - definidios pelos parâmetros da função chamada;
2. A atribuição de **nomes de argumento** dentro de uma função não altera o código que fez a chamada;
3. A atribuição de **objetos mutáveis** pode produzir impacto sobre o código que fez a chamada - por exemplo,
  ```
  def changer(x,y):
    x = 2
    y[0] = 'spam'
  X = 1
  Y = [1, 2]
  changer(X, Y)
  print(X)
  print(Y)
  ```
  não altera o valor de X, porém altera o valor de Y, pois Y é um **objeto mutável** - lista.
5. Existem algumas **formas de correspondência de argumento** para os parâmetros definidos na função:
  (i) posicional - o mais normal, da esquerda para a direita pela correspondência das posições;
  (ii) palavras-chave = o código que chama pode indicar qual parâmentro da função deve receber um valor;
  (iii) 

___  
**[<<anterior](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/prog_aulas/prog_funcoes.md)**  
**[Home Programação Estruturada com Python](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progPython_aulas.md)**  

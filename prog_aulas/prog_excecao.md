# Erros e Exceções em Python

## Visão geral

Uma **exceção** é um objeto da classe *Exception*, que **permite armazenar informações sobre situações anormais ou erros na execução de um comando**.  

Um exemplo clássico de excpcionalidade é um programa que pode levar a uma divisão por 0, como no código abaixo:
```
# O script lê e determina a média de N números lidos
N = int(input('Digite a quantidade de números lidos: '))
soma = 0
for i in range(N):
  numero = float(input('Digite número: '))
  soma += numero
media = soma / N
```

Se o usuário digitar `0`, será observada a mensagem
```
Traceback (most recent call last):
  File "...\main.py", line 7, in <module>
    media = soma / N
ZeroDivisionError: division by zero
```

As excepcionalidades podem ser **erros de sintaxe** ou **exceções**.    
- Erros de sintaxe,
também conhecidos como erros de parse, decorrentes na desobediência a uma regra sintática da linguagem, os mais frequentes entre iniciantes.  
- Exceções: erros detectados durante a execução são chamados exceções e não são necessariamente fatais e podem ser **tratados**.

Como é possível detectar e tratar exceções em um módulo do código com os recursos aprendidos até agora? 
No exemplo acima, usando uma estrutura condicional:  

```
if N != 0:
  media = soma / N
else:
  print('Divisão por 0 - nenhum número digitado')
```

Embora funcione, **esse tratamento é específico** para o problema em pauta.
Se o seu código utilizar funções e módulos em que esse caso possa ocorrer com frequência **para cada caso** você precisará escrever um tratamento próprio.

## Tratar, construir e lançar exceções

### Tratamento de exceções
O Python dispõe de várias **classes de exceção** pré-definidas como:

| Classe | Descrição |
| ------ | --------- |
| LookupError | A classe base para as exceções levantadas quando uma chave ou índice usado em um mapeamento ou sequência é inválido |
| IndexError | Levantada quando um índice de alguma sequência está fora do intervalo. |
| KeyError | Levantada quando uma chave de mapeamento (dicionário) não é encontrada no conjunto de chaves existentes. |
| TypeError | Levantada quando uma operação ou função é aplicada a um objeto de tipo inadequado. |
| ValueError | Levantada quando uma operação ou função recebe um argumento que tem o tipo certo, mas um valor inadequado |
| ZeroDivisionError | Levantada quando o segundo argumento de uma divisão ou operação de módulo é zero. |
| ValueError |Levantada quando uma operação ou função recebe um argumento que tem o tipo certo, mas um valor inadequado, e a situação não é descrita por uma exceção mais precisa. |

Para obter uma lista completa consulte a [documentação do Python](https://docs.python.org/pt-br/3/library/exceptions.html).

Para tratar uma exceção em Python, pode-se utilizar os blocos nos comandos `try` e `except`.
A sintaxe é:  
```
try:
  <bloco 1 de comandos>
except <classe de exceção>:
  <bloco 2 de comandos>
```
No caso de ocorrer uma exceção dentro de alguma função ou comando do bloco `try`, a exceção será lançada, e os demais 
comandos do bloco serão suspensos. O controle da execução passará para o primeiro bloco `except` que tenha uma 
classe de exceção de tipo compatível com a exceção lançada.

Voltando ao exemplo da divisão por 0, pode-se agora usar o código sem que haja **erro fatal**, dado por
```
# O script lê e determina a média de N números lidos

def media(N):
  soma = 0
  for i in range(N):
    numero = float(input('Digite número: '))
    soma += numero
  media = soma / N
  return media

try:
  N = int(input('Digite a quantidade de números lidos: '))
  print(media(N))
except ZeroDivisionError:
  print('Divisão por zero')
```
A instrução try funciona da seguinte maneira:
- Primeiramente, a **cláusula try** (o conjunto de instruções entre as palavras reservadas try e except ) é executada.  
- Se **nenhuma exceção ocorrer**, a cláusula except é ignorada e a execução da instrução try é finalizada.  
- Se **ocorrer uma exceção durante a execução de uma cláusura try**, as instruções remanescentes na cláusula são ignoradas. Se a classe da exceção ocorrida tiver sido previsto em na cláusula except, ela é executada, e então depois a execução continua após o bloco try/except.

O bloco `try...except` retorna `True`quando a exceção é encontrada.
Essa característica é útil explorar, pois existem situações em que é desejável descartar a exceção e manter a execução do código **sem a exceção**.
No exemplo, pode-se desejar que o usuário **não digite 0**. Nesse caso, pode-se produzir o código  
```
# O script lê e determina a média de N números lidos

def media(N):
  soma = 0
  for i in range(N):
    numero = float(input('Digite número: '))
    soma += numero
  media = soma / N
  return media

while True:
  try:
    N = int(input('Digite a quantidade de números lidos: '))
    print(media(N))
  except ZeroDivisionError:
    print('Divisão por zero')
```
Pelo uso do comando composto `while` com a condição `True`, o código se mantém no *loop* enquanto o usuário digitar 0.  

**Observações**  
- A instrução try pode ter uma ou mais cláusula de exceção, para especificar múltiplos tratadores para diferentes exceções.   
- No máximo um único tratador será executado. Uma cláusula de exceção pode ser sensível a múltiplas exceções, desde que as especifique em uma tupla.     
- O tratamento só ocorrerá para as cláusulas de exceção levantadas no interior da cláusula de try.  
- Isso é importante porque é possível **aninhar instruções** `try`.  
- Portanto, pode haver `except` numa mesma instrução try que se refira a um comando `try` mais externo.  
- Se a exceção levantada não corresponder a nenhuma exceção listada na cláusula de exceção, então ela é entregue a uma instrução try mais externa. 
- O bloco de cláusulas `try … except` possui uma cláusula `else` opcional. O `else` pode ser colocado depois de todas as outras cláusulas. É útil para um código que precisa ser executado se nenhuma exceção foi levantada.

### Levantando exceção
A instrução `raise` permite ao programador forçar a ocorrência de um determinado tipo de exceção. Por exemplo,
```
# O script gera uma exceção se o resultado de uma operação for menor do que um limite dado

# Definição de valores
num1 = 50
num2 = 100

# verifica o limite
while True:
    try:
        N = float(input('Digite o limite: '))
        op = num1 * num2
        if op < N:
            raise ValueError
        else:
            print('A operação é ', op, ', superior ou igual ao limite ',N)
    except ValueError
        print('Limite não superado')
```
A exceção `ValueError` não é precisa, portanto **pode ser usada com flexibilidade** no código em várias situações.

### Criando exceções
É possível ao programador **criar uma nova classe *Exception***. Utiliza-se a sintaxe:  

```
class <nome da classe>(Exception): 
 pass
```
cria uma nova classe "derivada" da classe *Exception*, de `<nome da classe>`. Por exemplo,

```
# O script gera uma exceção se o resultado de uma operação for menor do que um limite dado
# Cria a sub-classe NumeroAbaixoLimite

class NumeroAbaixoLimite(Exception):
    pass

# Definição de valores
num1 = 50
num2 = 100

# verifica o limite
while True:
    try:
        N = float(input('Digite o limite: '))
        op = num1 * num2
        if op < N:
            raise NumeroAbaixoLimite
        else:
            print('A operação é ', op, ', superior ou igual ao limite ',N)
    except NumeroAbaixoLimite:
        print('Limite não superado')
```


## Exercícios
Elaborar um scrip de Python para...
1. Criar um dicionário cuja chave seja a matrícula de um grupo de 20 alunos, para armazenar as notas.
Após criar o dicionário, o usuário poderá pesquisar a nota de um determinado aluno.
Caso a matrícula não esteja cadastrada o programa deve emitir uma mensagem de erro e prosseguir a pesquisa.
**Usar tratamento de exceção**. [excecaoEx1.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/excecaoEx1.py)
2. 





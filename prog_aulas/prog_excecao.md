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

O Python dispõe de várias **classes de exceção** pré-definidas como:

| Classe | Descrição |
| ------ | --------- |
| LookupError | A classe base para as exceções levantadas quando uma chave ou índice usado em um mapeamento ou sequência é inválido |
| IndexError | Levantada quando um índice de alguma sequência está fora do intervalo. |
| KeyError | Levantada quando uma chave de mapeamento (dicionário) não é encontrada no conjunto de chaves existentes. |
| TypeError | Levantada quando uma operação ou função é aplicada a um objeto de tipo inadequado. |
| ValueError | Levantada quando uma operação ou função recebe um argumento que tem o tipo certo, mas um valor inadequado |
| ZeroDivisionError | Levantada quando o segundo argumento de uma divisão ou operação de módulo é zero. |

Para consultar uma lista completa consulte a [documentação do Python](https://docs.python.org/pt-br/3/library/exceptions.html).

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
try:
  media = soma / N
  print(media)
except ZeroDivisionError:
  print('Divisão por 0')
```


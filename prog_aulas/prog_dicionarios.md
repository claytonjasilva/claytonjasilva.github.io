## Dicionários

- Dicionários são também chamados de “memória associativa” ou “vetor associativo” em outras linguagens. Diferente de sequências que são indexadas por inteiros, dicionários são indexados por **chaves (*keys*)**.  Por exemplo,  

```
aluno = {'um': ['ana',5.6], 'dois': ['joao',3.4], 'tres': ['pedro',6.7]}
print(aluno)
```
onde as chaves são 'um', 'dois' e 'tres'. Dicionários são delimitados por chaves: `{ }` e contêm uma **lista de pares *chave:valor* separada por vírgulas**.

- Chaves podem ser de qualquer tipo **imutável** (como strings, inteiros e tuplas - se contiverem apenas strings, inteiros ou outras tuplas).
- Podem ser criados sem elementos com a função `dict()`, sendo cada elemento individulamente adicionado pela chave, `nome[chave]=elemento`. Por exemplo,  

```
aluno = dict()
aluno['um'] = ['ana',5.6]
aluno['dois'] = ['joao',3.4]
aluno['tres'] = ['pedro',6.7]
print(aluno)
```

- É interessante imaginar um dicionário como um **conjunto não-ordenado** de pares **chave:valor**, onde as chaves são únicas em uma dada instância do dicionário, logo o elemento pode ser instanciado por sua respectiva chave. Por exemplo,  

```
alunos = {'12345': ['ana', 7.8], '12346': ['carlos', 8.8], '12347': ['diogo', 4.8]}
matr = input('Digite a matrícula: ')
if matr in alunos: # Verifica se uma chave está contida no dicionário
    print(alunos[matr])
else:
    print('Matrícula não presente')
```
**Observação**: Realiza-se a pesquisa **no conjunto das chaves** usando-se o operador `in`, que verifica se o operando a sua esquerda está contido no objeto à sua direita, da mesma forma que o operador not in que verifica o contrário. A operação de ambos retorna *True* ou *False*.

- Pode-se realizar a pesquisa no **conjunto de valores** usando-se o método `dict.values()`. Por exemplo,    

```
alunos = {'ana': 4.5, 'carlos': 3.4, 'joao': 6.5, 'jose': 9}
valor = float(input('Digite um valor: '))
if valor in alunos.values():
    print('Valor procurado está presente')
else:
    print('Valor inexistente')
```

- Pode-se realizar uma pesquisa de valores usando-se o método `dict.keys()`. O método gera o objeto chaves do dicionário: `dict_keys(['ana', 'carlos', 'joao', 'jose'])`, que pode ser percorrido usando-se o comando `for <valor> in <objeto>:`, em que valor assume todos os valores do objeto. Por exemplo,   

```
alunos = {'ana': 4.5, 'carlos': 3.4, 'joao': 6.5, 'jose': 9}
valor = float(input('Digite um valor: '))
for chave in alunos.keys():
    if alunos[chave] == valor:
        print(chave)
```

- Outros métodos e funções nativas do Python que podem ser aplicadas sobre dicionários podem ser obtidas em (https://docs.python.org/3/library/stdtypes.html#mapping-types-dict).  

### Exercícios  
Elaborar o *script* de um código em Python para...
1. Criar um dicionário com as matrículas, nomes e notas finais de um grupo de 30 alunos. Com o dicionário criado, o usuário poderá digitar uma matrícula e o programa deverá retornar os dados cadastrados. [dicionarioEx1.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/dicionarioEx1.py)

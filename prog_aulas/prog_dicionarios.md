# 9. Dicionários

## 9.1 Conceitos gerais
1. Dicionários são também chamados de **memória associativa** ou **vetor associativo** em outras linguagens.  
2. Diferentemente de sequências que são indexadas por inteiros, dicionários são indexados por **chaves (*keys*)**.   
Por exemplo,  

```
aluno = {'um': ['ana',5.6], 'dois': ['joao',3.4], 'tres': ['pedro',6.7]}
print(aluno)
```
onde as chaves são 'um', 'dois' e 'tres'.   

3. Dicionários são delimitados por chaves: `{ }` e contêm uma **lista de pares *chave:valor* separada por vírgulas**.  
    - Chaves podem ser de qualquer tipo **imutável** (como strings, inteiros e tuplas - se contiverem apenas strings, inteiros ou outras tuplas).

## 9.2 Inicialização

### 9.2.1. Pode ser inicializado como um conjunto de pares *chave:valor*
Por exemplo,  
```
alunos = {'12345': ['ana', 7.8], '12346': ['carlos', 8.8], '12347': ['diogo', 4.8]}
```
### 9.2.2. Podem ser criados sem elementos com a função `dict()`
1. Cada elemento é individualmente adicionado pela chave, `nome[chave]=elemento`.
Por exemplo,  

```
aluno = dict()
aluno['um'] = ['ana',5.6]
aluno['dois'] = ['joao',3.4]
aluno['tres'] = ['pedro',6.7]
print(aluno)
```

## 9.3 Pesquisa em conjunto

### 9.3.1 Pesquisa pela chave
#### a. Busca pela chave no dicionário
1. É interessante imaginar um dicionário como um **conjunto não-ordenado** de pares **chave:valor**,  
onde as **chaves são únicas** em uma dada instância do dicionário, logo o elemento pode ser instanciado por sua respectiva chave.  
Por exemplo,  

```
alunos = {'12345': ['ana', 7.8], '12346': ['carlos', 8.8], '12347': ['diogo', 4.8]}
matr = input('Digite a matrícula: ')
if matr in alunos: # Verifica se uma chave está contida no dicionário
    print(alunos[matr])
else:
    print('Matrícula não presente')
```

Realiza-se a pesquisa **no conjunto das chaves** usando-se o operador `in`, que verifica se o operando a sua esquerda está contido no objeto à sua direita, da mesma forma que o operador `not in` que verifica o contrário. A operação de ambos retorna *True* ou *False*.

#### b. Busca pelo método *dict.keys()*
1. Pode-se realizar uma pesquisa de valores usando-se o método `dict.keys()`.  
2. O método gera o objeto chaves do dicionário: `dict_keys(['ana', 'carlos', 'joao', 'jose'])`,   
que pode ser percorrido usando-se o comando `for <valor> in <objeto>:`, em que o valor assume todos os valores do objeto.  
Por exemplo,   

```
alunos = {'ana': 4.5, 'carlos': 3.4, 'joao': 6.5, 'jose': 9}
valor = float(input('Digite um valor: '))
for chave in alunos.keys():
    if alunos[chave] == valor:
        print(chave)
```

### 9.3.2 Pesquisa pelos valores
1. Pode-se realizar a pesquisa no **conjunto de valores** usando-se o método `dict.values()`.    
Por exemplo,    

```
alunos = {'ana': 4.5, 'carlos': 3.4, 'joao': 6.5, 'jose': 9}
valor = float(input('Digite um valor: '))
if valor in alunos.values():
    print('Valor procurado está presente')
else:
    print('Valor inexistente')
```

#### Outros métodos e funções nativas do Python que podem ser aplicadas sobre dicionários podem ser obtidas em (https://docs.python.org/3/library/stdtypes.html#mapping-types-dict).  

### Exercícios  
Elaborar o *script* de um código em Python para...
1. Elaborar um programa em Python para ler o cpf de 10 pessoas.  
Para cada cpf lido, cadastrar em um dicionário o respectivo número de telefone celular.  
2. Elaborar um programa em Python para cadastrar os dados de uma matriz 3x5 em um dicionário.  
Utilizar como chave uma tupla com a linha e coluna.  
3. Criar um dicionário com as matrículas, nomes e notas finais de um grupo de 30 alunos. Com o dicionário criado, o usuário poderá digitar uma matrícula e o programa deverá retornar os dados cadastrados. [dicionarioEx1.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/dicionarioEx1.py)
4. Criar uma agenda com os campos de dados de nome, email e celular, utilizando o celular como chave.
Quando o usuário digitar celular igual a 0 a criação do dicionário se encerra.
Deve permitir também exclusão de todos os campos. [dicionarioEx2.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/dicionarioEx2.py)
5. Criar um dicionário com a matrícula (chave) e nome de um grupo de 30 alunos.
Deseja-se implementar uma função que retorna a matrícula dado um nome.
À medida que cada letra do nome é digitada a relação de matrículas que 'casa' com a formação do nome é apresentada.
[dicionarioEx3.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/dicionarioEx3.py)
6. Criar um sistema com dois dicionários. O programa deve armazenar os valores no dicionário principal, fazendo automaticamente o backup no dicionário de *backup*. O dicionário principal possui uma capacidade máxima para armazenar 5 elementos.
Cada vez que o dicionário principal atingir a sua capacidade limite o programa deve apresentar os valores na console e apagar o seu conteúdo.
[dicionarioEx4.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/dicionarioEx4.py)
7. Criar uma matriz MxN utilizando dicionário. Cada chave deve ser definida por uma tupla que defina linha e coluna do elemento.
Todos os elementos da matriz são números de ponto flutuante. [dicionarioEx5.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/dicionarioEx5.py)

**[home](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progPython_aulas.md)**





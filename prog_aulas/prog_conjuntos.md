# 10. Conjuntos

## 10.1 Conceitos gerais
- Constituem **conjuntos desordenados finitos** de elementos, **sem elementos repetidos**.
- Não admitem modificar elementos existentes - seus elementos são imutáveis, no entanto permitem incluir novos elementos.
- Não se configuram como sequências, logo seus elementos não podem ser indexados.

## 10.2 Operações matemáticas
- Conjuntos também suportam operações matemáticas como  
união **(operador:  `|`  )**,  
interseção **(operador: `&`)**,  
diferença **(operador: `-`)** e  
diferença simétrica **(operador: `^`)** - A diferença simétrica entre dois conjuntos é um conjunto contendo os elementos de ambos os conjuntos que não são comuns um com o outro.  
- Para serem criados podem ser usados chaves ou a função `set()`.  
Por exemplo, 
```
vogais = ['a','e','i','o','u']
vogais = set(vogais)
print(vogais)
```
Ou
```
vogais = {'a','e','i','o','u'}
print(vogais)
```
- Alguns métodos:

| Método | Descrição |
| ------ | --------- |
| set.add(item) | Adiciona item |
| set.remove(item) | Remove item |
| set.clear() | Esvazia o conjunto |
| set1.update(set2) | Atualiza os elementos de set 1 com os elementos de set2 |
| set.copy() | Cria um novo conjunto contendo os mesmos elementos do conjunto set |

## 10.3 Exercícios
#### Elaborar um *script* em Python para
1. Criar um conjunto com o nome de 10 pessoas. 
Escrever os elementos do conjunto.  
Inserir nomes iguais e verificar o que acontece.  
2. Ler os dados de matrícula de alunos de duas turmas diferentes.  
Admitindo que cada aluno possui uma matrícula que o identifica de modo único, verificar se o mesmo aluno está matriculado nas duas turmas.
3. Criar dois conjuntos com alunos de duas turmas com, no máximo, 5 alunos cada.
Os conjuntos devem conter as matrículas dos alunos. Os alunos são matriculados inicialmente na turma A.
Quando a capacidade da turma A for completada o programa passa a matricular na turma B.
Quando a capacidade da turma B for completada o programa deve ser encerrado.
Após cadastrar os dados o programa deverá apresentar a relação de matriculados em cada turma. [conjuntoEx1.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/conjuntoEx1.py)
4. Criar dois conjuntos A e B com N elementos cada. Escrever os elementos que pertencem ao conjunto A e não pertencem ao B.
Escrever os elementos que pertencem a ambos os conjuntos. [conjuntoEx2.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/conjuntoEx2.py)
5. Criar um conjunto contendo as matrículas de um grupo de 10 alunos.
Considerando o conjunto de matrículas, o programa deve ler uma matrícula digitada, verificar se pertence ao conjunto,
criando um dicionário, com chave matrícula e a respectiva nota. Caso não pertença, incluir a matrícula no conjunto. [conjuntoEx3.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/conjuntoEx3.py)
6. Dados 5 conjuntos contendo o cpf de pessoas, cada conjunto de uma instituição financeira, determinar quantos e quais clientes possuem conta em pelo menos três instituições.
7. Dada uma turma de alunos cuja matrícula e nome estão cadastrados em um conjunto, ler uma nova matrícula e nome.
Se o aluno já estiver matriculado, o programa deverá apresentar uma mensagem.
Se não estiver matriculado e a turma possuir menos do que 20 alunos, atualizar o conjunto.
Caso a turma já esteja completa, apresentar a mensagem.

___
**[home](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progPython_aulas.md)**





## Conjuntos

### Sobre conjuntos...
- Constituem **conjuntos desordenados finitos** de elementos, **sem elementos repetidos**.
- Não admitem modificar elementos existentes - seus elementos são imutáveis, no entanto permitem incluir novos elementos.
- Não se configuram como sequências, logo seus elementos não podem ser indexados.
- Conjuntos também suportam operações matemáticas como  
união **(operador:  `|`  )**,  
interseção **(operador: `&`)**,  
diferença **(operador: `-`)** e  
diferença simétrica **(operador: `^`)**.  
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
| set1.update(set2) | Atualiza os elementos de set 1 com os elementos de set2|

### Exercícios
#### Elaborar um *script* em Python para
1. Criar dois conjuntos com alunos de duas turmas com, no máximo, 5 alunos cada.
Os conjuntos devem conter as matrículas dos alunos. Os alunos são matriculados inicialmente na turma A.
Quando a capacidade da turma A for completada o programa passa a matricular na turma B.
Quando a capacidade da turma B for completada o programa deve ser encerrado.
Após cadastrar os dados o programa deverá apresentar a relação de matriculados em cada turma. [conjuntoEx1.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/conjuntoEx1.py)
2. Criar dois conjuntos A e B. Escrever os elementos que pertencem ao conjunto A e não pertencem ao B.
Escrever os elementos que pertencem a ambos os conjuntos.
3. Criar um conjunto numéricos. O primeiro conjunto contém uma sequência de valores de ponto flutuante entre 0 e 5 (inclusive),
em passos de 0.5.
4. Dados 5 conjuntos contendo o cpf de pessoas, cada conjunto de uma instituição financeira, determinar quantos e quais clientes possuem conta em pelo menos três instituições.
5. Dada uma turma de alunos cuja matrícula e nome estão cadastrados em um conjunto, ler uma nova matrícula e nome.
Se o aluno já estiver matriculado, o programa deverá apresentar uma mensagem.
Se não estiver matriculado e a turma possuir menos do que 20 alunos, atualizar o conjunto.
CAso a turma já esteja completa, apresentar a mensagem.






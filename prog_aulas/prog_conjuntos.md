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



## Strings 

### 1. Sobre strings...
- Dados não numéricos que constituem cadeias de caracteres e podem ser criados pela delimitação entre aspas simples ou aspas duplas da cadeia de caracteres. Por exemplo, "existem 26 caracteres" ou '4 números inteiros'. A função print() com ambos os argumentos resulta no mesmo resultado.
- Alguns caracteres - chamados **caracteres de escape** - podem estare presentes nas strings. São eles

| Caractere de escape | Significado |
| ------------------- | ----------- |
| \n |  Nova linha. Move o cursor para o início da próxima linha. |
| \t | Tabulação Horizontal. Move o cursor para a próxima parada de tabulação (tab). |
| \r | Retorno de carro. Move o cursor para o início da linha atual; não avança para a próxima linha. |
| \b | Backspace. Retrocede o cursor um caractere. |
| \a | Alerta. Emite o som de sino do sistema. |
| \ | Barra invertida (Backslash). |
| \\" | Caractere de aspas duplas. |
| \\' | Caractere de aspas simples. |

- As strings podem abranger várias linhas. Para que o fim da linha seja incluído automaticamente uma maneira é usar as aspas triplas: """...""" ou '''...'''. 
- Strings são um conjunto **ordenado** de caracteres, usado para armazenar e representar informações textuais, logo os caracteres podem ser referenciados por um índice de indexação definido entre colchetes, como uma lista.  
Por exemplo,  
```
x = 'palavra'
print(x[0])
``` 
produz *p*.
- Tratam-se de um tipo de sequência **imutável**, ou seja, que não podem ser alteradas após serem criadas.
- [Métodos para strings](https://docs.python.org/pt-br/3/library/stdtypes.html#textseq)  
- [Operações com strings](https://docs.python.org/pt-br/3/library/string.html?highlight=m%C3%A9todos%20string)
- Algumas operações simples:  
`+` - concatena strings. Por exemplo `'a casa ' + 'eh bonita'`, resulta `'a casa eh bonita'`  
A função `len('nome da string')` retorna o número de caracteres. Por exemplo `len('a casa eh bonita')` retorna 16 
O método `string.count('teste')` gera o número de vezes que teste está na string. Por exemplo,  
```
x = 'palavra'
print(x.count('a'))
```
retorna 3.

### Alguns exercícios com manipulação de strings
1. Elaborar um script em Python que permita ler uma palavra digitada pelo usuário. O programa deverá escrever todas as letras da palavra diferentes da letra ‘a’.  [StringExercicio1.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/StringExercicio1.py)
2. Elaborar um script em Python que permita ler um texto digitado pelo usurário. O programa deverá calcular o número de vogais presentes no texto digitado.  
Solução 1: [StringExercicio2.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/StringExercicio2.py)  
Solução 2: [StringExercicio2-1.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/StringExercicio2-1.py)
3. Elaborar um script em Python que leia uma palavra digitada pelo usuário. O programa deverá escrever a palavra digitada com a posição das letras invertidas.  
Solução 1: [StringExercicio3.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/StringExercicio3.py)  
Solução 2: [StringExercicio3-1](https://github.com/claytonjasilva/prog_exemplos/blob/main/StringExercicio3-1.py)  
4. Elaborar um script em Python que leia o nome completo de uma pessoa e a função em uma empresa. O programa escreve o endereço de e-mail formado da seguinte maneira: primeiro nome + ponto + função + arroba + ‘empresa.com.br’. O endereço de e-mail deve ser formado por letras minúsculas.
[StringExercicio4.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/StringExercicio4.py)
5. Elaborar um script em Python que leia uma relação de N nomes de alunos digitada pelo usuário. Após cadastrar a relação o usuário poderá digitar uma letra e o programa retornará todos os nomes iniciados com a letra digitada. [StringExercicio5.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/StringExercicio5.py)
6. Elaborar um script em Python que leia um texto digitado pelo usuário. Após digitar o texto, o usuário poderá digitar uma palavra e o programa determinará o número de vezes que a palavra está presente no texto digitado. [StringExercicio6.py](https://github.com/claytonjasilva/prog_exemplos/blob/main/StringExercicio6.py)
7. Elaborar um script em Python que leia um texto digitado pelo usuário. O texto poderá ter no máximo 50 caracteres. Enquanto o texto não for válido o programa deverá solicitar que o usuário digite um texto dentro do limite. Caso o usuário tente três vezes o programa interromperá a execução, informando que o texto não foi cadastrado.

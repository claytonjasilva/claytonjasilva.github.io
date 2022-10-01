## Strings 

### 1. Sobre strings...
- Dados não numéricos que constituem cadeias de caracteres e podem ser delimitados por aspas simples ou aspas duplas. Por exemplo, "existem 26 caracteres" ou '4 números inteiros'. A função print() com ambos os argumentos resulta no mesmo resultado.
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

- Conjunto **ordenado** de caracteres, usado para armazenar e representar informações textuais, logo 
- Tratam-se de um tipo de sequência **imutável**, ou seja, que não podem ser alteradas após serem criadas.
- É possível manipular strings de diversas maneiras - Ver em <https://docs.python.org/pt-br/3/tutorial/introduction.html#strings>
- [Métodos de string](https://docs.python.org/pt-br/3/library/string.html?highlight=m%C3%A9todos%20string)
- Algumas operações simples:  
*+* - concatena strings, por exemplo 'a casa ' + 'eh bonita', resulta ' a casa eh bonita'  
*len('nome da string')* - retorna o número de caracteres  
*nome da string[i]* - retorna o caractere de índice i  
*string.count('teste')* - retorna o número de vezes que teste está na string  
  
### Alguns exercícios com métodos de listas e manipulação de strings
1. Elaborar um programa em Python que leia e cadastre em uma lista um conjunto inicial de N itens armazenados em uma despensa. O programa deve permitir que, após cadastrar os itens, o usuário: (i) inclua um novo item; (ii) remova um item pelo nome; (iii) apague todos os itens da lista. Sugestão: consulte o link <https://docs.python.org/pt-br/3/tutorial/datastructures.html?highlight=m%C3%A9todos%20lista>
2. Elaborar um programa em Python que leia e cadastre os nomes dos alunos e as respectivas notas obtidas em uma avaliação de uma turma de aula com 20 alunos. O programa deverá, após os dados serem cadastrados, ler o nome de um aluno e escrever a nota obtida por ele. Sugestão: consulte o link <https://docs.python.org/pt-br/3/tutorial/datastructures.html?highlight=m%C3%A9todos%20lista>
3. Elaborar um script em Python que permita ler uma palavra digitada pelo usuário. O programa deverá escrever todas as letras da palavra diferentes da letra ‘a’.
4. Elaborar um script em Python que permita ler um texto digitado pelo usurário. O programa deverá calcular o número de vogais presentes no texto digitado.
5. Elaborar um script em Python que leia uma palavra digitada pelo usuário. O programa deverá escrever a palavra digitada com a posição das letras invertidas.
6. Elaborar um script em Python que leia o nome completo de uma pessoa e a função em uma empresa. O programa escreve o endereço de e-mail formado da seguinte maneira: primeiro nome + ponto + função + arroba + ‘empresa.com.br’. O endereço de e-mail deve ser formado por letras minúsculas.
7. Elaborar um script em Python que leia uma relação de N nomes de alunos digitada pelo usuário. Após cadastrar a relação o usuário poderá digitar uma letra e o programa retornará todos os nomes iniciados com a letra digitada.
8. Elaborar um script em Python que leia um texto digitado pelo usuário. Após digitar o texto, o usuário poderá digitar uma palavra e o programa determinará o número de vezes que a palavra está presente no texto digitado.
9. Elaborar um script em Python que leia um texto digitado pelo usuário. O texto poderá ter no máximo 50 caracteres. Enquanto o texto não for válido o programa deverá solicitar que o usuário digite um texto dentro do limite. Caso o usuário tente três vezes o programa interromperá a execução, informando que o texto não foi cadastrado.

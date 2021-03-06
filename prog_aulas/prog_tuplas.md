## Tuplas 

### Sobre tuplas...
- Constituem um dos tipos de **sequências**, assim como as listas e as strings, ou seja, **conjuntos ordenados finitos indexados por números não negativos**. 
- Uma tupla consiste em uma sequência de valores separados por vírgulas, de expressões entre **parênteses**.
- Podem ser criadas das seguintes formas:  
  --relacionando os elementos e separando-os por vírgulas entre parênteses ou não  
  --utilizando a função embutida *tuple()*
- Aplicam-se às tuplas a função embutida *len()* e a indexação de uma tupla de dimensão *n* por um conjunto de índices 0, 1, …, n-1, cada item i tratado *a[i]*.
- Tratam-se de um tipo de sequência **imutável**, ou seja, que **não** podem ser alteradas após serem criadas, contudo é possível criar tuplas que contenham objetos mutáveis, como listas. 
- **Não é possível atribuir itens individuais** de uma tupla.
- Podem conter qualquer tipo de objeto - os elementos não precisam ser do mesmo tipo, mas **geralmente** são usadas com elementos heterogêneos.
  
**As operações com tuplas podem ser obtidas em *<https://docs.python.org/3/library/stdtypes.html#index-23>***

### Sobre conjuntos...
- Constituem **conjuntos desordenados finitos** de elementos, **sem elementos repetidos**.
- Conjuntos também suportam operações matemáticas como  
união **(operador:  |  )**,  
interseção **(operador: &)**,  
diferença **(operador: -)** e  
diferença simétrica **(operador: ^)**.  
- Para serem criados podem ser usados chaves ou a função [*set()*](https://docs.python.org/pt-br/3/library/stdtypes.html#set).

### Exercícios com listas  
1. Elaborar um programa na linguagem Python que armazene as vogais em uma tupla. Leia também uma string, verifique e escreva em uma lista quantas vezes cada vogal está presente na string lida.
2. Elaborar um programa em Python que leia a matrícula de um grupo de N alunos. Como a matrícula identifica de modo inequìvoco cada aluno, após cadastrar a matrícula dos alunos, o programa não admitirá mudar o número os dados cadastrados.
3. Elaborar um programa em Python que leia a matrícula de um grupo de N alunos. Leia também as notas do grupo (AP1, AP2 e AC). O programa deverá escrever a matrícula e a média de cada aluno. 
4. Elaborar um programa em Python que leia e armazene o cpf e o saldo bancário de um grupo de 10 pessoas ao longo de 30 dias. O programa deverá escrever o cpf das pessoas seguido do saldo médio mensal.
5. Elaborar um programa na linguagem Python que leia o nome e o cpf de um grupo de 30 pessoas. O programa deve fornecer a possibilidade de 'cadastrar a habilitação' para cada cpf; ou 'alterar a data da habilitação' se já tiver sido cadastrada. Quando cadastrar a habilitação, o usuário deve informar o número e a data. O número não pode ser alterado, no entanto a data pode ser alterada. 
6. Elaborar um programa na linguagem Python que leia a identificação de um grupo de componentes mecânicos. O usuário deixará de cadastrar os componentes quando for inserido o número de identificação for igual a 0. O identificador do componente, que não pode ser alterado, sempre é cadastrado juntamente com sua versão de fabricação, que pode ser alterada. Após cadastrados os componentes, o programa deve permitir localizar um componente a partir de seu identificador, apresentando a sua versão de fabricação. 

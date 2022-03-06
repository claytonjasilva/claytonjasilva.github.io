## Listas 

### Sobre listas...
- Constituem um dos tipos de **sequências**: conjuntos ordenados finitos indexados por números não negativos. 
- A função embutida [*len()*](https://docs.python.org/pt-br/3/library/functions.html#len) retorna o número de itens de uma sequência, incluindo as listas.
- Quando o comprimento de uma sequência é *n*, o conjunto de índices contém os números 0, 1, …, n-1.  
  O item i da sequência *a* é selecionado por *a[i]*.
- Funcionalmente, são apenas um lugar para reunir outros objetos.
- São formadas colocando uma lista separada por vírgulas de expressões entre colchetes.  
  *Observe que não há casos especiais necessários para formar listas de comprimento 0 ou 1*
- Tratam-se de um tipo de sequência **mutável**, ou seja, que podem ser alteradas após serem criadas. 
- Definem uma **ordenação** posicional dos objetos, da esquerda para a direita. 
- Possuem **comprimento variável**, ou seja, podem crescer e diminuir.
- Podem conter qualquer tipo de objeto - os elementos não precisam ser do mesmo tipo.
- Admitem aninhamento arbitrário, ou seja, podem ser construídas listas de listas.
  
**As operações com listas podem ser obtidas em *<https://docs.python.org/3/library/stdtypes.html#index-23>***

### Matrizes
- Como é possível aninhar listas, é possível construir matrizes a partir de uma lista com sub-listas aninhadas
- Por exemplo,  
  *matriz =[[1,2,3],[4,5,6],[7,8,9]]*  
  é uma lista cujo primeiro objeto, *matriz[0]* é a lista *[1,2,3]*, logo  
  *matriz[0][2]* retorna o elemento *3*. 

### Exercícios com listas  
1. Elaborar um programa na linguagem Python que leia os dados sobre o número de batimentos cardíacos de um grupo de 30 pessoas. O programa deve calcular a média e o desvio padrão dos batimentos das pessoas.
2. Elaborar um programa na linguagem Python para ler os nomes e a nota final de um grupo de 20 alunos. O programa deverá calcular e escrever os nomes, as respectivas notas dos alunos e a média global da turma.
3. Elaborar um programa na linguagem Python para ler a matrícula e o número de faltas de um grupo de alunos; ler também o número de aulas do semestre. O programa deverá ler repetidamente os dados até o usuário digitar a matrícula 0000. Deverá calcular e apresentar o percentual de faltas de cada aluno, informando se está reprovado ou não por faltas - admite-se aprovação se o número de faltas for inferior a 25%. 

### Outra sequência importante: as cadeias de caracteres ou *[Strings>>](prog_str.md)*.

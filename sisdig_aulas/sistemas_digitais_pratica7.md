# Prática 7. Circuitos combinacionais utilizando portas lógicas

## Caso 1. Dado o circuito apresentado na figura abaixo, atender ao que se pede.

![Circuito 1. Circuito combinacional com portas lógicas AND, OR e NOT](/sisdig_aulas/images_sisdig/Schematic_sistemas_digitais_pratica7_2024-07-26.png) Circuito 1 - portas AND, OR e NOT

### Observações do caso 1

1. O diagrama esquemático foi elaborado utilizando-se o software de desenho e simulação EasyEDA.

- O Easy EDA permite desenhar e **simular** os circuitos eletrônicos **digitais** e **analógicos**.
- **Instalar a versão desktop** do EasyEDA e criar um **Novo projeto**.
- Você pode também utilizar a **versão Web** para criar o projeto. Em ambos os casos, é necessário **criar uma conta**.
- Depois de criar o projeto, você poderá criar um **novo esquema**. O esquemático poderá ser construído selecionando os componentes na *Common Library*>>Circuitos Digitais.
- No esquema mostrado acima, as portas lógicas reproduzem as conexões de alimentação (VCC e GND). Para isso é necessário clicar com o botão direito no componente e editar o símbolo. Em seguida, selecionar mostrar VDD e GND.
- No esquema mostrado acima são usados os elementos **Estado Lógico** e **Sonda Lógica**. O estado  corresponde ao valor lógico a ser injetado na porta (0 ou 1). A sonda é o elemento que indica o nível lógico observado em um nó do circuito. Por exemplo, na saída.
- No esquema é utilizada a fonte de tensão DC, cujo valor é definido em 5 VDC.
- No esquema é utilizada a referência de terra, GND.

2. Além do desenho esquemático, o EasyEDA permite a simulação do circuito. 

- Para simular, as portas devem estar alimentadas.
- Os estados podem ser modificados, para verificar os resultados para todas as possíveis combinações de estados.

### Caso  1. Pedidos

1. Desenhar o esquema utilizando a ferramenta EasyEDA.
2. Numerar as portas lógicas e os nós. Recomenda-se numerar da entrada para a saída.
3. Em seguida, utilizando as sondas lógicas, verificar o nível lógico em cada um dos nós, para as possíveis combinações dos estados lógicos. Por exemplo, 000, 001, 010, ...
4. Montar uma tabela somente com os níveis lógicos obtidos no nó de saída do circuito combinacional.
5. Montar na *protoboard* o circuito equivalente ao esquema:

- Alimentar as portas com a fonte de tensão
- Inserir um LED no nó de saída.
- Realizar os testes similares ao do item anterior, identificando o nível de tensão em cada nó **utilizando o multímetro**. 
- Checar se a tabela construída corresponde às saídas observadas no LED.

## Caso 2. Projetar um circuito para controle de linha de produção

### Pedido do caso 2

Seja uma linha de produção definida pelas células apresentadas na figura  
![linha](F9CD7947-8D73-4819-8C92-A17A9F139462.jpeg)  

1. As células B e C realizam as mesmas operações
2. Cada célula possui um sensor que acusa quando ocorre uma falha
3. Admitir que o estado de cada célula seja definido por uma **variável booleana**, tal que ao estado de falha é atribuído o valor lógico 0 e, em caso contrário, o valor 1. Assim, por exemplo, *V(A)=0* indica que a célula A está em falha. Usando o mesmo método, propor uma expressão booleana de um circuito de controle da linha de produção que **gera um alarme quando a linha falha**.
4. Propor um circuito digital para implementar a expressão minimizada com portas OR, AND e INVERSORES.
5. Simular o circuito utilizando o EasyEDA, construindo uma tabela de estados possíveis de cada célula e o valor correspondente da linha.
6. Montar na *protoboard* o circuito equivalente ao esquema:

- Alimentar as portas com a fonte de tensão
- Inserir um LED no nó de saída.
- Realizar os testes, verificando o nível de tensão em cada nó, **utilizando o multímetro**. 
- Checar se a tabela construída corresponde às saídas observadas no LED.

## Caso 3. Somador

### Pedido do caso 3

Um sistema digital precisa de circuito que realize a soma binária de um número *A* de 2 bits com um número *B* de 1 bit.  
A tabela que represente todas as combinações possíveis da soma *A+B* está apresentada abaixo.

|A1|A0|B|C|S1|S0|
|-|-|-|-|-|-|
|0|0|0|0|0|0|
|0|0|1|0|0|1|
|0|1|0|0|0|1|
|0|1|1|0|1|0|
|1|0|0|0|1|0|
|1|0|1|0|1|1|
|1|1|0|0|1|1|
|1|1|1|1|0|0|

A expressão lógica para a saída do bit 1 (S1) da soma de um número binário de 2 bits \( A1A0 \) com um número binário de 1 bit \( B \) é:

\[ S1 = A1 \cdot (A0 \oplus B) \]

Onde:

- \( \cdot \) representa a operação AND
- \( \oplus \) representa a operação XOR

1. Propor um circuito digital para implementar a expressão, utilizando portas OR, AND e INVERSORES
2. Simular o circuito utilizando o EasyEDA, verificando a tabela de soma para S1.
3. Montar na *protoboard* o circuito equivalente ao esquema:

- Alimentar as portas com a fonte de tensão
- Inserir um LED no nó de saída.
- Realizar os testes, verificando o nível de tensão em cada nó, **utilizando o multímetro**. 
- Checar se a tabela construída corresponde às saídas observadas no LED.

___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  

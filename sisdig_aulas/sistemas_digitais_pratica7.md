# Prática 7. Circuitos combinacionais utilizando portas lógicas

## Caso 1. Dado o circuito apresentado na figura abaixo, atender ao que se pede.

![Circuito 1. Circuito combinacional com portas lógicas AND, OR e NOT](/sisdig_aulas/images_sisdig/Schematic_sistemas_digitais_pratica7_2024-07-26.png) Circuito 1 - portas AND, OR e NOT

### Observações

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

### Problema do caso 2

1. Seja uma linha de produção definida pelas células apresentadas na figura  
![linha](F9CD7947-8D73-4819-8C92-A17A9F139462.jpeg)  
1. As células B e C realizam as mesmas operações
2. Cada célula possui um sensor que acusa quando ocorre uma falha
3. Apresentar a expressão booleana de um circuito de controle que **gera um alarme quando a linha falha**
4. Minimizar a expressão - se for possível
5. Propor um circuito digital para implementar a expressão minimizada com portas OR, AND e INVERSORES
6. Implementar o circuito

## Caso 3. Somador

### Problema do caso 3

1. Um sistema digital precisa de circuito que realize a soma binária de um um número de 2 bits com um número de 1 bit
2. Apresentar a expressão booleana de cada uma das saídas do circuito somador
3. Minimizar a expressão de cada uma das saídas - se for possível 
4. Propor um circuito digital para implementar a expressão minimizada com portas OR, AND e INVERSORES
5. Implementar o circuito

___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  

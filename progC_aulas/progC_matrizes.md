# 10. Matrizes em C

## 10.1 Matrizes bidimensionais
As matrizes são muitas vezes chamadas de estrutura composta multidimensional homogênea.  
1. Composta porque admite múltiplos dados;
2. Multidimensional porque admite NxM dimensões - diferentemente do vetor (*array*);
3. Homogênea porque só armazena um tipo.  

A forma geral da declaração de uma matriz bidimensional é  
```
<tipo> <nome> [número de linhas][número de colunas]
```

O índice da esquerda indexa as linhas e o índice da direita indexa as colunas.  
Lembrando que a indexação sempre será a **partir de *0***.  
O problema clássico de matrizes bidimensionais é o de leitura da varredura dos dados, **por linha ou por coluna**.

## 10.2 Inicialização de matrizes
O formato geral de incialização de matrizes é dado por  
```
<tipo> <nome> [tam 1][tam 2]...[tam n] = {lista de valores};
```

A lista de valores é composta por valores (do mesmo tipo da variável) separados por vírgula.  
Os valores devem ser apresentados **na ordem em que serão colocados na matriz**.

## 10.3 Exemplos
1. Elaborar um programa em C que preencha, linha por linha, com dados de 1 a 200, uma matriz de 20x10.  
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/progC_matrizes1.c)  
2. Elaborar um programa em C que leia as temperaturas (em graus Celsius), entre 2h e 24h do dia, em intervalos de 2h, para 20 cidades.  
Armazene as temperaturas da cidade em uma matriz.  
Determine e armazene a temperatura média na mesma matriz.  
3. Elaborar um programa em C para armazenar em uma matriz de duas linhas as vogais.  
Na primeira linha, as vogais em minúscula.  
Na segunda linha, as vogais em maiúscula.  
4. Elaborar um programa em C que leia os dados de peso de 10 pessoas mês a mês, de janeiro a dezembro.  
Armazene os pesos das pessoas em uma matriz.  
Utilizar ponteiro.  





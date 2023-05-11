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

## 10.n Exemplos
1. Elaborar um programa em C que preencha, linha por linha, com dados de 1 a 200, uma matriz de 20x10.  
2. Elaborar um programa em C que leia as temperaturas (em graus Celsius), entre 2h e 24h do dia, em intervalos de 2h, para 20 cidades.  
Armazene as temperaturas da cidade em uma matriz.  
Determine e armazene a temperatura média na mesma matriz.  


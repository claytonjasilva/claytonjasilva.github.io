# Cap. 3 — Projeto de Circuitos Combinacionais

## 3.1 Formas canônicas

Toda expressão booleana possui uma expressão logicamente equivalente que pode ser escrita na forma de **disjunção (soma) da conjunção (produto) de termos** com todas as variáveis independentes.

Por exemplo, $f_1(A,B,C) = A.B + A.C + A.B.C$ e $f_2(A,B,C) = A.\bar{B}.C + A.B.\bar{C} + A.B.C$ são logicamente equivalentes.

**Verificar na tabela-verdade.**

A função $f_2$ está na forma **soma de produtos**. A soma de produtos é uma das duas **formas canônicas** das expressões booleanas.

1. Os termos que constituem os produtos (no sentido de que é a conjunção de **todas as variáveis**) da soma são chamados de **mintermos**.
No caso de $f_2$, os mintermos são:
$A.\bar{B}.C$,
$A.B.\bar{C}$ e
$A.B.C$

2. Observe que, em se tratando de três variáveis (*A*, *B* e *C*), há no total $2^3 = 8$ combinações possíveis de produtos.
No entanto, nem todas as combinações determinam resultado 1 para $f_1$ e $f_2$, portanto nem todas são mintermos.

**Mintermos são somente os produtos que compreendem todas as variáveis e determinam resultado 1 para a função.**

A expressão na forma canônica é **única**. Considerando o exemplo, $f_2$ é a **única expressão** na forma de soma de produtos que resulta o mesmo valor para todas as combinações de variáveis.

A segunda forma canônica é **dual** da soma de produtos. É chamada de **produto de somas**, que consiste na equivalência à **conjunção da disjunção de termos com todas as variáveis independentes**. **Não a utilizaremos neste curso.**

Pode-se obter a expressão equivalente a uma função qualquer na forma de soma de produtos de duas maneiras:

- aplicando os teoremas e axiomas da Álgebra Booleana;
- aplicando a tabela-verdade.

**Método:**

1. Gerar a tabela para a expressão original.
2. Identificar os mintermos que resultam 1.
3. Gerar a expressão equivalente ao mintermo que resulta 1.
4. Escrever a expressão na forma da disjunção dos mintermos.

---

## 3.2 Projeto de circuitos combinacionais

### 3.2.1 Método 1

Um passo a passo recomendado para projetar os circuitos:

1. Interpretar o problema, **expressando a solução na forma algébrica**.
2. Substituir as operações pelas portas lógicas equivalentes.

Os dois passos acima não consideram que a expressão obtida da interpretação **pode não ser a forma mínima**. Em consequência, é conveniente buscar minimizar a expressão lógica pelas razões já discutidas. O passo a passo se tornará o seguinte.

---

### 3.2.2 Método 2

Outro passo a passo recomendado para projetar os circuitos:

1. Interpretar o problema, **expressando a solução na forma algébrica**.
2. **Minimizar a expressão** aplicando os teoremas e axiomas da Álgebra Booleana.
3. Substituir as operações pelas portas lógicas equivalentes.

Nem sempre é simples inferir diretamente a expressão algébrica a partir do problema formulado.

---

### 3.2.3 Método 3

Nesse caso, pode-se usar uma abordagem diferente:

1. Interpretar o problema, **expressando a solução na forma de tabela-verdade**.
2. Construir a expressão da **solução na forma canônica da soma de produtos**.
3. **Minimizar a expressão** aplicando os teoremas e axiomas da Álgebra Booleana — nesse caso, a utilização de adjacência lógica é direta.
4. Substituir as operações pelas portas lógicas equivalentes.

Um quarto método pode ser utilizado: **minimização com Mapa de Karnaugh** — discutiremos a seguir.

---

## 3.3 Simplificação das expressões algébricas com Mapa de Karnaugh (Mapa K)

Método gráfico para simplificar expressões booleanas.

O **Mapa K** compreende uma tabela com as variáveis de cada mintermo apresentadas nas linhas e colunas.

As variáveis rotulam cada linha na forma do mintermo, assegurando uma adjacência lógica entre colunas e linhas adjacentes.

**Cada célula do Mapa K será preenchida com 1 para os mintermos pertencentes à expressão na sua forma canônica.**

### Mapas K de 3 e 4 variáveis

![Mapas K — 3 e 4 variáveis](/assets/img/sisdig/cap3_mapasK.svg)

O método de simplificação consiste nos seguintes passos:

1. Construir o Mapa K.
2. Agrupar pares, quartetos ou octetos de 1s — desenhar no mapa as maiores combinações de 1s possíveis; pode haver interseção de grupos.
3. Substituir cada grupo pela expressão equivalente, considerando somente as variáveis que não se alteram no grupo.
4. Escrever a expressão como uma disjunção das expressões dos grupos obtidas.
5. Incluir na expressão os 1s isolados, ou seja, aqueles que não puderam ser incluídos em nenhum grupo.
6. Lembre-se de que as colunas e linhas das extremidades são adjacentes — ou seja, é possível construir grupos de 1s com elas.
7. As expressões mínimas são logicamente equivalentes, mas podem não ser únicas, pois dependem dos grupos constituídos.
8. Existem problemas em que não importa o valor da saída para certas condições de entrada: condição ***don't care***.

### Simplificação com *don't care*

O método de simplificação com o uso de *don't care* consiste em:

1. Construir o Mapa K, incluindo X (*don't care*) nas células correspondentes.
2. **Incluir X nos grupos de 1 somente se for possível constituir grupos maiores de 1s.**
3. **Desconsiderar o X (admitir igual a 0) nas situações em que não contribuir para constituir grupos maiores de 1s.**
4. Escrever a expressão como uma disjunção das expressões dos grupos obtidas.
5. Incluir na expressão os 1s isolados, ou seja, aqueles que não puderam ser incluídos em nenhum grupo.

---

**[Home — Sistemas Digitais](https://claytonjasilva.github.io/sisdig.html)**

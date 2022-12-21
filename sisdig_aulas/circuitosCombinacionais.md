# 3. Projeto de circuitos combinacionais

## 3.1 Formas canônicas
Toda expressão booleana possui uma expressão logicamente equivalente 
que pode ser escrita na forma de **disjunção (soma) da conjunção (produto) de termos** com todas as variáveis independentes.  
Por exemplo, $f_1(A,B,C)=A.B+A.C+A.B.C$ e $f_2(A,B,C)=A.\bar{B}.C+A.B.\bar{C}+A.B.C$ são logicamente equivalentes. 
**Verificar na tabela verdade.**  
A função *f<sub>2</sub>* está na forma **soma de produtos**. A soma de produtos é uma das duas **formas canônicas** das expressões booleanas.  

1. Os termos que constituem os produtos (no sentido de que é a conjunção de **todas as variáveis**) da soma são chamados de **mintermos**.  
No caso de *f<sub>2</sub>*, os mintermos são:  
$A.\bar{B}.C$,   
$A.B.\bar{C}$ e  
$A.B.C$  
2. Observe que, em se tratando de três variáveis (*A*, *B* e *C*), há no total *2<sup>3</sup>=8* combinações possíveis de produtos.
No entanto, nem todas as combinações não determinam resultado 1 para *f<sub>1</sub>* e *f<sub>2</sub>*, portanto não são mintermos.

**Mintermos são somente os produtos que compreendem todas as variáveis e determinam resultado 1 para a função.**
A expressão na forma canônica é **única**. Considerando o exemplo, *f<sub>2</sub>* é a **única expressão** na forma de soma de produtos 
que resulta o mesmo resultado para todas as combinações de variáveis.  
A segunda forma canônica é **dual** da soma-de-produtos. É chamada de **produto-de-somas**,
que consiste na equivalência à **conjunção da disjunção de termos com todas as variáveis independentes**. **Não a utilizaremos neste curso.**  
Pode-se obter a expressão equivalente a uma função qualquer na forma de soma de produtos de duas maneiras:  
- aplicando-se os teoremas e axiomas da Álgebra Booleana;
- aplicando-se a tabela verdade.  

Método:
1. Gerar a tabela para a expressão original
2. Identificar os mintermos que resultam 1
3. Gerar a expressão equivalente ao mintermo que resulta 1
4. Escrever a expressão na forma da disjunção dos mintermos 










# Guia rápido Python - Programação 2022.1
[Operadores](operadores)

## #Operadores
1. **Aritméticos**  
   Sintaxe:  
   *+*, adição  
   *-*, subtração  
   *, multiplicação  
   */*, divisão
   *//*, divisão inteira  
   *%*, módulo de divisão inteira  
    ** , potenciação  
    Exemplos: *x+y, 4-z, 8*5, x/4, x//4, x%4, x ** 2  
    Finalidade: implementar operação aritmética.
2. **Lógicos de comparação**  
  Sintaxe:  
  *>*, maior  
  *<*, menor  
  *>=*, maior ou igual  
  *<=*, menor ou igual  
  *==*, igual  
  *!=*, diferente  
  Exemplos: x>y, 4<z, x==5, x!=4, ...  
  Finalidade: realizar a comparação e retornar True (verdadeiro) ou False (falso).  
3. **Lógicos**  
  Sintaxe:  
  *or*, disjunção - ou  
  *and*, conjunção - e  
  *not*, negação  
  Exemplos: x or y, x and y, not x, ... onde x, y retornam *True* ou *False* 
  Finalidade: realizar operações lógicas entre expressões que retornam *True* (verdadeiro) ou *False* (falso). 
 
## Instruções simples e compostas 
1. **Atribuição**  
   Sintaxe: *=*  
   Exemplo: *x=24*  
   Finalidade: atribuir um valor à direita do sinal da equação a uma variável à esquerda do sinal. No exemplo, x **recebe** 24.
2. **Comando if**  
  Sintaxe:  
  *if cond:*  
  *-->instruções*  
  Exemplo:  
  *if x<0:*  
  *-->print(x)*  
  Finalidade: Executa as 'instruções' somente se a condição for verdadeira.  
3. **Comando if...else...**  
  Sintaxe:  
  *if cond:*  
  *-->instruções A*  
  *else:*  
  *-->instruções B*  
  Exemplo:  
  *if x<0:*  
  *-->print(x)*  
  *else:*  
  *-->print(y)*  
  Finalidade: Executa o bloco A de 'instruções' somente se a condição for verdadeira. Se a condição for falsa executa o bloco B de 'instruções'.  
4. **Comando if...elif...else...**  
  Sintaxe:  
  *if cond 1:*  
  *-->instruções A*  
  *elif cond 2:*  
  *-->instruções B*  
  *else:*  
  *-->instruções C*  
  Exemplo:  
  *if x<16:*  
  *-->print(x)*  
  *elif x<25:*  
  *-->print(x+16)*  
  *else:*  
  *-->print(x+25)*  
  Finalidade: Executa o bloco A de 'instruções' somente se a condição 1 for verdadeira. Se a condição for falsa, testa a condição 2. Se for verdadeira, executa o bloco B de 'instruções', senão executa o bloco C de 'instruções'. **O *else...* é opcional**   
5. **Comando while...**  
  Sintaxe:  
  *while cond :*  
  *-->instruções*  
  Exemplo:  
  *while x<16:*  
  *-->print(x)*    
  Finalidade: Executa as 'instruções' enquanto a condição for verdadeira. Se a condição for falsa, para à execução da instrução seguinte ao *while*  

## Entrada e saída
1. **Escrever uma saída**  
   Sintaxe: *print()*  
   Exemplo: *print(x)*  
   Finalidade: apresentar no 'console' o valor armazenado em *x*. No exemplo, o valor guardao em *x* será 'escrito' na tela de 'console'.
2. **Ler entrada**  
   Sintaxe: *input()*  
   Exemplo: *x=input("Digite o valor")*  
   Finalidade: ler o valor digitado pelo usuário no 'console', após ele teclar *enter* e armazena que foi digitado **no formato texto** em *x*. No exemplo, o texto digitado pelo usuário será armazenado em x.

## Conversão de tipos
1. **Converter para inteiro**  
   Sintaxe: *int()*  
   Exemplo: *y=int(x)*  
   Finalidade: converter um valor para um número inteiro. No exemplo, o valor de *x* é convertido para inteiro - por causa da atribuição, *y* recebe o número convertido  
2. **Converter para ponto flutuante** - usa-se **ponto flutuante** para a representação de números fracionários no computador  
   Sintaxe: *float()*  
   Exemplo: *y=float(x)*  
   Finalidade: converter um valor para um número de ponto flutuante. No exemplo, o valor de *x* é convertido para ponto flutuante

## Outras
1. **Comentário:**  
   Sintaxe: *#*, seguido pelo texto de comentário  
   Exemplo: *# texto explicativo do código*   
   Finalidade: facilitar a leitura do código
2.  **Delimitação de strings - cadeias de caracteres**  
   Sintaxe: *'texto'* ou *"texto"*  
   Exemplo: *"Digite o valor"*  
   Finalidade: Definir uma cadeia de caracteres
3. **Arredondar um número de ponto flutuante**  
   Sintaxe: *round(x,ndig)*  
   Exemplo: *y=round(x,1)*  
   Finalidade: Retorna o número arredondado para a precisão de n dígitos após o ponto decimal. Se ndig for omitido retornará o inteiro mais próximo.  
4. **A barra invertida - sequências de *escape* -**  
  Sintaxe:  
  *\n*, quebra linha  
  *\t*, tabulação  
  *\a*, bip  
  Exemplos: x>y, 4<z, x==5, x!=4, ...  
  Finalidade: A barra invertida seguida de um caracter representa um único caracter indicando operação da string.  


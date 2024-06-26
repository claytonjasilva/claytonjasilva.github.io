# 5. Controle de fluxo: estrutura de repetição *do-while*

A instrução `do-while` possui a seguinte sintaxe  
```
do {
  <instrução ou bloco de instruções>
}
while (<expressão lógica>);
```  
O compilador executa a instrução *do-while* da seguinte forma:
1. Executa a primeira vez a instrução interna ao *do*. 
Ou seja, diferentemente do *while*, o comando *do-while* assegura a repetição pelo menos uma vez da instrução ou bloco de instruções.
2. Após executar a primeira vez a instrução (ou bloco de instruções), a máquina calcula o resultado da expressão lógica. 
Se a expressão resultar 0 (falso), passa à execução da instrução do código após o *do-while*, sem executar novo *loop*.
4. Se a expressão resultar 1 (verdadeiro), a instrução ou o bloco de instruções internos (delimitados pelas chaves) será executado novamente. Novo *loop*.
5. O processo se repete **enquanto** a expressão lógica de condição resultar 1.
6. A repetição da instrução ou do bloco de instruções internos será interrompida **quando o resultado da expressão lógica for 0*. 
Nesse momento, a máquina passará a executar a instrução após o *do-while*.  

O comando *do-while* é chamado de comando de repetição com **teste de condição no fim da estrutura**.

## 5.1 Controle das repetições com **contador**  
No caso do comando *do-while* o contador sempre deverá computar um *loop*. No exemplo abaixo utiliza-se a variável designada *cont*  
```
cont = 1;
do {
  <instrução ou bloco de instruções>
  cont = cont + 1;
}
while (cont<=50);
```  
A execução do código é similar à aplicação com o *while*.

## 5.2 Controle das repetições com *flag*
No caso da utilização do *flag* é bom lembrar que pelo menos uma execução do comando ou bloco de comandos interno à estrutura ocorrerè.  
Situações em que pode não ocorrer execução alguma das instruções do *loop* são mais adequadamente tratadas pelo *while*,  
ou usando-se os comandos ***break*** ou ***continue***.

## 5.3 Exemplos
1. Elaborar um código em C para ler um número inteiro não negativo e escrever a soma dos números **inferiores ao número lido**.  
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoCcomandoDoWhile1.c)  
2. Elaborar um código em C para ler um conjunto de números não nulos e escrever somente os números pares. 
Caso o número lido não seja par escrever a mensagem "numero impar".
O usuário poderá interromper o programa digitando o número 0.   
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoCcomandoDoWhile2.c)
3. Elaborar um código em C para ler um número inteiro *n* positivo. O usuário deve escolher uma opção de 1 a 3.  
A opção 1 deve escrever a soma dos *n* termos da série S = 1/(k+3), k=0,...,n-1  
A opção 2 deve escrever a soma dos *n* termos da série S = 2k/(k+1), k=0,...,n-1  
A opção 3 deve escrever a soma dos *n* termos da série S = k, k=0,...,n-1  
Se o usuário digitar uma opção inválida o programa deve permanecer solicitando uma opção válida.  
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoCcomandoDoWhile3.c)  
4. Escrever um código em C para calcular a expressão *e<sup>x</sup>* aplicando a aproximação dada abaixo  
$$e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+...$$  
Utilizar uma função cujos parâmetros são o expoente *x* e o número *N* de termos da aproximação.  
[Uma solução](https://github.com/claytonjasilva/prog_exemplos/blob/main/cursoCcomandoFor.c)


___
**[Home Conteúdo Programação em C](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progC_aulas.md)**   

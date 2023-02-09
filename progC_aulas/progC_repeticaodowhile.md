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
ou usando-se os comandos ***break** ou ***continue***.

___
**[home](/progC_aulas.md)**

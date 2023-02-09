# 6. Controle de fluxo: estrutura de repetição *for*

A instrução `for` possui a seguinte sintaxe  
```
for (<inicialização da variável de controle>;<expressão lógica>;<incremento>) {
  <instrução ou bloco de instruções>
}
```  
A instrução será executada da seguinte forma:
1. Inicializa-se a variável de controle conforme o comando de atribuição do argumento. 
2. A máquina calcula a expressão lógica. 
Se a expressão resultar 0 (falso), passa à execução da instrução do código após o *for*, sem executar o *loop*.
3. Se a expressão resultar 1 (verdadeiro), a instrução ou o bloco de instruções internos (delimitados pelas chaves) será executado.
4. Após o *loop* a variável de controle é atualizada conforme o incremento especificado no argumento da função.
5. A expressão é calculada novamente e o processo se repete até que resulte valor lógico igual a 0.  

O *loop* infinito pode ocorrer se não for especificada a expressão lógica de controle  
```
for (<inicialização da variável de controle>; ;<incremento>) {
  <instrução ou bloco de instruções>
}
```

## 5.2 Controle das repetições com *flag*
No caso da utilização do *flag* é bom lembrar que pelo menos uma execução do comando ou bloco de comandos interno à estrutura ocorrerè.  
Situações em que pode não ocorrer execução alguma das instruções do *loop* são mais adequadamente tratadas pelo *while*,  
ou usando-se os comandos ***break** ou ***continue***.

___
**[home](/progC_aulas.md)**

## Trabalhando com arquivos em Python

A maneira para operar com arquivos em Python pode ser obtida no [tutorial](https://docs.python.org/pt-br/3/tutorial/inputoutput.html#reading-and-writing-files)  
Alguns pontos podem ser destacados:  
1. A função [open()](https://docs.python.org/pt-br/3/library/functions.html#open) devolve um objeto arquivo, e é frequentemente usada com dois argumentos:  
*open(nome_do_arquivo, modo)*, onde o nome do arquivo deve incluir também todo o caminho de diretórios, no caso do Windows (p ex 'C:/Users/clayt/exemplo_python.txt') e o modo é uma string que define como será aberto o arquivo
2. Os modos na abertura podem ser:  
+ *r* - para abrir o arquivo somente em leitura
+ *w* - para abrir o arquivo para escrever (se o arquivo já existir seu conteúdo prévio será apagado)
+ *a* - para abrir o arquivo para adição ao final do arquivo
+ *r+* - para abrir o arquivo tanto para leitura como para escrita
2. Após operar com o arquivo, use o método **close**. 


# Leitura e escrita de arquivos
A maneira para operar com arquivos em Python pode ser obtida no [tutorial](https://docs.python.org/pt-br/3/tutorial/inputoutput.html#reading-and-writing-files)  

## Leitura de arquivos

1. A função *open* - sintaxe: *objeto=open('arquivo gravado','modo',encoding='uft-8')*  
  -onde o *'arquivo gravado'* representa o nome do arquivo **incluindo o caminho onde está armazenado**, por exemplo, objeto = open('C:/Users/clayt/exemplo_python.txt', 'r+')  
  -*'modo'* é **opcional** - se não for especificado assume-se 'r', podendo ser     
  'r' - somente para ler o arquivo  
  'w' para escrever (se o arquivo já existir seu conteúdo prévio será apagado)  
  'a' para abrir o arquivo para adição  
  'r+' abre o arquivo tanto para leitura como para escrita  
2. A função retorna para o objeto o arquivo normalmente no **formato texto** 
3. Para manipular o texto do arquivo lido, pode-se usar o **método read**, por exemplo, *texto = objeto.read()*  onde texto é uma string relativa ao **objeto inteiro**
4. Pode-se usar também o **método readline**, por exemplo, *linha = objeto.readline()*, que atribui uma linha do objeto à string linha - **cada execução é lida uma nova linha**    
5. Uma forma conveniente é trabalhar com a **função list**, por exemplo, *lista = list(objeto)*, que retorna o texto para a lista - cada linha é um elemento string da lista  
6. Após operar com qualquer arquivo, recomenda-se utilizar o **método close**, por exemplo, *objeto.close()*

## Escrita em arquivos
1. Após o arquivo ser aberto para escrita, usar o **método write**, por exemplo, *objeto.write('texto')*. A escrita será feita de acordo com o modo selecionado. 
  
**[home](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progPython_aulas.md)**

# O interpretador Python

As implementações do Python usualmente **convertem** instruções do código fonte em um formato intermediário chamado de **código de *byte***.  
Em seguida, **interpretam** o código de *byte*. O código de *byte* proporciona **portabilidade**, ou seja, pode ser executado em qualquer plataforma que tenha o interpretador instalado.

Como o Python não é compilado a execução dos programas é mais lenta do que as linguagens compiladas. Para contornar essa dificuldade, 
para tratar, por exemplo, problemas numéricos e animação, pode-se separar o aplicativo em partes, utilizando extensões compiladas, vinculando-as 
aos *scripts* Python.

## Conceitos introdutórios
Para executar os *scripts* Python você deve ter instalado o interpretador Python na sua máquina, 
que pode ser obtido em [python.org](https://www.python.org/). Pode ser obtido também em outros canais de distribuição.  

Você pode criar o código utilizando um editor de texto. Por convenção, os *scripts* Python recebem nomes que terminam com *.py*.  
Em seguida deve-se executar o código com o uso do interpretador. Para a execução, como tratado acima, antes o código deve ser **compilado** 
para o código de *byte*, que possui a extensão *.pyc* - signfica código *.py* compilado.

A geração do código *.pyc* acelera a execução da próxima vez que você executar o programa, pois a etapa de compilação já terá sido executada.  
Você pode verfificar se os seus códigos compilados foram gravados na sua máquina, uma vez que em programas maiores isso pode fazer a diferença no tempo de inicialização.  

## A máquina virtual Python
Uma vez que o código seja compilado em código de *byte*, será posteriormente executado pela **Máquina Virtual Python (PVM)**.  
A PVM é o **mecanismo de tempo de execução** do Python (*runtime*).  
É o componente que realmente executa os *scripts*.  
A figura ilustra o modelo de *runtime*.
![Modelo de *runtime*]()
Observação: todo esse processo é praticamente oculto aos proramadores, 
que simplesmente codificam e executam os programas.

## Desempenho
O código de *byte* não é diretamente executado no nível do chamdo *set* de instruções da arquitetura - instruções do processador ou de máquina,  
como são nas linguagem compiladas. Logo isso leva a **performance, em termos de tempo de execução**, a um desempenho superior ao de uma linguagem totalmente interpretada e inferior ao de uma linguagem compilada.

Por outro lado, a **performance, em termos de ciclo de desenvolvimento**, é mais simples, pois o ambiente de desenvolvimento e execução é o mesmo.  
Nas linguagens compiladas, após a compilação (e ligação) é realizada e posteriormente o código em nível de máquina é executado.

## Binários congelados
É possível transformar seus códigos Python em códigos executáveis em nível de máquina.  
O código executável (*.exe*) inclui, empacotados, o interpretados Python (PVM) com o código Python e demais arquivos de suporte. 

Um dos sistemas para obter o binário congelado é o pacote [*PyInstaller*](https://pyinstaller.org/en/stable/).






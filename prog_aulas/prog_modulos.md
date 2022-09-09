## Módulos e pacotes 

### Conceitos
**- Tutorial - [módulos e pacotes](https://docs.python.org/pt-br/3/tutorial/modules.html)**

### Por que utilizar módulos?
- Reuso de código: o código que fica em arquivos de módulos é **persistente**, isto é, pode ser recarregado e novamente executado quantas vezes forem necessárias
- Particionamento de espaço de nome: Os módulos encerram nomes em pacotes auto-suficientes que evitam conflitos de nomes
- Implementar serviços ou dados compartilhados: permitem implementar componentes compartilhados em um sistema, razão pela qual só exigem uma cópia

### Mais sobre módulos e pacotes
- Módulos são pacotes de nomes que normalmente correspondem aos arquivos-fonte, servindo como bibliotecas de ferramentas para uso em outros arquivos e programas.
- O código Python em um módulo obtém acesso ao código em outro módulo pelo processo de importação dele. A instrução *import* é a maneira mais comum de chamar o mecanismo de importação, mas não é a única maneira.
- A instrução *import* combina duas operações; ela procura o módulo nomeado e vincula os resultados dessa pesquisa a um nome no escopo local.
- A instrução *from* permite que os clientes busquem nomes específicos em um módulo
- A instrução *reload* fornece uma maneira de recarregar o código de um módulos sem interromper o Python

### [Módulos da biblioteca padrão](https://docs.python.org/3/library/index.html)
- Cabe destacar alguns módulos intereessantes
  + [Módulos matemáticos e numéricos](https://docs.python.org/3/library/numeric.html), como, por exemplo, *[math](https://docs.python.org/3/library/math.html#module-math)*, *[decimal](https://docs.python.org/3/library/decimal.html)* e *[statistics](https://docs.python.org/3/library/statistics.html)*, entre outros
  + [File and Directory Access](https://docs.python.org/3/library/filesys.html), como, por exemplo, *[pathlib](https://docs.python.org/3/library/pathlib.html)*.
  + [File Formats](https://docs.python.org/3/library/csv.html), como, por exemplo, *[csv](https://docs.python.org/3/library/csv.html)*

### Exercícios com pacotes  
Repetir os exercícios de funções implementando as funções módulos e importando as funções no módulo principal.

### Vamor prosseguir...com *[pacotes>>](prog_pacotes.md)*

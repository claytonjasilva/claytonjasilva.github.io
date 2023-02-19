## 1.6 Estrutura de programa em Python

Os programas em Python podem ser decompostos em pacotes, módulos, instruções, expressões e objetos:

- Os programas são organizados em **módulos**, que podem ser estruturados em **pacotes**. Posteriormente discutiremos os [módulos e pacotes com mais detalhes](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/prog_aulas/prog_modulos.md).
- Os módulos contêm **instruções**.  
As instruções são executadas sequencialmente pelo interpretador.  
![Estrutura Python](/prog_aulas/images_prog/estruturapython.jpg)  
- As instruções contêm **expressões**.
- As expressões criam e processam objetos.

## 1.7 As expressões do programa Python

As expressões que geram objetos contemplam:

1. [Funções da biblioteca-padrão](https://docs.python.org/pt-br/3/library/functions.html).  
Funções são elementos da expressão que realizam um trabalho, entregando um resultado após serem executadas.  
Por exemplo, *print(argumento)* apresenta na área de console o valor do argumento. Posteriormente estudaremos [funções com mais detalhes](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/prog_aulas/prog_funcoes.md).
3. Objetos de vários **tipos**:  
  a. Números  
    Os números em Python podem pertencer, por padrão, a três **tipos de dados**:  
        (i) **inteiros** (`int`)  
        (ii) **ponto flutuante** (`float`) - números de ponto flutuante são a representação computacional de números fracionários da matemática, com as implcações de precisão da representação computacional, além da faixa de representação    
        (iii) **complexos** (`complex`).
        
    b. Strings - estudaremos [*strings* com mais detalhes](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/prog_aulas/prog_str.md);  
    c. Listas - estudaremos [listas com mais detalhes](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/prog_aulas/prog_listas.md);   
    d. Tuplas - estudaremos [tuplas com mais detalhes](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/prog_aulas/prog_tuplas.md);    
    e. Dicionários - estudaremos [tuplas com mais detalhes](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/prog_aulas/prog_dicionarios.md);     
    f. Arquivos - estudaremos [tuplas com mais detalhes](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/prog_aulas/prog_arquivos.md).      
4. Expressões e operações aritméticas e lógicas:  
  As expressões **aritméticas** utilizam **operadores aritméticos**, ou seja, operadores que indicam uma instrução aritmética, cuja sintaxe em Python é
  
    | Operador | Operação |
    | - | - |
    | `+` | Adição |
    | `-` | Subtração |
    | `*` | Multiplicação |
    | `/` | Divisão |
    | `//` | Divisão inteira |
    | `%` | Módulo ou Resto de divisão inteira |
  
  
    Observações:  
    (1) A divisão (`/`) sempre retorna número na representação em **ponto flutuante (float)**. 
    Para fazer uma divisão com resultado inteiro (descartando a parte fracionária) pode-se usar o operador divisão inteira (`//`)  
    (2) Para calcular o resto da divisão inteira pode-se usar o operador **módulo** (`%`).  
5. Objetos de referência - **variáveis**, que armazenam os valores dos objetos e são referenciadas por um **identificador** (nome).  
  Variáveis são **representações simbólicas** de dados que pertencem a um determinado conjunto (possuem a um determinado tipo).  
  O uso das variáveis em Python **não requer a declaração do tipo**, pois o Python é de **tipagem dinâmica** (o interpretador reconhece automaticamente o tipo de dado).  
  Quando uma variável é declarada, o interpretador reserva **um endereço de memória** disponível no computador, com o tamanho necessário para armazenar o dado, e associa a ele um **endereço de memória**.  
  O **identificador** ou **nome** deve obedecer as regras:  
    - Nomes de variáveis são formados por letras e dígitos;  
    - O primeiro caractere deve ser uma letra - o caractere *_* é considerado uma letra;  
    - Letras maiúsculas e minúsculas são caracteres distintos.    

6. Constantes, que possuem valores pré-estabelecidos, chamados pela sua identificação.  
Por exemplo, a constante matemática *pi*.
7. Sentença de **atribuição**: o valor armazenado em uma variável ou resultante de uma expressão aritmética é passado a uma variável.  
    Por exemplo,
    ```
    x = 2 * 3 + (4 / y)
    ```
  
## 1.8 Modos de utilização do interpretador
### 1.8.1 Modo interativo
Quando os comandos são lidos a partir do **console**, diz-se que o interpretador está em **modo interativo**. 
O modo interativo é uma excelente forma para experimentar uma linguagem e realizar testes de sintaxe rápidos.  
Para uso de modo interativo utiliza-se uma janela de *shell* do sistema.  
![*Prompt* de *shell* do Python](/prog_aulas/images_prog/shellpython.jpg)  
No modo interativo o interpretador solicita um próximo comando através do *prompt* primário (`>>>`), como apresenta figura.  
Usando o interpretador Python como calculadora no modo interativo...

### 1.8.2 Modo de *script*
O outro modo de utilização do interpretador é através da **criação de *scripts***.  
Um *script* é um conjunto de instruções escritas de forma ordenada, organizadas em um arquivo com extensão ***.py***, 
que serão convertidas individualmente para a máquina virtual.  
O arquivo constitui um **programa** que será executado pela IDE pra execução de uma **tarefa**.  
Um exemplo de *script* é apresentado abaixo:
```
x = 5
y = 6
z = x**2 + y**2 + 2 * (x + y)
print(z)
```
Vamos criá-lo utilizando o Replit:
1. Criar um *New Repl* - **definir um nome e selecionar o *Template* Python**. O nome escolhido é o que define o projeto Python.
2. O projeto contemplará um arquivo *main.py* que se constitui o **módulo principal** do projeto criado - **não alterar o nome *main.py***
3. Escrever as instruções e executar o *script*

### 1.8.3 Elementos de uma Linguagem de Programação
Quando se expressa nas linguagens naturais (por exemplo, Português), especialmente na forma escrita, é necessário obedecer a um conjunto de regras.  
Quando se deseja expressar um conjunto de instruções em qualquer devem ser obedecidas regras, de modo que o responsável pela execução das intruções as 
compreenda para poder executá-las corretamente.  
Nas linguagens formais de programação (LP) o mesmo ocorre:  
  - cada uma possui um **alfabeto**, com um conjunto de caracteres usados para construção de **unidades léxicas** (*tokens*) que satisfazem a um padrão;  
  - os *tokens* podem ser agrupados para elaborar **sentenças** corretas - a **sintaxe** da LP;  
  - cada sentença possui um **signficado** que é traduzido em um conjunto de operações realizadas pela máquina - a **semântica** da LP.  

Os *scrips* elaborados pelo programador **devem obedecer à sintaxe** da LP 
de modo que as sentenças propiciem a realização das operações para solucionar problemas.  
Quando o programador não atende no código corretamente as regras de sintaxe, **o interpretador sinaliza o erro, indicando o local e o tipo de erro**
![Erro de sintaxe](/prog_aulas/images_prog/erropython.jpg)  
Observe que o interpretador Replit indica o erro e o ponto do código.  
Obviamente, a operação de divisão inteira tem a sintaxe `//`. A sintaxe `///` não foi reconhecida pelo intrpretador, o que resultou no erro indicado.  
Observe que o código apresentado utiliza **o caractere `#` - que indica um comentário lançado pelo programador**.  
O comentário **não é compilado para a PVM*.  

## 1.9 Exercícios de aula 
1. **Utilizando o interpretador Python como calculadora**, criar *scripts* da linguagem Python que contenham expressões aritméticas para determinar o resultado dos seguintes problemas, utilizando os dados apresentados:  
- Quantos minutos dois dias e 18 horas contemplam? [*Script* 1.1](https://github.com/claytonjasilva/prog_exemplos/blob/main/minutos.py)  
- Qual é a área de um terreno retangular com lados de 50 metros e 15 metros? [*Script* 1.2](https://github.com/claytonjasilva/prog_exemplos/blob/main/area.py)   
- Quantas voltas um corredor completou em uma pista com perímetro de 400 metros se ele conseguiu correr 2.300 metros? [*Script* 1.3](https://github.com/claytonjasilva/prog_exemplos/blob/main/volta.py)  
- Um veículo consome em média 2 litros de gasolina para percorrer 19,5 quilômetros. Quantos quilômetros o veículo deverá percorrer se o tanque de combustível possuir capacidade de armazenar 50 litros? [*Script* 1.5](https://github.com/claytonjasilva/prog_exemplos/blob/main/veiculo.py)  
- A fórmula para determinação da nota final é definida por uma média ponderada em que a nota de cada avaliação parcial possui peso de 40% e a avaliação continuada, peso de 20%. A média para aprovação é 7,0. Se o aluno obtiver nota 6,5 na AP1; nota 8,3 na AP2; e nota 6,9 na AC; ele será aprovado? [*Script* 1.6](https://github.com/claytonjasilva/prog_exemplos/blob/main/nota.py)  
**Não esqueça de salvar os *scrips* criados usando um nome de arquivo adequado**
2. Criar *scripts* da linguagem Python, utilizando variáveis e atribuindo a elas os dados especificados nas questões acima, assim como o resultado de cada uma das expressões. Lembre-se de utilizar **nomes de variáveis** que facilitem a legibilidade do *script*. [*Script* 1.7](https://github.com/claytonjasilva/prog_exemplos/blob/main/nota2.py)

___
**[<<anterior](prog_replit.md)**  
**[Home Programação Estruturada com Python](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progPython_aulas.md)**  


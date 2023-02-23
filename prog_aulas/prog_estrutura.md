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
2. Objetos de vários **tipos**:  
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
3. Expressões e operações aritméticas e lógicas:  
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
    (3) Python dispõe de um módulo chamado **[*math*](https://docs.python.org/pt-br/3.10/library/math.html)**, que possui funções  interessantes para construir expressões matemáticas, como  
    `math.pow(x, y)`  
    `math.sqrt(x)`  
    
4. **Objetos de referência - variáveis**, que referenciam os valores dos objetos e são identificadas por um **nome** (identificador).  
  Variáveis são **representações simbólicas** de dados que pertencem a um determinado conjunto (possuem um determinado tipo).  
  O uso das variáveis em Python **não requer a declaração do tipo**, pois o Python é de **tipagem dinâmica** (o interpretador reconhece automaticamente o tipo de dado).  
  A variável é **criada** ao receber um valor pela primeira vez. As atribuições futuras alteram a variável a um novo valor.
  O **identificador** ou **nome** deve obedecer as regras:  
    - Nomes de variáveis são formados por letras e dígitos, com a sintaxe `<_ ou letra><qualquer número de _, letras e números>`;  
    - Ou seja, nomes devem obedecer às regras 
      - formados por uma sequência de sublinhado ( _ ), letras (a → z, A → Z) e números (0 → 9)
      - sequência deve sempre começar com uma letra ou _
      - sequência **não admite** letras acentuadas, cedilhas, espaços, caracteres especiais como $, #, @, etc.;
      - letras maiúsculas e minúsculas são caracteres distintos - **Python é *case sensitive***;
      - existem palavras que **não podem ser usadas - palavras reservadas**  
      
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 
| - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | 
| and	| as | assert | break | class	| continue | def | del | elif | else | except | False | finally	| for	| from	| 
| global | if	| import | in	| is | lambda	| None	| nonlocal |	not | or	| pass	| raise	| return | True	| try	| 
| while	| with | yield	|		      

5. Constantes, que possuem valores pré-estabelecidos, chamados pela sua identificação.  
Por exemplo, a constante matemática *pi*.
6. Sentença de **atribuição**: destina-se a atribuir objetos a nomes e, em sua forma básica, escreve-se com o **destino**, à esquerda, separado por um sinal de `=` do **objeto fonte** a ser atribuído, à direita.  
    (i) Por exemplo,
    ```
    x = 2 * 3 + (4 / y)
    ```
    (ii) Importante destacar que **antes de um nome ser usado deve ter havido uma atribuição de objeto a ele**, sob pena de haver um erro na interpretação.  
    (iii) Existem **atribuições implícitas** que discutiremos posteriormente, como `import`, `for`, argumentos de função etc.  
    (iv) Uma outra forma é a **atribuição com destino múltiplo** - nessa forma o mesmo objeto pode ser atribuído a vários nomes, como
    
    `x = y = 5`  
    
    (v) Também é interessante a forma de **atribuição com desempacotamento de tupla** (aprofundaremos depois) - dois nomes podem ser associados em ordem a dois objetos separados por vírgula (uma tupla), como   
    
    `x, y = 3, 5`  
    
    (vi) **Atribuição ampliada** - são atalhos que envolvem **a combinação de uma expressão com uma atribuição**, como 
    
    `x += y` equivale a `x = x + y`  
    `x -= y` equivale a `x = x - y`
    ...
  
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
  - cada sentença possui um **significado** que é traduzido em um conjunto de operações realizadas pela máquina - a **semântica** da LP.  

Os *scrips* elaborados pelo programador **devem obedecer à sintaxe** da LP 
de modo que as sentenças propiciem a realização das operações para solucionar problemas.  

Quando o programador não atende no código corretamente as regras de sintaxe, **o interpretador sinaliza o erro, indicando o local e o tipo de erro**
![Erro de sintaxe](/prog_aulas/images_prog/erropython.jpg)  
Observe que o interpretador Replit indica o erro e o ponto do código.  

Obviamente, a operação de divisão inteira tem a sintaxe `//`. A sintaxe `///` não foi reconhecida pelo intrpretador, o que resultou no erro indicado.  
Observe que o código apresentado utiliza **o caractere `#` - que indica um comentário lançado pelo programador**.  

**O comentário não é compilado para a PVM*.  

## 1.9 Exercícios de aula 

1. Utilizando o **modo interativo** do Replit, calcular o valor das seguintes expressões  

  a. $3 + 4 \times 5 - [2 \times (4 + 6) ]$
  
  b. $\frac{3 + 4 \times 5} {[2 \times (4 + 6) ]}$  
  
  c. $3^{4 \times 5 \times [2 \times (4 + 6) ]}$  
  
  d. $\sqrt{2 \times (5 + 3) ^ {34}}$  
  
2. Utilizando o **modo interativo** do Replit, calcular o valor das seguintes expressões  

  a. $a + 4 \times b - [2 \times (c + 6) ]$, onde a=b=3 e c=5  

  b. $\frac{x + y \times 5} {[2 \times (4 + 6) ]}$, onde x=5, y=3  

  c. $3^{a \times 5 \times [b \times (4 + 6) ]}$, onde a=4.3, b=3  

  d. $\sqrt{k \times (5 + 3) ^ {34}}$, onde k=2.5  
  
3. Utilizando o **modo interativo** do Replit, determinar  
 
  a. Quantos minutos dois dias e 18 horas contemplam?    
  b. Qual é a área de um terreno retangular com lados de 50 metros e 15 metros?  
  c. Quantas voltas completas um corredor alcança em uma pista com perímetro de 400 metros se ele conseguiu correr 2.300 metros?  
  d. Um veículo consome em média 2 litros de gasolina para percorrer 19,5 quilômetros. Quantos quilômetros o veículo deverá percorrer se o tanque de combustível possuir capacidade de armazenar 50 litros?  
  e. A fórmula para determinação da nota final é definida por uma média ponderada em que a nota de cada avaliação parcial possui peso de 40% e a avaliação continuada, peso de 20%. A média para aprovação é 7,0. Se o aluno obtiver nota 6,5 na AP1; nota 8,3 na AP2; e nota 6,9 na AC; ele será aprovado?  

4. Utilizando o **modo de *script***, criar um programa na linguagem Python para  

  a. Determinar quantos minutos *x* dias e *y* horas possuem.[Ver solução em *script* 1.1](https://github.com/claytonjasilva/prog_exemplos/blob/main/minutos.py)  
  b. Determinar qual é a área de um terreno retangular com lados de *l1* metros e *l2* metros. [Ver solução em *script* 1.2](https://github.com/claytonjasilva/prog_exemplos/blob/main/area.py)   
  c. Determinar quantas voltas completas um corredor alcança em uma pista com perímetro de *p* metros se ele conseguiu correr *x* metros?[Ver solução em *script* 1.3](https://github.com/claytonjasilva/prog_exemplos/blob/main/volta.py)    
  d. Determinar o consumo de Um veículo que consome em média *x* litros de gasolina para percorrer *l* quilômetros; e quantos quilômetros o veículo deverá percorrer se o tanque de combustível possuir capacidade de armazenar *c* litros?  [Ver solução em *script* 1.5](https://github.com/claytonjasilva/prog_exemplos/blob/main/veiculo.py)  
  e. Determinar a a nota final de um aluno do Ibmec, conhecidas as notas de AP1, AP2 e AC. [Ver solução em *script* 1.7](https://github.com/claytonjasilva/prog_exemplos/blob/main/nota2.py) ou em [*script* 1.6](https://github.com/claytonjasilva/prog_exemplos/blob/main/nota.py)   

**Observações**:
- Criar um novo *Repl* para cada *script*  
- Utilizar o arquivo *main.py* do *Repl* criado - **não alterar o nome** 
- Utilizar variáveis para generalizar a solução, **inicializando a variável com um valor desejado para testar a soluçãO**.
**Não esqueça de salvar os *scrips* criados usando um nome de arquivo adequado**

5. É comum cometer erros durante a elaboração de programas. Normalmente os erros derivam de desobediência às regras léxicas ou sintáticas da linguagem. Testar e responder o seguinte

  a. Em uma instrução `print`, o que acontece se for omitido um dos parênteses (ou ambos)?  
  b. Se estiver tentando imprimir uma *string*, o que acontece se omitir uma das aspas (ou ambas)?  
  c. O que acontece se você utilizar um número de ponto flutuante na forma `2,6`, por exemplo, com vírgula e não ponto de fração?  
  d. É possível utilizar o sinal de - precedendo um número para indicar que ele é negativo, por exemplo, -6?
  e. Na matemática, preceder um número com 0 não altera o valor da gradeza representada. Em Python pode-se utilizar a mesma forma?
  f. O que acontece se você utilizar dois números sem operador entre eles?
  

___
**[<<anterior](prog_replit.md)**  
**[Home Programação Estruturada com Python](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/progPython_aulas.md)**  


# Guia rápido em C
<a name="ancora"></a>
- [Diretivas](#ancora0)
- [Operadores](#ancora1)
- [Condicionais simples e compostas](#ancora2)  
- [Repetição](#ancora3)
- [Entrada e saída](#ancora4)
- [Funções](#ancora6)
- [Ponteiros](#ancora7)
- [*Strings* e vetores](#ancora8)
- [Outras](#ancora10)

___
<a id="ancora0"></a>
## Diretivas de pré-processamento

1. `#include "arquivo cabeçalho"` ou `#include <arquivo cabeçalho>`
2. `#define <macro> <código da macro>`  

[Topo](#ancora)
___
<a id="ancora1"></a>
## Operadores
1. **Aritméticos**  
   Sintaxe:  
   `+`, adição  
   `-`, subtração  
   `*`, multiplicação  
   `/`, divisão
   `%`, módulo ou resto da divisão inteira  
    `++`, incremento  
    `--`, decremento
  
    Finalidade: implementar operação aritmética.
2. **Relacionais**  
      Sintaxe:  
  `>`, maior  
  `<`, menor  
  `>=`, maior ou igual  
  `<=`, menor ou igual  
  `==`, igual  
  `!=`, diferente  
  
   Finalidade: realizar a comparação e retornar *True* (verdadeiro) ou *False* (falso).  
3. **Lógicos**  
   Sintaxe:  
   `||`, disjunção - ou  
   `&&`, conjunção - e  
   `!`, negação  
   
   Finalidade: realizar operações lógicas entre expressões que retornam *1* (verdadeiro) ou *0* (falso).  

[Topo](#ancora)
___
<a id="ancora2"></a>
## Condicionais simples e compostas 
1. **Comando *if***  
   Sintaxe:  
   ```
   if (<expressão lógica>) {
      <bloco de instruções>
   }
   ```  
   
   Finalidade: Executa o bloco de instruções somente se o resultado do cálculo da expresso lógica for igual a 1 (verdadeiro).  
2. **Comando *if...else...***  
   Sintaxe:  
   ```
   if (<expressão lógica>) {
      <bloco 1 de instruções>
   }
   else {
      <bloco 2 de instruções>
   }
   ```
   
   Finalidade: Executa o bloco 1 de instruções se o valor da expressão lógica igual a 1 (verdadeiro) e executa o bloco 2 de instruções se o valor for igual a 0 (falso).  
3. **Comando *switch...case...***  
   Sintaxe:
   ```
   switch (<variável>) {
      case <constante 1>:
         <bloco 1 de instruções>
         break;
      case <constante 2>:
         <bloco 2 de instruções>
         break;
      ...
      default:
         <bloco n de instruções>
   }
   ```
   
   Finalidade: Executa o bloco 1 de instruções se a variável for igual à constante 1, senão, se a variável for igual à constante 2, executa o bloco 2, assim por diante. Se a variável não for igual a nenhuma das constantes executa o bloco interno ao *default*.   

[Topo](#ancora)
___
<a id="ancora3"></a>
## Repetição
1. **Comando *while***  
   Sintaxe:
   ```
   while (<expressão lógica>) {
      <instrução ou bloco de instruções>
   }
   ```
   
   Finalidade: Testa a expressão lógica (**teste no inicio**) e se ela resultar valor lógico igual a 1 (verdadeiro), executa o bloco de instruções (*loop*). Volta a testar e repetir o *loop* enquanto o valor for igual a 1. Se a condição for igual a 0 (falso) interrompe o *loop* e prossegue para à execução da instrução seguinte ao *while*.  
2. **Comando *do...while***  
   Sintaxe:
   ```
   do {
      <instrução ou bloco de instruções>
   }
   while (<expressão lógica>);
   ```  
   
   Finalidade: Executa o bloco de instruções (*loop*) e testa a expressão lógica (**teste no final**). Se ela resultar valor lógico igual a 1 (verdadeiro) volta a executar o *loop*. Se a condição for igual a 0 (falso) interrompe o *loop* e prossegue para à execução da instrução seguinte ao *do-while*.  
3. **Comando *for***  
   Sintaxe:
   ```
   for (<inicialização da variável de controle>;<expressão lógica>;<incremento>) {
      <instrução ou bloco de instruções>
   }
   ```  
   
   Finalidade: Inicializa a variável de controle e executa o bloco de instruções se a expressão lógica resultar valor igual a 1 (valor lógico verdadeiro). Em cada *loop* incrementa a variável de controle antes de testar novamente a condição.  
4. **Comando *break***  
   Sintaxe: `break`  
   
   Finalidade: interrompe a execução do *loop* no ponto em que foi inserida e prossegue a execução do programa a partir da instrução do código seguinte ao *while*, *do-while* ou ao *for*.   
5. **Comando *continue***  
   Sintaxe: `continue`  
   
   Finalidade: interrompe a execução do *loop* no ponto em que foi inserida e prossegue ao próximo teste de condição do comando *while*, *do-while* ou *for*.      

[Topo](#ancora)  
___
<a id="ancora4"></a>
## Entrada e saída
1. **Escrever uma saída**  
   Sintaxe: 
   ``` 
   printf(<cadeia de caracteres de controle>,<lista de argumentos>);
   ```
   , em que    
   (1) a *cadeia de caracteres de controle* deve estar entre `"` e incluir a especificação do tipo
   | Código | Tipo |
   | - | - |
   | %d ou %i | inteiro |
   | %x ou %X | hexadecimal |
   | %c | caractere único (*char*) |
   | %s | cadeia de caracteres (*string*) |
   | %f | ponto flutuante |
   
   (2) e a *lista de argumentos* deve conter o nome de todas as variáveis, separados por vírgula (`,`).  
   
   Finalidade: apresentar no 'console' o valor armazenado em cada uma das variáveis da lista.
2. **Ler entrada**  
   Sintaxe: 
   ```
   scanf(<cadeia de caracteres de controle>,<lista de ponteiros dos argumentos>);
   ```
   , em que  
   (1) a *cadeia de caracteres de controle* deve estar entre `"` e incluir a especificação do tipo e  
   (2) a *lista de ponteiros dos argumentos* deve conter o operador unário `&` antes do nome de cada variável (ponteiro da variável), todos separados por vírgula. 
   
   Finalidade: ler o valor digitado pelo usuário no 'console' e, após teclar *enter*, atribui o que foi digitado **com o tipo expecificado** à variável.  

[Topo](#ancora) 
___
<a id="ancora6"></a>
## Funções
1. **Prototipação de função**  
   Sintaxe:   
   ```
   <tipo de retorno> <nome da função>(<declaração dos parâmetros>);
   ```  
   em que os parâmetros são declarados como variáveis, separados por vírgula.  
   
   Finalidade: Definir uma representação simbólica e a especificação dos parâmetros da função (tipo e nome).  
2. **Definição de função**  
   Sintaxe:   
   ```
   <tipo de retorno> <nome da função>(<declaração dos parâmetros>) {
      <declarações de variáveis>
      <corpo de instruções>
      return <valor ou expressão de retorno>
   }
   ```  
    
   Finalidade: Código da função.  
3. **Bibiotecas do C**  
   [Manual do C](https://petbcc.ufscar.br/manualc/)  

[Topo](#ancora)
___
<a id="ancora7"></a>
## Ponteiros
1. **Declaração de ponteiro**  
   Sintaxe: 
   ```
   <tipo apontado> *<nome da variável>;
   ```   
   
   Finalidade: Definir uma representação simbólica e espaço de alocação de dados para o ponteiro.
2. **Inicialização de ponteiro**  
   Sintaxe: 
   ```
   <declaração de variável>
   <declaração de ponteiro>
   <nome da variável> = &<nome do ponteiro>; 
   ```
     
   Finalidade: Definir um endereço válido para o ponteiro no sistema.
3. **Atribuição de valor a variável usando ponteiro**  
   Sintaxe:
   ```
   <nome da variável> = *<nome do ponteiro>; 
   ```
     
   Finalidade: Atribuir o conteúdo armazenado no endereço definido pelo ponteiro a uma variável
  
[Topo](#ancora)
___
<a id="ancora8"></a>
## *Strings* e vetores
1. **Constante *char***  
   Sintaxe:  
   ```
   '<caractere>'
   ```
   
   Finalidade: Definir uma constante *char*  
2.  **Constante *string***    
   Sintaxe:  
   ```
   "<cadeia de caracteres>"
   ```
   
   Finalidade: Definir uma constante *string*  
3. **Caracteres de escape**  
   Sintaxe:   
   | Caracteres | Significado |
   | - | - |
   | \b | Retrocesso (*back*) |
   | \n | Nova linha |
   | \r | Retorno na linha |
   | \a | *beep* |
   | \0 | Fim de *string* |
4. **Declaração de vetor**  
   Sintaxe:
   ```
   <tipo> <nome do vetor>[dimensão];
   ```
   
   Finalidade: Definir uma representação simbólica e espaço de alocação de dados de um tipo a cada elemento do vetor.  
5. **Inicialização de vetor**  
   Sintaxe:
   ```
   <tipo> <nome do vetor>[<dimensão do vetor>] = {<lista de valores>};
   ```
   
   Finalidade: Definir uma representação simbólica e espaço de alocação de dados de um tipo a cada elemento do vetor, atribuindo valores iniciais a cada um.  
6. **Indexação de vetor a um ponteiro**  
   Sintaxe:
   ```
   <nome do ponteiro> = <nome do vetor>;
   ```
   
   Finalidade: Associar os elementos do vetor a endereços relacionados com o ponteiro.
 7. **Declaração de *string***  
   Sintaxe:
   ```
   char <nome da string>[<tamanho>];
   ```
   
   Finalidade: Definir uma representação simbólica e espaço de alocação de dados à *string*.  
 8. **Inicialização de *string***  
   Sintaxe:
   ```
   char <nome da string>[<dimensão da string>] = {<lista de caracteres>};
   ```
   ou  
   ```
   char <nome da string>[<dimensão da string>] = <contante string>;
   ```
   ou  
   ```
   char <nome da string>[] = <contante string>;
   ```
   ou
   ```
   char *<nome da string> = <contante string>;
   ```
   
   Finalidade: Atribuir valor inicial à *string*.

[Topo](#ancora)
___
<a id="ancora10"></a>
## Outras
1. **Comentário:**  
   Sintaxe: `/*`, seguido pelo texto de comentário  
      
   Finalidade: abrir comentários  
2. **Comentário:**  
   Sintaxe: `*/`, precedido pelo texto de comentário  
      
   Finalidade: fechar comentários  
3. **Comentário:**  
   Sintaxe: `//`, seguido pelo texto de comentário  
      
   Finalidade: definie comentários em uma linha  
4. **Fim de instrução**  
   Sintaxe: `;`  
     
   Finalidade: Delimitar o fim de uma instrução do código.  
5. **Início de bloco de instruções**  
   Sintaxe: `{`  
  
   Finalidade: Delimitar o início de um bloco de instruções.  
6. **Término de bloco de instruções**  
   Sintaxe: `}`  
  
   Finalidade: Delimitar o término de um bloco de instruções  
7. **Declaração de variáveis**  
   Sintaxe: `<tipo> <nome da variável ou lista de nomes de variáveis>`  
  
   Finalidade: Definir uma representação simbólica e espaço de alocação de dados de um tipo a uma variável  
8. **Atribuição de valor a uma variável**  
   Sintaxe: `<nome da variável> = <expressão aritmética ou variável ou número>`  
  
   Finalidade: Atribuir o resultado de uma expressão, o valor de uma variável ou uma constante, à direita do sinal *=*, à variável à esquerda do sinal.   

[Topo](#ancora)

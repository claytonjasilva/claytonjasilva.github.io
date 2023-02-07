# 2. Funções de entrada e saída 

## 2.1 Introdução às funções
Uma função é um bloco de código que pode ser utilizado várias vezes no programa para realizar uma tarefa específica, portanto  
- escrevê-lo somente uma vez, 
- definindo-lhe um **nome** e os **parâmetros** necessários para realizar a tarefa  
- **chamá-lo** no ponto adequado do código é producente.  
No trecho de código que se desejar resolver a tarefa insere-se o nome da função, inserindo-se entre parêntesis os argumentos, de acordo com o tipo exigido pelos parâmetros da função.  
Algumas funções respondem **retornando um valor de um determimnado tipo** após a tarefa ser realizada.   
As funções podem ser definidas pelo programador, no entanto **outras disponíveis nas bibliotecas da linguagem podem ser usadas**.  
Para que possam ser usadas a diretiva de inclusão `include <nome da biblioteca>` deve ser incluída no programa.

## 2.2 Entrada e Saída: <stdio.h>
Os dados trocados entre fonte ou destino de dados com um programa deve escrito no código por meio de instruções.  
São exemplos de fonte e destino de dados: teclado, disco ou outros dispositivos de I/O (entrada/saída).  
Esses dados configuram-se como fluxo de texto e fluxo binários (bits).  
Um fluxo de texto é uma sequência de linhas, cada uma com caracteres.  
Um fluxo binário é uma sequência de bytes não processados, que registram dados internos.   
Os programas precisam incluir as instruções ou comandos para possiblitar esses fluxos.  
São categorias de funções, pertencentes à biblioteca <stdio.h>, entre outras:
- Operações de arquivo - discutida posteriormente;
- Saída formatada;
- Entrada foramtada.

### 2.2.1 Função `printf` 
A função *printf* é uma função de saída formatada que **escreve no dispositivo de saída (normalmente a console do computador)
caracteres e dados convertidos como especificado no argumento** e **retorna o número de caracteres gravados**.   
A sintaxe da função *printf* é a seguinte:
```
printf(<cadeia de caracteres de controle>,<lista de argumentos>);
```  
A cadeia de caracteres será escrita na console.  
Na ordem em que são apresentads os argumentos na lista, na cadeia de caractreres deve ser especificado o tipo, conforme o código de especificação da tabela abaixo.  
| Código | Tipo |
| - | - |
| %d ou %i | inteiro |
| %x ou %X | hexadecimal |
| %c | caractere único (*char*) |
| %s | cadeia de caracteres (*string*) |
| %f | ponto flutuante |

Entre o símbolo *%* e a especificação do tipo pode ser usado  

| Símbolo | Significado |
| - | - |
| + | especifica que o número será impresso com sinal |
| número inteiro | especifica o tamanho mínimo do campo |
| . | especifica a separação do tamanho do campo da precisão desejada |
| número inteiro | especifica a precisão (após o ponto) |

O trecho abaixo escreve o resultado de uma operação de adição inteira:
```
#include <stdio.h>

void main(){
  printf("A soma de 3 + 4 eh %i", 3+4);
}
```

### 2.2.2 Função `scanf` 
A função *scanf* lê do dispositivo de entrada o fluxo de dados, com o **controle do formato** e **atribui os valores convertidos ao formato especificado** a um **ponteiro**.  
A sintaxe da função *scanf* é a seguinte:
```
scanf(<cadeia de caracteres de controle>,<lista de ponteiros dos argumentos>);
```  
A cadeia de caracteres pode conter:
- Espaços ou tabulações, que são ignorados
- Especificações de conversão  
Uma especificação de conversão determina a conversão do próximo campo de entrada, de acordo com o mesmo código da função *printf*.  
Os ponteiros dos argumentos devem ser especificados pelo sinal `&`.

O trecho abaixo escreve o resultado de uma operação de adição inteira:
```
#include <stdio.h>

void main(){
  int x, y;
  scanf("%i %i",&x,&y);
  printf("A soma de x + y eh %i", x+y);
}
```

## 2.4 Exercícios com tipos, operadores, entrada/saída  
1. Elaborar um programa na linguagem C para ler as notas da ap1, ap2 e ac; calcular e escrever a média do semestre do aluno, de acordo com as regras do Ibmec. 
2. Elaborar um programa na linguagem C para ler os coeficientes de uma equação do segundo grau.
3. Elaborar um programa na linguagem C para calcular e escrever a área interna e o perímetro de um círculo de raio r e seu perímetro.
5. Elaborar um programa na linguagem C para calcular e escrever o índice de massa (imc) corporal de uma pessoa. O imc é calculado dividindo-se o peso pelo quadrado da altura.
6. Elaborar um programa na linguagem C para ler as dimensões dos lados de uma pista de corrida de formato retangular, ler a distância percorrida por um veículo, calcular e escrever o número completo de voltas dadas.

___
**[home](/progC_aulas.md)**

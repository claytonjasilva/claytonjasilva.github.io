# Lista 5 de exercícios em sala: Máquina de von Neumman 

1. A arquitetura de von Neumman para modelar os sistemas de computação contempla os elementos apresentados nas linhas da tabela abaixo. 
Descrever as funções de cada um dos elementos.  
a. Memória  
b. Unidade de Controle  
c. Unidade Lógica e Aritmética  
d. Dispositivos de Entrada/Saída  
e. Barramento

2. No nível de microarquitetura da máquina de von Neumman, os elementos responsáveis pelo armazenamento local de bits são chamados de registradores.
Definir as funções dos registradores da máquina de von Neumman.  
a. Acumulador (ACC) e quociente de multiplicação (MQ)  
b. Regitrador Temporário da Memória (MBR)  
c. Registrador Temporário de Instruções (IBR)  
d. Registrador de Instruções (IR)  
e. Contador de Programa (PC)  
f. Registrador de Endereço de Memória (MAR) 

3. Cada endereço de memória da máquina de von Neumman pode armazenar uma palavra de 40 bits. 
Apresentar as duas formas de armazenamento de bits em cada linha de endereço, explicando como são organizados.

4. A memória da máquina original proposta por von Neumman possui 1024 posições de endereço. 
Qual é a capacidade mínima de armazenamento de bits que o registrador de endereçamento da memória deve possuir? Explicar a resposta.

5. Explique **sinteticamente** o conceito de programa armazenado proposto e utilizado pela máquina de von Neumman.

6. A máquina de von Neumman utiliza o conceito de programa armazenado.
A operação consiste na execução de um ciclo das instruções. Apresentar e explicar **sinteticamente**  as tarefas que compreendem cada ciclo de instrução.

7. Seja uma arquitetura similar à máquina IAS. O contador de programa (PC) possui 10 bits. Admitindo que um programa esteja armazenado na memória a partir do endereço decimal 565, contendo 363 instruções de 16 bits, quais seriam os limites (em hexadecimal) que seriam armazenados no PC? Admitir que não são usadas instruções de desvio e que cada instrução ocupa uma linha de memória.  

8. Seja uma máquina similar à máquina IAS. Supondo que as instruções possuam 16 bits; e que o opcode possua 4 bits; quais são os valores mínimo e máximo do valor absoluto dos dados com os quais as instruções de modo imediato podem operar (se for usado somente um campo de dado)? Instruções de modo imediato são aquelas em que o operando representa o dado.

9. Ainda em relação à arquitetura da questão anterior, admitindo instruções de **modo de endereçamento direto**, ou seja, em que o operando armazene o endereço do dado, quais são os valores mínimo e máximo de dado com os quais as instruções podem operar?  

10. Seja uma arquitetura em que os dados operados por instruções de um programa estejam localizados entre os endereços 2350 a 3000, em decimal, quais seriam os limites de endereçamento em hexadecimal?

11. Seja uma arquitetura similar à máquina IAS, admitindo que algumas instruções de modo imediato possuam dois campos de operando; que o acumulador (ACC) possua 16 bits e recebe o resultado da operação. Haverá *overflow* nas operações de adição binária admitindo representação binária pura nos campos do operando? Justificar a resposta.

12. Seja a máquina de Von Neumman,   
a. Um programa que possui instruções localizadas entre os endereços 0x0AA e 0x1FF ocupará qual espaço de memória, em kilobytes?  
b. Qual será a última linha de endereço ocupada por um programa com 253 linhas de endereço que inicia no endereço a partir 0x00F?  
c. Considerando a operação add m(x) 0x33F, que armazena no endereço 0x33F o valor equivalente ao decimal 1357, em que o conteúdo do ACC é 0xF3A, produzirá qual resultado?  
d. Um programa precisa estar compreendido entre os endereços de memória 0x200 e 0x300. Quantos bits ocupará? Quantas instruções poderão ser utilizadas, no máximo?

13. Converter as instruções escritas em linguagem de montagem da máquina IAS para o nível ISA (em representação hexadecimal)
```
LOAD |M(X)|, 500d
ADD |M(X)|, 301d
ADD |M(X)|, 1002d
ADD |M(X)|, 803d
ADD |M(X)|, 1004d
RSH
STOR M(X), 1000d
```

___
**[home](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**  

# 5.3 Memória Principal ou Primária

A MP armazena programas e dados.  
Os programas executados pela CPU contemplam um conjunto de instruções no nível do *set* de instruções do processador.  
As instruções compreendem normalmente um campo que define o seu código (código da instrução, chamado de *opcode*), 
que é definido pelo fabricante do processador e um campo dos operandos,
bits sobre os quais será executada a instrução (existem vários formatos diferentes, embora esse seja o mais comum).  
As instruções são armazenadas na MP, ocupando um endereço bem definido. Assim como as instruções do programa, 
os dados operados pela CPU também ocupam um endereço da MP.

É fácil compreender o endereço de memória quando a entende-se como um conjunto de células, 
cada uma das quais armazenando 0 ou 1, organizadas como uma matriz.   
Cada linha corresponderá a um endereço específico. Em cada linha estão armazenados os dados,
cada um dos quais pode ser lido/escrito naquele endereço – naquela linha da matriz.   
A MP contém *M* linhas de endereço de palavra de *N* bits.   
Os endereços podem ser apontados na forma binária por 2<sup>L</sup>, onde *L* é o número de bits do endereço, tal que *2<sup>L</sup>=M*.  
Em cada posição de endereço a MP armazena *N* bits.

O funcionamento da memória e como são armazenados os bits pode ser melhor entendido se explorada a figura, 
que apresenta a memória RAM do fabricante Motorola, que possui capacidade de armazenar 4096 bits ou seja 4kbits. 

![Exemplo de memória RAM - Motorola 4kbits](/arq_aulas/images/exemploram.jpg)

Os pinos A0-A9 recebem os bits do barramento de endereço, portanto 10 linhas de bits,
sendo o menos significativo A0 e o mais significativo A9.
Como o barramento de endereços entrega 10 bits, é possível armazenar em 2<sup>10</sup>, ou seja, 1024 posições distintas de memória, 
na faixa 000H a 3FFH (hexadecimal).
Os pinos I/O1-I/O4 recebem os bits do barramento de dados, ou seja, em cada posição de memória é possível ler/escrever uma palavra de 4 bits.  
O pino $\bar{W}$ habilita leitura ou escrita na memória (a memória RAM possiblita leitura ou escrita dos dados armazenados)  
Se $\bar{W}=0$, os dados do barramento de dados serão escritos na posição de endereço indicada em A0-A9.  
Em caso contrário, os dados serão lidos daquela posição.  
O pino $\bar{S}$ habilita a operação ou desabilitação da memória.  
Se $\bar{S}=0$ a memória está habilitada para ser usada. Trata-se de um sinal de controle do chip.  
Os pinos VCC e VSS são alimentação do chip.

Cada linha da matriz corresponde a uma célula de memória. Células adjacentes em memória têm endereço consecutivo.  
O tamanho típico de cada célula de memória atualmente é de 8 bits (1 byte).  
Em geral, os bytes são agrupados em palavras de 4 bytes ou 8 bytes. 

As tecnologias das memórias têm evoluído de forma bastante rápida, 
de modo especialmente que o tempo de espera para ler um dado ou escrever um dado na memória não prejudique o desempenho global do sistema.
Por exemplo, a memória Motorola MCM2114 possui tempo de ciclo de leitura fixo de 200 nanosegundos, 
nesse sentido entre a requisição do dado pelo processador e a liberação do dado no barramento serão consumidos 200 ns. 

___  
**[<<anterior](memoria.md)**    
**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**  
**Memória cache: [próximo>>](memoria3.md)**  

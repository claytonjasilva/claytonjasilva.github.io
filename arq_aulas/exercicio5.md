# Lista de exercícios: elementos dos sistemas computacionais
## Dispositivos de memória

1. Os dispositivos de memória possuem características que impactam o desempenho global do sistema computacional.
Explicar com suas palavras os seguintes parâmetros de desempenho:  
a. latência da memória  
b. velocidade de memória  
c. capacidade de armazenamento da memória

2. Considere uma memória com 15 linhas de endereço, que armazena em cada linha palavras de 64 bits.
Determinar a capacidade de armazenamento do dispositivo, em bits e em bytes.

3. Seja a memória que possua a pinagem apresentada na tabela abaixo.  
a. Admitindo que o processador realize 1500 operações de leitura/escrita no barramento de dados, qual é a largura de banda
(taxa de transmissão) no barramento?   
b. Considerando que a latência é de 200 nseg, qual será o tempo médio da execução das operações?   
c. Qual é o número de posições de memória endereçáveis?  

| Pino | Função |
| ---- | ------ |
| A0-A19 | Adress Input |
| W/R | Write/Read |
| S | Chip Select |
| IO1-IO16 | Data Input/Output |
| Vcc | Alimentação |
| Vss | Ground |

4. A arquitetura dos sistemas computacionais organiza o sistema de memória alocando diversos e diferentes tipos de tecnologias.
Com base na descrição das características, classificar os elementos de memória de acordo com a tecnologia empregada.  
a. A memória requer bateria ou outra fonte de alimentação para assegurar a preservação dos dados.  
b. A memória requer uma recarga periódica dos dados armazenados.  
c. A memória não porporciona a capacidade de leitura e escrita temporária de dados. Propicia somente a capacidade de leitura de dados previamente armazenados.
d. A memória disponibiliza o acesso a qualquer de suas linhas de endereço no mesmo tempo.

5. Seja a especificação da memória descrita por: `Memória Kingston 8GB 1600 Mhz DDR3L`.  
a. Qual é a sua capacidade de armazenamento?  
b. Quanto à tecnologia, como se classifica?  
c. Admitindo que o preço obtido seja de R$ 140,00, comparar com o custo apresentado em sala do dispositivo similar.  
d. Admitindo barramento de dados de 64 bits e transferência de 3 palavras por ciclo de clock, qual é a largura de banda?  

6. Descreva os elementos da hierarquia do sistema de memória dos sistemas computacionais:  
a. Memória secundária  
b. Memória primária  
c. Cache  
d. Registradores

7. A memória cache possui tipicamente uma capacidade de armazenamento menor do que a memória primária.
No entanto, possui maior velocidade.
Apresentar e explicar o princípio que permite utilizar a cache em proveito do aumento de performance nos sistemas computacionais.

8. Seja um programa armazenado em memória constituído por 2000 instruções, executado por uma determinada arquitetura.
1500 instruções são executadas em dois ciclos de clock interno do processador, de 100 GHz.
As demais instruções são executadas com acesso à memória, cuja latência é de 120 nseg. Admitir a latência aproximadamente igual ao tempo de acesso.  
a. Determinar o tempo de execução do referido programa nessa máquina.  
b. Admitir que o projeto da arquitettura evoluiu e que foi inserida uma cache com latência de 20 nseg.
Considerando uma taxa de acerto de 75%, em quanto tempo o progama passará a ser executado?  
c. Apresentar o ganho de desempenho.  

9. Seja um programa que possua 500 instruções de acesso à memória. Considerando que 450 acessos sejam realizados à cache,
determinar o tempo de realização das instruções, se o tempo de acesso à cache for igual a 20 nseg;
e de acesso à MP, de 120 nseg.

10. Seja uma arquitetura cujo tempo de acesso à MP seja de 50 nseg. São usados dois níveis de cache, L1 e L2.
A cache L1 possui latência de 1 nseg. A cache L2 possui latência de 25 nseg.  
Seja um programa com 2500 instruções, das quais 500 acessem a memória para leitura/escrita.  
a. Admitindo taxa de acerto de 75%, das quais 35% de acerto na busca em L1, determinar o tempo de execução do programa.
Instruções que não acessam memória são executadas em 2 nseg.

11. A leitura de dados em memória de arquiteturaas que utilizam cache se dá de acordo com o processo discutido em sala.  
a. Qual é o elemento que verifica se um dado requisitado pelo processador se encontra armazenado na cache?  
b. O que acontecerá se o dado requisitado **não estiver disponível** na cache?  
c. O que acontecerá se o dado requisitado **estiver disponível** na cache?  


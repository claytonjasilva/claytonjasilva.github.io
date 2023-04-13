## 5.4 Memória cache

### 5.4.1 Organização MP e cache

Considerando a hierarquia do sistema de memória discutido anteriormente, a memória cache ocupa o terceiro nível a partir da base da pirâmide.  
Tipicamente, possui média/baixa capacidade armazenamento, custo alto, porém velocidade elevada.  
Essas características a tornam muito útil no equilíbrio custo benefício no desempenho da arquitetura.

O princípio que permite a utilização da cache se chama **princípio da localidade**, segundo o qual os programas armazenados que
controlam a execução da máquina se situam localmente próximos no tempo ou no espaço.  
A proximidade de **localidade espacial** diz respeito ao endereço das instruções executadas.  
Normalmente quando uma instrução é executada as próximas instruções estão em endereços de memória próximos 
(lembre-se que, no nível ISA, o contador de programa (PC) tipicamente sofre incrementos de uma unidade, 
violando essa condição somente quando instruções de desvio devem ser executadas).  
Além dessa localidade espacial próxima, a **localidade temporal** se caracteriza pelo fato de que uma instrução de um código no nível ISA
tem a probabilidade elevada de voltar a ser executada novamente em um curto espaço de tempo após ter sido executada em um determinado instante.  
Observe que o princípio de localidade está diretamente relacionado à **probabilidade de uma instrução ser executada novamente após ter sido
executada**, seja por sua localização no endereço, seja pelo tempo transcorrido desde que foi executada.  

A figura apresenta um sistema de memória em que se utiliza três níveis de cache:  
- uma cache interna ao encapsulamento do processador, chamada cache de nível 1 (L1);  
- uma cache no pacote da CPU – nos circuitos diretamente ligados ao processador, de nível 2 (L2); e  
- uma cache externa de nível 3 (L3).

![Níveis de cache](/arq_aulas/images/niveiscache.jpg)

No nível L1, instruções e dados do programa de máquina são separados.  
No nível L2, instruções e dados do nível L3 são armazenados de modo a estarem prontamente disponíveis para leitura/escrita 
via barramento local, desonerando o desempenho do tempo devido à transmissão no barramento externo.   
No nível L3 instruções e dados são armazenados, desonerando o desempenho do tempo de resposta da memória principal
(RAM, mais lenta do que a cache).  

Como a arquitetura explora na operação o princípio de localidade em favor do aumento de desempenho?  
Vamos tratar especificamente do nível L3 e generalizar a operação para os demais níveis.  
Para controlar a operação da cache é necessário utilizar um circuito chamado **controlador de cache**,
que produz sinais de controle de sincronização dos procedimentos de leitura e dados do processador no sistema de memória.  
A figura destaca o controlador.

![Controlador de cache](/arq_aulas/images/controladorcache.jpg)

O controlador admite uma organização da MP e da cache para a exploração do princípio da localidade.  
A figura ilustra com um exemplo a organização da memória principal para a exploração do princípio de localidade na leitura/escrita de dados.  

![Exemplo de organização da MP para explorar localidade](/arq_aulas/images/organizacaompcache.jpg)

1. A MP é dividida em *N* blocos de tamanho fixo chamados **linhas de cache**, cada uma com *K* posições de endereço.  
2. Os **blocos** são armazenados na cache. Em qualquer instante alguns blocos estão na cache.  
3. Na cache os blocos da MP armazenados são identificados.
4. A cache é dividida em *M* blocos de tamanho fixo, cada um com *K* posições de endereço.
5. Assim, no total, A MP possui *N.K* posições de endereço; a cache possui *M.K* posições de endereço.  

O endereçamento do sistema MP-cache fica estabelecido da seguinte forma:
1. Os endereços da MP são definidos de *0* a *N.K-1*; 
2. Cada linha de cache possui endereçamento de *0* a *N-1* – assim cada linha de cache define uma faixa de endereços da MP;  
3. Como toda memória, os endereços da cache são definidos de *0* a *M.K-1*; 
4. A cache é dividida em blocos numerados a partir de *0* até *M-1*;
5. Tanto as linhas quanto os blocos possuem *K* posições numeradas de *0* a *K-1*.  
A figura ilustra com um exemplo o relacionamento das linhas de cache da MP com os blocos da cache.

![Exemplo de relacionamento das linhas de cache da MP com blocos da cache](/arq_aulas/images/relacionamentolinhasblocoscache.jpg)

### 5.4.2 Processo de requisição de dados à cache

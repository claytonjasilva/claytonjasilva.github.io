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

A capacidade de armazenamento da MP é maior do que a cache, consequentemente *N>M*, ou seja, nem todos dados da MP podem ser mapeados na cache. A utilização da cache na arquitetura requer a aplicação de um processo.

![Exemplo de relacionamento das linhas de cache da MP com blocos da cache](/arq_aulas/images/processorequisicaodadocache.jpg)

Descrição do processo:  
1. Na execução de um programa o processador requisita um dado ou instrução armazenado em um endereço de dados da MP. A requisição é realizada ao controlador da cache. 
2. O controlador verifica inicialmente se o dado do endereço requisitado está presente na cache, em qual bloco e endereço da cache se encontra. 
3. Caso esteja presente, configura-se o que se chama de **acerto**.  
  - O dado/instrução é disponibilizado ao processador no tempo de resposta da cache.
4. Caso o dado não esteja presente na cache, caracteriza-se o que se chama de **falta**  
  - O dado/instrução é buscado no endereço da MP, com o tempo de resposta da MP; 
  - **a cache é atualizada**; e
  - o dado é disponibilizado para o processador. 

A eficácia do uso desse mecanismo pode ser facilmente determinada pelo
**tempo médio de acesso à memória com e sem a utilização da cache**.  
É necessário definir o tempo médio de acesso ao sistema de memória, calculado por
*t<sub>medio</sub>=c+(1-h).m*,    
onde *c* é o tempo de acesso à cache; *m* é o tempo de acesso à MP; e *h* é a taxa de acertos.  
A taxa de acertos pode ser calculada admitindo que em *k* acessos à memória ocorreu *k-1* acertos e *1* falta,
logo a taxa de acertos é a razão *(k-1)/k*. 

#### Mapeamento MP-cache

Para o processo descrito acima ser executado é necessário definir uma política de mapeamento dos dados da memória primária na cache que objetive dizer quais blocos da cache serão copiados na MP.  
Existem três técnicas de mapeamento:  
- mapeamento direto;  
- mapeamento totalmente associativo; e  
- mapeamento associativo por conjunto.

No **mapeamento direto**, o relacionamento é predefinido de linhas de cache da MP com os blocos da cache.  
O controlador de cache possui uma tabela que estabelece a associação. Veja a figura.

![Exemplo de mapeamento direto MP-cache](/arq_aulas/images/mapeamentodiretompcache.jpg)

Na tabela está evidenciado que a MP possui *N=12* linhas de cache, de *K=4* palavras cada uma, totalizando *48* posições de endereço.  
A cache possui *M=3* blocos, de *K=4* palavras cada uma, totalizando *12* posições de endereço.   
No exemplo,  
as linhas de cache *3n*, *n=0* a *3*, estão mapeadas no bloco 0;  
as linhas de cache *3n+1*, *n=0* a *3*, estão mapeadas no bloco 1; e  
as linhas de cache *3n+2*, *n=0* a *3*, estão mapeadas no bloco 2. 

Generalizando essa relação pode-se deduzir que a expressão que relaciona o endereçamento da linha com o endereçamento do bloco é dada por
$$B=L mod M$$  
, onde *B* é o endereçamento do bloco, `mod` é a operação módulo, ou resto da divisão inteira e *M* é o número de linhas de cache.

No exemplo,  
os endereços da MP *0* a *K-1* ocupam a linha *0*;  
os endereços da MP *K* a *2K-1* ocupam a linha *1*;  
...
os endereços da MP *(N-1).K* a *N.K-1* ocupam a linha *N-1*. 

Generalizando essa relação pode-se deduzir que a expressão que relaciona o endereçamento da MP com o endereçamento da linha é dada por
$$L=EndMP div K$$
, onde *L* é o endereçamento da linha de cache, `div` é a operação de divisão inteira e *K* é o número de posições de endereço de cada linha(e de cada bloco).

De modo similar, pode-se obter que
$$B=EndCache div K$$
, onde *B* é o endereçamento do bloco, `div` é a operação de divisão inteira e *K* é o número de posições de endereço de cada linha(e de cada bloco).







Os endereços da MP 0,1,2,3 pertencem à linha de cache 0 na MP e estão mapeados nos respectivos endereços 0,1, 2 e 3 do bloco 0 da cache; os endereços da MP 4, 5, 6 e 7 pertencem à linha de cache 1 na MP e estão mapeados nos respectivos endereços 4, 5, 6 e 7 da cache, que correspondem aos endereços 0, 1, 2 e 3 do bloco 1. 
Para o controlador de cache executar o algoritmo apresentado na Figura 10, o início é a requisição pela CPU da instrução ou dado em um endereço da MP. O controlador verifica qual é a linha de cache que armazena o dado e em qual bloco o dado ou instrução poderia estar mapeado.




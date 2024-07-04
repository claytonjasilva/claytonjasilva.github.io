# 5.4 Memória cache

## 5.4.1 Organização MP e cache

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

## 5.4.2 Processo de requisição de dados à cache

A capacidade de armazenamento da MP é maior do que a cache, consequentemente *N>M*, ou seja, nem todos dados da MP podem ser mapeados na cache. A utilização da cache na arquitetura requer a aplicação de um processo.

![Exemplo de relacionamento das linhas de cache da MP com blocos da cache](/arq_aulas/images/processorequisicaodadocache.jpg)

Descrição do processo:  

1. Na execução de um programa o processador requisita um dado ou instrução armazenado em um endereço de dados da MP. A requisição é realizada ao controlador da cache.
2. O controlador verifica inicialmente se o dado do endereço requisitado está presente na cache, em qual bloco e endereço da cache se encontra.
3. Caso esteja presente, configura-se o que se chama de **acerto**.  
    O dado/instrução é disponibilizado ao processador no tempo de resposta da cache.
4. Caso o dado não esteja presente na cache, caracteriza-se o que se chama de **falta**  
    4.1 O dado/instrução é buscado no endereço da MP, com o tempo de resposta da MP;
    4.2 **A cache é atualizada**; e
    4.3 O dado é disponibilizado para o processador. 

A eficácia do uso desse mecanismo pode ser facilmente determinada pelo
**tempo médio de acesso à memória com e sem a utilização da cache**.  
É necessário definir o tempo médio de acesso ao sistema de memória, calculado por
*t<sub>medio</sub>=c+(1-h).m*,    
onde *c* é o tempo de acesso à cache; *m* é o tempo de acesso à MP; e *h* é a taxa de acertos.  
A taxa de acertos pode ser calculada admitindo que em *k* acessos à memória ocorreu *k-1* acertos e *1* falta,
logo a taxa de acertos é a razão *(k-1)/k*. 

## 5.4.3 Mapeamento MP-cache

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
$$L = EndMP (div) K$$
, onde *L* é o endereçamento da linha de cache, `div` é a operação de divisão inteira e *K* é o número de posições de endereço de cada linha(e de cada bloco).

De modo similar, pode-se obter que
$$B = EndCache (div) K$$  
, onde *B* é o endereçamento do bloco, `div` é a operação de divisão inteira e *K* é o número de posições de endereço de cada linha(e de cada bloco).

A posição de endereço em uma linha de cache ou bloco depende do número de células em cada linha/bloco.  
Por exemplo, na figura o endereço 25 da MP está na posição 1 da linha 6.  
O endereço 11 da cache está na posição 3 da cache.  
Pode-se obter essa posição aplicando-se simplesmente  
$$P = End (mod) K$$
, onde *P* é a posição, *End* é o endereço e *K* é o número de células, na linha ou no bloco.

A cache é organizada de modo que:  

- cada bloco possui um campo com o conjunto de dados (data) do tamanho da linha de cache da MP;  
- cada bloco possui um campo com um *flag* indicando se os dados do bloco são válidos ou não, isto é, informando se os dados que precisam ser lidos estão presentes na cache; e  
- possui um campo que descreve qual é a linha de cache da MP que está armazenada no campo de dados (campo *tag*). 

Com essas informações de entrada da cache é possível o controlador implementar a leitura dos dados do sistema de memória seja da cache seja da MP, otimizando o desempenho global do sistema. 

### 5.4.3.1 Mapeamento direto

A técnica de mapeamento direto aumenta a eficiência do sistema, 
entretanto possui o inconveniente de manter dados armazenados na cache mesmo quando não são muito utilizados
em virtude do relacionamento pré-determinado linhas de cache da MP-blocos da cache.

### 5.4.3.2 Mapeamento totalmente associativo

Na técnica de mapeamento totalmente associativo não há uma relação pré-determinada de linhas de cache com blocos, 
o que implica aumento de eficiência.  
No entanto, aumenta-se a complexidade do circuito necessário à implementação do processo de espelhamento de dados. 

### 5.4.3.3 Mapeamento associativo por conjunto

O mapeamento associativo por conjunto concilia a simplicidade do mapeamento direto com a eficiência do totalmente associativo.

## 5.4.4 Substituição de dados da cache

No mapeamento dos dados da MP para a cache, uma vez que o dado de um determinado endereço não esteja presente na cache, ou seja, tendo ocorrido uma falta, é necessário buscar o dado na memória e **substituir** os dados de algum dos blocos da cache.  
Existem algumas técnicas que o controlador pode utilizar como:  

- FIFO – *First-In-First-Out*, em que o bloco cujos dados foram os primeiros a ser inseridos são aqueles a ser substituídos;  
- LRU – *Least Recently Used*, em que o bloco que há mais tempo não é acessado deve ser substituído.  

### 5.4.5 Política de escrita de dados na memória MP-cache

O controlador de cache não opera somente com a implementação do processo de atendimento à requisição de leitura de dados pelo processador.  
O controlador também deve se encarregar de atualizar os dados escritos na cache para a MP.  
Existem algumas técnicas possíveis de implementar a atualização dos dados da cache na MP, como, por exemplo,   

- escrita direta (*write through*) e
- a escrita retroativa ou retardada (*write back* ou *write deferred*).

Na **escrita direta**, quando se escreve um dado na cache o controlador simultaneamente escreve os dados também na MP.  
Dessa forma os dados de uma linha de cache da MP sempre são iguais aos do bloco da cache.   
Isso implica perda de eficiência em virtude do tempo necessário para realizar a escrita na MP.

![Técnica de escrita direta MP-cache](/arq_aulas/images/escritadiretampcache.jpg)

Uma forma mais eficiente de realizar a substituição é adiar para realizá-la somente quando um bloco da cache precisar ser substituído por um novo, uma vez que tenha se configurado uma falta.

![Técnica de escrita retardada MP-cache](/arq_aulas/images/escritaretardadampcache.jpg)

___
**[<<anterior](memoria.md)**   
**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**  

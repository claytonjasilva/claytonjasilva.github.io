# Cap. 4 - Sistema de memória

## 4.1 Hierarquia do sistema de memória

A estratégia de armazenamento de dados nos sistemas de computação pode ser resumida conforme apresenta a figura.

![Hierarquia do sistema de memória](/arq_aulas/images/hierarquiamemoria.jpg)

As características de performance de cada tipo de memória usado no sistema de computação podem ser representadas por uma pirâmide, 
que representa  

- a capacidade de armazenamento de bits,  
- a velocidade e
- o custo.

Quanto mais o tipo se aproxima da base, maior é a capacidade de armazenamento e o tempo de uso e menor é o custo por bit armazenado.  
Todos são dispositivos de armazenamento de dados e sua distribuição na arquitetura depende das características mencionadas acima.

Os quatro tipos de memória usados no sistema de computação são: **memória secundária**, **memória principal**, **memória cache** e **registradores**. 

A tabela apresenta de forma mais precisa as características descritas de forma genérica na pirâmide anterior.

![Comparação das características dos níveis da hierarquia de memória](/arq_aulas/images/caracteristicasmemoria.jpg)

A **capacidade armazenamento** de memórias é um atributo que já foi tratado anteriormente.   
É definida como o número de bits que a memória pode armazenar.  
Pode ser definida em bytes (B), lembrando que cada byte possui 8 bits.  
Além disso, pode-se referir aos múltiplos de bits ou bytes, 
lembrando que 2<sup>10</sup> representa 1 K, 2<sup>20</sup> representa 1 M e 2<sup>30</sup> representa 1 G.  

A velocidade pode ser definida pelo **tempo de acesso**.   
O tempo de acesso representa quanto tempo a memória gasta para disponibilizar um dado após o endereço ser disponibilizado.  
O tempo de acesso depende da tecnologia de construção. 

Outro parâmetro que pode definir a velocidade da memória é chamado de **ciclo de memória**.  
O ciclo de memória é o tempo decorrido entre duas operações sucessivas de acesso à memória, seja para leitura ou escrita.  
Nesse sentido, o ciclo de memória compreende o tempo de acesso mais o tempo necessário para a realização de outras operações do sistema, 
logo *t<sub>C</sub> = t<sub>A</sub> + t<sub>S</sub>*.

## 4.2 Tecnologias de construção

As características dos tipos de memória dependem fortemente da tecnologia de construção utilizada.  
A figura apresenta as diversas tecnologias existentes no mercado.  

![Tecnologias de memória](/arq_aulas/images/tecnologiasmemoria.jpg)

A árvore de classificação distingue claramente duas tecnologias:  

- ROM e
- RAM.

Quanto à **forma de acesso**, o acesso aleatório da construção de memória relaciona-se com o tempo de acesso curto e
igual para todas as células. Nas memórias de **acesso aleatório**, não há necessidade de ler outras posições antes de acessar uma célula.  
Tempo de acesso curto e igual para todas as células.  
Existem tecnologias em que o acesso a uma célula requer uma sucessão preliminar de posições antes de acessar a posição de interesse.  
Nesse caso a memória é de **acesso sequencial**.  

As memórias de acesso aleatório (RAM, do inglês *Random Access Memory*) admitem ser lidas ou ser escritas e
mantêm os dados armazenados somente se houver alimentação elétrica.  
Essa característica define a **volatilidade** do armazenamento de dados.  
Memórias RAM são voláteis.  
As memórias somente de acesso (ROM, do inglês *Read Only Memory*) não admitem ser lidas e escritas livremente, com as RAMs.  
A escrita dos dados é realizada de acordo com condições controladas.  
Além disso, quanto à volatilidade, os dados armazenados na ROM permanecem mesmo na ausência de alimentação,  
portanto são tipicamente não voláteis. 

Os sistemas de computação prescindem também do uso de memórias que sejam não voláteis, ou seja,   
que mantenham os dados armazenados mesmo quando haja ausência de alimentação elétrica.  
O principal inconveniente das memórias ROM, não admitir nova programação após a primeira ter sido feita,   
foi progressivamente sendo vencido pelo avanço tecnológico, com o surgimento de:  

- memórias que suportavam ser programadas conforme o interesse, embora somente uma vez (PROM, do inglês *Programmable ROM*);  
- apagadas e programadas novamente (EPROM, do inglês *Erasable PROM*) e  
- reprogramadas - apagadas e gravadas - eletricamente (EEPROM, do inlgês Electrically-Erasable PROM).

Mais recentemente, a memória *flash* é um tipo de EEPROM que pode ser reprogramada no próprio circuito,  
sendo cada vez mais utilizada nos sistemas de computação.

As ROMs têm as seguintes aplicações típicas nos sistemas de computação:
• *Firmware* – armazenamento para inicialização das máquinas, integra hardware+software;
• *Bootstrap* – memória que armazena código de inicialização para chamar o sistema operacional;
• Tabela de dados – armazenar dados não voláteis;
• Conversor de códigos;
• Gerador de funções;
• Armazenamento auxiliar.

O tipo de armazenamento pode ainda ser realizado de duas formas: uma vez inserido o dado, ele permanece armazenado, o que define a tecnologia de **memória estática**; ou uma vez inserido o dado, para que ele se mantenha armazenado é necessário periodicamente uma recarga (*refresh*), o que define a **memória dinâmica**.  
Assim, as RAMs podem ser estáticas ou, por outro lado, podem ser construídas de forma que o sinal armazenado (1 ou 0) se mantém somente se houver um *refresh* (recarga) do valor armazenado em intervalos de tempo - ou seja, podem ser também dinâmicas.  

As memórias RAM mais antigas operavam de modo que somente após a um sinal de controle do processador as fazia liberar os dados.  
Essa forma de operação caracteriza uma memória como **assíncrona**.  
Algumas tecnologias de memória assíncrona se sucederam e foram superadas por memórias síncronas SDRAM (DRAM síncrona).  
A aplicação de SDRAM elimina a necessidade de sinais de controle.  
A operação da memória acompanha a velocidade do clock do sistema, em cada transição do ciclo de clock.  
Nessa evolução, a mais recente é a memória SDRAM DDR (DDR, do inglês *Double Data Rate*),
que admite a transferência do dado da memória para o barramento na transição positiva quanto na transição negativa do ciclo de clock.

A construção dos dispositivos de memória pode ser feita com semicondutores.  
São duas tecnologias  muito utilizadas: MOS, semicondutor de óxido metálico e CMOS, semicondutor de óxido complementar.  
Além disso, podem ser construídas com meios magnéticos e meios ópticos.  

**Considerando as tecnologias de construção** e voltando à hierarquia do sistema de memória na arquitetura pode-se definir que:  

- As memórias secundárias são construídas em meios ópticos e magnéticos e sua função é armazenar grandes quantidades de dados, com a desvantagem de possuir tempo de acesso e de ciclo lentos, porém a um custo baixo;  
- A memória principal é construída em semicondutor, com tecnologia de RAMs estáticas ou dinâmicas, possui média capacidade de armazenamento e custo. Sua principal função é armazenar os dados do programa de máquina e os dados armazenados a serem acessados pelo processador.  
- A memória cache é construída em semicondutor, internamente ao próprio processador ou não, com tecnologia ROM, média/baixa capacidade de armazenamento, custo elevado. Sua principal função é armazenar os dados do programa de máquina e os dados armazenados local e temporalmente mais prováveis de serem acessados pelo processador. Utiliza o chamado princípio de localidade.  
- Os registradores possuem capacidade de armazenamento de dezenas de unidade de bits, são construídos em dispositivos semicondutores e localizam-se internamente ao processador.  

## 4.3 Memória Principal ou Primária

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

## 4.4 Memória cache

### 4.4.1 Organização MP e cache

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

### 4.4.2 Processo de requisição de dados à cache

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

### 4.4.3 Mapeamento MP-cache

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

#### 4.4.3.1 Mapeamento direto

A técnica de mapeamento direto aumenta a eficiência do sistema, 
entretanto possui o inconveniente de manter dados armazenados na cache mesmo quando não são muito utilizados
em virtude do relacionamento pré-determinado linhas de cache da MP-blocos da cache.

#### 4.4.3.2 Mapeamento totalmente associativo

Na técnica de mapeamento totalmente associativo não há uma relação pré-determinada de linhas de cache com blocos, 
o que implica aumento de eficiência.  
No entanto, aumenta-se a complexidade do circuito necessário à implementação do processo de espelhamento de dados. 

#### 4.4.3.3 Mapeamento associativo por conjunto

O mapeamento associativo por conjunto concilia a simplicidade do mapeamento direto com a eficiência do totalmente associativo.

### 4.4.4 Substituição de dados da cache

No mapeamento dos dados da MP para a cache, uma vez que o dado de um determinado endereço não esteja presente na cache, ou seja, tendo ocorrido uma falta, é necessário buscar o dado na memória e **substituir** os dados de algum dos blocos da cache.  
Existem algumas técnicas que o controlador pode utilizar como:  

- FIFO – *First-In-First-Out*, em que o bloco cujos dados foram os primeiros a ser inseridos são aqueles a ser substituídos;  
- LRU – *Least Recently Used*, em que o bloco que há mais tempo não é acessado deve ser substituído.  

**Política de escrita de dados na memória MP-cache**

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
**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**  
**Memória Principal ou Primária: [próximo>>](memoria2.md)** 

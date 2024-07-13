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

___
**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**  
**Memória Principal ou Primária: [próximo>>](memoria2.md)** 

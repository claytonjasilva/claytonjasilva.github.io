ARQUITETURA DE COMPUTADORES - 2021.2

PROF. CLAYTON J A SILVA – NOTA DE AULA 3
# **NÍVEL 0: NÍVEL DE LÓGICA DIGITAL**
1. # **Portas lógicas**
Considerando o estudo da arquitetura de computadores segundo a abordagem da máquina de 6 níveis, o nível mais elementar, no sentido de mais próxima da máquina é o nível de lógica digital.

Os circuitos digitais são basicamente divididos em duas grandes categorias: circuitos combinacionais e circuitos sequenciais. Os circuitos combinacionais são aqueles cujas respostas (saídas) em um determinado instante dependem somente das entradas do circuito naquele instante. Os circuitos sequenciais são aqueles cujas saídas dependem das entradas e de uma realimentação da saída para a entrada a fim de gerar uma função de saída como uma função sequencial de suas entradas (FLETCHER, 1980).

Os elementos básicos dos circuitos combinacionais são as portas lógicas (ou *gates*). As portas lógicas reproduzem eletricamente operações lógicas. Fletcher (1980) define porta lógica como um dispositivo de hardware de múltiplas entradas, número maior ou igual a duas entradas, que tem dois níveis de sinal de saída (*High/Low*). O nível de saída é função somente das combinações dos níveis de sinal aplicados às suas entradas.

Para os circuitos no presente texto sempre será adotado que os dois níveis de entrada ou saída serão associados com os bits 1 e 0. Por convenção, o nível *High* corresponderá ao bit 1 e o nível *Low* corresponderá ao bit 0. Eletronicamente, há fabricantes que não adotam essa convenção.  

As portas lógicas que serão discutidas neste texto estão apresentadas na Tabela 1. 

Tabela 1 – Portas lógicas

|***AND***|***OR***|***NAND***|
| :-: | :-: | :-: |
|![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.001.png)|![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.002.png)|![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.003.png)|
|***NOR***|***EXOR***|***INVERSOR***|
|![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.004.png)|![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.005.png)|![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.006.png)|
Admitindo duas entradas somente A e B, o resultado lógico que as portas entregam na saída é dado pela operação lógica correspondente, conforme apresenta a Tabela 2.

Tabela 2 – Operações lógicas realizadas pelas portas lógicas

|||*AND*|*OR*|*NAND*|*NOR*|*XOR*|
| - | :- | :-: | :-: | :-: | :-: | :-: |
|*A*|*B*|*A.B*|*A+B*|*~(A.B)*|*~(A+B)*|*AxorB*|
|0|0|0|0|1|1|0|
|0|1|0|1|1|0|1|
|1|0|0|1|1|0|1|
|1|1|1|1|0|0|0|

A Tabela 2 não apresenta a operação de negação ou inversão. A inversão consiste na inversão do sinal lógico de uma entrada (o inversor admite somente uma entrada). Se a entrada for 0, a saída será 1; em caso contrário, entrada 1, saída 0.

Saliente-se que as operações lógicas básicas são as operações de conjunção, implementada pela porta AND, de disjunção, implementada pela porta OR, e a negação, implementada pelo INVERSOR.

Foi utilizado o software Logisim para o desenho das portas. A Figura 1 apresenta a tela de trabalho da ferramenta, que possibilita a simulação de alguns dos circuitos discutidos na presente seção.

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.007.png)

Figura 1 – Tela inicial da ferramenta Logisim

A combinação de portas lógicas, organizadas em **série** e **paralelo**, constitui um circuito digital. A Figura 2 ilustra um exemplo de circuito digital **combinacional** com entradas e saídas.

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.008.png)

Figura 2 – Exemplo de circuito combinacional com entrada de 5 bits e saída de 2 bits

A Figura 2 possui cinco bits de entrada (A4, A3, A2, A1, A0) e dois bits de saída (B1, B0). Os elementos do circuito são conectados por um **barramento** representado na figura por uma linha verde ou vermelha. O barramento é um fio ou uma trilha em uma placa de circuito impresso, em que o sinal elétrico trafega.

No exemplo, utilizou-se o Logisim para a simulação. A ferramenta simula o funcionamento do circuito. Quando a entrada recebe os bits 01111 (A4, A3, A2, A1, A0) a saída resultante é 10 (B1, B0). **Dependendo da combinação dos sinais na entrada do circuito a saída resultante será diferente**. O Logisim indica em verde o barramento pelo qual trafega o bit 1 e em vermelho, pelo qual trafega o bit 0.

Como os valores de entrada são binários, **o circuito com N entradas poderá apresentar 2N combinações para cada bit de saída**.  A Figura 3 apresenta a saída para uma combinação diferente dos bits de entrada.

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.009.png)

Figura 3 – Resposta do circuito de exemplo para uma combinação 10111 de entrada

Assim como a resposta de cada porta pode ser apresentada na forma de tabela-verdade, também os circuitos combinacionais podem ter suas **M saídas representadas, para cada combinação de N entradas**. Obviamente, a tabela-verdade apresentará 2N linhas. Associada a cada linha será representada a saída correspondente. Ou seja, a tabela-verdade possuirá M colunas, uma para cada saída a ser representada.

Considerando o exemplo apresentado na Figura 2 e na Figura 3, tabela-verdade corresponde será a apresentada na Tabela 3. Observe que a ordem de apresentação dos bits na tabela é (*A0, A1, A2, A3, A4*). Essa ordenação é importante para a representação dos dados, como será discutido mais oportunamente. **O bit mais à direita é o bit menos significativo**, normalmente representado com o subscrito 0.


Tabela 3 – Tabela-verdade do circuito exemplo: 5 entradas e 2 saídas

||***Entradas***|***Saídas***|
| - | :-: | :-: |
||*A0*|*A1*|*A2*|*A3*|*A4*|*B0*|*B1*|
|1|0|0|0|0|0|0|1|
|2|0|0|0|0|1|0|1|
|3|0|0|0|1|0|0|1|
|4|0|0|0|1|1|0|1|
|5|0|0|1|0|0|0|1|
|6|0|0|1|0|1|0|1|
|...|1|0|1|1|1|0|0|
|25|1|1|0|0|0|0|1|
|26|1|1|0|0|1|1|1|
|27|1|1|0|1|0|0|1|
|28|1|1|0|1|1|1|1|
|29|1|1|1|0|0|0|1|
|30|1|1|1|0|1|1|1|
|31|1|1|1|1|0|0|1|
|32|1|1|1|1|1|0|0|
` `É importante destacar que a ferramenta Logisim permite, na opção de menu *Projeto-Analisar Circuito*, realizar uma análise combinacional do circuito elaborado, gerando automaticamente a tabela-verdade.

Como as saídas das portas lógicas são funções das suas respectivas entradas, também as saídas dos circuitos combinacionais são funções de suas entradas, que podem ser representadas por meio da tabela-verdade, mas também podem ser representadas por meio de uma expressão lógica ou *booleana*.  

A Figura 4 apresenta as expressões lógicas que representam a saída de cada um dos pontos dos seus componentes em função de suas respectivas entradas. Associada a cada expressão pode ser construída uma tabela-verdade. 

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.010.png)

Figura 4 – Expressões booleanas que representam as saídas do circuito exemplo em função das entradas

A ferramenta Logisim também permite na opção de menu *Projeto-Analisar Circuito*, na análise combinacional do circuito elaborado, identificar a expressão booleana de cada saída, conforme apresenta a Figura 5.

Observe que a expressão relativa à saída B0 mostrada difere da expressão apresentada na Figura 4. Isso não significa que haja erro. As **expressões apresentadas nas figuras são logicamente equivalentes**. Se as tabelas-verdade associadas às expressões forem construídas verificar-se-á que são as mesmas. Portanto, **um circuito lógico pode ser representado por diferentes expressões lógicas, porém equivalentes**, uma vez que as correspondentes tabelas-verdade sejam as mesmas. Analogamente, circuitos lógicos diferentes podem produzir a mesma tabela-verdade, ou seja, podem apresentar as mesmas saídas para toda combinação de entradas. Circuitos lógicos que satisfazem a essa característica são ditos circuitos equivalentes. 

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.011.png)

Figura 5 – Expressão *booleana* calculada pelo Logisim

**O que se deseja na construção de circuitos digitais é que as expressões lógicas dos circuitos sejam as mais simples possíveis**, resultando, consequentemente, em circuitos menores, que utilizam menos portas lógicas. Os benefícios de implementar circuitos menores são óbvios, como: consomem menos energia – lembrando que as portas lógicas são componentes eletrônicos que são alimentadas com uma fonte de corrente contínua; ocupam menos espaço físico, o que reduz o circuito, facilitando que seja embarcado em qualquer plataforma; têm a manutenção facilitada. O projeto de circuitos digitais requer o levantamento da expressão lógica mais simples do circuito. O estudo é obtido a partir da aplicação de postulados, identidades e teoremas da Álgebra Booleana.

Um ponto de partida para compreender a minimização de circuitos é definir a primeira forma canônica da expressão lógica do circuito. Para definir uma função booleana a partir da tabela-verdade é possível obter sua expressão algébrica considerando a disjunção da expressão das linhas da tabela associadas ao valor lógico 1. Por sua vez, cada linha associada ao valor 1 pode ser representada pela conjunção das entradas, associando ao valor lógico 1 do elemento a variável de entrada e ao valor lógico 0 a negação da variável. Quando uma função é colocada nessa forma, diz estar na primeira forma canônica ou forma disjuntiva (ZUFFO, 1976). Por exemplo, considerando que na linha 6 da Tabela 3 a saída B1=1, a linha é um dos termos da função de saída. Como na linha A0=0, A1=0, A2=1, A3=0, A4=1, a expressão lógica da linha é dada por *Ã0.Ã1.A2.Ã3.A4*.

Seja um novo exemplo, de um circuito com 3 entradas A2, A1, A0 e uma saída B. Seja a representação da saída do circuito em função das suas entradas apresentada na Tabela 4 pela tabela-verdade e apresentando também a sua expressão lógica na primeira forma canônica.

Tabela 4 - Expressão lógica na primeira forma canônica, forma disjuntiva

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.012.png)

**Cada termo associado ao valor lógico 1 é chamado de mintermo**. A disjunção de mintermos é a expressão lógica resultante, apresentada na **forma canônica**. 

Alguns dos postulados da Álgebra de Boole que podem ser aplicados para a obtenção da minimização dos circuitos, em especial as propriedades de comutatividade e distributividade das operações de conjunção e disjunção, apresentadas abaixo:
1.
1. 1. **Comutatividade** em relação às operações de conjunção e disjunção: *A+B=B+A*; *A.B=B.A*
1. 1. **Distributividade** da conjunção em relação à disjunção e da disjunção em relação à conjunção: *A.(B+C)=A.B+A.C; A+(B.C)=(A+B).(A+C)*


As identidades da Álgebra de Boole que podem ser aplicados para obtenção do circuito mínimo são apresentados na Tabela 5. A numeração prossegue a numeração das propriedades dos postulados.

Tabela 5 – Identidades da Álgebra *Booleana*

|*3. A.0=0*|Elemento nulo|*8. 1+A=1*|
| - | - | - |
|*4. A.1=A*|Elemento neutro|*9. 0+A=A*|
|*5. A.A=A*|Idempotência|*10. A+A=A*|
|*6. A.Ã=0*||*11. A+Ã=1*|
|*7. ~(Ã)=A*|Dupla negação||
Dos postulados e identidades, alguns teoremas podem ser formulados e provados. A Tabela 6 apresenta os teoremas.

Tabela 6 – Teoremas da Álgebra *Booleana*

|*12. A+A.B*|Absorção|
| - | - |
|*13. A+Ã.B=A+B*||
|*14. A.B+A.~B=A*|Lógica Adjacente|
|*15. A.C+Ã.B.C=A.B+B.C*||
|*16. A.B+A.C+~B.C=A.B+~B.C*||
|*17. ~(A.B.C)=Ã+~B+~C*|De Morgan|
|*18. ~(A+B+C)=Ã.~B.~C*|De Morgan|
Aplicando os 18 (dezoito) postulados, identidades e teoremas as expressões correspondentes aos circuitos podem ser minimizadas, consequentemente os circuitos projetados podem ser simplificados.

Considerando o exemplo anterior, aplicando-se os postulados, identidades e teoremas, a expressão *Ã2.Ã1.Ã0+Ã2.A1.Ã0+Ã2.A1.A0+A2.A1.Ã0* pode-se obter

Aplicando (2) e (13), 

*Ã2.Ã1.Ã0+Ã2.A1.Ã0= Ã2.Ã0* (i)

Aplicando novamente (2) e (13), 

*Ã2.Ã0+Ã2.A1.A0= Ã2.Ã0+Ã2.A1* (ii)

Aplicando novamente (2) e (13),

*Ã2.Ã0+Ã2.A1+A2.A1.Ã0= Ã2.Ã0+Ã2.A1+A1.Ã0* (iii)

Implementando-se a tabela-verdade referente à expressão (iii) pode-se verificar facilmente que a tabela-verdade é a mesma apresentada na **Erro! Fonte de referência não encontrada.**. Entretanto, embora as expressões sejam logicamente equivalentes, o circuito associado à expressão (iii) é muito mais simples, conforme apresentado na figura.

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.013.png)

Figura 6 – Implementação da expressão *Ã2.Ã1.Ã0+Ã2.A1.Ã0+Ã2.A1.A0+A2.A1.Ã0* 

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.014.png)

Figura 7 – Implementação da expressão *Ã2.Ã0+Ã2.A1+A1.Ã0*

Existem técnicas baseadas nos postulados, identidades e teoremas da Álgebra Booleana para minimizar de forma gráfica as expressões. Uma das técnicas é o uso do Mapa de Karnaugh (K-MAP). Foge ao interesse deste curso discutir e aplicar as técnicas no projeto de circuitos combinacionais.  A ferramenta *open source* SimpleSolver pode ser aplicada para minimização de funções de forma bastante eficiente[^1].
1. # **Circuitos aritméticos**
Os circuitos combinacionais podem realizar operações aritméticas binárias, como adição, subtração, multiplicação e divisão. Seja, por exemplo, um circuito combinacional que implementa a soma de duas palavras de 2 bits cada A (*A1,A0*) e B(*B1,B0*). A tabela-verdade associada a esse circuito está apresentada da Tabela 7.

Tabela 7 - Tabela-verdade de um somador binário de palavras de 2 bits

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.015.png)

A soma resultante varia, na representação decimal, entre 0 (A e B iguais a 0) e 6 (A e B iguais a 3). As saídas são representadas por *S(S2, S1, S0)*. Observe que neste circuito é importante estabelecer os bits mais e menos significativos, tanto na entrada quanto na saída. Cada saída implica um circuito diferente, cujas equações, na primeira forma canônica, são

*S2: Ã1.A0.B1.B0+A1.Ã0.B1.~B0+A1.Ã0.B1.B0+A1.A0.~B1.B0+A1.A0.B1.~B0+A1.A0.B1.B0*  

*S1: Ã1.Ã0.B1.~B0+Ã1.Ã0.B1.B0+ Ã1.A0.~B1.B0 +Ã1.A0.B1.B0+ A1.Ã0.~B1.~B0+ A1.Ã0.~B1.B0+ A1.A0.~B1.~B0+ A1.A0.B1.B0*

*S0: Ã1.Ã0.~B1.B0+Ã1.Ã0.B1.B0+ Ã1.A0.~B1.~B0 +Ã1.A0.B1.~B0+ A1.Ã0.~B1.B0+ A1.Ã0.B1.B0+ A1.A0.~B1.~B0+ A1.A0.B1.~B0* 

A Figura 8 apresenta o circuito implementado utilizando a ferramenta Logisim.

![Uma imagem contendo traçado

Descrição gerada automaticamente](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.016.jpeg)

Figura 8 – Circuito de um somador binário de palavras de 2 bits

O circuito evidencia um barramento de dados de entrada com 4 bits e um barramento de dados de saída com 3 bits. Comparando a expressão de cada uma das saídas com o circuito apresenta, verifica-se que a expressão foi minimizada para simplificação do circuito projetado. 

À medida que o número de bits tratados pelo circuito combinacional aumenta, aumenta também o número de portas lógicas necessárias para implementá-lo. Além disso, operações mais complexas requerem também uma variedade maior de portas lógicas. A capacidade de integrar um número cada vez maior de componentes eletrônicos em um substrato de semicondutor tem sido determinante para a rápida evolução dos sistemas computacionais. Circuitos com integração em média escala (MSI, do inglês *Media Scale Integrated*)  podem integrar até 100 portas lógicas em um único substrato (FLETCHER, 1980).

A Figura 9 apresenta um exemplo de circuito somador de duas palavras de 4 bits.

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.017.png)

Figura 9 – Circuito somador de duas palavras de 4 bits

Analisando o circuito da Figura 9, verifica-se que o barramento de entrada de dados possui 8 bits, 4 bits para cada palavra a ser somada, A e B. O barramento de saída de dados possui 5 bits, S (S5,S4,S3,S2,S1,S0). A saída S5 é obtida pelo barramento de saída do circuito somador intitulado *Carry Out*, que é o *overflow* da operação de adição binária. O *overflow* é o bit que “transborda” na operação binária. Por exemplo, 1 + 1 = 0, *overflow* 1, ou seja, 10.

Além dos circuitos somadores, uma categoria particular de circuitos aritméticos é o dos subtratores, cujo propósito é realizar operações binárias de subtração.
1. # **Circuitos lógicos**
   1. # **Comparadores**
Os circuitos digitais combinacionais comparadores são circuitos recebem palavras binárias A e B de entrada com N bits cada uma, gerando um sinal de nível *High* (bit 1) em uma de três saídas, sinalizando se A>B, A=B ou A<B.

A figura apresenta um exemplo de um circuito digital comparador de duas palavras binárias de 4 bits cada. No exemplo, está evidenciado que A (0001) é menor do que B (0011), consequentemente a saída ativada (em nível *High*) é A<B.

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.018.png)

Figura 10 – Circuito comparador de palavras de 4 bits
1. # **Multiplexadores e demultiplexadores**
Os circuitos digitais combinacionais multiplexadores são circuitos que recebem uma palavra binária A (*AN-1, AN-2, ..., A0*) de entrada de dados com *N* bits, gerando como saída S somente um dos bits da palavra de dados da entrada, de acordo uma entrada seletora de controle C (*CM-1, CM-2, ...,C0*) com *M* bits. Obviamente, para que todas as entradas de dados possam ser selecionadas, *2M>=N*.

A Figura 11 apresenta um exemplo de um circuito digital multiplexador com entrada de dados A de 8 bits, entrada controladora C de 3 bits.

|<p>![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.019.png)</p><p>(a)</p>|<p>![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.020.png)</p><p>(b)</p>|
| :-: | :-: |
Figura 11 – Multiplexador de 8 bits: (a) Seleção da entrada A0 (b) Seleção da entrada A1

Observe que a entrada possui 8 bits, dentre os quais, em (a) como a entrada seletora de controle carrega 000 mutiplexa o bit A0, cujo valor lógico é 1, na saída. Em (b), embora o valor lógico do bit de entrada A0 tenha assumido 0, a entrada seletora passou a 001. O multiplexador chaveia a entrada A1 para a saída.

O circuito que faz o inverso do multiplexador é o chamado demultiplexador. O demultiplexador recebe como entrada somente 1 bit de dado e chaveia para N saídas (SN-1, ...,S0), com base em uma entrada seletora de controle C (*CM-1, CM-2, ...,C0*) com *M* bits. Obviamente, para que todas as entradas de dados possam ser selecionadas, *2M>=N*.

A Figura 12 apresenta um exemplo de um circuito digital combinacional demultiplexador de 16 bits de saída. Fica evidente que o sinal de entrada 1 é transferido para a saída 4, pois o código seletor está em 0100.

Os circuitos multiplexadores são chamados comumente de *mux* e os demultiplexadores de *demux*.

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.021.png)

Figura 12 – Demultiplexador de palavra de saída de 16 bits
1. # **Codificadores e decodificadores**
Os codificadores são circuitos digitais combinacionais que relacionam um conjunto finito e discreto de N elementos a um conjunto de sequências de M bits, cada uma. O conjunto de sequências constitui o código binário que representa o conjunto discreto. Cada elemento do conjunto discreto será tratado pelo circuito ligado ao codificador pela sua representação no código, digitalmente.

O primeiro ponto a destacar é a quantidade de bits de cada palavra do código binário. Considerando N elementos discretos, a relação 2M>=N, onde M é o tamanho da palavra do código. 

Os codificadores e decodificadores são particularmente importantes porque os processadores, que serão discutidos posteriormente no curso, realizam um conjunto finito de instruções pré-estabelecidas, concebidas pelo fabricante. A cada instrução corresponde um código binário que é a linguagem no nível da execução de microinstruções.

Para ilustrar o funcionamento dos codificadores, pode-se utilizar um exemplo de como as informações de um teclado podem ser processadas internamente por um circuito digital. Seja o teclado apresentado na Figura 13.

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.022.png)

Figura 13 – Teclado com 6 teclas ativas

Analisando o teclado observa-se que há 6 teclas ativas. Admitindo que o teclado é um dispositivo de entrada de informações para uma máquina digital qualquer, deseja-se que seja gerada uma palavra binária quando o usuário pressionar uma tecla. A palavra correspondente à tecla será processada pela máquina.

Como o conjunto discreto possui 6 teclas (número de elementos do conjunto discreto) e admitindo-se que se deseja uma palavra para nenhuma tecla digitada, será necessário um código de pelo menos 3 bits, pois 23>7. Pode-se estabelecer um código conforme mostrado na Tabela 8. S2,S1,S0 representam os bits de saída do circuito quando as teclas forem acionadas. Caso nenhuma tecla seja acionada a palavra binária gerada pelo teclado será 111.



Tabela 8 – Exemplo de código para teclado com 6 teclas

|**TECLA**|**Código binário**|***S2***|***S1***|***S0***|
| - | - | - | - | - |
|![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.023.png)|000|0|0|0|
|![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.024.png)|001|0|0|1|
|![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.025.png)|010|0|1|0|
|![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.026.png)|011|0|1|1|
|![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.027.png)|100|1|0|0|
|![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.025.png)|101|1|0|1|
|NENHUMA TECLA DIGITADA|110|1|1|0|
Para facilitar a compreensão do projeto do circuito codificador, pode-se apresentar o problema do codificador da forma da tabela-verdade constante da Tabela 9. Pela tabela, cada palavra do código é gerada somente se a tecla for pressionada e as demais não forem pressionadas. Todas as demais combinações, inclusive não pressionar tecla alguma implicam a saída 111 – razão pela qual a tabela-verdade retrata como X. 

Para projetar o circuito pode-se, abordando a tabela-verdade, bit a bit de saída, analisar em quais linhas o bit assume valor 1. A disjunção das saídas de cada tecla que determina 1 para a saída será a operação requerida para o circuito. Por exemplo, a saída S0 será igual a 1 somente se T1 ou T4 ou T6 ou se ocorrer uma das demais combinações. 





Tabela 9 - Tabela-verdade do codificador de 6 teclas

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.028.png)

Essa análise leva ao circuito apresentado na Figura 14.

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.029.png)

Figura 14 – Codificador binário de 3 bits

Existem códigos consagrados para representação de informações pelas suas características e que se tornaram padrões, consequentemente são adotados largamente pela indústria.

Um dos códigos é o BCD (do inglês, *binary code to decimal*) que se destina a representar dígitos decimais em dígitos binários. Cada dígito decimal requer pelo menos 4 bits. A Tabela 10 apresenta alguns códigos BCD consagrados pela indústria.

Tabela 10 – Códigos BCD (ZUFFO, 1976)

|**8-4-2-1**|**Excesso Três**|
| :-: | :-: |
|0|0|0|0|0|-|-|-|-|-|
|0|0|0|1|1|-|-|-|-|-|
|0|0|1|0|2|-|-|-|-|-|
|0|0|1|1|3|0|0|1|1|0|
|0|1|0|0|4|0|1|0|0|1|
|0|1|0|1|5|0|1|0|1|2|
|0|1|1|0|6|0|1|1|0|3|
|0|1|1|1|7|0|1|1|1|4|
|1|0|0|0|8|1|0|0|0|5|
|1|0|0|1|9|1|0|0|1|6|
|-|-|-|-|-|1|0|1|0|7|
|-|-|-|-|-|1|0|1|1|8|
|-|-|-|-|-|1|1|0|0|9|
Um código também bastante consagrado e adotado pela indústria, destinado a representar caracteres alfanuméricos, é o código ASCII.

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.030.png)

Figura 15 – Reprodução do código ASCII de um manual de impressora anterior a 1972. 

`       `Fonte: <https://en.wikipedia.org/wiki/ASCII#Character_set>

Observa-se que o código possui 7 bits, portanto suporta a representação de 128 caracteres alfanuméricos. Atualmente existem diversas variações do código ASCII, estabelecidas em normas, padrões internacionais etc.

Assim como existem os codificadores, e sua importância ficou evidenciada no exemplo, existem os decodificadores. Os circuitos digitais combinacionais decodificadores (ou simplesmente *decoders*) operam inversamente aos codificadores. Possuem N entradas (*AN-1, ..., A0*), que recebem a palavra do código. Conforme a palavra de entrada será selecionado o elemento do conjunto de M elementos representado por aquela palavra e somente ele. Vale, obviamente, a mesma relação 2N>=M.

A Figura 16 apresenta um decoder BCD 8-4-2-1 para um número com dois dígitos decimais. 

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.031.png)

Figura 16 – Decoder BCD de dois dígitos decimais

Na Figura 16 são utilizados dois *decoders*, um para cada dígito decimal. Para ilustra a aplicação do decoder, os sinais de saídas são utilizados para ‘acender’ um display de 7 segmentos. Cada segmento é acionado em função da saída do decoder. Por exemplo, se a saída corresponder ao dígito decimal 8, todos os segmentos são acionados. Todas as saídas que acionam um segmento são combinadas em uma porta OR. Por exemplo, no caso do segmento superior do display, deverá ser acionada pela saída 0 ou pelas saídas 2, 3, 5, 6, 7, 8 ou 9. 
1. # **Memória**
   1. # **Flip-Flops**
Nas seções precedentes foram apresentados circuitos combinacionais aritméticos e lógicos. Uma outra classe de circuitos digitais é muito importante: circuitos sequenciais. Existe uma gama ampla de aplicações de circuitos sequenciais, entre as quais, particularmente para o estudo da arquitetura de computadores, a mais importante é a de controle, em que sinais digitais são recebidos e interpretados por um sistema digital e saídas de controle são geradas de acordo com a sequência em que os sinais de entrada são recebidos (FLETCHER, 1980).

O procedimento clássico de controle consiste na observação do sinal de saída em um instante *t0*, realimentando à entrada de forma que a saída em *t1=t0+dt*, onde *dt* é um intervalo de tempo, é função da entrada em *t1* e da realimentação da saída em *t0*. Nesse sentido, é necessário ao circuito digital a capacidade de memória para armazenar o resultado do passado para utilizar no presente.

O elemento de memória nas máquinas sequenciais admitem um retardo de propagação e incluem uma célula de memória básica que possui a capacidade de armazenar o estado presente da máquina (1 ou 0). O elemento das máquinas sequenciais com essa característica é chamado de *Flip-Flop*, usado como elemento básico de máquinas de estados finitos. O *Flip-Flop* requer como entrada um sinal de clock, que funciona como a base de referência do tempo.

O sinal de clock normalmente é uma sequência periódica de pulsos com determinada frequência, variando de estado 0 a 1, e vice-versa. É importante salientar que o Flip-Flop opera na transição de estados, seja na transição positiva de 0 a 1, ou transição negativa de 1 a 0. O circuito é gatilhado pela borda (*edge triggered*). A figura ilustra o comportamento de vários sinais de clock.

Existem vários tipos de *Flip-Flop*, cada um dos quais apresenta um comportamento específico. Por exemplo, o *Flip-flop* tipo T armazena 1 bit de dado na saída Q, durante um intervalo de tempo (memória) conforme um sinal de SET de controle T. O intervalo de tempo é definido em *steps* de um sinal de clock. O valor da saída Q é mantido enquanto o sinal de controle T permanecer igual a 0. A tabela-verdade apresentada na Tabela 11 ilustra a operação do *Flip-Flop* tipo T.

Tabela 11 – Flip-Flop Tipo T: Tabela-verdade; Tabela de excitação

|***T***|***Qn***|***Qn+1***||***Qn -> Qn+1***|***T***|
| :-: | :-: | :-: | - | :-: | :-: |
|0|0|0||0 -> 0|0|
|0|1|1||0 -> 1|1|
|1|0|1||1 -> 0|1|
|1|1|0||1 -> 1|0|
Na tabela, *Qn* representa o estado atual e *Qn+1* representa o estado após a transição do pulso de clock. Fica claro que enquanto o sinal de controle T permanecer igual a 0, a saída do *Flip-Flop* mantém o estado futuro igual ao anterior. Caso seja necessário alterar o valor armazenado, a entrada de controle T precisa receber o valor 1. Na próxima transição de pulso de clock, o valor armazenado será alterado. Se anteriormente armazenava 0 passará a armazenar 1, e vice-versa. 

O tempo de permanência do sinal em um nível é contado pelo número de ciclos do clock entre a transição que armazenou o bit e a transição que modificou o bit armazenado na saída do *Flip-Flop*.

O *Filp-Flop* tipo D mantém a saída Q em um determinado instante (*Qn+1*) igual ao instante anterior (*Qn*) dependendo do valor de D. Se o valor lógico de D for igual a 0, a saída no instante *Qn+1* será sempre 0. Se o valor lógico de D for igual a 1, a saída *Qn+1* na próxima transição será sempre 1. A tabela-verdade apresentada na Tabela 12 ilustra a operação do *Flip-Flop* tipo D.

Tabela 12 – Flip-Flop Tipo D: Tabela-verdade; Tabela de excitação

|***D***|***Qn***|***Qn+1***||***Qn -> Qn+1***|***D***|
| :-: | :-: | :-: | - | :-: | :-: |
|0|0|0||0 -> 0|0|
|0|1|0||0 -> 1|1|
|1|0|1||1 -> 0|0|
|1|1|1||1 -> 1|1|
O Flip-Flop tipo D se comporta de modo que, na transição do clock, o sinal de entrada D é transferido para a saída independentemente do estado anterior. 
1. # **Registradores**
A compreensão do funcionamento do Flip-Flop propicia entender um conjunto de circuitos digitais sequenciais chamados de registradores. Os registradores armazenam conjunto de bits na saída, mantendo-os disponíveis para serem operados por outros circuitos digitais, como, por exemplo, pelos circuitos aritméticos. Eles podem armazenar N bits e apresentar a saída em paralelo (todos o bits simultaneamente) a um barramento de N bits ou apresentar a saída em série, bit a bit, dos N bits armazenados.

Seja, como exemplo, um registrador de 2 bits baseado em um Flip-Flop tipo T. A Figura 17 apresenta dois registradores de 2 bits. As saídas dos registradores armazenam respectivamente os bits 01 e 10, enquanto as entradas de controle T permanecerem em 0.  

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.032.png)

Figura 17 – Registradores de 2 bits. Dados somados por um somador de 2 bits.

As saídas dos registradores constituem entradas de um somador de 2 bits, cuja saída é S (*S2, S1, S0*). As saídas de cada *Flip-Flop* são carregadas simultaneamente no circuito somador. Alternativamente, os registradores podem armazenar os bits e produzir uma saída serial dos bits armazenados, isto é, 1 bit de cada vez.
1. # **Contadores**
Os contadores são circuitos sequenciais amplamente usados para converter um número de pulsos de entrada em um código, gerar sequências de códigos especiais etc. Classificam-se geralmente de acordo com a operação, *single* ou multi-modo; com o número de saída de bits; com a sequência de código que gera; e conforme a resposta seja síncrona ou assíncrona.

A figura ilustra o funcionamento de um contador de 3 bits, assíncrono, que gera uma sequência crescente dos números binários 000, 001, 010, ..., 111. 

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.033.png)

Figura 18 – Contador binário de 3-bits

Analisando o funcionamento do circuito, observe que os valores nas entradas (DA DB DC) são determinado pelos resultados anteriores. Os circuitos sequenciais podem ser projetados usando um diagrama de estados para ilustrar o comportamento dinâmico a representar, seguido pelas correspondentes tabelas-verdade.

No exemplo considerado, a Figura 19 apresenta o diagrama de estados. Na representação cada estado está indicado pelos bits ABC, ou seja, o bit A é o mais significativo.

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.034.png)

Figura 19 – Diagrama de estados contador binário de 3-bits

` `A tabela apresenta a tabela-verdade. À esquerda os valores no instante n e à direita no instante seguinte.

Tabela 13 – Tabela-verdade do contador binário de 3-bits.

![](Aspose.Words.7974c329-796f-4922-9c28-a34de34e7e49.035.png)


[^1]: A ferramenta pode ser baixa pela Web. Disponível em <https://www.simplesolverlogic.com/index.html>.

# NOTA 1: **CONCEITOS BÁSICOS SOBRE ARQUITETURA DE COMPUTADORES**

## 1. Dados, linguagens e programas de computadores

Os termos dados e informações são amplamente utilizados em várias disciplinas do conhecimento. À medida que o uso dos computadores passou a permear todas as atividades humanas o uso se ampliou. Independentemente do contexto de utilização, pode-se afirmar que informação é o resultado de uma transformação do dado, ao qual lhe foi agregado valor. A agregação de valor ao dado é o que se designa processamento de dados. Merece destaque que, como valor se relaciona com o propósito a que se destina a informação, a transformação pode ocorrer contextos diferentes, ou seja, o que é informação em um contexto pode ser dado. A Figura 1 ilustra essa visão.

`    `![](Aspose.Words.3b07b864-1baf-478e-9365-4006d396e73e.001.png)

Figura 1 – Agregação de valor em contextos diversos: dados x informação

Para efeito do que será discutido no presente texto não se fará distinção entre dado e informação. Será utilizado indistinta e genericamente o termo **dados** como quaisquer caracteres que representam valores pertencentes a um conjunto domínio e pertencem ao alfabeto de uma das linguagens da máquina de níveis. Os dados podem ser processados por um conjunto finito de instruções, também escritas em uma das linguagens entendidas pelas máquinas **(linguagens de programação)**, designados **programas**.

As linguagens, naturais ou não, são conjuntos de sequências de caracteres de algum alfabeto. As sequências se chamam instruções (SEBESTA, 2000). É fácil entender a importância da **linguagem de programação** no estabelecimento do modelo de computador quando se pensa nas tecnologias que avançam rapidamente na sociedade, que permitem aos usuários interagir com a máquina em linguagem muito próxima da linguagem natural. O uso de aplicativos de assistente pessoal, como a Siri, da Apple; Cortana, do Windows - para ficar nos mais famosos -, ilustra bem o papel da comunicação das pessoas com as máquinas. Comparar o uso desses aplicativos com a forma com que as pessoas se comunicam no cotidiano dá a exata dimensão do quanto ainda está por acontecer. 

Preliminarmente, é necessário considerar o conceito de **linguagem de programação**. Uma pesquisa rápida ao (Google) leva aos conceitos da linguística como “qualquer meio sistemático de **comunicar** ideias ou sentimentos através de **signos** convencionais, sonoros, gráficos, gestuais etc.” e por extensão como “qualquer sistema de símbolos ou sinais ou objetos instituídos como signos; **código**.”. Da (Wikipédia), obtém-se que, entre outros conceitos, linguagem é “um sistema formal de signos, regidos por **regras** gramaticais que, quando combinadas, geram significados.”.

Sem aprofundar, **os conceitos de linguagem conduzem às ideias chaves: no que se refere à finalidade, de comunicação; e aos meios, de código composto por signos e regras**. Os computadores armazenam e processam dados, utilizando códigos compostos por signos e regras, para comunicá-los a outras máquinas e ao homem. Ou seja, a linguagem é um elemento fundamental à compreensão da organização e do funcionamento dos computadores.

**Dois aspectos básicos definem uma linguagem: sintaxe e semântica.** 

**As regras de sintaxe especificam quais sequências de caracteres do alfabeto estão presentes na linguagem e são descritas por mecanismos chamados gramática**. Por outro lado, as gramáticas não são suficientes para estabelecer todas as características das estruturas de uma linguagem. É necessário à linguagem a **adição de atributos associados aos símbolos das gramáticas e funções para especificar como os atributos serão computados**. A esse conjunto de regras dá-se o nome de **semântica da linguagem**, que também descreve as funções que declaram como as regras de sintaxe e as regras de semântica se associam às regras gramaticais (SEBESTA, 2000).

Louden (2004) define a semântica de um programa como o seu “significado”, em contraste com a sintaxe e estrutura. Determina o comportamento do programa durante a execução, mas usa atributos que podem ser determinados antes da execução e que não podem ser expressos de forma conveniente como sintaxe.

Em síntese, os programas são conjuntos de instruções para manipulação de dados escritos em linguagens de programação, portanto obedecendo a regras de sintaxe, dentro de estruturas definidas e conforme regras de semântica. 

## 2. Modelo de máquina de níveis

Uma das maneiras de representar sistemas de engenharia é o uso de modelos. A representação de um sistema objetiva facilitar a compreensão a seu respeito de modo a apoiar o processo de desenvolvimento do produto, ou seja, na síntese do sistema. Objetiva, por outro, lado, uma vez que o produto já tenha sido concebido e entrado na fase de operação, subsidiar o processo de suporte à operação, seja nas atividades de manutenção, suprimento etc.

Os modelos podem ser descritos como uma abstração dos sistemas, normalmente buscando capturar uma perspectiva de interesse, de modo a refletir o comportamento real a investigar. É natural que os modelos não tenham a capacidade de representar todos os comportamentos que um determinado sistema possa manifestar. Um modelo de sistema apresenta um ponto de vista que requer geralmente de explicações complementares a fim de que seja entendido e cumpra o seu propósito.

Um dos modelos para compreender a visão da **máquina computacional** é **entender a sua função e abstrair o seu conceito como um conjunto de circuitos eletrônicos, os quais utilizam sinais elétricos para armazenar e processar informações, que se comunicam, no nível mais alto, com pessoas e com outras máquinas, quando integrados a redes**. A Figura 2 ilustra essa visão.

![](Aspose.Words.3b07b864-1baf-478e-9365-4006d396e73e.002.png)

Figura 2 – Visão mais geral da comunicação entre computadores

A discussão que será apresentada neste texto sobre arquitetura de computadores adota a abordagem de Tanenbaum (2007), que modela os computadores como uma **máquina de níveis**.

O modelo de níveis da organização de computadores visa exatamente estabelecer uma visão do computador como um sistema de engenharia que é construído em camadas de subsistemas cada um dos quais recebe dados dos níveis adjacentes, superior ou inferior; executa suas funcionalidades utilizando uma linguagem; e entregando o resultado ao nível adjacente seguinte. Esse tráfego de serviços entre camadas pode ser realizado em ambos os sentidos. Decorre dessa visão de camadas a existência de interfaces de comunicação.

As camadas trocam serviços com as camadas adjacentes por meio de interfaces, consequentemente precisam usar mecanismos para converter o conjunto de signos e regras (linguagem) de uma camada para o conjunto de signos e regras da camada adjacente. 

Tanenbaum (2007) classifica as técnicas de conversão das informações comunicadas na linguagem de um nível para a linguagem de outro nível em **tradução** ou **interpretação**. **Na tradução, se substitui todos os dados do código de um nível para dados equivalentes no código do nível adjacente**. **Na interpretação, os dados do nível adjacente são mantidos conforme o código original, convertendo-se conforme a necessidade o dado do código original para o código do nível de destino**. Não há prévia geração de um conjunto de dados do código original.

A Figura 3 ilustra o modelo da máquina de níveis.

![](Aspose.Words.3b07b864-1baf-478e-9365-4006d396e73e.003.png)

Figura 3 – Modelo de máquina de níveis para representação da organização de computadores

Em síntese, o modelo da organização de computadores como um conjunto de máquinas de níveis compreende: **um conjunto de máquinas *M* com *N* níveis que representam as camadas do sistema de computação, *M*={*M0, M1, ..., MN-1*}; um conjunto *I* com *N-1* interfaces entre as camadas do modelo; um conjunto de *N* linguagens, *L={L0, L1, ..., LN-1}*, com os seus respectivos códigos, signos e regras**.

As máquinas em cada nível realizam funções, recebem e produzem dados para as camadas adjacentes. Trocam serviços entre elas. Os dados são representados dentro do nível na sua linguagem e quando são enviados para a camada adjacente são convertidos.

**O nível mais elementar é o nível do conjunto de componentes eletrônicos**, que utilizam sinais elétricos, e o nível mais alto é aquele que entrega as informações às pessoas ou a outros computadores, quando conectados em rede.

No modelo de níveis a máquina real é aquela do nível mais elementar, M0. Os demais níveis compreendem **máquinas virtuais** e, à medida que se aproximam do mais alto nível, aumentam o grau de abstração em relação à máquina física, consequentemente da linguagem que utilizam. A camada mais elevada é uma máquina virtual que utiliza a linguagem de alto nível, mais próxima da linguagem natural.

Quanto maior o número de níveis do computador menos complexo é o processo de conversão dos símbolos usados em uma camada para outra, mais simples a construção seria, no entanto poderia tornar a sua produção inviável economicamente. Por outro lado, a construção de uma máquina com poucos níveis, que utilize circuitos eletrônicos que operem com uma linguagem que aproxime a linguagem natural, aumentaria significativamente a complexidade da construção.

Além dessas considerações de complexidade e custo, particularmente na integração homem-máquina, é desejável que o nível mais elevado seja o mais amigável com as pessoas, dispensando que o seu uso seja privilégio de especialistas em eletrônica.           

Entendido o modelo de máquina de níveis, é importante caracterizar as funções do computador. As funções centrais do computador são processar e armazenar dados.

## 3. Máquina de seis níveis

A Figura 4 apresenta a máquina de níveis que representa a referência da organização de computadores considerada no presente texto.

![](Aspose.Words.3b07b864-1baf-478e-9365-4006d396e73e.004.png)

Figura 4 – Máquina de seis níveis

Fonte: Adaptado de Tanenbaum (2007)

O nível mais elementar é o **nível de lógica digital**. Compreende os circuitos eletrônicos digitais que realizam as operações lógicas digitais que fisicamente implementam todas as funções. Os dados no nível 0 são sinais elétricos, normalmente de corrente contínua. Pode-se abstrair os sinais elétricos como dígitos binários (bits, de *binary digits*), que assumem valores 0 e 1, dependendo da convenção utilizada pelo circuito.

Utiliza elementos digitais básicos, como as **portas lógicas**, que realizam operações lógicas fundamentais (conjunção, disjunção, ou exclusivo, negação, ...). As portas lógicas podem ser combinadas em série e em paralelo, na forma de circuitos eletrônicos que realizam operações lógicas diversas. Podem ainda armazenar sinais elétricos, configurando circuitos de memória.

É importante destacar que os circuitos elétricos admitem vários **níveis de integração, isto é, encapsulamento, em chips**, em diversos níveis de escala. As escalas de integração permitem que milhões de transistores (elemento fundamental da eletrônica) sejam montados sobre um mesmo substrato de semicondutor.  

O nível adjacente ao do nível de lógica digital é o **nível de microarquitetura**. No nível de microarquitetura não são considerados os circuitos elementares do nível anterior, mas circuitos especializados (possuem funções específicas). São componentes desse nível: **registradores**, responsáveis pelo armazenamento de bits, tipicamente algumas unidades de bits – ou seja constituem uma memória local; **Unidade Lógica e Aritmética**, responsável pelas operações lógicas e aritméticas simples executadas pelo computador; o tráfego entre os registradores e a ULA é realizado por meio de barramentos (caminhos físicos pelos quais os dados – sinais elétricos – trafegam), caracterizando o **caminho de dados**.

Em algumas máquinas a operação no nível de microarquitetura é controlada por **microprogramas** e em outras máquinas opta-se pela **programação via circuitos eletrônicos**. Ou seja, no nível da microarquitetura os componentes especializados são controlados por uma **Unidade de Controle**. 

O nível 2 constitui o **nível de arquitetura de conjunto de instruções** (ISA, do inglês *Instructions Set Architecture*), portanto, para simplificação, será tratado somente como **nível ISA**.

O nível ISA compreende um conjunto de circuitos eletrônicos que operam conforme instruções específicas, definidas pelo fabricante. Normalmente, esse conjunto de instruções refere-se às instruções do elemento chamado **processador** do computador. As instruções definidas pelo fabricante são interpretadas por microprogramas ou por circuitos eletrônicos e executadas pelo nível de microarquitetura. O interpretador é específico para a máquina usada.

O nível 3 é o **nível de sistema operacional**. O sistema operacional é um programa que utiliza linguagem que **possui instruções próprias e instruções do próprio nível ISA**. Em consequência, parte de suas instruções deve ser interpretada diretamente pelo microprograma ou por circuitos eletrônicos do nível 2, enquanto outras instruções são interpretadas pelo próprio sistema operacional. Por essa razão, considera-se o nível 3 como um nível híbrido.

O nível 4 é o nível de linguagem de montagem (*assembly*), que contempla instruções simbólicas que podem ser executadas pelos níveis inferiores (1, 2 e 3), dispensando o conhecimento detalhado dos elementos físicos. O programa que faz a conversão do código em *assembly* para os níveis inferiores é chamado de *assembler* (montador). **O montador é um tradutor da linguagem de montagem, que representa uma forma simbólica da linguagem de máquina (SEBESTA, 2000)**. 

O nível 5 é aquele em que são utilizadas as linguagens de aplicações, nas quais os programadores desenvolvem os programas voltados à solução dos problemas gerais dos usuários. 

As linguagens do nível 5 são as chamadas linguagens de alto nível. As **linguagens de alto nível** são traduzidas para a linguagem de montagem (*assembly*) por programas chamados **compiladores**.

Compiladores são programas que traduzem programas de uma linguagem para outra. Um compilador recebe como entrada um programa escrito em uma linguagem-fonte e produz um programa equivalente escrito em uma linguagem-alvo (LOUDEN, 2004).

Um esquema geral da execução dos programas nas máquinas virtuais e escritos nas respectivas linguagens de programação está apresentado na Figura 5.

Observe que no nível de sistema operacional (híbrido) parte das instruções é interpretada. Uma outra parte é resolvida pelo próprio sistema operacional (interpretação parcial) naquele nível da máquina virtual.

![](Aspose.Words.3b07b864-1baf-478e-9365-4006d396e73e.005.png)

Figura 5 – Visão geral sobre esquemas de tradução e interpretação dos programas das seis camadas

Para alinhar a compreensão com a abordagem normalmente dada nos estudos sobre compiladores e nos estudos das linguagens de alto nível vale a pena fazer o alinhamento com algumas considerações adicionais.

Alfred V. Aho (AHO et al., 2008) apresenta uma definição simples de compilador como um programa que recebe como entrada um programa em uma linguagem de programação chamada de linguagem fonte e o traduz para um programa equivalente em outra linguagem, chamada de linguagem objeto, relatando os erros detectados durante o processo de tradução.

Se o programa objeto for um programa em uma linguagem de máquina **executável** poderá ser chamado pelo usuário para processar entradas, produzindo saídas. Vários outros programas podem ser necessários para que um programa fonte seja convertido em um programa objeto executável. A Figura 6 ilustra o processo.

![](Aspose.Words.3b07b864-1baf-478e-9365-4006d396e73e.006.png)

Figura 6 – Processo de transformação no código fonte em código objeto executável

` `O programa fonte pode ser subdividido em módulos armazenados em arquivos separados, o que demanda a utilização de um **pré-processador**, que gera um programa fonte modificado.

O programa fonte modificado é traduzido pelo compilador em um programa em linguagem de montagem (*assembly*), que, por sua vez, é traduzido pelo montador (*assembler*) em um programa relocável. A saída do montador pode depender de arquivos de bibliotecas, por exemplo, para ser executado. Assim o código relocável é associado a um código de carregado por um *linkeditor* (editor de ligação/carregador) para gerar o código executável. 

## 4. Sobre a evolução histórica da organização dos computadores

Do ponto de vista histórico, o primeiro registro que vale a pena mencionar para o contexto da organização de computadores é o da máquina diferencial de Charles Babbage, em Cambridge. Tratava-se de uma máquina mecânica que realizava operações de soma e subtração com base em método de diferenças finitas que usava polinômio. O mecanismo da máquina realizava um conjunto de instruções (programa) e gerava uma impressão sobre chapa de cobre.

O desafio tecnológico seguinte foi possibilitar a construção de uma máquina que pudesse realizar vários programas diferentes, o que não era possível com a máquina diferencial. Para responder ao desafio surgiu o conceito da **máquina analítica, proposta por Babbage**, organizada com: sistema de armazenamento (memória); sistema de cálculo; e sistema de saída.  O grande avanço da máquina analítica era poder suportar aplicações gerai, com base na leitura de cartões, executava instruções e usando dados armazenado realizar operações sobre eles. A máquina analítica era programável.

Após a máquina analítica de Babbage, várias pesquisas levaram a máquinas calculadoras baseadas em componentes elétricos até a Segunda Grande Guerra. Naquele período surgiram máquinas como a **ENIGMA**, o COLOSSUS. No período imediatamente adjacente surgiu o **ENIAC**, seguido por vários, como EDSAV,  JOHNIAC, ILLIAC, MANIAC, WEIZAC, EDVAC e UNIVAC. **O ENIAC é considerado o primeiro computador eletrônico de uso geral programável.** 

Pode-se afirmar que um novo marco evolutivo foi estabelecido quando John von Neumman saiu do projeto do EDVAC para participar do projeto pessoal e construir o **IAS**, cuja arquitetura está apresentada na Figura 7.

![](Aspose.Words.3b07b864-1baf-478e-9365-4006d396e73e.007.png)

Figura 7 – Arquitetura da máquina de Von Neumman

**O projeto básico do IAS é conhecido como a máquina de Von Neumman, cuja arquitetura é a base de quase todos os computadores digitais.** 

A máquina de Von Neumman possui cinco elementos básicos, conforme apresenta a Figura 7: Entrada; Saída; Unidade Lógica e Aritmética (ULA), na qual originalmente existe um registrador chamado de acumulador (Acc); Memória; e Unidade de Controle (UC). Salientando que se trata de uma máquina digital, as informações são representadas em sequências de bits chamadas palavras. 

Os dispositivos de entrada e saída permitem a comunicação da máquina com o ambiente externo. São operados pela UC e permitem inserir na Unidade Lógica e Aritmética realiza as operações com dados binários. A memória armazena internamente dados e instruções. A UC interpreta as instruções e as executa, comandando os demais componentes. 

Historicamente, a evolução da indústria da computação sofreu um novo salto tecnológico com o advento da invenção do transistor, pela Bell Labs, em meados da década de 1950. Na realidade, desde a máquina de Von Neumman, os saltos da indústria da computação estiveram fortemente atrelados à miniaturização e integração dos componentes eletrônicos, a tal ponto das gerações serem apontadas pela fase dos circuitos: segunda geração – transistores; terceira geração – circuitos integrados; quarta geração – integração em mito grande escala (TANENBAUM, 2007). Não obstante, os elementos constituintes da máquina de Von Neumman têm avançado de forma acelerada.

Mais recentemente (em torno dos últimos 35 anos) a indústria da computação evoluiu bastante, se confundindo em alguns momentos com a indústria de telecomunicações. Não somente essa região cinzenta, difícil de delimitar, entre computação e comunicações, tem se apresentado nos últimos anos. Uma nova conjuntura se estabeleceu em que: é cada vez maior a possibilidade de coletar, processar e armazenar dados não estruturados; é possível distribuir geograficamente as funções de processamento e armazenamento dos dados; a aproximação das linguagens de alto nível cada vez mais da linguagem natural; o surgimento de máquinas que aprendem; ...

Nessa quadra evolutiva, sem dúvida nenhuma, o grande marco foi a popularização dos computadores. A quebra de paradigma foi o surgimento de computadores pessoais (PC, do inglês *Personal Computer*), capazes não somente de entreter, mas também de processar textos, realizar cálculos complexos, enfim executar operações que, antes do fenômeno de miniaturização dos circuitos eletrônicos, só era possível realizar com grandes computadores, manuseado por um grupo seleto da sociedade.

Empresas como IBM tiveram um papel relevante no fenômeno dos PCs. A IBM lançou no início da década de 80 o seu primeiro PC. Em relação ao qual, merece registro, estava embarcado um Sistema Operacional, DOS (do inglês, *Disk Operating System*), da empresa Microsoft.          

Alguns vídeos valem a pena ser assistidos porque retratam de forma interessante a evolução dos computadores. Uma pesquisa na Internet pode levar a um conjunto fantástico de informações. Vídeo[^1] da *History Channel* apresenta o mecanismo de Anticítera. Fascinante porque retrata os primórdios da história não somente da tecnologia, mas, em particular dos computadores.

A utilização do ENIGMA e da atuação de Alan Turing na decifração das mensagens criptografadas dos alemães é muito bem retratada pelo filme O Jogo da Imitação (título no idioma Português)[^2].

O site da TecMundo (<https://www.tecmundo.com.br/>) apresenta um vídeo bastante interessante, curto, mas instrutivo, sobre evolução dos computadores, mas com foco no ENIAC[^3].

Uma perspectiva diferente da usual da história da computação é apresentada no filme Atanasoff o Pai do Computador[^4]. O vídeo credita a John Vincent Atanasoff o título de Pai do Computador, por ele ter usado pioneiramente a lógica binária, o que viria a se configurar uma revolução da computação digital. 

## 5. A máquina IAS (ou Máquina de Von Neumman)

Vamos detalhar mais o funcionamento da máquina de Von Neumman, base de muitos conceitos que aprofundaremos no curso. A Figura 8 apresenta a estrutura detalhada do IAS.

A CPU possui os circuitos lógicos e aritméticos e Acc, já apresentados anteriormente, mais dois registradores, MBR e MQ. Registradores são dispositivos de armazenamento de dados, construídos com componentes eletrônicos digitais elementares e com capacidade típica para armazenar poucas unidades de bits. 

A Unidade de Controle possui, além dos circuitos de controle já apresentados anteriormente, quatro registradores de dados, IBR, IR, PC e MAR.

Antes de discutir o princípio de funcionamento do IAS, vamos definir a função de cada um dos seus elementos.

![](Aspose.Words.3b07b864-1baf-478e-9365-4006d396e73e.008.png)

Figura 8 – Estrutura detalhada do IAS (Máquina de Von Neumman)

**Contador do Programa (PC, *Program Counter*)**: possui uma capacidade de armazenar 12 bits e contém o endereço do próximo par de instruções armazenadas a ser buscado em memória. O contador incrementa automaticamente 1 bit em cada instrução executada. 

**Registrador Temporário da Memória (MBR, *Memory Buffer Register*)**: possui uma capacidade de armazenar 40 bits e contém uma palavra (número ou par de instruções) a ser lida ou escrita na memória.

**Registrador de Endereçamento à Memória (MAR, *Memory Adress Register*):** possui a capacidade de armazenar 12 bits e contém o endereço da palavra (número ou par de instruções) a ser acessada em memória.

**Registrador Temporário de Instruções (IBR, *Instruction Buffer Register*)**: possui a capacidade de armazenar 8 bits e contém o código da instrução (opcode) da instrução da porção mais significativa do par de instruções.

**Registrador de Instruções (IR, *Instruction Register*)**: possui a capacidade de armazenar 8 bits e contém o código da instrução (opcode) que está sendo executada.

**Acumulador (Acc) e Quociente de Multiplicação (MQ, *Multiplier Quotient*)**: possui cada um a capacidade de armazenar 40 bits e são usados para armazenar temporariamente os operandos e o resultado das operações realizadas pelos circuitos lógicos e aritméticos da ULA. Em operações com mais de 40 bits, o Acc armazena os 40 bits mais significativos e o MQ armazena os 40 bits menos significativos. 

A máquina de Von Neumman opera com o **conceito de programa armazenado**. O programa a ser executado juntamente com os dados a serem utilizados são armazenados internamente no computador, na memória. A organização da memória é similar a uma matriz, em que os bits ocupam células, definidas pela linha e coluna. Cada palavra a ser lida ou escrita na memória ocupa uma linha, que define o seu endereço na memória. O endereço define uma posição inequívoca de uma palavra na memória.

A memória do IAS contém 1024 linhas, ou seja, 1024 posições distintas (em decimal, 0 a 1023) identificadas por endereços binários de 12 bits. Cada palavra do IAS possui 40 bits. Ou seja, a memória do IAS é similar a uma matriz de 1024 linhas por 40 colunas, formada por 0s e 1s (bits). 

A Figura 9 ilustra a organização da memória do IAS. As linhas são selecionadas por um circuito digital chamado *decoder* (decodificador), cuja função é mapear um endereço de 12 bits em somente uma linha de endereço. Por exemplo, se o barramento de endereços tiver 0000 0000 0000, somente a palavra da linha 0 será selecionada, 0000 0000 0001, somente a linha 1 será selecionada, e assim por diante.

![](Aspose.Words.3b07b864-1baf-478e-9365-4006d396e73e.009.png)

Figura 9 – Organização da memória do IAS

Como são usados 12 bits para identificar os endereços das palavras armazenadas na memória, considerando que 212=4096 combinações binárias, ainda permanecem combinações de endereço que podem ser usadas para identificar dispositivos de entrada e saída.

As palavras armazenadas na memória do IAS podem representar um número binário ou um par de instruções da UC. A representação dos números está apresentada na Figura 10.

![](Aspose.Words.3b07b864-1baf-478e-9365-4006d396e73e.010.png)

Figura 10 – Palavra de 40 bits do IAS – armazenamento de número

Quando a palavra representa um número binário, o bit 0 (b0), bit menos significativo, armazena o sinal. Os bits b1-b39 representam a grandeza binária.

![](Aspose.Words.3b07b864-1baf-478e-9365-4006d396e73e.011.png)

Figura 11 – Palavra de 40 bits do IAS - armazenamento do par de instruções

Cada instrução possui 20 bits e se subdivide em duas partes, código da instrução, chamado de opcode, com 8 bits; e endereço do dado a ser utilizado pela instrução, com 12 bits. Uma instrução ocupa os 20 primeiros bits, b0-b19, e a outra, os 20 bits seguintes, b20-b39.

Entendendo um pouco o significado do opcode. Cada código de instrução determina uma operação distinta e específica da UC, gerando sinais de controle específicos, que irão determinar as operações de transferência de dados, de desvio condicional e incondicional, de alteração de endereço e dos circuitos lógicos e aritméticos, com as seguintes funções:

**Transferência de dados**: os dados são transferidos entre a memória e os registradores da UCP ou entre registradores.

**Desvio incondicional**: normalmente a UC executa as instruções em sequência na memória, que pode ser alterada pelo uso desse desvio independentemente de qualquer condição, quando a instrução é executada.

**Desvio condicional**: o desvio é executado dependendo de um teste de condição estabelecido pela instrução.

**Lógicas e aritméticas**, como adição, subtração, multiplicação e divisão binárias.

**Alteração de endereços**: instruções para calcular endereços para inseri-los em instruções armazenadas na memória, propiciando flexibilidade de endereçamento dos programas.     

O IAS possuía somente 21 instruções, conforme apresentado na Figura 12.

Algumas considerações sobre a tabela de instruções do IAS:

- Observe cada instrução tem uma representação binária de 8 bits (opcode) que corresponde a uma representação simbólica (por exemplo, 0000 1010, que corresponde a LOAD MQ.
- Cada instrução descreve claramente uma operação específica a ser executada pela UC, por exemplo, ‘transferir o conteúdo do registrador MQ para o acumulador Acc’.
- O conjunto de instruções compreende o set de instruções do IAS – como vimos.

Associando com o modelo da máquina de níveis discutido no início, temos que:

- Os programas escritos utilizando essa representação simbólica, conforme discutido anteriormente, estarão escritos em linguagem de montagem (assembly).
- Os programas armazenados em memória, conforme discutidos anteriormente, estarão escritos em linguagem ISA.
- Os circuitos de controle que executam cada instrução correspondem aos programas no nível da microarquitetura.    

![](Aspose.Words.3b07b864-1baf-478e-9365-4006d396e73e.012.png)

Figura 12 – Tabela de instruções do IAS

Definidos os elementos da IAS detalhada e suas funções; entendidos como as palavras de dados e instruções são armazenadas na memória – conceito de programa armazenado; conhecidas as instruções e o resultado de sua execução; pode-se discutir agora o princípio de funcionamento da arquitetura IAS.

A máquina opera em repetidos ciclos de instrução. Cada ciclo de instrução se subdivide em um subciclo de busca, seguido por um subciclo de execução.

No **subciclo de busca** a palavra que contém a próxima instrução é buscada. O endereço é armazenado no MAR pelo PC. O PC é incrementado para a próxima posição. A palavra do endereço indicado pelo MAR contendo as duas instruções é carregada no MBR. Em seguida as instruções são carregadas no IR e IBR. Ou seja, o subciclo de busca carrega a instrução armazenada na memória que será executada na UC.

No **subciclo de execução** os circuitos de controle interpretam o código da instrução (opcode), gerando os sinais de controle correspondentes. Se a instrução precisa de um dado armazenado na memória o MAR é carregado com os 12 bits da instrução referentes ao endereço do dado. Nesse caso, um novo acesso à memória é necessário. O dado é buscado na memória e então carregado no MBR. A instrução é executada com o dado buscado.

Observe que cada operação requer várias suboperações, dependendo do código da instrução realizada. Essas suboperações correspondem ao que anteriormente descrevemos como o nível da execução na microarquitetura. 

É evidente que o ciclo de instrução requer a necessidade de comunicação entre os elementos da máquina. Por exemplo, no subciclo de busca o endereço armazenado no PC é transferido para o MAR por um barramento interno à UC. A palavra acessada na memória é transferida para o MBR. Essa comunicação é realizada pelos barramentos, que nada mais são do que meios pelos quais trafegam bits de dados, bits de endereço e sinais de controle. Classificam-se assim como: barramentos de dados, barramento de endereços e barramento de controle. É importante salientar que os barramentos não armazenam bits, enquanto memória e registradores são dispositivos de armazenamento.

Prosseguindo na compreensão do princípio de funcionamento da máquina de Von Neumman, vamos simplificar inicialmente que: cada elemento pode escrever ou ler um dado/instrução em um barramento após ser acionado por um sinal de controle R (*Read*) ou W (*Write*); o elemento reconhece automaticamente o sinal *R* ou *W*; a UC não envia o sinal de controle simultaneamente a dois elementos distintos; e que há um sinal de sincronismo na realização das suboperações comandadas pela UC definidas por intervalos regulares de tempo, chamado de clock. Essa é uma simplificação inicial que nos permitirá compreender o conceito de temporização das operações das máquinas. 

A Figura 13 apresenta o comportamento das suboperações no subciclo de busca do ciclo de instrução, desde a leitura do próximo endereço do contador de programa (PC) até o armazenamento da palavra de 40 bits com o par de instruções no Registrador Temporário de Memória (MBR).

![](Aspose.Words.3b07b864-1baf-478e-9365-4006d396e73e.013.png)

Figura 13 – Temporização de parte do subciclo de busca do ciclo de instrução

Em relação ao diagrama de temporização:

- Após o primeiro sinal de CK, o sinal de R é gerado pela UC para o PC, que apresenta os 12 bits de endereço da próxima instrução no barramento interno, e o sinal de W é gerado pela UC para o MAR, que armazena os 12 bits;
- O tempo decorrido entre o início do primeiro pulso de CK e o início do próximo pulso é um período do sinal de clock;
- No próximo período, após o pulso de CK, o sinal de R é gerado pela UC para o MAR, que coloca os 12 bits armazenados no barramento de endereços, para decodificação da linha do endereço a ser acessada;
- No período seguinte de CK, o sinal de R é gerado pela UC para a memória, que coloca os 40 bits do par de instruções no barramento de dados, e o sinal de W é gerado pela UC para a escrita da palavra no MBR.

No exemplo, em três períodos de clock essa sucessão de suboperações é realizada, ou seja, se o período de clock é de 1 ms, terão sido consumidos 3 ms para realizá-las.

Uma forma de representar o comportamento dinâmico da máquina é utilizando um diagrama de estados. Um diagrama de estados, também conhecido por diagrama de transição de estado ou por máquina de estados, permite modelar o comportamento interno de um determinado objeto, subsistema ou sistema global. Representam os possíveis estados de um objeto, as correspondentes transições entre estados, os eventos que fazem desencadear as transições, e as operações (ações e atividades) que são executadas dentro de um estado ou durante uma transição. Os objetos evoluem ao longo do tempo através de um conjunto de estados como resposta a eventos e à passagem de tempo.

Na utilização dos diagramas de estados para representação do comportamento dinâmico da máquina IAS, cada estado representa os dados armazenados nos elementos da arquitetura (Mem, MBR, Acc, MQ, IBR, IR, PC, MAR, decoder) em um determinado instante.

O estado inicial será representado pelos dados dos elementos antes do início da execução da instrução. O estado final será representado pelos dados dos elementos após a execução da instrução.

Os diagramas de estados propiciam representar a transição de estados. Uma transição é uma relação entre dois estados que especifica que um objeto que se encontre no primeiro estado, realizará um conjunto de ações e mudará para o segundo estado quando um determinado evento ocorrer e determinadas condições se verificarem. Um evento é uma ocorrência de um estímulo que pode corresponder a uma transição de estado.

Na utilização dos diagramas de estados para representação do comportamento dinâmico da máquina IAS, cada transição representa a mudança dos dados armazenados nos elementos da arquitetura (Mem, MBR, Acc, MQ, IBR, IR, PC, MAR). Os eventos serão os sinais de controle produzidos pelos circuitos de controle. As transições de estados correspondem ao caminho de dados na execução da operação indicada pela instrução realizada.

Considerando somente a parcela do subciclo de busca do ciclo de instrução representado anteriormente, pode-se apresentar o diagrama de transição de estados equivalente à temporização apresentada na Figura 13 conforme apresentado na Figura 14.

![](Aspose.Words.3b07b864-1baf-478e-9365-4006d396e73e.014.png)

Figura 14 – Diagrama de transição de estados correspondente à temporização de parte do subciclo de busca do ciclo de instrução

[^1]: Acessível em <https://www.youtube.com/watch?v=_95Ml7jhrNg>
[^2]: Acessível em <https://www.youtube.com/watch?v=Q2xrQ5U0Tbo>.
[^3]: Acessível em <https://www.tecmundo.com.br/mercado/135693-historia-eniac-pais-dos-computadores-video.htm>
[^4]: Acessível em <https://www.youtube.com/watch?v=mKGEM_tc7oQ> 

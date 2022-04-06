NOTA DE AULA 3 – DESAFIOS DE ENGENHARIA

PROF. CLAYTON J A SILVA

|||
| - | -: |

1. # **SISTEMAS DE ENGENHARIA e ENGENHARIA DE SISTEMAS**
   1. # **Sistemas de Engenharia**
A teoria geral dos sistemas (TGS) inspira a disciplina de Engenharia de Sistemas. Um sistema pode ser definido como **um complexo conjunto de elementos que interagem entre si**. Entende-se por interações como **as relações que os elementos do sistema estabelecem entre si, tais que o comportamento de um elemento de uma relação é diferente do seu comportamento em outra relação**. Se os comportamentos do elemento em duas relações distintas não são diferentes significa que não há interação e o elemento comporta-se independentemente com respeito às suas relações. 

A verificação da **complexidade** dos objetos requer a análise de três condições. A primeira é verificar **a intensidade da interação entre as “partes”**. Em sistemas, a interação deve ser forte o suficiente. Somente nessa condição será possível tratar conjuntamente as “partes” dos sistemas. A segunda condição é que **as relações que descrevem o comportamento da combinação das “partes” não sejam lineares**. 

Em projetos de sistemas complexos, o resultado global é mais do que o resultado da soma dos seus elementos constituintes, pois as características constitutivas não são percebidas pelo comportamento dos elementos atuando isoladamente. Nesse sentido, elas são novas ou emergentes da integração dos elementos. 

Além das características somativas e constitutivas inerentes aos elementos dos sistemas, a verificação da complexidade deve considerar **como o sistema responde aos distúrbios quando todos os elementos estão integrados**. A perturbação do funcionamento de um elemento pode levar o sistema a um novo estado de equilíbrio. Quanto maior é o **coeficiente de integração** maior será a perturbação do sistema como um todo.

Um dos pilares da argumentação da apresentação da TGS repousa no conceito de isomorfismo. Pelo conceito de isomorfismo, há uma relação biunívoca entre as propriedades dos sistemas sejam elas no campo da física, da química ou da biologia, entre outros. Assim sendo, é possível generalizar a aplicação da teoria a sistemas de natureza distinta, sejam eles organismos vivos, corpos celestiais etc.

Sistemas naturais são tipicamente complexos. Interessa-nos em especial os sistemas tecnológicos, sejam eles produzidos com base empírica ou produzidos com base científica. Como estes são construídos pela engenharia, pode-se intitulá-los como **Sistemas de Engenharia (SE)**.

SE podem ser **estruturados hierarquicamente** de forma que os seus elementos individuais também são sistemas em um nível inferior. Nesse sentido, aplicam-se aos elementos individuais todas as propriedades sistêmicas. Simplificadamente, caracterizam-se dessa maneira os Sistemas de Sistemas (SoS, do inglês *System of Systems*).

Durante o processo de gestão do desenvolvimento de um sistema de engenharia complexo, há que se levar em consideração as questões relacionadas a pluridisciplinaridade, interdisciplinaridade e, especialmente, transdisciplinaridade. O uso da pluridisciplinaridade, estudo de um objeto por várias disciplinas ao mesmo tempo, e da interdisciplinaridade, transferência de métodos de uma disciplina para outra, até recentemente era necessário e suficiente para as soluções dos problemas de engenharia. Não é mais suficiente. Os sistemas complexos demandam o emprego de transdisciplinaridade, que diz respeito àquilo que está ao mesmo tempo entre as disciplinas, através das diferentes disciplinas e além de qualquer disciplina. 

O ciclo de vida dos SE contempla a sua **concepção, construção/instalação/montagem, operação, gerenciamento, suporte logístico, descontrução/desinstalação/desmontagem e encerramento**. Ao emprego conjunto de métodos e técnicas em proveito de qualquer uma dessas atividades dedicada ao SE dá-se o nome de **Engenharia de Sistemas (ES)**. 

O homem quando interfere sobre um SE está sempre ocupado de uma das funções acima elencadas. A Figura 1 apresenta os relacionamentos do homem com os Sistemas de Engenharia. Na figura, a função “construir” generaliza as funções de “instalar” e “montar”, indicando que, além das atividades gerais de construção, podem ser particularizadas para instalação e montagem. De modo similar, interpreta-se as funções de “suportar” e “desconstruir”. As particularidades em especial da função de “suportar” contemplam o pós-desenvolvimento do sistema.

Desde sempre, para desempenhar as funções sobre os sistemas de engenharia, o homem se valeu de métodos e técnicas para entregar o melhor resultado do seu trabalho. A evolução dos sistemas de engenharia tem ampliado a importância do rigor no uso sistematizado de técnicas para assegurar a eficácia do produto resultante do esforço empreendido. A esse conjunto de métodos e técnicas se dá o nome de Engenharia de Sistemas.

Diversas características da ES podem ser elencadas. Integra diversos grupos de disciplinas em torno da organização e do desenvolvimento de estruturas artificiais complexas, ou seja, de sistemas com muitas variáveis que interagem entre si, de maneira não linear, para atingir determinados objetivos. Contempla processos definidos como uma sequência lógica de atividades e decisões que transforma uma necessidade operacional na descrição de parâmetros de desempenho e configurações adequadas de um sistema. Propõe uma abordagem interdisciplinar que acompanha o esforço técnico completo, evolui e verifica um ciclo de vida integrado do conjunto balanceado de soluções de pessoas, produtos e processos de um sistema para satisfazer as necessidades do usuário. 

Segundo o que propõe o Departamento de Defesa (DoD) dos Estados Unidos, nos seus Fundamentos de Engenharia de Sistemas, a ES oferece duas perspectivas: o domínio do conhecimento técnico no qual os sistemas de engenharia operam; e o gerenciamento da engenharia de sistemas, que nos interessa em especial.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.001.png)

Figura 1 – Relacionamento do Homem com Sistemas de Engenharia

Fonte: o Autor
1. # **Análise matemática do comportamento de sistemas**
O comportamento de Sistemas de Engenharia pode ser descrito por meio de formulações matemáticas, importantes não somente como um instrumento para subsidiar a sua concepção, mas também para validar ou não o resultado que entregam. As formulações matemáticas constituem-se um modelo especialmente importante para os sistemas de complexidade mais elevada e levam em consideração diversos conceitos que merecem discussão mais detalhada.  

A modelagem matemática de sistemas de engenharia que se classificam como complexos é importante para a compreensão do seu desenvolvimento de engenharia, consequentemente da gestão de todas as questões que o envolvem, como tempo, custos, requisitos etc. 

Todo sistema de engenharia complexo opera de acordo com regras físicas que refletem o comportamento individual e conjunto dos seus componentes, sobre um sinal de entrada *x(t)* chamado de entrada ou excitação, produzindo um sinal de saída *y(t)*. A figura ilustra essa abordagem.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.002.png)

Figura 2 – Relação de entrada-saída em instalações complexas

Fonte: o Autor

A expressão geral que relaciona a saída *y(t)* com a entrada *x(t)* é dada por

*y(t)=Á[x(t)]		(1)*

onde o símbolo Á representa a transformação ou operador que processa o sinal de excitação *x(t)* para produzir *y(t)*. A descrição saída-entrada enfatiza o comportamento dos terminais do sistema e ignora a construção interna e detalhada.

Normalmente as instalações complexas são excitadas por mais de um sinal de entrada, bem como entregam como saída mais de um sinal. Logo, pode-se admiti-las como sistemas que admitem *n* entradas *xi*, 1≤*i*≤*n*, e *q* saídas *yj*, 1≤*j*≤*q*. Assim a expressão (1) se torna um sistema de equações

*y1(t)=Á[x1t, …,xnt]y2(t)=Á[x1t, …,xnt]…yq(t)=Á[x1t, …,xnt]		(2)*

O sistema (2) pode ser representado vetorialmente

***y(t)=Hx(t)**		(3)*

onde

*x=x1…xn y=y1…yq H=h11…h1n…hq1…hqn		(4)*

Analisando as instalações complexas e seu comportamento enquanto sistema, a primeira categorização que se pode estabelecer é quanto à **natureza dinâmica ou estática** do seu comportamento.

Um sistema é chamado estático ou sem memória se a sua saída em um qualquer instante *t=t0* depende somente das amostras das entradas naquele instante, porém não depende de nenhuma entrada no passado ou futuro. Em qualquer outro caso, os sistemas são ditos dinâmicos ou que têm memória. 

Se as saídas de um sistema em um instante *t=t0* são completamente determinadas pelas amostras de entrada naquele instante em um intervalo de *t0* a *t0*-D*t*, o sistema é dito ter memória de duração D*t*. Se D*t*=0, então o sistema é estático. Se 0<|D*t*|<∞, então o sistema é dito de memória finita. Se D*t*=∞, então o sistema é dito de memória infinita. 

Uma vez caracterizado um sistema qualquer como dinâmico, ele pode ser classificado como **causal ou não causal**. Sistemas causais são aqueles em que a saída em qualquer instante *t=t0* depende somente de entrada passada e presente, mas não depende de entrada futura. Ou seja, D*t>0*. Em tese, os sistemas não causais são fisicamente irrealizáveis, consequentemente as instalações complexas se caracterizam como sistemas dinâmicos causais.

Consequentemente, é direta a classificação das instalações complexas como sistemas dinâmicos, pois sua saída depende da configuração passada de todos os seus meios até o início da operação, além da entrada naquele momento, e causais, pois são fisicamente realizáveis.

Para formalizar melhor o tratamento dos tipos variados de entradas e saídas nos apropriaremos da classificação de Wu (WU, 1994, p. 38), que sugere classificar as entradas e saídas de sistemas de fabricação. 

As saídas são categorizadas em básicas e complementares. As saídas básicas são aquelas que compreendem os bens e serviços providos pela instalação, como materiais, componentes etc., fornecidos a usuários ou outros subsistemas no qual a instalação se insere. São os resultados relacionados diretamente com as funções primárias do sistema. As saídas complementares são as informações que geradas e armazenadas no processo produtivo, bem como aquelas para avaliar o desempenho.

As entradas básicas correspondem aos bens e serviços requeridos para gerar as saídas. Os recursos e informações necessários para converter as entradas básicas nas saídas são as entradas complementares, ou seja, configuram-se como os meios de transformação. Por recursos compreende-se: hardware (plantas e equipamentos), pessoas para executar as tarefas e restrições (instruções, regras, normas etc.). 

Além da classificação como estático ou dinâmico, causal ou não causal, é importante caracterizar as instalações complexas quanto à variação do comportamento da transformação aplicada sobre as entradas em relação ao tempo. Segundo essa abordagem, **os sistemas podem ser classificados como variantes ou invariantes no tempo**.

Um sistema é invariante no tempo se as características da relação saída-entrada não se modificam com o tempo. Supondo que o sinal de entrada seja atrasado D*t* unidades do tempo, e novamente aplicado à entrada, o sinal se torna *x(t-Dt)*. Se as características do sistema não se modificam com o tempo, a saída será dada por *y(t-Dt)*. Ou seja, a resposta do sistema terá o mesmo comportamento para a entrada *x(t)*, exceto que será atrasada de D*t* unidades do tempo.

Pode-se estabelecer matematicamente que um sistema é invariante no tempo se somente se

*x(t)Áy(t) (5)*

implica que

*x(t-Dt)Áy(t-Dt)  (6)*

Considerando que as instalações complexas se configuram como sistemas controlados, por projeto operam de modo que a transformação das entradas para produzir as saídas não sejam modificadas, a menos que efetivamente um outro tipo de transformação seja desejada pela gerência. Portanto, devem se comportar como sistemas invariantes no tempo. 

**O comportamento das instalações complexas também depende da resposta linear ou não que aplica às entradas para produzir as saídas**. Uma das condições necessárias para que um sistema seja considerado complexo é que o resultado da combinação dos seus elementos construtivos em função do comportamento dos elementos isoladamente seja não linear. Logo, por hipótese, em virtude da complexidade das instalações que são objeto do nosso interesse, classificam-se como sistemas não lineares.

Essa consideração propicia uma abordagem matemática diferente das análises anteriores, em que a instalação foi considerada como um sistema cuja análise dependia somente das relações da saída com a entrada, definida por *Á*. A abordagem requer a análise dos estados dos mecanismos de transformação.

Considerando que as instalações complexas se comportam como sistemas dinâmicos, causais, não lineares, podem ser modeladas por um número finito de equações diferenciais ordinárias de primeira ordem (KHALIL, 2002, p. 1)

*s1=f1t,s1,…,sn,x1,…,xps2=f2t,s1,…,sn,x1,…,xp…sn=fnt,s1,…,sn,x1,…,xp  (7)*

onde s1 denota a derivada de *s1* em relação a *t*; *x1*, ..., *xp* representam as variáveis de entrada; *s1, ..., sn* representam as variáveis de estado do sistema, que significa a memória do sistema. Pode-se adotar, para simplificação, uma notação vetorial para o sistema apresentado acima, onde

*s=s1…sn x=x1…xp f(t,s,x)=f1(t,s,x)…fn(t,s,x) **(8**)*

Simplificadamente, o sistema de equações de uma equação diferencial vetorial de primeira ordem s=ft,s,x, chamada de **equação de estados**, de estados ***s***, entradas ***x***.

Associada à equação de estados, as instalações complexas serão modeladas pelas suas *q* saídas, cuja representação vetorial é dada por  y=ht,s,x, chamada **equação de saídas**. As equações tratadas conjuntamente são chamadas de **modelo de espaço de estados, ou simplificadamente modelo de estados da instalação complexa**.

Caso a entrada ***x*** seja definida em função do tempo, o modelo de estados se torna

s=ft,s *(9)*

y=ht, s,x *(10)*

Considerando que as instalações complexas se comportam como sistemas invariantes no tempo, se a entrada ***x*** for definida em função do tempo, o modelo de estados se torna

s=fs (11)

y=ht,s,x (12)

As variáveis de estado proveem informações sobre os sinais internos do sistema. A descrição do espaço de estados permite uma visão mais detalhada do sistema. 

A determinação das saídas de uma instalação complexa, que tipicamente se comportam como sistemas dinâmicos, causais, localmente invariantes no tempo, requerem que se conheça o comportamento do sinal das entradas e o conjunto de condições iniciais. O conjunto de condições iniciais é chamado estado do sistema em *t=t0*.  Ou seja, a definição da saída do sistema para qualquer instante *t³t0* depende do sinal de entrada ***x**(t)* e da quantidade de informação em *t=t0*.

O conceito de estado permite analisar as informações que representam o comportamento das instalações pela sua decomposição em duas partes: uma parte que contém memória; e uma parte sem memória. A informação sobre a memória reflete o conjunto de condições iniciais e é chamada de **estado inicial do sistema**. Portanto, a saída de um sistema em um instante qualquer é uma função do valor da entrada naquele instante e do estado inicial. 

Ainda há que classificar as instalações complexas segundo a propriedade de **estabilidade ou instabilidade do comportamento das suas saídas**. A instabilidade pode conduzir a um comportamento errático e extremo, incompatível com o desejável para os sistemas de engenharia. Os sistemas estáveis são ditos BIBO (do inglês, *bounded input-bounded output*) se somente se toda entrada limitada produzir uma saída limitada (PROAKIS e MANOLAKIS, 1996, p. 69). 

As condições em que a sequência de entradas ***x*** e de saídas ***y*** são limitadas são representadas matematicamente no sentido de que existe somente um número finito de números *Mx* e *My* tal que x≤Mx<∞ e y≤My<∞. Os conceitos de não linearidade e estabilidade estão relacionados. 
1. # **Instalações como Sistema de Sistemas (SoS)**
As instalações complexas podem ser caracterizadas tipicamente como Sistemas de Sistemas (SoS), podendo ser entendidas como a combinação ou arranjo de outros sistemas. 

**Sistemas de Sistemas (SoS) apresentam as seguintes características gerais (KOSSIAKOFF, 2011)**:

- São compostos de sistemas operacionalmente independentes. Seus sistemas constituintes são independentes e apresentam utilidade própria. Se um SoS é desmontado de seus sistemas componentes, cada um deles é capaz de entregar resultados operacionais independentemente dos demais.
- São compostos de sistemas gerencialmente independentes. Muitas vezes os sistemas constituintes são adquiridos separademente e integrados.
- São, em muitas situações, geograficamente distribuídos. Em vários SoS, os sistemas constituintes trocam somente informações entre si.
- Apresentam comportamento emergente, ou seja, apresentam resultados operacionais que não existem em cada sistema constituinte atuando isoladamente, porém que surgem da combinação com os demais.
- Apresentam desenvolvimento evolutivo ao longo do tempo, graças às experiências adquiridas, exclusão e inclusão de novos componentes etc. Um SoS normalmente nunca está completo ou formado.
- São auto-organizados, ou seja, possuem uma estrutura organizacional dinâmica, que responde às mudanças de ambiente e de objetivos.
- Apresentam estrutura dinâmica, respondendo às mudanças do ambiente.

A construção de instalações complexas é obtida a partir da interconexão dos sistemas e componentes de sus estrutura, ou seja, dos seus elementos construtivos. **Duas são as formas básicas de interconexão: em cascata (série) ou em paralelo**.

Na interconexão em cascata de dois sistemas S1 e S2, S1-S2, pode-se representar

y1(n)=*Á*1[x(n)]   *(13)*

onde *y1(n)* é a saída de *S1*, proporcionada pela transformação *Á*1

y(n)=*Á*2[y1(n)]=*Á*2{*Á*2[x(n)]}   *(14)*

onde *y(n)* é a saída de *S2*, proporcionada pela transformação *Á*2.

Observa-se que a combinação dos sistemas S1 e S2, representada matematicamente pelo produto das transformações *Á*1 e *Á*2, resulta em sistema S, tal que 

*Á*=*Á*2*Á*1*, tal que* y(n)=*Á*[x(n)] *(15)*

A respeito da combinação de *S1* e *S2*, sendo ambos invariantes no tempo, pode-se demonstrar que *S* também é invariante no tempo. No entanto, convém destacar que *Á*2*Á*1≠*Á*1*Á*2, pois as instalações complexas se comportam como sistemas não lineares.

Na interconexão em paralelo de dois sistemas S1 e S2, S1//S2, pode-se representar

y1(n)=*Á*1[x(n)]   *(16)*

y2(n)=*Á*2[x(n)]   *(17)*

A saída *y3(n)* da combinação é dada por

y3(n)=y1(n)+y2(n)=*Á*1[x(n)]+*Á*2[x(n)]=(*Á*1+*Á*2)[x(n)]=*Á*[x(n)]      (18)  
1. # **Ciclo de vida de Instalações Complexas**
Segundo Kossiakoff (2011), o ciclo de vida XE "ciclo de vida"  das instalações complexas compreende os estágios dos Sistemas Complexos: Desenvolvimento do Conceito; Desenvolvimento de Engenharia; e Pós-desenvolvimento. Não serão discutidos neste texto os aspectos referentes ao estágio de pós-desenvolvimento. 

A Figura 3 apresenta cada um dos estágios do ciclo de vida. Observar as informações que representam entradas/saídas entre as fases do ciclo de vida.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.003.png)

Figura 3 – Estágios do ciclo de vida de Sistemas de Engenharia

Fonte: adaptado de (KOSSIAKOFF, 2011)

O Desenvolvimento do Conceito compreende três fases: Análise das Necessidades; Exploração do Conceito; e Definição do Conceito.  As saídas de uma fase produzem as entradas da fase subsequente, conforme apresenta a Figura 4.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.004.png)

Figura 4 – Fases do estágio de desenvolvimento do conceito

Fonte: o Autor

Na fase de Análise das Necessidades são elencadas as razões para a implantação da instalação. Durante a fase, há uma avaliação crítica das razões pelas quais as necessidades atuais e futuras não podem ser atendidas pelos sistemas em disponíveis, bem como se as tecnologias disponíveis não são capazes de suportar o aumento das necessidades. A saída desta fase é uma descrição das capacidades e resultados alcançados com a implantação do SE.

Na fase de Exploração do Conceito são respondidas as questões de desempenho exigido para o novo sistema e se existe pelo menos uma abordagem para alcançar o desempenho dentro de um custo adequado. A saída desta fase contempla a versão inicial do conjunto de requisitos de desempenho. A fase produz, ainda, como saída um conjunto de possíveis conceitos, os quais devem ser comprovadamente viáveis.

**Entende-se por requisitos como o conjunto de atributos que devem ser atendidos por um produto ou sistema, que possam ser mensurados (o que pressupõe métricas e indicadores) ou constatados, e refletem expectativas das partes interessadas, como clientes, usuários etc., bem como restrições e condições de engenharia.** 

Serão métodos aplicáveis durante esta fase: métodos de suporte XE "suporte"  à decisão, como Delphi, Análise Hierárquica; e *brainstorming*.

Na fase de Definição do Conceito é selecionado o conceito de melhor custo-benefício. Deve ser respondida a questão: quais são as características chaves de um conceito da instalação complexa que proporciona o melhor equilíbrio entre capacidade XE "capacidade" , operacionalidade e custos? A saída deve apresentar o conjunto de requisitos funcionais que descrevem o quê a instalação deve fazer, com que desempenho e qual é o conceito selecionado.

A Figura 5 sintetiza as informações tratadas em cada fase do desenvolvimento do conceito.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.005.png)

Figura 5 – Informações tratadas durante as fases do estágio de desenvolvimento do conceito.

Fonte: adapatado de (KOSSIAKOFF, 2011)

O Desenvolvimento de Engenharia compreende três fases: Desenvolvimento Avançado; Design de Engenharia; e Integração e Avaliação. As saídas de uma fase produzem as entradas da fase subsequente, conforme apresenta a 

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.006.png)

Figura 6 - Fases do estágio de desenvolvimento da engenharia

Fonte: o Autor

Na fase de Desenvolvimento Avançado busca-se alcançar dois propósitos: (i) identificação e redução dos riscos; (ii) desenvolvimento das especificações. Considerando esses propósitos, a fase deve apresentar como saída as especificações técnicas refinadas, validadas, isto é, com todos os riscos identificados, avaliados e sua mitigação levantada.

Na fase de Design de Engenharia é detalhado o design de engenharia. Nessa fase, a engenharia se debruçará sobre o detalhamento dos produtos, verificando especialmente a possibilidade de integrá-los, ou seja, se atendem aos requisitos de compatibilidade XE "compatibilidade" ; e se cumprem fielmente os requisitos especificados. Para isso a engenharia poderá realizar os testes julgados necessários.

Na fase de Integração e Avaliação os produtos detalhados na fase precedente devem ser “montados” de modo a formarem um conjunto funcional. Para isso, a engenharia deverá simular em software ou testar a operação conjunta dos produtos. A Figura 8 apresenta uma visão detalhada do ciclo de vida de SE.

A Figura 7 sintetiza as informações tratadas em cada fase do desenvolvimento da engenharia.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.005.png)

Figura 7 - Informações tratadas durante as fases do estágio de desenvolvimento da engenharia.

Fonte: adaptado de (KOSSIAKOFF, 2011)

A Figura 8 ilustra o exemplo do ciclo de vida de um Sistema de Telecomunicações, tipicamente um Sistema de Engenharia complexo.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.007.png)

Figura 8 – Exemplo da visão geral detalhada do ciclo de vida de Sistemas de Telecomunicações

Fonte: o Autor


1. # **Espiral de estágios do ciclo de vida**
O **método da Engenharia de Sistemas** pode ser aplicado **às fases do ciclo de vida das instalações complexas** em quatro passos. Em cada fase, são cumpridos os quatro passos iterativos, produzindo saídas que alimentam a fase subsequente e retroalimentam a fase anterior, refinando os resultados de saída até que seja alcançado o amadurecimento do modelo. 

Os passos de execução de cada fase são os seguintes: Análise de Requisitos; Definição Funcional; Definição Física; Validação do Design.

A **Análise de Requisitos** trabalha em proveito da **definição clara e precisa do problema**. Em cada nova fase do desenvolvimento, o início do ciclo se inicia com três entradas principais, que devem ser definidas na fase anterior, as quais concorrem para a organização e interpretação das informações:

- O modelo do sistema, que identifica e descreve todas as escolhas feitas e validadas na fase precedente;
- Requisitos (ou especificações) que definem o *design*, desempenho e aspectos de compatibilidade XE "compatibilidade" , incluindo os refinamentos e revisões introduzidas nas fases precedentes;
- Progresso específico a ser alcançado durante a próxima fase, incluindo a identificação de todos os dados de design técnico, produtos de hardware/software e resultados de testes.

A clareza, correção e quantificação dos objetivos XE "objetivos"  depende da interação com os *stakeholders* do projeto.

A **Definição Funcional** sempre deve preceder o design físico ou do produto. As funções **caracterizam as ações e tarefas que o sistema e seus componentes devem executar,** representando a tradução dos requisitos. Na definição funcional é necessário organizar as funções em blocos (partições) e definir as interconexões e as interfaces funcionais. Em cada fase, a equipe do projeto decomporá o conjunto de requisitos e funções XE "funções"  a um nível hierárquico inferior do sistema em relação à fase precedente. A seleção das funções apropriadas levará em conta a análise de compromisso (*trade-off*) entre alternativas levantadas.

A **Definição Física** é a tradução dos requisitos funcionais nos requisitos físicos, **proporcionando todos os elementos construtivos do sistema, incluindo hardware e software, bem como nas interfaces de integração entre eles**. No estágio de desenvolvimento do conceito, quando todo conjunto físico o sistema está ainda no nível funcional, é necessário visualizar ou imaginar o conjunto de elementos físicos de modo a assegurar que exequibilidade da solução. Algumas alternativas físicas de solução são levantadas e, como no caso do design funcional, a decisão pela melhor alternativa é tomada com base no *trade-off*.

Em cada fase do desenvolvimento há uma seleção das alternativas que detalham mais as soluções da fase precedente e que levam em consideração o risco da implementação. Em relação à implementação física, o risco significa performance deficiente, baixa confiabilidade XE "confiabilidade" , custo elevado e entrega incompatível com o cronograma. Todas as alternativas são consideradas; um conjunto de avaliações é estabelecido; e os critérios são priorizados e quantificados.

Na Definição Física está implícita a definição e controle das interfaces, internas e externas. Cada elemento físico adicionado deve ser conectado àquele do qual recebe entradas ou entrega saídas. Evidentemente, cada interface XE "interface"  refinada requer o refinamento das interfaces dos níveis acima.

Na Validação do Design é necessário criar um modelo do ambiente (modelo de testes) com o qual o sistema deve interagir para verificar se produz o desempenho requerido. O modelo do ambiente é refinado em cada fase, de modo que ele deve ser altamente realístico nas fases mais avançadas do desenvolvimento.

São fundamentais os testes e análises dos dados sobre a resposta do sistema ao ambiente. Algumas regras básicas serão consideradas:

- Todas as características críticas devem ser estressadas acima dos seus limites;
- Todos os elementos chaves devem ser instrumentalizados para permitir a localização exata dos desvios de comportamento;
- Deve ser elaborado um Plano de Testes;
- Todas as limitações dos testes devem ser estabelecidas.

A Figura 9 ilustra a visão conceitual da espiral de desenvolvimento das fases, evidenciando o método iterativo de aproximação da solução e o refinamento das definições da fase precedente em função XE "função"  das definições da atual.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.008.png)

Figura 9 – Visão conceitual da espiral de desenvolvimento da ES

Fonte: adaptado de (KOSSIAKOFF, 2011)


1. # **Gestão da Engenharia de Sistemas**
A **Gestão da Engenharia de Sistemas (GES)** tem por objetivo definir os processos de engenharia de sistemas a serem utilizados no projeto do sistema propriamente dito, estabelecendo, para isso, as tarefas, os métodos a serem empregados e os recursos humanos necessários de Sistemas de Engenharia, particularmente das instalações complexas.

A Figura 10 apresenta como se insere a gestão da engenharia de sistemas no contexto do gerenciamento do projeto de Sistemas de Engenharia.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.009.png)

Figura 10 – Engenharia de Sistemas X Gerenciamento do Projeto

Fonte: o Autor

O planejamento da GES iniciará com a identificação dos itens que estão sendo desenvolvidos, os prazos de entrega, as necessidades de integração, os requisitos de instalação, as verificações e testes a serem executados no recebimento e os requisitos para suporte XE "suporte"  da operação.

A próxima etapa da GES será a realização do Planejamento Técnico e Controle. Nessa fase são planejadas as ações a serem desempenhadas pela engenharia de sistemas ao longo do Projeto Básico. O principal objetivo dessa fase é o estabelecimento das atividades necessárias para a realização do controle de todas as demais atividades dentro do projeto de engenharia de sistemas. 

O planejamento da GES prosseguirá com a definição da Gestão de Áreas Específicas da Engenharia de Sistemas. Esta etapa tem a finalidade de orientar as atividades que se destinam a atender as áreas específicas relativas às atividades da engenharia de sistemas a serem abordadas na execução do projeto:

\- Gerência da Configuração, que tem como objetivo identificar os itens de configuração XE "configuração"  do projeto, mantendo sua integridade XE "integridade"  e controlando sistematicamente as mudanças;

\- Garantia da Qualidade, que tem como objetivo planejar a execução de auditorias de produtos e processos e o planejamento do acompanhamento dos responsáveis por essas atividades;

\- Utilização de Software, que tem por objetivo relacionar os requisitos dos softwares que serão desenvolvidos bem como os testes que deverão ser realizados para validá-los;

\- Transição de Sistema, que tem como objetivo estabelecer métodos para avaliar o atendimento, por parte dos fornecedores de equipamentos e serviços XE "serviços" , das condições estabelecidas para recebimento por parte da organização que se encarregará de gerenciar o pós-desenvolvimento;

\- Integração dos elementos do sistema, que tem como objetivo estabelecer as ações para assegurar o maior nível possível de interoperabilidade XE "interoperabilidade"  entre os elementos das instalações complexas, bem como delas com outros sistemas, de modo a obter o aproveitamento máximo dos sistemas legados.

Avulta em importância a integração dos elementos das instalações, uma vez que, por se tratar de sistema complexo, as interações desempenham um papel fundamental no desempenho global. Um possível processo de governança da interoperabilidade de sistemas como as instalações complexas está apresentado na Figura 11.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.010.png)

` `Figura 11 – Processo de governança XE "governança"  da interoperabilidade XE "interoperabilidade"  de instalações complexas

Fonte: o Autor

Na etapa de teste e avaliação da interoperabilidade XE "interoperabilidade" , deve ser certificado o atendimento dos requisitos de interoperabilidade no sistema construído e identificado o nível de interoperabilidade do Sistema.

O **nível de maturidade da instalação quanto à interoperabilidade**, XE "interoperabilidade"  pode ser definido conforme apresenta a Tabela 1.

Tabela 1 – Nível de Maturidade da interoperabilidade XE "interoperabilidade"  de Instalações Complexas

|**Nível**|**Descrição**|
| - | - |
|<p>Nível 4</p><p></p>|Sistema interoperável por empreendimento (ambiente global). Sistema conectado eletronicamente em rede. Todos os dados, informações, domínios, sistemas e aplicativos integrantes são compartilhados. É permitido o acesso a múltiplos usuários, simultaneamente.|
|<p>Nível 3</p><p></p>|Sistema interoperável por domínio (ambiente integrado). Sistema conectado eletronicamente em rede, capaz de transferir e receber informações entre sistemas e aplicativos agrupados por domínio. Modelos de dados, regras de negócios e processos são estabelecidos por domínio. É permitida a interação direta entre bases de dados de diferentes domínios. É permitido o acesso a múltiplos usuários.|
|<p>Nível 2</p><p></p>|Sistema funcional (ambiente  distribuído). Sistema conectado eletronicamente em rede, capaz de transferir e receber informações entre sistemas e aplicativos que possuam modelos de dados diferentes, independentemente de suas respectivas localizações na rede.|
|<p>Nível  1</p><p></p>|Sistema conectado (ponto a ponto). Sistema conectado eletronicamente com outro sistema, de forma bilateral, capaz de transferir e receber informações.|
|<p>Nível 0</p><p></p>|Sistema isolado (ambiente manual). O Sistema não possui ou não permite conexões eletrônicas com outros sistemas. A transferência de informações ocorre somente por meio de ação humana, utilizando-se mídia transportável.|
Os testes realizados também proporcionam as condições para identificar necessidades de mudança e coordenar ações para a melhoria da interoperabilidade XE "interoperabilidade" , quer seja revisitando os padrões XE "padrões" , as interfaces e os seus respectivos requisitos, funcionais e não funcionais.

Na validação da interoperabilidade XE "interoperabilidade" , em cada estágio do ciclo de vida XE "ciclo de vida"  da Engenharia de Sistemas, deve ser avaliada a interoperabilidade sob os aspectos técnicos, de configuração XE "configuração"  e de utilização, identificando possíveis oportunidades de melhoria.

A governança XE "governança"  da interoperabilidade XE "interoperabilidade"  não se aterá às questões tecnológicas. Concentrar-se-á também nas questões abaixo:

- ` `Interoperabilidade Técnica – Assegurando-se dos padrões XE "padrões"  de comunicação, transporte, armazenamento e representação de informações, através do envolvimento de um conjunto de organizações; 
- ` `Interoperabilidade de Processos – Assegurando-se de procedimentos operacionais padrões XE "padrões"  (POP) identificados, mapeados e continuamente melhorados;
- ` `Interoperabilidade de Treinamento – Assegurando-se que as pessoas envolvidas tenham o treinamento adequado para o uso do sistema;
- ` `Interoperabilidade Semântica – Assegurando-se da semântica das informações de diferentes origens, é solucionada através de ferramentas comuns de representação da informação, como classificação e ontologias; 
- ` `Interoperabilidade política/humana – Assegurando-se que as informações sejam disseminadas e a decisão de torná-las disponíveis, buscando minimizar a falta de compreensão ou de entendimento entre as pessoas a respeito dos temas envolvidos; 
- ` `Interoperabilidade legal – Assegurando-se que o sistema esteja de acordo com o que prescrevem as exigências e disposições legais;
- ` `Interoperabilidade Organizacional – Envolve a edição de processo das organizações que tenham objetivos XE "objetivos"  e metas que envolvam a cooperação do grupo.

1. # **ENGENHARIA DE REQUISITOS**
   1. # **Classificação de Requisitos**
Os requisitos das instalações complexas podem ser classificados conforme definido a seguir:

Objetivos ou requisitos operacionais – referem-se ao propósito do sistema.

Capacidades – o conjunto de capacidades descreverá e comunicará o fim alcançado após a implantação do sistema, portanto estes tipos de requisitos são amplos e descrevem os objetivos XE "objetivos"  globais do sistema.

**Requisitos Funcionais – referem-se àquilo que o sistema deve fazer. São orientados à ação e devem descrever as tarefas e atividades que o sistema executa durante sua operação, de forma a serem alcançados os objetivos XE "objetivos"  operacionais. Em cada estágio são refinados pelos subsistemas, componentes subcomponentes e partes.**

**Requisitos Não Funcionais ou de performance – referem-se a quão bem o sistema deverá atender aos requisitos e afetar o ambiente em que se insere. São na maioria das vezes objetivos XE "objetivos"  e quantitativos.** 

Especificações de *design* de engenharia – referem-se a características e atributos dos elementos físicos do sistema. Podem incluir aparência, características gerais, como volume, peso, material de confecção etc.

A Figura 12 apresenta a classificação que se buscará seguir na definição dos requisitos não funcionais.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.011.png)

Figura 12 – Classificação dos requisitos

Fonte: adaptado de <<desconhecido>>

Um aspecto central do projeto de sistemas complexos, em particular das instalações complexas, é o processamento dos requisitos.
1. # **Processamento dos requisitos**
O processamento de requisitos é formado por um conjunto de atividades destinado a derivar, validar e manter o documento de requisitos do sistema. A figura apresenta as informações de entrada e saída do processo.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.012.png)

Figura 13 - Modelo E/S do processo de engenharia de requisitos

Fonte: o Autor

As informações dos sistemas existentes são aquelas associadas a requisitos de sistemas existentes sendo substituídos, sistemas de *benchmarking* e sistemas com os quais o sistema desenvolvido deverá interagir.

Os padrões XE "padrões"  organizacionais são aqueles utilizados pela organização que usufruirá do sistema e associados a práticas de desenvolvimento, qualidade, gerenciamento e outros.

Informações de domínio são informações gerais quanto ao domínio em que o sistema será implantado.

Regulamentações externas de segurança XE "segurança" , saúde, governamental ou ambiental aplicáveis ao novo sistema serão entradas do processo.

Requisitos identificados são as capacidades, os requisitos funcionais e não funcionais levantados pelo processo de benchmarking, nas entrevistas com os *stakeholders*, na coleta das informações de domínio, da satisfação aos padrões XE "padrões"  organizacionais e da subordinação ás regulamentações.

As especificações de design são aquelas do nível físico decorrentes da tradução dos requisitos e da aplicação direta das entradas do processo.

O modelo do sistema é também obtido das entradas, dos requisitos e das especificações de *design* e é fundamental à avaliação e testes do sistema desenvolvido.

O processamento dos requisitos contempla as seguintes atividades: (i) elicitação dos requisitos; (ii) análise e negociação; (iii) documentação; (iv) validação; (v) gerenciamento.

A Figura 14 apresenta as atividades do processo de engenharia de requisitos. 

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.013.png)

Figura 14 – Atividades do processo de engenharia de requisitos

Fonte: o Autor

O processo não é linear. Como as suas atividades estão inseridas no processo de engenharia de sistemas, será implementado de forma iterativa, em cada um dos estágios de Desenvolvimento do Conceito e Desenvolvimento de Engenharia, por refinamentos sucessivos do nível de sistema até o nível de partes.  
1. # **Elicitação dos requisitos**
Contempla o levantamento de todos os requisitos (capacidades, funcionais, não funcionais e especificações de *design*) da instalação complexa, dos seus subsistemas, componentes, subcomponentes e partes. Caracterizada a estrutura hierárquica da instalação, deve ser contemplado tanto o nível dos subcomponentes no topo da árvore (mais complexos) como aquele em que se fará a tradução dos requisitos de mais alto nível para as especificações de *design* de engenharia.

A definição dos requisitos funcionais pela equipe de projeto deve buscar descrevê-los em completude, ou seja definindo todos os serviços XE "serviços"  com consistência, ou seja requisitos que não sejam contraditórios.

A elicitação de requisitos está associada ao processo de descoberta e análise do problema a ser resolvido, detectando o grau de importância de cada *stakeholder* e suas reais necessidades associadas ao problema, além de entender as restrições impostas ao sistema. As quatro dimensões consideradas são o domínio do problema, compreensão dos detalhes do problema; da aplicação, compreensão geral da área onde o sistema será aplicado; do negócio, compreensão como o sistema interage, afeta e contribui para os objetivos XE "objetivos"  de negócio da organização; e das necessidades e restrições, compreensão dos processos de trabalho que o sistema suportará e das regras a que estará sujeito. 

A Figura 15 apresenta o processo de elicitação. As atividades básicas são ajuste dos objetivos XE "objetivos"  da organização, aquisição de conhecimentos básicos do sistema, entendimento da organização e coletas dos requisitos.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.014.png)

Figura 15 – Elicitação de requisitos

Fonte: o Autor

1. # **Análise e Negociação de Requisitos**
A análise dos requisitos compreende as atividades básicas de verificação das necessidades, verificação de consistência e integridade XE "integridade" , e verificação de viabilidade. A Figura 16 apresenta a etapa de análise e negociação.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.015.png)

Figura 16 – Análise e negociação de requisitos

Fonte: o Autor

Além das técnicas tradicionais e genéricas de elicitação, como entrevistas, questionário, análise de documentação existente, e de técnicas de dinâmica de grupo, como brainstorming, podem ser utilizadas técnicas de prototipação, métodos de modelagem XE "modelagem"  baseados em cenários, técnicas dirigida a modelos. 
1. # **Validação de Requisitos**
O objetivo da atividade de validação de requisitos é estabelecer que os requisitos estejam definidos de forma correta, consistente, íntegra e precisa. A atividade envolve os *stakeholders*, os engenheiros de requisitos e os engenheiros de *design*, mediante a análise dos requisitos documentados, buscando problemas, omissões e ambiguidades.

Os instrumentos que podem ser utilizados para validação dos requisitos são: as revisões da documentação de requisitos; validação dos modelos de requisitos, que devem ser apresentados na forma de modelos de fluxos de dados; modelos de objetos; modelos de eventos; e modelos de dados; prototipação; e testes de requisitos – a dificuldade de definir e propor testes pode ser um indicativo de problema na indicação dos requisitos.
1. # **SISTEMAS SOCIOTÉCNICOS**
Explorando o status de atores e fatores sociais em relação aos sistemas de engenharia, pelo menos três diferentes tipos de sistemas podem ser distinguidos (OTTENS, 2006): 

(1) sistemas de engenharia que executam sua função **sem atores e sem instituições sociais** executarem uma subfunção dentro dos sistemas; 

(2) sistemas de engenharia em que **alguns atores executam subfunções, porém as instituições sócias não possuem papel**; 

(3) sistemas de engenharia que necessitam de **algum ator e alguma infraestrutura institucional/social para executar suas funções**. Nesse tipo configura-se a **infraestrutura sociotécnica**.

Estudos propõem que surge um problema fundamental quando um sistema do tipo 2 e, especialmente, do tipo 3 quando comparados com sistemas do primeiro tipo, pois são sistemas que consistem, além dos componentes tecnológicos, dos elementos que conceitualmente são usados no âmbito das ciências naturais, para os quais uma descrição completamente detalhada, empregando o vocabulário de intencionalidade, é considerada necessária.

O foco original da Engenharia de Sistemas era a complexidade da tarefa de projeto. A complexidade das tarefas de projeto de engenharia tem aumentado na atualidade e pode-se identificar duas formas nas quais ela deve ser distinguida: quanto a abordagem de desenvolvimento do projeto; e quanto ao objeto do projeto – ou seja, ao resultado a ser entregue. A Figura 17 mostra uma representação esquemática destas duas formas, apresentadas como duas dimensões.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.016.png)

Figura 17 – Domínio de projeto de sistemas sociotécnicos. 

Fonte: OTTENS, 2006.

A primeira complexidade está no objeto do projeto. Engenheiros tanto lidam com projetos de relativamente simples artefatos, como pontes, quanto lidam com objetos que têm se tornado cada vez mais complexos nos últimos anos, envolvendo mais e mais disciplinas, **eventualmente envolvendo disciplinas além do domínio da engenharia**.

A segunda perspectiva da complexidade tem surgido no crescimento da complexidade da abordagem do projeto. Inicialmente, a tarefa de projetos estava limitada para o projeto do objeto propriamente dito e estava considerado concluído tão logo as especificações fossem alcançadas. Com o crescimento das tarefas multidisciplinares, a organização do processo do trabalho se tornou um elemento da abordagem do projeto, que, uma vez ignorado, poderia impedir a conclusão plena da atividade de projeto. Adicionalmente, **com o advento do desenvolvimento tecnológico, reconheceu-se substancialmente que as responsabilidades do engenheiro não acabavam com a criação do artefato, mas também deveria endereçar a produção, operação, manutenção e disponibilização do artefato**.

Um dos conceitos básicos da ES repousa na norma *IEEE Standard for Application and Management of the Systems Engineering Process* (IEEE Std 1220-1998), considerada como o ponto de partida para o questionamento quanto às características particulares dos sistemas sociotécnicos tratados como sistemas de engenharia. Segundo a norma IEEE Std 1220-1998, “sistema” denota a totalidade consistindo do produto de um empreendimento e dos processos diretamente associados ao desenvolvimento, fabricação, manutenção e disponibilização daquele produto, bem como do treinamento das pessoas para alcançarem as competências para conduzi-los. OTTENS aponta ambiguidade na definição do conceito de sistemas formulando questões, que não respondidas pela norma. Primeiro, o padrão constroi o conceito de sistemas sem ambiguidade e com coerência? O padrão pode ser aplicado à categoria especial de sistemas sociotécnicos? Representam questões especialmente urgentes uma vez que nos dias atuais a importância do contexto sociotécnico para funcionamento de artefatos técnicos é amplamente reconhecida e a engenharia está fortemente focada em soluções de nível sistêmico.

Há alguns autores que entendem o padrão IEEE 1220-1998 apresentando algumas deficiências que afetam várias aplicações da teoria de sistemas. O padrão é vago com respeito a como caracterizar vários ‘elementos’ ou ‘componentes’ de um sistema e as relações entre eles. É vago também com respeito ao que é considerado como parte do sistema e o que é considerado como parte do ambiente. O padrão adota a perspectiva de que os sistemas de engenharia são, geralmente, sistemas homem-máquina: sistemas são ditos ser ‘compostos de hardware, software e/ou pessoas’, e estes ‘elementos’ dos sistemas podem ser analisados como novamente como (sub)sistemas consistindo dos mesmos tipos de elementos. Mas ao mesmo tempo, os ‘blocos de construção’ de um sistema são ditos ser ou ‘produtos’ ou ‘processos’. Não está claro no texto do padrão como a relação entre os elementos e os blocos de construção deve ser vista.

As relações entre os vários elementos, além disso, não são especificadas além de como sendo ‘interfaces’. Ainda, o envolvimento do ‘elemento humano’ é concebido em termos das pessoas individualmente, ‘requerida para desenvolver, produzir, testar, distribuir, operar, suportar ou dispor os produtos dos elementos do sistema. No conceito de um sistema (como um produto do projeto) como usado na IEEE Std 1220-1998, humanos são levados em conta exclusivamente como cumprindo subfunções dentro do sistema. A relação com os elementos técnicos é encontrada em uma interface homem-máquina.

O conceito de sistema da norma ignora completamente **a dimensão social e o envolvimento humano, que toma a forma de regulamentos, leis, procedimentos, padrões e tantos outros**. Sem esses elementos regulatórios estabelecidos, seria impossível para sistemas de grande escala, como infraestruturas, funcionarem. Como exatamente tais elementos regulatórios devem ser considerados não é óbvio. O padrão incorpora uma conceituação de sistemas que trata aspectos sociais como pertencentes ao ambiente do sistema, estabelecendo restrições para as atividades do projeto e do gerenciamento. Esta abordagem provavelmente produz dificuldades tão logo uma visão mais ampla em tipos de produtos que um processo de desenvolvimento e fabricação seja dirigido.

A teoria de sistemas usualmente leva em consideração os elementos técnicos (como hardware e software) e atores (desempenhando papeis como subfunções do sistema). Para conceituar sistemas sociotécnicos alguns pesquisadores introduzem um terceiro tipo de elemento e adota uma visão mais próxima das possíveis relações entre todos os elementos. **O elemento a ser considerado nos sistemas sociotécnicos é o elemento ‘social’.** 

A distinção entre os elementos técnicos e os elementos sociais em vários sistemas tecnológicos não é nova. Uma razão para estabelecer a distinção está nas diferentes leis sob as quais esses elementos estão sujeitos e na diferença de natureza entre eles. Ambos os atores (como campo físico) e elementos técnicos estão sujeitos às leis da natureza, mas elementos sociais e o comportamento dos atores referem-se às intenções e princípios norteadores mais complexos como regras sociais.

De uma perspectiva da Engenharia de Sistemas (objetivada na modelagem de sistemas) a introdução dos elementos sociais separada dos atores e aspectos físicos parece ser promissora. Em grandes sistemas tecnológicos a inclusão desses elementos reflete a necessidade de (re)projeto não somente pelo lado técnico dos sistemas, mas também pelos aspectos sociais. O projeto de elementos sociais, entretanto, repousa amplamente no escopo das práticas de engenharia correntes. Enquanto sistemas de engenharia já possuem multidisciplinaridade entre as disciplinas da engenharia, a inclusão proposta de um elemento social necessita de uma abordagem em que também as disciplinas não técnicas sejam envolvidas.

Se o sistema é conceituado usando estes elementos sociais depois elementos técnicos e atores de um quadro simples do sistema pode ser desenhado com os diferentes elementos e relações. A Figura 18 apresenta essas relações.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.017.png) 

Figura 18 – Relações entre os elementos dos sistemas sociotécnicos. 

Fonte: OTTENS, 2006.

Os atores representam primariamente as pessoas, consideradas como indivíduos isolados. As organizações, em segundo nível, também são consideradas atores. Assim sendo, as pessoas jurídicas também são consideradas como atores.

Quanto aos elementos sociais, um conjunto de elementos não técnicos influenciam as decisões concernentes ao projeto da estrutura física. Outros elementos são as organizações policiais de governo observando como lidar com leis e regulamentos. Esses elementos sociais não são fáceis de compreender.

As relações podem ser técnica-técnica, técnica-ator, ator-ator, ator-social, social-social e técnica social.

Redes sociotécnicas são sistemas distribuídos que utilizam recursos humanos e tecnológicos para atender às necessidades essenciais, sociais, comerciais, industriais, militares e econômicas (SIQUEIRA, 2014). No contexto da disciplina de Projeto de Instalações Complexas, o entendimento será de que as instalações complexas tratadas serão aquelas que satisfazem a tal definição.
1. # **REDES SOCIOTÉCNICAS**
As instalações complexas, enquanto redes sociotécnicas, caracterizam-se pela interligação de quatro principais entidades:

- Fornecedores – provedores de serviços para a rede;
- Consumidores – usuários de serviços prestados pela rede;
- Distribuidores – concentradores e processadores de serviços na rede;
- Transportadores – transmissores de serviços através da rede, com o objetivo de atender as necessidades ou demandas de serviços essenciais de uma determinada região ou empreendimento.

`    `As instalações complexas assim definidas se configuram redes de complexidades e dimensão elevadas, comportamento dinâmico variável e incerto, múltiplas interdependências, gerando elevados impactos durante falhas. Adicionalmente, estão sujeitas a falhas endógenas ou exógenas, intencionais ou acidentais.

Embora se constituam como redes sociotécnicas, as instalações complexas nem sempre se desdobram por regiões geográficas amplas, além das distâncias locais. Não contemplam as redes de âmbito do perímetro urbano ou maiores, para as quais pode haver correlação do desempenho e funcionamento com variáveis geográficas.

Os símbolos que usaremos para indicação das entidades nas instalações complexas estão apresentados na Tabela 2.

Tabela 2 – Símbolo de entidades nos diagrama unifilares das instalações complexas

|**Componente**|**Fornecedor**|**Consumidor**|**Distribuidor**|**Transportador**|
| - | - | - | - | - |
|**Símbolo**|![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.018.png)|![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.019.png)|![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.020.png)|![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.021.png)|
As instalações de energia elétrica podem ser caracterizadas segundo suas entidades da seguinte forma:

- Fornecedores – geradores de energia elétrica;
- Consumidores – usuários de energia fornecida pela rede;
- Distribuidores – Subestações de transmissão e distribuição da rede;
- Transportadores – linhas de transmissão interligando as subestações.

No setor elétrico é comum distinguir-se entre instalações transmissoras e distribuidoras, de acordo com o nível de tensão, segundo regras definidas pelo órgão regulador. Redes elétricas de potências formam os maiores e mais complexos sistemas interligados. Tipicamente, o seccionamento dos elementos ocorre pela abertura de disjuntores ou o gatilhamento de válvulas eletrônicas tiristorizadas em cada elemento, sob o comando local ou remoto, manual e automático, interrompendo o fornecimento, consumo, distribuição ou transporte de energia. A Figura 19 apresenta um exemplo.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.022.png)

Figura 19 – Exemplo de instalação elétrica – visão das entidades

Fonte: o Autor

A Figura 19 representa um modelo possível de uma instalação elétrica complexa, que pode contemplar nenhum ou mais do que cada uma das entidades apresentadas. As entidades apresentadas constituem-se ativos das instalações elétricas complexas, os quais podem pertencer a uma empresa ou a empresas diferentes. 

No exemplo, os elementos possuem capacidades de transmissão e geração limitadas, indicadas entre parênteses, referenciada a um valor de base para fluxo de energia (por exemplo, 100 MW por unidade – pu – de capacidade). No exemplo, admite-se que os geradores produzem o total de 6 pu de capacidade de transmissão e que a carda demanda 4 pu. A linha de transmissão 1 suporta encaminhar 3 pu, a linha 2 suporta encaminhar 4 pu e a linha 3 suporta encaminhar 2 pu. 

Os parâmetros do modelo podem ser definidos em função da interrupção ou não de funcionamento dos elementos, daqueles que devem operar ou não como reserva, entre outras considerações.

Instalações de energia elétrica estão sujeitas a ameaças, logo devem possuir sistemas de controle capazes de desligar cada componente em caso de anormalidade interna ou bloquear subsistemas afetados por ameaças externas. 

As instalações de distribuição de água potável coletam e tratam água oriundas de fontes naturais ou servidas e a distribuem para uso residencial ou industrial, através de aquedutos, interligando quatro tipos principais de entidades:

- Fornecedores – aquíferos, mananciais e estações de tratamento de água;
- Consumidores – usuários e absorvedores de águas fornecidas pela rede;
- Distribuidores – reservatórios e estações de distribuição da água na rede;
- Transportadores – aquedutos interligando os reservatórios e estações.

Nas redes, o seccionamento dos elementos ocorre pelo fechamento de válvulas e comportas, com acionamento manual, elétrico, pneumático ou hidráulico, sob comando local ou remoto, interrompendo o fornecimento, consumo, distribuição e transporte de água. As estruturas são bastante similares aos sistemas elétricos. A Figura 20 apresenta um exemplo.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.023.png)

Figura 20 – Exemplo de instalação de distribuição de água – visão das entidades

Fonte: o Autor

A Figura 20 ilustra uma instalação de distribuição de água similar à instalação elétrica da Figura 19. O sistema proporciona a exploração de dois mananciais servidos por estações de bombeamento e reservatórios, interligados por três aquedutos que distribuem água entre reservatórios, bem como ao consumidor, que é servido por um reservatório.

A capacidade de fluxo de água nos aquedutos, estações de bombeamento, mananciais, reservatórios e consumidores podem ser especificados por unidade (pu) de um valor de base para o fluxo de água (por exemplo, 1.000 m3/seg).

Similarmente ao modelo de instalação elétrica, o exemplo ilustra uma situação em que os dois mananciais propiciam 6 pu de capacidade de água para suprir via aquedutos que possuem 8 pu de capacidade armazenamento as necessidades de consumo de 4 pu de água do usuário. Na instalação estão distribuídos reservatórios que possuem a capacidade de distribuir a água entre as entidades do sistema. 

As instalações de distribuição de distribuição de gás combustível, com gasodutos e estações armazenamento, compressão e descompressão interligando fornecedores e consumidores de gás, para uso comercial, industrial e residencial se configuram instalações complexas, interligando quatro tipos principais de entidades:

- Fornecedores – produtores, extratores e fontes de gás natural ou derivados gasosos de petróleo;
- Consumidores – utilizadores de gás;
- Distribuidores – reservatórios e estações de distribuição de gás;
- Transportadores – gasodutos interligando os reservatórios e estações.

Nas redes, o seccionamento dos elementos ocorre pelo fechamento de válvulas e comportas, com acionamento manual, elétrico, pneumático ou hidráulico, sob comando local ou remoto, interrompendo o fornecimento, consumo, distribuição e transporte de gás. As estruturas são bastante similares aos sistemas elétricos e hidráulicos. A Figura 21 apresenta um exemplo.

![](Aspose.Words.ad7430c9-8dfb-4dc6-b9a7-7d4a2554f8ac.024.png)

Figura 21 - Exemplo de instalação de distribuição de gás – visão das entidades

Fonte: o Autor

A Figura 21 ilustra uma instalação de distribuição de gás. O sistema dispõe de duas fontes de óleo com capacidade de produção 6 pu (valor de base de 100 m3/seg). As demais capacidades podem ser analisadas de modo similar às instalações elétricas e hidráulicas. 


# **REFERÊNCIAS**
CHIAVENATO, I. **Introdução à Teoria Geral da Administração**. [S.l.]: Campus, 2000.

CURRY, G. L.; FELDMAN, R. M. **Manufacturing Systems - Modeling and Analysing**. Second. ed. [S.l.]: Springer, 2011.

DIAS, F. **Gerenciamento dos Riscos em Projetos**. Rio de Janeiro: Elsevier, 2015.

KEELING, R.; BRANCO, R. H. F. **Gestão de Projetos:** uma abordagem global. 3ª. ed. São Paulo: Saraiva, 2014.

KHALIL, H. K. **Nonlinear Systems**. 3th. ed. New Jersey: Prentice Hall, 2002.

KOSSIAKOFF, A. **Systems engineering:** principles and practice. 2nd. ed. New Jersey: John Wiley & Sons, 2011.

LAFETÁ, F. G. Gestão de Projetos: da antiguidade às tendências do XXI. **ENEGEP**, 2014.

MENZEL C., M. R. J. The IDEF Family of Languages. In: BERNUS P., M. K. . S. G. **Handbook on Architectures of Information Systems**. Berlin: [s.n.], 1998. Cap. 10, p. 209-241.

NATIONAL INSTITUTE OF STANDARDS AND TECHNOLOGY - NIST. INTEGRATION DEFINITION FOR FUNCTION MODELING (IDEF0). **FEDERAL INFORMATION PROCESSING STANDARDS PUBLICATION - FIPS PUB 183**, Gaithersburg, 21 December 1993.

OTTENS, M. E. A. Modelling infrastructures as socio-technical systems. **International journal of critical infrastructures**, v. v. 2, n. 2-3, p. p. 133-145, 2006.

PROAKIS, J. G.; MANOLAKIS, D. G. **Digital Signal Processing**. 3th. ed. New Jersey: Prentice-Hall, 1996.

PROJECT MANAGEMENT INSTITUTE - PMI. **Um Guia de Gerenciamento de Projetos. Guia PMBOK. 5ª edição.** [S.l.]: PMI, 2014.

SIQUEIRA, I. P. **Redes de Infraestruturas Críticas:** Análise de Desempenho e Riscos nos Setores de Energia, Petróleo, Gás, Água, Finanças, Logística e Comunicações. Rio de Janeiro: Editora Interciência, 2014.

U.S. DEPARTMENTE OF DEFENSE. https://dodcio.defense.gov/library/dod-architecture-framework/. **The DoDAF Architecture Framework Version 2.02**. Acesso em: 19 dez. 2019.

VALLE, A. B. **Fundamentos do gerenciamento de projetos**. 2ª edição. ed. Rio de Janeiro: FGV, 2010.

VARGAS, R. V.; C., A. **MICROSOFT PROJECT 2013 Standard, Professional & Pro para Office 365**. [S.l.]: Brasport, 2013.

WU, B. **Manufacturing System Design and Analysis**. 2th. ed. London: Chapman & Hall, 1994.

XAVIER, C. M. D. S. **Gerenciamento de Projetos**. [S.l.]: Saraiva, 2009.



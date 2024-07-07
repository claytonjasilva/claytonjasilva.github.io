# Capítulo 7: Análise Quantitativa de Processos

> É melhor estar aproximadamente certo do que precisamente errado.  
> Warren Buffett (1930–)

A análise qualitativa é uma ferramenta valiosa para obter insights sistemáticos sobre um processo. No entanto, os resultados obtidos da análise qualitativa às vezes não são detalhados o suficiente para fornecer uma base sólida para a tomada de decisões. Pense no dono do processo de aluguel de equipamentos da BuildIT preparando-se para argumentar com o COO da empresa que cada engenheiro de obras deve receber um tablet com acesso sem fio para consultar os catálogos dos fornecedores e fazer solicitações de aluguel de qualquer local de construção. O dono do processo será solicitado a substanciar esse investimento em termos quantitativos e, especificamente, estimar quanto tempo e dinheiro seriam economizados com esse investimento. Para fazer tais estimativas, precisamos ir além da análise qualitativa.

Este capítulo apresenta uma série de técnicas para analisar processos de negócios quantitativamente, em termos de medidas de desempenho como tempo de ciclo, tempo total de espera e custo. Especificamente, o capítulo se concentra em três técnicas: análise de fluxo, análise de filas e simulação. Todas essas técnicas têm em comum o fato de permitirem calcular medidas de desempenho de um processo, dadas as informações sobre o desempenho das atividades e recursos individuais no processo.

## 7.1 Medidas de Desempenho

### 7.1.1 Dimensões de Desempenho do Processo

Qualquer empresa gostaria idealmente de tornar seus processos mais rápidos, baratos e melhores. Essa observação simples já nos leva a identificar três dimensões de desempenho do processo: tempo, custo e qualidade. Uma quarta dimensão entra na equação quando consideramos a questão da mudança. Um processo pode ter um desempenho extremamente bom em circunstâncias normais, mas depois ter um desempenho ruim em outras circunstâncias que talvez sejam igualmente ou mais importantes. Por exemplo, van der Aalst et al. relatam a história de um processo de negócios para o tratamento de sinistros em uma seguradora australiana. Em condições normais, o processo estava funcionando para a total satisfação de todos os gerentes envolvidos (incluindo o dono do processo). No entanto, a Austrália é propensa a tempestades e algumas dessas tempestades causam danos em série a diferentes tipos de propriedades (por exemplo, casas e carros), levando a inúmeras reivindicações em um curto período de tempo. Os agentes do call center e os trabalhadores do backoffice envolvidos no processo ficaram sobrecarregados com as reivindicações e o desempenho do processo degradou-se—precisamente no momento em que os clientes estavam mais sensíveis a esse desempenho. O que era necessário não era tornar o processo mais rápido, barato ou melhor durante períodos normais. Era necessário tornar o processo mais flexível para mudanças súbitas na quantidade de reivindicações. Essa observação nos leva a identificar uma quarta dimensão do desempenho do processo, a saber, flexibilidade.

Cada uma das quatro dimensões de desempenho mencionadas acima (tempo, custo, qualidade e flexibilidade) pode ser refinada em várias medidas de desempenho do processo (também chamadas de indicadores-chave de desempenho ou KPIs). Uma medida de desempenho do processo é uma quantidade que pode ser determinada inequivocamente para um dado processo de negócios—assumindo, é claro, que os dados para calcular essa medida de desempenho estão disponíveis. Por exemplo, existem vários tipos de custo, como custo de produção, custo de entrega ou custo de recursos humanos. Cada um desses tipos de custo pode ser refinado em medidas de desempenho específicas. Para isso, é necessário selecionar uma função de agregação, como contagem, média, variância, percentil, mínimo, máximo ou razões dessas funções de agregação. Um exemplo específico de uma medida de desempenho de custo é o custo médio de entrega por item.

Abaixo, discutimos brevemente cada uma das quatro dimensões e como elas são tipicamente refinadas em medidas de desempenho específicas.

#### Tempo
Frequentemente, a primeira dimensão de desempenho que vem à mente ao analisar processos é o tempo. Especificamente, uma medida de desempenho muito comum para processos é o tempo de ciclo (também chamado de tempo de processamento). O tempo de ciclo é o tempo que leva para lidar com um caso do início ao fim. Embora geralmente o objetivo de um esforço de redesenho seja reduzir o tempo de ciclo, há muitas maneiras diferentes de especificar esse objetivo. Por exemplo, pode-se visar uma redução do tempo médio de ciclo ou do tempo máximo de ciclo. Também é possível focar na capacidade de atender aos tempos de ciclo acordados com um cliente em tempo de execução. Outra maneira de olhar para o tempo de ciclo é focar na sua variação, que é notavelmente abordada em abordagens como o Six Sigma. Outros aspectos da dimensão tempo entram em cena quando consideramos os componentes do tempo de ciclo, a saber:

1. Tempo de processamento (também chamado de tempo de serviço): o tempo que os recursos (por exemplo, participantes do processo ou aplicativos de software invocados pelo processo) gastam realmente lidando com o caso.
2. Tempo de espera: o tempo que um caso passa em modo ocioso. O tempo de espera inclui tempo de fila—tempo de espera devido ao fato de não haver recursos disponíveis para lidar com o caso—e outros tempos de espera, por exemplo, porque a sincronização deve ocorrer com outro processo ou porque se espera uma entrada de um cliente ou de outro ator externo.

#### Custo
Outra dimensão comum de desempenho ao analisar e redesenhar um processo de negócios tem uma natureza financeira. Embora nos refiramos ao custo aqui, também seria possível enfatizar o faturamento, rendimento ou receita. Obviamente, um aumento de rendimento pode ter o mesmo efeito no lucro de uma organização que uma diminuição de custo. No entanto, o redesenho de processos é mais frequentemente associado à redução de custos. Existem diferentes perspectivas sobre o custo. Em primeiro lugar, é possível distinguir entre custos fixos e variáveis. Custos fixos são custos gerais que (quase) não são afetados pela intensidade do processamento. Custos fixos típicos resultam do uso de infraestrutura e da manutenção de sistemas de informação. O custo variável é positivamente correlacionado com alguma quantidade variável, como o nível de vendas, o número de bens adquiridos, o número de novas contratações, etc. Um conceito de custo que está intimamente relacionado à produtividade é o custo operacional. Os custos operacionais podem estar diretamente relacionados aos resultados de um processo de negócios. Uma parte substancial do custo operacional geralmente é o custo de mão-de-obra, o custo relacionado aos recursos humanos na produção de um bem ou na prestação de um serviço. Dentro dos esforços de redesenho de processos, é muito comum focar na redução do custo operacional, particularmente o custo de mão-de-obra. A automação de tarefas é frequentemente vista como uma alternativa para a mão-de-obra. Obviamente, embora a automação possa reduzir o custo de mão-de-obra, ela pode causar custos incidentais envolvidos no desenvolvimento do respectivo aplicativo e custos fixos de manutenção ao longo da vida útil do aplicativo.

#### Qualidade
A qualidade de um processo de negócios pode ser vista de pelo menos dois ângulos diferentes: do lado do cliente e do lado do participante do processo. Isso também é conhecido como a distinção entre qualidade externa e interna. A qualidade externa pode ser medida como a satisfação do cliente com o produto ou com o processo. A satisfação com o produto pode ser expressa como o grau em que um cliente sente que as especificações ou expectativas são atendidas pelo produto entregue. Por outro lado, a satisfação do cliente com o processo diz respeito à maneira como ele é executado. Uma questão típica é a quantidade, relevância, qualidade e pontualidade das informações que um cliente recebe durante a execução sobre o progresso realizado. Por outro lado, a qualidade interna de um processo de negócios está relacionada ao ponto de vista dos participantes do processo. Preocupações típicas de qualidade interna são: o nível de controle que um participante do processo sente sobre o trabalho realizado, o nível de variação experimentado e se trabalhar dentro do contexto do processo de negócios é considerado desafiador. É interessante notar que existem várias relações diretas entre a qualidade e outras dimensões. Por exemplo, a qualidade do processo externo é frequentemente medida em termos de tempo, por exemplo, o tempo médio de ciclo ou a porcentagem de casos em que os prazos são perdidos. Neste livro, fazemos a escolha de que sempre que uma medida de desempenho se refere ao tempo, ela é classificada na dimensão tempo, mesmo que a medida também esteja relacionada à qualidade.

#### Flexibilidade
O critério menos mencionado para medir o efeito de uma medida de redesenho é a flexibilidade de um processo de negócios. Flexibilidade pode ser definida em termos gerais como a capacidade de reagir a mudanças. Essas mudanças podem envolver várias partes do processo de negócios, por exemplo:
- A capacidade dos recursos de executar diferentes tarefas dentro de um contexto de processo de negócios.
- A capacidade de um processo de negócios como um todo de lidar com vários casos e cargas de trabalho variáveis.
- A capacidade da gestão responsável de alterar as regras de estrutura e alocação utilizadas.
- A capacidade da organização de alterar a estrutura e a capacidade de resposta do processo de negócios aos desejos do mercado e dos parceiros de negócios.

Outra maneira de abordar a dimensão de desempenho da flexibilidade é distinguir entre flexibilidade em tempo de execução e flexibilidade em tempo de construção. A flexibilidade em tempo de execução diz respeito às oportunidades de lidar com mudanças e variações durante a execução de um processo de negócios específico. A flexibilidade em tempo de construção diz respeito à possibilidade de alterar a estrutura do processo de negócios. É cada vez mais importante distinguir a flexibilidade de um processo de negócios das outras dimensões.

**Exemplo 7.1**
Considere o seguinte cenário:
Um restaurante perdeu recentemente muitos clientes devido ao mau atendimento ao cliente. A equipe de gestão decidiu abordar esse problema, concentrando-se inicialmente na entrega das refeições. A equipe coletou dados perguntando aos clientes sobre a rapidez com que gostariam de receber suas refeições e o que consideravam uma espera aceitável. Os dados sugeriram que metade dos clientes preferiria que suas refeições fossem servidas em 15 minutos ou menos. Todos os clientes concordaram que um tempo de espera de 30 minutos ou mais é inaceitável.

Nesse cenário, parece que a dimensão de desempenho mais relevante é o tempo, especificamente o tempo de serviço. Um objetivo que se destila do cenário é evitar completamente tempos de espera acima de 30 minutos. Em outras palavras, a porcentagem de clientes servidos em menos de 30 minutos deve ser o mais próximo possível de 100%. Assim, "porcentagem de clientes servidos em menos de 30 minutos" é uma medida de desempenho relevante. Outro limite mencionado no cenário é 15 minutos. Há uma escolha entre ter um tempo médio de entrega de refeição abaixo de 15 minutos ou, novamente, minimizar o número de refeições servidas acima de 15 minutos. Em outras palavras, há uma escolha entre duas medidas de desempenho: "tempo médio de entrega da refeição" ou "porcentagem de clientes servidos em 15 minutos".

Este exemplo ilustra que a definição de medidas de desempenho está intimamente ligada à definição de objetivos de desempenho. Nesse sentido, um método possível para derivar medidas de desempenho para um dado processo é o seguinte:

1. Formular os objetivos de desempenho do processo em um nível alto, na forma de um estado desejável que o processo deve idealmente alcançar, por exemplo, "os clientes devem ser servidos em menos de 30 minutos".
2. Para cada objetivo de desempenho, identificar a(s) dimensão(ões) de desempenho relevante(s) e a(s) função(ões) de agregação e, a partir daí, definir uma ou mais medidas de desempenho para o objetivo em questão, por exemplo, "porcentagem de clientes servidos em menos de 30 minutos". Vamos chamar essa medida de ST30.
3. Definir um objetivo mais refinado com base nessa medida de desempenho, como ST30 ≥ 99%.

Durante as fases de redesenho e implementação, um passo adicional possível é anexar um prazo ao objetivo de desempenho refinado. Por exemplo, pode-se afirmar que o objetivo de desempenho acima deve ser alcançado em 12 meses. Um objetivo de desempenho com um prazo associado geralmente é chamado de meta de desempenho. No final do prazo escolhido, pode-se avaliar em que medida o processo redesenhado atingiu suas metas.

**Exercício 7.1**
Considere o cenário da agência de viagens descrito no Exercício 6.6 (p. 208).
1. Quais processos de negócios a agência de viagens deve melhorar?
2. Para cada um dos processos de negócios que você identificou acima, indique qual medida de desempenho a agência de viagens deve melhorar.

### 7.1.2 Balanced Scorecard

Outra maneira de classificar e definir medidas de desempenho é dada pelo conceito de Balanced Scorecard. O Balanced Scorecard é essencialmente uma abordagem para alinhar as metas e medidas que são usadas para avaliar o trabalho dos gerentes. O principal argumento por trás do Balanced Scorecard é que não é suficiente usar métricas financeiras, como Retorno sobre o Investimento (ROI) ou margem operacional, ao avaliar gerentes. Um foco extremo nessas medidas é em detrimento da empresa a longo prazo, pois negligencia fontes fundamentais de valor, a saber, o cliente, a estrutura interna da empresa e os funcionários da empresa. Assim, o Balanced Scorecard é baseado em quatro dimensões de desempenho—cada uma cobrindo uma preocupação fundamental de uma empresa:
- Medidas Financeiras, por exemplo, fluxo de caixa, para garantir a sobrevivência, margem operacional para garantir a satisfação dos acionistas.
- Medidas de Negócios Internos, por exemplo, tempo de ciclo, para garantir eficiência e baixos níveis de estoque no caso de organizações de manufatura.
- Medidas de Inovação e Aprendizado, por exemplo, liderança tecnológica, para garantir vantagem competitiva e atrair e reter talentos.
- Medidas de Cliente, por exemplo, entrega pontual, para garantir a satisfação e fidelidade do cliente.

A maneira clássica de implementar o Balanced Scorecard segue um procedimento de cima para baixo. Começa com um scorecard corporativo, seguido por scorecards departamentais com ênfase em metas e métricas diretamente afetadas pelo departamento específico. Medidas relacionadas ao processo tendem a aparecer apenas no nível dos chefes de unidades ou seus subordinados. Esta implementação clássica do Balanced Scorecard superestima a divisão funcional das organizações, não prestando atenção suficiente à visão dos processos. Empresas que implementam o Balanced Scorecard em conjunto com BPM precisam considerar cuidadosamente a relação entre as medidas no Balanced Scorecard—tanto no nível corporativo, no nível departamental e nos níveis inferiores—e as medidas de desempenho associadas aos seus processos de negócios. Uma maneira de garantir esse alinhamento é implementar um Balanced Scorecard estruturado de acordo com a arquitetura de processos da empresa (cf. Capítulo 2). Este Balanced Scorecard orientado por processos pode coexistir com um Balanced Scorecard tradicionalmente associado à arquitetura funcional da empresa.

Em qualquer caso, observamos que o Balanced Scorecard é uma ferramenta útil para identificar medidas de desempenho do processo em toda a organização. Isso contrasta com o método baseado em dimensões de desempenho descrito na Seção 7.1.1, que é voltado para identificar medidas de desempenho para um dado processo. Assim, este último método e o Balanced Scorecard são complementares.

### 7.1.3 Modelos de Referência e Benchmarks da Indústria

Modelos de processos de referência—mencionados anteriormente no Capítulo 2—fornecem outra base para identificar medidas de desempenho do processo. Por exemplo, no Supply Chain Operations Reference Model (SCOR), processos e atividades na hierarquia de processos estão vinculados a medidas de desempenho. Um exemplo de medida de desempenho no SCOR é o "Tempo do Ciclo da Ordem de Compra", definido como "a quantidade média de tempo (por exemplo, dias) entre o momento em que uma intenção de compra é declarada e o momento em que a ordem de compra correspondente é recebida pelo fornecedor relevante". Isso é basicamente o tempo médio de ciclo de um fragmento de um processo de compra-a-pagamento. Outras medidas no SCOR lidam com gestão de estoque ou eventos de falta de estoque. Além de definir medidas de desempenho, o SCOR também fornece valores de referência para cada medida que permitem que uma empresa se compare com pares dentro de seu setor e determine se estão no top 10%, top 50% ou bottom 50% em relação a outras empresas em seu setor.

Outro framework relevante mencionado no Capítulo 2 é o Process Classification Framework (PCF) da APQC. O objetivo principal deste framework é fornecer uma decomposição padronizada de processos em uma organização, juntamente com nomes e definições padronizados para esses processos. Como complemento ao PCF, a APQC também desenvolveu um conjunto de medidas de desempenho para os processos incluídos no PCF. Esta também é uma ferramenta potencialmente útil para a identificação de medidas de desempenho.

Outro exemplo de um modelo de referência que fornece um catálogo de medidas de desempenho de processos é a IT Infrastructure Library—ITIL. As medidas de desempenho do ITIL incluem, por exemplo, "Incidentes devido a Falta de Capacidade", definido como "número de incidentes ocorrendo devido a capacidade insuficiente de serviço ou componente". Esta medida de desempenho está vinculada à área de processo de Gestão de Capacidade do ITIL, que inclui vários processos inter-relacionados para gerenciar a capacidade dos processos de TI ou componentes de um sistema de TI.

Outros modelos de referência que fornecem catálogos de medidas de desempenho de processos incluem DCOR (Design Chain Operations Reference model) e eTOM (Enhanced Telecom Operations Map).

## 7.2 Análise de Fluxo

A análise de fluxo é uma família de técnicas que nos permite estimar o desempenho geral de um processo, dado algum conhecimento sobre o desempenho de suas atividades. Por exemplo, usando a análise de fluxo, podemos calcular o tempo médio de ciclo de um processo inteiro se soubermos o tempo médio de ciclo de cada atividade. Também podemos usar a análise de fluxo para calcular o custo médio de uma instância do processo, conhecendo o custo por execução de cada atividade, ou calcular a taxa de erro de um processo, dado a taxa de erro de cada atividade.

Para entender o escopo e a aplicabilidade da análise de fluxo, começamos mostrando como a análise de fluxo pode ser usada para calcular o tempo médio de ciclo de um processo. Como uma abreviação, usaremos o termo tempo de ciclo para nos referirmos ao tempo médio de ciclo no restante deste capítulo.

### 7.2.1 Calculando o Tempo de Ciclo Usando Análise de Fluxo

Lembramos que o tempo de ciclo de um processo é o tempo médio que leva entre o momento em que o processo começa e o momento em que ele é concluído. Por extensão, dizemos que o tempo de ciclo de uma atividade é o tempo médio que leva entre o momento em que a atividade está pronta para ser executada e o momento em que ela é concluída.

Para entender como a análise de fluxo funciona, é útil começar com um exemplo de um processo puramente sequencial, como na Fig. 7.1. O tempo de ciclo de cada atividade é indicado entre parênteses. Como as duas atividades neste processo são realizadas uma após a outra, podemos concluir intuitivamente que o tempo de ciclo deste processo é 20 + 10 = 30. Mais geralmente, é bastante intuitivo que o tempo de ciclo de um fragmento puramente sequencial de um processo é a soma dos tempos de ciclo das atividades no fragmento.

Quando um modelo de processo ou um fragmento de um modelo contém gateways, o tempo de ciclo não é mais a soma dos tempos de ciclo das atividades. Consideremos o exemplo mostrado na Fig. 7.2. Aqui, é claro que o tempo de ciclo do processo não é 40 (a soma dos tempos de ciclo das atividades). De fato, em uma instância dada deste processo, ou a atividade B ou a atividade C é realizada. Se B for realizada, o tempo de ciclo é 30, enquanto se C for realizada, o tempo de ciclo é 20.

Se o tempo de ciclo deste processo é mais próximo de 20 ou de 30 depende de com que frequência cada ramo do XOR-split é tomado. Por exemplo, se em 50% das instâncias o ramo superior for tomado e nos restantes 50% das instâncias o ramo inferior for tomado, o tempo de ciclo geral do processo é 25. No entanto, se o ramo superior for tomado apenas 10% das vezes e o ramo inferior for tomado 90% das vezes, o tempo de ciclo deve ser intuitivamente mais próximo de 30. Geralmente falando, o tempo de ciclo do fragmento do processo entre o XOR-split e o XOR-join é a média ponderada dos tempos de ciclo dos ramos intermediários. Assim, se o ramo inferior tem uma frequência de 10% e o ramo superior tem uma frequência de 90%, o tempo de ciclo do fragmento entre o XOR-split e o XOR-join é: 0,1 × 10 + 0,9 × 20 = 19. Precisamos então adicionar o tempo de ciclo da atividade A (que é sempre executada) para obter o tempo total de ciclo, ou seja, 10 + 19 = 29.

No restante deste capítulo, usaremos o termo probabilidade de ramificação para denotar a frequência com que um dado ramo de um gateway de decisão é tomado.

Em termos mais gerais, o tempo de ciclo de um fragmento de um modelo de processo com a estrutura mostrada na Fig. 7.3 é:

$$
CT = \sum_{i=1}^{n} p_i \times T_i \quad (7.1)
$$

Na Fig. 7.3, p1, p2, etc. são as probabilidades de ramificação. Cada “nuvem” representa um fragmento que tem um único fluxo de entrada e um único fluxo de saída. Os tempos de ciclo desses fragmentos aninhados são T1, T2, etc. Daqui em diante, este tipo de fragmento é chamado de bloco XOR.

Vamos agora considerar o caso em que gateways paralelos estão envolvidos, conforme ilustrado na Fig. 7.4.

Novamente, podemos observar que o tempo de ciclo deste processo não pode ser 40 (a soma dos tempos de ciclo das atividades). Em vez disso, como as tarefas B e C são executadas em paralelo, seu tempo de ciclo combinado é determinado pela atividade mais lenta das duas, ou seja, por C. Assim, o tempo de ciclo do processo mostrado na Fig. 7.4 é 10 + 20 = 30. Mais geralmente, o tempo de ciclo de um bloco AND, como o mostrado na Fig. 7.5, é:

$$
CT = \text{Max}(T_1, T_2, \ldots, T_n) \quad (7.2)
$$

**Exemplo 7.2**
Consideremos o modelo de processo de solicitação de crédito na Fig. 7.6 e os tempos de ciclo das atividades dados na Tabela 7.1. Vamos também supor que em 60% dos casos o crédito é concedido.

Para calcular o tempo de ciclo deste processo, primeiro notamos que o tempo de ciclo do bloco AND é de 3 dias (atividade mais lenta). Em seguida, calculamos o tempo de ciclo do fragmento entre o bloco XOR usando (7.1), ou seja, 0,6 × 1 + 0,4 × 2 = 1,4 dias. O tempo total de ciclo é então 1 + 3 + 3 + 1,4 = 8,4 dias.

Neste exemplo, o tempo de ciclo é em grande parte determinado pela tarefa “Verificar fontes de renda”, que é a que determina o tempo de ciclo do fragmento entre o AND-split e o AND-join. Nesse caso, dizemos que essa tarefa faz parte do caminho crítico do processo. O caminho crítico de um processo é a sequência de tarefas que determina o tempo de ciclo do processo, significando que o tempo de ciclo de qualquer instância do processo nunca é inferior à soma dos tempos de ciclo dessa sequência de tarefas. Ao otimizar um processo com relação ao tempo de ciclo, deve-se focar a atenção nas tarefas que pertencem ao caminho crítico.

**Exercício 7.2**
Considere o modelo de processo dado na Fig. 3.8 (p. 73). Calcule o tempo de ciclo sob as seguintes suposições:
- Cada tarefa no processo leva em média 1 hora.
- Em 40% dos casos, o pedido contém apenas produtos de Amsterdã.
- Em 40% dos casos, ele contém apenas produtos de Hamburgo.
- Em 20% dos casos, ele contém produtos de ambos os armazéns.

Compare o modelo de processo na Fig. 3.8 (p. 73) com o da Fig. 3.10 (p. 74). Esta comparação lhe dá uma ideia de como calcular tempos de ciclo para modelos de processos com gateways OR?

Outro caso recorrente que vale a pena considerar é o caso em que um fragmento de um processo pode ser repetido várias vezes. Esta situação é chamada de retrabalho e é ilustrada na Fig. 7.7. Aqui, os números decimais anexados aos arcos denotam a probabilidade de que o arco correspondente será tomado. Com certeza, podemos dizer que a atividade B será executada uma vez. A seguir, podemos dizer que a atividade B pode ser executada duas vezes com uma probabilidade de 20% (ou seja, 0,2), que é a probabilidade de voltar do gateway XOR-split para o gateway XOR-join. Se continuarmos esse raciocínio, descobrimos que a probabilidade de a tarefa B ser executada três vezes é 0,2 × 0,2 = 0,04, e mais geralmente, a probabilidade de a tarefa B ser executada N vezes é 0,2^N.

Se somarmos os tempos de ciclo nos casos em que B é executado uma vez, duas vezes, três vezes, etc., obtemos a seguinte soma Σ(∞
i=0 0.2^i). Essencialmente, este é o número de vezes que se espera que B seja executado. Se substituirmos 0,2 por uma variável r, esta soma é uma série conhecida, chamada de série geométrica, e pode-se mostrar que esta série é equivalente a 1/(1 − r). Portanto, o número médio de vezes que se espera que B seja executado é 1/(1 − 0,2) = 1,25. Agora, se multiplicarmos este número esperado de instâncias de B pelo tempo de ciclo da atividade B, obtemos 1,25 × 20 = 25. Assim, o tempo total de ciclo do processo na Fig. 7.7 é 10 + 25 = 35.

Mais geralmente, o tempo de ciclo do fragmento com a estrutura mostrada na Fig. 7.8 é:

$$
CT = \frac{T}{1 - r} \quad (7.3)
$$

Neste fórmula, o parâmetro r é chamado de probabilidade de retrabalho, ou seja, a probabilidade de que o fragmento dentro do ciclo precise ser retrabalhado. Daqui em diante, esse tipo de bloco será chamado de bloco de retrabalho, ou mais geralmente, de bloco de repetição.

Em alguns cenários, uma atividade é retrabalhada no máximo uma vez. Esta situação seria modelada conforme mostrado na Fig. 7.9. Usando o que vimos, já podemos calcular o tempo de ciclo deste exemplo. Primeiro, observamos que o tempo de ciclo do fragmento entre o XOR-split e o XOR-join é 0,2 × 20 + 0,8 × 0 = 4. Aqui, o zero vem do fato de que um dos ramos entre o XOR-split e o XOR-join está vazio e, portanto, não contribui para o tempo de ciclo. Para completar isso, temos que adicionar o tempo de ciclo das atividades precedentes, dando-nos um tempo total de ciclo de 34.

**Exemplo 7.3**
Consideremos o modelo de processo de solicitação de crédito na Fig. 7.10 e os tempos de ciclo previamente dados na Tabela 7.1. Vamos também supor que em 20% dos casos a solicitação está incompleta e em 60% dos casos o crédito é concedido.

O tempo de ciclo do bloco de retrabalho é 10/(1 − 0,2) = 1,25 dias. O tempo de ciclo do bloco AND é de 3 dias e o do bloco XOR é de 1,4 dias, conforme discutido no Exemplo 7.2. Assim, o tempo total de ciclo é 1,25 + 3 + 3 + 1,4 = 8,65 dias.

### 7.2.2 Eficiência do Tempo de Ciclo

Como mencionado anteriormente, o tempo de ciclo de uma atividade ou de um processo pode ser dividido em tempo de espera e tempo de processamento. O tempo de espera é a parte do tempo de ciclo em que nenhum trabalho está sendo realizado para avançar o processo. Isso inclui o tempo gasto na transferência de informações sobre o caso entre os participantes do processo, como por exemplo quando documentos são trocados por correio, assim como o tempo em que o caso está esperando para ser processado por um ator. O tempo de processamento, por outro lado, refere-se ao tempo que os atores gastam realizando o trabalho real. Em muitos, se não na maioria dos processos, o tempo de espera compõe uma proporção considerável do tempo de ciclo total. Existem várias razões para esse fenômeno. Por exemplo, essa situação pode acontecer porque o trabalho é realizado em lotes. Em um processo relacionado à aprovação de requisições de compra em uma empresa, o supervisor responsável por essas aprovações em uma unidade de negócios pode optar por agrupar todas as solicitações e verificá-las apenas uma vez no início ou no final de um dia de trabalho. Além disso, às vezes o tempo de espera é gasto aguardando que um ator externo forneça alguma entrada para uma tarefa. Por exemplo, no contexto de atender a uma prescrição médica, um farmacêutico pode precisar de um esclarecimento do médico. Para fazer isso, o farmacêutico tentaria ligar para o médico. Mas o médico pode estar indisponível e, assim, o farmacêutico precisa deixar a prescrição de lado e esperar até que o médico retorne a ligação.

Ao analisar um processo com o objetivo de abordar questões relacionadas ao tempo de ciclo, pode ser útil começar avaliando a razão do tempo de processamento total em relação ao tempo de ciclo total. Essa razão é chamada de eficiência do tempo de ciclo. Uma eficiência do tempo de ciclo próxima de 1 indica que há pouco espaço para melhorar o tempo de ciclo, a menos que mudanças relativamente radicais sejam introduzidas no processo. Uma razão próxima de zero indica que há um espaço significativo para melhorar o tempo de ciclo reduzindo o tempo de espera, por exemplo, devido a transferências entre participantes.

A eficiência do tempo de ciclo de um processo pode ser calculada da seguinte forma. Primeiro, precisamos determinar o tempo de ciclo e o tempo de processamento de cada atividade. Dada essa informação, podemos então calcular o tempo de ciclo total do processo usando as mesmas fórmulas que vimos acima. Vamos chamar essa quantidade de CT. Em seguida, usando as mesmas fórmulas, podemos calcular o tempo total gasto realizando o trabalho real. Este é chamado de tempo de ciclo teórico do processo. Essencialmente, este é o tempo que uma instância do processo levaria se não houvesse tempo de espera. Para calcular o tempo de ciclo teórico, aplicamos o mesmo método de cálculo do tempo de ciclo, mas em vez de usar o tempo de ciclo de cada atividade, usamos o tempo de processamento de cada atividade. Vamos chamar o tempo de ciclo teórico de TCT. A eficiência do tempo de ciclo (CTE) é então calculada da seguinte forma:

$$
CTE = TCT / CT
$$

**Exemplo 7.4**
Consideremos o modelo de processo de solicitação de crédito na Fig. 7.10 e os tempos de processamento dados na Tabela 7.2. Os tempos de ciclo das atividades (incluindo tempo de espera e de processamento) são os previamente dados na Tabela 7.1. Suponhamos que em 20% dos casos a solicitação esteja incompleta e em 60% dos casos o crédito seja concedido. Suponhamos adicionalmente que um dia é igual a 8 horas de trabalho.

Vimos no Exemplo 7.3 que o tempo total de ciclo deste processo é de 8,65 dias, o que se traduz em 69,2 horas de trabalho. Agora calculamos o tempo de ciclo teórico da mesma maneira que o tempo total de ciclo, mas usando os tempos de processamento dados na Tabela 7.2. Isso nos dá: 2/(1 − 0,2) + 3 + 2 + 0,6 × 2 + 0,4 × 0,5 = 9,9 horas de trabalho. A eficiência do tempo de ciclo é, portanto, 8,9/69,2 = 12,9%.

**Exercício 7.3**
Calcule o tempo de ciclo total, o tempo de ciclo teórico e a eficiência do tempo de ciclo do processo de consulta ministerial introduzido no Exercício 3.7 (p. 77). Suponha que a probabilidade de retrabalho seja 0,2 e que os tempos de espera e de processamento sejam os dados na Tabela 7.3.

### 7.2.3 Tempo de Ciclo e Trabalho em Processo (WIP)

O tempo de ciclo está diretamente relacionado a duas medidas que desempenham um papel importante na análise de um processo, a saber, taxa de chegada e Trabalho em Processo (WIP).

A taxa de chegada de um processo é o número médio de novas instâncias do processo que são criadas por unidade de tempo. Por exemplo, em um processo de solicitação de crédito, a taxa de chegada é o número de solicitações de crédito recebidas por dia (ou qualquer outra unidade de tempo que escolhermos). Da mesma forma, em um processo de pedido-a-recebimento, a taxa de chegada é o número médio de novos pedidos que chegam por dia. Tradicionalmente, o símbolo λ é usado para se referir à taxa de chegada.

Enquanto isso, o WIP é o número médio de instâncias de um processo que estão ativas em um dado momento, ou seja, o número médio de instâncias que ainda não foram concluídas. Por exemplo, em um processo de solicitação de crédito, o WIP é o número médio de solicitações de crédito que foram submetidas e ainda não foram concedidas ou rejeitadas. Da mesma forma, em um processo de pedido-a-recebimento, o WIP é o número médio de pedidos que foram recebidos, mas ainda não foram entregues e pagos.

O tempo de ciclo (CT), a taxa de chegada (λ) e o WIP estão relacionados por uma lei fundamental conhecida como a lei de Little, que afirma que:

$$
WIP = lambda x CT
$$

Basicamente, o que essa lei nos diz é que:
- O WIP aumenta se o tempo de ciclo aumentar ou se a taxa de chegada aumentar. Em outras palavras, se o processo desacelerar—o que significa que seu tempo de ciclo aumenta—haverá mais instâncias do processo ativas simultaneamente. Além disso, quanto mais rápido novas instâncias são criadas, maior será o número de instâncias em estado ativo.
- Se a taxa de chegada aumentar e quisermos manter o WIP nos níveis atuais, o tempo de ciclo deve diminuir.

A lei de Little vale para qualquer processo estável. Por estável, queremos dizer que o número de instâncias ativas não está aumentando infinitamente. Em outras palavras, em um processo estável, a quantidade de trabalho esperando para ser realizado não está crescendo fora de controle.

Embora simples, a lei de Little pode ser uma ferramenta interessante para análise de cenários hipotéticos. Também podemos usar a lei de Little como uma maneira alternativa de calcular o tempo total de ciclo de um processo se soubermos a taxa de chegada e o WIP. Isso pode ser útil às vezes porque determinar a taxa de chegada e o WIP às vezes é mais fácil do que determinar o tempo de ciclo. Por exemplo, no caso do processo de solicitação de crédito, a taxa de chegada pode ser facilmente calculada se soubermos o número total de solicitações processadas durante um período de tempo. Por exemplo, se assumirmos que há 250 dias úteis por ano e soubermos que o número total de solicitações de crédito no último ano foi de 2500, podemos inferir que o número médio de solicitações por dia útil é de 10. O WIP, por outro lado, pode ser calculado por meio de amostragem. Podemos perguntar quantas solicitações estão ativas em um dado momento, depois perguntar isso novamente uma semana depois e novamente duas semanas depois. Suponhamos que, em média, observemos que 200 solicitações estão ativas simultaneamente. O tempo de ciclo é então WIP/λ = 200/10 = 20 dias úteis.

**Exercício 7.4**
Um restaurante recebe em média 1200 clientes por dia (entre 10h e 22h). Durante os horários de pico (12h às 15h e 18h às 21h), o restaurante recebe cerca de 900 clientes no total e, em média, 90 clientes podem ser encontrados no restaurante em um dado momento. Em horários não de pico, o restaurante recebe 300 clientes no total e, em média, 30 clientes podem ser encontrados no restaurante em um dado momento.
- Qual é o tempo médio que um cliente passa no restaurante durante os horários de pico?
- Qual é o tempo médio que um cliente passa no restaurante durante os horários não de pico?
- As instalações do restaurante têm uma capacidade máxima de 110 clientes. Essa capacidade máxima às vezes é atingida durante os horários de pico. O gerente do restaurante espera que o número de clientes durante os horários de pico aumente ligeiramente nos próximos meses. O que o restaurante pode fazer para resolver esse problema sem investir na ampliação de suas instalações?

### 7.2.4 Outras Aplicações e Limitações da Análise de Fluxo

Como mencionado anteriormente, a análise de fluxo também pode ser usada para calcular outras medidas de desempenho além do tempo de ciclo. Por exemplo, supondo que conheçamos o custo médio de cada atividade, podemos calcular o custo de um processo mais ou menos da mesma maneira que calculamos o tempo de ciclo. Em particular, o custo de uma sequência de atividades é a soma dos custos dessas atividades. Da mesma forma, o custo de um bloco XOR é a média ponderada do custo dos ramos do bloco XOR, e o custo de um padrão de retrabalho como o mostrado na Fig. 7.8 é o custo do corpo do loop dividido por 1 − r. A única diferença entre calcular o tempo de ciclo e calcular o custo diz respeito ao tratamento dos blocos AND. O custo de um bloco AND, como o mostrado na Fig. 7.5, não é o máximo do custo dos ramos do bloco AND. Em vez disso, o custo de tal bloco é a soma dos custos dos ramos. Isso ocorre porque, após a travessia do AND-split, cada ramo no AND-join é executado e, portanto, os custos desses ramos se somam.

**Exemplo 7.5**
Consideremos novamente o modelo de processo de solicitação de crédito na Fig. 7.10 e os tempos de processamento dados na Tabela 7.2. Como anteriormente, assumimos que em 20% dos casos a solicitação está incompleta e em 60% dos casos o crédito é concedido. Assumimos ainda que as atividades “Verificar completude”, “Verificar histórico de crédito” e “Verificar fontes de renda” são realizadas por um funcionário, enquanto as atividades “Avaliar solicitação”, “Fazer oferta de crédito” e “Notificar rejeição” são realizadas por um oficial de crédito. O custo horário de um funcionário é 25, enquanto o custo horário de um oficial de crédito é 50. Realizar uma verificação de crédito exige que o banco envie uma consulta a um sistema externo. O banco é cobrado em € 1 por consulta pelo provedor desse sistema externo.

Deste cenário, podemos ver que o custo de cada tarefa pode ser dividido em dois componentes: o custo do recurso humano e outros custos. O custo do recurso humano é o custo dos recursos humanos que realizam a tarefa. Isso pode ser calculado como o produto do custo horário do recurso e do tempo de processamento (em horas) da tarefa. Outros custos correspondem a custos que são incorridos por uma execução de uma tarefa, mas não estão relacionados ao tempo gasto pelos recursos humanos na tarefa. Neste exemplo, o custo por consulta ao sistema externo seria classificado como "outros custos" para a tarefa “Verificar histórico de crédito”. As tarefas restantes não têm um componente de "outros custos".

Para o exemplo em questão, a discriminação do custo do recurso, outros custos e custo total por tarefa é dada na Tabela 7.4. Dada essa entrada, podemos calcular o custo total por execução do processo da seguinte forma: 50/(1 − 0,2) + 13,5 + 75 + 100 + 0,6 × 100 + 0,4 × 25 = 321.

**Exercício 7.5**
Calcule o custo por execução do processo de consulta ministerial introduzido no Exercício 3.7 (p. 77). Suponha que a probabilidade de retrabalho seja 0,2 e que os tempos sejam os dados na Tabela 7.3. A atividade “Registrar consulta ministerial” é realizada por um funcionário, a atividade “Investigar consulta ministerial” é realizada por um assessor, “Preparar resposta ministerial” é realizada por um assessor sênior e “Revisar resposta ministerial” é realizada por um conselheiro ministerial. O custo horário de um funcionário, assessor, assessor sênior e conselheiro ministerial é 25, 50, 75 e 100, respectivamente. Não há outros custos associados a essas atividades além dos custos dos recursos.

Antes de encerrar a discussão sobre a análise de fluxo, é importante destacar algumas de suas armadilhas e limitações. Em primeiro lugar, devemos notar que as equações apresentadas na Seção 7.2.1 não nos permitem calcular o tempo de ciclo de qualquer modelo de processo. De fato, essas equações só funcionam no caso de modelos de processo estruturados em blocos. Em particular, não podemos usar essas equações para calcular o tempo de ciclo de um modelo de processo não estruturado, como o mostrado no Exercício 3.9 (p. 93). De fato, este exemplo não se encaixa em nenhum dos padrões que vimos acima. Calcular o tempo de ciclo neste caso é mais complicado. Além disso, se o modelo contiver outros elementos de modelagem além dos gateways AND e XOR, o método de cálculo do tempo de ciclo se torna mais complicado.

Felizmente, esta não é uma limitação fundamental da análise de fluxo, mas apenas uma limitação do conjunto específico de equações discutido na Seção 7.2.1. Existem outras técnicas de análise de fluxo mais sofisticadas que nos permitem calcular o tempo de ciclo de praticamente qualquer modelo de processo. A matemática pode ficar um pouco mais complexa e, na prática, não se faria tais cálculos manualmente. Mas isso geralmente não é um problema, dado que várias ferramentas modernas de modelagem de processos incluem funcionalidades para calcular o tempo de ciclo, custo e outras medidas de desempenho de um modelo de processo usando análise de fluxo.

Um obstáculo mais fundamental enfrentado pelos analistas ao aplicar a análise de fluxo é o fato de que eles precisam primeiro estimar o tempo médio de ciclo de cada atividade no modelo de processo. Na verdade, esse obstáculo é típico ao aplicar qualquer técnica de análise quantitativa de processos. Existem pelo menos duas abordagens para enfrentar esse obstáculo. A primeira é baseada em entrevistas ou observação. Nessa abordagem, os analistas entrevistam as partes interessadas envolvidas em cada tarefa ou observam como as partes interessadas trabalham durante um determinado dia ou período de tempo. Isso permite que os analistas façam pelo menos um "palpite informado" sobre o tempo médio que um caso leva em cada atividade, tanto em termos de tempo de espera quanto de tempo de processamento. Uma segunda abordagem é coletar logs dos sistemas de informação usados no processo. Por exemplo, se uma dada atividade, como aprovar uma requisição de compra, for realizada por meio de um portal interno (uma intranet), os administradores do portal devem ser capazes de extrair logs desse portal que permitam ao analista estimar o tempo médio que um formulário de requisição gasta em "aguardando aprovação" e também o tempo médio entre o momento em que o supervisor abre uma requisição de compra para aprovação e o momento em que a aprova. Com uma análise cuidadosa, esses logs podem fornecer uma riqueza de informações que podem ser combinadas via análise de fluxo para obter uma visão geral de quais partes do processo consomem mais tempo.

Uma limitação importante da análise de fluxo é que ela não leva em consideração o fato de que um processo se comporta de maneira diferente dependendo da carga, ou seja, dependendo da quantidade de instâncias do processo que estão em execução simultaneamente. Intuitivamente, o tempo de ciclo de um processo para tratar sinistros seria muito mais lento se a seguradora estivesse lidando com milhares de sinistros ao mesmo tempo, devido, por exemplo, a um desastre natural recente, como uma tempestade, em comparação com o caso em que a carga é baixa e a seguradora está lidando com apenas cem sinistros ao mesmo tempo. Quando a carga aumenta e o número de recursos (por exemplo, analistas de sinistros) permanece relativamente constante, é claro que os tempos de espera serão mais longos. Isso se deve a um fenômeno conhecido como contenção de recursos. A contenção de recursos ocorre quando há mais trabalho a ser feito do que recursos disponíveis para realizar o trabalho, como por exemplo, mais sinistros do que analistas de sinistros. Em tais cenários, algumas tarefas ficarão em modo de espera até que um dos recursos necessários seja liberado. A análise de fluxo não leva em consideração os efeitos do aumento da contenção de recursos. Em vez disso, as estimativas obtidas da análise de fluxo são aplicáveis apenas se o nível de contenção de recursos permanecer relativamente estável a longo prazo.

## 7.3 Filas

A teoria das filas é uma coleção de técnicas matemáticas para analisar sistemas que têm contenção de recursos. A contenção de recursos inevitavelmente leva a filas, como todos provavelmente já experimentamos em caixas de supermercado, em um escritório bancário, no correio ou em uma agência governamental. A teoria das filas nos oferece técnicas para analisar parâmetros importantes de uma fila, como o comprimento esperado da fila ou o tempo de espera esperado de um caso individual em uma fila.

### 7.3.1 Noções Básicas da Teoria das Filas

Na teoria básica das filas, um sistema de filas é visto como consistindo em uma ou várias filas e um serviço que é fornecido por um ou vários servidores. Os elementos dentro de uma fila são chamados de trabalhos ou clientes, dependendo do contexto específico. Por exemplo, no caso de um supermercado, o serviço é o de checkout. Este serviço é fornecido por vários caixas (os servidores). Enquanto isso, no caso de um escritório bancário, o serviço é realizar uma transação bancária, os servidores são os atendentes e geralmente há uma única fila que leva a vários servidores (os atendentes). Esses dois exemplos ilustram uma distinção importante entre sistemas de filas com várias linhas (ou seja, várias filas) (como o supermercado) e sistemas de fila única (como o escritório bancário).

A teoria das filas fornece um conjunto muito amplo de técnicas. Seria irrealista introduzir todas essas técnicas neste capítulo. Portanto, em vez de tentar apresentar tudo o que a teoria das filas tem a oferecer, apresentaremos dois modelos de teoria das filas que são relativamente simples, mas úteis ao analisar processos de negócios ou atividades dentro de um processo.

Nos dois modelos que apresentaremos, há uma única fila (sistema de fila única). Os clientes chegam a uma taxa média de chegada, que chamaremos de λ. Este é o mesmo conceito de taxa de chegada que discutimos acima ao apresentar a lei de Little. Por exemplo, podemos dizer que os clientes chegam ao escritório bancário a uma taxa média de 20 por hora. Isso implica que, em média, um cliente chega a cada 5 minutos (1/20 horas). Este último número é chamado de tempo médio entre chegadas. Observamos que se λ é a taxa de chegada por unidade de tempo, então 1/λ é o tempo médio entre chegadas.

Seria ilusório pensar que o tempo entre a chegada de dois clientes ao escritório bancário é sempre de 5 minutos. Este é apenas o valor médio. Na prática, os clientes chegam independentemente uns dos outros, então o tempo entre a chegada de um cliente e a chegada do próximo cliente é completamente aleatório. Além disso, digamos que o tempo entre a chegada do primeiro cliente e a chegada do segundo cliente seja de 1 minuto. Esta observação não nos diz absolutamente nada sobre o tempo entre a chegada do segundo cliente e a chegada do terceiro cliente. Pode ser que o terceiro cliente chegue 1 minuto após o segundo, ou 5 minutos ou 10 minutos. Não saberemos até que o terceiro cliente chegue.

Esse processo de chegada é chamado de processo de Poisson. Nesse caso, a distribuição de chegadas entre dois clientes consecutivos segue uma chamada distribuição exponencial (especificamente uma distribuição exponencial negativa) com uma média de 1/λ. Em poucas palavras, isso significa que a probabilidade de o tempo entre chegadas ser exatamente igual a t (onde t é um número positivo) diminui de forma exponencial quando t aumenta. Por exemplo, a probabilidade de o tempo entre chegadas ser 10 é consideravelmente menor do que a probabilidade de o tempo entre chegadas ser 1. Portanto, tempos entre chegadas mais curtos são muito mais prováveis do que tempos mais longos, mas sempre há uma probabilidade (talvez muito pequena) de que o tempo entre chegadas será um número grande.

Na prática, o processo de Poisson e a distribuição exponencial descrevem uma grande classe de processos de chegada que podem ser encontrados em processos de negócios, então usaremos esses conceitos para capturar a chegada de trabalhos ou clientes em um processo de negócios ou em uma atividade em um processo de negócios. O processo de Poisson também pode ser observado, por exemplo, quando examinamos com que frequência carros entram em um determinado segmento de uma rodovia ou com que frequência chamadas passam por uma central telefônica.

Dito isso, deve-se sempre verificar se os casos chegam a um determinado processo ou atividade de forma distribuída exponencialmente. Essa verificação pode ser feita registrando os tempos entre chegadas durante um determinado período de tempo e, em seguida, inserindo esses números em uma ferramenta estatística, como por exemplo R, Mathworks’s Statistical Toolbox ou EasyFit. Essas ferramentas permitem que você insira um conjunto de tempos entre chegadas observados e verifique se ele segue uma distribuição exponencial negativa.

Distribuições exponenciais não são úteis apenas ao modelar o tempo entre chegadas. Elas também são em alguns casos úteis ao descrever o tempo de processamento de uma atividade. Em atividades que requerem um diagnóstico, uma verificação não trivial ou alguma tomada de decisão não trivial, muitas vezes o tempo de processamento da atividade segue uma distribuição exponencial. Tome, por exemplo, o tempo que um mecânico leva para fazer um reparo em um carro. A maioria dos reparos é bastante padrão, e os mecânicos podem levar, por exemplo, uma hora para realizá-los. No entanto, alguns reparos são muito complexos e, nesses casos, pode levar várias horas para o mecânico concluir. Uma observação semelhante pode ser feita sobre um médico recebendo pacientes em uma sala de emergência. Muitas emergências são bastante padrão e podem ser atendidas em menos de uma hora, mas algumas emergências são extremamente complicadas e podem levar horas para serem tratadas. Portanto, é provável que tais atividades sigam uma distribuição exponencial. Conforme mencionado acima, ao fazer tal hipótese, é importante que você a verifique primeiro, pegando uma amostra aleatória de tempos de processamento e alimentando-os em uma ferramenta estatística.

No campo da teoria das filas, um sistema de fila única é chamado de fila M/M/1 se os tempos entre chegadas dos clientes seguirem uma distribuição exponencial, os tempos de processamento seguirem uma distribuição exponencial, houver um único servidor e os trabalhos forem atendidos em uma ordem First-In-First-Out (FIFO). No caso de fila M/M/1, também assumimos que quando um trabalho chega, ele entra na fila e permanece lá até ser atendido pelo servidor.

Se as condições acima forem satisfeitas, mas houver vários servidores em vez de um único servidor, o sistema de filas é chamado de M/M/c, onde c é o número de servidores. Por exemplo, uma fila é M/M/5 se os tempos entre chegadas dos clientes seguirem uma distribuição exponencial, os tempos de processamento seguirem uma distribuição exponencial e houver cinco servidores no final da fila. O “M” nessa denominação significa “Markoviano”, que é o nome dado às suposições de que os tempos entre chegadas e os tempos de processamento seguem uma distribuição exponencial. Outros modelos de filas existem que fazem suposições diferentes. Cada modelo é diferente, então os resultados que obteremos para uma fila M/M/1 ou M/M/c são bastante diferentes daqueles que obteríamos de outras distribuições.

### 7.3.2 Modelos M/M/1 e M/M/c

Para resumir a discussão anterior, uma fila M/M/1 ou M/M/c pode ser definida por meio dos seguintes parâmetros:
- λ—a taxa média de chegada por unidade de tempo. O tempo médio entre chegadas é então 1/λ. Por exemplo, λ = 5 significa que há 5 chegadas por hora e isso implica que o tempo médio entre duas chegadas consecutivas é 1/5 horas, ou seja, 12 minutos.
- μ—o número médio de clientes que podem ser atendidos por unidade de tempo. O tempo médio de processamento por trabalho é então 1/μ. Por exemplo, μ = 6 significa que seis trabalhos são atendidos por hora, ou seja, um trabalho é atendido em 10 minutos (em média).
- No caso de M/M/c, o número de servidores (c).

Dado os parâmetros λ e μ, podemos já afirmar o quão ocupado um servidor está. Isso é chamado de taxa de ocupação ρ e é igual a λ/μ. No exemplo acima, a taxa de ocupação é 5/6 = 83,34%. Deve-se notar que esta é uma taxa de ocupação relativamente alta. Um sistema com uma taxa de ocupação de mais de 100% é instável, o que significa que a fila se tornará cada vez mais longa para sempre porque o servidor não pode lidar com toda a demanda. De fato, mesmo um sistema com uma taxa de ocupação próxima de 100% é instável devido à aleatoriedade com que novos trabalhos chegam e à variabilidade nos tempos de processamento por trabalho. Para entender por que isso é o caso, imagine que você é um médico recebendo pacientes a uma taxa de 6 por hora durante 8 horas, sabendo que cada paciente leva 10 minutos em média para ser tratado (às vezes menos, mas às vezes mais). Sem nenhuma folga, provavelmente você terminará com um enorme acúmulo no final do dia.

No caso de um sistema M/M/c, a taxa de ocupação é λ / (cμ), uma vez que o sistema pode lidar com trabalhos a uma taxa de cμ. Por exemplo, se o sistema tiver dois servidores e cada servidor puder lidar com dois trabalhos por hora, o sistema pode lidar com quatro trabalhos por hora. Se os trabalhos chegarem a uma taxa média de 3 por hora, a taxa de ocupação do sistema é 3/4 = 75%.

Dado um sistema M/M/1 ou M/M/c, a teoria das filas nos permite calcular os seguintes parâmetros:

- Lq—O número médio de trabalhos (por exemplo, clientes) na fila.
- Wq—O tempo médio que um trabalho passa na fila.
- W—O tempo médio que um trabalho passa no sistema. Isso inclui tanto o tempo que o cliente passa na fila quanto o tempo que o cliente passa sendo atendido.
- L—O número médio de trabalhos no sistema (ou seja, o Trabalho em Processo referenciado na lei de Little).

Para resumir, a estrutura geral de um sistema de fila única—consistindo em uma fila e um ou muitos servidores—é representada na Fig. 7.11. Os parâmetros da fila (λ, c e μ) são mostrados no topo. Os parâmetros que podem ser calculados a partir desses três parâmetros de entrada são mostrados abaixo da fila e do servidor. O tempo médio que um trabalho espera na fila é Wq, enquanto o comprimento médio da fila é Lq. Eventualmente, um trabalho vai para o servidor e lá ele passa em média 1/μ unidades de tempo. O tempo médio entre o momento em que um trabalho entra no sistema e o momento em que ele sai é W, enquanto o número médio de trabalhos dentro do sistema (na fila ou em um servidor) é L.

A teoria das filas nos dá as seguintes fórmulas para calcular os parâmetros acima para modelos M/M/1:

$$
Lq = \frac{\rho^2}{1 - \rho} \quad (7.4) \\
Wq = \frac{Lq}{\lambda} \quad (7.5) \\
W = Wq + \frac{1}{\mu} \quad (7.6) \\
L = \lambda W \quad (7.7)
$$

Onde:

- λ é a taxa de chegada
- μ é a taxa de serviço
- c é o número de servidores
- P0 é a probabilidade de que não haja trabalhos no sistema

**Exemplo 7.7**
Considere um call center que opera com três operadores. As chamadas chegam a uma taxa de 9 por hora (λ) e cada operador pode atender 4 chamadas por hora (μ = 4). Este é um exemplo de um sistema M/M/3.

Primeiro, calculamos ρ:

$$
\rho = \frac{\lambda}{c\mu} = \frac{9}{3 \times 4} = \frac{9}{12} = 0.75
$$

Em seguida, usamos a fórmula para P0:

$$
P_0 = \left[ \sum_{i=0}^{c-1} \left( \frac{\lambda}{\mu} \right)^i / i! + \left( \frac{\lambda}{\mu} \right)^c / c! \times \frac{1}{1 - \rho} \right]^{-1}
$$

$$
= \left[ \sum_{i=0}^{2} \left( \frac{9}{4} \right)^i / i! + \left( \frac{9}{4} \right)^3 / 3! \times \frac{1}{1 - 0.75} \right]^{-1}
$$

$$
= \left[ 1 + \left( \frac{9}{4} \right) + \left( \frac{81}{32} \right) + \left( \frac{729}{192} \right) \right]^{-1}
$$

$$
= \left[ 1 + 2.25 + 2.53125 + 3.796875 \right]^{-1}
$$

$$
= \left[ 9.578125 \right]^{-1}
$$

$$
≈ 0.1044
$$

Finalmente, Wq, W e L:

$$
W_q = \frac{L_q}{\lambda} = \frac{1.989}{9} \approx 0.221 \text{ horas} = 13.26 \text{ minutos}
$$

$$
W = W_q + \frac{1}{\mu} = 0.221 + 0.25 = 0.471 \text{ horas} = 28.26 \text{ minutos}
$$

$$
L = \lambda W = 9 \times 0.471 \approx 4.239
$$

Com essas fórmulas e valores, podemos ver que, em média, há 4.239 chamadas no sistema (L), sendo que 1.989 chamadas estão na fila e 2.25 chamadas estão sendo atendidas (nos três operadores). O tempo médio que uma chamada passa na fila é de 13.26 minutos (Wq), enquanto o tempo total que uma chamada passa no sistema é de 28.26 minutos (W).

### 7.3.3 Limitations and Applications of Queueing Theory

Queueing theory provides powerful tools for analyzing processes with contention for resources. However, it also has limitations. One limitation is that it often assumes exponential distributions for arrival and service times, which may not always be accurate. Another limitation is that it typically assumes steady-state conditions, meaning that the system has been running long enough to reach a stable average performance. In reality, processes often experience variability in arrival rates and service times, making it difficult to apply queueing theory in all situations.

Nevertheless, queueing theory is widely used in various applications, such as:

- **Call centers**: Analyzing the performance of call centers to determine the optimal number of operators and predict customer wait times.
- **Healthcare**: Managing patient flow in hospitals and clinics to reduce wait times and improve resource utilization.
- **Manufacturing**: Optimizing production lines and inventory management to minimize delays and increase efficiency.
- **Transportation**: Designing and managing transportation systems, such as airports and public transit, to reduce congestion and improve service levels.

By understanding the principles of queueing theory and its applications, process managers can make informed decisions to improve process performance and customer satisfaction.

## 7.4 Simulação de Processos

A simulação de processos é uma técnica poderosa para analisar o desempenho de processos de negócios sob diferentes condições. Ao contrário da análise de fluxo e da teoria das filas, que dependem de fórmulas matemáticas para calcular medidas de desempenho, a simulação de processos envolve a criação de um modelo computadorizado do processo e a execução de experimentos para observar como o processo se comporta.

### 7.4.1 Noções Básicas da Simulação de Processos

A simulação de processos envolve os seguintes passos:

1. **Definir o modelo de processo**: Criar um modelo detalhado do processo, incluindo atividades, recursos, tempos de processamento, tempos de espera, probabilidades de ramificação e outras características relevantes.
2. **Coletar dados**: Obter dados reais sobre o desempenho do processo, como tempos de ciclo, tempos de processamento, tempos de espera e taxas de chegada.
3. **Configurar a simulação**: Definir parâmetros de simulação, como o número de execuções do processo, a duração da simulação e as condições iniciais.
4. **Executar a simulação**: Rodar a simulação para observar como o processo se comporta ao longo do tempo. Isso pode envolver a execução de várias iterações para capturar a variabilidade do processo.
5. **Analisar os resultados**: Analisar os resultados da simulação para identificar gargalos, tempos de espera excessivos, variação no desempenho e outras áreas de melhoria.
6. **Ajustar o modelo**: Com base na análise dos resultados, ajustar o modelo de simulação para refletir melhor a realidade do processo ou testar diferentes cenários de melhoria.

### 7.4.2 Aplicações da Simulação de Processos

A simulação de processos é usada em diversas áreas para analisar e melhorar o desempenho dos processos. Algumas aplicações comuns incluem:

- **Manufatura**: Analisar linhas de produção, otimizar fluxos de trabalho e identificar gargalos em fábricas.
- **Saúde**: Simular o fluxo de pacientes em hospitais e clínicas para melhorar a utilização dos recursos e reduzir tempos de espera.
- **Serviços financeiros**: Simular processos de atendimento ao cliente em bancos e call centers para otimizar a alocação de recursos e reduzir tempos de espera.
- **Logística**: Simular redes de transporte e cadeias de suprimentos para identificar melhorias na eficiência e reduzir custos.
- **Setor público**: Analisar processos administrativos e de atendimento ao cidadão em agências governamentais para melhorar a eficiência e a qualidade do serviço.

### 7.4.3 Ferramentas de Simulação de Processos

Existem várias ferramentas de software disponíveis para a simulação de processos, cada uma com suas próprias características e funcionalidades. Algumas ferramentas populares incluem:

- **Arena**: Uma ferramenta de simulação de processos amplamente utilizada em manufatura, logística e saúde.
- **Simul8**: Uma ferramenta de simulação de processos voltada para a análise de desempenho e otimização de processos de negócios.
- **AnyLogic**: Uma ferramenta de simulação que suporta simulação baseada em agentes, eventos discretos e dinâmica de sistemas.
- **Bizagi**: Uma plataforma de gestão de processos de negócios que inclui funcionalidades de simulação para analisar e otimizar processos.
- **ProModel**: Uma ferramenta de simulação voltada para a análise e otimização de processos em diversos setores.

### 7.4.4 Limitations and Advantages of Process Simulation

Simulação de processos oferece várias vantagens em comparação com outras técnicas de análise de processos:

- **Flexibilidade**: Permite a modelagem de processos complexos com várias atividades, recursos e fluxos de trabalho.
- **Visualização**: Fornece uma representação visual do processo, facilitando a compreensão e a comunicação das operações do processo.
- **Experimentação**: Permite a execução de experimentos para testar diferentes cenários de melhoria e avaliar seu impacto no desempenho do processo.

No entanto, a simulação de processos também apresenta algumas limitações:

- **Complexidade**: Requer a criação de modelos detalhados e a coleta de dados precisos, o que pode ser demorado e complexo.
- **Custos**: O desenvolvimento e a execução de simulações podem envolver custos significativos, especialmente se forem necessárias várias iterações e ajustes.
- **Validade**: Os resultados da simulação dependem da precisão do modelo e dos dados utilizados. Modelos incorretos ou dados imprecisos podem levar a resultados enganosos.

**Exemplo 7.8**
Considere um processo de atendimento ao cliente em uma central de atendimento. O processo inclui as seguintes atividades:
- Recepção da chamada pelo atendente
- Verificação do histórico do cliente
- Resolução da consulta ou encaminhamento para um especialista
- Encerramento da chamada

A central de atendimento opera com três atendentes e dois especialistas. A taxa média de chegada de chamadas é de 10 por hora, e o tempo médio de atendimento é de 5 minutos. Suponha que o tempo de verificação do histórico do cliente siga uma distribuição exponencial com uma média de 2 minutos, e o tempo de resolução da consulta siga uma distribuição normal com média de 4 minutos e desvio padrão de 1 minuto.

Para simular este processo, podemos seguir os passos mencionados anteriormente. Primeiro, definimos o modelo do processo, incluindo as atividades e os tempos de processamento. Em seguida, coletamos dados sobre o desempenho do processo, configuramos a simulação e executamos os experimentos. Por fim, analisamos os resultados para identificar áreas de melhoria e ajustar o modelo conforme necessário.

### 7.5 Comparação entre Análise de Fluxo, Teoria das Filas e Simulação de Processos

Cada uma das três técnicas discutidas neste capítulo—análise de fluxo, teoria das filas e simulação de processos—oferece diferentes vantagens e desvantagens. A tabela abaixo resume as principais características de cada técnica:

| Técnica               | Vantagens                                                                           | Desvantagens                                                                 |
|-----------------------|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| Análise de Fluxo      | Simples, fácil de aplicar, fornece estimativas rápidas                              | Não considera a variabilidade do processo, limitado a modelos estruturados   |
| Teoria das Filas      | Analisa a contenção de recursos, calcula tempos de espera e comprimentos de fila     | Assumptions may not always hold, limited to exponential distributions        |
| Simulação de Processos| Flexible, visual representation, allows for experimentation                        | Complex, time-consuming, costly, dependent on accurate data and models       |

Ao escolher a técnica mais adequada para analisar um processo de negócios, é importante considerar as características específicas do processo, a disponibilidade de dados e os recursos disponíveis para realizar a análise. Muitas vezes, uma combinação dessas técnicas pode ser usada para obter uma visão abrangente do desempenho do processo e identificar áreas de melhoria.

**Exercício 7.6**
Compare as técnicas de análise de fluxo, teoria das filas e simulação de processos em relação ao processo de atendimento ao cliente descrito no Exemplo 7.8. Quais são as vantagens e desvantagens de cada técnica para esse processo específico?

### 7.6 Conclusão

Neste capítulo, discutimos várias técnicas para a análise quantitativa de processos de negócios, incluindo análise de fluxo, teoria das filas e simulação de processos. Cada uma dessas técnicas oferece diferentes vantagens e desvantagens, e a escolha da técnica mais adequada depende das características específicas do processo e dos objetivos da análise. Ao aplicar essas técnicas, os gestores de processos podem obter insights valiosos sobre o desempenho do processo, identificar áreas de melhoria e tomar decisões informadas para otimizar os processos de negócios.


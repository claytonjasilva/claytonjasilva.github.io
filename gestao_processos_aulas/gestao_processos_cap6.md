# Capítulo 6: Análise Qualitativa de Processos

**"A qualidade é gratuita, mas apenas para aqueles que estão dispostos a pagar caro por ela."**
_Tom DeMarco (1940–)_

Analisar processos de negócios é tanto uma arte quanto uma ciência. Nesse sentido, a análise qualitativa é o lado artístico da análise de processos. Como as belas artes, como a pintura, não há uma única maneira de produzir uma boa análise de processos, mas sim uma variedade de princípios e técnicas que nos dizem quais práticas geralmente levam a uma "boa" análise de processos. Quando você aprende a pintar, aprende como segurar o pincel, como produzir diferentes tipos de pinceladas, como misturar cores, etc. O restante da arte da pintura depende de você adquirir por meio de prática, discernimento e autoavaliação crítica.

Neste capítulo, introduzimos alguns princípios e técnicas básicos para a análise qualitativa de processos. Primeiro, apresentamos princípios destinados a tornar o processo mais enxuto, identificando partes desnecessárias do processo com vistas à sua eliminação. Em seguida, apresentamos técnicas para identificar e analisar as partes fracas do processo, ou seja, as partes que criam problemas que afetam negativamente o desempenho do processo. Em particular, discutimos como analisar o impacto dos problemas para priorizar os esforços de redesenho.

## 6.1 Análise de Valor Agregado

A análise de valor agregado normalmente consiste em duas etapas: classificação de valor e eliminação de desperdício. Abaixo discutimos cada uma dessas etapas.

### 6.1.1 Classificação de Valor

A análise de valor agregado é uma técnica destinada a identificar etapas desnecessárias em um processo com vistas à sua eliminação. Nesse contexto, uma etapa pode ser uma tarefa no processo, ou parte de uma tarefa, ou uma transferência entre duas tarefas. Por exemplo, se uma tarefa "Verificar ordem de compra" termina com a Ordem de Compra (OC) sendo enviada por correio interno a um supervisor, e a próxima tarefa "Aprovar ordem de compra" começa quando o supervisor recebe e verifica a OC, podemos dizer que o transporte da OC via correio interno é uma etapa – uma etapa potencialmente desnecessária (não agregadora de valor) nesse contexto.

É frequentemente o caso que uma tarefa envolve várias etapas. Por exemplo, uma tarefa "Verificar fatura" pode envolver as seguintes etapas:
1. Recuperar a(s) OC(s) que correspondem à fatura.
2. Verificar se os valores na fatura e os das OC coincidem.
3. Verificar se os produtos ou serviços referenciados na OC foram entregues.
4. Verificar se o nome e os detalhes bancários do fornecedor na fatura coincidem com os registrados no Sistema de Gestão de Fornecedores.

Em alguns casos, as etapas dentro de uma tarefa são documentadas na forma de listas de verificação. As listas de verificação dizem aos participantes do processo quais coisas precisam estar em ordem antes que uma tarefa seja considerada completa. Se listas de verificação detalhadas estiverem disponíveis, o analista de processos pode usá-las para decompor tarefas em etapas. Infelizmente, essas listas de verificação nem sempre estão disponíveis. Em muitos casos, os participantes do processo têm uma compreensão implícita das etapas de uma tarefa porque realizam a tarefa dia após dia. Mas essa compreensão implícita não está documentada em nenhum lugar. Na ausência dessa documentação, o analista de processos precisa decompor cada tarefa em etapas por meio de observação e entrevistas.

Depois de decompor o processo em etapas, um segundo pré-requisito para a análise de valor agregado é identificar quem é o cliente do processo e quais são os resultados positivos que o cliente espera do processo. Esses resultados são considerados como agregadores de valor para o cliente, no sentido de que cumprir esses resultados é do interesse ou para o benefício dos clientes.

Depois de decompor o processo em etapas e identificar claramente os resultados positivos de um processo, podemos então analisar cada etapa em termos do valor que agrega. Etapas que contribuem diretamente para resultados positivos são chamadas de etapas de valor agregado. Por exemplo, considere um processo de reparo de uma máquina de lavar ou outro aparelho doméstico. As etapas desse processo onde o técnico diagnostica o problema com a máquina são claramente agregadoras de valor, pois contribuem diretamente para o resultado que o cliente deseja ver, ou seja, que a máquina seja consertada. Além disso, as etapas relacionadas ao reparo da máquina são agregadoras de valor.

Algumas etapas não agregam valor diretamente para o cliente, mas são necessárias para a empresa. Considere novamente o exemplo de um processo de reparo de uma máquina de lavar. Imagine que esse processo inclui uma etapa "Registrar defeito" na qual o técnico insere dados sobre a máquina de lavar e uma explicação do defeito encontrado em um sistema de informação. Essa etapa por si só não agrega valor para o cliente. O cliente deseja que a máquina seja consertada e não obtém valor pelo fato de que o defeito em sua máquina foi registrado em um sistema de informação da empresa de reparo. No entanto, registrar defeitos e suas resoluções ajuda a empresa a construir uma base de conhecimento de defeitos típicos e suas resoluções. Essa base de conhecimento é extremamente valiosa quando novos técnicos são contratados na empresa, pois eles podem aprender com o conhecimento que técnicos mais experientes registraram. Além disso, essas informações permitem que a empresa detecte defeitos frequentes e reporte esses defeitos ao fabricante ou distribuidor da máquina de lavar. Etapas como "Registrar defeito" são chamadas de etapas de valor agregado para o negócio, no sentido de que o cliente não está disposto a pagar pela execução dessas etapas nem obtém satisfação com a execução dessas etapas (portanto, as etapas não agregam valor), mas a etapa é necessária ou útil para a empresa que realiza o processo.

Em resumo, a análise de valor agregado é uma técnica na qual um analista decortica um modelo de processo, extrai cada etapa do processo e classifica essas etapas em uma das três categorias, a saber:
- Valor agregado (VA): Esta é uma etapa que produz valor ou satisfação para o cliente. Ao determinar se uma etapa é ou não de valor agregado, pode ajudar a fazer a seguinte pergunta: O cliente estaria disposto a pagar por esta atividade?
- Valor agregado para o negócio (BVA): A etapa é necessária ou útil para o funcionamento da empresa ou é exigida devido ao ambiente regulatório da empresa.
- Não agregador de valor (NVA): A etapa não se enquadra em nenhuma das outras duas categorias.

**Exemplo 6.1**
Consideremos o processo de aluguel de equipamentos descrito no Exemplo 1.1 (p. 2). Como discutido na Seção 1.2, o cliente desse processo é o engenheiro de obras que envia uma solicitação de aluguel de equipamento. Do ponto de vista do engenheiro de obras, o resultado positivo do processo é que o equipamento necessário esteja disponível no local da construção quando necessário. Vamos analisar o fragmento desse processo descrito na Fig. 1.6. Para identificar as etapas relevantes, vamos decorticar o modelo tarefa por tarefa. Enquanto fazemos isso, também classificaremos as etapas em VA, BVA e NVA.

- A primeira tarefa no modelo de processo é aquela em que o engenheiro envia a solicitação. A partir da descrição no Exemplo 1.1, observamos que há três etapas nessa tarefa:
  1. O engenheiro de obras preenche a solicitação.
  2. O engenheiro de obras envia a solicitação ao escriturário por e-mail (etapa de transferência).
  3. O escriturário abre e lê a solicitação (etapa de transferência).

Pode-se argumentar que preencher a solicitação é de valor agregado, na medida em que o engenheiro de obras não pode esperar que o equipamento seja alugado se ele não solicitar. De uma forma ou de outra, o engenheiro de obras precisa solicitar o equipamento para obtê-lo. Por outro lado, o engenheiro de obras não obtém valor ao enviar a solicitação ao escriturário por e-mail, nem ao escriturário ter que abrir e ler a solicitação. De forma mais geral, etapas de transferência entre participantes do processo, como enviar e receber mensagens internas, não são de valor agregado.

- A segunda tarefa é aquela em que o escriturário seleciona um equipamento adequado no catálogo do fornecedor. Podemos tratar essa tarefa como uma única etapa. Esta etapa é de valor agregado na medida em que contribui para identificar um equipamento adequado para atender às necessidades do engenheiro de obras.

- Na terceira tarefa, o escriturário liga para o fornecedor para verificar a disponibilidade do equipamento selecionado. Novamente, podemos tratar essa tarefa como uma única etapa. Esta etapa é de valor agregado na medida em que contribui para identificar um equipamento adequado e disponível. Se o equipamento estiver disponível, o escriturário recomendará que esse equipamento seja alugado. Para isso, o escriturário adiciona os detalhes do equipamento recomendado e do fornecedor ao formulário de solicitação de aluguel e encaminha o formulário ao engenheiro de obras para aprovação. Assim, temos mais duas etapas: (i) adicionar os detalhes à solicitação de aluguel e (ii) encaminhar a solicitação de aluguel ao engenheiro de obras. A primeira dessas etapas é de valor agregado para o negócio, pois ajuda a empresa a acompanhar os equipamentos que alugam e os fornecedores de quem alugam. Manter essas informações é valioso quando se trata de negociar ou renegociar acordos em massa com fornecedores. A transferência entre o escriturário e o engenheiro de obras não é de valor agregado.

- Em seguida, o engenheiro de obras examina a solicitação de aluguel com vistas a aprová-la ou rejeitá-la. Podemos tratar esse exame como uma etapa. Esta etapa é uma etapa de controle, ou seja, uma etapa onde um participante do processo ou uma aplicação de software verifica se algo foi feito corretamente. Nesse caso, essa etapa de controle ajuda a empresa a garantir que o equipamento seja alugado apenas quando necessário e que a despesa com aluguel de equipamentos em um determinado projeto de construção permaneça dentro do orçamento do projeto. Etapas de controle são geralmente de valor agregado para o negócio, embora um analista possa questionar quantas etapas de controle são necessárias e com que frequência devem ser realizadas.

- Se o engenheiro de obras tiver um problema com a solicitação de aluguel, ele comunica ao escriturário ou ao engenheiro de obras. Essa comunicação é outra etapa e é de valor agregado para o negócio, pois contribui para identificar e evitar mal-entendidos dentro da empresa. Se aprovada, a solicitação é enviada de volta ao escriturário; esta é uma etapa de transferência e, portanto, não é de valor agregado.

- Finalmente, supondo que a solicitação seja aprovada, o escriturário produz e envia a OC. Aqui podemos identificar mais duas etapas: produzir a OC e enviar a OC ao fornecedor correspondente. Produzir a OC é de valor agregado para o negócio. É necessário para garantir que o custo da solicitação de aluguel seja corretamente contabilizado e eventualmente pago. Enviar a OC é de valor agregado: é esse ato que faz com que o fornecedor saiba quando o equipamento deve ser entregue em uma data determinada. Se o fornecedor não receber essa informação, o equipamento não será entregue. Note, no entanto, que o que é de valor agregado é o fato de que o fornecedor é explicitamente solicitado pela empresa de construção a entregar o equipamento em uma data determinada. O fato de que essa solicitação seja feita por meio de uma OC é secundário em termos de agregar valor ao engenheiro de obras.

As etapas identificadas e sua classificação estão resumidas na Tabela 6.1.

Classificar etapas em VA, BVA e NVA é em certa medida subjetivo e depende do contexto. Por exemplo, pode-se questionar se produzir a OC é uma etapa VA ou BVA. Pode-se argumentar que, para que o equipamento esteja disponível, o fornecedor precisa ter uma garantia de que a taxa de aluguel do equipamento será paga. Portanto, pode-se dizer que a produção da OC contribui para o aluguel do equipamento, pois a OC serve para garantir ao fornecedor que o pagamento pelo aluguel do equipamento será feito. No entanto, como mencionado acima, o que agrega valor ao engenheiro de obras é o fato de que o fornecedor é notificado de que o equipamento deve ser entregue na data necessária. Se essa notificação for feita por meio de uma OC ou por meio de uma simples mensagem eletrônica enviada ao fornecedor é irrelevante, desde que o equipamento seja entregue. Portanto, produzir um documento formal (uma OC formal) não é, provavelmente, de valor agregado. É, em vez disso, um mecanismo para garantir que os processos financeiros da empresa de construção funcionem sem problemas e para evitar disputas com fornecedores, por exemplo, evitando a situação em que um fornecedor entrega um equipamento que não é necessário e depois solicita o pagamento da taxa de aluguel. De forma mais geral, adotaremos a convenção de que etapas impostas por requisitos contábeis ou legais são BVA, embora alguém possa argumentar de forma diferente em alguns casos.

**Exercício 6.1**
Considere o processo de admissão universitária descrito no Exercício 1.1 (p. 4). Quais etapas você pode extrair desse processo? Classifique essas etapas em VA, BVA e NVA.

### 6.1.2 Eliminação de Desperdícios

Tendo identificado e classificado as etapas do processo conforme discutido acima, pode-se então proceder à determinação de como eliminar desperdícios. Uma regra geral é que deve-se esforçar para minimizar ou eliminar etapas NVA. Algumas etapas NVA podem ser eliminadas por meio de automação. Este é o caso das transferências, por exemplo, que podem ser eliminadas ao se implementar um sistema de informação que permita a todos os stakeholders saber o que precisam fazer para avançar as solicitações de aluguel. Quando o engenheiro de obras envia uma solicitação de aluguel por meio desse sistema de informação, a solicitação apareceria automaticamente na lista de tarefas do escriturário. Da mesma forma, quando o escriturário registra o fornecedor e equipamento recomendados, o engenheiro de obras seria notificado e direcionado para a solicitação. Esse tipo de automação torna essas etapas NVA transparentes para os executores das etapas. O tópico da automação de processos será discutido com mais detalhes no Capítulo 9.

Uma abordagem mais radical para eliminar etapas NVA no exemplo em questão é eliminar completamente o escriturário do processo. Isso significa transferir parte do trabalho para o engenheiro de obras para que haja menos transferências no processo. Claro, as consequências dessa mudança em termos de carga de trabalho adicional para o engenheiro de obras precisam ser cuidadosamente consideradas. Outra abordagem para eliminar etapas NVA (e BVA) seria eliminar a necessidade de aprovação de solicitações de aluguel em casos onde o custo estimado esteja abaixo de um determinado limite. Novamente, essa opção deve ser ponderada contra as possíveis consequências de ter menos etapas de controle em vigor. Em particular, se os engenheiros de obras tiverem total discrição para alugar equipamentos à vontade, seria necessário um mecanismo para responsabilizá-los caso aluguem equipamentos desnecessários ou por períodos excessivamente longos e desnecessários. Essas questões de redesenho de processos serão discutidas mais detalhadamente no Capítulo 8.

Embora a eliminação de etapas NVA seja geralmente considerada um objetivo desejável, a eliminação de etapas BVA deve ser considerada como uma compensação, dado que as etapas BVA desempenham um papel no negócio. Antes de eliminar etapas BVA, deve-se primeiro mapear as etapas BVA para os objetivos e requisitos do negócio, como regulamentos que a empresa deve cumprir e riscos que a empresa busca minimizar. Dado um mapeamento entre etapas BVA, por um lado, e objetivos e requisitos do negócio, por outro, a questão então se torna a seguinte: Qual é a quantidade mínima de trabalho necessária para realizar o processo de forma satisfatória para o cliente, enquanto se cumprem os objetivos e requisitos associados às etapas BVA no processo? A resposta a essa pergunta é um ponto de partida para o redesenho do processo.

## 6.2 Análise de Causa Raiz

Ao analisar um processo de negócios, vale a pena lembrar que "mesmo um bom processo pode ser melhorado". A experiência mostra que qualquer processo de negócios não trivial, não importa quanto aprimoramento tenha passado, sofre de uma série de problemas. Sempre há erros, mal-entendidos, incidentes, etapas desnecessárias e outras formas de desperdício quando um processo de negócios é executado no dia a dia.

Parte do trabalho de um analista de processos é identificar e documentar os problemas que afligem um processo. Para esse fim, um analista geralmente coleta dados de várias fontes e entrevista vários stakeholders, principalmente os participantes do processo, mas também o dono do processo e gerentes das unidades organizacionais envolvidas no processo. Cada stakeholder tem uma visão diferente do processo e naturalmente terá a tendência de levantar problemas de sua própria perspectiva. O mesmo problema pode ser percebido de forma diferente por dois stakeholders. Por exemplo, um gerente executivo ou um dono do processo geralmente vê problemas em termos de objetivos de desempenho não sendo alcançados ou em termos de restrições impostas, por exemplo, por pressões externas (por exemplo, questões regulatórias ou de conformidade). Enquanto isso, os participantes do processo podem reclamar de recursos insuficientes, prazos apertados, bem como erros ou exceções percebidas como causadas por outros participantes do processo ou por clientes.

A análise de causa raiz é uma família de técnicas para ajudar analistas a identificar e entender as causas raiz de problemas ou eventos indesejáveis. A análise de causa raiz não se limita à análise de processos de negócios. De fato, a análise de causa raiz é comumente usada no contexto da análise de acidentes ou incidentes, bem como em processos de manufatura, onde é usada para entender a causa raiz de defeitos em um produto. No contexto da análise de processos de negócios, a análise de causa raiz é útil para identificar e entender os problemas que impedem um processo de ter um melhor desempenho.

A análise de causa raiz abrange uma variedade de técnicas. Em geral, esses métodos incluem diretrizes para entrevistas e a condução de workshops com stakeholders relevantes, bem como técnicas para organizar e documentar as ideias geradas durante essas entrevistas ou workshops. Abaixo, discutiremos duas dessas técnicas, a saber, diagramas de causa e efeito e diagramas de porquê-porquê.

### 6.2.1 Diagramas de Causa e Efeito

Diagramas de causa e efeito descrevem a relação entre um dado efeito negativo e suas causas. No contexto da análise de processos, um efeito negativo é geralmente um problema recorrente ou um nível indesejável de desempenho do processo. As causas podem ser divididas em fatores causais e fatores contribuintes (aqui chamados de fatores), conforme explicado no quadro abaixo.

**Fatores Causais Versus Fatores Contribuintes**
Dois tipos amplos de causa são geralmente distinguidos na área de análise de causa raiz, a saber, fatores causais e fatores contribuintes. Fatores causais são aqueles fatores que, se corrigidos, eliminados ou evitados, impediriam que o problema ocorresse no futuro. Por exemplo, no contexto de um processo de tratamento de sinistros de seguro, erros na estimativa de danos levam a avaliações incorretas de sinistros. Se os erros de estimativa de danos fossem eliminados, um número de ocorrências do problema "avaliação incorreta de sinistros" seria definitivamente evitado. Fatores contribuintes são aqueles que preparam o terreno ou aumentam as chances de um dado problema ocorrer. Por exemplo, considere o caso em que a interface do usuário para registrar os sinistros exige que o requerente insira algumas datas (por exemplo, a data em que o incidente do sinistro ocorreu), mas a interface não fornece um widget de calendário para que o usuário possa selecionar facilmente a data. Essa deficiência na interface do usuário pode aumentar as chances de que o usuário insira a data errada. Em outras palavras, essa deficiência contribui para o problema "entrada incorreta de dados do sinistro".

Embora a distinção entre fator causal e contribuinte seja geralmente útil ao investigar incidentes específicos (por exemplo, investigar as causas de um determinado acidente de trânsito), a distinção muitas vezes não é relevante ou não é suficientemente clara no contexto da análise de processos de negócios. Assim, neste capítulo, usaremos o termo fator para nos referirmos coletivamente a fatores causais e contribuintes.

Em um diagrama de causa e efeito, os fatores são agrupados em categorias e possivelmente também em subcategorias. Essas categorias são úteis para orientar a busca por causas. Por exemplo, ao organizar uma sessão de brainstorming para análise de causa raiz, uma maneira de estruturar a sessão é primeiro passar pela mesa pedindo a cada participante que dê sua opinião sobre possíveis causas do problema em questão. As causas são anotadas em qualquer ordem. Em seguida, as causas identificadas são classificadas de acordo com certas categorias e a discussão continua de maneira mais estruturada usando essas categorias como estrutura.

Uma categorização bem conhecida para análise de causa e efeito são os chamados 6M's, que são descritos abaixo junto com possíveis subcategorização.
1. Máquina (tecnologia) — fatores relacionados à tecnologia utilizada, como, por exemplo, falhas de software, falhas de rede ou falhas do sistema que podem ocorrer nos sistemas de informação que suportam um processo de negócios. Uma subcategorização útil dos fatores Máquina é a seguinte:
   - Falta de funcionalidade nos sistemas de aplicação.
   - Armazenamento redundante de dados entre sistemas, levando, por exemplo, à entrada duplicada de dados (mesmos dados inseridos duas vezes em sistemas diferentes) e inconsistências de dados entre sistemas.
   - Baixo desempenho dos sistemas de TI ou de rede, levando, por exemplo, a tempos de resposta lentos para clientes e participantes do processo.
   - Projeto inadequado da interface do usuário, levando, por exemplo, a clientes ou participantes do processo não perceberem que alguns dados estão faltando ou que alguns dados foram fornecidos, mas não são facilmente visíveis.
   - Falta de integração entre múltiplos sistemas dentro da empresa ou com sistemas externos, como o sistema de informação de um fornecedor ou de um cliente.

2. Método (processo) — fatores decorrentes da forma como o processo é definido ou entendido ou da forma como é executado. Um exemplo disso é quando um determinado participante do processo A pensa que outro participante B enviará um e-mail a um cliente, mas o participante B não o envia porque não sabe que deve enviá-lo. Possíveis subcategorias de fatores de Método incluem:
   - Atribuição pouco clara, inadequada ou inconsistente de responsabilidades de tomada de decisão e processamento aos participantes do processo.
   - Falta de capacitação dos participantes do processo, levando a participantes do processo não serem capazes de tomar decisões necessárias sem consultar vários níveis acima em sua hierarquia organizacional. Por outro lado, capacitação excessiva pode levar a participantes do processo terem muita discricionariedade e causarem prejuízos ao negócio por meio de suas ações.
   - Falta de comunicação oportuna entre participantes do processo ou entre participantes do processo e o cliente.

3. Material — fatores decorrentes dos materiais brutos, consumíveis ou dados necessários como insumo para as atividades do processo, como, por exemplo, dados incorretos levando a uma decisão errada sendo tomada durante a execução de um processo. A distinção entre materiais brutos, consumíveis e dados fornece uma possível subcategorização desses fatores.

4. Homem — fatores relacionados a uma avaliação errada ou a uma etapa executada incorretamente, como, por exemplo, um atendente de sinistros aceitar um sinistro mesmo que os dados do sinistro e as regras usadas para avaliar o sinistro exijam que o sinistro seja rejeitado. Possíveis subcategorias de fatores Homem incluem:
   - Falta de treinamento e instruções claras para participantes do processo.
   - Falta de sistema de incentivos para motivar suficientemente os participantes do processo.
   - Esperar demais dos participantes do processo (por exemplo, cronogramas excessivamente apertados).
   - Recrutamento inadequado de participantes do processo.

5. Medição — fatores relacionados a medições ou cálculos feitos durante o processo. No contexto de um sinistro de seguro, um exemplo de tal fator é aquele em que o valor a ser pago ao cliente é calculado incorretamente devido a uma estimativa imprecisa dos danos reivindicados.

6. Meio — fatores decorrentes do ambiente em que o processo é executado, como, por exemplo, fatores originados pelo cliente, fornecedores ou outros atores externos. Aqui, o ator originador é uma possível subcategoria. Geralmente, os fatores de meio estão fora do controle dos participantes do processo, do dono do processo e de outros gerentes da empresa. Por exemplo, considere um processo de tratamento de sinistros de seguro para acidentes de carro. Esse processo depende em parte de dados extraídos de relatórios policiais (por exemplo, relatórios policiais produzidos quando ocorre um acidente grave). Pode acontecer nesse contexto que alguns erros durante o processo de tratamento de sinistros sejam originados de imprecisões ou detalhes ausentes nos relatórios policiais. Esses fatores estão, em certa medida, fora do controle da seguradora. Esse exemplo ilustra que os fatores de meio podem precisar ser tratados de maneira diferente de outros fatores (internos).

Essas categorias são destinadas como diretrizes para brainstorming durante a análise de causa raiz, em vez de evangelho que deve ser seguido à risca. Outras maneiras de categorizar fatores podem ser igualmente úteis. Por exemplo, uma categorização alternativa é conhecida como os 4P's (Políticas, Procedimentos, Pessoas e Planta/Equipamento). Além disso, às vezes é útil classificar fatores de acordo com as atividades no processo onde eles se originam (ou seja, uma categoria por atividade principal no processo). Essa abordagem nos permite rastrear facilmente a relação entre fatores e atividades no processo.

As categorias acima são úteis não apenas como um guia para brainstorming durante a análise de causa raiz, mas também como uma base para documentar as causas raiz na forma de um diagrama de causa e efeito. Concretamente, um diagrama de causa e efeito consiste em uma linha horizontal principal (o tronco) da qual se ramificam várias ramificações (cf. Fig. 6.1). Em uma extremidade do tronco há uma caixa contendo o efeito negativo que está sendo analisado (em nosso caso, o problema sendo analisado). O tronco tem várias ramificações principais correspondentes às categorias de fatores (por exemplo, os 6M's acima). As causas raiz são escritas nas sub-ramificações. Às vezes, é relevante distinguir entre fatores primários, ou seja, fatores que têm um impacto direto no problema em questão, e fatores secundários, que são fatores que têm um impacto nos fatores primários. Por exemplo, no contexto de um processo de tratamento de sinistros de seguro, uma estimativa imprecisa dos danos leva a um cálculo errado do valor a ser pago por um determinado sinistro. Essa estimativa imprecisa dos danos pode derivar de uma falta de incentivo para o reparador calcular com precisão o custo dos reparos. Assim, "Estimativa imprecisa dos danos" pode ser vista como um fator primário para "Cálculo errado de responsabilidade", enquanto "Falta de incentivo para calcular custos de reparo com precisão" é um fator secundário por trás da "Estimativa imprecisa dos danos". A distinção entre fatores primários e secundários é um primeiro passo para identificar cadeias de fatores por trás de um problema. Veremos mais adiante neste capítulo que diagramas de porquê-porquê nos permitem aprofundar nessas cadeias de fatores.

Devido à sua aparência visual, os diagramas de causa e efeito também são conhecidos como diagramas de espinha de peixe. Outro nome comum para esses diagramas é diagramas de Ishikawa, em alusão a um de seus proponentes – Kaoru Ishikawa – um dos pioneiros no campo da gestão da qualidade.

**Exemplo 6.2**
Consideremos novamente o processo de aluguel de equipamentos descrito no Exemplo 1.1 (p. 2). Durante uma auditoria desse processo, vários problemas foram identificados. Descobriu-se que frequentemente o engenheiro de obras acha que o equipamento entregue no canteiro de obras não é adequado porque é muito pequeno ou não é potente o suficiente para o trabalho. Portanto, ele deve ser rejeitado. Um escriturário afirma que os engenheiros de obras geralmente não especificam seus requisitos com detalhes suficientes. Outros escriturários culpam os fornecedores por fornecerem descrições imprecisas ou incompletas de seus equipamentos em seus catálogos. Por outro lado, os engenheiros de obras reclamam que não são consultados quando há dúvidas em relação à escolha do equipamento.

Esse cenário basicamente descreve um problema, ou seja, que o equipamento está sendo rejeitado na entrega. Podemos ver três causas primárias para o problema, que estão resumidas no diagrama de causa e efeito na Fig. 6.2. O diagrama também mostra causas secundárias que sustentam cada uma das causas primárias. Observe que o fator "escriturário selecionou equipamento com especificações incorretas" foi classificado na categoria Material porque esse fator deriva de dados de entrada incorretos. Um defeito nos dados de entrada usados por um processo se enquadra na categoria Material.

**Exercício 6.2**
Considere o processo de admissão universitária descrito no Exercício 1.1 (p. 4). Um dos problemas enfrentados pela universidade é que os estudantes têm que esperar muito tempo para saber o resultado da inscrição (especialmente para resultados bem-sucedidos). Muitas vezes acontece que, quando um estudante é admitido, ele já decidiu ir para outra universidade (os estudantes enviam várias inscrições em paralelo para muitas universidades). Analise as causas desse problema usando um diagrama de causa e efeito.

### 6.2.2 Diagramas de Porquê-Porquê

Diagramas de porquê-porquê (também conhecidos como diagramas em árvore) constituem outra técnica para analisar a causa de efeitos negativos, como problemas em um processo de negócios. O foco da análise de causa raiz é capturar a série de relações de causa e efeito que levam a um determinado efeito. A ideia básica é perguntar recursivamente a pergunta: Por que algo aconteceu? Essa pergunta é feita várias vezes até que um fator que os stakeholders percebam como uma causa raiz seja encontrado. Uma crença comum no campo da gestão da qualidade – conhecida como o princípio dos cinco porquês – afirma que responder à pergunta "por quê" cinco vezes recursivamente permite identificar as causas raízes de um determinado efeito negativo. Claro, isso não deve ser tratado como evangelho, mas como uma diretriz de até onde se deve ir durante a análise de causa raiz.

Diagramas de porquê-porquê são uma técnica para estruturar sessões de brainstorming (por exemplo, workshops) para análise de causa raiz. Tal sessão começaria com um problema. O primeiro passo é dar um nome ao problema que os stakeholders concordem. Às vezes, descobre-se que não há um problema, mas vários problemas, que devem ser analisados separadamente. Uma vez que o problema foi identificado e um nome foi acordado, isso se torna a raiz da árvore. Então, em cada nível, as seguintes perguntas são feitas: "Por que isso acontece?" e "Quais são os principais subproblemas que podem levar a esse problema?". Fatores possíveis são então identificados. Cada um desses fatores é então analisado usando as mesmas perguntas. Ao descer na árvore (por exemplo, até os níveis 3 ou 4), é recomendável começar a focar em fatores que podem ser resolvidos, ou seja, que algo pode ser feito para mudá-los. As folhas da árvore devem corresponder a fatores que são fundamentais por natureza, ou seja, que não podem ser explicados em termos de outros fatores. Idealmente, esses fatores, chamados de causas raízes, devem ser tais que possam ser eliminados ou mitigados, mas isso não é necessariamente o caso. Por exemplo, no contexto de um processo de tratamento de sinistros de seguro, um certo tipo de erro em um relatório policial pode ser devido à falta de tempo e cronogramas apertados do lado dos agentes policiais envolvidos na elaboração desses relatórios. Há relativamente pouco que a seguradora pode fazer nesse caso para eliminar o erro, além de levantar o problema com as autoridades relevantes. No entanto, o impacto desse fator poderia ser mitigado ao implementar verificações para detectar esses erros o mais cedo possível no processo.

Um modelo simples para diagramas de porquê-porquê é dado na Fig. 6.3. Uma maneira alternativa de apresentar as informações nesses diagramas é por meio de listas de marcadores aninhadas. No restante deste capítulo, optaremos pela representação de listas de marcadores aninhadas.

**Exemplo 6.3**
Consideremos novamente o processo de aluguel de equipamentos descrito no Exemplo 1.1 (p. 2). No Exemplo 6.2 acima, observamos que um dos problemas com esse processo é que o engenheiro de obras às vezes rejeita o equipamento na entrega porque não é adequado para o trabalho em questão. Outro problema é que a BuildIT gasta mais com aluguel de equipamentos do que o planejado. Um auditor apontou que uma das razões para o gasto excessivo era que os engenheiros de obras estavam mantendo o equipamento alugado por mais tempo do que o inicialmente planejado, usando extensões de prazo. Os engenheiros de obras sabiam que era fácil obter uma extensão de prazo. Eles também sabiam que levava bastante tempo para aprovar solicitações de aluguel de equipamentos, e quanto maior o custo e a duração do aluguel, mais lento era para obter a aprovação. Então, em muitos casos, os engenheiros de obras alugavam equipamentos vários dias antes da data em que realmente precisavam deles. Além disso, eles especificavam períodos curtos em suas solicitações de aluguel de equipamentos para obter a aprovação mais rapidamente. Quando o prazo para devolver um equipamento se aproximava, eles simplesmente ligavam para o fornecedor para manter o equipamento por um período mais longo.

Outro problema apontado pelo auditor é que uma quantidade significativa de taxas de penalidade por pagamento atrasado era paga aos fornecedores porque as faturas de aluguel de equipamentos não eram pagas até a data de vencimento. Os escriturários culpavam os engenheiros de obras por serem lentos na aprovação das faturas.

Em resumo, podemos distinguir pelo menos três problemas. Primeiro, o equipamento errado está sendo entregue em algumas ocasiões. Em segundo lugar, os engenheiros de obras frequentemente solicitam extensões de prazo. Em terceiro lugar, a BuildIT está frequentemente pagando taxas de pagamento atrasado aos fornecedores. Uma possível análise de causa raiz desses problemas leva aos seguintes diagramas de porquê-porquê (representados como listas de marcadores aninhadas).

**Problema 1**
Os engenheiros de obras às vezes rejeitam o equipamento entregue, por quê?
- Equipamento errado é entregue, por quê?
  - Má comunicação entre engenheiro de obras e escriturário, por quê?
    - Engenheiro de obras fornece apenas uma descrição breve/imprecisa do que deseja
    - Engenheiro de obras não (sempre) vê os catálogos dos fornecedores ao fazer uma solicitação e não se comunica com o fornecedor, por quê?
      - Engenheiro de obras geralmente não tem conectividade com a Internet
    - Engenheiro de obras não verifica a escolha do equipamento feita pelo escriturário
  - Descrições dos equipamentos nos catálogos dos fornecedores não são precisas

**Problema 2**
Os engenheiros de obras mantêm o equipamento por mais tempo do que o necessário por meio de extensões de prazo, por quê?
- Engenheiro de obras teme que o equipamento não estará disponível mais tarde quando necessário, por quê?
  - Tempo entre a solicitação e a entrega é muito longo, por quê?
    - Tempo excessivo gasto para encontrar um equipamento adequado e aprovar a solicitação, por quê?
      - Tempo gasto pelo escriturário contatando possivelmente vários fornecedores sequencialmente
      - Tempo gasto esperando o engenheiro de obras verificar as solicitações

**Problema 3**
A BuildIT frequentemente tem que pagar taxas de pagamento atrasado aos fornecedores, por quê?
- Tempo entre a fatura recebida pelo escriturário e a confirmação é muito longo, por quê?
  - O escriturário precisa de confirmação do engenheiro de obras, por quê?
    - O escriturário não pode afirmar quando o equipamento foi entregue e retirado, por quê?
      - A entrega e retirada dos equipamentos não são registradas em um sistema de informação compartilhado
      - O engenheiro de obras pode estender o período de aluguel do equipamento sem informar o escriturário
    - O engenheiro de obras demora muito para confirmar a fatura, por quê?
      - Confirmar faturas não é uma prioridade para o engenheiro de obras

**Exercício 6.3**
Considere novamente o processo de admissão universitária descrito no Exercício 1.1 (p. 4) e o problema descrito no Exercício 6.2 acima. Analise esse problema usando um diagrama de porquê-porquê.

## 6.3 Documentação de Problemas e Avaliação de Impacto

As técnicas de análise de causa raiz nos permitem entender os fatores por trás de um determinado problema. Um próximo passo natural é entender o impacto desses problemas. Construir essa compreensão é fundamental para priorizar os problemas para que a atenção do dono do processo, dos participantes e dos analistas possa ser focada nos problemas que mais importam para a organização. Abaixo, discutimos duas técnicas complementares para avaliação de impacto.

### 6.3.1 Registro de Problemas

O registro de problemas complementa o resultado da análise de causa raiz ao fornecer uma análise mais detalhada de problemas individuais e seu impacto. O objetivo do registro de problemas é determinar como e em que medida cada problema está impactando o desempenho do processo. O impacto de um problema pode ser descrito quantitativamente, por exemplo, em termos de tempo ou dinheiro perdido, ou qualitativamente, em termos de incômodo percebido pelo cliente ou riscos percebidos que o problema implica. Por exemplo, incômodos causados ao cliente devido a mal-entendidos durante a execução do processo podem ser classificados como impacto qualitativo, pois é difícil traduzir esse incômodo em uma medida monetária.

Concretamente, um registro de problemas é uma listagem que fornece uma análise detalhada de cada problema e seu impacto na forma de uma tabela com um conjunto predefinido de campos. Os seguintes campos são tipicamente descritos para cada problema:
- Nome do problema: Esse nome deve ser curto, tipicamente duas a cinco palavras, e deve ser compreensível por todos os stakeholders do processo.
- Descrição: Uma breve descrição do problema, tipicamente uma a três frases, focada no problema em si, em vez de suas consequências ou impacto, que são descritos separadamente.
- Prioridade: Um número (1, 2, 3, ...) indicando a importância desse problema em relação a outros problemas. Observe que vários problemas podem ter o mesmo número de prioridade.
- Pressupostos (ou dados de entrada): Quaisquer dados utilizados ou pressupostos feitos na estimativa do impacto do problema, como, por exemplo, número de vezes que um determinado resultado negativo ocorre ou perda estimada por ocorrência de um resultado negativo. Nas fases iniciais do desenvolvimento do registro de problemas, os números nesta coluna serão principalmente pressupostos ou estimativas gerais. Com o tempo, esses pressupostos e estimativas aproximadas serão substituídos por números mais confiáveis derivados de dados reais sobre a execução do processo.
- Impacto qualitativo: Uma descrição do impacto do problema em termos qualitativos, como impacto do problema na satisfação do cliente, satisfação dos funcionários, relacionamentos de longo prazo com fornecedores, reputação da empresa ou outro impacto intangível que é difícil de quantificar.
- Impacto quantitativo: Uma estimativa do impacto do problema em termos quantitativos, como perda de tempo, perda de receita ou custos evitáveis.

Outros campos podem ser adicionados a um registro de problemas. Por exemplo, com vistas ao redesenho de processos, pode ser útil incluir um atributo de resolução possível que descreva mecanismos possíveis para resolver o problema.

**Exemplo 6.4**
Consideremos novamente o processo de aluguel de equipamentos descrito no Exemplo 1.1 (p. 2) e os problemas descritos acima nos Exemplos 6.2 e 6.3. O registro de problemas apresentado na Tabela 6.2 fornece uma análise mais detalhada desses problemas e seu impacto.

Tabela 6.2 Registro de problemas do processo de aluguel de equipamentos

| Problema 1: Equipamento mantido por mais tempo do que o necessário |
| --- |
| **Prioridade:** 1 |
| **Descrição:** Os engenheiros de obras mantêm o equipamento por mais tempo do que o necessário por meio de extensões de prazo |
| **Pressupostos:** A BuildIT aluga 3000 peças de equipamento por ano. Em 10% dos casos, os engenheiros de obras mantêm o equipamento dois dias a mais do que o necessário para evitar interrupções devido a atrasos no aluguel de equipamentos. Em média, o equipamento alugado custa € 100 por dia |
| **Impacto qualitativo:** Não aplicável |
| **Impacto quantitativo:** 0,1 × 3000 × 2 × € 100 = € 60.000 em despesas adicionais de aluguel por ano |

| Problema 2: Equipamento rejeitado |
| --- |
| **Prioridade:** 2 |
| **Descrição:** Os engenheiros de obras às vezes rejeitam o equipamento entregue devido à não conformidade com suas especificações |
| **Pressupostos:** A BuildIT aluga 3000 peças de equipamento por ano. Cada vez que um equipamento é rejeitado devido a um erro da BuildIT, a BuildIT é cobrada pelo custo de um dia de aluguel, que é de € 100. 5% deles são rejeitados devido a um erro interno da BuildIT (em oposição a um erro do fornecedor) |
| **Impacto qualitativo:** Esses eventos interrompem os cronogramas de construção e criam frustração e conflitos internos |
| **Impacto quantitativo:** 3000 × 0,05 × € 100 = € 15.000 por ano |

| Problema 3: Taxas de pagamento atrasado |
| --- |
| **Prioridade:** 3 |
| **Descrição:** A BuildIT paga taxas de pagamento atrasado porque as faturas não são pagas até a data de vencimento |
| **Pressupostos:** A BuildIT aluga 3000 peças de equipamento por ano. Cada equipamento é alugado em média por 4 dias a uma taxa de € 100 por dia. Cada aluguel leva a uma fatura. Cerca de 10% das faturas são pagas com atraso. Em média, a penalidade por pagamento atrasado é de 2% do valor da fatura |
| **Impacto qualitativo:** Os fornecedores ficam incomodados e, posteriormente, relutantes em negociar condições mais favoráveis para o aluguel de equipamentos |
| **Impacto quantitativo:** 0,1 × 3000 × 4 × € 100 × 0,02 = € 2400 por ano |

**Questão: Problema ou fator?**
Um registro de problemas provavelmente conterá uma mistura de problemas que têm um impacto direto no desempenho dos negócios e outros que são essencialmente fatores causais ou contribuintes de outros problemas que então impactam o desempenho dos negócios. Em outras palavras, o registro de problemas contém tanto problemas quanto fatores. Por exemplo, no registro de problemas do processo de aluguel de equipamentos, pode-se encontrar as seguintes entradas:
- Escriturário não entendeu os requisitos do engenheiro de obras para um equipamento.
- Escriturário não selecionou o equipamento correto do catálogo do fornecedor devido à desatenção.
- Escriturário indicou uma data de entrega incorreta na OC e o fornecedor usou essa data errada.
- Fornecedor não entregou o equipamento exato que foi encomendado.
- Equipamento entregue está com defeito ou não está pronto para uso.
- Fornecedor entregou o equipamento no canteiro de obras errado ou na hora errada.

Todos os problemas acima são possíveis fatores causais ou contribuintes de um problema de alto nível, ou seja, "Equipamento é rejeitado pelo engenheiro de obras". O fato de o engenheiro de obras rejeitar o equipamento cria um impacto direto para a BuildIT, por exemplo, em termos de atrasos no cronograma de construção. Enquanto isso, os problemas listados acima têm um impacto indireto nos negócios, na medida em que levam ao equipamento sendo rejeitado e ao equipamento necessário não estando disponível a tempo, o que por sua vez leva a atrasos no cronograma de construção.

Quando um registro de problemas contém uma combinação de problemas e fatores, pode ser útil adicionar dois campos ao registro, a saber, "causado por" e "é causa de", que indicam para um determinado problema quais outros problemas no registro estão relacionados a ele por meio de uma relação de causa e efeito. Dessa forma, torna-se mais fácil identificar quais problemas estão relacionados entre si para que problemas relacionados possam ser analisados juntos. Além disso, quando um problema X é um fator de um problema Y, em vez de analisar tanto o impacto de X quanto de Y, podemos analisar o impacto de Y e nos campos de impacto qualitativo e quantitativo de X podemos simplesmente nos referir ao impacto de Y. Por exemplo, no campo de impacto do problema "Escriturário não entendeu os requisitos do engenheiro de obras", podemos simplesmente nos referir ao impacto de "Equipamento é rejeitado pelo engenheiro de obras".

Alternativamente, podemos adotar a convenção de incluir no registro de problemas apenas problemas de alto nível, ou seja, problemas que têm um impacto direto nos negócios, e separadamente, podemos usar diagramas de porquê-porquê e diagramas de causa e efeito para documentar os fatores que sustentam esses problemas de alto nível. Essa convenção é seguida no restante deste capítulo, o que significa que os registros de problemas mostrados abaixo contêm apenas problemas de alto nível, em vez de fatores.

**Exercício 6.4**
Escreva um registro de problemas para o processo de admissão universitária e o problema descrito no Exercício 6.2.

### 6.3.2 Análise de Pareto e Gráficos PICK

A avaliação de impacto conduzida ao construir o registro de problemas pode servir como entrada para a análise de Pareto. O objetivo da análise de Pareto é identificar quais problemas ou quais fatores causais de um problema devem receber prioridade. A análise de Pareto baseia-se no princípio de que um pequeno número de fatores é responsável pela maior parte de um dado efeito. Em outras palavras:
- Um pequeno subconjunto de problemas no registro de problemas é provavelmente responsável pela maior parte do impacto.
- Para um dado problema, um pequeno subconjunto de fatores por trás desse problema é provavelmente responsável pela maior parte das ocorrências desse problema.

Às vezes, esse princípio também é chamado de princípio 80-20, significando que 20% dos problemas são responsáveis por 80% do efeito. Deve-se lembrar, no entanto, que as proporções específicas são apenas indicativas. Pode ser, por exemplo, que 30% dos problemas sejam responsáveis por 70% do efeito.

Uma abordagem típica para conduzir a análise de Pareto é a seguinte:
1. Definir o efeito a ser analisado e a medida pela qual esse efeito será quantificado. A medida pode ser, por exemplo:
   - Perda financeira para o cliente ou para a empresa.
   - Perda de tempo pelo cliente ou pelos participantes do processo.
   - Número de ocorrências de um resultado negativo, como o número de clientes insatisfeitos devido a erros cometidos ao lidar com seu caso.

2. Identificar todos os problemas relevantes que contribuem para o efeito a ser analisado.

3. Quantificar cada problema de acordo com a medida escolhida. Este passo pode ser feito com base no registro de problemas, em particular, na coluna de impacto quantitativo do registro.

4. Ordenar os problemas de acordo com a medida escolhida (do maior para o menor impacto) e desenhar um gráfico de Pareto. Um gráfico de Pareto consiste em dois componentes:
   - Um gráfico de barras onde cada barra corresponde a um problema e a altura da barra é proporcional ao impacto do problema ou fator.
   - Uma curva que plota o percentual cumulativo de impacto dos problemas. Por exemplo, se o problema com o maior impacto for responsável por 40% do impacto, essa curva terá um ponto com uma coordenada y de 0,4 e uma coordenada x posicionada de forma a coincidir com a primeira barra no gráfico de barras.

**Exemplo 6.5**
Consideremos novamente o processo de aluguel de equipamentos descrito no Exemplo 1.1 (p. 2) e o registro de problemas no Exemplo 6.4. Todos os três problemas nesse registro têm em comum que são responsáveis por despesas desnecessárias de aluguel, que é uma forma de perda financeira. A partir dos dados na coluna de impacto do registro, podemos plotar o gráfico de Pareto na Fig. 6.4.

Esse gráfico de Pareto mostra que o problema "Aprovação lenta do aluguel" é responsável por 63% das despesas desnecessárias de aluguel. Dado que neste exemplo existem apenas três problemas, alguém poderia ter chegado a essa conclusão sem conduzir a análise de Pareto. Na prática, porém, um registro de problemas pode conter dezenas ou centenas de problemas, tornando a análise de Pareto uma ferramenta útil para resumir os dados no registro de problemas.

**Exercício 6.5**
Vamos considerar novamente o processo de aluguel de equipamentos. Desta vez, assumimos a perspectiva do engenheiro de obras, cujo objetivo é ter o equipamento necessário disponível no local quando necessário. Nessa perspectiva, o principal problema é que em cerca de 10% dos casos, o equipamento solicitado não está disponível no local no dia em que é necessário. Quando isso acontece, o engenheiro de obras contata diretamente os fornecedores para resolver o problema, mas ainda assim, resolver o problema pode levar vários dias. Estima-se que cada um desses atrasos custa € 400 por dia para a BuildIT. Ao inspecionar uma amostra aleatória de entregas de equipamentos atrasadas durante um período de um ano e investigar a causa de cada ocorrência, um analista descobriu que:
1. Cinco ocorrências foram devido ao engenheiro de obras não ter solicitado o equipamento com antecedência suficiente: os engenheiros de obras solicitaram o equipamento no dia anterior ao necessário, quando são necessários pelo menos dois dias. Esses casos causam atrasos de um dia em média.
2. Nove ocorrências foram devido ao fato de que nenhum dos fornecedores da BuildIT tinha o tipo de equipamento necessário disponível no dia solicitado. Esses casos causam atrasos de um a quatro dias (três dias em média).
3. Treze ocorrências foram devido ao processo de aprovação demorar muito (mais de um dia) devido a erros ou mal-entendidos. Para esses casos, o atraso foi de um dia em média.
4. Vinte e sete ocorrências foram devido ao equipamento ter sido entregue a tempo, mas o equipamento não era adequado e o engenheiro de obras o rejeitou. Esses casos causam atrasos de dois dias em média.
5. Quatro ocorrências foram devido a erros ou atrasos atribuíveis inteiramente ao fornecedor. Esses casos levam a atrasos de um dia. No entanto, nesses casos, o fornecedor compensou a BuildIT fornecendo o equipamento por dois dias gratuitamente (os dias restantes ainda são cobrados). Lembre-se de que o custo médio de um aluguel de equipamento por dia é de € 100.
6. Em duas ocorrências, o analista não conseguiu determinar a causa do atraso (os participantes do processo não conseguiam lembrar os detalhes). Os atrasos nesses casos foram de dois dias por ocorrência.

A amostra de ocorrências analisadas representa cerca de 20% de todas as ocorrências do problema durante um período de um ano.

Desenhe um gráfico de Pareto correspondente aos dados acima.

Vale ressaltar que a análise de Pareto se concentra em uma única dimensão. No exemplo acima, a dimensão sob análise é o impacto em termos monetários. Em outras palavras, focamos no retorno estimado de resolver um problema. Além do retorno, há outra dimensão que deve ser levada em conta ao decidir quais problemas devem receber maior prioridade, a saber, o nível de dificuldade de resolver um problema. Esse nível de dificuldade pode ser quantificado em termos do montante de investimento necessário para mudar o processo a fim de resolver o problema em questão. Um tipo de gráfico que pode ser usado como complemento aos gráficos de Pareto para levar em conta a dimensão da dificuldade é o gráfico PICK. Um gráfico PICK (veja a Fig. 6.5) é um gráfico de quatro quadrantes onde cada problema aparece como um ponto. O eixo horizontal captura a dificuldade de resolver o problema (ou mais especificamente a dificuldade de implementar uma ideia de melhoria que resolva o problema), enquanto o eixo vertical captura o retorno. O eixo horizontal (dificuldade) é dividido em duas seções (fácil e difícil), enquanto o eixo vertical (retorno) é dividido em baixo e alto. Essas divisões levam a quatro quadrantes que permitem aos analistas classificar os problemas de acordo com a compensação entre retorno e dificuldade:
- Possível (baixo retorno, fácil de fazer): problemas que podem ser resolvidos se houver recursos suficientes para isso.
- Implementar (alto retorno, fácil de fazer): problemas que definitivamente devem ser resolvidos como uma questão de prioridade.
- Desafio (alto retorno, difícil de fazer): problemas que devem ser resolvidos, mas exigem um esforço significativo. Em geral, deve-se escolher um desses desafios e focar nele em vez de resolver todos ou múltiplos desafios de uma vez.
- Eliminar (baixo retorno, difícil de fazer): problemas que provavelmente não valem a pena resolver ou pelo menos não na sua totalidade.

## 6.4 Recapitulação

Neste capítulo, apresentamos uma seleção de técnicas para análise qualitativa de processos de negócios. A primeira técnica apresentada, a saber, análise de valor agregado, visa identificar desperdícios, especificamente tempo desperdiçado em atividades que não agregam valor ao cliente ou ao negócio. Em seguida, apresentamos duas técnicas para descobrir as causas de problemas que afetam o desempenho de um processo, a saber, análise de causa e efeito e análise de porquê-porquê. Enquanto a análise de causa e efeito se concentra em classificar os fatores que sustentam as ocorrências de um problema, a análise de porquê-porquê se concentra em identificar as relações recursivas de causa e efeito entre esses fatores.

Finalmente, apresentamos uma abordagem para documentar sistematicamente problemas em um processo, a saber, o registro de problemas. O objetivo de um registro de problemas é documentar problemas de forma semi-estruturada e analisar seu impacto nos negócios tanto de um ângulo qualitativo quanto quantitativo. Em particular, o registro de problemas fornece um ponto de partida para construir gráficos de Pareto e gráficos PICK – duas técnicas de visualização que fornecem uma visão geral de um conjunto de problemas. Esses gráficos ajudam os analistas a focar sua atenção nos problemas que oferecem o melhor retorno (no caso dos gráficos de Pareto) ou a melhor compensação entre retorno e dificuldade (no caso dos gráficos PICK).

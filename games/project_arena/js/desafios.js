// ============================================================
// Descrição geral: banco de missões do Project Arena
// Data de criação: 29/06/2026
// Versão: 1.2
// Copyright: Clayton Silva
// ============================================================

const desafios = [
    {
        id: 1,
        tema: "Projeto × Processo",
        nivel: 1,
        dificuldade: "Básico",
        tempo: 60,
        pontos: 100,
        xp: 100,
        titulo: "Missão 1 - Identificar um Projeto",
        enunciado: "Uma empresa deseja implantar um novo sistema de gestão integrada. A iniciativa possui início, fim, objetivo específico e entrega única. Como ela deve ser classificada?",
        alternativas: {
            A: "Processo operacional contínuo.",
            B: "Projeto.",
            C: "Rotina administrativa permanente.",
            D: "Atividade repetitiva de manutenção."
        },
        correta: "B",
        feedbackCorreto: "Correto. Um projeto é temporário e gera uma entrega única.",
        feedbackErro: "A iniciativa tem início, fim e entrega única; portanto, caracteriza um projeto."
    },
    {
        id: 2,
        tema: "Projeto × Processo",
        nivel: 1,
        dificuldade: "Básico",
        tempo: 60,
        pontos: 100,
        xp: 100,
        titulo: "Missão 2 - Reconhecer um Processo",
        enunciado: "O setor financeiro realiza mensalmente o pagamento dos fornecedores seguindo uma rotina padronizada. Essa atividade é melhor classificada como:",
        alternativas: {
            A: "Projeto.",
            B: "Processo operacional.",
            C: "Programa.",
            D: "Portfólio."
        },
        correta: "B",
        feedbackCorreto: "Correto. Atividades contínuas e repetitivas caracterizam processos.",
        feedbackErro: "Como a atividade é recorrente e padronizada, trata-se de um processo operacional."
    },
    {
        id: 3,
        tema: "Projeto × Processo",
        nivel: 2,
        dificuldade: "Intermediário",
        tempo: 75,
        pontos: 120,
        xp: 120,
        titulo: "Missão 3 - Diferenciar Entrega Única",
        enunciado: "Uma equipe desenvolve um protótipo de equipamento para uma feira tecnológica. O protótipo será entregue uma única vez, em data definida. Qual característica está mais evidente?",
        alternativas: {
            A: "Rotina permanente.",
            B: "Entrega única.",
            C: "Operação contínua.",
            D: "Atividade sem prazo."
        },
        correta: "B",
        feedbackCorreto: "Correto. A entrega única é uma característica essencial de projetos.",
        feedbackErro: "O protótipo é uma entrega específica e não uma rotina contínua."
    },
    {
        id: 4,
        tema: "Projeto × Processo",
        nivel: 2,
        dificuldade: "Intermediário",
        tempo: 75,
        pontos: 120,
        xp: 120,
        titulo: "Missão 4 - Projeto dentro da Operação",
        enunciado: "Uma fábrica opera continuamente, mas decide criar uma nova linha de produção. A criação da nova linha é:",
        alternativas: {
            A: "Um processo, pois ocorre dentro da fábrica.",
            B: "Um projeto, pois tem objetivo específico e caráter temporário.",
            C: "Uma rotina de manutenção.",
            D: "Uma atividade sem escopo."
        },
        correta: "B",
        feedbackCorreto: "Correto. Mesmo dentro de uma operação contínua, uma iniciativa temporária pode ser um projeto.",
        feedbackErro: "A criação da nova linha tem objetivo específico e prazo, portanto é projeto."
    },
    {
        id: 5,
        tema: "Projeto × Processo",
        nivel: 3,
        dificuldade: "Avançado",
        tempo: 90,
        pontos: 150,
        xp: 150,
        titulo: "Missão 5 - Projeto, Programa ou Portfólio",
        enunciado: "Uma organização reúne vários projetos relacionados para modernizar toda a infraestrutura tecnológica da empresa. Esse conjunto coordenado é melhor classificado como:",
        alternativas: {
            A: "Programa.",
            B: "Processo operacional.",
            C: "Atividade isolada.",
            D: "Tarefa administrativa."
        },
        correta: "A",
        feedbackCorreto: "Correto. Um programa reúne projetos relacionados coordenados para gerar benefícios integrados.",
        feedbackErro: "Quando vários projetos relacionados são coordenados em conjunto, temos um programa."
    },

    {
        id: 6,
        tema: "Escopo",
        nivel: 1,
        dificuldade: "Básico",
        tempo: 60,
        pontos: 100,
        xp: 100,
        titulo: "Missão 6 - Entender Escopo",
        enunciado: "O escopo de um projeto define principalmente:",
        alternativas: {
            A: "Apenas o custo total.",
            B: "O que será entregue e o que está incluído no projeto.",
            C: "Somente a equipe alocada.",
            D: "Apenas o cronograma."
        },
        correta: "B",
        feedbackCorreto: "Correto. O escopo define as entregas e os limites do projeto.",
        feedbackErro: "Escopo não é apenas prazo ou custo; ele define entregas e limites."
    },
    {
        id: 7,
        tema: "Escopo",
        nivel: 1,
        dificuldade: "Básico",
        tempo: 60,
        pontos: 100,
        xp: 100,
        titulo: "Missão 7 - Mudança de Escopo",
        enunciado: "Durante o projeto, o cliente solicita uma funcionalidade não prevista. O que a equipe deve fazer primeiro?",
        alternativas: {
            A: "Executar imediatamente.",
            B: "Ignorar a solicitação.",
            C: "Registrar e avaliar o impacto da mudança.",
            D: "Encerrar o projeto."
        },
        correta: "C",
        feedbackCorreto: "Correto. Mudanças precisam ser registradas e avaliadas antes da aprovação.",
        feedbackErro: "A solicitação deve ser analisada quanto a prazo, custo, qualidade e riscos."
    },
    {
        id: 8,
        tema: "Escopo",
        nivel: 2,
        dificuldade: "Intermediário",
        tempo: 75,
        pontos: 120,
        xp: 120,
        titulo: "Missão 8 - Escopo Mal Definido",
        enunciado: "Um projeto começa sem definir claramente suas entregas. Qual consequência é mais provável?",
        alternativas: {
            A: "Redução automática do custo.",
            B: "Maior risco de retrabalho e conflitos.",
            C: "Eliminação dos riscos.",
            D: "Aumento garantido da qualidade."
        },
        correta: "B",
        feedbackCorreto: "Correto. Escopo mal definido aumenta retrabalho, conflitos e mudanças não controladas.",
        feedbackErro: "Sem clareza nas entregas, aumentam as chances de divergência e retrabalho."
    },
    {
        id: 9,
        tema: "Escopo",
        nivel: 2,
        dificuldade: "Intermediário",
        tempo: 75,
        pontos: 120,
        xp: 120,
        titulo: "Missão 9 - Critério de Aceitação",
        enunciado: "Um critério de aceitação serve para:",
        alternativas: {
            A: "Definir como uma entrega será considerada aprovada.",
            B: "Substituir o orçamento.",
            C: "Eliminar a necessidade de testes.",
            D: "Aumentar automaticamente o prazo."
        },
        correta: "A",
        feedbackCorreto: "Correto. Critérios de aceitação indicam como validar se a entrega atende ao esperado.",
        feedbackErro: "Critérios de aceitação ajudam a verificar objetivamente a entrega."
    },
    {
        id: 10,
        tema: "Escopo",
        nivel: 3,
        dificuldade: "Avançado",
        tempo: 90,
        pontos: 150,
        xp: 150,
        titulo: "Missão 10 - Controle Integrado de Mudanças",
        enunciado: "Uma mudança de escopo aprovada afeta prazo, custo e riscos. O procedimento mais adequado é:",
        alternativas: {
            A: "Alterar apenas a lista de tarefas.",
            B: "Atualizar planos afetados e comunicar as partes interessadas.",
            C: "Registrar informalmente em conversa.",
            D: "Executar sem informar ninguém."
        },
        correta: "B",
        feedbackCorreto: "Correto. Mudanças aprovadas exigem atualização dos planos e comunicação adequada.",
        feedbackErro: "Mudanças aprovadas precisam ser refletidas nos documentos e comunicadas aos stakeholders."
    },

    {
        id: 11,
        tema: "Stakeholders",
        nivel: 1,
        dificuldade: "Básico",
        tempo: 60,
        pontos: 100,
        xp: 100,
        titulo: "Missão 11 - Identificar Stakeholders",
        enunciado: "Stakeholders são:",
        alternativas: {
            A: "Apenas os fornecedores.",
            B: "Apenas os clientes.",
            C: "Partes que afetam ou são afetadas pelo projeto.",
            D: "Somente os concorrentes."
        },
        correta: "C",
        feedbackCorreto: "Correto. Stakeholders são partes interessadas no projeto.",
        feedbackErro: "Stakeholders incluem todos que afetam ou são afetados pelo projeto."
    },
    {
        id: 12,
        tema: "Stakeholders",
        nivel: 1,
        dificuldade: "Básico",
        tempo: 60,
        pontos: 100,
        xp: 100,
        titulo: "Missão 12 - Patrocinador",
        enunciado: "O patrocinador do projeto normalmente é a parte interessada que:",
        alternativas: {
            A: "Fornece apoio, recursos e autoridade ao projeto.",
            B: "Executa todas as tarefas técnicas.",
            C: "Substitui o gerente do projeto.",
            D: "Elabora sozinho todo o cronograma."
        },
        correta: "A",
        feedbackCorreto: "Correto. O patrocinador fornece apoio, recursos e legitimidade ao projeto.",
        feedbackErro: "O patrocinador apoia o projeto e ajuda a viabilizá-lo."
    },
    {
        id: 13,
        tema: "Stakeholders",
        nivel: 2,
        dificuldade: "Intermediário",
        tempo: 75,
        pontos: 120,
        xp: 120,
        titulo: "Missão 13 - Engajamento",
        enunciado: "Um stakeholder importante demonstra resistência ao projeto. A melhor ação inicial é:",
        alternativas: {
            A: "Ignorar a resistência.",
            B: "Mapear suas expectativas e preocupações.",
            C: "Removê-lo formalmente do projeto.",
            D: "Reduzir a comunicação."
        },
        correta: "B",
        feedbackCorreto: "Correto. A gestão de stakeholders exige compreender interesses, influência e expectativas.",
        feedbackErro: "A resistência deve ser compreendida antes de se definir uma estratégia de engajamento."
    },
    {
        id: 14,
        tema: "Stakeholders",
        nivel: 2,
        dificuldade: "Intermediário",
        tempo: 75,
        pontos: 120,
        xp: 120,
        titulo: "Missão 14 - Comunicação",
        enunciado: "Um stakeholder de alta influência e alto interesse deve receber:",
        alternativas: {
            A: "Pouca informação.",
            B: "Comunicação eventual e genérica.",
            C: "Acompanhamento próximo e comunicação frequente.",
            D: "Somente o relatório final."
        },
        correta: "C",
        feedbackCorreto: "Correto. Stakeholders com alta influência e interesse exigem acompanhamento próximo.",
        feedbackErro: "Quanto maior influência e interesse, maior deve ser o cuidado com comunicação e engajamento."
    },
    {
        id: 15,
        tema: "Stakeholders",
        nivel: 3,
        dificuldade: "Avançado",
        tempo: 90,
        pontos: 150,
        xp: 150,
        titulo: "Missão 15 - Conflito de Interesses",
        enunciado: "Dois stakeholders estratégicos defendem prioridades opostas para o projeto. O gerente deve:",
        alternativas: {
            A: "Escolher automaticamente o mais influente.",
            B: "Ignorar os dois.",
            C: "Negociar, explicitar impactos e buscar alinhamento com os objetivos do projeto.",
            D: "Cancelar todas as entregas."
        },
        correta: "C",
        feedbackCorreto: "Correto. Conflitos devem ser tratados com negociação, transparência e foco nos objetivos.",
        feedbackErro: "A melhor abordagem é negociar e explicitar impactos para apoiar a tomada de decisão."
    },

    {
        id: 16,
        tema: "EAP",
        nivel: 1,
        dificuldade: "Básico",
        tempo: 60,
        pontos: 100,
        xp: 100,
        titulo: "Missão 16 - Conceito de EAP",
        enunciado: "A Estrutura Analítica do Projeto, ou EAP, serve para:",
        alternativas: {
            A: "Decompor o trabalho do projeto em partes menores e gerenciáveis.",
            B: "Substituir o gerente do projeto.",
            C: "Eliminar o cronograma.",
            D: "Registrar apenas os custos."
        },
        correta: "A",
        feedbackCorreto: "Correto. A EAP organiza as entregas em componentes menores.",
        feedbackErro: "A EAP ajuda a decompor e organizar o escopo do projeto."
    },
    {
        id: 17,
        tema: "EAP",
        nivel: 1,
        dificuldade: "Básico",
        tempo: 60,
        pontos: 100,
        xp: 100,
        titulo: "Missão 17 - Pacote de Trabalho",
        enunciado: "Na EAP, um pacote de trabalho representa:",
        alternativas: {
            A: "Um conjunto de entregas ou atividades no menor nível de decomposição útil.",
            B: "Uma reunião informal.",
            C: "Um risco já ocorrido.",
            D: "Um contrato encerrado."
        },
        correta: "A",
        feedbackCorreto: "Correto. Pacotes de trabalho são unidades gerenciáveis da EAP.",
        feedbackErro: "Pacotes de trabalho permitem planejar, controlar e atribuir responsabilidades."
    },
    {
        id: 18,
        tema: "EAP",
        nivel: 2,
        dificuldade: "Intermediário",
        tempo: 75,
        pontos: 120,
        xp: 120,
        titulo: "Missão 18 - Decomposição",
        enunciado: "Ao decompor uma entrega muito grande em partes menores, a equipe busca:",
        alternativas: {
            A: "Dificultar o controle.",
            B: "Facilitar planejamento, estimativas e acompanhamento.",
            C: "Eliminar a necessidade de responsabilidades.",
            D: "Impedir a comunicação."
        },
        correta: "B",
        feedbackCorreto: "Correto. A decomposição melhora planejamento, controle e estimativas.",
        feedbackErro: "Dividir entregas facilita a gestão e reduz ambiguidades."
    },
    {
        id: 19,
        tema: "EAP",
        nivel: 2,
        dificuldade: "Intermediário",
        tempo: 75,
        pontos: 120,
        xp: 120,
        titulo: "Missão 19 - EAP e Escopo",
        enunciado: "Uma EAP bem construída ajuda principalmente a evitar:",
        alternativas: {
            A: "Clareza no escopo.",
            B: "Omissões e trabalho fora do escopo.",
            C: "A comunicação com a equipe.",
            D: "A definição de entregas."
        },
        correta: "B",
        feedbackCorreto: "Correto. A EAP ajuda a evitar omissões e trabalho não previsto.",
        feedbackErro: "A EAP organiza o escopo e ajuda a controlar o que está ou não incluído."
    },
    {
        id: 20,
        tema: "EAP",
        nivel: 3,
        dificuldade: "Avançado",
        tempo: 90,
        pontos: 150,
        xp: 150,
        titulo: "Missão 20 - EAP Orientada a Entregas",
        enunciado: "Uma boa prática na construção da EAP é estruturá-la preferencialmente por:",
        alternativas: {
            A: "Entregas do projeto.",
            B: "Opiniões pessoais.",
            C: "Problemas ainda não confirmados.",
            D: "Apenas nomes dos membros da equipe."
        },
        correta: "A",
        feedbackCorreto: "Correto. A EAP deve ser orientada às entregas do projeto.",
        feedbackErro: "A EAP deve organizar o escopo por entregas, não apenas por pessoas ou opiniões."
    },

    {
        id: 21,
        tema: "Cronograma",
        nivel: 1,
        dificuldade: "Básico",
        tempo: 60,
        pontos: 100,
        xp: 100,
        titulo: "Missão 21 - Sequenciamento",
        enunciado: "Sequenciar atividades significa:",
        alternativas: {
            A: "Definir a ordem lógica de execução das atividades.",
            B: "Escolher apenas a equipe.",
            C: "Ignorar dependências.",
            D: "Eliminar estimativas."
        },
        correta: "A",
        feedbackCorreto: "Correto. Sequenciamento define a ordem e as dependências entre atividades.",
        feedbackErro: "Sequenciar é organizar a ordem lógica das atividades."
    },
    {
        id: 22,
        tema: "Cronograma",
        nivel: 1,
        dificuldade: "Básico",
        tempo: 60,
        pontos: 100,
        xp: 100,
        titulo: "Missão 22 - Caminho Crítico",
        enunciado: "O caminho crítico de um projeto representa:",
        alternativas: {
            A: "A sequência de atividades que determina a duração mínima do projeto.",
            B: "A atividade mais barata.",
            C: "A reunião mais importante.",
            D: "O fornecedor principal."
        },
        correta: "A",
        feedbackCorreto: "Correto. O caminho crítico determina a duração mínima do projeto.",
        feedbackErro: "Atrasos no caminho crítico tendem a atrasar o projeto como um todo."
    },
    {
        id: 23,
        tema: "Cronograma",
        nivel: 2,
        dificuldade: "Intermediário",
        tempo: 75,
        pontos: 120,
        xp: 120,
        titulo: "Missão 23 - Dependências",
        enunciado: "Se a atividade B só pode começar após a conclusão da atividade A, existe uma relação de:",
        alternativas: {
            A: "Independência total.",
            B: "Precedência.",
            C: "Cancelamento.",
            D: "Aceitação."
        },
        correta: "B",
        feedbackCorreto: "Correto. A atividade A precede a atividade B.",
        feedbackErro: "A relação descrita é de precedência entre atividades."
    },
    {
        id: 24,
        tema: "Cronograma",
        nivel: 2,
        dificuldade: "Intermediário",
        tempo: 75,
        pontos: 120,
        xp: 120,
        titulo: "Missão 24 - Folga",
        enunciado: "Uma atividade que pode atrasar alguns dias sem atrasar o projeto possui:",
        alternativas: {
            A: "Folga.",
            B: "Custo nulo.",
            C: "Escopo indefinido.",
            D: "Entrega única."
        },
        correta: "A",
        feedbackCorreto: "Correto. Folga é o atraso permitido sem impactar a data final do projeto.",
        feedbackErro: "A capacidade de atrasar sem afetar o projeto é chamada de folga."
    },
    {
        id: 25,
        tema: "Cronograma",
        nivel: 3,
        dificuldade: "Avançado",
        tempo: 90,
        pontos: 150,
        xp: 150,
        titulo: "Missão 25 - Compressão de Cronograma",
        enunciado: "Para reduzir a duração do projeto, uma equipe decide executar atividades em paralelo, aumentando o risco de retrabalho. Essa técnica se aproxima de:",
        alternativas: {
            A: "Fast tracking.",
            B: "Cancelamento de escopo.",
            C: "Aceitação de riscos.",
            D: "Encerramento administrativo."
        },
        correta: "A",
        feedbackCorreto: "Correto. Fast tracking executa atividades em paralelo e pode aumentar riscos.",
        feedbackErro: "A execução paralela de atividades originalmente sequenciais é chamada de fast tracking."
    },

    {
        id: 26,
        tema: "Riscos",
        nivel: 1,
        dificuldade: "Básico",
        tempo: 60,
        pontos: 100,
        xp: 100,
        titulo: "Missão 26 - Conceito de Risco",
        enunciado: "Em projetos, risco é:",
        alternativas: {
            A: "Um evento incerto que pode afetar objetivos do projeto.",
            B: "Um problema que já ocorreu obrigatoriamente.",
            C: "Uma entrega aprovada.",
            D: "Uma reunião de encerramento."
        },
        correta: "A",
        feedbackCorreto: "Correto. Risco é evento incerto com impacto potencial.",
        feedbackErro: "Risco envolve incerteza; se já ocorreu, normalmente é um problema ou questão."
    },
    {
        id: 27,
        tema: "Riscos",
        nivel: 1,
        dificuldade: "Básico",
        tempo: 60,
        pontos: 100,
        xp: 100,
        titulo: "Missão 27 - Mitigação",
        enunciado: "Mitigar um risco significa:",
        alternativas: {
            A: "Reduzir sua probabilidade ou impacto.",
            B: "Ignorar completamente.",
            C: "Transformá-lo em escopo.",
            D: "Eliminar o projeto."
        },
        correta: "A",
        feedbackCorreto: "Correto. Mitigar é reduzir a probabilidade e/ou o impacto do risco.",
        feedbackErro: "Mitigação busca reduzir a exposição ao risco."
    },
    {
        id: 28,
        tema: "Riscos",
        nivel: 2,
        dificuldade: "Intermediário",
        tempo: 75,
        pontos: 120,
        xp: 120,
        titulo: "Missão 28 - Transferência de Risco",
        enunciado: "Contratar um seguro para reduzir o impacto financeiro de determinado evento é exemplo de:",
        alternativas: {
            A: "Transferência de risco.",
            B: "Aceitação passiva.",
            C: "Aumento de escopo.",
            D: "Encerramento do projeto."
        },
        correta: "A",
        feedbackCorreto: "Correto. Seguro é uma forma clássica de transferência de risco.",
        feedbackErro: "Transferir risco significa repassar parte do impacto a terceiros, como seguradoras."
    },
    {
        id: 29,
        tema: "Riscos",
        nivel: 2,
        dificuldade: "Intermediário",
        tempo: 75,
        pontos: 120,
        xp: 120,
        titulo: "Missão 29 - Aceitação de Risco",
        enunciado: "A equipe decide não agir preventivamente sobre um risco de baixo impacto, apenas monitorá-lo. Essa estratégia é:",
        alternativas: {
            A: "Aceitação.",
            B: "Transferência obrigatória.",
            C: "Cancelamento.",
            D: "Mudança de escopo."
        },
        correta: "A",
        feedbackCorreto: "Correto. Aceitar um risco pode ser adequado quando impacto e probabilidade são baixos.",
        feedbackErro: "Monitorar sem ação preventiva imediata caracteriza aceitação do risco."
    },
    {
        id: 30,
        tema: "Riscos",
        nivel: 3,
        dificuldade: "Avançado",
        tempo: 90,
        pontos: 150,
        xp: 150,
        titulo: "Missão 30 - Resposta Integrada ao Risco",
        enunciado: "Um risco crítico pode afetar prazo, custo e qualidade. A resposta mais adequada deve:",
        alternativas: {
            A: "Considerar impactos integrados e definir ações proporcionais.",
            B: "Ser ignorada até o encerramento.",
            C: "Ser comunicada apenas verbalmente.",
            D: "Eliminar automaticamente todos os custos."
        },
        correta: "A",
        feedbackCorreto: "Correto. Riscos críticos exigem resposta integrada, proporcional e documentada.",
        feedbackErro: "Riscos relevantes precisam ser analisados de forma integrada, considerando seus impactos."
    }
];
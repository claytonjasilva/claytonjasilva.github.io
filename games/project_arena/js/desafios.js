// ============================================================
// Descrição geral: banco inicial de desafios do Project Arena
// Data de criação: 29/06/2026
// Versão: 1.0
// Copyright: Clayton Silva
// ============================================================

const desafios = [
    {
        titulo: "Desafio 1 - Projeto ou Processo?",
        enunciado: "Uma empresa deseja implantar um novo sistema de gestão integrada. Essa iniciativa possui início, fim, objetivo específico e entrega única. Como essa iniciativa deve ser classificada?",
        alternativas: {
            A: "Processo operacional contínuo.",
            B: "Projeto.",
            C: "Rotina administrativa permanente.",
            D: "Atividade repetitiva de manutenção."
        },
        correta: "B",
        pontos: 100,
        xp: 100,
        feedbackCorreto: "Correto. Um projeto é um esforço temporário, com início e fim definidos, criado para gerar uma entrega única.",
        feedbackErro: "A iniciativa descrita possui características de projeto: temporariedade, objetivo definido e entrega específica."
    },
    {
        titulo: "Desafio 2 - Escopo",
        enunciado: "Durante o planejamento, o cliente solicita uma funcionalidade que não estava prevista originalmente. Qual deve ser a postura mais adequada da equipe?",
        alternativas: {
            A: "Incluir imediatamente a solicitação, sem avaliação.",
            B: "Ignorar a solicitação para manter o cronograma.",
            C: "Registrar a solicitação e avaliar impacto em prazo, custo e qualidade.",
            D: "Cancelar o projeto."
        },
        correta: "C",
        pontos: 100,
        xp: 100,
        feedbackCorreto: "Correto. Mudanças de escopo devem ser registradas, analisadas e aprovadas antes de serem incorporadas.",
        feedbackErro: "A decisão adequada é tratar a solicitação como mudança de escopo e avaliar seus impactos."
    },
    {
        titulo: "Desafio 3 - Stakeholders",
        enunciado: "Em um projeto de implantação de um laboratório, vários grupos podem afetar ou ser afetados pelo resultado. Como esses grupos são chamados?",
        alternativas: {
            A: "Stakeholders.",
            B: "Fornecedores apenas.",
            C: "Usuários finais apenas.",
            D: "Concorrentes."
        },
        correta: "A",
        pontos: 100,
        xp: 100,
        feedbackCorreto: "Correto. Stakeholders são partes interessadas que afetam ou são afetadas pelo projeto.",
        feedbackErro: "O conceito correto é stakeholder: qualquer parte interessada no projeto."
    },
    {
        titulo: "Desafio 4 - Riscos",
        enunciado: "A equipe identifica que um fornecedor crítico pode atrasar a entrega de um equipamento. Antes que o atraso ocorra, essa situação deve ser tratada como:",
        alternativas: {
            A: "Problema já confirmado.",
            B: "Risco.",
            C: "Entrega concluída.",
            D: "Critério de aceitação."
        },
        correta: "B",
        pontos: 100,
        xp: 100,
        feedbackCorreto: "Correto. Risco é um evento incerto que, se ocorrer, pode afetar o projeto.",
        feedbackErro: "Como o atraso ainda não ocorreu, trata-se de um risco, não de um problema confirmado."
    },
    {
        titulo: "Desafio 5 - Sucesso do Projeto",
        enunciado: "Um projeto foi entregue dentro do prazo e do orçamento, mas não atendeu às necessidades do cliente. Como esse resultado deve ser avaliado?",
        alternativas: {
            A: "Sucesso total, pois prazo e custo foram cumpridos.",
            B: "Fracasso técnico, pois não houve entrega.",
            C: "Sucesso parcial ou insatisfatório, pois o valor esperado não foi plenamente atendido.",
            D: "Resultado irrelevante, pois a satisfação do cliente não faz parte do projeto."
        },
        correta: "C",
        pontos: 100,
        xp: 100,
        feedbackCorreto: "Correto. O sucesso de um projeto não depende apenas de prazo e custo, mas também da entrega de valor e atendimento às expectativas.",
        feedbackErro: "Cumprir prazo e custo não basta se a entrega não atende às necessidades do cliente."
    }
];
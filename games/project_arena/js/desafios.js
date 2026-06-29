// ============================================================
// Descrição geral: banco de desafios do Project Arena
// Data de criação: 29/06/2026
// Versão: 1.1
// Copyright: Clayton Silva
// ============================================================

const desafios = [
    {
        titulo: "Rodada 1 - Projeto ou Processo?",
        enunciado: "Uma empresa deseja implantar um novo sistema de gestão integrada. A iniciativa possui início, fim, objetivo específico e entrega única. Como deve ser classificada?",
        alternativas: {
            A: "Processo operacional contínuo.",
            B: "Projeto.",
            C: "Rotina administrativa permanente.",
            D: "Atividade repetitiva de manutenção."
        },
        correta: "B",
        pontos: 100,
        xp: 100,
        feedbackCorreto: "Correto. Projeto é um esforço temporário criado para gerar uma entrega única.",
        feedbackErro: "A descrição indica temporariedade, objetivo definido e entrega específica."
    },
    {
        titulo: "Rodada 2 - Controle de Escopo",
        enunciado: "Durante o planejamento, o cliente solicita uma funcionalidade não prevista originalmente. Qual é a melhor postura da equipe?",
        alternativas: {
            A: "Incluir imediatamente, sem avaliação.",
            B: "Ignorar a solicitação para proteger o cronograma.",
            C: "Registrar a solicitação e avaliar impactos em prazo, custo e qualidade.",
            D: "Cancelar o projeto."
        },
        correta: "C",
        pontos: 120,
        xp: 120,
        feedbackCorreto: "Correto. Mudanças de escopo precisam ser registradas, avaliadas e aprovadas.",
        feedbackErro: "A solicitação deve ser tratada como mudança de escopo, com análise de impacto."
    },
    {
        titulo: "Rodada 3 - Stakeholders",
        enunciado: "Em um projeto de implantação de laboratório, vários grupos podem afetar ou ser afetados pelo resultado. Como esses grupos são chamados?",
        alternativas: {
            A: "Stakeholders.",
            B: "Fornecedores apenas.",
            C: "Usuários finais apenas.",
            D: "Concorrentes."
        },
        correta: "A",
        pontos: 100,
        xp: 100,
        feedbackCorreto: "Correto. Stakeholders são as partes interessadas no projeto.",
        feedbackErro: "O conceito correto é stakeholder: parte que afeta ou é afetada pelo projeto."
    },
    {
        titulo: "Rodada 4 - Risco",
        enunciado: "A equipe identifica que um fornecedor crítico pode atrasar a entrega de um equipamento. Antes que o atraso ocorra, essa situação é:",
        alternativas: {
            A: "Problema confirmado.",
            B: "Risco.",
            C: "Entrega concluída.",
            D: "Critério de aceitação."
        },
        correta: "B",
        pontos: 130,
        xp: 130,
        feedbackCorreto: "Correto. Risco é um evento incerto que pode afetar o projeto.",
        feedbackErro: "Como ainda não ocorreu, trata-se de risco, não de problema confirmado."
    },
    {
        titulo: "Rodada 5 - Sucesso do Projeto",
        enunciado: "Um projeto foi entregue dentro do prazo e do orçamento, mas não atendeu às necessidades do cliente. Como avaliar esse resultado?",
        alternativas: {
            A: "Sucesso total, pois prazo e custo foram cumpridos.",
            B: "Fracasso técnico, pois não houve entrega.",
            C: "Sucesso parcial ou insatisfatório, pois o valor esperado não foi plenamente atendido.",
            D: "Resultado irrelevante, pois satisfação do cliente não importa."
        },
        correta: "C",
        pontos: 150,
        xp: 150,
        feedbackCorreto: "Correto. O sucesso depende também da entrega de valor e da satisfação do cliente.",
        feedbackErro: "Cumprir prazo e custo não basta se a entrega não atende ao cliente."
    }
];
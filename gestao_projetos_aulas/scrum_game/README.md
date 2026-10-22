# Missão Scrum

Jogo didático de planejamento de projetos com Scrum, construído para a disciplina **Gestão de Projetos — Unidade 5: Gestão de escopo e tempo com Scrum**.

O aluno escolhe um entre 15 projetos e o conduz em 7 missões, da visão ao planejamento e execução da primeira Sprint. Cada decisão é pontuada (total de 1000 pontos) e o relatório final mostra quais aspectos teóricos foram atendidos.

## Missões e pontuação

| # | Missão | Papel | Pontos | Conceitos avaliados (Unidade 5) |
|---|--------|-------|-------:|---------------------------------|
| 1 | Visão e justificativa | Product Owner | 100 | Visão do projeto (§5.1); justificativa de negócio e entrega orientada a valor (§5.4) |
| 2 | Histórias e backlog | Product Owner | 150 | História de usuário com persona, necessidade e benefício; épico × história × tarefa; refinamento (§5.5) |
| 3 | Priorizar o backlog | Product Owner | 200 | Valor, risco/incerteza e dependência (§5.6) |
| 4 | Estimar histórias | Equipe Scrum | 100 | Estimativa relativa, planning poker (§5.5, processo 3) |
| 5 | Definir os time-boxes | Scrum Master | 100 | Duração da Sprint e limites das reuniões; capacidade e planejamento de releases (§5.7) |
| 6 | Planejar a Sprint | Núcleo Scrum | 200 | Objetivo da Sprint, capacidade e compromisso, dependências, tarefas e gold-plating (§5.5, processos 4 a 6) |
| 7 | Sprint em ação | Scrum Master | 150 | Controle empírico: reunião diária, impedimentos, mudanças, revisão e retrospectiva (§5.3, §5.4, §5.8) |

Notas: **S** ≥ 900 · **A** ≥ 800 · **B** ≥ 650 · **C** ≥ 500 · **D** < 500.
Um conceito do checklist é considerado atendido quando a parte correspondente da pontuação atinge 70%.

O resultado também traz a curva de “dívida” de valor do plano do aluno (releitura da figura 5.7), comparada a uma ordem de referência e à entrega única ao final.

## Recursos de jogo

- 15 projetos em três níveis de dificuldade (software, marketing, eventos, IoT, empreendedorismo etc.).
- Repetição livre: opções, eventos e numeração das histórias mudam a cada partida; vale a melhor pontuação.
- Nível do jogador (soma das melhores pontuações), 11 conquistas e histórico de partidas.
- Retorno imediato a cada decisão, com referência à seção da unidade.
- Salvamento automático no navegador (inclusive no meio de uma missão), arquivo `.json` para exportar/importar e código de texto.
- Relatório imprimível (Imprimir → Salvar como PDF) para entrega.
- Personas com retrato para todos os papéis das histórias; faixa do projeto e Product Backlog visíveis em todas as missões.
- Guia de estimativa com Fibonacci e cartas de orientação (consulta a especialistas, −10 pontos, uma por missão).
- Tempo por missão no relatório (informativo, sem pontuação).
- Teclado (teclas 1, 2 e 3 nos cartões), leitores de tela, tema claro/escuro, movimento reduzido e celular.

## Publicar no GitHub Pages

1. Crie um repositório (ou use o seu `claytonjasilva.github.io`) e copie esta pasta inteira, por exemplo para `missao-scrum/`.
2. Faça o commit e o push.
3. Em **Settings → Pages**, publique a partir da branch `main` (pasta raiz).
4. Acesse `https://<usuario>.github.io/<repositorio>/missao-scrum/`.

Não há etapa de build nem dependências: são arquivos estáticos (HTML, CSS e JavaScript). O arquivo `.nojekyll` evita o processamento pelo Jekyll. Também funciona abrindo `index.html` direto no navegador.

### Ligar o checklist à página da unidade

Em `js/app.js`, `CONFIG.unidadeURL` aponta para `'../unidade5.html'` (o jogo fica em `gestao_projetos_aulas/scrum_game/`). As referências do checklist passam a ser links para as seções (`#visao`, `#valor`, `#tempo` …).

## Estrutura

```
index.html        página do jogo
css/estilo.css    identidade visual (mesmos tokens da disciplina)
js/personas.js    personas, retratos e especialistas
js/dados.js       15 projetos, distratores e eventos da Sprint
js/motor.js       regras de pontuação (funções puras) e simulação de valor
js/app.js         telas, salvamento e interação
```

### Acrescentar ou editar projetos

Cada projeto em `js/dados.js` tem: visão e justificativa corretas, persona, as três partes da história de usuário, 8 histórias (valor 1–5, incerteza, dependências, pontos de referência e a história principal), um épico com 2 histórias filhas, 2 tarefas técnicas, o objetivo da Sprint e 4 tarefas necessárias + 2 indevidas para a história principal. Os distratores genéricos e os eventos da Sprint ficam no fim do mesmo arquivo.

## Referências

SCRUMSTUDY. *A Guide to the Scrum Body of Knowledge (SBOK™ Guide)*. 2016.
SCHWABER, K.; SUTHERLAND, J. *The Scrum Guide*. 2020.
AGILE ALLIANCE. Glossary: User Story, Epic, Personas, Three C's.

© 2026 · Prof. Clayton J A Silva · Gestão de Projetos

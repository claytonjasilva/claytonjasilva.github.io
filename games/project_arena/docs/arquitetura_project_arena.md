# Project Arena — Arquitetura V2.0

## 1. Visão geral

O Project Arena é uma plataforma educacional gamificada, publicada no GitHub Pages, voltada para a realização de desafios, missões, sessões de jogo, rankings e acompanhamento de desempenho.

A versão V2.0 introduz a integração com o Firebase Realtime Database, permitindo persistência de dados em nuvem.

---

## 2. Objetivos da V2.0

- Manter a versão V1.2 funcionando sem alterações estruturais.
- Integrar o jogo ao Firebase Realtime Database.
- Registrar sessões de jogo.
- Registrar equipes participantes.
- Registrar missões e desafios.
- Registrar pontuações e ranking.
- Preparar a base para relatórios e acompanhamento futuro.

---

## 3. Estrutura atual do projeto

```text
PROJECT_ARENA/
│
├── assets/
├── css/
│   └── style.css
├── data/
├── dev/
│   ├── arquitetura.md
│   ├── checklist.md
│   ├── relatorio_validacao.js
│   ├── testes.js
│   └── validar.html
├── docs/
├── img/
├── js/
│   ├── app.js
│   ├── cronometro.js
│   ├── desafios.js
│   ├── equipes.js
│   ├── missoes.js
│   ├── ranking.js
│   ├── relatorio.js
│   └── sessao.js
│
├── arbitro.html
├── equipe.html
├── index.html
├── README.md
└── CHANGELOG.md
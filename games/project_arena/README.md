# Project Arena

Protótipo de plataforma gamificada para apoio ao ensino de Engenharia.

Versão atual: **1.2**

---

# Objetivo

O Project Arena foi concebido para estimular a aprendizagem baseada em desafios.

Nesta primeira fase o sistema funciona localmente, permitindo que um árbitro conduza uma sessão enquanto equipes resolvem desafios relacionados ao conteúdo da disciplina.

Inicialmente o projeto será utilizado na disciplina **Gestão de Projetos**, podendo posteriormente ser adaptado para outras disciplinas.

---

# Estrutura do projeto

```text
project_arena/

│
├── index.html
├── arbitro.html
├── equipe.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── desafios.js
│   └── equipes.js
│
├── img/
│
└── README.md
```

---

# Recursos disponíveis

Versão 1.1

- Página inicial
- Painel do árbitro
- Painel da equipe
- Três equipes simuladas
- Cinco rodadas
- Pontuação
- XP
- Evolução de nível
- Ranking
- Barra de progresso
- Feedback pedagógico
- Armazenamento utilizando Local Storage

---

# Equipes simuladas

- Alpha
- Beta
- Gama

---

# Rodadas

1. Projeto × Processo
2. Escopo
3. Stakeholders
4. Riscos
5. Sucesso do Projeto

---

# Fluxo da aplicação

```text
Início

↓

Árbitro abre a sessão

↓

Libera desafio

↓

Equipe responde

↓

Sistema calcula XP

↓

Ranking atualizado

↓

Árbitro encerra rodada

↓

Nova rodada
```

---

# Como testar

Abrir:

```text
index.html
```

Selecionar:

- Painel do Árbitro

e abrir outra aba

- Painel da Equipe

Na equipe selecionar:

```text
Equipe Alpha
```

No árbitro clicar

```text
Liberar desafio
```

Responder.

Ao finalizar clicar

```text
Encerrar rodada
```

Repetir até a quinta rodada.

---

# Publicação

Após copiar os arquivos para o repositório

```text
claytonjasilva.github.io
```

executar

```bash
git add .

git commit -m "Project Arena V1.1"

git push
```

A aplicação ficará disponível em

```text
https://claytonjasilva.github.io/games/project_arena/
```

---

# Limitações da versão 1.1

- Sem autenticação.
- Sem banco de dados.
- Sem sincronização entre computadores.
- Sessão local utilizando Local Storage.
- Não registra histórico.

---

# Roadmap

## V1.2

- Cronômetro
- Medalhas
- Histórico das rodadas
- Relatório final
- Mais tipos de desafios

---

## V2.0

- Supabase
- Login
- Sessões reais
- Múltiplos computadores
- Professor (árbitro)
- Equipes online
- Ranking em tempo real

---

## V3.0

- Banco de questões
- Múltiplas disciplinas
- Cadastro de turmas
- Dashboard do professor
- Estatísticas de aprendizagem
- Exportação dos resultados

---

Projeto desenvolvido para apoio às disciplinas de Engenharia.

Copyright © 2026
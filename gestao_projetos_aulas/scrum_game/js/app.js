/* Missão Scrum — interface do jogo
 * Estado salvo automaticamente no navegador (localStorage), com exportação/importação em arquivo .json e código de texto.
 * Para ligar as referências do checklist à página da Unidade 5, preencha CONFIG.unidadeURL (ex.: 'unidade5.html').
 */
(function () {
  'use strict';
  const M = MS.M, PROJ = MS.PROJETOS;
  const CONFIG = { unidadeURL: '../unidade5.html', chave: 'missaoScrum.v1', versao: 1, semArquivos: !!window.MISSAO_EMBUTIDA };

  /* ================= estado e persistência ================= */
  const novoEstado = () => ({
    v: CONFIG.versao, jogador: { nome: '' }, melhores: {}, historico: [], conquistas: [],
    partida: null, ultimo: null, prefs: { som: true, tema: null }
  });
  function carregar() {
    try {
      const s = JSON.parse(localStorage.getItem(CONFIG.chave));
      if (s && s.v === CONFIG.versao) return Object.assign(novoEstado(), s);
    } catch (e) { /* armazenamento indisponível */ }
    return novoEstado();
  }
  let E = carregar();
  function salvar() { try { localStorage.setItem(CONFIG.chave, JSON.stringify(E)); } catch (e) { /* segue em memória */ } }

  let tela = { nome: E.partida ? 'missao' : 'inicio' };
  if (E.partida && E.partida.etapa >= 7) tela = { nome: 'inicio' };

  /* ================= utilidades ================= */
  const $ = s => document.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const proj = id => PROJ.find(p => p.id === id);
  const soma = a => a.reduce((s, x) => s + x, 0);
  const fmt = n => n.toLocaleString('pt-BR');
  const pt = () => E.partida;
  const P = () => proj(pt().pid);
  const chave = id => pt().num[id];
  const item = id => P().itens.find(i => i.id === id);
  const estrelasValor = v => `<span class="estrelas" aria-label="valor ${v} de 5">${'★'.repeat(v)}${'☆'.repeat(5 - v)}</span>`;
  const est3 = n => `<span class="est3" aria-label="${n} de 3 estrelas">${'★'.repeat(n)}<span class="off">${'★'.repeat(3 - n)}</span></span>`;
  const secRef = sec => {
    const txt = MS.SECOES[sec] || '';
    return CONFIG.unidadeURL ? `<a class="ref" href="${CONFIG.unidadeURL}#${sec}" target="_blank" rel="noopener">${esc(txt)}</a>` : `<span class="ref">${esc(txt)}</span>`;
  };
  const ret = (av, tam, rot) => MS.retrato(av, tam, rot);
  const personaChip = (texto, p) => {
    const pe = MS.personaDe(p || P(), texto); if (!pe) return '';
    return `<span class="pchip">${ret(pe.av, 20, pe.nome)}<span>${esc(pe.nome)} · ${esc(MS.papelDe(texto))}</span></span>`;
  };
  const PENALIDADE = 10;
  const nConsultas = () => pt() ? Object.keys(pt().consultas || {}).length : 0;
  const fmtTempo = s => s >= 60 ? `${Math.floor(s / 60)} min ${String(s % 60).padStart(2, '0')} s` : `${s} s`;
  const msgsHTML = msgs => `<ul class="msgs">${msgs.map(([c, t]) => `<li class="${c}">${t}</li>`).join('')}</ul>`;

  function aviso(txt) {
    const a = $('#aviso'); a.textContent = txt; a.hidden = false;
    clearTimeout(aviso.t); aviso.t = setTimeout(() => { a.hidden = true; }, 2600);
  }

  /* som curto (Web Audio) — começa só após interação do usuário */
  let ctxAudio = null;
  function som(tipo) {
    if (!E.prefs.som) return;
    try {
      ctxAudio = ctxAudio || new (window.AudioContext || window.webkitAudioContext)();
      const seq = { ok: [660, 880], erro: [240, 180], fim: [523, 659, 784, 1047], clique: [520] }[tipo] || [440];
      seq.forEach((f, i) => {
        const t0 = ctxAudio.currentTime + i * 0.09, o = ctxAudio.createOscillator(), g = ctxAudio.createGain();
        o.type = 'triangle'; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.1, t0 + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.17);
        o.connect(g).connect(ctxAudio.destination); o.start(t0); o.stop(t0 + 0.2);
      });
    } catch (e) { /* sem áudio */ }
  }

  function confete() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cv = $('#confete'), cx = cv.getContext('2d');
    cv.width = innerWidth; cv.height = innerHeight;
    const cs = getComputedStyle(document.documentElement);
    const cores = ['--accent', '--accent2', '--green', '--yellow'].map(v => cs.getPropertyValue(v).trim());
    const ps = Array.from({ length: 140 }, () => ({ x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * 0.4, vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 3, r: Math.random() * 6.28, c: cores[Math.floor(Math.random() * 4)] }));
    const t0 = performance.now();
    (function quadro(t) {
      cx.clearRect(0, 0, cv.width, cv.height);
      ps.forEach(p => { p.x += p.vx; p.y += p.vy; p.r += 0.1; cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c; cx.fillRect(-4, -2, 8, 4); cx.restore(); });
      if (t - t0 < 2800) requestAnimationFrame(quadro); else cx.clearRect(0, 0, cv.width, cv.height);
    })(t0);
  }

  function aplicarTema() {
    if (E.prefs.tema) document.documentElement.setAttribute('data-theme', E.prefs.tema);
    else document.documentElement.removeAttribute('data-theme');
    $('#btn-som').setAttribute('aria-pressed', String(!!E.prefs.som));
  }
  const temaAtual = () => E.prefs.tema || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  /* ================= níveis e conquistas ================= */
  const NIVEIS = [[0, 'Aprendiz'], [1500, 'Membro da equipe'], [4000, 'Facilitador'], [7000, 'Product Owner'], [10000, 'Scrum Master'], [13000, 'Agile Coach']];
  const xp = () => soma(Object.values(E.melhores).map(m => m.pontos));
  function nivel() {
    const x = xp(); let k = 0;
    NIVEIS.forEach((n, i) => { if (x >= n[0]) k = i; });
    const prox = NIVEIS[k + 1];
    return { k: k + 1, nome: NIVEIS[k][1], xp: x, prox: prox ? prox[0] : 15000, base: NIVEIS[k][0] };
  }

  const CONQ = [
    { id: 'primeira', nome: 'Primeira Sprint', desc: 'Concluir um projeto.', ok: () => true },
    { id: 'deps', nome: 'Guardião das dependências', desc: 'Priorizar sem nenhuma violação de dependência.', ok: r => r.parciais.m3.viol.length === 0 },
    { id: 'backlog', nome: 'Backlog perfeito', desc: 'Fazer 200 pontos na priorização.', ok: r => M.totalMissao(r.parciais.m3.comp) === 200 },
    { id: 'relogio', nome: 'Relógio suíço', desc: 'Acertar todos os time-boxes.', ok: r => M.totalMissao(r.parciais.m5.comp) === 100 },
    { id: 'poker', nome: 'Planning poker', desc: 'Fazer 85 pontos ou mais na estimativa.', ok: r => M.totalMissao(r.parciais.m4.comp) >= 85 },
    { id: 'gold', nome: 'Sem gold-plating', desc: 'Montar as tarefas sem nenhum excesso.', ok: r => r.parciais.m6.comp.tarefas[0] === 60 },
    { id: 'empirico', nome: 'Inspecionar e adaptar', desc: 'Superar sua própria pontuação em um projeto.', ok: r => r.melhorAnterior != null && r.pontos > r.melhorAnterior },
    { id: 'persistente', nome: 'Persistente', desc: 'Jogar o mesmo projeto três vezes.', ok: r => r.tentativas >= 3 },
    { id: 'lendario', nome: 'Lendário', desc: 'Obter nota S (900 pontos ou mais).', ok: r => r.pontos >= 900 },
    { id: 'explorador', nome: 'Explorador', desc: 'Concluir cinco projetos diferentes.', ok: () => Object.keys(E.melhores).length >= 5 },
    { id: 'autonomo', nome: 'Autonomia', desc: 'Concluir um projeto com nota A ou S sem consultar especialistas.', ok: r => r.consultas.length === 0 && r.pontos >= 800 },
    { id: 'portfolio', nome: 'Portfólio completo', desc: 'Concluir os 15 projetos.', ok: () => Object.keys(E.melhores).length >= 15 }
  ];

  /* ================= criação da partida ================= */
  function novaPartida(pid) {
    const p = proj(pid), seed = (Math.random() * 4294967296) >>> 0, rnd = M.rng(seed);
    const G = MS.GENERICO;
    const nums = M.embaralhar(p.itens.map((_, i) => i + 1), rnd);
    const num = Object.fromEntries(p.itens.map((it, i) => [it.id, `${p.id}-${nums[i]}`]));
    const soltos = p.itens.filter(i => !p.epico.filhos.includes(i.id));
    const votos = {};
    p.itens.forEach(it => {
      const k = M.FIB.indexOf(it.p), lo = Math.max(0, k - 1), hi = Math.min(M.FIB.length - 1, k + 1);
      const variantes = [[lo, k, hi], [lo, k, k], [k, k, hi]];
      votos[it.id] = M.embaralhar(variantes[Math.floor(rnd() * 3)].map(i => M.FIB[i]), rnd);
    });
    let backlog = M.embaralhar(p.itens.map(i => i.id), rnd);
    if (backlog.join() === M.ordemIdeal(p.itens).join()) backlog = backlog.reverse();
    const evs = M.embaralhar(MS.EVENTOS.map((_, i) => i), rnd).slice(0, 5);
    E.partida = {
      pid, seed, etapa: 0, inicio: Date.now(), num, votos, backlog,
      visaoOps: M.embaralhar([{ t: p.visao, ok: true }, ...G.visao], rnd),
      justOps: M.embaralhar([{ t: p.just, ok: true }, ...G.just], rnd),
      alts: ['quem', 'quero', 'para'].map((k, i) => M.embaralhar([{ t: p.historia[i], ok: true }, ...G[k].map(t => ({ t }))], rnd)),
      deck: M.embaralhar([...soltos.map(i => ({ tipo: 'H', id: i.id })), { tipo: 'E' }, ...p.tecnicas.map((_, k) => ({ tipo: 'T', k }))], rnd),
      objOps: M.embaralhar([{ t: p.objetivo, ok: true }, ...G.objetivo], rnd),
      tarOps: M.embaralhar([...p.tarefas.boas.map((_, i) => i), ...p.tarefas.ruins.map((_, i) => p.tarefas.boas.length + i)], rnd),
      eventos: evs.map(i => ({ i, ops: M.embaralhar([0, 1, 2], rnd) })),
      r: {
        m1: { visao: null, just: null }, m2: { fase: 'hist', alt: [null, null, null], pos: 0, resp: [] },
        m3: { ordem: backlog.slice() }, m4: { est: {}, dicas: {} },
        m5: { semanas: 3, daily: 30, planning: 8, review: 4, retro: 4 },
        m6: { obj: null, sel: [], tar: [] }, m7: { fase: 'real', pos: 0, resp: [] }
      },
      parciais: {}, consultas: {}, tempos: {}, t0: {}
    };
    const anc = M.ancora(p.itens);
    E.partida.r.m4.est[anc] = p.itens.find(i => i.id === anc).p;
    salvar();
  }

  const pontosAteAgora = () => pt() ? Math.max(0, M.total(pt().parciais) - PENALIDADE * nConsultas()) : 0;

  /* tempo por missão: registrado para o relatório, sem efeito na pontuação */
  function marcarInicio() {
    const p = pt(); if (!p) return;
    const id = M.MISSOES[p.etapa].id;
    p.tempos = p.tempos || {}; p.t0 = p.t0 || {};
    if (!p.parciais[id] && !p.t0[id]) { p.t0[id] = Date.now(); salvar(); }
  }

  function concluirMissao(id, res) {
    pt().parciais[id] = res;
    pt().tempos = pt().tempos || {};
    if (pt().t0 && pt().t0[id]) pt().tempos[id] = Math.min(1800, Math.round((Date.now() - pt().t0[id]) / 1000));
    salvar();
    const n = M.totalMissao(res.comp);
    som(n / M.MAX[id] >= 0.7 ? 'ok' : 'erro');
    aviso(`+${n} pontos`);
  }

  function finalizar() {
    const p = P(), par = pt().parciais, nc = nConsultas(), bruto = M.total(par), pontos = Math.max(0, bruto - PENALIDADE * nc), nota = M.nota(pontos);
    const ant = E.melhores[p.id];
    const tentativas = (ant ? ant.tentativas : 0) + 1;
    const rec = {
      pid: p.id, pontos, nota: nota.letra, data: Date.now(), duracao: Math.round((Date.now() - pt().inicio) / 1000),
      parciais: par, ordem: pt().r.m3.ordem, semanas: pt().r.m5.semanas, num: pt().num,
      melhorAnterior: ant ? ant.pontos : null, tentativas, novas: [],
      bruto, consultas: Object.keys(pt().consultas || {}), tempos: pt().tempos || {}
    };
    E.melhores[p.id] = { pontos: Math.max(pontos, ant ? ant.pontos : 0), nota: (!ant || pontos > ant.pontos) ? nota.letra : ant.nota, tentativas };
    CONQ.forEach(c => { if (!E.conquistas.includes(c.id) && c.ok(rec)) { E.conquistas.push(c.id); rec.novas.push(c.id); } });
    E.historico.unshift({ pid: p.id, pontos, nota: nota.letra, data: rec.data, nome: E.jogador.nome });
    E.historico = E.historico.slice(0, 60);
    E.ultimo = rec; E.partida = null; salvar();
    tela = { nome: 'resultado' };
    render();
    som('fim');
    if (pontos >= 800) confete();
  }

  /* ================= telas ================= */
  const T = {};

  T.inicio = function () {
    const nv = nivel(), feitos = Object.keys(E.melhores).length;
    const pctNivel = Math.round(100 * (nv.xp - nv.base) / ((nv.prox - nv.base) || 1));
    const emAndamento = pt() ? proj(pt().pid) : null;
    return `
    <section class="hero">
      <p class="eyebrow">Gestão de Projetos · Unidade 5</p>
      <h1>Missão <strong>Scrum</strong></h1>
      <p class="lead">Planeje um projeto do começo ao fim com Scrum: da visão ao planejamento da Sprint. Cada decisão vale pontos conforme os conceitos da unidade.</p>
      <div class="ciclo" aria-label="Fluxo do jogo">
        <span>Visão</span><i>→</i><span>Histórias</span><i>→</i><span>Priorização</span><i>→</i><span>Estimativa</span><i>→</i><span>Time-box</span><i>→</i><span>Sprint Backlog</span><i>→</i><span>Sprint</span>
      </div>
    </section>
    <div class="grade2">
      <section class="painel pilha">
        <div class="campo">
          <label for="nome">Seu nome no relatório</label>
          <input id="nome" type="text" maxlength="60" autocomplete="name" placeholder="Ex.: Maria Souza — Turma 2026.2" value="${esc(E.jogador.nome)}" data-campo="nome">
        </div>
        <div class="acoes">
          ${emAndamento ? `<button class="btn btn-pri" data-acao="continuar">Continuar ${esc(emAndamento.nome)}</button>` : ''}
          <button class="btn ${emAndamento ? 'btn-sec' : 'btn-pri'}" data-acao="projetos">Escolher projeto</button>
        </div>
        <div class="acoes">
          <button class="btn-txt" data-acao="ajuda">Como jogar</button>
          <button class="btn-txt" data-acao="conquistas">Conquistas</button>
          <button class="btn-txt" data-acao="salvar">Salvar ou carregar</button>
        </div>
      </section>
      <section class="painel pilha">
        <div class="nivel">
          <div class="mono peq"><span class="mudo">Nível ${nv.k} ·</span> <b>${nv.nome}</b></div>
          <div class="barra" role="progressbar" aria-valuenow="${nv.xp}" aria-valuemin="${nv.base}" aria-valuemax="${nv.prox}"><i style="width:${pctNivel}%"></i></div>
          <div class="mono peq mudo">${fmt(nv.xp)} / ${fmt(nv.prox)} XP · soma das melhores pontuações</div>
        </div>
        <div class="stats">
          <div class="stat"><b>${feitos}/15</b><span>projetos concluídos</span></div>
          <div class="stat"><b>${E.historico.length}</b><span>partidas jogadas</span></div>
          <div class="stat"><b>${E.conquistas.length}/${CONQ.length}</b><span>conquistas</span></div>
        </div>
      </section>
    </div>
    ${E.historico.length ? `
    <section class="pilha" style="margin-top:1.75rem">
      <h2>Últimas partidas</h2>
      <div class="rolagem"><table class="hist">
        <thead><tr><th>Data</th><th>Projeto</th><th>Pontos</th><th>Nota</th></tr></thead>
        <tbody>${E.historico.slice(0, 8).map(h => `<tr><td>${new Date(h.data).toLocaleDateString('pt-BR')}</td><td>${esc(proj(h.pid).nome)}</td><td class="n">${h.pontos}</td><td class="n nota-${h.nota}">${h.nota}</td></tr>`).join('')}</tbody>
      </table></div>
    </section>` : ''}`;
  };

  T.projetos = function () {
    const f = tela.filtro || 0;
    const lista = PROJ.filter(p => !f || p.nivel === f);
    return `
    <div class="pilha-g">
      <div class="pilha">
        <p class="eyebrow">Portfólio</p>
        <h2>Escolha um projeto</h2>
        <p class="mudo leia">São 15 projetos de áreas diferentes. Você pode repetir qualquer um para melhorar a pontuação: as opções são embaralhadas a cada partida e vale a melhor nota.</p>
        <div class="filtros" role="group" aria-label="Filtrar por dificuldade">
          ${[[0, 'Todos'], [1, 'Nível 1'], [2, 'Nível 2'], [3, 'Nível 3']].map(([v, t]) => `<button class="filtro" data-acao="filtro" data-v="${v}" aria-pressed="${f === v}">${t}</button>`).join('')}
        </div>
      </div>
      <div class="projetos">
        ${lista.map(p => {
          const m = E.melhores[p.id];
          return `<button class="proj" data-acao="briefing" data-id="${p.id}">
            <div class="proj-topo"><span class="proj-sigla">${p.id}</span><span class="dif" aria-label="dificuldade ${p.nivel} de 3">${[1, 2, 3].map(k => `<i class="${k <= p.nivel ? 'on' : ''}"></i>`).join('')}</span></div>
            <h3>${esc(p.nome)}</h3>
            <p>${esc(p.contexto)}</p>
            <div class="proj-rodape"><span>${esc(p.area)}</span>${m ? `<span>${m.pontos} pts · <b class="selo-nota nota-${m.nota}">${m.nota}</b> · ${m.tentativas}×</span>` : '<span>novo</span>'}</div>
          </button>`;
        }).join('')}
      </div>
      <div class="acoes"><button class="btn btn-sec" data-acao="inicio">Voltar</button></div>
    </div>`;
  };

  T.briefing = function () {
    const p = proj(tela.pid), m = E.melhores[p.id];
    const tot = soma(p.itens.map(i => i.p));
    return `
    <div class="pilha-g">
      <div class="pilha">
        <p class="eyebrow">${p.id} · ${esc(p.area)} · nível ${p.nivel}</p>
        <h2>${esc(p.nome)}</h2>
        <p class="leia">${esc(p.contexto)}</p>
      </div>
      <div class="grade2">
        <div class="painel pilha">
          <h3>O que significa ${p.id}?</h3>
          ${explicaSigla(p)}
        </div>
        <div class="painel pilha">
          <h3>Equipe</h3>
          <p class="peq">A equipe entrega, em média, <b class="mono">${p.vel} pontos por semana</b>. O backlog inicial reúne cerca de ${tot} pontos de trabalho.</p>
          ${m ? `<p class="peq mudo">Sua melhor pontuação: <b class="mono">${m.pontos}</b> (nota ${m.nota}) em ${m.tentativas} partida${m.tentativas > 1 ? 's' : ''}.</p>` : ''}
        </div>
      </div>
      <section class="painel pilha">
        <h3>Personas do projeto</h3>
        <p class="mudo peq">Cada história do backlog é escrita na perspectiva de uma destas personas. A principal é usada para escrever a primeira história.</p>
        <div class="personas">${p.personas.map(pe => cartaoPersona(pe, pe === p.persona)).join('')}</div>
      </section>
      <div class="painel pilha">
        <h3>As 7 missões</h3>
        <ol class="msgs" style="list-style:decimal;padding-left:1.2rem">${M.MISSOES.map(x => `<li style="padding-left:.2rem">${x.nome} <span class="mudo peq">— ${x.papel} · ${M.MAX[x.id]} pts</span></li>`).join('')}</ol>
      </div>
      <div class="acoes">
        <button class="btn btn-pri" data-acao="comecar" data-id="${p.id}">Começar a missão</button>
        <button class="btn btn-sec" data-acao="projetos">Outro projeto</button>
      </div>
      ${pt() && pt().pid !== p.id ? `<p class="mudo peq">Você tem uma partida de ${esc(P().nome)} em andamento; começar esta substitui aquela.</p>` : ''}
    </div>`;
  };

  function explicaSigla(p) {
    return `<p class="peq"><b class="mono">${p.id}</b> é a sigla do projeto <b>${esc(p.nome)}</b>. Cada história recebe um identificador formado pela sigla e por um número, como <span class="chave">${p.id}-3</span>, como nas ferramentas de gestão ágil (Jira, Azure Boards, Trello). O número apenas identifica a história; não indica prioridade, e muda a cada partida.</p>`;
  }
  function cartaoPersona(pe, principal) {
    return `<div class="persona-card">${ret(pe.av, 60, pe.nome)}<div class="pilha" style="gap:.25rem"><div class="meta"><b>${esc(pe.nome)}</b>${pe.papeis.map(x => `<span class="chip">${esc(x)}</span>`).join('')}${principal ? '<span class="chip chip-v">principal</span>' : ''}</div><p class="mudo peq">${esc(pe.perfil)}</p></div></div>`;
  }
  /* Product Backlog sempre visível a partir da Missão 3 */
  function backlogResumo() {
    const p = P(), r = pt().r, est = pt().parciais.m4 ? r.m4.est : null, sel = pt().parciais.m6 ? r.m6.sel : [];
    const ordem = pt().parciais.m3 ? r.m3.ordem : r.m3.ordem;
    return `<ol class="pb-lista">${ordem.map((id, k) => {
      const it = item(id);
      return `<li class="${sel.includes(id) ? 'na-sprint' : ''}"><span class="pos mono">${k + 1}</span><div class="corpo"><div class="meta"><span class="chave">${chave(id)}</span>${personaChip(it.t)}${estrelasValor(it.v)}${est ? `<span class="pts-badge">${est[id]} pts</span>` : ''}${sel.includes(id) ? '<span class="chip chip-ok">Sprint 1</span>' : ''}</div><p>${esc(it.t)}</p></div></li>`;
    }).join('')}</ol>`;
  }
  function faixaProjeto() {
    const p = P(), m2ok = !!pt().parciais.m2, m1ok = !!pt().parciais.m1;
    const pts = soma(p.itens.map(i => i.p));
    return `<section class="faixa" aria-label="Projeto em andamento">
      <div class="faixa-topo">
        <span class="proj-sigla grande">${p.id}</span>
        <div class="faixa-nome"><b>${esc(p.nome)}</b><span class="mudo peq">${esc(p.contexto)}</span></div>
        <div class="faixa-personas" aria-label="Personas">${p.personas.map(pe => `<span class="mini" title="${esc(pe.nome)} — ${esc(pe.papeis.join(' / '))}">${ret(pe.av, 34, pe.nome + ', ' + pe.papeis.join(' / '))}</span>`).join('')}</div>
      </div>
      <div class="faixa-abas">
        <details><summary>Projeto e personas</summary><div class="pilha">
          ${m1ok ? `<p class="peq"><b>Visão:</b> ${esc(p.visao)}</p>` : ''}
          ${explicaSigla(p)}
          <p class="peq mudo">Equipe: ${p.vel} pontos por semana · backlog de referência com ${pts} pontos.</p>
          <div class="personas">${p.personas.map(pe => cartaoPersona(pe, pe === p.persona)).join('')}</div>
        </div></details>
        ${m2ok ? `<details ${tela.pbAberto ? 'open' : ''} data-pb><summary>Product Backlog · ${p.itens.length} histórias</summary>${backlogResumo()}</details>` : '<span class="mudo peq mono">O Product Backlog é formado na Missão 2</span>'}
      </div>
    </section>`;
  }

  function dicaEspecialista(mid) {
    const p = P(), r = pt().r, C = id => chave(id);
    if (mid === 'm1') return `Pergunte-se o que muda para ${esc(p.persona.nome)} quando o produto existir: isso é a visão. A justificativa precisa citar uma necessidade do negócio e um benefício que possa ser medido. Opções que falam de ferramentas, do aprendizado da equipe ou de “entregar tudo no fim” não orientam o produto.`;
    if (mid === 'm2') return `A persona é sempre alguém concreto, como ${esc(p.persona.nome)}, nunca “o sistema”. O “quero” é o que ela faz ou recebe; o “para” é o ganho dela. Entre os cartões há 1 épico e ${p.tecnicas.length} tarefas técnicas: o épico fala em gerenciar ou administrar algo amplo; as tarefas não têm usuário nem benefício.`;
    if (mid === 'm3') {
      const livres = p.itens.filter(i => !i.d.length).sort((a, b) => b.v - a.v || b.r - a.r);
      const top = livres[0], dep = p.itens.filter(i => i.d.includes(top.id)), ris = p.itens.filter(i => i.r);
      return `Comece pelo que não depende de nada e tem alto valor: ${livres.slice(0, 2).map(i => C(i.id)).join(' e ')}. ${C(top.id)} libera ${dep.length ? dep.map(i => C(i.id)).join(', ') : 'outras histórias'}. ${ris.length ? `Itens com incerteza alta (${ris.map(i => C(i.id)).join(', ')}) merecem investigação cedo quando o valor justifica.` : ''}`;
    }
    if (mid === 'm4') {
      const anc = M.ancora(p.itens), pa = item(anc).p, outros = p.itens.filter(i => i.id !== anc);
      const maior = outros.slice().sort((a, b) => b.p - a.p)[0], igual = outros.find(i => i.p === pa);
      return `${C(maior.id)} é a história de maior esforço do backlog: bem mais trabalho e incerteza do que a âncora. ${igual ? `${C(igual.id)} tem praticamente o mesmo tamanho da âncora.` : 'Nenhuma outra história é tão pequena quanto a âncora.'} Para as demais, pergunte: é do mesmo tamanho, o dobro ou bem mais que o dobro?`;
    }
    if (mid === 'm5') { const sm = r.m5.semanas; return `Para Sprints de ${sm} semana${sm > 1 ? 's' : ''}, use como teto: planejamento até ${Math.min(8, 2 * sm)} h; revisão e retrospectiva até ${Math.min(4, sm)} h cada. A reunião diária tem no máximo 15 minutos, sempre. O guia recomenda Sprints de até 4 semanas.`; }
    if (mid === 'm6') {
      const key = p.itens.find(i => i.k), anc = [...M.ancestrais(p.itens, key.id)], est = r.m4.est;
      const sm = est[key.id] + soma(anc.map(a => est[a]));
      return `A história que realiza o objetivo é ${C(key.id)}${anc.length ? `, que depende de ${anc.map(C).join(' e ')}` : ''}. Pelas suas estimativas, esse conjunto soma ${sm} pontos, para capacidade de ${p.vel * r.m5.semanas}. Nas tarefas, inclua o que permite verificar os critérios de aceitação, testes inclusive, e nada além disso.`;
    }
    if (mid === 'm7') {
      const rr = r.m7, ev = pt().eventos[rr.pos], dado = MS.EVENTOS[ev.i];
      const errada = ev.ops.find(o => o !== 0);
      rr.elim = { pos: rr.pos, o: errada };
      return `Neste evento, descarte a opção “${esc(dado.ops[errada].replace(/\.$/, ""))}”. Pergunte-se qual resposta preserva o time-box e deixa o problema visível para a equipe.`;
    }
    return '';
  }
  function podeConsultar(mid) {
    if (pt().parciais[mid] || (pt().consultas || {})[mid]) return false;
    if (mid === 'm7') { const r = pt().r.m7; return r.fase === 'eventos' && r.resp[r.pos] == null; }
    return true;
  }
  function especialistaHTML(mid) {
    const esp = MS.ESPECIALISTAS[mid], feita = (pt().consultas || {})[mid];
    if (feita) return `<aside class="carta-esp virada" aria-live="polite">${ret(esp.av, 52, esp.nome)}<div class="pilha" style="gap:.3rem"><div class="mono peq"><b>${esc(esp.nome)}</b> · ${esc(esp.papel)} <span class="mudo">(−${PENALIDADE} pts)</span></div><p class="peq">${feita}</p></div></aside>`;
    if (!podeConsultar(mid)) return '';
    return `<button class="carta-esp" data-acao="consultar"><span class="verso" aria-hidden="true"><i></i></span><span class="pilha" style="gap:.15rem;text-align:left"><b>Carta de orientação</b><span class="mudo peq">Consultar ${esc(esp.papel.toLowerCase())} · −${PENALIDADE} pontos · uma por missão</span></span></button>`;
  }

  /* ---------- missões ---------- */
  const CONCEITO = {
    m1: '<b>Declaração da visão</b>: apresenta o resultado que se deseja alcançar e orienta as decisões sobre o produto. <b>Justificativa de negócio</b>: explicita a necessidade, os benefícios esperados e as razões para investir, sustentando a decisão de iniciar e de continuar o projeto. O Product Owner é o principal responsável por mantê-la.',
    m2: '<b>História de usuário</b>: “Como [persona], quero [realizar algo], para [alcançar um benefício]”, acompanhada de critérios de aceitação (os 3 Cs: Card, Conversation, Confirmation). <b>Épico</b>: história grande demais para uma única Sprint, dividida em histórias menores no refinamento. <b>Tarefa</b>: trabalho necessário para realizar uma história; descreve a execução e vai para o Sprint Backlog.',
    m3: 'Ordene considerando três critérios em conjunto: <b>valor</b> atribuído pelo cliente; <b>risco ou incerteza</b>, já que itens incertos podem exigir investigação antecipada; e <b>dependência</b>, pois um item que precisa de outro não pode vir antes dele. Priorizar por valor não significa ignorar precedências.',
    m4: 'No processo Aprovar, Estimar e Assumir Compromisso, a equipe estima o <b>esforço relativo</b> das histórias. Compare cada uma com a âncora: o dobro do esforço recebe aproximadamente o dobro de pontos. Pontos não são horas nem datas. Os votos da equipe ajudam, mas reduzem o crédito do item.',
    m5: 'O Scrum trata o tempo como restrição. <b>Sprint</b>: 1 a 6 semanas, recomendado até 4. <b>Reunião diária</b>: 15 minutos. <b>Planejamento</b>: até 8 h; <b>revisão</b>: até 4 h; <b>retrospectiva</b>: até 4 h. Esses limites valem para uma Sprint de um mês e diminuem proporcionalmente em Sprints mais curtas. A duração escolhida define quanto trabalho cabe em cada Sprint.',
    m6: 'No planejamento, o Product Owner apresenta os itens de maior prioridade e a equipe define o <b>objetivo da Sprint</b>. Em seguida, seleciona histórias compatíveis com a <b>capacidade</b>, respeitando as dependências, e as decompõe em <b>tarefas</b> estimadas em horas. Esforço não é duração.',
    m7: '<b>Controle empírico</b>: transparência, inspeção e adaptação. A reunião diária torna visíveis progresso e impedimentos; a revisão demonstra o incremento ao Product Owner; a retrospectiva melhora o modo de trabalhar. Mudanças são avaliadas no backlog, sem invadir a Sprint em andamento.'
  };
  const INSTR = {
    m1: 'Como Product Owner, escolha a declaração de visão e a justificativa de negócio que devem orientar o projeto.',
    m2: 'Primeiro, monte uma história de usuário para a persona. Depois, classifique os cartões que chegaram das partes interessadas.',
    m3: 'Ordene o Product Backlog: o item do topo é desenvolvido primeiro. Use as setas ou arraste os cartões.',
    m4: 'Estime o esforço de cada história em pontos (sequência de Fibonacci), comparando com a história-âncora.',
    m5: 'Defina a duração da Sprint e os limites das reuniões. Observe como a duração altera a capacidade da equipe.',
    m6: 'Monte o Sprint Backlog: escolha o objetivo, selecione as histórias que cabem na capacidade e as tarefas da história principal.',
    m7: 'A Sprint começou. Veja o que aconteceu de fato e decida como reagir a cada situação.'
  };

  function trilha() {
    const e = pt().etapa;
    return `<nav class="trilha" aria-label="Progresso nas missões">${M.MISSOES.map((m, i) =>
      `<div class="passo ${i < e ? 'feito' : i === e ? 'atual' : ''}" ${i === e ? 'aria-current="step"' : ''}><b>${i < e ? '✓' : i + 1}</b><span>${m.nome}</span></div>`).join('')}</nav>`;
  }

  function retornoHTML(id, extra) {
    const res = pt().parciais[id]; if (!res) return '';
    const n = M.totalMissao(res.comp), ult = pt().etapa === 6;
    return `<section class="retorno" id="retorno" tabindex="-1">
      <div class="retorno-cab"><div><div class="mono peq mudo">Missão concluída</div>${est3(M.estrelasMissao(res.comp, M.MAX[id]))}</div><div class="retorno-pts">+${n}<span class="mudo peq"> / ${M.MAX[id]}</span></div></div>
      ${extra || ''}
      <div class="acoes fim"><button class="btn btn-pri" data-acao="avancar">${ult ? 'Ver resultado' : 'Próxima missão'} →</button></div>
    </section>`;
  }

  T.missao = function () {
    const m = M.MISSOES[pt().etapa], p = P();
    return `${faixaProjeto()}${trilha()}
    <div class="missao-cab">
      <p class="eyebrow">Missão ${pt().etapa + 1} de 7 · ${p.id} · ${esc(p.nome)}</p>
      <h2>${m.nome}</h2>
      <p class="papel">Seu papel: ${m.papel}</p>
      <p class="leia">${INSTR[m.id]}</p>
      <details class="conceito"><summary>Conceito da unidade · ${MS.SECOES[m.sec]}</summary><div>${CONCEITO[m.id]}</div></details>
      <div id="esp">${especialistaHTML(m.id)}</div>
    </div>
    <div class="pilha-g">${MIS[m.id]()}</div>
    <div class="acoes nao-imprimir" style="margin-top:2rem">
      <button class="btn-txt" data-acao="${tela.abandonar ? 'abandonar-sim' : 'abandonar'}">${tela.abandonar ? 'Confirmar: abandonar esta partida' : 'Abandonar partida'}</button>
      ${tela.abandonar ? '<button class="btn-txt" data-acao="abandonar-nao">Cancelar</button>' : ''}
    </div>`;
  };

  const MIS = {};

  /* Missão 1 */
  MIS.m1 = function () {
    const r = pt().r.m1, feito = !!pt().parciais.m1;
    const bloco = (titulo, ops, campo) => `
      <section class="pilha"><h3>${titulo}</h3><div class="opcoes" role="group" aria-label="${titulo}">
      ${ops.map((o, i) => {
        let cls = '';
        if (feito) { if (o.ok) cls = 'certa'; else if (r[campo] === i) cls = 'errada'; }
        return `<button class="opcao ${cls}" data-acao="m1" data-campo="${campo}" data-i="${i}" aria-pressed="${r[campo] === i}" ${feito ? 'disabled' : ''}>${esc(o.t)}${feito && r[campo] === i && !o.ok ? `<small>${esc(o.fb)}</small>` : ''}</button>`;
      }).join('')}</div></section>`;
    return `${bloco('Declaração da visão do projeto', pt().visaoOps, 'visao')}
      ${bloco('Justificativa de negócio', pt().justOps, 'just')}
      ${feito ? retornoHTML('m1', msgsHTML(pt().parciais.m1.msgs)) : `<div class="acoes fim"><button class="btn btn-pri" data-acao="conf-m1" ${r.visao == null || r.just == null ? 'disabled' : ''}>Confirmar escolhas</button></div>`}`;
  };

  /* Missão 2 */
  const TIPOS = { H: ['História', 'necessidade do usuário'], E: ['Épico', 'grande demais'], T: ['Tarefa técnica', 'trabalho de execução'] };
  const EXPL = {
    H: 'É uma história: expressa a necessidade de um usuário e o benefício esperado, em tamanho que cabe em uma Sprint.',
    E: 'É um épico: uma necessidade ampla demais para uma única Sprint, que precisa ser dividida em histórias menores.',
    T: 'É uma tarefa técnica: descreve trabalho de execução, sem usuário nem benefício. Aparece no Sprint Backlog ao decompor uma história.'
  };
  function textoCartao(c) { const p = P(); return c.tipo === 'H' ? item(c.id).t : c.tipo === 'E' ? p.epico.t : p.tecnicas[c.k]; }

  MIS.m2 = function () {
    const r = pt().r.m2, p = P(), feito = !!pt().parciais.m2;
    const ROT = ['Como…', 'quero…', 'para…'];
    const histConf = r.fase !== 'hist';
    const persona = `<div class="painel pilha"><p class="peq">Escreva a história na perspectiva da persona principal:</p>${cartaoPersona(p.persona, true)}${p.personas.length > 1 ? `<p class="mudo peq">As demais personas (${p.personas.slice(1).map(x => esc(x.nome) + ', ' + esc(x.papeis.join('/'))).join('; ')}) aparecem nas outras histórias do backlog.</p>` : '<p class="mudo peq">Neste projeto todas as histórias são da mesma persona.</p>'}</div>`;
    const frase = r.alt.every(a => a != null) ? `<p class="frase">“Como <b>${esc(pt().alts[0][r.alt[0]].t)}</b>, quero <b>${esc(pt().alts[1][r.alt[1]].t)}</b>, para <b>${esc(pt().alts[2][r.alt[2]].t)}</b>.”</p>` : '<p class="frase mudo">Escolha uma opção em cada lacuna para formar a história.</p>';
    const construtor = `
      <section class="pilha">
        <h3>1 · Escreva a história de usuário</h3>
        ${persona}
        <div class="painel lacunas">
          ${ROT.map((rot, li) => `<div class="lacuna"><span>${rot}</span><div class="alts" role="group" aria-label="${rot}">
            ${pt().alts[li].map((a, i) => {
              let cls = '';
              if (histConf) { if (a.ok) cls = 'certa'; else if (r.alt[li] === i) cls = 'errada'; }
              return `<button class="alt ${cls}" data-acao="m2alt" data-l="${li}" data-i="${i}" aria-pressed="${r.alt[li] === i}" ${histConf ? 'disabled' : ''}>${esc(a.t)}</button>`;
            }).join('')}
          </div></div>`).join('')}
        </div>
        <div class="historia-card">${frase}</div>
        ${histConf ? `<div class="retorno">${msgsHTML(r.histMsgs)}</div>` : `<div class="acoes fim"><button class="btn btn-pri" data-acao="conf-m2h" ${r.alt.some(a => a == null) ? 'disabled' : ''}>Confirmar história</button></div>`}
      </section>`;
    if (!histConf) return construtor;

    const deck = pt().deck;
    let mesa = '';
    if (r.pos < deck.length) {
      const c = deck[r.pos], resp = r.resp[r.pos], mostrou = resp != null;
      const certo = mostrou && resp === c.tipo;
      mesa = `
        <div class="mesa">
          <div class="contador">Cartão ${r.pos + 1} de ${deck.length} · teclas 1, 2 e 3</div>
          <article class="cartao ${mostrou ? (certo ? 'ok' : 'er') : ''}" aria-live="polite">
            <div class="meta"><span class="chave">${mostrou && c.tipo === 'H' ? chave(c.id) : 'CARTÃO ' + (r.pos + 1)}</span>${mostrou && c.tipo !== 'T' ? personaChip(textoCartao(c)) : ''}</div>
            <p class="txt">${esc(textoCartao(c))}</p>
            ${mostrou ? `<div class="pilha" style="gap:.5rem"><p class="peq"><b class="${certo ? 'nota-A' : 'nota-D'}">${certo ? 'Correto.' : 'Não é bem isso.'}</b> ${EXPL[c.tipo]}</p>
              ${c.tipo === 'E' ? `<p class="peq mono" style="color:var(--accent2)">Refinamento: o épico foi dividido em</p><div class="filhos">${p.epico.filhos.map(f => `<div class="filho"><span class="chave">${chave(f)}</span> ${esc(item(f).t)}</div>`).join('')}</div>` : ''}
            </div>` : ''}
          </article>
          ${mostrou ? `<button class="btn btn-pri" data-acao="m2prox">${r.pos + 1 < deck.length ? 'Próximo cartão' : 'Ver o Product Backlog'} →</button>` :
            `<div class="escolhas" role="group" aria-label="Classificar o cartão">${['H', 'E', 'T'].map((t, k) => `<button class="escolha" data-acao="m2cls" data-t="${t}"><span>${k + 1} · ${TIPOS[t][0]}</span><small>${TIPOS[t][1]}</small></button>`).join('')}</div>`}
        </div>`;
    } else {
      const soltas = pt().backlog.filter(id => !p.epico.filhos.includes(id));
      const linha = (id, extra) => `<li class="item" style="grid-template-columns:1fr"><div class="corpo"><div class="meta"><span class="chave">${chave(id)}</span>${personaChip(item(id).t)}${extra || ''}</div><p>${esc(item(id).t)}</p></div></li>`;
      mesa = `<div class="quadro">
        <section class="coluna col-pb"><h4>Product Backlog <span class="mono">${p.itens.length} histórias</span></h4>
          <p class="mudo peq">Tudo o que o produto precisa, na forma de histórias de usuário. Será ordenado na próxima missão.</p>
          <ul class="backlog">${soltas.map(id => linha(id)).join('')}${p.epico.filhos.map(id => linha(id, '<span class="chip chip-v">do épico</span>')).join('')}</ul>
        </section>
        <div class="pilha">
          <section class="coluna col-ep"><h4>Épico refinado</h4><p class="peq">${esc(p.epico.t)}</p><p class="mudo peq">Dividido em ${p.epico.filhos.map(chave).join(' e ')}, que entraram no backlog.</p></section>
          <section class="coluna col-tt"><h4>Fora do Product Backlog</h4><ul class="msgs">${p.tecnicas.map(t => `<li class="info">${esc(t)}</li>`).join('')}</ul><p class="mudo peq">Tarefas técnicas aparecem depois, ao decompor as histórias no Sprint Backlog.</p></section>
        </div>
      </div>`;
    }
    return `${construtor}
      <section class="pilha"><h3>2 · Classifique os cartões recebidos</h3>${mesa}</section>
      ${feito ? retornoHTML('m2', msgsHTML(pt().parciais.m2.msgs)) : ''}`;
  };

  /* Missão 3 */
  MIS.m3 = function () {
    const r = pt().r.m3, p = P(), feito = !!pt().parciais.m3;
    const viol = M.violacoes(r.ordem, p.itens);
    const violPor = {}; viol.forEach(([a, d]) => { (violPor[a] = violPor[a] || []).push(d); });
    const n = r.ordem.length;
    return `
      <div class="legenda"><span>${estrelasValor(4)} valor para o cliente</span><span class="chip chip-a">incerteza alta</span><span class="chip chip-d">depende de</span><span>· topo = primeiro</span></div>
      <ol class="backlog" id="lista-backlog">
        ${r.ordem.map((id, k) => {
          const it = item(id);
          return `<li class="item ${violPor[id] ? 'viol' : ''}" draggable="${!feito}" data-id="${id}">
            <span class="pos">${k + 1}</span>
            <div class="corpo">
              <div class="meta"><span class="chave">${chave(id)}</span>${personaChip(it.t)}${estrelasValor(it.v)}${it.r ? '<span class="chip chip-a">incerteza alta</span>' : ''}${it.d.map(d => `<span class="chip chip-d">depende de ${chave(d)}</span>`).join('')}</div>
              <p>${esc(it.t)}</p>
              ${violPor[id] ? `<span class="alerta">Precisa vir depois de ${violPor[id].map(chave).join(', ')}</span>` : ''}
            </div>
            <div class="mover">
              <button data-acao="mover" data-id="${id}" data-d="-1" aria-label="Subir ${chave(id)}" ${k === 0 || feito ? 'disabled' : ''}>▲</button>
              <button data-acao="mover" data-id="${id}" data-d="1" aria-label="Descer ${chave(id)}" ${k === n - 1 || feito ? 'disabled' : ''}>▼</button>
            </div>
          </li>`;
        }).join('')}
      </ol>
      ${feito ? retornoHTML('m3', msgsHTML(pt().parciais.m3.msgs)) : `<div class="acoes fim"><span class="mudo peq">${viol.length ? `${viol.length} dependência${viol.length > 1 ? 's' : ''} fora de ordem` : 'Nenhuma dependência violada'}</span><button class="btn btn-pri" data-acao="conf-m3">Confirmar prioridades</button></div>`}`;
  };

  /* Missão 4 */
  MIS.m4 = function () {
    const r = pt().r.m4, p = P(), feito = !!pt().parciais.m4, anc = M.ancora(p.itens);
    const det = feito ? Object.fromEntries(pt().parciais.m4.det.map(d => [d.id, d])) : {};
    const faltam = p.itens.filter(i => r.est[i.id] == null).length;
    const pa = item(anc).p;
    const proxFib = x => M.FIB.reduce((m, v) => Math.abs(v - x) < Math.abs(m - x) || (Math.abs(v - x) === Math.abs(m - x) && v > m) ? v : m, 1);
    return `
      <section class="painel pilha guia-fib">
        <h3>Como estimar com a sequência de Fibonacci</h3>
        <div class="regua" role="img" aria-label="Régua de pontos 1, 2, 3, 5, 8 e 13">
          ${M.FIB.map(v => `<div class="marco ${v === pa ? 'anc' : ''}"><b>${v}</b><span>${{ 1: 'muito pequena', 2: 'pequena', 3: 'média', 5: 'grande', 8: 'muito grande', 13: 'enorme' }[v]}</span>${v === pa ? '<i>âncora</i>' : ''}</div>`).join('')}
        </div>
        <ol class="msgs passos-fib">
          <li class="info"><b>Compare, não calcule horas.</b> Ponha cada história ao lado da âncora (${pa} pts) e pergunte se ela exige menos, o mesmo ou mais esforço.</li>
          <li class="info"><b>Considere três coisas juntas:</b> quantidade de trabalho, complexidade e incerteza (o que a equipe ainda não sabe fazer).</li>
          <li class="info"><b>Use a proporção.</b> Cerca do dobro da âncora → ${proxFib(pa * 2)} pontos; cerca do triplo → ${proxFib(pa * 3)}; cerca da metade → ${proxFib(pa / 2)}. Escolha sempre o valor da sequência mais próximo.</li>
          <li class="info"><b>Na dúvida entre dois valores, escolha o maior:</b> os intervalos crescem (5, 8, 13) porque, quanto maior a história, maior a incerteza. Não faz sentido discutir 6 ou 7.</li>
          <li class="info"><b>Se nem 13 basta,</b> a história é grande demais para uma Sprint: trate-a como épico e divida-a.</li>
        </ol>
      </section>
      <div class="painel" style="border-color:var(--green)"><p class="peq"><b>Âncora:</b> <span class="chave">${chave(anc)}</span> ${esc(item(anc).t)} — <b class="mono">${item(anc).p} pontos</b></p></div>
      <ul class="backlog">
        ${pt().r.m3.ordem.map(id => {
          const it = item(id), ehAnc = id === anc, d = det[id];
          return `<li class="item est-item">
            <div class="corpo"><div class="meta"><span class="chave">${chave(id)}</span>${personaChip(it.t)}${ehAnc ? '<span class="chip chip-ok">âncora</span>' : ''}${d ? `<span class="chip ${d.cred === 1 ? 'chip-ok' : d.cred ? 'chip-a' : 'chip-er'}">referência da equipe: ${d.ref}</span>` : ''}</div><p>${esc(it.t)}</p></div>
            <div class="est-linha">
              <div class="fib" role="group" aria-label="Pontos de ${chave(id)}">${M.FIB.map(v => `<button data-acao="est" data-id="${id}" data-v="${v}" aria-pressed="${r.est[id] === v}" ${ehAnc || feito ? 'disabled' : ''} class="${d && d.ref === v && d.dado !== v ? 'ref' : ''}">${v}</button>`).join('')}</div>
              ${ehAnc ? '' : r.dicas[id] ? `<div class="votos"><span>Votos:</span>${pt().votos[id].map(v => `<span class="voto">${v}</span>`).join('')}</div>` : feito ? '' : `<button class="btn-txt" data-acao="votos" data-id="${id}">Ver votos da equipe (−40% no item)</button>`}
            </div>
          </li>`;
        }).join('')}
      </ul>
      ${feito ? retornoHTML('m4', msgsHTML(pt().parciais.m4.msgs)) : `<div class="acoes fim"><span class="mudo peq">${faltam ? `Faltam ${faltam} estimativa${faltam > 1 ? 's' : ''}` : 'Todas estimadas'}</span><button class="btn btn-pri" data-acao="conf-m4" ${faltam ? 'disabled' : ''}>Confirmar estimativas</button></div>`}`;
  };

  /* Missão 5 */
  const CTRL = [
    ['semanas', 'Duração da Sprint', 1, 6, 1, v => `${v} semana${v > 1 ? 's' : ''}`],
    ['daily', 'Reunião diária', 5, 60, 5, v => `${v} min`],
    ['planning', 'Reunião de planejamento da Sprint', 1, 12, 0.5, v => `${String(v).replace('.', ',')} h`],
    ['review', 'Reunião de revisão da Sprint', 0.5, 8, 0.5, v => `${String(v).replace('.', ',')} h`],
    ['retro', 'Reunião de retrospectiva', 0.5, 8, 0.5, v => `${String(v).replace('.', ',')} h`]
  ];
  function previsaoRelease() {
    const p = P(), r = pt().r.m5, est = pt().r.m4.est;
    const cap = p.vel * r.semanas, tot = soma(p.itens.map(i => est[i.id] || i.p));
    const n = Math.ceil(tot / cap);
    return { cap, tot, n, semanas: n * r.semanas };
  }
  function calendario(sem) {
    let h = '';
    for (let s = 0; s < 6; s++) for (let d = 0; d < 7; d++) h += `<i class="${s < sem ? 'sprint' : ''} ${d >= 5 ? 'fds' : ''}"></i>`;
    return h;
  }
  MIS.m5 = function () {
    const r = pt().r.m5, feito = !!pt().parciais.m5, pr = previsaoRelease();
    return `
      <div class="grade2">
        <section class="painel pilha">
          ${CTRL.map(([k, rot, min, max, passo, f]) => `<div class="controle">
            <div class="controle-cab"><label for="tb-${k}">${rot}</label><output id="out-${k}" for="tb-${k}">${f(r[k])}</output></div>
            <input type="range" id="tb-${k}" min="${min}" max="${max}" step="${passo}" value="${r[k]}" data-tb="${k}" ${feito ? 'disabled' : ''}>
          </div>`).join('')}
        </section>
        <section class="painel pilha">
          <h3>Planejamento de releases</h3>
          <div class="calendario" id="cal" aria-hidden="true">${calendario(r.semanas)}</div>
          <p class="peq">Capacidade por Sprint: <b class="mono" id="cap-txt">${P().vel} × ${r.semanas} = ${pr.cap} pontos</b></p>
          <p class="peq mudo" id="rel-txt">Backlog estimado em ${pr.tot} pontos → cerca de ${pr.n} Sprints (${pr.semanas} semanas).</p>
          <p class="peq mudo">Sprints mais curtas entregam valor mais cedo e permitem inspecionar com mais frequência; cada reunião tem seu próprio limite de tempo.</p>
        </section>
      </div>
      ${feito ? retornoHTML('m5', msgsHTML(pt().parciais.m5.msgs)) : `<div class="acoes fim"><button class="btn btn-pri" data-acao="conf-m5">Confirmar time-boxes</button></div>`}`;
  };
  function atualizarTB(k) {
    const r = pt().r.m5, c = CTRL.find(x => x[0] === k);
    $('#out-' + k).textContent = c[5](r[k]);
    if (k === 'semanas') {
      const pr = previsaoRelease();
      $('#cal').innerHTML = calendario(r.semanas);
      $('#cap-txt').textContent = `${P().vel} × ${r.semanas} = ${pr.cap} pontos`;
      $('#rel-txt').textContent = `Backlog estimado em ${pr.tot} pontos → cerca de ${pr.n} Sprints (${pr.semanas} semanas).`;
    }
  }

  /* Missão 6 */
  function medidor() {
    const r = pt().r.m6, cap = P().vel * pt().r.m5.semanas, est = pt().r.m4.est;
    const s = soma(r.sel.map(id => est[id]));
    const pct = Math.min(100, Math.round(100 * s / cap));
    return `<div class="medidor-txt"><span>Compromisso: ${s} pts</span><span>Capacidade: ${cap} pts</span></div>
      <div class="barra" role="meter" aria-valuenow="${s}" aria-valuemin="0" aria-valuemax="${cap}"><i class="${s > cap ? 'cheio' : ''}" style="width:${pct}%"></i></div>
      ${s > cap ? '<span class="mono peq" style="color:var(--red)">Acima da capacidade da Sprint</span>' : ''}`;
  }
  MIS.m6 = function () {
    const r = pt().r.m6, p = P(), feito = !!pt().parciais.m6, est = pt().r.m4.est;
    const key = p.itens.find(i => i.k).id;
    const todas = [...p.tarefas.boas, ...p.tarefas.ruins];
    const horas = soma(r.tar.map(i => todas[i][1]));
    return `
      <section class="pilha"><h3>1 · Objetivo da Sprint 1</h3>
        <div class="opcoes" role="group" aria-label="Objetivo da Sprint">
          ${pt().objOps.map((o, i) => {
            let cls = ''; if (feito) { if (o.ok) cls = 'certa'; else if (r.obj === i) cls = 'errada'; }
            return `<button class="opcao ${cls}" data-acao="m6obj" data-i="${i}" aria-pressed="${r.obj === i}" ${feito ? 'disabled' : ''}>${esc(o.t)}${feito && r.obj === i && !o.ok ? `<small>${esc(o.fb)}</small>` : ''}</button>`;
          }).join('')}
        </div>
      </section>
      <section class="pilha"><h3>2 · Histórias da Sprint (na ordem do seu backlog)</h3>
        <div class="medidor painel" id="medidor">${medidor()}</div>
        <ul class="backlog">
          ${pt().r.m3.ordem.map((id, k) => {
            const it = item(id);
            return `<li><label class="item sel-item"><input type="checkbox" data-sel="${id}" ${r.sel.includes(id) ? 'checked' : ''} ${feito ? 'disabled' : ''}>
              <div class="corpo"><div class="meta"><span class="mono peq mudo">#${k + 1}</span><span class="chave">${chave(id)}</span>${personaChip(it.t)}${it.d.map(d => `<span class="chip chip-d">depende de ${chave(d)}</span>`).join('')}</div><p>${esc(it.t)}</p></div>
              <span class="pts-badge">${est[id]} pts</span></label></li>`;
          }).join('')}
        </ul>
      </section>
      <section class="pilha"><h3>3 · Tarefas da história principal</h3>
        <p class="peq"><span class="chave">${chave(key)}</span> ${esc(item(key).t)}</p>
        <p class="mudo peq">Selecione apenas o trabalho necessário para atender aos critérios de aceitação da história.</p>
        <ul class="backlog">
          ${pt().tarOps.map(i => {
            const [t, h, tipo] = todas[i], boa = i < p.tarefas.boas.length, marc = r.tar.includes(i);
            const fb = feito ? (boa ? (marc ? '<span class="chip chip-ok">necessária</span>' : '<span class="chip chip-er">faltou</span>') : (marc ? `<span class="chip chip-er">${tipo === 'gold' ? 'gold-plating' : 'fora desta história'}</span>` : '<span class="chip chip-ok">bem evitada</span>')) : '';
            return `<li><label class="item tarefa"><input type="checkbox" data-tar="${i}" ${marc ? 'checked' : ''} ${feito ? 'disabled' : ''}>
              <div class="corpo"><p>${esc(t)}</p>${fb ? `<div class="meta">${fb}</div>` : ''}</div><span class="pts-badge">${h} h</span></label></li>`;
          }).join('')}
        </ul>
        <p class="mudo peq" id="horas-txt">Esforço das tarefas selecionadas: <b class="mono">${horas} h</b>. Com mais de uma pessoa trabalhando, esse esforço não equivale a ${horas} horas corridas de duração.</p>
      </section>
      ${feito ? retornoHTML('m6', msgsHTML(pt().parciais.m6.msgs)) : `<div class="acoes fim"><button class="btn btn-pri" data-acao="conf-m6" ${r.obj == null || !r.sel.length ? 'disabled' : ''}>Criar o Sprint Backlog</button></div>`}`;
  };

  /* Missão 7 */
  MIS.m7 = function () {
    const r = pt().r.m7, p = P(), m6 = pt().parciais.m6, est = pt().r.m4.est, feito = !!pt().parciais.m7;
    const sel = pt().r.m6.sel;
    // Realidade da Sprint: esforço de referência x capacidade (sem pontuação; ilustra o controle empírico)
    let acum = 0; const concl = [], nao = [];
    pt().r.m3.ordem.filter(id => sel.includes(id)).forEach(id => { acum += item(id).p; (acum <= m6.cap ? concl : nao).push(id); });
    const real = `<section class="painel pilha">
        <h3>Realidade da Sprint 1</h3>
        <p class="peq">A equipe assumiu <b class="mono">${m6.somaEst} pts</b> pelas suas estimativas. Pela referência da equipe, o trabalho somava <b class="mono">${m6.real} pts</b>, para uma capacidade de <b class="mono">${m6.cap} pts</b>.</p>
        ${msgsHTML([
          ...concl.map(id => ['ok', `${chave(id)} concluída e demonstrada na revisão.`]),
          ...nao.map(id => ['erro', `${chave(id)} não coube na Sprint e voltou ao Product Backlog.`]),
          ...(nao.length ? [['info', 'É assim que o controle empírico funciona: a inspeção revela o desvio e o próximo planejamento se adapta.']] : [])
        ])}
        ${r.fase === 'real' ? '<div class="acoes fim"><button class="btn btn-pri" data-acao="m7ini">Enfrentar os eventos da Sprint →</button></div>' : ''}
      </section>`;
    if (r.fase === 'real') return real;
    let corpo = '';
    if (r.pos < pt().eventos.length) {
      const ev = pt().eventos[r.pos], dado = MS.EVENTOS[ev.i], resp = r.resp[r.pos], mostrou = resp != null;
      corpo = `<div class="mesa">
        <div class="contador">Evento ${r.pos + 1} de ${pt().eventos.length} · teclas 1, 2 e 3</div>
        <article class="cartao ${mostrou ? (resp === 0 ? 'ok' : 'er') : ''}">
          <span class="chip chip-v" style="justify-self:start">${esc(dado.tema)}</span>
          <p class="txt">${esc(dado.t)}</p>
          <div class="opcoes" role="group" aria-label="Como reagir">
            ${ev.ops.map((o, k) => {
              let cls = ''; if (mostrou) { if (o === 0) cls = 'certa'; else if (resp === o) cls = 'errada'; }
              const desc = r.elim && r.elim.pos === r.pos && r.elim.o === o;
              if (desc && !mostrou) cls = 'descartada';
              return `<button class="opcao ${cls}" data-acao="m7resp" data-o="${o}" ${mostrou || desc ? 'disabled' : ''}>${k + 1} · ${esc(dado.ops[o])}${desc ? '<small>Descartada pelo especialista</small>' : ''}</button>`;
            }).join('')}
          </div>
          ${mostrou ? `<p class="peq"><b class="${resp === 0 ? 'nota-A' : 'nota-D'}">${resp === 0 ? 'Boa decisão.' : 'Melhor rever.'}</b> ${esc(dado.fb)}</p>` : ''}
        </article>
        ${mostrou && !feito ? `<button class="btn btn-pri" data-acao="m7prox">${r.pos + 1 < pt().eventos.length ? 'Próximo evento' : 'Encerrar a Sprint'} →</button>` : ''}
      </div>`;
    }
    return `${real}<section class="pilha"><h3>Eventos da Sprint</h3>${corpo}</section>${feito ? retornoHTML('m7', msgsHTML(pt().parciais.m7.msgs)) : ''}`;
  };

  /* ---------- resultado ---------- */
  function grafico(rec) {
    const p = proj(rec.pid);
    const jog = M.simular(rec.ordem, p.itens, p.vel, rec.semanas);
    const ide = M.simular(M.ordemIdeal(p.itens), p.itens, p.vel, 2);
    const tot = soma(p.itens.map(i => i.p)), semC = Math.ceil(tot / p.vel);
    const casc = { serie: [{ semana: 0, resta: ide.V }, { semana: semC, resta: 0 }], V: ide.V, semanas: semC };
    const W = 640, H = 270, ml = 44, mr = 16, mt = 16, mb = 40;
    const maxS = Math.max(jog.semanas, ide.semanas, semC), V = ide.V;
    const x = s => ml + (W - ml - mr) * s / maxS, y = v => mt + (H - mt - mb) * (1 - v / V);
    const passos = sim => { let d = `M${x(0)},${y(sim.serie[0].resta)}`; for (let k = 1; k < sim.serie.length; k++) d += ` H${x(sim.serie[k].semana)} V${y(sim.serie[k].resta)}`; return d; };
    const area = sim => passos(sim) + ` H${x(sim.serie[sim.serie.length - 1].semana)} V${y(0)} H${x(0)} Z`;
    let ticks = '';
    for (let s = 0; s <= maxS; s += maxS > 12 ? 4 : 2) ticks += `<line x1="${x(s)}" x2="${x(s)}" y1="${y(0)}" y2="${y(0) + 4}" stroke="var(--border2)"/><text x="${x(s)}" y="${y(0) + 17}" text-anchor="middle">${s}</text>`;
    [0, 0.5, 1].forEach(f => { ticks += `<line x1="${ml}" x2="${W - mr}" y1="${y(V * f)}" y2="${y(V * f)}" stroke="var(--border)" stroke-dasharray="${f ? '3 4' : '0'}"/><text x="${ml - 6}" y="${y(V * f) + 4}" text-anchor="end">${Math.round(V * f)}</text>`; });
    const metade = sim => (sim.serie.find(s => s.resta <= V / 2) || { semana: sim.semanas }).semana;
    return {
      svg: `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Dívida de valor ao longo das semanas">
        ${ticks}
        <text x="${(W + ml) / 2}" y="${H - 4}" text-anchor="middle">semanas</text>
        <text x="12" y="${(H - mb) / 2}" transform="rotate(-90 12 ${(H - mb) / 2})" text-anchor="middle">valor pendente</text>
        <path d="${area(jog)}" fill="var(--accent)" fill-opacity=".1" stroke="none"/>
        <path d="M${x(0)},${y(V)} H${x(semC)} V${y(0)}" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="2 4"/>
        <path d="${passos(ide)}" fill="none" stroke="var(--accent2)" stroke-width="2" stroke-dasharray="7 5"/>
        <path d="${passos(jog)}" fill="none" stroke="var(--accent)" stroke-width="3"/>
      </svg>`,
      legenda: `<div class="legenda"><span><b style="color:var(--accent)">━</b> seu plano (Sprints de ${rec.semanas} sem.)</span><span><b style="color:var(--accent2)">╍</b> referência (Sprints de 2 sem.)</span><span><b style="color:var(--muted)">┈</b> entrega única ao final</span></div>`,
      texto: `Metade do valor chega na semana <b class="mono">${metade(jog)}</b> no seu plano, na semana <b class="mono">${metade(ide)}</b> na referência e só na semana <b class="mono">${semC}</b> com entrega única ao final.`
    };
  }

  T.resultado = function () {
    const rec = E.ultimo; if (!rec) return T.inicio();
    const p = proj(rec.pid), nota = M.nota(rec.pontos), ck = M.checklist(rec.parciais), g = grafico(rec);
    const atend = ck.filter(c => c.ok).length;
    const recorde = rec.melhorAnterior != null && rec.pontos > rec.melhorAnterior;
    const min = Math.floor(rec.duracao / 60), seg = rec.duracao % 60;
    return `
    <div class="pilha-g">
      <section class="resultado-topo">
        <div class="carimbo nota-${nota.letra}" aria-label="Nota ${nota.letra}">${nota.letra}</div>
        <div class="pilha" style="gap:.5rem">
          <p class="eyebrow">${p.id} · ${esc(p.nome)}${E.jogador.nome ? ' · ' + esc(E.jogador.nome) : ''}</p>
          <h2>${nota.titulo}</h2>
          <div class="placar">${rec.pontos}<small> / 1000 pts</small></div>
          <p class="mudo peq">${atend} de ${ck.length} conceitos atendidos · ${new Date(rec.data).toLocaleString('pt-BR')} · ${min} min ${seg} s · ${rec.tentativas}ª partida neste projeto
          ${recorde ? ` · <b class="nota-A">novo recorde (antes ${rec.melhorAnterior})</b>` : rec.melhorAnterior != null ? ` · melhor anterior ${rec.melhorAnterior}` : ''}</p>
        </div>
      </section>

      <div class="acoes nao-imprimir">
        <button class="btn btn-pri" data-acao="comecar" data-id="${p.id}">Jogar de novo este projeto</button>
        <button class="btn btn-sec" data-acao="projetos">Outro projeto</button>
        ${CONFIG.semArquivos ? '' : '<button class="btn btn-sec" data-acao="imprimir">Imprimir relatório</button>'}
        <button class="btn btn-sec" data-acao="salvar">Salvar progresso</button>
      </div>

      <section class="painel pilha">
        <h3>Pontuação e tempo por missão</h3>
        <div class="missoes-res">${M.MISSOES.map(m => {
          const c = rec.parciais[m.id].comp, n = M.totalMissao(c);
          const tp = rec.tempos && rec.tempos[m.id];
          return `<div class="mres"><span>${m.nome}${(rec.consultas || []).includes(m.id) ? ' <span class="chip chip-a">consulta</span>' : ''}</span><div class="barra"><i style="width:${Math.round(100 * n / M.MAX[m.id])}%"></i></div>${est3(M.estrelasMissao(c, M.MAX[m.id]))}<span class="num">${n} / ${M.MAX[m.id]}</span><span class="num tempo">${tp != null ? fmtTempo(tp) : '—'}</span></div>`;
        }).join('')}</div>
        ${(rec.consultas || []).length ? `<p class="peq">Consultas a especialistas: <b class="mono">${rec.consultas.length} × −${PENALIDADE} = −${rec.consultas.length * PENALIDADE} pts</b> (soma das missões: ${rec.bruto} pts).</p>` : '<p class="peq mudo">Nenhum especialista consultado.</p>'}
        <p class="mudo peq">O tempo de cada missão é apenas informativo e não altera a pontuação.</p>
      </section>

      <section class="painel pilha">
        <h3>Aspectos teóricos atendidos</h3>
        <p class="mudo peq">Um conceito é considerado atendido quando a parte correspondente da pontuação atinge 70%.</p>
        <ul class="checklist">${ck.map(c => `<li class="${c.ok ? 'ok' : 'nao'}"><span class="marca-ck">${c.ok ? '✓' : '✗'}</span><span>${esc(c.nome)} <span class="mudo mono peq">${c.pct}%</span></span>${secRef(c.sec)}</li>`).join('')}</ul>
      </section>

      <section class="painel pilha">
        <h3>Dívida de valor do seu plano</h3>
        <p class="mudo peq">Releitura da figura 5.7: cada degrau é o valor realizado ao fim de uma Sprint. Quanto mais cedo a curva desce, mais cedo o cliente percebe benefícios.</p>
        <div class="grafico">${g.svg}</div>
        ${g.legenda}
        <p class="peq">${g.texto}</p>
      </section>

      <section class="painel pilha">
        <h3>Seu Product Backlog priorizado</h3>
        <ol class="msgs" style="list-style:decimal;padding-left:1.4rem">${rec.ordem.map(id => `<li style="padding-left:.2rem"><span class="chave">${rec.num[id]}</span> ${esc(p.itens.find(i => i.id === id).t)}</li>`).join('')}</ol>
      </section>

      ${rec.novas.length ? `<section class="pilha"><h3>Conquistas desbloqueadas</h3><div class="conquistas">${rec.novas.map(id => { const c = CONQ.find(x => x.id === id); return `<div class="conq nova"><span class="ic">nova conquista</span><b>${c.nome}</b><span>${c.desc}</span></div>`; }).join('')}</div></section>` : ''}
    </div>`;
  };

  T.conquistas = function () {
    return `<div class="pilha-g">
      <div class="pilha"><p class="eyebrow">Progresso</p><h2>Conquistas</h2><p class="mudo">${E.conquistas.length} de ${CONQ.length} desbloqueadas.</p></div>
      <div class="conquistas">${CONQ.map(c => { const ok = E.conquistas.includes(c.id); return `<div class="conq ${ok ? '' : 'bloq'}"><span class="ic">${ok ? 'desbloqueada' : 'bloqueada'}</span><b>${c.nome}</b><span>${c.desc}</span></div>`; }).join('')}</div>
      <div class="acoes"><button class="btn btn-sec" data-acao="inicio">Voltar</button></div>
    </div>`;
  };

  T.ajuda = function () {
    return `<div class="pilha-g">
      <div class="pilha"><p class="eyebrow">Regras</p><h2>Como jogar</h2></div>
      <div class="grade2">
        <section class="painel pilha"><h3>O objetivo</h3><p class="peq">Você conduz um projeto pelo ciclo do Scrum em 7 missões, assumindo os papéis de Product Owner, equipe e Scrum Master. Cada decisão é pontuada de acordo com os conceitos da Unidade 5. O total é 1000 pontos.</p></section>
        <section class="painel pilha"><h3>Notas</h3><p class="peq mono">S ≥ 900 · A ≥ 800 · B ≥ 650 · C ≥ 500 · D &lt; 500</p><p class="peq">Ao final, o relatório mostra quais aspectos teóricos foram atendidos e a curva de valor do seu plano.</p></section>
        <section class="painel pilha"><h3>Repetir projetos</h3><p class="peq">Jogue o mesmo projeto quantas vezes quiser. As opções e a numeração das histórias mudam a cada partida, e fica registrada a melhor pontuação. Seu nível é a soma das melhores pontuações dos 15 projetos.</p></section>
        <section class="painel pilha"><h3>Cartas de orientação</h3><p class="peq">Em cada missão você pode consultar um especialista uma vez. A dica é específica para o seu projeto e custa ${PENALIDADE} pontos. Concluir com nota A ou S sem consultas rende a conquista Autonomia.</p></section>
        <section class="painel pilha"><h3>Tempo</h3><p class="peq">O tempo gasto em cada missão aparece no relatório para você acompanhar seu ritmo. Ele não altera a pontuação: aqui vale pensar com calma.</p></section>
        <section class="painel pilha"><h3>Identificadores</h3><p class="peq">Cada projeto tem uma sigla (EVT, DLV, ART…). As histórias recebem a sigla e um número, como EVT-3, como nas ferramentas de gestão ágil. O número não indica prioridade.</p></section>
        <section class="painel pilha"><h3>Salvar</h3><p class="peq">O progresso é salvo automaticamente neste navegador, inclusive no meio de uma missão. Para trocar de computador ou entregar ao professor, baixe o arquivo de salvamento ou imprima o relatório em PDF.</p></section>
      </div>
      <section class="painel pilha"><h3>Pontuação</h3>
        <ul class="msgs">${M.MISSOES.map(m => `<li class="info"><b>${m.nome}</b> — ${M.MAX[m.id]} pts · ${MS.SECOES[m.sec]}</li>`).join('')}</ul>
      </section>
      <div class="acoes"><button class="btn btn-pri" data-acao="projetos">Escolher projeto</button><button class="btn btn-sec" data-acao="inicio">Voltar</button></div>
    </div>`;
  };

  const codigoSave = () => { try { return btoa(unescape(encodeURIComponent(JSON.stringify(E)))); } catch (e) { return ''; } };
  T.salvar = function () {
    return `<div class="pilha-g">
      <div class="pilha"><p class="eyebrow">Progresso</p><h2>Salvar ou carregar</h2><p class="mudo leia">Seu progresso é salvo automaticamente neste navegador. Use as opções abaixo para levar o progresso a outro computador ou guardar uma cópia.</p></div>
      <div class="grade2">
        ${CONFIG.semArquivos ? '' : `<section class="painel pilha"><h3>Arquivo de salvamento</h3>
          <p class="peq mudo">Baixe um arquivo .json com todo o seu progresso e carregue-o depois.</p>
          <div class="acoes"><button class="btn btn-pri" data-acao="baixar">Baixar arquivo</button>
          <label class="btn btn-sec" for="arq">Carregar arquivo</label><input id="arq" type="file" accept=".json,application/json" hidden data-arquivo></div>
        </section>`}
        <section class="painel pilha"><h3>Código de salvamento</h3>
          <p class="peq mudo">Alternativa ao arquivo: copie o código e cole-o depois no campo abaixo.</p>
          <textarea id="cod-saida" readonly aria-label="Seu código de salvamento">${codigoSave()}</textarea>
          <div class="acoes"><button class="btn btn-sec" data-acao="copiar">Copiar código</button></div>
          <textarea id="cod-entrada" placeholder="Cole aqui um código de salvamento" aria-label="Colar código de salvamento"></textarea>
          <div class="acoes"><button class="btn btn-sec" data-acao="colar">Carregar código</button></div>
        </section>
      </div>
      <section class="painel pilha"><h3>Recomeçar do zero</h3>
        <p class="peq mudo">Apaga pontuações, conquistas e histórico deste navegador.</p>
        <div class="acoes"><button class="btn btn-sec" data-acao="${tela.apagar ? 'apagar-sim' : 'apagar'}" style="${tela.apagar ? 'border-color:var(--red);color:var(--red)' : ''}">${tela.apagar ? 'Confirmar: apagar tudo' : 'Apagar progresso'}</button>${tela.apagar ? '<button class="btn-txt" data-acao="apagar-nao">Cancelar</button>' : ''}</div>
      </section>
      <div class="acoes"><button class="btn btn-sec" data-acao="inicio">Voltar</button></div>
    </div>`;
  };

  function importar(obj) {
    if (!obj || obj.v !== CONFIG.versao || !Array.isArray(obj.historico) || typeof obj.melhores !== 'object') { aviso('Arquivo inválido ou de outra versão do jogo.'); return; }
    E = Object.assign(novoEstado(), obj); salvar(); aplicarTema();
    tela = { nome: 'inicio' }; render(); aviso('Progresso carregado.');
  }

  /* ================= renderização ================= */
  let ultimaTela = '';
  function topoInfo() {
    const ti = $('#topo-info');
    if (tela.nome === 'missao' && pt()) ti.innerHTML = `<span class="proj-sigla">${P().id}</span><span class="nome-proj">${esc(P().nome)}</span><span>Missão ${pt().etapa + 1}/7</span><span class="pts">${pontosAteAgora()} pts</span>`;
    else { const nv = nivel(); ti.innerHTML = `<span>Nível ${nv.k} · ${nv.nome}</span><span class="pts">${fmt(nv.xp)} XP</span>`; }
  }
  function render() {
    if (tela.nome === 'missao' && !pt()) tela = { nome: 'inicio' };
    if (tela.nome === 'missao') marcarInicio();
    const ativo = document.activeElement, ds = ativo && ativo.dataset ? Object.assign({}, ativo.dataset) : null;
    const app = $('#app');
    app.innerHTML = (T[tela.nome] || T.inicio)();
    topoInfo();
    const assinatura = tela.nome + (pt() ? pt().etapa : '');
    if (assinatura !== ultimaTela) { window.scrollTo(0, 0); app.focus({ preventScroll: true }); ultimaTela = assinatura; }
    else if (ds && ds.acao) {
      const sel = Object.entries(ds).map(([k, v]) => `[data-${k.replace(/[A-Z]/g, c => '-' + c.toLowerCase())}="${CSS.escape(v)}"]`).join('');
      const alvo = app.querySelector(sel);
      if (alvo && !alvo.disabled) alvo.focus({ preventScroll: true });
    }
    ligarArrasto();
  }
  function mostrarRetorno() {
    const r = $('#retorno'); if (r) { r.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' }); r.focus({ preventScroll: true }); }
  }

  /* arrastar e soltar na priorização (mouse); no toque, usar as setas */
  function ligarArrasto() {
    const lista = $('#lista-backlog'); if (!lista || pt().parciais.m3) return;
    let origem = null;
    lista.querySelectorAll('.item').forEach(li => {
      li.addEventListener('dragstart', e => { origem = li.dataset.id; li.classList.add('arrasta'); e.dataTransfer.effectAllowed = 'move'; try { e.dataTransfer.setData('text/plain', origem); } catch (x) { /* */ } });
      li.addEventListener('dragend', () => li.classList.remove('arrasta'));
      li.addEventListener('dragover', e => { e.preventDefault(); li.classList.add('alvo'); });
      li.addEventListener('dragleave', () => li.classList.remove('alvo'));
      li.addEventListener('drop', e => {
        e.preventDefault(); li.classList.remove('alvo');
        const o = pt().r.m3.ordem, de = o.indexOf(origem), para = o.indexOf(li.dataset.id);
        if (de < 0 || para < 0 || de === para) return;
        o.splice(para, 0, o.splice(de, 1)[0]); salvar(); som('clique'); render();
      });
    });
  }

  /* ================= ações ================= */
  const A = {
    inicio() { tela = { nome: 'inicio' }; render(); },
    projetos() { tela = { nome: 'projetos', filtro: 0 }; render(); },
    filtro(d) { tela.filtro = +d.v; render(); },
    briefing(d) { tela = { nome: 'briefing', pid: d.id }; render(); },
    comecar(d) { novaPartida(d.id); tela = { nome: 'missao' }; som('clique'); render(); },
    continuar() { tela = { nome: 'missao' }; render(); },
    ajuda() { tela = { nome: 'ajuda' }; render(); },
    conquistas() { tela = { nome: 'conquistas' }; render(); },
    salvar() { tela = { nome: 'salvar' }; render(); },
    som() { E.prefs.som = !E.prefs.som; salvar(); aplicarTema(); if (E.prefs.som) som('ok'); },
    tema() { E.prefs.tema = temaAtual() === 'dark' ? 'light' : 'dark'; salvar(); aplicarTema(); },
    abandonar() { tela.abandonar = true; render(); },
    'abandonar-nao'() { tela.abandonar = false; render(); },
    'abandonar-sim'() { E.partida = null; salvar(); tela = { nome: 'inicio' }; render(); aviso('Partida abandonada.'); },
    consultar() {
      const mid = M.MISSOES[pt().etapa].id;
      if (!podeConsultar(mid)) return;
      pt().consultas = pt().consultas || {};
      pt().consultas[mid] = dicaEspecialista(mid);
      salvar(); som('clique'); aviso(`Consulta registrada: −${PENALIDADE} pontos`); render();
    },
    avancar() {
      if (pt().etapa >= 6) { finalizar(); return; }
      pt().etapa++; tela.pbAberto = false; salvar(); render();
    },
    imprimir() { window.print(); },

    /* missão 1 */
    m1(d) { pt().r.m1[d.campo] = +d.i; salvar(); render(); },
    'conf-m1'() {
      const r = pt().r.m1, v = pt().visaoOps[r.visao], j = pt().justOps[r.just];
      const res = M.m1(!!v.ok, !!j.ok);
      res.msgs = [
        v.ok ? ['ok', 'A visão descreve o resultado desejado para quem usará o produto.'] : ['erro', `Visão: ${esc(v.fb)}`],
        j.ok ? ['ok', 'A justificativa explicita necessidade e benefício esperado, base para iniciar e continuar o projeto.'] : ['erro', `Justificativa: ${esc(j.fb)}`]
      ];
      concluirMissao('m1', res); render(); mostrarRetorno();
    },

    /* missão 2 */
    m2alt(d) { pt().r.m2.alt[+d.l] = +d.i; salvar(); render(); },
    'conf-m2h'() {
      const r = pt().r.m2, ok = r.alt.map((a, l) => !!pt().alts[l][a].ok);
      const nomes = ['Persona (quem)', 'Necessidade (o quê)', 'Benefício (para quê)'];
      const expl = ['Use uma persona concreta, não o sistema ou a equipe técnica.', 'Descreva o que o usuário quer realizar, não uma solução técnica ou algo vago.', 'Explique o benefício para o usuário, não um motivo interno da equipe.'];
      r.histMsgs = ok.map((o, l) => o ? ['ok', `${nomes[l]}: adequado.`] : ['erro', `${nomes[l]}: ${expl[l]}`]);
      r.histMsgs.push(['info', 'Lembre-se dos 3 Cs: o cartão (Card) é breve; a conversa (Conversation) esclarece; a confirmação (Confirmation) vem dos critérios de aceitação.']);
      r.okHist = ok; r.fase = 'deck';
      som(ok.every(Boolean) ? 'ok' : 'erro'); salvar(); render();
    },
    m2cls(d) {
      const r = pt().r.m2; if (r.resp[r.pos] != null) return;
      r.resp[r.pos] = d.t; som(d.t === pt().deck[r.pos].tipo ? 'ok' : 'erro'); salvar(); render();
    },
    m2prox() {
      const r = pt().r.m2; r.pos++;
      if (r.pos >= pt().deck.length) {
        const okC = pt().deck.map((c, i) => r.resp[i] === c.tipo);
        const res = M.m2(r.okHist, okC);
        res.msgs = [
          ['info', `História de usuário: ${r.okHist.filter(Boolean).length} de 3 partes adequadas.`],
          [okC.every(Boolean) ? 'ok' : okC.filter(Boolean).length >= 6 ? 'meio' : 'erro', `Classificação: ${okC.filter(Boolean).length} de ${okC.length} cartões corretos.`],
          ['info', 'O épico foi refinado em histórias menores; as tarefas técnicas ficaram fora do Product Backlog.']
        ];
        concluirMissao('m2', res); render(); mostrarRetorno(); return;
      }
      salvar(); render();
    },

    /* missão 3 */
    mover(d) {
      const o = pt().r.m3.ordem, i = o.indexOf(d.id), j = i + (+d.d);
      if (j < 0 || j >= o.length) return;
      [o[i], o[j]] = [o[j], o[i]]; salvar(); render();
    },
    'conf-m3'() {
      const p = P(), o = pt().r.m3.ordem, res = M.m3(o, p.itens), c = res.comp;
      res.msgs = [
        [c.valor[0] >= 64 ? 'ok' : c.valor[0] >= 40 ? 'meio' : 'erro', `Valor: ${c.valor[0]}/80 — ${c.valor[0] >= 64 ? 'itens de maior valor ficaram no topo.' : 'há itens de alto valor muito abaixo no backlog.'}`],
        [res.viol.length ? 'erro' : 'ok', res.viol.length ? `Dependências: ${res.viol.map(([a, dd]) => `${chave(a)} veio antes de ${chave(dd)}`).join('; ')}.` : 'Dependências: todas respeitadas.'],
        [c.risco[0] >= 28 ? 'ok' : 'meio', `Incerteza: ${c.risco[0]}/40 — ${c.risco[0] >= 28 ? 'itens incertos foram tratados cedo.' : 'itens com incerteza alta poderiam ser investigados antes.'}`],
        ['info', `Uma ordem de referência: ${M.ordemIdeal(p.itens).map(chave).join(' → ')}.`]
      ];
      concluirMissao('m3', res); render(); mostrarRetorno();
    },

    /* missão 4 */
    est(d) { pt().r.m4.est[d.id] = +d.v; salvar(); render(); },
    votos(d) { pt().r.m4.dicas[d.id] = true; salvar(); render(); },
    'conf-m4'() {
      const p = P(), r = pt().r.m4, res = M.m4(r.est, p.itens);
      res.det.forEach(x => { if (r.dicas[x.id]) x.cred *= 0.6; });
      const pts = Math.round(100 * soma(res.det.map(x => x.cred)) / res.det.length);
      res.comp.estim = [pts, 100];
      const nd = Object.keys(r.dicas).length;
      res.msgs = [
        ['info', `${res.exatas} de ${res.det.length} estimativas iguais à referência da equipe; vizinhas na sequência valem metade.`],
        ...(nd ? [['meio', `Você consultou os votos em ${nd} história${nd > 1 ? 's' : ''}.`]] : []),
        ['info', 'Estimativas apoiam uma decisão viável; não eliminam a incerteza nem viram datas de término.']
      ];
      concluirMissao('m4', res); render(); mostrarRetorno();
    },

    /* missão 5 */
    'conf-m5'() { const res = M.m5(pt().r.m5); concluirMissao('m5', res); render(); mostrarRetorno(); },

    /* missão 6 */
    m6obj(d) { pt().r.m6.obj = +d.i; salvar(); render(); },
    'conf-m6'() {
      const r = pt().r.m6, p = P();
      const res = M.m6({ objetivoOk: !!pt().objOps[r.obj].ok, selecionados: r.sel, tarefas: r.tar }, p, pt().r.m3.ordem, pt().r.m4.est, pt().r.m5.semanas);
      const t = res.comp.tarefas[0];
      res.msgs.push([t === 60 ? 'ok' : t >= 40 ? 'meio' : 'erro', `Tarefas: ${t}/60 — ${t === 60 ? 'exatamente o necessário para os critérios da história.' : 'revise o que faltou e o que excedeu a história.'}`]);
      concluirMissao('m6', res); render(); mostrarRetorno();
    },

    /* missão 7 */
    m7ini() { pt().r.m7.fase = 'eventos'; salvar(); render(); },
    m7resp(d) {
      const r = pt().r.m7; if (r.resp[r.pos] != null) return;
      r.resp[r.pos] = +d.o; som(+d.o === 0 ? 'ok' : 'erro'); salvar(); render();
    },
    m7prox() {
      const r = pt().r.m7; r.pos++;
      if (r.pos >= pt().eventos.length) {
        r.pos = pt().eventos.length - 1;
        const ac = r.resp.map(x => x === 0);
        const res = M.m7(ac);
        res.msgs = [[ac.filter(Boolean).length >= 4 ? 'ok' : 'meio', `${ac.filter(Boolean).length} de ${ac.length} situações conduzidas segundo o Scrum.`]];
        concluirMissao('m7', res); render(); mostrarRetorno(); return;
      }
      salvar(); render();
    },

    /* salvamento */
    baixar() {
      const blob = new Blob([JSON.stringify(E, null, 1)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `missao-scrum-${(E.jogador.nome || 'progresso').normalize('NFD').replace(/[^\w]+/g, '-').toLowerCase()}.json`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
      aviso('Arquivo de salvamento gerado.');
    },
    copiar() {
      const t = $('#cod-saida');
      const ok = () => aviso('Código copiado.');
      if (navigator.clipboard) navigator.clipboard.writeText(t.value).then(ok, () => { t.select(); aviso('Selecione e copie o código (Ctrl+C).'); });
      else { t.select(); aviso('Selecione e copie o código (Ctrl+C).'); }
    },
    colar() {
      const v = $('#cod-entrada').value.trim(); if (!v) { aviso('Cole um código primeiro.'); return; }
      try { importar(JSON.parse(decodeURIComponent(escape(atob(v))))); } catch (e) { aviso('Código inválido. Confira se foi copiado inteiro.'); }
    },
    apagar() { tela.apagar = true; render(); },
    'apagar-nao'() { tela.apagar = false; render(); },
    'apagar-sim'() { const prefs = E.prefs; E = novoEstado(); E.prefs = prefs; salvar(); tela = { nome: 'inicio' }; render(); aviso('Progresso apagado.'); }
  };

  /* ================= eventos globais ================= */
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-acao]');
    if (!b || b.disabled) return;
    const fn = A[b.dataset.acao];
    if (fn) { e.preventDefault(); fn(Object.assign({}, b.dataset)); }
  });
  document.addEventListener('input', e => {
    const t = e.target;
    if (t.dataset.campo === 'nome') { E.jogador.nome = t.value.slice(0, 60); salvar(); }
    if (t.dataset.tb && pt()) { pt().r.m5[t.dataset.tb] = +t.value; salvar(); atualizarTB(t.dataset.tb); }
  });
  document.addEventListener('change', e => {
    const t = e.target;
    if (t.dataset.sel && pt()) {
      const s = pt().r.m6.sel, id = t.dataset.sel;
      if (t.checked) { if (!s.includes(id)) s.push(id); } else s.splice(s.indexOf(id), 1);
      salvar(); $('#medidor').innerHTML = medidor();
      const b = document.querySelector('[data-acao="conf-m6"]'); if (b) b.disabled = pt().r.m6.obj == null || !s.length;
    }
    if (t.dataset.tar && pt()) {
      const s = pt().r.m6.tar, i = +t.dataset.tar;
      if (t.checked) { if (!s.includes(i)) s.push(i); } else s.splice(s.indexOf(i), 1);
      salvar();
      const todas = [...P().tarefas.boas, ...P().tarefas.ruins], h = soma(s.map(k => todas[k][1]));
      $('#horas-txt').innerHTML = `Esforço das tarefas selecionadas: <b class="mono">${h} h</b>. Com mais de uma pessoa trabalhando, esse esforço não equivale a ${h} horas corridas de duração.`;
    }
    if (t.dataset.arquivo !== undefined && t.files && t.files[0]) {
      const fr = new FileReader();
      fr.onload = () => { try { importar(JSON.parse(fr.result)); } catch (x) { aviso('Não foi possível ler o arquivo.'); } };
      fr.readAsText(t.files[0]);
    }
  });
  document.addEventListener('toggle', e => { if (e.target.matches && e.target.matches('[data-pb]')) tela.pbAberto = e.target.open; }, true);
  document.addEventListener('keydown', e => {
    if (tela.nome !== 'missao' || !pt() || e.ctrlKey || e.metaKey || e.altKey) return;
    if (/input|textarea/i.test(document.activeElement.tagName)) return;
    const k = ['1', '2', '3'].indexOf(e.key);
    const m = M.MISSOES[pt().etapa].id;
    if (m === 'm2' && pt().r.m2.fase === 'deck') {
      const r = pt().r.m2;
      if (k >= 0 && r.pos < pt().deck.length && r.resp[r.pos] == null) A.m2cls({ t: ['H', 'E', 'T'][k] });
    }
    if (m === 'm7' && pt().r.m7.fase === 'eventos' && !pt().parciais.m7) {
      const r = pt().r.m7;
      const o = k >= 0 ? pt().eventos[r.pos].ops[k] : null;
      if (k >= 0 && r.resp[r.pos] == null && !(r.elim && r.elim.pos === r.pos && r.elim.o === o)) A.m7resp({ o: String(o) });
    }
  });

  aplicarTema();
  render();
})();

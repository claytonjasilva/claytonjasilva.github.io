/* Missão Scrum — motor de pontuação (funções puras, sem DOM)
 * Cada missão devolve componentes {chave: [obtido, máximo]} e mensagens de feedback.
 * O checklist teórico considera um conceito "atendido" quando o componente atinge 70%.
 */
var MS = window.MS = window.MS || {};

(function () {
  const M = {};

  M.MAX = { m1: 100, m2: 150, m3: 200, m4: 100, m5: 100, m6: 200, m7: 150 };
  M.LIMIAR = 0.7;
  M.FIB = [1, 2, 3, 5, 8, 13];

  M.MISSOES = [
    { id: 'm1', nome: 'Visão e justificativa', papel: 'Product Owner', sec: 'aspectos' },
    { id: 'm2', nome: 'Histórias e backlog', papel: 'Product Owner', sec: 'processos' },
    { id: 'm3', nome: 'Priorizar o backlog', papel: 'Product Owner', sec: 'valor' },
    { id: 'm4', nome: 'Estimar histórias', papel: 'Equipe Scrum', sec: 'processos' },
    { id: 'm5', nome: 'Definir os time-boxes', papel: 'Scrum Master', sec: 'tempo' },
    { id: 'm6', nome: 'Planejar a Sprint', papel: 'Núcleo Scrum', sec: 'processos' },
    { id: 'm7', nome: 'Sprint em ação', papel: 'Scrum Master', sec: 'iterativo' }
  ];

  M.CONCEITOS = [
    { id: 'visao', nome: 'Visão do projeto orientada ao resultado', sec: 'visao' },
    { id: 'just', nome: 'Justificativa de negócio e entrega orientada a valor', sec: 'aspectos' },
    { id: 'historia', nome: 'História de usuário: persona, necessidade e benefício', sec: 'processos' },
    { id: 'classif', nome: 'Distinção entre épico, história e tarefa', sec: 'processos' },
    { id: 'valor', nome: 'Priorização baseada em valor', sec: 'valor' },
    { id: 'risco', nome: 'Incerteza (risco) considerada na ordem', sec: 'valor' },
    { id: 'dep', nome: 'Dependências respeitadas', sec: 'valor' },
    { id: 'estim', nome: 'Estimativa relativa de esforço', sec: 'processos' },
    { id: 'tbSprint', nome: 'Time-box da Sprint', sec: 'tempo' },
    { id: 'tbReunioes', nome: 'Time-box das reuniões', sec: 'tempo' },
    { id: 'objetivo', nome: 'Objetivo da Sprint coerente com o valor', sec: 'processos' },
    { id: 'capacidade', nome: 'Capacidade e compromisso da Sprint', sec: 'processos' },
    { id: 'tarefas', nome: 'Tarefas que atendem aos critérios, sem gold-plating', sec: 'tempo' },
    { id: 'eventos', nome: 'Controle empírico: inspeção e adaptação', sec: 'principios' }
  ];

  /* ---------- utilidades ---------- */
  M.rng = function (seed) { // mulberry32 — embaralhamentos reprodutíveis ao retomar a partida
    let a = seed >>> 0;
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  };
  M.embaralhar = function (arr, rnd) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const clamp = (x, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x));
  const soma = arr => arr.reduce((s, x) => s + x, 0);
  M.mapa = itens => Object.fromEntries(itens.map(i => [i.id, i]));

  /* Ordenação topológica gulosa: a cada passo escolhe, entre os itens liberados, o de maior pontuação */
  M.topoGuloso = function (itens, score) {
    const restantes = itens.slice(), feitos = new Set(), ordem = [];
    while (restantes.length) {
      let livres = restantes.filter(i => i.d.every(d => feitos.has(d) || !itens.some(x => x.id === d)));
      if (!livres.length) livres = restantes.slice(); // proteção contra ciclos
      livres.sort((x, y) => score(y, feitos) - score(x, feitos));
      const esc = livres[0];
      ordem.push(esc.id); feitos.add(esc.id);
      restantes.splice(restantes.indexOf(esc), 1);
    }
    return ordem;
  };
  M.ordemIdeal = itens => M.topoGuloso(itens, i => i.v + 0.8 * i.r - i.p / 100);

  M.ancestrais = function (itens, id) {
    const mp = M.mapa(itens), out = new Set();
    (function walk(x) { (mp[x] ? mp[x].d : []).forEach(d => { if (!out.has(d)) { out.add(d); walk(d); } }); })(id);
    return out;
  };

  /* ---------- Missão 1 ---------- */
  M.m1 = function (visaoOk, justOk) {
    return { comp: { visao: [visaoOk ? 50 : 0, 50], just: [justOk ? 50 : 0, 50] } };
  };

  /* ---------- Missão 2 ---------- */
  M.m2 = function (partesOk, classifOk) {
    const h = soma(partesOk.map(ok => ok ? 20 : 0));
    const c = Math.round(90 * classifOk.filter(Boolean).length / classifOk.length);
    return { comp: { historia: [h, 60], classif: [c, 90] } };
  };

  /* ---------- Missão 3 ---------- */
  M.violacoes = function (ordem, itens) {
    const pos = Object.fromEntries(ordem.map((id, k) => [id, k])), out = [];
    itens.forEach(i => i.d.forEach(d => { if (pos[d] !== undefined && pos[d] > pos[i.id]) out.push([i.id, d]); }));
    return out;
  };
  M.m3 = function (ordem, itens) {
    const mp = M.mapa(itens), n = ordem.length;
    const totalDeps = soma(itens.map(i => i.d.length)) || 1;
    const viol = M.violacoes(ordem, itens);
    const dep = Math.round(80 * clamp(1 - viol.length / totalDeps));

    const E = o => soma(o.map((id, k) => mp[id].v * (n - 1 - k)));
    const eMax = E(M.topoGuloso(itens, i => i.v * 10 + i.r - i.p / 100));
    const eMin = E(itens.slice().sort((x, y) => x.v - y.v).map(i => i.id));
    const valor = Math.round(80 * clamp((E(ordem) - eMin) / ((eMax - eMin) || 1)));

    const arriscados = itens.filter(i => i.r).map(i => i.id);
    let risco = 40;
    if (arriscados.length) {
      const media = o => soma(arriscados.map(id => o.indexOf(id))) / arriscados.length;
      const melhor = media(M.ordemIdeal(itens));
      const pior = (n - 1) - (arriscados.length - 1) / 2;
      risco = Math.round(40 * clamp((pior - media(ordem)) / ((pior - melhor) || 1)));
    }
    return { comp: { valor: [valor, 80], dep: [dep, 80], risco: [risco, 40] }, viol };
  };

  /* ---------- Missão 4 ---------- */
  M.ancora = itens => itens.slice().sort((x, y) => x.p - y.p || x.v - y.v)[0].id;
  M.m4 = function (est, itens) {
    const anc = M.ancora(itens);
    const avaliados = itens.filter(i => i.id !== anc);
    const det = avaliados.map(i => {
      const dist = Math.abs(M.FIB.indexOf(est[i.id]) - M.FIB.indexOf(i.p));
      return { id: i.id, ref: i.p, dado: est[i.id], cred: dist === 0 ? 1 : dist === 1 ? 0.5 : 0 };
    });
    const pts = Math.round(100 * soma(det.map(d => d.cred)) / avaliados.length);
    return { comp: { estim: [pts, 100] }, det, exatas: det.filter(d => d.cred === 1).length };
  };

  /* ---------- Missão 5 ---------- */
  M.m5 = function (tb) {
    const s = tb.semanas, msgs = [];
    let sprint;
    if (s <= 4) { sprint = 40; msgs.push(['ok', `Sprint de ${s} semana${s > 1 ? 's' : ''}: dentro do limite recomendado de até 4 semanas.`]); }
    else { sprint = 20; msgs.push(['meio', `Sprint de ${s} semanas: o guia admite até 6 apenas com requisitos muito estáveis; recomenda-se até 4.`]); }

    const daily = tb.daily <= 15 ? 20 : 0;
    msgs.push([daily ? 'ok' : 'erro', `Reunião diária de ${tb.daily} min: o limite é 15 minutos.`]);

    const lim = (val, prop, mes, pBom, pMeio) => val <= prop ? pBom : val <= mes ? pMeio : 0;
    const plan = lim(tb.planning, 2 * s, 8, 15, 7);
    const rev = lim(tb.review, s, 4, 10, 5);
    const ret = lim(tb.retro, s, 4, 15, 7);
    const fmtH = h => (h % 1 ? h.toFixed(1).replace('.', ',') : h) + ' h';
    msgs.push([plan === 15 ? 'ok' : plan ? 'meio' : 'erro', `Planejamento de ${fmtH(tb.planning)}: até 8 h para uma Sprint de um mês (≈ ${fmtH(Math.min(8, 2 * s))} para ${s} semana${s > 1 ? 's' : ''}).`]);
    msgs.push([rev === 10 ? 'ok' : rev ? 'meio' : 'erro', `Revisão de ${fmtH(tb.review)}: até 4 h para uma Sprint de um mês (≈ ${fmtH(Math.min(4, s))} para ${s} semana${s > 1 ? 's' : ''}).`]);
    msgs.push([ret === 15 ? 'ok' : ret ? 'meio' : 'erro', `Retrospectiva de ${fmtH(tb.retro)}: até 4 h para uma Sprint de um mês (≈ ${fmtH(Math.min(4, s))} para ${s} semana${s > 1 ? 's' : ''}).`]);
    return { comp: { tbSprint: [sprint, 40], tbReunioes: [daily + plan + rev + ret, 60] }, msgs };
  };

  /* ---------- Missão 6 ---------- */
  M.m6 = function (r, proj, ordem, est, semanas) {
    const cap = proj.vel * semanas, sel = r.selecionados, msgs = [];
    const key = proj.itens.find(i => i.k).id;
    const mp = M.mapa(proj.itens);

    let objetivo = r.objetivoOk ? 25 : 0;
    if (sel.includes(key)) objetivo += 15;
    msgs.push([r.objetivoOk ? 'ok' : 'erro', r.objetivoOk ? 'Objetivo da Sprint expressa o valor a entregar.' : 'O objetivo escolhido não expressa valor para o cliente.']);
    msgs.push([sel.includes(key) ? 'ok' : 'erro', sel.includes(key) ? 'A história de maior valor está na Sprint.' : 'A história que realiza o objetivo ficou fora da Sprint.']);

    const somaEst = soma(sel.map(id => est[id] || 0));
    let capacidade = 0;
    if (sel.length && somaEst <= cap) {
      capacidade = 30 + Math.round(30 * clamp((somaEst / cap) / 0.7));
      msgs.push(['ok', `Compromisso de ${somaEst} pontos para capacidade de ${cap}: cabe no time-box.`]);
      if (somaEst / cap < 0.7) msgs.push(['meio', 'A Sprint ficou com folga grande; a equipe poderia assumir mais trabalho.']);
    } else if (sel.length) {
      msgs.push(['erro', `Compromisso de ${somaEst} pontos ultrapassa a capacidade de ${cap} pontos da Sprint.`]);
    } else msgs.push(['erro', 'Nenhuma história foi selecionada.']);

    let faltam = 0, totalD = 0;
    sel.forEach(id => mp[id].d.forEach(d => { totalD++; if (!sel.includes(d)) faltam++; }));
    const depPts = Math.round(20 * (totalD ? 1 - faltam / totalD : 1));
    if (faltam) msgs.push(['erro', `${faltam} dependência${faltam > 1 ? 's' : ''} das histórias selecionadas ficou fora da Sprint.`]);
    const topo = sel.length ? sel.filter(id => ordem.indexOf(id) <= sel.length).length / sel.length : 0;
    const ordPts = Math.round(20 * topo);
    if (topo < 1 && sel.length) msgs.push(['meio', 'Parte da seleção pulou itens do topo do Product Backlog.']);

    const boas = proj.tarefas.boas.length, ruins = proj.tarefas.ruins.length;
    const okBoas = r.tarefas.filter(t => t < boas).length;
    const okRuins = ruins - r.tarefas.filter(t => t >= boas).length;
    const tarefas = Math.round(60 * (okBoas + okRuins) / (boas + ruins));

    const real = soma(sel.map(id => mp[id].p));
    return { comp: { objetivo: [objetivo, 40], capacidade: [capacidade + depPts + ordPts, 100], tarefas: [tarefas, 60] }, msgs, cap, somaEst, real };
  };

  /* ---------- Missão 7 ---------- */
  M.m7 = function (acertos) {
    const pts = Math.round(150 * acertos.filter(Boolean).length / acertos.length);
    return { comp: { eventos: [pts, 150] } };
  };

  /* ---------- consolidação ---------- */
  M.totalMissao = comp => soma(Object.values(comp).map(c => c[0]));
  M.total = parciais => soma(Object.values(parciais).map(p => M.totalMissao(p.comp)));
  M.componentes = parciais => Object.assign({}, ...Object.values(parciais).map(p => p.comp));
  M.checklist = function (parciais) {
    const c = M.componentes(parciais);
    return M.CONCEITOS.map(k => ({ ...k, ok: c[k.id] ? c[k.id][0] / c[k.id][1] >= M.LIMIAR : false, pct: c[k.id] ? Math.round(100 * c[k.id][0] / c[k.id][1]) : 0 }));
  };
  M.nota = function (t) {
    if (t >= 900) return { letra: 'S', titulo: 'Scrum Master lendário', estrelas: 3 };
    if (t >= 800) return { letra: 'A', titulo: 'Planejador ágil', estrelas: 3 };
    if (t >= 650) return { letra: 'B', titulo: 'Em boa evolução', estrelas: 2 };
    if (t >= 500) return { letra: 'C', titulo: 'Aprendiz de Scrum', estrelas: 1 };
    return { letra: 'D', titulo: 'Recomece a Sprint', estrelas: 0 };
  };
  M.estrelasMissao = (comp, max) => { const f = M.totalMissao(comp) / max; return f >= 0.9 ? 3 : f >= 0.7 ? 2 : f >= 0.4 ? 1 : 0; };

  /* ---------- simulação da "dívida" de valor (figura 5.7) ---------- */
  M.simular = function (ordem, itens, vel, semanas) {
    const mp = M.mapa(itens), cap = vel * semanas, fim = {};
    let acum = 0;
    ordem.forEach(id => { acum += mp[id].p; fim[id] = Math.ceil(acum / cap - 1e-9); });
    const memo = {};
    const realizado = id => memo[id] !== undefined ? memo[id] :
      (memo[id] = Math.max(fim[id], ...mp[id].d.filter(d => fim[d] !== undefined).map(realizado)));
    const V = soma(itens.map(i => i.v));
    const sprints = Math.max(...ordem.map(realizado));
    const serie = [{ semana: 0, resta: V }];
    for (let s = 1; s <= sprints; s++) {
      const entregue = soma(ordem.filter(id => realizado(id) <= s).map(id => mp[id].v));
      serie.push({ semana: s * semanas, resta: V - entregue });
    }
    return { serie, V, semanas: sprints * semanas };
  };
  M.areaDivida = sim => { // área sob a curva em degraus (semana × valor pendente)
    let a = 0;
    for (let k = 1; k < sim.serie.length; k++) a += sim.serie[k - 1].resta * (sim.serie[k].semana - sim.serie[k - 1].semana);
    return a;
  };

  MS.M = M;
})();

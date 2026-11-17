/*
  Descrição: Telas, navegação e eventos do aplicativo Viagem de Moto.
  Data de criação: 17/11/2026
  Versão: 1.0
  Copyright: Clayton Silva
*/

import { read, change } from './store.js';
import { categories, makeTrip, start, nextLeg, mapPoints, cents } from './model.js';
import nordeste from '../../dados/nordeste.js';

const app = document.querySelector('#app');
const status = document.querySelector('#status');
const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});
const cash = value => currency.format((value || 0) / 100);
const date = value => value
  ? value.slice(0, 10).split('-').reverse().join('/') +
    (value.includes('T') ? ' às ' + value.slice(11, 16) : '')
  : '—';

const esc = value => String(value ?? '').replace(/[&<>"']/g, character => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
})[character]);

const button = (label, view, primary = false) =>
  '<a class="button ' + (primary ? 'primary' : '') + '" href="#' +
  esc(view) + '">' + esc(label) + '</a>';

const input = (label, name, value = '', attrs = '') => {
  const field = '<input name="' + esc(name) + '" value="' + esc(value) + '" ' + attrs + '>';
  return label ? '<label>' + esc(label) + field + '</label>' : field;
};

const select = (label, name, values, selected) =>
  '<label>' + esc(label) + '<select name="' + esc(name) + '">' +
  values.map(value =>
    '<option' + (value === selected ? ' selected' : '') + '>' + esc(value) + '</option>'
  ).join('') + '</select></label>';

const form = (action, fields, label) =>
  '<form data-action="' + action + '">' + fields +
  '<button class="primary" type="submit">' + esc(label) + '</button></form>';

const card = html => '<div class="card">' + html + '</div>';
const links = items => '<nav>' + items.map(([label, path]) => button(label, path)).join('') + '</nav>';
const amount = 'type="number" min="0" step="0.01" inputmode="decimal"';
const kmField = 'type="number" min="0" step="1" inputmode="numeric"';

const mediaField =
  '<label>Foto ou vídeo<input name="file" type="file" accept="image/*,video/*"></label>';

let trips = [];
let mediaUrls = [];
let renderSequence = 0;
let saving = false;
let imported = null;

function localTime() {
  const now = new Date();
  return new Date(now - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
}

function route() {
  const [page, id, item] = location.hash.slice(1).split('/');
  return { page: page || 'home', id, item };
}

function total(trip, category) {
  return trip.expenses
    .filter(entry => entry.category === category)
    .reduce((sum, entry) => sum + (entry.amount ?? 0), 0);
}

function planned(plan, category) {
  let detailed = 0;

  if (category === 'Estadias') {
    detailed = plan.stays.reduce((sum, stay) => sum + stay.cost, 0);
  } else if (category === 'Manutenção') {
    detailed = plan.jobs.reduce((sum, job) => sum + job.cost, 0);
  }

  return (plan.budget[category] || 0) + detailed;
}

function pending(trip) {
  return trip.expenses.filter(entry => entry.amount === null);
}

// Gera URLs temporárias para os arquivos guardados no IndexedDB.
function renderMedia(blob) {
  if (!blob?.size) return '';

  const url = URL.createObjectURL(blob);
  mediaUrls.push(url);

  if (blob.type.startsWith('video/')) {
    return '<video controls playsinline preload="metadata" src="' + esc(url) + '"></video>';
  }

  return '<img alt="Imagem do registro" src="' + esc(url) + '">';
}

function itinerary(legs, trip) {
  return legs.map(leg => card(
    '<strong>' + esc(leg.title) + '</strong><br>' + date(leg.date) + ' · ' + leg.km + ' km' +
    (leg.roads.length ? '<br>' + esc(leg.roads.join(' → ')) : '') +
    (leg.note ? '<br>' + esc(leg.note) : '') +
    (trip && leg.destination
      ? '<br>Previsão · ' + date(trip.forecast[leg.id]) +
        '<br>Realizado · ' + date(trip.arrivals[leg.id]?.at)
      : '')
  )).join('');
}

function expenses(trip) {
  return trip.expenses.map(entry => card(
    esc(entry.category) + ' · ' + (entry.amount === null ? 'Valor pendente' : cash(entry.amount)) +
    ' · ' + date(entry.at) + (entry.note ? '<br>' + esc(entry.note) : '') +
    renderMedia(entry.proof) +
    (entry.amount === null && trip.status === 'run'
      ? '<br>' + button('Completar valor', 'expenses/' + trip.id + '/' + entry.id)
      : '')
  )).join('');
}

function diary(trip) {
  return trip.notes.map(note => card(
    date(note.at) + ' · ' + esc(note.leg || 'Viagem') +
    (note.note ? '<br>' + esc(note.note) : '') + renderMedia(note.file)
  )).join('');
}

function stays(plan) {
  return plan.stays.map(stay => card(
    '<strong>' + esc(stay.place) + '</strong> · ' + esc(stay.status) +
    '<br>' + date(stay.in) + ' a ' + date(stay.out) +
    (stay.cost ? ' · ' + cash(stay.cost) : '') +
    (stay.address ? '<br>' + esc(stay.address) : '') +
    (stay.code ? '<br>Localizador · ' + esc(stay.code) : '') +
    (stay.deadline ? '<br>Cancelar até ' + date(stay.deadline) : '')
  )).join('');
}

function jobs(plan, trip) {
  return plan.jobs.map(job => {
    const service = trip?.services[job.id];
    const result = service
      ? '<br>Realizado · ' + date(service.at) + ' · ' + service.km + ' km · ' + cash(service.cost)
      : '';

    return card(esc(job.name) + ' · ' + esc(job.when) + ' · ' + cash(job.cost) + result);
  }).join('');
}

function maps(leg) {
  const google = new URLSearchParams({
    api: '1',
    origin: leg.origin,
    destination: leg.destination,
    travelmode: 'driving'
  });

  if (leg.waypoints.length) {
    google.set('waypoints', leg.waypoints.join('|'));
  }

  const waze = new URLSearchParams({
    q: leg.waypoints[0] || leg.destination,
    navigate: 'yes'
  });

  return '<div class="actions">' +
    '<a class="button primary" href="https://www.google.com/maps/dir/?' +
    esc(google) + '" target="_blank" rel="noopener">🧭 Google Maps</a>' +
    '<a class="button" href="https://waze.com/ul?' + esc(waze) +
    '" target="_blank" rel="noopener">Waze</a></div>';
}

function home() {
  const running = trips.find(trip => trip.status === 'run');
  const list = (state, view) => trips
    .filter(trip => trip.status === state)
    .map(trip => card(button(trip.name, view + '/' + trip.id)))
    .join('') || '<p>Nenhuma viagem.</p>';

  return '<h1>Minhas viagens</h1>' +
    button('＋ Novo planejamento', 'new', true) +
    (running
      ? card(button('▶ Abrir viagem em execução', 'today/' + running.id, true) +
        '<p>' + esc(running.name) + '</p>')
      : '<p class="sub">Nenhuma viagem em execução.</p>') +
    '<h2>Planejamentos salvos</h2>' + list('plan', 'plan') +
    '<h2>Viagens encerradas</h2>' + list('closed', 'report');
}

function legFields(leg = {}) {
  return input('Origem', 'origin', leg.origin, 'required') +
    input('Destino', 'destination', leg.destination, 'required') +
    input('Data', 'date', leg.date, 'type="date" required' + (leg.fixed ? ' readonly' : '')) +
    input('Distância total (km)', 'km', leg.km, 'type="number" min="0.1" step="any" required') +
    input('Rodovias em ordem, separadas por |', 'roads', leg.roads?.join(' | ')) +
    input('Pontos de passagem, separados por |', 'waypoints', leg.waypoints?.join(' | ')) +
    input('Parada ou observação', 'note', leg.note);
}

function planScreen(page, trip, item) {
  const plan = trip.plan;
  const go = name => name + '/' + trip.id;
  const menu = links([
    ['Roteiro', go('plan')],
    ['Estadias', go('stays')],
    ['Orçamento', go('budget')],
    ['Preparação', go('prep')]
  ]);
  const budgetTotal = () => cash(categories.reduce((sum, c) => sum + planned(plan, c), 0));

  const views = {
    plan: () => menu +
      '<div class="actions">' + button('＋ Cadastrar trecho', go('leg')) +
      button('Importar trecho', go('import'), true) + '</div>' +
      plan.legs.map(leg => card(
        esc(leg.title) + ' · ' + date(leg.date) + (leg.fixed ? ' · Marco fixo' : '') +
        (leg.destination ? '<br>' + button('Editar trecho', go('leg') + '/' + leg.id) : '')
      )).join('') +
      button('Revisar para iniciar', go('review'), true),

    leg: () => form('leg', legFields(plan.legs.find(leg => leg.id === item)), 'Salvar trecho'),

    import: () =>
      '<a class="button primary" href="https://www.google.com/maps/dir/?api=1" ' +
      'target="_blank" rel="noopener">📍 Importar trecho no Google Maps</a>' +
      form('import',
        input('Após montar a rota, cole aqui seu endereço completo', 'url', '', 'type="url" required'),
        'Conferir dados'),

    stays: () => menu + stays(plan) +
      form('stay',
        input('Cidade', 'place', '', 'required') +
        input('Entrada', 'in', '', 'type="date" required') +
        input('Saída', 'out', '', 'type="date" required') +
        select('Situação', 'status', ['A reservar', 'Confirmada', 'Casa de familiares']) +
        input('Endereço', 'address') + input('Localizador', 'code') +
        input('Cancelar até', 'deadline', '', 'type="date"') +
        input('Valor previsto (R$)', 'cost', '', amount),
        'Salvar estadia') +
      '<p><a class="button" href="https://www.booking.com/" target="_blank" rel="noopener">' +
      'Buscar no Booking.com</a></p>',

    budget: () => menu +
      form('budget', categories.map(category => {
        const additional = ['Estadias', 'Manutenção'].includes(category) ? ' · estimativa adicional' : '';
        return input(category + additional + ' (R$)', category, (plan.budget[category] || 0) / 100, amount);
      }).join(''), 'Salvar orçamento') +
      card('Total previsto · ' + budgetTotal()),

    prep: () => menu + jobs(plan) +
      form('job',
        input('Serviço ou item de preparação', 'name', '', 'required') +
        select('Momento', 'when', ['Antes da saída', 'Durante a viagem']) +
        input('Custo previsto (R$)', 'cost', '', amount),
        'Programar manutenção'),

    review: () => card(
      plan.legs.length + ' dias ou trechos · ' + plan.stays.length + ' estadias · ' +
      plan.jobs.length + ' serviços<br>Orçamento · ' + budgetTotal()
    ) +
      '<p>Ao confirmar a partida, o planejamento passa a ser a linha de base da viagem.</p>' +
      form('start', input('Hodômetro na partida (km)', 'km', '', kmField + ' required'), 'Confirmar partida')
  };

  const titles = {
    plan: trip.name,
    leg: 'Trecho do roteiro',
    import: 'Importar trecho',
    stays: 'Estadias',
    budget: 'Orçamento',
    prep: 'Preparação',
    review: 'Revisar para iniciar'
  };

  return button(page === 'plan' ? '← Minhas viagens' : '← Planejamento',
    page === 'plan' ? 'home' : go('plan')) +
    '<h1>' + esc(titles[page] || trip.name) + '</h1>' + (views[page] || views.plan)();
}

function reportScreen(trip, category = 'Completo') {
  const include = name => category === 'Completo' || category === name;
  const budget = categories.map(c => card(
    c + ' · Planejado ' + cash(planned(trip.baseline, c)) + ' · Pago ' + cash(total(trip, c))
  )).join('');

  return button('← Minhas viagens', 'home') +
    '<h1>Relatório final</h1><p>' + esc(trip.name) + '</p>' +
    form('filter',
      select('Categoria', 'category', ['Completo', 'Itinerário', 'Estadias', 'Custos', 'Registros', 'Manutenção'], category),
      'Exibir') +
    card((trip.finish.km - trip.departure.km) + ' km pelo hodômetro · ' +
      pending(trip).length + ' gasto(s) sem valor') +
    (include('Itinerário') ? '<h2>Itinerário</h2>' + itinerary(trip.baseline.legs, trip) : '') +
    (include('Estadias') ? '<h2>Estadias</h2>' + (stays(trip.baseline) || '<p>Nenhuma estadia cadastrada.</p>') : '') +
    (include('Custos') ? '<h2>Custos</h2>' + budget + expenses(trip) : '') +
    (include('Registros') ? '<h2>Registros</h2>' + (diary(trip) || '<p>Nenhum registro.</p>') : '') +
    (include('Manutenção') ? '<h2>Manutenção</h2>' + (jobs(trip.baseline, trip) || '<p>Nenhum serviço cadastrado.</p>') : '') +
    '<button type="button" data-print>Imprimir ou salvar PDF</button>';
}

function runScreen(page, trip, item) {
  if (trip.status === 'closed') return reportScreen(trip, item || 'Completo');

  const go = name => name + '/' + trip.id;
  const leg = nextLeg(trip);
  const menu = links([
    ['Hoje', go('today')],
    ['Roteiro', go('route')],
    ['Gastos', go('expenses')],
    ['Viagem', go('trip')]
  ]);

  const views = {
    today: () => '<p>' + esc(trip.name) + ' · Linha de base congelada</p>' +
      (leg
        ? card('<strong>' + esc(leg.title) + '</strong><br>' + date(leg.date) +
          ' · ' + leg.km + ' km planejados<br>Previsão · ' + date(trip.forecast[leg.id])) +
          maps(leg) + links([['Marcar chegada', go('arrival')], ['Ajustar previsão', go('forecast')]])
        : '<p>Chegadas registradas para todos os trechos com destino.</p>') +
      links([
        ['🍽 Alimentação', go('expenses') + '/Alimentação'],
        ['⛽ Combustível', go('expenses') + '/Combustível'],
        ['📷 Registros da viagem', go('diary')]
      ]),

    route: () => itinerary(trip.baseline.legs, trip),

    arrival: () => leg ? form('arrival',
      input('Chegada realizada', 'at', localTime(), 'type="datetime-local" required') +
      input('', 'leg', leg.id, 'type="hidden"'),
      'Registrar chegada') : '',

    forecast: () => leg ? form('forecast',
      input('Previsão atualizada', 'at', trip.forecast[leg.id] || localTime(), 'type="datetime-local" required') +
      input('', 'leg', leg.id, 'type="hidden"'),
      'Salvar previsão') : '',

    expenses: () => {
      const entry = trip.expenses.find(expense => expense.id === item);
      const category = entry?.category || (categories.includes(item) ? item : 'Alimentação');
      const attachment = entry
        ? input('', 'entry', entry.id, 'type="hidden"')
        : '<label>Comprovante<input name="file" type="file" accept="image/*" capture="environment"></label>';

      return form('expense',
        select('Categoria', 'category', categories, category) +
        input('Valor pago (R$)', 'amount', '', amount + (entry ? ' required' : '')) +
        input('Local ou observação', 'note', entry?.note) + attachment +
        (entry ? '' : '<p class="sub">Salve a foto sem valor para completar depois.</p>'),
        'Salvar gasto') + expenses(trip);
    },

    trip: () => links([
      ['Estadias', go('baseline-stays')],
      ['Diário com fotos e vídeos', go('diary')],
      ['Manutenção', go('service')],
      ['Linha de base', go('baseline')],
      ['Encerrar viagem', go('close')]
    ]),

    'baseline-stays': () => stays(trip.baseline) || '<p>Nenhuma estadia cadastrada.</p>',

    diary: () => form('note',
      input('Legenda ou anotação', 'note', '', 'maxlength="250"') + mediaField,
      'Salvar registro') + diary(trip),

    service: () => item
      ? form('service',
        input('Hodômetro (km)', 'km', '', kmField + ' required') +
        input('Valor pago (R$)', 'cost', '0', amount),
        'Registrar manutenção')
      : (jobs(trip.baseline, trip) || '<p>Nenhum serviço programado.</p>') +
        links(trip.baseline.jobs.filter(job => !trip.services[job.id]).map(job => [
          'Registrar · ' + job.name, go('service') + '/' + job.id
        ])),

    baseline: () => '<p>Cópia congelada em ' + date(trip.departure.at) + '</p>' +
      itinerary(trip.baseline.legs) + stays(trip.baseline) + jobs(trip.baseline) +
      categories.map(c => card(c + ' · ' + cash(planned(trip.baseline, c)))).join(''),

    close: () => card(pending(trip).length + ' gasto(s) sem valor · ' +
      trip.baseline.legs.filter(l => l.destination && !trip.arrivals[l.id]).length +
      ' chegada(s) pendente(s)') +
      form('close', input('Hodômetro final (km)', 'km', trip.departure.km, kmField + ' required'),
        'Confirmar encerramento')
  };

  const titles = {
    today: 'Hoje',
    route: 'Roteiro em execução',
    arrival: 'Confirmar chegada',
    forecast: 'Ajustar previsão',
    expenses: 'Registrar gasto',
    trip: 'Viagem',
    diary: 'Registros da viagem',
    service: 'Manutenção',
    baseline: 'Linha de base',
    'baseline-stays': 'Estadias',
    close: 'Encerrar viagem'
  };

  return button('← Minhas viagens', 'home') + '<h1>' + esc(titles[page] || 'Hoje') +
    '</h1>' + menu + (views[page] || views.today)();
}

// A navegação lê a versão mais recente do banco e libera prévias da tela anterior.
async function render() {
  const sequence = ++renderSequence;

  try {
    const state = await read();
    if (sequence !== renderSequence) return;

    trips = state || [];
    mediaUrls.forEach(url => URL.revokeObjectURL(url));
    mediaUrls = [];

    const { page, id, item } = route();
    const trip = trips.find(entry => entry.id === id);
    const selected = item ? decodeURIComponent(item) : '';

    if (page === 'new') {
      app.innerHTML = button('← Minhas viagens', 'home') + '<h1>Novo planejamento</h1>' +
        form('new', input('Nome da viagem', 'name', '', 'required maxlength="80"'), 'Criar planejamento');
    } else if (!trip) {
      app.innerHTML = home();
    } else {
      app.innerHTML = trip.status === 'plan'
        ? planScreen(page, trip, selected)
        : runScreen(page, trip, selected);
    }

    if (imported && imported.tripId === id && page === 'leg') {
      const target = app.querySelector('[data-action="leg"]');

      if (target) {
        for (const [key, value] of Object.entries(imported.points)) {
          target.elements.namedItem(key).value = value;
        }
      }

      imported = null;
    }
  } catch (error) {
    status.textContent = 'Não foi possível abrir a viagem. ' + error.message;
  }
}

const split = value => (value || '').split('|').map(part => part.trim()).filter(Boolean);

function attachment(file, pattern) {
  if (!file?.size) return null;

  if (!pattern.test(file.type) || file.size > 40 * 1024 * 1024) {
    throw new Error('Selecione uma mídia válida de até 40 MB.');
  }

  return file;
}

function updatePlan(list, trip, action, data, item) {
  const plan = trip.plan;

  if (action === 'start') {
    start(list, trip, Number(data.km));
  } else if (action === 'leg') {
    const previous = plan.legs.find(leg => leg.id === item);
    const origin = data.origin.trim();
    const destination = data.destination.trim();

    if (!origin || !destination ||
        origin.localeCompare(destination, 'pt-BR', { sensitivity: 'base' }) === 0) {
      throw new Error('Informe origem e destino distintos.');
    }

    if (previous?.fixed && data.date !== previous.date) {
      throw new Error('A data do marco é fixa.');
    }

    const leg = {
      id: previous?.id || crypto.randomUUID(),
      title: origin + ' → ' + destination,
      origin,
      destination,
      date: data.date,
      km: Number(data.km),
      roads: split(data.roads),
      waypoints: split(data.waypoints),
      note: data.note,
      fixed: previous?.fixed || false
    };

    if (previous) plan.legs[plan.legs.indexOf(previous)] = leg;
    else plan.legs.push(leg);

    plan.legs.sort((a, b) => a.date.localeCompare(b.date));
  } else if (action === 'stay') {
    if (!data.place.trim() || data.out <= data.in) {
      throw new Error('Informe a cidade e datas de entrada e saída válidas.');
    }

    plan.stays.push({ ...data, cost: cents(data.cost) });
  } else if (action === 'budget') {
    plan.budget = Object.fromEntries(categories.map(category => [category, cents(data[category])]));
  } else if (action === 'job') {
    if (!data.name.trim()) throw new Error('Informe o serviço.');
    plan.jobs.push({ ...data, id: crypto.randomUUID(), cost: cents(data.cost) });
  } else {
    throw new Error('Esta operação exige uma viagem em execução.');
  }
}

function saveExpense(trip, data, now) {
  const previous = data.entry ? trip.expenses.find(entry => entry.id === data.entry) : null;

  if (data.entry && (!previous || previous.amount !== null)) {
    throw new Error('A pendência já foi atualizada.');
  }

  const proof = previous?.proof || attachment(data.file, /^image\//);
  const value = data.amount === '' ? null : cents(data.amount);

  if ((value !== null && (!Number.isFinite(value) || value <= 0)) ||
      (value === null && (!proof || previous))) {
    throw new Error(previous ? 'Informe um valor positivo para concluir o lançamento.'
      : 'Informe um valor positivo ou anexe uma foto.');
  }

  const fields = { category: data.category, note: data.note, amount: value };

  if (previous) {
    Object.assign(previous, fields);
  } else {
    trip.expenses.push({ id: crypto.randomUUID(), ...fields, proof, at: now });
  }
}

function updateRun(trip, action, data, item) {
  if (trip.status !== 'run') throw new Error('Esta viagem já foi encerrada.');

  const now = new Date().toISOString();
  const leg = nextLeg(trip);

  if (action === 'forecast' || action === 'arrival') {
    if (!leg || leg.id !== data.leg) {
      throw new Error('O trecho atual mudou. Reabra o registro.');
    }

    if (action === 'forecast') trip.forecast[leg.id] = data.at;
    else trip.arrivals[leg.id] = { at: data.at };
  } else if (action === 'expense') {
    saveExpense(trip, data, now);
  } else if (action === 'note') {
    const file = attachment(data.file, /^(image|video)\//);
    const note = data.note.trim();

    if (!file && !note) throw new Error('Inclua uma anotação, foto ou vídeo.');
    trip.notes.unshift({ file, note, at: now, leg: leg?.title || '' });
  } else if (action === 'service') {
    if (!trip.baseline.jobs.some(job => job.id === item) || trip.services[item]) {
      throw new Error('Este serviço já foi registrado ou não existe.');
    }

    const cost = cents(data.cost);
    trip.services[item] = { cost, km: Number(data.km), at: now };

    if (cost) {
      trip.expenses.push({
        id: crypto.randomUUID(),
        category: 'Manutenção',
        amount: cost,
        at: now
      });
    }
  } else if (action === 'close') {
    const km = Number(data.km);

    if (km < trip.departure.km) throw new Error('Confira o hodômetro final.');
    trip.finish = { at: now, km };
    trip.status = 'closed';
  } else if (action !== 'start') {
    throw new Error('Esta operação está disponível no planejamento.');
  }
}

app.addEventListener('click', event => {
  if (event.target.closest('[data-print]')) window.print();
});

app.addEventListener('submit', async event => {
  event.preventDefault();
  if (saving) return;

  const action = event.target.dataset.action;
  const data = Object.fromEntries(new FormData(event.target));
  const { id, item } = route();

  if (action === 'filter') {
    location.hash = 'report/' + id + '/' + encodeURIComponent(data.category);
    return;
  }

  if (action === 'start' && !confirm('Confirmar partida e congelar o planejamento?')) return;
  if (action === 'close' && !confirm('Confirmar encerramento da viagem?')) return;

  saving = true;
  status.textContent = '';

  try {
    if (action === 'import') {
      imported = { tripId: id, points: mapPoints(data.url) };
      location.hash = 'leg/' + id;
      return;
    }

    let destination;

    await change(list => {
      if (action === 'new') {
        const name = data.name.trim();

        if (!name) throw new Error('Informe o nome da viagem.');

        const trip = makeTrip(name);
        list.push(trip);
        destination = 'plan/' + trip.id;
        return list;
      }

      const trip = list.find(entry => entry.id === id);
      if (!trip) throw new Error('Viagem não encontrada.');

      const selected = item ? decodeURIComponent(item) : '';
      if (trip.status === 'plan') updatePlan(list, trip, action, data, selected);
      else updateRun(trip, action, data, selected);

      const pages = {
        leg: 'plan',
        start: 'today',
        arrival: 'today',
        forecast: 'route',
        expense: 'expenses',
        note: 'diary',
        service: 'service',
        close: 'report'
      };

      if (pages[action]) destination = pages[action] + '/' + id;
      return list;
    });

    if (destination && location.hash !== '#' + destination) {
      location.hash = destination;
    } else {
      await render();
    }

    status.textContent = 'Salvo.';
  } catch (error) {
    status.textContent = error.message;
  } finally {
    saving = false;
  }
});

window.addEventListener('hashchange', () => render());

try {
  if (!await read()) {
    await change(existing => existing || [makeTrip('Rio – Nordeste – Rio', nordeste)]);
  }

  await render();
} catch (error) {
  status.textContent = 'Armazenamento indisponível. ' + error.message;
}
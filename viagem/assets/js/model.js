/*
  Descrição: Regras da viagem, linha de base e importação de pontos do Google Maps.
  Data de criação: 17/11/2026
  Versão: 1.0
  Copyright: Clayton Silva
*/

export const categories = [
  'Combustível',
  'Alimentação',
  'Estadias',
  'Pedágios',
  'Manutenção',
  'Outros'
];

// Cada viagem tem seu próprio planejamento e seus registros de execução.
export function makeTrip(name, legs = []) {
  return {
    id: crypto.randomUUID(),
    name,
    status: 'plan',
    plan: {
      legs: structuredClone(legs),
      stays: [],
      budget: {},
      jobs: []
    },
    baseline: null,
    forecast: {},
    arrivals: {},
    expenses: [],
    notes: [],
    services: {}
  };
}

export function start(trips, trip, km) {
  // Um novo toque na partida preserva a linha de base já gravada.
  if (trip.status === 'run') return;

  if (trip.status !== 'plan') {
    throw new Error('Este planejamento já foi encerrado.');
  }

  if (trips.some(item => item.status === 'run')) {
    throw new Error('Já existe uma viagem em execução.');
  }

  if (!trip.plan.legs.some(leg => leg.destination)) {
    throw new Error('Cadastre um trecho antes de partir.');
  }

  // A cópia mantém os dados da partida separados dos registros de execução.
  trip.baseline = structuredClone(trip.plan);
  trip.departure = { at: new Date().toISOString(), km };
  trip.status = 'run';
}

export function nextLeg(trip) {
  return trip.baseline.legs.find(leg =>
    leg.destination && !trip.arrivals[leg.id]
  );
}

export function mapPoints(value) {
  const url = new URL(value.trim());
  const validHost = /^(?:(?:www|maps)\.)?google\.com(?:\.br)?$/.test(url.hostname);
  const isDirections = /^\/maps\/dir(?:\/|$)/.test(url.pathname);

  if (url.protocol !== 'https:' || !validHost || !isDirections) {
    throw new Error('Cole o endereço completo de uma rota do Google Maps.');
  }

  // Alguns links trazem os pontos no caminho. Outros usam parâmetros de URL.
  const points = url.pathname
    .split('/')
    .slice(3)
    .filter(point => point && !point.startsWith('@') && !point.startsWith('data='))
    .map(point => decodeURIComponent(point.replaceAll('+', ' ')));

  const origin = (url.searchParams.get('origin') || points[0] || '').trim();
  const destination = (
    url.searchParams.get('destination') ||
    (points.length > 1 ? points.at(-1) : '')
  ).trim();

  if (!origin || !destination) {
    throw new Error('O link precisa conter origem e destino.');
  }

  return {
    origin,
    destination,
    waypoints: url.searchParams.get('waypoints') || points.slice(1, -1).join('|')
  };
}

// Guarda valores monetários em centavos para somar despesas com precisão.
export function cents(value) {
  return Math.round(Number(String(value || 0).replace(',', '.')) * 100);
}
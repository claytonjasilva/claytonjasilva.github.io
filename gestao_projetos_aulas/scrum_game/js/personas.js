/* Missão Scrum — personas por projeto e retratos
 * Cada papel citado nas histórias ("Como <papel>, quero…") tem uma persona associada (Agile Alliance — Personas).
 * A primeira persona de cada lista é a principal, usada para escrever a história na Missão 2.
 * av = retrato: s pele (0–4), h cabelo (curto, longo, coque, cacheado, careca, rabo), c cor do cabelo (0–4),
 *      g óculos, b barba, r cor da roupa (0–5)
 */
var MS = window.MS = window.MS || {};

(function () {
  const X = (papeis, nome, perfil, av) => ({ papeis: [].concat(papeis), nome, perfil, av });

  MS.PERSONAS = {
    EVT: [
      X('participante', 'Ana', 'Profissional que se inscreve em eventos pelo celular durante intervalos curtos. Precisa de rapidez e certeza de que a vaga foi reservada.', { s: 1, h: 'longo', c: 1, r: 0 }),
      X('organizador', 'Carlos', 'Produtor de eventos que hoje controla as inscrições em planilhas e passa horas conferindo vagas.', { s: 2, h: 'curto', c: 0, b: 1, r: 2 })
    ],
    DLV: [
      X('cliente', 'Marcos', 'Pai que trabalha em home office e pede almoço com pressa entre uma reunião e outra.', { s: 2, h: 'curto', c: 0, g: 1, r: 1 }),
      X('atendente', 'Rose', 'Atendente da cozinha que hoje anota os pedidos à mão no meio da correria do almoço.', { s: 3, h: 'coque', c: 0, r: 4 }),
      X('gerente', 'Seu Antônio', 'Dono do restaurante há 20 anos; cuida das compras e do cardápio.', { s: 1, h: 'careca', c: 4, b: 1, r: 3 })
    ],
    ART: [
      X('artesã', 'Dona Lúcia', 'Artesã de 58 anos, pouca familiaridade com tecnologia; fotografa as peças com o celular.', { s: 2, h: 'coque', c: 4, g: 1, r: 5 }),
      X('comprador', 'Gabriel', 'Designer de interiores que procura peças autorais para clientes de outras cidades.', { s: 0, h: 'curto', c: 3, r: 1 }),
      X('coordenadora', 'Marta', 'Coordenadora da cooperativa, responsável por repassar os valores de cada venda às artesãs.', { s: 3, h: 'cacheado', c: 0, r: 2 })
    ],
    VET: [
      X('tutor', 'Juliana', 'Estudante que divide apartamento com dois gatos e só tem tempo livre à noite.', { s: 0, h: 'rabo', c: 2, r: 0 }),
      X('recepcionista', 'Paula', 'Recepcionista que atende telefone, balcão e a agenda de quatro veterinários ao mesmo tempo.', { s: 2, h: 'longo', c: 0, r: 4 }),
      X('gerente', 'Dr. Renato', 'Veterinário e sócio-gerente, preocupado com os horários ociosos causados pelas faltas.', { s: 1, h: 'curto', c: 4, g: 1, r: 3 })
    ],
    BIB: [
      X('aluno', 'Camila', 'Aluna de engenharia que trabalha meio período e só vai ao campus à noite.', { s: 3, h: 'cacheado', c: 0, r: 0 }),
      X('bibliotecário', 'Jorge', 'Bibliotecário há 15 anos; conhece o acervo de cor, mas o sistema atual é antigo.', { s: 1, h: 'careca', c: 4, g: 1, r: 2 }),
      X('coordenador', 'Profa. Sandra', 'Coordenadora de curso que decide a compra de livros a partir dos pedidos dos alunos.', { s: 2, h: 'longo', c: 4, g: 1, r: 3 })
    ],
    FIT: [
      X('aluno', 'Thiago', 'Aluno iniciante que tem vergonha de perguntar como usar os aparelhos.', { s: 2, h: 'curto', c: 0, r: 0 }),
      X('professor', 'Bruno', 'Educador físico que atende 30 alunos por turno e não consegue acompanhar todos.', { s: 3, h: 'careca', c: 0, b: 1, r: 4 }),
      X('gerente', 'Lívia', 'Gerente da academia, com a meta de reduzir os cancelamentos de matrícula.', { s: 1, h: 'rabo', c: 1, r: 2 })
    ],
    CAR: [
      X(['passageiro', 'estudante'], 'Pedro', 'Calouro que mora a 25 km do campus e gasta duas horas por dia em ônibus.', { s: 2, h: 'cacheado', c: 0, r: 0 }),
      X('motorista', 'Larissa', 'Veterana do 7º período que vai de carro ao campus com três lugares vazios.', { s: 0, h: 'longo', c: 3, r: 1 })
    ],
    FIN: [
      X('usuário', 'Rafael', '24 anos, primeiro emprego; sempre chega ao dia 20 sem saber onde gastou.', { s: 1, h: 'curto', c: 1, r: 1 })
    ],
    LAN: [
      X('consumidora', 'Bia', 'Universitária de 22 anos que lê rótulos e segue influenciadoras de beleza consciente.', { s: 0, h: 'longo', c: 3, r: 5 }),
      X('gerente de marca', 'Renata', 'Gerente de marca responsável pela meta de participação no segmento vegano.', { s: 2, h: 'curto', c: 0, g: 1, r: 3 }),
      X('lojista parceiro', 'Seu Jairo', 'Dono de uma farmácia de bairro que revende cosméticos.', { s: 1, h: 'careca', c: 4, b: 1, r: 2 })
    ],
    FES: [
      X('público', 'Lucas', 'Estudante de 20 anos que vai a shows com amigos e compra ingresso pelo celular na última hora.', { s: 2, h: 'cacheado', c: 0, r: 2 }),
      X('produtora', 'Nina', 'Produtora cultural que organiza shows independentes há seis anos.', { s: 3, h: 'cacheado', c: 0, r: 4 }),
      X('patrocinador', 'Eduardo', 'Gerente de marketing de uma cervejaria artesanal local que patrocina eventos.', { s: 0, h: 'curto', c: 3, g: 1, r: 3 }),
      X('banda', 'Duda (Os Vagalumes)', 'Vocalista de uma banda independente que fará seu primeiro show em festival.', { s: 2, h: 'longo', c: 0, r: 5 })
    ],
    EAD: [
      X('aluno', 'Fernanda', 'Auxiliar administrativa que estuda no ônibus e quer um certificado para pedir promoção.', { s: 3, h: 'rabo', c: 0, r: 5 }),
      X('professor', 'Prof. Ricardo', 'Professor que já gravou 200 aulas e quer transformá-las em cursos curtos.', { s: 1, h: 'curto', c: 4, g: 1, b: 1, r: 3 })
    ],
    FOO: [
      X('cliente', 'Cláudia', 'Analista de escritório com uma hora de almoço; quer comer bem sem enfrentar fila.', { s: 1, h: 'longo', c: 1, r: 0 }),
      X('sócio', 'Diego', 'Chef que deixou o restaurante onde trabalhava para empreender no próprio food truck.', { s: 2, h: 'curto', c: 0, b: 1, r: 2 })
    ],
    CAS: [
      X('morador', 'Sérgio', 'Engenheiro aposentado que mora sozinho; quer economizar e evitar subir escadas à noite.', { s: 0, h: 'careca', c: 4, g: 1, r: 2 })
    ],
    MET: [
      X('professora', 'Helena', 'Professora de física que quer usar dados reais em aula, mas tem pouco tempo de preparação.', { s: 1, h: 'longo', c: 2, g: 1, r: 4 }),
      X('aluno', 'Kauã', 'Aluno do 2º ano que gosta de tecnologia e quer participar da feira de ciências.', { s: 3, h: 'curto', c: 0, r: 0 }),
      X('diretor', 'Diretor Paulo', 'Diretor da escola, interessado em projetos que deem visibilidade à escola.', { s: 1, h: 'careca', c: 4, g: 1, r: 3 })
    ],
    FRO: [
      X('despachante', 'Roberto', 'Despachante que atende 40 ligações por dia de clientes querendo saber onde está a carga.', { s: 2, h: 'curto', c: 0, b: 1, r: 1 }),
      X('gestor', 'Fátima', 'Gestora de frota responsável pelos custos de combustível e manutenção.', { s: 2, h: 'coque', c: 0, g: 1, r: 3 }),
      X('cliente', 'Vanessa', 'Compradora de uma rede varejista que aguarda cargas semanais para abastecer as lojas.', { s: 0, h: 'longo', c: 1, r: 5 }),
      X('motorista', 'Seu Zé', 'Caminhoneiro com 25 anos de estrada, que desconfia de tecnologia.', { s: 2, h: 'curto', c: 4, b: 1, r: 2 }),
      X('técnico', 'Igor', 'Técnico que instala rastreadores e cuida da manutenção dos equipamentos.', { s: 3, h: 'curto', c: 0, r: 4 })
    ]
  };

  /* Especialistas das cartas de orientação (uma consulta por missão) */
  MS.ESPECIALISTAS = {
    m1: { nome: 'Vera Prado', papel: 'Patrocinadora executiva', av: { s: 1, h: 'coque', c: 4, g: 1, r: 3 } },
    m2: { nome: 'Davi Moura', papel: 'Agile Coach', av: { s: 3, h: 'careca', c: 0, b: 1, r: 1 } },
    m3: { nome: 'Rita Campos', papel: 'Product Owner sênior', av: { s: 2, h: 'cacheado', c: 1, r: 5 } },
    m4: { nome: 'Otávio Lins', papel: 'Desenvolvedor sênior', av: { s: 0, h: 'curto', c: 2, g: 1, r: 2 } },
    m5: { nome: 'Beatriz Sá', papel: 'Scrum Master', av: { s: 1, h: 'rabo', c: 0, r: 4 } },
    m6: { nome: 'Carla Nunes', papel: 'Gerente de projetos ágeis', av: { s: 2, h: 'longo', c: 1, g: 1, r: 0 } },
    m7: { nome: 'Marcelo Reis', papel: 'Scrum Master experiente', av: { s: 1, h: 'curto', c: 4, b: 1, r: 3 } }
  };

  /* Liga as personas aos projetos e oferece busca por papel */
  (MS.PROJETOS || []).forEach(p => {
    p.personas = MS.PERSONAS[p.id] || [p.persona];
    p.persona = p.personas[0];
  });
  MS.papelDe = texto => { const m = /^Como (.+?), quero/.exec(texto || ''); return m ? m[1] : null; };
  MS.personaDe = (p, texto) => { const pap = MS.papelDe(texto); return pap ? p.personas.find(x => x.papeis.includes(pap)) || null : null; };

  /* Retrato em SVG, gerado a partir dos parâmetros — sem imagens externas */
  const PELE = ['#f6d5b8', '#e6b38e', '#c68a5f', '#97643f', '#664126'];
  const CAB = ['#2a1f17', '#5b3a22', '#a2692f', '#d8b36c', '#a3a8ae'];
  const ROUPA = ['#2f80ed', '#7c3aed', '#0f9d76', '#d4552f', '#c4882a', '#c2417e'];
  const FUNDO = ['#cfe3fb', '#e3d7fb', '#cdeee2', '#f8d9cd', '#f6e4c2', '#f6d2e2'];
  let seq = 0;
  MS.retrato = function (av, tam, rot) {
    av = av || {}; tam = tam || 48;
    const pele = PELE[av.s || 0], cab = CAB[av.c || 0], roupa = ROUPA[av.r || 0], fundo = FUNDO[av.r || 0];
    const h = av.h || 'curto';
    let tras = '', topo = '';
    const franja = `<path d="M19.5 29 C19 15 45 15 44.5 29 C41 21.5 27 20 19.5 29 Z" fill="${cab}"/>`;
    if (h === 'longo') { tras = `<path d="M18 30 C17 13 47 13 46 30 L48 52 C40 47 24 47 16 52 Z" fill="${cab}"/>`; topo = franja; }
    else if (h === 'curto') topo = franja;
    else if (h === 'coque') { tras = `<circle cx="32" cy="12.5" r="6.5" fill="${cab}"/>`; topo = franja; }
    else if (h === 'rabo') { tras = `<path d="M43 24 C52 26 53 40 47 46 C48 38 46 31 42 28 Z" fill="${cab}"/>`; topo = franja; }
    else if (h === 'cacheado') {
      tras = [[20, 24], [24, 17], [32, 14], [40, 17], [44, 24], [18, 32], [46, 32]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="${cab}"/>`).join('');
    } else if (h === 'careca') topo = `<path d="M20 30 C19.5 26 20.5 24 22 23.5 L22 31 Z M44 30 C44.5 26 43.5 24 42 23.5 L42 31 Z" fill="${cab}"/>`;
    const barba = av.b ? `<path d="M20.5 33 C21 44 27 47.5 32 47.5 C37 47.5 43 44 43.5 33 C41 39 37 41 32 41 C27 41 23 39 20.5 33 Z" fill="${cab}"/>` : '';
    const oculos = av.g ? `<g fill="none" stroke="#1f2937" stroke-width="1.4"><circle cx="27" cy="31" r="4"/><circle cx="37" cy="31" r="4"/><path d="M31 31 h2"/></g>` : '';
    return `<svg class="retrato" width="${tam}" height="${tam}" viewBox="0 0 64 64" role="img" aria-label="${rot ? String(rot).replace(/"/g, '') : 'retrato'}">
      <circle cx="32" cy="32" r="32" fill="${fundo}"/>
      <clipPath id="ret${++seq}"><circle cx="32" cy="32" r="32"/></clipPath>
      <g clip-path="url(#ret${seq})">
        ${tras}
        <path d="M9 66 C10 51 21 46 32 46 C43 46 54 51 55 66 Z" fill="${roupa}"/>
        <rect x="27.5" y="38" width="9" height="9" rx="3" fill="${pele}"/>
        <ellipse cx="32" cy="30.5" rx="12.5" ry="14.5" fill="${pele}"/>
        ${topo}${barba}
        <circle cx="27" cy="31" r="1.6" fill="#1f2937"/><circle cx="37" cy="31" r="1.6" fill="#1f2937"/>
        <path d="M28 ${av.b ? 39.5 : 38} Q32 ${av.b ? 42 : 41} 36 ${av.b ? 39.5 : 38}" fill="none" stroke="${av.b ? '#f3e7e1' : '#7c2d12'}" stroke-width="1.5" stroke-linecap="round"/>
        ${oculos}
      </g>
    </svg>`;
  };
})();

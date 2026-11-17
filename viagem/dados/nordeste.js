/*
  Descrição: Roteiro inicial Rio – Nordeste – Rio.
  Data de criação: 17/11/2026
  Versão: 1.0
  Copyright: Clayton Silva
*/

// Cada linha contém título, origem, destino, distância, rodovias, nota e pontos de passagem.
const dias = [
  ["Rio de Janeiro (RJ) → Governador Valadares (MG)", "Rio de Janeiro, RJ, Brasil", "Governador Valadares, MG, Brasil", 560, "BR-040|BR-116", "via Além Paraíba, sem pernoite", ""],
  ["Governador Valadares (MG) → Vitória da Conquista (BA)", "Governador Valadares, MG, Brasil", "Vitória da Conquista, BA, Brasil", 560, "BR-116", "", ""],
  ["Vitória da Conquista (BA) → Feira de Santana (BA)", "Vitória da Conquista, BA, Brasil", "Feira de Santana, BA, Brasil", 404, "BR-116", "", ""],
  ["Feira de Santana (BA) → Petrolina (PE)", "Feira de Santana, BA, Brasil", "Petrolina, PE, Brasil", 399, "BR-116|BR-324|BR-407", "via Juazeiro (BA) · chegada no ponto de controle", "Juazeiro, BA"],
  ["Petrolina (PE) → Picos (PI)", "Petrolina, PE, Brasil", "Picos, PI, Brasil", 320, "BR-407", "", ""],
  ["Picos (PI) → Caxias (MA)", "Picos, PI, Brasil", "Caxias, MA, Brasil", 410, "BR-316", "chegada a tempo do Réveillon · chegada no ponto de controle", ""],
  ["Caxias (MA) — dia livre", "", "", 0, "", "pouco movimento no primeiro dia do ano", ""],
  ["Caxias (MA) → Barreirinhas (MA)", "Caxias, MA, Brasil", "Barreirinhas, MA, Brasil", 380, "BR-222|MA-034", "", ""],
  ["Barreirinhas (MA) → Sobral (CE)", "Barreirinhas, MA, Brasil", "Sobral, CE, Brasil", 520, "BR-222", "rota 100% asfaltada pelo interior (BR-222), evitando as balsas e a estrada de areia da Rota das Emoções", ""],
  ["Sobral (CE) → Jijoca de Jericoacoara (CE)", "Sobral, CE, Brasil", "Jijoca de Jericoacoara, CE, Brasil", 165, "CE-187|CE-085", "pernoite em Jijoca (acesso asfaltado); a vila de Jericoacoara em si só se chega pelos últimos ~23 km de duna, sem trecho pavimentado — visitem de bugueiro/mototáxi local, moto fica estacionada em Jijoca", ""],
  ["Jijoca de Jericoacoara → Fortaleza (CE)", "Jijoca de Jericoacoara, CE, Brasil", "Fortaleza, CE, Brasil", 300, "CE-085|BR-402", "", ""],
  ["Fortaleza — dia livre (1/2)", "", "", 0, "", "Beira-Mar, Mercado Central", ""],
  ["Fortaleza — dia livre (2/2)", "", "", 0, "", "", ""],
  ["Fortaleza → João Pessoa (PB)", "Fortaleza, CE, Brasil", "João Pessoa, PB, Brasil", 688, "BR-304|BR-101", "via Natal, parada rápida sem pernoite · chegada no ponto de controle", ""],
  ["João Pessoa — dia livre (1/2)", "", "", 0, "", "Ponta do Seixas", ""],
  ["João Pessoa — dia livre (2/2)", "", "", 0, "", "", ""],
  ["João Pessoa → Recife (PE)", "João Pessoa, PB, Brasil", "Recife, PE, Brasil", 120, "BR-101", "partida do ponto de controle", ""],
  ["Recife — dia livre (1/3)", "", "", 0, "", "Olinda", ""],
  ["Recife — dia livre (2/3)", "", "", 0, "", "", ""],
  ["Recife — dia livre (3/3)", "", "", 0, "", "", ""],
  ["Recife → Japaratinga (AL)", "Recife, PE, Brasil", "Japaratinga, AL, Brasil", 215, "PE-060|AL-101", "passagem por Porto de Galinhas (sem pernoite) · parada obrigatória · 1 dia em Japaratinga · piscinas naturais", ""],
  ["Japaratinga → Maceió (AL)", "Japaratinga, AL, Brasil", "Maceió, AL, Brasil", 90, "AL-101", "", ""],
  ["Maceió — dia livre", "", "", 0, "", "Pajuçara, Praia do Francês", ""],
  ["Maceió → Aracaju (SE)", "Maceió, AL, Brasil", "Aracaju, SE, Brasil", 280, "BR-101", "", ""],
  ["Aracaju → Salvador (BA)", "Aracaju, SE, Brasil", "Salvador, BA, Brasil", 360, "BR-101", "travessia da Baía de Todos os Santos", ""],
  ["Salvador — dia livre", "", "", 0, "", "Pelourinho, Elevador Lacerda", ""],
  ["Salvador → Praia do Forte (BA)", "Salvador, BA, Brasil", "Praia do Forte, BA, Brasil", 80, "BA-099 (Linha Verde)", "", ""],
  ["Praia do Forte → Ilhéus (BA)", "Praia do Forte, BA, Brasil", "Ilhéus, BA, Brasil", 380, "BA-099|BR-101", "Terra do Cacau, roteiro de Jorge Amado", ""],
  ["Ilhéus → Porto Seguro (BA)", "Ilhéus, BA, Brasil", "Porto Seguro, BA, Brasil", 200, "BR-101", "Costa do Descobrimento", ""],
  ["Porto Seguro — dia livre", "", "", 0, "", "Arraial d’Ajuda", ""],
  ["Porto Seguro → Vitória da Conquista (BA)", "Porto Seguro, BA, Brasil", "Vitória da Conquista, BA, Brasil", 330, "BR-367|BR-116", "chegada no ponto de controle", ""],
  ["Vitória da Conquista — dia livre (1/4)", "", "", 0, "", "", ""],
  ["Vitória da Conquista — dia livre (2/4)", "", "", 0, "", "", ""],
  ["Vitória da Conquista — dia livre (3/4)", "", "", 0, "", "", ""],
  ["Vitória da Conquista — dia livre (4/4)", "", "", 0, "", "descanso antes da reta final", ""],
  ["Vitória da Conquista → Governador Valadares (MG)", "Vitória da Conquista, BA, Brasil", "Governador Valadares, MG, Brasil", 560, "BR-116", "", ""],
  ["Governador Valadares → Além Paraíba (MG)", "Governador Valadares, MG, Brasil", "Além Paraíba, MG, Brasil", 370, "BR-116|BR-040", "", ""],
  ["Além Paraíba → Rio de Janeiro (RJ)", "Além Paraíba, MG, Brasil", "Rio de Janeiro, RJ, Brasil", 190, "BR-040", "chegada no ponto de controle final", ""]
];

const marcosFixos = new Set([
  '2026-12-26', // Saída do Rio
  '2026-12-31', // Chegada a Caxias
  '2027-02-01'  // Retorno ao Rio
]);

// Usa UTC para calcular as datas sem depender do fuso do aparelho.
const roteiroNordeste = dias.map((dia, indice) => {
  const [title, origin, destination, km, rodovias, note, pontos] = dia;
  const date = new Date(Date.UTC(2026, 11, 26 + indice))
    .toISOString()
    .slice(0, 10);

  return {
    id: 'ne-' + indice,
    date,
    origin,
    destination,
    title,
    roads: rodovias.split('|').filter(Boolean),
    km,
    note,
    waypoints: pontos.split('|').filter(Boolean),
    fixed: marcosFixos.has(date)
  };
});

export default roteiroNordeste;
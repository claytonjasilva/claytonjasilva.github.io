/* Missão Scrum — dados dos projetos e conteúdos genéricos
 * Conceitos: Unidade 5 — Gestão de escopo e tempo com Scrum (SBOK 2016; Agile Alliance; Scrum Guide 2020)
 *
 * Esquema de cada item (história):
 *   id  identificador interno        t  texto da história
 *   v   valor para o cliente (1–5)   r  incerteza alta (1) ou baixa (0)
 *   d   dependências (ids)           p  estimativa de referência (pontos)
 *   k   história principal do primeiro objetivo de Sprint
 * Para acrescentar projetos, copie um bloco e mantenha: 6 histórias soltas,
 * 1 épico com 2 histórias filhas, 2 tarefas técnicas e 4+2 tarefas da história principal.
 */
var MS = window.MS = window.MS || {};

(function () {
  const S = (id, t, v, r, d, p, k) => ({ id, t, v, r: r ? 1 : 0, d: d || [], p, k: !!k });

  MS.PROJETOS = [
    {
      id: 'EVT', nome: 'Portal de Eventos', area: 'Software', nivel: 1, vel: 6,
      contexto: 'Uma produtora quer abandonar as inscrições por planilha e oferecer um portal para seus eventos.',
      visao: 'Permitir que participantes encontrem eventos e garantam sua vaga pelo celular em poucos minutos, com confirmação imediata.',
      just: 'Reduzir em 70% o tempo gasto pela equipe com inscrições manuais e aumentar a ocupação dos eventos.',
      persona: { nome: 'Ana', perfil: 'Profissional que se inscreve em eventos pelo celular durante intervalos curtos. Precisa de rapidez e certeza de que a vaga foi reservada.' },
      historia: ['Ana, participante que se inscreve pelo celular', 'receber a confirmação da minha inscrição', 'saber que minha vaga está reservada'],
      itens: [
        S('a', 'Como participante, quero me inscrever em um evento para reservar minha vaga.', 5, 0, ['g', 'b'], 5, 1),
        S('b', 'Como organizador, quero definir e controlar a lotação de cada evento para não vender vagas inexistentes.', 4, 0, ['g'], 3),
        S('c', 'Como participante, quero receber a confirmação por e-mail para ter certeza da minha inscrição.', 4, 0, ['a'], 2),
        S('d', 'Como participante, quero pagar com Pix dentro do portal para concluir a inscrição de uma vez.', 3, 1, [], 8),
        S('e', 'Como organizador, quero exportar a lista de presença para controlar a entrada no evento.', 2, 0, ['a'], 3),
        S('f', 'Como participante, quero entrar em uma lista de espera para ser avisado se surgir uma vaga.', 2, 0, ['b'], 3),
        S('g', 'Como organizador, quero cadastrar um evento com data, local e vagas para abrir as inscrições.', 5, 0, [], 3),
        S('h', 'Como organizador, quero editar ou cancelar um evento para avisar mudanças aos inscritos.', 2, 0, ['g'], 5)
      ],
      epico: { t: 'Como organizador, quero gerenciar meus eventos para manter a programação atualizada.', filhos: ['g', 'h'] },
      tecnicas: ['Configurar o servidor de banco de dados.', 'Criar a tabela de inscrições com índices.'],
      objetivo: 'Permitir que um participante se inscreva em um evento cadastrado, respeitando a lotação.',
      tarefas: {
        boas: [['Definir os campos obrigatórios do formulário', 2], ['Criar o formulário de inscrição', 6], ['Verificar as vagas disponíveis antes de confirmar', 4], ['Testar inscrições válidas e inválidas', 5]],
        ruins: [['Criar animações 3D para o botão de inscrição', 6, 'gold'], ['Desenvolver o relatório financeiro anual', 8, 'fora']]
      }
    },
    {
      id: 'DLV', nome: 'Delivery do Bairro', area: 'Software', nivel: 1, vel: 6,
      contexto: 'Um restaurante de bairro perde pedidos com o telefone ocupado e paga comissões altas a aplicativos.',
      visao: 'Permitir que moradores do bairro peçam refeições do restaurante pelo celular e as recebam em até 40 minutos.',
      just: 'Recuperar os pedidos perdidos por telefone ocupado e reduzir a comissão de 27% paga a aplicativos de terceiros.',
      persona: { nome: 'Marcos', perfil: 'Pai que trabalha em home office e pede almoço com pressa entre uma reunião e outra.' },
      historia: ['Marcos, cliente que pede almoço entre reuniões', 'repetir meu último pedido com um toque', 'almoçar sem perder tempo escolhendo'],
      itens: [
        S('a', 'Como cliente, quero montar meu pedido a partir do cardápio para comprar sem ligar para o restaurante.', 5, 0, ['g'], 5, 1),
        S('b', 'Como cliente, quero pagar online no momento do pedido para não precisar de troco na entrega.', 4, 1, ['a'], 5),
        S('c', 'Como cliente, quero acompanhar o status do pedido para saber quando a comida vai chegar.', 3, 0, ['a'], 3),
        S('d', 'Como atendente, quero receber os pedidos em uma tela na cozinha para prepará-los na ordem certa.', 4, 0, ['a'], 3),
        S('e', 'Como cliente, quero repetir meu último pedido para comprar mais rápido.', 2, 0, ['a'], 2),
        S('f', 'Como gerente, quero ver os pratos mais vendidos da semana para planejar as compras.', 2, 0, ['a'], 3),
        S('g', 'Como gerente, quero cadastrar pratos com foto e preço para que apareçam no cardápio.', 5, 0, [], 3),
        S('h', 'Como gerente, quero pausar um prato esgotado para evitar pedidos que não posso atender.', 3, 0, ['g'], 2)
      ],
      epico: { t: 'Como gerente, quero administrar o cardápio para manter pratos e preços atualizados.', filhos: ['g', 'h'] },
      tecnicas: ['Instalar o certificado SSL no servidor.', 'Configurar o banco de dados de pedidos.'],
      objetivo: 'Permitir que um cliente monte e envie um pedido a partir do cardápio cadastrado.',
      tarefas: {
        boas: [['Listar os pratos do cardápio por categoria', 4], ['Criar o carrinho com quantidades', 5], ['Calcular o total com a taxa de entrega', 3], ['Testar pedidos completos e carrinho vazio', 4]],
        ruins: [['Criar um modo noturno com 12 temas de cores', 6, 'gold'], ['Integrar com o programa de fidelidade de outra rede', 8, 'fora']]
      }
    },
    {
      id: 'ART', nome: 'Loja de Artesanato', area: 'E-commerce', nivel: 1, vel: 5,
      contexto: 'Uma cooperativa de artesãs do interior vende apenas na feira local e quer alcançar o país inteiro.',
      visao: 'Levar as peças de artesãs do interior a compradores de todo o país, com vitrine própria e entrega rastreável.',
      just: 'Ampliar a renda da cooperativa vendendo fora da feira local, onde hoje se concentram todas as vendas.',
      persona: { nome: 'Dona Lúcia', perfil: 'Artesã de 58 anos, pouca familiaridade com tecnologia; fotografa as peças com o celular.' },
      historia: ['Dona Lúcia, artesã que usa apenas o celular', 'publicar uma peça com a foto tirada no próprio celular', 'colocar meu trabalho à venda sem depender de ninguém'],
      itens: [
        S('a', 'Como comprador, quero ver as peças por categoria para encontrar o que procuro.', 5, 0, ['g'], 3, 1),
        S('b', 'Como comprador, quero finalizar a compra com cálculo de frete para saber o custo total.', 4, 1, ['a'], 5),
        S('c', 'Como comprador, quero rastrear a entrega para saber quando a peça vai chegar.', 3, 0, ['b'], 3),
        S('d', 'Como artesã, quero ser avisada de cada venda pelo WhatsApp para separar a peça rapidamente.', 4, 0, ['b'], 2),
        S('e', 'Como comprador, quero avaliar a peça recebida para ajudar outros compradores.', 2, 0, ['b'], 2),
        S('f', 'Como coordenadora, quero um relatório mensal de vendas por artesã para repassar os valores.', 3, 0, ['b'], 3),
        S('g', 'Como artesã, quero cadastrar uma peça com foto, preço e medidas para colocá-la à venda.', 5, 0, [], 3),
        S('h', 'Como artesã, quero contar minha história em um perfil para valorizar a origem das peças.', 2, 0, [], 2)
      ],
      epico: { t: 'Como artesã, quero gerenciar minha vitrine para mostrar meu trabalho do meu jeito.', filhos: ['g', 'h'] },
      tecnicas: ['Configurar o gateway de pagamento no servidor.', 'Otimizar o tamanho das imagens no armazenamento.'],
      objetivo: 'Permitir que compradores vejam, por categoria, as peças cadastradas pelas artesãs.',
      tarefas: {
        boas: [['Criar a página de listagem de peças', 5], ['Exibir foto, preço e medidas de cada peça', 3], ['Criar o filtro por categoria', 3], ['Testar a listagem com e sem peças cadastradas', 3]],
        ruins: [['Criar visualização da peça em realidade aumentada', 10, 'gold'], ['Implementar o cálculo de frete', 6, 'fora']]
      }
    },
    {
      id: 'VET', nome: 'Clínica Veterinária', area: 'Saúde animal', nivel: 1, vel: 6,
      contexto: 'Uma clínica veterinária sofre com filas no telefone e muitas faltas às consultas.',
      visao: 'Permitir que tutores agendem consultas para seus pets a qualquer hora, sem filas no telefone.',
      just: 'Reduzir em 40% as faltas às consultas, que hoje deixam dois veterinários ociosos por semana.',
      persona: { nome: 'Juliana', perfil: 'Estudante que divide apartamento com dois gatos e só tem tempo livre à noite.' },
      historia: ['Juliana, tutora que só tem tempo livre à noite', 'agendar a consulta do meu gato pelo celular', 'não depender do horário comercial da clínica'],
      itens: [
        S('a', 'Como tutor, quero escolher um horário livre e agendar a consulta para não precisar ligar.', 5, 0, ['g', 'b'], 5, 1),
        S('b', 'Como tutor, quero cadastrar meu pet com espécie e idade para agilizar o atendimento.', 4, 0, [], 2),
        S('c', 'Como tutor, quero receber um lembrete um dia antes para não esquecer a consulta.', 4, 0, ['a'], 2),
        S('d', 'Como tutor, quero ver a carteira de vacinação do pet para saber quando revacinar.', 3, 1, ['b'], 5),
        S('e', 'Como tutor, quero remarcar a consulta pelo app para não perder o atendimento.', 3, 0, ['a'], 3),
        S('f', 'Como gerente, quero ver a taxa de faltas por mês para avaliar o efeito dos lembretes.', 2, 0, ['c'], 3),
        S('g', 'Como recepcionista, quero cadastrar a agenda de cada veterinário para liberar horários.', 5, 0, [], 3),
        S('h', 'Como recepcionista, quero bloquear horários de cirurgia para evitar conflitos na agenda.', 2, 0, ['g'], 2)
      ],
      epico: { t: 'Como recepcionista, quero administrar as agendas para organizar o dia da clínica.', filhos: ['g', 'h'] },
      tecnicas: ['Criar a API de horários disponíveis.', 'Configurar o envio de SMS no provedor.'],
      objetivo: 'Permitir que um tutor agende uma consulta em um horário livre da agenda.',
      tarefas: {
        boas: [['Exibir os horários livres por veterinário', 5], ['Criar a confirmação do agendamento', 3], ['Impedir dois agendamentos no mesmo horário', 4], ['Testar agendamentos válidos e conflitantes', 4]],
        ruins: [['Criar avatares animados para os pets', 8, 'gold'], ['Gerar o relatório mensal de faltas', 5, 'fora']]
      }
    },
    {
      id: 'BIB', nome: 'Biblioteca do Campus', area: 'Educação', nivel: 1, vel: 5,
      contexto: 'A biblioteca da faculdade tem filas de renovação no início do semestre e muitas multas por atraso.',
      visao: 'Permitir que alunos encontrem, reservem e renovem livros da biblioteca pelo celular, sem ir ao balcão.',
      just: 'Reduzir as filas de renovação e as multas por atraso, motivo de 30% das reclamações à ouvidoria.',
      persona: { nome: 'Camila', perfil: 'Aluna de engenharia que trabalha meio período e só vai ao campus à noite.' },
      historia: ['Camila, aluna que só vai ao campus à noite', 'renovar meus empréstimos pelo celular', 'não pagar multa quando não consigo ir à biblioteca'],
      itens: [
        S('a', 'Como aluno, quero buscar livros por título, autor ou disciplina para saber se estão disponíveis.', 5, 0, ['g'], 3, 1),
        S('b', 'Como aluno, quero renovar meus empréstimos pelo app para evitar multas.', 5, 0, ['e'], 3),
        S('c', 'Como aluno, quero reservar um livro emprestado para ser o próximo a retirá-lo.', 3, 0, ['a'], 3),
        S('d', 'Como aluno, quero ser avisado dois dias antes do vencimento para devolver no prazo.', 4, 0, ['e'], 2),
        S('e', 'Como aluno, quero ver meus empréstimos ativos e as datas de devolução para me organizar.', 4, 0, ['g'], 2),
        S('f', 'Como coordenador, quero ver os livros mais procurados por curso para planejar as compras.', 2, 0, ['a'], 3),
        S('g', 'Como bibliotecário, quero importar o acervo do sistema atual para que o catálogo esteja completo.', 5, 1, [], 5),
        S('h', 'Como bibliotecário, quero registrar livros danificados para retirá-los de circulação.', 2, 0, ['g'], 2)
      ],
      epico: { t: 'Como bibliotecário, quero manter o acervo digital atualizado para que o catálogo reflita a estante.', filhos: ['g', 'h'] },
      tecnicas: ['Migrar o banco de dados para a nuvem.', 'Escrever o script de backup diário.'],
      objetivo: 'Permitir que alunos consultem a disponibilidade dos livros do acervo importado.',
      tarefas: {
        boas: [['Criar a tela de busca com campo único', 3], ['Implementar a busca por título, autor e disciplina', 5], ['Mostrar a disponibilidade de cada exemplar', 3], ['Testar buscas com e sem resultados', 3]],
        ruins: [['Recomendar livros com inteligência artificial', 10, 'gold'], ['Criar a tela de renovação', 4, 'fora']]
      }
    },
    {
      id: 'FIT', nome: 'Treino na Academia', area: 'Bem-estar', nivel: 1, vel: 6,
      contexto: 'Uma academia perde muitos alunos nos três primeiros meses; as fichas de treino ainda são de papel.',
      visao: 'Ajudar alunos da academia a seguir o treino prescrito pelo professor sem depender da ficha de papel.',
      just: 'Reduzir em 25% os cancelamentos nos primeiros três meses, período em que a academia mais perde alunos.',
      persona: { nome: 'Thiago', perfil: 'Aluno iniciante que tem vergonha de perguntar como usar os aparelhos.' },
      historia: ['Thiago, aluno iniciante que tem vergonha de perguntar', 'ver um vídeo curto de como executar cada exercício', 'treinar com segurança sem precisar chamar o professor'],
      itens: [
        S('a', 'Como aluno, quero ver o treino do dia com séries e cargas para treinar sem a ficha de papel.', 5, 0, ['g'], 3, 1),
        S('b', 'Como aluno, quero assistir a um vídeo de execução de cada exercício para treinar com segurança.', 4, 1, ['a'], 5),
        S('c', 'Como aluno, quero marcar os exercícios concluídos para acompanhar meu progresso.', 4, 0, ['a'], 2),
        S('d', 'Como aluno, quero ver a evolução das cargas em um gráfico para me manter motivado.', 3, 0, ['c'], 3),
        S('e', 'Como gerente, quero ver os alunos sem treinar há 10 dias para oferecer acompanhamento.', 4, 0, ['c'], 3),
        S('f', 'Como aluno, quero integrar o app ao meu relógio inteligente para registrar a frequência cardíaca.', 2, 1, [], 8),
        S('g', 'Como professor, quero montar a ficha de treino do aluno no app para substituir o papel.', 5, 0, [], 3),
        S('h', 'Como professor, quero ajustar a ficha a partir do retorno do aluno para evoluir o treino.', 3, 0, ['g'], 3)
      ],
      epico: { t: 'Como professor, quero prescrever e ajustar treinos para acompanhar cada aluno.', filhos: ['g', 'h'] },
      tecnicas: ['Configurar as notificações push no servidor.', 'Modelar a tabela de exercícios.'],
      objetivo: 'Permitir que o aluno veja no celular o treino do dia prescrito pelo professor.',
      tarefas: {
        boas: [['Criar a tela do treino do dia', 4], ['Exibir séries, repetições e carga por exercício', 3], ['Sincronizar a ficha montada pelo professor', 4], ['Testar com fichas de tamanhos diferentes', 2]],
        ruins: [['Criar um ranking com prêmios entre alunos', 8, 'gold'], ['Gravar os vídeos de execução', 10, 'fora']]
      }
    },
    {
      id: 'CAR', nome: 'Carona Universitária', area: 'Mobilidade', nivel: 2, vel: 6,
      contexto: 'O estacionamento do campus recusa centenas de carros por dia, enquanto alunos gastam horas no transporte.',
      visao: 'Conectar estudantes da mesma faculdade que fazem trajetos parecidos, para dividir custos com segurança.',
      just: 'Reduzir o custo de transporte dos alunos e a falta de vagas no estacionamento, que recusa 300 carros por dia.',
      persona: { nome: 'Pedro', perfil: 'Calouro que mora a 25 km do campus e gasta duas horas por dia em ônibus.' },
      historia: ['Pedro, calouro que mora longe do campus', 'encontrar caronas que passam perto da minha casa', 'chegar à aula gastando menos tempo e dinheiro'],
      itens: [
        S('a', 'Como passageiro, quero buscar caronas por bairro e horário para encontrar quem faz meu trajeto.', 5, 0, ['g', 'b'], 5, 1),
        S('b', 'Como motorista, quero oferecer uma carona com rota, horário e vagas para dividir os custos.', 5, 0, ['g'], 3),
        S('c', 'Como passageiro, quero reservar uma vaga na carona para garantir meu lugar.', 4, 0, ['a'], 3),
        S('d', 'Como passageiro, quero ver a avaliação do motorista para decidir com segurança.', 3, 0, ['c'], 3),
        S('e', 'Como motorista, quero receber a divisão do custo por Pix para não precisar cobrar pessoalmente.', 3, 1, ['c'], 8),
        S('f', 'Como estudante, quero compartilhar minha localização em tempo real com um contato para viajar mais tranquilo.', 2, 1, [], 5),
        S('g', 'Como estudante, quero entrar com meu e-mail institucional para garantir que só alunos usem o app.', 5, 1, [], 3),
        S('h', 'Como estudante, quero adicionar foto e curso ao perfil para ser reconhecido na carona.', 2, 0, ['g'], 2)
      ],
      epico: { t: 'Como estudante, quero ter um perfil confiável no app para que outros alunos confiem em mim.', filhos: ['g', 'h'] },
      tecnicas: ['Configurar o serviço de mapas e rotas.', 'Criar o índice geográfico no banco de dados.'],
      objetivo: 'Permitir que um aluno autenticado encontre caronas oferecidas por colegas para o seu trajeto.',
      tarefas: {
        boas: [['Criar a tela de busca por bairro e horário', 4], ['Filtrar caronas com vagas disponíveis', 3], ['Exibir rota, horário e motorista de cada carona', 3], ['Testar buscas sem caronas compatíveis', 2]],
        ruins: [['Criar um mapa 3D animado do trajeto', 8, 'gold'], ['Implementar o pagamento por Pix', 8, 'fora']]
      }
    },
    {
      id: 'FIN', nome: 'Finanças Pessoais', area: 'Fintech', nivel: 2, vel: 5,
      contexto: 'Uma startup quer ajudar jovens no primeiro emprego a controlar os gastos do mês.',
      visao: 'Ajudar jovens adultos a saber, em um minuto por dia, para onde vai o dinheiro e quanto podem gastar até o fim do mês.',
      just: 'Conquistar 50 mil usuários no primeiro ano em modelo freemium; a pesquisa mostrou que 7 em cada 10 jovens não controlam gastos.',
      persona: { nome: 'Rafael', perfil: '24 anos, primeiro emprego; sempre chega ao dia 20 sem saber onde gastou.' },
      historia: ['Rafael, jovem no primeiro emprego', 'ver quanto ainda posso gastar até o fim do mês', 'não chegar ao dia 20 sem dinheiro'],
      itens: [
        S('a', 'Como usuário, quero registrar um gasto em até três toques para não desistir de anotar.', 5, 0, ['g'], 3, 1),
        S('b', 'Como usuário, quero ver o saldo disponível até o fim do mês para decidir se posso gastar.', 5, 0, ['a'], 3),
        S('c', 'Como usuário, quero categorizar meus gastos para descobrir onde gasto mais.', 3, 0, ['a'], 3),
        S('d', 'Como usuário, quero importar o extrato do banco automaticamente para não digitar tudo.', 4, 1, [], 8),
        S('e', 'Como usuário, quero definir uma meta de economia para juntar dinheiro para uma viagem.', 2, 0, ['b'], 3),
        S('f', 'Como usuário, quero receber um alerta ao passar de 80% do orçamento para frear os gastos.', 3, 0, ['b'], 2),
        S('g', 'Como usuário, quero criar minha conta e informar minha renda mensal para começar a controlar.', 5, 0, [], 2),
        S('h', 'Como usuário, quero cadastrar despesas fixas recorrentes para não lançá-las todo mês.', 3, 0, ['g'], 3)
      ],
      epico: { t: 'Como usuário, quero configurar meu perfil financeiro para que o app reflita a minha realidade.', filhos: ['g', 'h'] },
      tecnicas: ['Criptografar os dados no banco.', 'Configurar a esteira de publicação nas lojas de aplicativos.'],
      objetivo: 'Permitir que o usuário registre seus gastos de forma rápida a partir da renda informada.',
      tarefas: {
        boas: [['Criar o botão de novo gasto na tela inicial', 2], ['Criar o teclado numérico de valor', 3], ['Salvar o gasto com data e hora', 3], ['Testar o registro em até três toques', 3]],
        ruins: [['Desenhar 30 ícones personalizados por categoria', 6, 'gold'], ['Integrar com a cotação de criptomoedas', 8, 'fora']]
      }
    },
    {
      id: 'LAN', nome: 'Lançamento Vegano', area: 'Marketing', nivel: 2, vel: 5,
      contexto: 'Uma marca de cosméticos vai lançar uma linha vegana. Scrum também serve a projetos fora do software.',
      visao: 'Tornar a nova linha vegana a primeira escolha de consumidoras de 18 a 30 anos que buscam beleza sem crueldade animal.',
      just: 'Atingir 15% de participação no segmento vegano em seis meses, em um mercado que cresce 20% ao ano.',
      persona: { nome: 'Bia', perfil: 'Universitária de 22 anos que lê rótulos e segue influenciadoras de beleza consciente.' },
      historia: ['Bia, consumidora que lê rótulos antes de comprar', 'comprovar que o produto não é testado em animais', 'comprar com a consciência tranquila'],
      itens: [
        S('a', 'Como consumidora, quero uma página de lançamento com ingredientes e certificações para conhecer a linha.', 5, 0, ['g'], 3, 1),
        S('b', 'Como consumidora, quero receber amostras grátis no evento de lançamento para experimentar antes de comprar.', 4, 0, ['a'], 5),
        S('c', 'Como gerente de marca, quero vídeos curtos com influenciadoras para alcançar o público jovem.', 4, 0, ['a'], 5),
        S('d', 'Como consumidora, quero um cupom de primeira compra para experimentar com desconto.', 3, 0, ['a'], 2),
        S('e', 'Como lojista parceiro, quero um kit de vitrine para expor a linha no ponto de venda.', 3, 0, ['g'], 3),
        S('f', 'Como gerente de marca, quero um painel de menções nas redes para medir a repercussão.', 2, 1, ['c'], 3),
        S('g', 'Como consumidora, quero ver o selo de certificação vegana na embalagem para confiar na marca.', 5, 1, [], 5),
        S('h', 'Como consumidora, quero a embalagem reciclável identificada para descartá-la corretamente.', 2, 0, ['g'], 2)
      ],
      epico: { t: 'Como consumidora, quero que a embalagem comunique os valores da marca para reconhecê-la na prateleira.', filhos: ['g', 'h'] },
      tecnicas: ['Contratar a gráfica das embalagens.', 'Reservar o espaço do evento de lançamento.'],
      objetivo: 'Publicar a página de lançamento com os ingredientes e a certificação vegana comprovada.',
      tarefas: {
        boas: [['Redigir os textos de ingredientes e benefícios', 4], ['Produzir as fotos dos produtos', 6], ['Publicar a página com o selo de certificação', 3], ['Revisar a página com o jurídico', 2]],
        ruins: [['Gravar um filme publicitário para TV aberta', 12, 'gold'], ['Negociar o kit de vitrine com lojistas', 5, 'fora']]
      }
    },
    {
      id: 'FES', nome: 'Festival Independente', area: 'Eventos', nivel: 2, vel: 6,
      contexto: 'Uma produtora quer criar um festival anual de bandas independentes para o público universitário.',
      visao: 'Realizar um festival de bandas independentes que caiba no bolso do público universitário e revele novos artistas da cidade.',
      just: 'Cobrir os custos com patrocínio e ingressos e criar uma marca anual para a produtora.',
      persona: { nome: 'Lucas', perfil: 'Estudante de 20 anos que vai a shows com amigos e compra ingresso pelo celular na última hora.' },
      historia: ['Lucas, estudante que decide os programas na última hora', 'comprar o ingresso pelo celular minutos antes', 'não perder o show por falta de planejamento'],
      itens: [
        S('a', 'Como público, quero comprar ingresso online com meia-entrada para garantir minha entrada.', 5, 0, ['g'], 5, 1),
        S('b', 'Como produtora, quero obter o alvará e o laudo dos bombeiros para realizar o evento legalmente.', 5, 1, [], 3),
        S('c', 'Como público, quero ver a programação por palco e horário para montar meu roteiro.', 4, 0, ['g'], 2),
        S('d', 'Como patrocinador, quero minha marca nos telões e nas redes para ter retorno do investimento.', 3, 0, ['g'], 3),
        S('e', 'Como público, quero opções de comida vegana e acessível para passar o dia no festival.', 2, 0, [], 3),
        S('f', 'Como público, quero pagar tudo com pulseira cashless para evitar filas.', 2, 1, [], 8),
        S('g', 'Como produtora, quero fechar a line-up com as bandas para divulgar o festival.', 5, 1, [], 5),
        S('h', 'Como banda, quero saber o horário e o rider técnico do meu show para me preparar.', 3, 0, ['g'], 2)
      ],
      epico: { t: 'Como produtora, quero montar a programação artística para atrair o público certo.', filhos: ['g', 'h'] },
      tecnicas: ['Contratar a empresa de som e luz.', 'Montar a planilha de custos da estrutura.'],
      objetivo: 'Abrir a venda de ingressos com a line-up confirmada.',
      tarefas: {
        boas: [['Escolher a plataforma de venda de ingressos', 2], ['Configurar lotes e meia-entrada', 3], ['Publicar a página de vendas com a line-up', 3], ['Testar a compra completa com cartão e Pix', 2]],
        ruins: [['Criar um app próprio com realidade aumentada no palco', 12, 'gold'], ['Negociar os food trucks', 4, 'fora']]
      }
    },
    {
      id: 'EAD', nome: 'Cursos Livres EAD', area: 'Educação', nivel: 2, vel: 5,
      contexto: 'Uma escola tem um acervo de aulas gravadas e quer vender cursos curtos de qualificação.',
      visao: 'Permitir que profissionais façam cursos curtos de qualificação pelo celular, em aulas de até 10 minutos.',
      just: 'Criar uma nova fonte de receita com 2 mil alunos pagantes no primeiro ano, aproveitando o acervo já gravado.',
      persona: { nome: 'Fernanda', perfil: 'Auxiliar administrativa que estuda no ônibus e quer um certificado para pedir promoção.' },
      historia: ['Fernanda, profissional que estuda no ônibus', 'assistir às aulas pelo celular em trechos curtos', 'aproveitar o tempo do trajeto'],
      itens: [
        S('a', 'Como aluno, quero assistir às aulas em sequência pelo celular para estudar no trajeto.', 5, 0, ['g', 'b'], 5, 1),
        S('b', 'Como aluno, quero criar minha conta para acessar os cursos.', 5, 0, [], 2),
        S('c', 'Como aluno, quero pagar o curso por cartão ou Pix para liberar o acesso completo.', 4, 1, ['b'], 5),
        S('d', 'Como aluno, quero receber um certificado ao concluir para comprovar a qualificação.', 4, 0, ['a'], 3),
        S('e', 'Como aluno, quero baixar as aulas para assistir sem internet e economizar dados.', 3, 1, ['a'], 8),
        S('f', 'Como aluno, quero tirar dúvidas em um fórum por aula para não ficar travado.', 2, 0, ['a'], 3),
        S('g', 'Como professor, quero publicar videoaulas organizadas em módulos para montar um curso.', 5, 0, [], 3),
        S('h', 'Como professor, quero criar um quiz ao final de cada módulo para verificar o aprendizado.', 3, 0, ['g'], 3)
      ],
      epico: { t: 'Como professor, quero gerenciar meus cursos para oferecer conteúdo organizado.', filhos: ['g', 'h'] },
      tecnicas: ['Configurar o servidor de streaming de vídeo.', 'Comprimir os vídeos em várias resoluções.'],
      objetivo: 'Permitir que um aluno cadastrado assista pelo celular às aulas de um curso publicado.',
      tarefas: {
        boas: [['Criar o player de vídeo responsivo', 5], ['Listar as aulas do módulo em sequência', 3], ['Salvar o ponto em que o aluno parou', 3], ['Testar a reprodução em celular com 4G', 3]],
        ruins: [['Criar um mascote animado que comenta as aulas', 8, 'gold'], ['Emitir o certificado em PDF', 4, 'fora']]
      }
    },
    {
      id: 'FOO', nome: 'Food Truck Saudável', area: 'Empreendedorismo', nivel: 2, vel: 5,
      contexto: 'Dois sócios querem validar um food truck de almoço saudável no centro antes de investir em um segundo.',
      visao: 'Oferecer almoço saudável, rápido e com preço justo a quem trabalha no centro, servido em até cinco minutos.',
      just: 'Validar o negócio com investimento inicial de R$ 120 mil e ponto de equilíbrio em oito meses.',
      persona: { nome: 'Cláudia', perfil: 'Analista de escritório com uma hora de almoço; quer comer bem sem enfrentar fila.' },
      historia: ['Cláudia, analista com apenas uma hora de almoço', 'fazer o pedido antes de chegar ao truck', 'comer bem sem enfrentar fila'],
      itens: [
        S('a', 'Como cliente, quero um cardápio enxuto de cinco pratos saudáveis para escolher rápido.', 5, 0, [], 3, 1),
        S('b', 'Como cliente, quero pagar por aproximação para não perder tempo com troco.', 4, 0, [], 2),
        S('c', 'Como cliente, quero fazer o pedido pelo WhatsApp antes de chegar para não pegar fila.', 4, 0, ['a'], 3),
        S('d', 'Como sócio, quero um ponto no centro com fluxo de escritórios para garantir clientela.', 5, 0, ['g'], 3),
        S('e', 'Como cliente, quero um cartão fidelidade que dá um almoço a cada dez para voltar mais vezes.', 2, 0, ['b'], 2),
        S('f', 'Como sócio, quero controlar o estoque diário para reduzir o desperdício de alimentos.', 3, 0, ['a'], 3),
        S('g', 'Como sócio, quero obter a licença da prefeitura para o ponto para operar legalmente.', 5, 1, [], 5),
        S('h', 'Como sócio, quero adaptar o truck às normas da vigilância sanitária para passar na vistoria.', 4, 1, ['g'], 5)
      ],
      epico: { t: 'Como sócio, quero colocar o truck em operação no centro da cidade.', filhos: ['g', 'h'] },
      tecnicas: ['Comprar a chapa e a geladeira industrial.', 'Abrir a conta PJ no banco.'],
      objetivo: 'Definir e testar com clientes reais o cardápio de cinco pratos saudáveis.',
      tarefas: {
        boas: [['Pesquisar os pratos preferidos com 30 trabalhadores do centro', 4], ['Definir fichas técnicas e custos dos cinco pratos', 5], ['Fazer uma degustação com um grupo de clientes', 3], ['Ajustar as receitas a partir da degustação', 3]],
        ruins: [['Criar um cardápio com 40 opções', 6, 'gold'], ['Negociar o ponto com a prefeitura', 5, 'fora']]
      }
    },
    {
      id: 'CAS', nome: 'Casa Inteligente', area: 'IoT', nivel: 3, vel: 4,
      contexto: 'Uma empresa de engenharia quer um kit acessível de automação residencial focado em economia de energia.',
      visao: 'Permitir que moradores controlem a iluminação e o consumo de energia de casa pelo celular, reduzindo a conta de luz.',
      just: 'Oferecer um kit que reduza em até 20% o consumo elétrico residencial, com retorno do investimento em menos de 18 meses.',
      persona: { nome: 'Sérgio', perfil: 'Engenheiro aposentado que mora sozinho; quer economizar e evitar subir escadas à noite.' },
      historia: ['Sérgio, morador que quer economizar energia', 'ver quanto cada cômodo está consumindo', 'decidir onde cortar gastos na conta de luz'],
      itens: [
        S('a', 'Como morador, quero ligar e desligar as luzes pelo celular para não precisar levantar à noite.', 5, 0, ['g'], 3, 1),
        S('b', 'Como morador, quero ver o consumo de energia por cômodo para identificar desperdícios.', 4, 1, ['g'], 5),
        S('c', 'Como morador, quero programar horários para as luzes para simular presença em viagens.', 3, 0, ['a'], 3),
        S('d', 'Como morador, quero comandar as luzes por voz para usar sem o celular na mão.', 2, 1, ['a'], 8),
        S('e', 'Como morador, quero receber alerta de consumo fora do padrão para evitar surpresas na conta.', 3, 0, ['b'], 3),
        S('f', 'Como morador, quero que o sistema funcione sem internet para não ficar no escuro se a rede cair.', 4, 1, [], 5),
        S('g', 'Como morador, quero parear um novo dispositivo pelo app para adicioná-lo à casa.', 5, 1, [], 5),
        S('h', 'Como morador, quero agrupar dispositivos por cômodo para controlar vários de uma vez.', 2, 0, ['g'], 2)
      ],
      epico: { t: 'Como morador, quero gerenciar meus dispositivos para montar minha casa inteligente aos poucos.', filhos: ['g', 'h'] },
      tecnicas: ['Gravar o firmware no microcontrolador ESP32.', 'Configurar o broker MQTT.'],
      objetivo: 'Permitir que o morador pareie uma lâmpada e a controle pelo celular.',
      tarefas: {
        boas: [['Criar o botão liga/desliga por dispositivo', 3], ['Enviar o comando ao dispositivo via MQTT', 5], ['Exibir o estado atual da lâmpada no app', 3], ['Testar o comando com rede instável', 4]],
        ruins: [['Criar efeitos de luz sincronizados com música', 8, 'gold'], ['Desenvolver o gráfico de consumo mensal', 6, 'fora']]
      }
    },
    {
      id: 'MET', nome: 'Estação Meteorológica', area: 'IoT educacional', nivel: 3, vel: 4,
      contexto: 'Uma escola de ensino médio quer uma estação meteorológica própria para aulas de ciências.',
      visao: 'Dar a alunos do ensino médio dados reais de clima da própria escola para aprender ciências por investigação.',
      just: 'Aproximar a escola da feira de ciências estadual e da iniciação científica, com custo de material abaixo de R$ 1.500.',
      persona: { nome: 'Helena', perfil: 'Professora de física que quer usar dados reais em aula, mas tem pouco tempo de preparação.' },
      historia: ['Helena, professora de física com pouco tempo de preparação', 'baixar os dados da semana em planilha', 'montar uma atividade de análise em sala'],
      itens: [
        S('a', 'Como aluno, quero ver as leituras atuais em um painel web para acompanhar o clima da escola.', 5, 0, ['g'], 3, 1),
        S('b', 'Como professora, quero baixar os dados em planilha para usar em atividades.', 4, 0, ['g'], 2),
        S('c', 'Como aluno, quero ver gráficos da última semana para comparar os dias.', 3, 0, ['a'], 3),
        S('d', 'Como professora, quero medir a chuva com um pluviômetro para ampliar as investigações.', 2, 1, [], 5),
        S('e', 'Como diretor, quero exibir o painel na TV do pátio para divulgar o projeto.', 2, 0, ['a'], 2),
        S('f', 'Como professora, quero que a estação funcione com energia solar para instalá-la longe das tomadas.', 3, 1, [], 8),
        S('g', 'Como professora, quero que a estação meça temperatura e umidade a cada 10 minutos para ter dados confiáveis.', 5, 1, [], 5),
        S('h', 'Como professora, quero calibrar os sensores com um termômetro de referência para garantir a precisão.', 4, 0, ['g'], 2)
      ],
      epico: { t: 'Como professora, quero uma estação que colete dados do ambiente para usar em aulas práticas.', filhos: ['g', 'h'] },
      tecnicas: ['Soldar os sensores na placa.', 'Configurar o banco de séries temporais.'],
      objetivo: 'Exibir em um painel web as leituras de temperatura e umidade coletadas pela estação.',
      tarefas: {
        boas: [['Enviar as leituras do sensor ao servidor', 4], ['Criar o painel com os valores atuais', 4], ['Exibir a hora da última leitura', 1], ['Testar o painel com o sensor desligado', 2]],
        ruins: [['Criar previsão do tempo com aprendizado de máquina', 12, 'gold'], ['Montar o suporte do pluviômetro', 3, 'fora']]
      }
    },
    {
      id: 'FRO', nome: 'Rastreamento de Frota', area: 'Telemetria', nivel: 3, vel: 5,
      contexto: 'Uma transportadora não sabe onde estão seus caminhões e recebe dezenas de ligações de clientes por dia.',
      visao: 'Dar à transportadora a localização de cada caminhão em tempo real, para responder clientes e reduzir custos com combustível.',
      just: 'Reduzir em 12% o consumo de combustível e em 30% as ligações de clientes perguntando pela carga.',
      persona: { nome: 'Roberto', perfil: 'Despachante que atende 40 ligações por dia de clientes querendo saber onde está a carga.' },
      historia: ['Roberto, despachante que atende dezenas de ligações por dia', 'ver no mapa onde está cada caminhão', 'responder ao cliente na hora, sem ligar para o motorista'],
      itens: [
        S('a', 'Como despachante, quero ver todos os caminhões em um mapa em tempo real para responder aos clientes.', 5, 0, ['g'], 3, 1),
        S('b', 'Como cliente, quero receber um link de rastreio da minha carga para não precisar ligar.', 4, 0, ['a'], 3),
        S('c', 'Como gestor, quero um alerta quando o caminhão sair da rota para agir rapidamente.', 3, 0, ['a'], 3),
        S('d', 'Como gestor, quero um relatório de consumo de combustível por veículo para reduzir custos.', 4, 1, ['g'], 5),
        S('e', 'Como motorista, quero registrar paradas e entregas pelo celular para comprovar o serviço.', 3, 0, [], 5),
        S('f', 'Como gestor, quero que o rastreador guarde posições sem sinal de celular para não perder o histórico.', 3, 1, ['g'], 5),
        S('g', 'Como técnico, quero instalar o rastreador e vinculá-lo a um caminhão para começar a receber posições.', 5, 1, ['h'], 5),
        S('h', 'Como gestor, quero cadastrar veículos e motoristas para identificar cada rastreador.', 4, 0, [], 2)
      ],
      epico: { t: 'Como gestor, quero equipar a frota com rastreadores para saber onde estão os veículos.', filhos: ['g', 'h'] },
      tecnicas: ['Configurar o servidor de mapas.', 'Definir o protocolo de comunicação GPRS do rastreador.'],
      objetivo: 'Exibir no mapa, em tempo real, a posição dos caminhões já equipados com rastreador.',
      tarefas: {
        boas: [['Receber e armazenar as posições enviadas pelos rastreadores', 5], ['Exibir os caminhões no mapa com a placa', 4], ['Atualizar as posições a cada 30 segundos', 3], ['Testar com rastreador sem sinal', 3]],
        ruins: [['Mostrar os caminhões em 3D com previsão de trânsito', 12, 'gold'], ['Gerar o relatório de combustível', 5, 'fora']]
      }
    }
  ];

  /* Distratores genéricos — usados em todos os projetos */
  MS.GENERICO = {
    visao: [
      { t: 'Construir o produto com as tecnologias mais modernas do mercado: nuvem, microsserviços e inteligência artificial.', fb: 'Descreve a solução técnica, não o resultado desejado para quem usará o produto.' },
      { t: 'Entregar todas as funcionalidades de uma só vez, ao final do projeto, depois de especificar tudo em detalhe.', fb: 'Descreve um modo de execução em cascata, não a visão. O Scrum busca entregar valor desde o início.' }
    ],
    just: [
      { t: 'A equipe quer aprender uma ferramenta nova e este projeto é uma boa oportunidade.', fb: 'Aprendizado da equipe não é necessidade de negócio nem benefício esperado.' },
      { t: 'Um concorrente lançou algo parecido; ainda não estimamos benefícios, mas precisamos ter também.', fb: 'Sem necessidade nem benefício explícitos, não há base para decidir iniciar e continuar o projeto.' }
    ],
    quem: ['o sistema', 'o desenvolvedor do backend'],
    quero: ['que a tabela principal do banco tenha índices', 'tudo funcionando perfeitamente'],
    para: ['concluir a tarefa da Sprint', 'usar a tecnologia mais recente'],
    objetivo: [
      { t: 'Concluir o maior número possível de tarefas técnicas da lista.', fb: 'Volume de atividades não é objetivo: o objetivo expressa o valor que a Sprint entrega.' },
      { t: 'Começar pelos itens mais fáceis para ganhar ritmo.', fb: 'A facilidade de implementação não ordena o backlog: valor, incerteza e dependência, sim.' }
    ]
  };

  /* Eventos da Sprint — 5 sorteados por partida */
  MS.EVENTOS = [
    { tema: 'Reunião diária', sec: 'tempo', t: 'A reunião diária passou a durar 45 minutos, com longas discussões técnicas.',
      ops: ['Limitar a 15 minutos com as três perguntas e tratar os detalhes depois, só com os envolvidos.', 'Manter os 45 minutos: assim todos ficam bem informados.', 'Cancelar as reuniões diárias e trocar por um relatório semanal.'],
      fb: 'A reunião diária tem time-box de 15 minutos: o que concluí, o que concluirei e quais impedimentos enfrento (§5.7).' },
    { tema: 'Impedimento', sec: 'visao', t: 'Um desenvolvedor está há dois dias sem acesso ao ambiente de testes.',
      ops: ['O Scrum Master age para remover o impedimento, que foi apontado na reunião diária.', 'O Product Owner retira a história da Sprint sem conversar com a equipe.', 'Esperar a retrospectiva para tratar o assunto.'],
      fb: 'O Scrum Master facilita o uso do framework e a remoção de impedimentos; a reunião diária os torna visíveis (§5.1).' },
    { tema: 'Mudança', sec: 'aspectos', t: 'O patrocinador pede uma nova funcionalidade urgente no meio da Sprint.',
      ops: ['Registrar o pedido no Product Backlog para o Product Owner avaliar e priorizar nas próximas Sprints.', 'Incluir imediatamente na Sprint atual, estendendo o prazo se for preciso.', 'Recusar: o escopo foi definido no início e não muda.'],
      fb: 'Mudanças são bem-vindas, mas não entram automaticamente na Sprint em andamento: são analisadas e priorizadas no backlog (§5.4).' },
    { tema: 'Time-box', sec: 'tempo', t: 'No último dia faltam 3 pontos para concluir uma história, e a equipe propõe estender a Sprint por mais uma semana.',
      ops: ['Manter a duração; a história não concluída volta ao Product Backlog para ser repriorizada.', 'Estender a Sprint por mais uma semana.', 'Declarar a história concluída para não atrasar o cronograma.'],
      fb: 'A Sprint tem duração fixa. O trabalho não concluído retorna ao backlog e o aprendizado ajusta o próximo planejamento (§5.7).' },
    { tema: 'Gold-plating', sec: 'tempo', t: 'Uma desenvolvedora quer refinar o visual da tela muito além dos critérios de aceitação, “para impressionar”.',
      ops: ['Concluir pelos critérios de aceitação; se a melhoria tiver valor, registrá-la no backlog.', 'Deixar: qualidade extra nunca é demais.', 'Adiar outras histórias para caber o refinamento.'],
      fb: 'O time-boxing evita o gold-plating, a inclusão de melhorias além do necessário (§5.7).' },
    { tema: 'Revisão', sec: 'iterativo', t: 'Na revisão da Sprint, uma história não atende a um dos critérios de aceitação.',
      ops: ['O Product Owner rejeita a história, que volta ao Product Backlog.', 'Aceitar, já que o trabalho foi feito.', 'Corrigir durante a própria revisão e aceitar na hora.'],
      fb: 'O Product Owner aceita ou rejeita as entregas com base nos critérios de aceitação, em Demonstrar e Validar a Sprint (§5.8).' },
    { tema: 'Estimativa', sec: 'processos', t: 'O gerente da área quer converter os pontos em horas: 8 pontos equivaleriam a 8 horas de trabalho.',
      ops: ['Explicar que pontos são estimativa relativa de esforço, sem conversão fixa para horas ou prazo.', 'Aceitar a conversão para facilitar o cronograma.', 'Passar a estimar tudo em dias corridos.'],
      fb: 'Estimativas relativas de histórias e horas de tarefas têm finalidades diferentes; não há conversão fixa (§5.5, processo 5).' },
    { tema: 'Retrospectiva', sec: 'tempo', t: 'Na retrospectiva, a equipe percebe que várias histórias chegaram sem critérios de aceitação claros.',
      ops: ['Definir uma ação de melhoria: refinar e escrever critérios antes do próximo planejamento.', 'Apontar o responsável e registrar a falha na avaliação dele.', 'Não mudar nada: foi só uma Sprint ruim.'],
      fb: 'A retrospectiva transforma a experiência da Sprint em ações de melhoria do modo de trabalhar (§5.2 e §5.7).' },
    { tema: 'Priorização', sec: 'valor', t: 'O cliente afirma que todas as histórias são de “alta prioridade”.',
      ops: ['O Product Owner conversa com o cliente para estabelecer uma ordem por valor, incerteza e dependência.', 'Desenvolver tudo em paralelo.', 'Ordenar pelas histórias mais fáceis de implementar.'],
      fb: 'Mesmo quando tudo parece prioritário, é preciso estabelecer uma ordem dentro desse conjunto (§5.6).' },
    { tema: 'Aprovação', sec: 'processos', t: 'Uma história foi aprovada no planejamento e um colega diz que ela já pode ser considerada entregue.',
      ops: ['Aprovação para planejamento não é aceitação: a entrega só é aceita após demonstração contra os critérios.', 'Concordar: aprovada é o mesmo que aceita.', 'Considerar entregue assim que o código for escrito.'],
      fb: 'Aprovar uma história para a Sprint não equivale a aceitar a entrega pronta (§5.5, processo 3).' },
    { tema: 'Justificativa', sec: 'aspectos', t: 'Um concorrente lançou um recurso que torna pouco relevante uma história do topo do backlog.',
      ops: ['Rever a justificativa e reordenar o backlog; a história pode perder prioridade.', 'Seguir o plano original, que já foi aprovado.', 'Cancelar o projeto inteiro.'],
      fb: 'Um requisito importante pode perder prioridade se deixar de contribuir para o resultado de negócio (§5.4).' }
  ];

  /* Referências teóricas — seções da Unidade 5 (âncoras do arquivo unidade5.html) */
  MS.SECOES = {
    visao: '§5.1 Scrum: ciclos curtos', beneficios: '§5.2 Benefícios', principios: '§5.3 Princípios',
    aspectos: '§5.4 Justificativa e mudanças', processos: '§5.5 Processos do Scrum', valor: '§5.6 Priorização baseada em valor',
    tempo: '§5.7 Time-boxing', iterativo: '§5.8 Desenvolvimento iterativo'
  };
})();

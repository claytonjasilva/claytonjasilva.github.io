# Requisitos — versão inicial

Aplicação estática em português para gestão de requisitos por projeto. Não depende de instalação de bibliotecas, serviços remotos ou chaves de acesso.

## Abrir para testar

Abra `index.html` em um navegador atual. Se o navegador restringir o banco local ao abrir arquivos, sirva esta pasta por HTTP: `python -m http.server 8765` e acesse `http://localhost:8765`.

Os dados são separados por endereço de origem e perfil do navegador. Mudar do arquivo local para localhost ou GitHub Pages não transfere dados automaticamente: exporte e importe o projeto.

## Fluxo de trabalho

1. Crie um projeto com objetivos e produto, serviço ou resultado a entregar.
2. Cadastre os elementos da EAP. Use “Decompor” para detalhar qualquer elemento, sem um nível mínimo ou máximo obrigatório.
3. Identifique requisitos com definição, descrição, classificação e elemento da EAP. O sistema gera REQ001, REQ002 e assim por diante, por projeto.
4. Refine responsáveis, dependências, concorrência, prioridade, avaliação de viabilidade, medida e teste. O registro continua provisório.
5. Confira consistência, completude e medida/teste; selecione “Validar” e confirme a revisão. A aplicação verifica preenchimento e registra a declaração da equipe: não certifica automaticamente a qualidade técnica do texto.
6. Cadastre atividades ou marcos vinculados à EAP. Associe cada requisito a uma atividade do mesmo elemento para planejar sua verificação. Registre resultado, data e evidência; depois, o aceite.
7. Gere a matriz quando todos os requisitos estiverem validados. A geração encerra o ciclo e preserva os dados daquela versão.
8. Abra um novo ciclo para acrescentar requisitos, reabrir especificações ou registrar novas verificações. Gere outra matriz para preservar a revisão.

## Decisões da primeira versão

- Uma classificação principal por requisito: operacional, funcional, não funcional ou normativo.
- Origem e aplicabilidade determinadas pela EAP; sem campo de justificativa.
- Histórico da especificação com criação e datas de modificação, sem versões completas intermediárias.
- Matrizes preservam cópias completas dos dados no momento da geração.
- Dependências não podem formar ciclos. Prioridade alta, média ou baixa é exigida na validação quando há concorrentes.
- Uma atividade de verificação, um resultado e um aceite atuais por requisito. Matrizes anteriores preservam resultados anteriores que já tenham sido incluídos nelas.
- A atividade e a data prevista podem ser definidas depois da validação da especificação. São obrigatórias ao registrar verificação.
- Alterações de objetivos, entrega ou elementos da EAP tornam as especificações afetadas provisórias para revisão.
- Reabertura da especificação exige nova validação e limpa verificação e aceite atuais. Cópias anteriores em matrizes não são alteradas.
- Aceite exige verificação aprovada. Uma verificação reprovada pode ser corrigida e registrada novamente.
- Importações criam uma cópia independente para não sobrescrever projetos existentes.
- Responsáveis são nomes declarados, sem autenticação ou assinatura digital.

## Dados e backup

IndexedDB guarda os projetos neste navegador. Os requisitos não são enviados para o GitHub. “Salvar cópia do projeto” exporta um JSON contendo EAP, requisitos, atividades e matrizes; “Importar projeto” recupera os dados. Faça backup regularmente, especialmente antes de limpar dados do navegador ou mudar de computador.

CSV exporta a matriz completa para abertura em planilhas, com codificação UTF-8 e separador ponto e vírgula. JSON é o formato para reabrir e continuar o projeto.

Não há edição simultânea compartilhada. O salvamento detecta quando a cópia do projeto foi alterada em outra aba; nesse caso, reabra o projeto pelo seletor antes de editar novamente.

## GitHub Pages

Copie esta pasta inteira para o diretório desejado no repositório já publicado pelo GitHub Pages. Preserve os quatro arquivos `index.html`, `style.css`, `model.js` e `app.js` juntos. Os caminhos dos recursos são relativos, permitindo publicação em uma subpasta. Não é preciso alterar a página inicial do site.

Nenhum commit, push ou publicação foi realizado nesta preparação. Os arquivos JSON exportados dos projetos não precisam ser incluídos no repositório.

## Importação de EAP do MS Project

Na aba 02, use “Importar a EAP do MS Project”, junto a “Documentação de escopo”. Salve o projeto no MS Project como XML e selecione o arquivo. O formato .mpp não é lido diretamente. A prévia permite conferir antes de acrescentar elementos. São preservados WBS (ou OutlineNumber), nomes, notas, hierarquia por OutlineLevel e identificação de marcos. A tarefa-resumo de nível zero e linhas nulas são ignoradas. Não são importados recursos, dependências de cronograma ou requisitos automaticamente. Revise as tarefas para distinguir entregáveis de atividades.

A importação aceita até 20 MB e 5.000 elementos; hierarquias incompletas e códigos duplicados ou já existentes são rejeitados sem alteração dos dados. Em ciclos encerrados, abra um novo ciclo antes de importar. Preserve também project-import.js junto aos arquivos da aplicação.

Ao criar um elemento, o seletor do elemento superior mostra código e nome. O código sugerido usa o prefixo do pai e o próximo número disponível; pode ser editado. A mudança de pai atualiza a sugestão enquanto o usuário não tiver personalizado o código.

## Exclusão de projeto

“Apagar projeto” remove apenas o projeto selecionado deste navegador, incluindo EAP, requisitos, atividades e matrizes, após confirmação pelo nome. Exporte uma cópia JSON antes se quiser preservar os dados. Outros projetos e arquivos exportados não são alterados. A verificação de revisão impede que uma aba desatualizada sobrescreva ou recrie um projeto apagado.

## Marcos na EAP

Crie ou edite o elemento em “EAP e entregáveis” e marque “Marco (atividade de duração zero)”. Ele mantém código, nome, descrição e elemento superior, como qualquer atividade, e aparece identificado na árvore e nos seletores. Desmarcar a opção torna o elemento uma atividade comum, preservando código, vínculos e hierarquia. Elementos antigos sem a propriedade são tratados como não marcos; marcos já importados do Project conservam sua marcação.

A importação XML usa o campo Milestone do MS Project. A marcação é preservada nos backups JSON, nas versões da matriz e na coluna “Marco na EAP” do CSV. A aba de verificação serve para planejar testes dos elementos; a definição do marco é feita no cadastro da EAP.

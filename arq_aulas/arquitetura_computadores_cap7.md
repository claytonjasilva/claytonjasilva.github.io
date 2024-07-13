# Cap. 7 - Nível do Sistema Operacional

## 7.1 Visão geral

É a camada que contém todas as instruções de nível ISA – impacto sobre a portabilidade dos S.O. bem como o conjunto de novas instruçõese o conjunto completo de instruções disponíveis para os programadores de aplicação: chamadas de sistema.

O nível do sistema operacional é sempre interpretado.

Seus principais objetivos são:
- **Conveniência:** Tornar o uso do computador mais conveniente.
- **Eficiência:** Permitir uma utilização mais eficiente dos recursos do sistema.

Os principais elementos constituintes do Sistema Operacional são:
- **Núcleo (Kernel)**
- **Código de Inicialização (Boot Code)**
- **Drivers**
- **Programas Utilitários**



## Chamadas de Sistema
- Mecanismo de interrupção utilizado pelas aplicações para serem atendidos pelo sistema.
- Geralmente oferecida às aplicações pela biblioteca do sistema (system library): prepara os parâmetros, invoca a chamada e devolve os resultados.
- O conjunto de chamadas de sistema define a API (Application Programming Interface).

## Atividades Típicas do SO
1. **Criação de Programas:**
   - Auxiliar o programador no desenvolvimento de programas.
   - Fornecer programas utilitários (ex.: compactação de dados, aumento de desempenho, limpeza de discos rígidos, acesso à internet).

2. **Execução de Programas:**
   - Carregar instruções e dados na memória.
   - Inicializar arquivos e dispositivos de entrada e saída.

3. **Gerenciar Dispositivos de Entrada e Saída:**
   - Encarga-se do gerenciamento desses dispositivos que possuem um conjunto peculiar de instruções.

4. **Gerenciar Arquivos:**
   - Controla o formato dos arquivos no meio de armazenamento, caminho de diretórios, etc.

5. **Gerenciar Acesso ao Sistema:**
   - Em sistemas compartilhados, controla o acesso ao sistema e a recursos específicos.
   - Fornece proteção contra uso não autorizado tanto para recursos quanto para dados de usuários.

6. **Monitoramento:**
   - Monitora parâmetros de desempenho.

### Código de Inicialização
- Reconhecer os dispositivos instalados, testá-los e configurá-los adequadamente para seu uso posterior.
- Carregar o núcleo do sistema operacional em memória e iniciar sua execução.

### Níveis de Privilégio
- **Núcleo**
- **Usuário**

## Áreas do Sistema Operacional
1. **Gestão de Processos:**
   - Criar, carregar código, terminar, esperar, ler/mudar atributos.

2. **Gestão da Memória:**
   - Alocar/liberar/modificar áreas de memória.

3. **Gestão de Arquivos:**
   - Criar, remover, abrir, fechar, ler, escrever, ler/mudar atributos.

4. **Comunicação:**
   - Criar/destruir canais de comunicação, receber/enviar dados.

5. **Gestão de Dispositivos:**
   - Ler/mudar configurações, ler/escrever dados.

6. **Gestão do Sistema:**
   - Ler/mudar data e hora, desligar/suspender/reiniciar o sistema.

## Tarefas x Processos
- **Processo:** Unidade de contexto, contêiner de recursos utilizados por uma ou mais tarefas para sua execução.
- Um processo pode conter várias tarefas que compartilham esses recursos.

## Modelo de Processo com Cinco Estados
- Processos podem ser criados e encerrados dinamicamente.
- Para executar processamento paralelo, é necessário uma chamada de sistema para criar um novo processo.

## Bloco de Controle de Processos do Sistema Operacional
- Identificador: Cada processo tem um identificador distinto.
- Estado: Um dos cinco estados possíveis.
- Contexto: Dados contidos nos registradores do processador e do contador de programas.
- Estado de E/S: Dados sobre os requisitos pendentes de E/S, dispositivos alocados, lista de arquivos alocados.
- Contabilidade: Quantidade de tempo do processador, tempo total já usado pelo processo, limites de tempo de execução, contabilização de uso dos recursos.

## Escalonamento de Processos
- **Escalonamento de Longo Prazo:** Decisão de acrescentar um novo processo ao conjunto de processos a serem executados pelo processador.
- **Escalonamento de Médio Prazo:** Decisão de acrescentar um processo a um conjunto de processos que estão parcial ou completamente carregados na memória principal.
- **Escalonamento de Curto Prazo:** Decisão sobre qual dos processos disponíveis na memória principal será executado pelo processador, realizada frequentemente pelo despachante (dispatcher).

## Gerência de Memória
- **Memória Virtual:** Uso de disco como memória lógica.
- **Paginação:** Organização dos trechos de programa em páginas de tamanho fixo.
- **Segmentação:** Prever muitos espaços de endereço virtual independentes, denominados segmentos.

## Gerência de Dispositivos
- **Interrupções:** Comunicação controlador-processador através de requisições de interrupção (IRq).
- **Drivers:** Módulos de código específicos para acessar dispositivos físicos.

## Gerência de Arquivos
- **Arquivo:** Sequência de bytes armazenada em um dispositivo físico não volátil.
- **Atributos ou Metadados de Arquivos:**
  - Nome
  - Tipo
  - Tamanho
  - Datas
  - Proprietário (sistemas multiusuários)
  - Permissões de acesso
  - Localização

## Operações de Arquivos
- **Criar:** Alocar espaço e definir atributos.
- **Abrir:** Verificar existência, permissões, localização de conteúdo, criar referência em memória.
- **Ler/Escrever:** Transferir dados para/de uma área de memória.
- **Fechar:** Liberar as estruturas de gerência.
- **Remover:** Eliminar o arquivo do dispositivo.
- **Alterar Atributos:** Modificar valores dos atributos.

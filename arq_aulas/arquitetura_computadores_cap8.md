# Cap. 8 - Nível do Sistema Operacional

## 8.1 Visão geral

É a camada que contém todas as instruções de nível ISA – impacto sobre a portabilidade dos S.O. bem como o conjunto de novas instruçõese o conjunto completo de instruções disponíveis para os programadores de aplicação: chamadas de sistema.

O nível do sistema operacional é sempre interpretado. Seus principais objetivos são:
- **Conveniência:** Tornar o uso do computador mais conveniente.
- **Eficiência:** Permitir uma utilização mais eficiente dos recursos do sistema.

Os principais elementos constituintes do Sistema Operacional são:
- **Núcleo (Kernel)**
- **Código de Inicialização (Boot Code)**
- **Drivers**
- **Programas Utilitários**

### 8.1.1 O Núcleo do Sistema Operacional

O núcleo, ou kernel, é o componente central do sistema operacional. É responsável por gerenciar os recursos do sistema e facilitar a interação entre o hardware e o software. Um entendimento profundo do kernel é fundamental para compreender como os sistemas operacionais funcionam e como eles proporcionam um ambiente eficiente e seguro para a execução de aplicações.

O kernel desempenha várias funções críticas, incluindo:

#### 1. Gestão de Processos
O kernel é responsável pela criação, escalonamento e terminação de processos. Ele gerencia o tempo de CPU alocado a cada processo, garantindo que múltiplos processos possam ser executados simultaneamente de forma eficiente através de técnicas como o escalonamento de curto prazo, médio prazo e longo prazo.

#### 2. Gestão da Memória
O kernel controla a alocação e desalocação de memória para diferentes processos. Ele utiliza mecanismos como a paginação e a segmentação para garantir que os processos tenham acesso à memória de forma organizada e eficiente, além de implementar a memória virtual para permitir que o sistema operacional utilize mais memória do que a fisicamente disponível.

#### 3. Gestão de Dispositivos
A interação com dispositivos de entrada e saída (I/O) é mediada pelo kernel. Ele utiliza drivers específicos para cada dispositivo, que são módulos de código que permitem ao sistema operacional se comunicar com o hardware de maneira padronizada e eficiente.

#### 4. Gestão de Arquivos
O kernel oferece um sistema de arquivos que organiza os dados em estruturas hierárquicas, facilitando a criação, leitura, escrita e exclusão de arquivos. Ele garante que os dados sejam armazenados e recuperados de forma confiável e eficiente.

#### 5. Segurança e Proteção
O kernel implementa mecanismos de segurança para proteger os recursos do sistema contra acesso não autorizado. Ele controla o acesso aos arquivos, dispositivos e memória, assegurando que apenas os processos e usuários autorizados possam realizar operações específicas.

### 8.1.2 Estrutura

O kernel pode ser estruturado de diferentes maneiras, incluindo:

#### 1. Monolítico
Em um kernel monolítico, todos os componentes do sistema operacional estão integrados em um único grande bloco de código executável. Isso pode oferecer desempenho mais rápido devido à menor sobrecarga de comunicação entre os componentes, mas pode tornar a manutenção e a adição de novos recursos mais complexas.

#### 2. Micronúcleo (Microkernel)
Um micronúcleo minimiza a quantidade de código executado no modo kernel, movendo a maior parte das funcionalidades do sistema operacional para processos no espaço do usuário. Isso pode aumentar a segurança e a estabilidade, pois falhas nos componentes do sistema operacional não afetam diretamente o kernel.

#### 3. Híbrido
Kernels híbridos combinam elementos de ambos os modelos monolítico e micronúcleo. Eles buscam equilibrar desempenho e modularidade, permitindo que partes críticas do sistema operacional sejam executadas no espaço do kernel, enquanto outras partes são executadas no espaço do usuário.

O kernel é a espinha dorsal de um sistema operacional, gerenciando recursos e fornecendo a interface entre o hardware e o software. Seu design e implementação têm um impacto significativo no desempenho, segurança e funcionalidade do sistema. Entender como o kernel funciona é essencial para qualquer profissional de computação, pois ele forma a base sobre a qual todos os outros componentes do sistema operam.



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

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

O kernel pode ser estruturado de diferentes maneiras, incluindo:

#### 1. Monolítico
Em um kernel monolítico, todos os componentes do sistema operacional estão integrados em um único grande bloco de código executável. Isso pode oferecer desempenho mais rápido devido à menor sobrecarga de comunicação entre os componentes, mas pode tornar a manutenção e a adição de novos recursos mais complexas.

#### 2. Micronúcleo (Microkernel)
Um micronúcleo minimiza a quantidade de código executado no modo kernel, movendo a maior parte das funcionalidades do sistema operacional para processos no espaço do usuário. Isso pode aumentar a segurança e a estabilidade, pois falhas nos componentes do sistema operacional não afetam diretamente o kernel.

#### 3. Híbrido
Kernels híbridos combinam elementos de ambos os modelos monolítico e micronúcleo. Eles buscam equilibrar desempenho e modularidade, permitindo que partes críticas do sistema operacional sejam executadas no espaço do kernel, enquanto outras partes são executadas no espaço do usuário.

O kernel é a espinha dorsal de um sistema operacional, gerenciando recursos e fornecendo a interface entre o hardware e o software. Seu design e implementação têm um impacto significativo no desempenho, segurança e funcionalidade do sistema. Entender como o kernel funciona é essencial para qualquer profissional de computação, pois ele forma a base sobre a qual todos os outros componentes do sistema operam.

## 8.1.2 Código de Inicialização do Sistema Operacional

O código de inicialização do sistema operacional é responsável por preparar o ambiente necessário para que o sistema operacional possa ser carregado e executado. Este processo é fundamental para garantir que todos os componentes do sistema estejam funcionando corretamente antes que o controle seja entregue ao sistema operacional.

O **bootloader** é um programa essencial na sequência de inicialização do sistema. É carregado pela BIOS ou pelo firmware do sistema e tem como principais responsabilidades:

1. **Carregar o Kernel:**
   - O bootloader localiza o kernel do sistema operacional no disco de armazenamento e o carrega na memória principal (RAM).

2. **Configurar o Ambiente:**
   - Ele configura o ambiente de execução inicial, incluindo a configuração dos modos de operação do processador e a inicialização de dispositivos básicos.

3. **Transferência de Controle:**
   - Após carregar o kernel e configurar o ambiente, o bootloader transfere o controle para o kernel, permitindo que o sistema operacional inicie sua execução.

Existem diversos tipos de bootloaders, entre eles:
- **BIOS Bootloaders:** Tradicionalmente usados em sistemas baseados em BIOS.
- **UEFI Bootloaders:** Utilizados em sistemas modernos baseados em UEFI, oferecendo mais funcionalidades e uma interface gráfica.

UEFI, ou *Unified Extensible Firmware Interface*, é uma interface de firmware moderna que se destina a substituir o BIOS, que foi amplamente utilizado desde os primeiros dias da computação pessoal. A especificação UEFI foi desenvolvida para superar as limitações do BIOS e fornecer um ambiente mais robusto e flexível para a inicialização do sistema. As principais Funcionalidades da UEFI são

### 1. Interface Gráfica e Navegação Melhorada
- **Interface Gráfica:** Diferente do BIOS, que possui uma interface de texto simples, a UEFI pode oferecer uma interface gráfica mais avançada, facilitando a navegação e a configuração.
- **Suporte a Mouse:** A UEFI suporta o uso do mouse, tornando a interação com as configurações do firmware mais intuitiva.

### 2. Suporte para Discos Grandes
- **Tabelas de Partição GPT:** A UEFI suporta o esquema de particionamento GPT (GUID Partition Table), que permite o uso de discos rígidos maiores que 2 TB, uma limitação comum no BIOS que utiliza MBR (Master Boot Record).
- **Mais Partições:** Com GPT, é possível ter mais de quatro partições primárias em um único disco, ao contrário do MBR que é limitado a quatro.

### 3. Tempos de Boot Mais Rápidos
- **Inicialização Rápida:** A UEFI pode inicializar o sistema operacional mais rapidamente do que o BIOS, graças a otimizações que reduzem o tempo necessário para executar os testes e carregar o SO.
- **Secure Boot:** Esta funcionalidade impede que software não autorizado (malware) seja carregado durante o processo de boot, aumentando a segurança do sistema.

### 4. Flexibilidade e Atualizações
- **Drivers Modulares:** A UEFI permite o uso de drivers modulares que podem ser atualizados independentemente do firmware principal, proporcionando maior flexibilidade e compatibilidade com novos dispositivos.
- **Firmware Atualizável:** A UEFI facilita a atualização do firmware, permitindo que os fabricantes implementem melhorias e correções de segurança mais facilmente.

### Comparação entre UEFI e BIOS

| Característica             | UEFI                                         | BIOS                                 |
|----------------------------|----------------------------------------------|--------------------------------------|
| Interface                  | Gráfica, suporta mouse                       | Texto, teclado apenas                |
| Suporte a Discos           | GPT (discos > 2 TB)                          | MBR (discos ≤ 2 TB)                  |
| Número de Partições        | Mais de quatro                               | Até quatro                           |
| Tempo de Boot              | Mais rápido                                  | Mais lento                           |
| Segurança                  | Secure Boot                                  | Não possui Secure Boot               |
| Atualizações               | Mais fácil e flexível                        | Mais difícil                         |

A UEFI representa um avanço significativo em relação ao BIOS tradicional, oferecendo uma interface mais amigável, melhor suporte para hardware moderno, tempos de inicialização mais rápidos e recursos de segurança aprimorados. Essas melhorias tornam a UEFI a escolha preferida para sistemas modernos, proporcionando uma base mais sólida e segura para a operação de computadores pessoais e servidores.

## 8.1.3 Drivers como Componentes do Sistema Operacional

Drivers são programas que permitem ao sistema operacional se comunicar com hardware específico. Eles são essenciais para o funcionamento correto dos dispositivos conectados ao computador, desde teclados e mouses até placas de vídeo e impressoras. Sem drivers, o sistema operacional não seria capaz de entender como interagir com o hardware, resultando em dispositivos inoperantes.

As principais funções dos Drivers são

### 1. Intermediação entre Hardware e Software
Os drivers atuam como intermediários entre o hardware e o software do sistema operacional. Eles traduzem comandos de alto nível do sistema operacional em comandos específicos que o hardware pode entender e executar.

### 2. Abstração de Hardware
Drivers fornecem uma camada de abstração, permitindo que o sistema operacional e os aplicativos interajam com o hardware sem precisar conhecer os detalhes específicos de cada dispositivo. Isso simplifica o desenvolvimento de software e melhora a compatibilidade.

### 3. Gerenciamento de Dispositivos
Os drivers gerenciam a comunicação com os dispositivos, controlando a transferência de dados entre o hardware e o sistema operacional. Eles são responsáveis por tarefas como:
- **Inicialização do dispositivo:** Configuração inicial e preparação do dispositivo para uso.
- **Transferência de dados:** Movimentação de dados entre o dispositivo e a memória do sistema.
- **Tratamento de interrupções:** Resposta a sinais de interrupção enviados pelo hardware para indicar que uma operação foi concluída ou que há dados disponíveis para processamento.

### 4. Suporte a Funcionalidades Específicas
Drivers habilitam funcionalidades específicas dos dispositivos que o sistema operacional e os aplicativos podem utilizar. Por exemplo:
- **Drivers de impressora:** Permitem a impressão de documentos, controlando a fila de impressão e a comunicação com a impressora.
- **Drivers de placa de vídeo:** Habilitam a renderização de gráficos, permitindo ao sistema operacional e aos aplicativos exibir imagens na tela com alta performance.

### 5. Atualizações e Melhorias
Drivers podem ser atualizados para corrigir bugs, melhorar a performance e adicionar novas funcionalidades. Essas atualizações são essenciais para manter o sistema operacional e os dispositivos funcionando de forma otimizada e segura.

Os tipos de Drivers são

### 1. Drivers de Dispositivo
Drivers de dispositivo são específicos para cada tipo de hardware, como impressoras, mouses, teclados, câmeras, etc. Cada dispositivo geralmente requer um driver específico desenvolvido pelo fabricante do hardware.

### 2. Drivers de Kernel
Drivers de kernel operam em nível de núcleo do sistema operacional e têm acesso direto ao hardware. Eles são responsáveis por tarefas críticas e precisam ser altamente confiáveis e eficientes.

### 3. Drivers de Usuário
Drivers de usuário operam em modo de usuário e têm acesso limitado ao hardware. Eles são usados para dispositivos que não requerem acesso de baixo nível ao hardware e oferecem maior segurança, pois erros nesses drivers não comprometem a estabilidade do sistema.

Drivers são componentes fundamentais do sistema operacional, responsáveis por permitir a comunicação eficaz entre o hardware e o software. Eles garantem que os dispositivos funcionem corretamente, proporcionando uma interface padronizada para interação e facilitando a atualização e melhoria contínua dos sistemas computacionais.



## Self-Test (POST)
O Power-On Self-Test (POST) é um conjunto de testes realizados pelo firmware do sistema (BIOS ou UEFI) durante a inicialização. Seus objetivos principais são:

### Funções do Self-Test
1. **Verificação de Hardware:**
   - O POST verifica a integridade e a funcionalidade dos componentes de hardware do sistema, como memória RAM, processador, dispositivos de armazenamento e periféricos.

2. **Diagnóstico de Problemas:**
   - Se forem encontrados problemas, o POST pode exibir códigos de erro ou sinais sonoros (beeps) para indicar a natureza do problema, facilitando o diagnóstico e a solução.

### Processo do POST
1. **Inicialização do Firmware:**
   - O firmware do sistema é carregado e inicia os testes.

2. **Verificação dos Componentes:**
   - Componentes críticos são verificados, incluindo memória, CPU, e dispositivos de I/O.

3. **Indicação de Status:**
   - O status dos testes é indicado através de mensagens na tela ou códigos de beep.

## Memória que Armazena o Bootloader
O bootloader é geralmente armazenado em uma memória não volátil, que retém seu conteúdo mesmo quando o sistema está desligado. Tipos comuns de memória que armazenam o bootloader incluem:

### Tipos de Memória
1. **ROM (Read-Only Memory):**
   - Memória que é pré-programada e não pode ser alterada. Usada em sistemas mais antigos.

2. **Flash Memory:**
   - Tipo de memória regravável que pode ser atualizada. Usada em sistemas modernos para armazenar firmware, incluindo o bootloader.

### Vantagens da Flash Memory
- **Atualizável:** Permite atualizações de firmware sem substituir o hardware.
- **Confiável:** Mantém os dados armazenados mesmo sem energia.

## Conclusão
O código de inicialização do sistema operacional é um componente crucial que prepara o ambiente para a execução do sistema. O bootloader e o POST desempenham papéis essenciais nesse processo, garantindo que o sistema esteja pronto para funcionar corretamente. A escolha da memória para armazenar o bootloader é igualmente importante para a confiabilidade e a flexibilidade do sistema.

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

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

## 8.2 Elementos do SO

### 8.2.1 O Núcleo do Sistema Operacional

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

## 8.2.2 Código de Inicialização do Sistema Operacional

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

## 8.2.3 Drivers como Componentes do Sistema Operacional

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

## 8.2.4 Programas Utilitários como Componentes do Sistema Operacional

Programas utilitários são ferramentas de software fornecidas pelo sistema operacional ou por terceiros que ajudam a gerenciar, manter e otimizar o funcionamento do computador. Eles desempenham uma ampla variedade de funções que complementam o núcleo do sistema operacional, proporcionando aos usuários e administradores maior controle sobre o sistema e seus recursos.

As principais funções dos Programas Utilitários são

### 1. Manutenção do Sistema
Programas utilitários auxiliam na manutenção do sistema, garantindo que ele funcione de maneira eficiente e sem problemas. Exemplos incluem:
- **Desfragmentadores de disco:** Reorganizam os dados no disco rígido para melhorar a velocidade de acesso e desempenho do sistema.
- **Limpeza de disco:** Removem arquivos temporários, caches e outros dados desnecessários para liberar espaço no disco e melhorar o desempenho.

### 2. Diagnóstico e Monitoramento
Esses utilitários ajudam a diagnosticar problemas e monitorar o desempenho do sistema, fornecendo informações essenciais para a solução de problemas. Exemplos incluem:
- **Monitores de sistema:** Exibem informações sobre o uso da CPU, memória, disco e rede em tempo real.
- **Verificadores de integridade do disco:** Verificam e corrigem erros no sistema de arquivos e setores defeituosos no disco rígido.

### 3. Segurança
Programas utilitários de segurança protegem o sistema contra ameaças e acessos não autorizados. Exemplos incluem:
- **Antivírus e antimalware:** Detectam e removem software malicioso que pode comprometer a segurança do sistema.
- **Firewalls:** Monitoram e controlam o tráfego de rede para prevenir acessos não autorizados.

### 4. Gerenciamento de Arquivos
Esses utilitários facilitam a organização, manipulação e acesso aos arquivos no sistema. Exemplos incluem:
- **Gerenciadores de arquivos:** Oferecem uma interface para navegar, copiar, mover e excluir arquivos e pastas.
- **Compactadores de arquivos:** Comprimem e descomprimem arquivos para economizar espaço em disco e facilitar a transferência.

### 5. Backup e Recuperação
Programas utilitários de backup e recuperação ajudam a proteger dados importantes contra perda. Exemplos incluem:
- **Software de backup:** Fazem cópias de segurança dos dados, permitindo sua restauração em caso de falhas ou perda de dados.
- **Utilitários de recuperação de dados:** Recuperam dados apagados acidentalmente ou perdidos devido a falhas no sistema.

Alguns exemplos de Programas Utilitários são
- **CCleaner:** Um popular utilitário de limpeza de sistema que remove arquivos desnecessários e otimiza o desempenho.
- **WinRAR/7-Zip:** Ferramentas de compactação que permitem comprimir e descomprimir arquivos.
- **Task Manager (Gerenciador de Tarefas):** Um utilitário do Windows que permite aos usuários monitorar e gerenciar processos em execução.
- **Norton Utilities:** Um conjunto de ferramentas de manutenção de sistema que inclui desfragmentador de disco, verificador de registro e muito mais.

Programas utilitários são componentes essenciais do ecossistema do sistema operacional, fornecendo ferramentas que ajudam na manutenção, diagnóstico, segurança, gerenciamento de arquivos e backup do sistema. Eles complementam as funções básicas do sistema operacional, oferecendo aos usuários uma forma de manter e otimizar seus sistemas de maneira eficiente e segura.

## 8.3 Self-Test (POST)

O Power-On Self-Test (POST) é um conjunto de testes realizados pelo firmware do sistema (BIOS ou UEFI) durante a inicialização. Suas principais funções são:

1. **Verificação de Hardware:**
   - O POST verifica a integridade e a funcionalidade dos componentes de hardware do sistema, como memória RAM, processador, dispositivos de armazenamento e periféricos.

2. **Diagnóstico de Problemas:**
   - Se forem encontrados problemas, o POST pode exibir códigos de erro ou sinais sonoros (beeps) para indicar a natureza do problema, facilitando o diagnóstico e a solução.

O processo do POST consiste na **inicialização do firmware**, que é carregado e iniciados os testes. Na sequência, realiza-se a **verificação dos componentes.** Os componentes críticos são verificados, incluindo memória, CPU, e dispositivos de I/O. O status dos testes é indicado através de mensagens na tela ou códigos de beep.

O bootloader é geralmente armazenado em uma memória não volátil, que retém seu conteúdo mesmo quando o sistema está desligado. Tipos comuns de memória que armazenam o bootloader incluem ROM (ou flash). 

O código de inicialização do sistema operacional é um componente crucial que prepara o ambiente para a execução do sistema. O bootloader e o POST desempenham papéis essenciais nesse processo, garantindo que o sistema esteja pronto para funcionar corretamente. A escolha da memória para armazenar o bootloader é igualmente importante para a confiabilidade e a flexibilidade do sistema.

## 8.4 Chamadas de Sistema

As Chamadas de Sistema (System Calls) são interfaces programadas no kernel do sistema operacional. Elas fornecem uma forma para que os programas de usuário solicitem serviços diretamente ao kernel, que possui acesso privilegiado ao hardware e a outros recursos do sistema. Esse mecanismo é crucial para a operação segura e eficiente dos sistemas operacionais.

Trata-se de um mecanismo de interrupção utilizado pelas aplicações para serem atendidos pelo sistema. Geralmente oferecida às aplicações pela biblioteca do sistema (system library): prepara os parâmetros, invoca a chamada e devolve os resultados. O conjunto de chamadas de sistema define a API (Application Programming Interface).

Permitem que o software de aplicação execute operações de baixo nível de forma segura e controlada. Exemplos dessas operações incluem:

- Operações de entrada/saída
- Gerenciamento de processos
- Comunicação entre processos
- Controle de dispositivos

Algumas categorias comuns de Chamadas de Sistema são

### 1. Gerenciamento de Processos
- **Criação e Término:** `fork()`, `exit()`
- **Controle de Processo:** `wait()`, `exec()`

### 2. Gerenciamento de Arquivos
- **Manipulação de Arquivos:** `open()`, `close()`, `read()`, `write()`
- **Informação de Arquivos:** `stat()`, `chmod()`, `chown()`

### 3. Gerenciamento de Dispositivos
- **Manipulação de Dispositivos:** `ioctl()`, `read()`, `write()`
- **Controle de Dispositivos:** `mount()`, `umount()`

### 4. Comunicação
- **Comunicação entre Processos:** `pipe()`, `shmget()`, `shmat()`
- **Sinalização:** `signal()`, `kill()`

### 5. Informações do Sistema
- **Relatórios de Estado:** `getpid()`, `alarm()`, `sleep()`
- **Controle de Sistema:** `syslog()`, `settimeofday()`

Quando uma aplicação faz uma chamada de sistema, a execução do programa passa do modo usuário para o modo kernel. O modo kernel permite que o sistema operacional execute operações com privilégios elevados, que são necessários para acessar diretamente o hardware e outros recursos críticos do sistema.

Um exemplo clássico de chamada de sistema é a leitura de um arquivo:

1. Aplicativo faz uma chamada de sistema `read()`.
2. O controle é passado do modo usuário para o modo kernel.
3. O kernel executa a operação de leitura do arquivo do sistema de arquivos e coloca os dados em um buffer.
4. O controle é devolvido ao modo usuário e o aplicativo continua sua execução com os dados lidos.

As Chamadas de Sistema fornecem uma camada de abstração que permite aos desenvolvedores de aplicações interagir com o hardware de forma segura e controlada, sem precisar conhecer os detalhes internos do hardware. Isso garante que as operações críticas sejam executadas de maneira consistente e segura, protegendo a integridade do sistema.

## 8.5 Áreas do Sistema Operacional

As áreas típias do Sistema Operacional são **Gestão de Processos**, executando tarefas como criar, carregar código, terminar, esperar, ler/mudar atributos; **Gestão da memória**, executando tarefas como alocar/liberar/modificar áreas de memória; **Gestão de Arquivos**, executando tarefas como criar, remover, abrir, fechar, ler, escrever, ler/mudar atributos; **Comunicação**, executando tarefas como criar/destruir canais de comunicação, receber/enviar dados; **Gestão de dispositivos**, executando tarefas como ler/mudar configurações, ler/escrever dados; e **Gestão do sistema**, executando tarefas como ler/mudar data e hora, desligar/suspender/reiniciar o sistema.

### 8.5.1 Gestão de processos

Um **processo** é uma unidade de contexto, contêiner de recursos utilizados por uma ou mais tarefas para sua execução, que pode conter várias tarefas que compartilham esses recursos.

Uma das formas de modelar um processo é através do chamado modelo com cinco estados:
- Processos podem ser criados e encerrados dinamicamente.
- Para executar processamento paralelo, é necessário uma chamada de sistema para criar um novo processo.

O modelo de cinco estados é uma abordagem clássica para a gestão de processos em sistemas operacionais. Este modelo descreve as possíveis condições ou estados em que um processo pode se encontrar durante seu ciclo de vida, assim como as transições entre esses estados. Compreender este modelo é fundamental para entender como os sistemas operacionais gerenciam a execução de múltiplos processos de maneira eficiente e eficaz.

Os estados do modelo de cinco estados são os seguintes:

#### 1. **Estado Novo (New)**
- **Descrição:** Quando um processo é criado, ele entra no estado "Novo". Neste estado, o processo está sendo inicializado e ainda não está pronto para execução.
- **Transição:** Do estado "Novo" para "Pronto".
- **Eventos de Transição:** O processo foi completamente inicializado.

#### 2. **Estado Pronto (Ready)**
- **Descrição:** Um processo no estado "Pronto" está preparado para ser executado pelo processador, mas ainda não foi selecionado para execução.
- **Transição:**
  - De "Pronto" para "Executando".
  - De "Executando" para "Pronto" (quando um processo é preemptado).
- **Eventos de Transição:** 
  - Seleção pelo escalonador de curto prazo.
  - Preempção pelo sistema operacional.
- **Identificação e Elementos de Dados:** 
  - **Process Control Block (PCB):** Armazena informações essenciais do processo, como registradores, contadores, lista de arquivos abertos, etc.
  - **Fila de Prontos:** Fila onde processos prontos aguardam a seleção pelo escalonador.

#### 3. **Estado Executando (Running)**
- **Descrição:** Um processo no estado "Executando" está atualmente utilizando o processador para executar suas instruções.
- **Transição:**
  - De "Executando" para "Pronto".
  - De "Executando" para "Esperando".
  - De "Executando" para "Terminado".
- **Eventos de Transição:**
  - Preempção (tempo de CPU esgotado).
  - Espera por um evento de E/S.
  - Conclusão da execução.
- **Identificação e Elementos de Dados:** 
  - **CPU Registers:** Registradores do processador contendo o estado atual do processo.
  - **Program Counter:** Endereço da próxima instrução a ser executada.

#### 4. **Estado Esperando (Waiting)**
- **Descrição:** Um processo no estado "Esperando" não pode continuar sua execução até que ocorra um evento específico (por exemplo, a conclusão de uma operação de E/S).
- **Transição:**
  - De "Esperando" para "Pronto".
- **Eventos de Transição:** 
  - Ocorrência do evento esperado (por exemplo, término da operação de E/S).
- **Identificação e Elementos de Dados:** 
  - **Lista de Espera:** Fila onde processos aguardam até que o evento esperado ocorra.

#### 5. **Estado Terminado (Terminated)**
- **Descrição:** Um processo no estado "Terminado" completou sua execução ou foi explicitamente finalizado pelo sistema operacional.
- **Transição:** 
  - Não há transições a partir do estado "Terminado".
- **Eventos de Transição:** 
  - Conclusão normal ou término forçado.

No contexto da gestão de processos um elemento de dados importante é o Bloco de Controle de Processos (PCB). O bloco de controle do processos ainda pode conter informações de contabilidade até que sejam removidas pelo sistema operacional. Deve conter os seguintes dados:
- Identificador: Cada processo tem um identificador distinto.
- Estado: Um dos cinco estados possíveis.
- Contexto: Dados contidos nos registradores do processador e do contador de programas.
- Estado de E/S: Dados sobre os requisitos pendentes de E/S, dispositivos alocados, lista de arquivos alocados.
- Contabilidade: Quantidade de tempo do processador, tempo total já usado pelo processo, limites de tempo de execução, contabilização de uso dos recursos.

O modelo de cinco estados na gestão de processos proporciona uma visão clara e estruturada de como os processos são gerenciados pelo sistema operacional. Compreender esses estados e as transições entre eles é essencial para apreciar a complexidade e eficiência dos mecanismos de gerenciamento de processos em sistemas operacionais modernos.

Na gestão de processos é importante a atividade de escalonamento de processos, que pode cer classificadda em:

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

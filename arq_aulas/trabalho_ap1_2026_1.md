# Documento de Requisitos Técnicos

## Projeto: Sistema Interpretador de Instruções com Sensor de Distância e Atuadores (Arduino Mega 2560)

## 1. Descrição geral do projeto

### 1.1 Escopo

O projeto consiste no desenvolvimento, por equipes, de um sistema embarcado baseado no **Arduino Mega 2560** que implemente um **interpretador de instruções**. O sistema deverá receber comandos digitados por meio de um teclado matricial, interpretar esses comandos no formato **mnemônico**, convertê-los internamente para seus respectivos **opcodes binários** e executar ações físicas e lógicas correspondentes.

O foco do trabalho é a aplicação de conceitos de **Arquitetura de Computadores**, e não de eletrônica. Por essa razão, a solução deverá evidenciar, no sketch e na documentação, a correspondência entre os componentes arquiteturais estudados na disciplina e suas implementações em software e hardware no protótipo.

O projeto deverá contemplar, explicitamente, os seguintes elementos arquiteturais:

- **Entrada**: teclado matricial para inserção de instruções.
- **Unidade de Controle (UC)**: lógica responsável por buscar, codificar, decodificar e controlar a execução das instruções.
- **Unidade Lógica e Aritmética (ULA)**: lógica responsável pelas operações aritméticas e de comparação.
- **Memória**: estrutura de dados no sketch para armazenamento de valores e apoio à execução.
- **Registradores simulados**: variáveis do sketch que representem elementos como PC, IR e ACC.
- **Saída**: LEDs, buzzer, display de 7 segmentos e Serial Monitor.
- **Sensor de distância**: fonte de dados para processamento.

O sistema deverá operar segundo a ideia de **programa armazenado**, do **ciclo de instrução** e da **ISA (Instruction Set Architecture)**, em coerência com os conteúdos de arquitetura de computadores discutidos na disciplina.

### 1.2 Não escopo

Não fazem parte do escopo do projeto:

- implementação de eletrônica avançada;
- uso de CI controlador dedicado para display;
- implementação fiel de ISA de processadores comerciais;
- comunicação em rede;
- uso de componentes não previstos no laboratório, salvo autorização expressa do professor.

### 1.3 Objetivos

O projeto tem por objetivos:

- consolidar os conceitos de **programa armazenado**, **ciclo de instrução**, **memória**, **registradores**, **ISA**, **representação binária** e **entrada/saída**;
- relacionar abstrações arquiteturais estudadas em sala com uma implementação prática em Arduino;
- exercitar a organização estruturada de código, com clareza, modularidade e documentação;
- permitir avaliação objetiva de conceitos da disciplina sem exigir conhecimento aprofundado de eletrônica.

## 2. Funcionalidades do produto

### 2.1 Implementação obrigatória dos elementos arquiteturais no sketch

Os seguintes elementos **devem obrigatoriamente ser implementados como variáveis ou estruturas de dados no sketch**, com nomes claramente identificáveis e com comentários explicando sua função arquitetural:

    int MEM[16];            // memória de dados simulada
    int PC = 0;             // program counter
    byte IR = 0;            // instruction register
    int ACC = 0;            // acumulador
    bool FLAG_Z = false;    // flag de comparação
    bool EXECUTANDO = true; // controle de execução do programa

Requisitos obrigatórios:

- `MEM` deverá ser usada como memória simulada para armazenamento de dados.
- `PC` deverá representar o contador de programa, controlando a instrução em execução ou a próxima instrução a ser tratada.
- `IR` deverá armazenar o opcode da instrução corrente.
- `ACC` deverá armazenar operandos e/ou resultados de operações.
- `FLAG_Z` deverá indicar o resultado lógico de comparação, quando aplicável.
- `EXECUTANDO` deverá ser usada para indicar se o programa permanece em execução ou se foi encerrado pela instrução `HALT`.

A ausência desses elementos, ou sua presença apenas nominal sem uso coerente, caracterizará falha conceitual.

## 2.2 Modelo de operação do sistema

O sistema deverá operar obrigatoriamente em **dois modos distintos de funcionamento**, caracterizando o conceito de **programa armazenado**.

---

### 2.2.1 Modo de entrada de programa (LOAD)

Neste modo, o sistema deverá permitir que o usuário insira instruções no formato mnemônico por meio do teclado matricial.

#### Requisitos:

- Cada instrução digitada deverá ser **armazenada em uma estrutura de memória de instruções** (ex.: vetor de strings);
- As instruções **não devem ser executadas imediatamente após a entrada**;
- O sistema deverá permitir a inserção sequencial de múltiplas instruções;
- O grupo deverá definir e documentar:
  - o mecanismo de confirmação da instrução (ex.: tecla ENTER);
  - a forma de indicar ao usuário que a instrução foi armazenada corretamente.

#### Exemplo de entrada de programa:

```assembly
LOADK 5
ADDK 3
DISP
HALT
```

### 2.2.2 Modo de execução (RUN)

A execução do programa deverá ocorrer exclusivamente mediante comando explícito do usuário.

#### Comando obrigatório:

`RUN`

#### Comportamento esperado:

Ao receber o comando `RUN`, o sistema deverá:

1. Inicializar o contador de programa:
   - `PC = 0`

2. Iniciar o ciclo de instrução:

   - Buscar a instrução na memória de programa:
     - `instrucao ← programa[PC]`

   - Converter o mnemônico para opcode binário;

   - Carregar o opcode no registrador de instrução:
     - `IR`

   - Decodificar a instrução;

   - Executar a instrução;

   - Atualizar o estado do sistema:
     - `ACC`, `MEM`, `FLAG_Z`, dispositivos de saída, etc.;

   - Atualizar o contador de programa:
     - `PC = PC + 1`

3. Repetir o ciclo até encontrar a instrução `HALT`.

### 2.2.3 Condição de parada

A execução do programa deverá ser encerrada exclusivamente quando a instrução `HALT` for processada.

### 2.2.4 Representação do fluxo

Modo LOAD → Armazenamento → RUN → Execução sequencial → HALT → Encerramento

### 2.2.5 Interpretação arquitetural obrigatória

Durante a apresentação, o grupo deverá demonstrar que:

- A estrutura que armazena as instruções representa a **memória de programa**;
- O `PC` controla a sequência de execução;
- O `IR` armazena a instrução corrente;
- A Unidade de Controle implementa o ciclo:
  - busca → decodificação → execução;
- O comando `RUN` representa o início da execução do programa;
- A instrução `HALT` representa o término da execução.

### 2.2.6 Regra de avaliação

Implementações que executem instruções imediatamente após a entrada (sem armazenamento prévio e sem uso do comando `RUN`) não caracterizam corretamente o modelo de programa armazenado e sofrerão penalização na avaliação.

### 2.3 Conjunto de instruções

Cada instrução deverá possuir um **mnemônico**, um **opcode binário de 4 bits** e uma **descrição funcional**.

| Opcode | Mnemônico | Descrição |
| --- | --- | --- |
| 0000 | NOP | Não realiza operação |
| 0001 | READ | Lê o sensor de distância e armazena o resultado em `ACC` |
| 0010 | LOADK | Carrega uma constante em `ACC` |
| 0011 | ADDK | Soma uma constante ao conteúdo de `ACC` |
| 0100 | SUBK | Subtrai uma constante do conteúdo de `ACC` |
| 0101 | CMPK | Compara `ACC` com uma constante e atualiza `FLAG_Z` |
| 0110 | LEDON | Liga um LED especificado por operando |
| 0111 | LEDOFF | Desliga um LED especificado por operando |
| 1000 | BUZON | Liga o buzzer |
| 1001 | BUZOFF | Desliga o buzzer |
| 1010 | DISP | Exibe valor no display de 7 segmentos |
| 1011 | ALERT | Executa resposta automática com base na distância lida |
| 1100 | BINC | Exibe no Serial Monitor o opcode binário da instrução atual |
| 1101 | STORE | Armazena `ACC` em uma posição `MEM[X]` |
| 1110 | LOADM | Carrega em `ACC` o conteúdo de `MEM[X]` |
| 1111 | HALT | Encerra a execução do programa |

### 2.4 Código e descrição de cada funcionalidade

#### 2.4.1 F01 — Entrada de instruções

**Código da funcionalidade:** F01  
**Nome:** Entrada de instruções por teclado  
**Descrição:** O sistema deverá permitir a entrada de instruções no formato mnemônico por meio do teclado matricial. O grupo deverá definir claramente, na documentação, como ocorrerá a montagem da string da instrução, incluindo o tratamento de confirmação da entrada.

#### 2.4.2 F02 — Codificação de mnemônicos para opcode

**Código da funcionalidade:** F02  
**Nome:** Codificação da instrução  
**Descrição:** O sistema deverá implementar uma rotina que associe o mnemônico digitado ao seu opcode binário correspondente. O opcode gerado deverá ser armazenado em `IR`.

#### 2.4.3 F03 — Controle do ciclo de instrução

**Código da funcionalidade:** F03  
**Nome:** Unidade de Controle  
**Descrição:** O sistema deverá implementar funções que executem a lógica de busca, codificação, carga em `IR`, decodificação, execução e controle do fluxo, incluindo atualização de `PC` e término por `HALT`.

#### 2.4.4 F04 — Operações da ULA

**Código da funcionalidade:** F04  
**Nome:** Operações aritméticas e de comparação  
**Descrição:** O sistema deverá implementar as instruções `ADDK`, `SUBK` e `CMPK`, com resultados armazenados em `ACC` e, quando aplicável, atualização de `FLAG_Z`.

#### 2.4.5 F05 — Leitura do sensor

**Código da funcionalidade:** F05  
**Nome:** Leitura de distância  
**Descrição:** O sistema deverá ler o sensor ultrassônico e armazenar o valor medido em centímetros em `ACC` quando a instrução `READ` for executada.

#### 2.4.6 F06 — Controle de LEDs

**Código da funcionalidade:** F06  
**Nome:** Saída visual discreta  
**Descrição:** O sistema deverá permitir ligar e desligar LEDs por instruções específicas.

#### 2.4.7 F07 — Controle de buzzer

**Código da funcionalidade:** F07  
**Nome:** Saída sonora  
**Descrição:** O sistema deverá permitir ligar e desligar o buzzer por instruções específicas.

#### 2.4.8 F08 — Exibição em display de 7 segmentos

**Código da funcionalidade:** F08  
**Nome:** Exibição de estados e resultados  
**Descrição:** O sistema deverá exibir no display de 7 segmentos valores resultantes de instruções, respeitando as limitações físicas do dispositivo.

#### 2.4.9 F09 — Memória simulada

**Código da funcionalidade:** F09  
**Nome:** Armazenamento em memória  
**Descrição:** O sistema deverá permitir armazenar e recuperar valores da memória simulada por meio das instruções `STORE` e `LOADM`.

#### 2.4.10 F10 — Execução da instrução ALERT

**Código da funcionalidade:** F10  
**Nome:** Resposta automática por faixa de distância  
**Descrição:** A instrução `ALERT` deverá avaliar o valor da distância lida e gerar resposta automática nas saídas.

Comportamento mínimo obrigatório:

- distância menor que 10 cm: ligar buzzer e LED de alerta;
- distância menor que 20 cm e maior ou igual a 10 cm: ligar LED de alerta, sem buzzer;
- distância maior ou igual a 20 cm: manter saídas de alerta desligadas.

#### 2.4.11 F11 — Finalização de programa

**Código da funcionalidade:** F11  
**Nome:** Fim de execução  
**Descrição:** A instrução `HALT` deverá encerrar a execução do programa, interrompendo o ciclo de instrução.

### 2.5 Tratamento de resultados não representáveis

Como o display de 7 segmentos será tratado, neste projeto, como um dispositivo de exibição decimal limitado, o sistema deverá prever o tratamento das seguintes situações:

#### 2.5.1 Overflow

Caracteriza-se overflow, neste projeto, quando o resultado a ser exibido no display for maior que 9.

Comportamento obrigatório:

- o display deverá exibir `E`;
- o Serial Monitor deverá informar explicitamente a ocorrência de overflow;
- a documentação deverá descrever em que situações esse caso pode ocorrer.

#### 2.5.2 Resultado negativo

Caracteriza-se resultado negativo, neste projeto, quando o resultado de uma subtração ou de outra operação produzir valor menor que 0.

Comportamento obrigatório:

- o display deverá exibir `-` ou outro padrão previamente definido e documentado pelo grupo;
- o Serial Monitor deverá informar explicitamente a ocorrência de valor negativo não representável no display decimal simples.

A ausência de tratamento explícito dessas situações implicará perda de pontuação.

### 2.6 Tabela resumo de funções

| Código | Funcionalidade | Elemento de arquitetura relacionado |
| --- | --- | --- |
| F01 | Entrada de instruções | Entrada / I/O |
| F02 | Codificação mnemônico → opcode | ISA / assembly |
| F03 | Controle do ciclo de instrução | UC |
| F04 | Operações aritméticas e comparação | ULA |
| F05 | Leitura do sensor | Entrada de dados |
| F06 | Controle de LEDs | Saída |
| F07 | Controle de buzzer | Saída |
| F08 | Exibição em display | Saída |
| F09 | Memória simulada | Memória |
| F10 | Resposta automática | Controle / processamento |
| F11 | Encerramento por HALT | Controle |

## 3. Descrição detalhada do esquema elétrico

### 3.1 Relação de componentes, com especificações

Os seguintes componentes deverão ser utilizados no projeto:

| Componente | Especificação mínima |
| --- | --- |
| Arduino | Arduino Mega 2560 com ATmega2560 |
| Teclado | Teclado matricial 4x4 |
| Sensor de distância | HC-SR04 ou equivalente disponível no laboratório |
| LEDs | LEDs 5 mm, cores a critério do grupo |
| Buzzer | Buzzer ativo |
| Display | Display de 7 segmentos de 1 dígito |
| Resistores para LEDs | 220 Ω a 330 Ω |
| Resistores para display | 220 Ω a 330 Ω por segmento |
| Protoboard | Padrão de laboratório |
| Jumpers | Padrão de laboratório |

Observações:

- o projeto não tem por objetivo avaliar conhecimento de eletrônica; por isso, os valores de resistores e a pinagem estão previamente definidos neste documento;
- todos os componentes deverão ser montados em protoboard.

### 3.2 Esquemático ou descrição de conexões

A ligação deverá seguir a correspondência entre pinos do Arduino e elementos do sistema, conforme definido na pinagem obrigatória abaixo.

Regras gerais de conexão:

- cada LED deverá possuir resistor em série;
- cada segmento do display deverá possuir resistor em série;
- o buzzer deverá ser ligado a pino digital de saída;
- o sensor ultrassônico deverá utilizar um pino para `TRIG` e um pino para `ECHO`;
- o teclado matricial deverá ser ligado diretamente a pinos digitais do Arduino;
- o display de 7 segmentos deverá ser acionado exclusivamente por saídas digitais do Arduino, sem exigência de driver dedicado.

### 3.3 Pinagem do Arduino — elemento

A pinagem abaixo deverá ser seguida obrigatoriamente, para reduzir dificuldade de montagem e manter o foco na disciplina.

| Pinagem do Arduino | Elemento |
| --- | --- |
| 22 | Display segmento a |
| 23 | Display segmento b |
| 24 | Display segmento c |
| 25 | Display segmento d |
| 26 | Display segmento e |
| 27 | Display segmento f |
| 28 | Display segmento g |
| 29 | Display ponto decimal (opcional) |
| 30 | Teclado linha 1 |
| 31 | Teclado linha 2 |
| 32 | Teclado linha 3 |
| 33 | Teclado linha 4 |
| 34 | Teclado coluna 1 |
| 35 | Teclado coluna 2 |
| 36 | Teclado coluna 3 |
| 37 | Teclado coluna 4 |
| 40 | Sensor `TRIG` |
| 41 | Sensor `ECHO` |
| 42 | LED 1 |
| 43 | LED 2 |
| 44 | LED 3 |
| 45 | Buzzer |

## 4. Setup de testes

Durante a apresentação, o grupo deverá submeter o protótipo aos testes definidos a seguir.

### 4.1 Teste de codificação

O grupo deverá digitar um mnemônico e demonstrar, no Serial Monitor, o opcode binário correspondente gerado pelo sistema.

### 4.2 Teste de leitura do sensor

O grupo deverá executar a instrução `READ` e demonstrar o valor medido sendo carregado em `ACC`.

### 4.3 Teste de operações da ULA

O grupo deverá demonstrar pelo menos uma execução válida de `ADDK` e uma de `SUBK`, explicando o papel de `ACC`.

### 4.4 Teste de comparação

O grupo deverá demonstrar a instrução `CMPK` e a atualização de `FLAG_Z`.

### 4.5 Teste de memória

O grupo deverá demonstrar as instruções `STORE` e `LOADM`, explicando a função do vetor `MEM`.

### 4.6 Teste de saída visual e sonora

O grupo deverá demonstrar as instruções `LEDON`, `LEDOFF`, `BUZON` e `BUZOFF`.

### 4.7 Teste da instrução ALERT

O grupo deverá demonstrar o comportamento automático da instrução `ALERT` para diferentes faixas de distância.

### 4.8 Teste do display

O grupo deverá demonstrar a exibição de valores válidos no display e explicar sua limitação a um dígito decimal.

### 4.9 Teste de overflow

O grupo deverá demonstrar uma situação em que o resultado seja maior que 9 e, portanto, gere indicação de overflow.

### 4.10 Teste de resultado negativo

O grupo deverá demonstrar uma situação em que o resultado seja negativo, com a devida sinalização prevista no projeto.

### 4.11 Teste de finalização por HALT

O grupo deverá demonstrar a interrupção correta da execução do programa ao processar a instrução `HALT`.

### 4.12 Teste conceitual oral

Durante a apresentação, o professor poderá solicitar que o grupo identifique, no código:

- onde está a memória;
- onde está o `PC`;
- onde está o `IR`;
- onde está o `ACC`;
- onde está a UC;
- onde está a ULA;
- onde ocorre a conversão do mnemônico para opcode.

## 5. Regras de elaboração do sketch

### 5.1 Requisitos obrigatórios de clareza e organização

O sketch deverá seguir boas práticas de programação e ser redigido de forma clara e organizada.

São requisitos obrigatórios:

- uso de **funções**;
- código identado de forma consistente;
- nomes de funções e variáveis significativos;
- comentários explicativos sobre trechos relevantes;
- separação entre entrada, codificação, controle, processamento e saída.

### 5.2 Estrutura mínima recomendada

O sketch deverá conter, no mínimo, funções coerentes com os seguintes papéis:

- leitura da instrução;
- codificação do mnemônico;
- execução da instrução;
- leitura do sensor;
- exibição no display;
- controle de LEDs e buzzer;
- tratamento de erros.

### 5.3 Proibições

Não serão aceitos, como boas práticas:

- código inteiramente concentrado no `loop()`;
- ausência de comentários explicativos;
- nomes genéricos e sem significado técnico, como `x`, `a`, `temp1`, `funcao1`;
- ausência de identificação explícita dos elementos arquiteturais implementados como variáveis.

### 5.4 Identificação do grupo no sketch

No início do sketch deverá constar, em comentário, a identificação dos integrantes, no formato abaixo:

    /*
    12345 Nome do Estudante - TA
    23456 Nome do Estudante - TP
    34567 Nome do Estudante - NT
    */

Onde:

- `TA` = trabalhou ativamente;
- `TP` = trabalhou parcialmente;
- `NT` = não trabalhou.

## 6. Regras de avaliação

### 6.1 Peso na avaliação

O trabalho corresponde a **30% da nota da AP1**.

### 6.2 Organização dos grupos

- Os projetos deverão ser desenvolvidos exclusivamente pelos grupos definidos em sala.
- Não serão aceitas entregas individuais ou fora do grupo definido.
- Cada grupo deverá indicar formalmente um representante.

### 6.3 Atribuições do representante

Compete ao representante do grupo:

- realizar a submissão dos artefatos no GitHub;
- manter o repositório organizado;
- conduzir a apresentação, sem prejuízo da participação dos demais integrantes;
- responder administrativamente pelo projeto perante o professor.

### 6.4 Presença obrigatória

A presença de **todos os integrantes do grupo** é obrigatória na apresentação.

- O aluno ausente perderá **40% da pontuação individual** correspondente à nota atribuída ao grupo.
- A ausência não poderá ser compensada por envio posterior de material.

### 6.5 Entrega dos artefatos

A entrega somente será considerada válida se **todos** os critérios abaixo forem atendidos simultaneamente:

- os artefatos estiverem publicados no GitHub na conta indicada pelo professor;
- todos os arquivos estiverem **commitados antes do início da apresentação**;
- o repositório possuir histórico de commits;
- a documentação estiver em Markdown;
- o sketch estiver incluído no repositório;
- o protótipo físico estiver montado e funcional.

Não será permitido:

- subir arquivos após o início da apresentação;
- alterar o código durante a avaliação;
- apresentar protótipo sem documentação correspondente no repositório.

### 6.6 Forma obrigatória de apresentação

A apresentação deverá ocorrer, obrigatoriamente, na seguinte sequência:

1. apresentação geral do projeto e de sua relação com Arquitetura de Computadores;
2. identificação, no sketch, de memória, `PC`, `IR`, `ACC`, UC e ULA;
3. demonstração de cada funcionalidade exigida;
4. execução dos testes solicitados pelo professor;
5. encerramento por `HALT`.

Para cada funcionalidade exigida, o grupo deverá:

- explicar a função;
- mostrar no código onde ela está implementada;
- executá-la no protótipo;
- apresentar o resultado esperado e o obtido.

### 6.7 Critérios de avaliação

A avaliação observará o seguinte enquadramento:

| Conceito | Nota | Critério |
| --- | --- | --- |
| EXCELENTE | 10,0 | Projeto apresentado com todas as funcionalidades implementadas e atendidas |
| ÓTIMO | 9,0 | Projeto apresentado com pequenas falhas em funcionalidades |
| BOM | 7,0 | Projeto apresentado com muitas funcionalidades não atendidas |
| INSUFICIENTE | 0,0 | Projeto não apresentado ou sem funcionamento mínimo |

### 6.8 Penalizações específicas

| Situação | Penalidade |
| --- | --- |
| Ausência de integrante na apresentação | -40% da nota individual |
| Integrante marcado como TP | -40% da nota individual |
| Integrante marcado como NT | nota 0,0 no trabalho |
| Repositório incompleto | poderá invalidar a avaliação |
| Ausência de `HALT` | falha conceitual grave |
| Ausência de tratamento de overflow/negativo | redução de nota |
| Pinagem em desacordo com o especificado | poderá inviabilizar a avaliação |

### 6.9 Data de apresentação

A data de apresentação será definida pelo professor em sala.

## 7. Repositório

Os artefatos deverão ser postados em repositório na conta:

`https://github.com/claytonjasilva`

O nome do repositório será definido pelo professor ou, na ausência de definição específica, pelo representante do grupo em comum acordo com o professor.

## 8. Entregáveis

São entregáveis obrigatórios do projeto:

1. **documentação do projeto em Markdown**, contendo este conjunto de requisitos atendidos e a descrição da solução proposta;
2. **sketch do Arduino**, devidamente comentado;
3. **protótipo físico montado em protoboard e em funcionamento**;
4. **repositório GitHub** contendo a documentação e o código;
5. **histórico de commits** correspondente ao desenvolvimento do trabalho.
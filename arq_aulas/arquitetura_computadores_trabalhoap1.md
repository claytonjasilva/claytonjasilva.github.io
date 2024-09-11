# Enunciado do Trabalho - Projeto Arduino: Sistema de Monitoramento e Controle Multissensorial

Disciplina Arquitetura de Computadores, Prof. Clayton J A Silva

**Condições gerais:**

- O trabalho se refere a 30% da nota da primeira avaliação bimestral do período 24.2;
- Os projetos deverão ser desenvolvidos e entregues de acordo com as equipes definidas em sala - **não serão aceitas entregas fora do grupo**;
- Cada grupo deverá possuir um representante junto ao professor, designado na definição do grupo;
- Na data agendada para a entrega **toda a equipe deverá estar presente** - o aluno ausente perderá 40% da pontuação auferida pelo grupo;
- Os entregáveis do projeto são: (i) o código do *sketch* do sistema, compartilhado pelo representante na conta do projeto no GitHub; (ii) o *shield* com o protótipo dos componentes interligados à placa do Arduíno;
- O *sketch* deverá relacionar, como comentário, **nome e matrícula** de todos os componentes do grupo, seguidos da auto-avaliação 'NT'-não trabalhou, 'TP'-trabalhou parcialmente, 'TA'-trabalhou ativamente - por exemplo, 12345 Fulano de Tal NT;
- **O aluno que trabalhou parcialmente perderá 40% da pontuação atribuída ao grupo; O aluno que não trabalhou terá nota 0,0 no trabalho**;
- A avaliação consistirá na verificação e aplicação de testes ao protótipo construído, aplicando-se os conceitos EXCELENTE, 10, *shield* e *sketch* apresentados, todas as funcionalidades atendidas; ÓTIMO, 9, *shield* e *sketch* apresentados, algumas funcionalidades não atendidas; BOM, 7, *shield* e *sketch* apresentados, muitas funcionalidades não atendidas; INSUFICIENTE, 0,0, *shield* e *sketch* não apresentados;
- **A submissão do trabalho será na data da revisão da prova da AP1**.

## I) Objetivos:

Desenvolver um sistema de monitoramento e controle com o microcontrolador Arduino, que permita:

1. **Explorar entradas e saídas digitais e analógicas**, integrando sensores e atuadores (LEDs, buzzer, sensor de temperatura, sensor de distância, etc.).
2. **Trabalhar com operações binárias e linguagem *assembly***, utilizando mnemônicos abstratos que indicam as operações a serem executadas.
3. **Implementar dois modos de controle**:
   - **Via monitor serial**: O usuário enviará mnemônicos (representações simbólicas) para controlar dispositivos.
   - **Via chaves binárias**: O sistema será controlado por chaves binárias, com uma chave adicional para confirmar a operação.

O sistema propicia comandar sensores e atuadores através o monitor serial, sem requerer obrigatoriamente a combinação de chaves de entrada, possibilitando as funcionalidades a seguir, combinadas ou não, utilizando uma linguagem simbólica dos correspondentes códigos binários:

- acendimento/apagamento de até 3 LEDs;
- acendimento/apagamento de LED RGB;
- geração de alarme sonoro;
- monitoramento de temperatura;
- monitoramento e determinação da distância de um alvo;
- monitoramento da presença de obstáculo.

O sistema permite também que as chaves binárias de entrada realizem essas operações diretamente, mediante a habilitação por uma chave seletora.

## II) Escopo:

O sistema deve incluir:

1. **Leitura e controle de múltiplos sensores e atuadores**:
   - Sensores: Temperatura, distância, presença.
   - Atuadores: LEDs (A, B, C), buzzer, LED RGB.
   
2. **Modo de Programação**:
   - **Modo Serial**: O Arduino entra no modo de programação ao receber o comando `INICIO_PROG` via monitor serial. O sistema aceita comandos como `LED_ON A` ou `BUZZ_ON` para realizar operações.
   - **Modo Binário**: Ativado por uma chave física. Comandos são inseridos via chaves binárias e executados ao pressionar uma chave "Enter".

3. **Saída de informações**:
   - Feedback no **monitor serial** para exibir os resultados de leituras de sensores e executar comandos.
   - Controle de LEDs, buzzer e LED RGB em resposta aos comandos enviados.

## III) Descrição Detalhada do Sistema:

### Funcionamento do Sistema e Funcionalidades:

1. **Modo de Programação Serial**:
   - O usuário entra no modo de programação enviando `INICIO_PROG` via monitor serial.
   - No modo serial, o sistema aceita comandos como `LED_ON A`, `BUZZ_ON`, `TEMP_READ A`, que são interpretados e executados diretamente.

2. **Modo de Programação Binário**:
   - O usuário ativa o modo de programação binário através de uma chave física conectada ao pino 12.
   - No modo binário, o usuário ajusta o estado de quatro chaves (nos pinos 2, 3, 4 e 5) para formar um comando binário. Após configurar as chaves, o usuário pressiona a chave "Enter" para executar o comando.

### Tabela de Funções (Com 4 bits de Opcode):

| **Código Binário** | **Mnemônico**           | **Descrição**                                                |
|--------------------|-------------------------|--------------------------------------------------------------|
| 0000               | `LED_ON A`              | Liga o LED A.                                                |
| 0001               | `LED_OFF A`             | Desliga o LED A.                                             |
| 0010               | `LED_ON B`              | Liga o LED B.                                                |
| 0011               | `LED_OFF B`             | Desliga o LED B.                                             |
| 0100               | `BUZZ_ON`               | Liga o buzzer.                                               |
| 0101               | `BUZZ_OFF`              | Desliga o buzzer.                                            |
| 0110               | `TEMP_READ A`           | Lê o sensor de temperatura e exibe o valor no monitor serial. |
| 0111               | `DIST_CHECK A`          | Lê o sensor de distância e exibe o valor no monitor serial.   |
| 1000               | `PRES_READ A`           | Lê o sensor de presença.                                      |
| 1001               | `RGB_SET_COLOR A RED`   | Define a cor do LED RGB para vermelho.                       |
| 1010               | `RGB_SET_COLOR A GREEN` | Define a cor do LED RGB para verde.                          |
| 1011               | `RGB_SET_COLOR A BLUE`  | Define a cor do LED RGB para azul.                           |
| 1100               | `INICIO_PROG`           | Inicia o modo de programação.                                |
| 1101               | `FIM_PROG`              | Sai do modo de programação.                                  |
| 1110               | `LED_ON C`              | Liga o LED C.                                                |
| 1111               | `LED_OFF C`             | Desliga o LED C.                                             |

---

### Exemplos de Sequências de Comandos:

#### **Exemplo de Sequência via Monitor Serial**:

Nesta sequência, o usuário utiliza o monitor serial para enviar comandos para o Arduino, ligando LEDs, lendo sensores e manipulando o LED RGB.

1. **Início da Programação**:
   - O usuário envia o comando: INICIO_PROG, o Arduino entra no modo de programação serial.

2. **Ligando o LED A**:
   - O usuário envia: LED_ON A, o LED A é ligado.

3. **Lendo o Sensor de Temperatura**:
   - O usuário envia:TEMP_READ A, o valor da temperatura lida é exibido no monitor serial.

4. **Ligando o Buzzer**:
   - O usuário envia:BUZZ_ON, o buzzer é ativado.

5. **Mudando a Cor do LED RGB para Vermelho**:
   - O usuário envia: RGB_SET_COLOR A RED, o LED RGB é definido para a cor vermelha.

6. **Encerrando a Programação**:
   - O usuário envia: FIM_PROG, o Arduino sai do modo de programação.

---

#### **Exemplo de Sequência via Entrada Binária**:

Nesta sequência, o usuário usa chaves binárias para controlar o Arduino. Cada conjunto de chaves representa um comando binário de 4 bits. A chave "Enter" confirma o comando, e o Arduino o executa.

1. **Início do Modo Binário**:
   - O usuário ativa a chave de seleção de modo (conectada ao pino 12). O Arduino entra no modo de programação binário.

2. **Ligando o LED A (0000)**:
   - O usuário ajusta as chaves binárias nos pinos 2, 3, 4 e 5 para o valor **0000** (chave 1: desligada, chave 2: desligada, chave 3: desligada, chave 4: desligada).
   - Em seguida, o usuário pressiona a chave "Enter" (conectada ao pino 13), e o LED A é ligado.

3. **Desligando o LED A (0001)**:
   - O usuário ajusta as chaves para o valor **0001** (chave 1: desligada, chave 2: desligada, chave 3: desligada, chave 4: ligada).
   - Ao pressionar "Enter", o LED A é desligado.

4. **Ligando o Buzzer (0100)**:
   - O usuário ajusta as chaves para o valor **0100** (chave 1: desligada, chave 2: ligada, chave 3: desligada, chave 4: desligada).
   - Ao pressionar "Enter", o buzzer é ligado.

5. **Mudando a Cor do LED RGB para Azul (1011)**:
   - O usuário ajusta as chaves para o valor **1011** (chave 1: desligada, chave 2: ligada, chave 3: ligada, chave 4: ligada).
   - Ao pressionar "Enter", o LED RGB é definido para a cor azul.

6. **Encerrando a Programação (1101)**:
   - O usuário ajusta as chaves para o valor **1101** (chave 1: ligada, chave 2: desligada, chave 3: ligada, chave 4: ligada).
   - Ao pressionar "Enter", o Arduino sai do modo de programação.

---

## IV) Sugestão de Nomes das Funções para o *sketch*:

- **inicioModoProgramacaoSerial**: Inicia o modo de programação via serial.
- **inicioModoProgramacaoBinario**: Inicia o modo de programação via binário.
- **fimModoProgramacao**: Encerra o modo de programação.
- **ligarLed(char led)**: Liga o LED especificado (A, B ou C).
- **desligarLed(char led)**: Desliga o LED especificado (A, B ou C).
- **ligarBuzzer()**: Liga o buzzer.
- **desligarBuzzer()**: Desliga o buzzer.
- **lerTemperatura()**: Lê o valor do sensor de temperatura e exibe no monitor serial.
- **lerDistancia()**: Lê o valor do sensor de distância e exibe no monitor serial.
- **lerPresenca()**: Lê o valor do sensor de presença.
- **definirCorRGB(int r, int g, int b)**: Define a cor do LED RGB.
- **lerChavesBinarias()**: Lê o estado das chaves binárias e converte para um valor binário.
- **processarComando(String comando)**: Processa e executa um comando enviado via serial.
- **processarComandoBinario(int comando)**: Processa e executa um comando baseado na entrada binária.

## V) Sugestão de Montagem do *shield*:

### Componentes:

- **LEDs A, B, C**: Conectados aos pinos 9, 10 e outros disponíveis.
- **Buzzer A**: Conectado ao pino 8.
- **Sensor de Temperatura**: Conectado ao pino A0 (pode ser um sensor LM35 ou DHT11).
- **Sensor de Distância (HC-SR04)**: Conectado aos pinos 5 (Trigger) e 6 (Echo).
- **Sensor de Presença (PIR)**: Conectado ao pino 7.
- **LED RGB**: Com resistores conectados aos pinos 11, 12 e 13.
- **Chaves Binárias**: Conectadas aos pinos 2, 3, 4 e 5, com a chave "Enter" no pino 13.
- **Chave de Seleção de Modo**: Conectada ao pino 12, usada para ativar o modo binário.

### Esquema de Conexões:

1. **LEDs**:
   - **LED A**: Pino 9, com resistor de 220Ω para limitar a corrente.
   - **LED B**: Pino 10, também com resistor de 220Ω.
   - **LED C**: Pino 11, também com resistor de 220Ω.

2. **Buzzer**:
   - O positivo do buzzer vai ao pino 8, o negativo ao GND.

3. **Sensor de Temperatura**:
   - O pino de saída do sensor LM35/DHT11 vai ao pino A0, com alimentação em 5V e GND.

4. **Sensor de Distância (HC-SR04)**:
   - **Trigger** conectado ao pino 5 e **Echo** ao pino 6.

5. **Sensor de Presença (PIR)**:
   - Conectado ao pino 7, com alimentação em 5V e GND.

6. **LED RGB**:
   - Conectado aos pinos 11 (vermelho), 12 (verde) e 13 (azul), com resistores de 220Ω para limitar a corrente.

7. **Chaves Binárias**:
   - As chaves binárias serão conectadas aos pinos **2, 3, 4 e 5** para formar o comando binário de 4 bits.
   - A chave "Enter" será conectada ao pino **13** e será usada para confirmar e executar o comando binário.

8. **Chave de Seleção de Modo**:
   - A chave de seleção de modo será conectada ao pino **12**. Quando ativada, essa chave coloca o sistema no **modo de programação binário**.

### Montagem:

- Utilize uma *protoboard* para organizar todos os componentes de forma ordenada.
- Use resistores adequados (220Ω/330Ω) para limitar a corrente dos LEDs e proteger os componentes sensíveis.
- As chaves binárias e a chave seletora podem ser simuladas usando *jumper*, com cada chave representando um bit do comando binário, ligando o *jumper* a 5V (1) ou GND (0).
- A chave "Enter" pode ser um botão *push-bottom* separado, que ao ser pressionado, faz o sistema ler o estado das chaves binárias e executar o comando correspondente.

### Esquema de Conexões Resumido:

| Componente            | Pino Arduino |
|-----------------------|--------------|
| **LED A**             | 9            |
| **LED B**             | 10           |
| **LED C**             | 11           |
| **Buzzer**            | 8            |
| **Sensor de Temperatura** | A0       |
| **Sensor de Distância (Trigger)** | 5 |
| **Sensor de Distância (Echo)**    | 6 |
| **Sensor de Presença** | 7           |
| **RGB (Vermelho)**    | 11           |
| **RGB (Verde)**       | 12           |
| **RGB (Azul)**        | 13           |
| **Chave Binária 1**   | 2            |
| **Chave Binária 2**   | 3            |
| **Chave Binária 3**   | 4            |
| **Chave Binária 4**   | 5            |
| **Chave "Enter"**     | 13           |
| **Chave de Seleção de Modo** | 12   |

*Trabalho AP1, Arquitetura de Computadores, Rev. 11/9/24
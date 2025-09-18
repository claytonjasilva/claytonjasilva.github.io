# Enunciado do Trabalho - Sistema de Controle e Monitoramento

Disciplina Arquitetura de Computadores, Prof. Clayton J A Silva

**Condições gerais:**

- O trabalho compõe **30% da nota da primeira avaliação bimestral** do período 25.2;
- Os projetos deverão ser desenvolvidos em grupos previamente definidos em sala – **não serão aceitas entregas individuais**;
- Cada grupo deverá possuir um **representante oficial**, responsável por compartilhar o material no GitHub no repositório:  
  **https://github.com/claytonjasilva/arquitetura_computadores_trabalhos**
- Na data agendada para a entrega, **toda a equipe deverá estar presente** – o aluno ausente perderá 40% da nota atribuída ao grupo;
- Os entregáveis são:
  1. O código-fonte do programa (*sketch* Arduino), publicado no GitHub;
  2. Documento técnico em PDF, contendo descrição do funcionamento, fluxograma do sistema e diagrama de ligação dos componentes;
- O código deve relacionar, em comentário, **nome e matrícula** de todos os componentes do grupo, seguidos da autoavaliação:  
  `NT` – não trabalhou;  
  `TP` – trabalhou parcialmente;  
  `TA` – trabalhou ativamente;  
  Exemplo: `12345 Fulano de Tal TP`;
- **O aluno que trabalhou parcialmente perderá 40% da nota do grupo; o aluno que não trabalhou terá nota 0,0 no trabalho**;
- A avaliação consistirá na verificação do código e da documentação entregue, aplicando-se os conceitos:
  - **EXCELENTE (10)** – código e documentação completos, todas as funcionalidades atendidas;
  - **ÓTIMO (9)** – entregas realizadas, poucas funcionalidades ausentes;
  - **BOM (7)** – entregas realizadas, mas muitas funcionalidades não atendidas;
  - **INSUFICIENTE (0,0)** – entregas não realizadas.

**Datas de apresentação:**
- 14/10/2025 (terça-feira);  
- 15/10/2025 (quarta-feira);  
- 16/10/2025 (quinta-feira).

---

## I) Objetivos:

1. Desenvolver um **sistema de controle e monitoramento**, utilizando múltiplos dispositivos de entrada e sensores.
2. Explorar as funcionalidades do microcontrolador Arduino, consolidando os conceitos de Arquitetura de Computadores.

---

## II) Escopo:

O sistema deverá contemplar os seguintes requisitos:

1. **Dispositivos de entrada:**
   - **Joystick analógico** (utilizado para selecionar modos ou opções do sistema).
   - **Teclado de membrana matricial (4x4 ou similar)**, para interação do usuário (ex.: comandos numéricos ou seleção de funções).

2. **Sensores:**
   O projeto deverá integrar **pelo menos dois** dentre os seguintes:
   - Sensor ultrassônico de distância;  
   - Sensor de nível de água;  
   - Sensor de obstáculos (infravermelho ou similar).

3. **Saídas e monitoramento:**
   - O sistema deverá apresentar os resultados em tempo real pelo **monitor serial**, exibindo:  
     - Estado do joystick (posição X e Y);  
     - Teclas pressionadas;  
     - Valores lidos dos sensores;  
     - Indicação de mensagens ou alertas de funcionamento.

4. **Lógica de funcionamento mínima:**
 - **O usuário deve** ligar o sistema. No monitor serial aparece a mensagem inicial:  
  *"Sistema iniciado. Use o joystick para escolher o modo."*

- **O usuário deve** mover o joystick:  
  - Para a esquerda → seleciona o **modo de monitoramento contínuo** (o sistema começa a exibir periodicamente os valores lidos dos sensores).  
  - Para a direita → seleciona o **modo de monitoramento sob demanda** (os sensores só são lidos quando o usuário aciona uma tecla específica).  
  - Para cima → seleciona o **modo de teste de sensores** (o sistema exibe mensagens de verificação de funcionamento de cada sensor).  

- **O usuário deve** confirmar a escolha pressionando uma tecla no teclado de membrana (ex.: `#`).  
  - O monitor serial confirma: *"Modo X selecionado."*

- **O usuário deve** utilizar o teclado de membrana para inserir parâmetros:  
  - Exemplo: digitar um número que represente a **distância limite** para alerta (quando o sensor de distância detecta objeto mais próximo do que esse valor).  
  - Exemplo: digitar o **nível de água crítico**.  
  - O sistema exibe: *"Parâmetro atualizado: distância crítica = 50 cm."*

- **O usuário deve** observar os resultados no monitor serial:  
  - No modo contínuo, os valores dos sensores são exibidos a cada ciclo de leitura.  
  - No modo sob demanda, o usuário pressiona uma tecla (ex.: `*`) e o sistema lê todos os sensores naquele instante.  
  - No modo de teste, cada sensor retorna uma mensagem do tipo *"Sensor de distância OK – leitura atual: 120 cm"*.

- **Se um valor crítico for detectado** (ex.: objeto abaixo da distância configurada, nível de água acima do limite):  
  - O monitor serial deve exibir claramente:  
    *"ALERTA: distância inferior ao limite!"*  
    ou  
    *"ALERTA: nível de água crítico!"*  

---

5. **Organização do código:**
   - Estruturar o *sketch* em funções (ex.: `leJoystick()`, `leTeclado()`, `leSensores()`, `exibeResultados()`).
   - Comentar adequadamente, explicando o papel de cada parte do código.
   - Modularização e clareza do código serão considerados na avaliação.

---

## III) Entregas adicionais:

- **Documento técnico em PDF** contendo:
  - Diagrama de ligação dos componentes;
  - Descrição textual do funcionamento;
  - Fluxograma simplificado do sistema;
  - Exemplos de entrada (joystick/teclado) e saídas apresentadas no monitor serial.

---

*Trabalho AP1, Arquitetura de Computadores, Rev. 18/9/25*

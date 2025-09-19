# Enunciado do Trabalho - Projeto Sistema Seletor de Funções

Disciplina Sistemas Digitais, Prof. Clayton J A Silva

**Condições gerais:**

- O trabalho se refere a 40% da nota da primeira avaliação bimestral do período 25.2;
- Os projetos deverão ser desenvolvidos e entregues de acordo com as equipes propostas pelos alunos no grupo de WhatsApp da disciplina;
- Cada grupo deverá possuir um representante junto ao professor, designado na definição do grupo;
- Na data agendada para a entrega **toda a equipe deverá estar presente** - casos particulares serão tratados individualmente;
- Os entregáveis são:
  1. O circuito implementado em software de simulação (Logisim), publicado no GitHub;
  2. Documento técnico em PDF contendo:
     - Tabelas verdade completas;  
     - Equações booleanas;  
     - Simplificação algébrica;  
     - Esquema final do circuito com MUX 8x1, portas lógicas, LEDs e buzzer;  
     - Descrição textual da lógica de funcionamento.
- O documento deve relacionar, em comentário, **nome e matrícula** de todos os componentes do grupo, seguidos da autoavaliação:  
  `NT` – não trabalhou;  
  `TP` – trabalhou parcialmente;  
  `TA` – trabalhou ativamente;  
  Exemplo: `12345 Fulano de Tal TP`;
- **O aluno que trabalhou parcialmente perderá 40% da nota do grupo; o aluno que não trabalhou terá nota 0,0 no trabalho**;
- A avaliação consistirá na verificação do circuito e da documentação entregue, aplicando-se os conceitos:
  - **EXCELENTE (10)** – projeto e documentação completos, todas as funcionalidades atendidas;
  - **ÓTIMO (9)** – entregas realizadas, poucas funcionalidades ausentes;
  - **BOM (7)** – entregas realizadas, mas muitas funcionalidades não atendidas;
  - **INSUFICIENTE (0,0)** – entregas não realizadas.

**Data de apresentação:**
- 10/10/2025 (sexta-feira).

---

## I) Objetivos:

Projetar e implementar um **circuito combinacional** que integre um **multiplexador 8x1**, para selecionar a visualização do resultado de sistemas de controle digital.

---

## II) Escopo:

1. **Dispositivos de controle:**
   - O MUX 8x1 deverá ser comandado por **três chaves** representando as linhas de seleção `S2`, `S1` e `S0`.  
   - Cada estado de seleção deverá ser sinalizado por **LEDs** acoplados às chaves.  

2. **Funções implementadas (entradas X, Y, Z):**
   O circuito deverá implementar três sistemas de controle digital com **três funções booleanas** distintas:

   - **Função 1 (AND, OR, NOT)**: “Sistema de iluminação”  
     A lâmpada acende se houver **presença** (X=1) **OU** se for **período noturno** (Y=1), desde que o modo de economia **não esteja ativo** (Z=1).  
     Equação: `F1 = (X OR Y) AND (NOT Z)`

   - **Função 2 (NAND)**: “Sistema de segurança por portas”  
     O alarme dispara se qualquer porta for aberta.  
     Como a lógica é invertida, usa-se:  
     Equação: `F2 = NAND(X, Y, Z)`

   - **Função 3 (NOR)**: “Sistema de reservatório de água”  
     A bomba liga apenas se **nenhum sensor indicar tanque cheio**.  
     Equação: `F3 = NOR(X, Y, Z)`

3. **Configuração do MUX:**
   - O MUX 8x1 terá três entradas ligadas às funções (`F1`, `F2`, `F3`).  
   - Todas as demais entradas do MUX deverão ser fixadas em `0`.  
   - Seleções válidas:  
     - `000` → F1  
     - `001` → F2  
     - `010` → F3  

4. **Uso do buzzer:**
   - Implementar um circuito para detecção de uma entrada seletora inválida `S2 S1 S0`.  
   - Sempre que o usuário escolher uma seleção inválida, um alarme de buzzer soará continuamente.

---

## III) Lógica de funcionamento mínima (em forma de história):

- **O usuário deve** ligar o circuito. Os LEDs indicam o estado das chaves de seleção (`S2`, `S1`, `S0`).  

- **O usuário deve** selecionar a função desejada movendo as chaves:  
  - Seleção `000` → ativa Função 1 (Iluminação).  
  - Seleção `001` → ativa Função 2 (Segurança).  
  - Seleção `010` → ativa Função 3 (Reservatório).  

- **O usuário deve** alterar as entradas X, Y, Z simulando os sensores. O circuito responde conforme a função selecionada.  

- **Se o usuário selecionar qualquer outra linha do MUX** (`011` até `111`), a saída do MUX será `0`, o inversor gerará `1` e o **buzzer tocará continuamente**, indicando uma configuração inválida.  

---

## IV) Entregas adicionais:

- Documento técnico em PDF contendo:
  - Tabelas verdade das funções;  
  - Equações booleanas com simplificação;  
  - Mapeamento das entradas e seleções do MUX 8x1;  
  - Diagrama do circuito completo (portas, MUX, LEDs e buzzer);  
  - Explicação da lógica de funcionamento conforme a história apresentada.

---

*Trabalho AP1, Sistemas Digitais, Rev. 18/9/25*

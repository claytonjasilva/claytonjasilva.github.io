# Enunciado do Trabalho - Projeto Arduino: Sistema de Detecção de Alvo

Disciplina Arquitetura de Computadores, Prof. Clayton J A Silva

**Condições gerais:**

- O trabalho se refere a 30% da nota da primeira avaliação bimestral do período 25.1;
- Os projetos deverão ser desenvolvidos e entregues de acordo com as equipes definidas em sala - **não serão aceitas entregas fora do grupo**;
- Cada grupo deverá possuir um representante junto ao professor, designado na definição do grupo;
- Na data agendada para a entrega **toda a equipe deverá estar presente** - o aluno ausente perderá 40% da pontuação auferida pelo grupo;
- Os entregáveis do projeto são: (i) o código do *sketch* do sistema, compartilhado pelo representante na conta do projeto no GitHub; (ii) o *shield* com o protótipo dos componentes interligados à placa do Arduíno;
- O *sketch* deverá relacionar, como comentário, **nome e matrícula** de todos os componentes do grupo, seguidos da auto-avaliação 'NT'-não trabalhou, 'TP'-trabalhou parcialmente, 'TA'-trabalhou ativamente - por exemplo, 12345 Fulano de Tal NT;
- **O aluno que trabalhou parcialmente perderá 40% da pontuação atribuída ao grupo; O aluno que não trabalhou terá nota 0,0 no trabalho**;
- A avaliação consistirá na verificação e aplicação de testes ao protótipo construído, aplicando-se os conceitos EXCELENTE, 10, *shield* e *sketch* apresentados, todas as funcionalidades atendidas; ÓTIMO, 9, *shield* e *sketch* apresentados, algumas funcionalidades não atendidas; BOM, 7, *shield* e *sketch* apresentados, muitas funcionalidades não atendidas; INSUFICIENTE, 0,0, *shield* e *sketch* não apresentados;
- **Datas de apresentação:**   
-- 24/4/2025 (quinta-feira);  
-- 29/4/2025 (terça-feira);    
-- 30/4/2025 (quarta-feira);  

## I) Objetivos:

Desenvolver um sistema de monitoramento e controle com o microcontrolador Arduino, que permita:

1. **Explorar entradas e saídas digitais**, integrando sensores e atuadores.
2. **Trabalhar com a IDE Arduíno para elaboração do *sketch***.

## II) Escopo:

O sistema deve detectar a presença de um objeto, utilizando o **módulo de sensor ultrassônico**.

A detecção deverá ocorrer da forma abaixo:
- Não deverá produzir **alarme sonoro (*buzzer*)** se o objeto estiver a uma distância superior a 4 metros.
- Entre 2m e 4m, o sistema deverá produzir um alerta visual, utilizando 3 (três) ***leds* (diodo emissor de luz)***, e alarme sonoro intermitente em uma frequência moderada, a ser definida pelo projeto. Os *leds* devem 'piscar' alternadamente também em uma frequência moderada.
- Entre 1m e 2m, deverá produzir alarme visual, utilizando 4 (quatro) *leds*, e alarme sonoro com frequência maior do que a anterior. A frequência com que os *leds* devem piscar deve ser também maior do que na situação anterior.
- Abaixo de 1m, 5 (cinco) *leds* deverão permanecer acesos continuamente e o alarme sonoro também deverá ser **contínuo**.

O sistema deverá possuir uma **combinação de chaves (simulada por *jumpers*)**. Cada combinação equivale a um funcionamento específico:  
- Ambas as chaves iguais a 0, (00), sistema desligado;
- 01 ou 10, desliga o alarme sonoro, mantendo o funcionamento dos *leds* normal; e
- Ambas as chaves iguais a 1, (11), sistema em operação normal.   
- Os valores das chaves devem ser indicados por um par de *leds*.

Utilizar o **monitor serial**, exibindo em tempo real a distância detectada.

Outros requisitos:  
1. Calibrar o sensor ultrassônico.
2. Utilizar *leds* com cores que sugiram uma interface do sistema compatível com as funcionalidades.
3. Estruturar o *sketch* em funções, assim como aplicar outras técnicas para apresentação de um código claro e de fácil manutenção, como comentários etc.

---
*Trabalho AP1, Arquitetura de Computadores, Rev. 17/4/25*

# Enunciado do Trabalho - Projeto Mux e Somador Binário com controle assíncrono

Disciplina Sistemas Digitais, Prof. Clayton J A Silva

**Condições gerais:**

- O trabalho se refere a 30% da nota da primeira avaliação bimestral do período 25.1;
- Os projetos deverão ser desenvolvidos e entregues de acordo com as equipes definidas em sala;
- Cada grupo deverá possuir um representante junto ao professor, designado na definição do grupo;
- Na data agendada para a entrega **toda a equipe deverá estar presente** - casos particulares serão tratados individualmente;
- Os entregáveis do projeto são: 
    (i) Análise do pedido, com elaboração do Mapa K, minimização e esquema do circuito (sugestão: utilizar o EasyEDA ou similar);
    (ii) memorial descritivo, contendo uma relação simples dos componentes utilizados e breve descrição de cada um (tipo, código de identificação, fabricante, função e quantidade utilizada); 
    (iii) protótipo construído em *protoboard*.
- Cada artefato de documentação do projeto (memorial descritivo e esquemas) deverá conter os nomes dos integrantes do grupo;
- A avaliação consistirá na verificação e aplicação de testes ao protótipo construído, bem como na análise dos artefatos, aplicando-se os conceitos EXCELENTE, 10, protótipo e documentação entregues, todas as funcionalidades atendidas; ÓTIMO, 9, protótipo e documentação entregues, algumas funcionalidades não atendidas; BOM, 7, protótipo e documentação entregues, muitas funcionalidades não atendidas; INSUFICIENTE, 0,0, protótipo e documentação não entregues.
- **A submissão do trabalho será no dia 25 de abril de 2025**.

## I) Objetivos:

Desenvolver um sistema digital que apresente as seguintes funcionalidades:

1. O sistema é comandado por uma chave, que pode assumir dois valores Low (L) ou High (H), e contém três entradas A,B,C;
2. A chave configurada em L, sinaliza operação do circuito como um **multiplexador**.
    - A=L, implica que o valor da entrada B será transferido para uma saída S0; A=H, implica que o valor da entrada C será transferido para a saída;
3. A chave configurada em H, sinaliza operação do circuito como um somador de três bits (**somador completo**), conforme discutido em sala.


## II) Escopo:

O sistema deve incluir:

1. LEDs amarelos de sinalização, indicando a configuração da chave;
2. Botões tipo *Push-Button* para selecionar os bits da soma binária;
4. LEDs vermelhos de sinalização, indicando as saídas.

Os artefatos entregues:

1. O memorial descritivo deve ser objetivo, contendo os seguintes tópicos: título, integrantes do grupo, descrição geral da solução proposta, relação simples dos componentes utilizados, breve descrição de cada componente, fabricante/código de identificação, função e quantidade utilizada;
2. Os esquemas devem ser completos, incluindo as entradas e saídas lógicas, alimentação, GND e identificação do grupo.

## III) Apresentação do sistema

A apresentação consistirá na verificação das funcionalidades exigidas.

Pede-se ao representante do grupo que registre a apresentação em vídeo e o encaminhe ao Professor.

---
*Trabalho AP1, Sistemas Digitais, Rev. 10/4/25*

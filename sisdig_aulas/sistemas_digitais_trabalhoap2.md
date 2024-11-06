# Enunciado do Trabalho - Projeto Somador Paralelo/Serial comandado por contador crescente cíclico

Disciplina Sistemas Digitais, Prof. Clayton J A Silva

**Condições gerais:**

- O trabalho se refere a 30% da nota da segunda avaliação bimestral do período 24.2;
- Os projetos deverão ser desenvolvidos e entregues de acordo com as equipes propostas pelos alunos no grupo de WhatsApp da disciplina - mesmos grupos constituídos para o trabalho da AP1;
- Cada grupo deverá possuir um representante junto ao professor, para interlocução e retirada de dúvidas. **O representante será o responsável pela submissão (atualização) dos artefatos nos respectivos branches no repositório do projeto no GitHub**. 
- Data de entrega: **27 de novembro de 2024**, logo após a aplicação da AP2 - todos os alunos de cada grupo deverão estar presentes;
- Os entregáveis do projeto são: 
    (i) memorial descritivo, uma relação simples dos componentes utilizados, com uma breve descrição de cada um contendo tipo, código de identificação, fabricante, função e quantidade utilizada, **incluindo e revisando o memorial descritivo proposto para a AP1**; 
    (ii) esquema construído utilizando-se o EasyEDA, **incluindo e revisando o esquema proposto para a AP1**; 
    (iii) **protótipo construído em pa+laca de circuito impresso**.
- Cada artefato de documentação do projeto (memorial descritivo e esquema) deverá conter os nomes dos integrantes do grupo;
- A avaliação consistirá na verificação e aplicação de testes ao protótipo construído, bem como na análise dos artefatos, aplicando-se os conceitos EXCELENTE, 10, protótipo e documentação entregues, todas as funcionalidades atendidas; ÓTIMO, 9, protótipo e documentação entregues, algumas funcionalidades não atendidas; BOM, 7, protótipo e documentação entregues, muitas funcionalidades não atendidas; INSUFICIENTE, 0,0, protótipo e documentação não entregues.

## I) Objetivos:

Desenvolver um sistema digital que apresente as seguintes funcionalidades:

1. Realizar a soma dois números binários de 4 bits;
2. **Utilizando um contador, converter, sincronamente, a representação paralela da soma obtida, S<sub>5</sub>S<sub>4</sub>S<sub>3</sub>S<sub>2</sub>S<sub>1</sub>S<sub>0</sub>, em uma sequência serial na saída do sistema**.

## II) Escopo:

O sistema deve incluir:

1. LEDs amarelos de sinalização, indicando o resultado da soma binária obtida;
2. *Dip Switches*, para chavear as entradas binárias de 4 bits;
3. **Contador crescente baseado em FF**;
4. LED vermelho de sinalização, indicando a sequência serial de saída (aceso = 1; apagado = 0).

Os artefatos entregues:

1. O memorial descritivo deve ser objetivo, contendo os seguintes tópicos: título, integrantes do grupo, descrição geral da solução proposta, relação simples dos componentes utilizados, breve descrição de cada componente, fabricante/código de identificação, função e quantidade utilizada;
2. Os esquemas devem ser elaborados no EasyEDA, incluindo as entradas e saídas lógicas, alimentação, GND e identificação do grupo.

## III) Apresentação do sistema

A apresentação consistirá na verificação das seguintes funcionalidades:
1. Inserir os números binários *A* e *B* mediante o uso de *Dip Switches*;
2. Verificar o resultado da soma binária pela observação dos LEDs de sinalização;
3. Transferir os bits da saída paralela do somador para a saída serial do sistema mediante **a conexão do contador crescente cíclico**. Será utilizado o gerador de sinal para alimentação do sinal de *clock*.


---
*Trabalho AP2, Sistemas Digitais, Rev. 06/11/24*

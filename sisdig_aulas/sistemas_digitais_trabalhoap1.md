# Enunciado do Trabalho - Projeto Somador Paralelo/Serial

Disciplina Sistemas Digitais, Prof. Clayton J A Silva

**Condições gerais:**

- O trabalho se refere a 30% da nota da primeira avaliação bimestral do período 24.2;
- Os projetos deverão ser desenvolvidos e entregues de acordo com as equipes propostas pelos alunos no grupo de WhatsApp da disciplina;
- Cada grupo deverá possuir um representante junto ao professor, designado na definição do grupo;
- Na data agendada para a entrega **toda a equipe deverá estar presente** - casos particulares serão tratados individualmente;
- Os entregáveis do projeto são: 
    (i) memorial descritivo, uma relação simples dos componentes utilizados, com uma breve descrição de cada um contendo tipo, código de identificação, fabricante, função e quantidade utilizada; 
    (ii) esquema construído utilizando-se o EasyEDA; 
    (iii) protótipo construído em *protoboard*;
    (iv) proposta esquemática, **proposto no EasyEDA**, de subtrator de 4 bits usando somador binário de 4 bits;
- Cada artefato de documentação do projeto (memorial descritivo e esquemas) deverá conter os nomes dos integrantes do grupo;
- A avaliação consistirá na verificação e aplicação de testes ao protótipo construído, bem como na análise dos artefatos, aplicando-se os conceitos EXCELENTE, 10, protótipo e documentação entregues, todas as funcionalidades atendidas; ÓTIMO, 9, protótipo e documentação entregues, algumas funcionalidades não atendidas; BOM, 7, protótipo e documentação entregues, muitas funcionalidades não atendidas; INSUFICIENTE, 0,0, protótipo e documentação não entregues.
- **A submissão do trabalho será no dia 09 de outubro de 2024**.

## I) Objetivos:

Desenvolver um sistema digital que apresente as seguintes funcionalidades:

1. Realizar a **soma dois números binários de 4 bits**;
2. Utilizando chaves de seleção, converter, assincronamente, a representação paralela da soma obtida, S<sub>5</sub>S<sub>4</sub>S<sub>3</sub>S<sub>2</sub>S<sub>1</sub>S<sub>0</sub>, em uma sequência serial na saída do sistema.

## II) Escopo:

O sistema deve incluir:

1. LEDs amarelos de sinalização, indicando o resultado da soma binária obtida;
2. *Dip Switches*, para chavear as entradas binárias de 4 bits;
3. Botões tipo *Push-Button* para selecionar os bits da soma binária para a saída serial do sistema;
4. LED vermelho de sinalização, indicando a sequência serial de saída (aceso = 1; apagado = 0).

Os artefatos entregues:

1. O memorial descritivo deve ser objetivo, contendo os seguintes tópicos: título, integrantes do grupo, descrição geral da solução proposta, relação simples dos componentes utilizados, breve descrição de cada componente, fabricante/código de identificação, função e quantidade utilizada;
2. Os esquemas devem ser elaborados no EasyEDA, incluindo as entradas e saídas lógicas, alimentação, GND e identificação do grupo.

## III) Apresentação do sistema

A apresentação consistirá na verificação das seguintes funcionalidades:
1. Inserir os números binários *A* e *B* mediante o uso de *Dip Switches*;
2. Verificar o resultado da soma binária pela observação dos LEDs de sinalização;
3. Transferir os bits da saída paralela do somador para a saída serial do sistema mediante o uso das chaves *Push-Button*

## IV) Considerações complementares

Propor um esquema, utilizando o EasyEDA que possibilite **realizar a subtração binária utilizando um somador de 4 bits**. Sugere-se utilizar o conceito de subtração utilizando operação de complemento de 1.

---
*Trabalho AP1, Sistemas Digitais, Rev. 26/9/24*

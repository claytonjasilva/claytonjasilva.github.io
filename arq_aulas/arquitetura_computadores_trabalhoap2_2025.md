# Enunciado do Trabalho - Projeto Sistema Busca em Tabela de Memória

Disciplina Arquitetura de Computadores, Prof. Clayton J A Silva

**Condições gerais:**

- O trabalho se refere a 30% da nota da segunda avaliação bimestral do período 25.1;
- **Data da entrega: no dia da segunda avaliação parcial.** O representante do grupo deverá submeter o trabalho no respectivo para o e-mail clayton.silva@ibmec.edu.br.
- Os projetos deverão ser desenvolvidos e entregues de acordo com as equipes definidas em sala - **mesmo grupo do trabalho da AP1**;
- O código em *assembly* deverá relacionar, como comentário, **nome e matrícula** de todos os componentes do grupo, seguidos da auto-avaliação 'NT'-não trabalhou, 'TP'-trabalhou parcialmente, 'TA'-trabalhou ativamente - por exemplo, 12345 Fulano de Tal NT;
- **O aluno que trabalhou parcialmente perderá 40% da pontuação atribuída ao grupo; O aluno que não trabalhou terá nota 0,0 no trabalho**;
- A avaliação consistirá na verificação do código, aplicando-se os conceitos EXCELENTE, ÓTIMO, BOM, INSUFICIENTE; avaliando o seguinte
   - clareza - especialmente contendo os comentários explicativos do código - 10%;  
   - funcionalidades do código (de acordo com o estabelecido no escopo) - 60%;
   - fluxograma do código implementado - 30%.

## I) Objetivos:

1. Compreender e implementar o controle de memória em sistemas de baixo nível. Desenvolver a habilidade de gerenciar e manipular diretamente a memória de um microcontrolador, aplicando conceitos de organização e acesso a diferentes regiões de memória (IRAM).
2. Praticar a programação em Linguagem Assembly para arquiteturas de microcontroladores. Aplicar a Linguagem Assembly no desenvolvimento de um sistema operacional controlador de memória, aprimorando o entendimento da programação de baixo nível e da estrutura interna dos microcontroladores.
3. Explorar a interação entre hardware e software em microcontroladores. Fortalecer a compreensão de como o software controla e interage com componentes de hardware, como portas de entrada/saída e registradores, para ler, processar e apresentar dados.
4. Desenvolver e implementar rotinas de processamento de dados em memória. Criar rotinas eficientes para leitura, armazenamento, busca e contagem de caracteres em memória, aplicando técnicas de manipulação de dados e controle de fluxo em Assembly.
5. Promover a aplicação de práticas de projeto e documentação em sistemas de computação. Implementar um projeto modularizado e documentado, incluindo a utilização de diretivas, macros e comentários detalhados, de forma a garantir a clareza, a manutenção e a reutilização do código, reforçando boas práticas de desenvolvimento.

## II) Escopo:

O código deverá ser elaborado em linguagem de montagem (*assembly*), de forma a ser testado utilizando-se o Assembler do Atmega2560 do MicroChip Studio, considerando o que segue:

1. Armazenar uma **tabela com o respectivo código ASCII referente a 15 caracteres alfanuméricos arbitrários - maiúsculas, minúsculas e dígitos -** na memória IRAM do Atmega2560, no padrão ASCII, a partir do endereço 0x200. **Os caracteres devem ser inseridos na sua representação ASCII.**

2. Inicializar o sistema uma frase com no máximo 30 caracteres (admitir espaços em branco) armazenada nas posições de memória 0x300, **contendo o nome e os quatro primeiros dígitos da matrícula** de um dos componentes do grupo. Obs. Cadastrar uma frase em memória para testes e simulação.

3. O programa deve ler cada caractere pertencente à frase; testar se o caractere pertence à tabela de caracteres; e montar um  nova tabela em um espaço qualquer de memória que contenha a representação ASCII do caractere, a quantidade de vez que aparece na frase e 0/1 (indicando se pertence ou não à tabela de caracteres).

4. Apresentar o fluxograma de funcionamento do código.

## III) Informações complementares

- O código deverá incluir as diretivas necessárias para o correto funcionamento do Assembler do Atmega2560.
- O uso de macros poderá ser feito para simplificar operações que sejam repetitivas, garantindo a modularidade e clareza do código.
- **Utilizar estritamente os comandos necessários**. As soluções baseadas em orientações do ChatGpt e outras IA podem induzir o uso de comandos desnecessários.
- Utilizar explicitamente os registradores de ponteiros.
- **Apresentar como comentário** a justificativa para a escolha dos registradores.
- O código deverá ser comentado de forma a proporcionar legibilidade e facilitar a manutenção.
- O código deve ser modular, com sub-rotinas claramente definidas para cada funcionalidade descrita nos objetivos.
- As funções devem estar organizadas de forma que possam ser chamadas e testadas individualmente.

---
*Trabalho AP2, Arquitetura de Computadores, Rev. 30/5/2025*

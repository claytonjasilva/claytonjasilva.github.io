# Enunciado do Trabalho - Projeto Sistema Controlador de Tabela de Caracteres

Disciplina Arquitetura de Computadores, Prof. Clayton J A Silva

**Condições gerais:**

- O trabalho se refere a 30% da nota da segunda avaliação bimestral do período 24.2;
- **Data da entrega: até o final do dia da segunda avaliação parcial.** O representante do grupo deverá submeter o trabalho no respectivo *branch* do repositório do projeto no GitHub.
- Os projetos deverão ser desenvolvidos e entregues de acordo com as equipes definidas em sala - **não serão aceitas entregas fora do grupo**;
- Cada grupo deverá possuir um representante junto ao professor - **os grupos e o representante devem ser os mesmos constituídos para o trabalho da AP1**;
- O código em *assembly* deverá relacionar, como comentário, **nome e matrícula** de todos os componentes do grupo, seguidos da auto-avaliação 'NT'-não trabalhou, 'TP'-trabalhou parcialmente, 'TA'-trabalhou ativamente - por exemplo, 12345 Fulano de Tal NT;
- **O aluno que trabalhou parcialmente perderá 40% da pontuação atribuída ao grupo; O aluno que não trabalhou terá nota 0,0 no trabalho**;
- A avaliação consistirá na verificação do código, aplicando-se os conceitos EXCELENTE, ÓTIMO, BOM, INSUFICIENTE; avaliando o seguinte
   - clareza - 10%;  
   - funcionalidades (de acordo com o estabelecido no escopo) - 90%.

## I) Objetivos:

1. Compreender e implementar o controle de memória em sistemas de baixo nível. Desenvolver a habilidade de gerenciar e manipular diretamente a memória de um microcontrolador, aplicando conceitos de organização e acesso a diferentes regiões de memória (IRAM).
2. Praticar a programação em Linguagem Assembly para arquiteturas de microcontroladores. Aplicar a Linguagem Assembly no desenvolvimento de um sistema operacional controlador de memória, aprimorando o entendimento da programação de baixo nível e da estrutura interna dos microcontroladores.
3. Explorar a interação entre hardware e software em microcontroladores. Fortalecer a compreensão de como o software controla e interage com componentes de hardware, como portas de entrada/saída e registradores, para ler, processar e apresentar dados.
4. Desenvolver e implementar rotinas de processamento de dados em memória. Criar rotinas eficientes para leitura, armazenamento, busca e contagem de caracteres em memória, aplicando técnicas de manipulação de dados e controle de fluxo em Assembly.
5. Promover a aplicação de práticas de projeto e documentação em sistemas de computação. Implementar um projeto modularizado e documentado, incluindo a utilização de diretivas, macros e comentários detalhados, de forma a garantir a clareza, a manutenção e a reutilização do código, reforçando boas práticas de desenvolvimento.

## II) Escopo:

O código deverá ser elaborado em linguagem de montagem (*assembly*), de forma a ser testado utilizando-se o Assembler do Atmega2560 do MicroChip Studio, considerando o que segue:

1. Armazenar uma **tabela de caracteres alfanuméricos (maiúsculas, minúsculas e dígitos)** na memória IRAM do Atmega2560, no padrão ASCII, a partir do endereço 0x200. Armazenar também o código ASCII do **espaço em branco (0x20)**. Armazenar também o código correspondente ao comando **`<ESC>` (0x1B)**.

2. Caso seja disponibilizado em uma porta de entrada o **código 0x1C**, ler uma sequência de caracteres em uma porta de entrada, usando a instrução `IN`, criando uma **tabela de sequência de caracteres**. Quando for lida o caractere `<ESC>` o programa deverá interromper a leitura. Os dados lidos devem ser armazenados em um espaço limitado de memória entre **0x300 a 0x400**. Poderão ser lidas várias sequências de caracteres diferentes, ocupando o espaço destinado ainda disponível. Quando for alcançado o limite do espaço a leitura deverá ser interrompida. Cada sequência de caracteres deve ser finalizada por um marcador de espaço em branco, que ocupa uma posição de endereço antes da próxima sequência. Caso o caractere disponibilizado na entrada não seja válido, ler um novo caractere em loop até a entrada apresentar um caractere válido.

3. Caso seja disponibilizado em uma porta de entrada o **código 0x1D**, determinar o número de caracteres presentes na **tabela de sequência de caracteres**. Armazenar o resultado no endereço de memória 0x401, apresentando também o resultado em uma porta de saída, utilizando uma instrução `OUT`.

4. Caso seja disponibilizado em uma porta de entrada o **código 0x1E**, ler um novo byte correspondente a um caractere em uma porta de entrada e contar o número de vezes que o caractere está presente na **tabela de sequência de caracteres**. Armazenar o resultado no endereço de memória 0x402. Verificar se o caractere de entrada é válido. Caso o caractere disponibilizado na entrada não seja válido, ler um novo caractere em loop até a entrada apresentar um caractere válido.

5. Armazenar uma **tabela de caracteres frequentes** com os 10 caracteres com maior frequência na faixa de endereços entre **0x400 e 0x500**, mantendo atualizada o respectivo número de ocorrências por caractere.  

6. Cada operação realizada deverá, além de armazenar o resultado nas posições de memória indicada, apresentar em uma porta de saída.

## III) Informações complementares

Complementação o que foi apresentado,

### 1. Diretivas e Macros do Assembler
- O código deverá incluir as diretivas necessárias para o correto funcionamento do Assembler do Atmega2560.
- O uso de macros poderá ser feito para simplificar operações que sejam repetitivas, garantindo a modularidade e clareza do código.

### 2. Comentários no Código
- O código deverá ser comentado de forma a proporcionar legibilidade e facilitar a manutenção.
- Todos os integrantes do grupo devem ter seus nomes e matrículas mencionados como comentário no início do código, seguidos de uma autoavaliação que indique a contribuição de cada um (`NT`, `TP`, `TA`).

### 3. Estrutura e Organização
- O código deve ser modular, com sub-rotinas claramente definidas para cada funcionalidade descrita nos objetivos.
- As funções devem estar organizadas de forma que possam ser chamadas e testadas individualmente.

### 4. Configuração e testes de portas de entrada e saída

#### 4.1 Configuração da Porta de Entrada

A porta de entrada deve ser configurada definindo o registrador de direção de dados `DDRx` com o valor `0x00`.

   ```asm
   clr r16          ; R16 como 0 para configurar os pinos como entrada
   out DDRD, r16    ; Configura todos os pinos de PORTD como entrada
   ```

A instrução IN deve ser usada para ler um byte da porta de entrada e armazená-lo em um registrador.

```
in r18, PIND     ; Lê o valor dos pinos de PORTD e armazena em R18
```

#### 4.2 Configuração da Porta de Saída

A porta de saída deve ser configurada definindo o registrador de direção de dados `DDRx` com o valor `0xFF`.

   ```asm
   ldi r18,0xFF     ; R16 como FF para configurar os pinos como saída
   out DDRC, r18    ; Configura todos os pinos de PORTC como saída
   ```

Os resultados das operações devem ser exibidos em uma porta de saída específica.

```
out PORTC, r18   ; Apresenta o resultado na porta de saída PORTC
```


---
*Trabalho AP1, Arquitetura de Computadores, Rev. 8/11/24*

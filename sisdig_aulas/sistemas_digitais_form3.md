# Sistemas Digitais 2024.2  

## Formulário 3 - Projeto de circuitos combinacionais  

1. Qual das alternativas abaixo descreve corretamente um circuito combinacional?

- [ ] Um circuito onde a saída depende apenas dos valores atuais de entrada.  
- [ ] Um circuito onde a saída depende do histórico dos valores de entrada.  
- [ ] Um circuito onde a saída depende tanto dos valores atuais quanto passados de entrada.  
- [ ] Um circuito que utiliza flip-flops para armazenar estado.  

2. Dentre as opções abaixo, qual é um exemplo típico de um circuito combinacional?

- [ ] Contador  
- [ ] Registrador  
- [ ] Somador  
- [ ] Flip-flop  

3. Qual das seguintes técnicas é comumente usada para simplificar expressões lógicas no projeto de circuitos combinacionais?

- [ ] Mapa de Karnaugh  
- [ ] Diagrama de estados  
- [ ] Algoritmo de Dijkstra  
- [ ] Algoritmo de Euclides  

4. Um somador completo possui:

- [ ] Duas entradas e uma saída  
- [ ] Três entradas e duas saídas  
- [ ] Duas entradas e duas saídas  
- [ ] Três entradas e uma saída  

5. Para minimizar o uso de portas lógicas em um circuito combinacional, qual técnica pode ser aplicada para otimizar a função booleana correspondente?

- [ ] Utilização de flip-flops  
- [ ] Simplificação com mapa de Karnaugh  
- [ ] Adição de mais portas lógicas  
- [ ] Introdução de memórias no circuito  

6. Explique sinteticamente a diferença básica entre circuitos combinacionais e circuitos sequenciais em sistemas digitais.

---

7. Aplicando os teoremas e axiomas da Lógica Matemática para minimização, propor os circuitos para implementar expressões mínimas logicamente equivalentes a:

- a. (A⋅B + A⋅~B)⋅(A + B)  
- b. (A + A⋅B) + (A⋅~B)  
- c. (A⋅B + A⋅~B)⋅(A + ~B)  
- d. (A + A⋅B)⋅(A + ~B)  
- e. (A + A⋅B) + (A⋅B)⋅(A + ~B)  

8. Apresentar as expressões logicamente equivalentes às expressões acima na forma canônica da soma de produtos.

---

9. Dadas as expressões abaixo, selecionar a expressão que não corresponde à forma canônica.

- [ ] f(A,B,C) = A⋅B⋅C + A⋅B⋅~C  
- [ ] f(A,B,C) = A⋅B⋅C + ~A⋅B⋅C + ~A⋅~B⋅~C  
- [ ] f(A,B,C) = A⋅B + A⋅~C  
- [ ] f(A,B,C) = (A + B + C)⋅(A + ~B + ~C)⋅(~B + ~A + ~C)  

10. Um sistema de controle de elevador precisa acionar motores para mover o elevador entre três andares: térreo (0), primeiro (1), e segundo (2). O sistema usa dois bits para representar os andares. No entanto, como são apenas três andares, a combinação binária 11 não é usada.

**Problema**:  
Crie uma função lógica para controlar o movimento do elevador entre os andares, utilizando Don't Care para a combinação binária 11, que não representa nenhum andar válido.

---

11. Um sistema de controle de temperatura é responsável por monitorar e ajustar a temperatura em uma fábrica. O sistema utiliza quatro sensores digitais, cada um representando uma variável binária de entrada:

- A: Sensor de temperatura ambiente (1 = quente, 0 = frio)  
- B: Sensor de umidade (1 = alta, 0 = baixa)  
- C: Sensor de calor gerado pelas máquinas (1 = alta, 0 = baixa)  
- D: Sensor de fluxo de ar (1 = fluxo suficiente, 0 = insuficiente)

O sistema precisa decidir se deve acionar o sistema de resfriamento com base nas combinações dos valores desses sensores. No entanto, algumas combinações de valores de entrada podem ser Don't Care, já que certas combinações de sensores nunca ocorrem na prática devido à limitação das condições ambientais (por exemplo, pode não ocorrer alta umidade com fluxo insuficiente de ar).

**Problema**:  
Projete a função lógica que define quando o sistema de resfriamento deve ser ativado, utilizando os Don't Care para combinações irrelevantes de sensores.

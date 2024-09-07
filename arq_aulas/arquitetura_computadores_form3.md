# Arquitetura de Computadores 2024.2
**Formulário 3 - Máquina IAS. Conceitos iniciais sobre programação em linguagem de montagem.**

---

1. Estudamos os elementos internos à CPU da máquina IAS. Na visão da arquitetura da máquina computacional segundo um modelo em camadas, o nível desses elementos é designado como:

- [ ] Nível de sistema operacional
- [ ] Nível de máquina
- [ ] Nível de microarquitetura
- [ ] Nível de lógica digital

2. Tanto a Unidade de Controle quanto a Unidade Lógica e Aritmética possuem elementos internos para armazenamento de dados. Tipicamente esses elementos possuem baixa capacidade de armazenamento, porém elevada velocidade. São designados:

- [ ] Registradores
- [ ] Cache
- [ ] Memória RAM
- [ ] Contadores

---

3. A respeito dos elementos comentados na questão anterior, aqueles que armazenam os dados produzidos pelas operações dos circuitos lógicos e aritméticos são:

- [ ] ACC
- [ ] MBR
- [ ] MQ
- [ ] IBR
- [ ] IR
- [ ] MAR

---

4. No ciclo de instruções da máquina IAS, um elemento é o responsável pelo armazenamento e contagem automática do próximo endereço do par de instruções a ser buscado. Ele é incrementado sempre de 1 em cada linha de instruções executada. O elemento é:

- [ ] Acumulador
- [ ] Program Counter
- [ ] Memory Buffer Register
- [ ] Instruction Register
- [ ] Memory Address Register

---

5. As instruções da máquina IAS possuem 20 bits. Os 8 bits mais significativos constituem o opcode. No limite, quantas instruções distintas o processador poderia possuir no set de instruções?

- [ ] 20 instruções
- [ ] 8 instruções
- [ ] 256 instruções
- [ ] 12 instruções
- [ ] 160 instruções

---

6. A representação de dados negativos na máquina de von Neumann utiliza a representação em bit sinal de números negativos. Nessa representação o bit mais significativo 0 indica número positivo; bit 1, número negativo. Como os dados são representados em 40 bits, qual seria o maior número positivo representado na máquina? Como ele seria representado em notação hexadecimal?

---

7. Os opcodes possuem uma representação binária (abstração de sinais elétricos) que possibilita o chaveamento dos microcircuitos especializados para a realização das instruções. Cada opcode identifica de forma inequívoca a instrução a ser executada e geralmente opera referenciando o dado pelo operando. Opcode e operando definem uma instrução. Os programas cujas instruções são binárias são chamados de:

- [ ] Programa em linguagem de montagem
- [ ] Programa de alto nível
- [ ] Programa em linguagem de máquina
- [ ] Software
- [ ] Assembler

---

8. Os opcodes possuem uma representação binária (abstração de sinais elétricos) que possibilita o chaveamento dos microcircuitos especializados para a realização das instruções. Cada opcode identifica de forma inequívoca a instrução a ser executada e geralmente opera referenciando o dado pelo operando. Opcode e operando definem uma instrução. Os programas cujas instruções utilizam representações simbólicas das respectivas representações binárias são chamados de:

- [ ] Programa em linguagem de montagem
- [ ] Programa de alto nível
- [ ] Programa em linguagem de máquina
- [ ] Software
- [ ] Assembler

---

9. Desenvolva um programa em linguagem de montagem da máquina IAS que some dois números inteiros armazenados em posições de memória 0x01A e 0x01B. O resultado da soma deve ser armazenado na posição de memória 0x01C.

---

10. Desenvolva um programa em linguagem de montagem da máquina IAS que some dois números inteiros armazenados em posições de memória 0x01A e 0x01B. Se o resultado da soma for maior (OU IGUAL) que um valor de referência armazenado em 0x01D, o resultado da soma deve ser armazenado nas posições de memória 0x01E e 0x01F. Caso contrário, o resultado deve ser armazenado apenas em 0x01C.

---

11. Desenvolva um programa em linguagem de montagem da máquina IAS que some dois números inteiros armazenados em posições de memória 0x01A a 0x01F. Subtrair o resultado dos números armazenados nas cinco posições subsequentes adjacentes. Se o resultado da soma for maior que um valor de referência armazenado em 0x100, o resultado da soma deve ser armazenado nas posições de memória 0x101; em caso contrário, armazenar na posição 0x102.

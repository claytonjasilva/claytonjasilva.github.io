# 3. Máquina de von Neumann ou computador IAS

## 3.1 [Breve histórico](https://pt.wikipedia.org/wiki/Computador_IAS)

A tarefa de carregar e modificar programas nas máquinas historicamente precedentes à máquina IAS era extremamente tediosa.  
A ideia principal da máquina IAS, atribuída a von Neumann, é a do **conceito de progama armazenado**.  
O coonceito de programa armazenado consiste no armazenamento do programa a ser executado pela UCP em memória, juntamente com os dados. O processador busca as instruções e os dados do programa diretamente da memória. Instruções e dados estão armazenados em posições específicas inequívocas da memória, cada uma definida por um **endereço de memória**.

![Organização da máquina IAS](/arq_aulas/images/maquinaIAS.jpg)
 
A estrutura geral da máquina IAS consiste em:
- Uma memória principal, que armazena dados e instruções  
- Uma Unidade Lógica e Aritmética (ULA), capaz de realizar as operações matemáticas binárias e as operações lógicas  
- Uma Unidade de Controle (UC), que interpreta e executa as instruções armazenadas na memória  
- Dispositivos de entrada e saída (E/S) operados pela Unidade de Controle.

## 3.2 Visão detalhada do computador IAS 
A figura abaixo ilustra a organiza detalhada do computador IAS.

![Organizadação datalhada do computador IAS](/arq_aulas/images/maquinaIAS_detalhada.jpg)

1. **Registrador Temporário da Memória** (MBR, *Memory Buffer Register*): capacidade de armazenar 40 bits e contém uma palavra (número ou par de instruções) a ser lida ou escrita na memória.
2. **Acumulador** (Acc) e **Quociente de Multiplicação** (MQ, *Multiplier Quotient*): capacidade de armazenar 40 bits e armazenam temporariamente os operandos e o resultado das operações realizadas pelos circuitos lógicos e aritméticos da ULA. Em operações com mais de 40 bits, o Acc armazena os 40 bits mais significativos e o MQ armazena os 40 bits menos significativos.
3. **Contador do Programa** (PC, *Program Counter*): contador de 10 bits e contém o endereço do próximo par de instruções. Incrementa automaticamente 1 bit em cada instrução executada. 
4. **Registrador de Endereçamento à Memória** (MAR, *Memory Adress Register*): capacidade de armazenar 12 bits e contém o endereço da palavra.
5. **Registrador Temporário de Instruções** (IBR, **Instruction Buffer Register**): capacidade de armazenar 20 bits e contém o código da instrução (opcode) da instrução à direita da palavra.
6. **Registrador de Instruções** (IR, *Instruction Register*): capacidade de armazenar 8 bits e contém o código da instrução (opcode) que está sendo executada.
7. Memória (*Memory*): capacidade de armazenar, em cada linha, 1024 palavras (unidade de informação) de 40 bits cada uma.
8. Dispositivos de Entrada/Saída (I/O, *Input/Output*): leitura e escrita de dados dos dispositivos externos da/para memória.
9. Barramento (*Bus*): meio de comunicação para tráfego dos bits entre os elementos do sistema, para trafegar **dados, endereços ou sinais de controle**.

 



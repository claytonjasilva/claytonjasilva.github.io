# Prática 4 de laboratório. Portas universais. Porta lógica NAND.

1. Identificar a pinagem de um inversor 74HC00N. Acessar o  *datasheet* da [porta NAND 74HC00N](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/74HC00N_Philips.pdf).

- Ler o *datasheet*, identificando **Quad 2-input NAND gate**, ou seja, quatro portas NAND de duas entradas
- identificando DESCRIÇÃO, '...dispositivo CMOS...provê função NAND de duas entradas...'
- identificando especificações mecânicas (temperatura,...)
- identificando tabela de funções, H=nível ALTO de tensão elétrica, L=nível BAIXO de tensão elétrica
- identificado a pinagem: numeração, simbologia, descrição (entrada, saída, alimentação). Ver na figura a **referência da pinagem**.
- identificando as **condições elétricas de operação**:

  - VCC, tensão de alimentação, MIN., TYP. e MAX.
  - VI, tensão de entrada, MIN. e MAX.
  - VO, tensão de saída, MIN. e MAX.
  - VIH, tensão de entrada de alto nível (H)
  - VIL, tensão de entrada de baixo nível (L)

2. **Utilizando uma *protoboard* e uma fonte de tensão**, fazer as ligações de VCC e GND do circuito integrado - **alimentar o CI**. Identificar as tensões recomendadas no **datasheet** para alimentação do circuito.

3. Aplicar as tensões em todas as entradas (VIH, VIL) e verificar as tensões nas saídas (VO) **utilizando um multímetro**, comparando com o especificado no *datasheet*. Obs. Ligar as entradas e saídas com *jumpers*. Tipicamente:

- Conectar o *jumper* ao 0V (-), ou *LOW (L)*, é logicamente equivalente a inserir 0 em uma entrada da porta AND  
- Conectar o *jumper* ao 5V (+), ou *HIGH (H)*, é logicamente equivalente a inserir 1 em uma entrada da porta AND

4. Conectar todas as saídas a um LED seguido por um resistor de 300 ohms e realizar o mesmo teste.

 ___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  

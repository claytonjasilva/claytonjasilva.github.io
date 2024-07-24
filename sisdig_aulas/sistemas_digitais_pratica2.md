# Prática 2 de laboratório. Portas lógicas. Porta lógica OR

1. Identificar a pinagem de uma porta OR 74HC32. Acessar o  *datasheet* dA [porta OR 74HC32](https://claytonjasilva.github.io/sisdig_aulas/SN74HC32N_Texas.pdf).

- Ler o *datasheet*, identificando **Quadruple 2-input positive OR gates**, ou seja, quatro portas OR de duas entradas
- identificando a pinagem na figura
- identificando tabela de funções, H=nível ALTO de tensão elétrica, L=nível BAIXO de tensão elétrica, X representa o ***don't care***, significando que tanto faz, H ou L
- limites da tensão de alimentação, VCC
- identificando as **condições elétricas de operação**:

  - VIH, tensão de entrada de alto nível (H)
  - VIL, tensão de entrada de baixo nível (L)

2. **Utilizando uma *protoboard* e uma fonte de tensão**, fazer as ligações de VCC e GND do circuito integrado - **alimentar o CI**. Identificar as tensões recomendadas no **datasheet** para alimentação do circuito.

3. Aplicar as tensões em todas as entradas (VIH, VIL) e verificar as tensões nas saídas (VO) **utilizando um multímetro**, comparando com o especificado no *datasheet*. Obs. Ligar as entradas e saídas com *jumpers*. Tipicamente:

- Conectar o *jumper* ao 0V (-), ou *LOW (L)*, é logicamente equivalente a inserir 0 em uma entrada da porta AND  
- Conectar o *jumper* ao 5V (+), ou *HIGH (H)*, é logicamente equivalente a inserir 1 em uma entrada da porta AND

4. Conectar todas as saídas a um LED seguido por um resistor de 300 ohms e realizar o mesmo teste.

 ___
 **[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  

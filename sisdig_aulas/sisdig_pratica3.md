# Prática 3 de laboratório: portas lógicas AND

1. Utilizando uma [porta AND 74HC08N](https://claytonjasilva.github.io/sisdig_aulas/74HC08N_Philips.pdf), fazer as ligações de VCC e GND do circuito integrado.
2. Montar o circuito da figura - sugestão: utilizar o software Logisim  
 ![Porta AND](/sisdig_aulas/images_sisdig/praticaand.jpg)  
3. Utilizar as entrada 1A e 1B, conforme especificado no *datasheet*, ligando-as com *jumpers*:    
  - Conectar o *jumper* ao GND (-), ou *LOW (L)*, é logicamente equivalente a inserir 0 em uma entrada da porta AND  
  - Conectar o *jumper* ao 5V (+), ou *HIGH (H)*, é logicamente equivalente a inserir 1 em uma entrada da porta AND
4. **Não esquecer de conectar os pinos de Vcc e GND do CI**
5. Verificar o que acontece com o LED, conectado à saída 1Y quando
   
  | 1A | 1B |
  | - | - |
  | GND | GND |
  | GND | 5V |
  | 5V | GND |
  | 5V | 5V |
6. Utilizando um **multímetro**, selecionar a posição de medida de tensão DC (*V-*) e observar o sinal na saída 1Y.
7. Realizar a mesma prática utilizando a **fonte de tensão DC**.
8. Identificar os demais pinos do 74HC08N e realizar o mesmo experimento. 

 ___
 **[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  

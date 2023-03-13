# Prática 7 de laboratório: porta lógica NOR

1. Utilizando uma [porta NAND 74HC02](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/SN74HC02N_Texas.pdf), **fazer as ligações de VCC e GND do circuito integrado**.
2. Montar o circuito da figura - sugestão: utilizar o software Logisim   
![Porta NOR](/sisdig_aulas/images_sisdig/praticanor.jpg)   
3. Utilizar as entrada 1A e 1B, conforme especificado no *datasheet*, ligando-as com *jumpers*:  
 - Conectar o *jumper* ao GND (-), ou *LOW (L)*, é logicamente equivalente a inserir 0 em uma entrada da porta NAND  
 - Conectar o *jumper* ao 5V (+), ou *HIGH (H)*, é logicamente equivalente a inserir 1 em uma entrada da porta NAND
4. Verificar o que acontece com o LED, conectado à saída 1Y quando  

| 1A | 1B |
| - | - |
| GND | GND |
| GND | 5V |
| 5V | GND |
| 5V | 5V |

5. Utilizando um **multímetro**, selecionar a posição de medida de tensão DC (*V-*) e observar o sinal na saída 1Y.
6. Realizar a mesma prática utilizando a **fonte de tensão DC**.
7. Identificar os demais pinos do 74HC02 e realizar o mesmo experimento. 

 ___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  

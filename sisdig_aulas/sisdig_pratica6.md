# Prática 6 de laboratório: porta lógica NAND

1. Utilizando uma [porta NAND 74HC00N](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/74HC00N_Philips.pdf), **fazer as ligações de VCC e GND do circuito integrado**.
2. Montar o circuito da figura - sugestão: utilizar o software Logisim   
![Inversor lógico](/sisdig_aulas/images_sisdig/praticanand.jpg)   
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
7. Identificar os demais pinos do 74HC000N e realizar o mesmo experimento. 

8. Veja o video com o experimento no [Youtube](https://www.youtube.com/watch?v=0x_Oprqfmzg)

 ___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  

# *Datasheet* - LCD 1602
Referência [LCD 1602](https://www.openhacks.com/uploadsproductos/eone-1602a1.pdf)  
Trata-se de uma família de LCD de 16 caracteres com 2 linhas, monocromático.  

## 1. Especificações

### 1.1 Pinagem

| Id | Função	| Descrição |
| - | - | - |
| 1 |	Gnd |	Terra |
| 2 |	Vcc |	Alimentação DC – 3,3 V a 5V (típico) |
| 3 |	V0 |	Tensão para ajuste de contraste |
| 4 |	RS |	‘Register Select’, Low=comando, High=dados |
| 5	| RW | ‘Read/Write’, Low=gravação, High=leitura |
| 6	| E |	‘Enable’, Low, gatilhada pela borda |
| 7-14 | DB0-7 | ‘Data Bit’, High/Low |
| 15 | A | ‘Anodo’, +5V |
| 16 | K |	‘Catodo’, Gnd |

### 1.2 Operação
1. Os caracteres são apresentados em duas linhas de 16 caracteres cada uma. 
2. O LCD 1602 possui também um cursor, que indica a posição do caractere lido/escrito em um instante. 
3. A pinagem inicia-se a partir do pino 1 – na esquerda superior da figura -, até o pino 16.  
![LCD 1602](/arduino/arduino_images/lcd1602.jpg)  
4. Um esquema de utilização está apresentado na figura  
![Circuito Arduino-LCD 1602](/arduino/arduino_images/arduinolcd1602.jpg)  
  4.1 No pino V0 do LCD 1602 a tensão de entrada será regulada por um potenciômetro de 10 kohms;  
  4.2 O pino RW será conectado ao Gnd porque a operação a ser realizada será somente de escrita no LCD 1602;  
  4.3 Será utilizado o modo de 4-bits do LCD 1602, que, por default, opera em DB4-7;  
  4.4 No *backlight* do LCD 1602 (pinos de anodo e catodo), o pino de anodo será alimentado por uma tensão de + 5VDC com uma proteção dada por um resistor.

## 2. Referência com Arduíno
### Biblioteca [*LiquidCrystal.h*](https://www.arduino.cc/reference/en/libraries/liquidcrystal/?_gl=1*1ho1w4v*_ga*MTA5OTg3MjYxMy4xNjU4MzM3NTM2*_ga_NEXN8H46L5*MTY3NzE2NTk1MS4xNy4wLjE2NzcxNjU5NTEuMC4wLjA.)
Esta biblioteca permite que uma placa Arduino controle monitores LiquidCrystal (LCDs) com base no chipset Hitachi HD44780 (ou compatível), que é encontrado na maioria dos LCDs baseados em texto.  
A biblioteca funciona com no modo de 4 ou 8 bits (ou seja, usando 4 ou 8 linhas de dados, além do *rs*, *enable* e, opcionalmente, as linhas de controle *rw*).

### Função [*LiquidCrytal*](https://www.arduino.cc/reference/en/libraries/liquidcrystal/liquidcrystal/)
Cria uma variável do tipo *LiquidCrystal*.  
A exibição pode ser controlada usando 4 ou 8 linhas de dados.  

### Função [*lcd.begin*](https://www.arduino.cc/reference/en/libraries/liquidcrystal/begin/)
Inicializa a interface para a tela LCD e especifica as dimensões (largura e altura) da tela.  
`begin()` precisa ser chamado antes de qualquer outro comando de biblioteca LCD.  

### Função [*lcd.print*](https://www.arduino.cc/reference/en/libraries/liquidcrystal/print/)
Escreve o texto no LCD.  

### Função [*lcd.setCursor*](https://www.arduino.cc/reference/en/libraries/liquidcrystal/setcursor/)
Posiciona o cursor LCD; ou seja, define o local no qual o texto subsequente gravado no LCD será exibido.  
Tanto coluna quanto linha iniciam na posição *0*.


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
### Função [*tone*](https://www.arduino.cc/reference/en/language/functions/advanced-io/tone/)  
Em resumo,  
- Gera uma **onda quadrada** da frequência especificada (e 50% do *duty cycle* -ciclo de trabalho) em um pino.  
- Uma duração pode ser especificada, caso contrário, a onda continua até uma chamada para `noTone()`.   
- Não é possível gerar tons inferiores a 31Hz. 
- Para detalhes técnicos, veja as [notas de Brett Hagman](https://github.com/bhagman/Tone#ugly-details)


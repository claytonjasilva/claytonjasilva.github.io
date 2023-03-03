# *Datasheet* - Driver e motor de passo
1. Driver: Referência [ULN 2003](https://d229kd5ey79jzj.cloudfront.net/878/datasheetULN200x.pdf)  
Trata-se de um *driver* cujas aplicações básicas são de alimentação de dispositivos.  
Compõe-se de:  
- Circuito integrado ULN2003, que integra 7 transistores de alta potência *Darlington*.
Permite a operação diretamente com dispositivos TTL ou CMOS operando em tensões de alimentação de 5 V ou 3,3 V.
- Placa com pinagem para conexões e soquete para o ULN2003.

2. Motor de passo: Referência [28BYJ-48]

## 1. Especificações

### 1.1 Pinagem do CI
A figura apresenta o CI ULN2003  
![Pinagem ULN 2003](/arduino/arduino_images/xxx)  

| Id | Função	| Descrição |
| - | - | - |
| 1 |	1B | Input |
| 2 |	2B | Input |
| 3 |	3B | Input |
| 4 |	4B | Input |
| 5	| 5B | Input |
| 6	| 6B | Input |
| 7 | 7B | Input |
| 16 | 1C | Output |
| 15 | 2C |	Output |
| 14 | 3C |	Output |
| 13 | 4C |	Output |
| 12 | 5C | Output |
| 11 | 6C |	Output |
| 10 | 7C | Output |
| 9 | COM | Nó de catodo comum para diodos *flayback* (Obs) |
| 8 | E |	Emissor comum compartilhado por todos os canais |

Obs. Um diodo adequado, chamado de diodo *flyback*, colocado sobre o indutor para absorver com segurança a energia do pulso 
provocado por um corte abrupto da fonte para o motor.

### 1.2 Pinagem da placa
A figura apresenta a placa de montagem do ULN2003  
![Placa com soquete para ULN 2003](/arduino/arduino_images/xxx)  

| Id | Descrição |
| - | - |
|  | Conector de encaixe dos fios do motor |
| IN1 |	Entrada de controle |
| IN2 |	Entrada de controle |
| IN3 |	Entrada de controle |
| IN4	| Entrada de controle |
| A-B-C-D	| Saídas de LED |
| GND | Terra |
| Alimentação | 5V, 1A |

### 1.3 Espeficiações do motor
| Requisito | Alvo |
| - | - |
| Tipo | Motor de passo unipolar |
| Modelo | 28BYJ-48 |
| Tensão | 5 VDC |
| Número de fases | 4 |
| Número de vias | 5 |
| Caixa de Redução | 1/64 |
| Diâmetro do eixo | 5mm |
| Frequência | 100Hz |
| Resistência DC | 50Ω ± 7%(25℃) |
| Torque | 34,3 mN.m |
| Diâmetro do motor | 28mm |
| Sequência das fases | 1: Azul, 2: Rosa, 3: Amarelo e 4: alaranjado |

Obs. O terminal central das bobinas do motor é interligado ao fio vermelho.

### 1.2 Operação do motor de passo
Os motores de passo são um tipo de motor que tem a capacidade de converter um sinal de entrada em um **ângulo de rotação**.  
A precisão do ângulo de rotação do motor de passo é determinada pelo seu **número de passos**.  
Na nossa prática, o Arduíno se encarrega de realizar o controle do funcionamento do motor,
enviando o sinal que será convertido em um ângulo de rotação.  
Cada pulso corresponde à um passo de 1,8 graus (na maioria dos motores de passo) dado pelo motor. Já a velocidade do motor é dada pela frequência de entrada dos pulsos.

1. Os caracteres são apresentados em duas linhas de 16 caracteres cada uma. 
2. O LCD 1602 possui também um cursor, que indica a posição do caractere lido/escrito em um instante. 
3. A pinagem inicia-se a partir do pino 1 até o pino 16.  
![LCD 1602](/arduino/arduino_images/lcd1602.jpg)  
4. Um esquema de utilização do LCD 1602 está apresentado na figura  
![Circuito Arduino-LCD 1602](/arduino/arduino_images/arduinolcd1602.jpg)  
  4.1 O pino VSS será conectado ao GND do Arduíno.  
  4.2 O pino VDD será conectado ao 5V do Arduíno.  
  4.3 O pino VEE (ou V0) será regulada por um potenciômetro de 10 kohms para ajuste do contraste  
        - A conexão física do potenciômetro requer - (i) terminal 1 ligado ao 5V; (ii) terminal 2 (central) ligado ao VEE; (iii) terminal 3 ligado ao GND.  
  4.4 O pino pode ser conectado ao pino 10 do Arduíno (ou outro pino de entrada/saída digital).  
  4.5 O pino RW será conectado ao GND porque a operação a ser realizada será somente de escrita no LCD 1602.  
  4.6 O pino de *enable* será conectado ao pino 8 do Arduíno (ou outro pino de entrada/saída digital).  
  4.7 Será utilizado o modo de 4-bits do LCD 1602, que, por default, opera em DB4-7 - podem ser usados os pinos 2 a 5 do Arduíno (ou outro pino de entrada/saída digital).  
  4.8 O *backlight* do LCD 1602 (pino A), de anodo, será alimentado por uma tensão (pino de +5VDC do Arduíno) - recomenda-se usar uma proteção dada por um resistor de 300 ohms limitador de corrente - se o valor do resistor for muito alto a luz do *display* fica com pouca intensidade.  
  4.9 O pino K, de catodo, será conectado ao pino GND do ARduíno. 

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

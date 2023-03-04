# *Datasheet* - Driver e motor de passo
1. Driver: Referência [ULN 2003](https://d229kd5ey79jzj.cloudfront.net/878/datasheetULN200x.pdf)  
  Trata-se de um *driver* cujas aplicações básicas são de alimentação de dispositivos.  
  Compõe-se de:  
    - Circuito integrado ULN2003, que integra 7 transistores de alta potência *Darlington*.  
    Permite a operação diretamente com dispositivos TTL ou CMOS operando em tensões de alimentação de 5 V ou 3,3 V  
    - Placa com pinagem para conexões e soquete para o ULN2003.

2. Motor de passo: Referência [28BYJ-48]  
  Os motores de passo são um tipo de motor que tem a capacidade de converter um sinal de entrada em um **ângulo de rotação**.  
  A precisão do ângulo de rotação do motor de passo é determinada pelo seu **número de passos**.  
  Na nossa prática, o Arduíno se encarrega de realizar o controle do funcionamento do motor, enviando o sinal que será convertido em um ângulo de rotação.  
  **Cada pulso corresponde a um passo de 1,8 graus** (na maioria dos motores de passo) dado pelo motor.  
  **A velocidade do motor é dada pela frequência de entrada dos pulsos**.

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
| IN1 |	Entrada de controle para o acionamento da bobina 1 (fase 1) |
| IN2 |	Entrada de controle para o acionamento da bobina 2 (fase 2) |
| IN3 |	Entrada de controle para o acionamento da bobina 3 (fase 3) |
| IN4	| Entrada de controle para o acionamento da bobina 4 (fase 4) |
| A-B-C-D	| Saídas de LED para indicar as bobinas (fases) acionadas |
| GND | Terra |
| Alimentação | 5V, 1A |

### 1.3 Espeficiações do motor
| Requisito | Alvo |
| - | - |
| Tipo | Motor de passo unipolar |
| Modelo | 28BYJ-48 |
| Tensão | 5 VDC |
| Número de fases | 4 |
| Sequência das fases | 1: Azul, 2: Rosa, 3: Amarelo e 4: alaranjado |
| Número de vias | 5 |
| Ângulo do passo | 5,625 graus |
| Diâmetro do eixo | 5mm |
| Frequência | 100Hz |
| Resistência DC | 50Ω ± 7%(25℃) |
| Torque | 34,3 mN.m |
| Diâmetro do motor | 28mm |

Obs. O terminal central das bobinas do motor é interligado ao fio vermelho.

### 1.4 Operação do motor de passo
1. O motor pode girar no sentido horário ou no sentido anti-horário. 
2. Além disso a velocidade pode ser configurada de acordo com a necessidade. 

## 2. Referência com Arduíno
### Biblioteca [*Stepper.h*](https://www.arduino.cc/reference/en/libraries/stepper/)
Permite que as placas Arduino controlem uma variedade de motores de passo.
Esta biblioteca permite controlar motores de passo unipolares ou bipolares.  
Para usá-lo, será necessário o motor de passo e o hardware apropriado para controlá-lo.

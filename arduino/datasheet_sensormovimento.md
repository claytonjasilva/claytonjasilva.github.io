# *Datasheet* - Sensor de movimento
Referência [DYP-ME003 PIR](https://siccciber.com.br/wp-content/uploads/2020/06/FTC-PIR.pdf)  
Princípio de funcionamento: basicamente, o módulo processa a saída de um sensor analógico e o transforma em um sinal digital.
Muito frequentemente utilizado para detectar movimento de pessoas.  
O sinal de eco é um pulso de onda quadrada com uma largura proporcional à distância de viagem do som de **ida e volta** entre o sensor e o alvo.

## 1. Especificações

### 1.1 Pinagem (\*)
| Pino | Descrição |
| - | - |
| 1 (Direita inferior) | Gnd |
| 2 (Central) | Entrada do sinal de *trigger* | 
| 3 (Esquerda inferior) | Alimentação | 

(\*) **Observação**: O módulo não possui a identificação da pinagem, portanto **a referência é a visão do circuito pelo observador**.

![Pinagem módulo sensor de movimento](/arduino/arduino_images/sensormovimento.jpg)

### 1.3 Características elétricas
| Característica | Valor |
| - | - |
| Tensão de operação | 4,5 ~ 20 VDC |
| Tensão de saída | 3,3 VDC |
| Alcance de medida | 3 a 7 m (1) | 
| Ângulo de detecção máximo | 110o | 
| Duração sinal High da saída | 5 ~ 300 s (2) |

(1) Ajustável pelo potenciômetro 1 - à direita
(2) Ajustável pelo potenciômetro 2 - à esquerda


## 2. Referência com Arduíno
É necessário somente usar as funções disponíveis na biblioteca do Arduíno: [referência](https://www.arduino.cc/reference/en/)  

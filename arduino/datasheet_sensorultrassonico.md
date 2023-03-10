# *Datasheet* - Sensor ultrassônico
Referência [HC-SR04](https://d229kd5ey79jzj.cloudfront.net/620/HCSR04.pdf)  
Princípio de funcionamento: basicamente, emite um *burst* (sequência) de 8 pulsos de um sinal peeriódico de 40 kHz.
O sinal reflete no alvo (objeto em relação ao qual é feita a medida) e retorna (eco).  
O sinal de eco é um pulso de onda quadrada com uma largura proporcional à distância de viagem do som de **ida e volta** entre o sensor e o alvo.

## 1. Especificações

### 1.1 Pinagem
| Pino | Descrição |
| - | - |
| Vcc | Entrada da Tensão de alimentação |
| Trig | Entrada do sinal de *trigger* | 
| Echo | Saída do pulso de eco | 
| Gnd | Entrada de GND | 

### 1.3 Características elétricas
| Característica | Valor |
| - | - |
| Tensão de operação | 5 VDC |
| Alcance de medida | 2 cm - 4 m | 
| Ângulo de medida | 15o | 

## 2. Referência com Arduíno
É necessário somente usar as funções disponíveis na biblioteca do Arduíno: [referência](https://www.arduino.cc/reference/en/)  
Para teste da placa normalmente são usadas as  
[Funções de comunicações do Arduíno](https://www.arduino.cc/reference/en/language/functions/communication/serial/), especialmente  

[Serial.begin()](https://www.arduino.cc/reference/en/language/functions/communication/serial/begin/)  
Define a taxa de dados em bits por segundo (*baud*) para transmissão de dados seriais.  
Para se comunicar com o *Serial Monitor* certifique-se de usar uma das taxas de transmissão listadas no menu no canto inferior direito da tela.  

[Serial.println()](https://www.arduino.cc/reference/en/language/functions/communication/serial/println/)  
Imprime dados na porta serial como texto ASCII, seguido por   
- um caractere de retorno de carro (ASCII 13 ou '\r') e
- um caractere de nova linha (ASCII 10 ou '\n').  

Além das funções de comunicações também é usada a função avançada de I/O:  
[pulseIn](https://www.arduino.cc/reference/en/language/functions/advanced-io/pulsein/), que, 
basicamente, lê um pulso em um pino e retorna a largura do pulso em microssegundos.

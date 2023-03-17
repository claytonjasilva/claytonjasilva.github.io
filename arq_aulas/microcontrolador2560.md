# 9. Microcontrolador 2560 Atmel Atmega 2560

## 9.1 Definição de microcontroladores

Circuitos integrados que possuem internamente todos os componentes necessário ao seu funcionamento (exceto fonte de alimentação).  
Microcontroladores são computadores de um único chip.   

![Microcontroladores - visão geral](/arq_aulas/images/microcontrolador.jpg)

## 9.2 Sobre o 2560

### 9.2.1 Características gerais
- Arquitetura RISC
- 135 instruções
- Até 16 MIPS em 16 MHz
- Flash 256 kB
- 32 registradores de 8 bits
- 4 kB EEPROM
- 8 kB SRAM
- Periféricos
  - 4 canais PWM de 8 bits
  - 16 canais conversor AD
...
- I/O
Ao combinar uma **CPU RISC** de 8 bits com Flash autoprogramável no sistema em um chip monolítico, o Atmel 
ATmega2560 é um poderoso microcontrolador que fornece uma solução altamente flexível e econômica 
para muitas aplicações de controle embarcadas.
**Todos os detalhes do microcontrolador podem ser obtidos em**  
**[Datasheet Atmega 2560](https://ww1.microchip.com/downloads/en/devicedoc/atmel-2549-8-bit-avr-microcontroller-atmega640-1280-1281-2560-2561_datasheet.pdf)**

### 9.2.2 Pinagem
A figura apresenta a pinagem do Atmega 2560.  

![Pinagem do Atmega 2560](/arq_aulas/images/atmegapinagem.jpg)

#### Descrição geral dos pinos
Os primncipais pinos são:  
1. Portas A, B, C, D E, F , G, H, J, K, L, cada uma de 8 bits (P7...P0), bi-direcionais. Algumas possuem funcionalidades específicas, como descritas no *datasheet*.
2. Alimentação, VDD e GND.
3. RESET.

### 9.2.3 Diagrama em blocos
A figura apresenta o diagrama de blocos do Atmega 2560.

![Diagrama em blocos do Atmega 2560](/arq_aulas/images/atmegapinagem.jpg)

O ATmega fornece os seguintes recursos, entre outros:  
1. Sistema de memória constitído de 256 KB de memória In-System Programável Flash (Read-While-Write), 4KB de EEPROM, 8KB de SRAM e 32 registradores de uso geral
  - O Flash ISP no chip permite que a memória do programa seja reprogramada no sistema através de uma interface serial SPI, por um conversor não volátil convencional programador de memória, ou por um programa de inicialização On-chip rodando no núcleo AVR.
3. 4 portas de comunicação serial assíncrona (USART);
4. Conversor analógico digital (ADC) de 16 canais e 10 bits;
5. Porta serial SPI, IEEE® std;
6. O dispositivo é fabricado usando a tecnologia de memória não volátil de alta densidade da Atmel. 

### 9.2.4 Núcleo da CPU
A figura apresenta o núcleo da CPU do Atmega 2560.

![Núcleo da CPU do Atmega 2560](/arq_aulas/images/atmegacpu.jpg)


### 9.2.4 Endereçamento

### 9.2.5 *Set* de instruções

### 9.2.6 *Assembly* e *Assembler*

___
**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**  ou 
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**   
**Conversão de bases: [próximo>>](dimensoesUnidadesAritmeticaComputacional2.md)** 



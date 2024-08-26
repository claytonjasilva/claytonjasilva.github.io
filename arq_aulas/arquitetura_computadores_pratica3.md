# Prática 3 - Conhecendo o Arduíno 2560

Circuito utilizando a placa do Arduíno 2560 para acender um LED conectado a uma saída do Arduíno, 
comandado por uma chave ligada a uma entrada do Arduíno.

## I - Apresentação de instrumental e ferramental

1. *Protoboard*
2. LED (Diodo Emissor de Luz)
3. Resistor de 300 ohms
4. Arduíno Mega 2560
5. Switch

## II - Vamos iniciar a prática com a placa do Arduíno Mega 2560...

1. Montar  o circuito conforme a figura abaixo.  
![entrada Arduino LEDs](/arq_aulas/images/entradaArduino.jpg)  
2. Utilizando a IDE do Arduíno, elabore o código que permite acender/apagar o LED quando a chave for acionada.
3. Observações:

- Visite o site do Arduíno para conhecer um pouco sobre a [referência da linguagem do Arduíno](https://www.arduino.cc/reference/en/)  
- O código da prática pode ser obtido em [*sketch* - usando entradas digitais](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_arduino_ino/pratica3_I.ino)

4. Veja o vídeo com uma explicação sucinta da prática no [Youtube](https://www.youtube.com/watch?v=zeFvPgiRE4U)

## III - Duplicando o *shield*

Considerando o modelo proposto no item II, propor um novo *shield* que utilize duas chaves (Chave 1 e Chave 2) e dois LEDs (LED1 e LED2), de modo que:

- Chave 1 em HIGH, acenda o LED1; em LOW, apague o LED1;
- Chave 2 em HIGH, acenda o LED2; em LOW, apague o LED2.

O funcionamento pode ser descrito por uma tabela

| Chave | LED |
| ----- | --- |
| Ch1=0 | LED1=0 |
| Ch1=1 | LED1=1 |
| Ch2=0 | LED2=0 |
| Ch2=1 | LED2=1 |

## IV - O *shield* decodificador

Propor um novo *shield* que utilize duas chaves (Chave 1 e Chave 2) e quatro LEDs (LED1, LED2, LED3, LED4), de modo que:

| Chave | LED |
| ----- | --- |
| Ch1=0,Ch2=0 | LED1=1,LED2=0,LED3=0,LED4=0 |
| Ch1=0,Ch2=1 | LED1=0,LED2=1,LED3=0,LED4=0 |
| Ch1=1,Ch2=0 | LED1=0,LED2=0,LED3=1,LED4=0 |
| Ch1=1,Ch2=1 | LED1=1,LED2=0,LED3=0,LED4=1 |

Veja o código proposto em [Decoder](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_arduino_ino/pratica3_IV.ino)

___
**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**

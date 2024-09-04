# Prática 4 - Conhecendo o Arduíno 2560

Circuito utilizando a placa do Arduíno 2560 utilizando três chaves. As chaves indicam **entradas binárias**: 000, 0001, 010, ..., 111. A saída de cada chave conecta em uma entrada do Arduíno (2, 3, 4).

Conforme **a palavra do código de entrada**, o programa realiza uma função específica.

## I - Apresentação de instrumental e ferramental

1. *Protoboard*
2. LED (Diodo Emissor de Luz)
3. Resistor de 300 ohms
4. Arduíno Mega 2560
5. Switch

## II - Vamos iniciar a prática com a placa do Arduíno Mega 2560...

1. Montar  o circuito conforme a figura abaixo.  
![Entrada de 3 bits](/arq_aulas/images/ckt3teclas.jpg)  
2. Utilizando a IDE do Arduíno, escrever o código para **converter a entrada binária de 3 bits em decimal**. 
3. Observar o funcionamento do circuito utilizando o Monitor Serial da IDE (menu *Ferramentas*, item *Moniotor Serial*).
4. Observações:  

- Visite o site do Arduíno para conhecer um pouco sobre a [referência da linguagem do Arduíno](https://www.arduino.cc/reference/en/)  
- O código da prática pode ser obtido em [*sketch* - utilizando funções](https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_arduino_ino/pratica4_II.ino)
- Veja o vídeo com uma explicação sucinta da prática no [Youtube](https://www.youtube.com/watch?v=c_S7Vv2eOwY)

## III - Elaborar um novo *sketch* para o mesmo *shield*

1. O *sketch* deve ler a palavra código de entrada. Caso a palavra corresponda a um número par: o sistema deverá ler via monitor serial um número inteiro; calcular a soma dos números pares não negativos inferiores ao número lido; e escrever o resultado no monitor serial.

- Veja uma sugestão de solução em: https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_arduino_ino/pratica4_III1.ino

2. O *sketch* deve ler a palavra código de entrada. O sistema deverá apresentar uma contagem binária crescente cíclico no monitor serial a partir do código lido até 111. O contador cíclico se repete. Por exemplo, se for lido 011, o sistema deverá gerar 011-100-101-110-111-011-100-101... 

- Veja uma sugestão de solução em: https://github.com/claytonjasilva/prog_exemplos/blob/main/linguagem_arduino_ino/pratica4_III2.ino

## IV - Elaborar um novo *shield*

O projeto Arduíno deverá possibilitar que cada código de entrada ative as seguintes saídas:
- 000 - ative um led vermelho;
- 001 - ative um led amarelo;
- 010 - ative um *buzzer* com frequência de 100 Hz durante 2 seg, intermitente, em intervalos de 5 seg;
- 011 - ative um *buzzer* com frequência de 50 Hz durante 3 seg, intermitente, em intervalos de 2 seg, e ative um led verde;
- nos demais casos, produza no monitor serial o número decimal equivalente.

**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**

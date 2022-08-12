### Prática 1 - Arquitetura de Computadores

#### I - Apresentação de instrumental e ferramental
1. *Protoboard*
2. LED (Diodo Emissor de Luz)
3. Resistores
4. Arduíno Mega 2560
5. IDE Arduíno

#### II - Vamos iniciar a prática com a placa do Arduíno Mega 2560...
**Sugestão**: Ver a [nota 1 do Arduíno](/arduino/arduino_1.pdf)  
1. Montar  o [circuito do Arduíno com LED](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/arq_notas/Schematic_Ardu%C3%ADno%20com%20LED_2022-08-12.png).  
Obs:   
   i. Atenção com a **polarização** do LED  
   ii. Utilizar as trilhas da placa de *protoboard* corretamente
2. Conectar o Arduíno ao computador através da porta USB
3. Substituir o resistor (desligar antes o Arduíno do *protoboard*) por um resistor com resistência diferente
4. Relatar e explicar o que foi observado

#### III - Escrevendo o primeiro *Sketch...*
**Sugestão**: Ver a [nota 2 do Arduíno](/arduino/arduino_2.pdf)  

1. Montar o [circuito do Arduíno com LED](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas/arq_notas/Schematic_Arduino%20com%20LED%20no%20Scetch_2022-08-12.png)  
Obs: Atenção com o uso do pino correto
2. Iniciar a IDE do Arduíno e gerar o código do circuito. Não esquecer de, na barra de menu, em *Arquivo*, na opção *Salvar como...*, escolher o nome (por exemplo, *sketch_pratica1*)  
3. Conectar o Arduíno ao computador através da porta USB  
Obs:  
   i. Existem vários tutoriais na Internet. [Um tutorial](https://www.circuitar.com.br/tutoriais/configurando-o-arduino-no-windows/index.html).  
   ii. Ao conectar o Arduíno com o computador, certificar se na barra de menu, em *Ferramentas*, a *Porta: COMX (Arduíno Mega or Mega 2560)* está habilitada - X pode ser a 3, por exemplo  
   iii. Na barra de menu, em *Ferramentas*, selecionar *Placa: "Arduíno Mega or Mega 2560"*, escolher o nome (por exemplo, *sketch_pratica1*)  
   iv. Na barra de menu, em *Ferramentas*, selecionar *Processador: "ATmega2560 (Mega2560)"*, escolher o nome (por exemplo, *sketch_pratica1*)
5. Compilar e carregar o código no Arduíno (Na barra de menu, em *Sketch*, selecionar *Verificar/Compilar*, depois selecionar *Carregar*)
6. Escrever o código disponibilizadao em [exemplo da prática 1](https://github.com/claytonjasilva/arquitetura_exemplos/blob/main/arq_pratica1.ino)  

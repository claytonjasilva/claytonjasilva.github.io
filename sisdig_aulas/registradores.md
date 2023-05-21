# Aplicações com Flip Flops: registradores

## Convertendo Flip Flops JK em Flip Flops D
Analisando o comportamento dos Flip Flops, pode-se observar que  
![Conversão FF JK para D](/sisdig_aulas/images_sisdig/ffjkd.jpg)

Não é dificil verificar que a expressão de $J=E$ e de $K=\bar{E}$, o que resulta no circuito  
![Conversão FF JK para D](/sisdig_aulas/images_sisdig/ffjkd2.jpg)

Como poderámos simular o comportamento de um FF T, utilizando FF JK?

## Convertendo Flip Flops JK em Flip Flops T
Analisando o comportamento dos Flip Flops, pode-se observar que  
![Conversão FF JK para T](/sisdig_aulas/images_sisdig/ffjkt.jpg)

Não é dificil verificar que a expressão de $J=E$ e de $K=\bar{E}$, o que resulta no circuito  
![Conversão FF JK para T](/sisdig_aulas/images_sisdig/ffjkt2.jpg)

## Registradores de deslocamento (*Shift Registers*)
Os registradores de deslocamento armazenam bits em células que são transferidos a cada transição de clock.  
Um registrador de *n* bits armazena *b<sub>n-1</sub>b<sub>n-2</sub>...b<sub>0</sub>*.  
Utiliza-se um banco de *n* Flip Flops cascateados, cada um dos quais armazena um bit.  

![Shif Register com FF D](/sisdig_aulas/images_sisdig/shiftregister.jpg)

Utilizando um banco de FF JK também será possível construir um registrador de 4 bits.  

![Shif Register com FF JK](/sisdig_aulas/images_sisdig/shiftregister1.jpg)

Observe que na figura utiliza-se entrada de clock cujo gatilhamento é dado pela transição negativa do sinal de clock.  
Em um diagrama de temporização, poderemos observaar o seguinte:

![Shif Register com FF JK](/sisdig_aulas/images_sisdig/shiftregister3.jpg)

Como poderíamos controlar assincronamente a operação do *shift register*?  
Conectando uma porta *and* a um sinal de *ENABLE* será possível realizar esse controle.  
Veja a célula de memória.  

![Shif Register com FF JK - enable](/sisdig_aulas/images_sisdig/shiftregister2.jpg)

Os *shift registers* operam para a transferência **serial** de dados de um barramento de entrada para um barramento de saída.  
Observe que o número de flip flops representa a memória do *shift register*, ou seja, quantos bits podem ser armazenados.  
Além disso, o  primeiro bit carregado será perdido.

## Registradores paralelos
Os registradores paralelos armazenam bits em células que são transferidos a cada transição de clock.  
Um registrador de *n* bits armazena *b<sub>n-1</sub>b<sub>n-2</sub>...b<sub>0</sub>*.  
Utiliza-se um banco de *n* Flip Flops paralelos, cada um dos quais armazena um bit.  

![Registrador paralelo com FF D](/sisdig_aulas/images_sisdig/shiftregister4.jpg)

Um diagrama de temporização pode ser dado por.  

![Registrador paralelo com FF D](/sisdig_aulas/images_sisdig/shiftregister5.jpg)






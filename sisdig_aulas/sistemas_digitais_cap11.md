# Cap 11. Outras aplicações com FF

## 11.1 Divisores de frequência

Flip Flops JK cascateados podem proporcionar como saída um circuito que divide a fequência do sinal de clock.  
Esse resultado é obtido porque o FF opera somente no gatilhamento da borda do FF JK.

![Divisor de frequência](/sisdig_aulas/images_sisdig/divisor.jpg)
Analisando-se a saída *Q<sub>1</sub>*, verifica-se que reproduz o sinal de clock, no entanto com a metade da frequência de entrada.  
Usando o número apropriado de FF é possível impementar sucessivas divisões por 2.    

![Contador binário](/sisdig_aulas/images_sisdig/contadorbinario.jpg)
Analisando-se a saída *Q<sub>2</sub>*, verifica-se que reproduz o sinal de clock, no entanto com a frequência de entrada dividida por 4.  
Além disso, analisando-se conjuntamente as saídas *Q<sub>2</sub>*, *Q<sub>1</sub>* e *Q<sub>0</sub>*   

![Temporização do contador binário](/sisdig_aulas/images_sisdig/temporizacaocontador.jpg)
Trata-se do comportamento de um contador síncrono de 3 bits, que reproduz o seguinte diagrama de estados.  

![Diagrama de estados do contador binário de 3 bits](/sisdig_aulas/images_sisdig/diagramacontador3bits.jpg)

## 11.2 Contadores

### 11.2.1 Contadores síncronos de módulo N

O circuito anterior, que proporciona o diagrama de oito estados, é chamado **contador de módulo 8**.  
**Módulo** é o número de estados distintos que o contador atinge antes de reciclar – iniciar um novo ciclo.  
O módulo pode ser aumentado adicionando-se mais FF ao contador, de forma que  
Módulo = 2<sup>𝑁</sup>  
onde N é o número de FF utilizados.  

### 11.2.2 Contadores síncronos de módulo<N

As entradas dos FF estudas até agora são chamadas **entradas de controle (S, C, J, K, D, T)**.   
A maioria dos FF também possui entradas chamadas de **entradas assíncronas (entradas de sobreposição)**,   
que podem ser usadas em qualquer instante independentemente das condições das demais.
As entradas de sobreposição **permitem limpar o contador**.  
                                     
![Entradas assíncronas de FF](/sisdig_aulas/images_sisdig/entradasassincronasff.jpg)                                
As entradas assíncronas são utilizadas para obter contadores de módulo menor do que N.  
A figura apresenta um contador de módulo menor do que 8.  

![Contador de módulo<8](/sisdig_aulas/images_sisdig/contadormodulomenor.jpg)                            
Observe que para obter o resultado desejado é utilizada uma **entrada assíncrona** do FF.  
O estado que não pertence ao ciclo é anulado pela inserção de uma porta NAND.   
No exemplo, quando B=C=1, a entrada clear se torna 0 durante um intervalo de tempo para reciclar o contador.  

![Diagrama de estados do contador de módulo menor do que N](/sisdig_aulas/images_sisdig/diagramaestadosmenorN.jpg)
O diagrama de temporização é dado por  

![Temporização do contador menor do que N](/sisdig_aulas/images_sisdig/temporizacaocontadormenorN.jpg)

### 11.2.3 Contador decádico

Utilizando-se o mesmo recurso das entradas de sobreposição dos FF, é possível construir um **contador decádico**.  
O contador decádico ou BCD realiza a contagem de 0 a 9, em binário.  

![Contador decádico](/sisdig_aulas/images_sisdig/contadordecadico.jpg)  

### 11.2.4 Contadores de sequência não crescente

Em algumas aplicações digitais deseja-se utilizar uma sequência não crescente.  
Por exemplo,  

![Diagrama de estados não crescente](/sisdig_aulas/images_sisdig/diagramaestadosnaocrescente.jpg)  

## 11.3 Outras aplicações com diagramas de estados

**Exemplo:**
Sejam duas avenidas, como mostra a figura abaixo.

![Conversão FF JK para D](/sisdig_aulas/images_sisdig/semaforo.jpg)

Você precisa projetar um sistema de controle digital dos semáforos A e B.  
O controle deve satisfazer a seguinte regra:  

1. Se um usuário (Ua) acionar o controle, o semáforo A deve liberar a pista para o pedestre, permanencendo a outra pista liberada somente a veículos;
2. Se um usuário (Ub) acionar o controle, o semáforo B deve liberar a pista para o pedestre, permanencendo a outra pista liberada somente a veículos;
3. Sem pedestres os sinais A e B alternam de modo temporizado.

**Método:**

- analisar o problema e produzir o diagrama de estados;
- Construir os mapas K dos valores atuais das saídas, em função das variáveis de estado e das demais entradas;
- Construir os circuito, utilizando Flip-Flops para armazenar a saída anterior e realimentar a entrada do circuito.

___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  

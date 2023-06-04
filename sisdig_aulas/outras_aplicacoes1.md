# 12. Outras aplicações

## 12.3 Outras aplicações com diagramas de estados
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

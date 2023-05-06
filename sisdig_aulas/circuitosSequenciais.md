# 9. Fundamentos de máquinas sequenciais

## 9.1 Conceito de sistemas sequenciais
Nosso estudo tem sido dedicado até o momento aos **circuitos combinacionais**.  
Existe um segmento muito importante dos sistemas digitais, cujos circuitos são categorizados como **circuitos sequenciais**.  
Para uma ampla gama de problemas as técnicas de sistemas digitais podem ser aplicadas. Uma delas se refere ao controle de sistemas,
em que sinais digitais são recebidos e interpretados por um sistema digital, gerando saídas de controle de acordo com
**uma sequência** em que os sinais são recebidos.  
Nessas aplicações, circuitos com as características dos circuitos combinacionais não são próprios para resolver o problema.  
Estas aplicações exigem que as saídas geradas sejam uma **função das variáveis de entrada presentes e dos valores passados das variáveis de entrada**.

Um modelo de sistema controlado por realimentação (*feedback*) está apresentado na figura.

![Sistema controlado por realimentação](/sisdig_aulas/images_sisdig/sistemafeedback.jpg)

Na figura estão identificados três blocos:  
- Circuito comparador - circuito digital que recebe a saída do sistema a ser controlado no instante anterior;
- Circuito controlado - circuito que deve ser controlado de modo que as saídas desejadas sejam obtidas.  
As entradas *x(t)* são recebidas de outro módulo qualquer do sistema.  
Os sinais *y(t)* são aqueles obtidos da transformação de *x(t)* pelo *feedback* das saídas no instante anterior.  
As saídas *u(t)* são aquelas que representam o comportamento desejado para o sistema.  

**Distinção entre máquinas sequenciais e combinacionais**

| Sequenciais | Combinacionais |
| - | - |
| Deve possuir capacidade de memória | A saída é estritamente função da entrada - não tem memória |
| Deve possuir realimentação | Não possui realimentação |

As duas propriedades básicas descritas na tabela para os sistemas sequenciais são necessárias, mas não são suficientes.  
Os circuitos sequenciais possuem uma propriedade operacional básica: **são cíclicos** sob determinadas condições de controle.  
Um **modelo geral** de sistemas controlados digitais, ou máquinas sequenciais ou máquina de estados finitos está apresentado na figura.  

![Modelo geral de sistemas sequenciais](/sisdig_aulas/images_sisdig/sistemasequencial.jpg)

Observam-se três blocos, a saber:  
1. O primeiro bloco recebe as entradas e as saídas em ***feedback*** para produzir entradas controladas ou modificadas;
2. No segundo estágio ou bloco as saídas do bloco anterior são armazenadas no **elemento de memória** para realimentar a entrada;
3. No terceiro bloco, aplica-se a lógica necessária para produzir a saída desejada.  

### O modelo acima ilustra como se constroi a **máquina sequencial** ou **máquina de estados finitos**. 

## 9.2 Circuitos síncronos e assíncronos
Vimos a definição de circuitos sequenciais.  
Muitas aplicações de circuitos sequenciais envolvem o emprego de uma referência temporal, 
chamada de **relógio** ou **clock**.  
Quanto ao uso ou não do sinal de clock, os circuitos podem ser classificados como **assíncronos** ou **sincronos**:  
- Circuitos cujo comportamento independe de um sinal de relógio são chamados de circuitos **assíncronos**.  
- Circuitos cujo comportamento é regulado pela referência do sinal de clock são chamados de **circuitos síncronos**.
O comportamento do sinal de clock está apresnetado na figura.  

![Sinal de clock](/sisdig_aulas/images_sisdig/clock.jpg)

Tipicamente, o sinal de clock é um **trem de ondas quadradas**.  
Observe que o sinal varia entre dois níveis lógicos: alto e baixo.  
Para circuitos sequenciais é importante salientar que a **transição de um nível para outro** é importante.  
A transição possui uma **borda**, ou seja, um limite entre os dois níveis.  
Embora teoricamente essa transição seja por salto, os sinais reais possuem uma transição que requer um intervalo de tempo $\Delta$ t no circuito.  
Todo sinal de clock é **periódico**, consequentemente possui um ciclo temporal definido por *T<sub>Ck</sub>*.  
O número de ciclos na unidade de tempo define a frequência do sinal, *f<sub>Ck</sub>*, que satisfaz
$$f_{Ck}=\frac{1}{T_{Ck}}$$  
A relação entre o tempo em que o sinal está no nível alto e o período é chamada de *duty cycle*, ou seja, 
$$Duty Cycle=\frac{T_{on}}{T_{Ck}}$$  
, normalmente definido em porcentagem.  

___
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**  
**Máquina de estados [próximo >>](circuitosSequenciais2.md)**










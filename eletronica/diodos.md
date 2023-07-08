# 3. Diodos

## 3.1 Visão geral
- Componente eletrônico passivo (não produz energia), composto de elementos semicondutores como silício e germânio,
cuja resposta a um sinal elétrico de entrada é não linear.
Os valores dependem da compreensão da sua resposta, porém os valores mais importantes são a **corrente e a tensão de operação (ponto Q)**.
- Possuem dois terminais, conhecidos como **anodo** e **catodo**, que está relacionada à direção preferencial do fluxo de corrente elétrica
através do componente.
- O anodo é o **terminal positivo** do diodo, e o catodo é o **terminal negativo**.
- **Polarização direta.**
Isso se deve à forma como os diodos são construídos e às propriedades dos materiais semicondutores utilizados.  
Esses materiais são dopados para criar uma região do tipo "p" e uma região do tipo "n" dentro do diodo.
A região p é rica em lacunas (cargas positivas) e a região n é rica em elétrons (cargas negativas).  
Quando uma tensão externa é aplicada aos terminais do diodo, a região p se conecta ao terminal positivo (anodo) e 
a região n se conecta ao terminal negativo (cátodo). Nessa configuração, o diodo é considerado **polarizado diretamente**.
Quando o diodo está polarizado diretamente, as cargas positivas (lacunas) da região p são atraídas em direção à região n,
enquanto as cargas negativas (elétrons) da região n são atraídas em direção à região p.
Esse movimento de cargas permite que a corrente elétrica flua através do diodo, permitindo a passagem da corrente.
- **Polarização reversa.**
Quando a polaridade da tensão externa é invertida, com o terminal positivo conectado à região n e o terminal negativo conectado à região p, o diodo é considerado polarizado reversamente.  
Nessa configuração, as cargas positivas (lacunas) da região p são atraídas para o terminal negativo (cátodo),
enquanto as cargas negativas (elétrons) da região n são atraídas para o terminal positivo (ânodo).
Essa polarização reversa cria uma **barreira de potencial** que impede significativamente o fluxo de corrente através do diodo,
tornando-o praticamente um isolante.

![Diodo: encapsulamento e representação simbólica](/eletronica/imageElt/diodo.jpg)  

A imagem apresenta a representação dos diodos nos diagramas unifilares.  
Observe que os terminais anodo e catodo são bem claros na representação simbólica.

## 3.2 Curva característica
- Chama-se de curva característica a curva de resposta da corrente que atravessa um componente quando submetido a uma tensão nos terminais.
- No caso de resistores, a curva característica é tipicamente linear, definida pela lei de Ohm. A inclinação da curva VxI é definida pelo inverso da resistência, 1/R.
- No caso dos diodos, a curva é não linear, apresentada na figura.
![Curva característica do diodo](/eletronica/imageElt/curvadiodo.jpg)  
- Alguns parâmetros típicos dos diodos são definidos em função de comportamento.  
#### Tensão de joelho *(V<sub>j</sub>)*
É a **tensão positiva** que caracteriza a **barreira de potencial**.   
Acima dela, a corrente que atravessa o diodo aumenta de forma signficativa, como evidencia a figura.   
Acima de *V<sub>j</sub>* o diodo se comporta como um condutor quase ideal.  
**A tensão de ruptura típica para os diodos de silício é 0,7 V.**
#### Corrente máxima *(I<sub>máx</sub>)*
É a corrente limite que o diodo suporta sem queimar. A potência dissipada no diodo se torna muito alta.
#### Resistência interna *(r<sub>S</sub>)*
É a resistência interna do diodo. Tipicamente, a resistência interna do diodo é muito baixa.
#### Corrente reversa *(I<sub>f</sub>)*
É a corrente que flui no sentido catodo para o anodo, quando uma tensão negativa é aplicada entre os terminais do diodo.  
A corrente reversa é muito baixa. Ou seja, o diodo funciona quase como um isolante, não permitindo a passagem de corrente.
#### Tensão de ruptura *(V<sub>r</sub>)*
É a tensão negativa limite, que produz uma corrente reversa alta.
___
A curva característica mostra que o diodo pode operar em duas regiões:
- DIRETA - quando lhé é aplicada uma **tensão de polarização** - tensão entre o anodo e o catodo - positiva. Nesse caso diz-se que a polarização é direta.
- REVERSA - quando lhe é aplicada uma tensão de polarização negativa. Nesse caso, aplica-se a chamada polarização reversa.

## 3.3 Projetos com diodos
### 3.3.1 Aproximações
- Para elaborar projetos utilizando diodo é necessário admitir uma aproximação do seu comportamento real.
- Uma das aproximações admite o funcionamento do diodo como uma chave, que permite a passagem ou não da corrente.
- O diagrama unifilar do circuito vai representar uma das duas situações na **aproximação 1**.
![Aproximação 1 do diodo](/eletronica/imageElt/diodoaproximacao1.jpg)  
- Uma segunda aproximação admite o funcionamento do diodo como uma chave (aberta ou fechada) em série com uma bateria cujo valor de tensão é tensão de joelho.
- O diagrama unifilar do circuito vai representar a **aproximação 2** do modo seguinte.
![Aproximação 1 do diodo](/eletronica/imageElt/diodoaproximacao2.jpg)
- Uma terceira aproximação admite o funcionamento do diodo como uma chave (aberta ou fechada) em série com uma bateria cujo valor de tensão é tensão de joelho e um resisto cujo valor é o valor da sua resistência interna.
- O diagrama unifilar do circuito vai representar a **aproximação 3** é similar ao da aproximação 2 com a resistência interna em série com a bateria.

### 3.3.2 Linha de carga
- Existem alguns tipos de diodos. No caso que estudaremos vamos considerar o uso de **diodos retificadores e de pequeno sinal.**
- Para projetar o circuito é necessário definir o **ponto de operação**, ou seja, a tensão que vai polarizar o diodo (*V<sub>D</sub>*) e a corrente que irá atravessá-lo quando o diodo conduzir.
- Para obter o ponto de operação traça-se a linha de carga.
![Linha de carga](/eletronica/imageElt/linhacarga.jpg)
- Linha de carga. A linha de carga é definida por dois pontos:   
(a) o ponto de saturação, (V=0, Imáx);   
(b) o ponto de corte, (V=Vs, 0).  
A interseção da linha de carga com a curva do diodo é o ponto Q. A partir do ponto Q pode-se determinar o ponto de operação.   
A interseção da linha de carga com a curva característica determina o ponto de operação.
A corrente de operação serádada por

$$
I_{op}=\frac{V_s - V_{op}}{R_s}
$$

, onde a tensão **Vs indica a tensão da fonte** a ser utilizada no projeto do circuito,  
e a resistência **Rs será a resistência do resistor a ser utilizado no projeto** em série com o diodo.  
**Obs. Desejando-se mais precisão para os cálculos, considerar a resistência interna da fonte DC e do diodo.**  

### 3.3.3. O projeto da polarização do diodo
O projeto do circuito retificador será   
![Circuito retificador](/eletronica/imageElt/retificador.jpg)  
Algumas recomendações ao projeto:
1. Diodos retificadores e de sinal pequeno. Explorar o funcionamento na região positiva, ou seja, Vs deve ser acima da tensão de joelho.
2. Assegurar que o circuito na operação não exceda sua tensão de ruptura. A tensão de ruptura é especificada pelo fabricante no *datasheet*.
3. Assegurar que a potência não ultrapasse a máxima que o diodo suporta. O fabricante especifica indiretamente a potência máxima pela corrente máxima (Imáx) no *datasheet*.
4. Para assegurar a operação no limite da potência, normalmente utiliza-se um resistor limitador de corrente (Rs) em série com o diodo.

## 3.4 Projeto retificador


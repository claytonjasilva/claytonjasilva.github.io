# 2. Elementos típicos dos sistemas de comunicações

## 2.1 Transdutores

Boa parte dos sinais que precisam ser tratados se originam de fenômenos cuja energia não é elétrica. 
Por exemplo, os sons de um modo geral, imagens etc.  
**A fonte pode gerar um sinal digital ou um sinal analógico.** 
Se a fonte produzir um sinal elétrico não é necessário empregar um transdutor. Nas nossas discussões, **o transdutor possui a função de converter 
um sinal de natureza não elétrica (sonora, mecânica etc.) em um sinal elétrico e vice-versa.** 
Os transdutores convertem uma forma de energia em outra. Os sinais são equivalentes,
embora se manifestem em um tipo diferente de energia. São exemplos de transdutores muito comuns os microfones e as câmeras de vídeo.  
O sinal $S_{in}(t)$ é o sinal de entrada no sistema de comunicações, após passar pelo transdutor, 
**tipicamente variante no tempo e analógico**.   
A figura apresenta um sinal de voz captado por microfone.
![Sinal de voz - domínio do tempo](voz.jpg)
   
O sistema de comunicações transformará o sinal de entrada, produzindo o sinal de saída na forma elétrica $S_{out}(t)$, 
o qual passará por um **transdutor de saída** antes de ser entregue ao destino.  
Um diagrama esquemático da relação do sistema **fonte-transdutor de entrada-sistema de comunicações-transdutor de saída-destino** está apresentado a seguir.
![Sistema fonte-transdutor de entrada-sistema de comunicações-transdutor de saída-destino](transdutor.jpg)

## 2.2 Sistema de comunicações: visão geral
A visão de mais alto nível do sistema de comunicações compreende:
- transmissor
- canal de comunicações e
- receptor.
A figura ilustra o sistema completo. Observe que não explicita o trandsutor.
![Sistema detalhado](siscom.jpg)

O transmissor processa o sinal de entrada utilizando componentes eletrônicos, 
gerando um sinal transmitido $S_{tx}(t)$. 
Processa a entrada para produzir $S_{tx}(t)$, condicionado para ser enviado ao canal de comunicações.  
O processamento do sinal para a transmissão quase sempre envolve **filtragem, modulação e codificação**.  

O sinal transmitido é modificado pelo canal de comunicações e processado pelo receptor para ser entregue no destino.
O canal de comunicações é o **meio elétrico** que estabelece a ponte na distância entre a fonte e o destino.  
O sinal sainte do transmissor pode se propagar em um meio **confinado**, como um fio de cobre, par trançado, cabo coaxial, fibra óptica (se for um sinal óptico) etc 
Ou pode se propagar em um meio de comunicações **não confinado**, pelo espaço aéreo. 
Portanto, quanto à restrição de propagação do sinal os meiso de comunicações se classificam como:
- Meios confinados; ou
- Meios não confinados.



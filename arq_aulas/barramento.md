# 5.5 Barramento

### 5.5.1 Classificação funcional dos barramentos

O barramento nada mais é do que o meio de comunicações por meio do qual os elementos da arquitetura se comunicam.  
É bom salientar que por meio dos barramentos trafegam sinais elétricos.  
Os barramentos não armazenam dados. Veiculam sinais elétricos que possuem algumas funções.  
De acordo com a função do sinal, consequentemente do meio que serve para que seja trafegado, os barramentos podem ser classificados 
**quanto à funcionalidade** em:  
- Barramento de dados;
- Barramento de endereço;  
- Barramento de controle.

O barramento de dados veicula os bits relativos às instruções armazenadas em memória e os dados operados pelas instruções.  
Como já discutido anteriormente, o barramento de dados é **bi-direcional**, pois admite o tráfego em ambos os sentidos.  
Um sentido se refere à escrita de dados do processador em um outro elemento do sistema.  
No sentido oposto, o processador pode realizar operação de leitura de dados de outro elemento do sistema.  

O barramento de dados é aquele que permite designar a fonte ou o destino dos dados transferidos pelo barramento de dados.  
É usado não somente para indicar o endereço de acesso à memória, mas também para indicar as portas dos dispositivos de entrada/saída.  

O barramento é o meio pelo qual trafegam os sinais que controlam os elementos dos sistema.   
Podem ser usados para transmitir comandos e para transmitir informações de temporização entre os elementos do sistema.  
Os sinais de comando especificam as operações a realizar, como:
1. **Escrita em memória**, usados para que os dados disponíveis no barramento de dados sejam gravados na posição de memória 
especificada pelo barramento de endereços;
2. **Leitura de memória**, usados para a operação inversa;
3. **Escrita em porta de I/O**, usados para enviar dados disponíveis no barramento de dados para o dispositivo de I/O;  
4. **Leitura de porta de I/O**, usados para operação inversa;
5. ***Acknowledge***, para confirmação de transferência de dados no barramento;
6. **Requisição do barramento**, usados para um dispositivo indicar que deseja obter o controle para transferência de dados em um barramento;
7. **Autorização de concessão de barramento**, usados para indicar que foi dada autorização à requisição do barramento;
8. **Requisição de interrupção (IR, *Interrupt Request*)**, usados para um dispositivo requisitar uma operação ao processador;
9. **Confirmação de interrupção**, usados para o processador indicar que confirmou o pedido de interrupção;
10. **Relógio**, usado para temporização de operações;
11. ***Reset***, usado para inicializar todos os módulos do sistema.

### Estrutura do barramento

O barramento do sistema é um conjunto de condutores elétricos que se estendem por todos os componentes do sistema computacional.  
A maioria dos sistemas de computação utiliza múltiplos barramentos, geralmente organizados hierarquicamente.  
O barramento opera basicamente da seguinte forma:  
a. Um módulo do sistema precisa enviar dados a outro módulo  
1. Obtém o controle do barramento;
2. Envia os dados.

b. Um módulo precisa requisitar dados de outro módulo
1. Obtém o controle do barramento;
2. Envia uma requisição de transferência de dados;
3. Aguarda os dados requisitados serem enviados.

Tipicamente a hierarquia do barramento contempla quatro localizações dos barramentos nessa estrutura hieráquica:  
- Barramento local;
- Barramento do sistema;
- Barramento de expansão; e
- Barramento de alta velocidade.

A figura ilustra a organização.

![Estrutura hierárquica do barramento](/arq_aulas/images/hierarquiabarramento.jpg)

Através do barramento local são interligados processador, memória cache e outros dispositivos de alta velocidade.  
O controlador da cache se conecta ao **barramento local**.  
O controlador da cache também se conecta ao **barramento de sistema**.
No barramento de sistema se conecta também a memória principal.  
O barramento do sistema permite que as transferências entre dispositivos de I/O e memória principal não interferem na atividade do processador.  
Embora o barramento de sistemas isole o processador, ainda não é uma solução eficiente.
Para a ligação dos dispositivos de I/O utiliza-se um **barramento de expansão**.  
Para a ligação dos dispositivos de I/O utiliza-se uma interface que permite armazenar temporariamente os dados.
Finalmente, para dispositivos de alta velocidade utiliza-se um **barramento de alta velocidade**.



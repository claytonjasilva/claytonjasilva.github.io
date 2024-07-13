# Cap. 5 - Barramento

## 5.1 Classificação funcional dos barramentos

O barramento nada mais é do que o meio de comunicações por meio do qual os elementos da arquitetura se comunicam.  
É bom salientar que por meio dos barramentos trafegam sinais elétricos.  
Os barramentos não armazenam dados. Veiculam sinais elétricos que possuem algumas funções.  
De acordo com a função do sinal, consequentemente do meio que serve para que seja trafegado, os barramentos podem ser classificados 
**quanto à funcionalidade** em:  
- Barramento de dados;
- Barramento de endereços;  
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

Independentemente da classificação funcional do barramento uma característica fundamental do barramento é sua **largura**.  
Entende-se por **largura do barramento** como o número de linhas distintas, em cada uma das quais é trafegado 1 bit de dados, endereço ou de controle.  

![Classificação funcional e largura dos barramentos](/arq_aulas/images/classificacaobarramentos.jpg)

A largura do barramento tem impactos sobre o desempenho do sistema.  
Quanto maior a largura do barramento de dados maior será o número de bits transferidos de cada vez.  
A largura do barramento de endereços também tem impacto sobre o desempenho do sistema: quanto maior o barramento de endereços maior é o número de posições endereçadas pela processador.

## 5.2 Estrutura do barramento

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

## 5.3 Multiplexação de barramento

As linhas de barramento podem ser construídas de duas formas diferentes:  
- **dedicadas**; e
- **multiplexadas**.

Uma linha de barramento dedicada possui uma função fixa ou é associada a um subconjunto de componentes físicos de um computador.  
Em caso contrário, ou seja, em que a linha pode ser usada para mais de uma função, diz-se que o barramento é multiplexado.  
Um exemplo comum de multiplexação de barramento é sua utilização tanto para dados quanto para endereçamento.  
Para que esse uso com dupla função possa ocorrer é necessário sinalizar no barramento de controle se os bits no barramento se referem ou não a algumm endereço válido.  
Além disso, a mulitplexação requer que não se utilizem os bits de dados e endereços na mesma janela temporal. A isso se dá o nome de **multiplexação no tempo**.  
A vantagem de multiplexar o barramento de dados e endereço é economizar espaço e custo do circuito.  

## 5.4 Protocolos de barramento
Os processos de comunicação envolvendo os módulos do sistema computacional deve ser regulados pelo que se chama protocolo de barramento.  
São regras que definem a comunicação entre os elementos do sistema computacional.

### 5.4.1. Arbitração de barramentos
Em qualquer sistema, a menos daqueles muito simples, é muito comum um módulo precisar ter o controle do barramento para transferir dados para outro módulo.   
Como apenas uma unidade pode realizar uma transmissão por meio do barramento de cada vez, é necessário utilizar algum **método de arbitração**.  
Os vários métodos podem ser classificados como:  
- centralizados; ou
- distribuídos.

No **método centralizado** um único dispositivo, chamado de **controlador de barramento** ou **árbitro**, é responsável por alocar o tempo de utilização do barramento para cada módulo.
No **método distribuído** cada módulo do sistema contém uma lógica de controle de acesso e os módulos agem de forma conjunta para compartilhar o barramento.  

![Controlador de barramento](/arq_aulas/images/controladorbarramento.jpg)

Em ambos os métodos de arbitração, sempre haverá um **mestre** e um **escravo** no processo de comunicação:  
- *Master* (mestre) - Elementos ativos, que podem iniciar a transferência de dados;
- *Slave* (escravo) – Elementos passivos, que esperam as requisições para transferência de dados.

![Master/Slave de barramento](/arq_aulas/images/masterslavebarramento.jpg)

### 5.4.2. Temporização de barramentos
A **temporização de um barramento** se refere ao modo pelo qual os eventos são coordenados.  
Existem dois esquemas básicos de transmissão de dados entre os módulos:  
- transmissão síncrona; e
- transmissão assíncrona.

Na **transmissão síncrona**, a ocorrência de eventos é determinada por um sinal intitulado **relógio**.  
O barramento inclui uma **linha de relógio** no barramento de controle, por meio da qual um sinal, que pode assumir dois níveis lógicos,
estabelece a referência temporal da execução das tarefas.  
Ou seja, essa linha dá a referência para a ocorrência dos eventos de comunicação.
Todos os dispositivos conectados ao barramento podem ler a linha de relógico.

![Barramento com transmissão síncrona](/arq_aulas/images/barramentosincrono.jpg)

Basicamente, o *master*, em um instante sincronizado pelo relógio, disponibiliza um sinal para escrita/leitura no dispositivo.  
Após um número determinado de ciclos de clock do relógio o dispositivo *slave* estará pronto para receber os dados transmitidos pelo *master*.  
Admitindo que a CPU é o *master*, ela pode precisar ficar em **espera** (*wait state*) até que a leitura/escrita possa ser realizada.  
Obviamente isso é um inconveniente e leva a uma perda de performance do sistema.

Em um esquema de **transmissão assíncrona**, a ocorrência de um evento no barramento depende de um evento ocorrido anteriormente.  

![Barramento com transmissão assíncrona](/arq_aulas/images/barramentoassincrono.jpg)

No caso de transmissão assíncronona, o *master* disponibiliza em uma linha de controle que precisa fazer uma leitura/escrita.  
O *slave* reconhece o sinal e devolve um sinal de *acknowledge*, que indica estar pronto para escrever/ler os dados do *master*.  
É evidente que Não existe temporização – há uma série de eventos sequenciados.  
Embora seja mais eficiente, implica mais complexidade para implementação.

## 5.5 Padrões de barramento
Existem vários padrões de barramento, cada um dos quais define **protocolos** de comunicação, assim como padrões físicos, lógicos e elétricos.  

São exemplos de alguns:
1. Barramento ISA (*Industry Standard Architecture*): 8 bits (16 bits), clock de 8,33 MHz  
2. Barramento PCI (*Peripheral Component Interconnect*): 32 bits e clock de 33 MHz
3. Barramento AGP (*Accelerated Graphics Port*): 
  - AGP 1.0: 32 bits, 66 MHz; AGP 2.0 ...
4. Barramento PCI-X (*Peripheral Component Interconnect eXtended*):
  - PCI-X 1.0: 64 bits, 66 MHz, 100 MHz e 133 MHz
  - PCI-X 2.0: 64 bits, 266 MHz e 533 MHz

![Barramento PCI-X](/arq_aulas/images/barramentopcix.jpg)

___
**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**  

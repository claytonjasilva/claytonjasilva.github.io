# 9. Microcontrolador 2560 Atmel Atmega 2560

## 9.1 Definição de microcontroladores

Circuitos integrados que possuem internamente todos os componentes necessário ao seu funcionamento (exceto fonte de alimentação).  
Microcontroladores são computadores de um único chip.   

![Microcontroladores - visão geral](/arq_aulas/images/microcontrolador.jpg)

## 9.2 Sobre o 2560

### 9.2.1 Características gerais
- Arquitetura RISC
- 135 instruções
- Até 16 MIPS em 16 MHz
- Flash 256 kB
- 32 registradores de 8 bits
- 4 kB EEPROM
- 8 kB SRAM
- Periféricos
  - 4 canais PWM de 8 bits
  - 16 canais conversor AD
...
- I/O
Ao combinar uma **CPU RISC** de 8 bits com Flash autoprogramável no sistema em um chip monolítico, o Atmel 
ATmega2560 é um poderoso microcontrolador que fornece uma solução altamente flexível e econômica 
para muitas aplicações de controle embarcadas.
**Todos os detalhes do microcontrolador podem ser obtidos em**  

### **[Datasheet Atmega 2560](https://ww1.microchip.com/downloads/en/devicedoc/atmel-2549-8-bit-avr-microcontroller-atmega640-1280-1281-2560-2561_datasheet.pdf)**

### 9.2.2 Pinagem
A figura apresenta a pinagem do Atmega 2560.  

![Pinagem do Atmega 2560](/arq_aulas/images/atmegapinagem.jpg)

#### Descrição geral dos pinos
Os prinncipais pinos são:  
1. Portas A, B, C, D E, F , G, H, J, K, L, cada uma de 8 bits (P7...P0), bi-direcionais. Algumas possuem funcionalidades específicas, como descritas no *datasheet*.
2. Alimentação, VDD e GND.
3. RESET.

### 9.2.3 Diagrama em blocos
A figura apresenta o diagrama de blocos do Atmega 2560.

![Diagrama em blocos do Atmega 2560](/arq_aulas/images/atmegapinagem.jpg)

O ATmega fornece os seguintes recursos, entre outros:  
1. Sistema de memória constitído de 256 KB de memória In-System Programável Flash (Read-While-Write), 4KB de EEPROM, 8KB de SRAM e 32 registradores de uso geral
  - O Flash ISP no chip permite que a memória do programa seja reprogramada no sistema através de uma interface serial SPI, por um conversor não volátil convencional programador de memória, ou por um programa de inicialização On-chip rodando no núcleo AVR.
3. 4 portas de comunicação serial assíncrona (USART);
4. Conversor analógico digital (ADC) de 16 canais e 10 bits;
5. Porta serial SPI, IEEE® std;
6. O dispositivo é fabricado usando a tecnologia de memória não volátil de alta densidade da Atmel. 

### 9.2.4 Núcleo da CPU

#### a. Visão geral  
A figura apresenta o núcleo da CPU do Atmega 2560.

![Núcleo da CPU do Atmega 2560](/arq_aulas/images/atmegacpu.jpg)

Para maximizar o desempenho e o paralelismo, o AVR usa uma arquitetura Harvard – com memórias separadas
e barramentos para programa e dados.  

As instruções na memória do programa são executadas com um *pipelining* de nível único.
Enquanto uma instrução está sendo executada, a próxima instrução é pré-buscada da memória do programa. Este conceito
permite que as instruções sejam executadas em cada ciclo de clock. 

A memória do programa é reprogramável no sistema Memória flash.

O conjunto de registradores de acesso rápido contém **registradores de uso geral** de 32 × 8 bits com um único ciclo de clock
tempo de acesso. Isso permite a operação da Unidade Lógica Aritmética (ALU) de ciclo único. 

**Seis dos 32 registros podem ser usados como três ponteiros de registro de endereço indireto de 16 bits** para endereçamento de espaço de dados –
permitindo cálculos de endereços eficientes. Um desses ponteiros de endereço também pode ser usado como um ponteiro de endereço
para consultar tabelas na memória do programa Flash. **Esses registradores de função adicionados são os registradores X, Y e Z de 16 bits.**

A ULA suporta operações aritméticas e lógicas entre registradores ou entre uma constante e um registrador. Após uma operação aritmética, o registrador de status é atualizado para refletir informações sobre o resultado da operação.

**O espaço da memória Flash do programa é dividido em duas seções**, a seção **Programa de Inicialização** e a seção **Programa Aplicativo**. 

A SRAM pode ser facilmente acessada através dos **cinco diferentes modos de endereçamento** suportados na arquitetura AVR.

O espaço de **memória de E/S** contém 64 endereços para funções periféricas da CPU como registradores de controle, SPI e outros
funções de E/S. **A Memória de E/S pode ser acessada diretamente, ou como as localizações do Espaço de Dados seguindo as do Registro
Arquivo, 0x20 - 0x5F**. Além disso, o ATmega possui espaço de E/S estendido de 0x60 -
0x1FF na SRAM onde somente as instruções ST/STS/STD e LD/LDS/LDD podem ser usadas.

#### b. ULA  
Opera em conexão direta com todos os 32 registradores de uso geral.
Dentro de um único ciclo de clock, operações aritméticas entre registradores de uso geral ou entre um registrador e um
imediatos são executados. As operações da ULA são divididas em três categorias principais:
  – aritméticas, 
  - lógicas e 
  - funções de bit.  

#### c. Registrador de Status  
O registrador de status contém informações sobre o resultado da instrução aritmética executada mais recentemente. Essas
informações podem ser usadas para alterar o fluxo do programa a fim de realizar operações condicionais. Observe que o estado do registrador é atualizado após todas as operações da ULA, conforme especificado no manual do *set* de instruções. Em muitos casos eliminam a necessidade de usar as instruções de comparação dedicadas, resultando em um processamento mais rápido e código compacto.  
A figura ilustra a organização do registrador de status  
![Registrador de status do Atmega 2560](/arq_aulas/images/atmegaregistradorstatus.jpg)

O significado de cada bit é o seguinte:  
- Bit 7: habilita a interrupção se estiver com valor 1;
- Bit 6: copia bit das insruções BLD e BST;
- Bit 5: indica se um bit de *carry* ocorreu em operação de 4 bits;
- Bit 4: indica o sinal da operação
- Bit 3: indica overflow de operação em complemento de 2;
- Bit 2: indica um resultado negativo;
- Bit 1: indica um resultado igual a 0;
- Bit 0: indica se houve *carry* na operação.

#### d. Registradores de uso geral
A figura ilustra a organização dos registrdores de uso geral  
![Registrador de uso geral do Atmega 2560](/arq_aulas/images/atmegaregistradorgeral.jpg)

A maioria das instruções tem acesso direto a todos os registradores, e a maioria deles possuem instruções de um ciclo.
Conforme mostrado na figura, **cada registrador também recebe um endereço de memória de dados**, mapeando-os diretamente para as primeiras
32 localizações do espaço de dados do usuário. Apesar de não ser fisicamente implementada como localizações SRAM, esta organização da memória
fornece grande flexibilidade no acesso dos registradores, pois os registradores dos ponteiros X, Y e Z podem ser configurados para
indexar qualquer registrador no arquivo.

**Os registradores X, Y e Z**  
Os registradores R26..R31 possuem algumas funções adicionais ao seu uso geral. Esses registradores são ponteiros de endereço de 16 bits
para endereçamento indireto do espaço de dados. Os três registradores de endereços indiretos X, Y e Z são
definido como descrito na figura.  
![Registradores de endereço do Atmega 2560](/arq_aulas/images/atmegaregistradorendereco.jpg)

### 9.2.5 Sistema de memória 
A arquitetura AVR tem dois espaços de memória principais, a Memória de Dados e o espaço de Memória de Programa. Além disso, possui uma memória EEPROM para armazenamento de dados. Todos os três espaços de memória são lineares e regulares.

#### a. Memória de programa *flash* reprogramável no sistema  
O ATmega contém 256KB On-chip In-System Reprogrammable Flash para armazenamento de programas.  
Como todas as instruções do AVR têm 16 ou 32 bits de largura, a Flash é organizada como 128K × 16 bits.  
Para segurança de software, o espaço de memória do Programa Flash é dividido em duas seções,  
Seção Programa de Inicialização e   
uma seção Programa Aplicativo.  
O ATmega possui contador de programa (PC) tem  com 17 bits de largura, endereçando assim os locais de memória de programa de 128K.
A figura ilustra a organização dos registrdores de uso geral  
![Memória *flash* do Atmega 2560](/arq_aulas/images/atmegaflash.jpg)

#### b. SRAM  
A figura mostra como a memória SRAM do ATmega é organizada.
![Memória SRAM do Atmega 2560](/arq_aulas/images/atmegasram.jpg)

Uma SRAM de dados externa opcional pode ser usada com o ATmega. Esta SRAM ocupará
uma área nos locais de endereço restantes no espaço de endereço de 64 K. Esta área começa no endereço seguinte ao da
RAM interna.  
Os cinco modos de endereçamento diferentes para a cobertura da memória de dados: Direto, Indireto com Deslocamento, Indireto, Indireto
com Pré-decremento e Indireto com Pós-incremento.  
O endereçamento direto atinge todo o espaço de dados.  
O modo Indireto com Deslocamento atinge 63 localizações de endereço a partir do endereço base fornecido pelo registrador Y
ou registrador Z.  
Os registradores R26 a R31 apresentam os registradores de ponteiro de endereçamento indireto.  
Ao usar modos de endereçamento indireto de registro com pré-decremento e pós-incremento automáticos, o endereço
os registradores X, Y e Z são decrementados ou incrementados.  
Os 32 registradores de uso geral, 64 registradores de E/S e os 8.192 bytes de SRAM de dados internos no
ATmega são todos acessíveis através de todos esses modos de endereçamento. 

#### c. EEPROM
O ATmega contém 4 KB de memória EEPROM de dados.  
É organizado separadamente do espaço de dados, no qual bytes individuais podem ser lidos e escritos. 
O acesso entre a EEPROM e a UCP é descrito a seguir, especificando o EEPROM Address Registers, EEPROM Data Register e EEPROM Control Register.  
Os registradores de acesso EEPROM são acessíveis no espaço de E/S.  
Se o código do usuário contém instruções que gravam a EEPROM, algumas precauções devem ser tomadas.

#### d. Memória de I/O  
Todos os periféricos e E/S do ATmega são colocados no espaço de E/S. Todos os locais de E/S podem ser
acessado pelas instruções LD/LDS/LDD e ST/STS/STD, transferindo dados entre os 32
registradores de trabalho e o espaço de E/S.  
Registradores de E/S dentro da faixa de endereço 0x00 - 0x1F são diretamente acessíveis por bit
usando as instruções SBI e CBI. Nesses registradores, o valor de bits individuais pode ser verificado usando as instruções SBIS
e SBIC. 
Ao usar comandos específicos IN e OUT, devem ser utilizados os endereços de I/O 0x00 - 0x3F.   
Ao endereçar registradores de E/S como espaço de dados usando as instruções LD e ST, 0x20 deve ser adicionado a esses endereços.  

### 9.2.6 *Set* de instruções
O manual do *set* de instruções pode ser consultado em ...


### 9.2.6 *Assembly* e *Assembler*

___
**[Home Conteúdo Arquitetura de Computadores](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/arq_aulas.md)**  ou 
**[Home Conteúdo Sistemas Digitais](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)**   
**Conversão de bases: [próximo>>](dimensoesUnidadesAritmeticaComputacional2.md)** 



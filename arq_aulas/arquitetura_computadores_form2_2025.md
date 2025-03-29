# Arquitetura de Computadores 2025.1  
## Formulário 2 - Conceitos iniciais. Máquina IAS

### 1. A memória é organizada em posições nas quais são armazenadas informações binárias.  
As posições são endereçáveis pela CPU para leitura e escrita em memória.  
Uma memória com 4096 posições e palavras de 8 bits terá os endereços entre 0 a 4095 indicados pela CPU através do barramento de endereços.  
Quantos bits deverá possuir, no mínimo, o barramento de endereços?
- ( ) 4096 bits  
- ( ) 4095 bits  
- ( ) 12 bits  
- ( ) 8 bits  
- ( ) Outro: _______

### 2. Na máquina anterior, quantos bits deverá ter o barramento de dados?
- ( ) 4096 bits  
- ( ) 4095 bits  
- ( ) 12 bits  
- ( ) 8 bits  
- ( ) Outro: _______

### 3. As instruções em linguagem de máquina são executadas, tipicamente, em sequência.  
Cada instrução, bem como os dados sobre os quais operam, fica armazenada em posições de memória, chamadas de endereço.  
No ciclo de execução das instruções da máquina de von Neumann, a CPU inicia a execução a partir do seguinte componente do nível de microarquitetura:
- ( ) Contador de Programa  
- ( ) Registrador de Endereço de Memória  
- ( ) Registrador Temporário de Memória  
- ( ) Registrador de Instruções  
- ( ) Acumulador  
- ( ) Outro: _______

### 4. Associar os elementos do nível de microarquitetura da máquina de von Neumann com o respectivo papel que desempenha.  
(Pergunta dissertativa)

### 5. Citar os motivos pelos quais as CPUs utilizam componentes chamados registradores para armazenar internamente informações binárias.  
(Pergunta dissertativa)

### 6. Quais são os componentes do nível de microarquitetura da máquina de von Neumann que pertencem à Unidade de Controle?  
Marque todas que se aplicam:  
- [ ] PC  
- [ ] MAR  
- [ ] MBR  
- [ ] IR  
- [ ] ACC  
- [ ] Outro: _______

### 7. Selecionar os componentes do nível de microarquitetura da máquina de von Neumann que pertencem à Unidade Lógica e Aritmética?  
(Pergunta dissertativa)

### 8. Os barramentos são meios pelos quais se trafegam os sinais entre os elementos do sistema computacional.  
A localização de um dado é indicada pelo processador à memória em qual tipo de barramento?
- ( ) Barramento de endereços  
- ( ) Barramento de controle  
- ( ) Barramento de dados  
- ( ) Barramento de sinalização  
- ( ) Outro: _______

### 9. O sinal de clock é a base de referência para as micro-operações da execução de cada instrução de máquina.  
Considere as seguintes micro-operações da etapa de busca da instrução do ciclo de execução das instruções:  
1. [PC] -> [MAR]; [PC] <- [PC] + 1  
2. [MAR] -> B. End.  
3. [MP] -> B. Dados  
4. B. Dados -> [MBR]  
Se a máquina operar a uma frequência de 4 MHz e cada micro-operação for realizada em 2 ciclos de clock, em quanto tempo será executada a busca de instrução?  
(Pergunta dissertativa)

### 10. A UC contém alguns componentes do nível de microarquitetura, entre os quais os microcircuitos de decodificação e controle.  
Em uma CPU projetada com instruções cujo código de operação possua 8 bits, quantas instruções de máquina distintas podem ser decodificadas, no máximo?
- ( ) 8 instruções  
- ( ) 16 instruções  
- ( ) 64 instruções  
- ( ) 256 instruções  
- ( ) Outro: _______

### 11. Na máquina de von Neumann, os operandos de cada instrução possuem 12 bits.  
Qual é a capacidade nominal de endereçamento à memória (ou seja, quantos endereços podem ser indicados) por uma instrução, admitindo que o operando contém o endereço do dado?
- ( ) 12 posições  
- ( ) 1024 posições  
- ( ) 4096 posições  
- ( ) 8192 posições  
- ( ) Outro: _______

### 12. O resultado da execução de uma instrução pode ser armazenado no ACC.  
Para o resultado ser transferido para memória é necessário que seja executada uma operação de escrita em memória.  
Para realizar a busca de uma instrução em memória é necessário que a CPU realize uma operação de leitura em memória.  
Por esse motivo, o barramento de dados é:
- ( ) multidirecional  
- ( ) unidirecional  
- ( ) bidirecional  
- ( ) multiplexado  
- ( ) Outro: _______

### 13. Quanto à mesma característica de sentido do tráfego de bits, o barramento de endereços pode ser classificado em:
- ( ) multidirecional  
- ( ) unidirecional  
- ( ) bidirecional  
- ( ) multiplexado  
- ( ) Outro: _______

### 14. Explicar sinteticamente porque a máquina de von Neumann precisa dispor de um microcircuito chamado de Registrador Temporário de Instruções.  
(Pergunta dissertativa)

### 15. As CPUs modernas podem executar somente uma instrução e seus respectivos estágios por vez? Explicar sucintamente.  
(Pergunta dissertativa)

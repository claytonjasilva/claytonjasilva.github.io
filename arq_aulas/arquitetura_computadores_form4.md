
# Arquitetura de Computadores 2024.2
## Formulário 4 - Modelo de Máquina de Níveis

### Questões

1. Explique com suas palavras o modelo de camadas ou níveis de sistemas computacionais. Qual é a finalidade de aplicar o modelo?

2. Qual camada do modelo de 6 níveis é responsável pela gestão dos recursos de hardware e pela interface entre o usuário e o hardware?

3. O código-fonte de um programa, escrito em uma linguagem de alto nível como C ou Java, precisa ser traduzido para código-objeto (ou código executável) para que o processador possa executá-lo diretamente. Em qual camada do modelo de 6 níveis ocorre a execução desse código-objeto, ou linguagem de máquina?

4. Quais das funções abaixo estão diretamente associadas ao Sistema Operacional, nível 3 do modelo de 6 níveis? (Selecione todas as corretas)
- [ ] a) Gerenciamento de memória
- [ ] b) Processamento de instruções aritméticas
- [ ] c) Controle de dispositivos de entrada e saída
- [ ] d) Execução de programas em modo usuário
- [ ] e) Interpretação de instruções em código de máquina

5. Estudamos na seção anterior os elementos pertencentes à CPU da máquina de von Neumann. Os elementos como os circuitos lógicos e aritméticos da ULA, bem como MBR, ACC, entre outros, pertencem a qual das camadas do modelo de 6 níveis?

6. A camada mais elementar do modelo da máquina de níveis, no sentido de operar de acordo com sinais elétricos, utiliza componentes básicos chamados de portas lógicas. Selecione as alternativas corretas.
- [ ] a) Camada 0: Nível de portas lógicas
- [ ] b) Camada 1: Nível de microarquitetura
- [ ] c) Camada 2: ISA
- [ ] d) Camada 3: Sistema operacional
- [ ] e) Camada 4: Linguagem assembly
- [ ] f) Camada 5: Linguagem de alto nível

7. O que é o opcode de uma instrução no nível ISA?

8. Explique como o opcode de uma instrução no nível ISA interage com a microarquitetura de um processador durante a execução de uma instrução.

9. Quais são as principais características de um processo de tradução em comparação com a interpretação? (Selecione todas as corretas)
- [ ] a) A tradução gera um código executável independente, enquanto a interpretação executa o código diretamente.
- [ ] b) A tradução analisa o código-fonte inteiro antes da execução, enquanto a interpretação analisa e executa linha por linha.
- [ ] c) A interpretação tende a ser mais rápida durante a execução, pois já gera um código otimizado.
- [ ] d) A tradução pode detectar erros em todo o programa antes da execução, enquanto a interpretação detecta erros em tempo de execução.
- [ ] e) Um programa traduzido é executado independentemente de seu código-fonte, enquanto um programa interpretado requer o interpretador para rodar.

10. Um desenvolvedor escreveu um programa em linguagem C e deseja executá-lo em uma máquina. O processo para fazer isso envolve os seguintes passos:
O código-fonte escrito em C é processado por um software que analisa todo o programa de uma vez, verificando a sintaxe e gerando um arquivo binário contendo instruções de máquina que podem ser executadas diretamente pelo processador. Após essa conversão, o arquivo binário gerado é independente do código-fonte original e pode ser executado sem a necessidade de qualquer software adicional para interpretar as instruções.

Com base na descrição acima, explique se esse processo configura-se como tradução ou interpretação e justifique sua resposta.

11. Desenvolva um programa em linguagem de montagem da máquina IAS que some dois números inteiros armazenados em posições de memória 0x01A a 0x01F. Subtrair o resultado dos números armazenados nas cinco posições subsequentes adjacentes. Se o resultado da soma for maior que um valor de referência armazenado em 0x100, o resultado da soma deve ser armazenado nas posições de memória 0x101; em caso contrário, armazenar na posição 0x102.

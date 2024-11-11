# Arquitetura Formulário 7

---

### Perguntas

1. **O princípio que proporciona o aumento de performance do sistema de memória das máquinas computacionais quando se utiliza a memória cache é chamado de**:
   - [ ] Programa armazenado
   - [ ] Princípio da localidade
   - [ ] Princípio de conversão
   - [ ] Conceito de máquina de níveis

2. **Explicar sinteticamente o princípio da localidade espacial e sua influência no desempenho dos sistemas de memória.**

3. **Seja a tabela apresentada abaixo, que representa parâmetros de desempenho do sistema de memória de uma máquina. Admitindo que o barramento de dados possua 8 bits, qual é a vazão na leitura de dados realizada pelo processador na cache que intermedia a comunicação MP e processador?**
   - [ ] 0,1 GB/s
   - [ ] 0,01 GB/s
   - [ ] 8 GB/s
   - [ ] 0,8 GB/s
   - [ ] 0,08 GB/s

4. **Admita um sistema de memória em uma máquina que possui MP com latência de 5 milissegundos e cache com latência de 10 nanossegundos. Seja um programa armazenado em memória que possua 400 instruções que acessam o sistema de memória com uma taxa de acerto à cache de 90%. Qual será o tempo total de execução esperado para o programa?**

5. **Um sistema de memória possui uma cache de 8 linhas. Possui uma MP de 256 kB, com palavras de 8 bits. O controle da cache organiza a MP em blocos de 4 kB. Qual é o número de blocos da MP?**

6. **Considerando a organização do sistema de memória apresentada na questão anterior, qual será a capacidade de armazenamento da cache?**
   - [ ] 2
   - [ ] 4
   - [ ] 8
   - [ ] 16
   - [ ] 32
   - [ ] 64

7. **Ainda em relação à questão 5. Considerando que o mapeamento aplicado ao controle de leitura de dados na cache seja mapeamento direto, quantos e quais blocos da MP poderiam ser mapeados na cache de linha 0? Justificar a resposta.**

8. **Comparando o mapeamento associativo com o mapeamento direto no controle de leitura de dados, pode-se afirmar que**:
   - [ ] O mapeamento direto é mais complexo e mais eficiente
   - [ ] O mapeamento direto é mais complexo, porém menos eficiente
   - [ ] O mapeamento associativo é mais complexo, porém menos eficiente
   - [ ] O mapeamento associativo é mais complexo e mais eficiente

9. **No controle de leitura de dados na cache em que o mapeamento é associativo, admita que se utiliza a substituição de dados na cache aplicando-se FIFO. Sendo uma cache de 4 linhas (C0, C1, C2 e C3) que armazena respectivamente B0, B1, B7 e B15, no caso de substituição dos dados de uma das linhas, qual dos blocos será substituído?**
   - [ ] B0
   - [ ] B1
   - [ ] B7
   - [ ] B15

10. **Explique sinteticamente as alternativas de processo de escrita de dados na cache.**

11. **A respeito da organização do sistema de cache, o que representa o campo Tag nas linhas de cache?**
    - [ ] O campo Tag identifica a posição exata do dado na memória principal, garantindo a precisão do endereço físico completo.
    - [ ] O campo Tag indica o endereço do dado armazenado em uma linha específica da cache, permitindo verificar se o dado solicitado está presente na cache.
    - [ ] O campo Tag armazena o dado propriamente dito na linha de cache, facilitando o acesso direto ao conteúdo necessário pelo processador.
    - [ ] O campo Tag calcula automaticamente o índice da linha de cache onde o dado será armazenado, otimizando a busca dos dados na memória.
    - [ ] O campo Tag representa o contador de frequência de uso de uma linha de cache, auxiliando na política de substituição de dados menos utilizados.

12. **Além da localidade espacial, a cache utiliza o princípio da localidade temporal. O que isso significa?**
    - [ ] A localidade temporal significa que dados armazenados em locais próximos na memória tendem a ser acessados consecutivamente pelo processador.
    - [ ] A localidade temporal sugere que, uma vez que um dado é carregado na cache, ele será sempre armazenado ali, mesmo que não seja mais acessado.
    - [ ] A localidade temporal indica que, quando um dado é acessado, existe uma alta probabilidade de que o mesmo dado seja acessado novamente em breve.
    - [ ] A localidade temporal significa que a cache armazena apenas dados utilizados em momentos específicos do programa, liberando-os após certo tempo.
    - [ ] A localidade temporal se refere ao uso da cache para armazenar dados em um ciclo específico do processador, evitando acessos à memória principal.

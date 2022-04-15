## Dicionários

### Conceitos gerais
1. Dicionários são também chamados de “memória associativa” ou “vetor associativo” em outras linguagens. Diferente de sequências que são indexadas por inteiros, dicionários são indexados por **chaves (*keys*)**.
2. Chaves podem ser de qualquer tipo imutável (como strings, inteiros e Tuplas - se contiverem apenas strings, inteiros ou outras tuplas). 
3. É interessante imaginar um dicionário como um conjunto não-ordenado de pares **chave:valor**, onde as chaves são únicas em uma dada instância do dicionário. 
4. Dicionários são delimitados por chaves: **{ }**, e contêm uma **lista de pares *chave:valor* separada por vírgulas**. 
5. O dicionário vazio é { }.

### Principais operações  
As principais operações em um dicionário são:
1. **Armazenar** e **recuperar** valores a partir de chaves;
2. **Remover** um par *chave:valor* com o comando *del*. Se você armazenar um valor utilizando uma chave já presente, o antigo valor será substituído pelo novo. Se tentar recuperar um valor usando uma chave inexistente, será gerado um erro.
3. **Devolver a lista** de todas as chaves presentes no dicionário, na ordem de inserção, usando **list(d)** em um dicionário d;
4. **Ordenar**, usando a função *sorted(d)*;
5. **Verificar** a existência de uma chave, usando o operador *in*.

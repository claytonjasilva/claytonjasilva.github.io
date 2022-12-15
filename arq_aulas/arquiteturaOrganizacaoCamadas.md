# 2. Arquitetura, Organização e Modelos de máquina de níveis

## 2.1 Arquitetura e Organização
Segundo [Stallings, W.](http://williamstallings.com/), o termo *arquitetura* distingue-se do termo *organização*, 
pois o primeiro relaciona-se aos atributos do que é visível ao programador no sentido de influencairem a lógica dos códigos desenvolvidos, 
enquanto o segundo se refere aos **relacionamentos** e **funções** dos **elementos constituintes** dos sistemas computacionais.
Os relacionamentos entre os elementos são as ligações físicas e lógicas estabelecidas entre eles durante uma operação.
No domínio da engenharia de requisitos, entende-se como função uma operação proporcionada por um sistema (ou pelos seus componentes)
quando lhes são proporcionadas entradas, da qual resulta uma saída. Essa operação está condicionada por restrições.

### 2.1.1 Elementos e funções típicos dos sistemas computacionais
A estrutura típica de sistemas computacionais, em uma visão de alto nível, é apresentada na figura abaixo.

![Visão Geral dos sitemas computacionais](/arq_aulas/images/computador_visao_geral.jpg)

As funções básicas que um computador desempenha são as seguintes:  
1. Proessamento de dados
2. Armazenamento de dados
3. Transferência de dados
4. Controle

A **Unidade Central de Processamento** (CPU do inglês) controla a operação do computador e processa os dados - é muitas vezes chamada simplesmente de processador.  
A **memória** armazena os dados, na forma de representação binária, ou seja, em bits.  
Os **dispositivos de entrada e saída** transferem os dados entre o computador e o ambiente externo.  
Os **elementos de interconexão** permitem a comunicação entre os disversos elementos presentes no computador.

### 2.1.2 Dados, linguagens de computador e informação
Os dados, conforme tratado acima, são conjunto de bits que são processados pelo computador. Muitas vezes se trata de forma indistinta as definições de dados e informações, no entanto essa abordagem desconsidera uma das principais funções do computador, qual seja de processar dados.  
A diferença básica entre dado e informação está no contexto em que os bits são tratados:  
- O dado é o conjunto bruto de bits, **sem valor agregado**
- A informação é o conjunto de bits que sofre um processamento que lhes agrega valor, objetivando solucionar um problema
- No entanto, a informação em um outro contexto pode ser novamente processada - nesse sentido se configura como um dado, para proporcionar um novo valor agregado, de interesse à solução de novo problema
- O processamento realizado pelo computador é assegurado pela execução de programas escritos em uma **linguagem de programação**.

![Diferença entre dados e informação](/arq_aulas/images/dados_informacao.jpg)

| Linguagem e programa | Conceito |
| ------------------ | -------- |
| Linguagem | Sistema de símbolos, sinais ou objetos instituídos como signos – **código**, que obedece a regras de **sintaxe e semântica**. |
| Programa | Conjunto de instruções escritas em uma das linguagens entendidas pelas máquinas para processamento de dados. |

### 2.1.3 Modelo de máquinas de níveis
Utilizamos na disciplina a abordagem proposta pelo [Tanenbaum, A. S.](https://www.cs.vu.nl/~ast/). O computador pode ser projetado como um conjunto de **camadas** ou **níveis**, um sobre o outro.  
A organização de um computador pode ser entendida como um conjunto de máquinas M<sub>i</sub>, cada uma com uma Linguagem de Programação L<sub>i</sub>, para as quais são escritos os programas.  
Cada máquina ocupa uma camada ou nível N.  

![Máquina multinível](/arq_aulas/images/camadas_computador.jpg)

Cada nível *i* executa programas que contêm instruções de uma linguagem (L<sub>i</sub>).  
Cada instrução de um nível *i* pode ser convertida em instruções de um nível *i-1* (inferior).   
São necessárias interfaces para **conversão** dos programas escritos na linguagem de um nível para execução no nível ao nível inferior: **tradutores** ou **interpretadores**.  
A distância entre as linguagens das máquinas não pode ser muito grande,
sob pena do processo de tradução ou interpretação ser muito complexa.  

| Conversores de código | Característica |
| --------------------- | -------------- |
| Tradução | instruções e dados do código da máquina de origem são substituídos pelos equivalentes no código da máquina de destino, em que o programa será executado. |
| Interpretação | instruções e dados da linguagem da máquina de origem são mantidos conforme o código original, convertendo-se para a linguagem da máquina virtual de destino conforme a necessidade da execução do código de origem. |

## 2.2 Máquina de seis níveis
O modelo específico que é utilizado na disciplina é o da **máquina de 6 níveis**. Cada um dos níveis é descrito genericamente a seguir.  
1. **Nível 0** - nível de lógica digital. Mais elementar. Utiliza **portas lógicas (*gates*)**, que podem ser combinadas em série e em paralelo, para a construção de circuitos digitais. Os dados são sinais elétricos, abstrações dos bits.
2. **Nível 1** - nível de microarquitetura. Circuitos especializados: registradores; Unidade Lógica e Aritmética; barramentos internos – caminho de dados; Unidade de Controle, constituída de microprogramas ou de circuitos eletrônicos.
3. **Nível 2** - nível ISA (*Instructions Set Architecture*). Nível do processador. As instruções são definidas pelo fabricante.
4. **Nível 3** - nível de sistema operacional. Possui instruções próprias, assim como usa instruções do próprio nível ISA. Considera-se como um nível híbrido.
5. **Nível 4** - nível de linguagem de montagem (*assembly*). Contempla instruções simbólicas que podem ser executadas pelos níveis inferiores (1, 2 e 3), dispensando o conhecimento detalhado dos elementos físicos, usando o programa ***assembler* (montador)**. 
6. **Nível 5** - nível de aplicações. Usam as chamadas linguagens de alto nível, convertidas para a linguagem de montagem (*assembly*) por programas chamados compiladores.

Considerando as camadas acima, pode-se definir os métodos e programas de suporte à conversão dos códigos entre as linguagens.

![Métodos e programas típicos de conversão de códigos no modelo de 6 níveis](/arq_aulas/images/camadas_computador.jpg)









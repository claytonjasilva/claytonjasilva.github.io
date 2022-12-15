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





# 5. Sistema de memória

## 5.1 Hierarquia do sistema de memória
A estratégia de armazenamento de dados nos sistemas de computação pode ser resumida conforme apresenta a figura.

![Hierarquia do sistema de memória](/arq_aulas/images/hierarquiamemoria.jpg)
 
As características de performance de cada tipo de memória usado no sistema de computação podem ser representadas por uma pirâmide, 
que representa  
- a capacidade de armazenamento de bits,  
- a velocidade e   
- o custo. 
 
Quanto mais o tipo se aproxima da base, maior é a capacidade de armazenamento e o tempo de uso e menor é o custo por bit armazenado.  
Todos são dispositivos de armazenamento de dados e sua distribuição na arquitetura depende das características mencionadas acima.

Os quatro tipos de memória usados no sistema de computação são: **memória secundária**, **memória principal**, **memória cache** e **registradores**. 

A tabela apresenta de forma mais precisa as características descritas de forma genérica na pirâmide anterior.

![Comparação das características dos níveis da hierarquia de memória](/arq_aulas/images/caracteristicasmemoria.jpg)

A **capacidade armazenamento** de memórias é um atributo que já foi tratado anteriormente.   
É definida como o número de bits que a memória pode armazenar.  
Pode ser definida em bytes (B), lembrando que cada byte possui 8 bits.  
Além disso, pode-se referir aos múltiplos de bits ou bytes, 
lembrando que 2<sup>10</sup> representa 1 K, 2<sup>20</sup> representa 1 M e 2<sup>30</sup> representa 1 G.  

A velocidade pode ser definida pelo **tempo de acesso**.   
O tempo de acesso representa quanto tempo a memória gasta para disponibilizar um dado após o endereço ser disponibilizado.  
O tempo de acesso depende da tecnologia de construção. 

Outro parâmetro que pode definir a velocidade da memória é chamado de **ciclo de memória**.  
O ciclo de memória é o tempo decorrido entre duas operações sucessivas de acesso à memória, seja para leitura ou escrita.  
Nesse sentido, o ciclo de memória compreende o tempo de acesso mais o tempo necessário para a realização de outras operações do sistema, 
logo *t<sub>C</sub> = t<sub>A</sub> + t<sub>S</sub>*.

## 5.2 TEcnologias de construção

As características dos tipos de memória dependem fortemente da tecnologia de construção utilizada.  
A figura apresenta as diversas tecnologias existentes no mercado.  

![Tecnologias de memória](/arq_aulas/images/tecnologiasmemoria.jpg)

A árvore de classificação distingue claramente duas tecnologias:  
- ROM e  
- RAM. 

Quanto à **forma de acesso**, o acesso aleatório da construção de memória relaciona-se com o tempo de acesso curto e
igual para todas as células. Nas memórias de **acesso aleatório**, não há necessidade de ler outras posições antes de acessar uma célula.   
Tempo de acesso curto e igual para todas as células.  
Existem tecnologias em que o acesso a uma célula requer uma sucessão preliminar de posições antes de acessar a posição de interesse.  
Nesse caso a memória é de **acesso sequencial**.  

As memórias de acesso aleatório (RAM, do inglês *Random Access Memory*) admitem ser lidas ou ser escritas e
mantêm os dados armazenados somente se houver alimentação elétrica.  
Essa característica define a **volatilidade** do armazenamento de dados.  
Memórias RAM são voláteis.  
As memórias somente de acesso (ROM, do inglês *Read Only Memory*) não admitem ser lidas e escritas livremente, com as RAMs.  
A escrita dos dados é realizada de acordo com condições controladas.  
Além disso, quanto à volatilidade, os dados armazenados na ROM permanecem mesmo na ausência de alimentação,  
portanto são tipicamente não voláteis. 

Os sistemas de computação prescindem também do uso de memórias que sejam não voláteis, ou seja,   
que mantenham os dados armazenados mesmo quando haja ausência de alimentação elétrica.  
O principal inconveniente das memórias ROM, não admitir nova programação após a primeira ter sido feita,   
foi progressivamente sendo vencido pelo avanço tecnológico, com o surgimento de:  
- memórias que suportavam ser programadas conforme o interesse, embora somente uma vez (PROM, do inglês *Programmable ROM*);  
- apagadas e programadas novamente (EPROM, do inglês *Erasable PROM*) e  
- reprogramadas - apagadas e gravadas - eletricamente (EEPROM, do inlgês Electrically-Erasable PROM).
 
Mais recentemente, a memória *flash* é um tipo de EEPROM que pode ser reprogramada no próprio circuito,  
sendo cada vez mais utilizada nos sistemas de computação. 


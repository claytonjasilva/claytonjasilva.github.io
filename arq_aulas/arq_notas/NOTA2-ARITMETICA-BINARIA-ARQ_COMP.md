ARQUITETURA DE COMPUTADORES - 2021.2

PROF. CLAYTON J A SILVA – NOTA DE AULA 2
# **REPRESENTAÇÃO NUMÉRICA, ARITMÉTICA BINÁRIA E CODIFICAÇÃO**
1. # **Representação em notação posicional e notação polinomial**
A forma mais empregada de representação de grandezas numéricas é a notação posicional. Nela, os algarismos componentes de um número assumem valores diferentes, dependendo da posição relativa que ocupam. O valor total é a soma dos valores relativos ponderados pela sua respectiva posição, como, por exemplo, 1457= 1x103+4x102+5x101+7x100.

Analisando o número apresentado, observe que são usados os dígitos 1, 4, 5 e 7. Para determinação da grandeza cada um deles é ponderado pela potência de base 10 e expoente dado pela sua posição relativa e determinada a soma. Obviamente se a posição relativa dos dígitos for alterada a grandeza representada também será alterada. Por exemplo, 4275 é diferente de 1457.

No exemplo, são utilizados dígitos pertencentes a um conjunto de dez dígitos numéricos, definido por *D*={0,1,2,3,...,9}, por razões históricas que não discutiremos neste texto. O fato da dimensão do conjunto possuir 10 dígitos implica que o sistema de representação utilizado para representar as grandezas numéricas que o utilize seja designado como sistema decimal, ou sistema de base 10. A representação pela soma ponderada de potências de 10 decorre do sistema possuir base 10. 

A notação posicional não é privilégio de uso do sistema decimal. Qualquer outro sistema numérico para representação de grandezas pode usá-la. São sistemas numéricos que nos interessa em especial os sistemas de base 2, base 8, base 16, além obviamente da base decimal, conforme apresenta a Figura 1.

![](Aspose.Words.792fe533-53d0-4299-bd8f-728213f44dd8.001.png)

Figura 1 – Sistemas de base 2,8,10 e 16

O interesse específico na base 2 decorre do fato das grandezas numéricas armazenadas no computador serem representadas utilizando-se somente os dígitos binários (***bi**nary digi**t**s*) 0 e 1 (lembrando que essa representação é uma abstração dos sinais elétricos correspondentes).

A representação em base octal (8) e em base hexadecimal (16) é útil, pois a conversão de/para a correspondente representação binária possui uma facilidade muito superior a correspondente representam decimal. Como as grandezas em representação binária podem ser muito extensas, a sua manipulação pode ser inconveniente. Assim manipulá-las na sua forma octal ou hexadecimal (a preferida!!!) é normalmente a forma mais conveniente. 

A Figura 1 mostra a equivalência entre os dígitos binários, octais, decimais e hexadecimais. Qualquer que seja a base utilizada para a representação de grandezas numéricas, a notação posicional pode ser utilizada. Generalizando o exemplo apresentado anteriormente, o número pode ser representado por   

Nb=dmdm-1…d0

, onde *N* é a grandeza, *b* é a base, *m* é o número de dígitos daquela base usados e os índices *0* a *m* representa a posição do dígito.

Daqui para frente, utilizaremos as representações binárias e decimais sem a utilização da indicação da base, na hipótese de que o contexto evidenciará a que base se refere. Por exemplo, quando indicarmos que o endereço de memória é 1023, estaremos nos referindo à base 10, pois 2 e 3 não dígitos que pertencem ao conjunto dos binários. Por outro lado, 101110110000 indicando o operando de uma instrução sugere que se utiliza a base 2.

Nas representações de grandezas no sistema hexadecimal, a literatura utiliza como convenção inclui *h* ou *H* após o número, como A3Fh, A3FH, ou também preceder o número por *0x*, como 0xA3F. 

Generalizando o caso particular decimal tratado no início, a representação posicional corresponde sua notação polinomial, definida por

Nb=dm×bm+dm-1×bm-1…+d0×b0

A notação polinomial permite gerar matematicamente a conversão entre bases, que é o que discutiremos a seguir. 
1. # **Conversão entre grandezas representadas em bases diferentes**
   1. # **Conversão da base 10 para a base 2**
Na conversão de grandezas de base decimal para base binária o número decimal é dividido sucessivamente por 2 e os restos da divisão inteira são sequenciados na ordem inversa da divisão. A divisão deve ser realizada até se obter o quociente 0. A Figura 2 apresenta o método.

![](Aspose.Words.792fe533-53d0-4299-bd8f-728213f44dd8.002.png)

Figura 2 – Conversão de número N de base 10 para 

Os restos da divisão *rj* são os bits do número representado na base binária, posicionados na ordem inversa das sucessivas divisões. Ou seja, o número decimal *N* é representado por *rn rn-1 ... r0 = bn bn-1 ... b0* na base binária, onde *bj* é o bit e *j* é a sua posição relativa.
1. # **Conversão da base 2 para a base 10**
Na conversão da base 2 para a base 10 utiliza-se diretamente a notação polinomial do número, sendo a base expressa na sua forma decimal. O resultado da soma do polinômio é a representação da grandeza no sistema decimal. Assim, dado um número binário bnbn-1…b0, a sua representação decimal será dada pelo resultado da soma

bn×2n+bn-1×2n-1…+b0×20
1. # **Conversão entre grandezas hexadecimais e binárias**
Conforme tratamos anteriormente, as grandezas numéricas do mundo real são normalmente tratadas na sua representação decimal. Nos computadores, essas grandezas são representadas utilizando-se o sistema binário. No entanto, as grandezas manipuladas pelos computadores são normalmente muito grandes e muitas vezes precisam ser simplificadamente indicadas nos códigos dos programas ou na análise de informações técnicas das máquinas. Para isso, utiliza-se frequentemente a notação hexadecimal, cuja conversão para o sistema binário é simples e direto.    

Na conversão da base 2 para a base 16, o número binário na sua forma posicional é apresentado e, da direita para a esquerda, organizados em grupos de 4 bits. Os bits mais à esquerda (mais significativos) serão completados com 0 à esquerda se for necessário. A cada grupo de 4 bits é associado o dígito hexadecimal correspondente, conforme apresenta a Figura 1.  

![](Aspose.Words.792fe533-53d0-4299-bd8f-728213f44dd8.003.png)

Figura 3 – Conversão de base 2 para base 16

Na conversão de base 16 para base 2 o procedimento é o inverso. Cada dígito hexadecimal é convertido nos 4 bits correspondentes, conforme detalhado na Figura 1.
1. # **Aritmética binária**
Discutimos anteriormente que a CPU das máquinas de von Neumman realizam operações lógicas e aritméticas binárias. As operações lógicas realizadas pelos circuitos lógicos e aritméticos construídos com o uso de portas lógicas serão discutidas oportunamente quando tratarmos do nível de lógica digital dos sistemas de computação.

Trataremos por hora das operações aritméticas realizadas nos sistemas de base 2 e de base 16. O processo é similar ao que já aprendemos na infância nas operações aritméticas decimais. É necessário somente generalizar o modelo mental construído para operações aritméticas de base 10.
1. # **Adição binária**
A Figura 4 apresenta a tabela resultante da soma de dois bits *b0* e *b1*. A operação realizada é *b0*+*b1*. A propriedade de comutatividade da adição permanece válida.

![](Aspose.Words.792fe533-53d0-4299-bd8f-728213f44dd8.004.png)

Figura 4 – Tabela da soma de dois bits

O resultado da soma está nas células da tabela, mostrando que 0+0=0, 0+1=1+0=1 e 1+1=10. Considerando o resultado de somente um bit, diz-se que 1+1 resulta 0 com bit de *carry* 1 (o famoso ‘vai 1’).

Da operação bit a bit, pode-se generalizar a soma de qualquer número binário de modo que a adição se realiza da direita para a esquerda, do menos significativo ao mais significativo, ‘carregando’  o bit 1 de *carry* para a soma dos dígitos seguintes, até alcançar o bit mais significativo.

Considerando a representação de grandezas decimais nos computadores, utiliza-se uma quantidade pré-definida de bits, característica da máquina. No caso do IAS, os números binários armazenados utilizavam 39 bits. O resultado das operações de adição de dois números binários pode ser maior do que a capacidade de armazenamento da máquina. No caso da soma do último dígito binário resultar em ‘vai um’, o 1 é perdido, pois não há capacidade do sistema para representá-lo. Diz-se nessa situação que houve *overflow*. Habitualmente não se traduz o termo, pois já é consagrado pela literatura técnica, embora alguns autores utilizem a expressão ‘transborda’.

Por exemplo, uma máquina que representa números em 4 bits pode representar no máximo a grandeza 1111. Se a máquina precisar somar 1011+1000 o resultado obtido pela soma seria 10011. Como a máquina armazena somente 4 bits, significa que o resultado da operação resultou *overflow*.

O processo de adição binária apresentado é similar ao processo decimal e é também similar ao processo de adição no sistema hexadecimal. Como a utilização do sistema de base 16 é muito comum para representar as grandezas expressas no ambiente computacional decorre a necessidade frequente de operar adição naquela base.

A diferença básica consiste no maior dígito do conjunto ordenado de base 16, o dígito F. Qualquer adição de dois dígitos que ultrapasse F deverá implicar o *carry* 1, que é transportado à soma do dígito seguinte, e resultar no dígito que excede 16. Por exemplo, a soma do dígito A com o dígito E resulta 8 com ‘vai um’. O *carry* 1 é incluído à soma dos dígitos seguintes.
1. # **Subtração binária**
Na subtração binária, utiliza-se, de modo semelhante ao caso da adição, a subtração bit a bit. Sejam dois bits *b0* e *b1*. A operação realizada é *b1*+*b0*. A Figura 5 apresenta.

![](Aspose.Words.792fe533-53d0-4299-bd8f-728213f44dd8.005.png)

Figura 5 – Tabela de subtração de dois bits

O resultado da subtração está nas células da tabela, mostrando que 1-0=1, 1-1=0, 0-0=0 e 0-1=11, onde diz-se que 0-1 resulta 1 com bit de *carry* -1 (o famoso ‘vai menos 1’).

Da operação bit a bit, pode-se realizar a subtração de um número binário de modo que a subtração se realiza da direita para a esquerda, do menos significativo ao mais significativo, ‘carregando’  o bit -1 de *carry* para a subtração dos dígitos seguintes, até alcançar o bit mais significativo. 

Essa não é, entretanto, uma solução que possa ser generalizada, pois caso o minuendo seja menor do que o subtraendo o resultado obtido não é a exata conversão binária para decimal que discutimos. O resultado da subtração resultaria um número negativo. Por exemplo, 1010-1100=11110 (10-12=-2, em representação decimal), que não pode ser confundido com 30 em representação decimal.

Para realizar a operação preservando a correspondência entre os números binários e decimais representados na máquina, seria necessário inverter minuendo com subtraendo, 1100-1010=0010, que representa 2 em decimal, mas seria necessário sinalizar que o número é negativo.

A subtração no sistema hexadecimal é similar. No caso do dígito do minuendo ser menor do que o dígito do subtraendo é necessário ‘tomar 1’ do dígito seguinte (*borrow*), somar 16 ao dígito e realizar a subtração. O *borrow* 1 é subtraído do minuendo da subtração dos dígitos seguintes. Por exemplo, a subtração A – E resulta C, *borrow* 1.  
1. # **Representação de números binários negativos**
   1. # **Representação em sinal e magnitude**
Para contornar a necessidade de representar números negativos, uma forma de representar as grandezas binárias é reservar um bit para o sinal. Esse é chamado de bit sinal. A representação que usa essa forma é chamada de representação em magnitude com sinal ou representação em sinal e magnitude. Nessa representação, o bit mais significativo é sinal, que pode ser definido 0 para números positivos e 1 para indicar números negativos. O restante dos bits representam a magnitude da grandeza numérica, na conversão exata discutida entre as grandezas dos sistemas decimal e binário. A Figura 6 ilustra a representação em sinal e magnitude.

![](Aspose.Words.792fe533-53d0-4299-bd8f-728213f44dd8.006.png)

Figura 6 – Representação em magnitude com sinal

A máquina IAS utiliza esse tipo de representação, em que o bit 0 é reservado ao bit de sinal. Essa implementação contorna o problema da representação dos números negativos discutidos preliminarmente. Observe que esse tipo de representação possui um inconveniente de possuir duas representações para o número 0, que se diferenciam pelo bit de sinal. 

Uma outra forma de representar os números negativos é utilizar o conceito de complemento. O complemento de um número de n dígitos é a diferença entre o maior número de *n* dígitos naquela base e o número considerado. Por exemplo, na base 10, o complemento de 12 é 87, pois 99 (maior número com 2 dígitos) menos 12 é igual a 87. 

No caso de números binários, o complemento de um número pode ser obtido por subtração, mas que pode ser obtido também pela simples inversão dos dígitos. Por exemplo, o complemento de *N*=10, na base 2, é dado por 11-10=01. O número 01 é a inversão dos bits de *N*=10. A esse complemento se dá o nome de complemento de 1, pois 1 é o maior dígito do sistema binário.
1. # **Representação em complemento de 1**
Para a representação de números negativos pode-se utilizar também o complemento de 1. Assegura-se a utilização de um bit de sinal. Utiliza-se o bit 0 para indicar números positivos e os demais bits para representar a magnitude. Os números negativos são representados pelo complemento de 1 dos números positivos. A Figura 7 apresenta um exemplo de representação de grandezas decimais em complemento de 1, utilizando-se 3 bits.

![](Aspose.Words.792fe533-53d0-4299-bd8f-728213f44dd8.007.png)

Figura 7 – Representação em complemento de 1 de números de 3 bits

Observe que a representação em complemento de 1 também possui o inconveniente de possuir duas representações distintas para o número 0. No exemplo, 000 representa ‘+’ 0 e seu complemento de 1, 111, representa ‘-‘ 0.   

Na representação em complemento de 1, a adição binária se opera conforme descrito anteriormente. Soma-se bit a bit da direita para a esquerda, transportando-se o *carry* quando for o caso. Caso o resultado da soma do bit mais significativo for *carry* 1 (‘vai um’), o bit será transportado e somado ao bit menos significativo. 

A subtração entre dois números binários representados em complemento de 1 se torna adição, em que o subtraendo é considerado com o seu valor negativo. Por exemplo, seja uma representação de 4 bits, a subtração decimal 7-5 será realizada em binário por 0111 (7) + 1010 (-5) = 10001, com o transporte do *carry*, 0010.
1. # **Representação em complemento de 2**   
Uma terceira forma de representar números negativos é utilizar-se o que se chama de representação em complemento de 2. Nessa forma, também se utiliza o bit de sinal 0 para números positivos e o bit de sinal 1 para números negativos. Os números positivos são representados normalmente, com o bit de sinal igual a 0. Os números negativos são representados pela adição do complemento de 1 do número negativo a representar somado com o bit 1. A Figura 8 apresenta um exemplo de representação de grandezas decimais em complemento de 2, utilizando-se 3 bits. 

![](Aspose.Words.792fe533-53d0-4299-bd8f-728213f44dd8.007.png)

Figura 8 - Representação em complemento de 2 de números de 3 bits

Na representação em complemento de 2 não se tem o inconveniente de duas representações para o número 0, pois o complemento 2 de +0 (000) é igual a -0 (000), tendo sido descartado o ‘vai um’ do bit mais significativo.

Na representação em complemento de 2, a adição binária se opera conforme descrito anteriormente. Soma-se bit a bit da direita para a esquerda, transportando-se o *carry* quando for o caso. Caso o resultado da soma do bit mais significativo for *carry* 1 (‘vai um’), o bit será descartado. 

Assim como na representação em complemento de 1, a subtração entre dois números representados em complemento de 2 se torna adição, em que o subtraendo é considerado com o seu valor negativo. Por exemplo, seja uma representação de 4 bits, a subtração decimal 7-5 será realizada em binário por 0111 (7) + 1011 (-5) = 10010, desprezando-se o *carry*, 0010.
1. # **Representação em excesso 2m-1**
A quarta forma de representação de números negativos é chamado de excesso *2m-1* para números de *m* bits. Nessa representação, todos os números inteiros são representados somados a *2m-1* na forma binária. Por exemplo, seja a representação de números utilizando-se 3 bits em excesso 4 (*22*), os valores negativos serão representados conforme a Figura 9. Observe que o menor número negativo (-4 em decimal) é representado por 000. Os números negativos seguintes são representados pela soma sucessiva com 001.

![](Aspose.Words.792fe533-53d0-4299-bd8f-728213f44dd8.008.png)

Figura 9 - Representação em excesso 4 de números de 3 bits

Na representação em excesso de *2m-1* a representação binária pode ser mapeada de uma faixa de *-2m-1* a *+2m-1-1* em decimal para 0 a *2m-1* em binário.

Na subtração para representação em excesso de 2m-1, pode-se operar a subtração normalmente, pois o menor número considerado no sistema de representação é a sequência de m bits todos iguais a 0.
1. # **Representação de números de ponto flutuante**
Uma forma de representar nos sistemas computacionais o conjunto dos números reais é modelá-los utilizando a notação científica, na versão chamada ponto flutuante.

A notação científica é dada por

N=f×10e

, em que *f* é chamada de **fração** ou **mantissa**; *e*, chamado de **expoente,** é um número inteiro, positivo ou negativo. 

Pela representação em notação científica, quando se convenciona o número de dígitos para representar mantissa e expoente, a faixa de representação é determinada pelo número de dígitos do expoente e a precisão é determinada pelo número de dígitos da mantissa. Por exemplo, no sistema decimal, utilizando-se um dígito para representar mantissa e um dígito para representar o expoente, pode-se representar uma faixa de números reais de -9x109 até +9x109, com uma precisão de 10-9.

A versão de ponto flutuante nos sistemas computacionais requer a representação da mantissa e do expoente no sistema binário. A exponenciação utiliza base 2 pela eficiência. Pode-se utilizar qualquer representação de números negativos. Por conveniência, em muitas circunstâncias utiliza-se a **forma normalizada** dessa representação, que se caracteriza pelo uso do bit mais significativo da mantissa diferente de zero. A inconveniência do uso da forma não normalizada é evitar a representação de várias formas diferentes da mesma grandeza. 

Existem vários formatos de representação numérica de ponto flutuante padronizados. Os sistemas de computação via de regra aplicam um dos formatos padronizados para implementar, como o padrão IEEE.  
1. # **Codificação de elementos discretos**
   1. # **Codificação de elementos de conjunto discreto**
Vários elementos discretos conectsados aos sistemas de computação precisam ser representados na forma de códigos binários. Por exemplo, as teclas de um teclado precisam ser codificados e tratados na sua representação binária. O processo de estabelecer uma representação numérica binária de elementos discretos é o processo de codificação.

Basicamente, no processo de codificação o número de combinações binárias possíveis deve permitir todos os elementos discretos a representar. Assim, dado um conjunto de M elementos discretos, o número mínimo de bits necessários para codificar todos os elementos é N, de modo que 2N ³ M. Nesse caso, diz-se que o código deve possuir uma palavra de tamanho mínimo de N bits.

Uma aplicação clássica é a codificação no padrão ASCII. O padrão ASCII é utilizado para representar um conjunto de caracteres a serem processados por sistemas computacionais. A cada caractere corresponde uma palavra de um código binário (obviamente equivalente às suas representações decimal e hexadecimal). Por exemplo, o caractere @ é codificado pela palavra 0100 0000, ou seja, 0x40 na representação hexadecimal ou 64 na representação decimal.

Além da capacidade de representação de todos os elementos discretos de um conjunto, normalmente a elaboração do código leva em consideração a possibilidade de detectar e corrigir erros na veiculação ou armazenamento dos dados. 
1. # **Códigos de detecção e correção de erros**
Os sinais armazenados em memória podem ser alterados por problemas elétricos e outros. Para se evitar esses problemas alguns artifícios podem ser usados como os códigos de detecção de erros e de correção de erros.

Quando esses códigos são usados alguns bits são inseridos aos dados armazenados. Por exemplo, um código bastante simples é a inserção do chamado bit de paridade. O sistema armazena o bit de paridade de modo que represente a paridade desejada para o número de bits 1 na palavra armazenada. Se o código for de paridade par e a palavra armazenada tiver um número impar de bits, o bit de paridade deverá ser 1, assegurando um número total de bits da palavra mais o bit de paridade par. Em caso contrário, o bit de paridade armazenado deverá ser 0. Em um sistema que utilize paridade par, quando o sistema detectar um número impar de bits sinalizará que houve um erro dos dados lidos.

A utilização de um código com 1 bit de paridade não garante a detecção de dois erros simultâneos. Um código com 1 bit de paridade permite somente a detecção de 1 erro.

A determinação da capacidade do código detectar e corrigir erros depende do que se chama distância de Hamming, definida como o número de posições bits em que duas palavras do código são diferentes. Em um código com distância de Hamming igual a *d* são necessários que ocorram simultaneamente *d* trocas de bits para uma palavra do código se confundir com outra. 

Os códigos com distância *d+1* é suficiente para detectar *d* erros de bits únicos.  Para que o código seja capaz de corrigir *d* erros de bits únicos é necessário que ele possua uma distância de Hamming de pelo menos *2d+1*.  
Página 1/25

1)	Seja um sistema de comunicações móveis cujo canal não possui memória que utiliza um código com palavras de comprimento de 4 dígitos para representação de símbolos discretos. Qual é o limite da probabilidade de erro, com detecção por máxima verossimilhança, dado que a função de comportamento estatístico é constante, igual a 1? Considere que o mesmo conjunto discreto de símbolos utilize palavras de 8 dígitos, o que acontecerá e qual é a conclusão que pode ser obtida?
2)	Admita um canal de comunicações sem memória que utilize 8 dígitos para representação de símbolos discretos. Qual é o limite da função do comportamento estatístico do canal, com detecção por máxima verossimilhança, se a probabilidade erro é conhecida, dada por 1%? Qual é o valor mínimo da capacidade do canal?
3)	Seja um código de bloco para correção de erros com palavras de 8 dígitos. Considerando que em cada bloco sejam transmitidos somente 3 dígitos de informação, o que se pode dizer a respeito da eficiência do código? Independentemente do tipo de código, o que se supõe à medida que se aumenta o tamanho da palavra do código, mantendo-se o mesmo número de dígitos de informação no bloco?
4)	Seja o código apresentado abaixo, cuja representação em hexadecimal das palavras é apresentada na tabela abaixo. Qual é a distância de Hamming do código?

| Símbolo |	Palavra (hex) |
| ------- | ------------- |
| a |	0x7B |
| b	| 0xB3 |
| c	| 0x00 |
| d	| 0xFF |

5)	Seja a sequência de bits definida pelo vetor linha [0 1 1 1 1 0 1 0 1 0 1 1 0 0 1], admitindo código de Hamming (7,3,4), qual seria o vetor com os bits a serem transmitidos? Admitindo que um receptor receba um bloco [1 0 1 0 1 1 1], quais seriam os bits de informação transmitidos?
6)	Admitindo que se deseja utilizar um código para detecção de erros na transmissão. O código deve permitir a detecção de 3 erros. Qual deve ser a distância de Hamming do código selecionado? Admitindo que se deseja corrigir até dois erros, qual deve ser a distância de Hamming do código a ser selecionado?
7)	Seja um sistema discreto com 6 símbolos codificados conforme a tabela abaixo.Propor um código binário de repetição que possibilite correção de pelo menos 2 bits. Qual seria a sequência de bits para transmitir a sequência BE.

| Simb | Binário |
| ---- | ------- |
| A |	000 |
| B	| 001 |
| C	| 010 |
| D	| 011 |
| E	| 100 |
 
8)	Admitindo o mesmo sistema discreto da questão anterior, como seria a sequência ABC se fosse utilizado na transmissão o código com 1 bit de paridade, com paridade impar?
9)	Propor um código de Hamming que utilize blocos com 2 bits de informação, em que os bits de redundância ajustam paridade ímpar. Admitindo que na recepção seja recebido um bloco dado por [1 1 1 1 0], o que se pode afirmar?

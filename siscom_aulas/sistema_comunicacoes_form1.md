# Questionário de Sinais e Sistemas de Comunicação

1. Microfones
**Pergunta:** Os microfones são dispositivos que convertem a energia mecânica de uma onda sonora em energia na forma elétrica. Dispositivos que convertem uma forma de energia em outra são chamados de...

- ( ) Conversor
- ( ) Transmissor
- ( ) Modulador
- (X) Transdutor

**Resposta** Transdutor. É o dispositivo que converse sinais em uma forma de energia para outra forma. Ex. Microfones, Alto falantes, ...

2. Frequência de Amostragem
**Pergunta:** O som audível compreende uma faixa do espectro sonoro que varia entre 20 Hz e 20 kHz. Considerando essa faixa, qual é a frequência mínima para amostrar um sinal que represente o comportamento de uma melodia musical? Justificar.

**Resposta** A frequência de amostragem deve obedecer ao teorema de Nyquist: fa > 2. fmax, logo fa > 2 . 20 kHz. fa > 40 kHz.

3. Voz Humana
**Pergunta:** A voz humana possui componentes espectrais significativos até cerca de 4.000 Hz. Testes qualitativos indicam que pode ser codificado com 8 bits sem prejuízo da inteligibilidade do sinal. Essas características possuem as seguintes implicações:

- [X] O sinal requer uma capacidade do canal de transmitir no mínimo a uma taxa de 64 kbps
- [ ] A digitalização do sinal requer uma quantização de 8 níveis
- [X] A amostragem do sinal pode ser realizada a uma taxa de 8 kHz
- [ ] O sinal pode atravessar um filtro que elimine as frequências inferiores a 4 kHz
- [ ] A conversação de n pessoas ocupa uma faixa de n vezes 4.000 Hz

**Resposta**
- Como a voz possui 4 kHz, fa > 2. 4 kHz = 8 kHz. Como cada amostra deve ser codificada em 8 bits, a uma taxa de 8 kHz de amostragem, o canal deve ser capaz de trafegar 8 bits . 8 kHz = 64 kbps.
- Quantização a 8 bits => 2^8 = 256 níveis.
- A filtragem do sinal amostrado requer um filtro passa-baixa (elimina as frequência superiores) de 4 kH - máxima frequência de interesse
- O sinal de voz passa por elementos do sistema de comunicações que permitem vários interlocutores utilizarem a mesma banda.

4. Representação de Sinais
**Pergunta:** O gráfico apresenta o comportamento da profundidade ao longo do tempo. O mesmo sinal poderia ser representado de outra forma, qual?

- (X) O comportamento no domínio do tempo do fenômeno observado
- ( ) O comportamento no domínio da distância do fenômeno observado
- ( ) O comportamento no domínio da frequência do fenômeno observado
- ( ) O comportamento da taxa de variação com o tempo do fenômeno observado

**Resposta**
O gráfico apresenta o comportamento da profundidade ao longo do tempo. O mesmo sinal poderia ser representado pelo  comportamento em relação à variação da profundidade (frequência) - no domínio da frequência. São formas de representar o sinal elétrico de interesse das comunicações.

6. Fenômeno de Aliasing
**Pergunta:** Qual é o nome do fenômeno que representa a sobreposição da faixa superior com a faixa inferior do sinal amostrado em duas frequências múltiplas da frequência de amostragem, caso não se respeite o teorema de Nyquist?

- ( ) Fenômeno de frequência
- (X) Fenômeno de aliasing
- ( ) Fenômeno de Nyquist
- ( ) Digitalização do sinal
- ( ) Quantização do sinal

**Resposta**
Fenômeno de 'aliasing', que representa a sobreposição da faixa superior com a faixa inferior do sinal amostrado em duas frequências múltiplas da frequência de amostragem, caso não se respeite o teorema de Nyquist.

7. Quantização
**Pergunta:** Seja um sinal amostrado cujo valor máximo é de 9 mV e cujo valor mínimo é de 1 mV. Admitindo que no processo de digitalização seja quantizado em 11 níveis discretos, qual é o degrau de quantização?
- ( ) 1 mV
- ( ) 9 mV
- (X) 0,8 mV
- ( ) 11 mV

**Resposta**
vmax = 9 mV; vmin = 1 mV => vmax - vmin = 8 mV, logo
para L = 11 níveis, o degrau será (vmax - vmin)/(L-1) = 0,8 mV.

8. Erro de Quantização
**Pergunta:** Sejam um sinal x(n) = [1, 1.5, 2.3, 4, 4.2, 6, 5.6, 9, 7.6, 8] mV e o sinal quantizado da forma definida na questão anterior, utilizando o critério do menor erro absoluto. Qual será o ruído ou erro de quantização, medido em dB?

**Resposta**
e[n] = xq[n] - x[n], logo
e[0] = min[0 - (0 ou  0.8)] = 0, pois 1 - 1 = 0 
e[1] = min[0.5 - (0 ou 0.8)] = 0.3, pois 1.5 - 1 = 0.5
e[2] = min[1.3 - (0.8 ou 1.6)] = 0.3, pois 2.3 - 1 = 1.3
e[3] = min[3 - (2.4 ou 3.2)] = 0.2, pois 4 - 2 = 3
e[4] = min[3.2 - (2.4 ou 3.2)] = 0, pois 4.2 - 1 = 3.2
e[5] = 0.2
e[6] = 0.2
e[7] = 0
e[8] = 0.2
e[9] = 0.2
...
O erro (dB) = soma(e^2/x^2) ~ -29 dB.

9. Efeitos adversos do canal sobre o sinal
**Pergunta:** Seja um sinal transmitido em um sistema de comunicações móveis. Admitindo-se que o sinal foi captado pelo receptor igual ao sinal transmitido, porém reduzido à metade de sua intensidade. Nesse caso configura-se tipicamente um efeito adverso do canal sobre o sinal transmitido chamado de...

- ( ) Discretização
- (X) Atenuação
- ( ) Distorção
- ( ) Interferência
- ( ) Ruído

**Resposta**
Atenuação é a perda linear provocada pelo canal sobre o sinal transmitido. 

1.  Efeitos adversos do canal sobre o sinal
**Pergunta:** Seja um sinal transmitido em um sistema de comunicações móveis. Admitindo-se que o sinal foi captado pelo receptor com uma perturbação decorrente da emissão de um outro transmissor operando em radiofrequência próxima. Nesse caso configura-se tipicamente um efeito adverso do canal sobre o sinal transmitido chamado de...

- ( ) Discretização
- ( ) Atenuação
- ( ) Distorção
- (X) Interferência
- ( ) Ruído

**Resposta**
Interferência é a perturbação provocada por uma fonte normalmente não natural sobre uma frequência específica do sinal transmitido.

11. Outros Efeitos do Canal de Comunicação
**Pergunta:** Além dos efeitos adversos comentados nas questões anteriores, citar e definir os demais efeitos que o canal de comunicações produz sobre o sinal do transmissor, o qual é entregue ao receptor.

**Resposta**
Ruído, Distorção.

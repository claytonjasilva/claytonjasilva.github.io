# 1. Dimensões, Unidades e Aritmética Computacional

## 1.7 Representação em ponto flutuante
Os números reais, particularmente os números fracionários, podem ser representados usando-se **notação científica**, na forma

$$ N=f\times10^e $$

, onde *f* é a **fração ou mantissa** e *e* é o **expoente**.  

Computacionalmente, o equivalemente aos números fracionários representados em notação científica, são os números com representação em **ponto flutuante**.  

Pela representação em ponto flutuante **convenciona-se o número de dígitos** para representar mantissa e expoente.  

Nesse sentido, um sistema com palavras de *m* bits utiliza, *n* bits para representar a mantissa (ou fração) e *k=m-n* bits para representar o expoente.  

Tanto mantissa quanto expoente podem utilizar uma das representações de números negativos discutidas anteriormente.  

Admtindo que a faixa de representação da notação usada para a mantissa seja *-N* a *+M* e para o expoente seja *-P* a *+Q*,a faixa de representação dos números de ponto flutuante será  
- no semi eixo dos números negativos, *-N.10<sup>+Q</sup>* a *-10<sup>-P</sup>*  
- 0 (mantissa igual a 0)   
- no semi eixo dos números positivos, *+10<sup>-P</sup> a *+M.10<sup>+Q</sup>*  

A representação pode ser caracterizada pela **faixa de representação** (limites da representação numerica) e pela **precisão**:  
- a faixa de representação é determinada pelo **número de dígitos do expoente**; e
- a precisão é determinada pelo **número de dígitos da mantissa**. 

___  
**[<<anterior](dimensoesUnidadesAritmeticaComputacional3.md)**    
**[Home Conteúdo Arquitetura de Computadores](/arq_aulas.md)**   ou **[Home: Conteúdo Sistemas Digitais](/sisdig_aulas.md)**    
**Aritmética computacional: [próximo>>](dimensoesUnidadesAritmeticaComputacional5.md)**    

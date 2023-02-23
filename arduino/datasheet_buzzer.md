# *Datasheet* - Módulo Buzzer
Referência [*Piezo Buzzer* EFM260](https://pdf1.alldatasheet.com/datasheet-pdf/view/234280/FORYARD/EFM-260.html)  
Sinalizador [piezoelétrico](https://pt.wikipedia.org/wiki/Piezoeletricidade).   
Princípio de funcionamento: basicamente, aplicado um sinal elétrico nos terminais, produz um sinal sonoro que varia em frequência, dependendo do sinal aplicado.  
Requer polarização correta para uso.

## 1. Especificações

| Característica | Valor |
| - | - |
| Tensão de operação | 3~24 VDC |
| Som de saída | ≥ 85 dB | 
| Frequência de Resonância | 3.5 ± 0.5 kHz | 
| Natureza do tom | Contínuo | 

## 2. Referência com Arduíno
### Função [*tone*](https://www.arduino.cc/reference/en/language/functions/advanced-io/tone/)  
Em resumo,  
- Gera uma **onda quadrada** da frequência especificada (e 50% do *duty cycle* -ciclo de trabalho) em um pino.  
- Uma duração pode ser especificada, caso contrário, a onda continua até uma chamada para `noTone()`.   
- Não é possível gerar tons inferiores a 31Hz. 
- Para detalhes técnicos, veja as [notas de Brett Hagman](https://github.com/bhagman/Tone#ugly-details)


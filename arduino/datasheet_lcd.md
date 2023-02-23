# *Datasheet* - LCD 1602
Referência [*Piezo Buzzer* EFM260](https://pdf1.alldatasheet.com/datasheet-pdf/view/234280/FORYARD/EFM-260.html)  
Trata-se de uma família de LCD de 16 caracteres com 2 linhas, monocromático.  

## 1. Especificações

### 1.1 Pinagem

| Id | Função	| Descrição |
| - | - | - |
| 1 |	Gnd |	Terra |
| 2 |	Vcc |	Alimentação DC – 3,3 V a 5V (típico) |
| 3 |	V0 |	Tensão para ajuste de contraste |
| 4 |	RS |	‘Register Select’, Low=comando, High=dados |
| 5	| RW | ‘Read/Write’, Low=gravação, High=leitura |
| 6	| E |	‘Enable’, Low, gatilhada pela borda |
| 7-14 | DB0-7 | ‘Data Bit’, High/Low |
| 15 | A | ‘Anodo’, +5V |
| 16 | K |	‘Catodo’, Gnd |



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


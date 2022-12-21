# Álgebra Booleana e Portas Lógicas

## 2.3 Teoremas e axiomas da álgebra booleana

### 2.3.1 Teoremas e axiomas
Com vimos, expressões booleanas diferentes podem apresentar o mesmo resultado lógico para a todas as possíveis combinações de entradas.
Essas espressões são logicamente equivalentes.   
Portanto, como os circuitos podem ser descritos algebricamente, **circuitos diferentes podem implementar o mesmo resultado (a mesma função)**,
pois as expressões que os descrevem são logicamente equivalentes.  
Para o projeto de circuitos digitais, normalmente deseja-se obter circuitos com o **menor número possível de componentes**, pois:
1. São mais baratos de construir;
2. Ocupam menor espaço físico;
3. Consomem menor energia;
4. São mais fáceis de passar por manutenção.  


Uma das formas de analisar e projetar circuitos logicamente equivalentes é aplicando-se os **teoremas** e **axiomas** da Álgebra Booleana.  
Os axiomas são premissas consideradas verdadeiras, fundamento de uma demonstração, porém indemonstráveis.  
Os teoremas são proposições cuja veracidade pode-se demonstrar através de outras proposições e axiomas.  
Salientando que uma proposição *p* só pode assumir **um e somente um** valor lógico, 0 ou 1.

**Comutatividade**: $A.B=B.A$, da conjunção; $A+B=B+A$, da disjunção  
**Associatividade**: $A.(B.C)=(A.B).C$, da conjunção; $A+(B+C)=(A+B)+C$, da disjunção    
**Distributividade**: $A.(B+C)=A.B+A.C$, da conjunção em relação à disjunção; $A+B.C=(A+B).(A+C)$, da disjunção em relação à conjunção  
**Elemento neutro**: $A.1=A$, da conjunção; $A+0=A$, da disjunção  
**Elemento nulo**: $A.0=0$, da conjunção; $A+1=1$, da disjunção  
**Elemento inverso**: $A.\bar{A}=0$, da conjunção; $A+\bar{A}=1$, da disjunção  
**Idempotência**: $A.A=A$, da conjunção; $A+A=A$, da disjunção  
**Dupla negação**: $\bar{\bar{A}}=A$  
**Teorema de De Morgan**:
- Da conjunção: A negação da conjunção de variáveis é igual a disjunção das variáveis negadas  
$\sim{(A_0.A_1...A_n)}=\bar{A_0}+\bar{A_1}+...+\bar{A_n}$
- Da disjunção: A negação da disjunção de variáveis é igual a conjunção das variáveis negadas  
$\sim{(A_0+A_1+...+A_n)}=\bar{A_0}.\bar{A_1}.....\bar{A_n}$  

**Adjacência lógica**: $\bar{A}.B+A.B=B$    
**Absorção**: $A+A.B=A$; $A+\bar{A}.B=A+B$

### 2.3.2 Simplificação das expressões algébricas usando os teoremas e axiomas

Aplicando-se sucessivamente os teoremas e axiomas da álgebra booleana é possível reduzir as expressões algébricas.  
A expressão original e a expressão reduzida são logicamente equivalentes, isto é, para os mesmos valores das variáveis de entrada o resultado lógico das expressões sempre será o mesmo.  
Quando uma expressão sempre resulta valor lógico 1 configura-se uma **tautologia**.  
Por outro lado, quando sempre resulta valor lógico 0 configura-se uma **contradição**.  
Quando a expressão pode assumir valor falso ou verdadeiro é chamada de **contingência**.

### 2.3.3 Representação dos teoremas e axiomas utilizando portas lógicas

1. **Elementos nulo e neutro da conjunção**  

![Elementos nulo e neutro da conjunção](/sisdig_aulas/images_sisdig/nulo_conjuncao.jpg)

2. **Elementos nulo e neutro da disjunção**  

![Elementos nulo e neutro da conjunção](/sisdig_aulas/images_sisdig/nulo_disjuncao.jpg)

3. **Elementos inversos da conjunção e da disjunção**  

![Elementos inversos](/sisdig_aulas/images_sisdig/inverso.jpg)

4. **Idempotência**

![Idempotência](/sisdig_aulas/images_sisdig/idempotencia.jpg)

5. **Dupla negação**

![Idempotência](/sisdig_aulas/images_sisdig/dupla_negacao.jpg)

## 2.4 Portas universais 
Além das portas *AND*, *OR* E *NOT*, existem duas portas que são chamadas de **portas universais**, pois somente com um tipo delas é possível implementar circuitos descritos por quaisquer expressões lógicas.  

2.4.1 Porta *NOR*
Implementa a operação de **negação da disjunção**.

![Porta NOR](/sisdig_aulas/images_sisdig/nor.jpg)

2.4.2 Porta *NAND*
Implementa a operação de **negação da conjunção**.

![Porta NOR](/sisdig_aulas/images_sisdig/nand.jpg)


[home](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas.md)  
[<<](https://github.com/claytonjasilva/claytonjasilva.github.io/blob/main/sisdig_aulas/algebraPortasLogicas1.md)







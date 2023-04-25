## 5.2 Máquina de estados

### 5.2.1 O diagrama de estados

Existem técnicas para analisar e projetar circuitos sequenciais.  
Uma das técnicas consiste na utilização de **diagramas de estados**.  
De modo geral, os circuitos sequenciais são classificados da seguintes forma:  
- Detectores de sequência de códigos;
- Contadores e registradores;
- Geradores de códigos;
- Sistemas controladores.

#### O diagrama de estados
O êxito de projetos e análise de máquinas sequenciais depende fortemente dos objetivos e das técnicas empregadas.  
Uma delas é a técnica de diagrama de estados.  
O diagrama de estados descreve as possíveis transações entre todos os estados possíveis da máquina.    
O diagrama de estados para as máquinas sequnciais é equivalente à tabela verdade para as máquinas combinacionais.  
Seja o exemplo da figura.

![Diagrama de estados](/sisdig_aulas/images_sisdig/diagramaestados.jpg)

A figura ilustra um típico diagrama de estados e seus elementos:
1. Todo estado é definido pelo **símbolo de identificação** do estado e respectivo **código**;
2. Em relação a um estado de **interesse** o diagrama indica o seu **estado predecessor** pelo sentido da seta de **transição de estados**;
3. Toda transição requer **condições de entrada** para o estado de interesse;
4. Toda transição entre estados se refere **às saídas do código no estado predecessor**.

Um exemplo simples que ilutra o funcionamento de uma máquina sequencial com a utilização de diagrama de estados está apresentado na figura.

![Exemplo diagrama de estados](/sisdig_aulas/images_sisdig/exemplodiagramaestados.jpg)

No exemplo, o estado *a* é definido pelo código de saída *00*, ou seja *A=0*, *B=0*.  
A saída da máquina permanece *00* se receber como entrada um sinal  

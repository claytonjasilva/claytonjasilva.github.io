# Lista 2 de exercícios
## Linguagens Formais e compiladores

1. Escrever as expressões regulares para os conjuntos de caracteres a seguir, indicando a impossibilidade, de for o caso:
a. Cadeias de letras em caixa baixa começando com a  
b. Cadeias de letras em caixa baixa começando ou terminando com a (ou ambas)  
c. Cadeias de dígitos sem zeros à esquerda  
d. Cadeias de dígitos que representam números pares  
e. Cadeias de dígitos tal que todos os 2 ocorram antes de todos os 9  
2. Escrever descrições em português para as linguagens geradas pelas expressões abaixo:  
a. **r** = (a|b)* a(a|b|c)  
b. **r** = (A|B|...|Z)(a|b|...z)*  
c. **r** = (aa|b)* (a|bb)*   
3. Descrevemos nas expressões regulares as precedências de operações, mas não escrevemos a **associatividade**. Por exemplo, (a|b)|c = a|(b|c).
Demonstrar a associtividade.  
4. Prove que para qualquer expressão regular **r**, L(r**) = L(r*).
5. Escreva uma expressão regular que represente o diagrama apresentado abaixo:

![diagrama 1](/compiladores/diagrama1.png)  

6. Utilizando um diagrama similar ao apresentado na questão aneterior, representar graficamente a expressão regular definida por  
digito = [0 - 9]  
numero = digito digito*  
7. Seja a expressão regular definida pelos símbolos especiais  
simbolos = { +, -, *, /, >, <, =, !, %, &, |}  
, definir uma expressão lógica para os símbolos relacionais e elaborar um diagrama similar ao da questão anterior para representá-la.

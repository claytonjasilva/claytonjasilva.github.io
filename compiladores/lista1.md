### Lista 1 de Exercícios: Conceitos iniciais de Linguagens Formais

1. Seja o trecho do programa escrito na linguagem C
```
void main()
{ 
   int a;            // declara a variável "a"
   a = 3 + 2;        // soma 3 com 2
}
```
Admitindo que os *tokens* são palavras reservadas ou palavras-chave, identificadores, símbolos especiais e literais ou constantes, classificar os *lexemas*.  
2. Um protótipo de função ou declaração de função, na linguagemC, é uma declaração de uma função que omite o corpo mas especifica o seu nome, aridade, tipos de argumentos e tipo de retorno.  
Propor uma abstração para descrever o protótipo de funções na linguagem C.   
3. Considerando o protótipo de função na linguagem C `int fac(int n);`, propor a derivação de acordo com a regra definida na questão anterior.   
4. Propor também a árvore de análise sintática.   
5. Escrever uma árvore de análise sintática para a estrutura heterogênea `struct` na linguagem C.   
 ```
 struct aluno
{
char nome[50];
float nota;
};
```
6. Prove que a sentença abaixo é ambígua:  

```
<S> -> <A>
<A> -> <A> + <A> | <id>
<id> -> a | b | c
```

7.Considere a seguinte gramática  

```
<S> -> <a>a<B>b
<A> -> <A>b | b
<B> -> a<B> | a
```

Quais das sentenças a seguir estão na linguagem gerada pela gramática?  
baab, bbbab, bbaaaa, bbaab

# Conteúdo das Aulas - Linguagens Formais e Compiladores - 2022.2  

## Tópicos
1. **Conceitos iniciais**  
   1.1 [Conceitos introdutórios e descrição geral da sintaxe de LP](compiladores/0-FundamentosLP.pdf)  
   1.2 [Descrição geral da sintaxe de LP(cont): árvore de análise sintática](compiladores/0-FundamentosLP-cont.pdf)  
2. **Analisador léxico**  
   2.1 [Processo de varredura, expressões regulares](compiladores/1-VarreduraExpressoes.pdf)  
   2.2 [Autômatos finitos](compiladores/1-VarreduraAutomatosFinitos.pdf).  
   2.3 [TINY adaptada](TINYv1.pdf)  
3. Gramáticas livres de contexto e análise sintática: o processo de análise sintática, grmáticas livre de contexto, árvores de análise sintática e árvores sintáticas abstratas, ambiguidades e notações estendidas.
4. Análise sintática descendente: análise sintática descentes recursiva e análise sintática LL.
5. Análise sintática ascendente: autômato finito dos itens LR e análise sintática LR, análise sintática SLR, análise sintática geral LR e LALR.
6. Análise semântica: atributos e grmática de atributos, algoritmos para computação de atributos e tabela de símbolos.
7. Ambientes de execução: ambientes estáticos e ambientes baseados em pilhas.
8. Geração de código intermediário: variantes da árvore de sintaxe, código de três endereços, tipos e declarações, tradução de expressões, verificação de tipo, fluxo de controle.
9. Geração de código: a linguagem objeto, endereços no código objeto, blocos básicos e grafos de fluxo, um gerador de código simples. 
10. Otimizações independentes de máquina.
11. Paralelismo de instrução. 
12. Análise interprocedimental.
13. *Front-end* completo de compilador.

## Códigos de referência
1. [Varredura de um DFA para identificador](https://github.com/claytonjasilva/prog_exemplos/blob/main/DFAidentificador.c)
2. [Varredura de um DFA para expressao relacional](https://github.com/claytonjasilva/prog_exemplos/blob/main/DFAoperadorRelacional.c)  
3. [Registro de *token*](https://github.com/claytonjasilva/prog_exemplos/blob/main/TokenArray.c)  
4. [Função *getToken*](https://github.com/claytonjasilva/prog_exemplos/blob/main/getTokenExemplo.c)  
5. [Varrendo o código fonte](https://github.com/claytonjasilva/prog_exemplos/blob/main/entradaCodigo.c)  

## Exercícios
1. [Conceitos iniciais - BNF](compiladores/lista1.md)

# Conteúdo das Aulas - Linguagens Formais e Compiladores - 2022.2  

## Tópicos
1. **Conceitos iniciais**  
   1.1 [Conceitos introdutórios e descrição geral da sintaxe de LP](compiladores/0-FundamentosLP.pdf): gramáticas livre de contexto, Forma de Backus-Naur (BNF), ambiguidades e notações estendidas (EBNF).  
   1.2 [Descrição geral da sintaxe de LP(cont): árvore de análise sintática](compiladores/0-FundamentosLP-cont.pdf)  
2. **Analisador léxico**  
   2.1 [Processo de varredura, expressões regulares](compiladores/1-VarreduraExpressoes.pdf)  
   2.2 [Autômatos finitos](compiladores/1-VarreduraAutomatosFinitos.pdf).  
   2.3 [TINY adaptada](compiladores/TINYv1.pdf)  
3. Análise sintática:   
3.1 [Visão geral](compiladores/AnaliseSintatica1.pdf)  
3.2 [Análise sintática descendente](compiladores/AnaliseSintatica2.pdf): método descendente recursivo e método LL-1.  
3.3 [TINY adaptada](compiladores/TINYv2.pdf)
4. Análise semântica: atributos e grmática de atributos, algoritmos para computação de atributos e tabela de símbolos.
5. Ambientes de execução: ambientes estáticos e ambientes baseados em pilhas.
6. Geração de códig2 intermediário: variantes da árvore de sintaxe, código de três endereços, tipos e declarações, tradução de expressões, verificação de tipo, fluxo de controle.
7. Geração de código: a linguagem objeto, endereços no código objeto, blocos básicos e grafos de fluxo, um gerador de código simples. 
8. Otimizações independentes de máquina.
9. Paralelismo de instrução. 
10. Análise interprocedimental.
11. *Front-end* completo de compilador.

## Códigos de referência
1. [Varredura de um DFA para identificador](https://github.com/claytonjasilva/prog_exemplos/blob/main/DFAidentificador.c)
2. [Varredura de um DFA para expressao relacional](https://github.com/claytonjasilva/prog_exemplos/blob/main/DFAoperadorRelacional.c)  
3. [Registro de *token*](https://github.com/claytonjasilva/prog_exemplos/blob/main/TokenArray.c)  
4. [Função *getToken*](https://github.com/claytonjasilva/prog_exemplos/blob/main/getTokenExemplo.c)  
5. [Varrendo o código fonte](https://github.com/claytonjasilva/prog_exemplos/blob/main/entradaCodigo.c)  
6. [Análise Sintática, método recursivo descendente: expressão aritmética simples](https://github.com/claytonjasilva/prog_exemplos/blob/main/analiseFator.c)
7. [Análise Sintática, método recursivo descendente: expressão condicional](https://github.com/claytonjasilva/prog_exemplos/blob/main/analiseIF.c)
8. [Análise Sintática, método LL-1: expressão condicional](https://github.com/claytonjasilva/prog_exemplos/blob/main/analiseIF2.c)

## Exercícios
1. [Conceitos iniciais - BNF](compiladores/lista1.md)
2. [Análise léxica](compiladores/lista2.md)

## Avaliações
1. [AP1 - Trabalho](compiladores/Orientacao_trabalho_AP1.pdf)

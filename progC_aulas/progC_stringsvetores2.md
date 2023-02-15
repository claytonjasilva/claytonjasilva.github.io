## 9.3 Vetores de *char* - *strings*
Na linguagem C, uma *string* é um vetor de caracteres terminado com um caracteres nulo.  
O caractere nulo é um caractere caom valor inteiro igual a 0, que **pode ser escrito com a convenção de barra invertida como '\0'**.  

### 9.3.1 Declaração de *strings*
A declaração de uma *string* em C deve obedecer a sintaxe

```
char <nome da string>[<tamanho>];
```
, onde o tamanho deve ser definido presumindo o número de caracteres necessários para o problema a ser tratado pelo código.   
**Nem sempre serão atribuídos caracteres a todos os elementos da *string***. Por exemplo,

```
char nome[10] = {'c','l','a','y','t','o','n'};
```
possui 7 caracteres relativos a "clayton". Considerando o caractere nulo de fim de *string*, "clayton\0", 8 caracteres.  
Ou seja, não é necessário completar todos os caracteres da declaração da *string*. **As células não usadas contêm valor indeterminado**.

### 9.3.2 Entrada e saída de *strings*
#### a. Leitura de *strings*
A função de leitura de *strings* em C tem uma peculiaridade explicada pelo fato de que *strings* são vetores de *char* e
de que os nome de vetores são ponteiros.
Possui a seguinte sintaxe  

```
scanf("%s",<nome da string>);
```
Observe que:
(1) pelos motivos acima, **não se usa o operador unário `&`**;
(2) no fluxo de texto da função, o especificador do tipo da variável é **%s**.

#### b. Escrita de *strings*
A função de escrita de *strings* é similar ao uso da função *printf* para variáveis de outros tipos:

```
printf("<Texto de saída %s",<nome da string>);
```
Observe que:
(1) pelos motivos acima, **não se usa o operador unário `&`**;
(2) no fluxo de texto da função, o especificador do tipo da variável é **%s**.









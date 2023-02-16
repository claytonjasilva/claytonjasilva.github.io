## 9.3 Vetores de *char* - *strings*
Na linguagem C, uma *string* é um vetor de caracteres terminado com um caracteres nulo.  
O caractere nulo é um caractere caom valor inteiro igual a 0, que **pode ser escrito com a convenção de barra invertida como '\0'**.  

### 9.3.1 Declaração de *strings*
A declaração de uma *string* em C deve obedecer a sintaxe

```
char <nome da string>[<tamanho>];
```
, onde o tamanho deve ser definido presumindo o número de caracteres necessários para o problema a ser tratado pelo código.   

### 9.3.2 Inicializando uma *string*
**Nem sempre serão atribuídos caracteres a todos os elementos da declaração da *string***. 
A *string* pode ser **inicializada** na sua declaração tratando-a como um vetor 

```
char nome[10] = {'c','l','a','y','t','o','n'};
```
Embora de tamanho 10, a *string* foi inicializada com 7 caracteres ("clayton"). Considerando o caractere nulo de fim de *string*, possui 8 caracteres ("clayton\0").  
Ou seja, não é necessário completar todos os caracteres da declaração da *string*. **As células não usadas contêm valor indeterminado**.  

Alternativamente, pode-se usar a sintaxe de constantes *strings* (caracteres entre aspas duplas) para inicializar *strings*, na forma    
`char nome[10] = "clayton";` ou  
`char nome[]="clayton";`. **Nesse último caso, o tamanho do vetor é aquele definido pela *string* da sua inicialização**.  

Lembre-se que o nome do vetor é um ponteiro.  
Logo também se pode inicializar a *string* usando essa característica, na forma  
`char *nome = "clayton";`.

**(Obs)**. Em relação às constantes *strings* é bom salientar que o caractere entre aspas simples é um *char*, que é diferente do mesmo caractere entre aspas duplas, que é uma *string*.  
Por exemplo, 'a' é um *char*, enquanto "a" é uma *string* com dois caracteres, 'a' e '\0'.

### 9.3.3 Entrada e saída de *strings*
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
printf(<cadeia de caracteres de controle>,<lista de argumentos>);
```  
, onde na cadeia de caracteres de controle, na posição a ser inserida a *string* o especificador de variável deve ser **%s**.

### 9.3.4 Atribuição valores a *strings* 

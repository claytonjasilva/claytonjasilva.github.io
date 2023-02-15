## 9.3 Vetores de *char* - *strings*
Na linguagem C, uma *string* é um vetor de caracteres terminado com um caracteres nulo.  
O caractere nulo é um caractere caom valor inteiro igual a 0, que **pode ser escrito com a convenção de barra invertida como '\0'**.  

### 9.3.1 Declaração de *strings*
A declaração de uma *string* em C deve obedecer a sintaxe

```
char <nome da string>[<tamannho>];
```
, onde o tamanho deve ser definido presumindo o número de caracteres necessários para o problema a ser tratado pelo código.   
**Nem sempre serão atribuídos caracteres a todos os elementos da *string***. Por exemplo,

```
char nome[10] = {'c','l','a','y','t','o','n'};
```
possui 7 caracteres relativos a "clayton". Considerando o caractere nulo de fim de *string*, "clayton\0", 8 caracteres.  
Ou seja, não é necessário completar todos os caracteres da declaração da *string*. **As células não usadas contêm valor indeterminado**.





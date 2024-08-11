
# 1. Programando com Arduino

## 1.1 O que é Arduino?

O Arduino é uma plataforma de **hardware e software** *open-source* que facilita a criação de projetos eletrônicos. Usando a linguagem de programação baseada em C/C++, os usuários podem escrever **programas** que controlam o comportamento de microcontroladores, permitindo que dispositivos físicos interajam com o mundo ao seu redor.

## 1.2 O que é um programa para Arduino?

Um programa para Arduino, também chamado de ***sketch***, é um conjunto de **instruções** que seguem a **sintaxe** e **semântica** da linguagem de programação do Arduino (baseada em C/C++). O termo ***shield*** refere-se a placas de expansão que podem ser conectadas à placa Arduino para adicionar funcionalidades específicas, como controle de motores, comunicação sem fio, ou interfaces de sensores. O conjunto de Arduino com sensores, atuadores e demais componentes é considerado um sistema Arduino ou projeto Arduino.

## 1.3 Compilação no Arduino

Assim como em C, a linguagem Arduino é **compilada**.  
O processo de compilação converte o código escrito no ambiente Arduino, chamado de **sketch**, em **código em linguagem de máquina** que será carregado e executado no microcontrolador.  
O programa responsável por essa conversão é o **compilador** do Arduino.

## 1.4 Ambiente de desenvolvimento no Arduino

### 1.4.2 O que é a IDE do Arduino?

A **IDE do Arduino** é um **ambiente de desenvolvimento integrado** (IDE) que fornece uma interface simples para escrever, compilar e carregar programas (sketches) para a placa Arduino. Ele também permite o acesso ao monitor serial, que pode ser usado para depuração e comunicação com o microcontrolador durante a execução.

Exemplos de IDEs para Arduino:

- [Arduino IDE](https://www.arduino.cc/en/software)

- [PlatformIO](https://platformio.org/)

- [VSCode com PlatformIO](https://code.visualstudio.com/)

### 1.4.3 IDEs online para Arduino

Também é possível usar uma IDE online, como o [Arduino Web Editor](https://create.arduino.cc/editor), que permite programar e compartilhar projetos Arduino diretamente no navegador.

Funcionalidades do Arduino Web Editor:

- Editor de código
- Compilador online
- Gerenciamento de bibliotecas
- Upload de código diretamente para a placa

Para usar o Arduino Web Editor:

- Acesse e crie uma conta em https://create.arduino.cc/editor
- Conheça a interface de desenvolvimento
- Crie seus sketches e gerencie seus projetos
- Use o monitor serial integrado para depuração

## 1.5 Estrutura de um programa Arduino

### 1.5.1 Visão geral

Os programas Arduino (*sketches*) são organizados de forma semelhante aos programas em C, mas têm algumas particularidades:

- Cada sketch tem pelo menos duas funções principais: ***setup()*** e ***loop()***.
- O código pode incluir bibliotecas para expandir suas funcionalidades.
- Variáveis podem ser declaradas globalmente ou dentro das funções.
- O código principal é executado dentro das funções `setup()` e `loop()`.

___

1. **Instruções de pré-processamento** (como inclusão de bibliotecas);
2. Declaração de variáveis globais;
3. Função `setup()`, que é executada uma vez no início;
4. Função `loop()`, que é executada repetidamente;
5. Definição de funções adicionais conforme necessário.

___

As instruções nos *sketches* do Arduino são sempre separadas pelo caractere especial `;`, delimitando o fim de uma instrução e o início da próxima.

Por exemplo:

```cpp
int x = 3 * 4 + y;
x++;
Serial.print("O resultado eh ");
Serial.println(x);
```

### 1.5.2 Diretivas no Arduino

As diretivas em Arduino são semelhantes às do C e iniciam pelo caractere especial `#`.  
As mais comuns são:

- `#include`: para incluir bibliotecas necessárias no sketch.
- `#define`: para criar constantes ou macros.

Por exemplo:

```cpp
#include <Wire.h> // Inclui a biblioteca Wire para comunicação I2C
#define LED_PIN 13 // Define o pino do LED
```

### 1.5.3 Estrutura de um *sketch* Arduino

A estrutura de um *sketch* básico do Arduino é:

```cpp
#include <biblioteca.h>  // Incluir bibliotecas se necessário
#define CONSTANTE valor  // Definir constantes ou macros

void setup() {
  // Código de configuração, executado uma vez
}

void loop() {
  // Código principal, executado repetidamente
}
```

### 1.5.4 Substituição de Macro

A substituição de macros no Arduino segue o mesmo princípio do C, usando `#define`.

Por exemplo:

```cpp
#define NUM 100
```

### 1.5.5 Expressões aritméticas no Arduino

As expressões aritméticas no Arduino utilizam os mesmos operadores do C:

| Operador | Operação |
| - | - |
| `+` | Adição |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão |
| `%` | Módulo ou resto da divisão inteira |
| `++` | Incremento |
| `--` | Decremento |

Por exemplo:

```cpp
int resultado = 3 + 4 * 5 - 2 * (4 + 6);
```

### 1.5.6 Variáveis no Arduino

As variáveis no Arduino são declaradas da mesma forma que no C. A sintaxe para declarar variáveis é:

```cpp
int i, cont;
float res;
```

Quando uma variável é declarada, o microcontrolador reserva espaço na memória para armazenar o valor.

### 1.5.7 Sentença de atribuição no Arduino

A sentença de atribuição no Arduino segue a mesma sintaxe do C:

```cpp
i = 12;
cont = 3;
res = (12 + 3) * 1.35;
```

### 1.5.8 Comandos básicos de entrada e saída no Arduino

Os comandos básicos de entrada e saída no Arduino são `Serial.print` e `Serial.read`. Eles são usados para comunicação via porta serial, permitindo interação com o computador.

#### a. Função `Serial.print`

A função `Serial.print` envia dados para a porta serial.

```cpp
Serial.print("A soma de x e y e ");
Serial.println(soma);
```

#### b. Função `Serial.read`

A função `Serial.read` lê dados da porta serial.

```cpp
char input = Serial.read();
```

## 1.6 Exemplos

1. Elaborar um programa no Arduino que produza a mensagem `Meu primeiro programa em Arduino`. Incluir **comentários**.

```cpp
void setup() {
  Serial.begin(9600);
  Serial.println("Meu primeiro programa em Arduino");
}

void loop() {
  // Não há necessidade de código no loop para este exemplo
}
```

2. Elaborar um programa no Arduino que produza a mensagem `Agora vou iniciar...` e escreva **na linha seguinte** `produzindo um novo código`. Incluir comentários.

```cpp
void setup() {
  Serial.begin(9600);
  Serial.println("Agora vou iniciar...");
  Serial.println("Produzindo um novo código");
}

void loop() {
  // Não há necessidade de código no loop para este exemplo
}
```

3. Elaborar um programa no Arduino que produza o resultado das expressões abaixo:

- $3 + 4 \times 5 - 2 	imes (4+6)$
- $6 + 4 \times 8 	imes (3 + 7 + 27)$
- $rac{3 + 4 \times 5} {[2 	imes (4 + 6) ]}$
- $rac{3} {[6 \times (1.25 + 6.78)]}$

```cpp
void setup() {
  Serial.begin(9600);
  Serial.print("Resultado 1: ");
  Serial.println(3 + 4 * 5 - 2 * (4 + 6));
  Serial.print("Resultado 2: ");
  Serial.println(6 + 4 * 8 * (3 + 7 + 27));
  Serial.print("Resultado 3: ");
  Serial.println((3 + 4 * 5) / (2 * (4 + 6)));
  Serial.print("Resultado 4: ");
  Serial.println(3 / (6 * (1.25 + 6.78)));
}

void loop() {
  // Não há necessidade de código no loop para este exemplo
}
```

4. Elaborar um programa no Arduino para calcular e exibir o valor das expressões abaixo:

- $3^{4 \times 5 	imes [2 	imes (4 + 6) ]}$
- $\sqrt{2 \times (5 + 3) ^ {34}}$ 

```cpp
#include <math.h>

void setup() {
  Serial.begin(9600);
  Serial.print("Resultado 1: ");
  Serial.println(pow(3, 4 * 5 * (2 * (4 + 6))));
  Serial.print("Resultado 2: ");
  Serial.println(sqrt(2 * pow((5 + 3), 34)));
}

void loop() {
  // Não há necessidade de código no loop para este exemplo
}
```

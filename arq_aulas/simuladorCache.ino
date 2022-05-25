/*
 ============================================================================
 Name        : simuladorCache.c
 Author      : clayton j a silva
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */
#define K 8
#define Nlinhas 256
#define Nblocos 32
#define pin01Botao 10
#define pinEnter 11
#define pinReq 12
#define pinLCD4 4
#define pinLCD5 5
#define pinLCD6 6
#define pinLCD7 7
#define pinEN 8
#define pinRS 9

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <LiquidCrystal.h>

LiquidCrystal lcd(pinRS, pinEN, pinLCD4, pinLCD5, pinLCD6, pinLCD7);
float endMP, //  endereço do dado requisitado pelo processador na MP
      endLC, //  número da linha na MP: 0 - 255
      endB; // número do bloco na cache: 0 - 32
int *p_endMP,*p_endC,*p_TAG; // ponteiros de endereços da MP e da cache


//lcd.print(itoa(e,stre,10));

// atualiza a cache a TAG da cache em caso de 'falta'
int atualizaCache(int b, int lc){
  int *p_endB,*p_endLC;
  p_endB = malloc(K);
  p_endLC = malloc(K);
  p_endB = 0xA00+calc_LC_B((int)endMP,1)*K; // inicializa o ponteiro para a primeira posição do bloco
  p_endLC = 0x200+calc_LC_B((int)endMP,0)*K; // inicializa o ponteiro para a primeira posição da linha da MP
  for (int i=0;i<K;i++){
    *p_endB = *p_endLC;
    p_endB++;
    p_endLC++;
  }
  p_TAG = 0xB00+b; // armazena na TAG a linha da MP que contém o dado lido
  *p_TAG = lc;

  return *p_endMP;
}


// retorna endereço da cache que contém dado do endereço de MP requisitado
int calc_EndC(){
  int eC = (calc_LC_B((int)endMP,1)*K)+((int)endMP%K);
  return eC;
}


// calcula e retorna número da linha com dado do endereço da MP requisitado e número do bloco mapeado
int calc_LC_B(int e, int i){ // e indica o endereço do dado requisitado,
                             // i indica a opção pelo retorno do número da linha ou do bloco
  int LC = (e-512)/K;
  int B = LC%Nblocos;
  if (i==0)
    return LC;
  else
    return B;
}


// converte caractere hexa para numero decimal
int hexa2decimal(char h){
  int num=0;
  switch (h)
    {
      case '0':
      num=0;
      break;
      case '1':
      num=1;
      break;
      case '2':
      num=2;
      break;
      case '3':
      num=3;
      break;
      case '4':
      num=4;
      break;
      case '5':
      num=5;
      break;
      case '6':
      num=6;
      break;
      case '7':
      num=7;
      break;
      case '8':
      num=8;
      break;
      case '9':
      num=9;
      break;
      case 'A':
      num=10;
      break;
      case 'B':
      num=11;
      break;
      case 'C':
      num=12;
      break;
      case 'D':
      num=13;
      break;
      case 'E':
      num=14;
      break;
      case 'F':
      num=15;
      break;
    }  
  return num;
}

// le o dado encontrado na cache
int leCache(){
  p_endC = 0xA00+calc_EndC();
  return *p_endC;
}

float leStringSerial(){ // le hexadecimal de 3 dígitos e retorna da entrada serial e retorna o número em decimal
  String conteudo = "";
  char caractere;
  float num=0;
  
  // Enquanto receber algo pela serial
  while(Serial.available() > 0) {
    // Lê byte da serial
    caractere = Serial.read();
    // Ignora caractere de quebra de linha
    if (caractere != '\n'){
      // Concatena valores
      conteudo.concat(caractere);
    }
    // Aguarda buffer serial ler próximo caractere
    delay(10);
  }
  
  for (int i=0;i<=2;i++)
    num = num + hexa2decimal(conteudo[i])*pow(16,(2-i));

  return round(num);
}

//  verifica se TAG da cache armazena a linha do dado
int verificaTAG(int b, int lc){
  p_TAG = 0xB00+b;
  if (*p_TAG == lc)
    return 1;
  else
    return 0;
}

void setup() {
  // put your setup code here, to run once:
  pinMode(pinReq,INPUT);
  pinMode(pin01Botao,INPUT);
  pinMode(pinEnter,INPUT);
  Serial.begin(9600);
  p_endMP = malloc(Nlinhas*K);
  p_TAG = malloc(Nblocos);
  p_endC = malloc(Nblocos*K);
  // configura o número de colunas e linhas do lcd:
  lcd.begin(16, 2);
  lcd.print("Inicio!");
  delay(1000);
  lcd.clear();
     
}

void loop() {
  // put your main code here, to run repeatedly:
  
  int val;
  char numHex[3];
  val = digitalRead(pinReq); 
  if (val==1){
    endMP = leStringSerial(); //le a entrada serial e atribui ao endereco pesquisado
    if (endMP!=0) // pesquisa na MP somente se houver um endereço valido na entrada serial  
      Serial.println(endMP,HEX);
      lcd.print("Req End ok");
      lcd.setCursor(0,1);
      if ((endMP<512)||(endMP>2559)) // enderecos do MC 2560 para simular a MP de 2KB
        Serial.println("Endereco invalido");
      else
      {
         endB = calc_LC_B((int)endMP,1);
         endLC = calc_LC_B((int)endMP,0);
         if (verificaTAG(endB,endLC)){
            Serial.println("ACERTO");
            lcd.print("ACERTO");
            delay(2000);
            lcd.clear();
            Serial.println(leCache());
            lcd.print(itoa(leCache(),numHex,16));
            delay(2000);
            lcd.clear();
         }
         else
            Serial.println("FALTA");
            lcd.print("FALTA");
            delay(2000);
            lcd.clear();
            Serial.println(atualizaCache(endB,endLC));
            lcd.print(itoa(atualizaCache(endB,endLC),numHex,16));
            delay(2000);
            lcd.clear();        
      }
    while (val==1)
     val = digitalRead(pinReq);
  }
    
  
  delay(1000);
}

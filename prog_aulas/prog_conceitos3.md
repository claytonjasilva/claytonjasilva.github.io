## Conceitos de programação procedural: estruturas de repetição  
### [Instruções compostas](https://docs.python.org/pt-br/3/reference/compound_stmts.html)

### Instruções de repetição   
- A instrução *while* é usada para executar um loop (ciclo repeteitivo) de ações nenhuma ou várias vezes, quando o teste da condição resultar *True*
- A instrução *for* é usada também para executar um loop de ações em que a condição é que uma variável de controle se mantenha entre limites de uma sequência - em cada iteração (ou seja, ciclo) a variável de controle é incrementada por um valor
- A função *range* é independente dos looops *for* e pode ser usada sempre que se precisa de uma lista de inteiros  
São exemplos de aplicação da classe *range* são:  
*range(stop)*  
*range(inicio,fim,passo)*
- A instrução *break* interrompe a execução do loop e prossegue a execução após o *for* e o *while* sem intemrromper a execução do código
- No *break* a interrupção do loop independe do teste da condição da estrutura  

### Exercícios com condicionais simples e compostas  
1. Elaborar um programa na linguagem Python que leia as notas de um grupo de N=30 alunos; calcule e escreva a média aritmética das notas dos alunos.
2. Elaborar um programa na linguagem Python que leia as alturas e pesos de um grupo de N=20 pessoas; calcule e screve o IMC médio daquele grupo.
3. Elaborar um programa na linguagem Python que leia os dados de um grupo de pessoas: nome, idade e escolaridade('fundamental','medio','superior'). O programa deverá calcular e escrever a média da idade das pessoas que possuem nível de escolaridade de ensino médio.
4. Elaborar um programa na linguagem Python que leia o cpf de uma pessoa, o saldo da conta corrente no início de um dia, leia a natureza ('d'-depósito,'s'-saque) e o valor de todas as operações do dia. O programa deverá escrever o cpf do correntista, calcular e escrever o respectivo saldo ao final do dia.
5. Elaborar um programa na linguagem Python que leia o cpf (no formato de 11 caracteres numéricos sem pontos e travessão), o número da instituição financeira a que pertence aquele cpf e o respectivo saldo bancário na instituição financeira de um grupo de pessoas. O programa deverá calcular e apresentar o saldo médio de cada cpf, assim como o saldo médio de cada instituição financeira. Admitir que o programa será interrompido se for digitado o cpf 000.000.000-00. O programa deverá **verificar** se o cpf é válido usando a regra proposta em <https://www.aceguarulhos.com.br/blog/como-saber-se-um-cpf-e-verdadeiro/#gsc.tab=0>.

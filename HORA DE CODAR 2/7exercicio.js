/// Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.  

var soma = 0;
var numero1 = parseInt(prompt("Digite um numero: "));
var numero2 = parseInt(prompt("Digite um numero: "));
var numero3 = parseInt(prompt("Digite um numero: "));
var numero4 = parseInt(prompt("Digite um numero: "));
var numero5 = parseInt(prompt("Digite um numero: "));
var numero6 = parseInt(prompt("Digite um numero: "));


if (numero1 <= 72){
   soma += numero1;
}
if (numero2 <= 72){
    soma += numero2;
} 
if (numero3 <= 72){
    soma += numero3;
}
if (numero4 <= 72){
    soma += numero4;
}
if (numero5 <= 72){
    soma += numero5;
}
if (numero6 <= 72){
    soma += numero6;
}


alert("Os numero digitados : " + numero1 + ', ' + numero2 + ', ' + numero3 + ', ' + numero4 + ', ' + numero5 + ', ' + numero6);

alert("O resultado da soma é " + soma + " ");
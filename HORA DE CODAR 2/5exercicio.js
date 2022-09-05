///5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.


var numero1 = parseInt(prompt("Digite um numero"));
var numero2 = parseInt(prompt("Digite um numero"));
var numero3 = parseInt(prompt("Digite um numero"));
var numero4 = parseInt(prompt("Digite um numero"));
var numero5 = parseInt(prompt("Digite um numero"));
var numero6 = parseInt(prompt("Digite um numero"));
var media = parseInt(numero1 + numero2 + numero3 + numero4 + numero5 + numero6);

alert( "1º="+ numero1 + " 2º="+ numero2 +" 3º= " + numero3 +" 4º=" + numero4 +" 5º=" + numero5 +" 6º=" + numero6 );

alert ("Média aritmética =" + (media / 6));

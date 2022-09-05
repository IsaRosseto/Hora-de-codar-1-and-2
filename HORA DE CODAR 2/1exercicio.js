///1. Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.

var numero1 = parseInt(prompt("Insira o primeiro valor"));
var numero2 = parseInt(prompt("Insira o primeiro valor"));

if(numero1 > numero2){
    alert("O primeiro numero é maior: " + numero1);
}

else if(numero1 < numero2){
    alert("O segundo numero é maior: " + numero2);
}
else{
    numero1 = numero2
    alert("Os dois numeros sao iguais, tente de novo");
}


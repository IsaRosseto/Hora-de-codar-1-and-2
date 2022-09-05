///4. Faça um programa que leia  3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.


var numero1 = parseInt(prompt("Digite o primeiro número"));
var numero2 = parseInt(prompt("Digite o segundo número"));
var numero3 = parseInt(prompt("Digite o terceiro número"));


if (numero1 > numero3 && numero2 > numero3) {
    alert(" O resultado da soma é " + (numero1 + numero2)) ;
} 

else if (numero2 < numero1 && numero2 < numero3) {
    alert( " O resultado da soma é " + (numero1 + numero3));
} 

 else if (numero2 > numero1 && numero3 > numero1){
    alert( " O resultado da soma é " + (numero2 + numero3));
}

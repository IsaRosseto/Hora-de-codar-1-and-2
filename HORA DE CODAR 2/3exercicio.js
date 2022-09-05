///3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

var numero1 = prompt("Digite o primeiro valor: ");
var numero2 = prompt("Digite o segundo valor: ");
var numero3 = prompt("Digite o terceiro valor: ");

if(numero1 > numero2 && numero1 > numero3){
    alert( numero1 + " é maior ");
}
if(numero1 > numero2 && numero1 > numero3){
    alert( numero2 + " é maior ");
}
if(numero3 > numero1 && numero3 > numero2){
   alert( numero3 + " é maior ");
}
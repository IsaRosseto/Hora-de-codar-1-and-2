///2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

var valor = parseInt(prompt("Escreva um valor"));

if (valor > 0){
    alert ("Esse numero é positivo.");
}else if  (valor == 0){
    alert ("Esse número é 0.");
} else if (valor < 0){
    alert ("Esse número é negativo.");
}
///11. Uma micro calculadora
///Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem
///executadas (codificada da seguinte forma: 1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação).
///O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. Observação: Considere
///que só serão lidos os valores 1, 2, 3 ou 4 para as operações

var tipo = parseInt(prompt("Digite a operação voce deseja usar: sendo 1.Adição, 2.Subtração, 3.Multiplicação e 4.Divisão"))
var numero1 = parseInt(prompt("Digite um numero:"));
var numero2 = parseInt(prompt("Digite outro numero: "));
var resultado= 0;

if(tipo == 1){
    resultado = numero1 + numero2;
    alert ("O resultado da conta é " + resultado);
}

else if(tipo == 2){
    resultado = numero1 - numero2;
    alert ("O resultado da operação é " + resultado);
}

else if(tipo == 3){
    resultado = numero1 * numero2;
    alert ("O resultado da conta é " + resultado);
}

else if (tipo == 4){
    resultado = numero1 / numero2;
    alert ("O resultado da conta é  " + resultado);

}
else{
    alert("Algo deu errado. Tente novamente.");
}


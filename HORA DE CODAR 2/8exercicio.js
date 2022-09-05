///8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

var soma = 0;
var numero1 = parseInt(prompt("Digite o primeiro valor: "));
var numero2 = parseInt(prompt("Digite o segundo valor: "));
var numero3 = parseInt(prompt("Digite o terceiro valor: "));
var numero4 = parseInt(prompt("Digite o quarto valor: "));
var media = (numero1 + numero2 + numero3 + numero4) / 4;

alert("A sua média é " + media);


       if (media < 5){
           soma += numero1;
           alert("tente novamente");
       }
       if (media > 5){
            soma += numero2;
            alert("Você foi aprovado");
       }


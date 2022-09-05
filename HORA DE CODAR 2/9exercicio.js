///9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

var data = parseInt(prompt("Digite seu ano de nascimento: "));

if (data < 2006){
    alert("Parabéns! Você já tem idade suficiente para votar.")
} 

else{
    alert("Que pena! Você ainda não tem a idade minima para poder votar.")
}
///10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

var altura = parseFloat(prompt("Digite a sua altura:"));
var sexo = parseInt(prompt(" Digite 1 para Masculino " + " e 2 para Feminino "));

if (sexo == 1) {
  alert("O seu peso ideial é de :" + (72.7 * altura - 58) + "kilos");
}

else if (sexo == 2) {
  alert("O seu peso ideial é de:" + (62.1 * altura - 44.7) + "kilos");
}
else {
  alert("Algo deu errado. Tente novamente.") ;
}

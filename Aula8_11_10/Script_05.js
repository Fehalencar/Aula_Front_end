//Operador ! (not) = inverte o que é falso em verdadeiro e vice-versa
let a, b, res;
a=90;
b=10;
res=(a<b);
document.write(`a= ${a}, b= ${b} <br>`);//a= 9, b= 10
document.write(`a < b : ${(a<b)} <br>`);//false
document.write(`!( a < b) : ${!(a<b)}<br>`);//true
document.write("res : "+typeof(res));
/*
typeof = Mostra o tipo da variável (number, string, boolean)
boolean = variavel que só possui dois valores possíveis (true/false, on/off, 0/1)
*/
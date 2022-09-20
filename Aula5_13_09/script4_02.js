let a,b;
a=prompt("Digite um número");
a=parseInt(a);
b=parseInt(prompt("Digite outro número"));
document.write (`soma: ${(a+b)} <br>`);
document.write ("subtração: "+ (a-b) + "<br>");
document.write (`A multiplicação de ${a} por ${b} vale ${a*b}<br>`);
document.write (`A divisão de ${a} por ${b} vale ${(a/b)}<br>`);
document.write (`O modulo de ${a} por ${b} vale ${(a%b)}<br>`);
document.write (`A potencia de ${a} ${b} vale ${(a**b)}<br>`);
document.write (`A porcentagem ${b}% de ${a} vale ${(b/100)*a}<br>`)

/*
+ soma: número + número
+ juntar: string + número
*/
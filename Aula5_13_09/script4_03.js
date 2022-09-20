let a,b;
a=prompt("Valor");
a=parseInt(a);
b=parseInt(prompt("Porcentagem"));
document.write (`A porcentagem ${b}% de ${a} é: ${(a/100)*b}<br>`)
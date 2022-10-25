//Operador && (and)
let a,b,c,d;
a=50;
b=120;
c=200;
document.write(`a = ${a}, b = ${b}, c = ${c} <br>`);
d=(a<=b) && (a>=c);//d=(true)&&(false)//d= false
document.write("(a<=b) && (a>=c) = "+d);//false

/*
&&  | Só mostra o resultado verdadeiro quando as duas condições são verdadeiras (true + true)
Bastante usado para fazer validação de login de acesso
*/
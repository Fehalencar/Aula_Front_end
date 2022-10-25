//Operador || (or)
let a,b,c,d;
a=50;
b=120;
c=200;
document.write(`a = ${a}, b = ${b}, c = ${c} <br>`);
d=(a<=b) || (a>=c);//d= true || false / d= true
document.write("(a<=b) || (a>=c) = "+d);//true
/*
||  | Operador é verdadeiro sempre que um dos resultados for verdadeiro
Só será falso se os dois valores forem falsos

Mecanismos de buscas usam esse tipo de valor para pesquisa podendo apresentar os resultados separados ou juntos
*/
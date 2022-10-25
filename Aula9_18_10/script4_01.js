let a,b,c,d,e;
a=50;
b=120;
c=200;
document.write(`a = ${a}, b = ${b}, c = ${c} <br>`);
d=(a<=b) || (a>=c);//d=(50<=120)||(50>=200)// d=(T)||(F)// d=True
e=(a>=b) || (a>=c);
document.write("(a<=b) || (a>=c) = "+d);//True
document.write("(a>=b) || (a>=c) = "+d);//False


/*Condição ou - ||
True    -   True    =   True
True    -   False   =   True
False   -   True    =   True
False   -   False   =   False
*/
let a,b,c,d,e;

a=500;
b=120;
c=20;

d=(a<=b) ? "Beleza" : "Zoado";//d=(500<=120) ? Beleza : Zoado = Zoado (Falso)
e=(a>=c) ? "Ok" : "Só que não";//e=(500>=20) ? Ok : Só que não = Ok (Verdadeiro)

document.write(`d = ${d}<br>`);//Falso
document.write(`e = ${e}<br>`);//Verdadeiro
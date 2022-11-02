let a,b;
const saida=document.querySelector(".saida");
a=parseFloat(prompt ("Digite valor 1"));
b=parseFloat(prompt ("Digite valor 1"));
saida.innerHTML=`a = ${a}, b = ${b}<br>`;
if (a == b) {
  saida.innerHTML+="A variável a é igual a variável b";
}
else {
  saida.innerHTML+="A variável a não é igual a variável b";
}
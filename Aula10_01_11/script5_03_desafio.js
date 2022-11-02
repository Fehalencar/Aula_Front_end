/*
Digitar um numero inteiro (prompt) / ParseInt
Verificar se o número é PAR ou ÍMPAR
Mostrar o número digitar e mensagem PAR ou ÍMPAR
*/
let a,b;
const saida=document.querySelector(".saida");
a=parseInt(prompt ("Digite o valor"));
b=a%2;

saida.innerHTML=`Número = ${a}<br>`;
if (b == 0){
    saida.innerHTML+="O número escolhido é par";
}
else{
    saida.innerHTML+="O número escolhido é ímpar";
}
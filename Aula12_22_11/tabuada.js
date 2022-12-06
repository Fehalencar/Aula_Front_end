let tabuada, i;
const saida=document.querySelector(".saida");
tabuada=2;
for(i=0; i<=10;i++){
    saida.innerHTML+=`${tabuada} x ${i} = ${tabuada*i}<br>`;
}
let i;
const saida=document.querySelector(".saida");
i=10;//var i recebe o valor , valor inicial
do{
    saida.innerHTML+=i + "<br>";
    i++;
}while (i < 3);//condição
saida.innerHTML+="<hr>";
i=10;//var i recebe o valor , valor inicial
while (i<3){
    saida.innerHTML+=i + "<br>";
    i++;
}
/*
do while = Independente do valor ele é mostrado uma vez
while = Se a condição for falsa ele não será mostrado | se verdadeira segue normalmente
*/
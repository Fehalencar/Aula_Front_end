/*
Digitar duas notas (av1 e av2)
Calcular média das notas (av1 e av2)
media=(av1+av2)/2
Com o valor da média, mostrar e verificar se o aluno está Aprovado ou Reprovado
Condição para ser aprovado, media >=6
*/

const saida=document.querySelector(".saida");
let Av1, Av2, media, resultado;

Av1 = parseFloat(prompt ("Digite nota Av1"));
Av2 = parseFloat(prompt ("Digite nota Av2"));
media = (Av1+Av2)/2;

saida.innerHTML= (`Av1=${Av1}, Av2=${Av2}<br>`);
saida.innerHTML= (`Média=${media}<br>`);
saida.innerHTML= (`Situação=${resultado}`);
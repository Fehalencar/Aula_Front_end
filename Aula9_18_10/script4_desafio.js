/*
Solicitar a entrada de duas novas (Av1 e Av2)
Calcular a média das duas notas
Qual a condição para mostrar uma das mensagens abaixo:
média >= 6
"Aprovado"
"Reprovado"
*/
let Av1, Av2, media, resultado;

Av1 = parseFloat(prompt ("Digite nota Av1"));
Av2 = parseFloat(prompt ("Digite nota Av2"));
media = (Av1+Av2)/2;
resultado=(media>=6)? "Aprovado" : "Reprovado";

document.write (`Av1=${Av1}, Av2=${Av2}<br>`);
document.write (`Média=${media}<br>`);
document.write (`Situação=${resultado}`);
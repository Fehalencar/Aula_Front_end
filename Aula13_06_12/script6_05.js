const saida=document.querySelector('.saida');

const numeros=[5,6,7,9];

saida.innerHTML=`${numeros}<br>`;

numeros[0]++;//incrementou somente o valor 0 (6)
numeros[1]=25%2;//altera o valor da posição 1 para resto da divisão de 25 (1)
numeros[1]=numeros[0]%2;//altera o valor da posição 1 para o resto da divisão do valor da posição 0 (6)

saida.innerHTML+=`Alterações: ${numeros}<br>`;
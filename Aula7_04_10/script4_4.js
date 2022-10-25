let i, j, x;
i=100;
j=100;
i++;//101
i++;//102
i++;//103
i++;//104
j--;//99
j--;//98
j--;//97
x=i+j;
i+=j;
document.write(`i=${i}, j=${j}, x=${x}`);//i= 104, j=97

//a variavel que vai receber qualquer alteração de valor é a que está do lado esquerdo
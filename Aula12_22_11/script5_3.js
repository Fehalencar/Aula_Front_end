let i,j;
const saida=document.querySelector(".saida");
for (i=0; i<3; i++) {//looping externo (Ex. ponteiro das horas de um relógio)
    for (j=0; j<4; j++) {//looping interno (Ex. ponteiro dos minutos de um relógio)
        for (k=0;k<2;k++){      
            saida.innerHTML+=`${i} ${j} ${k}<br>`;
        }
    }
}
/*  
i   j
0   0
0   1 = segura o i
0   2
0   3
1   0 = execulta o i e o j
1   1
1   2
1   3
2   0 = novamente exculta o i 
*/
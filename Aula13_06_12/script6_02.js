const saida=document.querySelector(".saida");
//para criar um array, let nome_do_array=[]; const nome_do_array=[];
//indice ou posição        0        1        2         3    (sempre inicia em 0 o indice)
            let nomes=["Merida","Gabriel","Daniel","Bianca"];

//saida.innerHTML=nomes[3]<br>;é possível imprimir somente um dos valores, sendo necessário só coloca-lo entre cochetes
saida.innerHTML=`${nomes[0]}<br>`;
saida.innerHTML+=`${nomes[1]}<br>`;
saida.innerHTML+=`${nomes[2]}<br>`;
saida.innerHTML+=`${nomes[3]}<br>`;

/*
[↑][Alt][baixo]= para clonar linhas
[Ctrl][Alt][baixo]= criar um multi cursor
*/
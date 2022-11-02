let msg;//Declaração da variavel "msg"
const saida=document.querySelector(".saida");//class=saida | Estrutura básica que vai substituir o document.write
const h1=document.querySelector("h1");//tag h1
const teste=document.querySelector("#teste");//seletor de id="teste"

msg="Hoje a aula mudou!";

saida.innerHTML=`${msg}`;
saida.innerHTML+=`<br>Mesmo!!`;
saida.innerHTML+=`<h2>${msg}<h2>`;

h1.innerHTML+=" - Javascript";
h2.innerHTML+=" - Teste de h2";
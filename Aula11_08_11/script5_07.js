let destino,msg;
const saida=document.querySelector(".saida");
destino=prompt("Digite seu destino: ");

msg="";//alteração
switch (destino) {//Muda a resposta conforme o que é digitado no prompt, sendo que ele é altamente sensitivo
  case "São Paulo":
    msg+="Seja bem vindo a cidade que nunca para!";
  //break;//Break é usado para deixar a mensagem vinculada ao case, parando a procura de mensagem nessa linha
  case "New York":
    msg+="Seja bem vindo a Big Apple!";
  break;
  default:
    msg+="Não encontramos seu destino!";
}
saida.innerHTML=msg;

var nome = prompt('Digite seu nome:');
document.querySelector('h2').innerText += ' ' + nome;

function jogar(){

    if(document.getElementById("papel").checked ==false && document.getElementById("pedra").checked ==false 
    && document.getElementById("tesoura").checked == false){
        alert("Escolha uma opção")
    }
    else{
    var sorteio = Math.floor(Math.random() * 3);
        switch(sorteio){
            case 0:
                document.getElementById("pc").src="img/computador-papel.png";
                break;
            case 1: 
            document.getElementById("pc").src="img/computador-pedra.png";
            break;
            case 2:
                document.getElementById("pc").src="img/computador-tesoura.png";
                break;

        }
        //VERIFICA O VENCEDOR OU EMPATE

        if((document.getElementById("papel").checked == true && sorteio == 0) || 
        (document.getElementById("pedra").checked == true && sorteio == 1) ||
        (document.getElementById("tesoura").checked == true && sorteio == 2)){
        document.getElementById("placar").innerHTML="Empate";

    } else if ((document.getElementById("papel").checked == true && sorteio == 1) || 
    (document.getElementById("pedra").checked == true && sorteio == 2) ||
    (document.getElementById("tesoura").checked == true && sorteio == 0)){
    document.getElementById("placar").innerHTML="Você venceu " + nome + "!!"; 

    
  } else (document.getElementById("placar").innerHTML="O computador Venceu");

    }


}

function Reset(){

    document.getElementById("pc").src="img/computador.png";
    document.getElementById("placar").innerHTML="";
        
    
}



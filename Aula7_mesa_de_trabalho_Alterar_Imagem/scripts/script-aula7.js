
/* 
    Passo a passo para resolver o desafio:
    1- Criar uma opção para a seleção do felino (promp)
    2 - Verificar, qual foi o felino escolhido
    3 - Usuário informa uma url/img da internet
    4 - Acessar o atributo 'src', alterar para a img da internet
*/

let alteraImagem=parseInt(prompt("Escolha uma imagem para alterar. 1 = TIGRE, 2 = LEÃO, 3 = LEOPARDO, 4 = PANTERA, 5 = JAGUAR, 6 = GUEPARDO"));

 if(alteraImagem > 6){
   alert("UAI SÔ!! Você digitou número inválido.")
 
   alteraImagem=parseInt(prompt("Escolha um animal para alterá-lo. 1 = TIGRE, 2 = LEÃO, 3 = LEOPARDO, 4 = PANTERA, 5 = JAGUAR, 6 = GUEPARDO"));
 }
let listarImagens = document.querySelectorAll('img');
let animal = document.querySelectorAll('h2')

alert("Você escolheu: " + animal[(alteraImagem-1)].innerText);
let link=prompt("Insira uma URL para alterar a imagem");

listarImagens[(alteraImagem-1)].setAttribute("src", link)


alert("OLÁ VISITANTE");
alert("VAMOS COMEÇAR A UTILIZAR A NOSSA CALCULADORA BÁSICA!");
let numero1 = prompt("DIGITE O PRIMEIRO NÚMERO PARA EFETUAR O CÁLCULO", "digite um número inteiro ou decimal");
let numero2 = prompt("DIGITE O SEGUNDO NÚMERO PARA EFETUAR O CÁLCULO", "digite um número inteiro ou decimal");
// alert("POR FAVOR EFETUAR O CLICK NO BOTÃO REFERENTE A PROPRIEDADE MATEMÁTICA QUE DESEJA EFETUAR ");

let resultado = parseFloat(numero1);
let resultado2 = parseFloat(numero2);



document.querySelector('.adicao').onclick = function adicionar(numero1, numero2) {
    return alert("O resultado da adição é =" + "   " + (resultado + resultado2))
}


// /*propriedade de subtração*/

document.querySelector('.subtracao').onclick = function subtracao() {
    return alert("O resultado da subtração é =" + "   " + (resultado - resultado2));
}


// /*propriedade de multiplicação*/

document.querySelector('.multiplicacao').onclick = function multiplicacao() {
    return alert("O resultado da multiplicação é =" + "   " + (resultado * resultado2));
}

// /*propriedade de divisão*/

document.querySelector('.divisao').onclick = function divisao() {
    return alert("O resultado da divisão é =" + "   " + (resultado / resultado2));
}




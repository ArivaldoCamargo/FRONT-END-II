


// 1. Pedra ganha de Tesoura.
// 2. Tesoura ganha de Papel.
// 3. Papel ganha de Pedra.

// Variáveis:
let partida = true;
let pontosUsuario = 0;
let pontosComputador = 0;

// Laço de repetição (É true até que um dos dois jogadores ganhe duas rodadas):
while (partida) {
  partida++; //Variável de controle

  // Palpite do usuário:
  var palpiteUsuario = prompt("Digite 1 (Pedra), 2 (Papel) ou 3 (Tesoura)");
  var palpiteUserConvertido = parseInt(palpiteUsuario);

  // Palpite do computador:
  var palpiteComputador = Math.round(Math.random() * (3 - 1) + 1);
  palpiteComputadorConv = parseInt(palpiteComputador);

  switch (palpiteUserConvertido) {
    case 1: //I - Caso o usuário digite 1 (Pedra):
      if (palpiteComputadorConv == 1) {
        // Caso haja igualdade de palpites, retorna o empate da partida. Ninguém pontua.
        console.log(`O usuário jogou pedra e o computador também. Empate`);
      } else if (palpiteComputadorConv == 2) {
        //Caso o usuário digite 1 (pedra) e o computador escolha 2 (papel), o computador pontua.
        pontosComputador += 1;
        console.log(`Pontos computador: ${pontosComputador}`);
        console.log(
          `Usuário jogou pedra e o computador jogou papel. Ponto computador`
        );
      } else if (palpiteComputadorConv == 3) {
        //Caso o usuário digite 1 (pedra) e o computador escolha 3 (Tesoura), o usuário pontua.
        pontosUsuario += 1;
        console.log(`Pontos usuário: ${pontosUsuario}`);
        console.log(
          `O usuário jogou pedra e o computador jogou tesoura. Ponto usuário`
        );
      }
      break;

    case 2: // II - Caso o usuário digite 2 (Papel):
      if (palpiteUserConvertido == 2) {
        if (palpiteComputadorConv == 2) {
          // Caso haja igualdade de palpites, retorna o empate da partida. Ninguém pontua.
          console.log(`O usuário jogou papel e o computador também. Empate`);
        } else if (palpiteComputadorConv == 1) {
          //Caso o usuário digite 2 (papel) e o computador escolha 1 (Pedra), o usuário pontua.
          pontosUsuario += 1;
          console.log(`Pontos usuário: ${pontosUsuario}`);
          console.log(
            `O usuário jogou papel e o computador jogou pedra. Ponto usuário`
          );
        } else if (palpiteComputadorConv == 3) {
          //Caso o usuário digite 2 (papel) e o computador escolha 3 (Tesoura), o computador pontua.
          pontosComputador += 1;
          console.log(`Pontos computador: ${pontosComputador}`);
          console.log(
            `O usuário jogou papel e o computador jogou tesoura. Ponto computador`
          );
        }
      }
      break;

    case 3: // III - Caso o usuário digite 3 (Tesoura)
      if (palpiteUserConvertido == 3) {
        if (palpiteComputadorConv == 3) {
          // Caso haja igualdade de palpites, retorna o empate da partida. Ninguém pontua.
          console.log(`O usuário jogou tesoura e o computador também. Empate`);
        } else if (palpiteComputadorConv == 1) {
          //Caso o usuário digite 3 (tesoura) e o computador escolha 1 (Pedra), o computador pontua.
          pontosComputador += 1;
          console.log(`Pontos computador: ${pontosComputador}`);
          console.log(
            `O usuário jogou tesoura e o computador jogou pedra. Ponto computador`
          );
        } else if (palpiteComputadorConv == 2) {
          //Caso o usuário digite 3 (tesoura) e o computador escolha 2 (papel), o usuário pontua.
          pontosUsuario += 1;
          console.log(`Pontos usuário: ${pontosUsuario}`);
          console.log(
            `O usuário jogou tesoura e o computador jogou papel. Ponto usuário`
          );
        }
      }
      break;
  }

  //Validação da pontuação. Caso um dos dois atinja essa pontuação, o while termina,
  //e é declarado vencedor o que atingiu os 2 pontos primeiros
  if (pontosComputador == 2) {
    console.log("O computador venceu!");
    partida = false;
  } else if (pontosUsuario == 2) {
    console.log("O Usuário venceu");
    partida = false;
  }
}
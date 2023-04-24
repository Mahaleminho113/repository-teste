// variaveis ------------
const game = document.querySelector("#game");
const line0 = document.querySelector(".line0");
const arrayTeclado = ["qwertyuiop", "asdfghjkl", "zxcvbnm", ["Del", "Enter"]];
let linhaAtual = 0;
var enter, del;

// ["Del", "Enter"];
//game ---------------
//loop para criar as linhas -----------
for (let countLinha = 0; countLinha < 6; countLinha++) {
  //criando div linha--------------
  let linha = document.createElement("div");
  linha.className = "linha";
  //loop para criar coluna-----------
  for (let countColuna = 0; countColuna < 5; countColuna++) {
    //criando div caixa--------
    let caixa = document.createElement("div");
    //adicionando class div Caixa---------
    caixa.className = "caixa";

    //se for a primeira coluna da primeira linha
    //como estamos iniciando o jogo
    //colocaremos este objeto com o fundo cinza
    if (countLinha == 0 && countColuna == 0) {
      caixa.classList.add("fundo");
    }

    //adicionando caixa dentro das linhas-----
    linha.appendChild(caixa);
  }
  //adicionando as linhas dentro do Game---
  game.appendChild(linha);
}
//variavel linha------
const linhas = document.querySelectorAll(".linha");
//teclado ------------
// loop para linha do teclado
for (
  let countLinhaTeclado = 0;
  countLinhaTeclado < arrayTeclado.length;
  countLinhaTeclado++
) {
  //criando div linha teclado-----
  let linha = document.createElement("div");
  // class para linha teclado----
  linha.className = "linhaTeclado";
  // loop para caixas do teclado
  for (
    let countCaixaTeclado = 0;
    countCaixaTeclado < arrayTeclado[countLinhaTeclado].length;
    countCaixaTeclado++
  ) {
    //criando button caixa teclado----
    let caixa = document.createElement("button");
    //class caixa do teclado-------
    caixa.className = "caixaTeclado";
    //adicionando letras do array na caixa do teclado -----
    caixa.textContent = arrayTeclado[countLinhaTeclado][countCaixaTeclado];

    if (caixa.textContent == "Enter") {
      enter = caixa;
      caixa.style.visibility = "hidden";
    }

    if (caixa.textContent == "Del") {
      del = caixa;
      caixa.style.visibility = "hidden";
    }

    // //adicionando evento ao button caixa do teclado---
    caixa.addEventListener("click", function () {
      //   //condição para button Enter ----

      if (caixa.textContent == "Enter") {
        linhas[linhaAtual].children[4].classList.remove("fundo");
        linhaAtual++;
        linhas[linhaAtual].children[0].classList.add("fundo");
        enter.style.visibility = "hidden";
      }

      //  //condiçao para button Del -----
      else if (caixa.textContent == "Del") {
        linhas[linhaAtual].children[4].classList.remove("fundo");
        linhas[linhaAtual].children[0].classList.add("fundo");
        //     //loop para pular para deletar ----
        for (y = 4; y >= 0; y--) {
          //       //condiçoes para o loop
          if (linhas[linhaAtual].children[y].textContent !== "") {
            linhas[linhaAtual].children[y].textContent = "";
            // break;
          }
        }

        if (y == 0) {
          del.style.visibility = "hidden";
        }
      } else {
        let x = 0;
        //achando a coluna/caixa vazia--------
        while (x < 5 && linhas[linhaAtual].children[x].textContent !== "") {
          x++;
        }

        if (x < 5) {
          del.style.visibility = "visible";

          linhas[linhaAtual].children[x].textContent = caixa.textContent;

          if (x == 4) {
            enter.style.visibility = "visible";
          }

          if (x >= 0 && x < 4) {
            linhas[linhaAtual].children[x].classList.remove("fundo");
            linhas[linhaAtual].children[x + 1].classList.add("fundo");
          }
        }
      }
    });

    //adicionando div caixa na linha------
    linha.appendChild(caixa);
  }
  //adicionando as linhas no teclado --
  teclado.appendChild(linha);
}

//teste 1
//[div.linha, div.linha, div.linha, div.linha, div.linha, div.linha]
// linhas[5].children[3].textContent = "a";

// console.log(linhas);

//teste 2
// const linhasTeste = document.querySelector(".linha");
// console.log(linhasTeste.children[4].textContent);

//
//
//
//
//
// controlando array com loop
//
//
//
//
//
//
// const a = [
//   "a1",
//   "b1",
//   "c1",
//   "d1",
//   [
//     "a2",
//     "b2",
//     "c2",
//     "d2",
//     ["a3", "b3", "c3", "d3", ["1", "2", "3", "4", "5", "6", "7"]],
//   ],
// ];

// // console.log(a[0]);
// // console.log(a[1]);
// // console.log(a[2]);
// // console.log(a[3]);
// // console.log(a[4][0]);
// // console.log(a[4][1]);
// // console.log(a[4][2]);
// // console.log(a[4][3]);
// // console.log(a[4][4][0]);
// // console.log(a[4][4][1]);
// // console.log(a[4][4][2]);
// // console.log(a[4][4][3]);
// // console.log(a[4][4][4][0]);
// // console.log(a[4][4][4][1]);
// // console.log(a[4][4][4][2]);
// // console.log(a[4][4][4][3]);
// // console.log(a[4][4][4][4]);
// // console.log(a[4][4][4][5]);
// // console.log(a[4][4][4][6]);
// // for (let b = 0; b < a.length; b++) {
// //   //   console.log(a[b]);
// //   for (let c = 0; c < a[4].length; c++) {
// //     // console.log(a[4][c]);

// //     for (let d = 0; d < a[4][4].length; d++) {
// //       // console.log(a[4][4][d]);
// //       for (let e = 0; e < a[4][4][4].length; e++) {
// //         console.log(a[b][c][d][e]);
// //       }
// //     }
// //   }
// // }

// for (x = 1; x < 5; x++) {
//   for (y = 1; y < 5; y++) {
//     console.log("x=" + x + ", y=" + y + ", x*y = " + x + "*" + y + " " + x * y);
//     // console.log(
//     //   `valorX= ${x}, valorY= ${y} , valorX*valorY =  ${x} * ${y} = ${x * y}`
//     // );
//   }
//   // x++;
// }

// /*
// x=1, y=1, x*y = 1*1 = 1
// x=1, y=2, x*y = 1*2 = 2
// x=1, y=3, x*y = 1*3 = 3
// x=1, y=4, x*y= 1*4 = 4

// x=2, y=1, x*y = 2*1 = 2

// */

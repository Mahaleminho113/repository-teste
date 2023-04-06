const game = document.querySelector("#game");
const line0 = document.querySelector(".line0");

// const objTeclado = {
//   linha1: "qwertyuiop",
//   linha2: "asdfghjkl",
//   linha3: "zxcvbnm",
//   linha4: ["Del", "Enter"],
// };
const arrayTeclado = ["qwertyuiop", "asdfghjkl", "zxcvbnm", ["Del", "Enter"]];
for (let countLinha = 0; countLinha < 6; countLinha++) {
  let linha = document.createElement("div");
  linha.className = "linha";
  for (let countColuna = 0; countColuna < 5; countColuna++) {
    let caixa = document.createElement("input");
    caixa.className = "caixa";
    caixa.textContent = "j";
    linha.appendChild(caixa);
  }
  game.appendChild(linha);
}

// for (let caixaLine0 = 0; caixaLine0 < 11; caixaLine0++) {
//   let caixa0 = document.createElement("div");
//   caixa0.className = "caixaLine0";
//   caixa0.textContent = "j";
//   line0.appendChild(ca);
// }
for (
  let countLinhaTeclado = 0;
  countLinhaTeclado < arrayTeclado.length;
  countLinhaTeclado++
) {
  let linha = document.createElement("div");
  linha.className = "linhaTeclado";

  for (
    let countCaixaTeclado = 0;
    countCaixaTeclado < arrayTeclado[countLinhaTeclado].length;
    countCaixaTeclado++
  ) {
    let caixa = document.createElement("button");
    caixa.className = "caixaTeclado";
    caixa.textContent = arrayTeclado[countLinhaTeclado][countCaixaTeclado];
    linha.appendChild(caixa);
    // if (countLinhaTeclado == 3 && countCaixaTeclado == 1) {
    //   break;
    // }
  }
  teclado.appendChild(linha);
}

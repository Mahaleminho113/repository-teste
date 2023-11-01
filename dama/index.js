const body = document.querySelector("body");

//array Determinar cores do tabuleiro
const myArray = [
  1, 3, 5, 7, 10, 12, 14, 16, 17, 19, 21, 23, 26, 28, 30, 32, 33, 35, 37, 39,
  42, 44, 46, 48, 49, 51, 53, 55, 58, 60, 62, 64,
];

//array Determinar casa onde vao ser criadas as pecas
const arrayPecas = [
  1, 3, 5, 7, 10, 12, 14, 16, 17, 19, 21, 23, 42, 44, 46, 48, 49, 51, 53, 55,
  58, 60, 62, 64,
];

//array determinar casa onde nao tera pecas
const arraySemPecas = [25, 26, 27];

//crinado div tabuleiro ,adicionando classe e acrescentando tabuleiro ao body
const tabuleiro = document.createElement("div");
tabuleiro.className = "tabuleiro";
body.append(tabuleiro);

// looop para criar casas do tabuleiro
for (x = 1; x <= 64; x++) {
  //const e class das casas e acrescentando casa em tabuleiro
  const casa = document.createElement("div");
  casa.className = "casa";
  tabuleiro.appendChild(casa);
  // casa.textContent = x;

  //const e class das Pecas e acrescentando pecas em casa
  const pecas = document.createElement("div");
  pecas.className = "pecas";
  pecas.draggable = "true";

  //se "x" estiver incluido no array
  if (myArray.includes(x)) {
    //cor de fundo sera verde
    casa.style.backgroundColor = "green";

    //se "x" nao estiver incluido
  } else {
    // o fundo sera Branco
    casa.style.backgroundColor = "white";
  }

  //se o elemento"x" estiver incluido no array
  if (arrayPecas.includes(x)) {
    casa.appendChild(pecas);
    //casa recebe a div peças

    //se o elemento "x" estiver incluido no array e for maior que  23
    if (arrayPecas.includes(x) && x > 23) {
      //pecas recebe nome da classe como "pecasPretas"
      pecas.classList.add("pecasPretas");

      //se não for maior que 23
    } else {
      //pecas recebe nome da classe como "pecasBrancas"
      pecas.classList.add("pecasBrancas");
    }
  }

  // casa.addEventListener("mousedown", function (e) {
  //   switch (e.buttons) {
  //     case 1:
  //       pecas.remove();
  //       break;

  //     case 2:
  //       casa.append(pecas);
  //       break;
  //   }
  // });
}
//criando constante casas atraves de todas div com classe chamada "casa"
const casas = document.querySelectorAll(".casa");

//evento que atribui a classse  "dragging" quando estiver sendo arrastado
document.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragging");
});

//evento que remove a classe "dragging" quando soltar o item que estava sendo arrastado
document.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});

//para cada casa
casas.forEach((item) => {
  //adicionando o evento "dragover" que identidfica quando o item esta por cima desta casa
  item.addEventListener("dragover", (e) => {
    //const com o item que esta sendo movimentado
    const dragging = document.querySelector(".dragging");
    //chamando funçao que vai pegar a nova posiçao deste item
    const aplicarDepois = obterNovaPosiçao(item);

    if (aplicarDepois) {
      aplicarDepois.insertAdjacentElement("afterend", dragging);
    } else {
      item.prepend(dragging);
    }
  });
});

//funcao para obter nova posiçao
function obterNovaPosiçao(casas, item) {
  //const que vai pegar todos os item q nao estao sendo movimentados
  const pecas = casas.querySelectorAll(".peca:not(.dragging)");

  let result;

  // //pegando altura e posicao do item
  // for (let refer_peca of pecas) {
  //   const box = refer_peca.getBoundingClientRect();
  //   const boxCenterY = box.Y + box.height;

  // if (posY >= boxCenterY) {
  //   result = refer_peca;
  // }
  return result;
}

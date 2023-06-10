// Selecting elements and creating constants
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const telacinza = document.querySelector(".telacinza");
const btnReiniciar = document.getElementById("reiniciar");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const ar = [
  "dice-1.png",
  "dice-2.png",
  "dice-3.png",
  "dice-4.png",
  "dice-5.png",
  "dice-6.png",
];

////////////////////////////////////////////////////////////////

//New button event

btnNew.addEventListener("click", function () {
  iniciacao();
  playerActive(player0El, player1El);
});
////////////////////////////////////////////////////////////////

//Roll button event

btnRoll.addEventListener("click", function () {
  // block display
  diceEl.style.display = "block";
  scoreCurrent(player0El, player1El);
});

btnHold.addEventListener("click", function () {
  diceEl.style.display = "none";
  if (player0El.classList.contains("player--active")) {
    playerActive(player1El, player0El);
    score0El.textContent =
      parseInt(score0El.textContent) + parseInt(current0El.innerText);
  } else {
    playerActive(player0El, player1El);
    score1El.textContent =
      parseInt(score1El.textContent) + parseInt(current1El.innerText);
  }
  vencedor(score0El, score1El);
});

btnReiniciar.addEventListener("click", function () {
  telacinza.style.display = "none";
  iniciacao();
});

///////////////////////////////////////////////////////////////

//functions

function iniciacao() {
  score0El.textContent = "0";
  score1El.textContent = "0";
  current0El.textContent = "0";
  current1El.textContent = "0";
  diceEl.style.display = "none";
}
iniciacao();

////////////////////////////////////////////////////////////////

function randomar(ar) {
  return ar[Math.floor(Math.random() * ar.length)];
}

////////////////////////////////////////////////////////////////

function playerActive(player1, player2) {
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
}

function scoreCurrent(player1, player2) {
  //costant
  var imagem = randomar(ar);

  //conditions

  // condition for image 1
  if (player1.classList.contains("player--active") && imagem == "dice-1.png") {
    playerActive(player1El, player0El);
    current0El.textContent = "0";
  } else if (
    player2.classList.contains("player--active") &&
    imagem == "dice-1.png"
  ) {
    playerActive(player0El, player1El);
    current1El.textContent = "0";
  }
  // condition for image 2
  if (player1.classList.contains("player--active") && imagem == "dice-2.png") {
    current0El.textContent = "2";
  } else if (
    player2.classList.contains("player--active") &&
    imagem == "dice-2.png"
  ) {
    current1El.textContent = "2";
  }

  //condition for image 3
  if (player1.classList.contains("player--active") && imagem == "dice-3.png") {
    current0El.textContent = "3";
  } else if (
    player2.classList.contains("player--active") &&
    imagem == "dice-3.png"
  ) {
    current1El.textContent = "3";
  }

  //condition for image 4
  if (player1.classList.contains("player--active") && imagem == "dice-4.png") {
    current0El.textContent = "4";
  } else if (
    player2.classList.contains("player--active") &&
    imagem == "dice-4.png"
  ) {
    current1El.textContent = "4";
  }

  //condition for image 5

  if (player1.classList.contains("player--active") && imagem == "dice-5.png") {
    current0El.textContent = "5";
  } else if (
    player2.classList.contains("player--active") &&
    imagem == "dice-5.png"
  ) {
    current1El.textContent = "5";
  }

  //condition for image 6

  if (player1.classList.contains("player--active") && imagem == "dice-6.png") {
    current0El.textContent = "6";
  } else if (
    player2.classList.contains("player--active") &&
    imagem == "dice-6.png"
  ) {
    current1El.textContent = "6";
  }
  diceEl.src = imagem;
}

function vencedor(score0, score1) {
  //conditions

  if (score0.textContent == 21) {
    score0.textContent = "Ganhou";
    score1.textContent = "Perdeu";
    telacinza.style.display = "block";
  }

  if (score1.textContent == 21) {
    score1.textContent = "Ganhou";
    score0.textContent = "Perdeu";
    telacinza.style.display = "block";
  }

  if (score1.textContent > 21) {
    score1.textContent = "Excedeu";
    score0.textContent = "Ganhou";
    telacinza.style.display = "block";
  }

  if (score0.textContent > 21) {
    score0.textContent = " Excedeu";
    score1.textContent = "Ganhou";
    telacinza.style.display = "block";
  }
}

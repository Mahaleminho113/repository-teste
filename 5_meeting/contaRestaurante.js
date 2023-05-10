//Exemplo de botao deletar
// const divBoard = document.querySelector("#board");

// Aquecimento para proxima aula --  MODAL/POPUP
// const abrirModalButton = document.createElement("button");
// abrirModalButton.textContent = "Abrir Modal";
// const janelaModal = document.createElement("div");
// janelaModal.textContent = "janela modal";
// janelaModal.classList.add("modal");
// // janelaModal.classList.add("hidden");
// divBoard.appendChild(abrirModalButton);
// divBoard.appendChild(janelaModal);

// const arrayTest = ["primeiro", "segundo", "terceiro"];
// for (let count = 0; count < arrayTest.length; count++) {
//   const name = document.createElement("p");
//   name.textContent = arrayTest[count];
//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "delete";

//   deleteButton.addEventListener("click", function () {
//     name.remove();
//     deleteButton.remove();
//   });

//   divBoard.appendChild(name);
//   divBoard.appendChild(deleteButton);
// }

//-------------------------------lição-----------------------
/*
https://docs.google.com/presentation/d/1fTJYJxPOi5FLCLY1CsNVlFwF72v9Bh4pkaPyjh50Zf8/edit#slide=id.p

TUDO EM JAVASCRIPT
nome da comida ;
inserir valor das comidas ; SO NUMEROS
valor da comida tem que entrar no valor da conta *valordaconta[];

button delete deleta ultima comida e seu valor - DELETAR VALOR DOS DOIS ARRAYS

desafio -------------------------------------
quando fechar conta voce deve perguntar se tem certeza.
button SIM e button NAO
SIM fecha a conta e o programa nao responde mais
NAO nao faz nada.

Depois desse desafio vamos entrar com janela Modal/POPUP
// */
// const divBoard = document.querySelector("#board");
// const abrirModalButton = document.createElement("button");
// abrirModalButton.textContent = "Abrir Modal";
// const janelaModal = document.createElement("div");
// janelaModal.textContent = "janela modal";
// janelaModal.classList.add("modal");
// // janelaModal.classList.add("hidden");
// divBoard.appendChild(abrirModalButton);
// divBoard.appendChild(janelaModal);

// const arrayTest = ["primeiro", "segundo", "terceiro"];
// for (let count = 0; count < arrayTest.length; count++) {
//   const name = document.createElement("p");
//   name.textContent = arrayTest[count];
//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "delete";

//   deleteButton.addEventListener("click", function () {
//     name.remove();
//     deleteButton.remove();
//   });
//   divBoard.appendChild(name);
//   divBoard.appendChild(deleteButton);
// }

//criando as constantes----------------------------------

const container = document.querySelector(".container");
const input = document.createElement("input");
const nome = document.createElement("p");
const valor = document.createElement("p");
const inputValor = document.createElement("input");
const buttonInserir = document.createElement("button");
const pedido = document.createElement("h1");
const arrayValorInserido = [];

//inserindo class as const-------------------------------

buttonInserir.className = "button";
input.className = "input";
inputValor.className = "input";

//adicionando nome ao input------------------------------

nome.textContent = "Nome da comida";
valor.textContent = "Valor da comida";

//adicionando o texto ao button --------------------------

buttonInserir.textContent = "Inserir";

//inserindo texto para pedido----------------------------

pedido.textContent = "Pedido";

//loop para criar os inputs-------------------------------

// for (let countinputs = 0; countinputs < 2; countinputs++) {
//   let inputs = document.createElement("input");
//   inputs.className = "input";
//   container.appendChild(inputs);
// }

//adicionando os elementos criados no container----------
container.appendChild(nome);
container.appendChild(input);
container.appendChild(valor);
container.appendChild(inputValor);
container.appendChild(buttonInserir);
container.appendChild(pedido);

//criando functios----------------------------------------
function converterEmReal(valor) {
  return valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

// adicionando um evento ao buttonInserir-----------------

buttonInserir.addEventListener("click", function () {
  const pratoInserido = document.createElement("div");
  const valorPrato = document.createElement("div");

  container.appendChild(pratoInserido);
  pratoInserido.textContent = input.value;
  pratoInserido.className = "pratoInserido";
  container.appendChild(valorPrato);
  valorPrato.className = "valorPrato";
  valorPrato.textContent = inputValor.value;
});

//Exemplo de botao deletar
const divBoard = document.querySelector("#board");

//Aquecimento para proxima aula --  MODAL/POPUP
// const inputTest = document.createElement("input");
// const abrirModalButton = document.createElement("button");
// abrirModalButton.textContent = "Abrir Modal";
// const janelaModal = document.createElement("div");
// // janelaModal.textContent = "janela modal";
// // janelaModal.classList.add("modal");
// // janelaModal.classList.add("hidden");
// const arrayTest = [];
// divBoard.appendChild(inputTest);
// divBoard.appendChild(abrirModalButton);
// divBoard.appendChild(janelaModal);

// abrirModalButton.addEventListener("click", function () {
//   arrayTest.push(inputTest.value);

//   const name = document.createElement("p");
//   for (let count = 0; count < arrayTest.length; count++)
//     name.textContent = arrayTest[count];

//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "delete";

//   deleteButton.addEventListener("click", function () {
//     name.remove();
//     deleteButton.remove();
//   });

//   divBoard.appendChild(name);
//   divBoard.appendChild(deleteButton);
// });

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

// const container = document.querySelector(".container");
// const input = document.createElement("input");
// const nome = document.createElement("p");
// const valor = document.createElement("p");
// const inputValor = document.createElement("input");
// const buttonInserir = document.createElement("button");
// const pedido = document.createElement("h1");
// const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// //inserindo class as const-------------------------------

// buttonInserir.className = "button";
// input.className = "input";
// inputValor.className = "inputValor";

// //adicionando nome ao input------------------------------

// nome.textContent = "Nome da comida";
// valor.textContent = "Valor da comida";

// //adicionando o texto ao button --------------------------

// buttonInserir.textContent = "Inserir";

// //inserindo texto para pedido----------------------------

// pedido.textContent = "Pedido";

// //loop para criar os inputs-------------------------------

// // for (let countinputs = 0; countinputs < 2; countinputs++) {
// //   let inputs = document.createElement("input");
// //   inputs.className = "input";
// //   container.appendChild(inputs);
// // }

// //adicionando os elementos criados no container----------
// container.appendChild(nome);
// container.appendChild(input);
// container.appendChild(valor);
// container.appendChild(inputValor);
// container.appendChild(buttonInserir);
// container.appendChild(pedido);

// // adicionando um evento ao buttonInserir-----------------
// const arrayPedido = [];
// buttonInserir.addEventListener("click", function () {
//   arrayPedido.push(inputValor.value);

//   const pratoInserido = document.createElement("div");
//   const valorPrato = document.createElement("div");
//   //inserindo os valores dentro da div----------------------
//   container.appendChild(pratoInserido);
//   container.appendChild(valorPrato);
//   //adicionando class as const----------------------------
//   valorPrato.className = "valorPrato";
//   pratoInserido.className = "pratoInserido";
//   //inserindo os valores como texto na div---------------
//   pratoInserido.textContent = input.value;
//   valorPrato.textContent = "R$" + inputValor.value + ",00";

// });

//----------------------------- criando as constantes -------------------------------------------

const container = document.querySelector(".container");
const inputPrato = document.createElement("input");
const buttonInserir = document.createElement("button");
buttonInserir.textContent = "Inserir";
const inputValor = document.createElement("input");
const arrayPedido = [];

// ----------------------------- inserindo class as const ---------------------------------------

container.className = "container";
inputPrato.className = "input";
inputValor.className = "inputValor";
buttonInserir.className = "button";

//------------------------------ adicionando os elementos criados no container -------------------

container.appendChild(inputPrato);
container.appendChild(buttonInserir);
container.appendChild(inputValor);

//----------------------------- adicionando evento em buttonInserir---------------------------------

buttonInserir.addEventListener("click", function () {
  const divBoard = document.createElement("div");

  divBoard.className = "divBoard";

  arrayPedido.push(inputPrato.value + " R$" + inputValor.value);

  const name = document.createElement("div");

  //---------------------------- loop para imprimir  valor do array e para criar o button delete  -----

  for (let count = 0; count < arrayPedido.length; count++)
    name.textContent = arrayPedido[count];
  name.className = "pratoInserido";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";
  deleteButton.className = "deleteButton";

  container.appendChild(divBoard);
  deleteButton.addEventListener("click", function () {
    name.remove();
    deleteButton.remove();
    divBoard.remove();
  });

  divBoard.appendChild(name);

  divBoard.appendChild(deleteButton);
});

//Variables
const inputValue = document.querySelector("#inputValue");
const buttonInserir = document.querySelector("#buttonInserir");
const divValorInserido = document.querySelector("#divValorInserido");
const buttonGerarLista = document.querySelector("#buttonGerarLista");
const divLista = document.querySelector("#divLista");
const arrayLista = [];

//EventListeners
//Gera lista com valor inserido no inputValue
buttonInserir.addEventListener("click", function () {
  //variables
  var porcaria = document.createElement("p");
  arrayLista.push(inputValue.value);
  porcaria.textContent = inputValue.value;
  divValorInserido.appendChild(porcaria);
});
//Gerando lista de acordo com divValorInserido
buttonGerarLista.addEventListener("click", function () {
  for (let lista = 0; lista < arrayLista.length; lista++) {
    var listaDiv = document.createElement("h1");
    listaDiv.textContent = arrayLista[lista];
    divLista.appendChild(listaDiv);
  }
});

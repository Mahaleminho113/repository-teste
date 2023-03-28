const inputValue = document.querySelector("#inputValue");
const buttonInserir = document.querySelector("#buttonInserir");
const divValorInserido = document.querySelector("#divValorInserido");
const buttonGerarLista = document.querySelector("#buttonGerarLista");
const divLista = document.querySelector("#divLista");
const arrayLista = [];
buttonInserir.addEventListener("click", function () {
  arrayLista.push(inputValue.value);

  var porcaria = document.createElement("p");
  porcaria.textContent = inputValue.value;
  divValorInserido.appendChild(porcaria);

  //divValorInserido.textContent = arrayLista;

  // if (arrayLista.length > 0) {
  // }
  console.log(divValorInserido);
});

buttonGerarLista.addEventListener("click", function () {
  for (let lista = 0; lista < arrayLista.length; lista++) {
    var listaDiv = document.createElement("h1");
    listaDiv.textContent = arrayLista[lista];
    divLista.appendChild(listaDiv);
  }
});

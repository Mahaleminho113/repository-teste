"use strict";

const button = document.querySelector(".botao");
var className = document.body.className;
if (className == "tema-claro") {
  button.textContent = "Claro";
} else {
  button.textContent = "Escuro";
}

button.addEventListener("click", function () {
  document.body.classList.toggle("tema-escuro");

  var className = document.body.className;
  if (className == "tema-claro") {
    button.textContent = "Claro";
  } else {
    button.textContent = "Escuro";
  }
});

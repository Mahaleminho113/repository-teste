//var BrincandoComCSS = document.querySelector(".text");
//BrincandoComCSS.textContent = "Otacelio ";
//BrincandoComCSS.addEventListener("click", function () {
// BrincandoComCSS.textContent = "matheus";
//});
const button = document.querySelector(".button");
const array = ["otacelio", "vinicius", "matheus"];
// console.log(array[1]);
button.addEventListener("click", function () {
  //   console.log(array[0]);
  //   console.log(array[1]);
  //   console.log(array[2]);
  //   console.log(array[3]);
  //   console.log(array[4]);
  //     console.log(array[5]);
  // sinal de porcentagem mostra o resto de uma divisao
  //   var resto = 6 % 2;
  //   if (6 % 2 == 0) {
  //     console.log("par" + "--resto: " + 6 % 2);
  //   } else {
  //     console.log("impar" + "--resto: " + 6 % 2);
  //   }
  //imprimindo valores nas posicoes pares
  //   for (let contador = 0; contador < array.length; contador++) {
  //     if (contador % 2 == 0) {
  //       console.log(array[contador]);
  //     } else {
  //       console.log("impar");
  //     }
  //     // console.log(array[contador]);
  //     //console.log(array.length);
  //   }
  var telaPrincipal = document.querySelector(".telaPrincipal");

  setTimeout(console.log("Alteeração realizada com sucesso!!"), 5000);
  for (let contador = 0; contador < array.length; contador++) {
    var titulo = document.createElement("h1");
    titulo.textContent = array[contador];
    titulo.classList.add("style1");
    titulo.classList.add("style2");

    // titulo.className = "style1";
    // titulo.className = "style2";
    // titulo.style.backgroundColor = "blue";
    // titulo.style.fontSize = "25px";
    telaPrincipal.appendChild(titulo);
  }
});
// 0

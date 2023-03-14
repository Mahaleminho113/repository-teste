//conectando button1(variavel) com o html butao
// const button1 = document.querySelector(".test1")
// const input1 = document.querySelector(".input1")
// const text = document.querySelector(".text")

// input1.addEventListener('input',function(event){
// //  console.log(event.target.value)
//     text.textContent = event.target.value
//  })
// button1.addEventListener('click', function(){
//     alert(button1)

// })

//Acessando tipos de variaveis
//array
// const array = ["ponto0","ponto1","prapra",{objeto1: "lalala", objeto2: "blablabla"}]
// [0,1,2,3]
// console.log(array[3].objeto2)

//objeto
// const objeto = {objeto1: ["ponto0","ponto1","prapra","iuoiu"], objeto2: "tatata",objeto3: "lalala"}
// console.log(objeto.objeto1[3])

//text
// const text = 'Matheus'
// console.log(text[2])

//numero
// const numero = 4
// console.log(numero + 6)

// const button1 =document.querySelector(".test1")
// const input1 =document.querySelector('.input1')

// button1.addEventListener('click',function(){

//     // if(input1.value > 10){
//     //     console.log('maior que 10')
//     // }
//     // if(input1.value == 10){
//     //     console.log('igual 10')
//     // }
//     // if(input1.value < 10){
//     //     console.log('menor que 10')
//     // }
//     if(input1.value > 10){
//         console.log('maior que 10')
//     }else{
//         console.log('nao e maior que 10')
//     }

// })

// const button = document.querySelector(".test1")
// const input = document.querySelector(".input1")
// const text = document.querySelector(".text")

// button.addEventListener('click', function() {
//     const valorSecreto = 6
//     if(input.value > valorSecreto){
//         text.textContent = 'O numero secreto e menor que: ' + input.value
//     }else if(input.value == valorSecreto){
//         alert('Voce acertou, o numero secreto e: ' + valorSecreto)
//     }else{
//         text.textContent = 'O numero secreto e maior que: '+ input.value
//     }
// })

const array1 = ["", "", "", 6, ""];
const objeto1 = {
  va1: "",
  but: 6,
  va2: "",
  v21: "",
  top: "",
};
const array2 = ["", "", "", { objeto: 6 }, ""];
const objeto2 = {
  va1: "",
  but: ["", "", "", 6, ""],
  va2: "",
  v21: "",
  top: "",
};
const button1 = document.querySelector(".button1");
const input = document.querySelector(".input1");
const text = document.querySelector(".text");
const buttonReiniciar = document.getElementById("buttonReiniciar");
const tentativas = document.querySelector(".tentativas");
/*const letraA = "a";
const letraB = "b";
const letraC = "c";
const letraD = "d";
const letraE = "e";
const letraF = "f";
const letraG = "g";
const letraH = "h";
const letraI = "i";
const letraJ = "j";
const letraK = "k";
const letraL = "l";
const letraM = "m";
const letraN = "n";
const letraO = "o";
const letraP = "p";
const letraQ = "q";
const letraR = "r";
const letraS = "s";
const letraT = "t";
const letraU = "u";
const letraV = "v";
const letraW = "w";
const letraX = "x";
const letraY = "y";
const letraZ = "z";
*/
const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//
// const arrayFrutas = ["maca", "banana"];
// arrayFrutas.push("laranja");
// console.log(arrayFrutas.length);
const arrayTentativa = [];
let contadorTentativa = 3;
tentativas.textContent = "Tentativas: " + contadorTentativa;

buttonReiniciar.addEventListener("click", function () {
  arrayTentativa.length = 0;
  contadorTentativa = 3;
  tentativas.textContent = "Tentativas: " + contadorTentativa;
  input.value = "";
});
button1.addEventListener("click", function () {
  const secretoArray1 = array1[3]; // igual 6 do array
  arrayTentativa.push(input.value);
  //   contadorTentativa = contadorTentativa - 1;
  //   contadorTentativa -= 1;

  if (contadorTentativa > 0) {
    contadorTentativa--;
    tentativas.textContent = "Tentativas: " + contadorTentativa;
  }

  // console.log("Tentativas: " + contadorTentativa);

  //console.log("tamanho do array: " + arrayTentativa.length); // imprimindo tamanho
  // console.log("arrayTentativa: " + arrayTentativa); // imprimindo array

  if (arrayTentativa.length >= 3) {
    alert("muitas tentativas");
    text.textContent = "";
  } else {
    if (letras.indexOf(input.value) != -1) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    } else {
      if (input.value > secretoArray1) {
        text.textContent = "O Número Secreto é menor";
      } else if (input.value == secretoArray1) {
        alert("Parabéns! Você Acertou!");
        arrayTentativa.length = 0;
        contadorTentativa = 3;
        tentativas.textContent = "Tentativas: " + contadorTentativa;
        input.value = "";
      } else {
        text.textContent = "O Número Secreto é maior";
      }
      if (letras.indexOf(input.value) != -1) {
        alert("apenas numeros");
        arrayTentativa.length = 0;
        contadorTentativa = 3;
        tentativas.textContent = "Tentativas: " + contadorTentativa;
        input.value = "";
      }
    }
    /* if (input.value == letraA) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraB) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraC) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraD) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraE) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraF) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraG) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraH) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraI) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraJ) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraK) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraL) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraM) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraN) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraO) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraP) {
      alert("apenas numeros");
    }
    if (input.value == letraQ) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraR) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraS) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraT) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraU) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraV) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraW) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraX) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraY) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }
    if (input.value == letraZ) {
      alert("apenas numeros");
      arrayTentativa.length = 0;
      contadorTentativa = 3;
      tentativas.textContent = "Tentativas: " + contadorTentativa;
      input.value = "";
    }*/
  }

  input.value = "";

  //   const secretoObjeto1 = objeto1.but;
  //   const secretoArray2 = array2[3].objeto;
  //   const secretoObjeto2 = objeto2.but[3];
  //   console.log(secretoArray2);
  // const numeroSecreto=6
});

// //Nivel Dificil
// const array3 = ["", "", "", 35, ""];
// const objeto3 = {
//   va1: "",
//   but: 35,
//   va2: "",
//   v21: "",
//   top: "",
// };
// const array4 = ["", "", "", { objeto: 35 }, ""];
// const objeto4 = {
//   va1: "",
//   but: ["", "", "", 35, ""],
//   va2: "",
//   v21: "",
//   top: "",
// };
// const button2 = document.querySelector(".button2");
// const input2 = document.querySelector(".input2");
// const text2 = document.querySelector(".text2");
// button2.addEventListener("click", function () {
//   const secretoArray3 = array3[3];
//   const secretoObjeto3 = objeto3.but;
//   const secretoArray4 = array4[3].objeto;
//   const secretoObjeto4 = objeto4.but[3];

//   // console.log(secretoArray2)

//   // const numeroSecreto=6
//   if (input2.value > secretoArray3) {
//     text2.textContent = "O Número Secreto é menor";
//   } else if (input2.value == secretoArray3) {
//     alert("Parabéns! Você Acertou!");
//   } else {
//     text2.textContent = "O Número Secreto é maior";
//   }
// });
// atividades
// evento keydown
// evento keyup
// evento keypress
//só aceitar de 0 a 9
//link https://www.freecodecamp.org/portuguese/learn/javascript-algorithms-and-data-structures/#es6

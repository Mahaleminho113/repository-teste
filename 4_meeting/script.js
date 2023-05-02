//-----------------------------------------------------condições if e else----------------------------------------------------------------

// // const dia = "sexta";
// const dia = document.querySelector(".input");
// const analisar = document.getElementById("button");
// analisar.addEventListener("click", function () {
//   //   console.log(dia);

//   x = dia.value;
//   if (x == "segunda") {
//     console.log("planejando a semana");
//   } else if (x == "terça") {
//     console.log("preparando videos");
//   } else if (x == "quarta" || x == "quinta") {
//     console.log("folga");
//   } else if (x == "sabado" || x == "domingo") {
//     console.log("aproveite");
//   } else {
//     console.log("dia invalido");
//   }
// });

//-----------------------------------------------------condições switch case -------------------------------------------------------------

// // const dia = "sexta";
// const dia = document.querySelector(".input");
// const analisar = document.getElementById("button");
// analisar.addEventListener("click", function () {
//   //   console.log(dia);

//   switch (dia.value) {
//     case "segunda":
//       console.log("planejando a semana");
//       break;
//     case "terça":
//       console.log("preparando videos");
//       break;
//     case "quarta":
//     case "quinta":
//       console.log("folga");
//       break;
//     case "sabado":
//     case "domingo":
//       console.log("aproveite");
//       break;
//     default:
//       console.log("dia invalido");
//   }
// });

//-----------------------------------------------------otacelio exemplo interação array e objetos-----------------------------------------------

// const dia = document.querySelector(".input");
// const analisar = document.getElementById("button");
// analisar.addEventListener("click", function () {
//   var x = dia.value;

//   const inventory = [
//     { name: "segunda", atividade: "teste" },
//     { name: "terca", atividade: "trabalhar" },
//     { name: "quarta", atividade: "decansar" },
//   ];

//   //   function atividade(item) {
//   //     return item.name === x;
//   //   }

//   //result = inventory.find(atividade);

//   //if(result === undefined) result = 'invalido';

//   const result = inventory.find(({ name }) => name === x);

//   console.log(result);
// });

// // -----------------------------------------------------Functions ---------------------------------------------------------------

// function logger() {
//   console.log("My name is Jonas");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function frutas(maca, laranja) {
//   const juice = `Suco com ${maca} macas e ${laranja} laranja.`;
//   return juice;
// }

// console.log(frutas(3, 5));

// function frutas(maca, laranja) {
//   const juice = `Suco com ${maca} macas e ${laranja} laranja.`;
//   console.log(juice);
// }

// frutas(3, 5);

// function frutas(maca, laranja) {
//   const suco = `Suco com ${maca} macas e ${laranja} laranja.`;
//   return suco;
// }

// const sucoDeMaca = frutas(5, 0);
// console.log(sucoDeMaca);

// function quadrado(a, b) {
//   return a * a + 2 * (a * b) + b * b;
// }

// console.log(quadrado(3, 5));

// console.log(quadrado(2, 4));

// console.log(quadrado(7, 9));

// console.log(quadrado(8, 10));

// console.log(quadrado(6, 12));
// // console.log(2 * 2);

// function quadrado(a) {
//   return a ** 2;
// }

// function somar(a, b) {
//   return a + b;
// }

// function subtrair(a, b) {
//   return a - b;
// }

// function dividir(a, b) {
//   return a / b;
// }

// function equacao() {
//   return quadrado(4);
// }
// console.log(equacao());
// console.log(dividir(10, "a"));

// -----------------------------------------------------Arrow functions -----------------------------------------------------

// //funciton
// const calcularIdade = (anoNasc) => 2023 - anoNasc;
// //atribuindo valor da function a variavel.
// const idade = calcularIdade(1989);
// //imprimi valor da variavel
// console.log(idade);

//funciton
// const calcularIdade = (anoNasc) => {
//   return 2023 - anoNasc;
// };

// //atribuindo valor da function a variavel.
// const idade = calcularIdade(1989);
// //imprimi valor da variavel
// console.log(idade);

// const testeES6 = "test";

// // if inline
// const test = testeES6 == "teste" ? "sim" : "nao";

// // if (testeES6 == 'teste') {
// //     test = 'sim'

// // } else {
// //     test = 'nao'
// // }

// console.log(test);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ------------------------------------------------------Desafio de codificação #1-------------------------------------------------------

// function calcMedia(G1, G2, G3) {
//   return G1 + G2 + G3 / 3;
// }

// const mediaGolfinhos = calcMedia(44, 23, 71);
// const mediaCoalas = calcMedia(65, 54, 49);
// console.log();

// if (mediaGolfinhos > 2 * mediaCoalas) {
//   console.log("Vitória dos Golfinhos " + mediaGolfinhos + " vs " + mediaCoalas);
// } else if (mediaCoalas > 2 * mediaGolfinhos) {
//   console.log("Vitoria dos Coalas" + mediaGolfinhos + " vs " + mediaCoalas);
// } else {
//   console.log("empate");
// }

//-----------------------------------------Desafio calculadora---------------------------------------------------------------------------------------

// 1. Sua tarefa é calcular a gorjeta, dependendo do valor da conta. Crie uma variável chamada 'gorjeta' para isso.
// Não é permitido usar uma instrução if/else 😅 (Se for mais fácil para você, você pode começar com uma instrução if/else e depois
// tentar convertê-la em um operador ternário!)

// 2. Imprima uma string no console contendo o valor da conta, a gorjeta e o valor final (conta + gorjeta).

// Exemplo: 'A conta foi de 275, a gorjeta foi de 41,25 e o valor total foi de 316,25'

// DADOS DE TESTE: Teste para valores de notas 275, 40 e 430

// DICA: Para calcular 20% de um valor, basta multiplicá-lo por 20/100 = 0,2
// DICA: Valor X está entre 50 e 300, se for >= 50 && <= 300 😉

// // BOA SORTE 😀

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//------------------------------------------------------------Tentativa com if----------------------------------------------------------

// function calculoGorjeta1(valorDaconta) {
//   return valorDaconta * 0.15;
// }
// function calculoGorjeta2(valorDaconta2) {
//   return valorDaconta2 * 0.2;
// }

// var gorjeta;
// if (valorDaconta > 50 && valorDaconta <= 300) {
//   gorjeta = calculoGorjeta1(valorDaconta);
// } else {
//   gorjeta = calculoGorjeta2(valorDaconta);
// }
// console.log(gorjeta);

//-----------------------------------------------------TENTATIVA SEM IF ----------------------------------------------------------------------------

// function calcularGorjeta(valorDaconta) {
//   return valorDaconta * 0.15;
// }
// function calcularGorjeta2(valorDaconta) {
//   return valorDaconta * 0.2;
// }
// function calcularTotal(valorDaconta, gorjeta) {
//   return valorDaconta + gorjeta;
// }
// const valorDaconta = 100;
// var gorjeta = calcularGorjeta(valorDaconta);
// var totalDaConta = calcularTotal(valorDaconta, gorjeta);
// console.log(
//   "A conta foi de R$" +
//     valorDaconta +
//     ",00" +
//     " ,a gorjeta foi de R$" +
//     gorjeta +
//     ",00" +
//     " e o valor total foi de R$" +
//     totalDaConta +
//     ",00"
// );

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
// Os Golfinhos e os Coalas! Existe uma nova disciplina de ginástica, que funciona de forma diferente.
// Cada equipe compete 3 vezes e, em seguida, é calculada a média das 3 pontuações (portanto, uma pontuação média por equipe).
// Uma equipe SÓ vence se tiver pelo menos o DOBRO da pontuação média da outra equipe. Caso contrário, nenhuma equipe ganha!

// 1. Crie uma função de seta 'calcMedia' para calcular a média de 3 pontuações
// 2. Use a função para calcular a média de ambas as equipes
// 3. Crie uma função 'ganhador' que tome como parâmetro a pontuação média de cada equipe ('avgDolhins' e 'avgKoalas'), e então registre o vencedor no console, juntamente com os pontos de vitória, conforme regra acima. Exemplo: "Vitória dos Koalas (30 vs. 13)".
// 4. Use a função 'ganhador' para determinar o vencedor para DADOS 1 e DADOS 2.
// 5. Ignore os empates desta vez.

// DADOS DO TESTE 1: Golfinhos pontuam 44, 23 e 71. Coalas pontuam 65, 54 e 49
// DADOS DO TESTE 2: Golfinhos pontuam 85, 54 e 41. Coalas pontuam 23, 34 e 27

// DICA: Para calcular a média de 3 valores, some todos e divida por 3
// DICA: Para verificar se o número A é pelo menos o dobro do número B, verifique se A >= 2 * B. Aplique isso às pontuações médias da equipe 😉

// BOA SORTE 😀
// */

// const calcMedia = (G1, G2, G3) => (G1 + G2 + G3) / 3;
// const pontuacaoGolfinhos = calcMedia(44, 23, 71);
// const pontuacaoCoalas = calcMedia(65, 54, 49);

// function ganhador(mediaCoalas, mediaGolfinhos) {
//   if (mediaGolfinhos > 2 * mediaCoalas) {
//     console.log(
//       "Vitória dos Golfinhos " + mediaGolfinhos + " vs " + mediaCoalas
//     );
//   } else if (mediaCoalas > 2 * mediaGolfinhos) {
//     console.log("Vitoria dos Coalas" + mediaGolfinhos + " vs " + mediaCoalas);
//   } else {
//     console.log("empate");
//   }
// }
// ganhador(pontuacaoCoalas, pontuacaoGolfinhos);
// ganhador(10, 50);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//----------------------------------------------- Desafio calculadora---------------------------------------------------------------------------------------

// 1. Sua tarefa é calcular a gorjeta, dependendo do valor da conta. Crie uma variável chamada 'gorjeta' para isso.
// Não é permitido usar uma instrução if/else 😅 (Se for mais fácil para você, você pode começar com uma instrução if/else e depois
// tentar convertê-la em um operador ternário!)

// 2. Imprima uma string no console contendo o valor da conta, a gorjeta e o valor final (conta + gorjeta).

// Exemplo: 'A conta foi de 275, a gorjeta foi de 41,25 e o valor total foi de 316,25'

// DADOS DE TESTE: Teste para valores de notas 275, 40 e 430

// DICA: Para calcular 20% de um valor, basta multiplicá-lo por 20/100 = 0,2
// DICA: Valor X está entre 50 e 300, se for >= 50 && <= 300 😉

// // BOA SORTE 😀

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
//---------------criando as funções-------------------------
// function calcularGorjeta(valorDaconta) {
//   return valorDaconta * 0.15;
// }
// function calcularGorjeta2(valorDaconta) {
//   return valorDaconta * 0.2;
// }
// function calcularTotal(valorDaconta, gorjeta) {
//   return valorDaconta + gorjeta;
// }
function converterEmReal(valor) {
  return valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
// //------------------------criando as  variaveis ---------------------------
// const valorDaconta = 250;
// var gorjeta = calcularGorjeta(valorDaconta);
// var totalDaConta = calcularTotal(valorDaconta, gorjeta);
// //------------------------- if inline ----------------------------
// const calculoGorjeta =
//   valorDaconta > 50 && valorDaconta <= 300
//     ? (gorjeta = calcularGorjeta(valorDaconta))
//     : (gorjeta = calcularGorjeta2(valorDaconta));
// //------------------variavel do total da conta------------------------
// var totalDaConta = calcularTotal(valorDaconta, gorjeta);
// //--------------------imprimindo no console -----------------------
// console.log(
//   "A conta foi de " +
//     converterEmReal(valorDaconta) +
//     "" +
//     " ,a gorjeta foi de " +
//     converterEmReal(gorjeta) +
//     "" +
//     " e o valor total foi de " +
//     converterEmReal(totalDaConta) +
//     ""
// );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------- Desafio de codificação #4--------------------------------------------------------------------------------------------------------------------------------------------------------

// Matheus ainda está construindo sua calculadora de gorjetas, usando as mesmas regras de antes: gorjeta de 15% da conta se o valor da conta estiver entre 50 e 300, e se o valor for diferente, a gorjeta é de 20%.

// // 1. Escreva uma função 'calcTip' que receba qualquer valor de conta como entrada e retorne a gorjeta correspondente,
//  calculada com base nas regras acima(você pode verificar o código do primeiro desafio da calculadora de gorjetas, se precisar).
//   Use o tipo de função que você mais gosta. Teste a função usando um valor de nota de 100.
// 2. E agora vamos usar arrays! Portanto, crie uma matriz 'contas' contendo os dados de teste abaixo.
// 3. Crie um array 'gorjetas' contendo o valor da gorjeta para cada conta, calculado a partir da função que você criou anteriormente.
// 4. BÔNUS: Crie um array 'total' contendo os valores totais, ou seja, conta + gorjeta.

// DADOS DE TESTE: 125, 555 e 44

// DICA: Lembre-se de que um array precisa de um valor em cada posição e esse valor pode, na verdade, ser o valor retornado de uma função! Portanto, você pode simplesmente chamar uma função como valores de array (portanto, não armazene os valores de ponta em variáveis ​​separadas primeiro, mas diretamente no novo array) 😉

// BOA SORTE 😀
// */

// function calculoGorjeta1(valorDaConta) {
//   return valorDaConta * 0.15;
// }
// function calculoGorjeta2(valorDaConta) {
//   return valorDaConta * 0.2;
// }

// const valorDaConta = [125, 555, 44];
// const valorGorjetas = [
//   calculoGorjeta1(valorDaConta[0]),
//   calculoGorjeta2(valorDaConta[1]),
//   calculoGorjeta2(valorDaConta[2]),
// ];
// const totais = [
//   valorDaConta[0] + valorGorjetas[0],
//   valorDaConta[1] + valorGorjetas[1],
//   valorDaConta[2] + valorGorjetas[2],
// ];
// console.log(
//   "valor da conta 1 R$" +
//     valorDaConta[0] +
//     ".00 . Valor da gorjeta R$ " +
//     valorGorjetas[0] +
//     ".Valor total da conta 1 R$" +
//     totais[0]
// );
// console.log(
//   "valor da conta 2 R$" +
//     valorDaConta[1] +
//     ".00 .Valor da gorjeta R$ " +
//     valorGorjetas[1] +
//     " .Valor total da conta 2 R$" +
//     totais[1] +
//     ".00"
// );
// console.log(
//   "valor da conta 3 R$" +
//     valorDaConta[2] +
//     ".00 .Valor da gorjeta R$ " +
//     valorGorjetas[2] +
//     " .Valor total da conta 3 R$" +
//     totais[2]
// );

function converterEmReal(valor) {
  return valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

const calcGorjeta = (valorDaConta) =>
  valorDaConta > 50 && valorDaConta <= 300
    ? valorDaConta * 0.15
    : valorDaConta * 0.2;

const valorDaConta = [125, 555, 44, 888, 10, 500];
const totais = [];
const valorGorjetas = [];

for (let contador = 0; contador < valorDaConta.length; contador++) {
  valorGorjetas.push(calcGorjeta(valorDaConta[contador]));
  totais.push(valorDaConta[contador] + valorGorjetas[contador]);
  console.log(
    "valor da conta " +
      (contador + 1) +
      " " +
      converterEmReal(valorDaConta[contador]) +
      " .Valor da gorjeta " +
      converterEmReal(valorGorjetas[contador]) +
      " .Valor total da conta  " +
      (contador + 1) +
      " " +
      converterEmReal(totais[contador])
  );
}

/////////////////////////////////////////////////////////////////////////////
//-------------------------------lição-----------------------
/*
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


*/

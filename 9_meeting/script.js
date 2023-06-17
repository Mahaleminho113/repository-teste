// //costantes marcas
// const telaPrincipal = document.querySelector(".tela1");
// const buttonHonda = document.querySelector(".buttonHonda");
// const buttonFord = document.querySelector(".buttonFord");
// const buttonNissan = document.querySelector(".buttonNissan");
// const buttonFiat = document.querySelector(".buttonFiat");
// const buttonToyota = document.querySelector(".buttonToyota");

// //constantes tela1 da honda
// const telaHonda = document.querySelector(".telaHonda");
// const btnMotocicletas = document.querySelector(".motocicletas");
// const btnAutomoveis = document.querySelector(".automoveis");
// const btnMotores = document.querySelector(".motores");

// //constantes tela1 da ford
// const telaFord = document.querySelector(".telaFord");
// const btnVeiculos = document.querySelector(".veiculos");
// const btnOfertas = document.querySelector(".ofertas");
// const btnComprarFord = document.querySelector(".comprarFord");
// const btnServicos = document.querySelector(".servicos");

// //constantes tela1 da nissan
// const telaNissan = document.querySelector(".telaNissan");
// const btnVeiculosNovos = document.querySelector(".veiculosNovos");
// const btnVendaDireta = document.querySelector(".vendaDireta");
// const btnAcessorios = document.querySelector(".acessorios");

// //constantes tela1 da Fiat
// const telaFiat = document.querySelector(".telaFiat");
// const btnModelos = document.querySelector(".modelos");
// const btnComprarFiat = document.querySelector(".comprarFiat");
// const btnMundoFiat = document.querySelector(".mundoFiat");
// const ImgFiat = document.querySelector(".imagensFiat");

// //constantes tela1 da Toyota
// const telaToyota = document.querySelector(".telaToyota");

// //const obj
// // const telaObj = {
// //   tela1: [telaHonda],
// //   tela2: [telaFord],
// //   tela3: [telaNissan],
// //   tela4: [telaFiat],
// //   tela5: [telaToyota],
// // };
// function iniciaçao() {
//   telaHonda.style.display = "none";
//   telaFord.style.display = "none";
//   telaNissan.style.display = "none";
//   telaFiat.style.display = "none";
//   telaToyota.style.display = "none";
//   ImgFiat.style.display = "none";
// }
// iniciaçao();

// function displayBlock(tela) {
//   tela.style.display = "block";
//   telaPrincipal.style.display = "none";
// }

// buttonHonda.addEventListener("click", function () {
//   displayBlock(telaHonda);
// });

// const obj = {
//   carro1: {
//     titulo: "carro1, turbo, diesel",
//     descricao: "carro de viado",
//     imgSRC: "./ajjdkifj",
//   },
//   carro2: {
//     titulo: "carro1, turbo, diesel",
//     descricao: "carro de viado",
//     imgSRC: "./ajjdkifj",
//   },
// };

// obj[carro1][titulo] = "carro1, turbo, diesel";
// /**
//  * menu
//  * titulo
//  * input + button
//  * pagina inicial com todos os carros
//  *
//  * Functions
//  *
//  * quando pesquisar carro mostra so 1 carro
//  * so mostre descricao quando apertar buttonMostrar
//  *
//  *
//  */

// const carro1 = document.querySelector(".carro1");

const array = ["NEW 500", "SOO", "PANDA", "ULYSSE", "CONCEPT", "TIPO"];
const objetos = {
  telaFiat: document.querySelector(".telaFiat"),
  divLista: document.querySelector(".lista"),
  carro1: document.querySelector(".carro1"),
  carro2: document.querySelector(".carro2"),
  carro3: document.querySelector(".carro3"),
  carro4: document.querySelector(".carro4"),
  carro5: document.querySelector(".carro5"),
  carro6: document.querySelector(".carro6"),
};

//loop para criar os butons e nomear e add class de acordo com o array
for (let x = 0; x < 6; x++) {
  let lista = document.createElement("button");
  lista.textContent = array[x];
  objetos.divLista.appendChild(lista);
  lista.classList = array[x];
}

//constates  dos butons criados
const btnNew = document.querySelector(".NEW");
const btnSoo = document.querySelector(".SOO");
const btnPanda = document.querySelector(".PANDA");
const btnUlisse = document.querySelector(".ULYSSE");
const btnConcept = document.querySelector(".CONCEPT");
const btnTipo = document.querySelector(".TIPO");

////////////////////////////////////////////////////////////////////////////

//Eventos

//Evento btnNew
btnNew.addEventListener("click", function () {
  none(objetos.carro1);
  criarButton(objetos.carro1);
});

//Evento btnSoo
btnSoo.addEventListener("click", function () {
  none(objetos.carro2);
  criarButton(objetos.carro2);
});

//Evento btnPanda
btnPanda.addEventListener("click", function () {
  none(objetos.carro3);
  criarButton(objetos.carro3);
});

//Evento btnUlisse
btnUlisse.addEventListener("click", function () {
  none(objetos.carro4);
  criarButton(objetos.carro4);
});

//Evento btnConcept
btnConcept.addEventListener("click", function () {
  none(objetos.carro5);
  criarButton(objetos.carro5);
});

//Evento btnTipo
btnTipo.addEventListener("click", function () {
  none(objetos.carro6);
  criarButton(objetos.carro6);
});

//////////////////////////////////////////////////////////////////////////////////

//functions

function criarButton(carro) {
  btnVoltar = document.createElement("button");
  btnVoltar.textContent = "voltar";
  carro.appendChild(btnVoltar);
  btnVoltar.addEventListener("click", function () {
    carro.style.display = "none";
    objetos.telaFiat.style.display = "block";
    carro.removeChild(btnVoltar);
  });
}

function none(carro) {
  carro.style.display = "block";
  objetos.telaFiat.style.display = "none";
}

function iniciaçao() {
  carro1.style.display = "none";
  carro2.style.display = "none";
  carro3.style.display = "none";
  carro4.style.display = "none";
  carro5.style.display = "none";
  carro6.style.display = "none";
}

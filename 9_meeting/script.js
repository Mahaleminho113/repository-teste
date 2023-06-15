//costantes marcas
const telaPrincipal = document.querySelector(".tela1");
const buttonHonda = document.querySelector(".buttonHonda");
const buttonFord = document.querySelector(".buttonFord");
const buttonNissan = document.querySelector(".buttonNissan");
const buttonFiat = document.querySelector(".buttonFiat");
const buttonToyota = document.querySelector(".buttonToyota");

//constantes tela1 da honda
const telaHonda = document.querySelector(".telaHonda");
const btnMotocicletas = document.querySelector(".motocicletas");
const btnAutomoveis = document.querySelector(".automoveis");
const btnMotores = document.querySelector(".motores");

//constantes tela1 da ford
const telaFord = document.querySelector(".telaFord");
const btnVeiculos = document.querySelector(".veiculos");
const btnOfertas = document.querySelector(".ofertas");
const btnComprarFord = document.querySelector(".comprarFord");
const btnServicos = document.querySelector(".servicos");

//constantes tela1 da nissan
const telaNissan = document.querySelector(".telaNissan");
const btnVeiculosNovos = document.querySelector(".veiculosNovos");
const btnVendaDireta = document.querySelector(".vendaDireta");
const btnAcessorios = document.querySelector(".acessorios");

//constantes tela1 da Fiat
const telaFiat = document.querySelector(".telaFiat");
const btnModelos = document.querySelector(".modelos");
const btnComprarFiat = document.querySelector(".comprarFiat");
const btnMundoFiat = document.querySelector(".mundoFiat");
const ImgFiat = document.querySelector(".imagensFiat");

//constantes tela1 da Toyota
const telaToyota = document.querySelector(".telaToyota");

//const obj
// const telaObj = {
//   tela1: [telaHonda],
//   tela2: [telaFord],
//   tela3: [telaNissan],
//   tela4: [telaFiat],
//   tela5: [telaToyota],
// };
function iniciaçao() {
  telaHonda.style.display = "none";
  telaFord.style.display = "none";
  telaNissan.style.display = "none";
  telaFiat.style.display = "none";
  telaToyota.style.display = "none";
  ImgFiat.style.display = "none";
}
iniciaçao();

function displayBlock(tela) {
  tela.style.display = "block";
  telaPrincipal.style.display = "none";
}

buttonHonda.addEventListener("click", function () {
  displayBlock(telaHonda);
});

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

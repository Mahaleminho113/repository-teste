function iniciar() {
  //minhas constantes //
  const div_tabuleiro = document.createElement("div");
  document.querySelector("body").appendChild(div_tabuleiro);
  div_tabuleiro.className = "divTabuleiro";
  for (casa = 1; casa <= 64; casa++) {
    const div_casas = document.createElement("div");
    div_casas.className = "casa " + casa;
    div_casas.classList.add("casas");

    div_tabuleiro.appendChild(div_casas);
  }

  const casas_Brancas = document.createElement("div");
  const casas_Pretas = document.createElement("div");
  const casas_Pecas_jogador1 = document.createElement("div");
  const casas_Pecas_jogador2 = document.createElement("div");
  const pecas_Brancas = document.createElement("div");
  const pecas_Pretas = document.createElement("div");

  div_casas.append(casas_Brancas, casas_Pretas);
}

iniciar();

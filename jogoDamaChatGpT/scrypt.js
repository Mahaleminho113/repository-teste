document.addEventListener("DOMContentLoaded", function () {
  const tabuleiro = document.querySelector(".tabuleiro");
  const pecas = document.querySelectorAll(".peca");
  let pecaSelecionada = null;

  // Adiciona evento de clique para selecionar peça
  tabuleiro.addEventListener("click", function (event) {
    const casa = event.target.closest(".casa");
    if (!casa || !casa.querySelector(".peca")) {
      return;
    }
    if (pecaSelecionada) {
      moverPeca(casa);
    } else {
      selecionarPeca(casa);
    }
  });

  // Função para selecionar peça
  function selecionarPeca(casa) {
    const peca = casa.querySelector(".peca");
    pecaSelecionada = peca;
    peca.classList.add("peca-selecionada");
  }

  // Função para mover peça
  function moverPeca(casaDestino) {
    const casaOrigem = pecaSelecionada.closest(".casa");
    const linhaOrigem = parseInt(casaOrigem.dataset.linha);
    const colunaOrigem = parseInt(casaOrigem.dataset.coluna);
    const linhaDestino = parseInt(casaDestino.dataset.linha);
    const colunaDestino = parseInt(casaDestino.dataset.coluna);
    const distanciaLinha = Math.abs(linhaDestino - linhaOrigem);
    const distanciaColuna = Math.abs(colunaDestino - colunaOrigem);

    if (
      distanciaLinha === 1 &&
      distanciaColuna === 1 &&
      !casaDestino.querySelector(".peca")
    ) {
      casaDestino.appendChild(pecaSelecionada);
    } else if (distanciaLinha === 2 && distanciaColuna === 2) {
      const linhaCaptura = (linhaOrigem + linhaDestino) / 2;
      const colunaCaptura = (colunaOrigem + colunaDestino) / 2;
      const casaCaptura = document.querySelector(
        `.casa[data-linha="${linhaCaptura}"][data-coluna="${colunaCaptura}"]`
      );
      if (casaCaptura && casaCaptura.querySelector(".peca")) {
        casaCaptura.removeChild(casaCaptura.firstChild);
        casaDestino.appendChild(pecaSelecionada);
      }
    }

    pecaSelecionada.classList.remove("peca-selecionada");
    pecaSelecionada = null;
  }
});

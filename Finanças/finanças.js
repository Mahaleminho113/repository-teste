// Criando a tabela
const tabela = document.createElement("table");

// Definindo o estilo para a tabela e as células
// tabela.style.borderCollapse = "collapse"; // Para as bordas da tabela não ficarem duplicadas

// Loop para criar as 10 linhas
for (let i = 0; i < 10; i++) {
  const linhas = document.createElement("tr"); // Cria uma nova linha

  // Loop para criar as 10 colunas (células)
  for (let j = 0; j < 1; j++) {
    const input = document.createElement("input"); // Cria uma célula
    // input.style.border = "1px solid black"; // Borda da célula
    input.style.width = "55px"; // Largura da célula
    input.style.height = "10px"; // Altura da célula
    linhas.appendChild(input); // Adiciona a célula à linha
  }

  tabela.appendChild(linhas); // Adiciona a linha à tabela
}

// Adicionando a tabela ao corpo do documento (body)
document.body.appendChild(tabela);

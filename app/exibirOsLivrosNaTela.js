const elementoParaInserirLivros = document.querySelector("#livros");
const elementoValorTotalDosLivrosDisponiveis = document.querySelector(
  "#valor_total_livros_disponiveis"
);

function exibirOsLivrosNaTela(listaDeLivros) {
  elementoValorTotalDosLivrosDisponiveis.innerHTML = "";
  elementoParaInserirLivros.innerHTML = "";
  listaDeLivros.forEach((livro) => {
    let disponibilidade =
      livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
    elementoParaInserirLivros.innerHTML += `
    <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${
      livro.alt
    }" />
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco
        .toFixed(2)
        .replace(".", ",")}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `;
  });
}

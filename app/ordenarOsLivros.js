const botaoOrdenarPorPreco = document.querySelector("#btnOrdenarPorPreco");

botaoOrdenarPorPreco.addEventListener("click", ordenarLivroPorPreco);

function ordenarLivroPorPreco() {
  const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirOsLivrosNaTela(livrosOrdenados);
}

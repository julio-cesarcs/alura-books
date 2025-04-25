function calcularValorTotalDosLivrosDisponiveis(livros) {
  let valorTotal = livros
    .reduce((acc, livro) => acc + livro.preco, 0)
    .toFixed(2)
    .replace(".", ",");
  return valorTotal;
}

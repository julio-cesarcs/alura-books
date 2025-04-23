const botaoLivrosDisponiveis = document.querySelector("#btnLivrosDisponiveis");

botaoLivrosDisponiveis.addEventListener("click", exibirOsLivrosDisponiveis)

function exibirOsLivrosDisponiveis() {
  const indisponivel = 0;
  const livrosDisponiveis = livros.filter((livro) =>livro.quantidade > indisponivel);
  exibirOsLivrosNaTela(livrosDisponiveis);
}

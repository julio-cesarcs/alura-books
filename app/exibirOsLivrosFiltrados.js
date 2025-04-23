const botoesFiltrarLivros = document.querySelectorAll(".btn");

botoesFiltrarLivros.forEach((botao) =>
  botao.addEventListener("click", exibirOsLivrosFiltrados)
);

function exibirOsLivrosFiltrados() {
  const elementoBtn = document.getElementById(this.id);
  const filtro = elementoBtn.value;
  let livrosFiltrados = livros.filter((livro) => livro.categoria === filtro);
  exibirOsLivrosNaTela(livrosFiltrados);
}

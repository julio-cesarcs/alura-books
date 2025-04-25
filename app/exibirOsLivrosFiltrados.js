const botoesFiltrarLivros = document.querySelectorAll(".btn");

botoesFiltrarLivros.forEach((botao) =>
  botao.addEventListener("click", exibirOsLivrosFiltrados)
);

function exibirOsLivrosFiltrados() {
  const elementoBtn = document.getElementById(this.id);
  const filtro = elementoBtn.value;
  let livrosFiltrados =
    filtro === "disponivel"
      ? exibirPorDisponibilidade()
      : ExibirPorCategoria(filtro);
  exibirOsLivrosNaTela(livrosFiltrados);
  if (filtro === "disponivel") {
    const valorTotal = calcularValorTotalDosLivrosDisponiveis(livrosFiltrados);
    exibirValorTotalDosLivrosDisponiveis(valorTotal)
  }
}

function ExibirPorCategoria(filtro) {
  return livros.filter((livro) => livro.categoria === filtro);
}

function exibirPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal) {
  elementoValorTotalDosLivrosDisponiveis.innerHTML = `   
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `;
}

function createBoard() {
  let linhas = 5;
  let colunas = 5;
  for (let criaLinhas = 0; criaLinhas < linhas; criaLinhas += 1) {
    let line = document.querySelectorAll('.line-pixel')[criaLinhas];
    for (let criaColunas = 0; criaColunas < colunas; criaColunas += 1) {
      let divBox = document.createElement('div');
      divBox.className = 'pixel';
      line.appendChild(divBox);
    }
  }
}
createBoard();

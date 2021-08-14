// CRIA QUADRO DE CORES

function createBoard() {
  const table = document.getElementById('pixel-board');
  const linhas = 5;
  const colunas = 5;

  for (let linhaAtual = 0; linhaAtual < linhas; linhaAtual += 1) {
    const divRow = document.createElement('div');
    divRow.className = 'lines';
    for (let criaColunas = 0; criaColunas < colunas; criaColunas += 1) {
      const divBox = document.createElement('div');
      divBox.className = 'pixel';
      divRow.appendChild(divBox);
    }
    table.appendChild(divRow);
  }
}
createBoard();

function corInicial() {
  const black = document.querySelector('.black');

  black.className += ' selected';
}
corInicial();

function removeAdicionaSelector(event) {
  const selected = document.querySelector('.selected');
  const corNova = event.target;

  selected.classList.remove('selected');
  corNova.className += ' selected';
}

function allBox() {
  const tabelaCores = document.querySelectorAll('.color');

  for (let index = 0; index < tabelaCores.length; index += 1) {
    tabelaCores[index].addEventListener('click', removeAdicionaSelector);
  }
}
allBox();

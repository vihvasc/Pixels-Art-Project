// const paletaDeCores = document.createElement('div');
// paletaDeCores.id = 'color-palette';
// document.body.appendChild(paletaDeCores);

// for (let index = 0; index < cores.length; index += 1) {
//   const novaCor = document.createElement('div');
//   novaCor.className = 'color';
//   paletaDeCores.appendChild(novaCor);
// }

const cores = ['black', 'yellow', 'pink', 'brown'];

function atribuiCores() {
  const quadrado = document.getElementsByClassName('color');
  for (let index = 0; index < cores.length; index += 1) {
    quadrado[index].style.backgroundColor = cores[index];
  }
  quadrado[0].classList.add('selected');
}

const pegaTudo = document.getElementsByTagName('body');
const boardSize = 5;

function geraQuadradao() {
  const board = document.createElement('div');
  board.id = 'pixel-board';

  for (let linha = 0; linha < boardSize; linha += 1) {
    const contLinha = document.createElement('div');
    contLinha.className = 'grid-line';
    for (let coluna = 0; coluna < boardSize; coluna += 1) {
      const contColuna = document.createElement('div');
      contColuna.className = 'pixel';

      contLinha.appendChild(contColuna);
    }
    board.appendChild(contLinha);
  }
  pegaTudo[0].appendChild(board);
}

window.onload = function () {
  atribuiCores();
  geraQuadradao();
};
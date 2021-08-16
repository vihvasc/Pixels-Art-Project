const cores = ['black', 'yellow', 'pink', 'brown'];

// coloca cores nos quadrados criados
// mantém o preto como selecionado
const quadrado = document.getElementsByClassName('color');

function atribuiCores() {
  for (let index = 0; index < cores.length; index += 1) {
    quadrado[index].style.backgroundColor = cores[index];
  }
  quadrado[0].classList.add('selected');
}

const pegaTudo = document.getElementsByTagName('body');
const boardSize = 5;

// monta o quadradão
function geraQuadradao() {
  const board = document.createElement('div');
  board.id = 'pixel-board';
  for (let index = 0; index < boardSize; index += 1) {
    const linhaQuadradao = document.createElement('div');
    linhaQuadradao.className = 'grid-line';
    for (let coluna = 0; coluna < boardSize; coluna += 1) {
      const colunaQuadradao = document.createElement('div');
      colunaQuadradao.className = 'pixel';
      linhaQuadradao.appendChild(colunaQuadradao);
    }
    board.appendChild(linhaQuadradao);
  }
  pegaTudo[0].appendChild(board);
}

let corEscolhida = 'rgba(0,0,0)';
quadrado[0].style.backgroundColor = corEscolhida;

function escolheCor(event) {
  const novaCor = getComputedStyle(event.target);
  for (let index = 0; index < quadrado.length; index += 1) {
    const item = quadrado[index];
    item.classList.remove('selected');
  }
  event.target.classList.add('selected');
  corEscolhida = novaCor.backgroundColor;
}

function adicionaCorNaPaleta() {
  quadrado[0].classList.add('selected');
  for (let index = 0; index < quadrado.length; index += 1) {
    quadrado[index].style.backgroundColor = cores[index];
    quadrado[index].addEventListener('click', escolheCor);
  }
}

window.onload = function () {
  atribuiCores();
  geraQuadradao();
  adicionaCorNaPaleta();
};

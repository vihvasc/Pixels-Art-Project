const pixelBoard = document.getElementById('pixel-board');

for (let index = 0; index < 5; index += 1) {
  const line = document.createElement('div');
  line.className = 'line';
  for (let index2 = 0; index2 < 5; index2 += 1) {
    const divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    pixelBoard.appendChild(line);
    line.appendChild(divPixel);
  }
}

const blackColor = document.getElementById('black');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');

function addClass(event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
}

blackColor.addEventListener('click', addClass);
color1.addEventListener('click', addClass);
color2.addEventListener('click', addClass);
color3.addEventListener('click', addClass);

// função que altera cor
function colorir(event) {
  const corSelecionada = document.querySelector('.selected');
  const corSelecionadaCss = window.getComputedStyle(corSelecionada);
  const eventclick = event.target;

  if (eventclick.className === 'pixel') {
    eventclick.style.backgroundColor = corSelecionadaCss.backgroundColor;
  }
}

pixelBoard.addEventListener('click', colorir);

// função para limpar a mesa
const buttonClear = document.getElementById('clear-board');

function clearBoard() {
  const allPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    const pixel = allPixels[index];
    pixel.style.backgroundColor = 'white';
  }
}

buttonClear.addEventListener('click', clearBoard);

// cria pixel board
const input = document.getElementById('board-size');
const vqv = document.getElementById('generate-board');

function createBoard(boardSize) {
  pixelBoard.innerText = '';
  for (let index = 0; index < boardSize; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    for (let index2 = 0; index2 < boardSize; index2 += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      pixelBoard.appendChild(line);
      line.appendChild(divPixel);
    }
  }
}

function createPixel() {
  const boardSize = input.valueAsNumber;
  if (boardSize < 5) {
    createBoard(5);
  } else if (boardSize > 50) {
    createBoard(50);
  } else if (boardSize > 4) {
    createBoard(boardSize);
  } else {
    alert('Board inválido!');
  }
}

vqv.addEventListener('click', createPixel);

// função para colocar cor aleatoria

function gerarCor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}

color1.style.backgroundColor = gerarCor();
color2.style.backgroundColor = gerarCor();
color3.style.backgroundColor = gerarCor();

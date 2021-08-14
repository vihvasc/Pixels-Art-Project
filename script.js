// Cria a paleta de cores.
const colorPallet = document.createElement('div');
colorPallet.id = 'color-palette';
document.body.appendChild(colorPallet);
const numberOfColors = 4;
for (let i = 0; i < numberOfColors; i += 1) {
  const newDiv = document.createElement('div');
  newDiv.className = 'color';
  colorPallet.appendChild(newDiv);
}

const colorBox = document.getElementsByClassName('color');

// Gera cores aleatórias
function generateRandomColor() {
  const values = '0123456789ABCDEF';
  let randomColor = '#';
  for (let i = 0; i < 6; i += 1) {
    randomColor += values[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}

const colorSample = ['Black'];

for (let i = 0; i < 3; i += 1) {
  colorSample.push(generateRandomColor());
}

for (let i = 0; i < colorBox.length; i += 1) {
  colorBox[i].style.background = colorSample[i];
}
const pixel = document.getElementsByClassName('pixel');

// Cria o botão de Limpar o quadro.
function reset() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.background = 'white';
  }
}
const resetBtn = document.createElement('button');
resetBtn.addEventListener('click', reset);
resetBtn.id = 'clear-board';
resetBtn.innerText = 'Limpar';
document.body.appendChild(resetBtn);

// Cria o botão e imput para definir o tamanho do quadro.
const input = document.createElement('input');
input.id = 'board-size';
input.placeholder = 'Número de pixels';
input.type = 'number';
input.min = '1';
document.body.appendChild(input);

const generateBoardBtn = document.createElement('button');
generateBoardBtn.id = 'generate-board';
generateBoardBtn.innerText = 'VQV';
document.body.appendChild(generateBoardBtn);
let boardSize = 5;
const pboard = 'pixel-board';

// Cria o quadro de pixels.
function createBoardDiv() {
  const pixelBoard = document.createElement('div');
  pixelBoard.id = pboard;
  document.body.appendChild(pixelBoard);
}
createBoardDiv();

function createBoardLines() {
  if (boardSize < 5) {
    boardSize = 5;
  }
  if (boardSize > 50) {
    boardSize = 50;
  }
  for (let i = 0; i < boardSize; i += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    const pixelBoard = document.getElementById(pboard);
    pixelBoard.appendChild(pixelLine);
  }
}
createBoardLines();
const pixelLine = document.getElementsByClassName('pixel-line');

function createBoardColums() {
  if (boardSize < 5) {
    boardSize = 5;
  }
  if (boardSize > 50) {
    boardSize = 50;
  }
  for (let i = 0; i < boardSize; i += 1) {
    for (let n = 0; n < boardSize; n += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      pixelLine[n].appendChild(newPixel);
    }
  }
}
createBoardColums();

function createBoard() {
  const oldPixelBoard = document.getElementById(pboard);
  if (oldPixelBoard != null) {
    oldPixelBoard.remove();
  }
  boardSize = input.value;
  if (boardSize === '') {
    window.alert('Board inválido!');
  }
  if (boardSize < 5) {
    boardSize = 5;
  }
  if (boardSize > 50) {
    boardSize = 50;
  }
  createBoardDiv();
  createBoardLines();
  createBoardColums();
}

generateBoardBtn.addEventListener('click', createBoard);

// Função que seleciona a cor a ser aplicada.
function selectColor(event) {
  const oldCOlor = document.getElementsByClassName('selected');
  oldCOlor[0].classList.remove('selected');
  const eventTarget = event.target;
  eventTarget.classList = 'color selected';
}

const color = document.getElementsByClassName('color');
for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', selectColor);
}

color[0].classList = 'color selected';

// Função que aplica a cor selecionada.
function applyColor(event) {
  const selectedColorPallet = document.querySelectorAll('.selected')[0];
  const selectedColor = selectedColorPallet.style.background;
  const eventTarget = event.target;
  eventTarget.style.background = selectedColor;
}

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', applyColor);
}

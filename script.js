const board = document.getElementById('pixel-board');
const colors = document.getElementsByClassName('color');
const buttom = document.getElementById('clear-board');
const vqvButtom = document.getElementById('generate-board');

function changeColor(event) {
  const bColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = bColor;
}

function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function makePixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.addEventListener('click', changeColor);
  return pixel;
}

function inputBoardSize() {
  const boardSize = document.getElementById('board-size');
  if (boardSize.value === '') {
    alert('Board inválido!');
  }
  if (boardSize.value < 5) {
    boardSize.value = 5;
  }
  if (boardSize.value > 50) {
    boardSize.value = 50;
  }

  return boardSize.value;
}

function makePixelBoard(boardSize) {
  for (let index = 0; index < boardSize; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    board.appendChild(line);
    for (let i = 0; i < boardSize; i += 1) {
      line.appendChild(makePixel());
    }
  }
}

function generateBoard() {
  const lines = board.childNodes.length;
  for (let i = 0; i < lines; i += 1) {
    board.removeChild(board.firstChild);
  }
  makePixelBoard(inputBoardSize());
}

function clearBoard() {
  const pixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

buttom.addEventListener('click', clearBoard);

vqvButtom.addEventListener('click', generateBoard);

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', selectColor);
}

window.onload = function initial() {
  makePixelBoard(5);
};

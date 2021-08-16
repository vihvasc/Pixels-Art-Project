const pixels = document.getElementsByClassName('pixel');
const pixelGrid = document.body.querySelector('#pixel-board');
let initialGrid = 5;
function colorPalette() {
  const colors = ['black', 'yellow', 'blue', 'grey'];
  const colorsList = document.getElementsByClassName('color');

  for (let index = 0; index < colorsList.length; index += 1) {
    const currentColor = colors[index];
    const currentColorList = colorsList[index];
    currentColorList.style.backgroundColor = currentColor;
  }
}

function createPixels() {
  for (let index = 1; index <= (initialGrid ** 2); index += 1) {
    const createPixelsList = document.createElement('li');
    createPixelsList.className = 'pixel';
    createPixelsList.style.backgroundColor = 'white';
    pixelGrid.appendChild(createPixelsList);
  }
}

function selectedColor() {
  const colorsList = document.querySelectorAll('.color');
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].addEventListener('click', (event) => {
      const recoverSelected = document.querySelector('.selected');
      recoverSelected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}

function paintPixels() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', (event) => {
      const colorSelected = document.querySelector('.selected');
      const recoveryBackgroundSelected = colorSelected.style.backgroundColor;
      const setEvent = event.target;
      setEvent.style.backgroundColor = recoveryBackgroundSelected;
    });
  }
}
function cleaningBoard() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', () => {
    const pixelsBoard = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelsBoard.length; index += 1) {
      pixelsBoard[index].style.backgroundColor = 'white';
    }
  });
}

function removeOldBoard() {
  while (pixelGrid.hasChildNodes()) {
    pixelGrid.removeChild(pixelGrid.firstChild);
  }
}
function setPixels() {
  const inputBoardSize = document.querySelector('input[id="board-size"]');
  const button = document.querySelector('#generate-board');
  button.addEventListener('click', () => {
    if (inputBoardSize.value === '') {
      return alert('Board inválido!');
    }
    if (inputBoardSize.value < 5) {
      inputBoardSize.value = 5;
    }
    if (inputBoardSize.value > 50) {
      inputBoardSize.value = 50;
    }
    removeOldBoard();
    initialGrid = inputBoardSize.value;
    createPixels();
  });
}

function pixelsArt() {
  colorPalette();
  createPixels();
  selectedColor();
  paintPixels();
  cleaningBoard();
  setPixels();
}
window.onload = pixelsArt;

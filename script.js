function colorPalette() {
  const colors = ['black', 'yellow', 'blue', 'grey'];
  const colorsList = document.getElementsByClassName('color');

  for (let index = 0; index < colorsList.length; index += 1) {
    const currentColor = colors[index];
    const currentColorList = colorsList[index];
    currentColorList.style.backgroundColor = currentColor;
  }
}

function insertPixels(numbersOfPixels) {
  const pixelGrid = document.body.querySelector('#pixel-board');

  for (let index = 1; index <= numbersOfPixels; index += 1) {
    const createPixelsList = document.createElement('li');
    createPixelsList.className = 'pixel';
    pixelGrid.appendChild(createPixelsList);
  }
}
insertPixels(25);

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
  const pixels = document.getElementsByClassName('pixel');
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

function pixelsArt() {
  colorPalette();
  selectedColor();
  paintPixels();
  cleaningBoard();
}
window.onload = pixelsArt;

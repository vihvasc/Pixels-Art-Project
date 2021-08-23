const inputBox = document.getElementById('board-size');
const buttonGenerate = document.getElementById('generate-board');
const buttonClean = document.getElementById('clear-board');
const colorsList = document.getElementById('color-palette');

function createColorPalette() {
  for (let index = 0; index < 4; index += 1) {
    const listItem = document.createElement('li');
    listItem.classList.add('color');
    if (index === 0) {
      listItem.classList.add('selected');
    }
    colorsList.appendChild(listItem);
  }
}

function generateRGBColor() {
  const colorNumbers = [];
  for (let index = 0; index < 3; index += 1) {
    const number = Math.round(Math.random() * 256);
    colorNumbers.push(number);
  }
  const colorString = colorNumbers.join();
  return colorString;
}

function randomizeColor() {
  const colorPalette = document.querySelectorAll('.color');
  colorPalette[0].style.background = 'rgb(0,0,0)';
  for (let index = 1; index < 4; index += 1) {
    const previousColor = colorPalette[index - 1].style.background;
    const currentColorItem = colorPalette[index];
    let currentColor = generateRGBColor();
    while (currentColor === previousColor) {
      currentColor = generateRGBColor();
    }
    currentColorItem.style.background = `rgb(${currentColor})`;
  }
}

function createLine(width) {
  const pixelBoard = document.getElementById('pixel-board');
  const ul = document.createElement('ul');
  pixelBoard.appendChild(ul);
  for (let index = 0; index < width; index += 1) {
    const pixelSquare = document.createElement('li');
    pixelSquare.className = 'pixel';
    ul.appendChild(pixelSquare);
  }
}

function colorPixels(event) {
  const selectedColor = document.querySelector('.selected');
  const colouredPixel = event.target;
  colouredPixel.style.background = selectedColor.style.background;
}

function handlePixelsEventAdd() {
  const pixelsBoard = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelsBoard.length; index += 1) {
    pixelsBoard[index].addEventListener('click', colorPixels);
  }
}

function createBoard(height) {
  for (let index = 0; index < height; index += 1) {
    createLine(height);
  }
  handlePixelsEventAdd();
}

function handlePickedColor(event) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function handlePickColorEvent() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', handlePickedColor);
  }
}

function eraser() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.background = 'white';
  }
}

function receiveInputValue() {
  const inputNumber = document.getElementById('board-size').value;
  return inputNumber;
}

function eraseBoard() {
  const board = document.getElementById('pixel-board');
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

function checkMinAndMaxBoardSize(param) {
  let number = param;
  if (number < 5) {
    number = 5;
  } else if (number > 50) {
    number = 50;
  }
  return number;
}

function checkInputValue() {
  eraseBoard();
  let inputNumber = receiveInputValue();
  parseInt(inputNumber, 10);
  if (inputNumber === '') {
    alert('Board Inválido!');
  } else {
    inputNumber = checkMinAndMaxBoardSize(inputNumber);
  }
  return createBoard(inputNumber);
}

window.onload = function createPixelArt() {
  createColorPalette();
  randomizeColor();
  handlePickColorEvent();
  handlePixelsEventAdd();
  createBoard(5);
  buttonClean.addEventListener('click', eraser);
  inputBox.addEventListener('keyup', receiveInputValue);
  buttonGenerate.addEventListener('click', checkInputValue);
};

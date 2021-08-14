const inputBox = document.getElementById('board-size');
const buttonGenerate = document.getElementById('generate-board');
const buttonClean = document.getElementById('clear-board');
const colorsList = document.querySelectorAll('.color');
colorsList[0].style.background = 'black';
colorsList[1].style.background = 'lightblue';
colorsList[2].style.background = 'lightgreen';
colorsList[3].style.background = 'pink';
colorsList[0].classList.add('selected');

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
  for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].addEventListener('click', handlePickedColor);
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
  handlePickColorEvent();
  handlePixelsEventAdd();
  createBoard(5);
  buttonClean.addEventListener('click', eraser);
  inputBox.addEventListener('keyup', receiveInputValue);
  buttonGenerate.addEventListener('click', checkInputValue);
};

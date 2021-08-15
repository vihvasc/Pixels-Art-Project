const root = document.documentElement;

const colors = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const clearButton = document.querySelector('#clear-board');
const input = document.querySelector('#board-size');
const gridButton = document.querySelector('#generate-board');

const colorsArray = Array.from(colors);
const colorsArrayLength = colorsArray.length;
// sets random colors on initialization
for (let index = 1; index < colorsArrayLength; index += 1) {
  const firstNumber = Math.floor(Math.random() * 255);
  const secondNumber = Math.floor(Math.random() * 255);
  const thirdNumber = Math.floor(Math.random() * 255);
  root.style.setProperty('--second-color', `rgb(${firstNumber}, ${secondNumber}, ${thirdNumber})`);
  root.style.setProperty('--third-color', `rgb(${secondNumber}, ${firstNumber}, ${thirdNumber})`);
  root.style.setProperty('--fourth-color', `rgb(${thirdNumber}, ${secondNumber}, ${firstNumber})`);
}

// setting black as default selected
const blackColor = colorsArray[0];
blackColor.classList.add('selected');

function paintSquare(originEvent) {
  const selectedColorElement = document.querySelector('.selected');
  const selectedColor = getComputedStyle(selectedColorElement).backgroundColor;
  const myPixel = originEvent.target;
  myPixel.style.background = selectedColor;
}

// exercise 5: make 5x5 grid, pixel size = 40px
const exerciseSize = '40px';
const sideExerciseNumber = parseInt(exerciseSize, 10); // 40
const sideGrid = sideExerciseNumber * 5; // 200
const sideGridString = `${sideGrid}px`; // 200px
root.style.setProperty('--grid-size-px', sideGridString);
root.style.setProperty('--user-input-px', exerciseSize);
for (let index = 1; index <= 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixelBoard.appendChild(pixel);
  pixel.addEventListener('click', paintSquare);
}
const pixels = document.querySelectorAll('.pixel');
const pixelsArray = Array.from(pixels);
const pixelsArrayLength = pixelsArray.length;
for (let index = 0; index < pixelsArrayLength - 1; index += 1) {
  pixelsArray[index].style.width = exerciseSize;
  pixelsArray[index].style.height = exerciseSize;
}

function addSelected(originEvent) {
  const element = originEvent.target;
  for (let counter = 0; counter < colorsArrayLength; counter += 1) {
    if (colorsArray[counter].classList.contains('selected')) {
      colorsArray[counter].classList.remove('selected');
    }
  }
  element.classList.add('selected');
}

function clearBoard() {
  const pixelsClearBoard = document.querySelectorAll('.pixel');
  const pixelsArrayClearBoard = Array.from(pixelsClearBoard);
  const pixelsArrayLengthClearBoard = pixelsArrayClearBoard.length;
  for (let index = 0; index < pixelsArrayLengthClearBoard; index += 1) {
    pixelsArrayClearBoard[index].style.background = 'white';
  }
}

function addPixels(inputValue) {
  const newPixelSizeNumber = Number(inputValue);
  const newPixelSizeString = `${String(newPixelSizeNumber)}px`;
  const newGridSizeNumber = newPixelSizeNumber * newPixelSizeNumber;
  const newGridSizeString = `${String(newGridSizeNumber)}px`;
  root.style.setProperty('--grid-size', String(newGridSizeNumber));
  root.style.setProperty('--grid-size-px', newGridSizeString);
  root.style.setProperty('--user-input', String(newPixelSizeNumber));
  root.style.setProperty('--user-input-px', newPixelSizeString);
  pixelBoard.innerHTML = '';
  for (let index = 1; index <= newGridSizeNumber; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
    pixel.addEventListener('click', paintSquare);
  }
  clearBoard();
}

function checkInput() {
  let inputValue = input.value;
  const message = 'Board inválido!';
  if (inputValue === '' || inputValue < 0) {
    alert(message);
    return;
  }
  if (inputValue < 5) {
    inputValue = 5;
    input.value = 5;
  }
  if (inputValue > 50) {
    inputValue = 50;
    input.value = 50;
  }
  addPixels(inputValue);
}

for (let index = 0; index < colorsArrayLength; index += 1) {
  colorsArray[index].addEventListener('click', addSelected);
}
clearButton.addEventListener('click', clearBoard);
gridButton.addEventListener('click', checkInput);

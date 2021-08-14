const root = document.documentElement;
const pixelBoard = document.querySelector('#pixel-board');
const gridSizePxCSS = '--grid-size-px';
const pixelSize = getComputedStyle(root).getPropertyValue('--user-input');
const pixelSizeNumber = Number(pixelSize);
const gridSize = pixelSizeNumber * pixelSizeNumber;
const gridSizeString = `${String(gridSize)}px`;
root.style.setProperty('--grid-size', gridSize);
root.style.setProperty(gridSizePxCSS, gridSizeString)
for (let index = 1; index <= gridSize; index += 1) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixelBoard.appendChild(pixel);
}

const pixels = document.querySelectorAll('.pixel');
const pixelsArray = Array.from(pixels);
const pixelsArrayLength = pixelsArray.length;
const colors = document.querySelectorAll('.color');
const colorsArray = Array.from(colors);
const colorsArrayLength = colorsArray.length;
const blackColor = colorsArray[0];
const clearButton = document.querySelector('#clear-board');
const input = document.querySelector('#board-size');
const gridButton = document.querySelector('#generate-board');
blackColor.classList.add('selected');

function removeChildren() {
  console.log(pixelBoard)
  console.log(pixelBoard[index])
  for (let index = 0; index < pixelsArrayLength; index += 1) {
    // pixelBoard.removeChild(pixelBoard[index])
  }
  console.log(pixelBoard);
}
removeChildren();
function exercise5() {
  const exerciseSize = '40px';
  const sideExerciseNumber = parseInt(exerciseSize, 10);
  const sideGrid = sideExerciseNumber * 5;
  console.log(sideGrid);
  const sideGridString = `${sideGrid}px`;
  root.style.setProperty('--grid-size', String(sideExerciseNumber));
  root.style.setProperty(gridSizePxCSS, sideGridString);
  for (let index = 1; index <= 5; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }
  for (let index = 0; index < pixelsArrayLength - 1; index += 1) {
    pixelsArray[index].style.width = exerciseSize;
    pixelsArray[index].style.height = exerciseSize;
  }
  console.log('hello');
}
const intervalId = setInterval(exercise5, 2000);
setTimeout(() => clearInterval(intervalId), 2000);

function addSelected(originEvent) {
  const element = originEvent.target;
  for (let counter = 0; counter < colorsArrayLength; counter += 1) {
    if (colorsArray[counter].classList.contains('selected')) {
      colorsArray[counter].classList.remove('selected');
    }
  }
  element.classList.add('selected');
}

function paintSquare(originEvent) {
  const selectedColorElement = document.querySelector('.selected');
  const selectedColor = getComputedStyle(selectedColorElement).backgroundColor;
  console.log(selectedColor);
  const myPixel = originEvent.target;
  myPixel.style.background = selectedColor;
}

function clearBoard() {
  for (let index = 0; index < pixelsArrayLength; index += 1) {
    pixelsArray[index].style.background = 'white';
  }
}

function addPixels() {
  const newPixelSizeNumber = Number(input.value);
  const newPixelSizeString = `${String(newPixelSizeNumber)}px`;
  const newGridSizeNumber = newPixelSizeNumber * newPixelSizeNumber;
  const newGridSizeString = `${String(newGridSizeNumber)}px`;
  root.style.setProperty('--grid-size', String(newGridSizeNumber));
  root.style.setProperty(gridSizePxCSS, newGridSizeString);
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
  const inputValue = input.value;
  const message = 'Board inválido!';
  if (inputValue < 0) {
    alert(message);
    return;
  }
  if (inputValue === '') {
    alert(message);
    return;
  }
  if (inputValue < 5 || inputValue > 50) {
    alert(message);
    return;
  }
  addPixels();
}

for (let index = 0; index < colorsArrayLength; index += 1) {
  colorsArray[index].addEventListener('click', addSelected);
}

for (let index = 0; index < pixelsArrayLength; index += 1) {
  pixelsArray[index].addEventListener('click', paintSquare);
}

clearButton.addEventListener('click', clearBoard);

gridButton.addEventListener('click', checkInput);

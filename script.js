// Constantes
const pixelBoard = document.getElementById('pixel-board');
const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const buttonClearBoard = document.getElementById('clear-board');
const buttonGenerateBoard = document.getElementById('generate-board');
const inputSizeBoard = document.getElementById('board-size');

// Function to delete board
function deletePixelBoard() {
  const element = document.getElementById('pixel-board');
  const numberOfRemoved = element.childNodes.length;
  for (let i = 0; i < numberOfRemoved; i += 1) {
    element.removeChild(element.lastChild);
  }
}

// Function to give a class pixel the color of a class selected
function paintPixel(eventoDeOrigem) {
  const element = eventoDeOrigem.target;
  const color = document.getElementsByClassName('selected')[0].style.backgroundColor;
  element.style.background = color;
}

// Function to create a pixel board n x n
function createPixelBoard(n) {
  deletePixelBoard();
  for (let i = 0; i < n; i += 1) {
    const line = document.createElement('div');
    line.className = 'linePixelBoard';
    pixelBoard.appendChild(line);
    for (let j = 0; j < n; j += 1) {
      const column = document.createElement('div');
      column.className = 'pixel';
      column.addEventListener('click', paintPixel);
      document.querySelectorAll('#pixel-board .linePixelBoard')[i].appendChild(column);
    }
  }
}

// Function to give a class selected to the selected color
function classSelected(eventoDeOrigem) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].className = 'color';
  }
  const selectedColor = eventoDeOrigem.target;
  selectedColor.className = 'color selected';
}

// Add event Listener to class color
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', classSelected);
}

// Function used to clean the pixels
function cleanPixelsColor() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.background = 'white';
  }
}

// Add event Listener to button id clear-board
buttonClearBoard.addEventListener('click', cleanPixelsColor);

// Function to create a new pixel board n x n
function generateNewBoard() {
  let size = inputSizeBoard.value;
  size = parseInt(size, 10);
  const confSize = Number.isNaN(size) || size < 5 || size > 50;
  if (confSize === false) {
    createPixelBoard(size);
  } else {
    alert('Board inválido!');
  }
}

// Add event Listener to button id generate-board
buttonGenerateBoard.addEventListener('click', generateNewBoard);

// Function to verify if values in input is in Range [0, 50]
function verifyInputInRange(eventoDeOrigem) {
  const element = eventoDeOrigem.target;
  let size = element.value;
  size = parseInt(size, 10);
  if (size < 5) {
    element.value = 5;
  } else if (size > 50) {
    element.value = 50;
  }
}

// Add event Listener to input id board-size
inputSizeBoard.addEventListener('change', verifyInputInRange);

// Function to generate a randomNumber into range[min, max]
function randomNumber(min, max) {
  return Math.random() * max + min;
}

// Function to generate random color
function generateRandomColor() {
  const r = randomNumber(0, 255);
  const g = randomNumber(0, 255);
  const b = randomNumber(0, 255);
  const rbg = `rgb(${r},${g},${b})`;
  return rbg;
}

// function used to start the page
window.onload = function startPage() {
  // colors of palete
  colors[0].style.background = 'black';
  colors[1].style.background = generateRandomColor();
  colors[2].style.background = generateRandomColor();
  colors[3].style.background = generateRandomColor();

  createPixelBoard(5);
};

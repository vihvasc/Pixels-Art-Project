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
  size = parseInt(size);
  const confsize = Number.isNaN(size) || size < 5 || size > 50;
  if (confsize === false) {
    createPixelBoard(size);
  } else {
    alert('Board inválido!');
  }
}

// Add event Listener to button id generate-board
buttonGenerateBoard.addEventListener('click', generateNewBoard);

// Function to verify if number digited in input id board-size is numeric > 10
function verifyInputNumber(eventoDeOrigem) {
  let size = eventoDeOrigem.target.value;
  size = parseInt(size);
  const confSize = size < 0 || Number.isNaN(size) || size < 5 || size > 50;
  if (confSize) {
    alert('Board inválido!');
  } else {
    createPixelBoard(size);
  }
}

// Add event Listener to input id board-size
inputSizeBoard.addEventListener('change', verifyInputNumber)

// function used to start the page
window.onload = function startPage() {
  // colors of palete
  colors[0].style.background = 'black';
  colors[1].style.background = 'red';
  colors[2].style.background = 'green';
  colors[3].style.background = 'blue';

  createPixelBoard(5);
};

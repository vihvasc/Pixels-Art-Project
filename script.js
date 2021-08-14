const contentPalette = document.querySelector('.colors-ul');
const colorPalette = document.getElementsByClassName('color');
const pixelBoard = document.querySelector('#pixel-board');
const pixel = document.getElementsByClassName('pixel');
const colors = ['black', 'red', 'green', 'yellow'];
let colorPixel;
let button = document.querySelector('#clear-board');

function createColorsAndAddClass() {
  const quantListItem = 4;

  for (let i = 0; i < quantListItem; i += 1) {
    const li = document.createElement('li');
    li.className = 'color';
    li.style.backgroundColor = colors[i];
    contentPalette.appendChild(li);
  }
  colorPalette[0].classList.add('selected');
}

createColorsAndAddClass();

function generatePixelInBoard() {
  const quantPixel = 25;
  for (let i = 0; i < quantPixel; i += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    pixels.style.backgroundColor = 'white';
    pixelBoard.appendChild(pixels);
  }
}

generatePixelInBoard();

function setSelectedClass(event) {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].classList.remove('selected')
  }
  event.target.classList.add('selected');
}

contentPalette.addEventListener('click', setSelectedClass);

function paintPixel(event) {
  colorPixel = document.querySelector('.selected');
  event.target.style.backgroundColor = colorPixel.style.backgroundColor;
}

pixelBoard.addEventListener('click', paintPixel);

function clearPixelBoard() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
  pixelBoard.style.backgroundColor = 'white';
}

button.addEventListener('click', clearPixelBoard);
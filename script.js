const contentPalette = document.querySelector('.colors-ul');
const colorPalette = document.getElementsByClassName('color');
const pixelBoard = document.querySelector('#pixel-board');
const pixel = document.getElementsByClassName('pixel');
const colors = ['black', 'red', 'green', 'yellow'];
const button = document.querySelector('#clear-board');
let colorPixel;

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

function generatePixels(width, height) {
  pixelBoard.style.maxWidth = `${width * 40 + 2}px`;
  pixelBoard.style.border =  '1px solid black';

  for (let line = 1; line <= height; line += 1) {
    const lineElement = document.createElement('div');
    lineElement.classList.add('line-element');
    lineElement.style.maxWidth = `${width * 40}px`;
    pixelBoard.appendChild(lineElement);

    for (let column = 1; column <= width; column += 1) {
      const pixelElement = document.createElement('div');
      pixelElement.classList.add('pixel');
      pixelElement.style.backgroundColor = 'white';
      lineElement.appendChild(pixelElement)
    }
  }
}

generatePixels(5, 5);

function setSelectedClass(event) {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].classList.remove('selected');
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

function getSizeBoard() {
  let inputUser = document.querySelector('#board-size').value;
  let inputNumber = parseInt(inputUser);
  
  if (inputUser === '') {
    alert('Board inválido!');
  }
  else if (inputNumber < 5) {
    inputNumber = 5;
  }
  else if (inputNumber > 50) {
    inputNumber = 50;
  }
  else { 
    pixelBoard.innerHTML = '';
    generatePixels(inputNumber, inputNumber);
  }
}

document.querySelector("#generate-board").addEventListener('click', getSizeBoard);

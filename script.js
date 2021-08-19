const contentPalette = document.querySelector('.colors-ul');
const colorPalette = document.getElementsByClassName('color');
const pixelBoard = document.querySelector('#pixel-board');
const pixel = document.getElementsByClassName('pixel');
const colors = [`rgb(0, 0, 0)`];
const button = document.querySelector('#clear-board');
let colorPixel;

function createRadomColor() {
  const red = parseInt(Math.random() * (256 - 0) + 0);
  const green = parseInt(Math.random() * (256 - 0) + 0);
  const blue = parseInt(Math.random() * (256 - 0) + 0);

  return colors.push(`rgb(${red}, ${green}, ${blue})`);
}

function addColorsAndAddClass() {
  const quantListItem = 4;
  for (let i = 0; i < quantListItem; i += 1) {
    createRadomColor();
    const li = document.createElement('li');
    li.className = 'color';
    li.style.backgroundColor = colors[i];
    contentPalette.appendChild(li);
  }
  colorPalette[0].classList.add('selected');
}

addColorsAndAddClass();

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

function paintPixel(event) {
  colorPixel = document.querySelector('.selected');
  event.target.style.backgroundColor = colorPixel.style.backgroundColor;
}

function clearPixelBoard() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
  pixelBoard.style.backgroundColor = 'white';
}

function getSizeBoard() {
  let inputUser = document.querySelector('#board-size').value;
  let inputNumber = parseInt(inputUser);

  if (inputUser === '') {
    alert('Board inválido!');
  }
  else if (inputNumber < 5) {
    pixelBoard.innerHTML = '';
    generatePixels(5, 5);
  }
  else if (inputNumber > 50) {
    pixelBoard.innerHTML = '';
    generatePixels(50, 50);
  }
  else { 
    pixelBoard.innerHTML = '';
    generatePixels(inputNumber, inputNumber);
  }
}

contentPalette.addEventListener('click', setSelectedClass);
pixelBoard.addEventListener('click', paintPixel);
button.addEventListener('click', clearPixelBoard);
document.querySelector("#generate-board").addEventListener('click', getSizeBoard);

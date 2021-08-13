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

function createBoard(height) {
  for (let index = 0; index < height; index += 1) {
    createLine(5);
  }
}

createBoard(5);

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

handlePickColorEvent();

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

handlePixelsEventAdd();

const button = document.getElementById('clear-board');

function eraser() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.background = 'white';
  }
}

button.addEventListener('click', eraser);

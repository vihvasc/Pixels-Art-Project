const colorList = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const inputBoard = document.getElementById('board-size');
const btnVQV = document.getElementById('generate-board');
const btnClear = document.getElementById('clear-board');
const firstBlock = document.createElement('div');
const secondBlock = document.createElement('div');
const thirdBlock = document.createElement('div');
const fourBlock = document.createElement('div');

function createColor() {
  firstBlock.id = 'black';
  firstBlock.className = 'color';
  firstBlock.style.background = 'black';
  colorList.appendChild(firstBlock);
  secondBlock.id = 'red';
  secondBlock.className = 'color';
  secondBlock.style.background = 'red';
  colorList.appendChild(secondBlock);
  thirdBlock.id = 'blue';
  thirdBlock.style.background = 'blue';
  thirdBlock.className = 'color';
  colorList.appendChild(thirdBlock);
  fourBlock.id = 'green';
  fourBlock.style.background = 'green';
  fourBlock.className = 'color';
  colorList.appendChild(fourBlock);
}
createColor();

function selectFirstColor() {
  if (firstBlock.style.background === 'black') {
    firstBlock.className = 'color selected';
  } else {
    firstBlock.className = 'color';
  }
}
selectFirstColor();

function createPixels() {
  for (let lines = 0; lines < 5; lines += 1) {
    const line = document.createElement('div');
    line.className = 'lines';
    pixelBoard.appendChild(line);
    for (let cell = 0; cell < 5; cell += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.id = 'cell';
      line.appendChild(pixel);
    }
  }
}
createPixels();

function selectColor(event) {
  const colorSelect = document.querySelector('.selected');
  colorSelect.classList.remove('selected');
  event.target.classList.add('selected');
}
firstBlock.addEventListener('click', selectColor);
secondBlock.addEventListener('click', selectColor);
thirdBlock.addEventListener('click', selectColor);
fourBlock.addEventListener('click', selectColor);

function selectPixel(event) {
  const painted = document.querySelector('.selected');
  event.target.style.backgroundColor = painted.style.background;
}
pixelBoard.addEventListener('click', selectPixel);

const pixels = document.querySelectorAll('.pixel');
function eventCreateClear() {
  for (let lines = 0; lines < 5; lines += 1) {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.background = 'white';
    }
  }
}
btnClear.addEventListener('click', eventCreateClear);

function removeBoard() {
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
}

function inputSizeCheck() {
  if (inputBoard.value === '') {
    alert('Board inválido!');
  } else if (inputBoard.value < 5) {
    inputBoard.value = 5;
  } else if (inputBoard.value > 50) {
    inputBoard.value = 50;
  }
  return inputBoard.value;
}

function createBoard() {
  const size = inputBoard.value;
  for (let lines = 1; lines <= size; lines += 1) {
    const line = document.createElement('div');
    line.className = 'lines';
    pixelBoard.appendChild(line);
    for (let cell = 1; cell <= size; cell += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.id = 'cell';
      line.appendChild(pixel);
      pixel.style.width = 40;
      pixel.style.height = 40;
    }
  }
}

btnVQV.addEventListener('click', () => {
  removeBoard();
  inputSizeCheck();
  createBoard();
});

function generateColorsRadom() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  return `rgb(${r}, ${g}, ${b})`;
}
firstBlock.style.background = 'black';
secondBlock.style.background = generateColorsRadom();
thirdBlock.style.background = generateColorsRadom();
fourBlock.style.background = generateColorsRadom();

const colorList = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const sessionClear = document.getElementById('button-clear');
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
    for (let pixels = 0; pixels < 5; pixels += 1) {
      const pixel = document.createElement('div');
      pixel.style.minwidth = 40;
      pixel.style.minheight = 40;
      pixel.style.border = '1px solid black';
      pixel.className = 'pixel';
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

function selectPixel(color) {
  const painted = document.querySelector('.selected');
  if (color.target.className === 'pixel') {
    color.target.style.backgroundColor = painted.style.backgroundColor;
  }
}
pixelBoard.addEventListener('click', selectPixel);

function createBtnClear() {
  const buttonClear = document.createElement('button');
  buttonClear.id = 'clear-board';
  buttonClear.textContent = 'Limpar';
  sessionClear.appendChild(buttonClear);
}
createBtnClear();

const btnClear = document.getElementById('clear-board');
const pixels = document.querySelectorAll('.pixel');
function eventCreateClear() {
  for (let lines = 0; lines < 5; lines += 1) {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.background = 'white';
    }
  }
}
btnClear.addEventListener('click', eventCreateClear);

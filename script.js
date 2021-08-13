const colorPallet = document.createElement('div');
colorPallet.id = 'color-palette';
document.body.appendChild(colorPallet);
const numberOfColors = 4;

for (let i = 0; i < numberOfColors; i += 1) {
  const newDiv = document.createElement('div');
  newDiv.className = 'color';
  colorPallet.appendChild(newDiv);
}

const colorBox = document.getElementsByClassName('color');
const colorSample = ['black', 'red', 'green', 'purple'];

for (let i = 0; i < colorBox.length; i += 1) {
  colorBox[i].style.background = colorSample[i];
}

const resetBtn = document.createElement('button');
resetBtn.addEventListener('click', reset);
resetBtn.id = 'clear-board';
resetBtn.innerText = 'Limpar';
document.body.appendChild(resetBtn);

const pixelBoard = document.createElement('div');
pixelBoard.id = 'pixel-board';
document.body.appendChild(pixelBoard);

const boardSize = 5;

for (let i = 0; i < boardSize; i += 1) {
  const pixelLine = document.createElement('div');
  pixelLine.className = 'pixel-line';
  pixelBoard.appendChild(pixelLine);
}

const pixelLine = document.getElementsByClassName('pixel-line');

for (let i = 0; i < boardSize; i += 1) {
  for (let n = 0; n < boardSize; n += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelLine[n].appendChild(pixel);
  }
}

function selectColor(event) {
  const oldCOlor = document.getElementsByClassName('selected');
  oldCOlor[0].classList.remove('selected');
  event.target.classList = 'color selected';
}
const color = document.getElementsByClassName('color');
for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', selectColor);
}

color[0].classList = 'color selected';

const pixel = document.getElementsByClassName('pixel');
;
function applyColor(event) {
  const selectedColorPallet = document.querySelectorAll('.selected')[0];
  const selectedColor = selectedColorPallet.style.background;
  event.target.style.background = selectedColor;
}

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', applyColor);
}

function reset() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.background = 'white';
  }
}
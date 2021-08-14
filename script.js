const board = document.getElementById('pixel-board');
const colors = document.getElementsByClassName('color');

function changeColor(event) {
  const bColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = bColor;
}

function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function makePixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.addEventListener('click', changeColor);
  return pixel;
}

function makePixelBoard() {
  const boardLength = 5;
  const boardWidth = 5;
  for (let index = 0; index < boardLength; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    board.appendChild(line);
    for (let i = 0; i < boardWidth; i += 1) {
      line.appendChild(makePixel());
    }
  }
}

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', selectColor);
}

window.onload = makePixelBoard;

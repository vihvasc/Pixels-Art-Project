const size = document.getElementById('board-size');

function createLine(a) {
  const board = document.getElementById('pixel-board');
  const numberOfLines = a;
  for (let l = 0; l < numberOfLines; l += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    board.appendChild(line);
  }
  size.value = '';
}

function paintPixel(event) {
  const colorDiv = document.querySelector('.selected');
  const color = window.getComputedStyle(colorDiv).getPropertyValue('background-color');
  const eventTarget = event.target;
  eventTarget.style.backgroundColor = color;
}

function createPixel(a) {
  const pixelPerLine = a;
  const linesToFill = document.getElementsByClassName('line');
  for (let l = 0; l < linesToFill.length; l += 1) {
    for (let p = 0; p < pixelPerLine; p += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paintPixel);
      linesToFill[l].appendChild(pixel);
    }
  }
  size.value = '';
}

function changeSelected(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function limpar() {
  const pixels = document.querySelectorAll('.pixel');
  for (let p = 0; p < pixels.length; p += 1) {
    pixels[p].style.backgroundColor = 'white';
  }
}

function removeBoard() {
  const lines = document.querySelectorAll('.line');
  for (let l = 0; l < lines.length; l += 1) {
    lines[l].remove();
  }
}

function generateBoard() {
  let n = size.value;
  removeBoard();
  if (n < 5) { n = 5; }
  if (n > 50) { n = 50; }
  createLine(n);
  createPixel(n);
}

function checkN() {
  const n = size.value;
  if (n === '') {
    alert('Board inválido!');
  } else { generateBoard(); }
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

function randomPaletteColor() {
  const paleta = document.getElementById('color-palette');
  for (let index = 0; index < 10; index += 1) {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorDiv.style.backgroundColor = `${randomColor()}`;
    if(index === 0) {
      colorDiv.classList.add('selected');
    }
    paleta.appendChild(colorDiv);
  }
}

window.onload = function initPage() {
  createLine(5);
  createPixel(5);
  randomPaletteColor();

  const cores = document.querySelectorAll('.color');
  cores.forEach((item) => {
    item.addEventListener('click', changeSelected);
  });

  document.getElementById('clear-board').addEventListener('click', limpar);

  document.getElementById('generate-board').addEventListener('click', checkN);
};

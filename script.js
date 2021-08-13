const board = document.getElementById('pixel-board');
const cores = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');

function createLine() {
  const numberOfLines = 5;
  for (let l = 0; l < numberOfLines; l += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    board.appendChild(line);
  }
}

function createPixel() {
  const pixelPerLine = 5;
  const linesToFill = document.getElementsByClassName('line');

  for (let l = 0; l < linesToFill.length; l += 1) {
    for (let p = 0; p < pixelPerLine; p += 1) {
      const actualLine = linesToFill[l];
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.backgroundColor = 'white';
      actualLine.appendChild(pixel);
    }
  }
}

function changeSelected(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function paintPixel(event) {
  const color = document.querySelector('.selected');
  event.target.style.backgroundColor = `${color.id}`;
}

window.onload = function initPage() {
  createLine();
  createPixel();
  for (let c = 0; c < cores.length; c += 1) {
    cores[c].addEventListener('click', changeSelected);
  }
  for (let p = 0; p < pixels.length; p += 1) {
    pixels[p].addEventListener('click', paintPixel);
  }
};

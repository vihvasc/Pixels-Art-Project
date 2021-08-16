window.onload = function load() {
  const blackColor = document.querySelector('#black');
  blackColor.className = 'color selected';

  function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  const colorPalette = document.getElementsByClassName('color');
  for (let i = 1; i < colorPalette.length; i += 1) {
    colorPalette[i].style.backgroundColor = randomRGB();
  }
  randomRGB();
};

const pixelBoard = document.querySelector('#pixel-board');
for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}

const colorPalette = document.getElementsByClassName('color');
function selectionFunction(e) {
  for (let i = 0; i < colorPalette.length; i += 1) {
    if (colorPalette[i].classList.contains('selected')) {
      colorPalette[i].classList.toggle('selected');
    }
  }
  e.target.classList.toggle('selected');
}
for (let i = 0; i < colorPalette.length; i += 1) {
  colorPalette[i].addEventListener('click', selectionFunction);
}

function paint(e) {
  const selectedColor = document.querySelector('.selected');
  e.target.style.backgroundColor = window.getComputedStyle(selectedColor).backgroundColor;
}
const pixels = document.getElementsByClassName('pixel');
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', paint);
}

function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
const button = document.querySelector('#clear-board');
button.addEventListener('click', clearBoard);

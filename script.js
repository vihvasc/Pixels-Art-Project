function paintColorPalette() {
  const colorPalette = document.getElementsByClassName('color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].style.backgroundColor = colorPalette[index].id;
  }
}

function createPixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.style.backgroundColor = 'white';
  return pixel;
}

function createpixelLine() {
  const pixelLine = document.createElement('div');
  pixelLine.className = 'pixel-line';

  for (let j = 0; j < 5; j += 1) {
    const pixel = createPixel();
    pixelLine.appendChild(pixel);
  }

  return pixelLine;
}

function createPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    const pixelLine = createpixelLine();
    pixelBoard.appendChild(pixelLine);
  }
}

function setInitialColor() {
  const blackColor = document.getElementById('black');
  blackColor.classList.add('selected');
}

function changeSelectedColor(event) {
  const currentColor = document.querySelector('.selected');
  const newColor = event.target;

  currentColor.classList.remove('selected');
  newColor.classList.add('selected');
}

function selectColor() {
  const colorPalette = document.getElementsByClassName('color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', changeSelectedColor);
  }
}

function paintPixel(event) {
  const currentColor = document.querySelector('.selected');
  const targetPixel = event.target;

  targetPixel.style.backgroundColor = currentColor.id;
}

function selectPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', paintPixel);
  }
}

window.onload = () => {
  paintColorPalette();
  createPixelBoard();
  setInitialColor();
  selectColor();
  selectPixel();
};

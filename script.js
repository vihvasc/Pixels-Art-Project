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

window.onload = () => {
  paintColorPalette();
  createPixelBoard();
  document.getElementById('black').classList.add('selected');
};

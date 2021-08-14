const colorList = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');

// eslint-disable-next-line max-lines-per-function
function createColor() {
  const firstBlock = document.createElement('div');
  firstBlock.className = 'color';
  firstBlock.id = 'black';
  firstBlock.style.background = 'black';
  colorList.appendChild(firstBlock);

  const secondBlock = document.createElement('div');
  secondBlock.className = 'color';
  secondBlock.id = 'red';
  secondBlock.style.background = 'red';
  colorList.appendChild(secondBlock);

  const thirdBlock = document.createElement('div');
  thirdBlock.className = 'color';
  thirdBlock.id = 'blue';
  thirdBlock.style.background = 'blue';
  colorList.appendChild(thirdBlock);

  const fourBlock = document.createElement('div');
  fourBlock.className = 'color';
  fourBlock.id = 'green';
  fourBlock.style.background = 'green';
  colorList.appendChild(fourBlock);
}
createColor();

function selectFirstColor() {
  const firstBlock = document.querySelector('#black');
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
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
}
createPixels();

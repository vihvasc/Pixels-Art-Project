// variáveis globais
const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const clearBoardButton = document.getElementById('clear-board');
const generateBoard = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');

function pixel() {
  return pixelBoard.childNodes;
}

function createPixel(times) {
  pixelBoard.innerHTML = '';

  const totalTimes = times * times;
  for (let i = 1; i <= totalTimes; i += 1) {
    const createdPixel = document.createElement('div');
    createdPixel.classList.add('pixel');
    pixelBoard.appendChild(createdPixel);
  }
  pixelBoard.style.width = `${(times * 2) + (times * 40)}px`;
}

function selectedClass() {
  return document.querySelector('.selected');
}

function removeSelect(color) {
  color.classList.remove('selected');
}

function selectColor(color) {
  color.addEventListener('click', () => {
    removeSelect(selectedClass());
    color.classList.add('selected');
  });
}

function paintPixel(pixelDiv) {
  const actualPixelDiv = pixelDiv;
  if (actualPixelDiv.classList.length > 1) {
    actualPixelDiv.classList.remove(actualPixelDiv.classList[1]);
  }
  const currentColor = selectedClass();
  actualPixelDiv.style.backgroundColor = currentColor.style.backgroundColor;
}

function clearBoard() {
  const allPixels = pixel();
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }
}

function pixelEvent(pixelToColor) {
  if (pixelToColor !== undefined) {
    for (let i = 0; i < pixelToColor.length; i += 1) {
      pixelToColor[i].addEventListener('click', () => {
        paintPixel(pixelToColor[i]);
      });
    }
  }
}

function generate() {
  let boardSizeNumber = parseInt(boardSize.value, 16);
  if (boardSizeNumber >= 5 && boardSizeNumber <= 50) {
    boardSizeNumber = parseInt(boardSize.value, 16);
  } else if (parseInt(boardSize.value, 16) < 5) {
    boardSize.value = 5;
  } else if (boardSizeNumber > 50) {
    boardSize.value = 50;
  } else {
    alert('Board inválido!');
    boardSize.value = 5;
  }
  createPixel(boardSize.value);
  pixelEvent(pixel());
}

function generateRandomColor() {
  const color = Math.floor(Math.random() * 255);
  return color;
}

function generateRandomRGB() {
  const rgb = [];
  rgb.push(generateRandomColor());
  rgb.push(generateRandomColor());
  rgb.push(generateRandomColor());
  return rgb;
}

function colorRandom(color) {
  const currentColor = color;
  if (currentColor.classList[1] !== 'black') {
    const rgb = generateRandomRGB();
    currentColor.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  } else {
    currentColor.style.backgroundColor = 'black';
  }
}

window.onload = () => {
  createPixel(5);
  pixelEvent(pixel());
  generateBoard.addEventListener('click', (event) => {
    event.preventDefault();
    generate();
  });
  if (selectedClass() === null) {
    colorPalette.children[0].classList.add('selected');
  }
  for (let i = 0; i < colorPalette.children.length; i += 1) {
    colorRandom(colorPalette.children[i]);
    selectColor(colorPalette.children[i]);
  }
  clearBoardButton.addEventListener('click', clearBoard);
};

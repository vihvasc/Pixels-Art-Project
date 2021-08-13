const colorPalette = ['#000000'];
let selectedColorDiv;

function generateRandomPalette() {
  const rgbMultiplier = 255;
  const paletteSize = 3;

  for (let i = 0; i < paletteSize; i += 1) {
    const r = Math.round(Math.random() * rgbMultiplier);
    const g = Math.round(Math.random() * rgbMultiplier);
    const b = Math.round(Math.random() * rgbMultiplier);

    colorPalette.push(`rgb(${r},${g},${b})`);
  }
}

function initColorPalette() {
  const colorDivs = document.getElementsByClassName('color');
  generateRandomPalette();

  for (let i = 0; i < colorDivs.length; i += 1) {
    const actualColor = colorPalette[i];
    const actualColorDiv = colorDivs[i];
    actualColorDiv.style.backgroundColor = actualColor;
  }
}

function selectColor(colorDiv) {
  if (typeof selectedColorDiv !== 'undefined') {
    selectedColorDiv.classList.remove('selected');
  }
  colorDiv.classList.add('selected');
  selectedColorDiv = colorDiv;
}

function handleColorDiv(event) {
  selectColor(event.target);
}

function addEventListenerToColorDivs() {
  const colorDivs = document.getElementsByClassName('color');

  for (const div of colorDivs) {
    div.addEventListener('click', handleColorDiv);
  }
}

function handlePixel(event) {
  if (event.target.classList.contains('pixel')) {
    const pixel = event.target;
    pixel.style.backgroundColor = selectedColorDiv.style.backgroundColor;
  }
}

function handleClearBoardButton() {
  const pixels = document.getElementsByClassName('pixel');

  for (const pix of pixels) {
    pix.style.backgroundColor = '';
  }
}

function resetPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerHTML = '';
}

function generatePixelBoard(n) {
  const rows = n;
  const pixelsPerRow = n;
  const pixelBoard = document.getElementById('pixel-board');
  resetPixelBoard();

  for (let i = 0; i < rows; i += 1) {
    let pixelsRow = document.createElement('div');
    pixelsRow.className = 'pixel-board-row';

    for (let j = 0; j < pixelsPerRow; j += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelsRow.appendChild(pixel);
    }

    pixelBoard.appendChild(pixelsRow);
  }
}

function handleGenerateBoardButton() {
  const sizeInput = document.getElementById('board-size');

  if (sizeInput.value === '') {
    alert('Board inválido!');
    return;
  }

  let inputValue = parseInt(sizeInput.value);

  if (inputValue < 5) {
    inputValue = 5;
  }
  if (inputValue > 50) {
    inputValue = 50;
  }

  generatePixelBoard(inputValue);
}

window.onload = () => {
  initColorPalette();
  generatePixelBoard(5);
  selectColor(document.querySelector('.color'));
  addEventListenerToColorDivs();
  document.getElementById('pixel-board').addEventListener('click', handlePixel);
  document
    .getElementById('clear-board')
    .addEventListener('click', handleClearBoardButton);
  document
    .getElementById('generate-board')
    .addEventListener('click', handleGenerateBoardButton);
};

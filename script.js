// Seleciona um quadrado da paleta de cores e adiciona a classe 'selected', excluindo esta classe de todos os outros quadrados.
const getColorPalette = document.getElementsByClassName('color');

function handleColorPaletteSelection(event) {
  const targetEvent = event;
  for (let i = 0; i < getColorPalette.length; i += 1) {
    getColorPalette[i].classList.remove('selected');
  }
  targetEvent.target.classList.add('selected');
}
function addPaletteEventListener() {
  for (let i = 0; i < getColorPalette.length; i += 1) {
    getColorPalette[i].addEventListener('click', handleColorPaletteSelection);
  }
}

// Requisito 8 - Pintar quadrados do pixel board.
function handlePaintingPixelBoard(event) {
  const selectedColor = document.querySelector('.selected');
  const newColor = window.getComputedStyle(selectedColor).backgroundColor;
  const targetEvent = event;
  targetEvent.target.style.backgroundColor = newColor;
}

const allPixels = document.getElementsByClassName('pixel');
function addPixelEventListener() {
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].addEventListener('click', handlePaintingPixelBoard);
  }
}

// Requisito 9 - Resetar todos os quadrados com a cor branca.
const clearButton = document.getElementById('clear-board');
function handleClearButton() {
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }
}

function addClearButtonEventListener() {
  clearButton.addEventListener('click', handleClearButton);
}

window.onload = function () {
  addPaletteEventListener();
  addPixelEventListener();
  addClearButtonEventListener();
};

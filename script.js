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

// Requisito 10 - Fazer o tamanho do quadro de pixels ser definido pelo usuário.
// Emite mensagem de erro quando o input é vazio
const inputValue = document.getElementById('board-size');
const newBoardButton = document.getElementById('generate-board');
function alertErrorMessage() {
  if (!inputValue.value) {
    return alert('Board inválido!');
  }
  if (inputValue.value < 5 || inputValue.value > 50) {
    return alert('Tamanho do board inválido!');
  }
}

// Refaz o board com base N.
function rebuildBoard() {
  const getBoardParent = document.getElementById('pixel-board');
  const base = inputValue.value;

  for (let i = 0; i < base; i += 1) {
    for (let j = 0; j < base; j += 1) {
      
      getBoardParent.appendChild();
    }
  }
}

function addNewBoard() {
  newBoardButton.addEventListener('click', alertErrorMessage);
  newBoardButton.addEventListener('click', rebuildBoard);
}
window.onload = function () {
  addPaletteEventListener();
  addPixelEventListener();
  addClearButtonEventListener();
  addNewBoard();
};

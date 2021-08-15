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

function addPixelEventListener() {
  const allPixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].addEventListener('click', handlePaintingPixelBoard);
  }
}

// Requisito 9 - Resetar todos os quadrados com a cor branca.
function handleClearButton() {
  const allPixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }
}

function addClearButtonEventListener() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', handleClearButton);
}

// Requisito 10 - Fazer o tamanho do quadro de pixels ser definido pelo usuário.
// Emite mensagem de erro quando o input é vazio
const newBoardButton = document.getElementById('generate-board');
const boardSize = 'board-size';
function alertErrorMessage() {
  const inputValue = document.getElementById(boardSize);
  if (!inputValue.value) {
    return alert('Board inválido!');
  }
}

// Refaz o board com base N.
function rebuildBoard() {
  const inputValue = document.getElementById(boardSize).value;
  console.log(inputValue);
  const getBoardContainer = document.getElementById('pixel-board');

  for (let i = 0; i < inputValue; i += 1) {
    const newLineDiv = document.createElement('div');
    newLineDiv.className = 'pixel-line';
    newLineDiv.style.backgroundColor = 'white';
    getBoardContainer.appendChild(newLineDiv);

    for (let j = 0; j < inputValue; j += 1) {
      const getPixelLine = document.getElementsByClassName('pixel-line');
      const newColumnDiv = document.createElement('div');
      newColumnDiv.className = 'pixel';
      newColumnDiv.style.backgroundColor = 'white';
      getPixelLine[i].appendChild(newColumnDiv);
    }
  }
}

// Requisito 11 - Atribui 5 como valor mínimo e 50 como máximo.
function checkInputValue() {
  const inputValue = document.getElementById(boardSize).value;
  if (inputValue.value && inputValue.value < 5) {
    inputValue.value = '5';
  } else if (inputValue.value > 50) {
    inputValue.value = '50';
  }
}

function addNewBoard() {
  newBoardButton.addEventListener('click', alertErrorMessage);
  newBoardButton.addEventListener('click', rebuildBoard);
  checkInputValue();
}
window.onload = function () {
  addNewBoard();
  addPaletteEventListener();
  addPixelEventListener();
  addClearButtonEventListener();
};

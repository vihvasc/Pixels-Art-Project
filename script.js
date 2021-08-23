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
  if (pixelDiv.classList.length > 1) {
    pixelDiv.classList.remove(pixelDiv.classList[1]);
  }

  const currentColor = selectedClass().classList[1];
  console.log(currentColor);
  pixelDiv.classList.add(currentColor);
}

function clearBoard() {
  for (let i = 0; i < pixel().length; i += 1) {
    if (pixel()[i].classList.length > 1) {
      pixel()[i].classList.remove([pixel()[i].classList[1]]);
    }
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

window.onload = () => {
  createPixel(5);
  pixelEvent(pixel());
  generateBoard.addEventListener('click', (event) => {
    event.preventDefault();
    // boardSize.min = 5;
    // boardSize.min = 50;
    generate();
  });
  if (selectedClass() === null) {
    colorPalette.children[0].classList.add('selected');
  }
  for (let i = 0; i < colorPalette.children.length; i += 1) {
    selectColor(colorPalette.children[i]);
  }
  clearBoardButton.addEventListener('click', clearBoard);
};

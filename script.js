// variáveis globais
const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board').children;
const clearBoardButton = document.getElementById('clear-board');

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

function paintPixel(pixel) {
  if (pixel.classList.length > 1) {
    pixel.classList.remove(pixel.classList[1]);
  }

  const currentColor = selectedClass().classList[1];
  pixel.classList.add(currentColor);
}

function clearBoard() {
  for (let i = 0; i < pixelBoard.length; i += 1) {
    if (pixelBoard[i].classList.length > 1) {
      pixelBoard[i].classList.remove([pixelBoard[i].classList[1]]);
    }
  }
}

window.onload = () => {
  if (selectedClass() === null) {
    colorPalette.children[0].classList.add('selected');
  }

  for (let i = 0; i < colorPalette.children.length; i += 1) {
    selectColor(colorPalette.children[i]);
  }

  for (let i = 0; i < pixelBoard.length; i += 1) {
    pixelBoard[i].addEventListener('click', () => {
      paintPixel(pixelBoard[i]);
    });
  }

  clearBoardButton.addEventListener('click', clearBoard);
};

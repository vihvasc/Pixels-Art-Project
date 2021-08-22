// variáveis globais
const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board').children;

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
  console.log(currentColor);
  pixel.classList.add(currentColor);
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
};

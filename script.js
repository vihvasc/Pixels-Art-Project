function colorPalette() {
  const colors = ['black', 'yellow', 'blue', 'grey'];
  const colorsList = document.getElementsByClassName('color');

  for (let index = 0; index < colorsList.length; index += 1) {
    const currentColor = colors[index];
    const currentColorList = colorsList[index];
    currentColorList.style.backgroundColor = currentColor;
  }
}

const pixelGrid = document.body.querySelector('#pixel-board');
function insertPixels(numberOfPixels) {
  for (let index = 1; index <= numberOfPixels; index += 1) {
    const createPixelsList = document.createElement('li');
    createPixelsList.className = 'pixel';
    pixelGrid.appendChild(createPixelsList);
  }
}
insertPixels(25);

function selectedColor() {
  const selectColor = document.querySelectorAll('.color');
  for (let index = 0; index < selectColor.length; index += 1) {
    selectColor[index].addEventListener('click', (event) => {
      const getSelected = document.querySelector('.selected');
      getSelected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}

function pixelsArt() {
  colorPalette();
  selectedColor();
}
window.onload = pixelsArt;

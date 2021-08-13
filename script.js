const colorPalette = ['#000000', '#203671', '#36868f', '#5fc75d'];
let selectedColorDiv;

function initColorPalette() {
  const colorDivs = document.getElementsByClassName('color');

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

window.onload = function () {
  initColorPalette();
  selectColor(document.querySelector('.color'));
  addEventListenerToColorDivs();
  document.getElementById('pixel-board').addEventListener('click', handlePixel);
  document
    .getElementById('clear-board')
    .addEventListener('click', handleClearBoardButton);
};

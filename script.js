const colorPalette = ['#000000', '#203671', '#36868f', '#5fc75d'];
let selectedColor;

function initColorPalette() {
  const colorDivs = document.getElementsByClassName('color');

  for (let i = 0; i < colorDivs.length; i += 1) {
    const actualColor = colorPalette[i];
    const actualColorDiv = colorDivs[i];
    actualColorDiv.style.backgroundColor = actualColor;
  }
}

function selectColor(colorDiv) {
  if (typeof selectedColor !== 'undefined') {
    selectedColor.classList.remove('selected');
  }
  colorDiv.classList.add('selected');
  selectedColor = colorDiv;
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

window.onload = function () {
  initColorPalette();
  selectColor(document.querySelector('.color'));
  addEventListenerToColorDivs();
};

window.onload = function(){
  createButton();
};

function createButton(){
  const selectSectionPixelBoard = document.getElementById('pixel-board');
  const selectMainSection = document.getElementById('main-section')
  const buttonClearer = document.createElement('button');
  buttonClearer.innerText = 'Limpar';
  buttonClearer.id = 'clear-board';
  buttonClearer.style.marginTop = "10px";
  buttonClearer.addEventListener('click', clearBoard);
  selectMainSection.insertBefore(buttonClearer, selectSectionPixelBoard);
}


const blackFirst = document.querySelector('.color-green');
blackFirst.style.backgroundColor = 'rgb(0,0,0)';
blackFirst.classList.add('selected');

const colorsPalette = document.querySelectorAll('.color');

function selectColor(originEvent) {
  const eventTarget = originEvent.target;
  for (let index = 0; index < colorsPalette.length; index += 1) {
    colorsPalette[index].classList.remove('selected');
  }
  eventTarget.classList.add('selected');
}

for (let index = 0; index < colorsPalette.length; index += 1) {
  colorsPalette[index].addEventListener('click', selectColor);
}

const whiteBoxes = document.querySelectorAll('.pixel');

function paintBoxes(originBox) {
  const selectedColor = document.querySelector('.selected');
  const colorToFill = getComputedStyle(selectedColor).getPropertyValue('background-color');
  const boxToPaint = originBox.target;
  boxToPaint.style.backgroundColor = colorToFill;
}

for (let index = 0; index < whiteBoxes.length; index += 1) {
  whiteBoxes[index].addEventListener('click', paintBoxes);
}

function clearBoard() {
  const pixelsToClear = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelsToClear.length; index += 1) {
    pixelsToClear[index].style.backgroundColor = 'white';
  }
}

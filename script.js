const colors = document.querySelectorAll('.color');
const colorsArray = Array.from(colors);
const colorsArrayLength = colorsArray.length;
const blackColor = colorsArray[0];
const pixels = document.querySelectorAll('.pixel');
const pixelsArray = Array.from(pixels);
const pixelsArrayLength = pixelsArray.length;
const clearButton = document.querySelector('#clear-board');
blackColor.classList.add('selected');

function addSelected(originEvent) {
  const element = originEvent.target;
  for (let counter = 0; counter < colorsArrayLength; counter += 1) {
    if (colorsArray[counter].classList.contains('selected')) {
      colorsArray[counter].classList.remove('selected');
    }
  }
  element.classList.add('selected');
}

for (let index = 0; index < colorsArrayLength; index += 1) {
  colorsArray[index].addEventListener('click', addSelected);
}

function paintSquare(originEvent) {
  const selectedColorElement = document.querySelector('.selected');
  const selectedColor = getComputedStyle(selectedColorElement).backgroundColor;
  const myPixel = originEvent.target;
  myPixel.style.background = selectedColor;
}

for (let index = 0; index < pixelsArrayLength; index += 1) {
  pixelsArray[index].addEventListener('click', paintSquare);
}

function clearBoard() {
  for (let index = 0; index < pixelsArrayLength; index += 1) {
    pixelsArray[index].style.background = 'white';
  }
}

clearButton.addEventListener('click', clearBoard);
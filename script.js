let firstColor = document.getElementById('color-palette').children[0];
let secondColor = document.getElementById('color-palette').children[1];
let thirdColor = document.getElementById('color-palette').children[2];
let fourthColor = document.getElementById('color-palette').children[3];

let buttonClear = document.getElementById('clear-board');

let arrayColors = [firstColor, secondColor, thirdColor, fourthColor];

let arrayPixels = document.getElementsByClassName('pixel');

function handleBlackFirst(element) {
  element.style.background = 'black';
}
handleBlackFirst(firstColor);

secondColor.style.background = '#2A522E';
thirdColor.style.background = '#275AD8';
fourthColor.style.background = '#E7C857';

function handleSelectColor(event) {
  let elementSelectorClass = document.querySelector('.selected');
  elementSelectorClass.classList.remove('selected');
  event.target.classList.add('selected');
}

for (color of arrayColors) {
  color.addEventListener('click', handleSelectColor);
}

function handlePaint(event) {
  let elementSelectorClass = document.querySelector('.selected');
  event.target.style.background = elementSelectorClass.style.background;
}
for (pixel of arrayPixels) {
  pixel.addEventListener('click', handlePaint);
}

function handleClearBoard() {
  for (pixel of arrayPixels) {
    pixel.style.background = 'white';
  }
}
buttonClear.addEventListener('click', handleClearBoard);

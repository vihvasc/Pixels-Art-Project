let firstColor = document.getElementById('color-palette').children[0];
let secondColor = document.getElementById('color-palette').children[1];
let thirdColor = document.getElementById('color-palette').children[2];
let fourthColor = document.getElementById('color-palette').children[3];

let pixelBoard = document.getElementById('pixel-board');

let buttonClear = document.getElementById('clear-board');
let buttonAdd = document.getElementById('generate-board');

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

function handleCreateBoard(number) {
  for (let count = 0; count < number ** 2; count += 1) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);

    pixelBoard.style.width = 42 * number + 'px';
    pixelBoard.style.height = 42 * number + 'px';
  }
}
let initialNumber = 5;
handleCreateBoard(initialNumber);

function handleDeleteBoard() {
  pixelBoard.innerHTML = '';
}

function handleInput() {
  let inputValue = parseInt(document.getElementById('board-size').value, 10);
  if (inputValue > 4 && inputValue < 51) {
    handleDeleteBoard();
    handleCreateBoard(inputValue);

    arrayPixels = document.getElementsByClassName('pixel');
    for (pixel of arrayPixels) {
      pixel.addEventListener('click', handlePaint);
    }
  } else {
    alert('Board inválido!');
  }
}
buttonAdd.addEventListener('click', handleInput);

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

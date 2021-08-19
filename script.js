let firstColor = document.getElementById('color-palette').children[0];
let secondColor = document.getElementById('color-palette').children[1];
let thirdColor = document.getElementById('color-palette').children[2];
let fourthColor = document.getElementById('color-palette').children[3];

let pixelBoard = document.getElementById('pixel-board');

let buttonClear = document.getElementById('clear-board');
let buttonAdd = document.getElementById('generate-board');
let buttonRandomize = document.getElementById('randomize-btn');

let arrayColors = [firstColor, secondColor, thirdColor, fourthColor];

let arrayPixels = document.getElementsByClassName('pixel');

function handleBlackFirst(element) {
  element.style.background = 'black';
}
handleBlackFirst(firstColor);

/*
 * Consultei o blog abaixo para entender como criar uma função para gerar cores RGB aleatórias
 * Source: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
 */
function handleRandomColor() {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function handleRandomizePalette() {
  secondColor.style.background = handleRandomColor();
  thirdColor.style.background = handleRandomColor();
  fourthColor.style.background = handleRandomColor();
}
handleRandomizePalette();

buttonRandomize.addEventListener('click', handleRandomizePalette);

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
    handleRenewBoard(inputValue);
  } else if (inputValue > 50) {
    handleRenewBoard(50);
  } else if (inputValue < 5) {
    handleRenewBoard(5);
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
function handleAddPixelListener() {
  for (pixel of arrayPixels) {
    pixel.addEventListener('click', handlePaint);
  }
}

handleAddPixelListener();

function handleRenewBoard(number) {
  handleDeleteBoard();
  handleCreateBoard(number);
  handleAddPixelListener();
}

function handleClearBoard() {
  for (pixel of arrayPixels) {
    pixel.style.background = 'white';
  }
}
buttonClear.addEventListener('click', handleClearBoard);

/*
 * Requisitos bônus (10, 11 e 12) feito em pair coding com o Gabriel Jorge (https://github.com/GabrielJorge94)
 */

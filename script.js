// Variaveis id = color-palette
const firstColor = document.getElementById('firstColor');
firstColor.classList.add('selected'); // Requisito 6
const secondColor = document.getElementById('secondColor');
const thirdColor = document.getElementById('thirdColor');
const fourthColor = document.getElementById('fourthColor');
// outras variaveis
const pixelBoard = document.querySelector('#pixel-board');
const clearButton = document.getElementById('clear-board');
const sizeBoard = document.querySelector('#board-size');
const buttonInputSize = document.querySelector('#generate-board');

// Requisito 4
function createPixelDivs() {
  let linesDiv;
  let colunsDiv;

  for (let line = 0; line < 5; line += 1) {
    linesDiv = document.createElement('div');

    for (let coluns = 0; coluns < 5; coluns += 1) {
      colunsDiv = document.createElement('div');
      colunsDiv.classList = 'pixel';
      linesDiv.appendChild(colunsDiv);
    }

    pixelBoard.appendChild(linesDiv);
  }
}
createPixelDivs();

// requisito 7
function addAndRemoveClassSelected(event) {
  const addAndRemove = document.querySelector('.selected');

  addAndRemove.classList.remove('selected');
  event.target.classList.add('selected');
}
firstColor.addEventListener('click', addAndRemoveClassSelected);
secondColor.addEventListener('click', addAndRemoveClassSelected);
thirdColor.addEventListener('click', addAndRemoveClassSelected);
fourthColor.addEventListener('click', addAndRemoveClassSelected);

// utilizando para pegar o style backgroundColor;
// /* source https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp */
// requisito 8
function selectColor(event) {
  const evento = event.target;
  const color = document.querySelector('.selected');
  const theCSSprop = window.getComputedStyle(color).getPropertyValue('background-color');

  evento.style.backgroundColor = theCSSprop;
}

const allPixel = document.querySelectorAll('.pixel');

function paintPixel() {
  for (let i = 0; i < allPixel.length; i += 1) {
    allPixel[i].addEventListener('click', selectColor);
  }
}
paintPixel();

// requisito 9
function clearPixel() {
  for (let i = 0; i < allPixel.length; i += 1) {
    allPixel[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearPixel);

// requisito 10
function verifyInput() {
  const inputValue = sizeBoard.value;
  if (inputValue === '') {
    alert('Board inválido!');
  }

  if (inputValue > 50) {
    sizeBoard.value = 50;
  } else if (inputValue < 5) {
    sizeBoard.value = 5;
  }
}
// utilizado para remover Board antes de criar outra;
// /* https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes */
function verifyChildNodes() {
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
}

function createBoard() {
  const size = sizeBoard.value;

  for (let index = 0; index < size; index += 1) {
    const linesDiv = document.createElement('div');
    pixelBoard.appendChild(linesDiv);
    for (let index2 = 0; index2 < size; index2 += 1) {
      const colunsDiv = document.createElement('div');
      colunsDiv.className = 'pixel';
      linesDiv.appendChild(colunsDiv);
    }
  }
}

buttonInputSize.addEventListener('click', () => {
  verifyInput();
  verifyChildNodes();
  createBoard();
});

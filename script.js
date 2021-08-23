window.onload = function () {
  createClearButton();
  createGenerateBoardButton();
  createInputToBoardSize();
  mountBoard();
};

function createClearButton (){
  const selectSectionPixelBoard = document.getElementById('pixel-board');
  const selectMainSection = document.getElementById('main-section');
  const buttonClearer = document.createElement('button');
  buttonClearer.innerText = 'Limpar';
  buttonClearer.id = 'clear-board';
  buttonClearer.style.marginTop = '10px';
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


function createGenerateBoardButton() {
  const sectionPixelBoard = document.getElementById('pixel-board');
  const sectionMain = document.getElementById('main-section');
  const buttonSizer = document.createElement('button');
  buttonSizer.innerText = 'VQV';
  buttonSizer.id = 'generate-board';
  buttonSizer.style.marginTop = '10px';
  sectionMain.insertBefore(buttonSizer, sectionPixelBoard);
}

function createInputToBoardSize() {
  const sectionPixelBoard = document.getElementById('pixel-board');
  const sectionMain = document.getElementById('main-section');
  const inputSizer = document.createElement('input');
  inputSizer.placeholder = 'entre 5 e 50';
  inputSizer.type = 'number';
  inputSizer.width = '30px';
  inputSizer.min = '1';
  inputSizer.max = '50';
  inputSizer.id = 'board-size';
  inputSizer.style.marginTop = '10px';
  inputSizer.addEventListener('change', getBoardSize);
  sectionMain.insertBefore(inputSizer, sectionPixelBoard.previousSibling);
}

function getBoardSize(receivedEvent) {
  const receivedValue = receivedEvent.target.value;
  console.log(receivedValue);
  const changeInputValue = document.getElementById('board-size');
  console.log(changeInputValue.value);
  if (receivedValue < 5) {
    console.log('Valor mínimo é 5.');
    changeInputValue.value = 5;
  }
  if (receivedValue > 50) {
    console.log('Valor máximo é 50.');
    changeInputValue.value = 50;
  }
  if(isNaN(receivedValue) || !receivedValue) {
    console.log('Favor informar um valor numérico inteiro entre 5 e 50.');
    window.alert('Board inválido!');
    changeInputValue.value = 0;
    changeInputValue.focus();
  }
}

function mountBoard() {
  const clearButton = document.getElementById('generate-board');
  let boardToClear = document.querySelectorAll('#pixel-board *');

  clearButton.addEventListener('click', () => {
    boardToClear = document.querySelectorAll('#pixel-board *');
    for (let index = 0; index < boardToClear.length; index += 1) {
      boardToClear[index].parentNode.removeChild(boardToClear[index]);
    }
    const boardToMount = document.getElementById('pixel-board');
    const numberOfPixels = document.getElementById('board-size').value;
    for (let index = 0; index < numberOfPixels; index += 1) {
      const newLine = document.createElement('div');
      newLine.classList.add('line');
      boardToMount.appendChild(newLine);
    }
    console.log(document.getElementsByClassName('line'));
    const lines = document.getElementsByClassName('line');
    for (let index = 0; index < lines.length; index += 1) {
      for(let index = 0; index < numberOfPixels; index += 1) {
        const newPixel = document.createElement('div');
        newPixel.classList.add('pixel');
        newPixel.addEventListener('click', paintBoxes);
        lines[index].appendChild(newPixel);
      }
    }
  });
}
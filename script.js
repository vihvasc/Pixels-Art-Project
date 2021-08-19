// reference DOM
const selectId = document.querySelector('#pixel-board');
const selectColor = document.querySelectorAll('.color');
const selectBoard = document.querySelector('#generate-board');
const inputNumber = document.querySelector('#board-size');
let baseSquare = 5;

// Functions
function changeColorPalette() {
  selectColor.forEach((colorPosition) => {
    const color = colorPosition;
    const getColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
    color.style.backgroundColor = getColor;
  });
  selectColor[0].style.backgroundColor = 'black';
}

function colorTransfer() {
  const selectDiv = document.querySelectorAll('.pixel');
  for (const pixel of selectDiv) {
    pixel.addEventListener('click', () => {
      const sele = window.getComputedStyle(document.querySelector('.selected'));
      const changecolor = sele.getPropertyValue('background-color');
      pixel.style.backgroundColor = changecolor;
    });
  }
}

function crateSquare() {
  const baseBords = baseSquare;
  for (let index = 0; index < baseBords; index += 1) {
    for (let main = 0; main < baseBords; main += 1) {
      const creatColunm = document.createElement('div');
      creatColunm.classList.add('pixel');
      selectId.appendChild(creatColunm);
    }
  }
  selectId.style.gridTemplateRows = `repeat(${baseBords}, 40px)`;
  selectId.style.gridTemplateColumns = `repeat(${baseBords}, 40px)`;
  colorTransfer();
}

function cleanBord() {
  const pix = document.querySelectorAll('.pixel');
  pix.forEach((square) => {
    square.remove();
  });
}

function sendBoard() {
  let valueNumber = inputNumber.value;
  if (valueNumber < 5) { valueNumber = 5; }
  if (valueNumber > 50) { valueNumber = 50; }

  if (inputNumber.value === '') {
    window.alert('Board inválido!');
  } else {
    cleanBord();
    baseSquare = valueNumber;
    crateSquare();
  }
}

function getColorButton() {
  for (const color of selectColor) {
    color.addEventListener('click', (event) => {
      const selectColor = document.querySelector('.selected');
      selectColor.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}

function buttonClear() {
  const buttonPosition = document.querySelector('#clear-board');
  const selectDiv = document.querySelectorAll('.pixel');
  buttonPosition.addEventListener('click', () => {
    for (const butclear of selectDiv) {
      const getColor = window.getComputedStyle(butclear);
      const diColor = getColor.getPropertyValue('background-color');
      if (butclear.style.backgroundColor === diColor) { butclear.style.backgroundColor = 'white'; }
    }
  });
}

// Click
selectBoard.addEventListener('click', sendBoard);

window.onload = () => {
  crateSquare();
  changeColorPalette();
  getColorButton();
  buttonClear();
};

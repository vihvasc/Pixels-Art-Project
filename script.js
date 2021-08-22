const square = document.body.querySelector('#pixel-board');
let numberLine = 5;
const initialSize = 25;
let boardSize = numberLine ** 2;

function squarePixel(number) {
  for (let index = 1; index <= boardSize; index += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    const squareSize = numberLine * 42;
    square.style.width = `${squareSize}px`;

    square.appendChild(pixels);
  }
}
squarePixel(numberLine);

const input = document.getElementById('board-size');
const buttonVQV = document.getElementById('generate-board');

buttonVQV.addEventListener('click', function () {
  numberLine = input.value;
  console.log(numberLine);
  boardSize = numberLine * numberLine;
  cleanBoard();
  if (numberLine < 5 || numberLine > 50 || numberLine === '') {
    alert('Board inválido');
  } else {
    squarePixel(numberLine);
  }
});

function cleanBoard() {
  square.innerHTML = '';
}

const quadros = document.getElementsByClassName('pixel');

const getColor = document.querySelectorAll('.color');
getColor[0].style.backgroundColor = 'black';
getColor[1].style.backgroundColor = 'purple';
getColor[2].style.backgroundColor = 'grey';
getColor[3].style.backgroundColor = 'pink';

for (let index = 0; index < getColor.length; index += 1) {
  getColor[index].addEventListener('click', function (event) {
    for (let contador = 0; contador < getColor.length; contador += 1) {
      getColor[contador].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

const pixels = document.getElementsByClassName('pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', changeColor);
}

function changeColor(pixel) {
  const selectedColor = document.getElementsByClassName('selected')[0];
  pixel.target.style.backgroundColor = selectedColor.style.backgroundColor;
}

const button = document.getElementById('clear-board');
button.addEventListener('click', clearBoard);

function clearBoard() {
  const clear = document.getElementsByClassName('pixel');
  for (let index = 0; index < clear.length; index += 1) {
    const pixel = clear[index];
    pixel.style.backgroundColor = 'white';
  }
}

// variáveis globais

const paletteList = document.querySelectorAll('.color');
let pixelBoard = document.querySelectorAll('.pixel');
let board = document.getElementById('pixel-board');
let selectedColor = 'Black';
const button = document.getElementById('clear-board');
const boardButton = document.getElementById('generate-board');
const boardInput = document.getElementById('board-size');
let boardColumns = 5;

function validatesValue() {
  const data = document.getElementById('board-size');
  if (data.value === '') {
    alert('Board inválido!');
    return;
  }
  if (data.value < 5) {
    boardColumns = 5;
  }
  if (data.value > 50) {
    boardColumns = 50;
  }
}

function resetSize() {
  pixelBoard = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelBoard.length; i += 1) {
    board.removeChild(pixelBoard[i]);
  }
}

function paint() {
  event.target.style.backgroundColor = selectedColor;
}

function selectColor() {
  for (let i = 0; i < paletteList.length; i += 1) {
    if (event.target === paletteList[i]) {
      paletteList[i].classList.add('selected');
      selectedColor = paletteList[i].style.backgroundColor;
    } else {
      paletteList[i].classList.remove('selected');
    }
  }
}

function clearBoard() {
  pixelBoard = document.querySelectorAll('.pixel');
  for (const key of pixelBoard) {
    key.style.backgroundColor = 'white';
  }
}

function createEvent() {
  pixelBoard = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelBoard.length; i += 1) {
    pixelBoard[i].addEventListener('click', paint);
  }

  for (let i = 0; i < paletteList.length; i += 1) {
    paletteList[i].addEventListener('click', selectColor);
  }
  button.addEventListener('click', clearBoard);
}

// função que cria os grids para o pixel-board
function createBoard() {
  validatesValue();
  resetSize();
  for (let i = 0; i < boardColumns ** 2; i += 1) {
    const box = document.createElement('div');
    box.classList.add('pixel');
    box.classList.add('box');

    board = document.querySelector('#pixel-board');
    board.appendChild(box);

    const stringGrid = `repeat(${boardColumns}, 40px)`;
    board.style.gridTemplateColumns = stringGrid;
    createEvent();
  }
}

createBoard();

function getValue(event) {
  boardColumns = event.target.value;
  validatesValue();
}

boardInput.addEventListener('change', getValue);
boardButton.addEventListener('click', createBoard);

// seta a primeira cor da paleta como preto
function firstColor() {
  const firstBox = document.querySelector('.color');
  firstBox.style.backgroundColor = 'black';
  firstBox.className = 'selected color box';
}

firstColor();

// randomizar cores da palheta

function randomNumber() {
  let number = Math.random() * 100;
  if (number > 255 || number < 0) {
    number = Math.random() * 100;
  }
  return number;
}

function rgbString() {
  const red = randomNumber();
  const green = randomNumber();
  const blue = randomNumber();

  const string = `rgb(${red}, ${green}, ${blue})`;
  console.log(string);
  return string;
}

function fillPalette() {
  const boxes = document.querySelectorAll('.color');

  for (let i = 1; i < boxes.length; i += 1) {
    boxes[i].style.backgroundColor = rgbString();
    if (boxes[i].style.backgroundColor === 'black') {
      boxes[i].style.backgroundColor = rgbString();
    }
  }
}

fillPalette();

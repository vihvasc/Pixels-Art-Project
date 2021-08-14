const paletteItem = document.getElementsByClassName('color');
const takeBody = document.getElementById('main-container');
const takeBtns = document.getElementById('btns-container');
let gridLength = 5;
let currentColor = 'rgba(0,0,0)';
paletteItem[0].style.backgroundColor = currentColor;

const listColor = ['rgba(0,0,0)'];
const listColorLength = 4;

// Crédito para função de gerar cor: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function generateRandomColor() {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  const cor = `rgb(${red}, ${green}, ${blue})`;

  return cor;
}

function percorreLista(boleano, cor) {
  let check = boleano;
  check = false;
  for (let i = 0; i < listColor.length; i += 1) {
    const element = listColor[i];
    if (element === cor) {
      check = true;
    }
  }
  return check;
}
function checkExistence() {
  let verify = true;
  let newColor = generateRandomColor();
  while (verify) {
    verify = percorreLista(verify, newColor);
    newColor = generateRandomColor();
  }
  return newColor;
}

function appendListColor() {
  for (let i = 1; i < listColorLength; i += 1) {
    const newColor = checkExistence();
    listColor.push(newColor);
  }
}

function pickColor(evento) {
  const newColor = getComputedStyle(evento.target);
  for (let index = 0; index < paletteItem.length; index += 1) {
    const item = paletteItem[index];
    item.classList.remove('selected');
  }
  evento.target.classList.add('selected');
  currentColor = newColor.backgroundColor;
}

function appendPaletteColor() {
  paletteItem[0].classList.add('selected');
  for (let index = 0; index < paletteItem.length; index += 1) {
    paletteItem[index].style.backgroundColor = listColor[index];
    paletteItem[index].addEventListener('click', pickColor);
  }
}

function changeColor(evento) {
  const fundo = evento.target;

  fundo.style.backgroundColor = currentColor;
}

function generateGrid(tamanho) {
  const containerGrid = document.createElement('div');
  containerGrid.id = 'pixel-board';

  for (let linha = 0; linha < tamanho; linha += 1) {
    const contaienrLine = document.createElement('div');
    contaienrLine.className = 'grid-line';
    for (let coluna = 0; coluna < tamanho; coluna += 1) {
      const containerColumn = document.createElement('div');
      containerColumn.className = 'pixel';
      containerColumn.addEventListener('click', changeColor);

      contaienrLine.appendChild(containerColumn);
    }
    containerGrid.appendChild(contaienrLine);
  }
  takeBody.append(containerGrid);
}

function clearBoard() {
  const listPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < listPixels.length; index += 1) {
    const pixel = listPixels[index];
    pixel.style.backgroundColor = 'white';
  }
}

function generateClearBnt() {
  const btn = document.createElement('button');
  btn.id = 'clear-board';
  btn.innerText = 'Limpar';
  btn.addEventListener('click', clearBoard);

  takeBtns.appendChild(btn);
}

function generateGridInput() {
  const input = document.createElement('input');
  input.id = 'board-size';
  input.type = 'number';
  input.min = 1;

  takeBtns.appendChild(input);
}

function checkRange(range) {
  let tamanho = range;
  if (range < 5) {
    tamanho = 5;
  } else if (range > 50) {
    tamanho = 50;
  }
  return tamanho;
}

function callBoardChange() {
  const input = document.getElementById('board-size');
  const currentPixelBoard = document.getElementById('pixel-board');
  if (input.value === '') {
    alert('Board inválido!');
  } else {
    gridLength = checkRange(input.value);
    currentPixelBoard.remove();
    generateGrid(gridLength);
  }
}

function generateGridBnt() {
  const btn = document.createElement('button');
  btn.id = 'generate-board';
  btn.innerText = 'VQV';
  btn.addEventListener('click', callBoardChange);

  takeBtns.append(btn);
}

function iniciando() {
  appendListColor();
  appendPaletteColor();
  generateClearBnt();
  generateGridInput();
  generateGridBnt();
  generateGrid(gridLength);
}

window.onload = iniciando;

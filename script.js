const paletteItem = document.getElementsByClassName('color');
const takeBody = document.getElementsByTagName('body');
const listColor = ['rgba(0,0,0)', 'rgba(51, 221, 255)', 'rgba(245, 214, 34)', 'rgba(245, 32, 34)'];
const gridLength = 5;
let currentColor = 'rgba(0,0,0)';
paletteItem[0].style.backgroundColor = currentColor;

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

function generateGrid() {
  const containerGrid = document.createElement('div');
  containerGrid.id = 'pixel-board';

  for (let linha = 0; linha < gridLength; linha += 1) {
    const contaienrLine = document.createElement('div');
    contaienrLine.className = 'grid-line';
    for (let coluna = 0; coluna < gridLength; coluna += 1) {
      const containerColumn = document.createElement('div');
      containerColumn.className = 'pixel';
      containerColumn.addEventListener('click', changeColor);

      contaienrLine.appendChild(containerColumn);
    }
    containerGrid.appendChild(contaienrLine);
  }
  takeBody[0].appendChild(containerGrid);
}

function iniciando() {
  appendPaletteColor();
  generateGrid();
}

window.onload = iniciando;

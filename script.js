// Requisito 1

const h1 = document.createElement('h1');
h1.id = 'title';
h1.innerText = 'Paleta de Cores';
document.body.appendChild(h1);

// Requisito 2 e 3

function createDivPai() {
  const div = document.createElement('div');
  div.id = 'color-palette';
  document.body.appendChild(div);
}

createDivPai();

function createDivFilhas() {
  const arrayColors = ['black', 'blue', 'pink', 'yellow'];
  for (let index = 0; index < 4; index += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    div.style.backgroundColor = arrayColors[index];
    div.style.border = '1px solid black';
    const divCores = document.querySelector('#color-palette');
    divCores.appendChild(div);
  } const color = document.querySelector('.color');
  color.className = 'color selected';
}

createDivFilhas();

// Requisito 4

function divPixelsBoard() {
  const div = document.createElement('div');
  div.id = 'pixel-board';
  document.body.appendChild(div);
  for (let index = 0; index < 25; index += 1) {
    const div1 = document.createElement('div');
    div1.className = 'pixel';
    div1.style.backgroundColor = 'white';
    const pixelBoard = document.getElementById('pixel-board');
    pixelBoard.appendChild(div1);
  }
}

divPixelsBoard();

function colorBlack() {
  const color = document.querySelectorAll('.color');
  color.className = 'color selected';
}
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
  }
}

createDivFilhas();

// Requisito 4 e 5

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

// Exercício 06

let color = document.querySelector('.color');
color.classList.add('selected');

// Exercício 07

function addSelected() { // adicionando classe selected elemento selecionado
  const colorsAll = document.getElementsByClassName('color');
  for (let index = 0; index < colorsAll.length; index += 1) {
    colorsAll[index].addEventListener('click', function(event) {
    color.classList.remove('selected');
    event.target.classList.add('selected');
    color = event.target;
    });
  }
}
addSelected();

// Exercício 8

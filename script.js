// Requisito 01
function createTitle() {
  const h1 = document.createElement('h1');
  h1.id = 'title';
  h1.innerText = 'Paleta de Cores';
  document.querySelector('body').appendChild(h1);
}
createTitle();

// Requsito 02 e 03
function createPalette() {
  const createList = document.createElement('div');
  createList.id = 'color-palette';
  document.querySelector('body').appendChild(createList);
  addColor();
}

const colors = ['#000000', '#ffb3ff', '#b3ffcc', '#ccb3ff'];

function addColor() {
  for (let index = 0; index < colors.length; index += 1) {
    const colorPallete = document.createElement('div');
    colorPallete.className = 'color';
    colorPallete.style.border = '1px solid black';
    colorPallete.style.display = 'inline-block';
    colorPallete.style.margin = '10px';
    colorPallete.style.width = '40px';
    colorPallete.style.height = '40px';
    colorPallete.style.backgroundColor = colors[index];
    document.querySelector('#color-palette').appendChild(colorPallete);
  }
}
createPalette();

// Requisito 04 e 05

let gridSize = 5;

function pixelBoard() {
  const createBoard = document.createElement('div');
  createBoard.id = 'pixel-board';
  document.querySelector('body').appendChild(createBoard);
  createPixels();
}

function createPixels() {
  for (let line = 0; line < gridSize; line += 1) {
    const createLine = document.createElement('div');
    createLine.id = 'pixel-line';
    createLine.style.height = '40px';
    document.getElementById('pixel-board').appendChild(createLine);
    for (let cols2 = 0; cols2 < 1; cols2 += 1) {
      for (let cols = 0; cols < gridSize; cols += 1) {
        const createColumn = document.createElement('div');
        createColumn.className = 'pixel';
        createColumn.style.border = '1px solid black';
        createColumn.style.display = 'inline-block';
        createColumn.style.width = '40px';
        createColumn.style.height = '40px';
        createColumn.style.backgroundColor = '#ffffff';
        createLine.appendChild(createColumn);
      }
    }
  }
}

pixelBoard();

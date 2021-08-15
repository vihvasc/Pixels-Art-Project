// Requisito 01
const h1 = document.createElement('h1');

function createTitle() {
  h1.id = 'title';
  h1.innerText = 'Paleta de Cores';
  document.querySelector('body').appendChild(h1);
}
createTitle();

// Requsito 02 e 03
let color1 = getRandomColor();
let color2 = getRandomColor();
let color3 = getRandomColor();

let colors = ['#000000', color1, color2, color3];

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
function createPalette() {
  const createList = document.createElement('div');
  createList.id = 'color-palette';
  document.querySelector('body').appendChild(createList);
  addColor();
}

createPalette();

// Requisito 04 e 05

let gridSize = 5;
function createPixels() {
  for (let line = 0; line < gridSize; line += 1) {
    const createLine = document.createElement('div');
    createLine.id = 'pixel-line';
    createLine.style.height = '40px';
    document.getElementById('pixel-board').appendChild(createLine);
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

function pixelBoard() {
  const createBoard = document.createElement('div');
  createBoard.id = 'pixel-board';
  createBoard.style.margin = '10px';
  document.querySelector('body').appendChild(createBoard);
  createPixels();
}

pixelBoard();

// Requisito 06
let initialColor = document.querySelector('.color');
initialColor.classList.add('selected');

// Requisito 07
let changeColor = document.querySelectorAll('.color');

function addClass() {
  for (let i = 0; i < changeColor.length; i += 1) {
    changeColor[i].addEventListener('click', function (event) {
      initialColor.classList.remove('selected');
      event.target.classList.add('selected');
      initialColor = event.target;
    });
  }
}

addClass();

// Requisito 08
let catchPixels = document.getElementsByClassName('pixel');
function changePixelColor() {
  for (let curColor = 0; curColor < catchPixels.length; curColor += 1) {
    catchPixels[curColor].addEventListener('click', function(event){
      let currentColor = initialColor.style.backgroundColor;
      event.target.style.backgroundColor = currentColor;
    })
  }
}

changePixelColor();

// Requisito 09
function createButton(buttonId, buttonText, insBeforeId) {
  let button = document.createElement('button');
  button.id = buttonId;
  button.innerText = buttonText;
  document.body.insertBefore(button, document.getElementById(insBeforeId));
}

function clearButton() {
  createButton('clear-board', 'Limpar', 'pixel-board');
  let clearBoard = document.querySelector('#clear-board');
  clearBoard.style.marginLeft = '10px';
  clearBoard.addEventListener('click', function(event){
    for (let pix = 0; pix < catchPixels.length; pix += 1) {
    catchPixels[pix].style.backgroundColor = 'white';
    }
  });
}
clearButton()

// Requisito 10
let input = document.createElement('input');
function inputSize() {
  input.id = 'board-size';
  input.style.width = '40px';
  input.style.margin = '10px';
  input.type = 'number';
  input.min = 1;
  document.body.insertBefore(input, document.getElementById('pixel-board'));
}
inputSize();

function inputButtons() {
  createButton('generate-board', 'VQV', 'pixel-board');
  let inputButton = document.querySelector('#generate-board');
  inputButton.addEventListener('click', function(){
    if (input.value === '') {
      alert('Board inválido!');
      return;
    }
    if (input.value < 5) {
      input.value = 5;
    }
    if (input.value > 50) {
      input.value = 50;
    }
      eraseGrid();
      gridSize = input.value;
      pixelBoard();
      changePixelColor();
  });
}

inputButtons();

function eraseGrid() {
  document.body.removeChild(document.querySelector('#pixel-board'));
}

// Requisito 12
// Fonte: https://www.youtube.com/watch?v=UNIlt7_oMQQ
function getRandomColor() {
	let letters = '0123456789ABCDEF';
  let color = '#';
  for (let count = 0; count < 6; count += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
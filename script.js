const colorList = ['black', 'gray', 'blue', 'green'];
const pixelBoardSize = 5;
const colorPallete = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const buttonContainer = document.getElementById('button-container');

createColorPallete(colorList);
createGenerateBoardInput();
createGenerateBoardButton();
createClearBoardButton();
createPixelBoard(pixelBoardSize);

// Cor Preta é selecionada inicialmente
colorPallete.firstChild.classList.add('selected');

// Adiciona evento ao botão para receber o tamanho do pixel board
const generateBoardButton = document.getElementById('generate-board');

generateBoardButton.addEventListener('click', generateBoard);

// Adiciona o evento de click na pleta de cores
const colors = document.getElementsByClassName('color');
for (let color of colors) {
  color.addEventListener('click', selectColor);
}

// Adiciona evento de click em todos Pixels
addClickOnPixels();

// Adicona evento de click no botão clear board
const clearBoardButton = document.getElementById('clear-board');
clearBoardButton.addEventListener('click', clearPixelBoard);

// CRIANDO OS ELEMENTOS

// Cria a paleta com as cores presentes em colorList
function createColorPallete(colorList) {
  for (let color of colorList) {
    let newColor = document.createElement('div');

    newColor.classList.add('color');
    newColor.classList.add(color);
    newColor.style.backgroundColor = color;

    colorPallete.appendChild(newColor);
  }
}

// Gera um novo Pixel Board de acordo com o valor do input
function generateBoard() {
  let inputBoardSize = document.getElementById('board-size');
  let boardSize = inputBoardSize.value;

  if (boardSize) {
    boardSize = validateBoardSize(boardSize);
    createPixelBoard(boardSize);
    addClickOnPixels();
  } else {
    alert('Board inválido!');
  }
}

// Trata o valor recebido no input
function validateBoardSize(inputValue) {
  if (inputValue < 5) {
    inputValue = 5;
  } else if (inputValue > 50) {
    inputValue = 50;
  }

  return inputValue;
}

// Cria o pixel board com o tamanho  passado por parâmetro

function createPixelBoard(boardSize) {
  deletePixelBoard();
  let lines = createLines(boardSize);

  for (let line of lines) {
    for (let i = 0; i < boardSize; i += 1) {
      let pixel = createPixel();
      line.appendChild(pixel);
    }
  }
}

// Cria um pixel para o pixel board
function createPixel() {
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  return pixel;
}

// Cria as linhas do pixel board
function createLines(numberOfLines) {
  for (let i = 0; i < numberOfLines; i += 1) {
    let line = document.createElement('div');
    line.classList.add('line');
    pixelBoard.appendChild(line);
  }

  return document.getElementsByClassName('line');
}

function deletePixelBoard() {
  let lines = document.querySelectorAll('.line');
  if (lines) {
    for (let line of lines) {
      line.remove();
    }
  }
}
// Cria botão para para resetar o Pixel Board
function createClearBoardButton() {
  let clearBoardButton = document.createElement('button');
  clearBoardButton.id = 'clear-board';
  clearBoardButton.innerText = 'Limpar';
  buttonContainer.appendChild(clearBoardButton);
}

// Cria Input para o board size
function createGenerateBoardInput() {
  let inputContainer = document.getElementById('input-container');
  let input = document.createElement('input');

  input.id = 'board-size';
  input.type = 'number';
  input.min = '1';
  inputContainer.appendChild(input);
}

// Cria botao do input para o board size
function createGenerateBoardButton() {
  let inputContainer = document.getElementById('input-container');
  let button = document.createElement('button');

  button.innerText = '#VQV';
  button.id = 'generate-board';
  inputContainer.appendChild(button);
}

// FUNÇÕES DE EVENTOS

// Função para mudar a cor selecionada
function selectColor(event) {
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

// Função para pintar o pixel clicado
function paintPixel(event) {
  let color = document.querySelector('.selected');
  event.target.style.backgroundColor = color.style.backgroundColor;
}

// Função para limpar o Pixel Board
function clearPixelBoard() {
  let pixels = document.querySelectorAll('.pixel');

  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

// Função para criar adicionar evento de click nos Pixels
function addClickOnPixels() {
  let pixels = document.getElementsByClassName('pixel');
  for (let pixel of pixels) {
    pixel.addEventListener('click', paintPixel);
  }
}

const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const btnEraseCanvas = document.getElementById('clear-board');
const btnGenerateCanvas = document.getElementById('generate-board');
const inputBoardSize = document.getElementById('board-size');
let selectedColor;
const config = {
  colors: ['black'],
  pixelSize: 40,
  pixelSizeFormated: '40px',
  canvasLineLength: 5,
};

// Pinta um pixel.
function paintPixel(event) {
  const pixel = event.target;
  pixel.style.backgroundColor = selectedColor;
}

// Seleciona uma cor.
function selectColor(event) {
  const pixel = event.target;
  const previousSelected = document.querySelector('.selected');
  previousSelected.classList.remove('selected');
  pixel.classList.add('selected');
  selectedColor = pixel.style.backgroundColor;
}

// Cria uma div representando um pixel.
function createPixel(color, className) {
  const pixel = document.createElement('div');
  pixel.style.backgroundColor = color;
  pixel.style.width = config.pixelSizeFormated;
  pixel.style.height = config.pixelSizeFormated;
  pixel.classList.add(className);

  if (className === 'color') {
    pixel.addEventListener('click', selectColor);
  } else {
    pixel.addEventListener('click', paintPixel);
  }

  return pixel;
}

// Adiciona a paleta de cores na página.
function insertColorPalette() {
  for (let index = 0; index < config.colors.length; index += 1) {
    const colorBox = createPixel(config.colors[index], 'color');
    colorPalette.appendChild(colorBox);
  }
}

// Cria uma fileira de pixeis.
function createCanvasLine() {
  const line = document.createElement('div');
  line.className = 'color-line';
  line.style.height = config.pixelSizeFormated;
  for (let index = 0; index < config.canvasLineLength; index += 1) {
    const pixel = createPixel('white', 'pixel');
    line.appendChild(pixel);
  }

  return line;
}

// Insere o quadro de pixels a página.
function insertCanvas() {
  for (let index = 0; index < config.canvasLineLength; index += 1) {
    pixelBoard.appendChild(createCanvasLine());
  }
}

// Seleciona a primeira cor.
function selectFirstColor() {
  const firstColor = document.querySelector('.color');
  firstColor.classList.add('selected');
  selectedColor = firstColor.style.backgroundColor;
}

// Apaga/reseta o quadro.
function cleanCanvas() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

// Valida o input mínimo e máximo do quadro.
function validateSizeInput(value) {
  let fixedValue = value;

  if (value < 5) {
    fixedValue = 5;
  } else if (value > 50) {
    fixedValue = 50;
  }
  return fixedValue;
}

// Apaga o quadro.
function deleteCanvas() {
  const lines = document.getElementsByClassName('color-line');
  const linesLength = lines.length;
  for (let index = linesLength - 1; index >= 0; index -= 1) {
    lines[index].remove();
  }
}

// Determina o tamanho do quadro.
function changeCanvasSize() {
  if (inputBoardSize.value === '') {
    return alert('Board inválido!');
  }

  deleteCanvas();
  const sizeInput = validateSizeInput(inputBoardSize.value);
  config.canvasLineLength = sizeInput;
  inputBoardSize.value = sizeInput;
  insertCanvas();
}

// Gera um número aleatório entre 1 e 255 para o RGB.
function generateRandomNumber() {
  return Math.random() * (255 - 1) + 1;
}

// Gera uma cor aleatória em RGB.
function generateRandomRGB() {
  const red = generateRandomNumber();
  const green = generateRandomNumber();
  const blue = generateRandomNumber();
  const rgb = `rgb(${red},${green},${blue})`;
  return rgb;
}

// Insere uma paleta aleatória dentro da configuração.
function randomPalette() {
  for (let index = 1; index < 4; index += 1) {
    config.colors[index] = generateRandomRGB();
  }
}

function init() {
  randomPalette();
  insertColorPalette();
  insertCanvas();
  selectFirstColor();
  btnEraseCanvas.addEventListener('click', cleanCanvas);
  btnGenerateCanvas.addEventListener('click', changeCanvasSize);
}

window.onload = init;

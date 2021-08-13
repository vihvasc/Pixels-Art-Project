const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
let selectedColor;
const config = {
  colors: ['black', 'green', 'blue', 'yellow'],
  pixelSize: 40,
  pixelSizeFormated: '40px',
  canvasLength: 25,
  canvasLineLength: 5,
  canvasLineNumber: 5,
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
  for (let index = 0; index < config.canvasLineNumber; index += 1) {
    pixelBoard.appendChild(createCanvasLine());
  }
}

// Seleciona a primeira cor.
function SelectFirstColor() {
  const firstColor = document.querySelector('.color');
  firstColor.classList.add('selected');
  selectedColor = firstColor.style.backgroundColor;
}

function init() {
  insertColorPalette();
  insertCanvas();
  SelectFirstColor();
}

window.onload = init;

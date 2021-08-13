const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const config = {
  colors: ['black', 'green', 'blue', 'yellow'],
  pixelSize: 40,
  pixelSizeFormated: '40px',
  canvasLength: 25,
  canvasLineLength: 5,
  canvasLineNumber: 5,
};

// Cria uma div representando um pixel.
function createPixel(color, className) {
  const pixel = document.createElement('div');
  pixel.style.backgroundColor = color;
  pixel.style.width = config.pixelSizeFormated;
  pixel.style.height = config.pixelSizeFormated;
  pixel.classList.add(className);
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

// Adiciona o quadro de pixels a página.
function insertCanvas() {
  for (let index = 0; index < config.canvasLineNumber; index += 1) {
    pixelBoard.appendChild(createCanvasLine());
  }
}

function init() {
  insertColorPalette();
  insertCanvas();
}

window.onload = init;

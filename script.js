const pixelBoard = document.getElementById('pixel-board'); // Seleciona elemento de ID pixel-board

// Cria quadro de pixels
function createPixels(value) {
  for (let indexLines = 0; indexLines < value; indexLines += 1) {
    const lines = document.createElement('div');
    lines.className = 'lines';
    pixelBoard.appendChild(lines);
    for (let indexColumns = 0; indexColumns < value; indexColumns += 1) {
      const pixels = document.createElement('div');
      pixels.className = 'pixel';
      lines.appendChild(pixels);
    }
  }
}
createPixels(5);

// Cor preta inicialmente selecionada
const getColor = document.getElementsByClassName('color'); // Seleiona elementos com classe color

function setDefaultColor() {
  getColor[0].classList.add('selected');
}
setDefaultColor();

// Mudar cor selecionada
const color1 = document.getElementById('black-color');
const color2 = document.getElementById('red-color');
const color3 = document.getElementById('green-color');
const color4 = document.getElementById('blue-color');

function changeSelectedColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

color1.addEventListener('click', changeSelectedColor);
color2.addEventListener('click', changeSelectedColor);
color3.addEventListener('click', changeSelectedColor);
color4.addEventListener('click', changeSelectedColor);

// Pinta pixels com a cor selecionada
function setPixelColor(event) {
  const selectedColor = document.querySelector('.selected');
  const getPixelColor = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
  console.log(window.getComputedStyle(selectedColor));
  event.target.style.backgroundColor = getPixelColor;
}
pixelBoard.addEventListener('click', setPixelColor);

// Limpar quadro de pixels
const button = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');

function clearPixels() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clearPixels);

const numberOfLines = 5;
const numberOfColumns = 5;
const paletteColor = document.querySelectorAll('.color');
const blackPalette = document.getElementById('color-1');
const btnClear = document.getElementById('clear-board');
blackPalette.style.backgroundColor = 'black';

function generateRandomRGB() {
  const r = Math.floor(Math.random() * (255));
  const g = Math.floor(Math.random() * (255));
  const b = Math.floor(Math.random() * (255));
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

function generateColorPalette(palletColorNumber) {
  for (let index = 1; index < palletColorNumber; index += 1) {
    const palletElement = document.getElementsByClassName('color');
    palletElement[index].style.backgroundColor = generateRandomRGB();
  }
}

function createPixel(numberOfColumnsCP, divElementLine) {
  for (let index = 0; index < numberOfColumnsCP; index += 1) {
    const divElementPixel = document.createElement('div');
    divElementPixel.className = 'pixel';

    divElementLine.appendChild(divElementPixel);
  }
}

function createBoard(numberOfLinesCB, numberOfColumnsCB) {
  for (let index = 0; index < numberOfLinesCB; index += 1) {
    const divElementLine = document.createElement('div');
    divElementLine.className = 'pixel-line';

    createPixel(numberOfColumnsCB, divElementLine);

    document.getElementById('pixel-board').appendChild(divElementLine);
  }
}

createBoard(numberOfLines, numberOfColumns);

paletteColor.forEach((element) => {
  element.addEventListener('click', (elementTarget) => {
    const pixelElement = elementTarget;
    const pixel = document.getElementsByClassName('color');

    for (let index = 0; index < pixel.length; index += 1) {
      if (pixel[index].className === 'color selected') {
        pixel[index].className = 'color';
      }
    }
    pixelElement.target.className += ' selected';
  });
});

document.querySelectorAll('.pixel').forEach((element) => {
  element.addEventListener('click', (elementTarget) => {
    const pixelElement = elementTarget.target;
    const colorPalette = document.getElementsByClassName('selected')[0].style.backgroundColor;
    pixelElement.style.backgroundColor = colorPalette;
  });
});

btnClear.addEventListener('click', () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

generateColorPalette(4);

/* refs utilizadas:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input
https://ricardo-reis.medium.com/o-m%C3%A9todo-foreach-do-array-javascript-878cec42f66c
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
*/

function getRandomColor() {
/* Função pronta de um artigo do stackOverflow, porém sei exatamente como funciona. */
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function createColorPalette() {
  for (let i = 1; i <= 4; i += 1) {
    const colorPalette = document.querySelector('#color-palette');
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorDiv.id = `color-${i}`;
    colorPalette.appendChild(colorDiv);
    if (i > 1) {
      document.getElementById(`color-${i}`).style.backgroundColor = getRandomColor();
    }
  }
}

createColorPalette();

const input = document.querySelector('#board-size');
function alertAndLimiters() {
  if (input.value === '' || input.value === 0) {
    alert('Board inválido!');
  }
  if (input.value < 5) {
    input.value = 5;
  }
  if (input.value > 50) {
    input.value = 50;
  }
}

function pixelColorer() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < (pixels.length); i += 1) {
    pixels[i].addEventListener('click', () => {
      const co = window.getComputedStyle(document.querySelector('.color.selected')).backgroundColor;
      /* co means colorer */
      if (pixels[i].style.backgroundColor !== co) {
        pixels[i].style.backgroundColor = co;
      } else {
        pixels[i].style.backgroundColor = 'unset';
      }
    });
  }
}

function createPixelBoard() {
  alertAndLimiters();
  let boardSize = input.value; let pixelLength = `${(input.value * 42)}px`;
  const pixelBoardSize = document.getElementById('pixel-board');
  const pixelBoard = document.querySelector('#pixel-board');
  if (input.value === '') {
    pixelLength = `${(5 * 42)}px`; boardSize = 5;
  }
  pixelBoardSize.style.width = pixelLength; pixelBoardSize.style.height = pixelLength;
  if (pixelBoard.childNodes.length > 0) {
    for (let u = (pixelBoard.childNodes.length - 1); u >= 0; u -= 1) {
      pixelBoard.removeChild(pixelBoard.childNodes[u]);
    }
  }
  for (let i = 1; i <= (boardSize ** 2); i += 1) {
    const pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel'; pixelBoard.appendChild(pixelDiv);
  }
  pixelColorer();
}

createPixelBoard();

document.querySelector('#generate-board').addEventListener('click', createPixelBoard);

function firstSelectedColor() {
  const colorBlack = document.querySelector('#color-1');
  colorBlack.classList.add('selected');
}
firstSelectedColor();

const colors = document.querySelectorAll('.color');
for (let l = 0, colorsLength = colors.length; l < colorsLength; l += 1) {
  colors[l].addEventListener('click', () => {
    for (let l2 = 0; l2 < colorsLength; l2 += 1) {
      if (colors[l2].classList.contains('selected')) {
        colors[l2].classList.remove('selected');
      }
    }
    colors[l].classList.add('selected');
  });
}

function clearButton() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0, pixelsLength = pixels.length; i < pixelsLength; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}
clearButton();

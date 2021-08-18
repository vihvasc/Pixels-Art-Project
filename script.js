// loop para adicionar o mesmo evento em vários elementos
// técnica de event bubbling combinada com classList
// ver https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
// ver https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
// Colocar projeto no GitHub

// Gera cores aleatórias em RGB
// Obtida do usuário adeneo em
// https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
function randomRgba() {
  const o = Math.round;
  const r = Math.random;
  const s = 255;

  let cor1 = o(r() * s) + 1;
  let cor2 = o(r() * s) + 1;
  let cor3 = o(r() * s) + 1;

  if ((cor1 === 255) && (cor2 === 255) && (cor3 === 255)) {
    cor1 = o(r() * (s - 1));
    cor2 = o(r() * (s - 1));
    cor3 = o(r() * (s - 1));
  }

  return `rgb(${cor1},${cor2},${cor3})`;
}

function palleteColors() {
  let cor1 = randomRgba();
  let cor2 = randomRgba();
  let cor3 = randomRgba();

  const paleteColor = document.getElementsByClassName('color');

  paleteColor[0].style.backgroundColor = 'rgb(0,0,0)';

  if ((cor1 === cor2) || (cor1 === cor3) || (cor2 === cor3)) {
    cor1 = randomRgba();
    cor2 = randomRgba();
    cor3 = randomRgba();
  }

  paleteColor[1].style.backgroundColor = cor1;
  paleteColor[2].style.backgroundColor = cor2;
  paleteColor[3].style.backgroundColor = cor3;
}

function createPixels(N) {
  const NN = N ** 2;
  const pixelBoard = document.getElementById('pixel-board');
  console.log(NN);
  pixelBoard.innerHTML = '';
  for (let i = 0; i < NN; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}

function whitePixels() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function changeSelected() {
  if (!this.classList.contains('selected')) {
    this.classList.add('selected');
  }

  const allColors = document.getElementsByClassName('color');
  for (let i = 0; i < allColors.length; i += 1) {
    if (allColors[i] !== this) {
      allColors[i].classList.remove('selected');
    }
  }
}

function selectChangePixelColor() {
  let color = 'rgb(0,0,0)';

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('selected')) {
      color = window.getComputedStyle(event.target, null).getPropertyValue('background-color');
    }
  }, false);

  document.addEventListener('click', (event) => {
    const eventLet = event;
    if (eventLet.target.classList.contains('pixel')) {
      eventLet.target.style.backgroundColor = color;
    }
  }, false);
}

function resetChangeBoard(sizeLength) {
  const palleteSize = document.getElementById('pixel-board');
  const singlePixelSize = 42;
  palleteSize.innerHTML = '';
  palleteSize.style.height = `${sizeLength * singlePixelSize}px`;
  palleteSize.style.width = `${sizeLength * singlePixelSize}px`;
  createPixels(sizeLength);
}

function changePixelBoardSize() {
  const inputUsr = document.getElementById('board-size');
  let sizeLength = inputUsr.value;

  if (sizeLength === '') {
    window.alert('Board Inválido!');
  } else if (sizeLength < 5) {
    sizeLength = 5;
    inputUsr.value = 5;
    resetChangeBoard(sizeLength);
  } else if (sizeLength > 50) {
    sizeLength = 50;
    inputUsr.value = 50;
    resetChangeBoard(sizeLength);
  } else {
    resetChangeBoard(sizeLength);
  }
}

window.onload = function main() {
  const initialSize = 5;
  palleteColors();
  createPixels(initialSize);

  const button = document.getElementById('clear-board');
  button.addEventListener('click', whitePixels);

  const changeSelection = document.querySelectorAll('.color');
  changeSelection.forEach((item) => {
    item.addEventListener('click', changeSelected);
  });

  selectChangePixelColor();

  const changeBoardSizeBtn = document.getElementById('generate-board');
  changeBoardSizeBtn.addEventListener('click', changePixelBoardSize);
};

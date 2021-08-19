let buttonVQV = document.getElementById('generate-board');
let pixelBoard = document.getElementById('pixel-board');
console.log(pixelBoard);
let colorPalette = document.getElementsByClassName('color');
let inputSize = document.getElementById('board-size');

function initialPixelBoard() {
  for (let index = 0; index < 5; index += 1) {
    let line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);
    for (let index = 0; index < 5; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paintPixels);
      line.appendChild(pixel);
    }
    //pixelBoard.appendChild(document.createElement('br'));
  }
}

function selectColor(event) {
  // console.log('cheguei na selectcolor');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

for (let index = 0; index < colorPalette.length; index += 1) {
  colorPalette[index].addEventListener('click', selectColor);
}
// pixelBoard.addEventListener('click', paintPixels); Ideia de colocar o escutador na pixel board foi boa, mas ao clicar fora dos pixels tbm pinta a area.

function paintPixels(event) {
  let selectColor = document.querySelector('.selected');
  let newColor = window.getComputedStyle(selectColor).backgroundColor;
  let targetEvent = event;
  targetEvent.target.style.backgroundColor = newColor;
}

function createPixelBoard() {
  const { value } = inputSize;
  for (let index = 0; index < value; index += 1) {
    let line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);
    for (let index = 0; index < value; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paintPixels);
      line.appendChild(pixel);
    }
    //pixelBoard.appendChild(document.createElement('br'));
  }
}

function invalidBoard() {
  alert('Board Inválido!');
  for (let index = 0; index < 5; index += 1) {
    for (let index = 0; index < 5; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paintPixels);
      pixelBoard.appendChild(pixel);
    }
    pixelBoard.appendChild(document.createElement('br'));
  }
}

function boardChecks() {
  let value = inputSize.value;

  if (value < 5) {
    boardSize5();
  }
  if (value > 50) {
    boardSize50();
  }
  if (value >= 5 && value <= 50) {
    createPixelBoard();
  }
}

function boardSize5() {
  for (let index = 0; index < 5; index += 1) {
    for (let index = 0; index < 5; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paintPixels);
      pixelBoard.appendChild(pixel);
    }
    pixelBoard.appendChild(document.createElement('br'));
  }
}

function boardSize50() {
  for (let index = 0; index < 50; index += 1) {
    for (let index = 0; index < 50; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paintPixels);
      pixelBoard.appendChild(pixel);
    }
    pixelBoard.appendChild(document.createElement('br'));
  }
}

function changePixelBoarSize() {
  let value = inputSize.value;
  console.log('este é o value: ' + value);
  pixelBoard.innerHTML = '';

  if (inputSize.value === '') {
    invalidBoard();
  } else {
    boardChecks();
  }
}

function listenerButtonVQV() {
  buttonVQV.addEventListener('click', changePixelBoarSize);
}

window.onload = callAllFunctions;

function callAllFunctions() {
  initialPixelBoard();
  listenerButtonVQV();
}

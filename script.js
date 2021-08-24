// Agradecimentos a Thiago Ramos e João Marco que me ajudaram a corrigir uns commits errados que tinham no projeto.

const buttonVQV = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');
console.log(pixelBoard);
const colorPalette = document.getElementsByClassName('color');
const inputSize = document.getElementById('board-size');
const buttonClearBoard = document.getElementById('clear-board');

function initialPixelBoard() {
  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);
    for (let index = 0; index < 5; index += 1) {
      const pixel = document.createElement('div');
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
  const selectColor = document.querySelector('.selected');
  const newColor = window.getComputedStyle(selectColor).backgroundColor;
  const targetEvent = event;
  targetEvent.target.style.backgroundColor = newColor;
}

function createPixelBoard() {
  const { value } = inputSize;
  for (let index = 0; index < value; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);
    for (let index = 0; index < value; index += 1) {
      const pixel = document.createElement('div');
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
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paintPixels);
      pixelBoard.appendChild(pixel);
    }
    pixelBoard.appendChild(document.createElement('br'));
  }
}

function boardChecks() {
  const { value } = inputSize;

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
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);
    for (let index = 0; index < 5; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paintPixels);
      line.appendChild(pixel);
    }
    //pixelBoard.appendChild(document.createElement('br'));
  }
}

function boardSize50() {
  for (let index = 0; index < 50; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);
    for (let index = 0; index < 50; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paintPixels);
      line.appendChild(pixel);
    }
    //pixelBoard.appendChild(document.createElement('br'));
  }
}

function changePixelBoarSize() {
  const value = inputSize.value;
  console.log('este é o value: ' + value);
  pixelBoard.innerHTML = '';

  if (inputSize.value === '') {
    invalidBoard();
  } else {
    boardChecks();
  }
}

function clearBoard() {
  let pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

function listenerButtonVQV() {
  buttonVQV.addEventListener('click', changePixelBoarSize);
}

function listenerButtonClear() {
  buttonClearBoard.addEventListener('click', clearBoard);
}

window.onload = callAllFunctions;

function callAllFunctions() {
  initialPixelBoard();
  listenerButtonVQV();
  listenerButtonClear();
  rngColor();
}


 console.log("Numero aleatorio" + Math.round(Math.random() * (254))) ;

/*  let color1 = stringify(Math.round(Math.random() * (254) + Math.round(Math.random() * (254) + Math.round(Math.random() * (254));
 console.log("este é o color1" + color1) */

 console.log("rgb(" + Math.round(Math.random() * (254)) + " ," + Math.round(Math.random() * (254)) + " ," + Math.round(Math.random() * (254)) + ")")

 let color2 = "rgb(" + Math.round(Math.random() * (254)) + " , " + Math.round(Math.random() * (254)) + " , " + Math.round(Math.random() * (254)) + ")"

 let color3 = "rgb(" + Math.round(Math.random() * (254)) + " , " + Math.round(Math.random() * (254)) + " , " + Math.round(Math.random() * (254)) + ")"

 let color4 = "rgb(" + Math.round(Math.random() * (254)) + " , " + Math.round(Math.random() * (254)) + " , " + Math.round(Math.random() * (254)) + ")"

  function rngColor () {
   let originalColor2 = document.querySelector('.color2');
   originalColor2.style.backgroundColor = color2;

   let originalColor3 = document.querySelector('.color3');
   originalColor3.style.backgroundColor = color3;

   let originalColor4 = document.querySelector('.color4');
   originalColor4.style.backgroundColor = color4;
 }
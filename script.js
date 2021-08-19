let buttonVQV = document.getElementById('vqv');
let pixelBoard = document.getElementById('pixel-board');
console.log(pixelBoard);
let colorPalette = document.getElementsByClassName('color');

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

function changePixelBoarSize() {
  let value = inputBoard.value;

  pixelBoard.innerHTML = '';

  if (value > 4 && value < 51) {
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
  } else {
    alert('Tamanho Inválido!');
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
}

function listenerButtonVQV() {
  buttonVQV.addEventListener('click', changePixelBoarSize);
}

window.onload = callAllFunctions;

function callAllFunctions() {
  initialPixelBoard();
  listenerButtonVQV();
}

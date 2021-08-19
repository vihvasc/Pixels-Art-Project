let buttonVQV = document.getElementById('vqv');
let pixelBoard = document.getElementById('pixel-board');

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
  listenerButtonVQV();
}

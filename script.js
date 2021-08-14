const pixelBoard = document.getElementById('pixel-board');

for (let index = 0; index < 25; index += 1) {
  const divPixel = document.createElement('div');
  divPixel.className = 'pixel';
  pixelBoard.appendChild(divPixel);
}

const blackColor = document.getElementById('black');
const blueColor = document.getElementById('blue');
const yellowColor = document.getElementById('yellow');
const greenColor = document.getElementById('green');

function addClass(event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
}

blackColor.addEventListener('click', addClass);
blueColor.addEventListener('click', addClass);
yellowColor.addEventListener('click', addClass);
greenColor.addEventListener('click', addClass);

// função que altera cor
function colorir(event) {
  const corSelecionada = document.querySelector('.selected');
  const corSelecionadaCss = window.getComputedStyle(corSelecionada);
  const eventclick = event.target;

  if (eventclick.className === 'pixel') {
    eventclick.style.backgroundColor = corSelecionadaCss.backgroundColor;
  }
}

pixelBoard.addEventListener('click', colorir);

// função para limpar a mesa
const buttonClear = document.getElementById('clear-board');

function clearBoard() {
  const allPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    const pixel = allPixels[index];
    pixel.style.backgroundColor = 'white';
  }
}

buttonClear.addEventListener('click', clearBoard);

window.onload = function() {
// Criar PixelBoard
const boardHeight = 5;
const boardWidth = 5;
makePixelBoard();

// Variaveis
const color = document.querySelectorAll('.color');
const pixelBoard = document.querySelectorAll('.pixel');

// Event Listeners
for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', handleSelection);
}

for (let index = 0; index < pixelBoard.length; index += 1) {
  pixelBoard[index].addEventListener('click', handleColoring);
}

pixelBoard[0].addEventListener('click', handleColoring);

// Funções
function makePixelBoard() {
  for (let index = 1; index <= boardHeight; index += 1) {
    let line = document.createElement('div');
    line.classList.add('board-line');

    document.querySelector('#pixel-board').appendChild(line)
    
    for (let index2 = 1; index2 <= boardWidth; index2 += 1) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');

      document.querySelectorAll('.board-line')[index-1].appendChild(pixel);
    }
  }
}

function handleSelection(event) {
  let currentColor = event.target.classList;
  let previousColor = document.querySelector('.selected');

  if (!currentColor.contains('selected')) {
    currentColor.add('selected');
    if (previousColor != null) {
      previousColor.classList.remove('selected');
    }
  }

  console.log(document.querySelectorAll('.selected'))
}

function handleColoring(event) {
  let selectedElement = document.querySelector('.selected');

  if (selectedElement != null) {
    let currentColor = window.getComputedStyle(selectedElement).getPropertyValue('background-color');
    event.target.style.backgroundColor = currentColor;
  } else {
    event.target.style.backgroundColor = 'rgb(255,255,255)';
  }
}

}
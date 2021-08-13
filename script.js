window.onload = function() {
// Variaveis
const boardHeight = 5;
const boardWidth = 5;
const black = document.querySelector('.color.black');
const red = document.querySelector('.color.red');
const green = document.querySelector('.color.green');
const blue = document.querySelector('.color.blue');

// Event Listeners
black.addEventListener('click', handleSelection);
red.addEventListener('click', handleSelection);
green.addEventListener('click', handleSelection);
blue.addEventListener('click', handleSelection);

// Funções
makePixelBoard();

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
    previousColor.classList.remove('selected');

  } else if (currentColor.contains('selected')) {
    currentColor.remove('selected');
  }

  console.log(document.querySelectorAll('.selected'))
}

}
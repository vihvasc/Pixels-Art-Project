window.onload = function() {
// Criar PixelBoard
let boardSize = 5;
makePixelBoard();

// Variaveis
const color = document.querySelectorAll('.color');
let pixelBoard = document.querySelectorAll('.pixel');
let boardLine = document.querySelectorAll('.board-line');

// Event Listeners
for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', handleSelection);
}

for (let index = 0; index < pixelBoard.length; index += 1) {
  pixelBoard[index].addEventListener('click', handleColoring);
}
document.querySelector('#clear-board').addEventListener('click', handleClearBoard)
document.querySelector('#generate-board').addEventListener('click', makeNewBoard)

// Funções
function makePixelBoard() {
  for (let index = 1; index <= boardSize; index += 1) {
    let line = document.createElement('div');
    line.classList.add('board-line');

    document.querySelector('#pixel-board').appendChild(line)
    
    for (let index2 = 1; index2 <= boardSize; index2 += 1) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');

      document.querySelectorAll('.board-line')[index-1].appendChild(pixel);
    }
  }
}

function makeNewBoard() {
  if (document.querySelector('#board-size').value > 0) {
    boardSize = document.querySelector('#board-size').value;

    if (document.querySelector('.pixel') != null) {
      for (let index = 0; index < pixelBoard.length; index += 1) {
        pixelBoard[index].remove();
      }
  
      for (let index = 0; index < boardLine.length; index += 1) {
        boardLine[index].remove();
      }
    }
  
    for (let index = 1; index <= boardSize; index += 1) {
      let line = document.createElement('div');
      line.classList.add('board-line');
  
      document.querySelector('#pixel-board').appendChild(line)
      
      for (let index2 = 1; index2 <= boardSize; index2 += 1) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
  
        document.querySelectorAll('.board-line')[index-1].appendChild(pixel);
      }
    }

    // Dar novos valores
    pixelBoard = document.querySelectorAll('.pixel');
    boardLine = document.querySelectorAll('.board-line');

    // Criar novos Event Listeners
    for (let index = 0; index < pixelBoard.length; index += 1) {
      pixelBoard[index].addEventListener('click', handleColoring);
    }

  } else {
    window.alert('Valor errado!')
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

function handleClearBoard() {
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].style.backgroundColor = 'rgb(255,255,255)';
  }
}

}
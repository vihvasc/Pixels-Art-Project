const colorsList = document.querySelectorAll('.color');
colorsList[0].style.background = 'black';
colorsList[1].style.background = 'lightblue';
colorsList[2].style.background = 'lightgreen';
colorsList[3].style.background = 'pink';

function createLine(width) {
  const pixelBoard = document.getElementById('pixel-board');
  const ul = document.createElement('ul');
  pixelBoard.appendChild(ul);
  for (let index = 0; index < width; index += 1) {
    const pixelSquare = document.createElement('li');
    pixelSquare.className = 'pixel';
    ul.appendChild(pixelSquare);
  }
}

function createBoard(height) {
  for (let index = 0; index < height; index += 1) {
    createLine(5);
  }
}

createBoard(5);

const colorsList = document.querySelectorAll('.color');
colorsList[0].style.background = 'black';
colorsList[1].style.background = 'lightblue';
colorsList[2].style.background = 'lightgreen';
colorsList[3].style.background = 'pink';

colorsList[0].classList.add('selected');

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

function handlePickedColor(event) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

colorsList[0].addEventListener('click', handlePickedColor);
colorsList[1].addEventListener('click', handlePickedColor);
colorsList[2].addEventListener('click', handlePickedColor);
colorsList[3].addEventListener('click', handlePickedColor);

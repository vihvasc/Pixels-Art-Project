const firstColor = document.getElementById('first-color');
const secondColor = document.getElementById('second-color');
const thirdColor = document.getElementById('third-color');
const fourthColor = document.getElementById('fourth-color');
const pixelBoard = document.getElementById('pixel-board');
const allPixel = document.getElementsByClassName('pixel');
const clearButton = document.getElementById('clear-board');
const boardSize = document.getElementById('board-size');
const generateBoardButton = document.getElementById('generate-board');

function CreatePixelBoard(size) {
  for (let index = 0; index < size; index += 1) {
    const ul = document.createElement('ul');
    ul.Id = index + 1;
    pixelBoard.appendChild(ul);
    for (let index2 = 0; index2 < size; index2 += 1) {
      const li = document.createElement('li');
      li.className = 'pixel';
      li.style.backgroundColor = 'white';
      ul.appendChild(li);
    }
  }
}
CreatePixelBoard(5);

function addSelectedClass(event) {
  const checkSelected = document.querySelector('.selected');
  checkSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function changeColor(event) {
  const pixel = event;
  const ColorSelected = document.querySelector('.selected').style.backgroundColor;
  pixel.target.style.backgroundColor = ColorSelected;
}

function clearColor() {
  for (let index = 0; index < allPixel.length; index += 1) {
    allPixel[index].style.backgroundColor = 'white';
  }
}

function setPixelWidth() {
  if (!boardSize.value) {
    alert('Board inválido!');
  } else if (boardSize.value < 5) {
    pixelBoard.innerHTML = '';
    CreatePixelBoard(5);
  } else if (boardSize.value > 49) {
    pixelBoard.innerHTML = '';
    CreatePixelBoard(50);
  } else {
    pixelBoard.innerHTML = '';
    CreatePixelBoard(boardSize.value);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = getRandomColor();
thirdColor.style.backgroundColor = getRandomColor();
fourthColor.style.backgroundColor = getRandomColor();

firstColor.addEventListener('click', addSelectedClass);
secondColor.addEventListener('click', addSelectedClass);
thirdColor.addEventListener('click', addSelectedClass);
fourthColor.addEventListener('click', addSelectedClass);
pixelBoard.addEventListener('click', changeColor);
clearButton.addEventListener('click', clearColor);
generateBoardButton.addEventListener('click', setPixelWidth);

const firstColor = document.getElementById('first-color');
const secondColor = document.getElementById('second-color');
const thirdColor = document.getElementById('third-color');
const fourthColor = document.getElementById('fourth-color');
const pixelBoard = document.getElementById('pixel-board');
const allPixel = document.getElementsByClassName('pixel');
const clearButton = document.getElementById('clear-board');
const boardSize = document.getElementById('board-size');
const generateBoardButton = document.getElementById('generate-board');

firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = 'green';
thirdColor.style.backgroundColor = 'orange';
fourthColor.style.backgroundColor = 'purple';

firstColor.addEventListener('click', addSelectedClass);
secondColor.addEventListener('click', addSelectedClass);
thirdColor.addEventListener('click', addSelectedClass);
fourthColor.addEventListener('click', addSelectedClass);
pixelBoard.addEventListener('click', changeColor);
clearButton.addEventListener('click', clearColor);
generateBoardButton.addEventListener('click', setPixelWidth);
function CreatePixelBoard(pixels) {
  for (let index = 0; index < 5; index += 1) {
    const ul = document.createElement('ul');
    ul.Id = index + 1;
    pixelBoard.appendChild(ul);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const li = document.createElement('li');
      li.className = 'pixel';
      li.style.width = pixels;
      li.style.height = pixels;
      li.style.backgroundColor = 'white';
      ul.appendChild(li);
    }
  }
}
CreatePixelBoard('40px');

function addSelectedClass(event) {
  const checkSelected = document.querySelector('.selected');
  checkSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function changeColor(event) {
  const ColorSelected = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = ColorSelected;
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
    CreatePixelBoard('5px');
  } else if (boardSize.value > 49) {
    pixelBoard.innerHTML = '';
    CreatePixelBoard('50px');
  } else {
    const width = `${boardSize.value}px`;
    pixelBoard.innerHTML = '';
    CreatePixelBoard(width);
  }
}

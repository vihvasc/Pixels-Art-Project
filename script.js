window.onload = function () {
  defineSizeOfBoard();
  createPixelsInBoard(5);
  selectColor();
  paintPixels();
  clearBoard();
  generateRandomColor();
};

function createPixelsInBoard(pixelsByTheUser) {
  let pixelBoard = document.querySelector('#pixel-board');

  for (let line = 0; line < pixelsByTheUser; line += 1) {
    let pixelLine = document.createElement('div');
    pixelLine.className = 'line';
    pixelBoard.appendChild(pixelLine);

    for (let column = 0; column < pixelsByTheUser; column += 1) {
      let pixel = document.createElement('div');

      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
  }
}

function defineSizeOfBoard() {
  let button = document.querySelector('#generate-board');

  button.addEventListener('click', function () {
    let pixelNumber = document.querySelector('#board-size').value;
    let pixelBoard = document.querySelector('#pixel-board');

    if (pixelNumber == '') {
      alert('Board inválido!');
    }

    if (pixelNumber < 5) {
      return;
    }

    if (pixelNumber > 50) {
      pixelBoard.innerHTML = ' ';
      createPixelsInBoard(50);
      return;
    }

    pixelBoard.innerHTML = ' ';

    createPixelsInBoard(pixelNumber);
    paintPixels();
  });
}

function selectColor() {
  let paletteColors = document.querySelectorAll('.color');

  for (let index = 0; index < paletteColors.length; index += 1) {
    paletteColors[index].addEventListener('click', selectColor);
  }

  function selectColor(originEvent) {
    console.log('cheguei');
    for (let index = 0; index < paletteColors.length; index += 1) {
      paletteColors[index].classList.remove('selected');
    }

    originEvent.target.classList.add('selected');
  }
}

function paintPixels() {
  let pixelsOfBoard = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelsOfBoard.length; index++) {
    pixelsOfBoard[index].addEventListener('click', paint);
  }

  function paint(originEvent) {
    console.log('cheguei');
    let selectedColor = document.querySelector('.selected');
    let colorOfSelected = window
      .getComputedStyle(selectedColor, null)
      .getPropertyValue('background-color');

    originEvent.target.style.backgroundColor = colorOfSelected;
  }
}

function clearBoard() {
  let button = document.querySelector('#clear-board');

  button.addEventListener('click', makeItClean);

  function makeItClean() {
    let pixelsOfBoard = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixelsOfBoard.length; index++) {
      pixelsOfBoard[index].style.backgroundColor = '#fff';
    }
  }
}

function generateRandomColor() {
  let secondColor = document.querySelector('#second-color');
  let thirdColor = document.querySelector('#third-color');
  let fourthColor = document.querySelector('#fourth-color');
  let arrayOfColors = [secondColor, thirdColor, fourthColor];

  for (let index = 0; index < arrayOfColors.length; index++) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    arrayOfColors[index].style.backgroundColor =
      'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

window.onload = function () {
  defineSizeOfBoard();
  createPixelsInBoard(5);
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
  });
}

function paintPixels() {}

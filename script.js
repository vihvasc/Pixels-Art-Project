window.onload = function () {
    defineLineAndColumns();
    createPixelsInBoardLine(5, 5);
  };
  
  function defineLineAndColumns() {
    let button = document.querySelector('#pick-size-btn');
  function createPixelsInBoard(pixelsByTheUser) {
    let pixelBoard = document.querySelector('#pixel-board');
  
    button.addEventListener('click', function () {
      columnSize = document.querySelector('#column').value;
      lineSize = document.querySelector('#line').value;
    for (let line = 0; line < pixelsByTheUser; line += 1) {
      let pixelLine = document.createElement('div');
      pixelLine.className = 'line';
      pixelBoard.appendChild(pixelLine);
  
      createPixelsInBoardLine(columnSize, lineSize);
    });
      for (let column = 0; column < pixelsByTheUser; column += 1) {
        let pixel = document.createElement('div');
  
        pixel.className = 'pixel';
        pixelLine.appendChild(pixel);
      }
    }
  }
  
  function createPixelsInBoardLine(columnSize, lineSize) {
    let pixelBoard = document.querySelector('#pixel-board');
    let sizeOfBoard = columnSize * lineSize;
  function defineSizeOfBoard() {
    let button = document.querySelector('#generate-board');
  
    button.addEventListener('click', function () {
      let pixelNumber = document.querySelector('#board-size').value;
      let pixelBoard = document.querySelector('#pixel-board');
  
    for (let index = 0; index < sizeOfBoard; index += 1) {
      let pixels = document.createElement('div');
      if (pixelNumber == '') {
        alert('Board inválido!');
      }
  
      if (index % columnSize === 0) {
        let breakPoint = document.createElement('br');
        pixelBoard.appendChild(breakPoint);
      if (pixelNumber < 5) {
        return;
      }
  
      pixels.className = 'pixel';
      pixelBoard.appendChild(pixels);
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
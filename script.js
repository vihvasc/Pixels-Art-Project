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
    }
      for (let column = 0; column < pixelsByTheUser; column += 1) {
        let pixel = document.createElement('div');
  
        pixel.className = 'pixel';
        pixelLine.appendChild(pixel);
      }
    }
  }
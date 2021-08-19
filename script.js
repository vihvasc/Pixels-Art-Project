window.onload = function () {
    defineLineAndColumns();
    createPixelsInBoardLine(5, 5);
  };
  
  function defineLineAndColumns() {
    let button = document.querySelector('#pick-size-btn');
  
    button.addEventListener('click', function () {
      columnSize = document.querySelector('#column').value;
      lineSize = document.querySelector('#line').value;
  
      createPixelsInBoardLine(columnSize, lineSize);
    });
  }
  
  function createPixelsInBoardLine(columnSize, lineSize) {
    let pixelBoard = document.querySelector('#pixel-board');
    let sizeOfBoard = columnSize * lineSize;
  
    for (let index = 0; index < sizeOfBoard; index += 1) {
      let pixels = document.createElement('div');
  
      if (index % columnSize === 0) {
        let breakPoint = document.createElement('br');
        pixelBoard.appendChild(breakPoint);
      }
  
      pixels.className = 'pixel';
      pixelBoard.appendChild(pixels);
    }
  }
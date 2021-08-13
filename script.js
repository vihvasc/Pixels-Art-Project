function paintColorPalette() {
  const colorPalette = document.getElementsByClassName('color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].style.backgroundColor = colorPalette[index].id;
  }
}

paintColorPalette();

function createPixelBoard() {
  let pixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    let boardLine = document.createElement('div');
    boardLine.className = 'boardLine';
    for (let j = 0; j < 5; j+= 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      boardLine.appendChild(pixel);
      pixel.style.backgroundColor = 'white';
    }
    pixelBoard.appendChild(boardLine);
  }
}

createPixelBoard();

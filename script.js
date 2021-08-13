function paintColorPalette() {
  const colorPalette = document.getElementsByClassName('color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].style.backgroundColor = colorPalette[index].id;
  }
}

function createPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    const boardLine = document.createElement('div');
    boardLine.className = 'boardLine';
    for (let j = 0; j < 5; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      boardLine.appendChild(pixel);
      pixel.style.backgroundColor = 'white';
    }
    pixelBoard.appendChild(boardLine);
  }
}

window.onload = () => {
  paintColorPalette();
  createPixelBoard();
  document.getElementById('black').classList.add('selected');
};

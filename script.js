const board = document.getElementById('pixel-board');

function makePixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  return pixel;
}

function makePixelBoard() {
  const boardLength = 5;
  const boardWidth = 5;
  for (let index = 0; index < boardLength; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    board.appendChild(line);
    for (let i = 0; i < boardWidth; i += 1) {
      line.appendChild(makePixel());
    }
  }
}

window.onload = makePixelBoard;

const board = document.getElementById('pixel-board');

function createLine() {
  const numberOfLines = 5;
  for (let l = 0; l < numberOfLines; l += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    board.appendChild(line);
  }
}

function createPixel() {
  const pixelPerLine = 5;
  const linesToFill = document.getElementsByClassName('line');

  for (let l = 0; l < linesToFill.length; l += 1) {
    for (let p = 0; p < pixelPerLine; p += 1) {
      const actualLine = linesToFill[l];
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      actualLine.appendChild(pixel);
    }
  }
}
window.onload = function afterLoad() {
  createLine();
  createPixel();
};

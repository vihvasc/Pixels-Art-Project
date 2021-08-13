const pixelBoard = document.getElementById('pixel-board');

// Cria quadro de pixels
function createPixels(value) {
  for (let indexLines = 0; indexLines < value; indexLines += 1) {
    const lines = document.createElement('div');
    lines.className = 'lines';
    pixelBoard.appendChild(lines);
    for (let indexColumns = 0; indexColumns < value; indexColumns += 1) {
      const pixels = document.createElement('div');
      pixels.className = 'pixel';
      lines.appendChild(pixels);
    }
  }
}
createPixels(5);

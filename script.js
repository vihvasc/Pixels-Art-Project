// Cria quadro de pixels
function createPixels() {
  const pixelBoard = document.getElementById('pixel-board');

  for (let index = 0; index < 25; index += 1) {
    const pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';
    pixelBoard.appendChild(pixelDiv);
  }
}
createPixels();

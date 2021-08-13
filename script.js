// Function to create a pixel board m x n
const pixelBoard = document.getElementById('pixel-board');

function createPixelBoard(m, n) {
  for (let i = 0; i < m; i += 1) {
    const line = document.createElement('div');
    line.className = 'linePixelBoard';
    pixelBoard.appendChild(line);
    for (let j = 0; j < n; j += 1) {
      const column = document.createElement('div');
      column.className = 'pixel';
      document.querySelectorAll('#pixel-board .linePixelBoard')[i].appendChild(column);
    }
  }
}

window.onload = function () {
  createPixelBoard(5, 5);
};

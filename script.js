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

// Function to give a class selected to the selected color
function classSelected(eventoDeOrigem) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].className = 'color';
  }
  eventoDeOrigem.target.className = 'color selected';
}

// Add event Listener to class color
const colors = document.getElementsByClassName('color');
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', classSelected);
}

// function used to start the page
function startPage() {
  createPixelBoard(5, 5);
};

window.onload = startPage();
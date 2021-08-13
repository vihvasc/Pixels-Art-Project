// Constantes
const pixelBoard = document.getElementById('pixel-board');
const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');

// Function to create a pixel board m x n
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
  const selectedColor = eventoDeOrigem.target;
  selectedColor.className = 'color selected';
}

// Add event Listener to class color
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', classSelected);
}

// Function to give a class pixel the color of a class selected
function paintPixel(eventoDeOrigem) {
  let element = eventoDeOrigem.target;
  let color = document.getElementsByClassName('selected')[0].style.backgroundColor;
  element.style.background = color;
}

// function used to start the page
window.onload = function startPage() {
  // colors of palete
  colors[0].style.background = 'black';
  colors[1].style.background = 'red';
  colors[2].style.background = 'green';
  colors[3].style.background = 'blue';

  createPixelBoard(5, 5);

  // Add event Listener to class pixel
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', paintPixel);
  }

};

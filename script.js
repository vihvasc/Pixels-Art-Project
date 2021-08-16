window.onload = function () {
  const blackColor = document.querySelector('#black');
  blackColor.className = 'color selected';
}

const pixelBoard = document.querySelector('#pixel-board');
for (let i = 0; i < 25; i += 1) {
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}

const colorPalette = document.getElementsByClassName('color');
for (let i = 0; i < colorPalette.length; i += 1) {
  colorPalette[i].addEventListener('click', selectionFunction);
}
function selectionFunction(e) {
  for (let i = 0; i < colorPalette.length; i += 1) {
    if (colorPalette[i].classList.contains('selected')) {
      colorPalette[i].classList.toggle('selected');
    }
  }
  e.target.classList.toggle('selected');
}

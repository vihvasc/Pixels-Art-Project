const pixelBoard = document.querySelector('#pixel-board');
let amount = 25;
const pickingDarkPink = document.getElementById('dark-pink');
const pickingBrightPink = document.getElementById('bright-pink');
const pickingDarkBlue = document.getElementById('dark-blue');
const pickingDarkBlack = document.getElementById('dark-black');
const clearBoard = document.getElementById('clear-board');
const allPixels = document.getElementsByClassName('pixel');

for (let i = 0; i < amount; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}

for (let index = 0; index < allPixels.length; index += 1) {
  allPixels[index].addEventListener('click', changeColor);
}

window.onload = function () {
  let black = document.getElementById('dark-black');
  black.className = 'color' + ' selected';
};

pickingDarkPink.addEventListener('click', darkPink);

function darkPink() {
  pickingDarkPink.className = 'color' + ' selected';
  pickingBrightPink.className = 'color';
  pickingDarkBlue.className = 'color';
  pickingDarkBlack.className = 'color';
}

pickingBrightPink.addEventListener('click', brightPink);

function brightPink() {
  pickingBrightPink.className = 'color' + ' selected';
  pickingDarkPink.className = 'color';
  pickingDarkBlue.className = 'color';
  pickingDarkBlack.className = 'color';
}

pickingDarkBlue.addEventListener('click', darkBlue);

function darkBlue() {
  pickingDarkBlue.className = 'color' + ' selected';
  pickingBrightPink.className = 'color';
  pickingDarkPink.className = 'color';
  pickingDarkBlack.className = 'color';
}

function changeColor(event) {
  const selected = document.querySelector('.selected');
  event.target.style.backgroundColor = selected.style.backgroundColor;
}

clearBoard.addEventListener('click', clearingBoard);
function clearingBoard() {
  for (pixel of allPixels) {
    pixel.style.backgroundColor = 'white';
  }
}

const pixelBoard = document.querySelector('#pixel-board');
let amount = 25;

for (let i = 0; i < amount; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}
window.onload = function () {
  let black = document.getElementById('dark-black');
  black.className = 'color' + ' selected';
};

let pickingDarkPink = document.getElementById('dark-pink');
let pickingBrightPink = document.getElementById('bright-pink');
let pickingDarkBlue = document.getElementById('dark-blue');
let pickingDarkBlack = document.getElementById('dark-black');

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

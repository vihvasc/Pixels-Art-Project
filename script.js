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

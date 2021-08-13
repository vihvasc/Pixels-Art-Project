let pixelBoard = document.querySelector('#pixel-board');
let amount = 25;
for (let i = 0; i < amount; i += 1) {
  let pixels = document.createElement('div');
  pixels.className = 'pixel';
  pixelBoard.appendChild(pixels);
}

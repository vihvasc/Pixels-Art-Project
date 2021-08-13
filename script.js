const pixelBoard = document.querySelector('#pixel-board');
for (let i = 0; i < 25; i += 1) { 
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}
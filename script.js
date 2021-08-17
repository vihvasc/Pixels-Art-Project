// Requisito 4

const corpoDoQuadro = document.querySelector('#pixel-board');
const numberPixel = 25;

for (let index = 0; index < numberPixel; index += 1) {
  const pixelContainer = document.createElement('div');
  pixelContainer.className = 'pixel';
  corpoDoQuadro.appendChild(pixelContainer);
}

let black = document.getElementById('black');
window.onload = black.classList.add('selected');
// nDeLinhas(5);
// nDePixelsLinha(5);

// function nDePixelsLinha(n) {
//   const childrenPixelBord = document.getElementsByClassName(
//     'linhas-square-pixel'
//   );

//   for (let key = 1; key <= n; key += 1) {
//     const createDiv = document.createElement('div');
//     childrenPixelBord[key].appendChild(createDiv);
//     createDiv.classList = 'pixel';
//   }
// }

// function nDeLinhas(nPixels) {
//   const pixelBoard = document.getElementById('pixel-board');
//   for (let key = 0; key < nPixels; key += 1) {
//     const createLines = document.createElement('div');
//     pixelBoard.appendChild(createLines);
//     createLines.classList = 'linhas-square-pixel';
//   }
// }

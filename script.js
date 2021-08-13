const black = document.getElementById('black');
black.classList.add('selected');
const colorPalete = document.getElementsByClassName('color');

for (let key of colorPalete) {
  key.addEventListener('click', changeClassSelected);
}
function changeClassSelected(event) {
  const selected = document.getElementsByClassName('selected');
  for (let key of selected) {
    key.classList.remove('selected');
  }
  const evento = event.target;
  evento.classList.add('selected');
}

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

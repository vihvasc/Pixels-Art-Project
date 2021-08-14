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

const selected = document.getElementsByClassName('pixel');

for (let key of selected) {
  key.addEventListener('click', changeColorPixel);
}

function changeColorPixel(event) {
  const selectedColor = document.querySelectorAll('.selected')[0];
  console.log(selectedColor);
  const evento = event.target;
  console.log(evento);
  if (selectedColor.id === 'black') {
    evento.style.backgroundColor = 'black';
  }
  if (selectedColor.id === 'blue') {
    evento.style.backgroundColor = 'blue';
  }
  if (selectedColor.id === 'pink') {
    evento.style.backgroundColor = 'pink';
  }
  if (selectedColor.id === 'yellow') {
    evento.style.backgroundColor = 'yellow';
  }
}

// requisito 9
// const button = document.getElementById('clear-board');
// button.addEventListener('click', changeColors);

// function changeColors() {
//   const squarePixels = document.getElementsByClassName('pixel');
//   console.log(squarePixels);
//   for (let key of squarePixels) {
//     key.classList.toggle('white');
//     console.log(key);
//   }
//Quadrado de pixels dinamico;
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

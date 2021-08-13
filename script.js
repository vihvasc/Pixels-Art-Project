// loop para adicionar o mesmo evento em vários elementos
// técnica de event bubbling combinada com classList
// ver https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
// ver https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
// Colocar projeto no GitHub

// Gera cores aleatórias em RGB
// Obtida do usuário adeneo em https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
function randomRgba() {
  const o = Math.round;
  const r = Math.random;
  const s = 255;

  let cor1 = o(r() * s) + 1;
  let cor2 = o(r() * s) + 1;
  let cor3 = o(r() * s) + 1;

  if ((cor1 === 255) && (cor2 === 255) && (cor3 === 255)) {
    cor1 = o(r() * (s - 1));
    cor2 = o(r() * (s - 1));
    cor3 = o(r() * (s - 1));
  }

  return `rgb(${cor1},${cor2},${cor3})`;
}

function palleteColors() {
  let cor1 = randomRgba();
  let cor2 = randomRgba();
  let cor3 = randomRgba();

  const paleteColor = document.getElementsByClassName('color');

  paleteColor[0].style.backgroundColor = 'rgb(0,0,0)';

  if ((cor1 === cor2) || (cor1 === cor3) || (cor2 === cor3)) {
    cor1 = randomRgba();
    cor2 = randomRgba();
    cor3 = randomRgba();
  }

  paleteColor[1].style.backgroundColor = cor1;
  paleteColor[2].style.backgroundColor = cor2;
  paleteColor[3].style.backgroundColor = cor3;
}

function createPixes() {
  const N = 5;
  const NN = N ** 2;
  const pixelBoard = document.getElementById('pixel-board');

  for (let i = 0; i < NN - 1; i += 1) {
    const criaPixels = document.createElement('div');
    criaPixels.className = 'pixel';
    pixelBoard.appendChild(criaPixels);
  }
}

window.onload = function main() {
  palleteColors();
  createPixes();
};

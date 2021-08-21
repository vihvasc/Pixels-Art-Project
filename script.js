// Requisito 4

const corpoDoQuadro = document.querySelector('#pixel-board');
const numberPixel = 5;

for (let index = 0; index < numberPixel; index += 1) {
  const linePixel = document.createElement('div');
  linePixel.className = 'line';
  corpoDoQuadro.appendChild(linePixel);
  for (let index1 = 0; index1 < numberPixel; index1 += 1) {
    const pixelContainer = document.createElement('div');
    pixelContainer.className = 'pixel';
    linePixel.appendChild(pixelContainer);
  }
}

// Requisito 6

const primeiraCor = document.querySelector('.color');
primeiraCor.style.backgroundColor = 'black';
primeiraCor.className = 'color selected black-color';

// Requisito 7

const coresDaPaleta = document.getElementsByClassName('color');
  for (let index = 0; index < coresDaPaleta.length; index += 1) {
  coresDaPaleta[index].addEventListener('click', selecionarCor);
}

function selecionarCor(evento) {
  const classeSelected = document.querySelector('.selected');
  classeSelected.classList.remove('selected');
  evento.target.classList.add('selected');
}

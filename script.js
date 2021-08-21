// Requisito 4

const corpoDoQuadro = document.querySelector('#pixel-board');
const numberPixel = 5;

for (let index = 0; index < numberPixel; index += 1) {
  const linePixel = document.createElement('div');
  linePixel.className = 'line'
  corpoDoQuadro.appendChild(linePixel);  
  for (let index = 0; index < numberPixel; index += 1) {
    const pixelContainer = document.createElement('div');
    pixelContainer.className = 'pixel';
    linePixel.appendChild(pixelContainer);
}
}

// Requisito 6

let primeiraCor = document.querySelector('.color');
primeiraCor.style.backgroundColor = 'black';
primeiraCor.className = 'color selected black-color';

// Requisito 7

let coresDaPaleta = document.getElementsByClassName('color');
  for (let index = 0; index < coresDaPaleta.length; index += 1) {
    coresDaPaleta[index].addEventListener('click', selecionarCor);
  }

function selecionarCor(evento) {
  let classeSelected = document.querySelector('.selected');
  classeSelected.classList.remove('selected');
  evento.target.classList.add('selected');
}
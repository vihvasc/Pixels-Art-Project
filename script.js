const clearButton = document.getElementById('clear-board');
const newColorsButton = document.getElementById('new-palette-button');
let selectedColor = document.querySelector('.selected');
const colors = document.getElementsByClassName('color');
const firstColor = colors[0];
const secondColor = colors[1];
const thirdColor = colors[2];
const fourthColor = colors[3];
const pixels = document.getElementsByClassName('pixel');
const stylesheet = document.styleSheets[0];

window.onload = function () {
  selectedColor.style.transform = 'translateY(-5px)';
};

// 1. Criar tabela para ser a paleta de cores e adicionar numberOfColors elementos

// Criar laço for que gera aleatóriamente os 3 valores de rgb para as 3 últimas cores

function generateColors() {
  const max = 255;
  for (let index = 1; index < colors.length; index += 1) {
    const rColor = Math.floor(Math.random() * max);
    const gColor = Math.floor(Math.random() * max);
    const bColor = Math.floor(Math.random() * max);
    if (rColor !== 255 || gColor !== 255 || bColor !== 255) {
      stylesheet.insertRule(`:root{--color${index + 1}: rgb(${rColor}, ${gColor}, ${bColor})`);
    } else {
      generateColors();
    }
  }
}

generateColors();

// Criar pixel board sqrt(numeroDeElementos) x sqrt(numeroDeElementos)

function selectColor(_clickedColor) {
  for (const element of colors) {
    element.classList.remove('selected');
    element.style.transform = 'translateY(0)';
  }
  _clickedColor.target.classList.add('selected');
  _clickedColor.target.style.transform = 'translateY(-5px)';
  selectedColor = document.querySelector('.selected');
  return selectedColor;
}

firstColor.addEventListener('click', selectColor);
secondColor.addEventListener('click', selectColor);
thirdColor.addEventListener('click', selectColor);
fourthColor.addEventListener('click', selectColor);

function paint(_clickedPixel) {
  let paintingColor = getComputedStyle(selectedColor).getPropertyValue('background-color');
  _clickedPixel.target.style.setProperty('background-color', paintingColor);
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', paint);
}

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.setProperty('background-color', 'rgb(255, 255, 255');
  }
}

clearButton.addEventListener('click', clearBoard);

const newColorsButton = document.getElementById('new-palette-button');
const clearButton = document.getElementById('clear-board');
const sizeButton = document.getElementById('board-size');
let selectedColor = document.querySelector('.selected');
const colors = document.getElementsByClassName('color');
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
    const rColor = Math.floor(Math.random() * max + 1);
    const gColor = Math.floor(Math.random() * max + 1);
    const bColor = Math.floor(Math.random() * max + 1);
    if (rColor !== 255 || gColor !== 255 || bColor !== 255) {
      stylesheet.insertRule(`:root{--color${index + 1}: rgb(${rColor}, ${gColor}, ${bColor})`);
    } else {
      generateColors();
    }
  }
}

generateColors();

// Criar pixel board input x input (padrão 5 x 5)

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

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectColor);
}

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

function boardSize() {

}

sizeButton.addEventListener('click', boardSize);

newColorsButton.addEventListener('click', generateColors);



// function isBlackOrWhite(rColor, gColor, bColor) {
//   _isBlackOrWhite = false;
//   if (rColor + gColor + bColor == 255 * 3 || rColor + gColor + bColor == 0) {
//     _isBlackOrWhite = true;
//     return _isBlackOrWhite;
//   }
// }

// function repeatedColor(colors) {
//   let isRepeated = false;
//   for (let color of colors) {
//     let counter = 0;
//     let colorValue = getComputedStyle(color).getPropertyValue('background-color');
//     for (color2 of colors) {
//       let color2Value =  getComputedStyle(color2).getPropertyValue('background-color');
//       if (colorValue === color2Value) {
//         counter += 1;
//         if (counter > 1) {
//           isRepeated = true;
//           return isRepeated;
//         }
//       }
//     }
//   }
// }

// function generateColors() {
//   const max = 255;
//   for (let index = 1; index < colors.length; index += 1) {
//     const rColor = Math.floor(Math.random() * max);
//     const gColor = Math.floor(Math.random() * max);
//     const bColor = Math.floor(Math.random() * max);
//    if (isBlackOrWhite) {
//      generateColors();
//    }
//    if (repeatedColor) {
//      generateColors();
//    } else {
//      stylesheet.insertRule(`:root{--color${index + 1}: rgb(${rColor}, ${gColor}, ${bColor})`);
// }
// }

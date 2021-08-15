const firstColor = document.getElementById('box-color1');
const secondColor = document.getElementById('box-color2');
const thirdColor = document.getElementById('box-color3');
const fourthColor = document.getElementById('box-color4');


function changeColor(event) {
  const colorSelect = document.querySelector('.selected');
  colorSelect.classList.remove('selected');
  event.target.classList.add('selected');
}

firstColor.addEventListener('click', changeColor);
secondColor.addEventListener('click', changeColor);
thirdColor.addEventListener('click', changeColor);
fourthColor.addEventListener('click', changeColor);

const pixels = document.getElementsByClassName('pixel');

function changePixelColor(event) {
  const colorSelect = document.querySelector('.selected');
  // Pesquisei o código de [Ulisses Roque] Projeto Pixels Art para coletar a cor da paleta;
  const color = getComputedStyle(colorSelect).getPropertyValue('background-color');
  event.target.style.setProperty('background-color', color);
}

for (let n = 0; n < pixels.length; n += 1) {
  pixels[n].addEventListener('click', changePixelColor);
}

const clearPixel = document.getElementById('clear-board');

function clear() {
  for (let n = 0; n < pixels.length; n += 1) {
    pixels[n].style.setProperty('background-color', 'white');
  }
}

clearPixel.addEventListener('click', clear);

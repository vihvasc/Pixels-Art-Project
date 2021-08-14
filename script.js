const clearButton = document.querySelector('#clear-board');
const primeiraCor = document.querySelector('#firstColor');
primeiraCor.classList.add('selected');

const paletteColors = document.querySelectorAll('.color');

function createGrid (){
const gridSize = 5;
const local = document.querySelector('#pixel-board');
  for (let linhas = 0; linhas < gridSize; linhas += 1) {
    const divsLinhas = document.createElement('div');
    local.appendChild(divsLinhas);
    for (let colunas = 0; colunas < gridSize; colunas +=1) {
        const pixel = createPixel();
        divsLinhas.appendChild(pixel);
    }
  }
}
createGrid ();

function createPixel(){
  const pixel = document.createElement('div');
    pixel.className = 'pixel';
    return pixel;
}

for (let i = 0; i < paletteColors.length; i++) {
  paletteColors[i].addEventListener('click', seletora);
}

function seletora(event){
  const selectedBox = document.querySelector('.selected');
  selectedBox.classList.remove('selected');
  event.target.classList.add('selected');
}

function painter(){
  let pixelColor = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelColor.length; i++) {
    pixelColor[i].addEventListener('click', function(){
    let elem = document.querySelector('.selected');
    let theCSSprop = window.getComputedStyle(elem).getPropertyValue('background-color');      
    pixelColor[i].style.backgroundColor = theCSSprop;
    });
  }
}
painter();

function clique(event){
  const allPixels = document.querySelectorAll('.pixel');

for (let i = 0; i < allPixels.length; i++) {
  allPixels[i].addEventListener('click', painter); 
  }
}

function clear(){
  const allPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < allPixels.length; i++) {
    allPixels[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clear);

// desafio 1
// function titulo1() {
//   let tituloH1 = document.createElement('h1');
//   tituloH1.id = 'title';
//   tituloH1.innerText = 'Paleta de Cores';
//   document.body.appendChild(tituloH1);
// }
// titulo1()

// desafio 2, 3

let paletteDiv = document.querySelector('#color-palette')

function paletteList() {

  for (let index = 0; index < 4; index += 1) {
    let paletteSon = document.createElement('div');
    let colors = ['#000', '#00BFFF	', '#fcdec9', '#d3d5e4'];
    paletteSon.className = 'color';
    paletteSon.style.backgroundColor = colors[index];
    paletteSon.style.border = '1px solid #000';
    paletteDiv.appendChild(paletteSon);
  }

}
paletteList()


// desafio 4 e 5- id pixel-board - class pixel

let pixelsColor = document.querySelector('#color-palette')

function createPixels() {
  let pixelDiv = document.createElement('div');
  pixelDiv.id = 'pixel-board';
  document.body.appendChild(pixelDiv);

  for (let index = 0; index < 25; index += 1) {
    let pixelLi = document.createElement('li');
    pixelLi.classList.add('pixel');
    pixelLi.style.background = 'white';
    pixelDiv.appendChild(pixelLi)
  }
}
createPixels();

// desafio 6 

let colorsSelect = document.querySelector('.color');
colorsSelect.classList.add('selected');

// desafio 7
let seleciona = document.querySelectorAll('.color')
function selectClicks(){
  for (let index = 0; index < seleciona.length; index +=1){
    seleciona[index].addEventListener('click',function(event) {
      colorsSelect.classList.remove('selected');
      event.target.classList.add('selected');
      colorsSelect = event.target;
    });
  }
}
selectClicks()

// Desafio 8
let colorPixel = document.querySelectorAll('.pixel');

function colorsBox(){
for (let index = 0; index < colorPixel.length; index += 1){
  colorPixel[index].addEventListener('click',function(event){
    let acesso = colorsSelect.style.backgroundColor;
    event.target.style.backgroundColor = acesso;
  })
}
}
colorsBox();

// Desafio 9
function clearButton(){
let buttonClear = document.createElement('button');
buttonClear.id = 'clear-board';
buttonClear.innerText = 'Limpar';
let pixelBoard = document.getElementById('pixel-board');

document.body.insertBefore(buttonClear, pixelBoard);
buttonClear.addEventListener('click', function(){
  for(let index = 0;index < colorPixel.length; index += 1){
    colorPixel[index].style.backgroundColor = 'white';
    }
});
}

clearButton();

// Desafio 10

let div = document.createElement('div');
div.id = 'button-input';
document.body.insertBefore(div, document.querySelector('#pixel-board'));

let input = document.createElement( 'input');
input.id = 'board-size';
document.body.insertBefore(input, document.querySelector('#pixel-board'));

let button = document.createElement('button');
button.id = 'generate-board';
button.innerText = 'VQV';
document.body.insertBefore(button, document.querySelector('#pixel-board'));

input.min




// Input só aceita nº maiores que zero

// pode ser usada somente 













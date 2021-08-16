
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

// let pixelsColor = document.querySelector('#color-palette')
function createPixels() {
  let pixelDiv = document.createElement('div');
  pixelDiv.id = 'pixel-board';
  document.body.appendChild(pixelDiv);
  pixelDiv.style.width = `${42 * 5}px`;
  pixelDiv.style.height =`${42 * 5}px`;

  for (let index = 0; index < 25; index += 1) {
    let pixelDivChild = document.createElement('div');
    pixelDivChild.classList.add('pixel');
    pixelDivChild.style.backgroundColor = 'white';
   
    pixelDiv.appendChild(pixelDivChild)
  }
}
createPixels();

// desafio 6 

let colorsSelect = document.querySelector('.color');
colorsSelect.classList.add('selected');

// desafio 7
let selectPixel = document.querySelectorAll('.color')
function selectClicks(){
  for (let index = 0; index < selectPixel.length; index +=1){
    selectPixel[index].addEventListener('click',function(event) {
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
    let access = colorsSelect.style.backgroundColor;
    event.target.style.backgroundColor = access;
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
input.type= 'number'
document.body.insertBefore(input, document.querySelector('#pixel-board'));

let button = document.createElement('button');
button.id = 'generate-board';
button.innerText = 'VQV';
document.body.insertBefore(button, document.querySelector('#pixel-board'));


for(let index = 0; index < input.length; index += 1 ){
if(input >= 5 && input <=50){
  // colocar o código de multiplicação
}else{
  alert("Board inválido!")
}
}

let numero = document.querySelector('#board-size');
function capturando(){
button.addEventListener('click', function(event){
  numero.target.event.document.getElementById('#generate-board'.value);
})
}
capturando()















// function capturando (){
//  valorDigitado = document.getElementById('#button-input').value;
//  document.getElementById('#generate-board').innerHTML = valorDigitado;
// }

// capturando();

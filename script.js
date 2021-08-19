const clearButton = document.querySelector('#clear-board');
const sizeButton = document.querySelector('#generate-board')
const primeiraCor = document.querySelector('#firstColor');
primeiraCor.classList.add('selected');
const pixelBoard = document.querySelector('#pixel-board')
const paletteColors = document.querySelectorAll('.color');

function alerta (){

}

function firstGrid (){
let gridSize = 5;

const local = document.querySelector('#pixel-board');

  for (let linhas = 0; linhas < gridSize; linhas += 1) {
    const divsLinhas = document.createElement('div');
          divsLinhas.className = 'linha'
    local.appendChild(divsLinhas);
    for (let colunas = 0; colunas < gridSize; colunas +=1) {
        const pixel = createPixel();
        divsLinhas.appendChild(pixel);
    }
  }
}
firstGrid ();

function createGrid (){
  const sizeInput = document.getElementById('board-size').value
  let gridSize = 0;
  
   if( sizeInput > 0){
    gridSize = sizeInput
  }else{
    alert('Board inválido!')
    gridSize = 5
  }
  
  const local = document.querySelector('#pixel-board');
  
    for (let linhas = 0; linhas < gridSize; linhas += 1) {
      const divsLinhas = document.createElement('div');
            divsLinhas.className = 'linha'
      local.appendChild(divsLinhas);
      for (let colunas = 0; colunas < gridSize; colunas +=1) {
          const pixel = createPixel();
          divsLinhas.appendChild(pixel);
      }
    }
  }

function createPixel(){
  const pixel = document.createElement('div');
    pixel.className = 'pixel';
    return pixel;
}

for (let i = 0; i < paletteColors.length; i+= 1) {
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

function clearGrid(){
  let board = document.querySelectorAll('.linha')
  for (let i = 0; i < board.length; i += 1) {
    const element = board[i]
       if (element.className === 'linha'){
          pixelBoard.removeChild(element)
       }
  }
 
  console.log(board);
  
  createGrid()
}

clearButton.addEventListener('click', clear);
sizeButton.addEventListener('click', clearGrid)
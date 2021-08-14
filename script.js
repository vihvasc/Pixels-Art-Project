const paletteBox  = document.querySelector('.paletteBox')
const paletteBox1 = document.querySelector('.paletteBox1')
const paletteBox2 = document.querySelector('.paletteBox2')
const paletteBox3 = document.querySelector('.paletteBox3')
const clearButton = document.querySelector('#clear-board')

const primeiraCor = document.querySelector('#firstColor')
      primeiraCor.classList.add('selected')

let paletteColors = document.querySelectorAll('.color');

function createGrid(){
    let gridSize = 5;
    let local = document.querySelector('#pixel-board')
    for (let linhas = 0; linhas < gridSize; linhas++) {
        let divsLinhas = document.createElement('div')
            local.appendChild(divsLinhas)
        for (let colunas = 0; colunas < gridSize; colunas++) {
            let pixel = createPixel()
             divsLinhas.appendChild(pixel)
        }
    }
}
createGrid()

function createPixel(){ 
    let pixel = document.createElement('div');
        pixel.className = 'pixel';
       return pixel;
}

for (let i = 0; i < paletteColors.length; i++) {
    paletteColors[i].addEventListener('click', seletora)
    
}
function seletora(event){
    let selectedBox = document.querySelector('.selected')
        selectedBox.classList.remove('selected');
        event.target.classList.add('selected')
        
    console.log(event.target.classList);
    console.log(event.target.style.backgroundColor);
}

function painter(){
    
   var elem = document.querySelector(".selected");
   var pixelColor = document.querySelectorAll('.pixel')
      for (let i = 0; i < pixelColor.length; i++) {
          console.log('entrei no loop');
          pixelColor[i].addEventListener('click', function(){
            var elem = document.querySelector(".selected");
    
        var theCSSprop = window.getComputedStyle(elem).getPropertyValue("background-color");      
        pixelColor[i].style.backgroundColor = theCSSprop
          console.log('dentro da função');})   
      }
    
    //console.log(event.target);
    
}
painter()

function clique(event){
let allPixels = document.querySelectorAll('.pixel')

for (let i = 0; i < allPixels.length; i++) {
    allPixels[i].addEventListener('click', painter)
    
    
}}

function clear(){
    let allPixels = document.querySelectorAll('.pixel')
        for (let i = 0; i < allPixels.length; i++) {
           allPixels[i].style.backgroundColor = 'white'
            
        }
}
clearButton.addEventListener('click', clear)

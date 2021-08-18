window.onload = function() {
  let buton = document.querySelector('#clear-board');
  creatBoard();
  clickPixel();
  buton.addEventListener('click', clearBoard);
  
}

let board = document.querySelector('#pixel-board');
let paletteColor = document.querySelectorAll('.color');

const boardLength = 5;

paletteColor[0].style.backgroundColor = 'black';
paletteColor[1].style.backgroundColor = 'red';
paletteColor[2].style.backgroundColor = 'green';
paletteColor[3].style.backgroundColor = 'blue';

paletteColor[0].addEventListener('click', elementSelected);
paletteColor[1].addEventListener('click', elementSelected);
paletteColor[2].addEventListener('click', elementSelected);
paletteColor[3].addEventListener('click', elementSelected);

function elementSelected (origem) {
  for(index = 0; index < 4; index += 1){
    paletteColor[index].classList.remove('selected')
  }  
  
  origem.target.className += ' selected';
}



function creatBoard() {
  for(index = 0; index < boardLength * boardLength; index+= 1) {
    let creatPixel = document.createElement('div');
    creatPixel.className = 'pixel';
    board.appendChild(creatPixel);
  }
}

function clickPixel() {
  let palettePixel = document.querySelectorAll(".pixel");
  for(let i = 0; i < 25; i+= 1){
    palettePixel[i].addEventListener('click', colorPixel)  
  }    
}

function colorPixel(origem) {
  let selected = document.querySelector('.selected').style.backgroundColor;
  origem.target.style.backgroundColor = selected;
}

function clearBoard(){
  let palettePixel = document.querySelectorAll(".pixel");
  for(let index = 0; index < 25; index += 1){
    palettePixel[index].style.backgroundColor = 'white';
  }
}
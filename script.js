window.onload = function(){
  generateRGB();
}

createBoard();
firstColor();


//função que cria os grids para o pixel-board
function createBoard(){
  for(let i = 0; i < 25; i ++){
    let box = document.createElement("div");
    box.className = "pixel box"

    let board = document.querySelector("#pixel-board");
    board.appendChild(box);
  }
}

//seta a primeira cor da paleta como preto
function firstColor(){
  let firstBox = document.querySelector(".color");
  firstBox.style.backgroundColor = "black";
  firstBox.className = "selected color box";
}

//gera as cores para preencher a palheta
function generateRGB(){
let secondColor = [];
let thirdColor = [];
let fourthColor = [];
  for(let i = 0; i < 3; i ++){
    secondColor[i] = Math.random(0, 256);
    thirdColor[i] = Math.random(0, 256);
    fourthColor[i] = Math.random(0, 256);
  }
console.log(secondColor);
}

//cria um string com o formato de declaração rgb do CSS
function createRGBString(color){
  let rgbString = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
  return rgbString;
}
//preenche a palheta de cores com as cores aleatórias geradas
function fillPalette(second, third, fourth){
  let boxesPalette = document.querySelectorAll(".color");
  for(let i = 1; i < 4; i ++){
    boxesPalette[i].style.backgroundColor = createRGBString([255, 30, 6]);
  }
}
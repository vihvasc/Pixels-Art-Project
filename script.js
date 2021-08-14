//variáveis globais
var paletteList = document.querySelectorAll(".color");

//chamada das funções
createBoard();
firstColor();
fillPalette();
// createEvents();


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

function fillPalette(){
  let boxes = document.querySelectorAll(".color");
  boxes[1].style.backgroundColor = 'blue';
  boxes[2].style.backgroundColor = 'red';
  boxes[3].style.backgroundColor = 'violet'
}

// //gera as cores para preencher a palheta
// function generateRGB(){
//   let max = 256;
//   let min = 35;
// let redValue = Math.round(Math.random(min, max)*1000);
// let greenValue = Math.round(Math.random(min, max)*1000);
// let blueValue = Math.round(Math.random(min, max)*1000);

// let rgbValue = [redValue, greenValue, blueValue];
// return rgbValue;
// }

// //cria um string com o formato de declaração rgb do CSS
// function createRGBString(color){
//   let rgbString = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
//   return rgbString;
// }
// fillPalette();
// //preenche a palheta de cores com as cores aleatórias geradas
// function fillPalette(second, third, fourth){
//   let boxesPalette = document.querySelectorAll(".color");
//   let numericColor = generateRGB();
  
//   for(let i = 1; i < 4; i ++){
//     boxesPalette[i].style.backgroundColor = createRGBString(numericColor);
//   }
// }
function selectColor(event){
  for(let i = 0; i < paletteList.length; i ++){
    if(event.target === paletteList[i]){
      paletteList[i].classList.add("selected");
    }
  }
  for(let i = 0; i < paletteList.length; i ++){
    if(event.target !== paletteList[i]){
      paletteList[i].classList.remove("selected");
    }
  }
}

// function createEvents(){
//   for(let i = 0; i>paletteList.length; i ++ ){
//     paletteList[i].addEventListener('click', selectColor);
//   }
// }
//automatizar isso em breve, não está funcionando com o for, why?
paletteList[0].addEventListener('click', selectColor);
paletteList[1].addEventListener('click', selectColor);
paletteList[2].addEventListener('click', selectColor);
paletteList[3].addEventListener('click', selectColor);

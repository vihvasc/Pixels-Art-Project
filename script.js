let secondColor = [];
let thirdColor = [];
let fourthColor = [];

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
}

//gera valores rgb aleatorios para a palheta
function generateColors(){
  let blueValue = Math.random(0, 255);
  let redValue = Math.random(0, 255);
  let greenValue = Math.random(0, 256);
  let rgb = [redValue, greenValue, blueValue];

  if((blueValue === 0 && redValue === 0) && greenValue === 0){
    return 'Invalid color';
  }
 return rgb;
}
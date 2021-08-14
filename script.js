createBoard();

//variáveis globais
var paletteList = document.querySelectorAll(".color");
var pixelBoard = document.querySelectorAll(".pixel");
var board = document.getElementById("pixel-board");
var selectedColor = 'Black';
var button = document.getElementById("clear-board");
var boardButton = document.getElementById("generate-board");
var boardInput = document.getElementById("board-size");
var boardColumns = 5;


// função que cria os grids para o pixel-board
function createBoard(){
  for(let i = 0; i < 25; i ++){
    let box = document.createElement("div");
    box.classList.add("pixel");
    box.classList.add("box");

    let board = document.querySelector("#pixel-board");
    board.appendChild(box);
  }
}

// boardButton.addEventListener('click', resizeBoard);
// boardInput.addEventListener('change', getValue);

// function getValue(){
//   boardColumns = event.target.value;
  
// }
// function resetSize(){
//   pixelBoard = document.querySelectorAll(".pixel");
// for(let i = 0; i < pixelBoard.length; i ++){
//   board.removeChild(pixelBoard[i]);
// }
// console.log(pixelBoard);
// }

// function resizeBoard(){
//   resetSize();
//   var boardSize = boardColumns*boardColumns;
//   let templateGrid = document.getElementById("pixel-board");
//   let stringGrid = "repeat(" + boardColumns + ", 40px)";
//   templateGrid.style.gridTemplateColumns = stringGrid;

//   for(let i = 0; i < boardSize; i ++){
//     let box = document.createElement("div");
//     box.classList.add("pixel");
//     box.classList.add("box");

//     board.appendChild(box);
//   }
// }


//seta a primeira cor da paleta como preto
firstColor();
function firstColor(){
  let firstBox = document.querySelector(".color");
  firstBox.style.backgroundColor = "black";
  firstBox.className = "selected color box";
}

function selectColor(event){
  for(let i = 0; i < paletteList.length; i ++){
    if(event.target === paletteList[i]){
      paletteList[i].classList.add("selected");
      selectedColor = paletteList[i].style.backgroundColor;
    }
  }
  for(let i = 0; i < paletteList.length; i ++){
    if(event.target !== paletteList[i]){
      paletteList[i].classList.remove("selected");
    }
  }
  console.log(selectedColor);
}

function paint(){
  event.target.style.backgroundColor = selectedColor;
}

function createEvent(pixelBoard, paletteList){
  for(let i =0; i < pixelBoard.length; i++){
    pixelBoard[i].addEventListener('click', paint);
  }

  for(let i =0; i < paletteList.length; i ++){
    paletteList[i].addEventListener('click', selectColor);
  }
  console.log(pixelBoard.length);
}

button.addEventListener('click', clearBoard);

function clearBoard(){
  
  for(let key of pixelBoard){
    key.style.backgroundColor = 'white';
  }
}

createEvent(pixelBoard, paletteList);

//randomizar cores da palheta
//criar função que gera um número aleatório
function randomNumber(){
let number = Math.random()*100;
if(number > 255 || number < 0){
  number = Math.random()*100;
}
return number;
}
//criar função que monta uma string rgg
function rgbString(value){
  let red = randomNumber();
  let green = randomNumber();
  let blue = randomNumber();

  let string = "rgb(" + red + ", " + green + ", " + blue + ")";
  console.log(string);
  return string;
}

fillPalette();
function fillPalette(){
  let boxes = document.querySelectorAll(".color");
  // boxes[1].style.backgroundColor = 'blue';
  // boxes[2].style.backgroundColor = 'red';
  // boxes[3].style.backgroundColor = 'green'
  for(let i = 1; i < boxes.length; i ++){
    boxes[i].style.backgroundColor = rgbString();
    if(boxes[i].style.backgroundColor === 'black'){
      boxes[i].style.backgroundColor = rgbString();
    }
  }
}
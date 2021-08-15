
//variáveis globais
var paletteList = document.querySelectorAll(".color");
var pixelBoard = document.querySelectorAll(".pixel");
var board = document.getElementById("pixel-board");
var selectedColor = 'Black';
var button = document.getElementById("clear-board");
var boardButton = document.getElementById("generate-board");
var boardInput = document.getElementById("board-size");
var boardColumns = 5;

createBoard();
// função que cria os grids para o pixel-board
function createBoard(){
   validatesValue();
  resetSize();
  for(let i = 0; i < boardColumns**2; i ++){

    let box = document.createElement("div");
    box.classList.add("pixel");
    box.classList.add("box");

    board = document.querySelector("#pixel-board");
    board.appendChild(box);

    let stringGrid = "repeat(" + boardColumns + ", 40px)";
    board.style.gridTemplateColumns = stringGrid;
    createEvent(pixelBoard, paletteList);
  }
}

boardInput.addEventListener('change', getValue);
boardButton.addEventListener('click', createBoard);

function getValue(){
  boardColumns = event.target.value;
  validatesValue();
}
function validatesValue(){
  let data = document.getElementById('board-size');
  if(data.value === ''){
    alert("Board inválido!");
    return;
  }
  if(data.value < 5){
    boardColumns = 5;
  }
  if(data.value > 50){
    boardColumns = 50;
  }
}

function resetSize(){
  pixelBoard = document.querySelectorAll(".pixel");
for(let i = 0; i < pixelBoard.length; i ++){
  board.removeChild(pixelBoard[i]);
}
}

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

function clearBoard(){
  pixelBoard = document.querySelectorAll(".pixel");
  for(let key of pixelBoard){
    key.style.backgroundColor = 'white';
  }
  console.log("Estive aqui :)");
  console.log(pixelBoard.length);
}

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

function createEvent(pixelBoard, paletteList){
  pixelBoard = document.querySelectorAll(".pixel");
  for(let i =0; i < pixelBoard.length; i++){
    pixelBoard[i].addEventListener('click', paint);
  }

  for(let i =0; i < paletteList.length; i ++){
    paletteList[i].addEventListener('click', selectColor);
  }
  button.addEventListener('click', clearBoard);
}
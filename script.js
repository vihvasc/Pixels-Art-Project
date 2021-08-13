
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
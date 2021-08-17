window.onload = function() {
  let paletteColor = document.querySelectorAll(".color");
  let board = document.querySelector("#pixel-board");
  let boardLength = 5;
  paletteColor[0].style.backgroundColor = "black";

  creatBoard();
  
  function creatBoard() {
    for(index = 0; index < boardLength * boardLength; index+= 1) {
      let creatPixel = document.createElement("div");
      creatPixel.className = "pixel";
      board.appendChild(creatPixel);
    }
  }
}
window.onload = function() {
  let paletteColor = document.querySelectorAll(".color");
  let board = document.querySelector("#pixel-board");
  let boardLength = 5;
  let color;
  let reset = ["true", "true", "true"];
  paletteColor[0].style.backgroundColor = "black";
  paletteColor[1].style.backgroundColor = "red";
  paletteColor[2].style.backgroundColor = "green";
  paletteColor[3].style.backgroundColor = "blue";

  creatBoard();

  let palettePixel = document.querySelectorAll(".pixel");

  clickPixel();

  function creatBoard() {
    for(index = 0; index < boardLength * boardLength; index+= 1) {
      let creatPixel = document.createElement("div");
      creatPixel.className = "pixel";
      board.appendChild(creatPixel);
    }
  }
  
  function selectColor(origem) {
    if((origem.target == paletteColor[1]) && (reset[0] == "true")){
      paletteColor[1].style.backgroundColor = prompt("Selecione a Cor");
      reset[0] = "false";
    }
    if((origem.target == paletteColor[2]) && (reset[1] == "true")){
      paletteColor[2].style.backgroundColor = prompt("Selecione a Cor");
      reset[1] = "false";
    }
    if((origem.target == paletteColor[3]) && (reset[2] == "true")){
      paletteColor[3].style.backgroundColor = prompt("Selecione a Cor");
      reset[2] = "false";
    }
  }
  
  function clickPixel(){
    for(let i = 0; i < 25; i+= 1){
      palettePixel[i].addEventListener("click", colorPixel)  
    }    
  }

  function colorPixel(origem){
    for(let i = 0; i < 25; i+= 1){
      if(origem.target == palettePixel[i])
       palettePixel[i].style.backgroundColor = color;  
    }  
  }

  function colorClick (origem){
    if(origem.target == paletteColor[0])
    color = paletteColor[0].style.backgroundColor;
    if(origem.target == paletteColor[1])
    color = paletteColor[1].style.backgroundColor;
    if(origem.target == paletteColor[2])
    color = paletteColor[2].style.backgroundColor;
    if(origem.target == paletteColor[3])
    color = paletteColor[3].style.backgroundColor;
  }
  paletteColor[0].addEventListener("click", colorClick);
  paletteColor[1].addEventListener("click", selectColor);
  paletteColor[1].addEventListener("click", colorClick);
  paletteColor[2].addEventListener("click", selectColor);
  paletteColor[2].addEventListener("click", colorClick);
  paletteColor[3].addEventListener("click", selectColor);
  paletteColor[3].addEventListener("click", colorClick);
  
}
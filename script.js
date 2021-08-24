
let selectColor = document.getElementsByClassName("color");
let board = document.getElementsByClassName("pixel");

let clearButton = document.getElementById("clear-board");

// Criar board dinâmicamente

  let pixelBoard = document.querySelector("#pixel-board");
let boardSize = 5;
for (i=0; i<boardSize; i+=1){
  let row = document.createElement("div");
  for(i2=0; i2<boardSize; i2+=1){
    let pixel=document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("click", coloringPixels);
    row.appendChild(pixel);
  }
  pixelBoard.appendChild(row);
}

//Criar o evento de click

for(i=0; i<selectColor.length; i+=1){
  selectColor[i].addEventListener("click", getColor);
}

// Pegar a cor com o clique

function getColor(select){
  for(i=0; i<selectColor.length; i+=1){
    if(selectColor[i].classList.contains("selected")){
      selectColor[i].classList.toggle("selected");
    }
  }
  select.target.classList.toggle("selected");
  }


//Prencher pixel com a cor desejada

// document.addEventListener("click", updateColor);
// console.log("escutador de eventos=ok");


// function updateColor(event) {
//   console.log("executou a função");
//   for(i=0; i<board.length; i+=1){
//   // classSelected.style.backgroundColor
//   console.log("cheguei aqui")
//   }
// }
  // board[i].addEventListener("click", coloringPixels);
  


  function coloringPixels(event){
    let currentColor= document.querySelector(".selected").style.backgroundColor;
  event.target.style.backgroundColor = currentColor;
}

//Botão Limpar



function clear(){
  for(let index=0; index<board.length; index += 1){
    board[index].style.backgroundColor="white";
    console.log("funcionou");
  }
} 
clearButton.addEventListener("click", clear);
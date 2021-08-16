const cores = ['black'];
  for (let index = 0; index < 3; index += 1) {
    cores.push(`rgb(${colorRandom()}, ${colorRandom()}, ${colorRandom()})`);
  }
let corSelecionada = cores[0];

function colorRandom() {
  const numberRandom = Math.floor(Math.random() * 255);
  return numberRandom;
}

function createColor(colorName) {
  const color = document.createElement("div")
  color.classList.add("color")
  if(colorName === corSelecionada){
    color.classList.add("selected")
  }

  
  color.style.backgroundColor = colorName
  color.onclick = function () {
    corSelecionada = colorName
    let outrasCores = document.getElementsByClassName("selected")
    for (let i = 0; i < outrasCores.length; i++) {
      outrasCores[i].classList.remove("selected")
    }
      color.classList.add("selected")
  }
  return color
}



function createPixel() {
  const pixel = document.createElement("div")
  pixel.style.backgroundColor = "white"
  pixel.classList.add("pixel")
  pixel.onclick = function () {
    if(pixel.style.backgroundColor === corSelecionada){
      pixel.style.backgroundColor = "white"
    } else{
      pixel.style.backgroundColor = corSelecionada
    }
  }
     return pixel
}

function generateBoard(numero){
  const pixelBoard = document.getElementById("pixel-board")
  pixelBoard.style.width = `${numero * 42}px` 
  
  for (let i = 0; i < numero*numero; i++) {
    pixelBoard.appendChild(createPixel())
  }
  }
  generateBoard(5)

const colorPallete = document.getElementById("color-palette")
for (let i = 0; i < cores.length; i++) {
  colorPallete.appendChild(createColor(cores[i]))
}



const clearButton = document.getElementById("clear-board")
clearButton.onclick = function(){
  let pixels = document.getElementsByClassName("pixel")
  for(let i=0;i < pixels.length;i++){
    pixels[i].style.backgroundColor = "white"
  }
}

function setInput() {
  const button = document.getElementById("generate-board")
  let input = document.getElementById("board-size")
  button.addEventListener('click', () => {
    let numberDoInput = input.value;
    if (numberDoInput === '') {
      alert('Board inválido!');
      return;
    }
    if (numberDoInput < 5) {
      numberDoInput = 5;
    }
    if (numberDoInput > 50) {
      numberDoInput = 50;
    }
    
    generateBoard(numberDoInput);
    createColor();
  });
}

setInput();



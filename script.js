

let title = document.getElementById("title");
let header = document.getElementById("header");
let colorPalett = document.getElementById("color-palette");
let pixelBoard = document.getElementById("pixel-board");
let selected;

window.onload = function(){
    selected = document.querySelector(".selected");
    selected.style.backgroundColor = "black";
};

// função retirada do site: https://www.ti-enxame.com/pt/javascript/gerador-de-cores-aleatorias/967183954/;
function getRandomColor() {
  let letters = "0123456789ABCDEF"; 
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.random() * letters.length
    let numberFloor = Math.floor(randomNumber);
    color += letters[numberFloor];
  };
  return color;
};

function createColorPalett (){
  for (let i = 0; i < 4; i += 1){
    let randomColor = document.createElement("div");
    colorPalett.appendChild(randomColor);
    randomColor.classList.add("color");
    randomColor.addEventListener("click", selectColor);
    if (i === 0){
      randomColor.style.backgroundColor = "black";
      randomColor.classList.add("selected");
      randomColor.setAttribute("id", "black")
    } else {
      randomColor.style.backgroundColor = getRandomColor();
    };     
  }; 
};

createColorPalett();

function createPixels(){
  for (let i = 0; i < 25; i += 1){
    let newPixel = document.createElement("div");
    newPixel.setAttribute("class", "pixel");
    newPixel.addEventListener("click", paintPixel);
    pixelBoard.appendChild(newPixel);
  }
};

createPixels();

function selectColor(event){
  document.querySelector(".selected").classList.remove("selected");
  
  event.target.classList.add("selected");
  selected = document.querySelector(".selected");
};

function paintPixel(event){
  event.target.style.backgroundColor = selected.style.backgroundColor
};

let button = document.querySelector("#clear-board");
button.addEventListener("click", clearBoard)

function clearBoard (){
  let allPixels = document.getElementsByClassName("pixel");
  for (let i = 0; i < allPixels.length; i += 1){
    allPixels[i].style.backgroundColor = "white";
  };
};
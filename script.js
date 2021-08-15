let title = document.getElementById("title");
let header = document.getElementById("header");
let colorPalett = document.getElementById("color-palette");
let pixelBoard = document.getElementById("pixel-board");
let selected = document.querySelector(".selected");



function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
   color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function createColorPalett (){
  for (let i = 0; i < 4; i += 1){
    let randomColor = document.createElement("div");
    colorPalett.appendChild(randomColor);
    randomColor.classList.add("color");
    if (i === 0){
      randomColor.style.backgroundColor = "black";
      randomColor.classList.add("selected");
      randomColor.setAttribute("id", "black")
    } else if (i === 1){
      randomColor.style.backgroundColor = getRandomColor();
      randomColor.setAttribute("id", "color-two")
    } else if (i === 2){
      randomColor.style.backgroundColor = getRandomColor();
      randomColor.setAttribute("id", "color-three")
    } else if (i === 3){
      randomColor.style.backgroundColor = getRandomColor();
      randomColor.setAttribute("id", "color-four")
    };     
  }; 
};

createColorPalett();

// parte 4 - Adicione à página um quadro de pixels, com 25 pixels.
// - O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;
// - O quadro de "pixels" deve possuir o `id` denominado `pixel-board`, ao passo que cada "pixel" individual dentro do quadro deve possuir a `classe` denominada `pixel`;
// - A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;
// - O quadro de "pixels" deve aparecer abaixo da paleta de cores.

function createPixels(){
  for (let i = 0; i < 25; i += 1){
    let newPixel = document.createElement("div");
    pixelBoard.appendChild(newPixel);
    newPixel.setAttribute("class", "pixel");
  }
};

createPixels();

// 7 - Clicar em uma das cores da paleta, faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
let blackColor = document.getElementById("black");
let secondColor = document.getElementById("color-two");
let thirdColor = document.getElementById("color-three");
let fourthColor = document.getElementById("color-four");

blackColor.addEventListener("click", selectColor);
secondColor.addEventListener("click", selectColor);
thirdColor.addEventListener("click", selectColor);
fourthColor.addEventListener("click", selectColor);

function selectColor(event){
  blackColor.classList.remove("selected");
  secondColor.classList.remove("selected");
  thirdColor.classList.remove("selected");
  fourthColor.classList.remove("selected");
  
  event.target.classList.add("selected");
  selected = document.querySelector(".selected");
};
let title = document.getElementById("title");
let header = document.getElementById("header");
let colorPalett = document.getElementById("color-palette");
let pixelBoard = document.getElementById("pixel-board");

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
    randomColor.setAttribute("class", "color");
    if (i === 0){
      randomColor.style.backgroundColor = "black";
    } else {
      randomColor.style.backgroundColor = getRandomColor();
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
//criando os pixels que serão coloridos
let pixelBoard = document.querySelector("#pixel-board");

for(let index = 0; index < 25; index += 1){
    let pixel = document.createElement("div");
    pixel.style.display = "inline-block"
    pixel.className = "pixel"
    pixelBoard.appendChild(pixel)
}

//definir a cor preta como inicial
window.onload = firstColor;
function firstColor(){
    let black = document.getElementById("black");
    black.classList.toggle("selected")
}

//Cria o evento de click
let colorPalette = document.getElementsByClassName("color");
for(let index = 0; index < colorPalette.length; index += 1){
   colorPalette[index].addEventListener("click", recebeClick)
}
function recebeClick(color){
    for(let index = 0; index < colorPalette.length; index += 1){
        if(colorPalette[index].classList.contains("selected")){
            colorPalette[index].classList.toggle("selected")
        }
    }
    color.target.classList.toggle("selected")
}

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
    document.getElementById("black").classList.add("selected")
}
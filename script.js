//criando os pixels que serão coloridos
let pixelBoard = document.querySelector("#pixel-board");

for(let index = 0; index < 25; index += 1){
    let pixel = document.createElement("div");
    pixel.style.display = "inline-block"
    pixel.className = "pixel"
    pixel.addEventListener("click", colorizePixel)
    pixelBoard.appendChild(pixel)
}
//Adiciona as cores das paletas
let froly = document.getElementById("froly")
let backFroly = froly.style.backgroundColor = "#eb6b6f"
let hitpink = document.getElementById("hitpink")
let backHitpink = hitpink.style.backgroundColor = "#f9a875"
let ivory = document.getElementById("ivory")
let backIvory = ivory.style.backgroundColor = "#fff6d3"

//definir a cor preta como inicial
window.onload = firstColor;
function firstColor(){
    let black = document.getElementById("black");
    black.classList.toggle("selected")
    black.style.backgroundColor = "black"
            
    
}

//Cria o evento de click
var background;
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

//função para preencher os quadrados

function colorizePixel(pixel){
    for(let index = 0; index < colorPalette.length; index += 1){
        if(colorPalette[index].classList.contains("selected")){
            pixel.target.style.backgroundColor = colorPalette[index].style.backgroundColor
        }
    }
}
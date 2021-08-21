const palletaCores = document.querySelector("#color-pallete");
const color = document.getElementsByClassName("color")
const cores = ["rgb(0,0,0)","rgb(255,0,0)","rgb(0,255,0)","rgb(0,0,255)"];
const body = document.getElementsByTagName("body")[0]


function corBrancaInicio () {
    let white = "rgb(255,255,255)"
    let pixel =  document.querySelector(".pixel")
    
    if(pixel.style.backgroundColor !== white) {
        pixel.style.backgroundColor = white;
   } 
}

function quadroPixel () {
    let white = "rgb(255,255,255)"
    let quadroPixel = document.createElement("div")
    quadroPixel.id = "pixel-board"
    body.appendChild(quadroPixel)
        for(let index = 0; index < 25; index+= 1) {
          let pixel = document.createElement("div");
          pixel.className = "pixel"
          quadroPixel.appendChild(pixel)
          pixel.style.backgroundColor = white;
        }
          
}

function AdicionaCores () {
    for(let index = 0; index < cores.length; index+= 1 ) {
        color[index].style.backgroundColor = cores[index];
    }
}

window.onload = function () {
   AdicionaCores()
   quadroPixel()
   corBrancaInicio()
}
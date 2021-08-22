
const palletaCores = document.getElementById("color-palette");
const color = document.getElementsByClassName("color")
const cores = ["rgb(0,0,0)","rgb(255,0,0)","rgb(0,255,0)","rgb(0,0,255)"];
const body = document.getElementsByTagName("body")[0];
const pixels = document.getElementsByClassName("pixel")
const corSelecionada = document.getElementsByClassName("selected")
const botaoClear = document.getElementById("clear-board")

function limpaQuadro() {
  let white = "rgb(255,255,255)";
  for(let index = 0; index < 25; index+= 1) {
    pixels[index].style.backgroundColor = white;
  }
}

botaoClear.addEventListener("click", limpaQuadro)

function trocaSelecionado(evento) {
  for (const cor of color) {
    if (evento.target !== cor) {
      cor.classList.remove('selected');
    }
  }
}

function seleciona(evento) {
  if (!evento.target.classList.contains('selected')) {
    trocaSelecionado(evento);
    evento.target.classList.add('selected');
  }
}

palletaCores.addEventListener('click', seleciona);

function mudacor(event) {
  for(let index = 0; index < color.length; index+= 1) {
    if(corSelecionada[index] === corSelecionada[0]) {
      event.target.style.backgroundColor = corSelecionada[index].style.backgroundColor;
    }
  }
}

function corPretaSelecionada() {
  for(let index = 0; index < color.length; index+= 1) {
    if(color[index] === color[0]) {
      color[index].classList = "color selected";
   }
  }
}   

function corBrancaInicio () {
    let white = "rgb(255,255,255)";
    let pixel =  document.querySelectorAll(".pixel");
    for(let index = 0; index < 25; index+= 1) {
      pixel[index].style.backgroundColor = white;
    }
    
}

function quadroPixel () {
    let quadroPixel = document.createElement("div")
    quadroPixel.id = "pixel-board"
    body.appendChild(quadroPixel)
        for(let index = 0; index < 25; index+= 1) {
          let pixel = document.createElement("div");
          pixel.className = "pixel"
          pixel.addEventListener("click", mudacor)
          quadroPixel.appendChild(pixel)
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
   corPretaSelecionada()
}

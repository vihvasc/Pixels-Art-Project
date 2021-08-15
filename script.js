let cores = ["black", "yellow", "green", "purple"]
let corSelecionada = cores[0];


function createColor(colorName) {
  const color = document.createElement("div")
  color.classList.add("color")
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
  pixel.classList.add("pixel")
  pixel.onclick = function () {
    pixel.style.backgroundColor = corSelecionada
  }
  return pixel
}


const colorPallete = document.getElementById("color-palette")
for (let i = 0; i < cores.length; i++) {
  colorPallete.appendChild(createColor(cores[i]))
}

const pixelBoard = document.getElementById("pixel-board")

for (let i = 0; i < 25; i++) {
  pixelBoard.appendChild(createPixel())
}










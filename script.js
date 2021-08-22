let clearButton = document.getElementById("clear-board")
let backgroundColorSelected = "black"

function alterarCor(colors){
    for(let i = 0; i < colors.length; i += 1){
    let li = document.createElement("li")
    if (i === 0) {
    li.classList.add("selected")
}
    li.classList.add("color")
    li.style.backgroundColor = colors[i]
    colorsUl.appendChild(li)
  }
}

clearButton.addEventListener("click", function() {
    let pixelsList = document.getElementsByClassName("pixel")
    for(pixel of pixelsList){
    pixel.style.backgroundColor = "white";
    }
    }) 
function createGrid(number) {
    let pixelBoard = document.querySelector("#pixel-board")
    for(let counter = 0; counter < number; counter += 1) {
        let line = document.createElement("div")
        line.className = "line"
        for(let counter = 0; counter < number; counter += 1) {
            let pixel = document.createElement("div")
            pixel.className = "pixel"
            line.appendChild(pixel)
        }
        pixelBoard.appendChild(line)
    }
}

function addClass(elementOrigin){
    let element = elementOrigin.target

    let currentClass = document.querySelector(".selected")

    if (document.getElementsByClassName("selected").length >= 1) {
        currentClass.classList.remove("selected")
    }

    element.classList.add("selected");

}

window.onload = function () {
    createGrid(5)
    let colorPalette = document.querySelector("#color-palette")
    colorPalette.addEventListener("click", addClass)
}
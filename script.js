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

    if(document.getElementsByClassName("selected").length >= 1) {
        currentClass.classList.remove("selected")
    }

    element.classList.add("selected");

}

function changePixelColor(elementOrigin) {
    let element = elementOrigin.target
    let selected = document.querySelector(".selected")
    let cssProp = window.getComputedStyle(selected)
    let color = cssProp.getPropertyValue("background-color")
    element.style.setProperty("background-color", color)
}

function clearBoard() {
    let pixel = document.getElementsByClassName("pixel")
    for(let counter = 0; counter < pixel.length; counter += 1) {
        let change = pixel[counter]
        change.style.backgroundColor = "white"
    }
}

window.onload = function () {
    createGrid(5)
    
    let colorPalette = document.querySelector("#color-palette")
    colorPalette.addEventListener("click", addClass)

    let pixel = document.getElementsByClassName("pixel")
    for(let counter = 0; counter < pixel.length; counter += 1) {
        let add = pixel[counter]
        add.addEventListener("click", changePixelColor)
    }

    let clearBtn = document.querySelector("#clear-board")
    clearBtn.addEventListener("click", clearBoard)
}
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

createGrid(5)
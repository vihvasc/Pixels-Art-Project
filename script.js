let corpoDoQuadro = document.querySelector("#pixel-board");
let palleteSection = document.querySelector("#color-palette")
let numberPixel = 25;

for (let index = 0; index < numberPixel; index += 1) {
    let pixelContainer = document.createElement("div");
    pixelContainer.className = "pixel";
    corpoDoQuadro.appendChild(pixelContainer);
}

function selectedColor(event){
    let colorChild = document.getElementsByClassName("color");

    for (let index = 0; index < colorChild.length; index += 1){
        let colorChildChildren = colorChild[index];
        colorChildChildren.classList.remove("selected");
    }
    event.target.classList.add("selected");
}
palleteSection.addEventListener("click", selectedColor);

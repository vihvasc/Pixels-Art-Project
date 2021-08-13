let corpoDoQuadro = document.querySelector("#pixel-board");
let numberPixel = 25;

for (let index = 0; index < numberPixel; index += 1) {
    let pixelContainer = document.createElement("div");
    pixelContainer.className = "pixel";
    corpoDoQuadro.appendChild(pixelContainer);
}
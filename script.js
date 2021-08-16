let corpoDoQuadro = document.querySelector("#pixel-board");
let palleteSection = document.querySelector("#color-palette")
let buttonClearId = document.querySelector("#clear-board");
let numberPixel = 25;

function arrayDiv (){
    for (let index = 0; index < numberPixel; index += 1) {
        let pixelContainer = document.createElement("div");
        pixelContainer.className = "pixel";
        corpoDoQuadro.appendChild(pixelContainer);
    }
}
arrayDiv()

function selectedColor(event){
    let colorChild = document.getElementsByClassName("color");

    for (let index = 0; index < colorChild.length; index += 1){
        let colorChildChildren = colorChild[index];
        colorChildChildren.classList.remove("selected");
    }
    event.target.classList.add("selected");
}
palleteSection.addEventListener("click", selectedColor);

function colorPixels(event){
    const selectedColor = document.querySelector('.selected');
    const colouredPixel = event.target;
    // Segue o link da referencia getComputedStyle: https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    let getStyle = getComputedStyle(selectedColor).backgroundColor;
    colouredPixel.style.backgroundColor = getStyle;
}
corpoDoQuadro.addEventListener("click", colorPixels)

function clearButton(event) {
    let pixelsContainer = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelsContainer.length; index += 1) {
        let pixelButton = pixelsContainer[index];
        pixelButton.style.backgroundColor = 'white';
  }
}
buttonClearId.addEventListener("click", clearButton);


  
  
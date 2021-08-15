const colorPalette = document.getElementById("color-palette");
const buttonClear = document.getElementById("clear-board");
let pixels = document.getElementsByClassName("pixel");
const buttonAplic = document.getElementById("button-aplication")
const styleSheet = document.styleSheets[0];

colorPalette.children[0].style.backgroundColor = "black"
colorPalette.children[1].style.backgroundColor = colorRandom();
colorPalette.children[2].style.backgroundColor = colorRandom();
colorPalette.children[3].style.backgroundColor = colorRandom();

//A box black começa com a class selected, quando clickar remove a class na antiga e coloca na nova

colorPalette.addEventListener("click", addClassSelected);
function addClassSelected(event) {
  let select = document.querySelector(".selected");
  select.classList.remove("selected");
  event.target.classList.add("selected");
}

//Adiciona cor aos pixels
for (const pixel of pixels) {
  pixel.addEventListener("click", addColor);
}
function addColor(event) {
  let selectedCollor = document.querySelector(".selected").style.backgroundColor;
  event.target.style.setProperty("background-color", selectedCollor);
}

//Limpa as cores dos pixels
buttonClear.addEventListener("click", clearPixels);
function clearPixels() {
  for (const pixel of pixels) {
    pixel.style.setProperty("background-color", "white");
  }
}

//Cor aleatoria
function colorRandom() {
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);
  let cor = r+g+b;
  if (cor != 0 || cor != 765)return `rgb(${r},${g},${b})`
}

// buttonAplic.addEventListener("click", sizePixel);
// function sizePixel() {
//   let valueInput = document.getElementById("sizePixel").value + "px";
//   document.

//   for (const pixel of pixels) {
    
//   }
// }

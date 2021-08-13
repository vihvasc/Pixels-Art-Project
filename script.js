let black = document.getElementById("black");
let blue = document.getElementById("blue");
let red = document.getElementById("red");
let purple = document.getElementById("purple");
let colors = document.querySelectorAll(".color");
let colorPalette = document.getElementById("color-palette");

function blackSelected() {
  black.classList = "color selected";
}

blackSelected();

function addSelected(event) {
  corSelecionada = event.target;
  
  for (i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove("selected");
  }
  corSelecionada.classList.add("selected");
}

black.addEventListener("click", addSelected);
blue.addEventListener("click", addSelected);
red.addEventListener("click", addSelected);
purple.addEventListener("click", addSelected);
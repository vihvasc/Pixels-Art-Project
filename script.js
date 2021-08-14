const colorPalette = document.getElementById("color-palette");
const pixelBoard = document.getElementById("pixel-board");

colorPalette.children[0].style.backgroundColor = "black"
colorPalette.children[1].style.backgroundColor = "red"
colorPalette.children[2].style.backgroundColor = "green"
colorPalette.children[3].style.backgroundColor = "blue"

//A box black começa com a class selected, quando clickar remove a class na antiga e coloca na nova

colorPalette.addEventListener("click", addClassSelected);
function addClassSelected(event) {
  let select = document.querySelector(".selected");
  select.classList.remove("selected");
  event.target.classList.add("selected")
}

pixelBoard.addEventListener("click", addColor);
function addColor(event) {
  let selectedCollor = document.querySelector(".selected").style.backgroundColor
  event.target.style.setProperty("background-color", selectedCollor)
}

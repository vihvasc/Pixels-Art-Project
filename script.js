const colorPalette = document.getElementById("color-palette");

colorPalette.children[0].style.backgroundColor = "black"
colorPalette.children[1].style.backgroundColor = "red"
colorPalette.children[2].style.backgroundColor = "green"
colorPalette.children[3].style.backgroundColor = "blue"

colorPalette.addEventListener("click", addClassSelected);

//A box black começa com a class selected, quando clickar remove a class na antiga e coloca na nova
function addClassSelected(event) {
  let select = document.querySelector(".selected");
  select.classList.remove("selected");
  event.target.classList.add("selected")
}

colorPalette.addEventListener("click", addColor);
document.querySelector(".selected").style.backgroundColor

function addColor(event) {
  const pixelBoard = document.getElementById("pixel-board");
  
}



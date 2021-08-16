function colorSelect() {
  const colors = document.getElementsByClassName('color');
  const corAnterior = document.getElementsByClassName('selected');

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', (event) => {
      corAnterior[0].classList.remove('selected');
      event.target.classList.add('color', 'selected');
    });
  }
}
colorSelect();

function paintPixels() {
  const pixels = document.getElementsByClassName("pixel");
  let previousColor = document.getElementsByClassName("selected");
  //console.log(previousColor[0]);
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener("click", function (event) {
      if (previousColor[0].classList.contains("red")) {
        pixels[index].classList.remove("black", "blue", "green");
        event.target.classList.add("red");
      } else if (previousColor[0].classList.contains("blue")) {
        pixels[index].classList.remove("black", "red", "green");
        event.target.classList.add("blue");
      } else if (previousColor[0].classList.contains("green")) {
        pixels[index].classList.remove("black", "blue", "red");
        event.target.classList.add("green");
      } else {
        pixels[index].classList.remove("red", "blue", "green");
        event.target.classList.add("black")
      }
    });
  }
}
paintPixels();

function cleanGrid() {
  const pixels = document.getElementsByClassName("pixel");
  let cleanButtom = document.querySelector("#clear-board");

  cleanButtom.addEventListener("click", function (event) {

    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].classList.remove("black", "red", "blue", "green");
    }
  })
}

cleanGrid();
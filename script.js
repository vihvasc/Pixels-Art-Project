let quadroPixel = document.querySelector('#pixel-board');
let linha = 5;

function makeLine() {
  for (let i = 0; i < linha; i += 1) {
    let line = document.createElement('div');
    line.className = 'line';
    quadroPixel.appendChild(line);
    makePixels(line);
  }
}
makeLine();

function makePixels(ondeGuarda) {
  for (let i = 0; i < linha; i += 1) {
    let pixel = document.createElement('div');
    // let line = document.querySelector(".line")
    pixel.className = 'pixel';
    ondeGuarda.appendChild(pixel);
  }
}

let selected = document.querySelector('.color');
selected.classList.add('selected');

let buttonSelect = document.querySelectorAll('.color');
function addClassSelected() {
  for (let index = 0; index < buttonSelect.length; index += 1) {
    buttonSelect[index].addEventListener('click', function (event) {
      selected.classList.remove('selected');
      event.target.classList.add('selected');
      selected = event.target;
    });
  }
}
addClassSelected();

let pixels = document.getElementsByClassName('pixel');

function pixelColor() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function (event) {
      let selectedColor = selected.style.backgroundColor;
      event.target.style.backgroundColor = selectedColor;
    });
  }
}
pixelColor();

function clearPixel() {
  let clearButton = document.createElement('button');
  clearButton.id = 'clear-board';
  clearButton.innerText = 'Limpar';
  divButton = document.getElementById('button-clear');
  divButton.appendChild(clearButton);
  clearButton.addEventListener('click', function () {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}
clearPixel();

const pixelBoard = document.getElementById('pixel-board');
let maxLines = 5;
let maxColumns = 5;
var newColor = "black";
var colorResset = "white";

window.onload = function() {
    document.getElementById('color1').classList.add('selected');
};

for (let index = 0; index < maxLines; index += 1) {
    for (let i =0; i < maxLines; i +=1) {
        let pixel = document.createElement('div');
        pixelBoard.appendChild(pixel).className = "pixel";
    }
}

let buttons = document.getElementsByTagName('button');

for (index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener('click', colorSelection);
}

function colorSelection(event) {
    const newSelection = event.target;
    newColor = window.getComputedStyle(newSelection).backgroundColor;
    const selectedColor = document.querySelector('.selected');

    selectedColor.classList.remove('selected');
    newSelection.classList.add('selected');
}

function colorAply(obj) {
    obj.target.style.backgroundColor = newColor;
}

let pixels = document.getElementsByClassName("pixel");
for (index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', colorAply);
}

console.log(typeof(pixels));

function clearBoard () {
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = colorResset;
    }
    newColor = "black";
}

let clearButton = document.getElementById("clear-board");
clearButton.addEventListener('click', clearBoard);


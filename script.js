const pixelBoard = document.getElementById('pixel-board');
var newColor = "black";
var colorResset = "white";
let pixels = document.getElementsByClassName("pixel");


function makeBoard() {
    ressetBoard();
    maxLines = limitLines();
    pixelBoard.style.width = String (maxLines *40) + "px";
    for (let index = 0; index < maxLines; index += 1) {
        for (let i =0; i < maxLines; i +=1) {
            pixel = document.createElement('div');
            pixelBoard.appendChild(pixel).className = "pixel";
        }
    }
    for (index = 0; index < pixels.length; index += 1) {
        pixels[index].addEventListener('click', colorAply);
    }
}

let boardButton = document.getElementById('generate-board');
boardButton.addEventListener('click', makeBoard);

window.onload = function() {
    document.getElementById('color1').classList.add('selected');
    fixedBoard();
    let color2 = document.getElementById('color2');
    let color3 = document.getElementById('color3');
    let color4 = document.getElementById('color4');
    console.log(color2.style)
    color2.style.backgroundColor = randomColor();
    color3.style.backgroundColor = randomColor();
    color4.style.backgroundColor = randomColor();
    console.log(color2.style)
};


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

function clearBoard () {
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = colorResset;
    }
    newColor = "black";
}

let clearButton = document.getElementById("clear-board");
clearButton.addEventListener('click', clearBoard);

function fixedBoard () {
    maxLines = 5;
    pixelBoard.style.width = String (maxLines *40) + "px";
    for (let index = 0; index < maxLines; index += 1) {
        for (let i =0; i < maxLines; i +=1) {
            let pixel = document.createElement('div');
            pixelBoard.appendChild(pixel).className = "pixel";
        }
    }
    for (index = 0; index < pixels.length; index += 1) {
        pixels[index].addEventListener('click', colorAply);
    }
}

function ressetBoard() {
    pixelBoard.innerText = "";
}

function limitLines() {
    let maxLines = document.getElementById('board-size').value
    if (maxLines < 5 || maxLines == null) {
        alert("Board inválido!");
        maxLines = 5;
    } else if (maxLines > 50) {
        alert("Board inválido!");
        maxLines = 50;
    }return maxLines;
}

function randomColor() {
    return "rgb (" +String([Math.floor(Math.random() * (255 - 0)), Math.floor(Math.random() * (255 - 0)), Math.floor(Math.random() * (255 - 0))]) + ")"
}
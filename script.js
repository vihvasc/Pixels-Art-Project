let contentPalette = document.querySelector('.colors-ul');
let colorPalette = document.getElementsByClassName('color');
let pixelBoard = document.querySelector('#pixel-board');
let pixel = document.getElementsByClassName('pixel');
let colorPixel;
let colors = ['black', 'red', 'green', 'yellow'];
let button = document.querySelector('#clear-board');

function createColorsAndAddClass() {
    let quantListItem = 4;

    for (let i = 0; i < quantListItem; i += 1) {
        let li = document.createElement('li');
        li.className = 'color';
        li.style.backgroundColor = colors[i];
        contentPalette.appendChild(li);
    }
    colorPalette[0].classList.add('selected');
}

createColorsAndAddClass();

function generatePixelInBoard() {
    let quantPixel = 25;
    for (let i = 0; i < quantPixel; i += 1) {
        let pixel = document.createElement('div');
        pixel.className= 'pixel';
        pixel.style.backgroundColor = 'white';
        pixelBoard.appendChild(pixel);
    }
}

generatePixelInBoard();

function setSelectedClass(event) {
    for (let i = 0; i < colorPalette.length; i += 1) {
        colorPalette[i].classList.remove('selected')
    }
    event.target.classList.add('selected');
}

contentPalette.addEventListener('click', setSelectedClass);

function paintPixel(event) {
    colorPixel = document.querySelector('.selected');
    event.target.style.backgroundColor = colorPixel.style.backgroundColor;
}

pixelBoard.addEventListener('click', paintPixel);

function clearPixelBoard() {
    for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = 'white';
    }
    pixelBoard.style.backgroundColor = 'white';
}

button.addEventListener('click', clearPixelBoard);
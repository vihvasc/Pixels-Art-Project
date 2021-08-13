function paletteColors() {
    let paletteColors = document.getElementById('color-palette');
    let contentColor = document.getElementsByClassName('color');
    contentColor[0].classList.add('selected');
    let colors = ['black', 'yellow', 'green', 'red'];

    for (let index = 0; index < contentColor.length; index += 1) {
        contentColor[index].style.backgroundColor = colors[index];
        contentColor[index].addEventListener('click', changeClass);
    }

    function changeClass(event) {
        let selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        
        event.target.classList.add('selected');
    }
}

paletteColors();


function pixelBoard() {
    let pixelBoard = document.getElementById('pixel-board');
    let numberOfPixel = 25;

    for (let index = 0; index < numberOfPixel; index += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';

        pixelBoard.appendChild(pixel);
    }
}

pixelBoard();
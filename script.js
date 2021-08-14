let elementBlack = document.getElementById('black');
let elementColorPallete = document.getElementById('color-palette');
let elementPixelBoard = document.getElementById('pixel-board')

window.onload = function() {
    blackSelected()

}

function blackSelected() {
    elementBlack.className = 'color ' + 'selected';
}

function selectedColor(e) {
    let elementSelected = document.querySelector('.selected')
    if (e.target.classList.contains('color')) {
        elementSelected.classList.remove('selected');
        e.target.classList.add('selected'); 
    }
}
elementColorPallete.addEventListener('click', selectedColor);


let elementColor = document.getElementsByClassName('color');

function addPixelColor(e) {
    let elementSelected = document.querySelector('.selected');
    if (e.target.classList.contains('pixel')) {
        if (elementColor[0] === elementSelected){
            e.target.style.backgroundColor = 'black';

        }
        if (elementColor[1] === elementSelected){
            e.target.style.backgroundColor = 'red';

        }
        if (elementColor[2] === elementSelected){
            e.target.style.backgroundColor = 'blue';

        }
        if (elementColor[3] === elementSelected){
            e.target.style.backgroundColor = 'darkgreen';
        }          
    }
}
elementPixelBoard.addEventListener('click', addPixelColor);
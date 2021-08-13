window.onload = function() {
    blackSelected()
}

let elementBlack = document.getElementById('black');

function blackSelected() {
    elementBlack.className = 'color ' + 'selected';
}

let elementColorPallete = document.getElementById('color-palette');

function selectedColor(e) {
    let elementSelected = document.querySelector('.selected')
    if (e.target.classList.contains('color')) {
        elementSelected.classList.remove('selected');
        e.target.classList.add('selected'); 
    }
}
elementColorPallete.addEventListener('click', selectedColor);

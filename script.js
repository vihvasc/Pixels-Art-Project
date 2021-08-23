window.onload = pageLoaded();

function pageLoaded() {
    let selectFirstColor = document.getElementsByClassName('color')[0];
    selectFirstColor.classList.add('selected');
}

function switchColor(buttonClicked) {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    buttonClicked.classList.add('selected');
}   

function fillColor(buttonClicked) {
    let colorSelected = document.getElementsByClassName('selected')[0];
    let colorSelectedStyle = window.getComputedStyle(colorSelected);
    let background = colorSelectedStyle.getPropertyValue('background-color');
    buttonClicked.style.backgroundColor = background;
}

function clearBoard() {
    let allPixels = document.querySelectorAll('.pixel');  
    for (let i = 0; i < allPixels.length; i += 1) {
        allPixels[i].style.backgroundColor = 'white';
    }
}

window.onload = pageLoaded();

function pageLoaded() {
    let selectFirstColor = document.getElementsByClassName('color')[0];
    selectFirstColor.classList.add('selected');
}

function switchColor(buttonClicked) {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    buttonClicked.classList.add('selected');
}   





window.onload = function() {
    blackSelected()
}

let getBlack = document.getElementById('black');

function blackSelected() {
    getBlack.className = 'color ' + 'selected';
}

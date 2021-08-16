window.onload = function() {
    
};

let paleta = document.getElementById('color-palette');
let colorPaleta = paleta.children;
for (let i = 0; i < colorPaleta.length; i++){
    colorPaleta[i].addEventListener('click', colorSelected);
}

function colorSelected(event) {
    let paleta = document.getElementById('color-palette');
    let colorPaleta = paleta.children;

    for (let i = 0; i < colorPaleta.length; i++){
        colorPaleta[i].className = 'color';
    }

    event.target.className = 'color selected';
}
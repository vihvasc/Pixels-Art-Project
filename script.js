let elementBlack = document.getElementById('black');
let elementColorPallete = document.getElementById('color-palette');
let elementPixelBoard = document.getElementById('pixel-board')
let elementColor = document.getElementsByClassName('color');
let elementPixel = document.getElementsByClassName('pixel')
let elementButton = document.getElementById('clear-board');
let getColorPallete = document.querySelectorAll('#color-palette section');
let colorBlack = getColorPallete[0].style.backgroundColor = 'black'; 
let color2 = getColorPallete[1].style.backgroundColor = "rgb" + "(" + getAleatoryColor() + "," + getAleatoryColor() + "," + getAleatoryColor() + ")";
let color3 = getColorPallete[2].style.backgroundColor = "rgb" + "(" + getAleatoryColor() + "," + getAleatoryColor() + "," + getAleatoryColor() + ")";
let color4 = getColorPallete[3].style.backgroundColor = "rgb" + "(" + getAleatoryColor() + "," + getAleatoryColor() + "," + getAleatoryColor() + ")";

window.onload = function() {
    blackSelected()

}
function blackSelected() {
    elementBlack.classList.add('selected');
}

function getAleatoryColor() {
    let aleatoryColor = Math.floor(Math.random() *255);
    return(aleatoryColor);
}
getAleatoryColor()


function criaPixels() {
    let tamanhoPixel = 5;
    console.log(tamanhoPixel);
    for (let linha = 0; linha < tamanhoPixel; linha += 1) {
        for (let coluna = 0; coluna < tamanhoPixel; coluna += 1) {
            let setDiv1 = document.createElement('div');
            setDiv1.classList.add('pixel');
            elementPixelBoard.appendChild(setDiv1);

        }
        let espaco = document.createElement('p');
        elementPixelBoard.appendChild(espaco);
    }
}
criaPixels()


function selectedColor(e) {
    let elementSelected = document.querySelector('.selected')
    if (e.target.classList.contains('color')) {
        elementSelected.classList.remove('selected');
        e.target.classList.add('selected'); 
    }
}
elementColorPallete.addEventListener('click', selectedColor);

function addPixelColor(e) {
    let elementSelected = document.querySelector('.selected');
    if (e.target.classList.contains('pixel')) {
        if (elementColor[0] === elementSelected){
            e.target.style.backgroundColor = colorBlack;

        }
        if (elementColor[1] === elementSelected){
            e.target.style.backgroundColor = color2;
        }
        if (elementColor[2] === elementSelected){
            e.target.style.backgroundColor = color3;
        }
        if (elementColor[3] === elementSelected){
            e.target.style.backgroundColor = color4;
        }          
    }
}
elementPixelBoard.addEventListener('click', addPixelColor);

function buttonClear() {
    for (let i = 0; i < elementPixel.length; i += 1) {
        elementPixel[i].style.backgroundColor = "white";
    }
}
elementButton.addEventListener('click', buttonClear);

function defineInput() {
    let getInput = document.getElementById('board-size').value;
    let getelementPixelBoard = document.getElementById('pixel-board');
        getelementPixelBoard.innerHTML = '';

    if (getInput === "") {
        alert("Board inválido!");
    }

    if (getInput < 5) {
            getInput = 5;
    }
    if (getInput > 50) {
            getInput = 50;
    }
    for (let linha = 0; linha < getInput; linha += 1) {
        for (let coluna = 0; coluna < getInput; coluna += 1) {
            let setDiv1 = document.createElement('div');
            setDiv1.classList.add('pixel');
            elementPixelBoard.appendChild(setDiv1);
        }
        let espaco = document.createElement('p');
        elementPixelBoard.appendChild(espaco);
    }


}

function buttonGenerate() {
    let getGenerateButton = document.getElementById('generate-board');
    getGenerateButton.addEventListener('click', defineInput);
}
buttonGenerate()
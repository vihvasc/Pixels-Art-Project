const tamanhoPaleta = 4;
const quantidadePixel = 25;
let botao = document.getElementById('clear-board');

botao.addEventListener('click', limpaPixels);

window.onload = function() {
    iniciaPaleta();
    iniciaPixels();
}

function iniciaPaleta() {
    let colors = document.getElementsByClassName('color');
    criaPaletaCores();
    addListenerPalet(colors);
    setCoresPaleta(colors);
}

function criaPaletaCores() {
    let paleta = document.getElementById('color-palette');
    for (let index = 0; index < tamanhoPaleta; index++) {
        let cor = document.createElement('div')
        cor.className ='color';
        paleta.appendChild(cor);
    }
}

function addListenerPalet(colors) {
    for (let index = 0; index < colors.length; index++) {
        colors[index].addEventListener('click', selectedPaleta)
    }
}

function setCoresPaleta(colors){
    colors[0].style.backgroundColor = 'black';
    colors[1].style.backgroundColor = 'red';
    colors[2].style.backgroundColor = 'blue';
    colors[3].style.backgroundColor = 'green';
    colors[0].classList.add('selected')
}

function iniciaPixels(){
    addPixels();
    addListenerPixel();
}

function addPixels() {
    let divPixel = document.getElementById('pixel-board');
    for (let index = 0; index < quantidadePixel; index++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        divPixel.appendChild(pixel);
    }
}

function addListenerPixel() {
    let pixelS = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelS.length; index++) {
        pixelS[index].addEventListener('click', mudaCorPixel)        
    }
}

function selectedPaleta(div) {
    let paletaCores = document.getElementsByClassName('color')
    for (let index = 0; index < paletaCores.length; index++) {
        if(paletaCores[index].classList.contains('selected')){
            paletaCores[index].classList.toggle('selected');     
        }
    }
    div.target.classList.toggle('selected');
}

function mudaCorPixel(div) {
    let corSelected = document.querySelector('.selected')
    div.target.style.backgroundColor = corSelected.style.backgroundColor;
}

function limpaPixels(){
    let quadroPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < quantidadePixel; index++) {
        quadroPixel[index].style.backgroundColor = 'white';
    }
    //iniciaPixels()
}
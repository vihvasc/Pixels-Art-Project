window.onload = function() {
    criaPaletaCores();
    addListenerPalet();
    addPixel();
    addListenerPixel();
}

function criaPaletaCores() {
    let paleta = document.getElementById('color-palette');
    for (let index = 0; index < 4; index++) {
        let cor = document.createElement('div')
        cor.className ='color';
        paleta.appendChild(cor);
    }
}

function addListenerPalet() {
    let colorS = document.getElementsByClassName('color')

    for (let index = 0; index < colorS.length; index++) {
        colorS[index].addEventListener('click', selectedPaleta)
    }
    colorS[0].style.backgroundColor = 'black';
    colorS[1].style.backgroundColor = 'red';
    colorS[2].style.backgroundColor = 'blue';
    colorS[3].style.backgroundColor = 'green';

    colorS[0].classList.add('selected')
}

function addPixel() {
    let divPixel = document.getElementById('pixel-board');
    for (let index = 0; index < 25; index++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        divPixel.appendChild(pixel);
    }
}

function addListenerPixel() {
    let pixelS = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelS.length; index++) {
        pixelS[index].addEventListener('click', mudaPixel)        
    }
}

function selectedPaleta(div) {
    let corPaleta = document.getElementsByClassName('color')
    for (let index = 0; index < corPaleta.length; index++) {
        if(corPaleta[index].classList.contains('selected')){
            corPaleta[index].classList.toggle('selected');     
        }
    }
    div.target.classList.toggle('selected');
}

function mudaPixel(div) {
    let corSelected = document.querySelector('.selected')

    div.target.style.backgroundColor = corSelected.style.backgroundColor;
}
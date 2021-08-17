let paletaDeCores = document.querySelectorAll('.color');
let telaDePintura = document.querySelector('#pixel-board');


paletaDeCores[0].style.backgroundColor = 'black';
paletaDeCores[1].style.backgroundColor = 'blue';
paletaDeCores[2].style.backgroundColor = 'cyan';
paletaDeCores[3].style.backgroundColor = 'green';

paletaDeCores[0].classList.add('selected');

for (let index = 0; index < 5; index += 1) {
    createPixel();
}

function createPixel() {
    for (let index2 = 0; index2 < 5; index2 += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        telaDePintura.appendChild(pixel);
    }
}

function trocaDoSeletor(origin) {
let corSelecionada = document.querySelector('.selected')
    corSelecionada.classList.remove('selected')
    origin.target.classList.add('selected');

}



for (let i = 0; i < paletaDeCores.length; i += 1) {
    paletaDeCores[i].addEventListener('click', trocaDoSeletor)
};


let quadroDePixel = document.querySelector('#pixel-board');

function tinta(origem){
    let corSelecionada = document.querySelector('.selected').style.backgroundColor
    origem.target.style.backgroundColor = corSelecionada;
};

quadroDePixel.addEventListener('click', tinta);
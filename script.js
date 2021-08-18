let paletaDeCores = document.querySelectorAll('.color');
let telaDePintura = document.querySelector('#pixel-board');
let botãoDeLimpeza = document.querySelector('#clear-board');


paletaDeCores[0].style.backgroundColor = 'black';
// paletaDeCores[1].style.backgroundColor = 'blue';
// paletaDeCores[2].style.backgroundColor = 'cyan';
// paletaDeCores[3].style.backgroundColor = 'rgba';

paletaDeCores[0].classList.add('selected');

function createPixel(quantidadeDeQuadrados = 5) {
    telaDePintura.style.width = `${quantidadeDeQuadrados * 42}px`
    for (let index2 = 0; index2 < quantidadeDeQuadrados * quantidadeDeQuadrados; index2 += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        telaDePintura.appendChild(pixel);

    }
}
window.onload = createPixel()

function trocaDoSeletor(origin) {
    let corSelecionada = document.querySelector('.selected')
    corSelecionada.classList.remove('selected')
    origin.target.classList.add('selected');

}



for (let i = 0; i < paletaDeCores.length; i += 1) {
    paletaDeCores[i].addEventListener('click', trocaDoSeletor)
};


let quadroDePixel = document.querySelector('#pixel-board');

function tinta(origem) {
    let corSelecionada = document.querySelector('.selected').style.backgroundColor
    if (origem.target.classList.contains('pixel')) {
        origem.target.style.backgroundColor = corSelecionada;
    }
};

quadroDePixel.addEventListener('click', tinta);



function limpar() {
    let limpezaDePixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < limpezaDePixel.length; i += 1) {
        limpezaDePixel[i].style.backgroundColor = 'white'
    }
}
botãoDeLimpeza.addEventListener('click', limpar)

let valorImput = document.querySelector('#board-size')




// montar tabela 


function apagarBord() {
    telaDePintura.innerHTML = ""
}

function alertaBotao() {
    alert("Board inválido!");
}

function montagem550() {
    apagarBord()
    quantidadeDeQuadrados = valorImput.value;
    createPixel(quantidadeDeQuadrados);
    telaDePintura.style.width = `${quantidadeDeQuadrados * 42}px`;
};

function montagem600() {
    apagarBord()
    if (valorImput.value <= 5) {
        quantidadeDeQuadrados = 5;
    } else {
        quantidadeDeQuadrados = 50;
    }
    createPixel(quantidadeDeQuadrados);
    telaDePintura.style.width = `${quantidadeDeQuadrados * 42}px`;
}

function montar() {
    if (valorImput.value <= 50 && valorImput.value >= 5) {
        montagem550();
    } else {
        montagem600();
        alertaBotao();
    }
}

let botaoDeAtualização = document.querySelector('#generate-board');

botaoDeAtualização.addEventListener('click', montar)

// cores aleatórias

function geradorDeCores(tranparencia = 1){
let red = parseInt(Math.random()*255);
let green = parseInt(Math.random()*255);
let blue = parseInt(Math.random()*255);

return `rgba(${red},${green},${blue},${tranparencia})`
}

function coreNaTela(){
paletaDeCores[1].style.backgroundColor = geradorDeCores();
paletaDeCores[2].style.backgroundColor = geradorDeCores();
paletaDeCores[3].style.backgroundColor = geradorDeCores();
}

window.onload = coreNaTela()

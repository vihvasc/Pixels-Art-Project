// aqui algumas variaveis que criei para
// poder fazer o quadrado com 5 de largura e 5 da altura.
let divPai = document.querySelector("#pixel-board")
let divFilho1 = document.createElement("div");
let divFilho2 = document.createElement("div");
let divFilho3 = document.createElement("div");
let divFilho4 = document.createElement("div");
let divFilho5 = document.createElement("div");
divPai.appendChild(divFilho1) && divPai.appendChild(divFilho2) && divPai.appendChild(divFilho3) && divPai.appendChild(divFilho4) && divPai.appendChild(divFilho5);



function coresDasPaletas() {
    let cor1 = document.getElementById('cor1');
    let cor2 = document.getElementById('cor2');
    let cor3 = document.getElementById('cor3');
    let cor4 = document.getElementById('cor4');

    cor1.style.backgroundColor = 'black';
    cor2.style.backgroundColor = '#5900F5';
    cor3.style.backgroundColor = '#00E9F0';
    cor4.style.backgroundColor = '#FAC114';
}
coresDasPaletas();




function criandoQuadradoDivs() {
    let arrayDeDivs = [divFilho1, divFilho2, divFilho3, divFilho4, divFilho5];

    for (let index = 0; index < arrayDeDivs.length; index += 1) {
        arrayDeDivs[index].classList.add('pixel');
    }
    for (let index = 1; index <= 20; index += 1) {
        divPai.innerHTML += '<div class="pixel"></div>';
    }

    // let corInicialPixels = document.getElementsByClassName('pixel')
    
}
criandoQuadradoDivs();
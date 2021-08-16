// aqui algumas variaveis que criei para
// poder fazer o quadrado com 5 de largura e 5 da altura.
let divPai = document.querySelector("#pixel-board")
let divFilho1 = document.createElement("div");
let divFilho2 = document.createElement("div");
let divFilho3 = document.createElement("div");
let divFilho4 = document.createElement("div");
let divFilho5 = document.createElement("div");
divPai.appendChild(divFilho1) && divPai.appendChild(divFilho2) && divPai.appendChild(divFilho3) && divPai.appendChild(divFilho4) && divPai.appendChild(divFilho5);
// aqui criei mais variaveis, para facilitar 
// o uso delas em qualquer funçao
let cor1 = document.getElementById('cor1');
let cor2 = document.getElementById('cor2');
let cor3 = document.getElementById('cor3');
let cor4 = document.getElementById('cor4');

let arrayDeDivs = [divFilho1, divFilho2, divFilho3, divFilho4, divFilho5];

function coresDasPaletas() {
    cor1.style.backgroundColor = 'black';
    cor2.style.backgroundColor = '#5900F5';
    cor3.style.backgroundColor = '#00E9F0';
    cor4.style.backgroundColor = '#FAC114';
}
coresDasPaletas();

function criandoQuadradoDivs() {

    for (let index = 0; index < arrayDeDivs.length; index += 1) {
        arrayDeDivs[index].classList.add('pixel');
    }
    for (let index = 1; index <= 20; index += 1) {
        divPai.innerHTML += '<div class="pixel"></div>';
    }    
}
criandoQuadradoDivs();

function criandoClasseSelected() {
    let minhaClasseSelected = document.getElementById('cor1')
    minhaClasseSelected.classList.add('selected')
}
criandoClasseSelected();


function clicandoParaSelecionar2() {
    cor2.classList.add('selected')
    cor1.classList.remove('selected')
    cor3.classList.remove('selected')
    cor4.classList.remove('selected')
}
cor2.addEventListener('click', clicandoParaSelecionar2)


function clicandoParaSelecionar3() {
    cor3.classList.add('selected')
    cor1.classList.remove('selected')
    cor2.classList.remove('selected')
    cor4.classList.remove('selected')
}
cor3.addEventListener('click', clicandoParaSelecionar3);


function clicandoParaSelecionar4() {
    cor4.classList.add('selected')
    cor1.classList.remove('selected')
    cor2.classList.remove('selected')
    cor3.classList.remove('selected')
}
cor4.addEventListener('click', clicandoParaSelecionar4);


function clicandoParaSelecionar1() {
    cor1.classList.add('selected')
    cor2.classList.remove('selected')
    cor3.classList.remove('selected')
    cor4.classList.remove('selected')
}
cor1.addEventListener('click', clicandoParaSelecionar1);




const pixels = document.getElementsByClassName('pixel')
for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener("click", pintandoPixels);
}
// esse .target é para descobrir o alvo,
// sem ele nada acontece porque precisamos saber onde
// está o objeto para o tipo do evento, colocando o
// .target
function pintandoPixels(objeto) {
    objeto.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

// for (let index = 0; index < pixels.length; index += 1) {
	//   botao[index].addEventListener('click', criandoBotao)
	// }
const botao = document.querySelector('#clear-board');
botao.addEventListener('click', apagandoCores);

function apagandoCores() {
	for (let index = 0; index < pixels.length; index += 1) {
		// if (pixels[index].style.backgroundColor === 'white') {
		// 	console.log('Hello mundo')
		// }
		// para pegar uma cor específica
		pixels[index].style.backgroundColor = 'white';
		
	}
}
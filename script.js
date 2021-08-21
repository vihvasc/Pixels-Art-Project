// para poder autera a cor no html
let primeiraCor = document.querySelector('.primeira-cor');
let segundaCor = document.querySelector('.segunda-cor');
let terceiraCor = document.querySelector('.terceira-cor');
let quartaCor = document.querySelector('.quarta-cor');


// criar cor com numero RGB
function coresAleatorias() {
	primeiraCor.style.backgroundColor = `rgb(${corAleatoria(0)} , ${corAleatoria(0)} , ${corAleatoria(0)})`;
	segundaCor.style.backgroundColor = `rgb(${corAleatoria(255)} , ${corAleatoria(255)} , ${corAleatoria(255)})`;
	terceiraCor.style.backgroundColor = `rgb(${corAleatoria(255)} , ${corAleatoria(255)} , ${corAleatoria(255)})`;
	quartaCor.style.backgroundColor = `rgb(${corAleatoria(255)} , ${corAleatoria(255)} , ${corAleatoria(255)})`;
}
// gerar numeros aleartorios 
function corAleatoria(number) {
return Math.floor(Math.random() * number);
}

window.onload = coresAleatorias;

// função para definir tamanho do quadrado
function criandoLinhasColuna() {
	let input = document.getElementById('board-size');
	let pixelBoard = document.getElementById('pixel-board');
	
	for (let index = 0; index < input.value; index ++) {
		let tr = document.createElement('div');
		tr.className = 'tr';
		pixelBoard.appendChild(tr);
	
		for (let count = 0; count < input.value; count ++) {
			let td = document.createElement('div');
			td.className = 'pixel td';
			tr.appendChild(td);
		}
	}
}
// funçao condicoes de limite do tamanho da tabela
function dimencionarTabela() {
	deletePixels();
	
	let input = document.getElementById('board-size');
	
	if (input.value === '') {
		alert('Board inválido!');
	} else if (input.value < 5) {
		input.value = 5;
	} else if (input.value > 50) {
		input.value = 50;
	}
	
	criandoLinhasColuna();
}

// acionar o botao e criar tabela por meio das funcoes dimencionarTabela e criandoLinhasColuna
let gerarTabela = document.getElementById('generate-board');

gerarTabela.addEventListener('click', dimencionarTabela);

// funçao remove o quadro de pixel inicial
function deletePixels() {
	let pixelBoard = document.getElementById('pixel-board');

	while (pixelBoard.firstChild) {
	pixelBoard.removeChild(pixelBoard.firstChild);
	}
}

// função para alterar a cor de seleçao da paleta paleta

let listaDeCor = document.querySelectorAll('.color');

function changeSelected(event) {
let selecionarCor = document.querySelector('.selected');

selecionarCor.classList.remove('selected');
event.target.classList.add('selected');
}

for (let index = 0; index < listaDeCor.length; index += 1) {
listaDeCor[index].addEventListener('click', changeSelected);
}


// função para colorir pixels de acordo com a cor da paleta escolhida

let selecionaPixel = document.querySelectorAll('.pixel');

function colorir(event) {
	
let selecionarCor = document.querySelector('.selected');

event.target.style.backgroundColor = selecionarCor.style.backgroundColor;
}

for (let index = 0; index < selecionaPixel.length; index += 1) {
selecionaPixel[index].addEventListener('click', colorir);
}

// funçao botao limpar o quadro de pixel faxendo fcar branco de novo
const botaoLimpar = document.getElementById('clear-board');

botaoLimpar.addEventListener('click', function () {
for (let list = 0; list < selecionaPixel.length; list += 1) {
selecionaPixel[list].style.backgroundColor = 'white';
}
});



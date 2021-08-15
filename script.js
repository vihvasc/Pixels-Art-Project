// para poder autera a cor no html
let segundaCor = document.querySelector('.segunda-cor');
let terceiraCor = document.querySelector('.terceira-cor');
let quartaCor = document.querySelector('.quarta-cor');

// criar cor com numero RGB
function coresAleatorias() {
segundaCor.style.backgroundColor = `rgb(${corAleatoria(255)} , ${corAleatoria(255)} , ${corAleatoria(255)})`;
terceiraCor.style.backgroundColor = `rgb(${corAleatoria(255)} , ${corAleatoria(255)} , ${corAleatoria(255)})`;
quartaCor.style.backgroundColor = `rgb(${corAleatoria(255)} , ${corAleatoria(255)} , ${corAleatoria(255)})`;
}
// gerar numeros aleartorios 
function corAleatoria(number) {
return Math.floor(Math.random() * number);
}
// transferir numeros aleatorios para gerar as cores
window.onload = coresAleatorias;

// função para definir tamanho do quadrado
function criandoLinhasColuna() {
	const input = document.getElementById('board-size');
	const pixelBoard = document.getElementById('pixel-board');
	
	for (let index = 0; index < input.value; index ++) {
		const tr = document.createElement('div');
		tr.className = 'tr';
		pixelBoard.appendChild(tr);
	
		for (let count = 0; count < input.value; count ++) {
			const td = document.createElement('div');
			td.className = 'pixel td';
			tr.appendChild(td);
		}
	}
}
	
function createTable() {
	deletePixels();
	
	const input = document.getElementById('board-size');
	
	if (input.value === '') {
		alert('Board inválido!');
	} else if (input.value < 5) {
		input.value = 5;
	} else if (input.value > 50) {
		input.value = 50;
	}
	
	criandoLinhasColuna();
}

	const generateTable = document.getElementById('generate-board');

	generateTable.addEventListener('click', createTable);

	// função para colorir pixels de acordo com a cor da paleta escolhida
	const selectPixel = document.querySelectorAll('.pixel');

function changeColor(event) {
	const colorSelected = document.querySelector('.selected');

	event.target.style.backgroundColor = colorSelected.style.backgroundColor;
}
	
	for (let index = 0; index < selectPixel.length; index += 1) {
	selectPixel[index].addEventListener('click', changeColor);
	}

let container = document.querySelector('.container');
let buttonBlak = document.createElement('button');
let buttonRed = document.createElement('button');
let buttonBlue = document.createElement('button');
let buttonGreen = document.createElement('button');
let buttonContainer = document.querySelector('butons');

function creatDivs(coluna, linha) {
	for(let i = 0;i < (coluna * linha); i++) {
		let div = document.createElement('div');
		div.style.border = '1px solid black';
		container.style.gridTemplateColumns = `repeat(${coluna}, 1fr)`;
		container.style.gridTemplateRows = `repeat(${linha}, 1fr)`;
		container.appendChild(div).classList.add('box');
	}
	}
	creatDivs(16,16)
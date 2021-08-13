//Desafio 2
function fourDistinctColorPalette (quantCores) {
  let div = document.querySelector('#color-palette');

  for (let i = 1; i <= quantCores; i += 1) {
    let palette = document.createElement('div');
		
    palette.className = 'color';
    palette.style.backgroundColor = colorRepeat();
    palette.style.border = '1px solid black';
    div.appendChild(palette);		
  }
}

fourDistinctColorPalette(4);

//Gera cor aleatória para o Desafio 2
function colorGenerator () {
  let req1 = (Math.random() * 256) -1;
  let req2 = (Math.random() * 256) -1;
  let req3 = (Math.random() * 256) -1;

  if(req1 === 255 && req2 === 255 && req3 === 255) {
    return colorGenerator();
  }

  let randomColor = 'rgb(' + req1 + ',' + req2 + ',' + req3 + ')';
  return randomColor;
}

//Verifica se a função acima não tem cor repetida
function colorRepeat () {
  let cores = document.querySelectorAll('.color');
  let newColor = colorGenerator();

  if (cores.length === 0) {
    return newColor;
  }
  for (let i = 0; i < cores.length; i += 1) {
    if (newColor === cores[i]) {
      colorGenerator();
    }
    return newColor;
  }
}

//Desafio 3
function firstColorBlack () {
	let cores = document.querySelectorAll('.color');
	let tornaPreto = cores[0];

	tornaPreto.style.backgroundColor = 'black';
}

firstColorBlack();

//Desafio 4
function quadroDePixels (largura, comprimento) {
	let quadroPixel = document.querySelector('#pixel-board');

	for (let index = 1; index <= comprimento; index += 1) {
		let linhaPixel = document.createElement('div');
		let contador = 1;
		linhaPixel.className = 'newDiv';

	  for (let i = 1; i <= largura; i += 1) {
		  let pixelL = document.createElement('div');

		  pixelL.className = 'pixel';
			pixelL.style.backgroundColor = 'white';
		  linhaPixel.appendChild(pixelL);
	  }

		contador += 1;
		quadroPixel.appendChild(linhaPixel);
  }
}

quadroDePixels(5, 5);

//Desafio 6
function firstPick () {
	let standardColor = document.querySelector('.color');

	standardColor.classList.add('selected');
}

firstPick();

//Desafio 7
function selectColor () {
	let colorList = document.querySelectorAll('.color');

	for (let z = 0; z <colorList.length; z += 1) {
		let button = colorList[z];

	  button.addEventListener('click', function () {
		  for (let i = 0; i < colorList.length; i += 1) {
			  colorList[i].classList.remove('selected');
		  }
			button.classList.add('selected');
	  });

  }
	console.log(colorList);
}

selectColor();

